#!/usr/bin/env node
// Checks the docs for product facts that are known to be wrong or retired.
//
//   node .github/scripts/check-facts.mjs                 # every page
//   node .github/scripts/check-facts.mjs --base origin/main  # only pages changed since base
//   node .github/scripts/check-facts.mjs --self-test     # prove every rule can fail
//
// Dated changelog pages are history and are not checked. Their index pages are checked.
// Add `facts-ok` to a line to allow a legitimate mention.
import { execFileSync } from 'node:child_process';
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const RULES = [
  {
    id: 'project-view-count',
    fix: 'Write "multiple project views", or list the views. Do not count them.',
    patterns: [
      /\b(\d+|five|six|seven|eight|nine|ten)\+?\s+(different |unique |project |powerful |flexible )?views\b/i,
      /\b\d+\s+completely different ways\b/i,
      /\bviewable\s+(\d+|five|six|seven|eight|nine|ten)\s+ways\b/i,
    ],
  },
  {
    id: 'tool-count',
    fix: 'Do not count built-in or MCP tools. Describe what the tools do. MCP clients list the current tools.',
    patterns: [/\b\d+\+?\s+(built-in|native|MCP|agent)\s+tools\b/i, /\*\*\d+\+?\s+tools\*\*/i],
  },
  {
    id: 'model-count',
    fix: 'Write "frontier models from top AI labs". Do not count models.',
    patterns: [/\b\d+\+\s+(frontier |AI |LLM )?models\b/i],
  },
  {
    id: 'sso-gate',
    fix: 'SSO/SAML is on Business, Max, and Enterprise. Only SCIM is Enterprise-only.',
    patterns: [
      /SSO\s*\/\s*SAML\s*\(Enterprise\)/i,
      /\bEnterprise SSO\b/,
      /\b(SSO|SAML)\b(?![^.\n|]*\bSCIM\b)[^.\n|]{0,40}\bEnterprise[- ]only\b/i,
      /Single Sign-On[^.\n]{0,20}\(available on Enterprise plans\)/i,
    ],
  },
  {
    id: 'free-credit-grant',
    fix: 'A Free workspace starts with 0 AI credits. It earns credits with referrals and invites.',
    patterns: [/welcome credits/i, /credits when you verify/i, /baseline allocation of AI credits/i],
  },
  {
    id: 'custom-domain-gate',
    fix: 'Custom domains are on Pro (up to 10 per workspace) and Business and up (unlimited).',
    patterns: [
      /custom domains? (are )?available on the \*\*Business/i,
      /\*\*Custom domain\*\*[^\n]*\|\s*Business\+\s*\|/i,
    ],
  },
  {
    id: 'multi-agent-gate',
    fix: 'Multi-agent teams are on Pro and up.',
    patterns: [/Multi-Agent Teams[^.\n]{0,40}Business\+/i],
  },
  {
    id: 'legal-name',
    fix: 'The company is TASKCADE INC. The brand is Taskade.',
    patterns: [/\bTaskade, Inc\b/, /\bTaskade Inc\./],
  },
  {
    id: 'review-credits',
    fix: 'Do not mention credits or rewards for reviews.',
    patterns: [/\breviews?\b[^.\n]{0,30}\b(earn|credits|rewards?)\b/i],
  },
  {
    id: 'agent-mcp-connectors',
    fix: 'AI agents do not connect to outside MCP servers. Automations call any MCP server with the MCP Client step.',
    patterns: [
      /\b\d+\+?\s+(hosted )?MCP integrations\b/i,
      /Outbound to \d+\+? services/i,
      /\b\d+\+?\s+external services using (the )?(MCP|Model Context Protocol)\b/i,
    ],
  },
  {
    id: 'private-repo-link',
    fix: 'github.com/taskade/sdk is not public. Link the hosted MCP server or the API reference.',
    patterns: [/github\.com\/taskade\/sdk\b/],
  },
];

const SKIP_DIRS = new Set(['.git', '.gitbook', 'node_modules']);
// Dated release notes: changelog/<year>/... and updates-and-timeline/changelog-<year>/<month>/<day>.md.
// Index pages (README.md) and undated pages such as upcoming-changes.md are checked.
const DATED_PAGE = /^(changelog|updates-and-timeline)\/.+\/(?!README\.md$)[^/]+\.md$/;

function isChecked(path) {
  if (!(path.endsWith('.md') || path === 'llms.txt')) return false;
  if (path.startsWith('.github/') || DATED_PAGE.test(path)) return false;
  return !path.split('/').some((part) => SKIP_DIRS.has(part));
}

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name) || name === '.github') continue;
    const full = dir === '.' ? name : join(dir, name);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (isChecked(full)) out.push(full);
  }
  return out;
}

function changedFiles(base) {
  const out = execFileSync('git', ['diff', '--name-only', '--diff-filter=ACMR', `${base}...HEAD`], {
    encoding: 'utf8',
  });
  return out.split('\n').filter((p) => p && isChecked(p) && existsSync(p));
}

function scan(text) {
  const hits = [];
  text.split('\n').forEach((line, i) => {
    if (line.includes('facts-ok')) return;
    for (const rule of RULES) {
      for (const re of rule.patterns) {
        const m = line.match(re);
        if (m) {
          hits.push({ line: i + 1, rule, match: m[0] });
          break;
        }
      }
    }
  });
  return hits;
}

function selfTest() {
  const bad = [
    'Every project supports 9 different views.',
    'Projects are viewable 8 ways.',
    'The server exposes **18 tools** today.',
    'Agents run on 15+ frontier models.',
    '### SSO / SAML (Enterprise)',
    'SAML is an Enterprise-only feature.',
    'Your welcome credits cover one build.',
    'Custom domains are available on the **Business plan and above**.',
    '| **Custom domain** | Point your domain | Business+ |',
    'Multi-Agent Teams are available on Business+ plans.',
    'Taskade, Inc. owns the brand.',
    'Leave reviews to earn free credits!',
    'Taskade includes **31 hosted MCP integrations**.',
    'See https://github.com/taskade/sdk for the client.',
  ];
  const good = [
    'Taskade offers multiple project views.',
    'Connect 100+ integrations.',
    'SSO/SAML is on Business and up. SCIM is Enterprise-only.',
    'SSO/SAML is on Business and up, SCIM is on Enterprise only.',
    'SAML setup is Enterprise-only.'.replace('Enterprise-only', 'on Business and up'),
    'Custom domains are on Pro and up.',
    'Multi-Agent Teams are available on Pro plans and up.',
    'TASKCADE INC.',
    'Every project supports 9 different views. facts-ok',
  ];
  let ok = true;
  const fired = new Set();
  for (const s of bad) {
    const h = scan(s);
    if (h.length === 0) {
      console.error(`self-test: no rule fired for: ${s}`);
      ok = false;
    }
    h.forEach((x) => fired.add(x.rule.id));
  }
  for (const s of good) {
    const h = scan(s);
    if (h.length > 0) {
      console.error(`self-test: rule ${h[0].rule.id} fired on a correct line: ${s}`);
      ok = false;
    }
  }
  for (const rule of RULES) {
    if (!fired.has(rule.id)) {
      console.error(`self-test: rule ${rule.id} has no failing sample`);
      ok = false;
    }
  }
  console.log(ok ? `self-test passed (${RULES.length} rules)` : 'self-test failed');
  process.exit(ok ? 0 : 1);
}

const args = process.argv.slice(2);
if (args.includes('--self-test')) selfTest();
const baseIdx = args.indexOf('--base');
const files = baseIdx >= 0 ? changedFiles(args[baseIdx + 1]) : walk('.');

let total = 0;
for (const file of files) {
  for (const hit of scan(readFileSync(file, 'utf8'))) {
    total += 1;
    console.log(`${file}:${hit.line}  [${hit.rule.id}] "${hit.match}"  ${hit.rule.fix}`);
    if (process.env.GITHUB_ACTIONS) {
      console.log(`::error file=${file},line=${hit.line}::[${hit.rule.id}] ${hit.rule.fix}`);
    }
  }
}
console.log(`${files.length} files checked, ${total} problems`);
process.exit(total > 0 ? 1 : 0);
