---
description: >-
  Three Taskade MCP surfaces, one decision. Pick the right one by what you want
  to do.
---

# Which Taskade MCP do I want?

Taskade speaks MCP (Model Context Protocol) through **three** surfaces. Pick by what you want to do — the transport and auth details are secondary.

| I want to… | Use | Where / auth |
|---|---|---|
| Have Claude **read & change my projects, tasks, and agents** | **[Workspace MCP](workspace-mcp.md)** (`@taskade/mcp-server`) | Local stdio · personal token (`https://www.taskade.com/settings/api`) · most plans |
| **Edit my published app's design & code** from my IDE | **[Genesis App MCP](genesis-app-mcp.md)** | Hosted · OAuth 2.0 (`https://www.taskade.com/mcp`) · Business+ |
| Let my agents **reach Slack, Shopify, Gmail** & other tools | **[MCP Connectors](../genesis-living-system-builder/genesis/mcp-connectors.md)** | Hosted, in-product |

> **Heads up:** Genesis App MCP edits your app's *code* — your projects, tasks, and agents stay **read-only** there. To read and change that content, use **[Workspace MCP](workspace-mcp.md)**.
