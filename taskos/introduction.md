---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Introduction to TaskOS

**TaskOS** is Taskade's agentic operating system—the engine that transforms natural language prompts into complete, intelligent applications. It orchestrates the three core pillars of every Subspace: Knowledge, Intelligence, and Action. *If you prefer a fully no-code experience, check out [Taskade Genesis](../genesis/README.md), which provides a Genesis prompt builder powered by TaskOS under the hood.*

## How TaskOS Works

TaskOS operates on a simple but powerful premise: **work backwards from intent**. When you provide a prompt like "build a tool to track customer feature requests," TaskOS analyzes the goal and automatically generates the entire underlying system:

1.  **Knowledge Schema Generation**: Creates a Taskade Project with appropriate custom fields (e.g., "Feature," "Status," "Priority," "Votes")
2.  **Intelligence Layer Setup**: Instantiates an AI Agent trained on the project context with specialized commands like `add_request`, `categorize_feedback`, or `summarize_trends`
3.  **Action Layer Configuration**: Sets up automations with public forms, webhooks, and integrations to capture and process data
4.  **Presentation Layer Creation**: Generates a shareable, branded web interface with forms, data views, and chat functionality

## AI Kits: TaskOS in Action Today

The TaskOS vision is already realized through **[Taskade AI Kits](https://taskade.com/kits)**—ready-to-deploy workflows that bundle projects, agents, automations, and templates into one-click installations.

### Real Kit Examples

**AI Lead Generation Kit**
- **Knowledge**: Lead Tracker project with custom fields for contact info, qualification status, and source
- **Intelligence**: Lead Processing Agent that qualifies prospects and suggests next actions
- **Action**: Automated lead capture form that feeds directly into the tracker and triggers agent analysis

**Customer Support Kit**
- **Knowledge**: Support Ticket Tracker with priority, category, and resolution status fields
- **Intelligence**: Customer Support Agent that triages tickets and suggests responses
- **Action**: Public support form with automatic ticket creation and agent-powered routing

**Real Estate News Kit**
- **Knowledge**: RSS Tracker project for aggregating industry news
- **Intelligence**: News Researcher Agent that analyzes and summarizes articles
- **Action**: Automated RSS feed processing with scheduled reports

### The Generator: One Prompt, Complete System

The core innovation of TaskOS is the **Generator**—a system that creates everything you need from a single prompt:

```bash
# Generate a complete workflow from intent
curl -X POST https://www.taskade.com/api/v1/generate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"prompt": "Create a customer feedback portal with AI analysis"}'

# Returns: Project + Agent + Automation, all pre-wired to execute
```

This follows the workflow: **Idea → Project → Agent → Automation → Execution**

## Technical Architecture

TaskOS is built on Taskade's robust real-time collaboration platform, featuring:

### Core Components
- **Real-time Document System**: Operational transformation for conflict-free collaborative editing
- **GraphQL API Layer**: Type-safe API with subscriptions for live updates
- **Permission System**: Role-based access control with fine-grained permissions
- **Search & Discovery**: Hybrid search combining keyword and semantic (vector) search
- **AI Integration**: LangChain-powered agents with tool access and memory

### Agent Capabilities
```typescript
// Example agent configuration
const agentConfig = {
  description: "Customer feedback analysis specialist",
  commands: [
    {
      id: "analyze_feedback",
      name: "Analyze Feedback",
      prompt: "Analyze customer feedback and identify key themes, sentiment, and actionable insights"
    },
    {
      id: "prioritize_features",
      name: "Prioritize Features", 
      prompt: "Rank feature requests by impact, effort, and strategic alignment"
    }
  ],
  tools: ["knowledge_search", "web_search", "project_context", "automation_trigger"],
  knowledgeEnabled: true
}
```

### Automation Workflows
TaskOS supports complex multi-step automations:
- **100+ Integrations**: Slack, GitHub, HubSpot, Google Workspace, and more
- **Event-driven Triggers**: Form submissions, webhooks, schedules, project events
- **AI-powered Actions**: Content generation, data analysis, decision making
- **Human-in-the-Loop**: Approval workflows for sensitive operations

## Creating and Sharing Workflows

### Current: AI Kits
Today, you can package and share complete workflows as AI Kits:

1. **Create**: Build your project, agent, and automation in a folder
2. **Package**: Right-click the folder and select "Create Kit"
3. **Share**: Enable public access to generate a shareable link
4. **Install**: Others can install your kit with one click and guided setup

### Future: `.tsk` Standard

We're evolving toward the **Taskade System Kit** (`.tsk`) format for even greater portability:

```
my-app.tsk/
├── project.json      # Data schema and initial content
├── agent.json        # AI agent configuration and commands  
├── automation.json   # Workflow definitions and triggers
├── knowledge/        # Training materials and context
│   └── domain-guide.pdf
└── meta.json         # App metadata and dependencies
```

This will enable:
- **Version Control**: Track entire application architectures in Git
- **Programmatic Creation**: Build kits via CLI and API
- **Cross-Platform Compatibility**: Export/import between different platforms
- **Template Ecosystem**: Community-driven marketplace of reusable patterns

## Real-World Applications

TaskOS excels at creating applications that combine structured data, AI reasoning, and automated workflows:

### Internal Tools
- **Smart CRM**: Lead scoring, automated follow-ups, and sales insights
- **Project Dashboard**: AI-powered status updates and risk analysis  
- **Knowledge Base**: Intelligent search and content recommendations
- **Bug Tracker**: Automated triage, assignment, and resolution tracking

### Public-Facing Apps
- **Customer Support Portal**: AI chatbot with knowledge base integration
- **Lead Capture System**: Intelligent form processing and qualification
- **Feedback Collection**: Automated analysis and reporting
- **Booking System**: Smart scheduling with conflict resolution

### Agentic Workflows
- **Content Pipeline**: Research, generation, review, and publishing
- **Data Processing**: Ingestion, analysis, and reporting automation
- **Quality Assurance**: Automated testing and compliance checking
- **Customer Onboarding**: Personalized workflows and progress tracking

## Development Approach

TaskOS is designed for both **prompt-driven generation** and **programmatic customization**:

### Prompt-to-App Generation (Coming Soon)
```bash
# Generate a complete application from a prompt
curl -X POST https://www.taskade.com/api/v1/generate \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{"prompt": "Create a customer feedback portal with AI analysis"}'
```

### Current: Component-by-Component Building
```bash
# Create the knowledge layer
curl -X POST https://www.taskade.com/api/v1/projects \
  -d '{"name": "Customer Feedback", "folderId": "SUBSPACE_ID"}'

# Add the intelligence layer
curl -X POST https://www.taskade.com/api/v1/folders/SUBSPACE_ID/agents/generate \
  -d '{"prompt": "Create a feedback analysis agent"}'

# Package as a kit (via UI, API coming soon)
```

## LLM Integration Guidelines

For developers building with LLMs and TaskOS:

### Structured Output Format
- Use Markdown with structured lists, checkboxes, and headings
- Generate structured output (Project + Agent + Automation) for broad user intents
- Prefer brevity, clarity, and utility in all outputs

### Content Recommendations
- Suggest appropriate project views: list, board, table, calendar, mindmap, gantt, orgchart
- Recommend knowledge uploads (PDFs, YouTube videos, web links) to enhance agents
- Link contextual knowledge for better agent performance

### Best Practices
- TaskOS is agent-native, real-time, and structured
- Agents are vertical and domain-specific, not general chatbots
- Workflows follow: Idea → Project → Agent → Automation → Execution
- File format: YAML for structure, Markdown for user-facing content

## Integration with Taskade Platform

TaskOS leverages Taskade's full platform capabilities:

- **8 Project Views**: List, Board, Calendar, Table, Mind Map, Org Chart, Action Sheet, Gantt
- **Rich Content Types**: Tasks, notes, files, embeds, and custom fields
- **Real-time Collaboration**: Live cursors, instant sync, and conflict resolution
- **Enterprise Features**: SSO, audit logs, advanced permissions, and compliance
- **Mobile & Desktop**: Native apps with offline support and sync

## Getting Started

1. **[Explore AI Kits](https://taskade.com/kits)** - See TaskOS in action with pre-built workflows
2. **[Install a Kit](https://help.taskade.com/en/articles/10378721-taskade-ai-kits)** - Experience the one-click deployment process
3. **[Learn the Architecture](../vision/architecture.md)** - Understand how the pieces fit together  
4. **[Try the API](../api/workspaces/README.md)** - Start building with our building blocks
5. **[Join the Community](https://www.taskade.com/feedback/public-api)** - Connect with other developers

---

**TaskOS is available today through AI Kits.** The Core API provides the building blocks for custom development, while the full prompt-to-app Generator and `.tsk` standard are coming soon.

Experience the future of AI-powered application development at [taskade.com/kits](https://taskade.com/kits).

