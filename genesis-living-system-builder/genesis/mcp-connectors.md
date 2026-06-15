---
description: >-
  Connect your Genesis apps and AI agents to 31+ external services using MCP
  (Model Context Protocol) — the universal standard for AI tool integration.
---

# MCP Connectors

## What is MCP?

**Model Context Protocol (MCP)** is an open standard that lets AI agents connect to external tools and services. Think of it as **USB-C for AI** — one universal, standardized, vendor-agnostic protocol that works across platforms and providers.

With MCP connectors, your Taskade agents and automations can read from Google Sheets, send Slack messages, create GitHub issues, process Stripe payments, and much more — without writing custom integration code.

{% hint style="info" %}
MCP connectors work with both **AI Agents** (conversational) and **Automations** (workflow-based). Set up once, use everywhere.
{% endhint %}

***

## Two Ways to Connect

### Hosted MCP (Recommended)

Taskade manages the connection for you. No servers to deploy, no infrastructure to maintain.

* **Zero setup** — authenticate and start using tools immediately
* **Automatic auth** — OAuth and API key management handled for you
* **High availability** — Taskade keeps connections reliable and up to date

### Custom MCP Servers

Run your own MCP server when you need full control over the integration layer.

* **Full control** — define exactly which tools are available and how they behave
* **Custom tools** — build tools tailored to your internal systems
* **On-premises data** — keep sensitive data behind your firewall

{% hint style="success" %}
**Start with Hosted MCP.** You can always add custom servers later for advanced use cases.
{% endhint %}

***

## Native Integrations

Taskade includes **31 hosted MCP integrations** across these categories:

| Category | Services |
| --- | --- |
| **Communication** | Slack, Discord, Telegram, MS Teams, WhatsApp, Twilio |
| **Email** | Gmail, Mailchimp |
| **Google Workspace** | Sheets, Drive, Calendar, Docs, Forms |
| **CRM** | HubSpot, Apollo |
| **E-Commerce** | Shopify, Stripe |
| **Social Media** | LinkedIn, X/Twitter, Facebook, Reddit, YouTube |
| **Developer** | GitHub, HTTP |
| **Forms / CMS** | Typeform, Webflow, WordPress |
| **Scheduling** | Calendly, Schedule |
| **Content** | RSS, Zoom |

***

## Connecting an Integration

1. Open your workspace **Integrations Settings**.
2. **Browse** the available MCP connectors.
3. Click **Add** on the integration you need.
4. Authenticate and **Enable Tools** you want your agents and automations to access.

{% hint style="warning" %}
Each integration may request different permissions. Review the scopes before authorizing to ensure you only grant access your workflows require.
{% endhint %}

***

## Using MCP with AI Agents

Once an MCP connector is enabled, your agents discover available tools automatically. During a conversation, the agent will:

1. **Identify** which connected tool can fulfill the request.
2. **Select** the best tool and parameters for the job.
3. **Execute** the action (e.g., send a message, fetch a spreadsheet row).
4. **Return** the results directly in the conversation.

You don't need to tell the agent which tool to use — it figures that out from context.

**Example prompt:**

> "Check the #sales channel in Slack for any messages about the Q2 report, then summarize them here."

The agent connects to Slack via MCP, retrieves the relevant messages, and provides a summary.

***

## Using MCP with Automations

MCP tools are also available as action steps in automation workflows:

1. Create or edit an automation flow.
2. **Add an MCP action step** from the action picker.
3. **Configure** the tool, operation, and input parameters.
4. **Chain** with other actions — pass MCP output as dynamic data to subsequent steps.

**Example automation:**

> **Trigger:** New task created with "bug" label
> **Action 1:** Create a GitHub issue via MCP (GitHub)
> **Action 2:** Send a Slack notification via MCP (Slack)

***

## Building Custom MCP Servers

For advanced use cases, you can build and host your own MCP server:

1. **Choose an SDK** — TypeScript or Python.
2. **Define tools** — specify the actions your server exposes.
3. **Deploy** — host on your own infrastructure.
4. **Connect** — add the server URL in Taskade's custom MCP settings.

{% hint style="info" %}
For detailed setup instructions, starter templates, and SDK documentation, visit the official repository: [github.com/taskade/mcp](https://github.com/taskade/mcp)
{% endhint %}

***

## Next Steps

* [Getting Started with Genesis](getting-started.md) — build your first app
* [AI Agents](../ai-features/ai-agents-getting-started.md) — learn how agents use MCP tools in conversations
* [Automations](../automation/README.md) — create workflows that chain MCP actions together
