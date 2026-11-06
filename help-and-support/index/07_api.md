---
description: >-
  Get started with the Taskade REST API: authenticate with a token, call workspace, project, and task endpoints, and wire up webhooks and the MCP server.
title: 'Chapter 7: API - Developer Interfaces'
---

# Chapter 7: API - Developer Interfaces

You connected your tools and built integrated workflows. Next, use the Taskade API for programmatic access: build custom applications, advanced integrations, and automated systems that extend Taskade.

{% hint style="info" %}
For the full developer reference—authentication, endpoints, SDKs, and more—see the [Developer Home](../../apis-living-system-development/developer-home.md).
{% endhint %}

## What Problem Does the API Solve?

**Pre-built integrations have limitations:**

* **Generic functionality** that doesn't match your specific needs
* **Missing features** that your business requires
* **Proprietary systems** that can't connect to anything else
* **Manual processes** that should be automated but aren't available

**The API solves this by giving you complete programmatic access**—build exactly what you need, connect anything to anything, and create custom solutions that perfectly fit your business.

## What is the Taskade API? (Programmatic Superpowers)

The Taskade API is a **RESTful interface** that exposes core Taskade resources programmatically: workspaces, folders, projects, tasks, AI agents, media, and bundles. It transforms Taskade from a productivity tool into a development platform where you can build custom applications, integrations, and automated workflows.

**The API enables:**

* **🔧 Custom Applications**: Build apps tailored to your business
* **🔗 Advanced Integrations**: Connect systems that don't have native integrations
* **⚡ Enterprise Automation**: Large-scale automated workflows
* **📊 Live Dashboards**: Real-time business intelligence
* **🤖 AI-Enhanced Development**: Programmatic access to AI features
* **📱 Mobile Applications**: Custom mobile experiences

## How the API Works (RESTful Architecture)

**The API follows REST principles with predictable patterns:**

### HTTP Methods

```
GET    /workspaces                           # List your workspaces
POST   /workspaces/{workspaceId}/projects    # Create project
GET    /projects/{projectId}/tasks           # List tasks
PUT    /projects/{projectId}/tasks/{taskId}  # Update a task
DELETE /projects/{projectId}/tasks/{taskId}  # Delete a task
```

### Resource Structure

```
/workspaces                 # Workspaces and their folders
/folders                    # Folders and their contents
/projects                   # Project operations
/projects/{projectId}/tasks # Task manipulation
/agents                     # Agents, knowledge, chats
/medias                     # Files
/bundles                    # Workspace export and import
```

Base URL: `https://www.taskade.com/api/v1`. Signed webhooks use API v2 (`/api/v2/webhooks`).

### Request/Response Format

```json
// Request
{
  "method": "POST",
  "url": "/projects",
  "headers": {
    "Authorization": "Bearer YOUR_API_KEY",
    "Content-Type": "application/json"
  },
  "body": {
    "folderId": "folder_456",
    "contentType": "text/markdown",
    "content": "# New Project\n- First task"
  }
}

// Response
{
  "ok": true,
  "item": {
    "id": "project_123",
    "name": "New Project"
  }
}
```

## Getting Started with the API (Step-by-Step)

**Let's make your first API call:**

{% stepper %}
{% step %}
#### Get Your API Key

Go to [taskade.com/settings/api](https://www.taskade.com/settings/api), open **Personal access tokens**, and click **Create token**. The API works on every plan
{% endstep %}

{% step %}
#### Make a Test Call

Use curl to retrieve your projects:

```
curl -H "Authorization: Bearer your_api_token_placeholder" \
     https://www.taskade.com/api/v1/me/projects
```
{% endstep %}

{% step %}
#### Parse the Response

You'll get a JSON object with `"ok": true` and an `items` array of your projects
{% endstep %}

{% step %}
#### Create Something New

Try creating a task:

```
curl -X POST https://www.taskade.com/api/v1/projects/your_project_id/tasks/ \
  -H "Authorization: Bearer your_api_token_placeholder" \
  -H "Content-Type: application/json" \
  -d '{"tasks": [{"content": "API Test Task", "contentType": "text/markdown", "placement": "beforeend"}]}'
```
{% endstep %}
{% endstepper %}

**Congratulations!** You're now a Taskade API developer!

## Core API Resources and Operations

The examples below use a small `api` helper that wraps `fetch` with your token and the base URL `https://www.taskade.com/api/v1`. The webhook example uses an `apiV2` helper with the base URL `https://www.taskade.com/api/v2`. The official SDK is not yet published (see [SDKs and Development Tools](#sdks-and-development-tools)).

### Workspaces API

**Manage your organizational structure:**

```javascript
// Get all workspaces
const { items: workspaces } = await api.get('/workspaces');

// List the folders in a workspace
const { items: folders } = await api.get(`/workspaces/${workspaceId}/folders`);

// Create a project in a workspace from Markdown
const { item: project } = await api.post(`/workspaces/${workspaceId}/projects`, {
  contentType: 'text/markdown',
  content: '# API Development Project\n- First task'
});
```

### Projects API

**Handle project lifecycle:**

```javascript
// List your projects, most recently viewed first
const { items: projects } = await api.get('/me/projects', {
  params: { limit: 20, sort: 'viewed-desc' }
});

// Create project from template
const { item: project } = await api.post('/projects/from-template', {
  folderId: 'folder_123',
  templateId: 'template_456'
});

// Copy a project into another folder, then mark the original complete
await api.post(`/projects/${projectId}/copy`, {
  folderId: 'folder_789',
  projectTitle: 'Customer Onboarding (copy)'
});
await api.post(`/projects/${projectId}/complete`);
```

### Tasks API

**Manipulate work items programmatically:**

```javascript
// Get the tasks in a project, one page at a time
const page = await api.get(`/projects/${projectId}/tasks`, {
  params: { limit: 100 }
});
// page.items, page.hasMore, page.nextCursor (pass it as `after` for the next page)

// Create several tasks in one request
const { item: newTasks } = await api.post(`/projects/${projectId}/tasks/`, {
  tasks: [
    { contentType: 'text/markdown', content: 'Design mockups', placement: 'beforeend' },
    { contentType: 'text/markdown', content: 'Write documentation', placement: 'beforeend' },
    { contentType: 'text/markdown', content: 'Code review', placement: 'beforeend' }
  ]
});

// Rename a task, assign it, set its due date, and set a custom field
await api.put(`/projects/${projectId}/tasks/${taskId}`, {
  contentType: 'text/markdown',
  content: 'Updated task name'
});
await api.put(`/projects/${projectId}/tasks/${taskId}/assignees`, { handles: ['teammate_handle'] });
await api.put(`/projects/${projectId}/tasks/${taskId}/date`, { start: { date: '2026-12-01' } });
await api.put(`/projects/${projectId}/tasks/${taskId}/fields/${fieldId}`, { value: 8 });
```

## Advanced API Techniques

### Webhooks for Real-Time Integration

For full setup and event types, see the [Webhooks reference](../../apis-living-system-development/webhooks.md).

**Get instant notifications of changes.** Signed webhooks use API v2 and need the Pro plan or higher:

```javascript
// Register a signed webhook (POST https://www.taskade.com/api/v2/webhooks)
const { secret } = await apiV2.post('/webhooks', {
  targetUrl: 'https://your-app.com/webhook/taskade',
  events: ['task.due', 'task.assigned', 'comment.created'],
  spaceIds: []
});
// Store `secret` now: the response shows it only once

// Handle webhook in your application
app.post('/webhook/taskade', (req, res) => {
  const signature = req.headers['x-taskade-signature-v2'];
  const timestamp = req.headers['x-taskade-timestamp'];
  const payload = req.rawBody;

  // Verify the HMAC-SHA256 signature of `${timestamp}.${rawBody}`
  if (verifySignature(signature, timestamp, payload, secret)) {
    // Process the task update
    handleTaskUpdate(payload);
    res.status(200).send('OK');
  } else {
    res.status(401).send('Invalid signature');
  }
});
```

### Batch Operations for Efficiency

**Create many tasks in one request.** The API has no general batch endpoint, so send other changes as separate calls:

```javascript
// Create several tasks with one call
await api.post(`/projects/${projectId}/tasks/`, {
  tasks: [
    { contentType: 'text/markdown', content: 'Follow-up task', placement: 'beforeend' },
    { contentType: 'text/markdown', content: 'Send summary', placement: 'beforeend' }
  ]
});

// Complete and delete tasks with separate calls
await api.post(`/projects/${projectId}/tasks/task_123/complete`);
await api.delete(`/projects/${projectId}/tasks/task_789`);
```

### Advanced Querying and Filtering

**Extract exactly the data you need.** List endpoints page through results. Filter the items in your own code:

```javascript
// Page through every task in a project, then keep the open ones
let after;
const openTasks = [];
do {
  const page = await api.get(`/projects/${projectId}/tasks`, {
    params: { limit: 100, after }
  });
  openTasks.push(...page.items.filter((task) => !task.completed));
  after = page.hasMore ? page.nextCursor : undefined;
} while (after);
```

## Building Custom Applications

### Example: Customer Dashboard

**Build a custom interface for customer data:**

```javascript
class CustomerDashboard {
  constructor(apiKey) {
    this.api = new TaskadeAPI(apiKey);
  }

  async getCustomerTasks(projectId) {
    const { items } = await this.api.get(`/projects/${projectId}/tasks`, {
      params: { limit: 100 }
    });
    return items;
  }

  async updateCustomerStatus(projectId, taskId, statusFieldId, status) {
    return await this.api.put(`/projects/${projectId}/tasks/${taskId}/fields/${statusFieldId}`, {
      value: status
    });
  }

  async createSupportTicket(folderId, issue) {
    const { item: project } = await this.api.post('/projects', {
      folderId,
      contentType: 'text/markdown',
      content: `# Support: ${issue.title}\n- ${issue.description}`
    });

    return project;
  }
}
```

### Example: Automated Reporting System

**Generate business reports automatically:**

```javascript
class ReportingSystem {
  constructor(apiKey) {
    this.api = new TaskadeAPI(apiKey);
    this.scheduleDailyReports();
  }

  async generateDailyReport(projectIds, reportFolderId) {
    const date = new Date().toISOString().split('T')[0];
    const rows = [];

    for (const projectId of projectIds) {
      const { items } = await this.api.get(`/projects/${projectId}/tasks`, {
        params: { limit: 1000 }
      });
      rows.push({
        projectId,
        completed: items.filter((task) => task.completed).length,
        open: items.filter((task) => !task.completed).length
      });
    }

    await this.createReportProject(date, rows, reportFolderId);
  }

  async createReportProject(date, rows, folderId) {
    // One task per project in the report
    const lines = rows.map((row) => `- ${row.projectId}: ${row.completed} done, ${row.open} open`);
    await this.api.post('/projects', {
      folderId,
      contentType: 'text/markdown',
      content: `# Daily Report - ${date}\n${lines.join('\n')}`
    });
  }
}
```

## API Security and Best Practices

### Authentication Security

**Protect your API access:**

```javascript
// Use environment variables for API keys
const apiKey = process.env.TASKADE_API_KEY;

// Implement proper error handling
try {
  const response = await api.get('/projects');
  // Process response
} catch (error) {
  if (error.status === 401) {
    // Handle authentication error: check or replace your personal access token
    reportInvalidToken();
  } else if (error.status === 429) {
    // Handle rate limiting: wait for the seconds in the Retry-After header
    await delay(error.retryAfter);
    retryRequest();
  }
}
```

### Rate Limiting and Optimization

**Work within API limits efficiently:**

```javascript
class RateLimitedAPI {
  constructor(apiKey) {
    this.api = new TaskadeAPI(apiKey);
    this.requests = [];
    this.rateLimit = 40; // requests per 60 seconds, the published budget per IP address
  }

  async request(method, path, options = {}) {
    // Implement token bucket algorithm
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < 60000);

    if (this.requests.length >= this.rateLimit) {
      const waitTime = 60000 - (now - this.requests[0]);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }

    this.requests.push(now);
    return await this.api.request(method, path, options);
  }
}
```

### Error Handling and Resilience

**Build robust API integrations:**

```javascript
class ResilientAPI {
  async requestWithRetry(method, path, options = {}, maxRetries = 3) {
    let lastError;

    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.api.request(method, path, options);
      } catch (error) {
        lastError = error;

        if (error.status >= 400 && error.status < 500) {
          // Client error, don't retry
          throw error;
        }

        if (attempt < maxRetries) {
          // Exponential backoff
          const delay = Math.pow(2, attempt) * 1000;
          await new Promise(resolve => setTimeout(resolve, delay));
        }
      }
    }

    throw lastError;
  }
}
```

## SDKs and Development Tools

### Call the API from any language

The API is standard HTTP + JSON — no SDK required. Authenticate with a personal access token from [taskade.com/settings/api](https://www.taskade.com/settings/api):

```javascript
// JavaScript/TypeScript — Node.js 18+, Deno, Bun, or the browser
const res = await fetch('https://www.taskade.com/api/v1/workspaces', {
  headers: { Authorization: 'Bearer your_api_token_placeholder' },
});
const data = await res.json();
```

```python
# Python — any HTTP client works
import requests

res = requests.get(
    "https://www.taskade.com/api/v1/workspaces",
    headers={"Authorization": "Bearer your_api_token_placeholder"},
)
data = res.json()
```

### Official SDKs and tools

{% hint style="warning" %}
The official TypeScript SDK (`@taskade/sdk`) is in preview and **not yet published to the public npm registry**. Until it ships, use the REST API directly as shown above.
{% endhint %}

* [**TypeScript SDK (Preview)**](../../apis-living-system-development/sdk-quickstart.md) — generated client for API v2; the quickstart shows the HTTP-first path you can use today
* [**Workspace MCP Server**](https://github.com/taskade/mcp) — `@taskade/mcp-server` on npm; connect Claude Desktop, Cursor, and any MCP client to your workspace
* [**Integration Kit**](https://github.com/taskade/integrations) — open-source Zapier and n8n actions & triggers built on this public API

### Development Tools

**Accelerate your development:**

* **API Explorer**: Interactive web interface for testing endpoints
* **Code Generators**: Generate SDK code from API specifications
* **Webhook Testing Tools**: Local webhook development servers
* **Monitoring Dashboards**: Track API usage and performance

## How it Works Under the Hood

**Technically, the API is:**

* **RESTful Architecture**: Standard HTTP methods and status codes
* **JSON Bodies**: Consistent responses with an `ok` field and clear error codes
* **OAuth 2.0 Support**: Secure user authentication flows
* **Webhook System**: Real-time event notifications
* **Rate Limiting**: Fair usage policies with burst handling
* **Caching Layer**: Performance optimization for frequently accessed data
* **Audit Logging**: Complete activity tracking for security

**But you don't need to understand the tech—powerful applications just work!**

## API Use Cases and Examples

### Custom Mobile Applications

**Build native mobile experiences:**

* Field service apps for technicians
* Customer feedback mobile apps
* Inventory management for warehouse staff
* Executive dashboards for leadership

### Enterprise Integration Hubs

**Connect legacy systems:**

* ERP system integration
* HR platform synchronization
* Financial system connections
* Manufacturing execution systems

### AI-Powered Applications

**Leverage Taskade's AI capabilities:**

* Intelligent task routing systems
* Automated content generation workflows
* Smart customer support assistants
* Predictive analytics dashboards

### IoT and Hardware Integration

**Connect physical devices:**

* Sensor data collection and monitoring
* Equipment maintenance scheduling
* Facility management systems
* Smart building automation

## Your API-Enabled Ecosystem Becomes Limitless

**Programmatic access unlocks infinite possibilities:**

* **Custom UIs**: Build interfaces perfectly suited to your workflows
* **Advanced Automation**: Create complex multi-system workflows
* **Real-time Dashboards**: Live business intelligence and monitoring
* **Mobile Innovation**: Native apps that extend Taskade's reach
* **AI Integration**: Combine Taskade's AI with your custom logic

**Exceptional work!** You now have complete programmatic control over Taskade. The API transforms Taskade from a productivity tool into a development platform where you can build anything your business needs.

**Ready for the final chapter?** In [Chapter 8: Mobile & Desktop](08_mobile_desktop.md), we'll ensure your living workspace works perfectly everywhere!

***

_What's the custom application your business has always needed? With the API, you can now build it. The possibilities are literally endless—start small, dream big!_

[← Back to Chapter 6: Integrations](06_integrations.md) | [Next: Mobile & Desktop →](08_mobile_desktop.md)

---

_Step-by-step guides on taskade.com/learn: [Taskade Public API](https://www.taskade.com/learn/connect/public-api), [Taskade Developer API](https://www.taskade.com/learn/connect/developer-api), [Build on Taskade: Developer Hub](https://www.taskade.com/learn/connect/developer-hub)._
