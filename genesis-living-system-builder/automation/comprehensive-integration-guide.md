---
description: >-
  Connect Taskade to Slack, Gmail, HubSpot, Google Sheets, and more with automations. Use HTTP requests, webhooks, or the API for other tools.
---

# Integration Overview

**Connect Taskade to the tools that you use, and let your automations do the work between them.**

{% hint style="success" %}
**Integrations** connect your workspace to other apps. An event in one app can start an automation. The automation can then write the result to another app or to a project.
{% endhint %}

## Integrations in Taskade

Integrations connect Taskade to the tools that you use now. They run inside Automations. A **trigger** is the event that starts the automation. An **action** is the work that follows.

For the full model, start with [Workspace DNA](../../genesis-living-system-builder/genesis/workspace-dna.md).

### What you can do

* **Send and route work**: Send Slack or Microsoft Teams alerts, assign tasks, and escalate issues.
* **Sync data**: Send form submissions to a CRM, write rows to Google Sheets, and create tickets.
* **Save time**: Create tasks, summaries, follow-ups, and reports automatically.
* **Close the loop**: Start a workflow from an app event, and write the result back into a project.

### Typical workflows

* Lead capture → qualify → create CRM record → notify team
* Support email or webhook → categorize → create ticket → assign owner
* Schedule trigger → write report → send to stakeholders

### Quick start

1. Create an automation with a trigger and an action.
2. Add the step for the tool. Click **Connect** to link your account.
3. Test the automation with real data.

Start here:

* [Automation Getting Started](./)
* [Actions & Triggers](actions.md)
* [Integration Options](integrations.md)

## Popular Integrations

Most teams start with these tools:

* Communication: Slack, Microsoft Teams, email
* Productivity: Google Workspace, Microsoft Outlook, Microsoft To Do
* Data: Google Sheets, Airtable
* CRM: HubSpot, Salesforce
* Development: GitHub, Jira

Premium integrations (for example Slack, Gmail, Google Sheets, HubSpot, and Salesforce) need a paid plan. The Free plan runs the built-in steps and the standard connectors (HTTP Request, RSS, Pushover, and MCP Client).

For the full list and the setup details, read [Integration Options](integrations.md).

## Files and Agent Knowledge

You can also bring outside content into Taskade without an automation. Drop a file into a project, into the knowledge of an agent, or into **Media Files**. Taskade reads the text, and it can read the text in scans and images. Agent knowledge accepts every supported file format except images.

## Advanced Integration Patterns

Start with one trigger and one result. Then add steps and branches.

Common patterns:

* Form submission → qualify → create CRM record → notify Slack
* Support email or webhook → categorize → create ticket → assign owner
* Schedule trigger → write report → send digest

For all the building blocks, read:

* [Automation Getting Started](./)
* [Actions & Triggers](actions.md)

## Integration Best Practices

Follow these four rules:

* **Scope**: Give each connection only the permissions that it needs.
* **Test**: Test with real data, not sample text.
* **Failures**: Decide what the automation does when a step fails. You can check **Retry if this step fails** or **Continue if this step fails** on a step.
* **Monitoring**: Examine the errors and retries of important workflows in the **Runs** tab.

## Custom Integration Development

If your tool is not in the list, use an HTTP request, a webhook, or the Taskade API.

Start here:

* [Developer Overview](../../apis-living-system-development/developers/)
* [Actions & Triggers](actions.md)

## Getting Started with Integrations

### Plan Your Integration

Keep it simple:

1. Select one workflow that you want to automate from start to end.
2. Select one trigger and one destination tool.
3. Add more steps only after the main path works.

### Implementation Checklist

* ✅ Connect the integration
* ✅ Build one automation
* ✅ Test with real data
* ✅ Add notifications for failed runs

## Support and Resources

Use these pages when you need help:

* Full integration list: [Integration Options](integrations.md)
* Workflow basics: [Automation Getting Started](./)
* Troubleshooting: [Living System Troubleshooting](../community-and-sharing/troubleshooting.md)

{% hint style="info" %}
**Enterprise Integration Support**: For integration support on the Enterprise plan, contact sales.
{% endhint %}

---

_Step-by-step guide on taskade.com/learn: [Integrations Everywhere: Workspace DNA and the App on Top](https://www.taskade.com/learn/connect/everywhere)._
