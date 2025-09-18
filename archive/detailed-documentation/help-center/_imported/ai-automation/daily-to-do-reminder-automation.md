---
title: "Daily To-Do Reminder Automation"
description: "Use Taskade to help manage your daily tasks, use an automation to send you updates about your daily tasks."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation"
intercom_id: "10544835"
state: "published"
date_created: "1739339766"
date_updated: "1751613093"
date_imported: "2025-09-13T18:53:02.648Z"
---

Title: Daily To-Do Reminder Automation | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation

Markdown Content:
Daily To-Do Reminder Automation | Taskade Help Center

===============

Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#main-content)

[![Image 4: Taskade Help Center](https://downloads.intercomcdn.com/i/o/490280/d14603621e78c833c2d0e66f/2d1230f35f3009fff25b2989e93312a5.png)](https://help.taskade.com/en/)

[Home](https://www.taskade.com/)[Contact us](https://www.taskade.com/contact)[Sign up for free](https://www.taskade.com/signup)

English

[Home](https://www.taskade.com/)[Contact us](https://www.taskade.com/contact)[Sign up for free](https://www.taskade.com/signup)

English

Search for articles... 

Table of contents

[Overview](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#h_47cdb2b1d3)[Creating the Automation](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#h_815143ff11)[Automation Variations](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#h_065a59450c)

[All Collections](https://help.taskade.com/en/)[Use Cases](https://help.taskade.com/en/collections/8400901-use-cases)[Universal use cases](https://help.taskade.com/en/collections/10604075-universal-use-cases)

Daily To-Do Reminder Automation

Daily To-Do Reminder Automation
===============================

Use Taskade to help manage your daily tasks, use an automation to send you updates about your daily tasks.

Updated over 2 months ago

Table of contents

[Overview](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#h_47cdb2b1d3)[Creating the Automation](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#h_815143ff11)[Automation Variations](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation#h_065a59450c)

Overview
--------

Track your daily tasks using Taskade, automatically receive daily reminders about the remaining items on your To-Do list through Email or Slack Messages to stay on top of your tasks.

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376615010/6a889d5bf02374a39ce4a60e6cc8/CleanShot+2025-02-12+at+15_46_20%402x.png?expires=1757791800&signature=fbce5fb7319d00a26999e0778875ef5f4092ad9cbe5bf724bf6ca690533cd97c&req=dSMgEM9%2FmIFeWfMW1HO4zV4dlcxUSvt%2FlIxn4%2BxIuCLmOpWLSGNfSouLH1S3%0A%2Bbv4a2qA8r0Gr2Lmhi8%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376615010/6a889d5bf02374a39ce4a60e6cc8/CleanShot+2025-02-12+at+15_46_20%402x.png?expires=1757791800&signature=fbce5fb7319d00a26999e0778875ef5f4092ad9cbe5bf724bf6ca690533cd97c&req=dSMgEM9%2FmIFeWfMW1HO4zV4dlcxUSvt%2FlIxn4%2BxIuCLmOpWLSGNfSouLH1S3%0A%2Bbv4a2qA8r0Gr2Lmhi8%3D%0A)

Click here to access the kit and quickly get started.

​

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1583688093/0c465886bb7aef01b061a9bf941a/ADD+TO+WORKSPACE1.png?expires=1757791800&signature=fb4d9daba2805817e70f17f85e75e9a6ea840ff6ae42e14b8f07e92f1e266a88&req=dSUvFc92lYFWWvMW1HO4zV6h9aCcosHjpqZPGws9S63zIq4WWwfOmqiItKcL%0Ag1boiAymZKcpl7XiX0Q%3D%0A)](https://www.taskade.com/k/01JKWJ5MAT7V3A0C71EZTKFCXX)

Here's what we'll cover:

*   How to create an automation to help send you reminders about your uncompleted tasks in your To-Do list.  
*   How to use additional filters to get reminders for tasks with specific priorities. 

* * *

Creating the Automation
-----------------------

In this example, we will demonstrate how to use the **Find Task** and **Transform Array Into String** action to obtain tasks from a project and send a reminder every day at a specified time.

*   Create an Automation  

    1.   Create a **Trigger** and click on **Every Day**, set the **Time Of Day** you would like receive the reminders and the **Time Zone** to use.  
    2.   Add a **Find Task(s)** and **Transform Array Into String** action.  
    3.   In the **Find Task(s)** action, select the Taskade project that your tasks are located in. Set the **Tasks to Return** to be **Return all matching tasks as array**.  
    4.   Under the **Identify Tasks** section click **Add Filter**, in the **Field** section select the **Task Completed At** option, in **Condition** select the **Is Empty** option. This means that the Task has not been completed.  [![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376611777/0d42e885924e556391acbf8095b8/CleanShot+2025-02-12+at+15_43_10%402x.png?expires=1757791800&signature=c6275c6b94a628b6d9a451babee9e02ce9a7f4d240212ebd48c01a73a0c21f6b&req=dSMgEM9%2FnIZYXvMW1HO4zcw2mwtiZ98dxSbGeoHS%2BI3Zh%2B%2B4zDznMDckXTSJ%0ApviN%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376611777/0d42e885924e556391acbf8095b8/CleanShot+2025-02-12+at+15_43_10%402x.png?expires=1757791800&signature=c6275c6b94a628b6d9a451babee9e02ce9a7f4d240212ebd48c01a73a0c21f6b&req=dSMgEM9%2FnIZYXvMW1HO4zcw2mwtiZ98dxSbGeoHS%2BI3Zh%2B%2B4zDznMDckXTSJ%0ApviN%0A)  
    5.   In the **Transform Array Into String** action, reference the **Array of matching tasks** in the **Array** field, arrange how you want each individual task to be displayed, scroll down to the **Preview** section to see how several task will end up looking like.  [![Image 8](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376613269/d0c2275a04887034c97adb46532c/CleanShot+2025-02-12+at+15_44_46%402x.png?expires=1757791800&signature=d630746d93b94ab3b398a7d2a62dfc5bb31a3cf955b171d363d1fec2fcd756d0&req=dSMgEM9%2FnoNZUPMW1HO4zYyikOE0G1x9psftcXdMiCdY66dBP7ldRCF8XjJV%0AnpmW%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376613269/d0c2275a04887034c97adb46532c/CleanShot+2025-02-12+at+15_44_46%402x.png?expires=1757791800&signature=d630746d93b94ab3b398a7d2a62dfc5bb31a3cf955b171d363d1fec2fcd756d0&req=dSMgEM9%2FnoNZUPMW1HO4zYyikOE0G1x9psftcXdMiCdY66dBP7ldRCF8XjJV%0AnpmW%0A)  
    6.   Add any action to you want to receive the reminder by, in this example we will use the **Slack****Send Channel Message** action. Reference the output from the previous step with the **@ symbol**.  [![Image 9](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376613763/d9bac64f4e145985b704b1a22b23/CleanShot+2025-02-12+at+15_45_14%402x.png?expires=1757791800&signature=9f79f7a422d35d362f0ff84ba06975a53d5bb0e05352ddb9b42403c24b00cf97&req=dSMgEM9%2FnoZZWvMW1HO4zS17nE0iJqAxSO%2BhZlEEcy8IwmMKzUc14XCK5QNy%0AsVx0%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376613763/d9bac64f4e145985b704b1a22b23/CleanShot+2025-02-12+at+15_45_14%402x.png?expires=1757791800&signature=9f79f7a422d35d362f0ff84ba06975a53d5bb0e05352ddb9b42403c24b00cf97&req=dSMgEM9%2FnoZZWvMW1HO4zS17nE0iJqAxSO%2BhZlEEcy8IwmMKzUc14XCK5QNy%0AsVx0%0A)  

* * *

Automation Variations
---------------------

In this example, we will demonstrate how the **Find Task(s)** action can use other filters to only send reminders about tasks with a specific priority.

*   Filtering by Priority  

    1.   Continuing from the previous automation set up, select the **Find Task(s)** action. Click the **And** button below the first filter set.  
    2.   Select any [Custom Field](https://intercom.help/taskade/en/articles/9767679-custom-fields) that you are using to track the task's priority, in this example we will be using the default priority custom field.  
    3.   Select **Exactly matches** in the **Condition** field, select the desired priority in the **Value** field. 

[![Image 10](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376616173/08be83ca6898927787ca13230740/CleanShot+2025-02-12+at+15_47_28%402x.png?expires=1757791800&signature=d55e667cdd0f64eb3890b8a838afd93c30319bc46a2fe4921115f0de39d2767c&req=dSMgEM9%2Fm4BYWvMW1HO4zevE26jGpV%2B9EbDHvP4IXEw%2BxDRhmmlWsZsBd2it%0Apb6JiQKzctXfxxSRj%2Bg%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1376616173/08be83ca6898927787ca13230740/CleanShot+2025-02-12+at+15_47_28%402x.png?expires=1757791800&signature=d55e667cdd0f64eb3890b8a838afd93c30319bc46a2fe4921115f0de39d2767c&req=dSMgEM9%2Fm4BYWvMW1HO4zevE26jGpV%2B9EbDHvP4IXEw%2BxDRhmmlWsZsBd2it%0Apb6JiQKzctXfxxSRj%2Bg%3D%0A)

* * *

### 😊**Helpful Links**

*   Download our apps: [taskade.com/downloads](https://taskade.com/downloads) 
*   Leave feedback: [taskade.com/feedback](https://taskade.com/feedback) 
*   Changelog: [taskade.com/blog/updates](https://taskade.com/blog/updates) 
*   Watch tutorials: [youtube.com/taskade](https://youtube.com/taskade) 
*   Contact us: [taskade.com/contact](https://taskade.com/contact) 

* * *

Related Articles

[Google Docs Integration](https://help.taskade.com/en/articles/10101659-google-docs-integration)[Transform Array Into String (Automation Action)](https://help.taskade.com/en/articles/10498015-transform-array-into-string-automation-action)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)[Weekly Planner with AI Tools](https://help.taskade.com/en/articles/10505749-weekly-planner-with-ai-tools)[Daily Blog Article Generator](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator)

Did this answer your question?

😞😐😃

[![Image 11: Taskade Help Center](https://downloads.intercomcdn.com/i/o/566097/5267af56373cca21ec2cea67/2d1230f35f3009fff25b2989e93312a5.png)](https://help.taskade.com/en/)

11‌60 Battery St. East, Suite 100 San‌ Francisco, CA 94111, USA

*   [![Image 12](https://intercom.help/taskade/assets/svg/icon:social-linkedin/ffffff)](https://www.linkedin.com/company/taskade/)
*   [![Image 13](https://intercom.help/taskade/assets/svg/icon:social-facebook/ffffff)](https://www.facebook.com/taskade)
*   [![Image 14](https://intercom.help/taskade/assets/svg/icon:social-github/ffffff)](https://github.com/taskade)
*   [![Image 15](https://intercom.help/taskade/assets/svg/icon:social-instagram/ffffff)](https://www.instagram.com/taskade)
*   [![Image 16](https://intercom.help/taskade/assets/svg/icon:social-youtube/ffffff)](https://www.youtube.com/taskade)
*   [![Image 17](https://intercom.help/taskade/assets/svg/icon:social-reddit/ffffff)](https://www.reddit.com/r/taskade)
*   [![Image 18](https://intercom.help/taskade/assets/svg/icon:social-twitter-x/ffffff)](https://www.twitter.com/taskade)

Product

*   [Home](https://www.taskade.com/)
*   [Pricing](https://www.taskade.com/pricing)
*   [Features](https://www.taskade.com/features)

Community

*   [Forums](https://www.taskade.com/community)
*   [Customers](https://taskade.com/reviews)
*   [Developers](https://developers.taskade.com/)

Resources

*   [Blog](https://www.taskade.com/blog/)
*   [Learn AI](https://www.taskade.com/learn)
*   [Integrations](https://www.taskade.com/integrations)

Company

*   [About](https://www.taskade.com/about)
*   [Press](https://www.taskade.com/press)
*   [Security](https://www.taskade.com/security)
