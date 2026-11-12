---
description: >-
  Generate an agent in a folder from a text prompt with the Taskade REST API v1 (POST /folders/{folderId}/agent-generate).
---

# Generate Agent in Folder

Use this endpoint to generate an agent from a text prompt in a folder (a subspace).

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/folder-agent-generate](https://www.taskade.com/docs/rest/folder-agent-generate). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agent-generate" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
