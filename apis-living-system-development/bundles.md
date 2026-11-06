---
description: >-
  Export and import complete Taskade Genesis apps and workspaces as portable bundles.
---

# Bundles & App Kits

Export a whole Taskade Genesis app or workspace as a bundle, then import it into another workspace with the REST API or the Action API. A **bundle** is a portable snapshot of projects, agents, automations, templates, media, and app source.

You can move bundles between workspaces, accounts, and environments. Bundles support app sharing, backups, and community App Kits.

Bundles come in two flavors:

| Flavor | Format | Includes media? | Use when |
| --- | --- | --- | --- |
| **JSON** (`SpaceBundleData`) | application/json | No (a JSON import that contains media items returns `400`) | Programmatic export/import, diffing, version control |
| **ZIP / `.tsk`** | binary archive | Yes (media files included) | Full-fidelity transfer, backups, distribution |

## Before you start

- A personal access token from [taskade.com/settings/api](https://www.taskade.com/settings/api). See [Authentication](developers/authentication.md).
- To export, a source workspace on the **Pro plan or higher**, and permission to create a bundle in it. Free and Starter workspaces get `402`.
- To import, a target workspace where you can create projects, agents, and automations. The plan limits in [Import behavior](#import-behavior) apply.
- `curl` in a terminal.

Save the token and the workspace IDs in your terminal:

```bash
export TASKADE_TOKEN="tskdp_your_token_here"
export SPACE_ID="your_source_workspace_id"
export WORKSPACE_ID="your_target_workspace_id"
```

## What a bundle includes

| Component | Details |
| --- | --- |
| **Projects** | Tasks, custom fields, views, and structure |
| **Templates** | Reusable project/task templates |
| **AI Agents** | System prompts, tone, and knowledge configuration |
| **Agent teams** | Team membership and member roles, resolved to the agents carried in the same bundle |
| **Automations** | Automation triggers, actions, and settings |
| **Taskade Genesis apps** | App files stored as a directory tree under `apps/{id}/` |
| **Media** | Uploaded files and assets (ZIP/`.tsk` only) |

***

## Bundle endpoints

Both APIs carry the same four bundle operations. This page shows the Action API v2 calls. Each v1 endpoint has its own generated reference page:

- **Export as JSON**: REST API v1 [`GET /bundles/{spaceId}/export`](https://www.taskade.com/docs/rest/bundle-export). Action API v2 [`POST /exportBundle`](https://www.taskade.com/docs/actions/export-bundle).
- **Export as ZIP or `.tsk`**: REST API v1 [`GET /bundles/{spaceId}/export/zip`](https://www.taskade.com/docs/rest/bundle-export-zip). Action API v2 [`GET /bundles/{spaceId}/export/zip`](https://www.taskade.com/docs/actions/bundles-export-zip).
- **Import JSON**: REST API v1 [`POST /bundles/{workspaceId}/import`](https://www.taskade.com/docs/rest/bundle-import). Action API v2 [`POST /importBundle`](https://www.taskade.com/docs/actions/import-bundle).
- **Import ZIP or `.tsk`**: REST API v1 [`POST /bundles/{workspaceId}/import/zip`](https://www.taskade.com/docs/rest/bundle-import-zip). Action API v2 [`POST /importBundleZip`](https://www.taskade.com/docs/actions/import-bundle-zip).

A successful ZIP export streams the binary file. Errors return the standard JSON error object.

### Export a bundle as JSON

**`POST /api/v2/exportBundle`** returns the `SpaceBundleData` object with `version` and `items`. Binary media is not included.

{% tabs %}

{% tab title="cURL" %}

#### cURL

```bash
curl -s -X POST https://www.taskade.com/api/v2/exportBundle \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"spaceId\": \"$SPACE_ID\"}" \
  --output bundle.json
```

{% endtab %}

{% tab title="TypeScript" %}

#### TypeScript

```typescript
const res = await fetch("https://www.taskade.com/api/v2/exportBundle", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ spaceId: process.env.SPACE_ID }),
});
const { item: bundleData } = await res.json();
```

{% endtab %}

{% endtabs %}

**Response:** the `item` holds exactly two keys, `version` and `items`. `items` is a map of bundle items keyed by ID:

```json
{
  "ok": true,
  "item": {
    "version": "1",
    "items": {
      "Pj8sK2nV4wQx6ZbE": {
        "type": "space-bundle-project-item",
        "rank": "a0",
        "projectId": "Pj8sK2nV4wQx6ZbE",
        "root": {}
      },
      "Ag2bN6mK9pL4xQ7w": {
        "type": "space-bundle-agent-item",
        "rank": "a1",
        "agentId": "Ag2bN6mK9pL4xQ7w",
        "template": {}
      }
    }
  }
}
```

In a real export, `root` holds the full task tree of the project, and `template` holds the full agent definition. The example leaves them empty to stay short.

{% hint style="info" %}
**Note:** The JSON export has no bundle `name`, `description`, or `metaData`. The JSON import drops those keys if you send them. A `.zip` or `.tsk` export carries the name and description in `manifest.json`.
{% endhint %}

A workspace on the Free or Starter plan gets `402`:

```json
{
  "ok": false,
  "message": "Exporting app bundles requires a paid plan (Pro or higher). Upgrade to export this app.",
  "code": "PAYMENT_REQUIRED",
  "statusMessage": "Payment Required",
  "featureId": "space.bundle.export"
}
```

### Import a bundle as JSON

**`POST /api/v2/importBundle`** installs a `SpaceBundleData` object into a target workspace. The body wraps the bundle in `bundleData`, with `version` and `items`. This example reads the `item` from the export that you saved in `bundle.json`, and it needs `jq`:

```bash
jq --arg ws "$WORKSPACE_ID" '{workspaceId: $ws, bundleData: .item}' bundle.json \
  | curl -s -X POST https://www.taskade.com/api/v2/importBundle \
      -H "Authorization: Bearer $TASKADE_TOKEN" \
      -H "Content-Type: application/json" \
      --data @-
```

**Response** reports what was created:

```json
{
  "ok": true,
  "item": {
    "id": "Bi2mK8rT4vQn6YzA",
    "projectCount": 3,
    "flowCount": 1,
    "agentCount": 2,
    "templateCount": 0,
    "mediaCount": 0,
    "appCount": 1
  }
}
```

The `id` identifies this import record, not the target workspace.

{% hint style="warning" %}
**Warning:** The JSON import **rejects a bundle that contains media items** with `400`. Remove the media items first, or use ZIP or `.tsk` to transfer media.
{% endhint %}

Import always **creates new resources**. It never overwrites existing projects or agents.

### Export and import as ZIP or `.tsk`

For a full-fidelity transfer that includes media, use the binary endpoints:

```bash
# Export as a binary archive. format is "zip" (default) or "tsk".
curl -s "https://www.taskade.com/api/v2/bundles/$SPACE_ID/export/zip?format=tsk" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  --output workspace.tsk

# Import a .tsk or .zip archive as a raw binary body.
# Content-Type: application/zip, application/octet-stream, or application/x-tsk
curl -s -X POST "https://www.taskade.com/api/v2/importBundleZip?workspaceId=$WORKSPACE_ID" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/zip" \
  --data-binary @workspace.tsk
```

The ZIP import returns the same `{ "ok": true, "item": { "id", "projectCount", ... } }` summary as the JSON import.

***

## The `SpaceBundleData` schema

The JSON bundle is a flat map of items keyed by ID. The JSON export returns this shape, and the JSON import accepts it:

```typescript
interface SpaceBundleData {
  version: "1";
  items: Record<string, SpaceBundleDataItem>;
}

// Every item carries these two base fields.
interface SpaceBundleDataItemBase {
  rank: string;
  dependsOn?: string[];
}

type SpaceBundleDataItem = SpaceBundleDataItemBase & (
  | { type: "space-bundle-project-item";    projectId: string; root: object; preferences?: object; pinnedAt?: string }
  | { type: "space-bundle-template-item";   projectId: string; root: object; preferences?: object; pinnedAt?: string }
  | { type: "space-bundle-agent-item";      agentId: string;   template: object }
  | { type: "space-bundle-agent-team-item"; agentTeamId: string; name: string; data?: object; agentIds: string[] }
  | { type: "space-bundle-flow-item";       flowId: string;    template: object }
  | { type: "space-bundle-app-item";        appId: string;     files: object; branding?: object }
  | { type: "space-bundle-media-item";      mediaId: string }
);
```

### Agent team items

`agentIds` on an agent-team item holds **source** agent ids. The installer remaps every id through the same id map it uses for the other items.

The installer drops a member whose agent did not come along in the bundle. As a result, a partial bundle yields a smaller team, not a dangling membership.

Export an agent team together with every agent it names.

The `data` object of an agent-team item can hold `members`, a map from a source agent id to that member's role:

```json
{
  "members": {
    "<source agent id>": { "role": "Researcher" }
  }
}
```

A role is one line of at most 60 characters. The installer moves each role to the new agent id. It joins a role with line breaks into one line. It drops a role that is then empty or longer than 60 characters, and the role of an agent that is not in `agentIds` or did not come along. The rest of the team still installs.

## The `.tsk` format

A `.tsk` file is a **ZIP archive** with a manifest and type-based directories:

```text
manifest.json          # { version, exportedAt, spaceId, spaceMetadata, name?, description? }
projects/{id}.json
templates/{id}.json
agents/{id}.json
automations/{id}.json
apps/{id}/…             # Taskade Genesis app source as a directory tree
agent-teams/{id}.json
media/{mediaId}/metadata.json
media/{mediaId}/{originalFilename}
```

Two manifest versions exist. Version **1.0** stores app source as one JSON object.

Version **1.1**, the current export version, stores app source as a directory tree. Import accepts both versions.

Version 1.1 archives can include agent teams under `agent-teams/{id}.json`. The importer remaps their source agent IDs in the same way as JSON bundle imports.

***

## Import behavior

Import creates new resources. It does not overwrite matching projects, agents, automations, or apps.

The importer validates each item against the target workspace's current access and limits. If an item cannot be created, use the returned error `code` to select the next step. Do not parse the human-readable message.

The Action API checks the target workspace's plan before an import creates anything. A bundle that goes over a limit returns `402` with `code: "PAYMENT_REQUIRED"`:

| Bundle content | Limit on the target workspace |
| --- | --- |
| AI agents | Free holds 1 agent. Starter holds 3 agents at the base level, and a higher plan level multiplies that. Pro and above have no limit |
| Taskade Genesis apps | Free holds 3 apps. Starter and above have no limit |
| Automations | Every paid plan. A Free workspace cannot import them |
| Agent teams | Pro and above |

A bundle of only projects, templates, and media imports on every plan. A ZIP or `.tsk` upload can be at most **50 MB**.

Export requires permission to create a bundle in the source workspace.

Read the live `X-Rate-Limit-*` response headers for the current request budget. See [Rate Limits](api-v2-reference.md#rate-limits).

## Fix common errors

| What you see | Cause | Fix |
| --- | --- | --- |
| `Exporting app bundles requires a paid plan (Pro or higher). Upgrade to export this app.` | The source workspace is on Free or Starter | Upgrade the source workspace to Pro or higher. |
| `This bundle contains media items which cannot be imported via the JSON endpoint. Remove media items from the bundle and upload them separately via the media upload endpoint.` | The JSON import got a media item | Remove the media items, or use the ZIP or `.tsk` import. |
| `Invalid ZIP file.` | The body is not a ZIP archive | Send the file with `--data-binary @file.tsk`, not `-d`. |
| `Invalid bundle ZIP. Ensure the archive contains valid bundle data from a Taskade export.` | The archive is not a Taskade bundle | Export the archive from Taskade again. |
| `Importing N agent(s) would exceed your N agent limit. Upgrade to increase your limit.` | The target workspace has no room for the agents | Upgrade the target workspace, or remove agents from the bundle. |
| `Importing N app(s) would exceed your N app limit. Upgrade to increase your limit.` | The target workspace has no room for the apps | Upgrade the target workspace, or remove apps from the bundle. |
| `Automations require a paid plan. Upgrade to import automation workflows.` | The target workspace is on Free | Upgrade the target workspace, or remove the automations. |
| `AI Teams require a paid plan. Upgrade to import agent teams.` | The target plan does not include agent teams | Upgrade the target workspace, or remove the agent-team items. |

## Use cases

- **Share apps across workspaces.** Export from one workspace. Import into another.
- **Back up before big changes.** Snapshot a workspace. Restore it later.
- **Distribute through the community.** Publish a `.tsk` so others can import a working app.
- **Create templates.** Build once. Export the bundle. Import it for a fresh copy.

***

## Next steps

* [Action API guide](api-v2-reference.md): the full v2 operation set.
* [Authentication](developers/authentication.md): get your API token.
* [REST API guide](comprehensive-api-guide/README.md): the v1 bundle endpoints and rate limits.
* [Outbound MCP](workspace-mcp-advanced.md#outbound-mcp-the-mcp-client-connector): call a remote MCP server's tools from an automation in your imported app.

---

_This page is also published at [taskade.com/docs/guides/bundles](https://www.taskade.com/docs/guides/bundles)._
