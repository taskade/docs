# Workspace MCP

> **Editing Genesis app source code instead?** See [Genesis App MCP (Beta)](genesis-app-mcp.md) for the IDE-focused server that writes to your app's `src/` files.

Workspace MCP connects [Claude Desktop](https://claude.ai), [Cursor](https://cursor.sh), or any MCP-compatible AI tool to your Taskade **workspace content** — projects, tasks, agents, and media — via the Taskade REST API. Use it to read and write the *content* of your workspace (not your Genesis app's source code).

## What is MCP?

The [Model Context Protocol](https://modelcontextprotocol.io/) lets AI assistants interact with external tools and data sources. The Taskade MCP server gives AI tools access to your workspaces, projects, tasks, agents, and more.

## Install

```bash
npm install -g @taskade/mcp
```

## Configure Claude Desktop

Add to your Claude Desktop configuration file:

**macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
**Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

```json
{
  "mcpServers": {
    "taskade": {
      "command": "taskade-mcp",
      "env": {
        "TASKADE_API_KEY": "your-api-key"
      }
    }
  }
}
```

Get your API key from [Settings > API](https://www.taskade.com/settings/api).

## Configure Cursor

Add to your Cursor MCP configuration:

```json
{
  "mcpServers": {
    "taskade": {
      "command": "taskade-mcp",
      "env": {
        "TASKADE_API_KEY": "your-api-key"
      }
    }
  }
}
```

## Available Tools

### Navigation

| Tool | Description |
|------|-------------|
| `list_workspaces` | List all your workspaces |
| `list_workspace_folders` | List folders in a workspace |
| `list_folder_projects` | List projects in a folder |
| `list_folder_agents` | List agents in a folder |

### Projects & Tasks

| Tool | Description |
|------|-------------|
| `get_project` | Get project details |
| `create_project` | Create a new project |
| `list_project_tasks` | List tasks in a project |
| `create_task` | Create a new task |
| `update_task` | Update task text |
| `complete_task` | Mark task as complete |
| `uncomplete_task` | Mark task as incomplete |
| `delete_task` | Delete a task |

### Task Metadata

| Tool | Description |
|------|-------------|
| `get_task_date` | Get task due date |
| `set_task_date` | Set task due date |
| `get_task_assignees` | Get task assignees |
| `set_task_assignees` | Assign users to task |
| `get_task_note` | Get task note |
| `set_task_note` | Add/update task note |

### Agents

| Tool | Description |
|------|-------------|
| `list_agents` | List agents in a space |
| `get_agent` | Get agent details |
| `prompt_agent` | Chat with an agent |

### Media & Bundles

| Tool | Description |
|------|-------------|
| `upload_media` | Upload a file |
| `get_media` | Get media metadata |
| `export_bundle` | Export Genesis app as bundle |
| `import_bundle` | Import Genesis app bundle |

## Example Usage in Claude

Once configured, you can ask Claude to:

- "List all my Taskade workspaces"
- "Create a task in my project to follow up with the client"
- "Show me the tasks in my Sales Pipeline project"
- "Mark task X as complete"
- "Ask my Sales Coach agent about pipeline health"

## Resources

| Resource | Description |
|----------|-------------|
| [GitHub: @taskade/mcp](https://github.com/taskade/mcp) | MCP server source code |
| [SDK Quickstart](sdk-quickstart.md) | TypeScript SDK for programmatic access |
| [Full API Reference](comprehensive-api-guide/) | Complete endpoint documentation |
