---
description: >-
  Connect Claude Desktop, Cursor, and Claude Code to your Taskade workspace
  content with the @taskade/mcp-server inbound MCP server.
---

# Workspace MCP

> **Editing Genesis app source code instead?** See [Hosted MCP — Genesis App (Beta)](genesis-app-mcp.md) for the remote server that writes to your app's source files.

Workspace MCP connects [Claude Desktop](https://claude.ai), [Cursor](https://cursor.sh), [Claude Code](https://claude.com/claude-code), or any MCP-compatible AI tool to your Taskade **workspace content** — workspaces, projects, tasks, agents, and media. It's a small server you run locally that wraps the [REST API v1](comprehensive-api-guide/README.md), so it has full task read/write access.

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io/) lets AI assistants interact with external tools and data sources. The `@taskade/mcp-server` package exposes Taskade's API as MCP tools your AI client can call.

## Install & run

The server is published as **`@taskade/mcp-server`** on npm. The simplest setup runs it on demand with `npx` — no global install needed:

```bash
npx -y @taskade/mcp-server
```

It authenticates with a [Personal Access Token](developers/authentication.md) supplied via the `TASKADE_API_KEY` environment variable. Get yours from [Settings > API](https://www.taskade.com/settings/api).

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

For clients that connect over HTTP instead of stdio, run the server in HTTP mode:

```bash
TASKADE_API_KEY=your_api_token_placeholder npx @taskade/mcp-server --http
```

The server listens on `http://localhost:3000` (set `PORT` to change it); connect via SSE at `http://localhost:3000/sse`.

{% hint style="warning" %}
HTTP mode accepts the token as a query parameter (`?access_token=…`). Only use this on a trusted local network or behind TLS — never expose it publicly.
{% endhint %}

## Available Tools

Tool names mirror the [REST API v1](comprehensive-api-guide/README.md) operations the server wraps. Highlights:

| Area | Tools |
| --- | --- |
| **Workspaces** | `workspacesGet`, `workspaceFoldersGet`, `workspaceCreateProject` |
| **Projects** | `projectGet`, `projectCreate`, `projectCopy`, `projectComplete`, `projectRestore`, `projectFromTemplate`, `projectMembersGet`, `projectFieldsGet`, `projectShareLinkGet`, `projectShareLinkEnable`, `projectBlocksGet`, `projectTasksGet` |
| **Tasks** | `taskGet`, `taskCreate`, `taskPut`, `taskDelete`, `taskComplete`, `taskUncomplete`, `taskMove`, `taskAssigneesGet`, `taskPutAssignees`, `taskDeleteAssignees`, `taskGetDate`, `taskPutDate`, `taskDeleteDate`, `taskNoteGet`, `taskNotePut`, `taskNoteDelete`, `taskFieldValueGet`, `taskFieldValuePut`, `taskFieldValueDelete` |
| **Agents** | `folderAgentGenerate`, `folderCreateAgent`, `agentGet`, `agentUpdate`, `deleteAgent`, `agentKnowledgeProjectCreate`, `agentKnowledgeMediaCreate`, `agentPublicAccessEnable`, `agentConvosGet`, `agentConvoGet` |
| **Media** | `mediasGet`, `mediaGet`, `mediaDelete` |
| **Personal** | `meProjectsGet` |

{% hint style="info" %}
This local server wraps **v1**, so it does **not** include a prompt-an-agent tool. To prompt agents programmatically, use [`POST /api/v2/promptAgent`](api-v2-reference.md#prompt-an-agent), or chat with the agent inside Taskade.
{% endhint %}

## Example Usage in Claude

Once configured, you can ask Claude to:

- "List all my Taskade workspaces"
- "Create a task in my Sales Pipeline project to follow up with the client"
- "Show me the tasks in my Sales Pipeline project and mark the first one complete"
- "Add a due date of next Friday to task X"

## Resources

| Resource | Description |
| --- | --- |
| [github.com/taskade/mcp](https://github.com/taskade/mcp) | MCP server source code and docs |
| [Workspace MCP — Advanced](workspace-mcp-advanced.md) | Multi-client setup, troubleshooting, security |
| [REST API v1 Reference](comprehensive-api-guide/README.md) | The endpoints these tools map to |
