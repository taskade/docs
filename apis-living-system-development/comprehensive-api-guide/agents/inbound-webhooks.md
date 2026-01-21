---
description: >-
  Inbound webhooks are a way to allow external services to send data into
  Taskade
---

# Inbound Webhooks

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

<figure><img src="../../../.gitbook/assets/image (1) (1).png" alt=""><figcaption></figcaption></figure>

Setting up an inbound webhook involves setting up an automation flow. More information can be found here in our help center here: [https://help.taskade.com/en/articles/8958467-getting-started-with-automation](https://help.taskade.com/en/articles/8958467-getting-started-with-automation)
