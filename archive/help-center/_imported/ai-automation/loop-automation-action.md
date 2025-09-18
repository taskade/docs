---
title: "Loop (Automation Action)"
description: "Automate and iterate data tasks with the Loop action."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10351362-loop-automation-action"
intercom_id: "10351362"
state: "published"
date_created: "1736073122"
date_updated: "1747135039"
date_imported: "2025-09-13T18:56:06.216Z"
---

Title: Loop (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10351362-loop-automation-action

Markdown Content:
Copyright (c) 2023, Intercom, Inc. ([[email protected]](https://help.taskade.com/cdn-cgi/l/email-protection)) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. ([[email protected]](https://help.taskade.com/cdn-cgi/l/email-protection)) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10351362-loop-automation-action#main-content)

Automate and iterate data tasks with the Loop action.

Updated over 4 months ago

Table of contents

**Overview**
------------

The Loop action allows your automation to repeat a set of steps for each item in a list. This makes it possible to create dynamic workflows that respond to your data, supporting [filters](https://help.taskade.com/en/articles/9615031-filter-data-automation-action), [conditional branches](https://help.taskade.com/en/articles/9805047-branch-automation-action), and even nested loops when needed.

**How to Use Loops**
--------------------

**Prepare the Data Array**
--------------------------

To use a loop, you need an array of data. You can create arrays with these actions:

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1324366328/2d025512a3e35b73b97ca8d1b706/loop-action-1.jpg?expires=1757791800&signature=1d88d8ffe73b6e3bf3f8fa782b2189d75f7e62e09ea6947bf75b893a1ea94648&req=dSMlEsp4m4JdUfMW1HO4zT%2BqCmqpjHkLNum5Ak2TkhXHvj5yuXVv9243HPdO%0AMDA9LTZ2cmgnzqMzN8Y%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1324366328/2d025512a3e35b73b97ca8d1b706/loop-action-1.jpg?expires=1757791800&signature=1d88d8ffe73b6e3bf3f8fa782b2189d75f7e62e09ea6947bf75b893a1ea94648&req=dSMlEsp4m4JdUfMW1HO4zT%2BqCmqpjHkLNum5Ak2TkhXHvj5yuXVv9243HPdO%0AMDA9LTZ2cmgnzqMzN8Y%3D%0A)

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1324366779/1036a241fb1d19e2358f1d55f41b/loop-action-2.jpg?expires=1757791800&signature=6fa006c33c509c8d39efa52f716590563eddc5fcdb2d20d68e6521d2f8aaedf3&req=dSMlEsp4m4ZYUPMW1HO4zaBFY92IekoeL0tHnPWRo0SmSdD3DVYgsqSYf0kv%0AEwXM99j%2BSPV0gxQwZf4%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1324366779/1036a241fb1d19e2358f1d55f41b/loop-action-2.jpg?expires=1757791800&signature=6fa006c33c509c8d39efa52f716590563eddc5fcdb2d20d68e6521d2f8aaedf3&req=dSMlEsp4m4ZYUPMW1HO4zaBFY92IekoeL0tHnPWRo0SmSdD3DVYgsqSYf0kv%0AEwXM99j%2BSPV0gxQwZf4%3D%0A)

Once the setup process is complete, proceed to the next section.

**Add a Loop Action**
---------------------

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321842284/58078fac10dd03fbbf7e7bc068fc/loop-3.jpg?expires=1757791800&signature=4ce83b20511a1098ddc4ab54f917fd6ff07d585b60200bd58f3fed418db5c72a&req=dSMlF8F6n4NXXfMW1HO4zYEiF%2FVnYvgCZ5HvLedRvNMpzMCyNu6DunkIbEEU%0AnTMsf7vD7yXkv%2FbPVTE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321842284/58078fac10dd03fbbf7e7bc068fc/loop-3.jpg?expires=1757791800&signature=4ce83b20511a1098ddc4ab54f917fd6ff07d585b60200bd58f3fed418db5c72a&req=dSMlF8F6n4NXXfMW1HO4zYEiF%2FVnYvgCZ5HvLedRvNMpzMCyNu6DunkIbEEU%0AnTMsf7vD7yXkv%2FbPVTE%3D%0A)

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321844070/54557d6f0e194b1ef9f6eccf231c/loop-4.jpg?expires=1757791800&signature=f355a6de292c1e1d9a83e78f2bdcb45ad301d4c2cddd03eb180615d5d01af69a&req=dSMlF8F6mYFYWfMW1HO4zaSnCt7n3RUlfX6kdBPpiEttncsVTBxei7x3U0cB%0Ae0CZpKpvUpb1mG0Tl24%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321844070/54557d6f0e194b1ef9f6eccf231c/loop-4.jpg?expires=1757791800&signature=f355a6de292c1e1d9a83e78f2bdcb45ad301d4c2cddd03eb180615d5d01af69a&req=dSMlF8F6mYFYWfMW1HO4zaSnCt7n3RUlfX6kdBPpiEttncsVTBxei7x3U0cB%0Ae0CZpKpvUpb1mG0Tl24%3D%0A)

**Customize Your Loop**
-----------------------

Inside the loop, configure the actions to perform on each item. For example:

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321846932/f960258ea9b98ec416e0cc0a8bd4/loop-5.jpg?expires=1757791800&signature=96c00032c4b4c9e085c62413a75b686053bedd25e908cca255e00d447344334b&req=dSMlF8F6m4hcW%2FMW1HO4zYWD7QVaOULOvHbnKQcXp8SXntu0P4RZd4QxrRGV%0AFaswt%2BqESkl4cm3wU5U%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1321846932/f960258ea9b98ec416e0cc0a8bd4/loop-5.jpg?expires=1757791800&signature=96c00032c4b4c9e085c62413a75b686053bedd25e908cca255e00d447344334b&req=dSMlF8F6m4hcW%2FMW1HO4zYWD7QVaOULOvHbnKQcXp8SXntu0P4RZd4QxrRGV%0AFaswt%2BqESkl4cm3wU5U%3D%0A)

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
