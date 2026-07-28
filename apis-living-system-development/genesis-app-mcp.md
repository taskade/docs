---
description: >-
  Connect Claude, Cursor, or any MCP client to the hosted Taskade MCP server at
  taskade.com/mcp — orchestrate agents, create projects, and edit app code.
---

# Hosted Taskade MCP (Beta)

> **Need task-level writes (create, complete, dates, assignees)?** See [Workspace MCP](workspace-mcp.md) for the local server that wraps the full REST API v1. Not sure which surface you need? See [Which Taskade MCP do I want?](mcp-overview.md).

The hosted Taskade MCP server connects your favorite AI tools — Claude Desktop, Claude Code, Cursor, Windsurf, Zed, or any MCP-compatible client — directly to your Taskade workspace. From your IDE or AI client you can browse your workspace, **create projects, manage and prompt AI agents**, and **edit your Genesis app's source code**. The toolset mirrors much of the [Action API v2](api-v2-reference.md), and more tools land as that API grows.

> **Beta notice**
> The hosted Taskade MCP is in beta. Tools, behavior, and available scopes may change as the feature evolves. We'd love your feedback.

## What you can do

* **Browse** your workspace as a virtual filesystem — projects, agents, automations, uploaded media, and app source code
* **Read structured data** — list projects, agents, automations, and tasks; read a project's full task tree
* **Create & orchestrate** — create projects from Markdown, create/update/delete agents, attach knowledge, and prompt an agent and get its reply
* **Edit your Genesis app's source files** (React components, styles, configuration) from your own IDE or AI tool

### What's not included (yet)

The hosted server currently **cannot**:

* Create, complete, or edit **tasks** (assignees, dates, notes, fields) — use [Workspace MCP](workspace-mcp.md) or the [REST API v1](comprehensive-api-guide/README.md)
* Create, edit, or run **automations** (flows are listed read-only)
* Upload or delete **media**
* Register **webhooks** — use the [Webhook Registration API](webhooks.md#webhook-registration-api)

More tools land as the Action API v2 surface grows.

## Requirements

* A Taskade workspace on **any paid plan** (the Free plan can connect, but workspace access is gated)
* **Editor (collaborator) role or above** in the workspace for write tools — viewers and participants can browse but not modify
* An MCP-compatible client such as:
  * [Claude Desktop](https://claude.ai/download)
  * [Claude Code](https://claude.com/claude-code)
  * [Cursor](https://cursor.com)
  * [Windsurf](https://codeium.com/windsurf) or [Zed](https://zed.dev)
  * Any client that supports the [Model Context Protocol](https://modelcontextprotocol.io)

## Connecting your client

This is a **hosted, remote MCP server** — there's nothing to install. Add its URL to your client's configuration and it handles authentication over OAuth 2.0 (with PKCE) automatically:

**Production endpoint:**
```
https://www.taskade.com/mcp
```

OAuth discovery metadata is published at `https://www.taskade.com/.well-known/oauth-protected-resource/mcp` for clients that support automatic discovery.

### Example: Claude Desktop / Claude Code

Add this to your MCP configuration file:

```json
{
  "mcpServers": {
    "taskade": {
      "type": "http",
      "url": "https://www.taskade.com/mcp"
    }
  }
}
```

### Example: Cursor

In Cursor's MCP settings, add a new server with the URL `https://www.taskade.com/mcp`.

## First-time authentication

The first time your client connects, Taskade MCP walks you through a standard OAuth2 flow:

1. Your MCP client discovers the Taskade MCP server
2. You're redirected to Taskade in your browser to sign in
3. You authorize MCP access to your account
4. Your client receives a token and stores it

You only need to do this once per client. Make sure you're signed in to the Taskade account that has access to the workspace you want to work with.

## The MCP toolset

The server exposes **18 tools** plus a `taskade://getting-started` resource (a Markdown quickstart your AI client can read on its own). Most tools take a `spaceId` — clients typically call `list_spaces` first to find it.

### Browse & app editing

| Tool | What it does |
| --- | --- |
| `list_spaces` | List the workspaces you belong to (on plans with MCP access), with your role in each |
| `inspect_space` | Read files and directories in a workspace's virtual filesystem — `app/`, `projects/`, `agents/`, `automations/`, `media/` |
| `write_file` | Create or edit files in your Genesis app's `app/` directory — create, replace substrings, insert at a line, or apply a unified diff |

### Read workspace data

| Tool | What it does |
| --- | --- |
| `list_projects` | Projects in a workspace as structured JSON (id, name) |
| `read_project` | A project's full contents — task tree with assignees, dates, tags |
| `list_tasks` | Tasks in a project (id, text, completed, parent) with cursor pagination |
| `list_agents` | The AI agents in a workspace (id, name) |
| `list_automations` | The automation flows in a workspace (id, name) |

### Create & orchestrate

| Tool | What it does |
| --- | --- |
| `create_project` | Create a project in a workspace from Markdown |
| `create_agent` | Create an AI agent (name + role instructions) |
| `get_agent` / `update_agent` / `delete_agent` | Read, update, or delete an agent |
| `prompt_agent` | Send a one-shot prompt to an agent and get its text reply (runs on the agent's configured tier, consumes credits) |
| `list_conversations` / `get_conversation` | Browse an agent's conversation history — `get_conversation` includes a Markdown transcript |
| `add_knowledge_project` / `remove_knowledge_project` | Attach or detach a project as agent knowledge |

Tool names track the [Action API v2](api-v2-reference.md) operations they mirror.

### The virtual filesystem

`inspect_space` presents each workspace as a directory tree:

```
workspace/
├── app/            # Your Genesis app source (writable via write_file)
├── projects/       # Tasks and documents (use read_project / list_tasks for structured reads)
├── agents/         # AI agent definitions
├── automations/    # Flows (read-only)
└── media/          # Uploaded files (read-only)
```

Writes are restricted to the `app/` directory — `write_file` against `projects/`, `agents/`, `automations/`, or `media/` is rejected. Use the structured tools above to create projects and manage agents.

## Example workflows

### Refactor a component with Claude

> *"Open my 'Landing Page' workspace, look at `app/src/App.tsx`, and split the hero section into its own component. Keep the existing styling."*

Claude will call `list_spaces` → `inspect_space` → `write_file` (twice) to create the new component file and update `App.tsx`.

### Stand up a project and brief an agent

> *"Create a project called 'Q3 Launch' with a task per milestone from this outline, attach it to my Research agent as knowledge, then ask the agent to summarize the risks."*

The client calls `create_project`, `add_knowledge_project`, and `prompt_agent` — no browser tab needed.

### Audit your app for accessibility

> *"Check every file in `app/src/` for missing alt text, ARIA labels, and keyboard handlers. Suggest fixes but don't apply them yet."*

The client reads your files via `inspect_space` and shows you a report before you approve any edits.

## Tips and gotchas

* **Always read before you edit.** Ask your client to inspect a file before modifying it. Edits against a stale view may fail or produce unexpected results.
* **One workspace at a time.** Tools take a `spaceId` — point your client at the right workspace before issuing commands.
* **Publish your changes.** Writing files through MCP updates your Genesis app's source, but you still need to publish through Taskade for changes to go live on your custom domain.
* **Plan gating is per-workspace.** If you're a member of a paid workspace from a free account, you can use MCP against the paid workspace but not against your own free workspace.
* **`prompt_agent` spends credits.** It runs the agent for real, exactly like prompting it in the app.

## When to use MCP vs. Taskade EVE

Both MCP and Taskade EVE (Taskade's in-product AI assistant) can build and orchestrate. Use whichever fits your workflow:

| Use **EVE** when… | Use **MCP** when… |
|---|---|
| You're already inside Taskade | You live in your IDE |
| You want full-scope edits (tasks, flows, app) in one conversation | You're scripting a workflow across projects, agents, and app code |
| You're building from a prompt end-to-end | You want to use a specific model or tool |
| You prefer a conversational flow | You want precise, file-level control |

If EVE isn't clicking for your use case, MCP gives you an escape hatch — bring your own model, your own prompts, your own keybindings.

## Troubleshooting

**"MCP access is not available on this workspace's current plan."**
Your workspace is on the Free plan. Upgrade to any paid plan, or ask your workspace owner.

**"Access denied: you are not a member of this space."**
You're trying to access a workspace you don't belong to. Double-check the workspace ID or ask to be invited.

**"Access denied: your role does not have write access."**
Write tools require collaborator or higher. Viewer and participant roles can still browse.

**OAuth flow keeps looping.**
Make sure you're signed in to the correct Taskade account in your browser. Clearing your MCP client's stored credentials and reconnecting usually fixes this.

## Feedback

The hosted MCP is in active development and your feedback directly shapes what we ship next. If something's missing, broken, or confusing, let us know — we're listening.

---

**TL;DR:** Add `https://www.taskade.com/mcp` to your MCP client, sign in once, and orchestrate your workspace from Claude, Cursor, or any MCP-compatible tool — create projects, manage and prompt agents, and edit your Genesis app's source. Any paid plan. Beta — task-level writes still live in [Workspace MCP](workspace-mcp.md).
