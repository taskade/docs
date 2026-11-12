---
description: >-
  Download the content of a media file with the Taskade REST API v1 (GET /medias/{mediaId}/download).
---

# Download Media

Use this endpoint to download the content of one media file.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/media-download](https://www.taskade.com/docs/rest/media-download). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/medias/{mediaId}/download" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

A successful response streams the binary content of the file. Errors return the standard JSON error object.
