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

***

## Inbound Webhooks

Receive data from any external service to kick off a Taskade automation.

### How It Works

{% stepper %}
{% step %}
### Create a webhook trigger

Add a **Webhook** trigger to any automation flow.
{% endstep %}
{% step %}
### Copy your unique URL

Taskade generates a unique webhook URL. Find it in the trigger configuration panel.
{% endstep %}
{% step %}
### Configure the sender

Point your external service to **POST JSON data** to the URL.
{% endstep %}
{% step %}
### Use the payload

Every field in the incoming JSON becomes a **dynamic variable** available in downstream actions.
{% endstep %}
{% endstepper %}

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

### Common Patterns

| Source | What Happens in Taskade |
| --- | --- |
| **External form submission** | Create a task + notify the team |
| **Stripe payment webhook** | Update project status + send confirmation |
| **GitHub CI/CD webhook** | Update deployment status in a project |
| **CRM event (HubSpot, etc.)** | Sync contact data to a Taskade project |

***

## Outbound HTTP Requests

For outbound communication, use the **HTTP Request** action in any automation to call external APIs.

### Configuration

| Setting | Details |
| --- | --- |
| **Method** | `GET`, `POST`, `PUT`, `DELETE` |
| **URL** | Any valid endpoint |
| **Headers** | Custom headers supported (e.g., `Authorization`, `Content-Type`) |
| **Body** | JSON or form data |

{% hint style="info" %}
Response data from the HTTP request is available as dynamic variables in subsequent automation steps — so you can chain API calls together.
{% endhint %}

### Example: Post to an External API

```
Method:  POST
URL:     https://api.example.com/notifications
Headers: Content-Type: application/json
         Authorization: Bearer your_api_token_placeholder
Body:
{
  "channel": "#alerts",
  "text": "New task created: {{task.name}}"
}
```

***

## Rate Limits

Excessive inbound webhook calls may be throttled to protect system stability. If you expect high-volume webhook traffic, consider batching events or adding a queue on the sender side.

***

## Next Steps

* [Authentication](developers/authentication.md) — set up API tokens for outbound requests
* [MCP Connectors](../genesis-living-system-builder/genesis/mcp-connectors.md) — use native integrations instead of raw webhooks for supported services
