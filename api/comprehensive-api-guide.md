# Comprehensive API Guide

Build powerful integrations with Taskade's REST API. Access projects, tasks, agents, and more programmatically with full CRUD operations.

{% hint style="success" %}
Taskade's API provides programmatic access to core platform features. Whether you're building custom integrations or automating workflows, our RESTful API offers the flexibility you need.
{% endhint %}

## API Overview

The Taskade API is a RESTful web service that provides programmatic access to Taskade features.

### Key Features

- **🔗 RESTful Design**: Standard HTTP methods and status codes
- **🔐 Secure Authentication**: OAuth 2.0 and Personal Access Token authentication
- **📊 Complete CRUD Operations**: Full create, read, update, delete functionality
- **📚 Comprehensive Documentation**: Detailed endpoint documentation

### API Base URL

```
Base URL: https://www.taskade.com/api/v1
Authentication: Bearer token
Content-Type: application/json
```

## Authentication

### Personal Access Token Authentication

**Simple authentication for server-to-server applications:**

```bash
# Using Personal Access Token in header
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
     https://www.taskade.com/api/v1/workspaces
```

#### Obtaining a Personal Access Token
1. Go to **Settings** → **Developer** → **Personal Access Tokens**
2. Click **Generate New Token**
3. Copy and securely store your token
4. Use the token in the `Authorization` header

### OAuth 2.0 Authentication

**Secure authentication for user-facing applications:**

```bash
# Authorization URL
https://www.taskade.com/oauth2/authorize

# Token URL  
https://www.taskade.com/oauth2/token
```

## Core API Resources

### Workspaces API

**Manage workspaces and their contents:**

#### Get All Workspaces
```bash
GET /workspaces
```

```javascript
// JavaScript example
const getWorkspaces = async (token) => {
  const response = await fetch('https://www.taskade.com/api/v1/workspaces', {
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

def get_workspaces(token):
    headers = {
        'Authorization': f'Bearer {token}',
        'Content-Type': 'application/json'
    }
    response = requests.get('https://www.taskade.com/api/v1/workspaces', headers=headers)
    return response.json()
```

#### Get Workspace Folders
```bash
GET /workspaces/{workspaceId}/folders
```

#### Create Project in Workspace
```bash
POST /workspaces/{workspaceId}/projects
Content-Type: application/json

{
  "contentType": "text/markdown",
  "content": "# My New Project\n\n- Task 1\n- Task 2"
}
```

### Folders API

**Manage folders (subspaces) and their contents:**

#### Get Folder Projects
```bash
GET /folders/{folderId}/projects
```

#### Get Folder Agents
```bash
GET /folders/{folderId}/agents
```

#### Create Agent in Folder
```bash
POST /folders/{folderId}/agents
Content-Type: application/json

{
  "name": "Customer Support Agent",
  "data": {
    "type": "template",
    "template": {
      "type": "CustomerSupport"
    }
  }
}
```

#### Generate Agent with AI
```bash
POST /folders/{folderId}/agent-generate
Content-Type: application/json

{
  "text": "Create an agent that helps with customer support questions"
}
```

#### Get Folder Media Files
```bash
GET /folders/{folderId}/medias
```

#### Get Folder Project Templates
```bash
GET /folders/{folderId}/project-templates
```

### Projects API

**Comprehensive project management:**

#### Get Project
```bash
GET /projects/{projectId}
```

#### Create Project
```bash
POST /projects
Content-Type: application/json

{
  "folderId": "folder_123",
  "contentType": "text/markdown",
  "content": "# Project Title\n\n- First task\n- Second task"
}
```

#### Complete Project
```bash
POST /projects/{projectId}/complete
```

#### Restore Project
```bash
POST /projects/{projectId}/restore
```

#### Copy Project
```bash
POST /projects/{projectId}/copy
Content-Type: application/json

{
  "folderId": "destination_folder_id",
  "projectTitle": "Copied Project Name"
}
```

#### Create Project from Template
```bash
POST /projects/from-template
Content-Type: application/json

{
  "folderId": "folder_123",
  "templateId": "template_456"
}
```

#### Get Project Members
```bash
GET /projects/{projectId}/members?limit=20&page=1
```

#### Get Project Fields
```bash
GET /projects/{projectId}/fields
```

#### Get Project Share Link
```bash
GET /projects/{projectId}/shareLink
```

#### Enable Share Link
```bash
PUT /projects/{projectId}/shareLink
```

#### Get Project Blocks
```bash
GET /projects/{projectId}/blocks?limit=100
```

#### Get Project Tasks
```bash
GET /projects/{projectId}/tasks?limit=100
```

### Tasks API

**Comprehensive task management:**

#### Get Task
```bash
GET /projects/{projectId}/tasks/{taskId}
```

#### Create Tasks
```bash
POST /projects/{projectId}/tasks/
Content-Type: application/json

{
  "tasks": [
    {
      "contentType": "text/markdown",
      "content": "New task content",
      "placement": "beforeend"
    }
  ]
}
```

```javascript
// Create multiple tasks
const createTasks = async (projectId, tasks) => {
  const response = await fetch(
    `https://www.taskade.com/api/v1/projects/${projectId}/tasks/`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tasks: tasks.map(content => ({
          contentType: 'text/markdown',
          content: content,
          placement: 'beforeend'
        }))
      })
    }
  );
  return response.json();
};
```

#### Update Task
```bash
PUT /projects/{projectId}/tasks/{taskId}
Content-Type: application/json

{
  "contentType": "text/markdown",
  "content": "Updated task content"
}
```

#### Delete Task
```bash
DELETE /projects/{projectId}/tasks/{taskId}
```

#### Complete Task
```bash
POST /projects/{projectId}/tasks/{taskId}/complete
```

#### Mark Task Incomplete
```bash
POST /projects/{projectId}/tasks/{taskId}/uncomplete
```

#### Move Task
```bash
PUT /projects/{projectId}/tasks/{taskId}/move
Content-Type: application/json

{
  "target": {
    "taskId": "target_task_id",
    "position": "afterend"
  }
}
```

Position options: `beforebegin`, `afterbegin`, `beforeend`, `afterend`

#### Get Task Assignees
```bash
GET /projects/{projectId}/tasks/{taskId}/assignees
```

#### Update Task Assignees
```bash
PUT /projects/{projectId}/tasks/{taskId}/assignees
Content-Type: application/json

{
  "handles": ["user_handle_1", "user_handle_2"]
}
```

#### Remove Task Assignee
```bash
DELETE /projects/{projectId}/tasks/{taskId}/assignees/{assigneeHandle}
```

#### Get Task Date
```bash
GET /projects/{projectId}/tasks/{taskId}/date
```

#### Set Task Date
```bash
PUT /projects/{projectId}/tasks/{taskId}/date
Content-Type: application/json

{
  "start": {
    "date": "2024-12-31",
    "time": "17:00:00",
    "timezone": "America/New_York"
  },
  "end": {
    "date": "2025-01-15",
    "time": "17:00:00",
    "timezone": "America/New_York"
  }
}
```

#### Delete Task Date
```bash
DELETE /projects/{projectId}/tasks/{taskId}/date
```

#### Get Task Note
```bash
GET /projects/{projectId}/tasks/{taskId}/note
```

#### Update Task Note
```bash
PUT /projects/{projectId}/tasks/{taskId}/note
Content-Type: application/json

{
  "type": "text/markdown",
  "value": "This is a note for the task"
}
```

#### Delete Task Note
```bash
DELETE /projects/{projectId}/tasks/{taskId}/note
```

#### Get Task Field Values
```bash
GET /projects/{projectId}/tasks/{taskId}/fields
```

#### Get Specific Field Value
```bash
GET /projects/{projectId}/tasks/{taskId}/fields/{fieldId}
```

#### Update Field Value
```bash
PUT /projects/{projectId}/tasks/{taskId}/fields/{fieldId}
Content-Type: application/json

{
  "value": "field_value"
}
```

#### Delete Field Value
```bash
DELETE /projects/{projectId}/tasks/{taskId}/fields/{fieldId}
```

### Agents API

**Manage AI agents:**

#### Get Agent
```bash
GET /agents/{agentId}
```

#### Update Agent
```bash
PATCH /agents/{agentId}
Content-Type: application/json

{
  "name": "Updated Agent Name",
  "data": {
    "description": "Updated agent description"
  }
}
```

#### Delete Agent
```bash
DELETE /agents/{agentId}
```

#### Enable Public Access
```bash
PUT /agents/{agentId}/publicAccess
```

#### Get Public Agent Settings
```bash
GET /agents/{agentId}/public-agent
```

#### Update Public Agent Settings
```bash
PATCH /agents/{agentId}/public-agent
Content-Type: application/json

{
  "preferences": {
    "mode": "chatbot",
    "theme": "light",
    "hideBranding": false
  }
}
```

#### Get Public Agent by Public ID
```bash
GET /public-agents/{publicAgentId}
```

#### Add Project to Agent Knowledge
```bash
POST /agents/{agentId}/knowledge/project
Content-Type: application/json

{
  "projectId": "project_123"
}
```

#### Add Media to Agent Knowledge
```bash
POST /agents/{agentId}/knowledge/media
Content-Type: application/json

{
  "mediaId": "media_456"
}
```

#### Remove Project from Agent Knowledge
```bash
DELETE /agents/{agentId}/knowledge/project/{projectId}
```

#### Remove Media from Agent Knowledge
```bash
DELETE /agents/{agentId}/knowledge/media/{mediaId}
```

#### Get Agent Conversations
```bash
GET /agents/{agentId}/convos/?limit=20&page=1
```

#### Get Specific Conversation
```bash
GET /agents/{agentId}/convos/{convoId}
```

### Media API

**Manage uploaded files:**

#### Get Media
```bash
GET /medias/{mediaId}
```

#### Delete Media
```bash
DELETE /medias/{mediaId}
```

### User Projects API

**Access the authenticated user's projects:**

#### Get My Projects
```bash
GET /me/projects?limit=100&page=1&sort=viewed-desc
```

Sort options: `viewed-asc`, `viewed-desc`

## Error Handling

### HTTP Status Codes

- **200 OK**: Request successful
- **400 Bad Request**: Invalid request parameters
- **401 Unauthorized**: Authentication required or invalid
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **4XX**: Client error (see response for details)

### Error Response Format

```json
{
  "ok": false,
  "message": "Error description",
  "code": "ERROR_CODE",
  "statusMessage": "HTTP status message"
}
```

### Error Handling Example

```javascript
// Robust error handling
const apiRequest = async (url, options = {}) => {
  const response = await fetch(url, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  });
  
  const data = await response.json();
  
  if (!data.ok) {
    throw new Error(`API Error: ${data.message} (${data.code})`);
  }
  
  return data;
};
```

## Pagination

Many endpoints support pagination using cursor-based or page-based approaches:

### Page-based Pagination
```bash
GET /me/projects?limit=20&page=2
```

### Cursor-based Pagination (Tasks/Blocks)
```bash
# Get tasks after a specific task
GET /projects/{projectId}/tasks?limit=100&after={taskId}

# Get tasks before a specific task
GET /projects/{projectId}/tasks?limit=100&before={taskId}
```

## Code Examples

### Complete Workflow Example

```javascript
// Complete example: Create a project and add tasks
const createProjectWithTasks = async (folderId, projectName, tasks) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  
  // Step 1: Create the project
  const projectContent = `# ${projectName}\n\n` + 
    tasks.map(t => `- ${t}`).join('\n');
  
  const projectResponse = await fetch(
    'https://www.taskade.com/api/v1/projects',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        folderId: folderId,
        contentType: 'text/markdown',
        content: projectContent
      })
    }
  );
  
  const projectData = await projectResponse.json();
  
  if (!projectData.ok) {
    throw new Error(`Failed to create project: ${projectData.message}`);
  }
  
  return projectData.item;
};

// Usage
const project = await createProjectWithTasks(
  'folder_123',
  'My New Project',
  ['Task 1', 'Task 2', 'Task 3']
);
console.log('Created project:', project.id);
```

### Agent Integration Example

```javascript
// Create an agent and add knowledge
const setupAgent = async (folderId, agentName, projectIds) => {
  const headers = {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
  
  // Step 1: Create the agent
  const agentResponse = await fetch(
    `https://www.taskade.com/api/v1/folders/${folderId}/agents`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        name: agentName,
        data: {
          type: 'template',
          template: {
            type: 'Researcher'
          }
        }
      })
    }
  );
  
  const agentData = await agentResponse.json();
  const agentId = agentData.item.id;
  
  // Step 2: Add projects to knowledge base
  for (const projectId of projectIds) {
    await fetch(
      `https://www.taskade.com/api/v1/agents/${agentId}/knowledge/project`,
      {
        method: 'POST',
        headers,
        body: JSON.stringify({ projectId })
      }
    );
  }
  
  return agentData.item;
};
```

### Python Example

```python
import requests

API_BASE = 'https://www.taskade.com/api/v1'

class TaskadeClient:
    def __init__(self, token):
        self.token = token
        self.headers = {
            'Authorization': f'Bearer {token}',
            'Content-Type': 'application/json'
        }
    
    def get_workspaces(self):
        """Get all workspaces"""
        response = requests.get(f'{API_BASE}/workspaces', headers=self.headers)
        return response.json()
    
    def get_folder_projects(self, folder_id):
        """Get all projects in a folder"""
        response = requests.get(
            f'{API_BASE}/folders/{folder_id}/projects',
            headers=self.headers
        )
        return response.json()
    
    def create_project(self, folder_id, content):
        """Create a new project"""
        response = requests.post(
            f'{API_BASE}/projects',
            headers=self.headers,
            json={
                'folderId': folder_id,
                'contentType': 'text/markdown',
                'content': content
            }
        )
        return response.json()
    
    def complete_task(self, project_id, task_id):
        """Mark a task as complete"""
        response = requests.post(
            f'{API_BASE}/projects/{project_id}/tasks/{task_id}/complete',
            headers=self.headers
        )
        return response.json()
    
    def get_agent(self, agent_id):
        """Get an agent"""
        response = requests.get(
            f'{API_BASE}/agents/{agent_id}',
            headers=self.headers
        )
        return response.json()

# Usage
client = TaskadeClient('your_token')
workspaces = client.get_workspaces()
print(f"Found {len(workspaces['items'])} workspaces")
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
- Implement exponential backoff for retries
- Batch operations when possible

### Data Management
- Validate data before sending to API
- Handle partial failures gracefully
- Implement proper logging and monitoring

## Support and Resources

### Documentation
- **API Reference**: Full endpoint documentation in each resource section
- **Authentication Guide**: [Personal Access Tokens](../start/personal-tokens.md)
- **OAuth Setup**: [OAuth Authentication](../start/authentication.md)

### Getting Help
- **📧 Support**: support@taskade.com
- **📚 Help Center**: [help.taskade.com](https://help.taskade.com)

{% hint style="info" %}
**Need more help?** Contact our support team for assistance with API integration or enterprise API requirements.
{% endhint %}
