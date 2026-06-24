---
description: >-
  Reference for the Public API v2 — an action-based (RPC-over-HTTP) API. Every
  call is a POST to a named operation, with cURL, Python, and TypeScript examples.
---

# Public API v2 Reference

The Public API **v2** is an **action-based** API: every operation is a `POST` to a named endpoint (`/listSpaces`, `/promptAgent`, `/createProject`), with a JSON body. It is not RESTful — there are no `GET /workspaces` or `PUT /tasks/{id}` style routes.

{% hint style="info" %}
**v2 is in beta and runs alongside v1.** v2 is simpler and adds capabilities v1 lacks — most notably **`promptAgent`**. But v2 does **not** cover everything: tasks are **read-only** in v2, and there is no project-update endpoint. For full task CRUD (create/update/delete, assignees, dates, notes, fields) use the [REST API v1](comprehensive-api-guide/). See [Which API should I use?](#which-api-should-i-use) below.
{% endhint %}

The live OpenAPI spec is published at [taskade.com/api/documentation/v2](https://www.taskade.com/api/documentation/v2).

## Table of Contents

- [Which API should I use?](#which-api-should-i-use)
- [Base URL & Authentication](#base-url-and-authentication)
- [Calling convention](#calling-convention)
- [Endpoints](#endpoints)
- [Pagination](#pagination)
- [Rate Limits](#rate-limits)
- [Error Handling](#error-handling)
- [Security Best Practices](#security-best-practices)

---

## Which API should I use?

Taskade ships **two** public HTTP APIs. They share the same authentication.

| | **REST API v1** | **Action API v2** |
| --- | --- | --- |
| Base URL | `https://www.taskade.com/api/v1` | `https://www.taskade.com/api/v2` |
| Style | RESTful (`GET`/`POST`/`PUT`/`DELETE`) | Action / RPC (`POST /{operation}`) |
| Status | Stable (GA) | Beta (`0.1.0`) |
| Live spec | [/api/documentation/v1](https://www.taskade.com/api/documentation/v1) | [/api/documentation/v2](https://www.taskade.com/api/documentation/v2) |
| Task create / update / delete | ✅ Full CRUD | ❌ Read-only (`listTasks`, `listBlocks`) |
| Task assignees / dates / notes / fields | ✅ | ❌ |
| Project update | ✅ | ❌ (create / complete / restore / copy only) |
| Prompt an agent | ❌ | ✅ `promptAgent` |
| Agent lifecycle (create/update/delete) | Partial | ✅ |
| Bundles (export/import Taskade Genesis apps) | ❌ | ✅ |
| Reference | [Comprehensive API Guide](comprehensive-api-guide/) | This page |

**Rule of thumb:** reach for **v1** when you need to write tasks or manage task metadata; reach for **v2** for agent prompting, agent lifecycle, bundles, and simpler list/read flows.

---

## Base URL & Authentication

All v2 operations live under:

```
https://www.taskade.com/api/v2
```

Authenticate with a **Personal Access Token** from [taskade.com/settings/api](https://www.taskade.com/settings/api), or an **OAuth 2.0 access token** for apps that act on behalf of other users:

```bash
Authorization: Bearer YOUR_TOKEN
```

See the [Authentication guide](developers/authentication.md) for personal tokens vs. OAuth 2.0 (PKCE) details.

---

## Calling convention

Every v2 call is a `POST` to an operation name, with a JSON body and a JSON response. Successful responses are wrapped in `{ "ok": true, ... }`.

```bash
curl -X POST https://www.taskade.com/api/v2/OPERATION \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "param": "value" }'
```

A typical response:

```json
{ "ok": true, "items": [ /* ... */ ] }
```

{% hint style="warning" %}
There is no `POST /api/v2/webhooks` endpoint, but you can subscribe to events programmatically (Beta, Pro and above) via `POST /api/v2/subscribeWebhook` — see [Webhooks](webhooks.md). You can also use [automation webhook triggers](webhooks.md).
{% endhint %}

---

## Endpoints

### List spaces (workspaces)

**`POST /listSpaces`** — every integration's entry point. Body is optional.

{% tabs %}
{% tab title="cURL" %}
```bash
curl -X POST https://www.taskade.com/api/v2/listSpaces \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

res = requests.post(
    "https://www.taskade.com/api/v2/listSpaces",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={},
)
print(res.json()["items"])
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
const res = await fetch("https://www.taskade.com/api/v2/listSpaces", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
});
const { items } = await res.json();
```
{% endtab %}
{% endtabs %}

Filter with `{ "filterBy": { "name": { "operator": "contains", "value": "Marketing" } } }`.

---

### List folders in a space

**`POST /listFolders`**

```bash
curl -X POST https://www.taskade.com/api/v2/listFolders \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "spaceId": "SPACE_ID" }'
```

---

### List projects in a space

**`POST /listProjects`**

```bash
curl -X POST https://www.taskade.com/api/v2/listProjects \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "spaceId": "SPACE_ID" }'
```

---

### Get a project

**`POST /getProject`** — returns `{ ok, item: { id, name } }`.

```bash
curl -X POST https://www.taskade.com/api/v2/getProject \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "projectId": "PROJECT_ID" }'
```

---

### Create a project

**`POST /createProject`** — seed a project from Markdown.

{% tabs %}
{% tab title="cURL" %}
```bash
curl -X POST https://www.taskade.com/api/v2/createProject \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "spaceId": "SPACE_ID",
    "contentType": "text/markdown",
    "content": "# Q2 Planning\n\n- Review roadmap\n- Draft OKRs"
  }'
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

res = requests.post(
    "https://www.taskade.com/api/v2/createProject",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "spaceId": "SPACE_ID",
        "contentType": "text/markdown",
        "content": "# Q2 Planning\n\n- Review roadmap\n- Draft OKRs",
    },
)
print(res.json()["item"]["id"])
```
{% endtab %}
{% endtabs %}

---

### List tasks (read-only)

**`POST /listTasks`** — paginated with `after` / `before` cursors. Each task is `{ id, text, parentId?, completed }`.

```bash
curl -X POST https://www.taskade.com/api/v2/listTasks \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "projectId": "PROJECT_ID", "limit": 100 }'
```

{% hint style="info" %}
To **create, update, complete, or delete** tasks — or set assignees, dates, notes, and custom fields — use the [REST API v1 Tasks endpoints](comprehensive-api-guide/tasks/). v2 is read-only for tasks.
{% endhint %}

---

### Prompt an agent

**`POST /promptAgent`** — send a single prompt to a workspace agent and get a synchronous text response. This capability is **v2-only**.

{% tabs %}
{% tab title="cURL" %}
```bash
curl -X POST https://www.taskade.com/api/v2/promptAgent \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "spaceId": "SPACE_ID",
    "agentId": "AGENT_ID",
    "prompt": "Summarize yesterday'\''s standup notes"
  }'
```
{% endtab %}

{% tab title="Python" %}
```python
import requests

res = requests.post(
    "https://www.taskade.com/api/v2/promptAgent",
    headers={"Authorization": "Bearer YOUR_TOKEN"},
    json={
        "spaceId": "SPACE_ID",
        "agentId": "AGENT_ID",
        "prompt": "Summarize yesterday's standup notes",
    },
)
print(res.json()["summary"])
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
const res = await fetch("https://www.taskade.com/api/v2/promptAgent", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ spaceId, agentId, prompt: "Summarize standup notes" }),
});
const { summary } = await res.json();
```
{% endtab %}
{% endtabs %}

**Response:**

```json
{ "ok": true, "summary": "Here's a summary of the standup..." }
```

To review past conversations, use **`POST /listConversations`** (`{ agentId, limit?, page? }`) and **`POST /getConversation`** (`{ agentId, convoId }`).

---

### Manage agents

| Operation | Body |
| --- | --- |
| `POST /listAgents` | `{ spaceId, filterBy? }` |
| `POST /getAgent` | `{ agentId }` |
| `POST /createAgent` | `{ folderId, name, data }` |
| `POST /updateAgent` | `{ agentId, name?, data? }` |
| `POST /deleteAgent` | `{ agentId }` |
| `POST /generateAgent` | `{ folderId, text }` — generate an agent from a description |
| `POST /enablePublicAgentAccess` | `{ agentId }` → `{ ok, publicUrl }` |

---

### Attach knowledge to an agent

**`POST /addKnowledgeProject`** grounds an agent in a project. (`removeKnowledgeProject`, `addKnowledgeMedia`, `removeKnowledgeMedia` mirror it.)

```bash
curl -X POST https://www.taskade.com/api/v2/addKnowledgeProject \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "agentId": "AGENT_ID", "projectId": "PROJECT_ID" }'
```

---

### Export / import a bundle

**`POST /exportBundle`** returns a portable Genesis app bundle; **`POST /importBundle`** installs one. See [Bundles & App Kits](bundles.md) for the full schema and the binary `.tsk` variants.

```bash
curl -X POST https://www.taskade.com/api/v2/exportBundle \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "spaceId": "SPACE_ID" }'
```

---

### Full operation list

Workspaces & structure: `listSpaces`, `listFolders`, `listMyProjects`, `listTemplates`, `listMedia`.
Projects: `listProjects`, `getProject`, `createProject`, `createProjectFromTemplate`, `copyProject`, `completeProject`, `restoreProject`, `listTasks`, `listBlocks`, `listFields`, `listProjectMembers`, `getShareLink`, `enableShareLink`.
Agents: `listAgents`, `getAgent`, `createAgent`, `updateAgent`, `deleteAgent`, `promptAgent`, `generateAgent`, `listConversations`, `getConversation`, `addKnowledgeProject`, `removeKnowledgeProject`, `addKnowledgeMedia`, `removeKnowledgeMedia`, `enablePublicAgentAccess`, `getPublicAgent`, `updatePublicAgent`.
Media: `uploadMedia`, `getMedia`, `deleteMedia`, plus `GET /media/{mediaId}/content` and `GET /media/spaces/{spaceId}/content` for downloads.
Bundles: `exportBundle`, `importBundle`, `importBundleZip`, plus `GET /bundles/{spaceId}/export/zip`.

The authoritative, always-current list is the [live v2 spec](https://www.taskade.com/api/documentation/v2).

---

## Pagination

List operations that can return many rows use **cursor pagination** with `after` / `before` (tasks, blocks) or `page` / `limit` (members, conversations, projects).

```bash
# next page of tasks
curl -X POST https://www.taskade.com/api/v2/listTasks \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "projectId": "PROJECT_ID", "limit": 100, "after": "LAST_TASK_ID" }'
```

---

## Rate Limits

Requests are rate-limited per token.

| Response | Meaning | Action |
| --- | --- | --- |
| `429 Too Many Requests` | Rate limit exceeded | Respect `Retry-After`, back off exponentially |

```typescript
async function withRetry<T>(fn: () => Promise<T>, retries = 3): Promise<T> {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (err: any) {
      if (err.status === 429 && i < retries - 1) {
        await new Promise(r => setTimeout(r, 2 ** i * 1000));
        continue;
      }
      throw err;
    }
  }
  throw new Error("Retry exhausted");
}
```

---

## Error Handling

All error responses share this shape:

```json
{
  "ok": false,
  "message": "Project not found",
  "code": "not_found",
  "statusMessage": "Not Found"
}
```

| Status | Meaning | Retry? | Fix |
| --- | --- | --- | --- |
| 400 | Bad request | No | Check the request body |
| 401 | Invalid / missing token | No | Regenerate or refresh the token |
| 402 | Out of credits | No | Top up or switch to a cheaper model |
| 403 | Insufficient permission | No | Use a token with access to the resource |
| 404 | Not found | No | Verify the ID and your workspace access |
| 429 | Rate limited | Yes | Exponential backoff |
| 5xx | Server error | Yes | Retry up to 3 times with backoff |

{% hint style="warning" %}
Never retry on `400`, `401`, `403`, or `404`. Fix the request first.
{% endhint %}

---

## Security Best Practices

- **Never commit tokens.** Use environment variables or a secret manager.
- **Use OAuth, not personal tokens**, for multi-user applications.
- **Rotate personal tokens** periodically; you can hold up to 5 at a time.
- **Encrypt refresh tokens at rest** — they're long-lived.

---

## Related

{% content-ref url="comprehensive-api-guide/README.md" %}
[REST API v1 Reference](comprehensive-api-guide/README.md)
{% endcontent-ref %}

{% content-ref url="developers/authentication.md" %}
[authentication.md](developers/authentication.md)
{% endcontent-ref %}

{% content-ref url="webhooks.md" %}
[webhooks.md](webhooks.md)
{% endcontent-ref %}

{% content-ref url="bundles.md" %}
[bundles.md](bundles.md)
{% endcontent-ref %}
