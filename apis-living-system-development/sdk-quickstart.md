---
description: >-
  The TypeScript SDK for Taskade is in preview. Here's how to call the API today
  with plain HTTP, and what the generated client will look like.
---

# TypeScript SDK (Preview)

{% hint style="warning" %}
**The `@taskade/sdk` package is in preview and not yet published to the public npm registry.** Until it ships, call the API directly over HTTP — every Taskade endpoint is a plain HTTPS request and works from any language or runtime. This page shows both.
{% endhint %}

## Call the API today (no SDK required)

Authenticate with a [personal access token](developers/authentication.md) and hit either API directly.

{% tabs %}
{% tab title="REST API v1" %}
```typescript
const token = process.env.TASKADE_TOKEN!;

// List your projects (RESTful v1)
const res = await fetch("https://www.taskade.com/api/v1/me/projects", {
  headers: { Authorization: `Bearer ${token}` },
});
const { items } = await res.json();
```
{% endtab %}

{% tab title="Action API v2" %}
```typescript
const token = process.env.TASKADE_TOKEN!;

// Prompt an agent (action-based v2 — every call is a POST)
const res = await fetch("https://www.taskade.com/api/v2/promptAgent", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ spaceId, agentId, prompt: "Summarize standup notes" }),
});
const { summary } = await res.json();
```
{% endtab %}
{% endtabs %}

A tiny typed wrapper is all most integrations need:

```typescript
async function taskade(operation: string, body: unknown) {
  const res = await fetch(`https://www.taskade.com/api/v2/${operation}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`${operation} failed: ${res.status}`);
  return res.json();
}

const { items } = await taskade("listSpaces", {});
```

## cURL & Python

{% tabs %}
{% tab title="cURL" %}
```bash
export TASKADE_TOKEN=YOUR_TOKEN

# List your projects (REST API v1)
curl -s \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  "https://www.taskade.com/api/v1/me/projects"

# Prompt an agent (Action API v2)
curl -s -X POST \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"spaceId":"SPACE_ID","agentId":"AGENT_ID","prompt":"Summarize standup notes"}' \
  "https://www.taskade.com/api/v2/promptAgent"
```
{% endtab %}

{% tab title="Python" %}
```python
import os
import requests

token = os.environ["TASKADE_TOKEN"]
headers = {"Authorization": f"Bearer {token}"}

# List your projects (REST API v1)
items = requests.get(
    "https://www.taskade.com/api/v1/me/projects",
    headers=headers,
).json()["items"]

# Prompt an agent (Action API v2)
result = requests.post(
    "https://www.taskade.com/api/v2/promptAgent",
    headers=headers,
    json={
        "spaceId": "SPACE_ID",
        "agentId": "AGENT_ID",
        "prompt": "Summarize standup notes",
    },
).json()
```
{% endtab %}
{% endtabs %}

## What the SDK will look like

`@taskade/sdk` is a **generated client** for the [Action API v2](api-v2-reference.md). When it's published you'll construct an `HttpClient` (which carries your token) and a `TaskadePublicApi` instance whose methods map 1:1 to the v2 operations:

```typescript
import { HttpClient, TaskadePublicApi } from "@taskade/sdk";

const http = new HttpClient({
  baseUrl: "https://www.taskade.com/api/v2",
  securityWorker: () => ({
    headers: { Authorization: `Bearer ${process.env.TASKADE_TOKEN}` },
  }),
});
const taskade = new TaskadePublicApi(http);

const { data } = await taskade.promptAgent({ spaceId, agentId, prompt: "Hi" });
// data is the response body: { ok: true, summary: "..." }
```

{% hint style="info" %}
Method names match the v2 operations exactly — `listSpaces`, `createProject`, `promptAgent`, `exportBundle`, and so on. See the [Action API v2 Reference](api-v2-reference.md) for the full list and request shapes.
{% endhint %}

## Resources

| Resource | Description |
| --- | --- |
| [REST API v1 Reference](comprehensive-api-guide/README.md) | Complete RESTful endpoint docs (full task CRUD) |
| [Action API v2 Reference](api-v2-reference.md) | The action-based API the SDK wraps |
| [Authentication](developers/authentication.md) | Personal access tokens and OAuth 2.0 |
| [Workspace MCP](workspace-mcp.md) | Connect AI tools to your workspace |
