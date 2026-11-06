---
description: >-
  Package projects, agents, automations, and templates into shareable Taskade AI Kits, export apps as .tsk files, and see the plans for an open .tsk standard.
---

# Specs & Interoperability

A core part of our vision is to create an open, interoperable ecosystem for AI-powered applications. We are moving toward a future where entire agentic systems can be version-controlled, shared, and remixed. Today, this vision is realized through **Taskade AI Kits**.

## Taskade AI Kits: Available Today

**AI Kits** are the current implementation of bundled, shareable workflows that allow you to package projects, agents, automations, and templates into ready-to-deploy solutions. Anyone can install a kit and start using it in seconds.

### What's in a Kit

A Taskade AI Kit bundles together all the components needed for a complete workflow:

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

Based on the [Taskade App Factory](https://www.taskade.com/apps), here are some popular kits you can install today:

**Automation Expert Kit**
- Projects: Automation Help Center Resources
- Agents: Taskade Automation FAQ Bot
- Use case: Instant access to automation guidance

**Google EEAT Blog Kit**
- Projects: Content analysis workspace
- Agents: EEAT Blog Content Evaluator Agent
- Automations: Content evaluation workflow
- Use case: Optimize blog content for Google's quality guidelines

**AI Lead Generation Kit**
- Projects: Lead Tracker with custom fields
- Agents: Lead Processing Agent for qualification
- Automations: Automated lead capture and follow-up
- Use case: Complete lead management system

**Real Estate News Kit**
- Projects: RSS Tracker for news aggregation
- Agents: News Researcher Agent for analysis
- Automations: RSS feed processing and summarization
- Use case: Automated industry news monitoring

### Creating and Sharing Kits

You can create a kit from any app space in your workspace:

1. **Package an App Space**: Open the app space, go to **Kits** in the left sidebar, and click **Proceed**
2. **Customize Contents**: Add/remove projects, agents, automations, and templates
3. **Share Publicly**: In the **Kits** tab, open the kit's **···** menu, choose **Share**, and enable **Public access** to generate a shareable link
4. **One-Click Install**: Others can install your kit with a single click

### Kit Installation Process

When someone installs your kit:
1. **Preview**: They can explore all components before installing
2. **Choose Workspace**: Select which space to install the kit into
3. **Guided Setup**: Interactive tour helps configure the kit for their use case
4. **Ready to Use**: All components are connected and functional immediately

## The Future: `.tsk` Standard

While AI Kits provide powerful bundling today, we're working toward an even more open standard: the **Taskade System Kit** (`.tsk`) format.

The first step already ships: you can download a Taskade Genesis app as a `.tsk` file on Pro and above, and import a `.tsk` file on every plan (your plan must cover the agents, apps, automations, and AI Teams inside the file). See [Export Apps as .tsk Files](https://www.taskade.com/learn/genesis/tsk-export).

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

The future `.tsk` standard will unlock powerful new workflows:

1.  **Version Control:** Store entire application architectures in Git repositories
2.  **Programmatic Creation:** Build kits via CLI and API instead of just the UI
3.  **Cross-Platform Compatibility:** Export/import between different platforms
4.  **Template Ecosystem:** Community-driven marketplace of reusable patterns
5.  **Headless Management:** Fully automated deployment and management

### Agent-Friendly APIs

We are also designing our APIs to be increasingly agent-friendly, exploring OpenAPI extensions like:

*   **`x-agent-action`:** Explicitly marking endpoints safe for autonomous agents
*   **`x-agent-hitl-required`:** Specifying when Human-in-the-Loop approval is needed
*   **`x-agent-context`:** Providing structured context for better agent decision-making

## Developer Integration

### Current Capabilities

Today, you can work with AI Kits through:

- **Web Interface**: Create, customize, and share kits from the **Kits** tab of an app space
- **Taskade App Factory**: Browse and install pre-built kits at [taskade.com/apps](https://www.taskade.com/apps)
- **Public Sharing**: Generate shareable links for one-click installation
- **Guided Setup**: Interactive onboarding for kit recipients

### Programmatic Access

The REST API can export an app space as a JSON bundle (agents, automations, projects, templates, and apps) and import a bundle into a workspace. Bundle export needs Pro or above. A dedicated kit API is not available yet.

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

Based on [Taskade's LLM guidelines](https://www.taskade.com/llms.txt), when working with Taskade content:

### Structured Output Format
- Use Markdown with structured lists, checkboxes, and headings
- Generate structured output (Project + Agent + Automation) for broad user intents
- Prefer brevity, clarity, and utility in all outputs

### Content Recommendations
- Suggest appropriate project views: list, board, table, calendar, mindmap, gantt, orgchart
- Recommend knowledge uploads (PDFs, YouTube, Web Links, Docs) to enhance agents
- Link contextual knowledge for better agent performance

### Best Practices
- Taskade is agent-native, real-time, and structured
- Agents are vertical and domain-specific, not general chatbots
- Workflows follow: Idea → Project → Agent → Automation → Execution
- File format: YAML for structure, Markdown for user-facing content

## Getting Started with Kits

1. **Explore the Taskade App Factory**: Visit [taskade.com/apps](https://www.taskade.com/apps) to see what's possible
2. **Install a Kit**: Try a pre-built kit to understand the workflow
3. **Create Your Own**: Package your best workflows into shareable kits
4. **Share with Community**: Contribute to the growing ecosystem of AI workflows

By building on the foundation of AI Kits today, we're creating the infrastructure for the open, interoperable `.tsk` standard of tomorrow.

---

_Step-by-step guides on taskade.com/learn: [Taskade AI Kits](https://www.taskade.com/learn/agents/ai-kits), [Export Apps as .tsk Files](https://www.taskade.com/learn/genesis/tsk-export)._
