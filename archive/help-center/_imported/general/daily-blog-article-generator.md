---
title: "Daily Blog Article Generator"
description: "Use Taskade to turn titles into articles automatically, using AI Agents and automations generate and post articles on a daily basis."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10575689-daily-blog-article-generator"
intercom_id: "10575689"
state: "published"
date_created: "1739863441"
date_updated: "1751613550"
date_imported: "2025-09-13T18:52:34.942Z"
---

Title: Daily Blog Article Generator | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10575689-daily-blog-article-generator

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator#main-content)

[![Image 1: Taskade Help Center](https://downloads.intercomcdn.com/i/o/490280/d14603621e78c833c2d0e66f/2d1230f35f3009fff25b2989e93312a5.png)](https://help.taskade.com/en/)

Table of contents

[Overview](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator#h_03dfc95f3c)[Create the Automation](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator#h_fe92ce103e)

Use Taskade to turn titles into articles automatically, using AI Agents and automations generate and post articles on a daily basis.

Updated over 2 months ago

Table of contents

[Overview](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator#h_03dfc95f3c)[Create the Automation](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator#h_fe92ce103e)

Overview
--------

Effortlessly creating engaging blog content is now possible with automation. With Taskade, content creators, bloggers, and marketers can work together to automatically generate blog articles by simply providing a title. This automation utilizes AI to craft blog articles and automatically post them to WordPress.

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385025034/c93d2b7588b2eba157b5f6607081/CleanShot+2025-02-18+at+15_45_04%402x.png?expires=1757790900&signature=72c71f37be3a0bbbd3dbdcc2eb7dfc17fc72c48128a77462c4dc2cda5dda8553&req=dSMvE8l8mIFcXfMW1HO4zfVCeirm04ezia3KGcCrzd0htZCiYB6LoLm8xCIz%0A5KJJIQRmP%2BVhoT9yw9I%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385025034/c93d2b7588b2eba157b5f6607081/CleanShot+2025-02-18+at+15_45_04%402x.png?expires=1757790900&signature=72c71f37be3a0bbbd3dbdcc2eb7dfc17fc72c48128a77462c4dc2cda5dda8553&req=dSMvE8l8mIFcXfMW1HO4zfVCeirm04ezia3KGcCrzd0htZCiYB6LoLm8xCIz%0A5KJJIQRmP%2BVhoT9yw9I%3D%0A)

Click here to access the kit and quickly get started.

​

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1587228318/592bd825e5658b3dabda97e1696d/ADD-2BTO-2BWORKSPACE1.png?expires=1757790900&signature=1f15aba65aa04207fb60f66b997ea51a25949d972287d7e1b12259c44862cc43&req=dSUvEct8lYJeUfMW1HO4zXGtdfNrEsaDtwB6Uog3lU3yT7ry62jA2Z7RJemR%0AhSlFWsc2BSPFdJsfl0I%3D%0A)](https://www.taskade.com/k/01JMC0ETJBVSMFA2MP0HZHCMYZ)

Here's what we'll cover:

*   How to set up an automation to run daily, looking through a Taskade project for any articles that have not been generated, generate them, post them on WordPress, and then update the post status of the tasks in the project.

Create the Automation
---------------------

We will be using a basic blog writing [agent generated](https://help.taskade.com/en/articles/9314104-ai-agent-generator) to help with creating the article from a title in a Taskade project. Ensure that the project has a [Custom Field](https://intercom.help/taskade/en/articles/9767679-custom-fields) to track the post status of the blogs and the link to the generated article.

*   Create the Automation

    1.   Create a trigger and select **Every Day**, select the time and timezone you want the automation to run.

    2.   Add the **Find Task** action and set the **Tasks to Return** to **Return all matching tasks as array**. Select the project used to keep track of the blog articles.

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385023639/8d4f26671a1a064d9cb53c1654aa/CleanShot+2025-02-18+at+15_43_13%402x.png?expires=1757790900&signature=4b470d97196455a0c355f793773a9eb64669694120b96ec660759bc11b945fc0&req=dSMvE8l8nodcUPMW1HO4zcBveducHSvc9YguTEVIfKOKpsRSPNMJtr3MoQgw%0AHMC9%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385023639/8d4f26671a1a064d9cb53c1654aa/CleanShot+2025-02-18+at+15_43_13%402x.png?expires=1757790900&signature=4b470d97196455a0c355f793773a9eb64669694120b96ec660759bc11b945fc0&req=dSMvE8l8nodcUPMW1HO4zcBveducHSvc9YguTEVIfKOKpsRSPNMJtr3MoQgw%0AHMC9%0A)

    3.   Add a **Loop** action and reference the **Array of matching tasks** as the variable.

    4.   Within the **Loop** action, add a **Run Agent Command, Create Project, Create Post (Wordpress)** and **Update Custom Fields** actions respectively.

    5.   In the **Run Agent Command**action, select the **Blog Writing agent** and use an appropriate command to generate the article, ensure that the blog title is referenced using the **@ symbol**.

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385023998/0f1a9fbdef1992a8240ae49ab153/CleanShot+2025-02-18+at+15_43_42%402x.png?expires=1757790900&signature=36e39b7af7a9c87841041b05837f749e1ac9ec11e3fbeed4b1434521b04cd305&req=dSMvE8l8nohWUfMW1HO4zamRIiw2HOQrr4vLuJ9knoSa8BwvSMh7ADK3RZ6I%0AQChe%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385023998/0f1a9fbdef1992a8240ae49ab153/CleanShot+2025-02-18+at+15_43_42%402x.png?expires=1757790900&signature=36e39b7af7a9c87841041b05837f749e1ac9ec11e3fbeed4b1434521b04cd305&req=dSMvE8l8nohWUfMW1HO4zamRIiw2HOQrr4vLuJ9knoSa8BwvSMh7ADK3RZ6I%0AQChe%0A)

    6.   In the **Create Project** action, reference the article generated to help keep a record of the generated article.

    7.   In the **Create Post** action, reference the article generated using the **@ symbol**.

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385024242/4c40e50c6579dba8a545027066e0/CleanShot+2025-02-18+at+15_44_05%402x.png?expires=1757790900&signature=e0fdc0b93c28abfa37c888f333ce78ac990d241f5896bea79b815dac2767c50d&req=dSMvE8l8mYNbW%2FMW1HO4zRGIpubYQJsq7GTo2gRcS%2BND%2FhouquudgenOqChj%0A2G64%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385024242/4c40e50c6579dba8a545027066e0/CleanShot+2025-02-18+at+15_44_05%402x.png?expires=1757790900&signature=e0fdc0b93c28abfa37c888f333ce78ac990d241f5896bea79b815dac2767c50d&req=dSMvE8l8mYNbW%2FMW1HO4zRGIpubYQJsq7GTo2gRcS%2BND%2FhouquudgenOqChj%0A2G64%0A)

    8.   In the **Update Custom Field** action, reference the **Task ID** for the current item using the **@ symbol** and update the status of the article as **Posted**.

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385024423/8323302d5bf6bdfdc0bbc11fe95c/CleanShot+2025-02-18+at+15_44_26%402x.png?expires=1757790900&signature=0a6e44b12be97ac37b0220fb3391d7ded9fd20f9748304a6afaa8acd8025cc55&req=dSMvE8l8mYVdWvMW1HO4zbcGuxU0xrEsMRwoOXasZJNgeG%2FqG3w9RsRBqGnG%0AGwJA%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1385024423/8323302d5bf6bdfdc0bbc11fe95c/CleanShot+2025-02-18+at+15_44_26%402x.png?expires=1757790900&signature=0a6e44b12be97ac37b0220fb3391d7ded9fd20f9748304a6afaa8acd8025cc55&req=dSMvE8l8mYVdWvMW1HO4zbcGuxU0xrEsMRwoOXasZJNgeG%2FqG3w9RsRBqGnG%0AGwJA%0A)

### 😊**Helpful Links**

* * *

Related Articles

[WordPress Integration](https://help.taskade.com/en/articles/8958481-wordpress-integration)[Generate Social Media Posts from Videos and Files](https://help.taskade.com/en/articles/10441206-generate-social-media-posts-from-videos-and-files)[Generate LinkedIn and Facebook Posts from News Articles](https://help.taskade.com/en/articles/10501670-generate-linkedin-and-facebook-posts-from-news-articles)[Daily To-Do Reminder Automation](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation)[Automate Social Media Posting](https://help.taskade.com/en/articles/11135625-automate-social-media-posting)

Did this answer your question?
