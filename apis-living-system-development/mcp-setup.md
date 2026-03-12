---
description: Connect Claude Desktop, Cursor, Windsurf, and other AI tools to Taskade using the MCP Server.
---

# MCP Server Setup

The **Model Context Protocol (MCP)** is an open standard that lets AI assistants interact with external tools and data sources. The Taskade MCP Server gives your AI tools direct access to your workspaces, projects, tasks, agents, and more — no custom code required.

**Package:** [`@taskade/mcp-server`](https://www.npmjs.com/package/@taskade/mcp-server) on npm

## Prerequisites

- **Node.js 18+** installed on your machine
- A **Taskade Personal Access Token** — get one at [taskade.com/settings/api](https://www.taskade.com/settings/api)

{% hint style="info" %}
Don't have a token yet? Follow the steps in the [Developer Home](developer-home.md#get-your-api-key) guide.
{% endhint %}

## Install

No global install needed. Use `npx` to always run the latest version:

```bash
npx -y @taskade/mcp-server
```

## Configure Claude Desktop

Add the following to your Claude Desktop config file:

- **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "taskade": {
      "command": "npx",
      "args": ["-y", "@taskade/mcp-server"],
      "env": {
        "TASKADE_API_KEY": "your_api_key_placeholder"
      }
    }
  }
}
```

Restart Claude Desktop after saving. You should see Taskade appear in the tools list.

{% hint style="warning" %}
Replace `your_api_key_placeholder` with your actual Personal Access Token. Never share your config file publicly.
{% endhint %}

## Configure Cursor

Add the same configuration to your Cursor MCP settings:

**File:** `.cursor/mcp.json` in your project root (or global Cursor settings)

```json
{
  "mcpServers": {
    "taskade": {
      "command": "npx",
      "args": ["-y", "@taskade/mcp-server"],
      "env": {
        "TASKADE_API_KEY": "your_api_key_placeholder"
      }
    }
  }
}
```

## Configure Windsurf, VS Code & Others

Most MCP-compatible clients use the same JSON format above. Add the `taskade` server entry to whichever config file your client reads. Check your client's documentation for the exact location.

## HTTP / SSE Mode

If your client connects over HTTP instead of stdio, start the server in HTTP mode:

```bash
TASKADE_API_KEY=your_api_key_placeholder npx -y @taskade/mcp-server --http
```

The server starts on **port 3000** by default. Your client can then connect to `http://localhost:3000` using Server-Sent Events (SSE).

{% hint style="info" %}
HTTP mode is useful for tools like **n8n** and other workflow automation platforms that connect to MCP servers over the network.
{% endhint %}

## Available Tools

The Taskade MCP Server exposes **50+ tools** across these resource categories:

| Category       | Example Actions                                                |
| -------------- | -------------------------------------------------------------- |
| **Workspaces** | List workspaces, get workspace projects and folders            |
| **Projects**   | Create, copy, complete, restore projects; get members and tasks |
| **Tasks**      | Create, update, move, complete, delete tasks; manage dates, notes, fields, assignees |
| **Agents**     | Get, update, delete agents; manage knowledge base; view conversations |
| **Folders**    | List folder contents, create agents in folders                 |
| **Media**      | Get and delete media files; add media to agent knowledge       |
| **Templates**  | Browse and create projects from templates                      |
| **Me**         | Get current user info and personal projects                    |

Your AI assistant discovers these tools automatically once the server is connected — no extra setup needed.

## Compatible Clients

| Client             | Transport | Status      |
| ------------------ | --------- | ----------- |
| Claude Desktop     | stdio     | Supported   |
| Cursor             | stdio     | Supported   |
| Windsurf           | stdio     | Supported   |
| VS Code (Copilot)  | stdio     | Supported   |
| n8n                | HTTP/SSE  | Supported   |

## Troubleshooting

**Server not appearing in your client?**

- Make sure Node.js 18+ is installed: `node --version`
- Verify your API key is valid at [taskade.com/settings/api](https://www.taskade.com/settings/api)
- Check that the JSON config is valid (no trailing commas, correct quotes)
- Restart your client after updating the config

**Permission errors?**

- Your token must belong to a workspace where you have edit access
- Some actions require workspace admin permissions

{% hint style="success" %}
For the latest tools list, configuration options, and troubleshooting tips, visit the GitHub repo: [github.com/taskade/mcp](https://github.com/taskade/mcp)
{% endhint %}

## Next Steps

- [REST API Reference](developers/api.md) — use the API directly in your own code
- [TypeScript SDK (Preview)](sdk-quickstart.md) — coming soon, zero-dependency SDK
- [Developer Home](developer-home.md) — back to the developer overview
