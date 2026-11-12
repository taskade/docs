---
description: >-
  Send data from an external service into a Taskade automation with an inbound webhook. See the parameter format of the webhook trigger.
---

# Inbound Webhooks

Use an inbound webhook to send data from an external service into a Taskade automation.

{% hint style="info" %}
**Canonical guide:** [Webhooks](../../webhooks.md) covers inbound webhooks, outbound HTTP requests, and the signed Webhook Registration API. This page shows the parameter format for the webhook trigger of an automation. An inbound webhook starts an automation. You create the automation in Taskade. You cannot create or edit an automation through MCP. Also on taskade.com: [taskade.com/docs/guides/webhooks](https://www.taskade.com/docs/guides/webhooks).
{% endhint %}

Taskade receives the data at the Webhook URL as parameters. Each parameter is a string. You can use the parameters in the other actions of the flow.

A parameter name cannot contain a space. This example is not valid:

```
{
 "The Name": "John"
}
```

This example shows the data that a webhook trigger receives:

```
{
    "Name": "John",
    "Title": "CEO of Taskade"
}
```

To use an inbound webhook, create an automation flow with a webhook trigger. For the steps, read the [Taskade Automation guide](https://www.taskade.com/learn/automation).
