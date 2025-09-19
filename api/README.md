# Taskade Developer API

Build powerful integrations and automate workflows with the Taskade Developer API. Connect Taskade to your favorite tools, create custom applications, and extend Taskade's functionality.

{% hint style="info" %}
The Taskade API enables developers to programmatically interact with Taskade workspaces, projects, tasks, and users. Use it to build integrations, automate workflows, and create custom applications.
{% endhint %}

## API Overview

### What You Can Build

The Taskade API enables you to:

- **🔄 Automate Workflows** - Create, update, and manage tasks programmatically
- **📊 Data Integration** - Sync Taskade data with external systems
- **🤖 Custom Applications** - Build apps that extend Taskade's functionality
- **📱 Mobile Apps** - Create mobile experiences integrated with Taskade
- **🔧 Tool Integrations** - Connect Taskade with CRMs, project management tools, and more

### API Base URL

```
https://api.taskade.com/v1
```

### Authentication

All API requests require authentication using Bearer tokens. You can obtain an API key from your Taskade account settings.

{% hint style="warning" %}
Keep your API keys secure and never expose them in client-side code or public repositories.
{% endhint %}

#### Getting Your API Key

1. Go to **Settings** → **Developer** → **API Keys**
2. Click **Generate New Key**
3. Copy the key and store it securely
4. Use the key in the `Authorization` header

#### Authentication Headers

```bash
curl -X GET "https://api.taskade.com/v1/projects" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"
```

## Core Concepts

### Workspaces

Workspaces are the top-level containers that hold projects and team members.

**Key Properties:**
- `id` - Unique workspace identifier
- `name` - Workspace name
- `description` - Optional description
- `members` - Array of member objects
- `settings` - Workspace configuration

### Projects

Projects contain tasks and represent work items, features, or initiatives.

**Key Properties:**
- `id` - Unique project identifier
- `name` - Project name
- `description` - Project description
- `workspace_id` - Parent workspace ID
- `type` - Project type (list, board, mindmap, etc.)
- `members` - Project member permissions

### Tasks

Tasks are the fundamental work units in Taskade.

**Key Properties:**
- `id` - Unique task identifier
- `name` - Task title
- `content` - Task description/content
- `project_id` - Parent project ID
- `assignee` - Assigned user ID
- `due_date` - Due date (ISO 8601 format)
- `status` - Completion status
- `priority` - Task priority level
- `labels` - Array of label strings

## API Endpoints

### Workspaces

#### List Workspaces
```http
GET /workspaces
```

**Response:**
```json
{
  "data": [
    {
      "id": "workspace_123",
      "name": "Product Development",
      "description": "Main product development workspace",
      "created_at": "2023-01-15T10:30:00Z",
      "members": [
        {
          "user_id": "user_456",
          "role": "admin",
          "email": "admin@company.com"
        }
      ]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5
  }
}
```

#### Get Workspace
```http
GET /workspaces/{workspace_id}
```

#### Create Workspace
```http
POST /workspaces
Content-Type: application/json

{
  "name": "New Marketing Workspace",
  "description": "Marketing campaigns and content"
}
```

#### Update Workspace
```http
PATCH /workspaces/{workspace_id}
Content-Type: application/json

{
  "name": "Updated Marketing Workspace",
  "description": "Marketing campaigns, content, and social media"
}
```

#### Delete Workspace
```http
DELETE /workspaces/{workspace_id}
```

### Projects

#### List Projects
```http
GET /projects?workspace_id={workspace_id}
```

**Query Parameters:**
- `workspace_id` - Filter by workspace
- `archived` - Include archived projects (default: false)
- `limit` - Number of results (default: 20, max: 100)
- `offset` - Pagination offset

#### Get Project
```http
GET /projects/{project_id}
```

#### Create Project
```http
POST /projects
Content-Type: application/json

{
  "name": "Q4 Marketing Campaign",
  "description": "Launch campaign for Q4 product release",
  "workspace_id": "workspace_123",
  "type": "list",
  "members": [
    {
      "user_id": "user_789",
      "role": "editor"
    }
  ]
}
```

#### Update Project
```http
PATCH /projects/{project_id}
Content-Type: application/json

{
  "name": "Q4 Product Launch Campaign",
  "status": "active"
}
```

#### Delete Project
```http
DELETE /projects/{project_id}
```

### Tasks

#### List Tasks
```http
GET /tasks?project_id={project_id}
```

**Query Parameters:**
- `project_id` - Filter by project
- `assignee` - Filter by assigned user
- `status` - Filter by status (pending, completed)
- `due_before` - Tasks due before date
- `due_after` - Tasks due after date
- `limit` - Number of results (default: 20, max: 100)

#### Get Task
```http
GET /tasks/{task_id}
```

#### Create Task
```http
POST /tasks
Content-Type: application/json

{
  "name": "Design new landing page",
  "content": "Create wireframes and mockups for the product landing page",
  "project_id": "project_456",
  "assignee": "user_789",
  "due_date": "2024-02-15T17:00:00Z",
  "priority": "high",
  "labels": ["design", "frontend"]
}
```

#### Update Task
```http
PATCH /tasks/{task_id}
Content-Type: application/json

{
  "status": "completed",
  "content": "Updated task description with additional requirements"
}
```

#### Delete Task
```http
DELETE /tasks/{task_id}
```

### Comments

#### List Comments
```http
GET /tasks/{task_id}/comments
```

#### Add Comment
```http
POST /tasks/{task_id}/comments
Content-Type: application/json

{
  "content": "The design looks great! Just one small suggestion for the CTA button.",
  "mentions": ["user_123"]
}
```

## Webhooks

Webhooks allow you to receive real-time notifications when events occur in Taskade.

### Supported Events

- `task.created` - New task created
- `task.updated` - Task modified
- `task.completed` - Task marked complete
- `task.assigned` - Task assigned to user
- `project.created` - New project created
- `project.updated` - Project modified
- `comment.created` - New comment added

### Webhook Configuration

```json
{
  "url": "https://your-app.com/webhooks/taskade",
  "events": ["task.created", "task.completed"],
  "secret": "your_webhook_secret",
  "active": true
}
```

### Webhook Payload

```json
{
  "event": "task.created",
  "data": {
    "task": {
      "id": "task_123",
      "name": "New feature implementation",
      "project_id": "project_456",
      "assignee": "user_789"
    }
  },
  "timestamp": "2024-01-15T10:30:00Z",
  "signature": "sha256=..."
}
```

## Rate Limits

The API has the following rate limits:

- **Authenticated Requests:** 1000 requests per hour
- **Webhook Deliveries:** 1000 deliveries per hour
- **File Uploads:** 100 MB per hour

Rate limit headers are included in all responses:

```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1640995200
```

## Error Handling

### HTTP Status Codes

- `200 OK` - Request successful
- `201 Created` - Resource created
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `422 Unprocessable Entity` - Validation errors
- `429 Too Many Requests` - Rate limit exceeded
- `500 Internal Server Error` - Server error

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "The provided data is invalid",
    "details": {
      "field": "email",
      "reason": "Invalid email format"
    }
  }
}
```

## SDKs and Libraries

### Official SDKs

- **JavaScript/Node.js** - `npm install @taskade/api`
- **Python** - `pip install taskade-api`
- **PHP** - Composer package available
- **Ruby** - Gem available

### Community Libraries

- **Go** - `go get github.com/taskade/go-api`
- **Java** - Maven package
- **C#** - NuGet package

## Code Examples

### JavaScript/Node.js

```javascript
const { TaskadeAPI } = require('@taskade/api');

const client = new TaskadeAPI({
  apiKey: 'your_api_key'
});

// List projects
const projects = await client.projects.list({
  workspaceId: 'workspace_123'
});

// Create a task
const task = await client.tasks.create({
  name: 'Implement user authentication',
  project_id: 'project_456',
  assignee: 'user_789',
  due_date: '2024-02-01'
});

// Update task status
await client.tasks.update(task.id, {
  status: 'completed'
});
```

### Python

```python
from taskade_api import TaskadeAPI

client = TaskadeAPI(api_key='your_api_key')

# Get workspace projects
projects = client.projects.list(workspace_id='workspace_123')

# Create new project
project = client.projects.create({
    'name': 'API Integration Project',
    'workspace_id': 'workspace_123',
    'type': 'list'
})

# Add tasks to project
tasks = [
    {'name': 'Set up authentication', 'assignee': 'dev_1'},
    {'name': 'Implement endpoints', 'assignee': 'dev_2'},
    {'name': 'Add error handling', 'assignee': 'dev_3'}
]

for task_data in tasks:
    task_data['project_id'] = project['id']
    client.tasks.create(task_data)
```

### cURL Examples

```bash
# List workspaces
curl -X GET "https://api.taskade.com/v1/workspaces" \
  -H "Authorization: Bearer YOUR_API_KEY"

# Create a project
curl -X POST "https://api.taskade.com/v1/projects" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Feature Development",
    "workspace_id": "workspace_123"
  }'

# Get project tasks
curl -X GET "https://api.taskade.com/v1/tasks?project_id=project_456" \
  -H "Authorization: Bearer YOUR_API_KEY"
```

## Best Practices

### Security
- Store API keys securely (environment variables, secret management)
- Use HTTPS for all API calls
- Implement proper error handling
- Validate webhook signatures

### Performance
- Use appropriate pagination for large datasets
- Cache frequently accessed data
- Implement exponential backoff for retries
- Monitor rate limits and usage

### Data Management
- Validate data before sending to API
- Handle partial failures gracefully
- Implement proper logging and monitoring
- Use webhooks for real-time updates

### Integration Patterns
- Implement idempotent operations where possible
- Use webhooks for event-driven integrations
- Batch operations when appropriate
- Handle API versioning changes

## Support and Resources

### Documentation
- **API Reference:** Full endpoint documentation with examples
- **Guides:** Step-by-step integration tutorials
- **SDK Documentation:** Language-specific SDK guides

### Community
- **Developer Forum:** Connect with other developers
- **GitHub Issues:** Report bugs and request features
- **Stack Overflow:** Get help from the community

### Support
- **Email:** developers@taskade.com
- **Priority Support:** Available for enterprise customers
- **Status Page:** Real-time API status and incident updates

---

## Quick Start Guide

{% stepper %}
{% step %}
### Get Your API Key
Navigate to Settings → Developer → API Keys and generate a new key.
{% endstep %}

{% step %}
### Make Your First API Call
Use cURL or your preferred language to test the API connection.
{% endstep %}

{% step %}
### Explore the API
Review the available endpoints and plan your integration.
{% endstep %}

{% step %}
### Build Your Integration
Start with basic operations, then add complexity as needed.
{% endstep %}

{% step %}
### Test Thoroughly
Implement proper error handling and test edge cases.
{% endstep %}

{% step %}
### Go Live
Deploy your integration and monitor its performance.
{% endstep %}
{% endstepper %}

> **💡 Pro Tip**: Start small with basic CRUD operations, then gradually add more complex features. Use webhooks for real-time integrations and implement proper error handling from the beginning. The Taskade API is designed to be developer-friendly while providing powerful automation capabilities.