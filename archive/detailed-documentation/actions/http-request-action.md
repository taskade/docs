# HTTP Request (Automation Action)

Connect Taskade automations to any HTTP API. Send requests to web services, pass data from previous steps, and use responses later in your flow.

{% hint style="success" %}
Use HTTP Request to integrate services that don’t yet have a native connector. Call REST endpoints, webhooks, and custom backends with full control over method, headers, body, and response parsing.
{% endhint %}

## Overview

The HTTP Request action lets your automation call external services using standard HTTP methods: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, and `HEAD`. You can:

- Send data (JSON, form data, raw, or XML)
- Add headers and query parameters (e.g., API keys, filters)
- Use variables from triggers and previous steps
- Parse JSON responses and pass fields to downstream steps
- Handle errors, timeouts, and non-2xx status codes gracefully

## Common uses

- Retrieve data from public APIs (weather, holidays, finance) and add to projects
- Trigger webhooks in tools like Slack, Make, Zapier, or internal services
- Validate or enrich records (email verification, company info lookup)
- Update third-party systems (CRMs, help desks, data warehouses)

## Settings

| Setting | Description | Examples |
|--------|-------------|----------|
| **Method** | HTTP verb that defines the operation | `GET`, `POST`, `PUT`, `PATCH`, `DELETE`, `HEAD` |
| **URL** | Endpoint to call. Supports variables. | `https://api.example.com/v1/items?status={{trigger.status}}` |
| **Headers** | Key–value pairs for auth and content type | `Authorization: Bearer {{secrets.api_token}}`, `Content-Type: application/json` |
| **Query Params** | URL parameters for filtering or pagination | `limit=10`, `sort=date` |
| **Body Type** | Format of the request body | `JSON`, `Form Data`, `Raw`, `XML` |
| **Body Content** | Data to send. Supports variables. | `{ "name": "{{task.title}}" }` |
| **Response Body Type** | How to parse the response | `JSON` or `None` |
| **Timeout (s)** | Max time to wait for a response | `30` |
| **Retries** | Retry attempts on transient errors | `0-3` |

## Using variables

You can reference data from:

- Trigger payloads (e.g., task fields, project meta)
- Outputs of previous steps (e.g., `{{steps.http_1.body.id}}`)
- Workspace secrets (e.g., `{{secrets.my_api_token}}`)

Examples:

```json
{
  "name": "{{task.title}}",
  "due": "{{task.dueAt}}",
  "assignee": "{{task.assignee.email}}",
  "priority": "{{customFields.priority}}"
}
```

## Step-by-step

{% stepper %}
{% step %}
Open your automation and add a new step. Choose "HTTP Request".
{% endstep %}
{% step %}
Select the method, enter the URL, add headers/query params.
{% endstep %}
{% step %}
If needed, choose a body type and provide body content with variables.
{% endstep %}
{% step %}
Set Response Body Type to JSON if you want to reuse fields later.
{% endstep %}
{% step %}
Test the step, then map response fields in downstream actions.
{% endstep %}
{% endstepper %}

## Examples

### 1) Get weather and create a task

Trigger: Schedule (daily)

HTTP Request:

```http
GET https://api.open-meteo.com/v1/forecast?latitude={{project.lat}}&longitude={{project.lng}}&hourly=temperature_2m
```

Then: Transform/Filter → Add Task with `{{steps.http_1.body.hourly.temperature_2m[0]}}`.

### 2) Post a message to Slack via webhook

```http
POST https://hooks.slack.com/services/T000/B000/XXXX
Content-Type: application/json

{
  "text": "Task created: {{task.title}} ({{task.url}})"
}
```

### 3) Validate email and update custom field

Trigger: Task Added

HTTP Request (JSON):

```
GET https://api.hunter.io/v2/email-verifier?email={{customFields.email}}&api_key={{secrets.hunter_api_key}}
```

Then: Filter Data → Update Custom Fields with `{{steps.http_1.body.data.status}}`.

## Error handling

- Non-2xx status → step fails by default; use Branch/Filter to handle gracefully
- Timeouts → increase timeout or add Retry with backoff
- Invalid JSON → set Response Body Type to None or sanitize upstream

{% hint style="warning" %}
Avoid hardcoding secrets. Store tokens/keys in Workspace Secrets and reference with `{{secrets.*}}`.
{% endhint %}

## Best practices

- Prefer `application/json` for predictable parsing
- Use query params for filtering vs. building long URLs manually
- Log essential response fields using debug steps during testing
- Use Branch for status-code based routing (e.g., 200 vs 404 vs 429)
- Respect provider rate limits; add Delay/Retry as needed

## Troubleshooting

- 401/403: Check token, scope, or header name/case
- 404: Verify URL, path params, or resource existence
- 429: Add Delay/Retry; reduce request rate
- SSL errors: Ensure `https` and valid certs on the endpoint

## Related

- Filter Data (Automation Action)
- Branch (Automation Action)
- Ask Agent with Structured Output (Automation Action)
- Webhooks (Automation Trigger)


