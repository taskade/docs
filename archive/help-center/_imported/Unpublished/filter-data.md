---
title: "Filter Data (Automation Action) | Taskade Help Center"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/9615031-filter-data"
article_id: "9615031"
imported_at: "2025-09-13T05:03:23.491Z"
---

Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/9615031-filter-data#main-content)

Perform actions only when the automation data meets certain conditions.

Updated over 4 months ago

**Overview**
------------

The Filter Data action allows you to set conditions within your automations to ensure actions are performed only when specific data criteria are met.

[![Image 1](../../.gitbook/assets/imported/filter-data-1.png)](https://downloads.intercomcdn.com/i/o/1114988060/eecc5b77921564a1f0f4ad42/filter-data.png?expires=1757741400&signature=30f05a1882b4fc425627961550ccfb40f92a3d05b210b7c23b159f522f2e8a37&req=dSEmEsB2lYFZWfMW1HO4zbgNisNQfUm24pw%2F0r5TuUinvMXB559Af2P9HyQC%0A17tDjfjuu%2BVP5wr1mqQ%3D%0A)

**Action Settings**
-------------------

Connector options give you full control over the Filter Data action:

**Filter Custom Fields**
------------------------

The **Filter** action automatically populates the **Data** filter with [custom fields](https://intercom.help/taskade/en/articles/9767679-custom-fields) if any are present in a connected project. Here's how to set it up:

[![Image 2](../../.gitbook/assets/imported/filter-data-2.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373840083/840e1de4ceb496e574c0343bb595/filter-custom-fields.jpg?expires=1757741400&signature=8a9293e84e09ebf0b5d5f09abf35dd1d9cd1997b9c8da4587d848953573a1956&req=dSMgFcF6nYFXWvMW1HO4zc%2BRUdVYITRvk0s5Nc6Pp%2B5WSSdvwhr21%2BDmwl2A%0AuQk9%2F6%2FLhQtqEZ15k%2FU%3D%0A)

**Use Cases**
-------------

Not sure where to start? Explore this use case for the Filter Data action first:

🪄 **Use Case**💭 **Scenario**⏩ **Action Flow**
Support escalation Escalate customer issues when urgent keywords are detected.A customer sends an email or submits a support ticket. The system checks if it contains urgent keywords. If found, the issue is automatically escalated by notifying the support lead and reassigning the task to a higher priority team member.
Lead enrichment Automatically enrich new form submissions with lead data.When a new form submission is received, the system extracts the email address and fetches additional lead data from Apollo. The enriched data is then saved in a Google Sheet for future use.
Auto-response Auto-respond to user questions using a trained AI agent.When a user submits a query, the AI agent processes it, generates a structured response, and sends it back to the user automatically without manual intervention.
Intelligent task routing Distribute incoming tasks based on keywords and custom fields.New tasks are evaluated based on keywords or custom fields, and based on those criteria, the task is routed to the appropriate team member, with a notification sent to inform them.
Daily report generation with AI Summarize and share daily progress across tasks.Every day at 5 PM, the system collects the tasks completed during the day, generates a summary using AI, and sends it out to the team via Slack or email.
### **😊 Helpful Links**
### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Actions](https://help.taskade.com/en/articles/8958470-automation-actions)[Branch (Automation Action)](https://help.taskade.com/en/articles/9805047-branch-automation-action)[Loop (Automation Action)](https://help.taskade.com/en/articles/10351362-loop-automation-action)[Delay (Automation Action)](https://help.taskade.com/en/articles/10442383-delay-automation-action)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)