---
title: "Task Manual Trigger (Automation Trigger)"
description: "Use project tasks to manually trigger automation flows."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10766894-task-manual-trigger-automation-trigger"
intercom_id: "10766894"
state: "published"
date_created: "1741864067"
date_updated: "1742546632"
date_imported: "2025-09-13T18:52:18.885Z"
---

Title: Task Manual Trigger (Automation Trigger) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10766894-task-manual-trigger-automation-trigger

Markdown Content:
Copyright (c) 2023, Intercom, Inc. ([[email protected]](https://help.taskade.com/cdn-cgi/l/email-protection)) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. ([[email protected]](https://help.taskade.com/cdn-cgi/l/email-protection)) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10766894-task-manual-trigger-automation-trigger#main-content)

Use project tasks to manually trigger automation flows.

Updated over 6 months ago

Table of contents

Overview
--------

The Task Manual Trigger allows you to trigger automations from within projects.

How It Works
------------

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420837401/6ba4e1ab4c5be57a8814546d3198/automation-generator-1.png?expires=1757790900&signature=7ff7dbe294223b1798f5cc1cd26b92a2df36af8f5ce95e8d394b3ec6a5a2013f&req=dSQlFsF9moVfWPMW1HO4zTN%2B7raasMy5lsErPkrfW5%2F%2BxSH%2Bi1WP9j4H0pUS%0AgatMTaEFjwPFWj4Otp8%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420837401/6ba4e1ab4c5be57a8814546d3198/automation-generator-1.png?expires=1757790900&signature=7ff7dbe294223b1798f5cc1cd26b92a2df36af8f5ce95e8d394b3ec6a5a2013f&req=dSQlFsF9moVfWPMW1HO4zTN%2B7raasMy5lsErPkrfW5%2F%2BxSH%2Bi1WP9j4H0pUS%0AgatMTaEFjwPFWj4Otp8%3D%0A)

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420820057/0824ee87be983111d41f8fbea05f/task-manual-trigger.jpg?expires=1757790900&signature=40a2ee6d687b5e356164cad7e1b976c070c77e47d0984bfb2459dbf4fca8d921&req=dSQlFsF8nYFaXvMW1HO4zSarod6hqf%2BQXval9gPiM0bpOubUeve%2FH6AuOGpA%0APOT43VE3lNksPLG8Q1g%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420820057/0824ee87be983111d41f8fbea05f/task-manual-trigger.jpg?expires=1757790900&signature=40a2ee6d687b5e356164cad7e1b976c070c77e47d0984bfb2459dbf4fca8d921&req=dSQlFsF8nYFaXvMW1HO4zSarod6hqf%2BQXval9gPiM0bpOubUeve%2FH6AuOGpA%0APOT43VE3lNksPLG8Q1g%3D%0A)

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420834598/9fc7b845813f464d36af4360d543/task-manual-trigger-1.jpg?expires=1757790900&signature=cc20dd37876b0ac74a9188c98ac17479c8b1498e40193abc0fffb6d6cf72b14f&req=dSQlFsF9mYRWUfMW1HO4zXmGHP8%2BhYGhjVGvBelfkxg3nO1PJp8oXMTgRtr1%0APMa%2B9dyTyEZWFmNYEK8%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420834598/9fc7b845813f464d36af4360d543/task-manual-trigger-1.jpg?expires=1757790900&signature=cc20dd37876b0ac74a9188c98ac17479c8b1498e40193abc0fffb6d6cf72b14f&req=dSQlFsF9mYRWUfMW1HO4zXmGHP8%2BhYGhjVGvBelfkxg3nO1PJp8oXMTgRtr1%0APMa%2B9dyTyEZWFmNYEK8%3D%0A)

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420834457/ba89d57856c73a10aaa969e66ab6/task-manual-trigger-2.jpg?expires=1757790900&signature=5d0dc9dc747dbd7745653631647d77e172104cd2fa4edc50e51b26cd60248241&req=dSQlFsF9mYVaXvMW1HO4zXPknOJVja4V89YJJAdd0PL%2Bayjej%2BmuIvCira5r%0A7W6MNj0tuUpjMIxUS%2F0%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420834457/ba89d57856c73a10aaa969e66ab6/task-manual-trigger-2.jpg?expires=1757790900&signature=5d0dc9dc747dbd7745653631647d77e172104cd2fa4edc50e51b26cd60248241&req=dSQlFsF9mYVaXvMW1HO4zXPknOJVja4V89YJJAdd0PL%2Bayjej%2BmuIvCira5r%0A7W6MNj0tuUpjMIxUS%2F0%3D%0A)

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420833864/74b6373cffab61750d81d57cb701/task-manual-trigger-4.jpg?expires=1757790900&signature=22f765a2dba5dcd1d925abc21b33bb755fc39eda9a53df0fbba555c0010fa798&req=dSQlFsF9nolZXfMW1HO4zQyiEz5QSWZJCFgEGBmUK9IP9LobKUjxg%2ByTeMjt%0AKbJUNI1SMbHriPxz%2FIc%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1420833864/74b6373cffab61750d81d57cb701/task-manual-trigger-4.jpg?expires=1757790900&signature=22f765a2dba5dcd1d925abc21b33bb755fc39eda9a53df0fbba555c0010fa798&req=dSQlFsF9nolZXfMW1HO4zQyiEz5QSWZJCFgEGBmUK9IP9LobKUjxg%2ByTeMjt%0AKbJUNI1SMbHriPxz%2FIc%3D%0A)

Use Cases
---------

Not sure how to use this trigger? Here are a few ideas:

**🪄 Use Case****🔤 Description**
**Client onboarding**Manually trigger an automation to send predefined onboarding emails and assign relevant tasks when a new client project is created.
**Bug tracking & escalation**When a critical bug is identified, trigger an automation to notify the engineering team, create a priority issue, and update stakeholders.
**Content publishing**Once an article draft is completed, trigger automation to schedule social media posts, notify the marketing team, and update the content calendar.
**Invoice processing**Manually trigger automation to generate an invoice, send it to the finance team, and update the payment system.
**Employee offboarding**When an employee resigns, trigger an automation to deactivate accounts, reassign tasks, and send exit checklists.

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Webhooks (Automation Trigger)](https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger)[Custom Field Updated (Automation Trigger)](https://help.taskade.com/en/articles/9942144-custom-field-updated-automation-trigger)[Task Added (Automation Trigger)](https://help.taskade.com/en/articles/10475712-task-added-automation-trigger)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)[Mailhook (Automation Trigger)](https://help.taskade.com/en/articles/10857885-mailhook-automation-trigger)
