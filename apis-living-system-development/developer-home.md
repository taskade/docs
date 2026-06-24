---
description: Everything you need to build on Taskade — REST API, MCP Server, SDK, and more.
---

# Developer Platform

You want to integrate Taskade into your app, automate your workflows, or connect your AI tools. This page gets you started fast. Many teams build their app visually with [Taskade Genesis](https://www.taskade.com/create) first, then extend it with the API.

## Integration Surface at a Glance

```mermaid
graph TB
    subgraph "Your Application"
        APP[Your App / Script / Agent]
    end

    subgraph "Integration Surface"
        API1[REST API v1<br/>RESTful + OAuth 2.0]
        API2[Action API v2<br/>RPC + OAuth 2.0]
        MCP_IN["@taskade/mcp-server<br/>Inbound MCP, npm"]
        MCP_HOST[Hosted MCP<br/>taskade.com/mcp]
        MCP_OUT[MCP Connectors<br/>Outbound to 31+ services]
        WEBHOOK[Webhooks<br/>Automation triggers]
    end

    subgraph "Taskade Workspace"
        PROJECTS[Projects & Tasks]
        AGENTS[AI Agents<br/>with LTM]
        AUTOMATIONS[Automations]
        MEDIA[Media & Bundles]
        APP_SRC[Genesis App Source]
    end

    APP --> API1
    APP --> API2
    APP --> MCP_IN
    APP --> MCP_HOST
    WEBHOOK --> APP

    MCP_IN --> API1
    MCP_HOST --> APP_SRC
    MCP_OUT --> AGENTS

    API1 --> PROJECTS
    API1 --> AGENTS
    API2 --> AGENTS
    API2 --> MEDIA
    API1 --> AUTOMATIONS

    AGENTS -.writes LTM.-> PROJECTS
```

## I Want To...

| I want to... | Use |
| --- | --- |
| Write tasks, manage assignees/dates/fields (full CRUD) | [REST API v1](comprehensive-api-guide/README.md) |
| Prompt agents, manage agents, export/import bundles | [Action API v2](api-v2-reference.md) |
| Hit endpoints from any language | [REST API v1](comprehensive-api-guide/README.md) + [Action API v2](api-v2-reference.md) |
| Expose Taskade data to Claude Desktop, Cursor, or other MCP clients | [Workspace MCP](workspace-mcp.md) + [Advanced](workspace-mcp-advanced.md) |
| Give a Taskade agent third-party capabilities | [MCP Connectors](workspace-mcp-advanced.md#mcp-connectors) |
| Edit Taskade Genesis app source code from your IDE | [Hosted MCP (Genesis App)](genesis-app-mcp.md) |
| Receive real-time events in your app | [Webhooks](webhooks.md) |
| Understand long-term memory | [Long-Term Memory](long-term-memory.md) |
| Build agents that run without prompting | [Autonomous Agents](autonomous-agents.md) |
| Automate workflows without code | [Automations Engine](../genesis-living-system-builder/automation/README.md) |
| Browse community apps and templates | [taskade.com/community](https://www.taskade.com/community) |

## Get Your API Key

You need a **Personal Access Token** to authenticate with every Taskade developer tool — the REST API, MCP Server, and SDK all use it.

1. Go to [taskade.com/settings/api](https://www.taskade.com/settings/api).
2. Click **Create new token** and give it a descriptive name.
3. Copy the token and store it somewhere safe. You will not be able to see it again.

{% hint style="warning" %}
Treat your API token like a password. Never commit it to version control or share it publicly.
{% endhint %}

## Developer Resources

| Resource | Description |
| --- | --- |
| [REST API v1 Reference](comprehensive-api-guide/README.md) | The complete, stable RESTful API — full task CRUD, per-endpoint docs |
| [Action API v2 Reference](api-v2-reference.md) | The newer action-based (RPC) API — agent prompting, bundles, lifecycle |
| [Authentication Guide](developers/authentication.md) | Personal access tokens and OAuth 2.0 (PKCE) flows |
| [Workspace MCP](workspace-mcp.md) | Run `@taskade/mcp-server` to connect Claude Desktop, Cursor, and Claude Code ([source](https://github.com/taskade/mcp)) |
| [Workspace MCP — Advanced](workspace-mcp-advanced.md) | Multi-client setup, troubleshooting, security |
| [Hosted MCP — Genesis App (Beta)](genesis-app-mcp.md) | Edit your Genesis app's source from your IDE via the remote `taskade.com/mcp` server |
| [MCP Connectors](../genesis-living-system-builder/genesis/mcp-connectors.md) | Give Taskade agents 31+ third-party tools (outbound MCP) |
| [Integration Kit (GitHub)](https://github.com/taskade/integrations) | Open-source Zapier and n8n actions & triggers built on the public API — contribute or self-host |
| [Webhooks](webhooks.md) | Trigger automations from external events; call out to any API |
| [Bundles & App Kits](bundles.md) | Import/export full Genesis apps as portable `.tsk` bundles |
| [Long-Term Memory](long-term-memory.md) | Memory-as-Projects architecture — editable, queryable, API-addressable |
| [Autonomous Agents](autonomous-agents.md) | Automations, orchestration, cross-agent invocation patterns |
| [TypeScript SDK (Preview)](sdk-quickstart.md) | Generated client for v2 — not yet on public npm; use the REST API meanwhile |

{% hint style="info" %}
**New to Taskade?** Start with the [Quick Start Guide](../getting-started/README.md) to understand workspaces, projects, and tasks before diving into the API.
{% endhint %}

## Base URLs

Taskade ships **two** public HTTP APIs, both authenticated with the same token:

| API | Base URL | Style | Use it for |
| --- | --- | --- | --- |
| [REST API v1](comprehensive-api-guide/README.md) | `https://www.taskade.com/api/v1` | RESTful (`GET`/`POST`/`PUT`/`DELETE`) | Full task CRUD, assignees, dates, notes, fields |
| [Action API v2](api-v2-reference.md) | `https://www.taskade.com/api/v2` | Action / RPC (`POST /{operation}`) | Prompting agents, agent lifecycle, bundles |

{% hint style="info" %}
**Live OpenAPI specs (source of truth)** — auto-generated from the running API, always current:

* REST API v1 — [interactive docs](https://www.taskade.com/api/documentation/v1) · [openapi.json](https://www.taskade.com/api/documentation/v1/json)
* Action API v2 — [interactive docs](https://www.taskade.com/api/documentation/v2) · [openapi.json](https://www.taskade.com/api/documentation/v2/json)

The reference pages in this guide are hand-written companions (examples, patterns, best practices). When in doubt about an exact field or status code, the live spec wins.
{% endhint %}

Include your token in the `Authorization` header:

```bash
# v1 (RESTful)
curl -H "Authorization: Bearer your_api_key_placeholder" \
     https://www.taskade.com/api/v1/me/projects

# v2 (action-based — every call is a POST)
curl -X POST https://www.taskade.com/api/v2/listMyProjects \
     -H "Authorization: Bearer your_api_key_placeholder" \
     -H "Content-Type: application/json" -d '{}'
```

## Errors

Both APIs return a consistent JSON error envelope — expected failures come back as typed errors, not bare `500`s:

```json
{ "ok": false, "code": "PAYMENT_REQUIRED", "message": "Webhooks require a Pro plan or higher." }
```

The HTTP status matches the `code` (e.g. `401` `UNAUTHORIZED`, `402` `PAYMENT_REQUIRED`, `403` `FORBIDDEN`, `404` `NOT_FOUND`, `429` `TOO_MANY_REQUESTS`). Branch on `ok` and `code` rather than parsing `message`.

## What You Can Build

- **Custom dashboards** that pull data from Taskade workspaces and projects
- **CI/CD integrations** that create tasks or update statuses on deploy
- **AI assistants** that manage tasks and agents through the MCP Server
- **Internal tools** that connect Taskade to your company's systems
- **Automation bots** that react to events and keep projects in sync

{% hint style="success" %}
**Need help?** Join the [Taskade community](https://www.taskade.com/community) or reach out to support at [taskade.com/contact](https://www.taskade.com/contact).
{% endhint %}
