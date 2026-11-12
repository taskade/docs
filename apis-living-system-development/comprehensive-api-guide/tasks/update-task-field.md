---
description: >-
  Create or update the value of one field of a task with the Taskade REST API v1 (PUT /projects/{projectId}/tasks/{taskId}/fields/{fieldId}).
---

# Update Task Field

Use this endpoint to set the value of one field of a task. If the value does not exist, the endpoint creates it.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/task-field-value-put](https://www.taskade.com/docs/rest/task-field-value-put). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/tasks/{taskId}/fields/{fieldId}" method="put" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
