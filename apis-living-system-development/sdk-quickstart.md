---
description: >-
  The TypeScript SDK for Taskade is in preview. This page shows how to call the API today, with no SDK.
---

# TypeScript SDK

Call the Taskade API from TypeScript today with the built-in `fetch`. The `@taskade/sdk` client is a preview and is not on npm yet, so this page shows the calls without it.

{% hint style="warning" %}
**Important:** `@taskade/sdk` is not published on the public npm registry. `npm install @taskade/sdk` returns `404 Not Found` today. Use `fetch`, as the examples on this page do.
{% endhint %}

## Before you start

You need a token and a runtime that has `fetch`.

- A personal access token. See [Personal access tokens](developers/personal-tokens.md).
- Node.js 18 or later, which includes `fetch`. TypeScript is optional. Every example also runs as JavaScript.
- About five minutes.

Save the token in your terminal:

```bash
export TASKADE_TOKEN="tskdp_your_token_here"
```

{% hint style="warning" %}
**Warning:** Keep the token out of source code and out of the browser. A personal access token can do everything that your account can do.
{% endhint %}

## Call the API today (no SDK required)

One `fetch` call reaches either API. REST API v1 uses resource paths. Action API v2 sends most operations as a `POST` to `/{operation}`. The binary downloads and the webhook list, get, and delete calls use `GET` or `DELETE`.

{% tabs %}

{% tab title="REST API v1" %}

#### REST API v1

List your projects with `GET /me/projects`:

```typescript
const res = await fetch("https://www.taskade.com/api/v1/me/projects", {
  headers: { Authorization: `Bearer ${process.env.TASKADE_TOKEN}` },
});
const data = await res.json();
if (!data.ok) throw new Error(`${res.status} ${data.code}`);
console.log(data.items);
```

The response lists each project with its `id` and `name`:

```json
{
  "ok": true,
  "items": [
    { "id": "Pj8sK2nV4wQx6ZbE", "name": "Q2 Roadmap", "icon": null, "completed": false }
  ]
}
```

{% endtab %}

{% tab title="Action API v2" %}

#### Action API v2

List your workspaces with `POST /listSpaces`. The body can be an empty object:

```typescript
const res = await fetch("https://www.taskade.com/api/v2/listSpaces", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({}),
});
const data = await res.json();
if (!data.ok) throw new Error(`${res.status} ${data.code}`);
console.log(data.items);
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

{% endtab %}

{% endtabs %}

### Add a typed wrapper

Most integrations need only one small helper for Action API v2. It sends the operation, and it throws on an `ok: false` body:

```typescript
type TaskadeError = { ok: false; message: string; code: string; statusMessage: string };

export async function taskade<T>(operation: string, body: unknown = {}): Promise<T> {
  const res = await fetch(`https://www.taskade.com/api/v2/${operation}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok || data.ok === false) {
    const err = data as TaskadeError;
    throw Object.assign(new Error(`${operation} failed: ${res.status} ${err.code}`), {
      status: res.status,
      code: err.code,
    });
  }
  return data as T;
}

type Space = { id: string; name: string };
const { items } = await taskade<{ ok: true; items: Space[] }>("listSpaces");
```

`items` holds the same array as the `listSpaces` response above. Branch on `status` and `code`. Do not parse `message`.

## cURL and Python

Make the same calls from a shell or from Python. Pick the tab for your tool.

{% tabs %}

{% tab title="cURL" %}

#### cURL

List your projects (REST API v1):

```bash
curl -s "https://www.taskade.com/api/v1/me/projects" \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

```json
{
  "ok": true,
  "items": [
    { "id": "Pj8sK2nV4wQx6ZbE", "name": "Q2 Roadmap", "icon": null, "completed": false }
  ]
}
```

Prompt an agent (Action API v2). Get `SPACE_ID` from `listSpaces` and `AGENT_ID` from `listAgents`:

```bash
curl -s -X POST "https://www.taskade.com/api/v2/promptAgent" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"spaceId":"'"$SPACE_ID"'","agentId":"'"$AGENT_ID"'","prompt":"Summarize standup notes"}'
```

```json
{
  "ok": true,
  "summary": "Standup summary: the API docs shipped, and the SDK cookbook is in review."
}
```

{% endtab %}

{% tab title="Python" %}

#### Python

Python 3 with the `requests` package:

```python
import os
import requests

headers = {"Authorization": f"Bearer {os.environ['TASKADE_TOKEN']}"}

# List your projects (REST API v1)
projects = requests.get(
    "https://www.taskade.com/api/v1/me/projects",
    headers=headers,
).json()
print(projects["items"])

# Prompt an agent (Action API v2)
result = requests.post(
    "https://www.taskade.com/api/v2/promptAgent",
    headers=headers,
    json={
        "spaceId": os.environ["SPACE_ID"],
        "agentId": os.environ["AGENT_ID"],
        "prompt": "Summarize standup notes",
    },
).json()
print(result["summary"])
```

The two calls return the same JSON as the cURL tab: an `items` array, then an object with `summary`.

{% endtab %}

{% endtabs %}

## What the SDK will look like

`@taskade/sdk` is a **generated client** for the [Action API v2](api-v2-reference.md). Do not install it yet. The code below shows the planned shape only.

When it ships, it will provide `HttpClient` and `TaskadePublicApi`. Its methods map directly to v2 operations:

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
**Note:** Method names match the v2 operations: `listSpaces`, `createProject`, `promptAgent`, `exportBundle`, and more. The preview client does not cover every v2 operation. For example, it has no task-write or webhook-registration methods.
{% endhint %}

For an operation that the preview does not cover, call it over HTTPS with the wrapper above. See the [Action API v2 reference](api-v2-reference.md) for the full list and the request shapes.

## Fix common errors

Match what you see to a fix.

| What you see | Cause | Fix |
| --- | --- | --- |
| `npm install @taskade/sdk` returns `404 Not Found` | The package is not on the public npm registry | Use `fetch` and the `taskade()` wrapper on this page |
| `"code": "UNAUTHORIZED"` | The token is missing, wrong, or revoked | Send `Authorization: Bearer $TASKADE_TOKEN`. Make sure that the variable is set in the same terminal |
| `"code": "FST_ERR_VALIDATION"` | A body field is missing or has the wrong type | Read `message`, fix each field that it names, then send the request again |
| `"code": "TOO_MANY_REQUESTS"` | You hit a rate limit | Wait for the number of seconds in the `Retry-After` header, then retry |
| `ReferenceError: fetch is not defined` | The Node.js version is older than 18 | Upgrade to Node.js 18 or later |

## Next steps

- [REST API v1 guide](comprehensive-api-guide/README.md): full task create, update, and complete calls.
- [Action API v2 guide](api-v2-reference.md): every operation that the SDK will wrap.
- [Authentication](developers/authentication.md): personal access tokens and OAuth 2.0.
- [SDK Cookbook](sdk-cookbook.md): retries, pagination, webhooks, and tests.
- [Workspace MCP](workspace-mcp.md): connect AI tools to your workspace.

---

_This page is also published at [taskade.com/docs/guides/typescript-sdk](https://www.taskade.com/docs/guides/typescript-sdk)._
