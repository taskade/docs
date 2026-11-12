---
description: >-
  Download all media files of a space as a ZIP archive with the Taskade REST API v1 (GET /medias/spaces/{spaceId}/download).
---

# Download Media from Space

Use this endpoint to download all media files of a space as one ZIP archive, for example for a backup.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/media-download-all](https://www.taskade.com/docs/rest/media-download-all). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/medias/spaces/{spaceId}/download" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

A successful response streams a ZIP archive of every media file in the space. Errors return the standard JSON error object.

```bash
curl -L "https://www.taskade.com/api/v1/medias/spaces/$SPACE_ID/download" \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -o media.zip
```
