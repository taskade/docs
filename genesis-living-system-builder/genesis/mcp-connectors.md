---
description: >-
  Connect Claude, Cursor and other AI tools to your Taskade workspace through the hosted MCP server. Call other MCP servers from automations.
---

# MCP Connectors

## Overview

The **Model Context Protocol (MCP)** is an open standard that lets AI tools use the data and actions of other apps. Taskade uses MCP in two directions. Your AI tool can work in your workspace, and your automations can call other MCP servers.

{% hint style="info" %}
**TL;DR:** With the hosted Taskade MCP server, Claude, ChatGPT, Cursor or VS Code can work in your workspace on **every paid plan**. Setup: [Taskade MCP Server](https://www.taskade.com/learn/connect/mcp-server). The other direction runs in an [automation](https://www.taskade.com/learn/automation/automations-execution), where the [MCP Client connector](https://www.taskade.com/learn/connect/mcp-client-integration) calls a remote MCP server on every plan.
{% endhint %}

## Keep the MCP Paths Apart

Each MCP path has its own setup and its own plan rule. Pick the path from the thing that starts the work:

```text
AI TOOL STARTS       TASKADE STARTS
┌────────────────┐   ┌────────────────┐
│ Claude, Cursor │   │ An automation  │
└───────┬────────┘   └───────┬────────┘
        ▼                    ▼
┌────────────────┐   ┌────────────────┐
│ Hosted MCP or  │   │ MCP Client     │
│ open-source    │   │ connector      │
└───────┬────────┘   └───────┬────────┘
        ▼                    ▼
┌────────────────┐   ┌────────────────┐
│ Your workspace │   │ External MCP   │
│                │   │ server         │
└────────────────┘   └────────────────┘
```

| Path | What it does | Plan |
| --- | --- | --- |
| Hosted MCP server | Your AI tool connects to `https://www.taskade.com/mcp` and works in your workspace | Every paid plan |
| Open-source server | The `taskade/mcp` server runs on your computer with a personal access token | Every plan, Free included |
| Automation calls out | An automation uses the MCP Client connector to call a remote MCP server | Every plan, Free included |
| Agent calls out alone | An agent calls a remote MCP server with no automation | Not available in production |

## Call Another MCP Server from Taskade

If Taskade must call *out* to another MCP server, do these steps.

### Step 1: Open Automations

Open the **Automations** tab in your workspace.

### Step 2: Add the MCP Client connector

Add a step and pick the **MCP Client** connector. Then enter the address of the remote server.

### Step 3: Save and run the automation

Save the automation, then run it. The step lists the tools on that server and calls the tool that you pick.

When the run shows the result of the tool, the setup is done. In production, an agent cannot connect to an outside MCP server alone. Let the agent decide, then give the call to an automation. Full setup: [MCP Client Integration](https://www.taskade.com/learn/connect/mcp-client-integration).

## Reach Workspace DNA and Your App

Through the hosted server, your AI tool works with the three parts of Workspace DNA, and with the app on top of them:

| Part | Your AI tool can |
| --- | --- |
| [Projects](https://www.taskade.com/learn/projects/databases) (Memory) | Read, create, and copy projects. Add and edit tasks |
| [AI agents](https://www.taskade.com/learn/agents/custom-agents) (Intelligence) | Create, update, and ask agents. Add knowledge |
| [Automations](https://www.taskade.com/learn/automation/automations-execution) (Execution) | List them, run one that starts with the [Agent Tool](https://www.taskade.com/learn/automation/agent-tool) trigger, read its runs |
| [Taskade Genesis app](https://www.taskade.com/learn/genesis/first-app), built on top | Read and edit the app files |

## Edit Your Taskade Genesis App Over MCP

Your AI tool can change the source files of a Taskade Genesis app. It can write only in the `app/` folder:

- Read a file before you edit it. An edit against an old copy can fail.
- Create a file, replace text, insert at a line, or apply a patch.
- Delete a file that nothing imports. If an import still points at the file, Taskade refuses the delete.
- Bring back a deleted file from the [version history](https://www.taskade.com/learn/genesis/version-history) of the app.

A saved edit is final, not a draft. The app builds again. If the app uses the default publish setting, the change goes live. You do not press Publish again.

You must do some app jobs in Taskade. MCP cannot build a new app or publish an app that is not live yet. MCP also cannot set who can use an app, or create or edit an automation. Ask Taskade EVE to do these jobs.

## Plans and Credits

| Path | Free | Paid plans |
| --- | --- | --- |
| Hosted MCP server | No | Yes |
| Open-source server | Yes | Yes |
| Automation calls out | Yes | Yes |
| Agent calls out alone (production) | No | No |

MCP has no separate fee. If your AI tool starts an automation run, the run counts toward the monthly automation runs of your plan. Runs and agent questions can use AI credits, the same as in Taskade. Read [Pricing](https://www.taskade.com/pricing).

## Frequently Asked Questions

<details>
<summary>Which plans include MCP?</summary>

The hosted Taskade MCP server is on every paid plan. The open-source `taskade/mcp` server on your computer works on every plan, Free included. An automation can call a remote MCP server on every plan, Free included. In production, an agent cannot call a remote MCP server on its own on any plan.
</details>

<details>
<summary>Do MCP calls cost credits?</summary>

MCP has no separate fee. When your AI tool runs an automation or asks an agent, that work counts toward your plan. The work can use AI credits, the same as in Taskade.
</details>

<details>
<summary>Is MCP secure?</summary>

Yes. Connections use encrypted HTTPS. Your AI tool signs in as you, with a Taskade sign-in or a personal access token. Thus it can only get to the data that your account can see. To stop the access, remove the connector or revoke the token.
</details>

<details>
<summary>How do built-in agent tools differ from MCP?</summary>

[Built-in tools](https://www.taskade.com/learn/agents/agent-tools), for example web search, code and file analysis, run in Taskade and give skills to your agents. With MCP, a separate AI tool, for example Claude, works with your Taskade data from the outside.
</details>

<details>
<summary>Can an AI tool reach my Taskade Genesis apps over MCP?</summary>

Your AI tool connects to your workspace. It can use the projects, tasks and agents behind your apps, and it can edit app files. For your visitors, the published app stays a normal web app.
</details>

<details>
<summary>Does MCP work with every AI model?</summary>

Yes. MCP does not depend on the model. Each AI tool that supports MCP can connect to Taskade, with all models.
</details>

## Related guides

- [Taskade MCP Server](https://www.taskade.com/learn/connect/mcp-server). Connect Claude, ChatGPT, Cursor, or VS Code
- [MCP Client Integration](https://www.taskade.com/learn/connect/mcp-client-integration). Call a remote MCP server from an automation
- [Agents and External MCP Servers](https://www.taskade.com/learn/connect/mcp-client). How an agent hands an outside MCP call to an automation
- [Tools for AI Agents](https://www.taskade.com/learn/agents/agent-tools). The built-in agent tools
- [MCP Developer Docs](https://www.taskade.com/docs/mcp). Client setup, [advanced usage](../../apis-living-system-development/workspace-mcp-advanced.md), and [connector details](../../apis-living-system-development/workspace-mcp-advanced.md#outbound-mcp-the-mcp-client-connector)

---

_This page is also published at [taskade.com/learn/genesis/mcp-connectors](https://www.taskade.com/learn/genesis/mcp-connectors)._
