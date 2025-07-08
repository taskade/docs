# Apps (Subspaces)

A **Subspace** is the top-level container for every AI-powered application you build on Taskade. It's more than just a folder; it's the complete, self-contained ecosystem for your app, holding its unique Knowledge, Intelligence, and Action layers.

When you generate an app or create one manually, you are creating a Subspace. Everything related to that app—its data (Projects), its logic (Agents), and its workflows (Automations)—is organized within it.

These endpoints allow you to manage the Subspaces in your workspace.

## Summary of Endpoints

### Get Folder Projects
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/projects" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Generate Agent in Folder
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agent-generate" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Create Agent in Folder
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agents" method="post" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Folder Agents
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/agents" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Folder Medias
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/medias" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}

### Get Folder Project Templates
{% swagger src="../../.gitbook/assets/api-0.1.0.json" path="/folders/{folderId}/project-templates" method="get" expanded="true" %}
[api-0.1.0.json](<../../.gitbook/assets/api-0.1.0.json>)
{% endswagger %}


