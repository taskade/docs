---
description: >-
  Build agents that run without per-request prompting: automations, Agent Teams, and cross-agent invocation.
---

# Autonomous Agents

An autonomous agent in Taskade does work that a trigger starts, with no person who prompts each step. You build one from three parts: automations, AI Teams, and automations that link one agent to another.

An autonomous agent is **an AI agent that an automation runs for you, on a schedule or an event**. Your own code can also start it with one API call. For the product side, see [AI Agents in Learn Taskade](https://www.taskade.com/learn/agents).

<figure><img src="../.gitbook/assets/autonomous-agents-demo.gif" alt="An automation that runs an AI agent on its own" width="563"><figcaption></figcaption></figure>

## The Three Building Blocks

Each building block removes one kind of manual prompt.

Start with an automation. Add an AI Team when one task needs several kinds of expertise. Chain agents through an automation when one agent must hand work to another.

| Building block | What it does | When to use |
| --- | --- | --- |
| **Automations** | A trigger (schedule, webhook, form, email, or a Taskade event) runs steps, including **Ask an agent** | Most "do this when that happens" cases |
| **AI Teams** | The **Ask an agent team** step sends one task to several agents | Tasks that need distinct expertise |
| **Cross-agent invocation** | An agent starts an automation, and that automation prompts another agent | Specialist chains that your app does not orchestrate |

You can combine the three. Many real systems use two of them together. Browse ready-made examples in the [automation gallery](https://www.taskade.com/automate).

```mermaid
graph TD
  T["Trigger<br/>schedule, webhook, form, event"] --> F["Automation"]
  F --> A["Ask an agent<br/>one agent"]
  F --> TM["Ask an agent team<br/>several agents"]
  A --> O["Output step<br/>task, email, Slack, HTTP"]
  TM --> O
```

## Pattern: Scheduled Agent Task

A schedule trigger runs an automation that prompts an agent and sends the result somewhere.

```mermaid
sequenceDiagram
    participant Schedule as Schedule trigger
    participant Run as Automation
    participant Agent as AI Agent
    participant Output as Output<br/>(Slack / Email / Project)

    Schedule->>Run: Run every day at 09:00
    Run->>Agent: Prompt: "Summarize new customer signups"
    Agent->>Run: Generated summary
    Run->>Output: Post to #growth channel
```

### What to add

Each part of the automation maps to one piece in the automation editor.

| Part | What to add | Notes |
| --- | --- | --- |
| Trigger | A **Schedule** trigger: **Every hour**, **Every day**, **Every week**, **Every month**, or **Custom schedule** | **Every few minutes** needs a paid plan |
| Agent step | An **Ask an agent** action, with your agent selected | Insert trigger data, such as the run time, with the variable controls in the prompt |
| Output step | Slack, email, a new task, or **Send HTTP Request** | Send the agent's answer where your team reads it |

A schedule does not start at the exact minute that you set. Taskade spreads the start times of many schedules, so they do not all run at once:

| Schedule interval | Latest start after the set time |
| --- | --- |
| Every hour, or less often | 30 minutes |
| More often than every hour | Half the interval, at most 10 minutes |

So a run set for **Every day** at 09:00 starts between 09:00 and 09:30. Do not build an automation that needs the run to start at an exact minute.

## Pattern: Event-Triggered Agent

An outside event, such as a webhook call, a form entry, or an email, runs an automation that an agent drives.

```mermaid
sequenceDiagram
    participant External as External Service
    participant Trigger as Taskade Trigger<br/>(Webhook / Form / Email)
    participant Run as Automation
    participant Agent as AI Agent
    participant Action as Downstream Action

    External->>Trigger: Event occurs
    Trigger->>Run: Run automation
    Run->>Agent: Prompt with event context
    Agent->>Run: Response or decision
    Run->>Action: Run the action with the agent output
    Action->>External: Side effect
```

### Example: customer feedback triage

<figure><img src="../.gitbook/assets/autonomous-automation-flow.gif" alt="A feedback triage automation" width="563"><figcaption></figcaption></figure>

A **Webhook Received** trigger takes the form entry, and an agent classifies it. The **Choose a path** step then sends each kind of feedback to its own action.

| Agent result | Path |
| --- | --- |
| Negative and urgent | Create a support ticket |
| Feature request | Add a task to the feedback project |
| Positive | Send a thank-you email |

The **Webhook Received** trigger needs the Pro plan or above. A shareable form (the automation's **Form** tab) and **When an email arrives** work on every plan.

## Pattern: Multi-Agent Team

An AI Team sends one task to several agents. Each agent keeps its own knowledge, tools, and instructions.

```mermaid
graph TD
    Input["Automation step<br/>Ask an agent team"] --> Mode{"Execution Mode"}
    Mode --> Researcher["Researcher agent<br/>web search"]
    Mode --> Writer["Writer agent<br/>drafts"]
    Mode --> Editor["Editor agent<br/>style guide"]
    Researcher --> Output["Team answer<br/>Output field"]
    Writer --> Output
    Editor --> Output
```

### Execution modes

<figure><img src="../.gitbook/assets/agent-orchestration.gif" alt="A team of agents working together" width="563"><figcaption></figcaption></figure>

The **Ask an agent team** step has an **Execution Mode** setting with three values:

| Mode | What happens |
| --- | --- |
| **Auto** | The single best agent for the task responds |
| **Everyone** | Every agent in the team responds |
| **Orchestrate** | Taskade makes a plan, and the agents work through its steps together |

The step does not support Agent App tools. If a tool needs manual approval, the run fails.

### Member roles

A team member can have a role, for example Researcher or Writer. When you edit a team, click **Add role** next to a member. A role is one line of at most 60 characters.

The team manager reads the roles when it picks the member for each task or step. In **Orchestrate** mode, Taskade tells the manager to give a member with the role `Verifier` (in any letter case) review steps only, never a step that creates, changes, or sends data. This is an instruction to the manager, not a tool limit: the member keeps its tools. A team with no roles works as before.

You can also ask Taskade EVE to rename a team, change its instruction, add or remove a member, or set a role.

### Programmatic use

The `promptAgent` operation prompts one agent, not a team. To reach a team from code, link an automation to that agent. Then put an **Ask an agent team** step in the automation.

```bash
curl -s -X POST "https://www.taskade.com/api/v2/promptAgent" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"spaceId":"'"$SPACE_ID"'","agentId":"'"$AGENT_ID"'","prompt":"Produce a blog post on our Q2 launch, ready to publish."}'
```

The response holds the agent's final text in `summary`:

```json
{
  "ok": true,
  "summary": "Here is the Q2 launch post, ready to publish."
}
```

## Pattern: Self-Invoking Chain

One agent reaches another agent **through an automation**. Taskade has no agent-as-a-tool type.

Link an automation to Agent A in its **Actions** → **Automation** sub-tab. Put an **Ask an agent** step in that automation, pointed at Agent B.

```mermaid
sequenceDiagram
    participant App as Your app
    participant A as Agent A
    participant Run as Linked automation
    participant B as Agent B

    App->>A: promptAgent
    A->>Run: Start the automation
    Run->>B: Ask an agent
    B->>Run: Findings
    Run->>A: Result
    A->>App: One summary
```

Your app sends one request to Agent A:

```javascript
const res = await fetch("https://www.taskade.com/api/v2/promptAgent", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    spaceId: process.env.SPACE_ID,
    agentId: process.env.AGENT_A_ID,
    prompt: "Research the latest on X and draft a blog outline",
  }),
});
const data = await res.json();
if (!data.ok) throw new Error(`${res.status} ${data.code}`);
console.log(data.summary);
```

The response is the same shape as any `promptAgent` call:

```json
{
  "ok": true,
  "summary": "Here is the blog outline, based on the latest research."
}
```

Cross-agent invocation moves the orchestration into Taskade. Your app sends one request, and the automation does the handoff.

## Monitoring and Observability

Watch each run, and let Taskade stop an automation that keeps failing.

### Run history

The automation's **Runs** tab shows the **Run History**. Filter it with **All**, **Completed**, **Failed**, or **Running**.

### Credit usage

AI steps use credits. These screens show where the credits go:

- **Settings** → **Credits**: the **Detailed Usage Breakdown** for the account.
- **App Settings** → **Insights** → **AI Usage**: the credits, tokens, and builds for one app.

### Continue after a failed step

An action step has a **Continue if this step fails** setting. Turn it on for a step whose failure must not stop the whole run, for example one item of a loop. Then pick what happens next:

| Choice | What happens when the step fails |
| --- | --- |
| **Stop here** (default) | In a loop, the run moves to the next item. Outside a loop, the run stops at this step |
| **Go to the next step** | The run goes on to the next step, which reads the results of the failed step as empty |

With either choice, Taskade does not mark the run failed, and the failed step still shows in **Runs**. This also applies to a step inside a **Choose a path** branch.

### Automatic pause after failures

Taskade turns off an automation that fails again and again. This stops a broken connection from using more runs.

| Event | Result |
| --- | --- |
| 1st and 3rd failure in a row | Taskade sends a notice |
| 5th failure in a row | The automation turns off, and owners get an email |
| A successful run | The count goes back to zero |

Filtered runs, Taskade rate-limit refusals, and stalled runs that Taskade restarts do not count as failures. A failure of a provider that Taskade runs on its own account, such as a web search vendor, does not count either. A run with a failed step that has **Continue if this step fails** turned on does not count, because Taskade does not mark it failed. A `429` from an outside service does count.

If triggers arrive faster than the automation can run, Taskade keeps the newest triggers and skips the older ones. The run message says "Automation fell behind" and gives the number of skipped triggers.

## Plan Gating

Each building block has an exact plan gate.

| Capability | Where it is available |
| --- | --- |
| Automations (triggers and actions) | **Every plan.** Free includes 10 runs per billing period. Paid plans include more runs at the base level: 350 on Starter, 1,000 on Pro, and 10,000 on Business and above, shared by the workspace |
| Premium connector steps | **Every paid plan** |
| Pro connector steps | **Pro and above** |
| **Every few minutes** schedule | **Every paid plan** |
| **Webhook Received** trigger and the webhook registration API | **Pro and above** |
| AI Teams (**Ask an agent team**) | **Pro and above** |
| Hosted Taskade MCP (inbound: Claude or Cursor reach your workspace) | **Every paid plan** |
| MCP Client connector (outbound: an automation calls a remote MCP server) | **Every plan, Free included** |
| An agent that connects to an outside MCP server | **Not available.** Use the MCP Client connector in an automation |

{% hint style="info" %}
**Note:** Plan gates can change between releases. See [pricing](https://www.taskade.com/pricing) for the current matrix.
{% endhint %}

## Next steps

- [Action API guide](api-v2-reference.md): prompt agents and read results from your code.
- [Webhooks](webhooks.md): start an automation from another app, or get Taskade events.
- [SDK Cookbook](sdk-cookbook.md): copy patterns for retries, pagination, and tests.
- [Long-Term Memory](long-term-memory.md): see where an agent's memory lives.
- [Autonomous AI Agents](https://www.taskade.com/learn/agents/autonomous): build the same patterns in the app.

---

_This page is also published at [taskade.com/docs/guides/autonomous-agents](https://www.taskade.com/docs/guides/autonomous-agents)._
