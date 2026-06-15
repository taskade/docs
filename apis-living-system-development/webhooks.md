---
description: >-
  Use inbound webhooks to trigger Taskade automations from external services,
  and outbound HTTP requests to call any API from your workflows.
---

# Webhooks

## Overview

Webhooks let your Taskade automations communicate with the outside world in both directions:

* **Inbound webhooks** — external services send data _into_ Taskade to trigger automations.
* **Outbound HTTP requests** — automations call _out_ to external APIs as action steps.
* **Receiving Taskade events** — combine a Taskade **trigger** (e.g. _task completed_) with an outbound HTTP action to push events to your app.

{% hint style="warning" %}
There is **no** `POST /api/v2/webhooks` subscription endpoint and no event-subscription REST API. You receive Taskade events by **building an automation** with a Taskade trigger plus an HTTP action — see [Receiving Taskade Events](#receiving-taskade-events) below.
{% endhint %}

***

## Inbound Webhooks

Receive data from any external service to kick off a Taskade automation.

### How It Works

1. **Create a webhook trigger** in any automation flow.
2. Taskade **generates a unique webhook URL** for that trigger.
3. Configure your external service to **POST JSON data** to the URL.
4. The webhook payload becomes available as **dynamic data** in every subsequent action.

{% hint style="info" %}
The webhook URL is generated per automation. You'll find it in the **trigger configuration** panel after selecting the Webhook trigger type.
{% endhint %}

### Payload Structure

Any valid JSON body is accepted. Each field in your payload automatically becomes a **dynamic variable** you can reference in downstream actions.

**Example payload:**

```json
{
  "event": "form_submitted",
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "Interested in a demo"
}
```

All four fields (`event`, `name`, `email`, `message`) are available as dynamic variables in your automation steps.

### Authentication

Webhook URLs are **unique and unguessable** — each contains a cryptographically random token. For additional security:

* Validate incoming payloads in your automation logic (e.g., check for an expected `event` value).
* Rotate the webhook URL if you suspect it has been compromised by deleting and re-creating the trigger.

{% hint style="warning" %}
Treat your webhook URLs like passwords. Do not share them publicly or commit them to source control.
{% endhint %}

#### Bearer Token Authentication

For stronger protection on inbound webhook triggers, you can require callers to supply a secret bearer token. When enabled, Taskade rejects any request that does not present a valid token before the automation runs.

**Setup:**

1. Open the webhook trigger configuration panel in your automation.
2. Enable **Bearer Token** authentication and set a secret token value.
3. Taskade generates (or lets you enter) a secret — store it securely; it will not be shown again.

**Calling the webhook:**

Every inbound request must include the token in the `Authorization` header:

```http
POST https://www.taskade.com/webhooks/<your-webhook-id>
Authorization: Bearer your_api_token_placeholder
Content-Type: application/json

{
  "event": "form_submitted",
  "name": "Jane Doe"
}
```

Requests that omit or supply an incorrect token receive a `401 Unauthorized` response and are not processed.

{% hint style="info" %}
Check your plan's feature list at [taskade.com/pricing](https://www.taskade.com/pricing) for current availability of inbound webhook bearer token authentication.
{% endhint %}

### Common Patterns

| Source                        | What Happens in Taskade                   |
| ----------------------------- | ----------------------------------------- |
| **External form submission**  | Create a task + notify the team           |
| **Stripe payment webhook**    | Update project status + send confirmation |
| **GitHub CI/CD webhook**      | Update deployment status in a project     |
| **CRM event (HubSpot, etc.)** | Sync contact data to a Taskade project    |

***

## Outbound HTTP Requests

For outbound communication, use the **HTTP Request** action in any automation to call external APIs.

### Configuration

| Setting     | Details                                                          |
| ----------- | ---------------------------------------------------------------- |
| **Method**  | `GET`, `POST`, `PUT`, `DELETE`                                   |
| **URL**     | Any valid endpoint                                               |
| **Headers** | Custom headers supported (e.g., `Authorization`, `Content-Type`) |
| **Body**    | JSON or form data                                                |

{% hint style="info" %}
Response data from the HTTP request is available as dynamic variables in subsequent automation steps — so you can chain API calls together.
{% endhint %}

### Example: Post to an External API

| Setting | Value |
| --- | --- |
| **Method** | `POST` |
| **URL** | `https://api.example.com/notifications` |
| **Headers** | `Content-Type: application/json`<br>`Authorization: Bearer your_api_token_placeholder` |

**Body:**

```json
{
  "channel": "#alerts",
  "text": "New task created: {{task.name}}"
}
```

***

## Receiving Taskade Events

To notify your app when something happens **in** Taskade (a task is added, a task is completed), build an automation that starts with a Taskade **trigger** and ends with an [Outbound HTTP Request](#outbound-http-requests) to your endpoint. The trigger's fields are available as dynamic variables in the HTTP body.

### Common triggers and their payloads

**Task added** — fires when a new task is added to a project:

```json
{
  "projectId": "abc123",
  "nodeId": "node_456",
  "nodeText": "Follow up with client",
  "projectTitle": "Sales Pipeline",
  "nodeNote": "Optional note text",
  "projectLink": "https://www.taskade.com/d/abc123",
  "assignees": [ { "handle": "jane" } ],
  "startDate": "2026-06-10",
  "endDate": "2026-06-12"
}
```

**Task completed** — fires when a task is marked complete:

```json
{
  "projectId": "abc123",
  "nodeId": "node_456",
  "nodeText": "Follow up with client",
  "projectTitle": "Sales Pipeline",
  "projectLink": "https://www.taskade.com/d/abc123",
  "completedBy": "jane",
  "completedAt": "2026-06-11T14:30:00Z",
  "triggerTime": "2026-06-11T14:30:01Z",
  "assignees": [ { "handle": "jane" } ]
}
```

Custom field values on the task are included as additional keys. Other triggers (new comment, due date, project completed, schedule) follow the same pattern — see the [Action & Trigger Reference](../genesis-living-system-builder/automation/actions.md).

***

## Rate Limits

Excessive inbound webhook calls may be throttled to protect system stability. If you expect high-volume webhook traffic, consider batching events or adding a queue on the sender side.

***

## Next Steps

* [Authentication](developers/authentication.md) — set up API tokens for outbound requests
* [MCP Connectors](workspace-mcp-advanced.md#mcp-connectors) — use native integrations instead of raw webhooks for supported services
