---
title: "HTTP Request (Automation Action) | Taskade Help Center"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/9421110-http-request"
article_id: "9421110"
imported_at: "2025-09-13T05:02:48.466Z"
---

Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/9421110-http-request#main-content)

Connect apps seamlessly with HTTP request automation.

Updated over 2 months ago

**Overview**
------------

HTTP (HyperText Transfer Protocol) is the foundation of web communication. Think of it as the universal language that allows different applications to talk to each other.

With the HTTP Request action, you can:

[![Image 1](../../.gitbook/assets/imported/http-request-1.jpeg)](https://downloads.intercomcdn.com/i/o/1071469286/32a76503558446b203353fdd/http-request-automation.jpeg?expires=1757741400&signature=0a71eb6ed06b389bc1d53cae1cee0904f4927f5e2ddda45659a08c2a31334a92&req=dSAgF814lINXX%2FMW1HO4zTiuUfHiqclCDO18LgzNrJsQECfd9E0xC7UL4nrv%0A2YhfejxT3AiIb99z9z4%3D%0A)

**HTTP Request Actions**
------------------------

Here are the [actions](https://intercom.help/taskade/en/articles/8958467)you can use in your workflows:

**HTTP Automation Settings**
----------------------------

Connector options give you full control over the HTTP Request automation:

**Trigger**: Send HTTP Request

**Parameter****Description****Example**
**Method**Choose what you want the HTTP request to do: get information, create something new, update existing data, or delete something`GET` (retrieve), `POST` (create), `PUT` (update), `DELETE` (remove), `HEAD` (check if exists), `PATCH` (update part)
**URL**Enter the web address where you want to send your HTTP request`https://api.example.com/v1/users/123`
**Headers**Add special instructions like passwords or API keys that the receiving system needs to process your request`Authorization: Bearer token123`
**Query Params**Add extra options to your request URL to filter results or specify what you want back`?limit=10&sort=date&status=active`
**Body Type**Tell the system how you want to package the data`JSON`, `Form Data`, `Raw`, `XML`
**Body Content**Write the actual information you want to request`{"name": "John", "email": "john@example.com"}`
**Response Body Type**Choose how you want to receive and process the information that comes back`JSON` or `None`

**Sending a HTTP Request**
--------------------------

There are many platforms compatible with HTTP requests. In the example below, we'll show you how to set up a webhook using Make o receive a HTTP request:
### **Set Up Webhooks**

[![Image 2](../../.gitbook/assets/imported/http-request-2.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812748/ec4a9b6f8d2de828b66bbf0028c3/make-http-1.jpg?expires=1757741400&signature=44ec2db26cf07cb4cc4cc8159e4586fa049176f21d9c9f807f6ac7fac60c3802&req=dSMlF8F%2Fn4ZbUfMW1HO4zZC91eUn2eXuW3IdzWf5YsaovWt4Uiqlvg61MmpP%0AvWKU11ZmmVZFZCjGzKY%3D%0A)

[![Image 3](../../.gitbook/assets/imported/http-request-3.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812870/f162fc4116f85d5fb953c97484b2/make-http-2.jpg?expires=1757741400&signature=f8a9006cca998d8093b82561597046dfef09da10e33e721b90a08ebe52b1d79d&req=dSMlF8F%2Fn4lYWfMW1HO4zc8qs81QynTy7ltKglTmXlzfphU6djHYbvBcENBP%0AjnlEpNg0y9KORU2WwZs%3D%0A)
### **Set Up HTTP Request**

[![Image 4](../../.gitbook/assets/imported/http-request-4.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812986/7cac3791cabbdac6bc3ac8ebc6e2/make-http-3.jpg?expires=1757741400&signature=05bcfcbe7dd04ebe7bdca21ae344f5645cc7b1f4c79559c3536e76ca08147fce&req=dSMlF8F%2Fn4hXX%2FMW1HO4zZ6Yvqj%2BlUU0cBRyKAECv%2FzkxzVgMQJl8dBJlFsZ%0ANt6H8QvEXSH5ZJ9%2FpUc%3D%0A)

Here's the received data is shown in Make's Webhook logs; the output is shown below:

[![Image 5](../../.gitbook/assets/imported/http-request-5.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321813074/f4a90b3b08b768789c481483e900/make-http-4.jpg?expires=1757741400&signature=20ed6f2fc80b7ee0b7c7d5273d3a8ad97515531f3ebe2e37bfb2d05a2d880051&req=dSMlF8F%2FnoFYXfMW1HO4za7XKMCBG8Bg3Gzq3nEJl%2BE9TO6OftaEIpb2zGwf%0AkWOjvPyijJznjVKuDaw%3D%0A)

Generate a Response
-------------------

You can configure your HTTP Request action and extract specific data using a custom schema. Follow these steps to set things up:

[![Image 6](../../.gitbook/assets/imported/http-request-6.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321807904/cf33d775eff458a11154741c88d2/http-response.jpg?expires=1757741400&signature=64e3aabbda8f722d1b973f6dba3a2cf42f90048c97aaa03c7cb8c191694d74fb&req=dSMlF8F%2BmohfXfMW1HO4zVtC6dlIQip7nPgbA8kOfWwn5llFhZ5lj5QQ1m7L%0A1BibNOSyCW1nPT3IrO8%3D%0A)

[![Image 7](../../.gitbook/assets/imported/http-request-7.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321809287/2a7eb94ab18573c2dcec199511f7/http-response-2.jpg?expires=1757741400&signature=b86df6f062a725b155fd8001cddc44e4820aad6bc4bd113c3496c9ca52655adc&req=dSMlF8F%2BlINXXvMW1HO4zS41gtMeF%2FNLw4oPZk5FTrXR41zk8oK72xx3rktm%0AGrHqna%2FM73xX0nRaS1Q%3D%0A)

**Use Cases**
-------------

Not sure how to make the most of this action? Start with this automation flows:

**Use Case****Automation Flow**
Get weather data for outdoor project scheduling✅ **Trigger:**`Schedule` (daily)

➡️ **Action:**`Send HTTP Request` to weather API

➡️ **Action:**`Add Task` with recommendations
Validate email addresses on contact creation✅ **Trigger:**`Task Added` (new contact)

➡️ **Action:**`Send HTTP Request` to email validation

➡️ **Action:**`Update Custom Fields` with status
Translate content for international teams✅ **Trigger:**`Task Added` (content task)

➡️ **Action:**`Send HTTP Request` to translation API

➡️ **Action:**`Append Text` (GDocs) with translation
Fetch stock prices for investment tracking✅ **Trigger:**`Schedule` (market open)

➡️ **Action:**`Send HTTP Request` to financial API

➡️ **Action:**`Insert Row` (Google Sheets) with data
Get public holidays for project planning✅ **Trigger:**`Project Created`

➡️ **Action:**`Send HTTP Request` to calendar API

➡️ **Action:**`Create Event` (Google Calendar)
Verify company information via business lookup✅ **Trigger:**`Form Trigger` (new contact)

➡️ **Action:**`Send HTTP Request` to CRM API

➡️ **Action:**`Update Custom Fields` with details
### **😊 Helpful Links**
### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Webhooks (Automation Trigger)](https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)[GitHub Integration](https://help.taskade.com/en/articles/10393224-github-integration)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)[Mark Task as Completed (Automation Action)](https://help.taskade.com/en/articles/11410590-mark-task-as-completed-automation-action)