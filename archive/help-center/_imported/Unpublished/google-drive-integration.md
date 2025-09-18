---
title: "Google Drive Integration | Taskade Help Center"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/10097954-google-drive-integration"
article_id: "10097954"
imported_at: "2025-09-13T04:59:16.895Z"
---

**Overview**
------------

The Google Drive integration allows you to streamline your workflow by seamlessly connecting your files and documents with tasks and projects.

**Google Drive Automation**
---------------------------

Set up Taskade to automatically sync and update your Google Drive files when specific triggers occur, such as project milestones or task completions.

[![Image 1](../../.gitbook/assets/imported/google-drive-integration-1.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1243162589/26662358d7f5ca5def5b8212ef9f/google-drive-integration.jpg?expires=1757741400&signature=1a83aa0927f930b5b49a24d144ebcf5b229a5156d753d41c469a67b6cf228726&req=dSIjFch4n4RXUPMW1HO4zVcoKwz8XEAOrW%2FHRpyI7ncp7mkKgNepqLNnAuRj%0A9me9Xi%2Bttnz4q5W9Ei8%3D%0A)

**Google Drive Triggers**
-------------------------

[![Image 2](../../.gitbook/assets/imported/google-drive-integration-2.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1516076079/767e2cd7c91929581da160fa0486/google-drive-triggers.jpg?expires=1757741400&signature=79113154c9f2b2c6f1044d41522f1de49186a52de4ed47c0de5e90533a12fc5d&req=dSUmEMl5m4FYUPMW1HO4zSQLJ6%2FcoL5k93UzOoXZ0rz%2BNj%2BWDybfVghORlAe%0AAxLyYEtLneRv1Ci8Gc0%3D%0A)

Google Drive Actions
--------------------

**Action****Description**
**Trash File**Moves a file to the trash in your drive.
**Duplicate File**Duplicates a file from Google Drive. Returns the ID of the new file.
**Create new folder**Creates a folder in your Google Drive.
**Create new file**Creates a new text file from input text.
**Search**Searches a Google Drive folder.
**Move File**Moves a file between folders.
**Delete Permission**Deletes a permission from a file/folder.
**Add Permission**Adds a permissions to a file/folder.
**Delete File**Permanently deletes a file.

[![Image 3](../../.gitbook/assets/imported/google-drive-integration-3.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1516076440/b2fed2674274c183d139c910aa98/google-drive-actions.jpg?expires=1757741400&signature=be06d02881557338d5cfbcbc9705ad5321786a23d47efb8d36c176d0ecd57ce9&req=dSUmEMl5m4VbWfMW1HO4zQIlL89cqS3TMX4MVMquWctYEekUN%2Fobsz1Rzxn2%0AU8KApElOmFQxJQviHqs%3D%0A)

**Select a Shared Drive**
-------------------------

You can automate Shared Drives you have access to:

[![Image 4](../../.gitbook/assets/imported/google-drive-integration-4.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1555202995/4e689213243602f407b5eb03cae6/select-shared-drive-1.jpg?expires=1757741400&signature=7fe838e611f63318a237398404d04ff40d86a346b22e084b48453dfa2448da8f&req=dSUiE8t%2Bn4hWXPMW1HO4zcirCJm%2B%2FK6hRZEkPcFUf5Wfm9ljHxtwaNZrJ5%2Fr%0A5jUB7GTCWgVQ%2BFx7Ni4%3D%0A)

[![Image 5](../../.gitbook/assets/imported/google-drive-integration-5.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1555203104/1104363a8d3b481ccb939c466c9c/select-shared-drive-2.jpg?expires=1757741400&signature=43d37f345392a3213d5111e0ac66ff2c16aef91d02a91c12bdacd17cba5a6bd9&req=dSUiE8t%2BnoBfXfMW1HO4zffIV7b86ON%2F0MChbGmO%2Foz6WsnFkaq5eq0SB5%2Bn%0ApJpAYWFnoYJ%2Fl4f7VOs%3D%0A)

**Automation Settings**
-----------------------

Connector options give you full control over the Google Drive automation:

**🏷️ Field****🔤 Description**
(required) ID The ID of the file.
(required) NAME The name of the new file.
(optional) Parent Folder Select a folder to use as the parent folder.
(required) Folder Name The name of the new folder.
(required) File Name The name of the new file.
(required) Text The text content to be added to a file.
(required) Content Type The format of the new file.
(required) Query Term The type of the search query (file name/full text search/content type).
(required) Operator The search operator (contains/equals).
(required) Value Value of the search field.
(required) File Type The type of items you search for (all/files/folders).

**Use Cases**
-------------

Not sure how to use the Google Drive connector? Here are a few ideas:

🪄 **Use Case**⏩ **Action Flow**
**Client onboarding document setup***   ✅ Trigger: `Task Added` in “Client Intake” project

*   ➡️ Action: `Create new folder``/Clients/{ClientName}`

*   ➡️ Action: `Duplicate File` from `/Templates/Client_Onboarding_Checklist.docx`
**Start campaign with base documents***   ✅ Trigger: `Task Added` with tag `#Campaign`

*   ➡️ Action: `Create new folder` in `/Campaigns/{TaskName}`

*   ➡️ Action: `Branch` based on detected tags

*   ➡️ Action: `Duplicate File` from `/Templates/Campaign_Brief_Template.docx`
**Archive final project report***   ✅ Trigger: `Project Completed`

*   ➡️ Action: `Search` for file `/Reports/Active/{ProjectName}_Final_Report.pdf`

*   ➡️ Action: `Duplicate File` into `/Archives/`

*   ➡️ Action: `Trash File` (original report)
**Distribute latest SOP to teams***   ✅ Trigger: `New File` in `/SOP/Updates/Latest_SOP.pdf`

*   ➡️ Action: `Search` for department folders

*   ➡️ Action: `Duplicate File` into each relevant `/Departments/{Team}/SOPs/` (via loop or branch)

*   ➡️ Optional: `Trash File` source
**Weekly report generation***   ✅ Trigger: `Schedule` (every Monday at 9 AM)

*   ➡️ Action: `Find Task(s)` in “Weekly Tracker” project

*   ➡️ Action: `Transform Array to String`

*   ➡️ Action: `Generate with AI` (optional summary)

*   ➡️ Action: `Create new file` in `/Reports/Weekly/`
### **😊 Helpful Links**
### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Google Drive Upload](https://help.taskade.com/en/articles/8958535-google-drive-upload)[Add Knowledge to Agent (Automation Action)](https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action)[Google Calendar Integration](https://help.taskade.com/en/articles/10098136-google-calendar-integration)[Google Docs Integration](https://help.taskade.com/en/articles/10101659-google-docs-integration)[Reddit Integration](https://help.taskade.com/en/articles/11764206-reddit-integration)