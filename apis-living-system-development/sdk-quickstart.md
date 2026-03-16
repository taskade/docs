---
description: >-
  The official Taskade TypeScript SDK — a lightweight, type-safe client for the
  Taskade API. Coming soon to npm.
---

# TypeScript SDK (Coming Soon)

{% hint style="warning" %}
**`@taskade/sdk` is currently in development** and not yet published on npm. The API surface and code examples on this page are a preview and may change before release. We will update this page when the SDK is publicly available.
{% endhint %}

## What You Will Get

The Taskade TypeScript SDK is designed to be the fastest way to integrate Taskade into your Node.js and TypeScript projects.

* **Zero dependencies** — no bloat, no supply-chain risk
* **ESM + CJS** — works everywhere, from Next.js to plain Node scripts
* **Node.js 18+** — uses native `fetch`, no polyfills needed
* **Full TypeScript types** — autocomplete and type safety out of the box

## Resource Modules

The SDK organizes the Taskade API into **8 resource modules** with **39 methods** total:

| Module       | Description                                      | Methods |
| ------------ | ------------------------------------------------ | ------- |
| `workspaces` | List and manage workspaces                       | 3       |
| `folders`    | Browse folders, create agents in folders         | 6       |
| `projects`   | Create, copy, complete, restore projects         | 12      |
| `tasks`      | Full task lifecycle — CRUD, dates, notes, fields | 10      |
| `agents`     | Manage agents, knowledge, conversations          | 8       |
| `bundles`    | Work with project templates and bundles          | 2       |
| `media`      | Upload, retrieve, and delete media files         | 3       |
| `me`         | Current user info and personal projects          | 2       |

## Preview: Initialize the Client

```typescript
import { Taskade } from '@taskade/sdk';

const taskade = new Taskade({
  apiKey: 'your_api_key_placeholder',
});
```

{% hint style="info" %}
Get your API key at [taskade.com/settings/api](https://www.taskade.com/settings/api). See the [Developer Home](developer-home.md#get-your-api-key) guide for step-by-step instructions.
{% endhint %}

## Preview: List Workspaces

```typescript
const workspaces = await taskade.workspaces.list();

for (const ws of workspaces.items) {
  console.log(ws.id, ws.name);
}
```

## Preview: Create a Task

```typescript
await taskade.tasks.create('project-id', {
  tasks: [{ text: 'Follow up with client' }],
  placement: 'afterbegin',
});
```

## Preview: Work with Agents

```typescript
// Get an agent
const agent = await taskade.agents.get('agent-id');

// Add a project to the agent's knowledge base
await taskade.agents.addProjectKnowledge('agent-id', {
  projectId: 'project-id',
});
```

{% hint style="warning" %}
All code examples above are **previews** based on the planned SDK design. Method signatures and return types may change before release.
{% endhint %}

## Use the REST API in the Meantime

Until the SDK is published, you can do everything above with the REST API directly:

```bash
# List your workspaces
curl -H "Authorization: Bearer your_api_key_placeholder" \
     https://www.taskade.com/api/v1/workspaces

# Create a task in a project
curl -X POST \
     -H "Authorization: Bearer your_api_key_placeholder" \
     -H "Content-Type: application/json" \
     -d '{"tasks": [{"text": "Follow up with client"}], "placement": "afterbegin"}' \
     https://www.taskade.com/api/v1/projects/PROJECT_ID/tasks
```

See the full [REST API Reference](developers/api.md) and [Comprehensive API Guide](comprehensive-api-guide/) for all available endpoints.

## Alternatives While You Wait

| Approach                                                    | Best For                                        |
| ----------------------------------------------------------- | ----------------------------------------------- |
| [REST API](developers/api.md)                               | Direct HTTP calls from any language             |
| [MCP Server](mcp-setup.md)                                  | Connecting AI tools (Claude, Cursor) to Taskade |
| [Automations](../genesis-living-system-builder/automation/) | No-code workflow automation                     |

## Stay Updated

We will announce the SDK release through:

* This documentation page
* The [Taskade changelog](/broken/pages/NWtKPt6YZYnADGQROqpB)
* [taskade.com/community](https://www.taskade.com/community)

{% hint style="success" %}
**Want early access?** Reach out at [taskade.com/contact](https://www.taskade.com/contact) and mention the TypeScript SDK.
{% endhint %}
