---
description: >-
  Create teams of AI agents that work together — Taskade automatically picks
  the best-qualified agent to respond, or lets them collaborate on complex tasks.
---

# AI Agent Teams

An AI Team puts several specialized agents in one chat. You send one message, and the mode that you pick decides which agents reply. In **Auto** mode, Taskade sends each message to the agent that fits it best.

{% hint style="info" %}
**An AI Team works like a real team.** You do not ask your accountant to write marketing copy. In an AI Team, the correct specialist does each task.
{% endhint %}

{% hint style="info" %}
**Plan:** AI Teams need Pro or a higher plan (Pro, Business, Max, or Enterprise). Free and Starter workspaces can still use single custom agents. Each agent that replies uses AI credits. Thus an **Everyone** turn costs more than an **Auto** turn.
{% endhint %}

## Create a Team

1. In your workspace sidebar, open **AI Teams**.
2. Click **Create**. You can also click **+** (**Create AI team**) next to **AI Teams** and pick **Start Blank**.
3. In the **Create Team** dialog, type a **Name**.
4. Under **Add to team**, add the agents that you want. Add at least one agent.
5. Click **Create**.

All agents in a team must be in the same workspace. You can use the team immediately.

### Give Each Agent a Role

A role is a short label, such as Researcher or Writer. It tells the team what each agent is for. In **Orchestrate** mode, the lead reads the roles to pick the agent for each step.

1. In **AI Teams**, open the team.
2. Click **Edit team**.
3. Under **Manage team**, click **+ Add role** below the name of an agent.
4. Type the role (up to 60 characters), and press **Enter**.
5. Click **Update**.

You can also ask Taskade EVE to rename a team, change its instruction, add or remove an agent, or set the role of each agent.

### Create a Team with AI

If you do not know which agents to include, let the AI Team Generator make them.

1. In **AI Teams**, click **Generate**.
2. Describe the work of the team (for example, "A content marketing team that handles blog writing, SEO optimization, and social media scheduling").
3. Press **Enter**.

Taskade creates the specialized agents, gives each one a role and tools, and groups them into a team. Review each agent, and change it if necessary.

{% hint style="success" %}
**The AI Team Generator is the fastest way to start.** You describe a business function and get a team that works. You can change each agent later.
{% endhint %}

## How to Use Your Team

### Chat in the AI Teams Tab

1. Open **AI Teams**.
2. Select your team.
3. Pick a mode above the message box.
4. Type your message.

In **Auto** mode, the best agent for the message replies. To hear from more agents, select a different mode (see [Execution Modes](#execution-modes)).

### Chat Inside a Project

1. Open a project.
2. Click the **chat balloon** icon in the top bar.
3. Open the menu at the top of the chat.
4. Pick your team from the teams list.
5. Type your message.

The team uses the project as context. Thus the answers come from your real work.

### Assign a Team to Tasks

In a project, type **/** and the team name to assign the team to a task. The team picks the correct agent for the content of the task.

## Execution Modes

The execution mode controls **how** your team replies. Choose the mode that fits your work.

| Mode | What Happens | Best For |
|---|---|---|
| **Auto** | Taskade picks the single best agent for your message | Most everyday requests, fast and with no setup |
| **Everyone** | Every agent on the team replies, one after another | Many points of view or second opinions |
| **Manual** | Only the agents you select reply, one after another | A fixed sequence, such as researcher then writer |
| **Orchestrate** | A lead plans the steps, gives each step to an agent, and adds a review step | Large tasks that need the skills of many specialists |

{% hint style="info" %}
**Start with Auto mode.** Auto mode is correct for most requests. Other modes give you more control, or show how different agents do the same task.
{% endhint %}

### When to use each mode

**Auto**: "Handle this customer inquiry" (Taskade sends it to the correct agent)

**Everyone**: "What should our Q2 strategy be?" (each agent gives its point of view)

**Manual**: "Turn these notes into a blog post", with the Researcher and the Writer selected (only the agents that you pick)

**Orchestrate**: "Write a product launch plan covering marketing, pricing, and support" (many specialists, one final result)

## Use Cases

### Customer Support Team

Put agents for billing, technical problems, and account management in one team. Each question goes to the correct specialist.

### Research Panel

Put a market research agent, a competitor analysis agent, and a data analyst agent in one team. Ask a strategic question and get an answer from many points of view.

### Content Pipeline

Put a research agent, a writing agent, an SEO agent, and a social media agent in one team. One prompt can make a blog post, improve it for search, and draft social posts for it.

### Sales Qualification

Put a lead research agent, a qualification agent, and an outreach agent in one team. Give the team a list of prospects. You get qualified leads and personal follow-up drafts.

## Tips for Effective Teams

* **Give each agent a clear specialty.** If two roles overlap, the team cannot decide which agent replies. If two agents cover "marketing," give one "content" and the other "paid ads."
* **Keep teams small.** A team of 3 to 5 agents works best. Larger teams are slower and give less focused results.
* **Do a test of each agent first.** Make sure that each agent works well alone before you add it to a team.
* **Use clear team names.** "Customer Success Team" is better than "Team 1." Clear names help you and your teammates pick the correct team.

## Next Steps

* [AI Agent Tools](agent-tools.md): let each agent take action.
* [Agent Knowledge & Memory](agent-knowledge.md): give agents your business data.
* [AI Agents Getting Started](ai-agents-getting-started.md): create single agents before you build teams.
* [Automation Recipes](../automation/recipes.md): connect teams to automations.

---

_Step-by-step guides on taskade.com/learn: [AI Teams](https://www.taskade.com/learn/agents/ai-teams), [AI Team Generator](https://www.taskade.com/learn/agents/team-generator)._
