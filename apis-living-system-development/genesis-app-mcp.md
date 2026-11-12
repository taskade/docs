---
description: >-
  Connect Claude, Claude Code, Codex, Cursor, VS Code, ChatGPT, Windsurf, or any MCP client to the hosted Taskade MCP server at taskade.com/mcp.
---

# Hosted Taskade MCP

Connect Claude, Codex, Cursor, VS Code, ChatGPT, or any MCP client to your Taskade workspace through the hosted server at `https://www.taskade.com/mcp`. You install nothing: add the URL, sign in, and your client can work with projects, tasks, agents, and Taskade Genesis app source.

{% hint style="info" %}
**TL;DR:** Add `https://www.taskade.com/mcp` to your MCP client and sign in with Taskade. The workspace must be on a paid plan (Starter and above). For a local server that wraps REST API v1, see [Workspace MCP](workspace-mcp.md).
{% endhint %}

```text
┌──────────────────────────────┐
│  Your MCP client             │
│  Claude · Codex · Cursor     │
└──────────────┬───────────────┘
               │  1. Add the URL
               ▼
┌──────────────────────────────┐
│  Taskade sign-in (OAuth)     │
│  or a personal access token  │
└──────────────┬───────────────┘
               │  2. Call list_spaces
               ▼
┌──────────────────────────────┐
│  Your paid workspaces        │
│  projects · tasks · agents   │
│  automations · app/ source   │
└──────────────────────────────┘
```

This is the **inbound** direction: an AI client reaches into Taskade. If you want Taskade to call another MCP server, see [Which Taskade MCP do I want?](mcp-overview.md).

## Before you start

Check the plan, your role, and your client before you connect.

| Requirement | Details |
| --- | --- |
| Plan | Every paid plan: Starter, Pro, Business, Max, and Enterprise. The plan of each workspace sets its access. A Free workspace does not show in `list_spaces`, and the response adds `hiddenForPlan` and a `hint` to show the user. |
| Client | Any client that supports remote MCP servers over HTTP. The setup for common clients is below. |
| Credential | Nothing to prepare for OAuth clients. For a client that only takes headers, a [personal access token](developers/personal-tokens.md). |

Your workspace role sets what each tool can do:

| Action | Role you need |
| --- | --- |
| Browse the workspace | Any member |
| Write app source with `write_file` | Editor or above |
| Project and task tools | The same permission checks as the Taskade app |
| Start an automation with `run_flow` | Permission to run automations in the workspace |
| Read run results with `get_flow_runs` | Permission to edit automations |
| Read the role instructions of an agent with `get_agent` or `inspect_space` | Permission to edit agents. Other members see the agent name and metadata |

{% hint style="info" %}
**Note:** Taskade adds tools as the [Action API v2](api-v2-reference.md) grows, so the tool list can change. Your client shows the current list after it connects.
{% endhint %}

## Server details

Every client uses the same endpoint and the same two sign-in options.

| Setting | Value |
| --- | --- |
| Server URL | `https://www.taskade.com/mcp` |
| Transport | Streamable HTTP (remote). No local install. |
| Sign-in for interactive clients | OAuth 2.0 with PKCE. The server supports dynamic client registration, so you do not register an app. |
| Sign-in for header-based clients | `Authorization: Bearer <personal access token>` |
| OAuth discovery | `https://www.taskade.com/.well-known/oauth-protected-resource/mcp` |
| API catalog (RFC 9727) | `https://www.taskade.com/.well-known/api-catalog`. It links this server, the REST API v1 spec, and the Action API v2 spec |

## What you can do

A connected client can read your workspace and make changes in it.

| Area | What the client can do | Tools |
| --- | --- | --- |
| Browse | Read the workspace as a file tree | [Browse & app editing](#browse-and-app-editing) |
| Read data | List and read projects, tasks, fields, agents, automations, templates, and media | [Read workspace data](#read-workspace-data) |
| Edit tasks | Create, update, complete, move, and delete tasks, with dates, notes, assignees, and fields | [Task writes](#task-writes) |
| Projects and agents | Create, copy, complete, and share projects. Create, update, and prompt agents, and attach knowledge | [Create & orchestrate](#create-and-orchestrate) |
| App source | Edit the source files of your Taskade Genesis app | [Browse & app editing](#browse-and-app-editing) |
| Automations | Run an automation that is On and starts with the **Agent Tool** trigger ("When asked"), and read its run history | [Run automations](#run-automations) |
| App kits | List the app kits that you published, and publish a new version | [App kits](#app-kits) |

### What the hosted server cannot do

Some work stays in the Taskade app or in another API.

| The hosted server cannot | Use instead |
| --- | --- |
| Create or edit an automation | Taskade EVE inside Taskade. To start an automation that is On and starts with the **Agent Tool** trigger, use `run_flow` (see [Run automations](#run-automations)) |
| Build a new app, or publish an app that is not live yet | Taskade EVE inside Taskade. MCP edits the source of an existing app, and an edit to a live app can go live on its own (see [Tips and gotchas](#tips-and-gotchas)). `publish_kit_version` releases a new version of a kit you already published |
| Set who can use an app | Taskade EVE inside Taskade |
| Upload or delete media | The REST API ([`media-upload`](https://www.taskade.com/docs/rest/media-upload)) or the Action API ([`upload-media`](https://www.taskade.com/docs/actions/upload-media), [`delete-media`](https://www.taskade.com/docs/actions/delete-media)) |
| Rename, export, or soft-delete a project | The Action API v2: `renameProject`, `exportProject`, and `archiveProject`. To archive a project as completed, use `complete_project` |
| Register webhooks | The [Webhook Registration API](webhooks.md#webhook-registration-api) |

For a Taskade EVE job, the client can write the request for the user to paste into Taskade EVE.

## Connecting your client

Pick your client below. Each section gives the exact config or command, then the sign-in step.

{% hint style="success" %}
**Tip:** Settings → **API** → **MCP connection** in Taskade has **Copy MCP URL**, **Add to Cursor**, and **Add to VS Code**. Under **Advanced: use a personal access token**, **Connect Cursor** and **Connect Claude** copy a JSON config with a personal access token placeholder.
{% endhint %}

### Claude (desktop and web)

Claude adds remote MCP servers as custom connectors. OAuth runs in your browser.

1. In Claude, open **Settings** → **Connectors**.
2. Click **Add custom connector**.
3. Type `Taskade` as the name. Paste `https://www.taskade.com/mcp` as the URL. Click **Add**.
4. Click **Connect**, then sign in to Taskade and allow access.

The Claude labels can change between releases. If you do not see **Connectors**, search the Claude help for "custom connectors".

### Claude Code

Install the Taskade plugin. It adds the server and the Taskade skills, which tell Claude which tool fits each job.

```bash
claude plugin marketplace add taskade/mcp
claude plugin install taskade@taskade
```

The same plugin installs in other agent hosts:

| Host | Install |
| --- | --- |
| Codex | `codex plugin marketplace add taskade/mcp`, then `codex plugin add taskade@taskade` |
| GitHub Copilot CLI | `copilot plugin install taskade/mcp` |
| Gemini CLI | `gemini extensions install https://github.com/taskade/mcp` |

Any other agent can read the Taskade skill at `https://www.taskade.com/SKILL.md`. Taskade also publishes an agent skills index at `https://www.taskade.com/.well-known/agent-skills/index.json`, so this command installs the skill:

```bash
npx skills add https://www.taskade.com
```

The skill also tells the agent how to read any Taskade page as Markdown. The agent sends `Accept: text/markdown` to the normal page URL.

To add only the server, run one command:

```bash
claude mcp add --transport http taskade https://www.taskade.com/mcp
```

In Claude Code, type `/mcp`, select the Taskade server, and sign in. To share the server with your team, commit this `.mcp.json` file at the root of the repository:

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

### Codex

Codex connects to the hosted server over Streamable HTTP and signs in with OAuth. Add the server, then sign in:

```bash
codex mcp add taskade --url https://www.taskade.com/mcp
codex mcp login taskade
```

The login command opens Taskade in your browser. Sign in and allow access. To install the Taskade skills too, use the Codex plugin command in the [Claude Code](#claude-code) section.

### Cursor

Cursor reads MCP servers from `~/.cursor/mcp.json` (all projects) or `.cursor/mcp.json` (one project).

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

Save the file. Open Cursor's MCP settings, find **taskade**, and sign in when Cursor asks.

### VS Code

VS Code reads MCP servers from `.vscode/mcp.json` in your workspace. The key is `servers`, not `mcpServers`.

```json
{
  "servers": {
    "taskade": {
      "type": "http",
      "url": "https://www.taskade.com/mcp"
    }
  }
}
```

You can also add the server from a terminal:

```bash
code --add-mcp '{"name":"taskade","type":"http","url":"https://www.taskade.com/mcp"}'
```

Start the server from `mcp.json`, and sign in when VS Code asks. Use the Taskade tools in Copilot Chat agent mode.

### ChatGPT

ChatGPT connects to a remote MCP server as a custom connector in developer mode. It uses OAuth only.

1. In ChatGPT settings, turn on developer mode for apps and connectors.
2. Create a connector. Type `Taskade` as the name and `https://www.taskade.com/mcp` as the server URL.
3. Select OAuth as the authentication. Sign in to Taskade and allow access.

Developer mode is available only on some ChatGPT plans, and the labels change often. If you cannot find it, search the ChatGPT help for "developer mode" and "connectors".

### Windsurf

Windsurf reads MCP servers from `~/.codeium/windsurf/mcp_config.json`. A remote server uses `serverUrl`.

```json
{
  "mcpServers": {
    "taskade": {
      "serverUrl": "https://www.taskade.com/mcp"
    }
  }
}
```

If Windsurf does not open a sign-in page, add the `headers` block from "Other clients" below.

### Other clients

Any client that can send a request header connects with a personal access token. This is the config that Taskade copies from Settings → **API** → **MCP connection** → **Advanced: use a personal access token**:

```json
{
  "mcpServers": {
    "taskade": {
      "type": "http",
      "url": "https://www.taskade.com/mcp",
      "headers": {
        "Authorization": "Bearer <paste-your-token-here>"
      }
    }
  }
}
```

{% hint style="warning" %}
**Warning:** Treat a config file that holds a token as a secret. Do not commit it. The token can do everything that your account can do.
{% endhint %}

A client that runs only local stdio servers can reach the hosted server through the `mcp-remote` bridge. It runs OAuth in your browser:

```json
{
  "mcpServers": {
    "taskade": {
      "command": "npx",
      "args": ["-y", "mcp-remote", "https://www.taskade.com/mcp"]
    }
  }
}
```

Scripts, CI jobs, and agent frameworks cannot open a browser. Send `Authorization: Bearer $TASKADE_TOKEN` with a personal access token. See [Use a personal token with hosted MCP](developers/authentication.md#use-a-personal-token-with-hosted-mcp).

## First-time OAuth authentication

An interactive client signs in once, then keeps the token. The client does the OAuth work, and you only sign in and allow access:

```text
  Your MCP client            taskade.com                 You
  ───────────────            ───────────                 ───
  Connect to /mcp,  ──────▶  401 + OAuth metadata URL
  no token
  Register, start   ──────▶  Sign-in and consent  ─────▶ Sign in,
  sign-in                    page                        allow access
                    ◀──────  Access token with
                             the mcp scope
  Call list_spaces  ──────▶  Your paid workspaces
  with the token
```

1. Add the server URL to your client.
2. Follow the browser redirect to Taskade.
3. Sign in with the Taskade account that can open the target workspace.
4. Allow MCP access to your account.
5. Go back to your client. It stores the token.

Do this once for each client.

## Confirm it worked

Ask your client for a first read. A good first prompt:

```text
Use the Taskade tools to list my workspaces. For each one, show the name and my role. Do not change anything.
```

You are done when the client calls `list_spaces` and shows your paid workspaces. The list comes in pages, and a page can be empty while more pages remain. If no page lists a workspace, no workspace of this account has MCP access.

{% hint style="info" %}
**Note:** A `HEAD` request or `curl -I` to `https://www.taskade.com/mcp` returns `401` with `content-type: application/json` and a `WWW-Authenticate: Bearer` header. This response is normal, because the probe sends no token. Do not change the server URL.
{% endhint %}

| You send | You get |
| --- | --- |
| A browser `GET` (`Accept: text/html`) | A setup page for people |
| `HEAD`, `curl -I`, or MCP with no token | `401` and `WWW-Authenticate: Bearer` |
| MCP with an OAuth token or a personal access token | The MCP session |

## The MCP toolset

The tables below list every tool that the hosted server exposes: workspace, project, task, agent, automation, app-editing, and app kit tools. The server also exposes a `taskade://getting-started` resource that an MCP client can read as a quickstart.

Most tools mirror an [Action API v2](api-v2-reference.md) operation. The MCP-native tools are `inspect_space`, `read_project`, `list_automations`, `write_file`, `run_flow`, `get_flow_runs`, `list_my_kits`, and `publish_kit_version`.

Every tool states the MCP hints `readOnlyHint`, `destructiveHint`, and `openWorldHint`. A client can use the hints to approve read tools without a prompt and to ask before a write. Three tools state `openWorldHint: true`, because their effects reach outside the workspace: `prompt_agent`, `run_flow`, and `publish_kit_version`.

The server also adds two Taskade keys to the `_meta` of a tool. A client that does not know them ignores them.

| `_meta` key | Tools | Use it to |
| --- | --- | --- |
| `taskade/write: true` | Every tool that is not read-only | Ask the user before a write |
| `taskade/billed: true` | `prompt_agent` and `run_flow` | Ask the user before a call that uses AI credits or counts toward the monthly automation runs |

Most tools take a `spaceId`. Call `list_spaces` first to find it. That list is **plan-filtered and paginated**, so a page can be empty when more pages remain. Request the next page until `hasNextPage` is false.

### Browse & app editing

| Tool | What it does |
| --- | --- |
| `list_spaces` | List the workspaces with MCP access that you belong to, with your role in each |
| `inspect_space` | Read files and directories in a workspace's virtual filesystem - `app/`, `projects/`, `agents/`, `automations/`, `media/`. Use `viewRange: [start, end]` to return a specific line range from a file |
| `write_file` | Create, edit, or delete files in your Taskade Genesis app's `app/` directory. It can create a file, replace a substring, insert at a line, apply a unified diff, or delete a file |

`write_file` refuses to delete a file while any app source still imports it. Remove or change those imports first. You can bring a deleted file back from the app's **Version History**.

### Read workspace data

| Tool | What it does |
| --- | --- |
| `list_folders` | The folders in a workspace (id, name). The first entry is the workspace itself |
| `list_projects` | Projects in a workspace as structured JSON (id, name) with cursor pagination |
| `list_my_projects` | The projects you viewed recently, across workspaces. It needs no `spaceId` |
| `get_project` | One project by id (id, name) |
| `read_project` | A project's full contents - task tree with assignees, dates, tags |
| `list_tasks` | Tasks in a project (id, text, completed, parent) with cursor pagination |
| `list_blocks` | The top-level blocks of a project (id, text, completed) with cursor pagination |
| `list_fields` | The custom fields on a project. Use a field id with `set_task_field_value` |
| `list_project_members` | The members of a project (handle, display name) |
| `get_share_link` | A project's edit and view share URLs, or `null` when sharing is off. It returns the check URL only for some workspace types |
| `list_templates` | The project templates in a workspace (id, name) |
| `list_media` | The media files in a workspace (id, kind) |
| `list_agents` | The AI agents in a workspace (id, name) with cursor pagination |
| `list_automations` | The automations in a workspace (id, name) with cursor pagination |

### Task writes

These tools mirror the [Action API v2](api-v2-reference.md) task operations:

| Tool | What it does |
| --- | --- |
| `create_task` | Add a task to a project, optionally under a parent task |
| `update_task` | Edit a task's content |
| `complete_task` / `uncomplete_task` | Check a task off, or reopen it |
| `move_task` | Reorder a task or move it under a different parent |
| `set_task_note` / `delete_task_note` | Set or clear a task's note |
| `set_task_date` / `delete_task_date` | Set or clear a task's date |
| `assign_task` / `unassign_task` | Assign a project member to a task, or remove them |
| `set_task_field_value` / `delete_task_field_value` | Set or clear a custom field value on a task |
| `delete_task` | Delete a task |

If an eligible workspace has a Google Calendar connection, a date from `set_task_date` can sync the same way as a date that you set in Taskade.

### Create & orchestrate

| Tool | What it does |
| --- | --- |
| `create_project` | Create a project in a workspace from Markdown |
| `create_agent` | Create an AI agent (name + role instructions) |
| `get_agent` / `update_agent` / `delete_agent` | Read, update, or delete an agent |
| `prompt_agent` | Send a one-shot prompt to an agent and get its text reply |
| `list_conversations` / `get_conversation` | Browse an agent's conversation history - `get_conversation` includes a Markdown transcript |
| `add_knowledge_project` / `remove_knowledge_project` | Attach or detach a project as agent knowledge |
| `add_knowledge_media` / `remove_knowledge_media` | Attach or detach a media file as agent knowledge. The file and the agent must be in the same workspace |

If the new agent must read or change project data, pass `"enableProjectTool": true` to `create_agent`.

You can change this setting later with `update_agent`. This setting also enables the required knowledge support.

### Run automations

| Tool | What it does |
| --- | --- |
| `run_flow` | Start one run of an automation now. The automation must be On and start **When asked** (a manual trigger, labeled **Agent Tool** in the automation editor). Pass `input` when the trigger asks for inputs. It returns `flowRunId` and `status` at once |
| `get_flow_runs` | Read the recent runs of one automation, newest first: status, start and end time, and the failed step and a short error for a failed run |

{% hint style="warning" %}
`run_flow` starts a real run. The run counts toward the monthly automation runs of the plan, and AI steps use credits. A step can also send email or act in a connected app. Call it once for each run that you want.
{% endhint %}

`run_flow` returns before the run ends. Call `get_flow_runs` to read the result. A run status is `running`, `waiting`, `completed`, `failed`, or `filtered`. A `waiting` run is paused on an approval step until a person decides, or until the step times out. Its `endedAt` is `null`, the same as a `running` run. A `filtered` run stopped early on purpose and did not fail. If `run_flow` returns the status `unknown`, `running`, or `waiting`, do not start the run again. Read it with `get_flow_runs`.

### App kits

An app kit is a Taskade Genesis app that you published so other people can add a copy. These tools release a new version of a kit from your MCP client:

| Tool | What it does |
| --- | --- |
| `list_my_kits` | The app kits that you published from the workspaces you own: name, kit page URL, newest version, installs, price, and whether people can add a copy. It returns the `publicSpaceAppId` of each kit, with cursor pagination |
| `publish_kit_version` | Publish a new version of one kit, the same as **Publish version** in the kit's **Version history**. Pass `publicSpaceAppId` and optional `notes` (up to 500 characters) that buyers see in the kit changelog |

Only the workspace owner can call `publish_kit_version`. `list_my_kits` lists kits from workspaces that you own, and it hides a kit whose workspace has no MCP access. Archived and removed kits are not listed.

{% hint style="warning" %}
`publish_kit_version` releases the app as it is now. People who add the kit from then on get this version, and people who already added it keep their copy. From version 2 on, buyers get one email a day at most. Only the newest 20 versions keep a saved copy. Each call removes the saved copy of an older version past that limit.
{% endhint %}

A paid kit keeps its price. You can publish 5 versions of one kit in an hour.

### Project lifecycle

| Tool | What it does |
| --- | --- |
| `create_project_from_template` | Create a project from a template. The template must be in the destination workspace |
| `copy_project` | Copy a project that you can read into a workspace. It returns the new project id |
| `complete_project` / `restore_project` | Archive a project as completed, or restore it. Both are idempotent |
| `enable_share_link` | Turn on a project's share link and return its edit, view, and check URLs |

`enable_share_link` returns an error if the share link is already on, or if your email is not verified.

### The virtual filesystem

`inspect_space` presents each workspace as a directory tree:

```text
workspace/
├── app/            # Taskade Genesis app source (write_file can write here)
├── projects/       # Tasks and documents (read_project and list_tasks give structure)
├── agents/         # AI agent definitions
├── automations/    # Automations (read-only)
└── media/          # Uploaded files (read-only)
```

You can write files in the `app/` directory only. Taskade rejects `write_file` against `projects/`, `agents/`, `automations/`, or `media/`. Use the structured tools in the earlier tables to create projects, edit tasks, and manage agents.

## Example workflows

Each prompt below names the tools that the client calls.

### Refactor a component with Claude

```text
Open my "Landing Page" workspace, look at app/src/App.tsx, and split the hero section into its own component. Keep the existing styling.
```

The client calls `list_spaces`, `inspect_space`, then `write_file` two times: one new component file and one `App.tsx` update.

### Stand up a project and brief an agent

```text
Create a project called "Q3 Launch" with one task for each milestone in this outline. Attach it to my Research agent, then ask the agent to summarize the risks.
```

The client calls `create_project`, `add_knowledge_project`, and `prompt_agent`.

### Audit your app for accessibility

```text
Check every file in app/src/ for missing alt text, ARIA labels, and keyboard handlers. Suggest fixes, but do not apply them yet.
```

The client reads your files with `inspect_space` and shows a report before you approve any edit.

## Tips and gotchas

These rules prevent most surprises.

* **Read before you edit.** Ask your client to inspect a file first. An edit against an old view can fail or give an unexpected result.
* **One workspace at a time.** Tools take a `spaceId`. Before you give a command, point your client at the right workspace.
* **A write goes live.** Each successful `write_file` commits the change and starts a new build. On a live app, the default setting publishes that build by itself. If the app owner chose **Manual Updates**, click **Publish** in Taskade to make the change live.
* **`prompt_agent` runs the agent.** It uses the agent's model and consumes AI credits. Treat it as a real prompt, not a preview. One account can send 60 prompts in 10 minutes, across all agents.

## When to use MCP vs. Taskade EVE

Use Taskade EVE inside Taskade. Use MCP when you work in your own IDE or AI client.

| Use **Taskade EVE** when | Use **MCP** when |
|---|---|
| You are already inside Taskade | You work in your IDE |
| You want to build tasks, automations, and an app in one conversation | You script work across projects, agents, and app code |
| You build from a prompt from start to finish | You want to use a specific model or tool |
| You prefer a conversation | You want exact, file-level control |

## Troubleshooting

Match the message that your client shows to a fix.

| What you see | Cause | Fix |
| --- | --- | --- |
| `MCP access is not available on this workspace's current plan.` | The workspace is on the Free plan | Upgrade the workspace to a paid plan, or pick a paid workspace. |
| `Access denied: you are not a member of this space.` | Your account is not a member of the workspace | Make sure that the workspace ID is correct, or ask for an invitation. |
| `Access denied: your role "…" does not have write access. Requires collaborator or above.` | `write_file` needs the Editor role or above | Ask the workspace owner for the Editor role. A read-only role can still browse. |
| `list_spaces` returns an empty page | The list comes in pages, and it hides workspaces without MCP access | Request the next page until `hasNextPage` is `false`. |
| `You do not have permission to run automations in this workspace.` | Your role cannot run automations in this workspace | Ask the workspace owner for a role that can run automations. |
| `"…" is Off. Turn it On in Taskade, then run it again.` | `run_flow` starts only an automation that is On | Turn the automation On in Taskade, then call `run_flow` again. |
| `run_flow starts only an automation that starts "When asked" (a manual trigger).` | The automation starts on another trigger | Change the trigger to **Agent Tool** (the "When asked" trigger), or let the trigger start the automation. |
| `Too many agent prompts in a short time, so the agent did not run. Try again in about … min.` | The account sent 60 `prompt_agent` calls in 10 minutes | Wait the number of minutes in the message, then call `prompt_agent` again. Do not call it in a loop. |
| `Failed to prompt agent`, with the error code `credits_exhausted` | The workspace has no AI credits left | Upgrade the plan in Taskade, or add credits on a paid plan. A retry does not help. |
| `Too many runs of "…" in a short time, so nothing ran. Try again in about … min.` | The account started this automation 30 times in 10 minutes | Wait the number of minutes in the message, then call `run_flow` once. Do not call it in a loop. |
| `Nothing ran. This workspace used all of its … for this month on the … plan.` | `run_flow` reached the monthly limit of automation runs or steps for the plan | Wait for the limit to reset, or upgrade the plan. |
| `…, so "…" did not run.`, with the error code `connector_plan_required` | A step of the automation uses a connector that the plan does not include | Upgrade the workspace plan, or remove that step. |
| `Only the workspace owner can publish a kit version.` | `publish_kit_version` needs the Owner role in the workspace of the kit | Ask the workspace owner to publish, or to run the tool from their account. |
| `No live kit listing with this id. An archived or removed listing takes no new version.` | The `publicSpaceAppId` is wrong, or the kit is archived or removed | Call `list_my_kits` and use a `publicSpaceAppId` from its result. |
| `Too many versions of this kit in a short time, so nothing was published. Try again in about … min.` | You published 5 versions of this kit in the last hour | Wait the number of minutes in the message, then publish once. |
| The OAuth sign-in starts again and again | The browser is signed in to another Taskade account, or the stored credential is old | Sign in to the right Taskade account in your browser. Remove the Taskade server from the client, then add it again. |
| `401` from a header-based client | The personal access token is wrong or revoked | Create a new token, and update the `Authorization` header. |

### Read a tool error in code

A tool error is a result with `isError: true`. The text block holds the message from the table above. Many refusals also carry `structuredContent.error`, so a script or an agent can branch without a text match:

```json
{
  "isError": true,
  "structuredContent": {
    "error": {
      "class": "rate",
      "code": "rate_limited",
      "message": "Too many agent prompts in a short time, so the agent did not run. Try again in about 3 min.",
      "retry": "after_wait",
      "retryAfterSec": 142
    }
  }
}
```

| Field | Value |
| --- | --- |
| `class` | `auth` (membership or role), `plan` (the plan has no access), `input` (fix the call), `refused` (the target is not in a state to run), `rate` (too many calls), `limit` (a usage or size limit), or `error` |
| `code` | A short code, for example `plan_wall`, `not_member`, `forbidden`, `flow_off`, `not_manual`, `connector_plan_required`, `over_limit`, `rate_limited`, `credits_exhausted`, or `too_large` |
| `message` | The same text as the text block |
| `next` | Optional. Text to show the user, for example the upgrade step |
| `retry` | `no` (the same call fails again), `safe` (you can call again now), or `after_wait` (call again after `retryAfterSec` seconds) |
| `retryAfterSec` | Optional. The number of seconds to wait before you call again. An `after_wait` error carries it |

An error with no `structuredContent.error` is a general failure. Read its text.

## Set this up with your coding agent

Paste this block into your coding agent to connect it.

```text
Connect to the hosted Taskade MCP server at https://www.taskade.com/mcp over Streamable HTTP. If you support interactive sign-in, use OAuth 2.0 with PKCE and dynamic client registration. If you can only send headers, send "Authorization: Bearer <token>" with a personal access token from https://www.taskade.com/settings/api. The workspace must be on a paid Taskade plan. First call list_spaces and page until hasNextPage is false. Then call inspect_space on one workspace and report what you can see. Do not write anything until I confirm.
```

## Next steps

- [Which Taskade MCP do I want?](mcp-overview.md): compare hosted MCP, local Workspace MCP, and the MCP Client connector.
- [Workspace MCP](workspace-mcp.md): run a local server that wraps REST API v1.
- [Run your live app with AI](run-your-app-with-ai.md): run a Taskade Genesis app from a chat with Claude.
- [Action API guide](api-v2-reference.md): the API that most hosted MCP tools mirror.
- [Authentication](developers/authentication.md): personal tokens and OAuth 2.0 in detail.

---

_This page is also published at [taskade.com/docs/mcp/hosted-mcp](https://www.taskade.com/docs/mcp/hosted-mcp)._
