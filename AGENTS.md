# AGENTS.md

Instructions for AI coding agents that read or change this repository.

## What this repository is

This repository is the source of [docs.taskade.com](https://docs.taskade.com). GitBook syncs it from the `main` branch.

* `SUMMARY.md` is the navigation. A page that is not in `SUMMARY.md` does not appear on the site.
* `README.md` is the home page of the site and of this repository.
* `.gitbook.yaml` holds the redirects for renamed pages.
* Images live in `.gitbook/assets/`.

## If you want to use Taskade, not edit these docs

Read [`https://www.taskade.com/SKILL.md`](https://www.taskade.com/SKILL.md), then connect to the hosted MCP server at `https://www.taskade.com/mcp`. The full guide is [getting-started/ai-agents.md](getting-started/ai-agents.md).

## Rules for a change

* Keep each page URL. Do not rename or move a file unless you add a redirect to `.gitbook.yaml`.
* Use relative links between pages, for example `../automation/README.md`.
* Use GitBook blocks for callouts: `{% hint style="info" %}` … `{% endhint %}`.
* The pages under `apis-living-system-development/` and `genesis-living-system-builder/genesis/mcp-connectors.md` are also published on [taskade.com/docs](https://www.taskade.com/docs). The footer of each guide page names its twin, and a hint on each REST API v1 page links its generated reference. Change both, or open an issue.
* Never commit a token, a password, an internal URL, or a customer name. Use placeholders such as `<paste-your-token-here>`.

## Product facts

Run `node .github/scripts/check-facts.mjs` (when present) before you open a pull request. It fails on known-wrong facts. Pull requests also run it in CI.

* A plan gate is exact. Check it against [taskade.com/pricing](https://www.taskade.com/pricing). For example, SSO/SAML is on Business and up, SCIM is on Enterprise only, and custom domains are on Pro and up.
* A capability count is never published. Write "multiple project views" and "built-in tools", not a number.
* Do not name a specific AI model as the default. Write "frontier models from top AI labs". **Auto** is the default model.
* Write "Taskade Genesis" and "Taskade EVE" on first mention.
* Hosted MCP is inbound: an AI client works in Taskade. Outbound MCP runs in an automation with the MCP Client step. AI agents do not call outside MCP servers on their own.
