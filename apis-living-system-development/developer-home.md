---
description: Everything you need to build on Taskade — REST API, MCP Server, SDK, and more.
---

# Build on Taskade

You want to integrate Taskade into your app, automate your workflows, or connect your AI tools. This page gets you started fast.

## Integration Surface at a Glance

```mermaid
graph TB
    subgraph "Your Application"
        APP[Your App / Script / Agent]
    end

    subgraph "Integration Surface"
        SDK["@taskade/sdk<br/>TypeScript, npm"]
        API[Public API v2<br/>REST + OAuth 2.0]
        MCP_IN["@taskade/mcp<br/>Inbound MCP Server"]
        MCP_OUT[Hosted MCP v2<br/>Outbound Connectors]
        WEBHOOK[Webhooks<br/>Event delivery]
    end

    subgraph "Taskade Workspace"
        PROJECTS[Projects & Tasks]
        AGENTS[AI Agents<br/>with LTM]
        AUTOMATIONS[Automations]
        MEDIA[Media & Bundles]
    end

    APP --> SDK
    APP --> API
    APP --> MCP_IN
    WEBHOOK --> APP

    SDK --> API
    MCP_IN --> API
    MCP_OUT --> AGENTS

    API --> PROJECTS
    API --> AGENTS
    API --> AUTOMATIONS
    API --> MEDIA

    AGENTS -.writes LTM.-> PROJECTS
```

## I Want To...

| I want to... | Use |
| --- | --- |
| Ship a production integration in Node or TypeScript | [TypeScript SDK](sdk-quickstart.md) + [SDK Cookbook](sdk-cookbook.md) |
| Hit endpoints from any language | [Public API v2 Reference](api-v2-reference.md) |
| Expose Taskade data to Claude Desktop, Cursor, or other MCP clients | [Workspace MCP](workspace-mcp.md) + [Advanced](workspace-mcp-advanced.md) |
| Give a Taskade agent third-party capabilities | [Hosted MCP v2 Connectors](workspace-mcp-advanced.md#mcp-connectors) |
| Edit Genesis app source code from your IDE | [Genesis App MCP (Beta)](genesis-app-mcp.md) |
| Receive real-time events in your app | [Webhooks](webhooks.md) |
| Build an app with end-user sign-in | [GenesisAuth](../genesis-living-system-builder/community-and-sharing/genesis-auth.md) in Genesis |
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
| [Public API v2 Reference](api-v2-reference.md) | Top-10 most-used endpoints with cURL, TypeScript, and Python examples |
| [TypeScript SDK Quickstart](sdk-quickstart.md) | Install `@taskade/sdk` and ship your first call in 5 minutes |
| [SDK Cookbook](sdk-cookbook.md) | Patterns for agents, automations, webhooks, error handling, pagination, testing |
| [Workspace MCP](workspace-mcp.md) | Connect Claude Desktop, Cursor, and other AI tools to your workspace |
| [Workspace MCP — Advanced](workspace-mcp-advanced.md) | Rate limits, multi-client setup, troubleshooting, security |
| [Genesis App MCP (Beta)](genesis-app-mcp.md) | Edit your Genesis app's source code from your IDE via OAuth |
| [Webhooks](webhooks.md) | Subscribe to workspace events and verify signatures |
| [Bundles & App Kits](bundles.md) | Import/export full Genesis apps as portable bundles |
| [Long-Term Memory](long-term-memory.md) | Memory-as-Projects architecture — editable, queryable, API-addressable |
| [Autonomous Agents](autonomous-agents.md) | Automations, orchestration, cross-agent invocation patterns |
| [Authentication Guide](developers/authentication.md) | Personal tokens and OAuth 2.0 flows |
| [API Endpoint Guide](comprehensive-api-guide/README.md) | Detailed per-endpoint documentation with examples |

{% hint style="info" %}
**New to Taskade?** Start with the [Quick Start Guide](../getting-started/README.md) to understand workspaces, projects, and tasks before diving into the API.
{% endhint %}

## Base URL

All REST API requests go to:

```
https://www.taskade.com/api/v1
```

Include your token in the `Authorization` header:

```bash
curl -H "Authorization: Bearer your_api_key_placeholder" \
     https://www.taskade.com/api/v1/me/projects
```

## What You Can Build

- **Custom dashboards** that pull data from Taskade workspaces and projects
- **CI/CD integrations** that create tasks or update statuses on deploy
- **AI assistants** that manage tasks and agents through the MCP Server
- **Internal tools** that connect Taskade to your company's systems
- **Automation bots** that react to events and keep projects in sync

{% hint style="success" %}
**Need help?** Join the [Taskade community](https://www.taskade.com/community) or reach out to support at [taskade.com/contact](https://www.taskade.com/contact).
{% endhint %}
