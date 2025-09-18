---
title: "Webhooks (Automation Trigger)"
description: "Integrate Taskade with your favorite apps using webhooks for seamless task automation."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger"
intercom_id: "9494976"
state: "published"
date_created: "1718767904"
date_updated: "1734292842"
date_imported: "2025-09-13T19:02:39.183Z"
---

Title: Webhooks (Automation Trigger) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger

Markdown Content:
**What Are Webhooks?**
----------------------

Webhooks allow Taskade to receive automated messages or data updates from other apps when certain events happen. In Taskade, for example, you can use webhooks to trigger actions like updating tasks or sending instant notifications using [HTTP requests.](https://help.taskade.com/en/articles/9421110-http-request)

**Set up Webhooks**
-------------------

The Webhook trigger allows you to configure the parameters of the incoming data. These parameters can be referenced in the subsequent actions in the automation. There is no limit to the number of parameters within a single trigger.

Here's an example of the structure of the received data and how it can be referenced:

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1241260878/4dad82e7267dd01727a991945343/CleanShot+2024-11-06+at+11_05_09+2%402x.png?expires=1757791800&signature=5c6a691435c31cf195698bdf4738ca6a4eba979511b6cfd79ccfa5b011f7f4ff&req=dSIjF8t4nYlYUfMW1HO4zaaTBEKjpJd3FCpcF7ExZARgtYulq5pKdMOhniim%0AMjZdyc3OEn%2FhrZRg8K4%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1241260878/4dad82e7267dd01727a991945343/CleanShot+2024-11-06+at+11_05_09+2%402x.png?expires=1757791800&signature=5c6a691435c31cf195698bdf4738ca6a4eba979511b6cfd79ccfa5b011f7f4ff&req=dSIjF8t4nYlYUfMW1HO4zaaTBEKjpJd3FCpcF7ExZARgtYulq5pKdMOhniim%0AMjZdyc3OEn%2FhrZRg8K4%3D%0A)

[![Image 2](https://downloads.intercomcdn.com/i/o/1104168796/05d5bb7d024f3d341be9e508/webhooks-2.jpg?expires=1757791800&signature=7bb77666181bff556f45dec3d95695edceb3235451d182155b6a3a5a7ff64bd4&req=dSEnEsh4lYZWX%2FMW1HO4zWBV37zL%2Bchav73s6%2Fs1zE9Tzl5u79owuPNEKy%2B%2F%0AelW37wo%2BvJXwTrdIr%2FI%3D%0A)](https://downloads.intercomcdn.com/i/o/1104168796/05d5bb7d024f3d341be9e508/webhooks-2.jpg?expires=1757791800&signature=7bb77666181bff556f45dec3d95695edceb3235451d182155b6a3a5a7ff64bd4&req=dSEnEsh4lYZWX%2FMW1HO4zWBV37zL%2Bchav73s6%2Fs1zE9Tzl5u79owuPNEKy%2B%2F%0AelW37wo%2BvJXwTrdIr%2FI%3D%0A)

And here's a data sample the Webhook trigger above can receive:

Payload Parameters
------------------

To access nested values in your payload:

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247387949/b0e418464b6b76899fffe61a03e9/webhook-payload.jpg?expires=1757791800&signature=8bcfc140846460fdaa85049cfc61bc7a6f4e7001d469756ff57c035981a69d60&req=dSIjEcp2mohbUPMW1HO4zfpvjxee%2BxpB%2FfOwhgzoK1ZSppSQtC4ie5s%2F3dbu%0AMhTAI8F4YpB1LklLupg%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247387949/b0e418464b6b76899fffe61a03e9/webhook-payload.jpg?expires=1757791800&signature=8bcfc140846460fdaa85049cfc61bc7a6f4e7001d469756ff57c035981a69d60&req=dSIjEcp2mohbUPMW1HO4zfpvjxee%2BxpB%2FfOwhgzoK1ZSppSQtC4ie5s%2F3dbu%0AMhTAI8F4YpB1LklLupg%3D%0A)

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

[![Image 4](https://downloads.intercomcdn.com/i/o/1104169019/0bdb3356c6713c4eac4294f9/webhooks-3.jpg?expires=1757791800&signature=7ef3e6fa921396c026beb71f360941d913711a823198800f1a92736acda6ac56&req=dSEnEsh4lIFeUPMW1HO4zTqks5ZarC5Z%2Bp%2F1NCPsjWcOO02duP9RvOHUygF5%0AeYB6wd0%2FDE0ZEslBInc%3D%0A)](https://downloads.intercomcdn.com/i/o/1104169019/0bdb3356c6713c4eac4294f9/webhooks-3.jpg?expires=1757791800&signature=7ef3e6fa921396c026beb71f360941d913711a823198800f1a92736acda6ac56&req=dSEnEsh4lIFeUPMW1HO4zTqks5ZarC5Z%2Bp%2F1NCPsjWcOO02duP9RvOHUygF5%0AeYB6wd0%2FDE0ZEslBInc%3D%0A)

In this example, the received data will be added as a task to a project:

[![Image 5](https://downloads.intercomcdn.com/i/o/1104169063/1ab069a491efe1bf9ef19563/webhooks-4.jpg?expires=1757791800&signature=13fc8ea5f064603abfe924c18fc57e0438280bda8f6ba522e7da05bb778ce86e&req=dSEnEsh4lIFZWvMW1HO4zdFubKpfblLXWZP%2Bi7wwOv%2FnzxZ3aR0TluHlnRUK%0A1Enp8Jda0HH%2FJa0Ipao%3D%0A)](https://downloads.intercomcdn.com/i/o/1104169063/1ab069a491efe1bf9ef19563/webhooks-4.jpg?expires=1757791800&signature=13fc8ea5f064603abfe924c18fc57e0438280bda8f6ba522e7da05bb778ce86e&req=dSEnEsh4lIFZWvMW1HO4zdFubKpfblLXWZP%2Bi7wwOv%2FnzxZ3aR0TluHlnRUK%0A1Enp8Jda0HH%2FJa0Ipao%3D%0A)

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Triggers](https://help.taskade.com/en/articles/8958469-automation-triggers)[Taskade AI (Automation Action)](https://help.taskade.com/en/articles/8958472-taskade-ai-automation-action)[Zapier Integration](https://help.taskade.com/en/articles/8958540-zapier-integration)[HTTP Request (Automation Action)](https://help.taskade.com/en/articles/9421110-http-request-automation-action)[Task Added (Automation Trigger)](https://help.taskade.com/en/articles/10475712-task-added-automation-trigger)
