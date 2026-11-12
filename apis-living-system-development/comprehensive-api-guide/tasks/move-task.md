---
description: >-
  Move a task in a project with the Taskade REST API v1 (PUT /projects/{projectId}/tasks/{taskId}/move).
---

# Move Task

Use this endpoint to move a task to a new position in the same project, relative to a target task.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/task-move](https://www.taskade.com/docs/rest/task-move). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/tasks/{taskId}/move" method="put" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
