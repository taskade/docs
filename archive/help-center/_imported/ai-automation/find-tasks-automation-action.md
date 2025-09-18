---
title: "Find Task(s) (Automation Action)"
description: "Retrieve and process tasks from projects within automation flows."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10504418-find-task-s-automation-action"
intercom_id: "10504418"
state: "published"
date_created: "1738614131"
date_updated: "1748954016"
date_imported: "2025-09-13T18:54:07.671Z"
---

Title: Find Task(s) (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10504418-find-task-s-automation-action

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action#main-content)

Retrieve and process tasks from projects within automation flows.

Updated over 3 months ago

**Overview**
------------

The **Find Task(s)** action allows you to search for tasks within Taskade projects based on specific criteria. This action is essential for automating workflows that require retrieving, filtering, and processing task data dynamically.

**Use the Find Task(s) Action**
-------------------------------

1) Add the Action
-----------------

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364423740/032fc1c25bcfb5bc43b79a2dc60d/find-tasks-a.jpg?expires=1757791800&signature=6edcccb791adbfcda2a652f4114f38e643e633c40eef1565575c64d46dbd3a44&req=dSMhEs18noZbWfMW1HO4zeD4tcBVYkHt2Uok5xgQuSR0Y0EEKQUBQihkLjFn%0AuZl6Rsr2Ail%2BtQEmZ54%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364423740/032fc1c25bcfb5bc43b79a2dc60d/find-tasks-a.jpg?expires=1757791800&signature=6edcccb791adbfcda2a652f4114f38e643e633c40eef1565575c64d46dbd3a44&req=dSMhEs18noZbWfMW1HO4zeD4tcBVYkHt2Uok5xgQuSR0Y0EEKQUBQihkLjFn%0AuZl6Rsr2Ail%2BtQEmZ54%3D%0A)

2) Configure Search Criteria
----------------------------

Specify the project and define search filters:

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364424459/19a7d2b7ea174858032881d374b6/find-tasks-b.jpg?expires=1757791800&signature=0aba765d662c57af2a693b5375554c6fcfddaebb1289f7558e693d1b1b3b235d&req=dSMhEs18mYVaUPMW1HO4zecRukmJ856Sc2V4N01pplcd7v7BmB%2F7Zk%2BJobQU%0AatvOdpV1%2FRoEXQ7iJkY%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364424459/19a7d2b7ea174858032881d374b6/find-tasks-b.jpg?expires=1757791800&signature=0aba765d662c57af2a693b5375554c6fcfddaebb1289f7558e693d1b1b3b235d&req=dSMhEs18mYVaUPMW1HO4zecRukmJ856Sc2V4N01pplcd7v7BmB%2F7Zk%2BJobQU%0AatvOdpV1%2FRoEXQ7iJkY%3D%0A)

**Field****Condition Options****Value Type Required**
Task Created At Comes Before, Comes After, Is Empty, Is Not Empty Date Value
Task Completed At Comes Before, Comes After, Is Empty, Is Not Empty Date Value
Task Content Contains (Text), Does Not Contain (Text), Exactly Matches (Text), Does Not Exactly Match (Text), Starts With (Text), Does Not Start With (Text), Ends With (Text), Does Not End With (Text), Is Empty (Text), Is Not Empty (Text)Text Value

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364427368/4b492243a72f3f600a74834213d5/find-tasks-z.png?expires=1757791800&signature=8e7f785cbc3ef19e4337129d8c1af89820286cd376b0e15f56e5196cafd5c88d&req=dSMhEs18moJZUfMW1HO4zUiqSsxZQkjzBU7nBWs9v9bxK5bDluekItgysCbz%0AdfKJwN43uX2PRTgNV1M%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364427368/4b492243a72f3f600a74834213d5/find-tasks-z.png?expires=1757791800&signature=8e7f785cbc3ef19e4337129d8c1af89820286cd376b0e15f56e5196cafd5c88d&req=dSMhEs18moJZUfMW1HO4zUiqSsxZQkjzBU7nBWs9v9bxK5bDluekItgysCbz%0AdfKJwN43uX2PRTgNV1M%3D%0A)

3) Reference the Output
-----------------------

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364434890/c67b9c4d85b7617c313e8d50d92b/saf.jpg?expires=1757791800&signature=76d09ce6531826584a3bd9c71bd27b15487caddadfc8e8c50f7cbb682905360a&req=dSMhEs19mYlWWfMW1HO4za16rY%2BxOEliFRglvxC%2BPh2cFK%2BbZ%2BNqWq%2FlxWrc%0ARpRFyMXJWYmDrtkrqf0%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364434890/c67b9c4d85b7617c313e8d50d92b/saf.jpg?expires=1757791800&signature=76d09ce6531826584a3bd9c71bd27b15487caddadfc8e8c50f7cbb682905360a&req=dSMhEs19mYlWWfMW1HO4za16rY%2BxOEliFRglvxC%2BPh2cFK%2BbZ%2BNqWq%2FlxWrc%0ARpRFyMXJWYmDrtkrqf0%3D%0A)

**Use Cases**
-------------

Not sure how to make the most of the Find Task(s) action? Start with these flows.

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Add Knowledge to Agent (Automation Action)](https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)[Google Docs Integration](https://help.taskade.com/en/articles/10101659-google-docs-integration)[GitHub Integration](https://help.taskade.com/en/articles/10393224-github-integration)[Mark Task as Completed (Automation Action)](https://help.taskade.com/en/articles/11410590-mark-task-as-completed-automation-action)
