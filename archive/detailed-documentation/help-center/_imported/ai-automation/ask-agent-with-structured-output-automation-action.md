---
title: "Ask Agent With Structured Output (Automation Action)"
description: "Structure the output of agents' replies in your automations."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action"
intercom_id: "9994450"
state: "published"
date_created: "1728934655"
date_updated: "1749113401"
date_imported: "2025-09-13T18:58:20.861Z"
---

Title: Ask Agent With Structured Output (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action

Markdown Content:
Structure the output of agents' replies in your automations.

Updated over 3 months ago

**Overview**
------------

Use the Structured Output type when you want extract specific information and use them as variables in you next actions in your automation. This is common used with the [Insert Row](https://help.taskade.com/en/articles/8958475-google-sheets-integration) action or [Add Task](https://help.taskade.com/en/articles/9787788-add-task-automation-action) action to fill up columns in a table.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1554269537/ca156b56e5a91509d7e91c6caf4e/ask-agent-with-structured-output.jpg?expires=1757791800&signature=1ac585a4aa9e2b7d79bcbab092e9f0bf2ea72e174cd602dd7e6987e6e065656c&req=dSUiEst4lIRcXvMW1HO4zcfNerEc8Ft8Y48KOlu3e6DWrUsPyghkdpm90RJA%0AG1smE5DrGcLKuWTwszU%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1554269537/ca156b56e5a91509d7e91c6caf4e/ask-agent-with-structured-output.jpg?expires=1757791800&signature=1ac585a4aa9e2b7d79bcbab092e9f0bf2ea72e174cd602dd7e6987e6e065656c&req=dSUiEst4lIRcXvMW1HO4zcfNerEc8Ft8Y48KOlu3e6DWrUsPyghkdpm90RJA%0AG1smE5DrGcLKuWTwszU%3D%0A)

**How to Use It**
-----------------

Action Settings
---------------

Connector options give you full control over the Create Project automation:

**Use Cases**
-------------

Not sure how to make the most of this action? Start with these [ready-made kits](https://help.taskade.com/en/articles/10378721-taskade-ai-kits):

You can also build data-driver automation flows yourself:

🪄 **Use Case**⏩ **Action Flow**
**AI cost difference calculation***   ✅ Trigger: `Task Added` (`Est Cost` and `Act Cost` fields)

*   ➡️ Action: `Ask Agent With Structured Output`

    *   Input: “The estimated cost is $500, the actual cost is $650. What is the difference?”

    *   Output: `Diff Cost` (Number)

*   ➡️ Action: `Update Custom Field``Diff Cost` with result
**Approval routing based on score***   ✅ Trigger: `Task Added` (e.g., budget approval request)

*   ➡️ Action: `Ask Agent With Structured Output`

    *   Input: “Rate feasibility from 0–100."

    *   Output: `Approval Score` (Number)

*   ➡️ If `Approval Score`> 80 → `Mark Task as Completed`

*   ➡️ Else → `Assign Task` to reviewer
**Lead qualification***   ✅ Trigger: `Form Trigger`(new lead)

*   ➡️ Action: Ask Agent With Structured Output

    *   Input: “Is this lead qualified for outreach?”

    *   Output: `Is Qualified` (Boolean)

*   ➡️ If `Is Qualified` = true → `Create Contact` in HubSpot
**Auto-update project KPIs**

​_(Dynamic Project Updates)_*   ✅ Trigger: `Schedule (daily)`

*   ➡️ Action: `Find Task(s)` tagged `metrics`

*   ➡️ Action: `Transform Array to String`

*   ➡️ Action: `Ask Agent With Structured Output`

    *   Input: “Calculate completion rate of tasks."

    *   Output: `Completion %` (Number)

*   ➡️ Action: `Update Custom Field` → `Progress Score`
**Scorecard automation with spreadsheet logic***   ✅ Trigger: `Task Completed`

*   ➡️ Action: `Ask Agent With Structured Output`

    *   Input: “Evaluate task and add performance rating.”

    *   Output: `Score` (Number), `Status` (Single Select)

*   ➡️ Action: `Update custom fields` → `Score` and `Status`
**Sync qualified data to external tools***   ✅ Trigger: `Task Added`

*   ➡️ Action: `Ask Agent With Structured Output`

    *   Input**:** “Extract name, email, lead score (0–100)."

    *   Output: `Name` (Text), `Email` (Email), `Score` (Number)

*   ➡️ Action: `Insert Row` in Google Sheets

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

​

* * *

Related Articles

[HTTP Request (Automation Action)](https://help.taskade.com/en/articles/9421110-http-request-automation-action)[Add Knowledge to Agent (Automation Action)](https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)[Mark Task as Completed (Automation Action)](https://help.taskade.com/en/articles/11410590-mark-task-as-completed-automation-action)[Ask Agent Team (Automation Action)](https://help.taskade.com/en/articles/11702371-ask-agent-team-automation-action)
