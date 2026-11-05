---
description: >-
  Once your Taskade Genesis app is live, run its day-to-day operations by talking to Claude - read, update, and flag what needs attention.
---

# Run Your Live App by Talking to Claude

Run the day-to-day work of a live Taskade Genesis app from Claude or another AI client. You read records, update fields, complete work, and ask the client to flag what needs attention.

## Before you start

You need one MCP connection and the link to your app.

| Requirement | Details |
| --- | --- |
| MCP connection | The [hosted Taskade MCP](genesis-app-mcp.md) at `https://www.taskade.com/mcp` (paid plans, OAuth or a token), or the local [Workspace MCP](workspace-mcp.md) with `TASKADE_API_KEY` |
| Token | Only for a token-based setup. Create it at [taskade.com/settings/api](https://www.taskade.com/settings/api). |
| App link | The link to your Taskade Genesis app, or the name of the workspace that holds it. The app reads its data from projects in that workspace |
| Fields | Every custom field that you want to update. Neither MCP server creates a new custom field. |

## 1. Point your assistant at your app

Paste your app link, or give the workspace and project names. Your assistant calls `list_spaces` and `list_projects` to find the project, so you do not copy an ID out of the URL.

```text
Here is my app: <paste link>. Find this project and show me what is inside.
```

The assistant lists the contents of the project.

## 2. Read your business

Ask questions in plain words. The assistant reads the tasks and fields for you.

```text
Show me every overdue job.
```

```text
What is the status of the Johnson project?
```

```text
List this week's new client intakes.
```

## 3. Update records and fields

Ask for the change. The assistant updates tasks, dates, and field values.

```text
Mark the Johnson job complete and set the next service date to next Friday.
```

```text
Log this invoice against the Acme account.
```

```text
Set the priority field on every overdue task to High.
```

## 4. Let it keep watch

Ask for one summary of what needs you today.

```text
Flag anything overdue and tell me what needs my attention today.
```

You are done when the assistant reports the overdue items, and the changes from step 3 show in your Taskade Genesis app.

## What this changes

Both MCP options change the data of your app. Only the hosted server can also change its design and source code.

| Item | Hosted Taskade MCP | Workspace MCP |
| --- | --- | --- |
| Projects, tasks, and field values | Read and write | Read and write |
| New custom fields | No. Add the field in Taskade first. | No. Add the field in Taskade first. |
| App design, layout, and source code | Yes, with `write_file` in the `app/` folder | No |

To change the design of the app, use Taskade Genesis or the [hosted Taskade MCP](genesis-app-mcp.md).

## Set this up with your coding agent

Paste this block into your coding agent to connect it.

```text
Connect to the hosted Taskade MCP server at https://www.taskade.com/mcp over Streamable HTTP. Use OAuth 2.0 with PKCE if you support interactive sign-in, or send "Authorization: Bearer <token>" with a personal access token from https://www.taskade.com/settings/api. The workspace must be on a paid Taskade plan. Call list_spaces to find the workspace of my app, then list_projects to find its projects. Report the projects and their fields. Do not write anything until I confirm.
```

## Next steps

- [Hosted Taskade MCP](genesis-app-mcp.md): set up a remote connection with OAuth.
- [Workspace MCP](workspace-mcp.md): run the local npm server.
- [MCP Client connector](https://www.taskade.com/learn/connect/mcp-client-integration): call another MCP server from an automation. An agent can trigger that automation.
- [Integrations](https://www.taskade.com/integrations): connect Slack, Notion, or Gmail to an automation.

---

_This page is also published at [taskade.com/docs/mcp/run-your-app-with-ai](https://www.taskade.com/docs/mcp/run-your-app-with-ai)._
