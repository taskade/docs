---
title: "Getting Started with Automation"
description: "Put your projects on autopilot with the automation feature in Taskade."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/8958467-getting-started-with-automation"
intercom_id: "8958467"
state: "published"
date_created: "1708097174"
date_updated: "1753532283"
date_imported: "2025-09-13T19:26:30.008Z"
---

Title: Getting Started with Automation | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/8958467-getting-started-with-automation

Markdown Content:
**Overview**
------------

Automations allow you to put routine tasks and projects on autopilot within fully customizable automation flows. You can use this powerful feature to:

**If This, Then That**
----------------------

Taskade Automation uses the simple but powerful "If this happens, then do that" logic. Think of it like setting up dominoes; when the first one falls (an event you choose), it makes the next one fall (an action you've set up).

Here are a few examples:

It's that simple.

**Triggers**
------------

Triggers kickstart automations by monitoring for specific conditions. Once the conditions are met, they prompt a chain of automated actions.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364512288/be23ec6388cf957a1f54de6fea1e/triggers.jpg?expires=1757793600&signature=184893618d94fbe547f28ad4b61c1035c5051a3e06fb0ca785f8eead75856f03&req=dSMhEsx%2Fn4NXUfMW1HO4zbdx3dYlxM2ZHY%2B1QRzq5HHM3Wv51ojDOWtkgojD%0AUXsK7W%2FVG1zl7yzjmvk%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364512288/be23ec6388cf957a1f54de6fea1e/triggers.jpg?expires=1757793600&signature=184893618d94fbe547f28ad4b61c1035c5051a3e06fb0ca785f8eead75856f03&req=dSMhEsx%2Fn4NXUfMW1HO4zbdx3dYlxM2ZHY%2B1QRzq5HHM3Wv51ojDOWtkgojD%0AUXsK7W%2FVG1zl7yzjmvk%3D%0A)

### Full List of Triggers

**⚡️ Trigger****🔤 Description**
[Webhook](https://help.taskade.com/en/articles/9494976-webhooks)Triggers actions through requests received from external services.
[Agent Trigger](https://help.taskade.com/en/articles/9495506-agent-triggers)Enables AI Agents to optionally run actions during a conversation.
[Task Added](https://intercom.help/taskade/en/articles/10475712-task-added-automation-trigger)Triggers whenever a new task is created in a selected project.
[Form Trigger](https://help.taskade.com/en/articles/9711589-ai-forms)Triggers when a form is used.
Project Completed Triggers when a project is completed.
Task Completed Activates when a task is marked as completed.
Task Assigned Triggers when a task is assigned to you or a team member inside a project.
Task Due Triggers when a task with a due date is due.
New Comment Triggers when a new comment is made on tasks.
New Due Date Triggers when a new due date is added to a task.
[Task Custom Field Updated](https://help.taskade.com/en/articles/9942144-task-custom-field-updated-trigger)Triggers when a custom field is updated.
[Agent Public Chat Ended](https://help.taskade.com/en/articles/10255741-agent-response-trigger)Triggers when the public agent conversation comes to an end.
[Schedule](https://intercom.help/taskade/en/articles/10477405-schedule-automation-trigger)Schedules the automation to run every hour, day, week, or month.
[Delay](https://delay/)Pause the automation for a specified period (Delay For) or until a specific date and time (Delay Until) before continuing.
[Mailhook Trigger](https://help.taskade.com/en/articles/10857885-mailhook-automation-trigger)Trigger automation flows by sending tasks & data to a unique email address.

**[Calendly Triggers](https://help.taskade.com/en/articles/9070636-calendly)**
------------------------------------------------------------------------------

**[Slack Triggers](https://help.taskade.com/en/articles/8958478-slack)**
------------------------------------------------------------------------

**[Typeform Triggers](https://help.taskade.com/en/articles/9070719-typeform)**
------------------------------------------------------------------------------

**[Gmail Triggers](https://help.taskade.com/en/articles/8958474-gmail)**
------------------------------------------------------------------------

**[Google Sheets Triggers](https://help.taskade.com/en/articles/8958475-google-sheets)**
----------------------------------------------------------------------------------------

**[Google Forms Triggers](https://help.taskade.com/en/articles/8958473-google-forms)**
--------------------------------------------------------------------------------------

**[Google Drive Trigger](https://help.taskade.com/en/articles/8958473-google-forms)**
-------------------------------------------------------------------------------------

**[Webflow Triggers](https://help.taskade.com/en/articles/9100509-webflow)**
----------------------------------------------------------------------------

**[HubSpot Triggers](https://help.taskade.com/en/articles/9315508-hubspot)**
----------------------------------------------------------------------------

**[YouTube Triggers](https://help.taskade.com/en/articles/9787345-youtube-integration)**
----------------------------------------------------------------------------------------

**[RSS Triggers](https://help.taskade.com/en/articles/9787504-rss-integration)**
--------------------------------------------------------------------------------

[Discord Triggers](https://intercom.help/taskade/en/articles/10300035-discord-integration)
------------------------------------------------------------------------------------------

[Google Calendar](https://help.taskade.com/en/articles/10098136-google-calendar-integration)
--------------------------------------------------------------------------------------------

[GitHub](https://intercom.help/taskade/en/articles/10393224-github-integration)
-------------------------------------------------------------------------------

**Actions**
-----------

Triggers launch the automation sequence — they're the "then" in "if this, then that." Actions automatically occur once the triggers' conditions are met.

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364511815/f99d2a8baf3f76797bc10b1f1f5c/actions.jpg?expires=1757793600&signature=7de65898b36cf073ba77429622f76ed8fe0b27e9283a9c93cea3ca7872c12bfa&req=dSMhEsx%2FnIleXPMW1HO4zYS8WWKYhTfnDMO0YZvFLcsB0X9PguUdj3eC3gqv%0A1ZycscIsiTmP5ndIpBE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364511815/f99d2a8baf3f76797bc10b1f1f5c/actions.jpg?expires=1757793600&signature=7de65898b36cf073ba77429622f76ed8fe0b27e9283a9c93cea3ca7872c12bfa&req=dSMhEsx%2FnIleXPMW1HO4zYS8WWKYhTfnDMO0YZvFLcsB0X9PguUdj3eC3gqv%0A1ZycscIsiTmP5ndIpBE%3D%0A)

### Full List of Actions

**⚙️ Action****🔤 Description**
[Create Project](https://help.taskade.com/en/articles/9891168-create-project-automation-action)Sets up a new project in your workspace/folder.
[Add Task](https://help.taskade.com/en/articles/9787788-add-task)Adds a new task to an existing project.
[Create Project From Template](https://help.taskade.com/en/articles/9026151-project-template)Uses a pre-defined or custom template.
[Move Task](https://help.taskade.com/en/articles/9895728-move-task-automation-action)Moves a task to a different space.
[Assign Task](https://help.taskade.com/en/articles/9895835-assign-task-automation-action)Assigns a task to someone.
[Ask AI](https://help.taskade.com/en/articles/8958472-taskade-ai)Uses AI to answer questions.
[Generate with AI](https://help.taskade.com/en/articles/8958472-taskade-ai)Uses AI to generate content or responses.
[Respond with AI](https://help.taskade.com/en/articles/8958472-taskade-ai)Automatically provides AI-generated responses.
[Ask Agent](https://help.taskade.com/en/articles/8958471-agents)Uses a custom AI agent to respond to a query.
[Run Agent Command](https://help.taskade.com/en/articles/8958471-agents)Uses a custom AI agent command.
[Add Knowledge to Agent](https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action)Transcribes knowledge and adds it as knowledge to an agent.
[Ask Agent With Structured Output](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output)Structures the output of agent replies.
[Scrape Webpage](https://help.taskade.com/en/articles/9805157-scrape-webpage)Extract the contents of a web page.
[Convert File to Text](https://help.taskade.com/en/articles/9805185-convert-file-to-text)Convert a source file into text.
[Transcribe YouTube Video](https://help.taskade.com/en/articles/9805233-transcribe-youtube-video)Turn a YouTube video into text.
[Add URL to Media](https://help.taskade.com/en/articles/10111256-add-url-to-media)Adds an URL to the media tab.
[Send HTTP Request](https://help.taskade.com/en/articles/9421110-http-request)Makes an API request to an endpoint.
[Loop](https://help.taskade.com/en/articles/10351362-loop-automation-action)Iterates data tasks.
[Filter Data](https://help.taskade.com/en/articles/9615031-filter-data)Performs actions only when the data meets a certain condition.
[Branch](https://help.taskade.com/en/articles/9805047-branch)Creates different paths within your workflow, depending on certain conditions.
[Update Custom Fields](https://help.taskade.com/en/articles/9891133-update-custom-fields)Updates custom fields within projects.
[Search Web](https://intercom.help/taskade/en/articles/9862877-search-web-automation-action)Searches the web for information to add to a project or for the AI to analyze.
[Find Task(s)](https://intercom.help/taskade/en/articles/10504418-find-task-s-automation-action)Searches for tasks within projects.

This action is compatible with [loops](https://intercom.help/taskade/en/articles/10351362-loop-automation-action).
[Transform Array to String](https://intercom.help/taskade/en/articles/10498015-transform-array-into-string)Converts the output of the [Find Task(s)](https://help.taskade.com/en/articles/8958470-automation-actions#h_f1c19f9c19) and [Find Row(s)](https://intercom.help/taskade/en/articles/8958475-google-sheets-integration) actions into text.

**[Slack Actions](https://help.taskade.com/en/articles/8958478-slack)**
-----------------------------------------------------------------------

**[Gmail Actions](https://help.taskade.com/en/articles/8958474-gmail)**
-----------------------------------------------------------------------

**[Google Drive Actions](https://help.taskade.com/en/articles/10097954-google-drive-integration)**
--------------------------------------------------------------------------------------------------

**⚙️ Action****🔤 Description**
Trash file Moves a file to the trash in your drive.
Duplicate file Duplicates a file from Google Drive. Returns the ID of the new file.
Create new folder Creates a folder in your Google Drive.
Create new file Creates a new text file from input text.
Search for Folder/File Searches a Google Drive folder for sub-folders/files.

**[Google Sheets Actions](https://help.taskade.com/en/articles/8958475-google-sheets)**
---------------------------------------------------------------------------------------

**⚙️ Action****🔤 Description**
Insert Row Adds a new row to a Google Sheets document.
Delete Row Deletes a row in a Google Sheets document.
Update Row Updates a row in a Google Sheets document.
Get Row Retrieves a row in a Google Sheets document.
Find Row(s)Retrieves specific rows from a Google Sheet based on defined criteria.

This action can be used with [loops](https://intercom.help/taskade/en/articles/10351362-loop-automation-action).

[Google Docs Actions](https://help.taskade.com/en/articles/10101659-google-docs-integration)
--------------------------------------------------------------------------------------------

**[Google Calendar Actions](https://help.taskade.com/en/articles/10098136-google-calendar-integration)**
--------------------------------------------------------------------------------------------------------

**[Mailchimp Actions](https://help.taskade.com/en/articles/8958476-mailchimp)**
-------------------------------------------------------------------------------

**[WordPress Actions](https://help.taskade.com/en/articles/8958481-wordpress)**
-------------------------------------------------------------------------------

[Twilio Actions](https://help.taskade.com/en/articles/8958480-twilio)
---------------------------------------------------------------------

**[HubSpot Actions](https://help.taskade.com/en/articles/9315508-hubspot)**
---------------------------------------------------------------------------

**[X/Twitter Actions](https://help.taskade.com/en/articles/9941823-twitter-x-integrations)**
--------------------------------------------------------------------------------------------

**[LinkedIn Actions](https://help.taskade.com/en/articles/9994380-linkedin-integration)**
-----------------------------------------------------------------------------------------

**[Microsoft Teams](https://help.taskade.com/en/articles/10300070-microsoft-teams-integration)**
------------------------------------------------------------------------------------------------

**[Discord](https://intercom.help/taskade/en/articles/10300035-discord-integration)**
-------------------------------------------------------------------------------------

**[Facebook](https://help.taskade.com/en/articles/10350096-facebook-integration)**
----------------------------------------------------------------------------------

[WhatsApp](https://help.taskade.com/en/articles/10351275-whatsapp-integration)
------------------------------------------------------------------------------

[GitHub](https://intercom.help/taskade/en/articles/10393224-github-integration)
-------------------------------------------------------------------------------

**⚙️ Action****🔤 Description**
Create Comment Adds a comment to an issue/pull request.
Create Issue Opens a new issue in a repository.
Get Issue Information Retrieves details about an issue.
Lock Issue Locks an issue to stop comments.
Unlock Issue Unlocks a previously locked issue.

[Facebook](https://intercom.help/taskade/en/articles/10350096-facebook-integration)
-----------------------------------------------------------------------------------

**Variables**
-------------

Variables are pieces of information that each Trigger and Action allow you to reference from each other. For example when using a Task Due, you want to access the content of that Task and do something with it in another action. The Task Content **Variable** can be **referenced** by using the **@ symbol**.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1510137512/6b72dd1f0d5f7a8b5ba348c5f8e0/CleanShot+2025-05-06+at+16_23_55%402x.png?expires=1757793600&signature=5b2195447370b1d816e4f6358374441ee75026edba8dbd0403b750159cf08e2f&req=dSUmFsh9moReW%2FMW1HO4zRqwbr2G8u60BuG0Q5kuns1XBusxCU8HNet3FW24%0AY1tAL8gobSJOoNzS%2Frg%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1510137512/6b72dd1f0d5f7a8b5ba348c5f8e0/CleanShot+2025-05-06+at+16_23_55%402x.png?expires=1757793600&signature=5b2195447370b1d816e4f6358374441ee75026edba8dbd0403b750159cf08e2f&req=dSUmFsh9moReW%2FMW1HO4zRqwbr2G8u60BuG0Q5kuns1XBusxCU8HNet3FW24%0AY1tAL8gobSJOoNzS%2Frg%3D%0A)

**Create an Automation**
------------------------

There are several ways to set up automation flows in Taskade:

Generate with AI
----------------

The Automation Generator allows you to instantly outline basic automation steps you can later customize and tailor to your unique workflow.

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1463437584/b324462ec03e5be3a5164ebcb98a/access-automations-tab.jpg?expires=1757793600&signature=32bfa4d102e620e49f73f43c457d255ec8f4a4fcd79984216c485f2b13ae1063&req=dSQhFc19moRXXfMW1HO4zUNGbdaLvUTCKsceUxNsArzkq5%2BzEZssFrn%2FDSRg%0AysIKbXy%2BIA4AvURyg%2F0%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1463437584/b324462ec03e5be3a5164ebcb98a/access-automations-tab.jpg?expires=1757793600&signature=32bfa4d102e620e49f73f43c457d255ec8f4a4fcd79984216c485f2b13ae1063&req=dSQhFc19moRXXfMW1HO4zUNGbdaLvUTCKsceUxNsArzkq5%2BzEZssFrn%2FDSRg%0AysIKbXy%2BIA4AvURyg%2F0%3D%0A)

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518452/a56abf49a4ce89eb5f9d617a2f58/automation-generator-2.png?expires=1757793600&signature=dfa8679fb5b2ed85e9c042f3fef433aa5b67a33da37f9e8798a8953d5e731ff8&req=dSMhEsx%2FlYVaW%2FMW1HO4za%2Byy3xIRlKBwkreXUa1mNTHBPL8mOxO43OAiqvr%0AhjxMVdW5AGK9sBCA6PY%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518452/a56abf49a4ce89eb5f9d617a2f58/automation-generator-2.png?expires=1757793600&signature=dfa8679fb5b2ed85e9c042f3fef433aa5b67a33da37f9e8798a8953d5e731ff8&req=dSMhEsx%2FlYVaW%2FMW1HO4za%2Byy3xIRlKBwkreXUa1mNTHBPL8mOxO43OAiqvr%0AhjxMVdW5AGK9sBCA6PY%3D%0A)

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518446/ae4a344e38bb522b95fdcba2057f/automation-generator-modes.jpg?expires=1757793600&signature=097f5176a188509865d10305bcbfc186b63beb43f2fcd738f418014acd26bb56&req=dSMhEsx%2FlYVbX%2FMW1HO4zYLe62wmctWW9heDoFGreHO81gGd99ZqNQZiuOjk%0AuOuamgR6X55rrJ4qTDM%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518446/ae4a344e38bb522b95fdcba2057f/automation-generator-modes.jpg?expires=1757793600&signature=097f5176a188509865d10305bcbfc186b63beb43f2fcd738f418014acd26bb56&req=dSMhEsx%2FlYVbX%2FMW1HO4zYLe62wmctWW9heDoFGreHO81gGd99ZqNQZiuOjk%0AuOuamgR6X55rrJ4qTDM%3D%0A)

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518453/fcca02ee49b683aa8ef934bfa5d2/automation-generator-4.png?expires=1757793600&signature=705f73debecfb5629c62781fb6afcceb3906b22b77587a0edbd0c4a224a305b5&req=dSMhEsx%2FlYVaWvMW1HO4ze7seVihAKysbZt4XBCHxbHsTW6NJUEgz0DICayr%0AY2yc90HxcmT8a2Nstsw%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518453/fcca02ee49b683aa8ef934bfa5d2/automation-generator-4.png?expires=1757793600&signature=705f73debecfb5629c62781fb6afcceb3906b22b77587a0edbd0c4a224a305b5&req=dSMhEsx%2FlYVaWvMW1HO4ze7seVihAKysbZt4XBCHxbHsTW6NJUEgz0DICayr%0AY2yc90HxcmT8a2Nstsw%3D%0A)

[![Image 8](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518451/4884026e5d81052036b1e57a9ca4/automation-generator-5.png?expires=1757793600&signature=46e28f4b975eb496e6b8b308ef9984f71f7b88c41c10fed0400090633e66a892&req=dSMhEsx%2FlYVaWPMW1HO4zVZKzxRSdwmlEWz0Dc%2BQcT7YHg74msVrEaENoBf5%0Apj9OuM9%2FrEMkZBormqE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364518451/4884026e5d81052036b1e57a9ca4/automation-generator-5.png?expires=1757793600&signature=46e28f4b975eb496e6b8b308ef9984f71f7b88c41c10fed0400090633e66a892&req=dSMhEsx%2FlYVaWPMW1HO4zVZKzxRSdwmlEWz0Dc%2BQcT7YHg74msVrEaENoBf5%0Apj9OuM9%2FrEMkZBormqE%3D%0A)

Start From Scratch
------------------

[![Image 9](https://downloads.intercomcdn.com/i/o/plyqw4hf/1231928774/bbf13ccb330a07742c6771d84197/automation-action-settings.jpg?expires=1757793600&signature=e1a7a450f1bf4847fb3df527987fa8c7525cbed87a9174880943181264ba78cb&req=dSIkF8B8lYZYXfMW1HO4zUgpTAPQ%2FdTdF7uP9rXIFHkuEb2bxbWAiSorUKCw%0AVaGhCCVx%2Fy2CTzTo7xQ%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1231928774/bbf13ccb330a07742c6771d84197/automation-action-settings.jpg?expires=1757793600&signature=e1a7a450f1bf4847fb3df527987fa8c7525cbed87a9174880943181264ba78cb&req=dSIkF8B8lYZYXfMW1HO4zUgpTAPQ%2FdTdF7uP9rXIFHkuEb2bxbWAiSorUKCw%0AVaGhCCVx%2Fy2CTzTo7xQ%3D%0A)

**Use Automation Templates**
----------------------------

Taskade features a variety of automation templates that will enhance your productivity and streamline your workflows. Each template is fully customizable, so you can tailor them to fit your specific needs.

To use an automation template:

[![Image 10](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364517056/2be043a104b7135580390d29b30b/automation-templates.jpg?expires=1757793600&signature=171512a31c510a8f0224f9ce4be1d57257706f4e4852c71a1546a8342deb4b63&req=dSMhEsx%2FmoFaX%2FMW1HO4zUhmj%2FeJUcbeo8Jlm2eWWeLti0Xo%2BtpLUzw2Gr1P%0An%2FSDHSI2JVEt4CN9CK0%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364517056/2be043a104b7135580390d29b30b/automation-templates.jpg?expires=1757793600&signature=171512a31c510a8f0224f9ce4be1d57257706f4e4852c71a1546a8342deb4b63&req=dSMhEsx%2FmoFaX%2FMW1HO4zUhmj%2FeJUcbeo8Jlm2eWWeLti0Xo%2BtpLUzw2Gr1P%0An%2FSDHSI2JVEt4CN9CK0%3D%0A)

Automate From Projects
----------------------

Use the **Automat** button in any of your projects to instantly build new automations.

[![Image 11](https://downloads.intercomcdn.com/i/o/plyqw4hf/1464517799/4b525ac9d1ae896acf536ae9afc3/project-level-automation.jpg?expires=1757793600&signature=7a32f201e2174fe1a86f6dfd806989e55efc786ed85caed7f61bef5011baf3b9&req=dSQhEsx%2FmoZWUPMW1HO4zYrzZUKtXt6WLhhdk1jZo7upEKekxomepPgyvLlw%0AuLDFjP59a2tBLiSsUDY%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1464517799/4b525ac9d1ae896acf536ae9afc3/project-level-automation.jpg?expires=1757793600&signature=7a32f201e2174fe1a86f6dfd806989e55efc786ed85caed7f61bef5011baf3b9&req=dSQhEsx%2FmoZWUPMW1HO4zYrzZUKtXt6WLhhdk1jZo7upEKekxomepPgyvLlw%0AuLDFjP59a2tBLiSsUDY%3D%0A)

[![Image 12](https://downloads.intercomcdn.com/i/o/plyqw4hf/1464517969/5cc3d75698253a2085a10421553c/project-level-automation-1.jpg?expires=1757793600&signature=e9e934a898ad14be7fea45b26853e87f289e5d1c2e9803392cb650909bfc55e2&req=dSQhEsx%2FmohZUPMW1HO4zaK9HlhEtwP6Hh66BmzhzHOr81pHlYuhdrqAF8WI%0AWbJYSyeHkpxi1A2sV5U%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1464517969/5cc3d75698253a2085a10421553c/project-level-automation-1.jpg?expires=1757793600&signature=e9e934a898ad14be7fea45b26853e87f289e5d1c2e9803392cb650909bfc55e2&req=dSQhEsx%2FmohZUPMW1HO4zaK9HlhEtwP6Hh66BmzhzHOr81pHlYuhdrqAF8WI%0AWbJYSyeHkpxi1A2sV5U%3D%0A)

**Build Advanced Automations**
------------------------------

You can create even more complex automations by combining advanced triggers & actions with custom AI Agents for smart, dynamic workflows.

**Automate with AI Agents**
---------------------------

On top of the available connectors, you can use your [Custom AI Agents](https://help.taskade.com/en/articles/8958457-custom-ai-agents) in your automation flows to handle tasks, make decisions, and streamline your workflows

Agent automations include the following actions:

[![Image 13](https://downloads.intercomcdn.com/i/o/1127977395/5fa586069b63e862e13eba18/agent-automation.jpg?expires=1757793600&signature=5d5a9bac3fdc0b7b3eccd2867324e6b3bb58975b903c654cdda860fe7b6118fc&req=dSElEcB5moJWXPMW1HO4zeAR7FFdbjeZZZTGKDGIxUL0ySCl6GeT9HEdSmKu%0A7U%2BvKP1J4Ns1SvqFAPM%3D%0A)](https://downloads.intercomcdn.com/i/o/1127977395/5fa586069b63e862e13eba18/agent-automation.jpg?expires=1757793600&signature=5d5a9bac3fdc0b7b3eccd2867324e6b3bb58975b903c654cdda860fe7b6118fc&req=dSElEcB5moJWXPMW1HO4zeAR7FFdbjeZZZTGKDGIxUL0ySCl6GeT9HEdSmKu%0A7U%2BvKP1J4Ns1SvqFAPM%3D%0A)

**Schedule Automations**
------------------------

The Automation Scheduler automates tasks based on specific time intervals.

[![Image 14](https://downloads.intercomcdn.com/i/o/plyqw4hf/1231929071/3e1d9a7f22f986d0eba5dc5e0b8a/schedule-automation.jpg?expires=1757793600&signature=46b121a8c6cbb59b5f099d3cd35fe18176c80020741c3a24449f006cb1c254ac&req=dSIkF8B8lIFYWPMW1HO4zYZ1IknraRLhTs9l%2FcEcCARKYQ81o2C8V2wUtCk%2F%0AbYI5%2Fy58U54VR4YpcA8%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1231929071/3e1d9a7f22f986d0eba5dc5e0b8a/schedule-automation.jpg?expires=1757793600&signature=46b121a8c6cbb59b5f099d3cd35fe18176c80020741c3a24449f006cb1c254ac&req=dSIkF8B8lIFYWPMW1HO4zYZ1IknraRLhTs9l%2FcEcCARKYQ81o2C8V2wUtCk%2F%0AbYI5%2Fy58U54VR4YpcA8%3D%0A)

Share Automations
-----------------

You can share your automations with others in a few simple steps:

[![Image 15](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265966299/242fcd0a52b61509865880a69f90/share-automation-0.jpg?expires=1757793600&signature=5a8db60de38fd8b251b203da924494a8dd2594866c3e5701cf257964c535ce7e&req=dSIhE8B4m4NWUPMW1HO4zTf6ThAH%2F%2FnS8aQaXId7kDTJ2px2o3iWaROuSJrq%0AgEvCu3lLPX1wTIw1TJw%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265966299/242fcd0a52b61509865880a69f90/share-automation-0.jpg?expires=1757793600&signature=5a8db60de38fd8b251b203da924494a8dd2594866c3e5701cf257964c535ce7e&req=dSIhE8B4m4NWUPMW1HO4zTf6ThAH%2F%2FnS8aQaXId7kDTJ2px2o3iWaROuSJrq%0AgEvCu3lLPX1wTIw1TJw%3D%0A)

[![Image 16](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265964352/08d4234ed4d88ceea8b7ed7d61b2/share-automation-1.jpg?expires=1757793600&signature=757997e5f9493682a93ee9e9ed0bc7f46e3047be1dd73ea4a2df1a5f1f6413f7&req=dSIhE8B4mYJaW%2FMW1HO4zUDwfSAZXItJsR0zz%2FKk4AHVX1t3979rvnaqE56H%0AbaitQJnlsfjpANISO4k%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265964352/08d4234ed4d88ceea8b7ed7d61b2/share-automation-1.jpg?expires=1757793600&signature=757997e5f9493682a93ee9e9ed0bc7f46e3047be1dd73ea4a2df1a5f1f6413f7&req=dSIhE8B4mYJaW%2FMW1HO4zUDwfSAZXItJsR0zz%2FKk4AHVX1t3979rvnaqE56H%0AbaitQJnlsfjpANISO4k%3D%0A)

[![Image 17](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265966691/c53894cd9af972b976d41b9f1906/share-automation-2.jpg?expires=1757793600&signature=169d45f669c539a97e42f1a219223c30e7ae668609bd9a972187ee54cd9c456c&req=dSIhE8B4m4dWWPMW1HO4zUP20ieB6vYTC%2FKXto84S7opPwj0nSr1GOQqagEk%0AYyI0FhaIvccMp%2FzHgcc%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265966691/c53894cd9af972b976d41b9f1906/share-automation-2.jpg?expires=1757793600&signature=169d45f669c539a97e42f1a219223c30e7ae668609bd9a972187ee54cd9c456c&req=dSIhE8B4m4dWWPMW1HO4zUP20ieB6vYTC%2FKXto84S7opPwj0nSr1GOQqagEk%0AYyI0FhaIvccMp%2FzHgcc%3D%0A)

[![Image 18](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265967193/bafd78ed6aa1d64a275200d324d7/share-automation-3.jpg?expires=1757793600&signature=0be472d653cb0835a17b7d532abe982d87f7a39ae49925cbc6825c802c6eab7f&req=dSIhE8B4moBWWvMW1HO4zcS%2F%2FYWSsD8hlSA4AKnEe1To4FkhbObwchO6CdO5%0A2TRDkDtaK%2Bd5Gt%2F%2FAsM%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265967193/bafd78ed6aa1d64a275200d324d7/share-automation-3.jpg?expires=1757793600&signature=0be472d653cb0835a17b7d532abe982d87f7a39ae49925cbc6825c802c6eab7f&req=dSIhE8B4moBWWvMW1HO4zcS%2F%2FYWSsD8hlSA4AKnEe1To4FkhbObwchO6CdO5%0A2TRDkDtaK%2Bd5Gt%2F%2FAsM%3D%0A)

[![Image 19](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265969142/6256661c108d7b96fd9def079d9d/share-automation-4.jpg?expires=1757793600&signature=8c0a16fd8958703a3c5eb52a13fe801be6ed112a04a081fcba8cc3785d81ed5f&req=dSIhE8B4lIBbW%2FMW1HO4zYDhH2mCz8eS9MdCzQ%2BQB87Fw5dCzb%2F%2FeQuUg0Ga%0AcHHy0QlwcWkA5O6FMvY%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1265969142/6256661c108d7b96fd9def079d9d/share-automation-4.jpg?expires=1757793600&signature=8c0a16fd8958703a3c5eb52a13fe801be6ed112a04a081fcba8cc3785d81ed5f&req=dSIhE8B4lIBbW%2FMW1HO4zYDhH2mCz8eS9MdCzQ%2BQB87Fw5dCzb%2F%2FeQuUg0Ga%0AcHHy0QlwcWkA5O6FMvY%3D%0A)

Copy & Duplicate Automations
----------------------------

You can reuse existing automation workflows by copying or duplicating them.

[![Image 20](https://downloads.intercomcdn.com/i/o/plyqw4hf/1639422511/d44996c7707d4fbfa4a8825b177d/copy-duplicate-automation.jpg?expires=1757793600&signature=ee39448b506129ea9dfc956cf0ef88cb8642f79bf4be7333cd61d81d2a25c75a&req=dSYkH818n4ReWPMW1HO4zS2m7IW6sot9IFM%2FzMnmPNHaquzgsAG%2FW2zfMA3J%0A%2Brb%2B80hXlnDYP6qBx2M%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1639422511/d44996c7707d4fbfa4a8825b177d/copy-duplicate-automation.jpg?expires=1757793600&signature=ee39448b506129ea9dfc956cf0ef88cb8642f79bf4be7333cd61d81d2a25c75a&req=dSYkH818n4ReWPMW1HO4zS2m7IW6sot9IFM%2FzMnmPNHaquzgsAG%2FW2zfMA3J%0A%2Brb%2B80hXlnDYP6qBx2M%3D%0A)

**Check Automation Status**
---------------------------

The **History** tab at the top of the automation dashboard allows you to monitor and manage the performance of your automations. It offers a clear overview of all the automated processes you have set up, complete with progress, and status.

[![Image 21](https://downloads.intercomcdn.com/i/o/plyqw4hf/1566477896/73f9151d7fe956f738d84b260502/automation-history-tab.jpg?expires=1757793600&signature=0a996048424880ee39b288a7cd4f5670c1bca97619a219cae516793de0be2f8e&req=dSUhEM15molWX%2FMW1HO4zdnLuiHL%2BfOM%2F%2BTyuq1hPwRh5UoI1XuhMc2koHq2%0Aw2S%2BbuBcBCiw9T%2FLQ54%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1566477896/73f9151d7fe956f738d84b260502/automation-history-tab.jpg?expires=1757793600&signature=0a996048424880ee39b288a7cd4f5670c1bca97619a219cae516793de0be2f8e&req=dSUhEM15molWX%2FMW1HO4zdnLuiHL%2BfOM%2F%2BTyuq1hPwRh5UoI1XuhMc2koHq2%0Aw2S%2BbuBcBCiw9T%2FLQ54%3D%0A)

**Frequently Asked Questions**
------------------------------

### **What is a task ID?**

A task ID serves as a unique identifier for a specific task, similar to how a project ID identifies a project. It streamlines the process of referencing tasks in automations that allow for input and output operations based on task IDs.

To locate a task ID:

### Can I use Taskade AI in automation flows?

Yes, you can choose from several different [Actions](https://help.taskade.com/en/articles/8958470-actions) that activate Taskade AI and custom AI commands in automation flows. They include:

**⚡️ Action****🔀 Purpose**
Ask AI Uses AI to answer questions.
Generate with AI Uses AI to generate content or responses.
Respond with AI Automatically provides AI-generated responses.
Ask Agent Uses a custom AI agent to respond to a query.
Run Agent Command Uses a custom AI agent command.

[![Image 22](https://downloads.intercomcdn.com/i/o/plyqw4hf/1231929750/9cbbfcc190c223fca5316b87629a/taskade-ai-actions.jpg?expires=1757793600&signature=e09d5e28df4112d138e585b9ce23135b6e815c5e0fcacdfd2a08d3a5a408e04c&req=dSIkF8B8lIZaWfMW1HO4za4iHTU%2BV7%2BzGcD2o2a%2BzYWFZJXLn3K2YqoWHidz%0AOV6M9WvzQkrsN0iI4VE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1231929750/9cbbfcc190c223fca5316b87629a/taskade-ai-actions.jpg?expires=1757793600&signature=e09d5e28df4112d138e585b9ce23135b6e815c5e0fcacdfd2a08d3a5a408e04c&req=dSIkF8B8lIZaWfMW1HO4za4iHTU%2BV7%2BzGcD2o2a%2BzYWFZJXLn3K2YqoWHidz%0AOV6M9WvzQkrsN0iI4VE%3D%0A)

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Taskade Assistant Agent (TAA)](https://help.taskade.com/en/articles/8958449-taskade-assistant-agent-taa)[Automation Triggers](https://help.taskade.com/en/articles/8958469-automation-triggers)[Automation Actions](https://help.taskade.com/en/articles/8958470-automation-actions)[Taskade AI (Automation Action)](https://help.taskade.com/en/articles/8958472-taskade-ai-automation-action)[Task Manual Trigger (Automation Trigger)](https://help.taskade.com/en/articles/10766894-task-manual-trigger-automation-trigger)
