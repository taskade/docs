---
description: >-
  Three Taskade MCP surfaces, one decision. Pick the right one by what you want
  to do — hosted Taskade MCP, Workspace MCP for task writes, or MCP Connectors.
---

# Which Taskade MCP do I want?

Taskade speaks MCP (Model Context Protocol) through **three** surfaces. Pick by what you want to do — the transport and auth details are secondary.

| I want to… | Use | Where / auth |
|---|---|---|
| Have Claude **read & write my tasks** — create, complete, assign, set dates and fields | **[Workspace MCP](workspace-mcp.md)** (`@taskade/mcp-server`) | Local stdio · personal token (`https://www.taskade.com/settings/api`) · any paid plan |
| **Orchestrate my workspace from my IDE** — create projects, manage & prompt agents, edit my app's code | **[Hosted Taskade MCP](genesis-app-mcp.md)** | Hosted · OAuth 2.0 (`https://www.taskade.com/mcp`) · any paid plan |
| Let my agents **reach Slack, Shopify, Gmail** & other tools | **[MCP Connectors](../genesis-living-system-builder/genesis/mcp-connectors.md)** | Hosted, in-product |

> **Heads up:** The hosted Taskade MCP now creates projects, manages and prompts agents, and edits your Genesis app's code — but it has **no task-level write tools** (create/complete/assign/date a task) and no media upload. For task-level writes, use **[Workspace MCP](workspace-mcp.md)**.
