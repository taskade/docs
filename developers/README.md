# Developer Documentation

**Build on Taskade's platform for applications, agents, and automation.**

{% hint style="info" %}
**New to Taskade's API?** Start with our [authentication guide](../start/authentication.md) and explore the [API documentation](https://www.taskade.com/api/documentation/).
{% endhint %}

## Platform Overview

Taskade provides a complete platform for building intelligent applications:

| Capability | Description | Learn More |
|------------|-------------|------------|
| **AI App Builder** | Generate full-stack applications from natural language | [Taskade Genesis →](../genesis/README.md) |
| **AI Agents Platform** | Custom assistants with knowledge retrieval | [AI Agents Guide →](https://help.taskade.com/en/articles/8958457-custom-ai-agents-the-intelligence-pillar) |
| **Workflow Automation** | Event-driven processing with 100+ integrations | [Automations →](https://help.taskade.com/en/articles/8958467-automations-the-execution-pillar) |
| **Projects & Data** | Structured data with real-time sync and custom fields | [Projects Guide →](https://help.taskade.com/en/articles/12166149-projects-databases-the-memory-pillar) |

The API is built around real-time data synchronization and a unified intelligence layer that powers everything from simple CRUD operations to complex AI-driven workflows.

## 🚀 Quick Start

{% tabs %}
{% tab title="First API Call" %}

### **[Quickstart Guide →](../start/authentication.md)**

Set up your development environment, get API keys, and make your first request in under 5 minutes.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://www.taskade.com/api/v1/workspaces
```

{% endtab %}

{% tab title="Authentication" %}

### **[Authentication Guide →](../start/personal-tokens.md)**

Learn about API keys, OAuth, and security best practices for production applications.

**Supported methods:**

- Personal Access Tokens (recommended for development)
- OAuth 2.0 (recommended for production)
  {% endtab %}

{% tab title="SDKs & Tools" %}

### **SDKs & Libraries**

Official and community-maintained libraries:

**Official:**

- REST API with OpenAPI spec
- Webhook integrations
- Real-time WebSocket API

**Community:**

- Python SDK (coming soon)
- Node.js SDK (coming soon)
- Postman collection
  {% endtab %}
  {% endtabs %}

## 🛠️ Core APIs

### **[Workspaces & Projects](../api/workspaces/README.md)**

**Tree-structured data with real-time synchronization**. Projects support conflict-free collaborative editing with instant synchronization across all connected clients. Each project maintains versioned change history for reliable collaboration.

### **[Tasks & Data](../api/tasks/README.md)**

**Event-sourced task management with rich field types**. Tasks support complex data relationships, custom field schemas, and atomic batch operations. The system maintains audit trails and supports time-travel queries for debugging and analytics.

### **[AI Agents](../api/agents/README.md)**

**Stateful AI agents with persistent memory and tool access**. Each agent maintains its own knowledge graph derived from project data, documents, and conversation history. Agents can be composed into multi-agent workflows with dependency resolution and error handling.

## ⚡ Automations & Integrations

### **[Automation System](../automation/README.md)**

**Event-driven architecture with guaranteed delivery**. Built on a distributed event system for reliable message processing. Supports exactly-once delivery semantics, failure handling, and automatic retry with exponential backoff.

### **[Triggers & Actions](../automation/triggers.md)**

**Reactive programming model with high reliability**. Triggers provide real-time event detection and processing. Actions include robust error handling and timeout patterns for reliable external service integration.

### **[Integration Reference](../automation/comprehensive-integrations.md)**

**100+ pre-built connectors with OpenAPI 3.0 compliance**. Each integration includes rate limiting, authentication handling, and automatic schema validation. Custom integrations support GraphQL subscriptions and WebSocket streaming.

## 🎯 Genesis API

### **[Taskade Genesis](../genesis/README.md)**

Build complete web applications from natural language prompts. Taskade Genesis handles code generation and automatic deployment.

**[Create Your First App →](https://help.taskade.com/en/articles/11957643-create-your-first-app)**

## 📚 Resources

### **[OpenAPI Specification](https://www.taskade.com/api/documentation/static/index.html#/)**

Interactive API documentation with live testing capabilities.

### **[SDKs & Libraries](../api/README.md#sdks-and-tools)**

Official and community-maintained libraries for popular languages.

### **[API Best Practices](../api/README.md#best-practices)**

**Performance characteristics and scaling guidelines**. The platform is built for high-throughput applications with enterprise-grade performance. Rate limits are implemented to ensure fair usage across all users. Includes guidance on connection pooling, request batching, and optimal retry strategies.

## 💡 What You Can Build

### **Full-Stack Applications (Taskade Genesis)**

Build complete web applications from natural language prompts:

| Capability | Description |
|------------|-------------|
| **App Generation** | Describe your app and Taskade generates the code |
| **Automatic Deployment** | Apps go live instantly with unique URLs |
| **Custom Domains** | Connect your own branded domain |
| **Version History** | Track changes and rollback when needed |

**[Create Your First App →](https://help.taskade.com/en/articles/11957643-create-your-first-app)**

### **AI Agents**

Deploy custom AI assistants trained on your business knowledge:

| Capability | Description |
|------------|-------------|
| **Agent Creation** | Custom prompts, behaviors, and personalities |
| **Knowledge Training** | Train on documents, websites, and project data |
| **Multi-Agent Teams** | Coordinate multiple agents for complex tasks |
| **Public Embedding** | Deploy agents as widgets on external sites |

**[AI Agents Guide →](https://help.taskade.com/en/articles/8958457-custom-ai-agents-the-intelligence-pillar)**

### **Workflow Automation**

Connect your apps to 100+ services with event-driven workflows:

| Capability | Description |
|------------|-------------|
| **Triggers** | Webhooks, schedules, form submissions, project events |
| **Actions** | Send messages, update data, call external APIs |
| **AI Processing** | Use AI agents within automation workflows |
| **Integrations** | Slack, Gmail, HubSpot, GitHub, and 100+ more |

**[Automations Guide →](https://help.taskade.com/en/articles/8958467-automations-the-execution-pillar)**

### **Projects & Data**

Structured data with real-time collaboration:

- **Real-time sync** across all connected clients
- **Custom fields** for structured data storage
- **8 project views** (List, Board, Calendar, Table, Mind Map, etc.)
- **AI knowledge** integration for agent training

**[Projects Guide →](https://help.taskade.com/en/articles/12166149-projects-databases-the-memory-pillar)**

## 🤝 Community & Support

| Resource | Description |
|----------|-------------|
| **[API Documentation](https://www.taskade.com/api/documentation/)** | Interactive API documentation (Swagger) |
| **[Community Forum](https://www.taskade.com/feedback/public-api)** | Developer discussions, integration sharing |
| **[GitHub Repository](https://github.com/taskade/docs)** | Documentation contributions, feature requests |
| **[Status Page](https://status.taskade.com)** | API uptime, service announcements |
| **[Community Apps](https://www.taskade.com/community)** | Browse apps built with Taskade |

---

**Ready to start building?**

🚀 **[Get Your API Key →](../start/authentication.md)**  
📚 **[API Documentation →](https://www.taskade.com/api/documentation/)**  
💬 **[Join Developer Community →](https://www.taskade.com/feedback/public-api)**
