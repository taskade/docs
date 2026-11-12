---
description: >-
  Complete a project with the Taskade REST API v1 (POST /projects/{projectId}/complete).
---

# Complete Project

Use this endpoint to complete a project. Taskade moves a completed project to the archive. To make it active again, use [Restore Project](restore-project.md).

{% hint style="info" %}
**Generated reference:** This endpoint is also at [taskade.com/docs/rest/project-complete](https://www.taskade.com/docs/rest/project-complete). Taskade generates that page from the live OpenAPI spec. AI agents can do most of this work through the [hosted Taskade MCP server](../../genesis-app-mcp.md).
{% endhint %}

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/complete" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
