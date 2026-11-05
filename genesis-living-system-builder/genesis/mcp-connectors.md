---
description: >-
  The Model Context Protocol (MCP) is an open standard that lets AI tools talk to each other's data and capabilities. Taskade runs a hosted MCP server, so external AI clients like Claude Desktop and Cursor can connect into your workspace.
---

# MCP Connectors

## Overview

The **Model Context Protocol (MCP)** is an open standard that lets AI tools use the data and actions of other apps. Taskade uses MCP in two directions. Your AI tool can work in your workspace, and your automations can call other MCP servers.

{% hint style="info" %}
**TL;DR:** The hosted Taskade MCP server lets Claude, ChatGPT, Cursor, or VS Code work in your workspace on **every paid plan**. Setup: [Taskade MCP Server](https://www.taskade.com/learn/connect/mcp-server). The other direction runs in an [automation](https://www.taskade.com/learn/automation/automations-execution), where the [MCP Client connector](https://www.taskade.com/learn/connect/mcp-client-integration) calls a remote MCP server on every plan.
{% endhint %}

![Taskade Genesis MCP integrations](https://www.taskade.com/static_images/learn/genesis/mcp-connectors-9bd0c183.gif)

## Keep the MCP Paths Apart

Each MCP path has its own setup and its own plan rule. Pick the path by what starts the work:

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

Use these steps when Taskade must call *out* to another MCP server.

### Step 1: Open Automations

Open the **Automations** tab in your workspace.

### Step 2: Add the MCP Client connector

Add a step and pick the **MCP Client** connector. Enter the address of the remote server.

### Step 3: Save and run the automation

Save the automation. Run it, so the step can list the tools on that server and call the one you pick.

You are done when the run shows the result of the tool. In production, an agent cannot reach an outside MCP server on its own. Let the agent decide, then hand the call to an automation. Full setup: [MCP Client Integration](https://www.taskade.com/learn/connect/mcp-client-integration).

## Reach Workspace DNA and Your App

Over the hosted server, your AI tool works with the three parts of Workspace DNA, and with the app built on top of them:

| Part | Your AI tool can |
| --- | --- |
| [Projects](https://www.taskade.com/learn/projects/databases) (Memory) | Read, create, and copy projects. Add and edit tasks |
| [AI agents](https://www.taskade.com/learn/agents/custom-agents) (Intelligence) | Create, update, and ask agents. Add knowledge |
| [Automations](https://www.taskade.com/learn/automation/automations-execution) (Execution) | List them, run one that starts with the [Agent Tool](https://www.taskade.com/learn/automation/agent-tool) trigger, read its runs |
| [Taskade Genesis app](https://www.taskade.com/learn/genesis/first-app), built on top | Read and edit the app files |

## Edit Your Taskade Genesis App Over MCP

Your AI tool can change the source files of a Taskade Genesis app. It can write only inside the `app/` folder:

- Read a file before you edit it. An edit against an old copy can fail.
- Create a file, replace text, insert at a line, or apply a patch.
- Delete a file that nothing imports. Taskade refuses the delete while an import still points at it.
- Bring back a deleted file from the [version history](https://www.taskade.com/learn/genesis/version-history) of the app.

A saved edit is final, not a draft. The app rebuilds, and an app on the default publish setting goes live with the change. You do not press Publish again.

Some app jobs stay in Taskade. MCP cannot build a new app, or publish an app that is not live yet. It also cannot set who can use an app, or create or edit an automation. Ask Taskade EVE for those.

## Plans and Credits

| Path | Free | Paid plans |
| --- | --- | --- |
| Hosted MCP server | No | Yes |
| Open-source server | Yes | Yes |
| Automation calls out | Yes | Yes |
| Agent calls out alone (production) | No | No |

There is no separate MCP fee. An automation run that your AI tool starts counts toward the monthly automation runs of your plan. Runs and agent questions can use AI credits, the same as in Taskade. See [Pricing](https://www.taskade.com/pricing).

## Frequently Asked Questions

<details>
<summary>Which plans include MCP?</summary>

The hosted Taskade MCP server is on every paid plan. The open-source `taskade/mcp` server on your computer works on every plan, Free included. An automation can call a remote MCP server on every plan, Free included. In production, an agent cannot call a remote MCP server on its own on any plan.
</details>

<details>
<summary>Do MCP calls cost credits?</summary>

There is no separate MCP fee. When your AI tool runs an automation or asks an agent, that work counts toward your plan. It can use AI credits, the same as in Taskade.
</details>

<details>
<summary>Is MCP secure?</summary>

Yes. Connections use encrypted HTTPS. Your AI tool signs in as you, with a Taskade sign-in or a personal access token, so it reaches only what your account can see. Remove the connector or revoke the token to cut off access.
</details>

<details>
<summary>How do built-in agent tools differ from MCP?</summary>

[Built-in tools](https://www.taskade.com/learn/agents/agent-tools) such as web search, code, and file analysis run inside Taskade and give your agents abilities. MCP lets a separate AI tool, such as Claude, work with your Taskade data from the outside.
</details>

<details>
<summary>Can an AI tool reach my Taskade Genesis apps over MCP?</summary>

Your AI tool connects to your workspace. It can reach the projects, tasks, and agents behind your apps, and it can edit app files. The published app stays a normal web app for your visitors.
</details>

<details>
<summary>Does MCP work with every AI model?</summary>

Yes. MCP does not depend on the model. Any AI tool that speaks MCP can connect to Taskade, whatever model it runs.
</details>

## Related guides

- [Taskade MCP Server](https://www.taskade.com/learn/connect/mcp-server). Connect Claude, ChatGPT, Cursor, or VS Code
- [MCP Client Integration](https://www.taskade.com/learn/connect/mcp-client-integration). Call a remote MCP server from an automation
- [Agents and External MCP Servers](https://www.taskade.com/learn/connect/mcp-client). How agents use outside MCP tools
- [Tools for AI Agents](https://www.taskade.com/learn/agents/agent-tools). The built-in agent tools
- [MCP Developer Docs](https://www.taskade.com/docs/mcp). Client setup, [advanced usage](../../apis-living-system-development/workspace-mcp-advanced.md), and [connector details](../../apis-living-system-development/workspace-mcp-advanced.md#outbound-mcp-the-mcp-client-connector)

---

_This page is also published at [taskade.com/learn/genesis/mcp-connectors](https://www.taskade.com/learn/genesis/mcp-connectors)._
