---
description: >-
  Complete a task with the Taskade REST API v1 (POST /projects/{projectId}/tasks/{taskId}/complete).
---

# Complete Task

Use this endpoint to complete a task in a project. To undo it, use [Uncomplete Task](uncomplete-task.md).

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/task-complete](https://www.taskade.com/docs/rest/task-complete). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/tasks/{taskId}/complete" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
