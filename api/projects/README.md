# Knowledge (Projects)

The **Knowledge Layer** is the foundation of every intelligent app you build in Taskade. This is the structured memory that your AI Agents use to understand context, make decisions, and provide insightful responses. This layer is powered by **Taskade Projects**.

A Project is a flexible, powerful resource that can be used as:

*   A structured database for a CRM or a directory.
*   A content repository for a knowledge base or documentation site.
*   A task list for a project management system.
*   A queue for processing data in an automation workflow.

These endpoints allow you to create, read, update, and delete the Projects that form the Knowledge Layer of your applications.

### Learn More

*   **[Agent Knowledge & Memory ›](https://help.taskade.com/en/articles/9495190-agent-knowledge-memory)**

## Summary of Endpoints

### Get Project
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Complete Project
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/complete" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Restore Project
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/restore" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Copy Project
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/copy" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Create Project
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Create From Template
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/from-template" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Project Members
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/members" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Project Fields
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/fields" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Share Link
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/shareLink" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Update Share Link
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/shareLink" method="put" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Project Blocks
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/blocks" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Project Tasks
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/projects/{projectId}/tasks" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

