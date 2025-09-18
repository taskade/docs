---
title: "Streamlining Contract Management"
description: "Use Taskade to automatically extract and organize key information from contracts and documents."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/11122004-streamlining-contract-management"
intercom_id: "11122004"
state: "published"
date_created: "1745313839"
date_updated: "1751614058"
date_imported: "2025-09-13T18:51:55.435Z"
---

Title: Streamlining Contract Management | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/11122004-streamlining-contract-management

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/11122004-streamlining-contract-management#main-content)

[![Image 1: Taskade Help Center](https://downloads.intercomcdn.com/i/o/490280/d14603621e78c833c2d0e66f/2d1230f35f3009fff25b2989e93312a5.png)](https://help.taskade.com/en/)

Use Taskade to automatically extract and organize key information from contracts and documents.

Updated over 2 months ago

Overview
--------

Today, you’ll learn how to use Taskade’s AI Forms to streamline the contract tracking process. Clients can submit forms with attached documents directly through Taskade - where Taskade can automatically extract and organize data from documents into a Google Spreadsheet, streamlining the entire process.

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497284890/2f9a7eae21ccf48e6306c2fac3d6/Screenshot+2025-04-28+at+3_50_04%E2%80%AFPM.png?expires=1757790900&signature=f3978d74377eee2010bc105c0fb950d5af000abbf1bfcbfe52ef2008cfa0a8aa&req=dSQuEct2mYlWWfMW1HO4zf1fzTHaDkCEyx%2B57eE8oXExstdqA%2BFX2yd38Hg3%0AljeGyXbw4EHoBQLyrJg%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497284890/2f9a7eae21ccf48e6306c2fac3d6/Screenshot+2025-04-28+at+3_50_04%E2%80%AFPM.png?expires=1757790900&signature=f3978d74377eee2010bc105c0fb950d5af000abbf1bfcbfe52ef2008cfa0a8aa&req=dSQuEct2mYlWWfMW1HO4zf1fzTHaDkCEyx%2B57eE8oXExstdqA%2BFX2yd38Hg3%0AljeGyXbw4EHoBQLyrJg%3D%0A)

Click here to access the kit and quickly get started.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1595015470/2a5a0e9f2312313edf0aa8998d2c/ADD+TO+WORKSPACE1.png?expires=1757790900&signature=599ea81c8c2b745deff537a371d381997ea5a060c3f03b6061ce5c5e7778bfd9&req=dSUuE8l%2FmIVYWfMW1HO4zdvlOP3OpTU6E2eSiotTxysyYYhlQUWPwPzzYN%2Bt%0A%2FnqGQ59rM6ocOVWk9sA%3D%0A)](https://www.taskade.com/k/01JSXKAEP46SS5FZYT98DRY7BK)

Here's what we'll cover:

*   How to set up an automation to collect form data including attached documents, filter key information and add it into an existing Google Spreadsheet.

*   Testing the automation, and publishing the form for client use.

Creating the Automation
-----------------------

*   
    1.   Create a trigger and select **[Form](https://help.taskade.com/en/articles/9711589-ai-forms-automation-trigger)**. Add the **Form Fields** you want to collect. To collect data from uploaded files, you will need to add a **File** field.

    2.   [![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285327/3d4afd02a43209fbabe79cb8c10d/1st.png?expires=1757790900&signature=9cd16aee821ae86ed8a9e60ca009cfca10990635eed495610619360387a4f832&req=dSQuEct2mIJdXvMW1HO4zSdT%2B%2BFsaS3QM%2BYeH7q0DjviaQg2Ceaufk12ewMg%0AuaGm%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285327/3d4afd02a43209fbabe79cb8c10d/1st.png?expires=1757790900&signature=9cd16aee821ae86ed8a9e60ca009cfca10990635eed495610619360387a4f832&req=dSQuEct2mIJdXvMW1HO4zSdT%2B%2BFsaS3QM%2BYeH7q0DjviaQg2Ceaufk12ewMg%0AuaGm%0A)

    3.   In the **Convert File to Text** action, reference the file URL from the **Form**trigger that you want to convert, by typing the **@ symbol**. This converts the document into text that can be used in the next step.

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285436/00efab7cebd0285a438b5e586fef/2nd.png?expires=1757790900&signature=9ea948c8f83cd30b030168fd611a80a6d4c4e879958bf8cbd31e23906ab5fde5&req=dSQuEct2mIVcX%2FMW1HO4zVWdruvwj8Uh6xOci7Q8n4sozHqOiNJOyzPxGw%2F%2B%0AuWcQ%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285436/00efab7cebd0285a438b5e586fef/2nd.png?expires=1757790900&signature=9ea948c8f83cd30b030168fd611a80a6d4c4e879958bf8cbd31e23906ab5fde5&req=dSQuEct2mIVcX%2FMW1HO4zVWdruvwj8Uh6xOci7Q8n4sozHqOiNJOyzPxGw%2F%2B%0AuWcQ%0A)

    4.   In the **Categorize with AI** action, input a prompt requesting the AI to extract and categorize information as needed from the **Convert File to Text** action. Type the **@ symbol**to reference the content from the action.

​

    5.   Under **Type**, select **Custom**. Add the fields that you want to be categorized, and name them **according to your prompt**.

    6.   In this example, I've added the fields: Client Name, Point of Contact and Email. This will allow the AI to properly categorize the information.

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285528/d6ee3e8ff7937643b55d128811ef/3.png?expires=1757790900&signature=ce586fde83bc916d864bffb0384a0b98eee21e6d854d0cf672f220781d33b940&req=dSQuEct2mIRdUfMW1HO4zRSFCGJBdAI4Av6rHgEhFjRsLUxKTpfmgjsm%2B0jQ%0AE8PZ%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285528/d6ee3e8ff7937643b55d128811ef/3.png?expires=1757790900&signature=ce586fde83bc916d864bffb0384a0b98eee21e6d854d0cf672f220781d33b940&req=dSQuEct2mIRdUfMW1HO4zRSFCGJBdAI4Av6rHgEhFjRsLUxKTpfmgjsm%2B0jQ%0AE8PZ%0A)

    7.   In the **Insert Row**action, connect your Google Account and select the related Spreadsheet and Sheet. The **Fields** that can be added in the action will always refer to the content in Row 1 of the Sheet.

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497170278/81ec7f3eec4bf92eee878b41c786/Frame+5-2.png?expires=1757790900&signature=843186e548c9251fb9a18e9e66dd315abb9a74cb4decdd76b0ba05c327505d6c&req=dSQuEch5nYNYUfMW1HO4zY7yt0ZOn30IEFhdHj4PKlQEjJf8btCRNtIMdMK8%0AB9Fu%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497170278/81ec7f3eec4bf92eee878b41c786/Frame+5-2.png?expires=1757790900&signature=843186e548c9251fb9a18e9e66dd315abb9a74cb4decdd76b0ba05c327505d6c&req=dSQuEch5nYNYUfMW1HO4zY7yt0ZOn30IEFhdHj4PKlQEjJf8btCRNtIMdMK8%0AB9Fu%0A)

    8.   In this example the **Fields**: ID, Client Name, Point of Contact, Email, Contact Number, and Additional Remarks can be added.

​

    9.   Add the respective fields and reference the key information from the **Categorize with AI**action or the **Form** trigger by using the **@ symbol** to fill up the columns with the right data.

[![Image 8](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285737/1e5ed53f364567aa6d271717748d/4.png?expires=1757790900&signature=942f26988c666aa80d4a854970cb4422f9ca4a145375a9b0f1d1d7830afffd51&req=dSQuEct2mIZcXvMW1HO4zcQKRwksKhi7h8YDMiofeiO7zaiqUks%2BQ4P8z%2BCI%0ATGMt%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497285737/1e5ed53f364567aa6d271717748d/4.png?expires=1757790900&signature=942f26988c666aa80d4a854970cb4422f9ca4a145375a9b0f1d1d7830afffd51&req=dSQuEct2mIZcXvMW1HO4zcQKRwksKhi7h8YDMiofeiO7zaiqUks%2BQ4P8z%2BCI%0ATGMt%0A)

    10.   In the **Upload File to Media**action, under **URL,**reference the **File**from the **Form**trigger by typing the **@ symbol**.

    11.   This allows you to save files uploaded through the **Form**, which are accessible from Taskade's **[Media Tab](https://help.taskade.com/en/articles/8958461-media-tab)**.

[![Image 9](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497287675/5db3e9346a5a186d6544fc79e9ef/5.png?expires=1757790900&signature=a319e53142770a416d06017d98ddc60b90fe7a118c32c468bdf902d51cab839e&req=dSQuEct2modYXPMW1HO4zWgrHHjrFQ4QaZR1hNVAUvCDTOji2m%2BJ3Nu63Jdr%0AE%2F%2BK%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497287675/5db3e9346a5a186d6544fc79e9ef/5.png?expires=1757790900&signature=a319e53142770a416d06017d98ddc60b90fe7a118c32c468bdf902d51cab839e&req=dSQuEct2modYXPMW1HO4zWgrHHjrFQ4QaZR1hNVAUvCDTOji2m%2BJ3Nu63Jdr%0AE%2F%2BK%0A)

    12.   Instead of using Google Sheets, you may organize the information in Taskade Projects ([Table View](https://help.taskade.com/en/articles/8958389-table-view)). In **Add Task**, select the appropriate **Project**. The **Fields** in the Project refer to the column names.

[![Image 10](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497287554/9de2bec448e8cc3f45cf1f4aa8da/6.png?expires=1757790900&signature=e68a052b5d080a8d6b70c3f576e8d28739ce918e0d24f4ecdbb6eb84a3c30db4&req=dSQuEct2moRaXfMW1HO4zVo7M5xbmR%2FIOlKDa3FJD1uFU7zMJ0ltrJVBe%2FG6%0AjhMx%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497287554/9de2bec448e8cc3f45cf1f4aa8da/6.png?expires=1757790900&signature=e68a052b5d080a8d6b70c3f576e8d28739ce918e0d24f4ecdbb6eb84a3c30db4&req=dSQuEct2moRaXfMW1HO4zVo7M5xbmR%2FIOlKDa3FJD1uFU7zMJ0ltrJVBe%2FG6%0AjhMx%0A)

Testing and Sharing the Form
----------------------------

*   Testing and Sharing

    1.   Click on the **Share** tab above to test your form and automation. Fill in the form with the necessary data and run the form.

    2.   If you want to share this with your clients, click on **Publish**to get a shareable link to the form, allowing others to fill it out.

[![Image 11](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497290327/3cf01583c48000b318680411939e/7.png?expires=1757790900&signature=f225d4b99d0f7f54b6a15aabc811633090646f7b459845804c0d9d581f450ac9&req=dSQuEct3nYJdXvMW1HO4zci2YVOPUEWW%2BynW2QqOpCr8OS7uif3t7kOxDHJZ%0Ajeid%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1497290327/3cf01583c48000b318680411939e/7.png?expires=1757790900&signature=f225d4b99d0f7f54b6a15aabc811633090646f7b459845804c0d9d581f450ac9&req=dSQuEct3nYJdXvMW1HO4zci2YVOPUEWW%2BynW2QqOpCr8OS7uif3t7kOxDHJZ%0Ajeid%0A)

Additional Customization
------------------------

Additional Actions

*   Consider adding additional actions like [Add Task](https://help.taskade.com/en/articles/9787788-add-task-automation-action), [Send Email](https://help.taskade.com/en/articles/8958474-gmail-integration), that make use of the information from the **Form**. Simply reference the **Form** fields, or content from the **Categorize with AI**action with the **@ symbol**.

### 😊**Helpful Links**

* * *

Related Articles

[Import PDF](https://help.taskade.com/en/articles/10316350-import-pdf)[Real Estate News Gathering](https://help.taskade.com/en/articles/10382856-real-estate-news-gathering)[Generate Social Media Posts from Videos and Files](https://help.taskade.com/en/articles/10441206-generate-social-media-posts-from-videos-and-files)[Automating Data Extraction from Insurance Agent Chatbot](https://help.taskade.com/en/articles/10530991-automating-data-extraction-from-insurance-agent-chatbot)[Gather and Manage Partner Information](https://help.taskade.com/en/articles/11168119-gather-and-manage-partner-information)

Did this answer your question?
