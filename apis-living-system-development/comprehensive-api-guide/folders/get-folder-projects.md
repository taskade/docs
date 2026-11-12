---
description: >-
  List the projects in a folder with the Taskade REST API v1 (GET /folders/{folderId}/projects).
---

# Get Folder Projects

Use this endpoint to list the projects in a folder (a subspace). The `folderId` can also be a workspace ID.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/folder-projects-get](https://www.taskade.com/docs/rest/folder-projects-get). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/projects" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
