---
description: >-
  Build Taskade automations from plain English. The Workflow Generator creates triggers, branches, loops, and steps for 100+ integrations.
---

# Workflow Generator

---

## Overview

With the Workflow Generator, you describe an automation in plain English. The AI then builds the full flow for you. The flow can have triggers, conditions, branches, loops, and steps for 100+ integrations. You do not drag steps or configure each step by hand.

> **Taskade Genesis connection:** A Taskade Genesis app can include automations as part of its Execution pillar. Use the Workflow Generator to add automations or to change the automations that you have. Each automation adds to your [Intelligence Score](https://www.taskade.com/learn/genesis).

---

## What You Can Build

| Category | Example Prompt | What the Generator Makes |
|---|---|---|
| **Multi-step workflows** | "When a form is submitted, create a task, notify the team, and send follow-up emails" | Form trigger → Add task → Slack message → Gmail follow-up |
| **Content pipelines** | "Monitor X for new content, summarize it, and create a new project for each item" | RSS trigger → AI summary → Loop that creates one project for each item |
| **Scheduled reports** | "Every Monday, generate a progress report and share with stakeholders" | Weekly schedule → AI report → Email to each stakeholder |
| **Agent-powered flows** | "Create an AI Agent that processes customer feedback and assigns follow-up" | Agent trigger → Sentiment analysis → Task assignment |
| **Social distribution** | "Build an automation that posts our blog content to social media" | RSS or webhook trigger → AI rewrite → Posts on more than one platform |

---

## How to Get Started

### Step-by-Step Tutorial

1. Open the **Automations** tab. Click **Add automation**, then click **Generate With AI**. You can also go to `taskade.com/create/flow`.
2. Describe the workflow that you want.
3. Select a mode: Auto, Agent Tool, Workflow, or Form. Then press **Enter**.
4. Wait until the Workflow Generator finishes the flow.
5. Examine the flow that it made.
6. Click **Create Automation** to save the flow.
7. Change the triggers, actions, and conditions if necessary.
8. Set the automation to **On**.

---

## Generator Modes

| Mode | What It Does | Use It For |
|---|---|---|
| **Auto** (default) | Selects the best mode for your prompt | Most tasks, when you are not sure which mode to use |
| **Agent Tool Mode** | Makes an automation that an AI agent can use as a tool | Decisions that an agent makes |
| **Workflow Mode** | Makes a standard automation | Task management and notifications |
| **Form Mode** | Makes a form. A form submission starts the automation | Lead capture, surveys, and intake |

---

## Smart Edits & Chat Commands

After the generator makes a workflow, you can change it with plain-English requests:

| Edit Type | Example Prompt | Result |
|---|---|---|
| **Add step** | "Add a Slack notification to this workflow" | The generator adds a Slack step |
| **Add logic** | "Add branching logic based on the form response" | The generator adds a branch |
| **Change trigger** | "Change the trigger to run daily instead of weekly" | The schedule trigger changes |
| **Add loop** | "Loop through all tasks and send a reminder for each" | The generator adds a Loop step |
| **Modify action** | "Change the email to send to managers instead" | The email goes to the new recipients |
| **Add integration** | "Also post a summary to our Slack channel" | The generator adds a new integration step |
| **Optimize** | "Make this workflow more efficient" | The AI gives suggestions to improve the flow |

---

## Key Features

| Feature | What It Means |
|---|---|
| **Fast creation** | You get a complex flow in minutes |
| **Natural Language** | You describe the flow in your words. The AI builds the steps |
| **Plain-English edits** | You change a flow with a short request |
| **Suggestions** | The AI suggests how to improve a flow |
| **Built-in Integrations** | You can connect 100+ apps. Connect each account one time with **Connect**. Premium integrations need a paid plan |
| **Branching** | A flow can follow different paths, based on the values in the data |
| **Looping** | A Loop step runs its steps one time for each item in a list |
| **Variables** | Steps send data to later steps with Liquid expressions |
| **AI Steps** | An agent can make decisions inside the flow |

---

## Workflow Building Blocks

| Block | What It Does | Example |
|---|---|---|
| **Trigger** | Starts the flow | A form submission, a schedule, a webhook, or a new email |
| **Action** | Does the work | Send an email, create a task, or post to Slack |
| **Branch** | Selects a path (if/else) | If the rating is less than 3, alert a manager. If not, log the result |
| **Loop** | Runs its steps one time for each item | For each attachment, save the file to Media |
| **Delay** | Stops the flow for a time | Wait 24 hours, then send a follow-up |
| **AI Step** | Lets an agent do the work | An agent sorts a ticket and writes a reply |
| **Variable** | Carries data between steps | `{{trigger.email}}`, `{{step1.output}}` |

---

## Example Prompts

| Prompt | Flow That the Generator Makes |
|---|---|
| "When a customer submits feedback with a rating below 3, alert the support manager on Slack and create a high-priority task" | Form Trigger → Branch (rating < 3) → Slack Message → Create Task (priority: high) |
| "Every day at 9 AM, summarize all overdue tasks and email them to team leads" | Daily Schedule → Find overdue tasks → AI summarize → Send Email |
| "When a new lead fills the contact form, add them to HubSpot, send a welcome email, and notify sales on Slack" | Form Trigger → Create HubSpot Contact → Send Gmail → Slack Message |
| "Monitor our blog RSS feed, summarize new posts with AI, and share on Twitter and LinkedIn" | RSS Trigger → AI Summary → Create Post (Twitter) → Create Update (LinkedIn) |
| "When a task is completed, update the Google Sheet tracker and notify the project channel" | Task Completed → Insert Row (Google Sheets) → Send Slack Message |

---

## Use an Agent in a Generated Flow

You can add a custom AI agent to a flow that the generator made:

* Use the **Agent Tool** trigger. Then an agent can start the automation during a chat.
* Add a **Run an agent command** step. Then the agent works at the exact step that you select.

---

## What's Next

| Guide | What You Learn |
|---|---|
| [Automation Triggers](./README.md) | The triggers that you can use in your workflows |
| [Taskade Autopilot](../ai-features/autopilot.md) | Generate a full workspace from a prompt |

---

_Step-by-step guide on taskade.com/learn: [AI Workflow Generator](https://www.taskade.com/learn/automation/workflow-generator)._
