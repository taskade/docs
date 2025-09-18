---
title: "Add Task (Automation Action)"
description: "Create new tasks inside projects with the Add Task action."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9787788-add-task-automation-action"
intercom_id: "9787788"
state: "published"
date_created: "1724695919"
date_updated: "1732695084"
date_imported: "2025-09-13T19:00:54.511Z"
---

Title: Add Task (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9787788-add-task-automation-action

Markdown Content:
**Overview**
------------

The Add Task action lets you automatically create new tasks with multiple parameters and custom fields inside projects as part of your automation flows. 

​

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1215846363/38254b17fe076ae58b0e83dff4e3/add-task-action.jpg?expires=1757791800&signature=9aa3386df3f878f780edca166ffa1428942ca7368efb700b5762d38adcf4fab3&req=dSImE8F6m4JZWvMW1HO4zXl8DYRtIqfZRKzGPvl%2FGoTXNoK%2F6%2F2hvWpjLYjF%0A7d%2Fr%2Fsfre4%2FSzcd%2FQ54%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1215846363/38254b17fe076ae58b0e83dff4e3/add-task-action.jpg?expires=1757791800&signature=9aa3386df3f878f780edca166ffa1428942ca7368efb700b5762d38adcf4fab3&req=dSImE8F6m4JZWvMW1HO4zXl8DYRtIqfZRKzGPvl%2FGoTXNoK%2F6%2F2hvWpjLYjF%0A7d%2Fr%2Fsfre4%2FSzcd%2FQ54%3D%0A)

**Add Task Actions**
--------------------

Here are the [triggers](https://intercom.help/taskade/en/articles/8958469)&[actions](https://intercom.help/taskade/en/articles/8958467)you can use in your automation flows:

**Add Task Automation Settings**
--------------------------------

You can modify several aspects of the Add Task workflow:

**Field****Description**
PROJECT The ID of the project where you want to add the new task.
BLOCK The ID of the block where you want to add the task inside a project.
CONTENT The content of the task.
POSITION Position of the new task in a project.
FIELDS Custom fields that will be added to a project together with the task.
DUE DATE The due date for the task.

Add Multiple Tasks
------------------

The Add Task action supports adding multiple tasks in a single action. To do this, the text must be formatted correctly. An [Ask Agent action](https://help.taskade.com/en/articles/8958471-agents-automation) can be used to help with the formatting using a prompt similar to:

This will help add multiple tasks in a single action:

[![Image 2](https://downloads.intercomcdn.com/i/o/1200824269/a0483d09596d2db862e6f895/image+%287%29.png?expires=1757791800&signature=298b4123a175cf2fc79b112b3f8024a72a81789a6ff0239165c9d9f7d26edee6&req=dSInFsF8mYNZUPMW1HO4zRUI%2B1eq%2FrYFoFKKPYu6f%2BD4NXLON%2FL%2BmGn3xNj%2F%0Ac1T8J4FH0%2F4qqR0pbzw%3D%0A)](https://downloads.intercomcdn.com/i/o/1200824269/a0483d09596d2db862e6f895/image+%287%29.png?expires=1757791800&signature=298b4123a175cf2fc79b112b3f8024a72a81789a6ff0239165c9d9f7d26edee6&req=dSInFsF8mYNZUPMW1HO4zRUI%2B1eq%2FrYFoFKKPYu6f%2BD4NXLON%2FL%2BmGn3xNj%2F%0Ac1T8J4FH0%2F4qqR0pbzw%3D%0A)

**Add Custom Fields**
---------------------

Custom fields allow you to instantly categorize, prioritize, and track new tasks inside projects in a way that makes sense for your team and project goals.

First, you need to make sure that custom fields are enabled inside the target project:

[![Image 3](https://downloads.intercomcdn.com/i/o/1158957782/2fb266dbc51ef56a2e4a7344/custom-fields.gif?expires=1757791800&signature=c27230c92e9ec680e4647e9716cb88e45789bc2084e78a5af73c6dce5ea889ba&req=dSEiHsB7moZXW%2FMW1HO4zQY0nFIl%2BhI5V5P7wnkxe5437kQMQ%2BXZoFv%2Bewir%0AMY5X67IsHt8zynCpgWM%3D%0A)](https://downloads.intercomcdn.com/i/o/1158957782/2fb266dbc51ef56a2e4a7344/custom-fields.gif?expires=1757791800&signature=c27230c92e9ec680e4647e9716cb88e45789bc2084e78a5af73c6dce5ea889ba&req=dSEiHsB7moZXW%2FMW1HO4zQY0nFIl%2BhI5V5P7wnkxe5437kQMQ%2BXZoFv%2Bewir%0AMY5X67IsHt8zynCpgWM%3D%0A)

[![Image 4](https://downloads.intercomcdn.com/i/o/1158957944/0c9c8fab0f454b690a9917e7/add-custom-fields.jpg?expires=1757791800&signature=901618d2a7182ec183c5fc6ad1edc7e21db5ada8ef4bd14d36cd7098a35d83a7&req=dSEiHsB7mohbXfMW1HO4zeEbDRf9JAhnpY2BXLtxOG0%2BgGlWjWrUQUK%2BVwju%0AFH4RGNeqd4Z0SHnNRUE%3D%0A)](https://downloads.intercomcdn.com/i/o/1158957944/0c9c8fab0f454b690a9917e7/add-custom-fields.jpg?expires=1757791800&signature=901618d2a7182ec183c5fc6ad1edc7e21db5ada8ef4bd14d36cd7098a35d83a7&req=dSEiHsB7mohbXfMW1HO4zeEbDRf9JAhnpY2BXLtxOG0%2BgGlWjWrUQUK%2BVwju%0AFH4RGNeqd4Z0SHnNRUE%3D%0A)

Once you've defined custom fields, you can add them directly from automation settings:

[![Image 5](https://downloads.intercomcdn.com/i/o/1158975924/1addeda76587bcb6c28f1171/add-task-1.jpg?expires=1757791800&signature=3c029ae6fd9258a1c51230208b1e31a2fc38a6bf743f3969f02fe60675027f22&req=dSEiHsB5mIhdXfMW1HO4zTtqfKjLQLxCG4dLiKfnoKXuA7PwbCztF%2BBcELwf%0AvIlLHEz1Bbu2iXqUIv8%3D%0A)](https://downloads.intercomcdn.com/i/o/1158975924/1addeda76587bcb6c28f1171/add-task-1.jpg?expires=1757791800&signature=3c029ae6fd9258a1c51230208b1e31a2fc38a6bf743f3969f02fe60675027f22&req=dSEiHsB5mIhdXfMW1HO4zTtqfKjLQLxCG4dLiKfnoKXuA7PwbCztF%2BBcELwf%0AvIlLHEz1Bbu2iXqUIv8%3D%0A)

### **😊 Helpful Links**

* * *

Related Articles

[Add Blocks](https://help.taskade.com/en/articles/8958528-add-blocks)[Create Project (Automation Action)](https://help.taskade.com/en/articles/9891168-create-project-automation-action)[Assign Task (Automation Action)](https://help.taskade.com/en/articles/9895835-assign-task-automation-action)[Task Assigned (Automation Trigger)](https://help.taskade.com/en/articles/9901065-task-assigned-automation-trigger)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)
