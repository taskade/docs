---
description: >-
  Taskade REST API v1 reference - authenticate, then manage workspaces, projects, tasks, agents, folders, and media with full task CRUD and copy-paste code examples.
---

# REST API Guide

Build integrations with the Taskade REST API v1. Access projects, tasks, agents, and media through HTTP. Tasks support full CRUD.

## Before you start

- A Taskade account with a verified email address.
- A personal access token from [taskade.com/settings/api](https://www.taskade.com/settings/api). The token starts with the `tskdp_` prefix, and you can hold up to 5 tokens per account. See [Personal access tokens](../developers/personal-tokens.md).
- `curl` in a terminal. The longer examples use Node.js 18 or later, or Python 3 with `requests`.

Save the token in your terminal. Every example on this page reads it from `TASKADE_TOKEN`:

```bash
export TASKADE_TOKEN="tskdp_your_token_here"
```

## Key features

* **RESTful design**: standard HTTP methods and status codes
* **Authentication**: OAuth 2.0 and personal access tokens
* **Full task CRUD**: create, read, update, and delete tasks, plus assignees, dates, notes, and custom fields. Projects support create, read, complete, restore, copy, and share links
* **Generated reference**: the [REST API reference](https://www.taskade.com/docs/rest) shows every endpoint with its parameters and responses

## Base URL and authentication

```text
Base URL: https://www.taskade.com/api/v1
Authentication: Bearer token
Content-Type: application/json
```

Send the token in the `Authorization` header on every request:

```bash
curl -s https://www.taskade.com/api/v1/workspaces \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

The response lists each workspace with its `id` and `name`:

```json
{
  "ok": true,
  "items": [
    { "id": "Wk3rT9pLmQ2vXa7c", "name": "My Workspace" }
  ]
}
```

### OAuth 2.0

Use OAuth 2.0 when your app acts for other Taskade users. The flow uses these two URLs:

```text
Authorization URL: https://www.taskade.com/oauth2/authorize
Token URL:         https://www.taskade.com/oauth2/token
```

Send the OAuth access token in the same `Authorization: Bearer` header. See [Authentication](../developers/authentication.md) for the full flow with PKCE.

## Core API resources

The first examples in each group are full `curl` calls. The shorter blocks show only the method, the path, and the body.

To send one, add the base URL and the `Authorization` header from [Base URL and authentication](#base-url-and-authentication). The [REST API reference](https://www.taskade.com/docs/rest) shows the full request and response for every endpoint.

Save the IDs that you work with. The `curl` examples read them from these variables:

```bash
export WORKSPACE_ID="your_workspace_id"
export FOLDER_ID="your_folder_id"
export PROJECT_ID="your_project_id"
export TASK_ID="your_task_id"
```


> ℹ️
> **Need bundle export or import?** The four `/bundles/*` endpoints (export or import a Taskade Genesis app as a portable bundle) are documented on the [Bundles & App Kits](../bundles.md) page.


### Workspaces API

**Manage workspaces and their contents:**

#### Get all workspaces

```bash
curl -s https://www.taskade.com/api/v1/workspaces \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

The response is `{ "ok": true, "items": [{ "id", "name" }] }`. The same call in JavaScript and Python:

```javascript
const response = await fetch('https://www.taskade.com/api/v1/workspaces', {
  headers: { Authorization: `Bearer ${process.env.TASKADE_TOKEN}` },
});
const { items: workspaces } = await response.json();
```

```python
import os
import requests

response = requests.get(
    'https://www.taskade.com/api/v1/workspaces',
    headers={'Authorization': f"Bearer {os.environ['TASKADE_TOKEN']}"},
)
workspaces = response.json()['items']
```

#### Get workspace folders

```http
GET /workspaces/{workspaceId}/folders
```

#### Create a project in a workspace

Send the project as Markdown. The first `#` heading becomes the project title, and each list item becomes a task.

```bash
curl -s -X POST "https://www.taskade.com/api/v1/workspaces/$WORKSPACE_ID/projects" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"contentType": "text/markdown", "content": "# My New Project\n\n- Task 1\n- Task 2"}'
```

The response holds the new project:

```json
{
  "ok": true,
  "item": { "id": "Pj8sK2nV4wQx6ZbE", "icon": null, "completed": false }
}
```

### Folders API

**Manage folders (subspaces) and their contents:**

#### Get folder projects

```http
GET /folders/{folderId}/projects
```

#### Get folder agents

```http
GET /folders/{folderId}/agents
```

#### Create agent in folder

```http
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

#### Generate agent with AI

```http
POST /folders/{folderId}/agent-generate
Content-Type: application/json

{
  "text": "Create an agent that helps with customer support questions"
}
```

#### Get folder media files

```http
GET /folders/{folderId}/medias
```

#### Get folder project templates

```http
GET /folders/{folderId}/project-templates
```

### Projects API

**Project management:**


> ℹ️
> `GET /projects/{projectId}` is **read-only**. v1 has no `PUT`, `PATCH`, or `DELETE` on a project.
>
> Project writes are separate endpoints: `/complete`, `/restore`, `/copy`, and `/shareLink`. v1 does not rename, archive, export, or delete a project. For the project operations of v2, see the [Action API guide](../api-v2-reference.md).



#### Get project

```http
GET /projects/{projectId}
```

#### Create a project in a folder

```bash
curl -s -X POST https://www.taskade.com/api/v1/projects \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"folderId": "'"$FOLDER_ID"'", "contentType": "text/markdown", "content": "# Project Title\n\n- First task\n- Second task"}'
```

The response is `{ "ok": true, "item": { "id", "name", "icon", "completed" } }`.

#### Complete project

```http
POST /projects/{projectId}/complete
```

#### Restore project

```http
POST /projects/{projectId}/restore
```

#### Copy project

```http
POST /projects/{projectId}/copy
Content-Type: application/json

{
  "folderId": "destination_folder_id",
  "projectTitle": "Copied Project Name"
}
```

#### Create project from template

```http
POST /projects/from-template
Content-Type: application/json

{
  "folderId": "folder_123",
  "templateId": "template_456"
}
```

#### Get project members

```http
GET /projects/{projectId}/members?limit=20&page=1
```

#### Get project fields

```http
GET /projects/{projectId}/fields
```

#### Get project share link

```http
GET /projects/{projectId}/shareLink
```

#### Enable share link

```http
PUT /projects/{projectId}/shareLink
```

#### Get project blocks

```http
GET /projects/{projectId}/blocks?limit=100
```

#### Get project tasks

```http
GET /projects/{projectId}/tasks?limit=100
```

### Tasks API

**Task management:**

#### Get task

```http
GET /projects/{projectId}/tasks/{taskId}
```

#### Create tasks

`contentType`, `content`, and `placement` are all required on each entry. Send at most 20 entries per call. Each `content` value is limited to 2,000 characters.

To create a task under a parent, add `"taskId"` and use a placement of `beforebegin`, `afterbegin`, `beforeend`, or `afterend`. Without `taskId`, placement must be `afterbegin` or `beforeend`.

```bash
curl -s -X POST "https://www.taskade.com/api/v1/projects/$PROJECT_ID/tasks/" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"tasks": [{"contentType": "text/markdown", "content": "New task content", "placement": "beforeend"}]}'
```

The response returns each task that you created, with its `id`:

```json
{
  "ok": true,
  "item": [
    { "id": "Tk5yH1cR7mD3aF9u", "text": "New task content", "completed": false }
  ]
}
```

```javascript
// Create multiple tasks. Reads the token from TASKADE_TOKEN.
const createTasks = async (projectId, tasks) => {
  const response = await fetch(
    `https://www.taskade.com/api/v1/projects/${projectId}/tasks/`,
    {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.TASKADE_TOKEN}`,
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

#### Update a task

```bash
curl -s -X PUT "https://www.taskade.com/api/v1/projects/$PROJECT_ID/tasks/$TASK_ID" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"contentType": "text/markdown", "content": "Updated task content"}'
```

The response is `{ "ok": true, "item": { "id", "text", "parentId", "completed" } }`.

#### Delete a task

> ⚠️
> This call deletes the task from the project. Make sure that the task ID is correct before you run it.

```bash
curl -s -X DELETE "https://www.taskade.com/api/v1/projects/$PROJECT_ID/tasks/$TASK_ID" \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

The response is `{ "ok": true }`.

#### Complete a task

```bash
curl -s -X POST "https://www.taskade.com/api/v1/projects/$PROJECT_ID/tasks/$TASK_ID/complete" \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

The response returns the task with `"completed": true`.

#### Mark task incomplete

```http
POST /projects/{projectId}/tasks/{taskId}/uncomplete
```

#### Move task

```http
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

#### Get task assignees

```http
GET /projects/{projectId}/tasks/{taskId}/assignees
```

#### Update task assignees

```http
PUT /projects/{projectId}/tasks/{taskId}/assignees
Content-Type: application/json

{
  "handles": ["user_handle_1", "user_handle_2"]
}
```

#### Remove task assignee

```http
DELETE /projects/{projectId}/tasks/{taskId}/assignees/{assigneeHandle}
```

#### Get task date

```http
GET /projects/{projectId}/tasks/{taskId}/date
```

#### Set task date

```http
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

For eligible workspaces with Google Calendar connected, dates set through this endpoint can follow the same calendar-sync path as dates set in Taskade.

#### Delete task date

```http
DELETE /projects/{projectId}/tasks/{taskId}/date
```

#### Get task note

```http
GET /projects/{projectId}/tasks/{taskId}/note
```

#### Update task note

```http
PUT /projects/{projectId}/tasks/{taskId}/note
Content-Type: application/json

{
  "type": "text/markdown",
  "value": "This is a note for the task"
}
```

#### Delete task note

```http
DELETE /projects/{projectId}/tasks/{taskId}/note
```

#### Get task field values

```http
GET /projects/{projectId}/tasks/{taskId}/fields
```

#### Get specific field value

```http
GET /projects/{projectId}/tasks/{taskId}/fields/{fieldId}
```

#### Update field value

```http
PUT /projects/{projectId}/tasks/{taskId}/fields/{fieldId}
Content-Type: application/json

{
  "value": "field_value"
}
```

#### Delete field value

```http
DELETE /projects/{projectId}/tasks/{taskId}/fields/{fieldId}
```

### Agents API

**Manage AI agents:**

#### Get agent

```http
GET /agents/{agentId}
```

#### Update agent

```http
PATCH /agents/{agentId}
Content-Type: application/json

{
  "name": "Updated Agent Name"
}
```

If you send `data`, it must include the `commands` array. The request fails validation without it.

#### Delete agent

```http
DELETE /agents/{agentId}
```

#### Enable public access

```http
PUT /agents/{agentId}/publicAccess
```

#### Get public agent settings

```http
GET /agents/{agentId}/public-agent
```

#### Update public agent settings

```http
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

The update is a patch. Keys that you leave out keep their stored values, and `meta` merges field by field. The Action API operation `updatePublicAgent` follows the same rules.

If the update fails, find the error code in [Fix common errors](#fix-common-errors).

#### Get public agent by public ID

```http
GET /public-agents/{publicAgentId}
```

#### Add project to agent knowledge

```http
POST /agents/{agentId}/knowledge/project
Content-Type: application/json

{
  "projectId": "project_123"
}
```

#### Add media to agent knowledge

```http
POST /agents/{agentId}/knowledge/media
Content-Type: application/json

{
  "mediaId": "media_456"
}
```

#### Remove project from agent knowledge

```http
DELETE /agents/{agentId}/knowledge/project/{projectId}
```

#### Remove media from agent knowledge

```http
DELETE /agents/{agentId}/knowledge/media/{mediaId}
```

#### Get agent conversations

```http
GET /agents/{agentId}/convos/?limit=20&page=1
```

#### Get specific conversation

```http
GET /agents/{agentId}/convos/{convoId}
```

### Media API

**Manage uploaded files:**

#### Get media

```http
GET /medias/{mediaId}
```

#### Delete media

```http
DELETE /medias/{mediaId}
```

#### Download one media file

```http
GET /medias/{mediaId}/download
```

#### Download a space's media

```http
GET /medias/spaces/{spaceId}/download
```

#### Upload media to a space

Send the file as the raw request body. Pass the file name as a query parameter.

```http
POST /medias/spaces/{spaceId}/upload?filename=report.pdf
```

### User projects API

**Access the authenticated user's projects:**

#### Get my projects

```http
GET /me/projects?limit=100&page=1&sort=viewed-desc
```

Sort options: `viewed-asc`, `viewed-desc`

## Errors

### HTTP status codes

* **200 OK**: the request succeeded
* **400 Bad Request**: invalid request parameters
* **401 Unauthorized**: authentication is missing or invalid
* **402 Payment Required**: the operation is not available for the current account or workspace
* **403 Forbidden**: your account does not have permission
* **404 Not Found**: the resource does not exist, or your account cannot see it
* **429 Too Many Requests**: you hit a rate limit. See [Rate limits](#rate-limits)
* **4XX**: another client error. Read the response body for details

### Error response format

Every error carries `ok`, `message`, `code`, and `statusMessage`. For example, a missing or wrong token returns `401`:

```json
{
  "ok": false,
  "message": "Unauthorized",
  "code": "UNAUTHORIZED",
  "statusMessage": "Unauthorized"
}
```

A schema validation failure returns `400` with `code: "FST_ERR_VALIDATION"` and the same four fields. Its `message` names each field that failed, then the reason.

Branch on `ok` and `code`. Do not parse the human-readable `message`. Treat `statusMessage` as a description of the HTTP status, not as a stable programmatic identifier.

### Fix common errors

| What you see | Cause | Fix |
| --- | --- | --- |
| `"code": "UNAUTHORIZED"` | The token is missing, wrong, or revoked | Send `Authorization: Bearer $TASKADE_TOKEN`. Make sure that the variable is set in the same terminal. |
| `"code": "FST_ERR_VALIDATION"` | A field or parameter does not match the schema | Read `message`, fix each field that it names, then send the request again. |
| `"code": "FORBIDDEN"` | Your account cannot do this in the workspace | Use an account with the correct role in that workspace. |
| `"code": "NOT_FOUND"` | The ID is wrong, or your account cannot see the item | Check the ID and your workspace access. |
| `"code": "TOO_MANY_REQUESTS"` with `"message": "Too Many Requests"` | You hit a rate limit | Wait for the number of seconds in the `Retry-After` header, then send the request again. |
| `"code": "PAYMENT_REQUIRED"` with `"message": "Your plan does not include custom agent branding."` | You set `hideBranding` to `true` on a plan without agent branding. Agent branding is on Business and above. | Upgrade the workspace, or leave `hideBranding` out of the body. `featureId` names the missing feature. |
| `"code": "BAD_REQUEST"` with `"message": "Set the share image in the agent's publish settings."` | The body changes `meta.image`. The API does not accept file uploads. | Set the share image in the agent's publish settings in the app. |

### Error handling example

```javascript
// Throw on every error envelope. Reads the token from TASKADE_TOKEN.
const apiRequest = async (url, options = {}) => {
  const response = await fetch(url, {
    ...options,
    headers: {
      Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  const data = await response.json();

  if (!data.ok) {
    throw new Error(`API Error: ${data.message} (${data.code})`);
  }

  return data;
};
```

## Rate limits

Every rate-limited response carries the current budget in two sets of headers. Header names are case-insensitive:

| Header | Meaning |
| --- | --- |
| `RateLimit-Limit` and `X-Rate-Limit-Limit` | Your total budget for the current window |
| `RateLimit-Remaining` and `X-Rate-Limit-Remaining` | Requests left in the window (`0` when you are blocked) |
| `RateLimit-Reset` | Whole **seconds** until the window reopens |
| `X-Rate-Limit-Reset` | Seconds until the window reopens. This value can be fractional |
| `Retry-After` | Sent on a `429` response only. Whole seconds to wait before you retry |

Read the headers rather than a fixed number. Taskade can change a ceiling without a docs release.

The budget for each IP address is 40 requests per 60 seconds, and it covers every public API request. The Action API v2 specification publishes this figure. Taskade does not publish the other ceilings. The headers above carry the live values:

| Scope | Counted per |
| --- | --- |
| Every public API request | IP address |
| Authenticated v1 endpoints | user account |
| `/bundles/*` export and import | IP address, on a tighter budget than ordinary reads and writes |
| `/public-agents/*` | IP address |

The authenticated v1 budget is keyed on the **account**, not on the token. Extra tokens do not add capacity. The other budgets are keyed on the IP address.

A `429` response carries `Retry-After`, in whole seconds. Wait that number of seconds before you retry. Earlier retries are also rejected.

```javascript
const apiRequestWithRetry = async (url, options = {}, retries = 3) => {
  for (let i = 0; i < retries; i++) {
    const response = await fetch(url, options);
    if (response.status !== 429) return response;
    const resetSec = Number(
      response.headers.get('retry-after') ?? response.headers.get('x-rate-limit-reset'),
    );
    const waitMs = resetSec > 0 ? resetSec * 1000 : 2 ** i * 1000;
    await new Promise((r) => setTimeout(r, waitMs));
  }
  throw new Error('Rate limit retries exhausted');
};
```

These practices reduce `429` responses:

* **Batch instead of looping.** Bulk endpoints and array operations reduce the number of requests.
* **Spread scheduled work.** Stagger cron jobs. Do not start all jobs at `:00`.
* **Leave rate-limit headroom for bundle transfers.** The `/bundles/*` budget is much tighter than the budget for regular reads and writes.

## Pagination

Many endpoints support cursor pagination or page pagination:

### Page-based pagination

```bash
curl -s "https://www.taskade.com/api/v1/me/projects?limit=20&page=2" \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

### Cursor-based pagination (tasks and blocks)

```bash
# Get tasks after a specific task
curl -s "https://www.taskade.com/api/v1/projects/$PROJECT_ID/tasks?limit=100&after=$TASK_ID" \
  -H "Authorization: Bearer $TASKADE_TOKEN"

# Get tasks before a specific task
curl -s "https://www.taskade.com/api/v1/projects/$PROJECT_ID/tasks?limit=100&before=$TASK_ID" \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

The tasks response has this shape:

```json
{
  "ok": true,
  "items": [
    { "id": "Tk5yH1cR7mD3aF9u", "text": "New task content", "completed": false }
  ],
  "hasMore": true,
  "nextCursor": "Tk5yH1cR7mD3aF9u"
}
```

The tasks response also carries `hasMore` and `nextCursor`. While `hasMore` is `true`, pass `nextCursor` as `after` to fetch the next page. `nextCursor` is `null` on the last page.

## Code examples

### Complete workflow example

```javascript
// Complete example: Create a project and add tasks
const createProjectWithTasks = async (folderId, projectName, tasks) => {
  const headers = {
    'Authorization': `Bearer ${process.env.TASKADE_TOKEN}`,
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

### Agent integration example

```javascript
// Create an agent and add knowledge
const setupAgent = async (folderId, agentName, projectIds) => {
  const headers = {
    'Authorization': `Bearer ${process.env.TASKADE_TOKEN}`,
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

### Python example

```python
import os
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
client = TaskadeClient(os.environ['TASKADE_TOKEN'])
workspaces = client.get_workspaces()
print(f"Found {len(workspaces['items'])} workspaces")
```

## Best practices

### Security

* Store API tokens in environment variables or a secret manager.
* Use HTTPS for all API calls.
* Handle API errors.
* Never expose tokens in client-side code.

### Performance

* Use pagination for large result sets.
* Cache responses when the data permits caching.
* Use exponential backoff for retries.
* Batch operations when an endpoint supports batching.

### Data management

* Validate data before you send it to the API.
* Record and retry eligible partial failures.
* Add logging and monitoring.

{% hint style="info" %}
**Note:** For API integration or enterprise API requirements, email support@taskade.com.
{% endhint %}

## Next steps

- [REST API reference](https://www.taskade.com/docs/rest): every v1 endpoint, with its parameters and responses.
- [Quickstart](https://www.taskade.com/docs/getting-started/quickstart): create a project and add tasks in about five minutes.
- [Action API guide](../api-v2-reference.md): the v2 API, with `promptAgent` and signed webhooks.
- [Authentication](../developers/authentication.md): OAuth 2.0 for apps that act for other users.
- [Bundles and App Kits](../bundles.md): export and import a Taskade Genesis app.

---

_This page is also published at [taskade.com/docs/getting-started/rest-api-guide](https://www.taskade.com/docs/getting-started/rest-api-guide)._
