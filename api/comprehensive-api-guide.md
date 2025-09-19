# Comprehensive API Guide

Build powerful integrations and custom applications with Taskade's complete REST API. Access projects, tasks, users, and automation features programmatically with full CRUD operations and real-time webhooks.

{% hint style="success" %}
Taskade's API provides complete programmatic access to all platform features. Whether you're building custom integrations, mobile applications, or enterprise workflows, our RESTful API offers the flexibility and power you need to extend Taskade's capabilities.
{% endhint %}

## API Overview

The Taskade API is a RESTful web service that provides programmatic access to all Taskade features. Built on industry standards with comprehensive documentation, robust error handling, and extensive example code, our API enables developers to create sophisticated integrations and applications.

### Key Features

- **🔗 RESTful Design**: Standard HTTP methods and status codes
- **🔐 Secure Authentication**: OAuth 2.0 and API key authentication
- **📊 Complete CRUD Operations**: Full create, read, update, delete functionality
- **⚡ Real-time Webhooks**: Instant notifications for data changes
- **📱 Cross-platform SDKs**: Official libraries for popular programming languages
- **🎯 Rate Limiting**: Fair usage policies with generous limits
- **📚 Comprehensive Documentation**: Interactive API explorer and detailed guides

### API Endpoints Structure

```
Base URL: https://api.taskade.com/v1/
Authentication: Bearer token or API key
Content-Type: application/json
```

## Authentication

### API Key Authentication

**Simple authentication for server-to-server applications:**

```bash
# Using API key in header
curl -H "Authorization: Bearer YOUR_API_KEY" \
     https://api.taskade.com/v1/projects
```

#### Obtaining an API Key
1. Go to **Settings** → **Developer** → **API Keys**
2. Click **Generate New API Key**
3. Copy and securely store your API key
4. Use the key in the `Authorization` header

### OAuth 2.0 Authentication

**Secure authentication for user-facing applications:**

#### Authorization Code Flow
```bash
# Step 1: Redirect user to authorization URL
https://auth.taskade.com/oauth/authorize?
  response_type=code&
  client_id=YOUR_CLIENT_ID&
  redirect_uri=YOUR_REDIRECT_URI&
  scope=read:projects write:tasks&
  state=RANDOM_STATE_STRING
```

```javascript
// Step 2: Exchange authorization code for access token
const tokenResponse = await fetch('https://auth.taskade.com/oauth/token', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    grant_type: 'authorization_code',
    client_id: 'YOUR_CLIENT_ID',
    client_secret: 'YOUR_CLIENT_SECRET',
    code: 'AUTHORIZATION_CODE',
    redirect_uri: 'YOUR_REDIRECT_URI'
  })
});

const { access_token, refresh_token } = await tokenResponse.json();
```

#### Scopes and Permissions
- **`read:projects`**: Read access to projects and tasks
- **`write:projects`**: Create and modify projects
- **`read:users`**: Access user profile information
- **`write:tasks`**: Create and modify tasks
- **`admin:workspace`**: Workspace administration access
- **`webhooks:manage`**: Create and manage webhooks

## Core API Resources

### Projects API

**Complete project management functionality:**

#### Get All Projects
```bash
GET /v1/projects
```

```javascript
// JavaScript example
const getProjects = async (token) => {
  const response = await fetch('https://api.taskade.com/v1/projects', {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};
```

```python
# Python example
import requests

def get_projects(token):
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    response = requests.get('https://api.taskade.com/v1/projects', headers=headers)
    return response.json()
```

#### Create New Project
```bash
POST /v1/projects
Content-Type: application/json

{
  "name": "New Project",
  "description": "Project description",
  "workspace_id": "workspace_123",
  "template_id": "template_456",
  "is_public": false,
  "tags": ["marketing", "campaign"]
}
```

#### Get Project Details
```bash
GET /v1/projects/{project_id}
```

#### Update Project
```bash
PUT /v1/projects/{project_id}
Content-Type: application/json

{
  "name": "Updated Project Name",
  "description": "Updated description",
  "status": "active"
}
```

#### Delete Project
```bash
DELETE /v1/projects/{project_id}
```

### Tasks API

**Comprehensive task management:**

#### Get Project Tasks
```bash
GET /v1/projects/{project_id}/tasks
```

```javascript
// Get tasks with filtering and pagination
const getTasks = async (projectId, options = {}) => {
  const params = new URLSearchParams({
    page: options.page || 1,
    limit: options.limit || 50,
    status: options.status || 'all',
    assignee: options.assignee || '',
    sort: options.sort || 'created_at',
    order: options.order || 'desc'
  });
  
  const response = await fetch(
    `https://api.taskade.com/v1/projects/${projectId}/tasks?${params}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
};
```

#### Create Task
```bash
POST /v1/projects/{project_id}/tasks
Content-Type: application/json

{
  "content": "New task content",
  "parent_id": "parent_task_id",
  "assignees": ["user_123", "user_456"],
  "due_date": "2024-12-31T23:59:59Z",
  "priority": "high",
  "tags": ["urgent", "review"],
  "custom_fields": {
    "estimation": "4 hours",
    "category": "development"
  }
}
```

#### Update Task
```bash
PUT /v1/tasks/{task_id}
Content-Type: application/json

{
  "content": "Updated task content",
  "completed": true,
  "assignees": ["user_789"],
  "due_date": "2024-11-30T17:00:00Z"
}
```

#### Bulk Operations
```bash
POST /v1/tasks/bulk
Content-Type: application/json

{
  "operation": "update",
  "task_ids": ["task_1", "task_2", "task_3"],
  "updates": {
    "assignees": ["user_123"],
    "tags": ["batch-updated"]
  }
}
```

### Users and Teams API

**User and team management:**

#### Get Current User
```bash
GET /v1/me
```

#### Get User Profile
```bash
GET /v1/users/{user_id}
```

#### Get Workspace Members
```bash
GET /v1/workspaces/{workspace_id}/members
```

```javascript
// Invite user to workspace
const inviteUser = async (workspaceId, email, role = 'member') => {
  const response = await fetch(
    `https://api.taskade.com/v1/workspaces/${workspaceId}/invites`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        role: role,
        message: 'Welcome to our workspace!'
      })
    }
  );
  
  return response.json();
};
```

### Workspaces API

**Workspace management and organization:**

#### Get All Workspaces
```bash
GET /v1/workspaces
```

#### Create Workspace
```bash
POST /v1/workspaces
Content-Type: application/json

{
  "name": "New Workspace",
  "description": "Workspace for team collaboration",
  "is_public": false,
  "settings": {
    "default_project_visibility": "private",
    "member_permissions": {
      "can_create_projects": true,
      "can_invite_users": false
    }
  }
}
```

## Advanced API Features

### Search API

**Powerful search across all content:**

```bash
GET /v1/search?q=query&type=projects,tasks&limit=20
```

```javascript
// Advanced search with filters
const searchContent = async (query, filters = {}) => {
  const params = new URLSearchParams({
    q: query,
    type: filters.type || 'all',
    workspace_id: filters.workspace_id || '',
    assignee: filters.assignee || '',
    date_from: filters.date_from || '',
    date_to: filters.date_to || '',
    status: filters.status || 'all',
    limit: filters.limit || 20,
    offset: filters.offset || 0
  });
  
  const response = await fetch(
    `https://api.taskade.com/v1/search?${params}`,
    {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    }
  );
  
  return response.json();
};
```

### File Upload API

**Upload and manage files:**

```bash
POST /v1/files/upload
Content-Type: multipart/form-data

{
  "file": [binary file data],
  "project_id": "project_123",
  "task_id": "task_456"
}
```

```javascript
// Upload file with progress tracking
const uploadFile = async (file, projectId, taskId = null) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('project_id', projectId);
  if (taskId) formData.append('task_id', taskId);
  
  const response = await fetch('https://api.taskade.com/v1/files/upload', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`
    },
    body: formData
  });
  
  return response.json();
};
```

### Templates API

**Project template management:**

```bash
# Get available templates
GET /v1/templates

# Create project from template
POST /v1/projects/from-template
Content-Type: application/json

{
  "template_id": "template_123",
  "name": "New Project from Template",
  "workspace_id": "workspace_456"
}
```

## Webhooks and Real-time Events

### Webhook Configuration

**Set up real-time notifications:**

```bash
POST /v1/webhooks
Content-Type: application/json

{
  "url": "https://your-app.com/webhooks/taskade",
  "events": [
    "project.created",
    "project.updated",
    "task.created",
    "task.completed",
    "user.joined"
  ],
  "secret": "your-webhook-secret",
  "active": true
}
```

### Webhook Event Types

**Available webhook events:**

#### Project Events
- **`project.created`**: New project created
- **`project.updated`**: Project details modified
- **`project.deleted`**: Project deleted or archived
- **`project.shared`**: Project shared with new users
- **`project.completed`**: Project marked as complete

#### Task Events
- **`task.created`**: New task added
- **`task.updated`**: Task content or properties modified
- **`task.completed`**: Task marked as complete
- **`task.assigned`**: Task assigned to user
- **`task.due_soon`**: Task due date approaching

#### User Events
- **`user.joined`**: New user joined workspace
- **`user.left`**: User left workspace
- **`user.role_changed`**: User role or permissions changed

### Webhook Payload Example

```json
{
  "event": "task.completed",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "task": {
      "id": "task_123",
      "content": "Complete API documentation",
      "completed": true,
      "completed_at": "2024-01-15T10:30:00Z",
      "project_id": "project_456",
      "assignees": ["user_789"]
    },
    "user": {
      "id": "user_789",
      "name": "John Doe",
      "email": "john@example.com"
    },
    "project": {
      "id": "project_456",
      "name": "API Development",
      "workspace_id": "workspace_123"
    }
  }
}
```

### Webhook Verification

```javascript
// Verify webhook signature
const crypto = require('crypto');

const verifyWebhook = (payload, signature, secret) => {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
    
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
};
```

## AI and Automation API

### AI Agents API

**Manage AI agents programmatically:**

```bash
# Get all AI agents
GET /v1/agents

# Create new AI agent
POST /v1/agents
Content-Type: application/json

{
  "name": "Customer Support Agent",
  "description": "AI agent for customer support queries",
  "instructions": "You are a helpful customer support agent...",
  "knowledge_base": ["file_1", "file_2"],
  "tools": ["web_search", "email_send"],
  "model": "gpt-4",
  "temperature": 0.7
}
```

```javascript
// Chat with AI agent
const chatWithAgent = async (agentId, message, context = {}) => {
  const response = await fetch(`https://api.taskade.com/v1/agents/${agentId}/chat`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      context: context,
      stream: false
    })
  });
  
  return response.json();
};
```

### Automation API

**Create and manage automations:**

```bash
# Get all automations
GET /v1/automations

# Create new automation
POST /v1/automations
Content-Type: application/json

{
  "name": "Task Assignment Notification",
  "description": "Send Slack message when task is assigned",
  "trigger": {
    "type": "task.assigned",
    "conditions": {
      "project_id": "project_123"
    }
  },
  "actions": [
    {
      "type": "slack.send_message",
      "config": {
        "channel": "#general",
        "message": "Task '{{task.content}}' assigned to {{assignee.name}}"
      }
    }
  ],
  "active": true
}
```

## Error Handling and Best Practices

### HTTP Status Codes

**Standard HTTP status codes used by the API:**

- **200 OK**: Request successful
- **201 Created**: Resource created successfully
- **400 Bad Request**: Invalid request parameters
- **401 Unauthorized**: Authentication required or invalid
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **429 Too Many Requests**: Rate limit exceeded
- **500 Internal Server Error**: Server error

### Error Response Format

```json
{
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid request parameters",
    "details": {
      "field": "email",
      "issue": "Invalid email format"
    }
  }
}
```

### Rate Limiting

**API rate limits and best practices:**

#### Rate Limits
- **Free Plan**: 1,000 requests per hour
- **Pro Plan**: 10,000 requests per hour
- **Business Plan**: 50,000 requests per hour
- **Enterprise**: Custom limits

#### Rate Limit Headers
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 999
X-RateLimit-Reset: 1609459200
```

#### Best Practices
- **Respect Rate Limits**: Monitor rate limit headers
- **Implement Backoff**: Use exponential backoff for retries
- **Cache Responses**: Cache API responses when appropriate
- **Batch Operations**: Use bulk endpoints when available

### Error Handling Examples

```javascript
// Robust error handling
const apiRequest = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
        ...options.headers
      },
      ...options
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new APIError(error.error.message, response.status, error.error.code);
    }
    
    return response.json();
  } catch (error) {
    if (error instanceof APIError) {
      throw error;
    }
    throw new APIError('Network error', 0, 'NETWORK_ERROR');
  }
};

class APIError extends Error {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
```

## SDKs and Libraries

### Official SDKs

**Pre-built libraries for popular languages:**

#### JavaScript/Node.js SDK
```bash
npm install @taskade/api-client
```

```javascript
import { TaskadeClient } from '@taskade/api-client';

const client = new TaskadeClient({
  apiKey: 'your-api-key',
  // or use OAuth
  accessToken: 'your-access-token'
});

// Get projects
const projects = await client.projects.list();

// Create task
const task = await client.tasks.create('project-id', {
  content: 'New task',
  assignees: ['user-id']
});
```

#### Python SDK
```bash
pip install taskade-api
```

```python
from taskade import TaskadeClient

client = TaskadeClient(api_key='your-api-key')

# Get projects
projects = client.projects.list()

# Create task
task = client.tasks.create('project-id', {
    'content': 'New task',
    'assignees': ['user-id']
})
```

#### PHP SDK
```bash
composer require taskade/api-client
```

```php
use Taskade\ApiClient;

$client = new ApiClient('your-api-key');

// Get projects
$projects = $client->projects()->list();

// Create task
$task = $client->tasks()->create('project-id', [
    'content' => 'New task',
    'assignees' => ['user-id']
]);
```

### Community Libraries

**Third-party libraries and integrations:**

- **Ruby**: `taskade-ruby` gem
- **Go**: `go-taskade` package
- **Java**: `taskade-java-client` library
- **C#**: `Taskade.NET` NuGet package

## Example Applications

### Task Synchronization Service

```javascript
// Sync tasks between Taskade and external system
class TaskSyncService {
  constructor(taskadeToken, externalApiKey) {
    this.taskade = new TaskadeClient({ accessToken: taskadeToken });
    this.external = new ExternalApiClient(externalApiKey);
  }
  
  async syncTasks(projectId) {
    try {
      // Get tasks from both systems
      const taskadeTasks = await this.taskade.tasks.list(projectId);
      const externalTasks = await this.external.getTasks();
      
      // Sync new tasks from external system to Taskade
      for (const externalTask of externalTasks) {
        const exists = taskadeTasks.find(t => t.external_id === externalTask.id);
        if (!exists) {
          await this.taskade.tasks.create(projectId, {
            content: externalTask.title,
            description: externalTask.description,
            external_id: externalTask.id
          });
        }
      }
      
      // Sync completed tasks back to external system
      for (const task of taskadeTasks) {
        if (task.completed && task.external_id) {
          await this.external.markComplete(task.external_id);
        }
      }
      
    } catch (error) {
      console.error('Sync failed:', error);
    }
  }
}
```

### Webhook Event Processor

```javascript
// Express.js webhook handler
const express = require('express');
const crypto = require('crypto');

const app = express();
app.use(express.raw({ type: 'application/json' }));

app.post('/webhook', (req, res) => {
  const signature = req.headers['x-taskade-signature'];
  const payload = req.body;
  
  // Verify webhook signature
  if (!verifySignature(payload, signature)) {
    return res.status(401).send('Invalid signature');
  }
  
  const event = JSON.parse(payload);
  
  // Process different event types
  switch (event.event) {
    case 'task.completed':
      handleTaskCompleted(event.data);
      break;
    case 'project.created':
      handleProjectCreated(event.data);
      break;
    default:
      console.log('Unhandled event:', event.event);
  }
  
  res.status(200).send('OK');
});

const handleTaskCompleted = async (data) => {
  // Send notification to team
  await sendSlackNotification(
    `Task "${data.task.content}" completed by ${data.user.name}`
  );
  
  // Update external tracking system
  await updateExternalSystem(data.task.id, 'completed');
};
```

### Custom Dashboard Application

```javascript
// React component for custom dashboard
import React, { useState, useEffect } from 'react';
import { TaskadeClient } from '@taskade/api-client';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const client = new TaskadeClient({
    accessToken: process.env.REACT_APP_TASKADE_TOKEN
  });
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [projectsData, tasksData] = await Promise.all([
          client.projects.list(),
          client.tasks.list({ status: 'incomplete', limit: 10 })
        ]);
        
        setProjects(projectsData.data);
        setTasks(tasksData.data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div className="dashboard">
      <div className="projects-section">
        <h2>Active Projects ({projects.length})</h2>
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="status">{project.status}</span>
          </div>
        ))}
      </div>
      
      <div className="tasks-section">
        <h2>Recent Tasks</h2>
        {tasks.map(task => (
          <div key={task.id} className="task-item">
            <span className="content">{task.content}</span>
            <span className="assignee">{task.assignees[0]?.name}</span>
            <span className="due-date">{task.due_date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
```

## Testing and Development

### API Testing Tools

**Recommended tools for API development:**

#### Postman Collection
```json
{
  "info": {
    "name": "Taskade API",
    "description": "Complete Taskade API collection"
  },
  "auth": {
    "type": "bearer",
    "bearer": [
      {
        "key": "token",
        "value": "{{access_token}}",
        "type": "string"
      }
    ]
  },
  "item": [
    {
      "name": "Get Projects",
      "request": {
        "method": "GET",
        "url": "{{base_url}}/v1/projects"
      }
    }
  ]
}
```

#### cURL Examples
```bash
# Test authentication
curl -H "Authorization: Bearer YOUR_TOKEN" \
     https://api.taskade.com/v1/me

# Create a project
curl -X POST \
     -H "Authorization: Bearer YOUR_TOKEN" \
     -H "Content-Type: application/json" \
     -d '{"name": "Test Project", "description": "API test"}' \
     https://api.taskade.com/v1/projects
```

### Development Environment Setup

**Set up local development environment:**

```bash
# Environment variables
export TASKADE_API_KEY="your-api-key"
export TASKADE_BASE_URL="https://api.taskade.com/v1"
export WEBHOOK_SECRET="your-webhook-secret"

# Test API connection
curl -H "Authorization: Bearer $TASKADE_API_KEY" \
     $TASKADE_BASE_URL/me
```

### Unit Testing Examples

```javascript
// Jest test example
describe('Taskade API Client', () => {
  let client;
  
  beforeEach(() => {
    client = new TaskadeClient({
      apiKey: process.env.TEST_API_KEY,
      baseURL: 'https://api-staging.taskade.com/v1'
    });
  });
  
  test('should create a project', async () => {
    const project = await client.projects.create({
      name: 'Test Project',
      description: 'Test description'
    });
    
    expect(project.id).toBeDefined();
    expect(project.name).toBe('Test Project');
  });
  
  test('should handle API errors', async () => {
    await expect(
      client.projects.get('invalid-id')
    ).rejects.toThrow('Project not found');
  });
});
```

## API Versioning and Migration

### Version Management

**API versioning strategy:**

- **Current Version**: v1
- **Version Header**: `X-API-Version: v1`
- **URL Versioning**: `/v1/` in URL path
- **Backward Compatibility**: 12 months minimum support

### Migration Guide

**Upgrading between API versions:**

```javascript
// v1 to v2 migration example
// Old v1 format
const oldTask = {
  name: 'Task name',
  description: 'Task description'
};

// New v2 format
const newTask = {
  content: 'Task name',
  notes: 'Task description',
  metadata: {
    version: 2
  }
};
```

## Support and Resources

### Developer Resources

**Additional resources for API developers:**

- **📚 Interactive API Explorer**: Test endpoints in your browser
- **🎥 Video Tutorials**: Step-by-step API integration guides
- **💬 Developer Community**: Join our Discord server for API discussions
- **🐛 Bug Reports**: GitHub repository for API issues and feature requests
- **📖 Changelog**: Stay updated on API changes and new features

### Getting Help

**Support channels for API developers:**

- **📧 API Support**: api-support@taskade.com
- **💬 Live Chat**: Available in the developer console
- **📞 Enterprise Support**: Dedicated support for Enterprise API users
- **🎫 Ticket System**: Submit detailed API support requests

### Rate Limit Increases

**Request higher rate limits:**

For applications requiring higher rate limits:
1. **Document Use Case**: Explain your application and expected usage
2. **Provide Metrics**: Share current usage patterns and projections
3. **Contact Enterprise Sales**: Discuss custom rate limits and SLA requirements
4. **Technical Review**: Our team will review your integration architecture

{% hint style="info" %}
**Enterprise API Features**: Enterprise customers get access to dedicated API infrastructure, custom rate limits, priority support, and advanced webhook features. Contact our sales team to learn more about enterprise API capabilities.
{% endhint %}
