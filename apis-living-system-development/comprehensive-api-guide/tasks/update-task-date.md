---
description: >-
  Create or update the date of a task with the Taskade REST API v1 (PUT /projects/{projectId}/tasks/{taskId}/date).
---

# Update Task Date

Use this endpoint to set the date of a task. The `start` date is required, and the `end` date is optional.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/task-put-date](https://www.taskade.com/docs/rest/task-put-date). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/tasks/{taskId}/date" method="put" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
