# Developer Overview

**Build on Taskade's platform for applications, agents, and automation.**

{% hint style="info" %}
**New to Taskade's API?** Start with [Personal Tokens](personal-tokens.md) (fast) or [Authentication (OAuth 2.0)](authentication.md), then use the [API documentation](https://www.taskade.com/api/documentation/).
{% endhint %}

## Platform Overview

Taskade provides a complete platform for building intelligent applications:

| Capability              | Description                                            | Learn More                                                                                                 |
| ----------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| **AI App Builder**      | Generate full-stack applications from natural language | [Taskade Genesis →](../../genesis-living-system-builder/genesis/)                                          |
| **AI Agents Platform**  | Custom assistants with knowledge retrieval             | [AI Agents Guide →](https://help.taskade.com/en/articles/8958457-custom-ai-agents-the-intelligence-pillar) |
| **Workflow Automation** | Event-driven processing with 100+ integrations         | [Automations →](https://help.taskade.com/en/articles/8958467-automations-the-execution-pillar)             |
| **Projects & Data**     | Structured data with real-time sync and custom fields  | [Projects Guide →](https://help.taskade.com/en/articles/12166149-projects-databases-the-memory-pillar)     |

The API is built around real-time data synchronization and a unified intelligence layer that powers everything from simple CRUD operations to complex AI-driven workflows.

## 🚀 Quick Start

{% tabs %}
{% tab title="First API Call" %}
#### Start with a Personal Access Token

Set up your development environment, get API keys, and make your first request in under 5 minutes.

```bash
curl -H "Authorization: Bearer YOUR_API_KEY" \
  https://www.taskade.com/api/v1/workspaces
```

Get a token here: [Personal Tokens](personal-tokens.md).
{% endtab %}

{% tab title="Authentication" %}
#### OAuth 2.0 (production)

Use OAuth when you need user-based auth and scoped access.

**Supported methods:**

* Personal Access Tokens (recommended for development)
* OAuth 2.0 (recommended for production): [Authentication](authentication.md)
{% endtab %}

{% tab title="SDKs & Tools" %}
#### **SDKs & Libraries**

Official and community-maintained libraries:

**Official:**

* REST API with OpenAPI spec
* Webhook integrations
* Real-time WebSocket API

**Community:**

* Python SDK (coming soon)
* Node.js SDK (coming soon)
* Postman collection
{% endtab %}
{% endtabs %}

## 🛠️ Core APIs

### [**Workspaces & Projects**](../comprehensive-api-guide/workspaces/)

**Tree-structured data with real-time synchronization**. Projects support conflict-free collaborative editing with instant synchronization across all connected clients. Each project maintains versioned change history for reliable collaboration.

### [**Tasks & Data**](../comprehensive-api-guide/tasks/)

**Event-sourced task management with rich field types**. Tasks support complex data relationships, custom field schemas, and atomic batch operations. The system maintains audit trails and supports time-travel queries for debugging and analytics.

### [**AI Agents**](../comprehensive-api-guide/agents/)

**Stateful AI agents with persistent memory and tool access**. Each agent maintains its own knowledge graph derived from project data, documents, and conversation history. Agents can be composed into multi-agent workflows with dependency resolution and error handling.

## ⚡ Automations & Integrations

### [**Automation System**](../../genesis-living-system-builder/automation/)

**Event-driven architecture with guaranteed delivery**. Built on a distributed event system for reliable message processing. Supports exactly-once delivery semantics, failure handling, and automatic retry with exponential backoff.

### [**Action & Trigger Reference**](../../genesis-living-system-builder/automation/actions.md)

**Reactive programming model with high reliability**. Triggers provide real-time event detection and processing. Actions include robust error handling and timeout patterns for reliable external service integration.

### [**Integration Reference**](../../genesis-living-system-builder/automation/comprehensive-integrations.md)

**100+ pre-built connectors with OpenAPI 3.0 compliance**. Each integration includes rate limiting, authentication handling, and automatic schema validation. Custom integrations support GraphQL subscriptions and WebSocket streaming.

## 🎯 Genesis API

### [**Taskade Genesis**](../../genesis-living-system-builder/genesis/)

Build complete web applications from natural language prompts. Taskade Genesis handles code generation and automatic deployment.

[**Create Your First App →**](https://help.taskade.com/en/articles/11957643-create-your-first-app)

## 📚 Resources

### [**OpenAPI Specification**](https://www.taskade.com/api/documentation/static/index.html#/)

Interactive API documentation with live testing capabilities.

### [**API Guide**](api.md)

Official and community-maintained libraries for popular languages.

### [**API Best Practices**](api.md#best-practices)

**Performance characteristics and scaling guidelines**. The platform is built for high-throughput applications with enterprise-grade performance. Rate limits are implemented to ensure fair usage across all users. Includes guidance on connection pooling, request batching, and optimal retry strategies.

## 🤝 Community & Support

| Resource                                                            | Description                                   |
| ------------------------------------------------------------------- | --------------------------------------------- |
| [**API Documentation**](https://www.taskade.com/api/documentation/) | Interactive API documentation (Swagger)       |
| [**Community Forum**](https://www.taskade.com/feedback/public-api)  | Developer discussions, integration sharing    |
| [**GitHub Repository**](https://github.com/taskade/docs)            | Documentation contributions, feature requests |
| [**Status Page**](https://status.taskade.com)                       | API uptime, service announcements             |
| [**Community Apps**](https://www.taskade.com/community)             | Browse apps built with Taskade                |

***

**Ready to start building?**

🚀 [**Get a Personal Token →**](personal-tokens.md)\
📚 [**API Documentation →**](https://www.taskade.com/api/documentation/)\
💬 [**Join Developer Community →**](https://www.taskade.com/feedback/public-api)
