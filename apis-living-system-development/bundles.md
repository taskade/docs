---
description: >-
  Export and import complete Genesis app configurations as portable packages
  using the Bundles API.
---

# Bundles & App Kits

## What Are Bundles?

Bundles let you **export and import complete Genesis app configurations** as portable packages in Taskade's `.tsk` format. Think of a bundle as a snapshot of your entire app — agents, automations, projects, and all — packaged into a single transferable unit.

{% hint style="info" %}
Bundles require a **Pro plan or higher**.
{% endhint %}

***

## What's Included in a Bundle

A bundle captures everything that makes up your Genesis app:

| Component                | Details                                    |
| ------------------------ | ------------------------------------------ |
| **Projects**             | Tasks, custom fields, views, and structure |
| **AI Agents**            | System prompts and knowledge configuration |
| **Automation workflows** | Triggers, actions, and full flow logic     |
| **Templates**            | Reusable project and task templates        |
| **Media**                | Uploaded files and assets                  |
| **App files**            | Genesis frontend code                      |

***

## API Reference

### Export a Bundle

Retrieve a complete bundle for a given space.

```
GET /api/v1/bundles/{spaceId}/export
```

**Headers:**

```
Authorization: Bearer your_api_token_placeholder
```

**Response:**

```json
{
  "ok": true,
  "data": {
    "bundleData": { ... }
  }
}
```

The response contains a `SpaceBundleData` object with the full app configuration.

### Import a Bundle

Import a previously exported bundle into a workspace.

```
POST /api/v1/bundles/{workspaceId}/import
```

**Headers:**

```
Authorization: Bearer your_api_token_placeholder
Content-Type: application/json
```

**Request body:**

```json
{
  "bundleData": {
    "...SpaceBundleData"
  }
}
```

{% hint style="warning" %}
Importing a bundle creates new resources in the target workspace. It does not overwrite existing projects or agents.
{% endhint %}

***

## Use Cases

### Share Apps Across Workspaces

Export an app from one workspace and import it into another — perfect for rolling out the same setup to different teams.

### Create Backup Snapshots

Export a bundle before making major changes so you can restore the previous configuration if needed.

### Distribute Through the Community

Package your app as a `.tsk` bundle and share it with other Taskade users. They import it and have a fully working app in seconds.

### Template Creation

Build a well-structured app once, export it, and import it whenever you need a fresh copy as a starting point.

***

## Rate Limits

Bundle operations are rate-limited to **5 requests per 60 seconds** to ensure reliable processing of large exports and imports.

***

## The `.tsk` Format

`.tsk` is Taskade's portable app kit format for Genesis apps. It encapsulates all components listed above into a single structure that can be transferred between workspaces, accounts, and environments.

***

## Next Steps

* [Authentication](developers/authentication.md) — get your API token for bundle operations
* [Webhooks](webhooks.md) — automate actions when bundles are imported
* [MCP Connectors](/broken/pages/edGXixHEoPgFP9ulVcLu) — connect your imported apps to external services
