---
description: >-
  Download Media from Space — Taskade REST API v1 reference: GET /medias/spaces/{spaceId}/download. Parameters, authentication, and response schema.
---

# Download Media from Space

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/media-download-all](https://www.taskade.com/docs/rest/media-download-all), generated from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/medias/spaces/{spaceId}/download" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

A successful response streams a ZIP archive of every media file in the space. Errors return the standard JSON error object.
