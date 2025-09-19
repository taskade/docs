---
title: "Webhooks (Automation Trigger) | Taskade Help Center"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/9494976-webhooks"
article_id: "9494976"
imported_at: "2025-09-13T05:03:03.522Z"
---

**What Are Webhooks?**
----------------------

Webhooks allow Taskade to receive automated messages or data updates from other apps when certain events happen. In Taskade, for example, you can use webhooks to trigger actions like updating tasks or sending instant notifications using [HTTP requests.](https://help.taskade.com/en/articles/9421110-http-request)

**Set up Webhooks**
-------------------

The Webhook trigger allows you to configure the parameters of the incoming data. These parameters can be referenced in the subsequent actions in the automation. There is no limit to the number of parameters within a single trigger.

Here's an example of the structure of the received data and how it can be referenced:

[![Image 1](../../.gitbook/assets/imported/webhooks-1.png)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1241260878/4dad82e7267dd01727a991945343/CleanShot+2024-11-06+at+11_05_09+2%402x.png?expires=1757741400&signature=250a54ebbe1a84f24a87b721ca5fa60131f846df864a2bea774fc7868b6b3952&req=dSIjF8t4nYlYUfMW1HO4zaaTBEKjqZd7FCpcF7ExZARe5xCA5UPqYPbo9YqB%0Ae28IULR%2F0Nll8yjjbEc%3D%0A)

[![Image 2](../../.gitbook/assets/imported/webhooks-2.jpg)](https://downloads.intercomcdn.com/i/o/1104168796/05d5bb7d024f3d341be9e508/webhooks-2.jpg?expires=1757741400&signature=b502ab8d687b2a59f4126e8ca9c35bb7edb8b47fa0a42ed8088a8b9780807b04&req=dSEnEsh4lYZWX%2FMW1HO4zWBV37zL9MhWv73s6%2Fs1zE%2BihktdEQ1u9J1Tj2pR%0ASdqarqfe1vtQzxSo3ZA%3D%0A)

And here's a data sample the Webhook trigger above can receive:

Payload Parameters
------------------

To access nested values in your payload:

[![Image 3](../../.gitbook/assets/imported/webhooks-3.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247387949/b0e418464b6b76899fffe61a03e9/webhook-payload.jpg?expires=1757741400&signature=81aec443120fddb42ac3e1067aae5d477d93dcfc274a790d0ee048f51e48bf51&req=dSIjEcp2mohbUPMW1HO4zfpvjxee9hpN%2FfOwhgzoK1YXHacunQsaLZhLNuQt%0A4elPiTtbbvR%2BD3U4Fak%3D%0A)
### Using Parameters

When setting up parameters in your webhook trigger (e.g. text, JSON object, email, or URL), you can reference them directly in your actions.

For instance, if your webhook receives a parameter named query with the value "my query", you can pass this value to an action by typing @ and selecting query. This ensures the action receives the exact value "my query".
### **Working with JSON Object Parameters**

If your webhook includes a JSON object parameter, you can reference the full response by typing @ and selecting Webhook Body (Raw). This allows you to access the complete payload without defining individual parameters manually.

**Trigger the Webhook**
-----------------------
### **Sending an HTTP Request to Taskade**

HTTP stands for HyperText Transfer Protocol. It’s a way for computers to communicate over the Internet. Think of an [HTTP request](https://help.taskade.com/en/articles/9421110-http-request)like sending a letter to another app, and a Webhook is one way an application can receive this letter.
### **Using Make**

[![Image 4](../../.gitbook/assets/imported/webhooks-4.jpg)](https://downloads.intercomcdn.com/i/o/1104169019/0bdb3356c6713c4eac4294f9/webhooks-3.jpg?expires=1757741400&signature=5057057864776b87fbb86958ee369d1e20fe06ae2534a3b8ca0afc2e8246a6f5&req=dSEnEsh4lIFeUPMW1HO4zTqks5ZaoS5V%2Bp%2F1NCPsjWcHPLTZGT1y5wdbQ0oZ%0A0KsQ1sVE5YSxRTrhIRU%3D%0A)

In this example, the received data will be added as a task to a project:

[![Image 5](../../.gitbook/assets/imported/webhooks-5.jpg)](https://downloads.intercomcdn.com/i/o/1104169063/1ab069a491efe1bf9ef19563/webhooks-4.jpg?expires=1757741400&signature=c4d068b95ce5a410e19d0ebe577e8ce5ea31f732db2ee506ba2e39608ae90617&req=dSEnEsh4lIFZWvMW1HO4zdFubKpfY1LbWZP%2Bi7wwOv8LRhTXXLR9qcFFu81k%0AMxzN7MGQcthEYKmzL6g%3D%0A)
### **😊 Helpful Links**
### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Triggers](https://help.taskade.com/en/articles/8958469-automation-triggers)[Taskade AI (Automation Action)](https://help.taskade.com/en/articles/8958472-taskade-ai-automation-action)[Zapier Integration](https://help.taskade.com/en/articles/8958540-zapier-integration)[HTTP Request (Automation Action)](https://help.taskade.com/en/articles/9421110-http-request-automation-action)[Task Added (Automation Trigger)](https://help.taskade.com/en/articles/10475712-task-added-automation-trigger)