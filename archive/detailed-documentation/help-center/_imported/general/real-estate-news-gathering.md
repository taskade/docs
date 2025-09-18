---
title: "Real Estate News Gathering"
description: "Use Taskade to automatically gather and extract key information from your news websites."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10382856-real-estate-news-gathering"
intercom_id: "10382856"
state: "published"
date_created: "1736737932"
date_updated: "1751614343"
date_imported: "2025-09-13T18:55:40.149Z"
---

Title: Real Estate News Gathering | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10382856-real-estate-news-gathering

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/10382856-real-estate-news-gathering#main-content)

[![Image 1: Taskade Help Center](https://downloads.intercomcdn.com/i/o/490280/d14603621e78c833c2d0e66f/2d1230f35f3009fff25b2989e93312a5.png)](https://help.taskade.com/en/)

Use Taskade to automatically gather and extract key information from your news websites.

Updated over 2 months ago

Overview
--------

Staying up-to-date with the latest real estate news requires seamless automation. With Taskade, real estate professionals, analysts, and marketers can collaborate to automatically track new articles, extract vital information, and efficiently organize data into existing spreadsheets through an RSS feed.

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332111182/300b37f9160a34942cd37d8316bf/Ask+Agent+Action+back.png?expires=1757791800&signature=4b45f90743e3b860bd5661d8397ed6303ec47470ffe9a08b627055208dff7591&req=dSMkFMh%2FnIBXW%2FMW1HO4zeWRopRoahXIn0kFnDFEsqsoPG%2Bns7qgO9O%2FJ3Du%0AEZaaGinACMMRhlPQRkA%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332111182/300b37f9160a34942cd37d8316bf/Ask+Agent+Action+back.png?expires=1757791800&signature=4b45f90743e3b860bd5661d8397ed6303ec47470ffe9a08b627055208dff7591&req=dSMkFMh%2FnIBXW%2FMW1HO4zeWRopRoahXIn0kFnDFEsqsoPG%2Bns7qgO9O%2FJ3Du%0AEZaaGinACMMRhlPQRkA%3D%0A)

Click here to access the kit and quickly get started.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1589060710/a68e55b9763116d90962cf53bca0/Kits-2BPNG-2B2.png?expires=1757791800&signature=0c5ceadba7f57b48b32663d8a7202b0d62be0e78a93c2f0b7fbd0da434328f8c&req=dSUvH8l4nYZeWfMW1HO4zYtU%2FlnTB29D9S79J5%2FXbzM%2BfYM9W8OoL%2BETRpSa%0AKMZ%2F2GTFptcv22xiilQ%3D%0A)](https://www.taskade.com/bundle/01JHEXT1D4Y6FT919S6HX0BHH8)

Here's what we'll cover:

*   How to generate a basic agent to help with information gathering.

*   How to set up an automation to poll from a RSS feed, have the agent filter key information and add it in an existing Google Spreadsheet.

​

Generating an Agent
-------------------

*   
    1.   Click on **Create agent** or **Create with AI** in the AI agents tab of the workspace.

    2.   Describe your agent's task as a prompt for the agent to be generated. In this use case, we will be creating an agent to help with extracting information from news articles.

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332107682/abcef2bb6a809cad2da1a29b2834/Generate+an+Agent+Back.png?expires=1757791800&signature=09ea97453a9eea72846068413931d501820928ba0c5e3624270036879347ca41&req=dSMkFMh%2BmodXW%2FMW1HO4za1JSVdMW3fHMUR1ozjQv4cZ8KsB1gwjnt5L%2BYoO%0AyjxAzx0DUKozcTzqQMg%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332107682/abcef2bb6a809cad2da1a29b2834/Generate+an+Agent+Back.png?expires=1757791800&signature=09ea97453a9eea72846068413931d501820928ba0c5e3624270036879347ca41&req=dSMkFMh%2BmodXW%2FMW1HO4za1JSVdMW3fHMUR1ozjQv4cZ8KsB1gwjnt5L%2BYoO%0AyjxAzx0DUKozcTzqQMg%3D%0A)

Create the Automation
---------------------

*   
    1.   Create a trigger and select **New Item in Feed.**Fill in the Trigger with the RSS Feed URL of your news website.

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332111895/842d9a128084884e14b627d9d521/RSS+Trigger+Back.png?expires=1757791800&signature=71e45fddd2a7269387fe6712d6b9d7e8f22dc2d7a2b9d53ece9273e64d06ef19&req=dSMkFMh%2FnIlWXPMW1HO4zZWrFGN8je9i%2F5dZavM7ILUI9HpjdP3CPr92gh6Q%0AcR%2Fn%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332111895/842d9a128084884e14b627d9d521/RSS+Trigger+Back.png?expires=1757791800&signature=71e45fddd2a7269387fe6712d6b9d7e8f22dc2d7a2b9d53ece9273e64d06ef19&req=dSMkFMh%2FnIlWXPMW1HO4zZWrFGN8je9i%2F5dZavM7ILUI9HpjdP3CPr92gh6Q%0AcR%2Fn%0A)

    2.   Add the actions **Ask Agent, Create Project** and **Insert Row (Google Sheets)** in that respective order.

    3.   In the **Ask Agent** action, select the agent we generated, add a prompt requesting the agent to help break down the article. The content of the article obtained from the trigger can be referenced with the **@ symbol**.

    4.   In the **Ask Agent action**, change the **Output Type**to **Structured Output**. This will allow specific information to be extracted and referenced in later actions.

    5.   Give a specific name and description to the **Fields** added, this will help the AI identify what information should be extracted.

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112143/d8600367020bc55604d8bf38357f/Ask%2BAgent%2BAction%2Bback.png?expires=1757791800&signature=8c1b60200156c184084dbde9e0c6fa101c6bae79c04c7679484b9a8f518a77b1&req=dSMkFMh%2Fn4BbWvMW1HO4zXET3Gp86XkzEmBL1nhSnuZ0EPQaE0GzJM7HqjN9%0AeNFy%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112143/d8600367020bc55604d8bf38357f/Ask%2BAgent%2BAction%2Bback.png?expires=1757791800&signature=8c1b60200156c184084dbde9e0c6fa101c6bae79c04c7679484b9a8f518a77b1&req=dSMkFMh%2Fn4BbWvMW1HO4zXET3Gp86XkzEmBL1nhSnuZ0EPQaE0GzJM7HqjN9%0AeNFy%0A)

    6.   In the **Create Project action**, a simple reference of the key information is used to help check if the correct information is being extracted.

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112443/dd5d2e514ae0d51d5d22875b82e5/Create+Project+action+back.png?expires=1757791800&signature=87d1e6a1c13efd316c35a999d47d16c4acad09c30d09d6b918ccc1c862bc1949&req=dSMkFMh%2Fn4VbWvMW1HO4zbh6%2BgUOhX5k3AoH3KZGa087UpMfmQ8dO2qVV1XE%0Ahy9o%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112443/dd5d2e514ae0d51d5d22875b82e5/Create+Project+action+back.png?expires=1757791800&signature=87d1e6a1c13efd316c35a999d47d16c4acad09c30d09d6b918ccc1c862bc1949&req=dSMkFMh%2Fn4VbWvMW1HO4zbh6%2BgUOhX5k3AoH3KZGa087UpMfmQ8dO2qVV1XE%0Ahy9o%0A)

    7.   In the **Insert Row action**, connect your Google Account and select the related Spreadsheet and Sheet. **The Fields in the Sheet always refer to the content in Row 1 of the Sheet.**

    8.   In the **Insert Row action**, add the respective fields and refer to the key information by using the **@ symbol.**

[![Image 8](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112693/3ae82e718235ed8395b5072d400c/Insert+Row+action+back.png?expires=1757791800&signature=3bdac9e059171e78aae920679b664dcbad009e3dc5385760dc93d2742014a895&req=dSMkFMh%2Fn4dWWvMW1HO4zSwEWubKOzIJABjymf2ywSr8lRvbVeXEIIhIovn1%0AnivU%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112693/3ae82e718235ed8395b5072d400c/Insert+Row+action+back.png?expires=1757791800&signature=3bdac9e059171e78aae920679b664dcbad009e3dc5385760dc93d2742014a895&req=dSMkFMh%2Fn4dWWvMW1HO4zSwEWubKOzIJABjymf2ywSr8lRvbVeXEIIhIovn1%0AnivU%0A)

[![Image 9](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112984/840b76acb38d6bb894c44a572ffb/Google+Sheet+Example+back.png?expires=1757791800&signature=57471229d9b54943d6f4382d2b37fa807f6672b5d3455993116927889ec9d7f7&req=dSMkFMh%2Fn4hXXfMW1HO4zWRbLJ2iagOLrsvlOtg6D9y5mFiclor%2BjzD5abQB%0AHzC%2B%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1332112984/840b76acb38d6bb894c44a572ffb/Google+Sheet+Example+back.png?expires=1757791800&signature=57471229d9b54943d6f4382d2b37fa807f6672b5d3455993116927889ec9d7f7&req=dSMkFMh%2Fn4hXXfMW1HO4zWRbLJ2iagOLrsvlOtg6D9y5mFiclor%2BjzD5abQB%0AHzC%2B%0A)

### 😊**Helpful Links**

* * *

Related Articles

[Generate LinkedIn and Facebook Posts from News Articles](https://help.taskade.com/en/articles/10501670-generate-linkedin-and-facebook-posts-from-news-articles)[Automating Data Extraction from Insurance Agent Chatbot](https://help.taskade.com/en/articles/10530991-automating-data-extraction-from-insurance-agent-chatbot)[Real Estate News Gathering Kit](https://help.taskade.com/en/articles/10545012-real-estate-news-gathering-kit)[Streamlining Contract Management](https://help.taskade.com/en/articles/11122004-streamlining-contract-management)[Gather and Manage Partner Information](https://help.taskade.com/en/articles/11168119-gather-and-manage-partner-information)

Did this answer your question?
