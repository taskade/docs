---
description: >-
  Once your Genesis app is live, run its day-to-day data by talking to Claude —
  no IDs, no API code.
---

# Run your live app by talking to Claude

You built your business app with Genesis. Now operate it in plain English: read your records, update fields, mark work done, and flag what needs attention — by talking to Claude (or any AI client) through **[Workspace MCP](workspace-mcp.md)**.

## What you'll need

- **[Workspace MCP](workspace-mcp.md)** connected to your AI client (one-time setup).
- Your Taskade personal token from [https://www.taskade.com/settings/api](https://www.taskade.com/settings/api).
- The link to your Genesis app (the project it's built on).

## 1. Point your assistant at your app

You don't need to copy any ID out of a URL. Paste your app's link and ask:

> "Here's my app: <paste link>. Find this project and show me what's inside."

Your assistant resolves the project for you and lists its contents.

## 2. Read your business

> "Show me every overdue job."
>
> "What's the status of the Johnson project?"
>
> "List this week's new client intakes."

## 3. Update records and fields

> "Mark the Johnson job complete and set the next service date to next Friday."
>
> "Log this invoice against the Acme account."
>
> "Add a 'priority' field to overdue tasks and set it to High."

## 4. Let it keep watch

> "Flag anything overdue and tell me what needs my attention today."

## What this changes — and what it doesn't

This guide uses **Workspace MCP**, which reads and writes your app's **content** — the projects, tasks, fields, and records your business runs on.

{% hint style="info" %}
It does **not** edit your app's deployed design or layout. To change your app's pages, components, or styles, use the Genesis builder or **[Genesis App MCP](genesis-app-mcp.md)** — which edits your app's *code* and keeps content read-only.
{% endhint %}

## Next steps

- New to MCP? Start with **[Workspace MCP](workspace-mcp.md)**.
- Want your agents to reach Slack, Shopify, or Gmail? See **[MCP Connectors](../genesis-living-system-builder/genesis/mcp-connectors.md)**.
