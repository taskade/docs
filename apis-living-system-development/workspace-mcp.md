---
description: >-
  Connect Claude Desktop, Cursor, Claude Code, Windsurf, VS Code, and more to
  your Taskade workspace content with the @taskade/mcp-server inbound MCP server.
---

# Workspace MCP

> **Prefer a hosted server (no install)?** See [Hosted Taskade MCP (Beta)](genesis-app-mcp.md) — it creates projects, manages & prompts agents, and edits your Genesis app's source, but has no task-level write tools.

> **Not sure which Taskade MCP you need?** See [Which Taskade MCP do I want?](mcp-overview.md).

Workspace MCP connects [Claude Desktop](https://claude.ai), [Cursor](https://cursor.sh), [Claude Code](https://claude.com/claude-code), [Windsurf](https://codeium.com/windsurf), [VS Code](https://code.visualstudio.com/), or any MCP-compatible AI tool to your Taskade **workspace content** — workspaces, projects, tasks, agents, and media. It's a small server you run locally that wraps the [REST API v1](comprehensive-api-guide/README.md), so it has full task read/write access.

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io/) lets AI assistants interact with external tools and data sources. The `@taskade/mcp-server` package exposes Taskade's API as MCP tools your AI client can call.

The MCP client talks to a locally run server, which wraps REST API v1 to reach your workspace content.

```mermaid
graph LR
  A["MCP client<br/>(Claude Desktop, Cursor, VS Code)"] -->|MCP tools| B["@taskade/mcp-server<br/>(runs locally)"]
  B -->|PAT via TASKADE_API_KEY| C["REST API v1"]
  C --> D["Workspaces"]
  C --> E["Projects"]
  C --> F["Tasks"]
  C --> G["Agents"]
  C --> H["Media"]
```


## Install & run

The server is published as **`@taskade/mcp-server`** on npm. The simplest setup runs it on demand with `npx` — no global install needed:

```bash
npx -y @taskade/mcp-server
```

It authenticates with a [Personal Access Token](developers/authentication.md) supplied via the `TASKADE_API_KEY` environment variable. Get yours from [Settings > API](https://www.taskade.com/settings/api) — this page is Taskade's dedicated programmatic-access hub where you can create and revoke Personal Access Tokens (PATs), manage OAuth 2.0 clients, and configure webhooks.

## Configure Claude Desktop

Add to your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "taskade": {
      "command": "npx",
      "args": ["-y", "@taskade/mcp-server"],
      "env": {
        "TASKADE_API_KEY": "your_api_token_placeholder"
      }
    }
  }
}
```

## Configure Cursor

Cursor uses the same configuration shape (in `~/.cursor/mcp.json` or the project's `.cursor/mcp.json`):

```json
{
  "mcpServers": {
    "taskade": {
      "command": "npx",
      "args": ["-y", "@taskade/mcp-server"],
      "env": {
        "TASKADE_API_KEY": "your_api_token_placeholder"
      }
    }
  }
}
```

## HTTP / SSE mode

{% hint style="info" %}
HTTP/SSE mode is available **from source only** — the npm-published release (`0.0.2`) and the packaged CLI are **stdio-only**. Clone [github.com/taskade/mcp](https://github.com/taskade/mcp) and run the server package's HTTP entry.
{% endhint %}

When running the HTTP entry from source, the server listens on `http://localhost:3000` (set `PORT` to change it); connect via SSE at `http://localhost:3000/sse?access_token=your_api_token_placeholder`.

{% hint style="warning" %}
HTTP mode accepts the token as a query parameter (`?access_token=…`). Only use this on a trusted local network or behind TLS — never expose it publicly.
{% endhint %}

## Example Usage in Claude

Once configured, you can run your workspace by talking. Ask Claude to:

- "Spin up next week's client-onboarding tasks and assign them."
- "Mark every overdue invoice task complete and tell me what's left."
- "Create a project for the Q3 launch with a task per milestone."
- "Summarize what changed in my Marketing space this week."
- "List all my Taskade workspaces"
- "Create a task in my Sales Pipeline project to follow up with the client"
- "Show me the tasks in my Sales Pipeline project and mark the first one complete"
- "Add a due date of next Friday to task X"

## Full tool reference

Every tool the server exposes, grouped by category — reach for this when you want to wire something precisely.

The npm-published release (`0.0.2`) exposes **57 tools** across 7 categories mirroring the [REST API v1](comprehensive-api-guide/README.md) operations the server wraps. The `0.1.0` source release (latest tag `0.1.1`, on [GitHub](https://github.com/taskade/mcp)) adds a five-tool **API v2 (beta)** category — 62 tools total:

| Area | Tools |
| --- | --- |
| **Workspaces** | `workspacesGet`, `workspaceFoldersGet`, `workspaceCreateProject` |
| **Projects** | `projectGet`, `projectCreate`, `projectCopy`, `projectComplete`, `projectRestore`, `projectMembersGet`, `projectFieldsGet`, `projectShareLinkGet`, `projectShareLinkEnable`, `projectBlocksGet`, `projectTasksGet`, `folderProjectsGet` |
| **Templates** | `folderProjectTemplatesGet`, `projectFromTemplate` |
| **Tasks** | `taskGet`, `taskCreate`, `taskPut`, `taskDelete`, `taskComplete`, `taskUncomplete`, `taskMove`, `taskAssigneesGet`, `taskPutAssignees`, `taskDeleteAssignees`, `taskGetDate`, `taskPutDate`, `taskDeleteDate`, `taskNoteGet`, `taskNotePut`, `taskNoteDelete`, `taskFieldsValueGet`, `taskFieldValueGet`, `taskFieldValuePut`, `taskFieldValueDelete` |
| **Agents** | `folderAgentGenerate`, `folderCreateAgent`, `folderAgentGet`, `agentGet`, `agentUpdate`, `deleteAgent`, `agentKnowledgeProjectCreate`, `agentKnowledgeMediaCreate`, `agentKnowledgeProjectRemove`, `agentKnowledgeMediaRemove`, `agentPublicAccessEnable`, `agentPublicGet`, `agentPublicUpdate`, `agentConvosGet`, `agentConvoGet`, `publicAgentGet` |
| **Media** | `mediasGet`, `mediaGet`, `mediaDelete` |
| **Personal** | `meProjectsGet` |
| **Agent Chat & Webhooks (API v2, beta — v0.1.0+)** | `promptAgent`, `listConversations`, `getConversation`, `subscribeWebhook`, `unsubscribeWebhook` |

{% hint style="info" %}
The **API v2 (beta)** layer — prompt-an-agent (`promptAgent`), agent-chat (`listConversations`, `getConversation`), and webhook subscribe/unsubscribe — ships in **v0.1.0** (latest source release `v0.1.1`), currently available from source at [github.com/taskade/mcp](https://github.com/taskade/mcp) while the npm release catches up. Everything else is in the npm-published `0.0.2`. Note the v2 webhook tools use the legacy subscribe operations; for signed webhooks use the [Webhook Registration API](webhooks.md#webhook-registration-api) directly.
{% endhint %}

## Plan Availability

As of June 9, 2026, MCP access is included on all paid Taskade plans. Free-plan users can install and connect the server, but listing your workspaces (the `workspacesGet` tool) requires an active paid subscription.

If you hit a gating error, upgrade your plan at [taskade.com/pricing](https://www.taskade.com/pricing) or check your current subscription in your account settings.

## Resources

| Resource | Description |
| --- | --- |
| [github.com/taskade/mcp](https://github.com/taskade/mcp) | MCP server source code and docs |
| [Workspace MCP — Advanced](workspace-mcp-advanced.md) | Multi-client setup, troubleshooting, security |
| [REST API v1 Reference](comprehensive-api-guide/README.md) | The endpoints these tools map to |
