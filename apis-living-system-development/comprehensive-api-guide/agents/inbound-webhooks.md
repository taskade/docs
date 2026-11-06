---
description: >-
  Inbound webhooks are a way to allow external services to send data into
  Taskade
---

# Inbound Webhooks

{% hint style="info" %}
**Canonical guide:** [Webhooks](../../webhooks.md) covers inbound webhooks, outbound HTTP requests, and the signed Webhook Registration API. This page documents the automation webhook trigger's parameter format. An inbound webhook starts an automation, and you create the automation in Taskade. MCP cannot create or edit an automation. Also on taskade.com: [taskade.com/docs/guides/webhooks](https://www.taskade.com/docs/guides/webhooks).
{% endhint %}

Taskade can receive data sent to the Webhook URL through parameters. The parameters all have a String type format. You can use them in other actions in the flow. Parameter names cannot contain spaces. For example, this is invalid:

```
{
 "The Name": "John"
}
```

This example shows a webhook trigger and its data:

```
{
    "Name": "John",
    "Title": "CEO of Taskade"
}
```

<figure><img src="../../../.gitbook/assets/image (1).png" alt="A webhook trigger with Name and Title parameters"><figcaption></figcaption></figure>

Setting up an inbound webhook involves setting up an automation flow. Learn more in the [Taskade Automation guide](https://www.taskade.com/learn/automation).
