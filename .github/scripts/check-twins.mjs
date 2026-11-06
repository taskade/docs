#!/usr/bin/env node
// Twin page drift check for docs.taskade.com.
//
// Many pages in this repository have a "twin" on taskade.com: a developer page
// at taskade.com/docs or a help article at taskade.com/learn. The last line of
// such a page names the twin:
//
//   _This page is also published at [taskade.com/docs/x/y](https://www.taskade.com/docs/x/y)._
//   _Step-by-step guide on taskade.com/learn: [Title](https://www.taskade.com/learn/x/y)._
//   _Step-by-step guides on taskade.com/learn: [A](https://...), [B](https://...)._
//
// taskade.com serves a Markdown copy of each twin at its URL plus ".md".
// .github/twins.lock.json records the SHA-256 of each copy at the time a person
// last checked the GitBook page against it.
//
// Usage:
//   node .github/scripts/check-twins.mjs --offline   footers and lock agree (no network)
//   node .github/scripts/check-twins.mjs             fetch each twin, report the ones that changed
//   node .github/scripts/check-twins.mjs --update    fetch each twin, rewrite the lock
//   add --report <file> to write the Markdown report to a file
//
// Exit codes: 0 no problem, 1 drift or a lock problem, 2 a twin could not be fetched.

import { createHash } from 'node:crypto';
import { readFileSync, readdirSync, writeFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const ROOT = new URL('../..', import.meta.url).pathname;
const LOCK = join(ROOT, '.github/twins.lock.json');
const SKIP_DIRS = new Set(['.git', '.gitbook', '.github', 'node_modules']);
const DATED_PAGE = /^(changelog|updates-and-timeline)\/.+\/(?!README\.md$)[^/]+\.md$/;
const TWIN_URL = 'https://www\\.taskade\\.com/(?:docs|learn)/[a-z0-9][a-z0-9/_-]*[a-z0-9]';
const LINK = `\\[[^\\]\\n]+\\]\\((${TWIN_URL})\\)`;
const FOOTER_START = /^_(This page is also published at |Step-by-step guides? on taskade\.com\/learn: )/;
const FOOTER_DOCS = new RegExp(`^_This page is also published at ${LINK}\\._$`);
const FOOTER_LEARN_ONE = new RegExp(`^_Step-by-step guide on taskade\\.com/learn: ${LINK}\\._$`);
const FOOTER_LEARN_MANY = new RegExp(`^_Step-by-step guides on taskade\\.com/learn: ${LINK}(?:, ${LINK}){1,2}\\._$`);
const USER_AGENT = 'taskade-docs-twin-check (+https://github.com/taskade/docs)';

const args = process.argv.slice(2);
const mode = args.includes('--update') ? 'update' : args.includes('--offline') ? 'offline' : 'check';
const reportIndex = args.indexOf('--report');
const reportFile = reportIndex === -1 ? null : args[reportIndex + 1];

function listPages(dir = ROOT) {
  const pages = [];
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const full = join(dir, name);
    if (statSync(full).isDirectory()) {
      pages.push(...listPages(full));
    } else if (name.endsWith('.md')) {
      const path = relative(ROOT, full);
      if (!DATED_PAGE.test(path)) pages.push(path);
    }
  }
  return pages.sort();
}

// Returns { twins: Map<url, page[]>, errors: string[] }.
function readFooters() {
  const twins = new Map();
  const errors = [];
  for (const page of listPages()) {
    const lines = readFileSync(join(ROOT, page), 'utf8').trimEnd().split('\n');
    const footers = lines.map((line, i) => [line.trim(), i]).filter(([line]) => FOOTER_START.test(line));
    if (footers.length === 0) continue;
    if (footers.length > 1) errors.push(`${page}: more than one twin footer`);
    const [line, index] = footers[footers.length - 1];
    if (index !== lines.length - 1) errors.push(`${page}:${index + 1}: the twin footer must be the last line`);
    if (!(FOOTER_DOCS.test(line) || FOOTER_LEARN_ONE.test(line) || FOOTER_LEARN_MANY.test(line))) {
      errors.push(`${page}:${index + 1}: twin footer does not match the format in .github/scripts/check-twins.mjs`);
      continue;
    }
    for (const match of line.matchAll(new RegExp(LINK, 'g'))) {
      const url = match[1];
      if (!twins.has(url)) twins.set(url, []);
      twins.get(url).push(page);
    }
  }
  return { twins, errors };
}

function readLock() {
  try {
    return JSON.parse(readFileSync(LOCK, 'utf8'));
  } catch {
    return {};
  }
}

function digest(text) {
  const normalized = text.replace(/\r\n/g, '\n').replace(/[ \t]+$/gm, '').trimEnd();
  return createHash('sha256').update(normalized).digest('hex');
}

async function fetchCopy(url) {
  let last = '';
  for (let attempt = 1; attempt <= 3; attempt += 1) {
    try {
      const res = await fetch(`${url}.md`, { headers: { 'user-agent': USER_AGENT }, redirect: 'follow' });
      if (res.status === 404) return { status: 404 };
      if (res.ok) return { status: 200, sha256: digest(await res.text()) };
      last = `HTTP ${res.status}`;
    } catch (error) {
      last = String(error?.cause?.code ?? error?.message ?? error);
    }
    await new Promise((resolve) => setTimeout(resolve, 1500 * attempt));
  }
  return { status: 0, error: last };
}

async function fetchAll(urls) {
  const results = new Map();
  const queue = [...urls];
  async function worker() {
    while (queue.length > 0) {
      const url = queue.shift();
      results.set(url, await fetchCopy(url));
    }
  }
  await Promise.all(Array.from({ length: 6 }, worker));
  return results;
}

function pageLinks(pages) {
  return pages.map((page) => `[\`${page}\`](https://github.com/taskade/docs/blob/main/${page})`).join(', ');
}

function emit(report) {
  console.log(report);
  if (reportFile) writeFileSync(reportFile, `${report}\n`);
  if (process.env.GITHUB_STEP_SUMMARY) writeFileSync(process.env.GITHUB_STEP_SUMMARY, `${report}\n`, { flag: 'a' });
}

const { twins, errors } = readFooters();
const lock = readLock();
const urls = [...twins.keys()].sort();

if (mode === 'offline') {
  for (const url of urls) {
    if (!lock[url]) errors.push(`${url}: in a footer but not in .github/twins.lock.json (run with --update)`);
  }
  for (const url of Object.keys(lock)) {
    if (!twins.has(url)) errors.push(`${url}: in .github/twins.lock.json but in no footer (run with --update)`);
  }
  if (errors.length > 0) {
    emit(`### Twin footers\n\n${errors.map((e) => `- ${e}`).join('\n')}`);
    process.exit(1);
  }
  console.log(`twin footers ok: ${urls.length} twins on ${new Set([...twins.values()].flat()).size} pages`);
  process.exit(0);
}

if (errors.length > 0) {
  emit(`### Twin footers\n\n${errors.map((e) => `- ${e}`).join('\n')}`);
  process.exit(1);
}

const results = await fetchAll(urls);
const unreachable = urls.filter((url) => results.get(url).status === 0);

if (mode === 'update') {
  if (unreachable.length > 0) {
    console.error(`cannot update the lock, ${unreachable.length} twins unreachable:\n${unreachable.join('\n')}`);
    process.exit(2);
  }
  const next = {};
  for (const url of urls) {
    const result = results.get(url);
    next[url] = { sha256: result.status === 200 ? result.sha256 : 'missing', pages: twins.get(url) };
  }
  writeFileSync(LOCK, `${JSON.stringify(next, null, 2)}\n`);
  const missing = urls.filter((url) => results.get(url).status === 404);
  console.log(`wrote ${relative(ROOT, LOCK)}: ${urls.length} twins${missing.length ? `, ${missing.length} return 404:\n${missing.join('\n')}` : ''}`);
  process.exit(missing.length > 0 ? 1 : 0);
}

const changed = [];
const gone = [];
const unlocked = [];
for (const url of urls) {
  const result = results.get(url);
  if (result.status === 404) gone.push(url);
  else if (result.status === 200 && !lock[url]) unlocked.push(url);
  else if (result.status === 200 && lock[url].sha256 !== result.sha256) changed.push(url);
}

const sections = [];
if (changed.length > 0) {
  sections.push(
    `### Twin changed since the last review (${changed.length})\n\n| taskade.com page | GitBook page |\n| --- | --- |\n` +
      changed.map((url) => `| [${url.replace('https://www.', '')}](${url}) | ${pageLinks(twins.get(url))} |`).join('\n'),
  );
}
if (gone.length > 0) {
  sections.push(
    `### Twin returns 404 (${gone.length})\n\n` +
      gone.map((url) => `- ${url}, named on ${pageLinks(twins.get(url))}`).join('\n'),
  );
}
if (unlocked.length > 0) sections.push(`### Twin not in the lock (${unlocked.length})\n\n${unlocked.map((u) => `- ${u}`).join('\n')}`);
if (unreachable.length > 0) {
  sections.push(
    `### Could not fetch (${unreachable.length})\n\n` +
      unreachable.map((url) => `- ${url}: ${results.get(url).error}`).join('\n'),
  );
}

if (sections.length === 0) {
  console.log(`no drift: ${urls.length} twins match .github/twins.lock.json`);
  process.exit(0);
}

emit(
  `## Twin page drift\n\n` +
    `${urls.length} twins checked. For each changed twin: read the taskade.com page (add \`.md\` to its URL for the Markdown copy), ` +
    `bring the GitBook page up to date, then run \`node .github/scripts/check-twins.mjs --update\` and commit \`.github/twins.lock.json\`.\n\n` +
    sections.join('\n\n'),
);
process.exit(changed.length + gone.length + unlocked.length > 0 ? 1 : 2);
