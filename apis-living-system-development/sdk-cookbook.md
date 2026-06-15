---
description: >-
  Integration patterns for Taskade — agents, automations, projects, bundles,
  error handling, pagination, and testing.
---

# SDK Cookbook

Production patterns for integrating with Taskade.

{% hint style="warning" %}
**The `@taskade/sdk` package is in preview and not yet on public npm.** The recipes below run **today** with plain HTTP — a small `taskade(operation, body)` helper over the [Action API v2](api-v2-reference.md), plus the [REST API v1](comprehensive-api-guide/README.md) for full task CRUD. See the [SDK Preview quickstart](sdk-quickstart.md) for what the generated client will look like when it ships. The concepts (retry, pagination, idempotency, testing) carry over either way.
{% endhint %}

<figure><img src="../.gitbook/assets/sdk-agent-builder.gif" alt="" width="563"><figcaption></figcaption></figure>

## Table of Contents

- [Setup & Authentication](#setup-and-authentication)
- [TypeScript Types](#typescript-types)
- [Agents](#agents)
- [Automations](#automations)
- [Projects & Tasks](#projects-and-tasks)
- [Webhooks](#webhooks)
- [Bundles (Import/Export)](#bundles-importexport)
- [Error Handling Taxonomy](#error-handling-taxonomy)
- [Pagination](#pagination)
- [Testing & Mocking](#testing-and-mocking)
- [Related](#related)

---

## Setup & Authentication

### A tiny HTTP helper

Until the SDK ships, the cleanest pattern is a small typed wrapper around the [Action API v2](api-v2-reference.md) — every operation is a `POST /{operation}` with a JSON body. The recipes below all build on this one helper:

```typescript
async function taskade(operation: string, body: unknown = {}) {
  const res = await fetch(`https://www.taskade.com/api/v2/${operation}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  // v2 wraps success as { ok: true, ... } and errors as { ok: false, message, code }
  if (!res.ok || data.ok === false) {
    throw Object.assign(new Error(data.message ?? operation), { status: res.status, data });
  }
  return data;
}
```

{% hint style="warning" %}
Never hardcode your token. Use `process.env.TASKADE_TOKEN`, a `.env` file (gitignored), or a secret manager.
{% endhint %}

### Per-request token override

For multi-tenant apps where each request acts on behalf of a different user, pass the caller's token in instead of reading it from the environment:

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

---

## TypeScript Types

Declare the shapes you consume so responses stay type-safe. (When the generated client ships, it exports a `TaskadePublicApi` plus request/response types for each v2 operation — see the [SDK Preview quickstart](sdk-quickstart.md).)

```typescript
type Project = { id: string; name: string };

async function findProject(spaceId: string, name: string): Promise<Project | undefined> {
  const { items } = await taskade("listProjects", { spaceId });
  return (items as Project[]).find(p => p.name === name);
}
```

Use **type guards** on the `{ ok }` union that v2 returns:

```typescript
function isError(resp: unknown): resp is { ok: false; message: string; code: string } {
  return typeof resp === "object" && resp !== null && (resp as any).ok === false;
}
```

---

## Agents

### Prompt an agent

`promptAgent` sends one prompt and returns a synchronous text response in `summary`:

```typescript
const { summary } = await taskade("promptAgent", {
  spaceId: SPACE_ID,
  agentId: AGENT_ID,
  prompt: "Draft a weekly standup summary from these notes",
});
console.log(summary);
```

### Review past conversations

```typescript
// List an agent's conversations, then fetch one
const { items } = await taskade("listConversations", { agentId: AGENT_ID });
const convo = await taskade("getConversation", {
  agentId: AGENT_ID,
  convoId: items[0].id,
});
```

### Attach knowledge to an agent

```typescript
// Ground the agent in a project
await taskade("addKnowledgeProject", {
  agentId: AGENT_ID,
  projectId: "PROJECT_ID",
});

// Or attach uploaded media
await taskade("addKnowledgeMedia", {
  agentId: AGENT_ID,
  mediaId: "MEDIA_ID",
});
```

### Handle rate limits with retry

The helper throws with a `status` property, so back off on `429`:

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
        await new Promise(r => setTimeout(r, 2 ** i * 1000));
        continue;
      }
      throw err;
    }
  }
  throw new Error("Rate limit retries exhausted");
}
```

---

## Automations

{% hint style="info" %}
There is no "run automation" API operation. Automations run **inside Taskade**, fired by a Taskade [trigger](webhooks.md) (such as _task added_ or _task completed_) and acting through built-in steps including an outbound HTTP Request action.
{% endhint %}

### Kick off an automation from code

To start a flow from your integration, create the object its trigger watches — the automation fires on its own. For example, a "task added → notify" automation runs when you create a task via the [REST API v1](comprehensive-api-guide/README.md):

```typescript
// Creating the task is enough — the automation's trigger handles the rest
await fetch("https://www.taskade.com/api/v1/projects/PROJECT_ID/tasks/", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ tasks: [{ content: "Onboard Acme Corp (Pro)" }] }),
});
```

To push external data **into** an automation, point it at an inbound [Webhook trigger](webhooks.md#inbound-webhooks) and `POST` your payload to the URL Taskade gives you.

---

## Projects & Tasks

### Create a project from Markdown

v2 `createProject` seeds a whole project — outline and all — from a Markdown string:

```typescript
const { item: project } = await taskade("createProject", {
  spaceId: SPACE_ID,
  contentType: "text/markdown",
  content: "# Q2 Roadmap\n\n- Ship v2 API docs\n- Write SDK cookbook",
});
```

### Add tasks

{% hint style="info" %}
Tasks are **read-only** in v2 (`listTasks`, `listBlocks`). To create, update, complete, or delete tasks use the [REST API v1](comprehensive-api-guide/README.md).
{% endhint %}

```typescript
// v1: create tasks in a project
await fetch(`https://www.taskade.com/api/v1/projects/${project.id}/tasks/`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    tasks: [
      { content: "Ship v2 API docs", contentType: "text/markdown" },
      { content: "Write SDK cookbook", contentType: "text/markdown" },
    ],
  }),
});
```

### Mark a task complete

```typescript
// v1: complete a task
await fetch(
  `https://www.taskade.com/api/v1/projects/${project.id}/tasks/${taskId}/complete`,
  {
    method: "POST",
    headers: { Authorization: `Bearer ${process.env.TASKADE_TOKEN}` },
  },
);
```

---

## Webhooks

{% hint style="info" %}
There is **no** event-subscription API (no `POST /api/v2/webhooks`). To react to Taskade events, build an **automation** with a Taskade trigger (e.g. _task completed_) and an outbound HTTP action that calls your endpoint. See the [Webhooks guide](webhooks.md) for the full model and the `task.added` / `task.completed` payloads.
{% endhint %}

### Receive an event in your app

Your endpoint receives whatever JSON body the automation's HTTP action sends. Make your handler idempotent — automations may retry on failure:

```typescript
const processed = new Set<string>();

app.post("/hooks/taskade", (req, res) => {
  const eventId = `${req.body.projectId}:${req.body.nodeId}`;
  if (processed.has(eventId)) return res.status(200).end();
  processed.add(eventId);
  // ... handle the task event
  res.status(200).end();
});
```

To send data **into** Taskade instead, use an inbound webhook trigger — see [Inbound Webhooks](webhooks.md#inbound-webhooks).

---

## Bundles (Import/Export)

Export a Genesis app as a portable bundle, then import elsewhere. See [Bundles & App Kits](bundles.md) for the full schema.

```typescript
// Export a space's bundle (exportBundle returns the bundle under `item`)
const { item: bundleData } = await taskade("exportBundle", { spaceId: SOURCE_SPACE_ID });
await fs.writeFile("my-app.bundle.json", JSON.stringify(bundleData, null, 2));

// Import into another workspace (note: importBundle takes workspaceId + bundleData)
const imported = await taskade("importBundle", {
  workspaceId: TARGET_WORKSPACE_ID,
  bundleData: JSON.parse(await fs.readFile("my-app.bundle.json", "utf8")),
});
```

---

## Error Handling Taxonomy

v2 reports failures with an HTTP error status **and** an `{ ok: false, message, code }` body. The `taskade` helper above attaches `status` to the thrown error, so you can branch on it:

```typescript
try {
  await taskade("promptAgent", { spaceId: SPACE_ID, agentId: AGENT_ID, prompt: "..." });
} catch (err: any) {
  switch (err.status) {
    case 401: /* Invalid token — refresh or regenerate */ break;
    case 403: /* Scope missing — regenerate with scope */ break;
    case 404: /* Agent not found */ break;
    case 429: /* Rate limited — retry with backoff */ break;
    case 402: /* Out of credits — top up or switch model */ break;
    case 500:
    case 502:
    case 503: /* Retry with backoff */ break;
    default: throw err; // includes network/parse errors with no status
  }
}
```

| err.status | Retry? | Typical Fix |
| --- | --- | --- |
| 400 | No | Fix request body |
| 401 | No | Refresh or regenerate token |
| 402 | No | Top up credits or change model |
| 403 | No | Token needs additional scope |
| 404 | No | Verify ID and workspace access |
| 429 | Yes | Exponential backoff |
| 5xx | Yes | Retry up to 3 times |

---

## Pagination

Tasks and blocks use **cursor pagination**: pass `after` set to the last item's `id` to get the next page; stop when a page comes back smaller than `limit`. (Members, conversations, and projects use `page` / `limit` instead — see the [Action API v2 Reference](api-v2-reference.md#pagination).)

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

---

## Testing & Mocking

### Environment-based client

Wrap the helper so tests don't hit the network:

```typescript
// client.ts
export const callTaskade =
  process.env.NODE_ENV === "test" ? createMockTaskade() : taskade;
```

### Mock with vitest / jest

Since every call goes through one `fetch`, stub `fetch` (or the `taskade` helper) and return a `{ ok: true, ... }` body:

```typescript
import { vi } from "vitest";

const callTaskade = vi.fn().mockResolvedValue({
  ok: true,
  summary: "mocked response",
});

// test code using callTaskade("promptAgent", { ... })
```

### Integration tests with a sandbox workspace

Create a dedicated "SDK Test" workspace with a scoped token. Your CI pipeline runs against the live API on this isolated workspace — avoiding production pollution while verifying real behavior.

---

## Related

{% content-ref url="sdk-quickstart.md" %}
[sdk-quickstart.md](sdk-quickstart.md)
{% endcontent-ref %}

{% content-ref url="api-v2-reference.md" %}
[api-v2-reference.md](api-v2-reference.md)
{% endcontent-ref %}

{% content-ref url="webhooks.md" %}
[webhooks.md](webhooks.md)
{% endcontent-ref %}

{% content-ref url="autonomous-agents.md" %}
[autonomous-agents.md](autonomous-agents.md)
{% endcontent-ref %}
