# Agents

The **Intelligence Layer** is the brain of your application. It's where reasoning, logic, and autonomous action take place. This layer is powered by **Taskade's AI Agents**.

An Agent is more than just a chatbot. It is an autonomous worker that can be configured with a specific personality, skillset, and access to knowledge. You can use Agents to:

* **Power a Chatbot:** Provide intelligent, context-aware answers to user queries based on the app's Knowledge Layer.
* **Execute Complex Tasks:** Trigger agents via automations to perform multi-step operations like analyzing data, qualifying leads, or summarizing documents.
* **Collaborate with Humans:** Assign tasks to agents and have them work alongside your team members within a project.

These endpoints allow you to create, manage, and interact with the AI Agents that bring your applications to life.

### Learn More

* [**Custom AI Agents ›**](https://help.taskade.com/en/articles/8958457-custom-ai-agents)
* [**Tools for AI Agents ›**](https://help.taskade.com/en/articles/9314171-tools-for-ai-agents)

## Summary of Endpoints

### Update Agent Public Access

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/publicAccess" method="put" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Agent

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Delete Agent

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}" method="delete" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Update Agent

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}" method="patch" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Public Agent

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/public-agent" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Update Public Agent

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/public-agent" method="patch" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Add Project to Agent Knowledge

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/knowledge/project" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Add Media to Agent Knowledge

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/knowledge/media" method="post" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Remove Project from Agent Knowledge

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/knowledge/project/{projectId}" method="delete" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Remove Media from Agent Knowledge

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/knowledge/media/{mediaId}" method="delete" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Agent Conversations

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/convos/" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}

### Get Specific Agent Conversation

{% openapi src="../../../.gitbook/assets/api-0.1.0.json" path="/agents/{agentId}/convos/{convoId}" method="get" expanded="true" %}
[api-0.1.0.json](../../../.gitbook/assets/api-0.1.0.json)
{% endopenapi %}
