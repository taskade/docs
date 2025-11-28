# Taskade Developer API

**Connect. Build. Automate.** The Taskade API enables you to programmatically access and manage your Taskade workspace, projects, tasks, agents, and more.

{% hint style="success" %}
**Developer API** - Build integrations that connect Taskade with your existing tools and workflows. The Taskade API provides RESTful endpoints for managing your workspace data.
{% endhint %}

## API Overview

### What You Can Build

The Taskade API enables you to create integrations that:

**📁 Workspace & Project Management:**
- Access and manage workspaces and folders
- Create, copy, and manage projects
- Share projects via shareable links

**✅ Task Management:**
- Create, update, and complete tasks
- Assign team members to tasks
- Set due dates and manage task notes
- Work with custom fields

**🤖 AI Agent Integration:**
- Manage AI agents programmatically
- Add knowledge sources to agents
- Access agent conversations
- Configure public agent access

**📎 Media Management:**
- Access and manage uploaded media files
- Attach media to agent knowledge bases

### API Base URL

```
https://www.taskade.com/api/v1
```

## Authentication

All API requests require authentication using either OAuth 2.0 or Personal Access Tokens.

{% hint style="warning" %}
Keep your API keys secure and never expose them in client-side code or public repositories.
{% endhint %}

### Getting Your Personal Access Token

1. Go to **Settings** → **Developer** → **Personal Access Tokens**
2. Click **Generate New Token**
3. Copy the token and store it securely
4. Use the token in the `Authorization` header

### Authentication Headers

```bash
curl -X GET "https://www.taskade.com/api/v1/workspaces" \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  -H "Content-Type: application/json"
```

## Core API Resources

### Workspaces

Workspaces are the top-level containers that organize your projects and folders.

**Available Endpoints:**
- `GET /workspaces` - Get all workspaces for the authenticated user
- `GET /workspaces/{workspaceId}/folders` - Get all folders in a workspace
- `POST /workspaces/{workspaceId}/projects` - Create a project in a workspace

### Folders

Folders (also called Subspaces) organize projects, agents, and media within a workspace.

**Available Endpoints:**
- `GET /folders/{folderId}/projects` - Get all projects in a folder
- `GET /folders/{folderId}/agents` - Get all agents in a folder
- `POST /folders/{folderId}/agents` - Create an agent in a folder
- `POST /folders/{folderId}/agent-generate` - Generate an agent using AI
- `GET /folders/{folderId}/medias` - Get all media files in a folder
- `GET /folders/{folderId}/project-templates` - Get project templates in a folder

### Projects

Projects contain tasks and represent your work items, documents, or structured data.

**Available Endpoints:**
- `GET /projects/{projectId}` - Get a specific project
- `POST /projects` - Create a new project
- `POST /projects/{projectId}/complete` - Mark a project as completed
- `POST /projects/{projectId}/restore` - Restore a completed project
- `POST /projects/{projectId}/copy` - Copy a project to a folder
- `POST /projects/from-template` - Create a project from a template
- `GET /projects/{projectId}/members` - Get project members
- `GET /projects/{projectId}/fields` - Get project custom fields
- `GET /projects/{projectId}/shareLink` - Get the share link for a project
- `PUT /projects/{projectId}/shareLink` - Enable/update share link
- `GET /projects/{projectId}/blocks` - Get all blocks in a project
- `GET /projects/{projectId}/tasks` - Get all tasks in a project

### Tasks

Tasks are the fundamental work units within projects.

**Available Endpoints:**
- `GET /projects/{projectId}/tasks/{taskId}` - Get a specific task
- `PUT /projects/{projectId}/tasks/{taskId}` - Update a task
- `DELETE /projects/{projectId}/tasks/{taskId}` - Delete a task
- `POST /projects/{projectId}/tasks/` - Create tasks in a project
- `POST /projects/{projectId}/tasks/{taskId}/complete` - Mark task as complete
- `POST /projects/{projectId}/tasks/{taskId}/uncomplete` - Mark task as incomplete
- `PUT /projects/{projectId}/tasks/{taskId}/move` - Move a task within the project

**Task Assignees:**
- `GET /projects/{projectId}/tasks/{taskId}/assignees` - Get task assignees
- `PUT /projects/{projectId}/tasks/{taskId}/assignees` - Update task assignees
- `DELETE /projects/{projectId}/tasks/{taskId}/assignees/{assigneeHandle}` - Remove an assignee

**Task Dates:**
- `GET /projects/{projectId}/tasks/{taskId}/date` - Get task due date
- `PUT /projects/{projectId}/tasks/{taskId}/date` - Set/update task due date
- `DELETE /projects/{projectId}/tasks/{taskId}/date` - Remove task due date

**Task Notes:**
- `GET /projects/{projectId}/tasks/{taskId}/note` - Get task note
- `PUT /projects/{projectId}/tasks/{taskId}/note` - Update task note
- `DELETE /projects/{projectId}/tasks/{taskId}/note` - Delete task note

**Task Custom Fields:**
- `GET /projects/{projectId}/tasks/{taskId}/fields` - Get all field values for a task
- `GET /projects/{projectId}/tasks/{taskId}/fields/{fieldId}` - Get a specific field value
- `PUT /projects/{projectId}/tasks/{taskId}/fields/{fieldId}` - Update a field value
- `DELETE /projects/{projectId}/tasks/{taskId}/fields/{fieldId}` - Delete a field value

### AI Agents

AI Agents power intelligent interactions and automations.

**Available Endpoints:**
- `GET /agents/{agentId}` - Get an agent
- `PATCH /agents/{agentId}` - Update an agent
- `DELETE /agents/{agentId}` - Delete an agent
- `PUT /agents/{agentId}/publicAccess` - Enable public access for an agent

**Public Agent Configuration:**
- `GET /agents/{agentId}/public-agent` - Get public agent settings
- `PATCH /agents/{agentId}/public-agent` - Update public agent settings
- `GET /public-agents/{publicAgentId}` - Get a public agent by its public ID

**Agent Knowledge:**
- `POST /agents/{agentId}/knowledge/project` - Add a project to agent knowledge
- `POST /agents/{agentId}/knowledge/media` - Add media to agent knowledge
- `DELETE /agents/{agentId}/knowledge/project/{projectId}` - Remove project from knowledge
- `DELETE /agents/{agentId}/knowledge/media/{mediaId}` - Remove media from knowledge

**Agent Conversations:**
- `GET /agents/{agentId}/convos/` - Get all agent conversations
- `GET /agents/{agentId}/convos/{convoId}` - Get a specific conversation

### Media

Manage uploaded files and media.

**Available Endpoints:**
- `GET /medias/{mediaId}` - Get media details
- `DELETE /medias/{mediaId}` - Delete a media file

### User Projects

Access the authenticated user's projects.

**Available Endpoints:**
- `GET /me/projects` - Get all projects for the current user

## Error Handling

### HTTP Status Codes

- `200 OK` - Request successful
- `400 Bad Request` - Invalid request parameters
- `401 Unauthorized` - Authentication required
- `403 Forbidden` - Insufficient permissions
- `404 Not Found` - Resource not found
- `4XX` - Client error (see response body for details)

### Error Response Format

```json
{
  "ok": false,
  "message": "Error description",
  "code": "ERROR_CODE",
  "statusMessage": "HTTP status message"
}
```

## Code Examples

### JavaScript/Node.js

```javascript
const API_BASE = 'https://www.taskade.com/api/v1';
const TOKEN = 'your_access_token';

// Get all workspaces
const getWorkspaces = async () => {
  const response = await fetch(`${API_BASE}/workspaces`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

// Get project tasks
const getProjectTasks = async (projectId) => {
  const response = await fetch(`${API_BASE}/projects/${projectId}/tasks`, {
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    }
  });
  return response.json();
};

// Create a task
const createTask = async (projectId, content) => {
  const response = await fetch(`${API_BASE}/projects/${projectId}/tasks/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TOKEN}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      tasks: [{
        contentType: 'text/markdown',
        content: content,
        placement: 'beforeend'
      }]
    })
  });
  return response.json();
};
```

### Python

```python
import requests

API_BASE = 'https://www.taskade.com/api/v1'
TOKEN = 'your_access_token'

headers = {
    'Authorization': f'Bearer {TOKEN}',
    'Content-Type': 'application/json'
}

# Get all workspaces
def get_workspaces():
    response = requests.get(f'{API_BASE}/workspaces', headers=headers)
    return response.json()

# Get project tasks
def get_project_tasks(project_id):
    response = requests.get(f'{API_BASE}/projects/{project_id}/tasks', headers=headers)
    return response.json()

# Complete a task
def complete_task(project_id, task_id):
    response = requests.post(
        f'{API_BASE}/projects/{project_id}/tasks/{task_id}/complete',
        headers=headers
    )
    return response.json()
```

### cURL Examples

```bash
# Get all workspaces
curl -X GET "https://www.taskade.com/api/v1/workspaces" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Get projects in a folder
curl -X GET "https://www.taskade.com/api/v1/folders/FOLDER_ID/projects" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Get an agent
curl -X GET "https://www.taskade.com/api/v1/agents/AGENT_ID" \
  -H "Authorization: Bearer YOUR_TOKEN"
```

## Best Practices

### Security
- Store API tokens securely (environment variables, secret management)
- Use HTTPS for all API calls
- Implement proper error handling
- Never expose tokens in client-side code

### Performance
- Use pagination for large result sets
- Cache responses when appropriate
- Implement rate limit handling with exponential backoff

### Data Management
- Validate data before sending to API
- Handle partial failures gracefully
- Use cursor-based pagination for tasks and blocks

## Quick Start Guide

{% stepper %}
{% step %}
### Get Your Access Token
Navigate to Settings → Developer → Personal Access Tokens and generate a new token.
{% endstep %}

{% step %}
### Make Your First API Call
Use cURL or your preferred language to test the API connection by fetching your workspaces.
{% endstep %}

{% step %}
### Explore the Endpoints
Review the available endpoints in each resource section.
{% endstep %}

{% step %}
### Build Your Integration
Start with basic operations, then add complexity as needed.
{% endstep %}
{% endstepper %}

## Support and Resources

### Documentation
- **[Personal Access Tokens](../start/personal-tokens.md)** - Learn about authentication
- **[OAuth Authentication](../start/authentication.md)** - OAuth 2.0 setup

### Support
- **Email:** support@taskade.com
- **Help Center:** [help.taskade.com](https://help.taskade.com)

---

> **💡 Pro Tip**: Start with the `/workspaces` endpoint to discover your workspace structure, then navigate through folders and projects to access the data you need.
