# A Maker's Guide to AI Prompts

---

## Table of Contents

- [Overview](#overview)
- [The 12 Prompt Principles](#the-12-prompt-principles)
  - [1. Set Objectives](#1-set-objectives)
  - [2. Describe Outcomes](#2-describe-outcomes)
  - [3. Explain the Journey](#3-explain-the-journey)
  - [4. Break Down Ideas](#4-break-down-ideas)
  - [5. Connect Tools](#5-connect-tools)
  - [6. Set the Tone](#6-set-the-tone)
  - [7. Choose Look & Feel](#7-choose-look--feel)
  - [8. Define Access](#8-define-access)
  - [9. Iterate Easily](#9-iterate-easily)
  - [10. Reference](#10-reference)
  - [11. Provide Examples](#11-provide-examples)
  - [12. Experiment](#12-experiment)
- [Prompt Anatomy Quick Reference](#prompt-anatomy-quick-reference)
- [Common Mistakes to Avoid](#common-mistakes-to-avoid)
- [What's Next](#whats-next)

---

## Overview

AI prompts are the key to building exactly what you envision. A prompt is simply the description of what you want to build — think of it as explaining your app idea to a colleague who can build it for you. The clearer your explanation, the better your app turns out.

This guide covers **12 proven principles** for writing effective Genesis prompts.

> **Workspace DNA hint:** The better your prompts, the richer your workspace DNA becomes. Every app you build adds to your [Intelligence Score](./how-genesis-works.md#workspace-intelligence-score) and makes future apps smarter.

---

## The 12 Prompt Principles

### 1. Set Objectives

**Explain who uses this and why it matters.**

| Principle | What It Does |
|---|---|
| Name the user | Tells Genesis who the interface is for |
| State the purpose | Defines the core problem being solved |
| Add business context | Helps Genesis make smarter design decisions |

**Examples:**

| Prompt | Audience | Purpose |
|---|---|---|
| "My restaurant staff needs to track inventory daily and get alerts when we're running low on key ingredients." | Restaurant staff | Inventory management |
| "My real estate team needs to track property leads and automatically follow up with prospects who haven't responded in 48 hours." | Sales team | Lead management + automation |
| "Our consulting clients need a portal where they can access project deliverables, schedule meetings, and track billable hours." | External clients | Client portal |

---

### 2. Describe Outcomes

**Be specific about functionality. Vague requests get vague results.**

| Vague (Avoid) | Specific (Use) |
|---|---|
| "Make a project tool" | "Customers upload project files, see progress updates, message our team, and download final files. Everyone gets notifications for each step." |
| "Build an expense tracker" | "Employees submit expense reports with receipts, managers approve or reject, accounting gets notified, reimbursements tracked until payment." |
| "Create a learning app" | "Students watch course videos, complete quizzes, track progress, and receive certificates. Instructors see engagement analytics." |

---

### 3. Explain the Journey

**Walk Genesis through how people will actually use your app.**

| Step | Example User Journey |
|---|---|
| **Onboarding** | "New users sign up, answer questions about their needs, get matched with resources" |
| **Core Usage** | "Customers browse the service catalog, request quotes, upload requirements" |
| **Completion** | "Review proposals, approve work, rate their experience afterward" |
| **Follow-up** | "Receive weekly personalized updates based on usage patterns" |

---

### 4. Break Down Ideas

**For bigger projects, use numbered steps.**

| App Type | Numbered Prompt |
|---|---|
| **Sales Dashboard** | "1. Show real-time sales on a dashboard 2. Let users filter by product type 3. Add export buttons for reports 4. Send alerts when sales drop" |
| **Feedback System** | "1. Collect customer feedback through forms 2. Categorize by department 3. Route urgent issues to management 4. Generate monthly reports 5. Send follow-up surveys automatically" |
| **Booking App** | "1. Display available appointment slots 2. Let clients book and pay online 3. Send confirmation emails and calendar invites 4. Allow rescheduling with 24-hour notice 5. Collect feedback after appointments" |

---

### 5. Connect Tools

**Tell Genesis what you already use so it can connect everything.**

Genesis supports 100+ integrations. Mention your tools and Genesis creates the automation flows automatically.

| Integration | Example Prompt |
|---|---|
| **Google Suite + Slack** | "Import customer data from Google Sheets and send email notifications via Gmail. Connect to Slack for team alerts." |
| **WhatsApp + Database** | "Connect to WhatsApp Business for client communication. Integrate with our existing project database for customer records." |
| **Multi-tool** | "Pull inventory from Google Sheets, connect to accounting project for cost tracking, send low-stock alerts to Slack." |

**Available integrations include:**

| Category | Tools |
|---|---|
| Communication | Slack, Discord, Microsoft Teams, WhatsApp Business, Twilio SMS |
| Email | Gmail, Outlook, Mailchimp |
| Productivity | Google Sheets, Docs, Drive, Calendar, Forms, Calendly |
| CRM | HubSpot, Apollo |
| Social | Twitter/X, LinkedIn, Facebook, YouTube, Reddit |
| Dev | GitHub, HTTP/Webhooks |
| Content | WordPress, Webflow |

---

### 6. Set the Tone

**Your app should sound like your business.**

| Tone | Prompt Example | Best For |
|---|---|---|
| **Professional & friendly** | "Keep it professional but friendly, like talking to customers in person. Make error messages helpful, not technical." | Customer-facing portals |
| **Encouraging & supportive** | "Use an encouraging, supportive tone like a personal fitness coach. Celebrate achievements and make setbacks feel manageable." | Wellness, education apps |
| **Authoritative & trustworthy** | "Sound like a trusted financial advisor — authoritative but not intimidating. Simple language for complex topics." | Finance, legal, healthcare |
| **Casual & energetic** | "Keep it casual and fun, like texting a friend. Use short sentences and emojis where appropriate." | Consumer apps, social tools |

---

### 7. Choose Look & Feel

**Tell Genesis how you want your app to look.**

| Visual Style | Prompt Example |
|---|---|
| **Brand-aligned** | "Clean, modern design with our brand colors: navy blue headers and bright green accent buttons. Company logo top left." |
| **Warm & calming** | "Warm design with soft colors — cream backgrounds and sage green accents. Rounded corners and gentle shadows." |
| **Bold & energetic** | "Bold orange and black colors. Strong typography and high-contrast buttons that motivate action." |
| **Dark & premium** | "Dark theme with neon accents, like a high-tech dashboard. Charcoal backgrounds with electric blue highlights." |

> **Deep dive:** [Guide to App Styles](../space-apps-guide/app-styles.md) covers minimalist, glassmorphism, neumorphism, material design, and more.

---

### 8. Define Access

**Be clear about who can do what.**

| Role | Prompt Example |
|---|---|
| **Multi-tier** | "Staff view all projects and add updates. Clients only see their own projects and can't edit. Managers access everything plus analytics." |
| **Educational** | "Students access courses and submit assignments. Instructors grade and message. Administrators manage all users and see reports." |
| **Corporate** | "Employees log hours and submit requests. Department heads approve their team's requests. HR accesses all data and generates reports." |

---

### 9. Iterate Easily

**Your app is never set in stone. Refine with follow-up prompts.**

| Iteration Type | Example Prompt |
|---|---|
| **Add feature** | "The form works great — add file upload after the description and make the submit button bigger." |
| **Move elements** | "Love the dashboard, but move notifications to top right and make charts more colorful." |
| **Add automation** | "Add a text reminder 24 hours before appointments and let customers reschedule themselves." |
| **Embed agent** | "Add a chat widget powered by the support agent in the bottom right corner." |
| **Connect integration** | "When a new booking is made, create a Google Calendar event and send a Slack notification." |

---

### 10. Reference

**Mention apps or websites with features you like.**

| Reference | Prompt Example |
|---|---|
| **Stripe-style** | "Dashboard layout similar to Stripe — clean cards with key metrics up top and detailed tables below. Simplify navigation." |
| **Udemy-style** | "Course layout like Udemy — video player left, course outline right, clean progress bar. More personal, less corporate." |
| **Calendly-style** | "Booking interface like Calendly — simple date/time selection with instant confirmation. Add our branding and service descriptions." |

---

### 11. Provide Examples

**Demonstrate workflows by describing specific scenarios.**

| Scenario | Workflow Example |
|---|---|
| **Customer inquiry** | "Contact form submitted → Create lead record → Send welcome email → Notify sales team → Set 3-day follow-up reminder" |
| **New employee** | "HR creates profile → Send welcome email with login → Employee completes onboarding forms → Manager notified → Training modules assigned" |
| **Order process** | "Customer places order → Inventory updated → Payment processed → Shipping label created → Customer gets tracking → Follow-up review request" |

---

### 12. Experiment

**Genesis saves your work automatically. Try bold changes.**

| Experiment Type | Example Prompt |
|---|---|
| **Layout overhaul** | "Let's completely redesign the homepage layout" |
| **Simplification** | "Remove the pricing section and replace with a simple contact form" |
| **Paradigm shift** | "Turn this form into a conversational chatbot experience" |
| **Gamification** | "Make this feel like a game with points and achievements instead of a boring business tool" |

> **Safety net:** Use [Genesis Version History](./version-history.md) to restore any previous version if an experiment doesn't work out.

---

## Prompt Anatomy Quick Reference

Use this cheat sheet when building:

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
| "Make me an app" | Too vague — Genesis can't read your mind | "Build a customer feedback form with star ratings and email notifications" |
| Asking for everything at once | Overloaded prompt produces confused results | Start simple, iterate with follow-ups |
| Ignoring integrations | Misses the power of 100+ connected tools | Always mention your existing tools |
| Not testing iteratively | Bugs compound if you don't catch them early | Test after every change |
| Forgetting about agents | Misses the intelligence pillar entirely | Consider: "Who would I hire to manage this?" — that's your agent |
| Skipping permissions | Everyone sees everything | Define roles and access levels |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [App Starter Prompts](../space-apps-guide/genesis-prompt-library.md) | Copy-ready prompts for common app types |
| [Guide to App Styles](../space-apps-guide/app-styles.md) | Visual style families with practical prompts |
| [Adding Genesis Context](./adding-context.md) | Upload reference files for richer apps |
| [Prompt Templates Library](./templates.md) | Browse the full prompt template collection |
