# Tools for AI Agents

---

## Table of Contents

- [Overview](#overview)
- [Add Tools to Agents](#add-tools-to-agents)
- [Use Agent Tools](#use-agent-tools)
- [Taskade Native Tools](#taskade-native-tools)
  - [Agent Actions (Full Reference)](#agent-actions-full-reference)
  - [Taskade AI (Cross-Agent)](#taskade-ai-cross-agent)
  - [Media Tools](#media-tools)
- [App Tools (Third-Party Integrations)](#app-tools-third-party-integrations)
- [Build Custom Agent Tools](#build-custom-agent-tools)
- [Human in the Loop](#human-in-the-loop)
- [Enable / Disable Tools](#enable--disable-tools)
- [What's Next](#whats-next)

---

## Overview

Agent Tools are integrated add-ons that **augment your AI agents' capabilities** — allowing them to interact with Taskade projects, third-party platforms, and custom workflows. Tools transform agents from text-only assistants into autonomous actors that can take real actions on your behalf.

> **Workspace DNA connection:** Tools are how agents execute the [Automation pillar](../automation/README.md). An agent with tools can send Slack messages, create HubSpot deals, update Google Sheets, and more — all within the conversation.

---

## Add Tools to Agents

| Step | Action |
|---|---|
| 1 | Go to the **Agents** tab |
| 2 | Click the three dots (⋯) next to your agent → **Edit agent** |
| 3 | Open the **Tools** tab |
| 4 | Click **Add tools** |
| 5 | Select from Taskade tools and/or third-party integrations |
| 6 | Save |

<!-- Screenshot: Tools tab with available integrations -->

---

## Use Agent Tools

Agents can use tools through three interfaces:

| Method | How | Best For |
|---|---|---|
| **Project Chat** | Chat with an agent in a project context — agent uses tools automatically | Project-specific actions |
| **Agent Sidebar** | Access agent in the sidebar — tools available in conversation | Quick actions while working |
| **Agent Chat** | Dedicated agent chat session — full tool access | Complex multi-step tasks |

> **Agents decide when to use tools.** You don't need to explicitly request a tool — describe what you want, and the agent determines which tool to use.

---

## Taskade Native Tools

### Agent Actions (Full Reference)

These are built-in Taskade actions every agent can perform in your workspace:

| Category | Actions | Example Prompts |
|---|---|---|
| **Bulk AI Prompts** | Run AI commands across multiple items | "Summarize all tasks in this project", "Translate all items to Spanish" |
| **Project & Task Editing** | Create, update, delete projects and tasks | "Create a new task called 'Review proposal'", "Rename this project to Q2 Plan" |
| **Content Updates** | Modify task descriptions, notes, content | "Add detailed instructions to the 'Setup server' task" |
| **Task Completion** | Mark tasks complete or reopen them | "Mark all tasks under 'Phase 1' as complete" |
| **Due Date Management** | Set, update, remove due dates | "Set the deadline for 'Launch campaign' to next Friday" |
| **Assignments** | Assign or unassign team members | "Assign @Sarah to all tasks in the Marketing section" |
| **Labels & Tags** | Add, remove, manage labels | "Add the 'urgent' label to all overdue tasks" |
| **Task Movement** | Reorder, move tasks between sections | "Move all completed tasks to the 'Done' section" |
| **Smart Editing** | Restructure, reorganize, reformat content | "Convert this brainstorm list into an organized project plan" |
| **Notes & Comments** | Add notes, comments, annotations | "Add a note to this task explaining the delay" |
| **Insights & Reporting** | Analyze project data, generate reports | "Give me a status summary of all projects due this week" |
| **Governance & Safety** | Permission checks, access validation | "Who has access to this project?" |
| **Custom Fields** | Create, update, manage custom fields | "Add a 'Priority' custom field with options: High, Medium, Low" |
| **Search & Intelligence** | Search across workspace, find patterns | "Find all tasks assigned to @John that are overdue" |
| **Content Generation** | Generate text, documents, summaries | "Write a project brief for the new product launch" |
| **Compare & Review** | Diff content, review changes | "Compare this week's metrics to last week's" |

### Taskade AI (Cross-Agent)

| Capability | What It Does | Example |
|---|---|---|
| **Ask other agents** | Query another agent from within a conversation | "Ask the Sales Agent about our latest lead metrics" |
| **Run agent commands** | Execute another agent's custom commands | "Run the Report Agent's `/weekly-summary` command" |

### Media Tools

| Tool | What It Does | Example |
|---|---|---|
| **Search Web** | Search the internet for current information | "Search for the latest pricing trends in SaaS" |
| **Scrape Webpage** | Extract content from any web page | "Scrape the competitor's pricing page and summarize" |
| **Transcribe YouTube** | Get full transcript from any YouTube video | "Transcribe this product demo video and create action items" |

---

## App Tools (Third-Party Integrations)

Connect your agents to external platforms for real-world actions:

| Category | Platform | Capabilities | Example Use |
|---|---|---|---|
| **Communication** | **Slack** | Send channel messages, send DMs, create channels, find users | Agent posts daily standup to #team |
| | **Discord** | Send messages to channels and users | Agent posts community updates |
| | **Microsoft Teams** | Create channels, send channel/chat messages | Agent notifies team of events |
| | **WhatsApp Business** | Send messages to contacts | Agent handles customer comms |
| | **Telegram** | Send messages, manage groups | Agent broadcasts announcements |
| | **Twilio** | Send SMS messages | Agent sends appointment reminders |
| | **Zoom** | Schedule meetings | Agent books video calls |
| **Email** | **Gmail** | Send emails, find emails, create drafts | Agent sends follow-up emails |
| | **Outlook** | Send emails, manage calendar | Agent handles enterprise email |
| **CRM & Sales** | **HubSpot** | Create contacts, create deals, update records | Agent creates CRM records |
| | **Salesforce** | Manage contacts, opportunities, cases | Agent updates enterprise CRM |
| | **Apollo** | Enrich contacts, find leads | Agent enriches lead data |
| **Productivity** | **Google Sheets** | Insert rows, find rows, update cells | Agent logs data to sheets |
| | **Google Docs** | Create documents, append text, find documents | Agent generates documents |
| | **Google Calendar** | Create events, create quick events | Agent schedules meetings |
| | **Google Drive** | Create folders/files, search, duplicate, manage permissions | Agent organizes files |
| | **Google Forms** | Process form responses | Agent handles form data |
| | **Calendly** | Manage scheduling | Agent books appointments |
| | **Typeform** | Process form submissions | Agent handles surveys |
| **Social Media** | **Twitter/X** | Create posts, manage content | Agent posts social updates |
| | **LinkedIn** | Create company updates, publish articles | Agent publishes company news |
| | **Facebook** | Create page posts, manage content | Agent manages page posts |
| | **Instagram** | Create posts, manage content | Agent publishes visual content |
| | **Reddit** | Create posts, monitor threads | Agent engages communities |
| | **TikTok** | Manage content | Agent publishes video content |
| | **YouTube** | Transcribe videos, manage content | Agent processes video content |
| **Content** | **WordPress** | Create blog posts, manage content | Agent publishes content |
| | **Webflow** | Manage CMS content | Agent updates web content |
| | **RSS** | Monitor feeds | Agent tracks content sources |
| **Development** | **GitHub** | Manage issues, PRs, repositories | Agent tracks development |
| | **HTTP/Webhooks** | Custom API requests with analyzer | Agent connects to any API |
| | **Bitbucket** | Manage issues, repositories | Agent tracks code changes |
| **Business** | **Stripe** | Process payments, manage subscriptions | Agent handles billing |
| | **Mailchimp** | Add contacts, manage campaigns | Agent manages email marketing |

> **104 automation actions** and **40+ external service integrations** are available. Agents can use any automation flow as a custom tool. See [Automations](../automation/README.md) for the full integration list.

---

## Build Custom Agent Tools

Turn any automation flow into a reusable agent tool:

| Step | Action |
|---|---|
| 1 | Open your agent's **Tools** tab |
| 2 | Click **New tool** |
| 3 | Design the automation flow (trigger → actions) |
| 4 | Save as a custom tool |
| 5 | The agent can now execute this flow on command |

**Example custom tools:**

| Custom Tool | Automation Flow | Trigger |
|---|---|---|
| "Generate weekly report" | Gather project data → Summarize → Email to team → Post to Slack | Agent decides or `/weekly-report` command |
| "Onboard new client" | Create project → Add template tasks → Send welcome email → Notify team | Agent processes new client request |
| "Escalate issue" | Create urgent ticket → Notify manager via Slack → Schedule follow-up | Agent detects high-severity issue |

> **Deep dive:** [Automations: The Execution Pillar](../automation/README.md) for full automation flow building.

---

## Human in the Loop

For sensitive external actions, enable approval before execution:

| Feature | Detail |
|---|---|
| **What it is** | An approve/reject gate before agents interact with external platforms |
| **When to use** | Sending emails, posting to social media, creating CRM records, any external action |
| **How it works** | Agent proposes the action → You review → Approve or Reject → Agent proceeds or stops |

| Step | Action |
|---|---|
| 1 | Enable "Human in the Loop" in the Tools tab |
| 2 | Select which tools require approval |
| 3 | When the agent wants to use an approved tool, you'll see a confirmation prompt |
| 4 | Click **Approve** to proceed or **Reject** to stop |

> **Tip:** Use Human in the Loop during the first few weeks of agent deployment. Once you trust the agent's judgment, disable it for routine actions.

---

## Enable / Disable Tools

| Action | How |
|---|---|
| Enable a tool | Toggle ON in the Tools tab |
| Disable a tool | Toggle OFF in the Tools tab |
| Remove a tool | Click the remove button next to the tool |

> **Disabled tools** remain configured but are not available to the agent. Re-enable anytime without reconfiguration.

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Multi-Agents](./multi-agents.md) | Build teams of agents with complementary tools |
| [Agent Knowledge & Memory](./agent-knowledge.md) | Train agents on your data |
| [Automations](../automation/README.md) | Build the automation flows agents can trigger |
| [Custom AI Agents](./ai-agents-getting-started.md) | Complete agent setup guide |
