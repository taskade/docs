---
description: >-
  Download Media — Taskade REST API v1 reference: GET /medias/{mediaId}/download. Parameters, authentication, and response schema.
---

# Download Media

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/media-download](https://www.taskade.com/docs/rest/media-download), generated from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/medias/{mediaId}/download" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

A successful response streams the file's binary content; errors return the standard JSON error object.
