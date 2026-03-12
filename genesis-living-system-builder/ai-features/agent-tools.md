---
description: >-
  Complete reference for AI Agent Tools — connect your agents to 50+ services
  so they can take real action on your behalf.
---

# AI Agent Tools

Your AI agents can do more than talk. With **Tools**, they can create tasks, send emails, post to Slack, update spreadsheets, and interact with dozens of external services — all from a single conversation.

{% hint style="info" %}
**Tools turn conversations into actions.** Without tools, an agent can only draft text. With tools, it can execute work across your entire stack.
{% endhint %}

## How to Add Tools to an Agent

1. Open the **Agents** tab and select your agent.
2. Click **Edit Agent** in the top-right corner.
3. Switch to the **Tools** tab in the sidebar.
4. Click **Add Tool**, choose the tool you need, and configure it.
5. Click **Update** to save.

Each tool has an **Enable / Disable toggle** so you can turn capabilities on or off without removing them.

## Three Ways to Use Agent Tools

| Method | How to access | Best for |
|---|---|---|
| **Project Chat** | Open a project > click the chat icon > select your agent | Taking action inside a specific project context |
| **Agent Sidebar** | Click the agent panel on the right side of your workspace | Quick actions while you work on something else |
| **Agent Chat** | Go to Agents tab > select agent > New Chat | Dedicated conversations with full tool access |

## Complete Tool Reference

Below is every tool category available to your agents. Each category contains one or more integrations, and each integration exposes specific actions your agent can perform.

### Taskade

| Tool | Example Actions |
|---|---|
| Project & Task Management | Create task, update task, complete task, assign task, move task, set due dates, create project |

### Communication

| Tool | Example Actions |
|---|---|
| Slack | Send message, create channel, add reaction, list channels |
| Discord | Send message, create channel |
| Microsoft Teams | Send message, create channel |
| WhatsApp | Send message |
| Telegram | Send message |

### Email

| Tool | Example Actions |
|---|---|
| Gmail | Send email, create draft, find emails, reply to thread |
| Mailchimp | Create campaign, add subscriber, send email |

### Google Workspace

| Tool | Example Actions |
|---|---|
| Google Sheets | Insert row, update cell, read data, create spreadsheet |
| Google Drive | Create file, search files, upload document |
| Google Calendar | Add event, check availability, update event |
| Google Docs | Create document, append text |
| Google Forms | Create form, add question |

### CRM

| Tool | Example Actions |
|---|---|
| HubSpot | Create contact, update deal, find company, send email, log activity |
| Apollo | Find contact, enrich lead, send email sequence |

### E-Commerce

| Tool | Example Actions |
|---|---|
| Shopify | Get product, update inventory, manage orders, look up customer |
| Stripe | Create payment link, look up charge, manage subscriptions |

### Social Media

| Tool | Example Actions |
|---|---|
| LinkedIn | Post content, send message |
| X / Twitter | Post tweet, send direct message |
| Reddit | Create post, add comment |
| Facebook | Publish post, manage page content |

### Developer

| Tool | Example Actions |
|---|---|
| GitHub | Create issue, open pull request, add comment, list repos |
| HTTP Request | Make GET/POST/PUT/DELETE requests to any API endpoint |

### Content & Publishing

| Tool | Example Actions |
|---|---|
| WordPress | Create post, update page, publish content |
| Webflow | Create CMS item, update collection, publish site |
| RSS | Fetch and parse feed content |

## Build Custom Agent Tools

You can turn any **automation flow** into a reusable agent tool. This lets your agent trigger multi-step workflows mid-conversation.

### How it works

1. Go to the **Automations** tab and create a new automation.
2. Choose **Agent Tool** as the trigger type.
3. Build your automation flow (add actions, conditions, delays).
4. Save the automation.
5. Open your agent > **Tools** tab > your custom tool now appears in the list.
6. Enable it and click **Update**.

When you chat with the agent, it can invoke that entire automation flow as a single tool call.

{% hint style="success" %}
**Power-user pattern:** Build a "Send proposal" automation that generates a PDF, attaches it to an email, and logs the activity in your CRM — then expose it as a single agent tool. One prompt does it all.
{% endhint %}

## Human in the Loop

Some tools perform external actions (sending emails, posting messages, making payments). For those, you can enable **Human in the Loop** approval.

When enabled:

1. The agent proposes an action and pauses.
2. You see the action details and can **Approve** or **Reject**.
3. The agent only executes the action after your approval.

{% hint style="warning" %}
**Recommended for high-stakes actions** like sending emails to customers, making payments, or posting to social media. Start with approval enabled and turn it off once you trust the agent's judgment.
{% endhint %}

## Tips for Better Tool Usage

* **Mention the tool name in your prompt.** Instead of "send a message to the team," say "send a Slack message to #marketing with this update." Explicit tool names help the agent pick the right integration.
* **Enable only the tools your agent needs.** Fewer tools means less ambiguity and faster responses.
* **Combine tools with knowledge.** An agent with your product docs as knowledge AND Gmail as a tool can draft accurate customer replies and send them — all in one step.
* **Test with Human in the Loop first.** Verify the agent picks the right tool and formats actions correctly before giving it full autonomy.

## Embed Agents in Websites

Public agents can be embedded on any website, letting visitors interact with your agent without leaving the page.

**Two embed methods:**

| Method | How it works | Best for |
|--------|-------------|----------|
| **JavaScript Widget** (recommended) | Add the Taskade embed script and widget tag to your site. Appears as a floating chat bubble in the corner. | Customer support, lead capture, onboarding |
| **iFrame Embed** | Embed the full agent chat interface in an `<iframe>` element. | Dedicated help pages, knowledge base portals |

**JavaScript Widget example:**

```html
<script src="https://www.taskade.com/embed/widget.js"></script>
<taskade-widget agent="YOUR_AGENT_ID"></taskade-widget>
```

**iFrame example:**

```html
<iframe
  src="https://www.taskade.com/share/agents/YOUR_AGENT_ID?embed=1"
  width="100%"
  height="600"
  frameborder="0"
  allow="clipboard-write"
></iframe>
```

**How to set it up:**

1. Open your agent and go to the **Publish** tab.
2. Customize the agent's appearance (name, avatar, welcome message).
3. Switch to the **Share** tab and enable **Public Access**.
4. Copy the embed code (JavaScript widget or iFrame).
5. Paste it into your website's HTML.

{% hint style="warning" %}
**Tool calling is not supported for public embedded agents.** Embedded agents can answer questions and use their knowledge, but cannot execute tool actions (e.g., sending emails or updating spreadsheets). Keep this in mind when designing public-facing agents.
{% endhint %}

## Agent Automation Integration

Agents and automations work together in both directions — agents can trigger automations, and automations can use agents as steps.

**Agent as an automation step:**

Add an **Ask Agent** or **Run Agent Command** action inside any automation workflow. The automation sends a prompt to your agent mid-flow and uses the response in subsequent steps.

*Example:* A form submission triggers an automation that asks an agent to classify the inquiry, then routes it to the right Slack channel based on the agent's response.

**Automation as an agent tool:**

1. Create an automation with **Agent Tool** as the trigger type.
2. Build the workflow (actions, conditions, delays).
3. Open your agent > **Tools** tab > enable the custom tool.
4. The agent can now invoke the entire automation from a conversation.

**Human in the Loop for integration steps:**

When an agent triggers an automation that performs external actions (sending emails, making API calls, posting messages), you can require approval before each action executes. The workflow pauses, shows you the proposed action, and waits for you to **Approve** or **Reject**.

{% hint style="info" %}
**Start with approval enabled.** Once you're confident the agent-automation combination produces correct results, disable approval for faster execution.
{% endhint %}

## Next Steps

* [Agent Knowledge & Memory](agent-knowledge.md) — teach your agent about your business
* [AI Agent Teams](agent-teams.md) — combine multiple agents into collaborative teams
* [Automation Action & Trigger Reference](../automation/actions.md) — full list of automation triggers and actions
* [AI Agents Getting Started](ai-agents-getting-started.md) — create your first agent
