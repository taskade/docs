# Multi-Agents

---

## Table of Contents

- [Overview](#overview)
- [Set Up Your AI Agents](#set-up-your-ai-agents)
- [Team Up with AI Agents](#team-up-with-ai-agents)
- [Use the Agent Sidebar](#use-the-agent-sidebar)
- [Iterate on Output](#iterate-on-output)
- [Chat with Agents & Your Team](#chat-with-agents--your-team)
- [Copy / Duplicate Multi-Agents](#copy--duplicate-multi-agents)
- [Share Agents](#share-agents)
- [Multi-Agent Architecture Patterns](#multi-agent-architecture-patterns)
- [What's Next](#whats-next)

---

## Overview

Multi-Agents lets you **assign multiple AI agents to work together** on projects, tasks, and conversations. Instead of relying on a single generalist AI, you create teams of specialized agents that collaborate — each bringing domain expertise, unique knowledge, and specific tools.

> **Workspace DNA impact:** Multi-agent teams amplify the Intelligence pillar. Each agent contributes +10 points to your [Intelligence Score](../genesis/how-genesis-works.md#workspace-intelligence-score), and teams create compounding intelligence through specialization.
>
> **Plan note:** Multi-Agent Teams are available on Business+ plans.

---

## Set Up Your AI Agents

### Method 1: Build from Scratch

| Step | Action |
|---|---|
| 1 | Open the **Agents** tab in your workspace |
| 2 | Click **Create Agent** |
| 3 | Configure: name, persona, tone, knowledge, tools |
| 4 | Repeat for each specialized agent in your team |

### Method 2: Use Templates

| Step | Action |
|---|---|
| 1 | Browse the agent template library |
| 2 | Select pre-built agent templates for each role |
| 3 | Customize each agent for your specific use case |

### Method 3: Auto-Generate a Team with AI

The fastest way to create a multi-agent team:

| Step | Action |
|---|---|
| 1 | Open the **Agents** tab |
| 2 | Click **Create Agent Team** |
| 3 | Describe your team in plain English (e.g., "I need a marketing team with a content writer, SEO specialist, social media manager, and analytics analyst") |
| 4 | AI generates the complete team with specialized agents, knowledge sources, and tool configurations |
| 5 | Review and customize each agent as needed |

> **Pro tip:** Auto-generated teams include appropriate personas, knowledge connections, and tool assignments based on your description. You can always fine-tune each agent individually afterward.

**Example team setup:**

| Agent | Specialty | Knowledge | Tools |
|---|---|---|---|
| **Research Agent** | Data gathering, web search | Industry reports, competitor URLs | Search Web, Scrape Webpage |
| **Analyst Agent** | Data analysis, insights | Historical data projects, KPIs | Google Sheets, Custom Fields |
| **Writer Agent** | Content creation, copywriting | Brand guidelines, tone docs | Google Docs, WordPress |
| **Coordinator Agent** | Task management, routing | Team structure, processes | Slack, Google Calendar, Taskade Actions |

---

## Team Up with AI Agents

### Assign a Single Agent

| Step | Action |
|---|---|
| 1 | Open a project or task |
| 2 | Click the **Agent** icon |
| 3 | Select an agent from your workspace |
| 4 | The agent now has context for that specific project/task |

### Assign Multiple Agents

| Step | Action |
|---|---|
| 1 | Open a project |
| 2 | Click the **Agent** icon |
| 3 | Select multiple agents for the project |
| 4 | Each agent applies its specialty to the project |

### Bulk-Assign Agents

| Step | Action |
|---|---|
| 1 | Select multiple tasks or projects |
| 2 | Use bulk actions to assign agents |
| 3 | Agents are assigned to all selected items |

---

## Use the Agent Sidebar

| Feature | Detail |
|---|---|
| **Access** | Click the Agent icon in the sidebar |
| **Switch agents** | Toggle between assigned agents mid-conversation |
| **Context awareness** | Agent sees the project/task you're currently viewing |
| **Tool access** | All enabled tools are available in the sidebar |
| **History** | Conversation history preserved per agent |

<!-- Screenshot: Agent sidebar with multiple agents available -->

---

## Iterate on Output

Multi-agent output can be refined iteratively:

| Technique | Example |
|---|---|
| **Sequential refinement** | Research Agent drafts → Writer Agent refines → Reviewer Agent checks |
| **Parallel generation** | Multiple agents tackle different sections simultaneously |
| **Feedback loop** | Ask one agent to critique another agent's output |
| **Role switching** | "Now have the Analyst Agent review what the Writer Agent produced" |

---

## Chat with Agents & Your Team

Multi-agent chats support both AI agents and human team members in the same conversation:

| Participant | Role |
|---|---|
| **AI Agents** | Respond based on knowledge and tools |
| **Human team members** | Provide direction, make decisions, add context |
| **EVE** | Orchestrates and can invoke other agents |

> **Tip:** @mention specific agents in chat to direct questions or tasks to them.

---

## Copy / Duplicate Multi-Agents

| Action | How | Result |
|---|---|---|
| **Copy an agent** | Agent settings → Duplicate | Creates an identical copy you can customize |
| **Copy a team** | Duplicate the project with agent assignments | All agents and their assignments are copied |
| **Share across workspaces** | Publish agent publicly → Clone in another workspace | Agent config is replicated (knowledge may need re-linking) |

---

## Share Agents

| Sharing Method | Scope | How |
|---|---|---|
| **Within workspace** | Team members | Agents are available to all workspace members by default |
| **Cross-workspace** | Other workspaces | Publish publicly → Clone |
| **Public** | Anyone | Publish with public toggle |
| **Embedded in Genesis app** | App users | Add agent chat widget to your Genesis app |

---

## Multi-Agent Architecture Patterns

| Pattern | Description | Best For | Example |
|---|---|---|---|
| **Sequential Pipeline** | Agent A → Agent B → Agent C (output flows linearly) | Content creation, data processing | Research → Write → Review |
| **Hub and Spoke** | Central coordinator routes to specialists | Customer support, complex queries | Coordinator → routes to Sales/Support/Billing |
| **Parallel Fan-Out** | Multiple agents work simultaneously | Report generation, data analysis | Finance + Marketing + Operations agents each analyze their domain |
| **Debate / Review** | Agents critique each other's work | Quality control, decision-making | Proposal Agent creates → Critic Agent reviews → Proposal Agent revises |
| **Escalation Chain** | Start with generalist, escalate to specialist | Support tiers, triage | Tier 1 Agent → Tier 2 Specialist → Human escalation |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Custom AI Agents](./ai-agents-getting-started.md) | Build individual agents |
| [Agent Knowledge & Memory](./agent-knowledge.md) | Train agents with domain knowledge |
| [Tools for AI Agents](./agent-tools.md) | Add capabilities to each agent |
| [Automations](../automation/README.md) | Connect agents to automated workflows |
