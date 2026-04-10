---
description: Everything you need to build on Taskade — REST API, MCP Server, SDK, and more.
---

# Build on Taskade

You want to integrate Taskade into your app, automate your workflows, or connect your AI tools. This page gets you started fast.

## I Want To...

| I want to...                          | Use                                                                                              |
| ------------------------------------- | ------------------------------------------------------------------------------------------------ |
| Build an app that talks to Taskade    | [REST API](developers/api.md) or [TypeScript SDK](sdk-quickstart.md) (coming soon)              |
| Manage projects, tasks, and agents from Claude / Cursor | [Workspace MCP](workspace-mcp.md) (`@taskade/mcp-server`) |
| Edit Genesis app source code from your IDE | [Genesis App MCP (Beta)](genesis-app-mcp.md) |
| Automate workflows without code       | [Automations Engine](../genesis-living-system-builder/automation/README.md)                      |
| Browse community apps and templates   | [taskade.com/community](https://www.taskade.com/community)                                       |

## Get Your API Key

You need a **Personal Access Token** to authenticate with every Taskade developer tool — the REST API, MCP Server, and SDK all use it.

1. Go to [taskade.com/settings/api](https://www.taskade.com/settings/api).
2. Click **Create new token** and give it a descriptive name.
3. Copy the token and store it somewhere safe. You will not be able to see it again.

{% hint style="warning" %}
Treat your API token like a password. Never commit it to version control or share it publicly.
{% endhint %}

## Developer Resources

| Resource                                               | Description                                      |
| ------------------------------------------------------ | ------------------------------------------------ |
| [REST API Reference](developers/api.md)               | Full endpoint reference for workspaces, projects, tasks, agents, folders, and media |
| [Authentication Guide](developers/authentication.md)  | How authentication and token scopes work          |
| [Workspace MCP](workspace-mcp.md)                      | Connect Claude Desktop, Cursor, and other AI tools to your workspace content (projects, tasks, agents) |
| [Genesis App MCP (Beta)](genesis-app-mcp.md)           | Edit your Genesis app's source code from your IDE via OAuth |
| [TypeScript SDK (Preview)](sdk-quickstart.md)          | Zero-dependency SDK for Node.js — coming soon     |
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
