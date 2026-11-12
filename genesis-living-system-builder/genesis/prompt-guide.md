---
description: >-
  Write better Taskade Genesis prompts with 12 principles: set goals, describe results, connect tools, define access and improve your app in small steps.
---

# A Maker's Guide to AI Prompts

---

## Overview

A prompt tells Taskade Genesis what to build. Write it as if you explain your app idea to a colleague who builds it for you. A clearer explanation gives you a better app.

This guide gives **12 tested principles** for good Taskade Genesis prompts.

> **Workspace DNA hint:** Better prompts make your Workspace DNA richer. The projects, agents and automations from a prompt increase the [Intelligence Score](./how-genesis-works.md#workspace-intelligence-score) of the app. They also make your future apps smarter.

---

## The 12 Prompt Principles

### 1. Set Objectives

**Tell who uses the app and why it is important.**

| Principle | What It Does |
|---|---|
| Name the user | Tells Genesis who the interface is for |
| State the purpose | Names the main problem that the app solves |
| Add business context | Helps Genesis make better design decisions |

**Examples:**

| Prompt | Audience | Purpose |
|---|---|---|
| "My restaurant staff needs to track inventory daily and get alerts when we're running low on key ingredients." | Restaurant staff | Inventory management |
| "My real estate team needs to track property leads and automatically follow up with prospects who haven't responded in 48 hours." | Sales team | Lead management + automation |
| "Our consulting clients need a portal where they can access project deliverables, schedule meetings, and track billable hours." | External clients | Client portal |

---

### 2. Describe Outcomes

**Say exactly what the app must do. A vague request gives a vague result.**

| Vague (Avoid) | Specific (Use) |
|---|---|
| "Make a project tool" | "Customers upload project files, see progress updates, message our team, and download final files. Everyone gets notifications for each step." |
| "Build an expense tracker" | "Employees submit expense reports with receipts, managers approve or reject, accounting gets notified, reimbursements tracked until payment." |
| "Create a learning app" | "Students watch course videos, complete quizzes, track progress, and receive certificates. Instructors see engagement analytics." |

---

### 3. Explain the Journey

**Tell Genesis, step by step, how people will use your app.**

| Step | Example User Journey |
|---|---|
| **Onboarding** | "New users sign up, answer questions about their needs, get matched with resources" |
| **Core Usage** | "Customers browse the service catalog, request quotes, upload requirements" |
| **Completion** | "Review proposals, approve work, rate their experience afterward" |
| **Follow-up** | "Receive weekly personalized updates based on usage patterns" |

---

### 4. Break Down Ideas

**For a large project, write numbered steps.**

| App Type | Numbered Prompt |
|---|---|
| **Sales Dashboard** | "1. Show real-time sales on a dashboard 2. Let users filter by product type 3. Add export buttons for reports 4. Send alerts when sales drop" |
| **Feedback System** | "1. Collect customer feedback through forms 2. Categorize by department 3. Route urgent issues to management 4. Generate monthly reports 5. Send follow-up surveys automatically" |
| **Booking App** | "1. Display available appointment slots 2. Let clients book and pay online 3. Send confirmation emails and calendar invites 4. Allow rescheduling with 24-hour notice 5. Collect feedback after appointments" |

---

### 5. Connect Tools

**Tell Genesis which tools you use. Then it can connect them.**

Genesis supports 100+ integrations. Name your tools, and Genesis makes the automation flows for you.

| Integration | Example Prompt |
|---|---|
| **Google Suite + Slack** | "Import customer data from Google Sheets and send email notifications via Gmail. Connect to Slack for team alerts." |
| **WhatsApp + Database** | "Connect to WhatsApp Business for client communication. Integrate with our existing project database for customer records." |
| **Multi-tool** | "Pull inventory from Google Sheets, connect to accounting project for cost tracking, send low-stock alerts to Slack." |

**Some of the available integrations:**

| Category | Tools |
|---|---|
| Communication | Slack, Discord, Microsoft Teams, WhatsApp Business, Twilio SMS |
| Email | Gmail, Outlook, Mailchimp |
| Productivity | Google Sheets, Docs, Drive, Calendar, Forms, Calendly |
| CRM | HubSpot, Apollo |
| Social | Twitter/X, LinkedIn, Facebook, YouTube, Reddit |
| Dev | GitHub, HTTP/Webhooks |
| Content | WordPress, Webflow |

Premium integrations, for example Slack, Gmail and Google Sheets, need a paid plan. Free runs the standard connectors.

---

### 6. Set the Tone

**Make your app sound like your business.**

| Tone | Prompt Example | Best For |
|---|---|---|
| **Professional & friendly** | "Keep it professional but friendly, like talking to customers in person. Make error messages helpful, not technical." | Portals for customers |
| **Encouraging & supportive** | "Use an encouraging, supportive tone like a personal fitness coach. Celebrate achievements and make setbacks feel manageable." | Wellness, education apps |
| **Authoritative & trustworthy** | "Sound like a trusted financial advisor — authoritative but not intimidating. Simple language for complex topics." | Finance, legal, healthcare |
| **Casual & energetic** | "Keep it casual and fun, like texting a friend. Use short sentences and emojis where appropriate." | Consumer apps, social tools |

---

### 7. Choose Look & Feel

**Tell Genesis how your app must look.**

| Visual Style | Prompt Example |
|---|---|
| **Brand-aligned** | "Clean, modern design with our brand colors: navy blue headers and bright green accent buttons. Company logo top left." |
| **Warm & calming** | "Warm design with soft colors — cream backgrounds and sage green accents. Rounded corners and gentle shadows." |
| **Bold & energetic** | "Bold orange and black colors. Strong typography and high-contrast buttons that motivate action." |
| **Dark & premium** | "Dark theme with neon accents, like a high-tech dashboard. Charcoal backgrounds with electric blue highlights." |

> **Deep dive:** Read [Advanced Features](../space-apps-guide/advanced-features.md) to change the branding, look and behavior of your app.

---

### 8. Define Access

**Say clearly who can do what.**

| Role | Prompt Example |
|---|---|
| **Multi-tier** | "Staff view all projects and add updates. Clients only see their own projects and can't edit. Managers access everything plus analytics." |
| **Educational** | "Students access courses and submit assignments. Instructors grade and message. Administrators manage all users and see reports." |
| **Corporate** | "Employees log hours and submit requests. Department heads approve their team's requests. HR accesses all data and generates reports." |

{% hint style="warning" %}
**Sign-in confirms identity. It does not hide the records of other people.** To show each user only their own records, do these steps. Under **Publish → More options**, turn on **Private entries** (private data for each user, off by default). Match the records to the login. Then do a test with a second account.
{% endhint %}

---

### 9. Iterate Easily

**You can always change your app. Improve it with more prompts.**

| Iteration Type | Example Prompt |
|---|---|
| **Add feature** | "The form works great — add file upload after the description and make the submit button bigger." |
| **Move elements** | "Love the dashboard, but move notifications to top right and make charts more colorful." |
| **Add automation** | "Add a text reminder 24 hours before appointments and let customers reschedule themselves." |
| **Embed agent** | "Add a chat widget powered by the support agent in the bottom right corner." |
| **Connect integration** | "When a new booking is made, create a Google Calendar event and send a Slack notification." |

---

### 10. Reference

**Name apps or websites that have features you like.**

| Reference | Prompt Example |
|---|---|
| **Stripe-style** | "Dashboard layout similar to Stripe — clean cards with key metrics up top and detailed tables below. Simplify navigation." |
| **Udemy-style** | "Course layout like Udemy — video player left, course outline right, clean progress bar. More personal, less corporate." |
| **Calendly-style** | "Booking interface like Calendly — simple date/time selection with instant confirmation. Add our branding and service descriptions." |

---

### 11. Provide Examples

**Describe exact situations to show how a workflow goes.**

| Scenario | Workflow Example |
|---|---|
| **Customer inquiry** | "Contact form submitted → Create lead record → Send welcome email → Notify sales team → Set 3-day follow-up reminder" |
| **New employee** | "HR creates profile → Send welcome email with login → Employee completes onboarding forms → Manager notified → Training modules assigned" |
| **Order process** | "Customer places order → Inventory updated → Payment processed → Shipping label created → Customer gets tracking → Follow-up review request" |

---

### 12. Experiment

**Genesis saves your work automatically. Try large changes.**

| Experiment Type | Example Prompt |
|---|---|
| **Layout overhaul** | "Let's completely redesign the homepage layout" |
| **Simplification** | "Remove the pricing section and replace with a simple contact form" |
| **Paradigm shift** | "Turn this form into a conversational chatbot experience" |
| **Gamification** | "Make this feel like a game with points and achievements instead of a boring business tool" |

> **Safety net:** If an experiment does not work, use [Genesis Version History](./version-history.md) to restore a previous version.

---

## Prompt Anatomy Quick Reference

Use these phrases when you build:

| Category | Phrases |
|---|---|
| **Starting** | "Build a simple...", "Create an app that...", "I need a system for...", "Design a tool to..." |
| **Context** | "I run a [business type] and need...", "My team of [N] people needs to...", "Our customers often ask for..." |
| **Changes** | "Change the [element] to...", "Add a feature that...", "Remove [feature] and replace with...", "Make it more [adjective]" |
| **Connections** | "When [trigger], then [action]", "Sync this with...", "Export data to...", "Import from..." |
| **Agents** | "Create an agent that...", "Train the agent on...", "Embed the agent in...", "Make the agent respond like..." |
| **Automations** | "Automate [process]...", "When [event] happens, send...", "Schedule [action] every...", "Connect to [tool]..." |

---

## Common Mistakes to Avoid

| Mistake | Problem | Better Approach |
|---|---|---|
| "Make me an app" | Too vague. Genesis cannot guess what you want. | "Build a customer feedback form with star ratings and email notifications" |
| You ask for all features at one time | A prompt with too much gives confused results. | Start simple, then improve with more prompts. |
| You forget integrations | You do not use the 100+ tools that Genesis can connect. | Always name the tools that you use. |
| You do not test after each change | Errors add up if you do not find them early. | Do a test after each change. |
| You forget agents | You lose the Intelligence pillar. | Ask: "Who would I hire to manage this?" That person is your agent. |
| You skip permissions | All users see all data. | Define roles and access levels. |

---

## What's Next

| Guide | What You Learn |
|---|---|
| [App Starter Prompts](../space-apps-guide/genesis-prompt-library.md) | Prompts to copy for frequent app types |
| [Advanced Features](../space-apps-guide/advanced-features.md) | Change the branding, look and behavior of your app |
| [Adding Genesis Context](./adding-context.md) | Upload reference files for better apps |
| [Prompt Templates Library](./examples-and-templates.md) | See all the prompt templates |

---

_Step-by-step guide on taskade.com/learn: [A Maker's Guide to AI Prompts](https://www.taskade.com/learn/genesis/prompt-guide)._
