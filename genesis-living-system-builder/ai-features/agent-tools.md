---
description: >-
  Give Taskade AI agents real actions: add native tools, Slack/Gmail/HubSpot integrations, custom automation tools, and human-in-the-loop approvals.
---

# Tools for AI Agents

---

## Overview

With tools, your AI agents can **act, not only chat**. An agent with tools can work in your Taskade projects, use other apps, and run your automations. You turn on each tool, and the agent uses it in the chat.

> **Workspace DNA connection:** Tools connect agents to the [Execution pillar](../automation/README.md) of Workspace DNA. An agent with tools can send Slack messages, create HubSpot deals, update Google Sheets, and more, inside the chat.

---

## Add Tools to Agents

1. Open **AI Agents** in your workspace sidebar.
2. Click the three dots (⋯) next to your agent.
3. Choose **Add tools**. The **Actions** tab of the agent opens on the **Tools** sub-tab.
4. Turn on the Taskade tools and the third-party apps that the agent needs. Taskade saves each change.

To filter the list, click **All**, **Active**, **Taskade**, **Apps**, or **Custom**.

<!-- Screenshot: Tools tab with available integrations -->

---

## Use Agent Tools

Agents can use tools in three places:

| Method | How | Best For |
|---|---|---|
| **Project Chat** | Chat with an agent inside a project. The agent uses its tools when the request needs them | Actions for one project |
| **Agent Sidebar** | Open the agent in the sidebar. Its tools work in the chat | Quick actions while you work |
| **Agent Chat** | Open a separate chat with the agent. All its tools work | Large tasks with many steps |

> **The agent decides when to use a tool.** You do not name the tool. Describe what you want, and the agent picks the tool.

---

## Taskade Native Tools

### Agent Actions (Full Reference)

Every agent can do these built-in Taskade actions in your workspace:

| Category | Actions | Example Prompts |
|---|---|---|
| **Bulk AI Prompts** | Run AI commands on many items at the same time | "Summarize all tasks in this project", "Translate all items to Spanish" |
| **Project & Task Editing** | Create, update, and delete projects and tasks | "Create a new task called 'Review proposal'", "Rename this project to Q2 Plan" |
| **Content Updates** | Change task descriptions, notes, and content | "Add detailed instructions to the 'Setup server' task" |
| **Task Completion** | Mark tasks complete or open them again | "Mark all tasks under 'Phase 1' as complete" |
| **Due Date Management** | Set, update, and remove due dates | "Set the deadline for 'Launch campaign' to next Friday" |
| **Assignments** | Assign or unassign team members | "Assign @Sarah to all tasks in the Marketing section" |
| **Labels & Tags** | Add, remove, and manage labels | "Add the 'urgent' label to all overdue tasks" |
| **Task Movement** | Reorder tasks and move them between sections | "Move all completed tasks to the 'Done' section" |
| **Smart Editing** | Restructure and reformat content | "Convert this brainstorm list into an organized project plan" |
| **Notes & Comments** | Add notes and comments | "Add a note to this task explaining the delay" |
| **Insights & Reporting** | Analyze project data and make reports | "Give me a status summary of all projects due this week" |
| **Governance & Safety** | Show access and permissions | "Who has access to this project?" |
| **Custom Fields** | Create, update, and manage custom fields | "Add a 'Priority' custom field with options: High, Medium, Low" |
| **Search & Intelligence** | Search the workspace and find patterns | "Find all tasks assigned to @John that are overdue" |
| **Content Generation** | Write text, documents, and summaries | "Write a project brief for the new product launch" |
| **Compare & Review** | Compare content and review changes | "Compare this week's metrics to last week's" |

### Taskade AI (Cross-Agent)

| Capability | What It Does | Example |
|---|---|---|
| **Ask an agent** | Ask another agent a question inside a chat | "Ask the Sales Agent about our latest lead metrics" |
| **Run an agent command** | Run a custom command of another agent | "Run the Report Agent's `/weekly-summary` command" |

### Media Tools

| Tool | What It Does | Example |
|---|---|---|
| **Search the web** | Search the internet for current information | "Search for the latest pricing trends in SaaS" |
| **Read a web page** | Get the text content of a web page. **Summarize a web page** gives a short summary instead | "Read this pricing page and summarize the plans" |
| **Transcribe a YouTube video** | Get the full transcript of a YouTube video | "Transcribe this product demo video and create action items" |

> **Web search in public chats:** In your own chats, a custom agent can search the web and read a web page with no tool turned on. A public chat searches the web only when the agent has **Search the web** turned on. It reads a page only when **Read a web page** is on. In both cases, the **Media** row on the **Tool Permissions** tab of **Publish** must read **Visitors can use this**.

---

## App Tools (Third-Party Integrations)

Connect your agents to other apps to do real work:

| Category | Platform | Capabilities | Example Use |
|---|---|---|---|
| **Communication** | **Slack** | Send channel messages, send DMs, create channels, find users | Agent posts daily standup to #team |
| | **Discord** | Send messages to channels and users | Agent posts community updates |
| | **Microsoft Teams** | Create channels, send channel and chat messages | Agent tells the team about events |
| | **WhatsApp Business** | Send messages to contacts | Agent sends customer messages |
| | **Telegram** | Send messages, manage groups | Agent sends announcements |
| | **Twilio** | Send SMS messages | Agent sends appointment reminders |
| **Email** | **Gmail** | Send emails, find emails, create drafts | Agent sends follow-up emails |
| | **Outlook** | Send emails, manage calendar | Agent sends company email |
| **CRM & Sales** | **HubSpot** | Create contacts, create deals, update records | Agent creates CRM records |
| | **Salesforce** | Manage contacts, opportunities, cases | Agent updates the company CRM |
| | **Apollo** | Enrich contacts, find leads | Agent adds data to leads |
| **Productivity** | **Google Sheets** | Add rows, find rows, update cells | Agent logs data to sheets |
| | **Google Docs** | Create documents, add text, find documents | Agent writes documents |
| | **Google Calendar** | Create events, create quick events | Agent schedules meetings |
| | **Google Drive** | Create folders and files, search, duplicate, manage permissions | Agent organizes files |
| | **Google Forms** | Process form responses | Agent processes form data |
| | **Calendly** | Manage scheduling | Agent books appointments |
| | **Typeform** | Process form submissions | Agent processes surveys |
| **Social Media** | **Twitter/X** | Create posts, manage content | Agent posts social updates |
| | **LinkedIn** | Create company updates, publish articles | Agent publishes company news |
| | **Facebook** | Create page posts, manage content | Agent manages page posts |
| | **Reddit** | Create posts, monitor threads | Agent takes part in communities |
| | **YouTube** | Transcribe videos, manage content | Agent processes video content |
| **Content** | **WordPress** | Create blog posts, manage content | Agent publishes content |
| | **Webflow** | Manage CMS content | Agent updates web content |
| | **RSS** | Monitor feeds | Agent follows content sources |
| **Development** | **GitHub** | Manage issues, PRs, repositories | Agent follows development work |
| | **HTTP Request** | Call a REST API from a custom tool automation | Agent connects to any API |
| **Business** | **Stripe** | Process payments, manage subscriptions | Agent handles billing |
| | **Mailchimp** | Add contacts, manage campaigns | Agent manages email marketing |

> An agent can use an automation as a custom tool, and it can connect to 100+ integrations. On the Free plan, premium apps show an upgrade badge. Premium integrations need a paid plan, and Pro integrations need Pro and up. See [Automations](../automation/README.md) for the full list of integrations.

> **For developers:** To let an agent call an external API, add an **HTTP Request** step to a custom tool automation. See [Webhooks](../../apis-living-system-development/webhooks.md) for event delivery and payload details.

---

## Build Custom Agent Tools

You can make a reusable agent tool from an automation:

1. Open the **Actions** tab of your agent, then the **Tools** sub-tab.
2. Click **New tool**.
3. Define the parameters of the tool.
4. Add the steps of the automation.
5. Turn on the automation.

The automation shows as a new tool of the agent. Ask the agent to use the tool in the chat, or let the agent decide.

**Example custom tools:**

| Custom Tool | Automation Steps | Trigger |
|---|---|---|
| "Generate weekly report" | Collect project data → Summarize → Email to team → Post to Slack | The agent decides, or the `/weekly-report` command |
| "Onboard new client" | Create project → Add template tasks → Send welcome email → Tell the team | The agent gets a request for a new client |
| "Escalate issue" | Create urgent ticket → Tell the manager in Slack → Schedule follow-up | The agent finds a high-severity problem |

> **More detail:** Read [Automations: The Execution Pillar](../automation/README.md) to build automations.

---

## Human in the Loop

For actions in other apps, you can approve each action before it runs:

| Feature | Detail |
|---|---|
| **What it is** | A gate where you approve or reject an action before the agent runs it |
| **When to use** | Emails, social media posts, CRM records, and other external actions |
| **How it works** | The agent proposes the action → You review it → You approve or reject → The agent continues or stops |

1. Open the **Actions** tab of the agent, then the **Tools** sub-tab.
2. Set the approval mode of each sensitive tool to **Manual Approval**. Routine tools can stay on **Automatic Approval**.
3. Ask the agent to do a task. When the agent wants to use a **Manual Approval** tool, it pauses and asks you.
4. Click **Approve** to continue, or **Reject** to stop.

> **Tip:** Use **Manual Approval** for the first weeks with a new agent. When you trust the agent, set routine tools to **Automatic Approval**.

---

## Enable / Disable Tools

| Action | How |
|---|---|
| Enable a tool | Toggle ON in the **Tools** sub-tab of the **Actions** tab |
| Disable a tool | Toggle OFF in the **Tools** sub-tab of the **Actions** tab |
| Remove a tool | Click the remove button next to the tool |

> **A disabled tool** keeps its settings, but the agent cannot use it. You can turn it on again at any time without new settings.

---

## What's Next

| Guide | What you learn |
|---|---|
| [Multi-Agents](./multi-agents.md) | Build teams of agents with different tools |
| [Agent Knowledge & Memory](./agent-knowledge.md) | Give agents your data |
| [Automations](../automation/README.md) | Build the automations that agents can start |
| [Custom AI Agents](./ai-agents-getting-started.md) | Full guide to agent setup |

---

_Step-by-step guide on taskade.com/learn: [Tools for AI Agents](https://www.taskade.com/learn/agents/agent-tools)._
