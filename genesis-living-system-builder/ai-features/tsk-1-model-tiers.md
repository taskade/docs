---
description: >-
  TSK-1 (Taskade System Kernel) is the intelligence layer that auto-routes AI work across four capability tiers — vendor-agnostic, always current.
---

# TSK-1 Model Tiers

TSK-1 is not a single model. It is an **orchestration layer** — the intelligence system that coordinates how AI models, memory, agents, and workflows operate inside your workspace. When you pick a tier, TSK-1 routes your request to the best available model for that capability level.

{% hint style="success" %}
**The short version.** Set your agent to **Auto** and TSK-1 picks the right tier per request. The four tiers — Instant, Standard, Thinking, Reasoning — describe what the system is good at, not which provider powers it.
{% endhint %}

***

## How TSK-1 fits in the stack

```
Taskade → Genesis → EVE → TSK-1 → Workspace DNA → Running workspace
```

TSK-1 sits between the **Taskade EVE** persona and **Workspace DNA** — it is the engine that decides *how* to execute a given request across the Memory (projects), Intelligence (agents), and Execution (automations) pillars, and the Taskade Genesis apps built on them.

***

## The four tiers

The model picker shows one TSK-1 header with a capability ladder (**TSK-Instant**, **TSK-Standard**, **TSK-Thinking**, **TSK-Reasoning**). Each tier is defined by what it's good for, not by its underlying provider:

| Tier | Best for | Example use | Plans |
|------|----------|------------|--------------|
| **Instant** | Fast edits, simple completions, quick lookups | Rename a task, fix a typo, categorize an item | All plans |
| **Standard** | Everyday work — balanced speed and reasoning | Draft an email, summarize a document, answer a question | Paid plans |
| **Thinking** | Planning, creation, multi-step reasoning | Design an automation flow, write a project proposal, generate a Genesis app | Paid plans |
| **Reasoning** | Complex systems, deep analysis, multi-agent coordination | Audit a workspace, cross-reference databases, run a multi-agent team | Business and up |

Every tier is visible in the picker on every plan; manually pinning a tier requires the plan shown. **Auto** is available on every plan and picks the depth for each request based on the task.

***

## Auto (recommended)

Set your agent to **Auto** and TSK-1 dynamically routes each request to the appropriate tier — fast when you need speed, deep when you need reasoning. Auto is the default for new agents on every plan.

**Every plan, Free included.** Auto is the default on every plan. A Free workspace starts with 0 AI credits: you earn free AI credits with referrals and invites, and you can upgrade any time. See [Credits & Billing](../../account-management/credits-and-billing.md).

Agents or automations **pinned to a specific tier** stay on that tier until you change them. The tier definitions are stable; the underlying models that serve each tier may change as the frontier improves.

{% hint style="info" %}
**Model lineup may change.** TSK-1 runs on the latest frontier models. Because the tiers describe capability rather than provider, Taskade can upgrade the underlying models without you needing to reconfigure anything. The in-app model picker always reflects the current tier lineup.
{% endhint %}

***

## When to pin a tier vs. use Auto

| Scenario | Recommendation |
|----------|---------------|
| General-purpose agent — chat, answer questions, draft content | **Auto** — let TSK-1 decide |
| High-volume automation that needs low latency and low cost | **Instant** or **Standard** |
| Agent that designs workflows, apps, or complex plans | **Thinking** |
| Agent that audits, cross-references, or coordinates other agents | **Reasoning** |
| You have a specific model preference from prior testing | A specific model from **All Models** (each row shows its credit cost and any plan badge) |

Agents pinned to a **specific model** bypass TSK-1 routing entirely — they always use that model. Each model in the picker shows the plan it needs. Claude runs on your own API key (BYOK) in custom agents on Pro and up.

***

## Credits

Each tier has its own credit rate, shown in the in-app model picker. Auto routes to the tier it selects, billing at that tier's rate. Pinned custom models bill at the model's own rate.

See [Credits & Billing](../../account-management/credits-and-billing.md) for current rates.

***

## Workspace DNA

TSK-1 powers the three Workspace DNA pillars and the apps built on them:

1. **Projects remember** — your data and context stay connected.
2. **Agents reason** — multi-agent teams understand goals and take action.
3. **Workflows run** — automations continue after chat ends.
4. **Apps launch** — one prompt, one live app.

For the full architecture, see [How Taskade Genesis Works](../genesis/how-genesis-works.md).

***

## What's next

| Guide | What you'll learn |
|-------|------------------|
| [AI Agents Getting Started](ai-agents-getting-started.md) | Set up your first agent and choose a TSK-1 tier |
| [Agent Knowledge & Memory](agent-knowledge.md) | Give agents context from your projects |
| [Multi-Agent Collaboration](multi-agents.md) | Coordinate multiple agents with TSK-1 Reasoning |
| [Credits & Billing](../../account-management/credits-and-billing.md) | Understand credit costs per tier |

---

_Step-by-step guides on taskade.com/learn: [Thinking Modes: Pick the Right Depth for the Task](https://www.taskade.com/learn/agents/thinking-modes), [TSK-1: The Taskade System Kernel](https://www.taskade.com/learn/genesis/tsk-1)._
