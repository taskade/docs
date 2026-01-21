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

Based on [Taskade's AI Kit Gallery](https://taskade.com/kits), here are some popular kits you can install today:

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

You can create kits from any folder in your workspace:

1. **Package a Folder**: Right-click any folder and select "Create Kit"
2. **Customize Contents**: Add/remove projects, agents, automations, and templates
3. **Share Publicly**: Enable public access to generate a shareable link
4. **One-Click Install**: Others can install your kit with a single click

### Kit Installation Process

When someone installs your kit:
1. **Preview**: They can explore all components before installing
2. **Choose Workspace**: Select which space to install the kit into
3. **Guided Setup**: Interactive tour helps configure the kit for their use case
4. **Ready to Use**: All components are connected and functional immediately

## The Future: `.tsk` Standard

While AI Kits provide powerful bundling today, we're working toward an even more open standard: the **Taskade System Kit** (`.tsk`) format.

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

- **Web Interface**: Create, customize, and share kits at [taskade.com/kits](https://taskade.com/kits)
- **Kit Gallery**: Browse and install from hundreds of pre-built kits
- **Public Sharing**: Generate shareable links for one-click installation
- **Guided Setup**: Interactive onboarding for kit recipients

### Coming Soon: Programmatic Access

We're building API endpoints for programmatic kit management:

```bash
# Create a kit (planned)
curl -X POST https://www.taskade.com/api/v1/kits \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Custom CRM Kit",
    "description": "Complete customer relationship management system",
    "components": {
      "projects": ["project_id_1", "project_id_2"],
      "agents": ["agent_id_1"],
      "automations": ["automation_id_1", "automation_id_2"]
    }
  }'

# Install a kit (planned)
curl -X POST https://www.taskade.com/api/v1/kits/KIT_ID/install \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"workspace_id": "target_workspace"}'
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

1. **Explore the Gallery**: Visit [taskade.com/kits](https://taskade.com/kits) to see what's possible
2. **Install a Kit**: Try a pre-built kit to understand the workflow
3. **Create Your Own**: Package your best workflows into shareable kits
4. **Share with Community**: Contribute to the growing ecosystem of AI workflows

By building on the foundation of AI Kits today, we're creating the infrastructure for the open, interoperable `.tsk` standard of tomorrow. 