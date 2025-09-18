---
title: "Filter Data (Automation Action)"
description: "Perform actions only when the automation data meets certain conditions."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9615031-filter-data-automation-action"
intercom_id: "9615031"
state: "published"
date_created: "1721125747"
date_updated: "1747138713"
date_imported: "2025-09-13T19:02:15.622Z"
---

Title: Filter Data (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9615031-filter-data-automation-action

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/9615031-filter-data-automation-action#main-content)

Perform actions only when the automation data meets certain conditions.

Updated over 4 months ago

**Overview**
------------

The Filter Data action allows you to set conditions within your automations to ensure actions are performed only when specific data criteria are met.

[![Image 1](https://downloads.intercomcdn.com/i/o/1114988060/eecc5b77921564a1f0f4ad42/filter-data.png?expires=1757791800&signature=0fd48c22153232c9b03586463a274ba9efdb7fc1be1337e2837e0af8b9cc066f&req=dSEmEsB2lYFZWfMW1HO4zbgNisNQcEm64pw%2F0r5TuUiTHN29ygOEYNXM6ddb%0AfJljsJrvWH%2Fqgzwc0fk%3D%0A)](https://downloads.intercomcdn.com/i/o/1114988060/eecc5b77921564a1f0f4ad42/filter-data.png?expires=1757791800&signature=0fd48c22153232c9b03586463a274ba9efdb7fc1be1337e2837e0af8b9cc066f&req=dSEmEsB2lYFZWfMW1HO4zbgNisNQcEm64pw%2F0r5TuUiTHN29ygOEYNXM6ddb%0AfJljsJrvWH%2Fqgzwc0fk%3D%0A)

**Action Settings**
-------------------

Connector options give you full control over the Filter Data action:

**Filter Custom Fields**
------------------------

The **Filter** action automatically populates the **Data**filter with [custom fields](https://intercom.help/taskade/en/articles/9767679-custom-fields) if any are present in a connected project. Here's how to set it up:

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373840083/840e1de4ceb496e574c0343bb595/filter-custom-fields.jpg?expires=1757791800&signature=025215e571a8e60b8c01696f6221b382da4f1dfe4434ba4d952454b2303566df&req=dSMgFcF6nYFXWvMW1HO4zc%2BRUdVYLDRjk0s5Nc6Pp%2B68xzNCGxToZgcm2Mi0%0AYteXMjKtMCcWEdu3DGM%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373840083/840e1de4ceb496e574c0343bb595/filter-custom-fields.jpg?expires=1757791800&signature=025215e571a8e60b8c01696f6221b382da4f1dfe4434ba4d952454b2303566df&req=dSMgFcF6nYFXWvMW1HO4zc%2BRUdVYLDRjk0s5Nc6Pp%2B68xzNCGxToZgcm2Mi0%0AYteXMjKtMCcWEdu3DGM%3D%0A)

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
