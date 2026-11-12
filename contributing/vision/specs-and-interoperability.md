---
description: >-
  Put projects, agents, automations and templates into one shareable Taskade AI Kit, export an app as a .tsk file, and read the plan for an open .tsk standard.
---

# Specs & Interoperability

Our goal is an open ecosystem for AI apps. In this ecosystem, you can store a full agent system in version control, share it and change it. Today, **Taskade AI Kits** give you the first part of this goal.

## Taskade AI Kits: Available Today

An **AI Kit** is one package that holds projects, agents, automations and templates. You can share a kit, and other people can install it and use it in seconds.

### What's in a Kit

A Taskade AI Kit holds all the parts of one workflow. For example:

```
Customer Support Kit/
├── 📄 Projects
│   ├── Support Ticket Tracker
│   └── Knowledge Base
├── 🤖 Agents  
│   ├── Customer Support Agent
│   └── Escalation Manager Agent
├── 🔄 Automations
│   ├── Ticket Form Processor
│   └── Auto-Assignment Workflow
└── 📋 Templates
    ├── Bug Report Template
    └── Feature Request Template
```

### Real Kit Examples

You can install these kits from the [Taskade App Factory](https://www.taskade.com/apps) today.

**Automation Expert Kit**
- Projects: Automation Help Center Resources
- Agents: Taskade Automation FAQ Bot
- Use case: Fast answers about automations

**Google EEAT Blog Kit**
- Projects: Content analysis workspace
- Agents: EEAT Blog Content Evaluator Agent
- Automations: Content evaluation workflow
- Use case: Make blog content meet the quality guidelines of Google

**AI Lead Generation Kit**
- Projects: Lead Tracker with custom fields
- Agents: Lead Processing Agent for qualification
- Automations: Automated lead capture and follow-up
- Use case: One system to manage leads

**Real Estate News Kit**
- Projects: RSS Tracker for news aggregation
- Agents: News Researcher Agent for analysis
- Automations: RSS feed processing and summarization
- Use case: Automatic news watch for one industry

### Creating and Sharing Kits

You can make a kit from an app space in your workspace:

1. Open the app space. In the left sidebar, go to **Kits** and click **Proceed**.
2. Add or remove projects, agents, automations and templates.
3. In the **Kits** tab, open the **···** menu of the kit and choose **Share**.
4. Turn on **Public access**. Taskade makes a link that you can share.

Other people can then install your kit with one click.

### Kit Installation Process

When a person installs your kit, these steps occur:

1. **Preview**: The person sees all the parts of the kit before the installation.
2. **Choose Workspace**: The person selects the space for the kit.
3. **Guided Setup**: A short tour helps the person configure the kit.
4. **Ready to Use**: All parts are connected and work at once.

## The Future: `.tsk` Standard

AI Kits are the bundle format of today. We also work on a more open standard: the **Taskade System Kit** (`.tsk`) format.

The first part of this standard is available. On Pro and above, you can download a Taskade Genesis app as a `.tsk` file. On every plan, you can import a `.tsk` file. Your plan must include the agents, apps, automations and AI Teams in the file. Read [Export Apps as .tsk Files](https://www.taskade.com/learn/genesis/tsk-export).

### Vision for `.tsk` Files

```
my-crm-app.tsk/
├── project.json      # Data schema and initial content
├── agent.json        # AI agent configuration and commands  
├── automation.json   # Workflow definitions and triggers
├── knowledge/        # Training materials and context
│   └── sales-playbook.pdf
└── meta.json         # App metadata and dependencies
```

### Why This Matters for Developers

The future `.tsk` standard will give developers these options:

1.  **Version Control:** Keep a full app in a Git repository.
2.  **Programmatic Creation:** Make kits with a CLI or the API, not only in the app.
3.  **Cross-Platform Compatibility:** Export and import between different platforms.
4.  **Template Ecosystem:** Share patterns that other people can use again.
5.  **Headless Management:** Deploy and manage apps with scripts only.

### Agent-Friendly APIs

We also want our APIs to be easy for AI agents to use. We study OpenAPI extensions like these:

*   **`x-agent-action`:** Marks an endpoint as safe for an agent that works alone.
*   **`x-agent-hitl-required`:** Tells when a person must approve the action (Human-in-the-Loop).
*   **`x-agent-context`:** Gives an agent structured context, so that it can make better decisions.

## Developer Integration

### Current Capabilities

Today, you can work with AI Kits in these places:

- **Web Interface**: Make, change and share kits from the **Kits** tab of an app space.
- **Taskade App Factory**: Find and install ready kits at [taskade.com/apps](https://www.taskade.com/apps).
- **Public Sharing**: Make a link that installs a kit with one click.
- **Guided Setup**: A short tour helps the person who installs a kit.

### Programmatic Access

The REST API can export an app space as a JSON bundle. The bundle holds agents, automations, projects, templates and apps. The API can also import a bundle into a workspace. Bundle export needs Pro or above. A separate API for kits is not available yet.

```bash
# Export an app space as a JSON bundle (Pro and above)
curl https://www.taskade.com/api/v1/bundles/SPACE_ID/export \
  -H "Authorization: Bearer YOUR_TOKEN"

# Import a JSON bundle into a workspace
curl -X POST https://www.taskade.com/api/v1/bundles/WORKSPACE_ID/import \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"bundleData": { "version": "1", "items": { } }}'
```

## LLM Integration Guidelines

If an AI model (LLM) writes Taskade content, it must obey these rules. They come from the [Taskade LLM guidelines](https://www.taskade.com/llms.txt).

### Structured Output Format
- Write Markdown with lists, checkboxes and headings.
- For a broad request, make a structured output: a project, an agent and an automation.
- Keep the output short, clear and useful.

### Content Recommendations
- Suggest a good project view: list, board, table, calendar, mindmap, gantt, orgchart.
- Suggest knowledge uploads for agents: PDFs, YouTube, Web Links, Docs.
- Connect the knowledge to the agent, so that the agent gives better answers.

### Best Practices
- Taskade is agent-native, real-time and structured.
- Each agent works on one domain. An agent is not a general chatbot.
- A workflow goes in this order: Idea → Project → Agent → Automation → Execution.
- Use YAML for structure and Markdown for content that users read.

## Getting Started with Kits

1. Go to [taskade.com/apps](https://www.taskade.com/apps) and look at the Taskade App Factory.
2. Install a ready kit to learn how a kit works.
3. Put your best workflows into a kit of your own.
4. Share your kit with the community.

The AI Kits of today are the base for the open `.tsk` standard of the future.

---

_Step-by-step guides on taskade.com/learn: [Taskade AI Kits](https://www.taskade.com/learn/agents/ai-kits), [Export Apps as .tsk Files](https://www.taskade.com/learn/genesis/tsk-export)._
