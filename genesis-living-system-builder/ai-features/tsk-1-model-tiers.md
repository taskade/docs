---
description: >-
  TSK-1 (Taskade System Kernel) sends each AI request to one of four tiers. The tiers name what the AI can do, not which vendor runs it.
---

# TSK-1 Model Tiers

TSK-1 is not one model. It is the layer that controls how AI models, memory, agents and workflows work together in your workspace. When you pick a tier, TSK-1 sends your request to the best model that is available for that tier.

{% hint style="success" %}
**The short version.** Set your agent to **Auto**. TSK-1 then picks the right tier for each request. The four tiers are Instant, Standard, Thinking and Reasoning. Each name tells you what the tier does well, not which provider runs it.
{% endhint %}

***

## How TSK-1 fits in the stack

```
Taskade → Taskade Genesis → Taskade EVE → TSK-1 → Workspace DNA → Running workspace
```

TSK-1 is between **Taskade EVE** and **Workspace DNA**. TSK-1 decides *how* to do each request. It works across Memory (projects), Intelligence (agents) and Execution (automations), and across the Taskade Genesis apps that use them.

***

## The four tiers

The model picker shows one TSK-1 header with four tiers: **TSK-Instant**, **TSK-Standard**, **TSK-Thinking** and **TSK-Reasoning**. Each tier name tells you what the tier does well, not which provider runs it.

| Tier | Plans | Best for |
|------|-------|----------|
| **Instant** | All plans | Fast edits, short answers, fast lookups. Example: rename a task, fix a typo, put an item in a category. |
| **Standard** | Paid plans | Daily work with a balance of speed and thought. Example: write an email, summarize a document, answer a question. |
| **Thinking** | Paid plans | Plans, new content, tasks with many steps. Example: design an automation flow, write a project proposal, make a Genesis app. |
| **Reasoning** | Business and up | Complex systems, deep analysis, teams of agents. Example: audit a workspace, compare data across databases, run a team of agents. |

The picker shows every tier on every plan. To pin a tier, you must have the plan in the table. **Auto** is available on every plan. Auto picks the depth for each request from the task.

***

## Auto (recommended)

When you set your agent to **Auto**, TSK-1 sends each request to the right tier. A fast tier answers simple requests, and a deep tier answers hard requests. Auto is the default for new agents on every plan.

**Every plan, Free included.** Auto is the default on every plan. A Free workspace starts with 0 AI credits. You earn free AI credits with referrals and invites, and you can upgrade at any time. Read [Credits & Billing](../../account-management/credits-and-billing.md).

If you pin an agent or automation **to one tier**, it stays on that tier until you change it. The tier definitions do not change. The models behind each tier can change when better models become available.

{% hint style="info" %}
**Model lineup can change.** TSK-1 runs on the latest frontier models. The tiers name a capability, not a provider. Thus Taskade can upgrade the models, and you do not have to change your settings. The model picker in the app always shows the current tiers.
{% endhint %}

***

## When to pin a tier vs. use Auto

| Scenario | Recommendation |
|----------|---------------|
| An agent for all tasks: chat, answers, drafts | **Auto**. TSK-1 decides. |
| An automation that runs many times and must be fast and cheap | **Instant** or **Standard** |
| An agent that designs workflows, apps or complex plans | **Thinking** |
| An agent that audits, compares data or controls other agents | **Reasoning** |
| You tested the models and prefer one model | One model from **All Models**. Each row shows its credit cost and its plan badge, if it has one. |

If you pin an agent to **one model**, TSK-1 does not route its requests. The agent always uses that model. Each model in the picker shows the plan that it needs. Claude runs on your own API key (BYOK) in custom agents on Pro and up.

***

## Credits

Each tier has its own credit rate. The model picker in the app shows the rates. Auto bills at the rate of the tier that it selects. A pinned custom model bills at the rate of that model.

Read [Credits & Billing](../../account-management/credits-and-billing.md) for the current rates.

***

## Workspace DNA

TSK-1 runs the three Workspace DNA pillars and the apps on top of them:

1. **Projects remember**: your data and context stay connected.
2. **Agents reason**: teams of agents understand goals and take action.
3. **Workflows run**: automations continue after the chat ends.
4. **Apps launch**: one prompt gives one live app.

For the full architecture, read [How Taskade Genesis Works](../genesis/how-genesis-works.md).

***

## What's next

| Guide | What you learn |
|-------|------------------|
| [AI Agents Getting Started](ai-agents-getting-started.md) | Make your first agent and choose a TSK-1 tier |
| [Agent Knowledge & Memory](agent-knowledge.md) | Give agents context from your projects |
| [Multi-Agent Collaboration](multi-agents.md) | Make agents work together with TSK-1 Reasoning |
| [Credits & Billing](../../account-management/credits-and-billing.md) | The credit cost of each tier |

---

_Step-by-step guides on taskade.com/learn: [Thinking Modes: Pick the Right Depth for the Task](https://www.taskade.com/learn/agents/thinking-modes), [TSK-1: The Taskade System Kernel](https://www.taskade.com/learn/genesis/tsk-1)._
