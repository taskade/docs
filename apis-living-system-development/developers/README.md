---
description: >-
  Build on Taskade with the REST API, OAuth 2.0 and personal tokens, MCP server, webhooks, and Taskade Genesis app generation, agents, and automation.
---

# Developer Overview

Build applications, agents, and automations on Taskade from your own code. This page maps each developer surface, so you can pick the one that fits your task.

**The Taskade developer platform is a set of HTTP and MCP surfaces that read and change your workspaces, projects, tasks, and agents.** One account credential works on every surface.

## Platform overview

Your code can reach four product areas.

| Area | What it does | Learn more |
| --- | --- | --- |
| **AI App Builder** | Generates full-stack apps from natural language | [Taskade Genesis](https://www.taskade.com/learn/genesis) |
| **AI Agents** | Custom assistants that answer from your own knowledge | [AI agents guide](https://www.taskade.com/learn/agents/custom-agents) |
| **Automations** | Event-driven steps with 100+ integrations | [Automations](https://www.taskade.com/learn/automation/automations-execution) |
| **Projects and data** | Structured data and custom fields, synced live for everyone in the workspace | [Projects guide](https://www.taskade.com/learn/projects/databases) |

- **Live data:** People who edit a project together see each other's changes as they occur. The API reads and writes the same data over HTTP.
- **Events:** [Webhooks](../webhooks.md) push an event to your service after a data change. You do not poll for changes.

## How Taskade Genesis differs from a code generator

**A code generator returns source code and a preview. Taskade Genesis returns a running app on a live workspace: the data, the agents, and the automations are part of the app.** This changes what your code connects to.

| Layer | A code generator gives you | Taskade Genesis gives you | What your code calls |
| --- | --- | --- | --- |
| **Memory (data)** | A database that you connect and manage | Taskade Projects that the team already edits | [REST API v1](https://www.taskade.com/docs/rest) projects and tasks |
| **Intelligence (AI)** | An AI feature that you add yourself | AI agents with knowledge, tools, and memory | `promptAgent` in the [Action API](../api-v2-reference.md) |
| **Execution (actions)** | Background jobs that you write and host | Automations across 100+ integrations | A **Webhook Received** trigger URL (Pro and above), with its own token |
| **App surface** | A preview that you deploy | A hosted app that you publish | [Hosted MCP](../genesis-app-mcp.md) to edit the app source |

The three layers form Workspace DNA. Memory feeds Intelligence, Intelligence starts Execution, and Execution writes the results back to Memory. Your API credential (a personal access token or OAuth 2.0) reaches the REST API, the Action API, and hosted MCP. A **Webhook Received** trigger uses a separate token that works only for that one automation. Do not send `TASKADE_TOKEN` to a webhook URL. See [Webhooks](../webhooks.md). An integration that writes a task also feeds every app and agent that reads that project.

## Quick start

Pick a credential, then make one call.

| Your goal | Credential | Start with |
| --- | --- | --- |
| Make your first call from a script | Personal access token (recommended for development) | [Quickstart](https://www.taskade.com/docs/getting-started/quickstart): first call, a project, and a task in about five minutes |
| Act for other Taskade users | OAuth 2.0 (recommended for production). Each user signs in and approves access to their own account | [Authentication](authentication.md) |
| Learn every endpoint group | Either credential | [Taskade API overview](api.md) |
| Try a call in the browser | Personal access token | [Interactive API documentation](https://www.taskade.com/api/documentation/) |

To create a token, see [Personal access tokens](personal-tokens.md).

## Developer surfaces

Each surface below reads or changes the same workspace data. Pick the row that matches your task.

| Surface | What it covers | Read more |
| --- | --- | --- |
| **Workspaces and projects** | Create, read, complete, restore, and copy projects. Read and turn on share links | [REST API v1 reference](https://www.taskade.com/docs/rest) |
| **Tasks and data** | Create, read, update, and delete tasks, with assignees, dates, notes, and custom field values | [REST API v1 reference](https://www.taskade.com/docs/rest) |
| **AI agents** | Create and manage agents. Add projects and media files as knowledge. Read the history of each conversation | [REST API v1 reference](https://www.taskade.com/docs/rest) |
| **Prompt an agent** | Action API v2 adds `promptAgent`, with one verb for each endpoint | [Action API guide](../api-v2-reference.md) |
| **Webhooks** | Signed event delivery to your endpoint, and inbound webhook triggers. Both need Pro and above | [Webhooks](../webhooks.md) |
| **Hosted Taskade MCP** | Use your workspace from an MCP client, and edit Taskade Genesis app source from your IDE. Every paid plan | [Hosted MCP](../genesis-app-mcp.md) |
| **Workspace MCP** | [`@taskade/mcp-server`](https://github.com/taskade/mcp), a local MCP server for Claude, Cursor, and Claude Code | [Workspace MCP](../workspace-mcp.md) |
| **TypeScript SDK** | `@taskade/sdk`, a generated client. It is in preview and not yet on public npm | [TypeScript SDK](../sdk-quickstart.md) |
| **Bundles** | Export a whole app as a `.tsk` bundle (Pro and above), and import one into a workspace | [Bundles](../bundles.md) |
| **Automations** | A trigger starts a run, and the steps run in order. After 5 failed runs in a row, the automation turns off and the owners get an email | [Automations](https://www.taskade.com/automate) |
| **Triggers and actions** | A trigger reacts to an event. An action does the work, with its own error handling and timeout for an outside service | [Action and trigger reference](https://www.taskade.com/automate) |
| **Integrations** | 100+ integrations. Each one handles its own sign-in, triggers, and actions. A **Send HTTP Request** step calls any other API | [Integrations](https://www.taskade.com/integrations) |
| **Taskade Genesis** | Builds a web app from a prompt and hosts it for you. You publish the app when it is ready | [Create your first app](https://www.taskade.com/learn/genesis/first-app) |

**Limits to know:**

- Neither API deletes a project. In REST API v1, `GET /projects/{projectId}` is read-only. The Action API v2 renames, archives, and exports a project.
- Neither API has automation endpoints. To start an automation from your code, send a request to its **Webhook Received** trigger (Pro and above). An MCP client can also start an automation that is On and starts **When asked**, with the `run_flow` tool of the [hosted Taskade MCP](../genesis-app-mcp.md).
- Taskade Genesis apps use request-and-response data access. They have no documented live-subscription client, GraphQL subscription, or WebSocket live-query layer for app visitors.
- Taskade Genesis apps have no documented atomic batch API. Import a large dataset in bounded chunks, and make sure that each write succeeds.
- Agents can form agent teams (Pro and above). An automation can run an agent or an agent team.

## Resources

These links cover the specs, examples, and support channels.

| Resource | Use it for |
| --- | --- |
| [OpenAPI specification (v1)](https://www.taskade.com/api/documentation/v1) | Interactive API documentation with live testing |
| [API documentation](https://www.taskade.com/api/documentation/) | The Swagger UI. This address opens v1. The v2 UI is at [/api/documentation/v2](https://www.taskade.com/api/documentation/v2) |
| [Taskade API overview](api.md) | Every endpoint group, with Node.js, Python, and cURL examples |
| [API best practices](api.md#best-practices) | Security, performance, pagination, caching, and retry with backoff. Rate limits apply per IP address and, for REST API v1, per account |
| [Autonomous agents guide](../autonomous-agents.md) | Agent use cases and architecture patterns |
| [Sample app](https://github.com/taskade/taskade-sample-app) | A Taskade Genesis app example |
| [Integration Kit](https://github.com/taskade/integrations) | Open-source Zapier and n8n actions and triggers, built on the public API |
| [Community apps](https://www.taskade.com/apps) | Taskade Genesis apps built by the community |
| [GitHub repository](https://github.com/taskade/docs) | Documentation contributions and feature requests |
| [Status page](https://status.taskade.com/) | API uptime and service announcements |
| [Contact support](https://www.taskade.com/contact) | Help from the Taskade team |

## Next steps

- [Quickstart](https://www.taskade.com/docs/getting-started/quickstart): make your first call, create a project, and add a task.
- [Taskade API overview](api.md): the main page for the REST and Action APIs.
- [Personal access tokens](personal-tokens.md): create and protect the token that every surface uses.
- [Authentication](authentication.md): use OAuth 2.0 when your app acts for other users.
- [Webhooks](../webhooks.md): get an event when data changes.

---

_This page is also published at [taskade.com/docs/getting-started/overview](https://www.taskade.com/docs/getting-started/overview)._
