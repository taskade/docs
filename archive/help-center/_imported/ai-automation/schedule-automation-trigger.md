---
title: "Schedule (Automation Trigger)"
description: "Schedule your automations to repeat at regular intervals."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10477405-schedule-automation-trigger"
intercom_id: "10477405"
state: "published"
date_created: "1738083903"
date_updated: "1738086184"
date_imported: "2025-09-13T18:54:32.705Z"
---

Title: Schedule (Automation Trigger) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10477405-schedule-automation-trigger

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10477405-schedule-automation-trigger#main-content)

[![Image 1: Taskade Help Center](https://downloads.intercomcdn.com/i/o/490280/d14603621e78c833c2d0e66f/2d1230f35f3009fff25b2989e93312a5.png)](https://help.taskade.com/en/)

Table of contents

Schedule your automations to repeat at regular intervals.

Updated over 8 months ago

Table of contents

Overview
--------

The **Schedule** trigger automatically runs automations at regular intervals (hourly, daily, weekly, or monthly). It’s perfect for creating recurring workflows such as daily reminders, weekly reports, monthly maintenance tasks, and more.

Trigger Settings
----------------

Connector options give you full control over the trigger:

**🏷️ Field****🔤 Description**
**Every Hour**Automation runs once every hour.
**Every Day**Automation runs once a day.
**Every Week**Automation runs on specific days
**Every Month**Automation runs monthly. Choose the day, time, and time zone.

**Use Cases**
-------------

Not sure how to use the Schedule trigger? Start with the ideas below.

Send Reminders
--------------

*   **Scenario**: A manager wants to send the entire team a collective summary of all tasks for the day from their private tracker project every morning.​

​

*   **Steps**:

​

    *   **Schedule Trigger**: Set the automation to run daily at 9:00 AM.

​

    *   **Find Task(s)**: Search for and retrieve all tasks added by the manager to their private tracker project (e.g., "Daily Priorities").

​

    *   **Transform Array into String**: Format the list of tasks for further processing.

​

    *   **Run Agent Command**: Use a **Content Summarization Agent** to structure the tasks into a professional email format with clear headings and bullet points.

​

    *   **Send Email**: Send the structured summary to all team members, including stakeholders (via CC) if necessary.

    *   **Send Channel Message**: Post the task summary to a shared Slack channel.

Distribute Reports
------------------

*   **Scenario**: A manager wants to generate and distribute a report summarizing project progress every Friday afternoon.

​

*   **Steps**:

​

    *   **Schedule Trigger:** Set the automation to run weekly on Fridays at 4:00 PM.

​

    *   **Run Agent Command**: Use a **Progress Report Agent**trained on a team-wide tracker project to compile a weekly summary of tasks.

​

    *   **Send Email**: Distribute the report to stakeholders via email.

Automate Maintenance
--------------------

*   **Scenario**: An IT department needs to schedule recurring system checks and assign tasks to team members for server maintenance.

​

*   **Steps**:

​

    *   **Schedule Trigger**: Set the automation to run monthly on a specific day.

​

    *   **Create Project From Template**: Automatically create a new project from a predefined maintenance checklist template.

​

    *   **Send Email**: Notify responsible team members with details.

​

    *   **Send Channel Message**: Post a notification in the team’s Slack channel.

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Triggers](https://help.taskade.com/en/articles/8958469-automation-triggers)[Custom Field Updated (Automation Trigger)](https://help.taskade.com/en/articles/9942144-custom-field-updated-automation-trigger)[Delay (Automation Action)](https://help.taskade.com/en/articles/10442383-delay-automation-action)[Task Added (Automation Trigger)](https://help.taskade.com/en/articles/10475712-task-added-automation-trigger)[Task Manual Trigger (Automation Trigger)](https://help.taskade.com/en/articles/10766894-task-manual-trigger-automation-trigger)

Did this answer your question?
