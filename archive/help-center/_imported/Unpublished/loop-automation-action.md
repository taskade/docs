---
title: "Loop (Automation Action) | Taskade Help Center"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/10351362-loop-automation-action"
article_id: "10351362"
imported_at: "2025-09-13T05:00:04.832Z"
---

Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10351362-loop-automation-action#main-content)

Automate and iterate data tasks with the Loop action.

Updated over 4 months ago

**Overview**
------------

The Loop action allows your automation to repeat a set of steps for each item in a list. This makes it possible to create dynamic workflows that respond to your data, supporting [filters](https://help.taskade.com/en/articles/9615031-filter-data-automation-action), [conditional branches](https://help.taskade.com/en/articles/9805047-branch-automation-action), and even nested loops when needed.

**How to Use Loops**
--------------------

**Prepare the Data Array**
--------------------------

To use a loop, you need an array of data. You can create arrays with these actions:

[![Image 1](../../.gitbook/assets/imported/loop-automation-action-1.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1324366328/2d025512a3e35b73b97ca8d1b706/loop-action-1.jpg?expires=1757741400&signature=0e5985a3dffbdc81d38398aa0c056c8cd694da947cd7dc88d77008a61849facc&req=dSMlEsp4m4JdUfMW1HO4zT%2BqCmqpgXkHNum5Ak2TkhVbYhd8K%2FB3YmCUGjdw%0APcOV3NIZSci0xKLTrKc%3D%0A)

[![Image 2](../../.gitbook/assets/imported/loop-automation-action-2.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1324366779/1036a241fb1d19e2358f1d55f41b/loop-action-2.jpg?expires=1757741400&signature=e1c83e276eb897072b6f151664f848df1d68bfbda30cde73149fb168134260f9&req=dSMlEsp4m4ZYUPMW1HO4zaBFY92Id0oSL0tHnPWRo0SZix0ttmACmSHZF2J9%0AFcvy5UOIdDANMh8MMWk%3D%0A)

Once the setup process is complete, proceed to the next section.

**Add a Loop Action**
---------------------

[![Image 3](../../.gitbook/assets/imported/loop-automation-action-3.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321842284/58078fac10dd03fbbf7e7bc068fc/loop-3.jpg?expires=1757741400&signature=8ec5ce3200926a5816be38223f25c554868f0f0ca1d74a7bc218a97fa60bb8b0&req=dSMlF8F6n4NXXfMW1HO4zYEiF%2FVnb%2FgOZ5HvLedRvNPCpB60c8EBQF9%2BsOFU%0A8nojeNuaR6UFMf5UrbQ%3D%0A)

[![Image 4](../../.gitbook/assets/imported/loop-automation-action-4.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321844070/54557d6f0e194b1ef9f6eccf231c/loop-4.jpg?expires=1757741400&signature=2d1b250451b4e477d611ddfa64ae3beed8b64dabcf0ca507e8eccd690200b022&req=dSMlF8F6mYFYWfMW1HO4zaSnCt7n0BUpfX6kdBPpiEu8dYqxLGVfz%2FYNEOat%0AhBfXdqu4ACmytvbRfwY%3D%0A)

**Customize Your Loop**
-----------------------

Inside the loop, configure the actions to perform on each item. For example:

[![Image 5](../../.gitbook/assets/imported/loop-automation-action-5.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321846932/f960258ea9b98ec416e0cc0a8bd4/loop-5.jpg?expires=1757741400&signature=5d94c6859db6cc25571d1c7a07512b33bbd4d73d0f4c1343fd889ed064f59b4e&req=dSMlF8F6m4hcW%2FMW1HO4zYWD7QVaNELCvHbnKQcXp8SiqmsCHrFEdnm%2BcU2p%0AQg0dZozMYl9e0T0IGRA%3D%0A)

Loop Settings
-------------

Connector options give you full control over the Loop action:

Use Cases
---------

Not sure how to use the Loop action? Here are a few ideas:

**🪄 Use Case**💭 **Scenario**⏩ **Action Flow**
**Bulk email notifications**Send personalized emails to multiple team members.Use **Find Rows** in Google Sheets to retrieve a list of team members and their email addresses. Add a **Loop** action to iterate through the list. For each iteration, send a customized email using the retrieved name and email address.
**Social media management**Schedule multiple social media posts.Use **Find Rows** to retrieve post content (text, images, and schedule times) from a Google Sheet. Add a **Loop** action to iterate through the rows. For each iteration, post the content to the specified platform (e.g., Twitter, Instagram, X) and schedule it.
**Automated task assignment**Assign tasks to team members based on a task list.Use **Find Tasks** with Taskade to retrieve unassigned tasks. Add a **Loop** action to iterate through the task list. For each iteration, assign the task to a team member dynamically based on a predefined assignment rule.
**Customer support ticket processing**Process a list of unresolved tickets.Use **Find Rows** to retrieve unresolved ticket data (e.g., ID, issue description) from a Google Sheet. Add a **Loop** action to iterate through the tickets. For each iteration, perform actions such as sending a follow-up email, logging the ticket in a CRM, or notifying a support agent.
**Bulk API calls for data synchronization**Sync products/records between two systems.Use **Find Rows** to retrieve a list of products from a database or spreadsheet. Add a **Loop** action to iterate through the product list. For each product, call an API to update or create the product in the target system.
**Dynamic content curation**Generate daily newsletters with curated content.Use **Find Tasks** to retrieve saved articles or posts for the day. Add a **Loop** action to iterate through the articles. For each iteration, format the article content and append it to the newsletter template before sending it out.
**Survey response processing**Analyze responses and take actions based on specific answers.Use **Find Rows** to retrieve survey responses from Google Sheets. Add a **Loop** action to iterate through the responses. For each iteration, send a follow-up email, categorize the response, or log it into a database for analysis.
### **😊 Helpful Links**
### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Actions](https://help.taskade.com/en/articles/8958470-automation-actions)[Google Sheets Integration](https://help.taskade.com/en/articles/8958475-google-sheets-integration)[Transform Array Into String (Automation Action)](https://help.taskade.com/en/articles/10498015-transform-array-into-string-automation-action)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)[Daily To-Do Reminder Automation](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation)