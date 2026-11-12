---
description: >-
  How Taskade Genesis turns plain-English prompts into live apps using Workspace DNA: projects, AI agents, automations, Taskade EVE, and Intelligence Score.
---

# How Genesis Works: Workspace DNA

---

## Overview

This guide explains how **Taskade Genesis** works. Taskade Genesis turns a plain-language description into a full, working business app. In this guide, you learn about:

- **The Tree of Life:** How Memory (Projects), Intelligence (Agents), and Execution (Automations) work as one cycle.
- **Workspace DNA:** What the DNA of your workspace is, and why each app that you build is different.
- **Taskade EVE:** How the AI builder of Taskade connects all the parts.
- **Intelligence Score:** How each app gets a score from 0 to 100, in 5 levels.

A plain-English prompt becomes a working app in four steps:

1. You describe the app in a plain-English prompt.
2. Taskade Genesis builds the app screens (React), the workspace backend (projects and databases), the AI agents, and the automations.
3. You preview the app.
4. You describe changes, and Taskade Genesis updates the app. You do this again until the app is ready.

> **New to Taskade Genesis?** Start with [Create Your First App](./getting-started.md) for a hands-on walkthrough. Or build your first app now with [Taskade Genesis](https://www.taskade.com/create).

---

## What Is Taskade Genesis?

Taskade Genesis is the AI app builder of Taskade. It turns a plain-language description into a **full, working business app** in minutes. The result is real software, not a mockup or a prototype.

One prompt gives you these parts:

| Component | What You Get |
|---|---|
| **User Interface** | A React app with shadcn/ui components, a layout for each screen size, and styles that you can change |
| **Databases** | Project databases with custom fields, relationships, and persistent memory |
| **AI Agents** | Custom agents trained on your business context. You can put them in your apps |
| **Automations** | Workflows across 100+ integrated tools (Slack, Gmail, HubSpot, Google Sheets, and more) |
| **File Handling** | Upload, storage, and AI processing for documents and media |
| **Security** | Role-based access control, app sign-in on every plan, password protection (Pro and up), and custom domains (Pro and up) |
| **Analytics** | Visitor counts, locations, traffic sources, and devices (Business and up) |
| **Version Control** | Version history. Restore the design and code of an earlier version with one click |
| **Publishing** | A link that you can share, custom domains, and the community gallery. The first clean build goes live one time, unlisted. Later changes stay a draft until you click **Publish**. Manual Updates work on every plan |

> **Taskade Genesis hint:** Your AI credits pay for app creation. Different models use different amounts of credits. See [Taskade AI Credits](https://www.taskade.com/learn/agents/ai-usage) for details.

---

## What You Can Build

Taskade Genesis works for each industry. You describe the problem, and it builds the solution.

| What You Ask For | What Taskade Genesis Builds | Powered By Your DNA |
|---|---|---|
| "Build a customer feedback app" | Ratings, sentiment analysis, photo uploads, manager alerts, follow-up workflows | Your service standards, past feedback, ways to resolve problems |
| "Create a booking system" | Real-time scheduling, payments, automatic confirmations, customer history, staff planning | Your services, prices, availability rules, customer preferences |
| "I need a CRM for leads" | Lead capture from many sources, AI scores for leads, automatic follow-ups, pipeline tracking, forecasts | Your sales process, customer segments, qualification rules |
| "Build an onboarding portal" | Forms for new staff, equipment requests, training checklists, document collection, milestone tracking | Your org structure, roles, policies, training materials |
| "Create an AI help desk" | Ticket submission, AI routing, knowledge base, SLA tracking, satisfaction surveys | Your support categories, team structure, common problems |
| "Build an inventory tracker" | Product database, stock levels, supplier management, automatic reorders, sales patterns | Your product catalog, supplier data, reorder history |
| "Create a course platform" | Video hosting, quizzes, progress tracking, certificates, engagement analytics | Your course content, learning paths, assessment rules |

---

## What Makes Taskade Genesis Different

Taskade Genesis does not start from an empty template or a generic form. It starts from your **existing Workspace DNA**:

| Start From a Blank Template | Start From Taskade Genesis |
|---|---|
| Blank templates | Your workspace data |
| You set up the database by hand | Databases come from your projects |
| No AI | Custom AI agents in each app |
| A separate automation tool | 100+ integrations from day one |
| A static build, made one time | A living app that you improve over time |
| Weeks or months before launch | Minutes from prompt to live app |

**Your workspace is the foundation of your app:**
- Your **projects** become the memory of the app
- Your **AI agents** become the intelligence of the app
- Your **automations** become the execution layer of the app
- Your **documents** become the knowledge base of the app

> Human DNA holds the genetic instructions for life. Your workspace holds the digital instructions for your apps. As a result, each app that you make is **unique**.

---

## The Tree of Life Architecture

Each Taskade Genesis app has a **Tree of Life** at its center. The Tree of Life is a cycle of three connected systems that continue to learn.

```
        +------------------+
        |     MEMORY       |
        |   (Projects &    |
        |    Databases)    |
        +--------+---------+
                 |
    Feeds into   |   Writes back
                 v
  +--------------+---------------+
  |         EVE                  |
  |   (Unified Intelligence)     |
  +--------------+---------------+
        |                 |
        v                 v
+-------+------+  +------+--------+
| INTELLIGENCE |  |   EXECUTION   |
| (AI Agents)  |  | (Automations) |
+--------------+  +---------------+
```

> If you remove one pillar, the system is incomplete. All three pillars work together.

---

### Memory: Projects & Databases

In Taskade Genesis, "Memory" means **living context**. This information keeps its relationships, grows over time, and gives the AI the facts that it uses.

| App Type | Memory Structure Taskade Genesis Creates |
|---|---|
| **Customer Feedback** | Feedback database with rating fields, contacts, photo attachments, follow-ups, resolution history |
| **Booking System** | Appointment database, client profiles, service catalog, staff schedules, payment records |
| **Inventory Management** | Product database, stock levels, supplier data, reorder history, sales patterns |
| **CRM** | Lead database, interaction logs, deal pipeline, qualification scores, conversion history |
| **Help Desk** | Ticket database, agent assignments, SLA timers, resolution logs, satisfaction ratings |

> **Deep dive:** [Projects & Databases: The Memory Pillar](../workspaces/projects-databases.md)

---

### Intelligence: Custom AI Agents

Intelligence means AI agents that do more than answer questions. They are **persistent teammates** that learn, reason, and make decisions.

| App Type | Agent Intelligence |
|---|---|
| **Real Estate Portal** | Trained on property listings, market data, and client preferences. Capabilities: property matches, trend analysis, client qualification, tour scheduling |
| **Healthcare Management** | Trained on appointment types, provider schedules, and insurance policies. Capabilities: symptom triage, appointment routing, insurance verification |
| **E-Learning Platform** | Trained on course content, student performance, and learning paths. Capabilities: personal recommendations, progress tracking, difficulty changes |
| **Customer Support** | Trained on product docs, past tickets, and resolution playbooks. Capabilities: issue classification, automatic responses, escalation routing |
| **Sales CRM** | Trained on deal history, buyer personas, and market data. Capabilities: lead scores, next-best-action, forecasts |

> **Deep dive:** [Custom AI Agents: The Intelligence Pillar](../ai-features/ai-agents-getting-started.md)

---

### Execution: Automations & Integrations

Execution means **automation workflows**. They make your app react to events across 100+ outside tools.

| App Type | Automation Workflows Created |
|---|---|
| **Booking System** | Form submitted → Check availability → Process payment → Send confirmation email → Create calendar event → Update availability |
| **Customer Feedback** | Low rating received → Agent analyzes severity → Slack alert to manager → Create follow-up task → Log to database |
| **Inventory Management** | Stock below threshold → Agent calculates optimal quantity → Email supplier → Post Slack alert → Create purchase order → Track delivery |
| **Lead CRM** | New form submission → Create lead record → AI qualification score → Route to sales rep → Set follow-up reminder → Add to nurturing sequence |
| **Help Desk** | Ticket submitted → AI categorizes issue → Route to specialist → Send acknowledgment → Track SLA timer → Follow-up survey on close |

**Supported integration categories (100+ tools):**

| Category | Tools |
|---|---|
| **Communication** | Slack, Discord, Microsoft Teams, WhatsApp Business, Twilio SMS |
| **Email** | Gmail, Outlook, Mailchimp |
| **Productivity** | Google Sheets, Google Docs, Google Drive, Google Calendar, Google Forms, Calendly |
| **CRM & Sales** | HubSpot, Apollo |
| **Social & Marketing** | Twitter/X, LinkedIn, Facebook, YouTube, Reddit, WordPress, Webflow, RSS |
| **Development** | GitHub, HTTP/Webhooks |

Premium integrations such as Slack, Gmail, and Stripe need a paid plan. Webhook triggers need Pro or above. Free runs the standard connectors.

> **Deep dive:** [Automations: The Execution Pillar](../automation/README.md)

Connect your automations to Slack, Stripe, HubSpot, and more with [integrations](../automation/integrations.md). You can also call an MCP server from an automation. See [MCP Connectors](mcp-connectors.md).

---

## The Self-Reinforcing Feedback Loop

Each action in your Taskade Genesis app makes results. These results go back into the memory of your workspace. This cycle is a **self-reinforcing intelligence loop**.

| Action Type | Memory Created | Your Workspace Learns |
|---|---|---|
| **Email Sent** | Delivery status, opens and clicks, responses, time to reply | Best email times, effective templates, likely responses |
| **Payment Processed** | Transaction record, receipt, payment method | Best prices, payment preferences, conversion patterns |
| **Task Completed** | Time to finish, who finished it, the result | Time estimates, team performance, bottlenecks |
| **Customer Interaction** | Stored feedback, sentiment, satisfaction | Customer patterns, problem resolution, retention factors |
| **Automation Run** | Trigger data, results, success or failure status | Process improvements, failure prediction, better timing |
| **Agent Conversation** | Query patterns, resolution paths, knowledge gaps | Better responses, training gaps, new FAQ candidates |

**How the loop works:**
1. Automations capture real-world data, such as customer responses, transactions, finished tasks, and support chats.
2. The data goes into project databases.
3. AI agents get the new information at once.
4. Agents make better decisions with more context.
5. Better decisions start more effective automations.
6. The cycle starts again, and your workspace improves with each interaction.

---

## Workspace Intelligence Score

Each Taskade Genesis app gets an **Intelligence Score** from 0 to 100 (shown as **App IQ**). Taskade calculates it from the three DNA pillars of the workspace of the app:

| Component | Points | Max Points |
|---|---|---|
| Projects (Memory) | 2 pts each, up to 10 projects | 20 |
| AI Agents (Intelligence) | 10 pts each, up to 3 agents | 30 |
| Automation Flows (Execution) | 5 pts each, up to 6 flows | 30 |
| Integrations (Connections) | _Reserved_ | 20 |
| **Total** | | **100** |

### Intelligence Tiers

| Tier | Score | What It Means |
|---|---|---|
| ⚪ **Empty** | 0–19 | The start. Add projects and agents |
| 🟠 **Beginner** | 20–39 | Basic setup. Your workspace takes shape |
| 🟡 **Learning** | 40–69 | Growth. Apps improve with real data |
| 🔵 **Intelligent** | 70–89 | Advanced. Strong AI coverage with active automations |
| 🟢 **Genius** | 90–100 | All features. Agents, automations, and data work as one |

> **Tip:** AI agents increase your Intelligence Score fastest (+10 pts each). Three agents and six automation flows give 60 points (Learning). Add ten projects to get 80 points, the Intelligent tier. Integrations are reserved, so 80 is the highest score today.

---

## EVE: The Unified Intelligence

**Taskade EVE** is the AI builder that works across all parts of Workspace DNA. A custom agent does one job. Taskade EVE builds and edits the full workspace from a chat. It connects Memory, Intelligence, and Execution into one system.

When you work in Taskade, Taskade EVE:
1. **Reads** your full Workspace DNA (projects, agents, automations, files)
2. **Understands** the context across all three pillars
3. **Decides** what to make or how to answer
4. **Learns** from each interaction and result

### How EVE Powers Each DNA Strand

| DNA Strand | How Taskade EVE Powers It |
|---|---|
| **Memory (Projects)** | Reads and indexes project data, finds patterns, makes structured databases, keeps the links between data |
| **Intelligence (Agents)** | Trains custom agents on knowledge, sends each query to a suitable model, gives answers that use context, lets agents work together |
| **Execution (Automations)** | Reads triggers, makes conditional decisions, writes dynamic content, captures and structures results |

### The Bicameral Partnership

Taskade Genesis makes a partnership between you and the AI:
- **You** give the intent, the goals, the domain knowledge, and the creative vision.
- **Taskade EVE** does the technical work, finds patterns, and improves the result.
- **Together**, you make an app that neither of you can make alone.

---

## What EVE Can Do

| Action | Example | What Happens |
|---|---|---|
| **Build Taskade Genesis Apps** | "Build a customer feedback app with sentiment analysis" | Builds a full app with projects, agents, and automations |
| **Create AI Agents** | "Create an agent trained on our product documentation" | Creates the agent, indexes the docs, and configures the knowledge base |
| **Configure Automations** | "When a task is complete, send a Slack notification" | Creates an automation with a trigger, an action, and conditions |
| **Manage Projects** | "Create a project for Q1 marketing campaigns" | Creates a structured project with sections |
| **Answer Questions** | "Which projects have overdue tasks?" | Searches the workspace and gives detailed results |
| **Edit Existing Work** | "Update the Customer Support agent to be more empathetic" | Changes the training and behavior of the agent |
| **Generate Images** | "Create a hero banner for my booking app" | Makes the image and saves it to the Media library |
| **Connect Integrations** | "Send new leads to our HubSpot CRM" | Creates an automation flow with the HubSpot integration |
| **Run an Automation** | "Run my daily digest now" | Runs a saved automation by name or id, waits for it to finish, and gives a plain-language summary. It does not run a disabled automation until you enable it |
| **Build an Automation** | "Build a flow that posts new form submissions to Slack" | Creates a new automation from a validated template. The automation starts switched off, so it does not run until you review and enable it |

---

## Kits & Bundles: Package Your Entire Workspace

You can package a Taskade Genesis workspace as a **Bundle (Kit)**. A bundle is a package that another person can install. It includes:

| Bundle Component | Included | Description |
|---|---|---|
| **Taskade Genesis Apps** | Yes | The full app with screens, code, and configuration |
| **Projects & Databases** | Yes | Data structures and sample records |
| **AI Agents** | Yes | Agent configurations, personas, knowledge references |
| **Automation Flows** | Yes | Workflow definitions and triggers |
| **Templates** | Yes | Project and agent templates |
| **Media** | Yes | Images, documents, uploads |

### How Bundles Work

| Feature | Detail |
|---|---|
| **Create** | Package your workspace into a bundle that you can share (empty, or with all items) |
| **Dependencies** | Taskade adds all linked resources for you |
| **Install** | Other people clone the full bundle to their workspace with one click |
| **Public sharing** | Publish to the Community Gallery, and set **Let others clone** to **Free** or **Paid** |
| **Export** | Download a `.tsk` bundle or export to GitHub on Pro and above. Taskade checks the plan on the server |
| **Import limits** | Each item counts against the plan of the workspace that imports it. For example, Free cannot import automations |

> **Think of a bundle as a "Workspace DNA transplant."** It holds a full system (apps, agents, automations, and data) that another person can install and change.

---

## Memory Architecture: 5 Memory Types

Your Workspace DNA puts memory into 5 layers:

| Memory Type | Purpose | Example |
|---|---|---|
| **Core Memory** | Main operational data | Customer database, product catalog |
| **Reference Memory** | Knowledge bases and documentation | FAQ docs, brand guidelines, SOPs |
| **Working Memory** | Current state and active processes | Today's tasks, open tickets, active orders |
| **Navigation Memory** | Structure of the workspace | Workspace hierarchy, project categories |
| **Learning Memory** | Insights and patterns over time | Performance trends, customer behavior patterns |

> AI agents and Taskade Genesis apps use all 5 memory layers to give answers that are accurate and that use context.

---

## Next Steps

You now know the DNA of your workspace. Choose your next step:

### Get Started with Genesis

| Guide | What You Learn |
|---|---|
| [Create Your First App](./getting-started.md) | The steps of your first build |
| [A Maker's Guide to AI Prompts](./prompt-guide.md) | How to describe what you need |
| [App Starter Prompts](../space-apps-guide/genesis-prompt-library.md) | Prompts for common app types |

### Master the Three Pillars

| Guide | What You Learn |
|---|---|
| [Projects & Databases: The Memory Pillar](../workspaces/projects-databases.md) | Database structures and data management |
| [Custom AI Agents: The Intelligence Pillar](../ai-features/ai-agents-getting-started.md) | Build, train, and deploy AI agents |
| [Automations: The Execution Pillar](../automation/README.md) | Triggers, actions, and 100+ integrations |

### Go Deeper

| Guide | What You Learn |
|---|---|
| [Adding Taskade Genesis Context](./adding-context.md) | Upload files and data to give your apps more context |
| [Publish and Clone Your Apps](../community-and-sharing/publish-and-clone.md) | Deploy, share, and distribute your apps |
| [Taskade AI Credits](../../account-management/credits-and-billing.md) | Credits, models, and usage |
| [Build on Taskade (Developer Hub)](../../apis-living-system-development/developer-home.md) | APIs, SDKs, and MCP for access with code |

---

_Step-by-step guide on taskade.com/learn: [How Taskade Genesis Works: Workspace DNA](https://www.taskade.com/learn/genesis/workspace-dna)._
