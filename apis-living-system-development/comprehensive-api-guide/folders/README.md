---
description: >-
  Folders — Taskade REST API v1 reference: list the projects, agents, media, and templates in a folder, and create or generate agents in a folder.
---

# Folders

{% hint style="info" %}
**Generated reference:** This reference is also at [taskade.com/docs/rest](https://www.taskade.com/docs/rest), generated from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

A **Subspace** is the top-level container for every AI-powered application you build on Taskade. It's more than just a folder; it's the complete, self-contained ecosystem for your app, holding its own Memory (projects), Intelligence (agents), and Execution (automations).

When you generate an app or create one manually, you are creating a Subspace. Everything related to that app—its data (Projects), its logic (Agents), and its workflows (Automations)—is organized within it.

The API calls a Subspace a folder, so each endpoint below takes a `folderId`. These endpoints manage the Subspaces in your workspace.

## Summary of Endpoints

### Get Folder Projects

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/projects" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Generate Agent in Folder

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agent-generate" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Create Agent in Folder

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agents" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Folder Agents

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agents" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Folder Media

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/medias" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Folder Project Templates

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/project-templates" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
