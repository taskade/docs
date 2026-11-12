---
description: >-
  Remove an assignee from a task with the Taskade REST API v1 (DELETE /projects/{projectId}/tasks/{taskId}/assignees/{assigneeHandle}).
---

# Delete Task Assignees

Use this endpoint to remove one person from the assignees of a task.

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/task-delete-assignees](https://www.taskade.com/docs/rest/task-delete-assignees). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/tasks/{taskId}/assignees/{assigneeHandle}" method="delete" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
