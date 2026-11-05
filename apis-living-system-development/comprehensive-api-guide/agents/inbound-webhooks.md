---
description: >-
  Inbound webhooks are a way to allow external services to send data into
  Taskade
---

# Inbound Webhooks

{% hint style="info" %}
**Generated reference:** The maintained webhooks guide is at [taskade.com/docs/guides/webhooks](https://www.taskade.com/docs/guides/webhooks). An inbound webhook starts an automation, and you create the automation in Taskade. MCP cannot create or edit an automation.
{% endhint %}

{% hint style="info" %}
**Canonical guide:** [Webhooks](../../webhooks.md) covers inbound webhooks, outbound HTTP requests, and the signed Webhook Registration API. This page documents the automation webhook trigger's parameter format.
{% endhint %}

Taskade can receive data sent to the Webhook URL through parameters. The parameters all have a String type format. They can then be utilised in other actions within the flow. Note that the parameter does not support space characters, for example the following is invalid:

```
{
 "The Name": "John"
}
```

An example of the following WebHook Trigger and its associated data is shown here:

```
{
    "Name": "John",
    "Title": "CEO of Taskade"
}
```

<figure><img src="../../../.gitbook/assets/image (1).png" alt=""><figcaption></figcaption></figure>

Setting up an inbound webhook involves setting up an automation flow. Learn more in the [Taskade Automation guide](https://www.taskade.com/learn/automation).
