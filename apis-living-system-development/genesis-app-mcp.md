# Genesis App MCP (Beta)

> **Managing projects, tasks, or agents instead?** See [Workspace MCP](workspace-mcp.md) for the API-based server that reads and writes workspace content.

Genesis App MCP lets you connect your favorite AI tools — Claude Desktop, Claude Code, Cursor, or any MCP-compatible client — directly to your Taskade Genesis app's **source code**. Browse your workspace from your IDE, and edit your app's React components, styles, and configuration using the model and workflow you already love.

> **Beta notice**
> Genesis App MCP is currently in beta. Tools, behavior, and available scopes may change as the feature evolves. We'd love your feedback.

## What you can do with MCP

In this beta, MCP is scoped to **configuring your Taskade Genesis app**. You can:

- **Browse** your workspace as a virtual filesystem — see your projects, agents, automations, uploaded media, and app source code
- **Edit** your Genesis app's source files (React components, styles, configuration) from your own IDE or AI tool
- **Chain edits** with your model of choice — use Claude, GPT, or any MCP-compatible model to iterate on your app

### What's not included (yet)

MCP currently **cannot** create, modify, or delete:

- Projects or tasks
- AI agents or their knowledge
- Automations or flows
- Uploaded media

Those resources appear in the MCP filesystem but are **read-only**. To modify them, keep using Taskade directly or EVE (Taskade's built-in AI assistant). We're actively working on expanding MCP's write scope — stay tuned.

## Requirements

- A Taskade workspace on the **Business plan or higher**
- **Editor (collaborator) role or above** in the workspace you want to work with — viewers and participants can browse via MCP but cannot make edits
- An MCP-compatible client such as:
  - [Claude Desktop](https://claude.ai/download)
  - [Claude Code](https://claude.com/claude-code)
  - [Cursor](https://cursor.com)
  - Any client that supports the [Model Context Protocol](https://modelcontextprotocol.io)

## Connecting your client

Add the Taskade MCP server to your client's configuration. The exact format depends on your client, but the endpoint is the same:

**Production endpoint:**
```
https://www.taskade.com/mcp
```

### Example: Claude Desktop / Claude Code

Add this to your MCP configuration file:

```json
{
  "mcpServers": {
    "taskade": {
      "type": "url",
      "url": "https://www.taskade.com/mcp"
    }
  }
}
```

### Example: Cursor

In Cursor's MCP settings, add a new server with the URL `https://www.taskade.com/mcp`.

## First-time authentication

The first time your client connects, Taskade MCP will walk you through a standard OAuth2 flow:

1. Your MCP client discovers the Taskade MCP server
2. You're redirected to Taskade in your browser to sign in
3. You authorize MCP access to your account
4. Your client receives a token and stores it

You only need to do this once per client. Make sure you're signed in to the Taskade account that has access to the workspace you want to work with.

## The MCP toolset

Taskade MCP exposes three tools to your client:

### `list_spaces`

Returns the workspaces (spaces) you're a member of, along with your role in each. Use this to discover which workspace to work with.

Your AI client will typically call this first without you needing to prompt it.

### `inspect_space`

Reads files and directories inside a workspace. Each workspace is presented as a virtual filesystem:

```
workspace/
├── app/            # Your Genesis app source (writable)
│   └── src/
│       └── App.tsx
├── projects/       # Tasks and documents (read-only)
├── agents/         # AI agent definitions (read-only)
├── automations/    # Flows (read-only)
└── media/          # Uploaded files (read-only)
```

You can ask your client to browse any of these directories. For example:

> *"Show me the files in my Marketing workspace's Genesis app."*

### `write_file`

Creates or edits files in the `app/` directory of your Genesis app. Supports:

- **Creating** new files
- **Replacing** substrings in existing files
- **Inserting** content at a specific line
- **Applying** unified diff patches

Writes are restricted to the `app/` directory. Attempts to write to `projects/`, `agents/`, `automations/`, or `media/` will be rejected.

You also need **collaborator access or above** on the workspace to use `write_file`.

## Example workflows

Here are a few ways to put MCP to work.

### Refactor a component with Claude

> *"Open my 'Landing Page' workspace, look at `app/src/App.tsx`, and split the hero section into its own component. Keep the existing styling."*

Claude will:
1. Call `list_spaces` to find the workspace
2. Call `inspect_space` to read `App.tsx`
3. Call `write_file` (twice) to create the new component file and update `App.tsx`

### Audit your app for accessibility

> *"Check every file in `app/src/` for missing alt text, ARIA labels, and keyboard handlers. Suggest fixes but don't apply them yet."*

The client reads your files via `inspect_space` and shows you a report before you approve any edits.

### Add a new page with your own model

Use whichever model your IDE supports — Claude Opus, GPT-4, Gemini, a local Ollama model — to generate a new page, then let the client write it via MCP.

## Tips and gotchas

- **Always read before you edit.** Ask your client to inspect a file before modifying it. Edits against a stale view may fail or produce unexpected results.
- **One workspace at a time.** Tools take a `spaceId` — point your client at the right workspace before issuing commands.
- **Publish your changes.** Writing files through MCP updates your Genesis app's source, but you still need to publish/deploy the app through Taskade for the changes to go live on your custom domain. (Check your Genesis app's publish settings in Taskade.)
- **No partial plans.** MCP access is gated at the workspace level. If you're a member of a Business workspace from a Pro account, you can use MCP against the Business workspace but not against your own Pro workspace.

## When to use MCP vs. EVE

Both MCP and EVE (Taskade's in-product AI assistant) can edit your Genesis app. Use whichever fits your workflow:

| Use **EVE** when… | Use **MCP** when… |
|---|---|
| You're already inside Taskade | You live in your IDE |
| You want full-scope edits (projects, agents, flows, app) | You're focused on the app's source code |
| You're building from a prompt end-to-end | You want to use a specific model or tool |
| You prefer a conversational flow | You want precise, file-level control |

If EVE isn't clicking for your use case, MCP gives you an escape hatch — bring your own model, your own prompts, your own keybindings.

## Troubleshooting

**"MCP access is not available on this workspace's current plan."**
Your workspace isn't on an MCP-enabled plan. Upgrade to Business or higher, or contact your workspace owner.

**"Access denied: you are not a member of this space."**
You're trying to access a workspace you don't belong to. Double-check the workspace ID or ask to be invited.

**"Access denied: your role does not have write access."**
`write_file` requires collaborator or higher. Viewer and participant roles can still use `inspect_space`.

**OAuth flow keeps looping.**
Make sure you're signed in to the correct Taskade account in your browser. Clearing your MCP client's stored credentials and reconnecting usually fixes this.

## Feedback

MCP is in active development and your feedback directly shapes what we ship next. If something's missing, broken, or confusing, let us know — we're listening.

---

**TL;DR:** Add `https://www.taskade.com/mcp` to your MCP client, sign in once, and start editing your Genesis app from Claude, Cursor, or any MCP-compatible tool. Workspace must be on Business plan or above. Beta — scope is currently limited to the app's source code.
