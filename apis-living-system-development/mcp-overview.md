---
description: >-
  Pick the right Taskade MCP path by what you want to do: the hosted server, the local Workspace MCP server, or the MCP Client connector in an automation.
---

# Which Taskade MCP Do I Want?

Taskade uses MCP in two directions across three distinct paths. Choose by what starts the connection: an AI client that reaches into Taskade, or a Taskade automation that calls out.

{% hint style="info" %}
**TL;DR:** To use Taskade from Claude, Codex, Cursor, VS Code, or ChatGPT, use the [hosted Taskade MCP](genesis-app-mcp.md) at `https://www.taskade.com/mcp` (paid plans). To call another MCP server from Taskade, use the [MCP Client connector](https://www.taskade.com/learn/connect/mcp-client-integration) in an automation (every plan).
{% endhint %}

## Pick a path in two questions

Answer the questions from the top. Stop at the first match:

```text
  Does Taskade call another MCP server?
  ├── Yes ──▶ MCP Client connector
  │           in an automation (every plan)
  └── No: an AI client works in Taskade
      │
      Need a REST API v1 operation that
      hosted MCP does not expose? (For
      example: generate agent, public
      agent access, media delete)
      ├── Yes ──▶ Workspace MCP (local stdio)
      └── No ───▶ Hosted Taskade MCP
                  (every paid plan)
```

## Inbound: an AI client reaching into Taskade

Pick the hosted server unless you need a REST API v1 operation that it does not expose.

| I want to | Use | Where and auth |
|---|---|---|
| Have Claude **read and write my tasks** | **[Hosted Taskade MCP](genesis-app-mcp.md)** or **[Workspace MCP](workspace-mcp.md)** | Hosted HTTPS with OAuth 2.0 or a personal access token, or local stdio with a personal access token |
| **Work on my workspace from my IDE** and edit Taskade Genesis app source | **[Hosted Taskade MCP](genesis-app-mcp.md)** | `https://www.taskade.com/mcp` |
| Generate agents, turn on public agent access, or delete media | **[Workspace MCP](workspace-mcp.md)** | Local stdio with a personal access token |

| | Hosted Taskade MCP | Workspace MCP |
| --- | --- | --- |
| Install | None | `npx -y @taskade/mcp-server` |
| Sign-in | OAuth 2.0 with PKCE, or a personal access token | A personal access token in `TASKADE_API_KEY` |
| Plan | Every paid plan (Starter and above) | The access rules of each API call |
| Edits Taskade Genesis app source | Yes | No |
| Surface | Most of the Action API v2 | REST API v1, plus some Action API v2 tools |

{% hint style="info" %}
**Note:** Neither MCP server uploads media. Upload a file with the REST API ([`media-upload`](https://www.taskade.com/docs/rest/media-upload)) or the Action API ([`upload-media`](https://www.taskade.com/docs/actions/upload-media)).
{% endhint %}

Neither server creates or edits an automation, or builds a new app. Neither one publishes an app that is not live yet, or sets who can use an app. Send those jobs to Taskade EVE inside Taskade. Hosted MCP can edit the source of an existing app, and an edit to a live app can go live on its own.

## Outbound: Taskade calling another MCP server

The outbound direction runs through automations, not through agents.

| I want to | Use | Where and auth |
|---|---|---|
| **Call the tools of another MCP server from Taskade** | **[MCP Client connector](https://www.taskade.com/learn/connect/mcp-client-integration)** | An automation step with the HTTPS URL of the remote server and an optional bearer token |

- The MCP Client connector runs on every plan, including Free.
- In production, an agent cannot reach an arbitrary MCP server directly.
- To give an agent a remote MCP tool, configure the agent to trigger an automation that contains an **MCP Client** step. The automation returns the result.
- For services without MCP, use the [100+ native integrations](https://www.taskade.com/integrations). Premium integrations, for example Slack, Gmail, and Notion, need a paid plan.

## Set this up with your coding agent

Paste this block into your coding agent to connect it.

```text
Connect to the hosted Taskade MCP server at https://www.taskade.com/mcp over Streamable HTTP. If you support interactive sign-in, use OAuth 2.0 with PKCE and dynamic client registration. If you can only send headers, send "Authorization: Bearer <token>" with a personal access token from https://www.taskade.com/settings/api. The workspace must be on a paid Taskade plan. First call list_spaces and page until hasNextPage is false. Then call inspect_space on one workspace and report what you can see. Do not write anything until I confirm.
```

## Next steps

- [Hosted Taskade MCP](genesis-app-mcp.md): set up Claude, Claude Code, Codex, Cursor, VS Code, ChatGPT, or Windsurf.
- [Workspace MCP](workspace-mcp.md): install the local server.
- [MCP Client connector](https://www.taskade.com/learn/connect/mcp-client-integration): call another MCP server from an automation.
- [Taskade API overview](developers/api.md): every Taskade API surface in one table.

---

_This page is also published at [taskade.com/docs/mcp/which-mcp](https://www.taskade.com/docs/mcp/which-mcp)._
