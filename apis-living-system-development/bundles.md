---
description: >-
  Export and import complete Genesis apps and workspaces as portable bundles
  using the Action API v2.
---

# Bundles & App Kits

## What Are Bundles?

A **bundle** is a portable snapshot of a workspace's building blocks — projects, agents, automations, templates, media, and Genesis app source — packaged so you can move it between workspaces, accounts, and environments. Bundles power app sharing, backups, and the community App Kits.

Bundles come in two flavors:

| Flavor | Format | Includes media? | Use when |
| --- | --- | --- | --- |
| **JSON** (`SpaceBundleData`) | application/json | No (media items are skipped) | Programmatic export/import, diffing, version control |
| **ZIP / `.tsk`** | binary archive | Yes (media files included) | Full-fidelity transfer, backups, distribution |

{% hint style="info" %}
Bundle endpoints are part of the [Action API v2](api-v2-reference.md). Authenticate with a [personal access token](developers/authentication.md). Exporting requires the bundle permission on the space; importing is gated by your plan (see [Plan Limits](#plan-limits)).
{% endhint %}

***

## What's Included in a Bundle

| Component | Details |
| --- | --- |
| **Projects** | Tasks, custom fields, views, and structure |
| **Templates** | Reusable project/task templates |
| **AI Agents** | System prompts, tone, and knowledge configuration |
| **Automations** | Triggers, actions, and full flow logic |
| **Genesis apps** | App source files (`apps/{id}/…`) |
| **Media** | Uploaded files and assets (ZIP/`.tsk` only) |

***

## API Reference

### Export a bundle (JSON)

**`POST /api/v2/exportBundle`** — returns the full `SpaceBundleData` object (no binary media).

{% tabs %}
{% tab title="cURL" %}
```bash
curl -X POST https://www.taskade.com/api/v2/exportBundle \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "spaceId": "SPACE_ID" }'
```
{% endtab %}

{% tab title="TypeScript" %}
```typescript
const res = await fetch("https://www.taskade.com/api/v2/exportBundle", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ spaceId: "SPACE_ID" }),
});
const { item: bundleData } = await res.json();
```
{% endtab %}
{% endtabs %}

**Response:**

```json
{
  "ok": true,
  "item": {
    "version": "1",
    "name": "Sales CRM",
    "description": "Pipeline + outreach agent",
    "items": {
      "proj_abc": { "type": "space-bundle-project-item", "projectId": "proj_abc", "root": { } },
      "agent_xyz": { "type": "space-bundle-agent-item", "agentId": "agent_xyz", "template": { } }
    }
  }
}
```

### Import a bundle (JSON)

**`POST /api/v2/importBundle`** — installs a `SpaceBundleData` object into a target workspace.

```bash
curl -X POST https://www.taskade.com/api/v2/importBundle \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{ "workspaceId": "WORKSPACE_ID", "bundleData": { "version": "1", "items": { } } }'
```

**Response** reports what was created:

```json
{
  "ok": true,
  "item": {
    "id": "WORKSPACE_ID",
    "projectCount": 3,
    "flowCount": 1,
    "agentCount": 2,
    "templateCount": 0,
    "mediaCount": 0,
    "appCount": 1
  }
}
```

{% hint style="warning" %}
The JSON import **skips media items** — use the ZIP/`.tsk` flavor to carry media. Importing always **creates new resources**; it never overwrites existing projects or agents.
{% endhint %}

### Export / import as ZIP (`.tsk`)

For full-fidelity transfer including media, use the binary endpoints:

```bash
# Export as a binary .tsk archive (or ?format=zip)
curl -X GET "https://www.taskade.com/api/v2/bundles/SPACE_ID/export/zip?format=tsk" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  --output workspace.tsk

# Import a .tsk / .zip archive (raw binary body, max 50 MB)
curl -X POST "https://www.taskade.com/api/v2/importBundleZip?workspaceId=WORKSPACE_ID" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/zip" \
  --data-binary @workspace.tsk
```

***

## The `SpaceBundleData` Schema

The JSON bundle is a flat map of items keyed by id:

```typescript
interface SpaceBundleData {
  version: "1";
  name?: string;
  description?: string;
  items: Record<string, SpaceBundleDataItem>;
}

type SpaceBundleDataItem =
  | { type: "space-bundle-project-item";  projectId: string; root: object; preferences?: object }
  | { type: "space-bundle-template-item"; projectId: string; root: object }
  | { type: "space-bundle-agent-item";    agentId: string;   template: object; dependsOn?: string[] }
  | { type: "space-bundle-flow-item";     flowId: string;    template: object; dependsOn?: string[] }
  | { type: "space-bundle-app-item";      appId: string;     files: object; branding?: object }
  | { type: "space-bundle-media-item";    mediaId: string };
```

## The `.tsk` Format

A `.tsk` file is a **ZIP archive** with a manifest and type-based directories:

```
manifest.json          # { version, exportedAt, spaceId, spaceMetadata, name?, description? }
projects/{id}.json
templates/{id}.json
agents/{id}.json
automations/{id}.json
apps/{id}/…             # Genesis app source as a real directory tree
media/{mediaId}/metadata.json
media/{mediaId}/{originalFilename}
```

Two manifest format versions exist: **1.0** stored apps as a single JSON blob; **1.1** (current export) spreads app source as a real directory tree. Import accepts both.

***

## Plan Limits

Imports are checked per item type against your plan:

| Item | Free | Paid |
| --- | --- | --- |
| Agents | 1 | Varies by plan |
| Genesis apps | 3 | Unlimited |
| Automations (flows) | — (paid only) | Enabled |

The public ZIP import is limited to **50 MB** per archive. Bundle operations are rate-limited to protect large transfers.

***

## Use Cases

- **Share apps across workspaces** — export from one workspace, import into another.
- **Back up before big changes** — snapshot a workspace and restore later.
- **Distribute through the community** — publish a `.tsk` so others import a working app in seconds.
- **Template creation** — build once, export, and reimport for fresh copies.

***

## Next Steps

* [Action API v2 Reference](api-v2-reference.md) — the full v2 operation set
* [Authentication](developers/authentication.md) — get your API token
* [MCP Connectors](workspace-mcp-advanced.md#mcp-connectors) — connect your imported apps to external services
