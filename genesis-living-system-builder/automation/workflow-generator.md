# Workflow Generator

---

## Table of Contents

- [Overview](#overview)
- [What You Can Build](#what-you-can-build)
- [How to Get Started](#how-to-get-started)
- [Generator Modes](#generator-modes)
- [Smart Edits & Chat Commands](#smart-edits--chat-commands)
- [Key Features](#key-features)
- [Workflow Building Blocks](#workflow-building-blocks)
- [Example Prompts](#example-prompts)
- [What's Next](#whats-next)

---

## Overview

The Workflow Generator builds complex automation flows from **natural language**. Describe what you want in plain English, and the AI creates complete workflows with triggers, conditions, branches, loops, and integrations across 100+ services — no drag-and-drop, no manual configuration.

> **Genesis connection:** Genesis apps automatically generate workflow automations as part of the Execution pillar. The Workflow Generator lets you create additional automations or modify existing ones. Each automation adds **+5 points** to your [Intelligence Score](https://help.taskade.com/en/collections/14476419-taskade-genesis).

---

## What You Can Build

| Category | Example Prompt | What's Created |
|---|---|---|
| **Multi-step workflows** | "When a form is submitted, create a task, notify the team, and send follow-up emails" | Form trigger → Task creation → Slack notification → Gmail follow-up |
| **Content pipelines** | "Monitor X for new content, summarize it, and create a new project for each item" | RSS trigger → AI summary → Project creation loop |
| **Scheduled reports** | "Every Monday, generate a progress report and share with stakeholders" | Weekly schedule → AI report generation → Email distribution |
| **Agent-powered flows** | "Create an AI Agent that processes customer feedback and assigns follow-up" | Agent trigger → Sentiment analysis → Task assignment |
| **Social distribution** | "Build an automation that posts our blog content to social media" | RSS/webhook trigger → AI rewrite → Multi-platform posting |

---

## How to Get Started

### Step-by-Step Tutorial

| Step | Action |
|---|---|
| 1 | Navigate to **Automations** tab → **Create Flow** (or visit `taskade.com/create/flow`) |
| 2 | Describe your desired workflow in the chat |
| 3 | Watch the Workflow Generator build, refine, and optimize it |
| 4 | Review the generated flow |
| 5 | Click **Create Automation** to save it |
| 6 | Customize triggers, actions, and conditions as needed |
| 7 | Toggle the automation **On** |

---

## Generator Modes

| Mode | Description | Best For |
|---|---|---|
| **Auto** (default) | AI selects the optimal mode for your task | Most use cases — let AI decide |
| **Agent Tool Mode** | Generates intelligent workflows as an AI agent tool | Agent-powered decision-making |
| **Workflow Mode** | Sets up standard project automations and flows | Task management, notifications |
| **Form Mode** | Generates smart forms that trigger actions on submission | Lead capture, surveys, intake |

---

## Smart Edits & Chat Commands

After generating a workflow, modify it with natural language:

| Edit Type | Example Prompt | What Happens |
|---|---|---|
| **Add step** | "Add a Slack notification to this workflow" | New Slack action added |
| **Add logic** | "Add branching logic based on the form response" | Conditional branch inserted |
| **Change trigger** | "Change the trigger to run daily instead of weekly" | Schedule trigger updated |
| **Add loop** | "Loop through all tasks and send a reminder for each" | Loop action added |
| **Modify action** | "Change the email to send to managers instead" | Action recipient updated |
| **Add integration** | "Also post a summary to our Slack channel" | New integration step added |
| **Optimize** | "Make this workflow more efficient" | AI suggests improvements |

---

## Key Features

| Feature | What It Means |
|---|---|
| **Instant Creation** | Build complex flows in minutes, not hours |
| **Natural Language** | Describe any complexity — AI handles the implementation |
| **Intelligent Editing** | Modify existing workflows with plain-English requests |
| **Smart Recommendations** | AI-driven optimization tips and improvements |
| **Built-in Integrations** | Connect with 100+ apps — AI guides setup |
| **Branching** | Conditional paths based on data values |
| **Looping** | Iterate over lists of items |
| **Variables** | Dynamic data passing between steps (Liquid expressions) |
| **AI Steps** | Agent-powered reasoning within workflows |

---

## Workflow Building Blocks

| Block | Description | Example |
|---|---|---|
| **Trigger** | What starts the flow | Form submitted, schedule, webhook, new email |
| **Action** | What happens | Send email, create task, post to Slack |
| **Branch** | Conditional logic (if/else) | If rating < 3, alert manager; else, log to database |
| **Loop** | Iterate over a list | For each attachment, upload to Media |
| **Delay** | Pause execution | Wait 24 hours, then send follow-up |
| **AI Step** | Agent-powered processing | Agent categorizes ticket, generates response |
| **Variable** | Dynamic data | `{{trigger.email}}`, `{{step1.output}}` |

---

## Example Prompts

| Prompt | Flow Generated |
|---|---|
| "When a customer submits feedback with a rating below 3, alert the support manager on Slack and create a high-priority task" | Form Trigger → Branch (rating < 3) → Slack Message → Create Task (priority: high) |
| "Every day at 9 AM, summarize all overdue tasks and email them to team leads" | Daily Schedule → Find overdue tasks → AI summarize → Send Email |
| "When a new lead fills the contact form, add them to HubSpot, send a welcome email, and notify sales on Slack" | Form Trigger → Create HubSpot Contact → Send Gmail → Slack Message |
| "Monitor our blog RSS feed, summarize new posts with AI, and share on Twitter and LinkedIn" | RSS Trigger → AI Summary → Create Post (Twitter) → Create Update (LinkedIn) |
| "When a task is completed, update the Google Sheet tracker and notify the project channel" | Task Completed → Insert Row (Google Sheets) → Send Slack Message |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Automation Triggers](./README.md) | All available triggers for your workflows |
| [Taskade Autopilot](../ai-features/autopilot.md) | Generate entire workspace ecosystems |
