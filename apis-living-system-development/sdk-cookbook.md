---
description: >-
  Copy code patterns for a Taskade integration: agents, automations, projects, bundles, webhooks, errors, and pagination.
---

# SDK Cookbook

Copy working patterns for a Taskade integration: agents, automations, projects, webhooks, bundles, errors, pagination, and tests. Each recipe uses plain `fetch` and one small helper.

{% hint style="warning" %}
**Important:** `@taskade/sdk` is a preview and is not on the public npm registry. These recipes use plain HTTP, so they work today. The retry, pagination, idempotency, and testing patterns also apply to the future client.
{% endhint %}

## Before you start

You need a token and a runtime that has `fetch`.

- A personal access token in `TASKADE_TOKEN`. See [Personal access tokens](developers/personal-tokens.md).
- Node.js 18 or later, which includes `fetch`.
- The IDs that each recipe names. `listSpaces`, `listProjects`, and `listAgents` return them.

The recipes call [Action API v2](api-v2-reference.md) through a `taskade(operation, body)` helper. Some recipes also call [REST API v1](comprehensive-api-guide/README.md). The [TypeScript SDK page](sdk-quickstart.md) shows the planned generated client.

## Setup & Authentication

Add one helper that every recipe on this page uses.

### A tiny HTTP helper

The helper sends a JSON body to `POST /{operation}`. If a call fails, the helper throws an error. The error has the HTTP status, the error `code`, and the number of seconds to wait after a `429`:

```typescript
export async function taskade(operation: string, body: unknown = {}) {
  const res = await fetch(`https://www.taskade.com/api/v2/${operation}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  // v2 returns { ok: true, ... } on success and { ok: false, message, code, statusMessage } on error
  if (!res.ok || data.ok === false) {
    throw Object.assign(new Error(`${operation} failed: ${res.status} ${data.code}`), {
      status: res.status,
      code: data.code,
      resetSec: Number(res.headers.get("retry-after") ?? res.headers.get("x-rate-limit-reset")),
      data,
    });
  }
  return data;
}
```

{% hint style="warning" %}
**Warning:** Do not put the token in source code. Use `process.env.TASKADE_TOKEN`, a `.env` file that git ignores, or a secret manager.
{% endhint %}

### Per-request token override

An app with many users (multi-tenant) sends the token of each caller. It does not read one shared token from the environment:

```typescript
async function taskadeAs(token: string, operation: string, body: unknown = {}) {
  const res = await fetch(`https://www.taskade.com/api/v2/${operation}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res.json();
}

const { items } = await taskadeAs(userAccessToken, "listSpaces");
```

The response lists the workspaces that this caller can see:

```json
{
  "ok": true,
  "items": [
    { "id": "Wk3rT9pLmQ2vXa7c", "name": "My Workspace" }
  ]
}
```

## TypeScript Types

Declare the shapes that you read. Then the compiler finds a wrong field.

The future generated client will export `TaskadePublicApi` plus request and response types. Until then, declare your own:

```typescript
type Project = { id: string; name?: string };

async function findProject(spaceId: string, name: string): Promise<Project | undefined> {
  const { items } = await taskade("listProjects", { spaceId });
  return (items as Project[]).find(p => p.name === name);
}
```

`listProjects` returns `{ "ok": true, "items": [{ "id": "…", "name": "…" }] }`. Only `id` is always present. An item can also have `icon`, `completed`, `archived`, `color`, and `tags`.

Use a **type guard** on the `{ ok }` union that v2 returns:

```typescript
type TaskadeError = { ok: false; message: string; code: string; statusMessage: string };

function isError(resp: unknown): resp is TaskadeError {
  return typeof resp === "object" && resp !== null && "ok" in resp && resp.ok === false;
}
```

## Agents

Prompt an agent, read its past chats, and give it knowledge.

### Prompt an agent

`promptAgent` sends one prompt and waits for the answer. The answer text is in `summary`:

```typescript
const { summary } = await taskade("promptAgent", {
  spaceId: SPACE_ID,
  agentId: AGENT_ID,
  prompt: "Draft a weekly standup summary from these notes",
});
console.log(summary);
```

```json
{
  "ok": true,
  "summary": "Weekly standup: the API docs shipped, and two bugs remain open."
}
```

### Review past conversations

List the conversations of an agent. Then get one conversation with its transcript:

```typescript
const { items } = await taskade("listConversations", { agentId: AGENT_ID, limit: 20, page: 1 });
const convo = await taskade("getConversation", {
  agentId: AGENT_ID,
  convoId: items[0].id,
  includeTranscript: true,
});
console.log(convo.item.status, convo.transcript);
```

Each conversation has an `id`, a `space_agent_id`, a `status` (`in_progress`, `idle`, or `requires_review`), an optional `title`, and a `data` object. With `includeTranscript: true`, `getConversation` also returns a `transcript` string.

### Attach knowledge to an agent

Add a project or an uploaded media file to the knowledge of the agent:

```typescript
await taskade("addKnowledgeProject", {
  agentId: AGENT_ID,
  projectId: "PROJECT_ID",
});

await taskade("addKnowledgeMedia", {
  agentId: AGENT_ID,
  mediaId: "MEDIA_ID",
});
```

Each call returns `ok: true` and the updated agent in `item`, with its `id`, `name`, `space_id`, and settings in `data`.

### Handle rate limits with retry

Retry only on `429`. Wait for the number of seconds in the `Retry-After` header, which the helper stores as `resetSec`:

```typescript
async function promptWithRetry(
  spaceId: string,
  agentId: string,
  prompt: string,
  retries = 3,
) {
  for (let i = 0; i < retries; i++) {
    try {
      return await taskade("promptAgent", { spaceId, agentId, prompt });
    } catch (err: any) {
      if (err.status === 429 && i < retries - 1) {
        const waitMs = err.resetSec > 0 ? err.resetSec * 1000 : 2 ** i * 1000;
        await new Promise(r => setTimeout(r, waitMs));
        continue;
      }
      throw err;
    }
  }
  throw new Error("Rate limit retries exhausted");
}
```

A `429` response has a `Retry-After` header, in whole seconds. A retry before that time fails again.

## Automations

To start an automation from code, change the data that its trigger watches.

{% hint style="info" %}
**Note:** No API operation runs an automation directly. A Taskade trigger starts the run, for example **When a task is added** or **When a task is completed**. Then the run does the work in its steps, for example **Send HTTP Request**.
{% endhint %}

### Start an automation from code

Create the object that the trigger watches. For example, a new task starts an automation with a **When a task is added** trigger on that project:

```typescript
// Creating the task is enough. The automation's trigger does the rest.
await fetch("https://www.taskade.com/api/v1/projects/PROJECT_ID/tasks/", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tasks: [
      {
        contentType: "text/markdown",
        content: "Onboard Acme Corp (Pro)",
        placement: "beforeend",
      },
    ],
  }),
});
```

The response returns the new task in an `item` array:

```json
{
  "ok": true,
  "item": [
    { "id": "Tk5yH1cR7mD3aF9u", "text": "Onboard Acme Corp (Pro)", "completed": false }
  ]
}
```

To send outside data **into** an automation, use an inbound [Webhook trigger](webhooks.md#inbound-webhooks):

- `POST` your payload to the URL that Taskade gives you.
- If the trigger has **Verify requests** set to **Bearer token**, send that token in the `Authorization` header.
- The **Webhook Received** trigger needs the Pro plan or above.

## Projects & Tasks

Create a project from Markdown, add tasks to it, and mark a task complete.

### Create a project from Markdown

The v2 `createProject` operation creates a whole project, with its outline, from one Markdown string:

```typescript
const { item: project } = await taskade("createProject", {
  spaceId: SPACE_ID,
  contentType: "text/markdown",
  content: "# Q2 Roadmap\n\n- Ship v2 API docs\n- Write SDK cookbook",
});
```

```json
{
  "ok": true,
  "item": { "id": "Pj8sK2nV4wQx6ZbE", "name": "Q2 Roadmap" }
}
```

### Add tasks

The v1 call below adds tasks to the project. Each entry needs `contentType`, `content`, and `placement`. Send 20 entries or fewer in one call.

{% hint style="info" %}
**Note:** Action API v2 also writes tasks: `createTask`, `updateTask`, `deleteTask`, `moveTask`, `completeTask`, and `uncompleteTask`. It also sets assignees, dates, notes, and custom fields. [`createTask`](https://www.taskade.com/docs/actions/create-task) is the v2 version of this call.
{% endhint %}

```typescript
await fetch(`https://www.taskade.com/api/v1/projects/${project.id}/tasks/`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tasks: [
      { contentType: "text/markdown", content: "Ship v2 API docs", placement: "beforeend" },
      { contentType: "text/markdown", content: "Write SDK cookbook", placement: "beforeend" },
    ],
  }),
});
```

```json
{
  "ok": true,
  "item": [
    { "id": "Tk5yH1cR7mD3aF9u", "text": "Ship v2 API docs", "completed": false },
    { "id": "Tk7bN2qW9xE4sL1p", "text": "Write SDK cookbook", "completed": false }
  ]
}
```

### Mark a task complete

One v1 `POST` marks a task complete:

```typescript
await fetch(
  `https://www.taskade.com/api/v1/projects/${project.id}/tasks/${taskId}/complete`,
  {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.TASKADE_TOKEN}` },
  },
);
```

```json
{
  "ok": true,
  "item": { "id": "Tk5yH1cR7mD3aF9u", "text": "Ship v2 API docs", "completed": true }
}
```

## Webhooks

Get Taskade events at your own endpoint, from a signed registration or from an automation.

Taskade has two outbound event patterns:

| Pattern | How | Plan |
| --- | --- | --- |
| Signed programmatic webhook | `POST /api/v2/webhooks` for the events that this API exposes | Pro and above |
| No-code automation | Any Taskade trigger, plus a **Send HTTP Request** step | Every plan |

The [Webhooks guide](webhooks.md) has the event list, signature checks, and the automation pattern.

### Register a signed webhook

The registration returns an HMAC signing secret one time only. Store it in a safe place:

```typescript
const { webhook, secret } = await fetch("https://www.taskade.com/api/v2/webhooks", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    targetUrl: "https://your-app.example.com/hooks/taskade",
    events: ["task.due", "comment.created"],
    spaceIds: [],
  }),
}).then(response => response.json());
```

```json
{
  "ok": true,
  "webhook": {
    "id": "https://your-app.example.com/hooks/taskade",
    "url": "https://your-app.example.com/hooks/taskade",
    "events": ["task.due", "comment.created"],
    "spaceIds": [],
    "createdAt": "2026-09-29T09:00:00.000Z"
  },
  "secret": "your_signing_secret_shown_once"
}
```

An empty `spaceIds` array covers all spaces.

Before you act on a delivery, make sure that:

- The `X-Taskade-Signature-V2` header is valid.
- `X-Taskade-Timestamp` is less than 5 minutes old.

A copy of a delivery that arrives in those 5 minutes also passes the check. Thus, skip a delivery that you already processed. The [Webhooks guide](webhooks.md#validate-delivery-signatures) has a function that does this check.

Use `GET /api/v2/webhooks` to list registrations. Use `GET` or `DELETE /api/v2/webhooks/{id}` to read or remove one. The `{id}` is the URL-encoded target URL.

### Receive an event in your app

A no-code automation sends the JSON body that you set in its **Send HTTP Request** step. Make the handler idempotent. Then a repeated delivery does no harm:

```typescript
const processed = new Set<string>();

app.post("/hooks/taskade", (req, res) => {
  const eventId = `${req.body.projectId}:${req.body.nodeId}`;
  if (processed.has(eventId)) return res.status(200).end();
  processed.add(eventId);
  // Handle the task event here
  res.status(200).end();
});
```

The `projectId` and `nodeId` keys come from the body that you set in the automation. To send data **into** Taskade, use an inbound webhook trigger. See [Inbound Webhooks](webhooks.md#inbound-webhooks).

## Bundles (Import/Export)

Export a Taskade Genesis app as a portable bundle, then import it into another workspace. See [Bundles & App Kits](bundles.md) for the full schema.

| Operation | Plan gate |
| --- | --- |
| `exportBundle` | Pro and above. Lower plans get `402` with `"featureId": "space.bundle.export"` |
| `importBundle` | No bundle gate. Each item counts against the limits of the target plan for agents, apps, automations, and agent teams |

```typescript
import { promises as fs } from "node:fs";

// Export a space's bundle. exportBundle returns the bundle under `item`.
const { item: bundleData } = await taskade("exportBundle", { spaceId: SOURCE_SPACE_ID });
await fs.writeFile("my-app.bundle.json", JSON.stringify(bundleData, null, 2));

// Import into another workspace. importBundle takes workspaceId and bundleData.
const imported = await taskade("importBundle", {
  workspaceId: TARGET_WORKSPACE_ID,
  bundleData: JSON.parse(await fs.readFile("my-app.bundle.json", "utf8")),
});
console.log(imported.item);
```

`exportBundle` returns `{ "ok": true, "item": { "version": "1", "items": { … } } }`. Each entry in `items` has a `type`, such as `space-bundle-project-item`. `importBundle` reports what it installed:

```json
{
  "ok": true,
  "item": {
    "id": "Bi2mK8rT4vQn6YzA",
    "projectCount": 3,
    "flowCount": 1,
    "agentCount": 1,
    "templateCount": 0,
    "mediaCount": 0,
    "appCount": 1
  }
}
```

## Error Handling Taxonomy

Branch on the HTTP status and the `code`. Never parse `message`.

v2 reports a failure with an HTTP error status and an `{ ok: false, message, code, statusMessage }` body. The `taskade` helper adds `status` and `code` to the error that it throws:

```typescript
try {
  await taskade("promptAgent", { spaceId: SPACE_ID, agentId: AGENT_ID, prompt: "Summarize today" });
} catch (err: any) {
  switch (err.status) {
    case 400: /* Fix the request body. Read err.data.message for the field */ break;
    case 401: /* Invalid token. Refresh or regenerate it */ break;
    case 402: /* The plan lacks a feature. err.data.featureId can name it */ break;
    case 403: /* The account lacks access, or its role cannot write */ break;
    case 404: /* Agent not found. Check the IDs */ break;
    case 429: /* Rate limited. Retry after err.resetSec */ break;
    case 500:
    case 502:
    case 503: /* Retry with backoff */ break;
    default: throw err; // includes network and parse errors with no status
  }
}
```

| What you see | Status | Retry? | Fix |
| --- | --- | --- | --- |
| `"code": "FST_ERR_VALIDATION"` or `"code": "BAD_REQUEST"` | 400 | No | Fix the request body |
| `"code": "UNAUTHORIZED"` | 401 | No | Refresh or regenerate the token |
| `"code": "PAYMENT_REQUIRED"` | 402 | No | Upgrade the plan. If the body has `featureId`, it names the missing feature |
| `"code": "FORBIDDEN"` | 403 | No | Change the membership or the role. Personal access tokens have no scopes. A new token does not help |
| `"code": "NOT_FOUND"` | 404 | No | Make sure that the ID and the workspace access are correct |
| `"code": "TOO_MANY_REQUESTS"` | 429 | Yes | Wait for the number of seconds in the `Retry-After` header, then retry |
| `5xx` status | 5xx | Yes | Retry up to 3 times with backoff |

## Pagination

Read every page of a long list with a cursor or a page number.

| List | Paging fields |
| --- | --- |
| Tasks (`listTasks`) and blocks (`listBlocks`) | Cursor: `limit` plus `after` or `before` |
| Conversations (`listConversations`) and project members (`listProjectMembers`) | `page` and `limit` |
| Your projects (`GET /api/v1/me/projects`) | `page` and `limit` query parameters |

For tasks, set `after` to the `id` of the last item that you received. Stop when a page has fewer items than `limit`.

```typescript
// Manual loop over a project's tasks
let after: string | undefined;
const limit = 100;
do {
  const { items } = await taskade("listTasks", { projectId, limit, after });
  for (const task of items) console.log(task.text);
  after = items.length === limit ? items[items.length - 1].id : undefined;
} while (after);

// Async iterator helper
async function* iterateTasks(projectId: string, limit = 100) {
  let after: string | undefined;
  let count: number;
  do {
    const { items } = await taskade("listTasks", { projectId, limit, after });
    count = items.length;
    for (const t of items) yield t;
    after = count === limit ? items[count - 1].id : undefined;
  } while (after);
}

for await (const task of iterateTasks(projectId)) {
  console.log(task.text);
}
```

Each `listTasks` page returns `{ "ok": true, "items": [...] }`. Each task has an `id`, `text`, `completed`, and an optional `parentId`.

## Testing & Mocking

Test your integration without calls to a live workspace.

### Environment-based client

In tests, replace the helper with a mock. Then the tests make no network calls. `createMockTaskade()` is your own test double:

```typescript
// client.ts
export const callTaskade =
  process.env.NODE_ENV === "test" ? createMockTaskade() : taskade;
```

### Mock with vitest / jest

Every call goes through one `fetch`. Stub `fetch` or the `taskade` helper, and return an `{ ok: true, ... }` body:

```typescript
import { vi } from "vitest";

const callTaskade = vi.fn().mockResolvedValue({
  ok: true,
  summary: "mocked response",
});

// Test code calls callTaskade("promptAgent", { spaceId, agentId, prompt })
```

### Integration tests with a sandbox workspace

Run live tests against a workspace that has no production data:

1. Create a dedicated "SDK Test" workspace.
2. Create a separate Taskade account for CI. Create the CI token from this account.
3. Make that account a member of the test workspace only.

A personal access token has no workspace scope. It can open every workspace that its account can open. Thus the separate account keeps the CI pipeline away from production workspaces.

## Next steps

- [TypeScript SDK](sdk-quickstart.md): the preview client and a typed `fetch` wrapper.
- [Action API guide](api-v2-reference.md): every v2 operation and its request shape.
- [Webhooks](webhooks.md): signed events, inbound triggers, and signature checks.
- [Bundles & App Kits](bundles.md): the full bundle schema and the `.tsk` format.
- [Autonomous Agents](autonomous-agents.md): run agents from automations and teams.

---

_This page is also published at [taskade.com/docs/guides/sdk-cookbook](https://www.taskade.com/docs/guides/sdk-cookbook)._
