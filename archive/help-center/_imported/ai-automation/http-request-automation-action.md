---
title: "HTTP Request (Automation Action)"
description: "Connect apps seamlessly with HTTP request automation."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9421110-http-request-automation-action"
intercom_id: "9421110"
state: "published"
date_created: "1717521423"
date_updated: "1752761415"
date_imported: "2025-09-13T19:02:47.850Z"
---

Title: HTTP Request (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9421110-http-request-automation-action

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/9421110-http-request-automation-action#main-content)

Connect apps seamlessly with HTTP request automation.

Updated over 2 months ago

**Overview**
------------

HTTP (HyperText Transfer Protocol) is the foundation of web communication. Think of it as the universal language that allows different applications to talk to each other.

With the HTTP Request action, you can:

[![Image 1](https://downloads.intercomcdn.com/i/o/1071469286/32a76503558446b203353fdd/http-request-automation.jpeg?expires=1757791800&signature=babfd0552eeffc70edc1d9d4f23c918a00bb869b585565d0369ff023d1d9f209&req=dSAgF814lINXX%2FMW1HO4zTiuUfHipMlODO18LgzNrJuvN%2BxDLpwqrFKbDyyK%0AX3pZGHdXy5%2BmbnuoA2A%3D%0A)](https://downloads.intercomcdn.com/i/o/1071469286/32a76503558446b203353fdd/http-request-automation.jpeg?expires=1757791800&signature=babfd0552eeffc70edc1d9d4f23c918a00bb869b585565d0369ff023d1d9f209&req=dSAgF814lINXX%2FMW1HO4zTiuUfHipMlODO18LgzNrJuvN%2BxDLpwqrFKbDyyK%0AX3pZGHdXy5%2BmbnuoA2A%3D%0A)

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

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812748/ec4a9b6f8d2de828b66bbf0028c3/make-http-1.jpg?expires=1757791800&signature=efd8cfb9a2a9951d9df2ffbcd7b019a5c65a95a5a23652ae3d929c299f2aa258&req=dSMlF8F%2Fn4ZbUfMW1HO4zZC91eUn1OXiW3IdzWf5YsYs5J4NQri1OBqDVWT0%0AIktSityK6%2B5%2FwnmAU1c%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812748/ec4a9b6f8d2de828b66bbf0028c3/make-http-1.jpg?expires=1757791800&signature=efd8cfb9a2a9951d9df2ffbcd7b019a5c65a95a5a23652ae3d929c299f2aa258&req=dSMlF8F%2Fn4ZbUfMW1HO4zZC91eUn1OXiW3IdzWf5YsYs5J4NQri1OBqDVWT0%0AIktSityK6%2B5%2FwnmAU1c%3D%0A)

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812870/f162fc4116f85d5fb953c97484b2/make-http-2.jpg?expires=1757791800&signature=f0e431ecbc050f6a29d27b19b36fe733e74c4b650501f5b6e5d2c95a5cc5cdeb&req=dSMlF8F%2Fn4lYWfMW1HO4zc8qs81Qx3T%2B7ltKglTmXlzKJVJWH5N%2FWtxPzMpz%0APp%2BGt2J3NyB9VmWba%2BM%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812870/f162fc4116f85d5fb953c97484b2/make-http-2.jpg?expires=1757791800&signature=f0e431ecbc050f6a29d27b19b36fe733e74c4b650501f5b6e5d2c95a5cc5cdeb&req=dSMlF8F%2Fn4lYWfMW1HO4zc8qs81Qx3T%2B7ltKglTmXlzKJVJWH5N%2FWtxPzMpz%0APp%2BGt2J3NyB9VmWba%2BM%3D%0A)

### **Set Up HTTP Request**

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812986/7cac3791cabbdac6bc3ac8ebc6e2/make-http-3.jpg?expires=1757791800&signature=3e8dc571a71696caa7c2ad7e078d272178f80b3d3c5508044f8c66c31dd45c46&req=dSMlF8F%2Fn4hXX%2FMW1HO4zZ6Yvqj%2BmEU4cBRyKAECv%2Fz2dip194fm0%2Byz8Eg1%0AyD%2BLCW65mRdl%2Bnn%2FxPw%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321812986/7cac3791cabbdac6bc3ac8ebc6e2/make-http-3.jpg?expires=1757791800&signature=3e8dc571a71696caa7c2ad7e078d272178f80b3d3c5508044f8c66c31dd45c46&req=dSMlF8F%2Fn4hXX%2FMW1HO4zZ6Yvqj%2BmEU4cBRyKAECv%2Fz2dip194fm0%2Byz8Eg1%0AyD%2BLCW65mRdl%2Bnn%2FxPw%3D%0A)

Here's the received data is shown in Make's Webhook logs; the output is shown below:

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321813074/f4a90b3b08b768789c481483e900/make-http-4.jpg?expires=1757791800&signature=a0e5337d5d61ea134502084400abb30c78ff763f32144942cb9f2dbcfad88625&req=dSMlF8F%2FnoFYXfMW1HO4za7XKMCBFsBs3Gzq3nEJl%2BEWDsAzCltIwaMeHhHd%0A8yEjIfojsDijM2uYT6A%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321813074/f4a90b3b08b768789c481483e900/make-http-4.jpg?expires=1757791800&signature=a0e5337d5d61ea134502084400abb30c78ff763f32144942cb9f2dbcfad88625&req=dSMlF8F%2FnoFYXfMW1HO4za7XKMCBFsBs3Gzq3nEJl%2BEWDsAzCltIwaMeHhHd%0A8yEjIfojsDijM2uYT6A%3D%0A)

Generate a Response
-------------------

You can configure your HTTP Request action and extract specific data using a custom schema. Follow these steps to set things up:

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321807904/cf33d775eff458a11154741c88d2/http-response.jpg?expires=1757791800&signature=8764caddbb869a417805d9dd944a080366b2471fa820375222ee7b77c6b36e5f&req=dSMlF8F%2BmohfXfMW1HO4zVtC6dlITyp3nPgbA8kOfWwIIgjoOkrGY2IARsL1%0ARO%2Fl8XMHgtSaS4u6clY%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321807904/cf33d775eff458a11154741c88d2/http-response.jpg?expires=1757791800&signature=8764caddbb869a417805d9dd944a080366b2471fa820375222ee7b77c6b36e5f&req=dSMlF8F%2BmohfXfMW1HO4zVtC6dlITyp3nPgbA8kOfWwIIgjoOkrGY2IARsL1%0ARO%2Fl8XMHgtSaS4u6clY%3D%0A)

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321809287/2a7eb94ab18573c2dcec199511f7/http-response-2.jpg?expires=1757791800&signature=f9f3d470cfd29cbaff919ba103f27a6b86c43047fb20491f0b04372c57097841&req=dSMlF8F%2BlINXXvMW1HO4zS41gtMeGvNHw4oPZk5FTrXjFROmNLakLZeIHVGu%0ALWM%2BTi731bqOGz8E71E%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321809287/2a7eb94ab18573c2dcec199511f7/http-response-2.jpg?expires=1757791800&signature=f9f3d470cfd29cbaff919ba103f27a6b86c43047fb20491f0b04372c57097841&req=dSMlF8F%2BlINXXvMW1HO4zS41gtMeGvNHw4oPZk5FTrXjFROmNLakLZeIHVGu%0ALWM%2BTi731bqOGz8E71E%3D%0A)

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
