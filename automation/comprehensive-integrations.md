# Comprehensive Automation Reference

This document provides a complete reference of all available integrations, triggers, and actions in Taskade's automation system. For getting started guides, visit the [Taskade Help Center](https://help.taskade.com/en/articles/8958467-getting-started-with-automation) and [AI Automation Collection](https://help.taskade.com/en/collections/8400803-ai-automation).

## Core Taskade Tools

### Taskade

**Package**: `@taskade/automade-internalpiece-taskade`

#### Actions

| Action                       | Description                  | Properties                                                         |
| ---------------------------- | ---------------------------- | ------------------------------------------------------------------ |
| `project.create`             | Create Project               | `title`, `content`, `defaultView`                                  |
| `task.create`                | Add Task                     | `projectId`, `blockId`, `content`, `position`, `fields`, `dueDate` |
| `task.move`                  | Move Task Within Project     | `projectId`, `nodeId`, `targetBlockId`                             |
| `task.assign`                | Assign Task                  | `projectId`, `nodeId`, `userId`                                    |
| `markTaskAsCompleted`        | Mark Task As Completed       | `projectId`, `nodeId`                                              |
| `updateCustomFields`         | Update Custom Fields         | `projectId`, `nodeId`, `fields`                                    |
| `project.createFromTemplate` | Create Project From Template | `templateId`, `title`                                              |
| `tasks.find`                 | Find Task(s)                 | `projectId`, `rowsToReturn`, `noTasksFoundBehavior`, `ruleset`     |

#### Triggers

| Trigger                         | Description                         | Properties                                   |
| ------------------------------- | ----------------------------------- | -------------------------------------------- |
| `task.completed`                | Task Completed (Instant)            | `projectId`, `blockId`                       |
| `task.due`                      | Task Due (Instant)                  | `projectId`, `blockId`                       |
| `task.assigned`                 | Task Assigned (Instant)             | `projectId`, `blockId`                       |
| `task.added`                    | Task Added (Instant)                | `projectId`                                  |
| `task.custom_attribute_updated` | Task Custom Field Updated (Instant) | `projectId`, `fieldId`                       |
| `task.flow_triggered`           | Task Manual Trigger (Instant)       | `projectId`                                  |
| `comment.created`               | New Comment (Instant)               | `projectId`, `blockId`                       |
| `duedate.created`               | New Due Date (Instant)              | `projectId`, `blockId`                       |
| `project.completed`             | Project Completed (Instant)         | -                                            |
| `spaceAgent.convo.public.ended` | Agent Public Chat Ended (Instant)   | `spaceAgentId`, `conversationExportTimezone` |
| `mailhook`                      | Mailhook (Instant)                  | -                                            |

### Taskade AI

**Package**: `@taskade/automade-internalpiece-openai`

#### Actions

| Action                           | Description                    | Properties                                        |
| -------------------------------- | ------------------------------ | ------------------------------------------------- |
| `ai.ask`                         | Ask AI                         | `prompt`, `input`                                 |
| `ai.generate`                    | Generate with AI               | `prompt`, `input`                                 |
| `ai.respond`                     | Respond with AI                | `prompt`, `input`                                 |
| `ai.categorize`                  | Categorize with AI             | `input`, `output`                                 |
| `ai.prompt`                      | Prompt AI                      | `prompt`, `modelName`                             |
| `agent.ask`                      | Ask Agent                      | `agentId`, `input`, `outputType`, `output`        |
| `agent.run_command`              | Run Agent Command              | `agentId`, `commandId`, `input`                   |
| `agent.add_knowledge`            | Add Knowledge To Agent         | `agentId`, `knowledgeType`, `title`, `knowledge`  |
| `agent.add_knowledge.v2`         | Add Knowledge To Agent (v2)    | `agentId`, `knowledgeType`, `title`, `knowledge`  |
| `agent.add_project_as_knowledge` | Add Project to Agent Knowledge | `agentId`, `projectId`                            |
| `agentTeam.ask`                  | Ask Agent Team                 | `agentTeamId`, `executionMode`, `input`, `output` |

### Schedule

**Package**: `@taskade/automade-internalpiece-schedule`

#### Triggers

| Trigger            | Description             | Properties                            |
| ------------------ | ----------------------- | ------------------------------------- |
| `schedule.hourly`  | Every Hour (Scheduled)  | -                                     |
| `schedule.daily`   | Every Day (Scheduled)   | `timeOfDay`, `timezone`               |
| `schedule.weekly`  | Every Week (Scheduled)  | `dayOfWeek`, `timeOfDay`, `timezone`  |
| `schedule.monthly` | Every Month (Scheduled) | `dayOfMonth`, `timeOfDay`, `timezone` |

### Media

**Package**: `@taskade/automade-internalpiece-media`

#### Actions

| Action                    | Description              | Properties                    |
| ------------------------- | ------------------------ | ----------------------------- |
| `web.search`              | Search Web               | `query`                       |
| `website.extract`         | Scrape Webpage           | `websiteUrl`, `errorBehavior` |
| `pdf.convertToText`       | Convert File to Text     | `pdfUrl`                      |
| `youtube.transcribeVideo` | Transcribe YouTube Video | `youtubeUrl`                  |
| `url.addToMedia`          | Upload File to Media     | `url`, `emptyUrlBehavior`     |
| `text.addToMedia`         | Upload Text to Media     | `text`, `title`               |

### Utilities

**Package**: `@taskade/automade-internalpiece-utils`

#### Actions

| Action                      | Description                 | Properties                                     |
| --------------------------- | --------------------------- | ---------------------------------------------- |
| `transform.arrayIntoString` | Transform Array Into String | `transformEachItemIntoString`, `joinMechanism` |

## Communication & Collaboration

### Slack

**Package**: `@taskade/automade-piece-slack`

#### Actions

| Action                   | Description             | Properties                         |
| ------------------------ | ----------------------- | ---------------------------------- |
| `chat.postMessage`       | Send Channel Message    | `channel`, `text`                  |
| `chat.postMessageDirect` | Send Direct Message     | `userId`, `text`                   |
| `create.channel`         | Create Channel          | `channelName`                      |
| `find.userByEmail`       | Find User by Email      | `email`                            |
| `find.userByHandle`      | Find User by Handle     | `handle`                           |
| `add.reactionToMessage`  | Add Reaction to Message | `channel`, `timestamp`, `reaction` |
| `pin.message`            | Pin Message to Channel  | `channel`, `timestamp`             |
| `get.channelHistory`     | Fetch Channel Messages  | `channel`, `oldest`, `latest`      |

#### Triggers

| Trigger              | Description            | Properties |
| -------------------- | ---------------------- | ---------- |
| `new_message`        | New Message (Instant)  | `channel`  |
| `new_channel`        | New Channel (Instant)  | -          |
| `new_mention`        | New Mention (Instant)  | `channel`  |
| `new_reaction_added` | New Reaction (Instant) | `channel`  |

### Microsoft Teams

**Package**: `@taskade/automade-piece-microsoft-teams`

#### Actions

| Action               | Description          | Properties                                      |
| -------------------- | -------------------- | ----------------------------------------------- |
| `createChannel`      | Create Channel       | `teamId`, `channelName`, `channelDescription`   |
| `sendChannelMessage` | Send Channel Message | `teamId`, `channelId`, `contentType`, `content` |
| `sendChatMessage`    | Send Chat Message    | `chatId`, `contentType`, `content`              |

### Discord

**Package**: `@taskade/automade-piece-discord`

#### Actions

| Action           | Description    | Properties             |
| ---------------- | -------------- | ---------------------- |
| `send_message`   | Send Message   | `channelId`, `message` |
| `create_channel` | Create Channel | `name`                 |
| `delete_channel` | Delete Channel | `channelId`            |
| `find_channel`   | Find Channel   | `name`                 |
| `rename_channel` | Rename Channel | `channelId`, `name`    |

#### Triggers

| Trigger       | Description             | Properties |
| ------------- | ----------------------- | ---------- |
| `new_message` | New Message (Scheduled) | `channel`  |

### WhatsApp Business

**Package**: `@taskade/automade-piece-whatsapp-business`

#### Actions

| Action                | Description           | Properties                                                          |
| --------------------- | --------------------- | ------------------------------------------------------------------- |
| `sendMessage`         | Send Message          | `phoneNumberId`, `to`, `text`                                       |
| `sendTemplateMessage` | Send Template Message | `phoneNumberId`, `to`, `messageTemplateId`, `messageTemplateFields` |
| `sendMedia`           | Send Media            | `phoneNumberId`, `to`, `type`, `media`, `caption`, `filename`       |

## Email & Communication

### Gmail

**Package**: `@taskade/automade-piece-gmail`

#### Actions

| Action             | Description        | Properties                                                                                                 |
| ------------------ | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| `sendEmail`        | Send Email         | `to`, `cc`, `bcc`, `subject`, `bodyText`, `bodyHtml`, `replyTo`, `from`, `replyToMessageId`, `attachments` |
| `createDraftEmail` | Create Draft Email | `to`, `cc`, `bcc`, `subject`, `bodyText`, `bodyHtml`, `replyTo`, `from`, `replyToMessageId`                |
| `findEmail`        | Find Email(s)      | `emailsToReturn`, `noEmailsFoundBehavior`, `ruleset`                                                       |

#### Triggers

| Trigger              | Description           | Properties |
| -------------------- | --------------------- | ---------- |
| `new_email_received` | New Email (Scheduled) | -          |

## Productivity & Data

### Google Sheets

**Package**: `@taskade/automade-piece-googlesheets`

#### Actions

| Action                      | Description           | Properties                                            |
| --------------------------- | --------------------- | ----------------------------------------------------- |
| `googlesheets.addNewRow`    | Insert Row            | `spreadsheetId`, `sheetId`, `text`                    |
| `googlesheets.addNewRowV2`  | Insert Row (v2)       | `spreadsheetId`, `sheetId`, `fields`                  |
| `googlesheets.findRows`     | Find Row(s)           | `spreadsheetId`, `sheetId`, `rowsToReturn`, `ruleset` |
| `googlesheets.deleteRow`    | Delete Row            | `spreadsheetId`, `sheetId`, `rowId`                   |
| `googlesheets.updateRow`    | Update Row            | `spreadsheetId`, `sheetId`, `rowId`, `fields`         |
| `googlesheets.findRowByNum` | Get Row by Row Number | `spreadsheetId`, `sheetId`, `rowNumber`               |
| `clearRange`                | Clear Range           | `spreadsheetId`, `sheetId`, `range`                   |

#### Triggers

| Trigger         | Description         | Properties                 |
| --------------- | ------------------- | -------------------------- |
| `new_row_found` | New Row (Scheduled) | `spreadsheetId`, `sheetId` |

### Google Docs

**Package**: `@taskade/automade-piece-google-docs`

#### Actions

| Action                      | Description     | Properties                                            |
| --------------------------- | --------------- | ----------------------------------------------------- |
| `googledocs.appendText`     | Append Text     | `documentId`, `text`                                  |
| `googledocs.createDocument` | Create Document | `title`, `body`                                       |
| `googledocs.findDocument`   | Find Document   | `name`                                                |
| `googledocs.findDocuments`  | Find Documents  | `docsToReturn`, `noDocumentsFoundBehavior`, `ruleset` |

### Google Drive

**Package**: `@taskade/automade-piece-google-drive`

#### Actions

| Action                              | Description                 | Properties                                                       |
| ----------------------------------- | --------------------------- | ---------------------------------------------------------------- |
| `googledrive.searchFolderOrFile`    | Search For Folder/File      | `queryTerm`, `operator`, `query`, `type`, `folderId`             |
| `googledrive.searchFolderOrFile.v2` | Search For Folder/File (v2) | `drive`, `folderId`, `queryTerm`, `operator`, `query`, `type`    |
| `googledrive.moveFile`              | Move File                   | `fileId`, `folderId`                                             |
| `googledrive.addPermission`         | Add Permissions             | `fileId`, `userEmail`, `permissionName`, `sendNotificationEmail` |
| `googledrive.duplicateFile`         | Duplicate File              | `fileId`, `name`, `folderId`                                     |
| `googledrive.duplicateFile.v2`      | Copy File                   | `drive`, `folderId`, `fileId`, `name`                            |
| `googledrive.createNewTextFile`     | Create New File             | `fileName`, `text`, `fileType`, `folderId`                       |
| `googledrive.createNewTextFile.v2`  | Create New File (v2)        | `drive`, `folderId`, `fileName`, `text`, `fileType`              |
| `googledrive.uploadFile`            | Upload File                 | `drive`, `folderId`, `file`, `fileName`                          |
| `googledrive.createNewFolder`       | Create New Folder           | `folderName`, `folderId`                                         |
| `googledrive.createNewFolder.v2`    | Create New Folder (v2)      | `drive`, `folderId`, `folderName`                                |
| `googledrive.sendToTrash`           | Trash File                  | `fileId`                                                         |
| `googledrive.deleteFile`            | Delete File                 | `fileId`                                                         |
| `googledrive.deletePermission`      | Delete Permissions          | `fileId`, `userEmail`                                            |

#### Triggers

| Trigger        | Description                | Properties                |
| -------------- | -------------------------- | ------------------------- |
| `new_folder`   | New Folder (Scheduled)     | `parentFolderId`          |
| `new_folderV2` | New Folder (v2, Scheduled) | `drive`, `parentFolderId` |
| `new_file`     | New File (Scheduled)       | `parentFolderId`          |
| `new_fileV2`   | New File (v2, Scheduled)   | `drive`, `parentFolderId` |

### Google Calendar

**Package**: `@taskade/automade-piece-google-calendar`

#### Actions

| Action                            | Description        | Properties                                                                                      |
| --------------------------------- | ------------------ | ----------------------------------------------------------------------------------------------- |
| `googlecalendar.deleteEvent`      | Delete Event       | `calendarId`, `eventId`                                                                         |
| `googlecalendar.createQuickEvent` | Create Quick Event | `calendarId`, `text`, `sendUpdates`                                                             |
| `googlecalendar.createEvent`      | Create Event       | `calendarId`, `title`, `startDateTime`, `endDateTime`, `location`, `description`, `sendUpdates` |

#### Triggers

| Trigger                | Description                      | Properties   |
| ---------------------- | -------------------------------- | ------------ |
| `new_or_updated_event` | New or Updated Event (Scheduled) | `calendarId` |

## CRM & Sales

### HubSpot

**Package**: `@taskade/automade-piece-hubspot`

#### Actions

| Action                     | Description        | Properties                                                                                                  |
| -------------------------- | ------------------ | ----------------------------------------------------------------------------------------------------------- |
| `hubspot.createNewContact` | Create New Contact | `firstName`, `lastName`, `email`, `contactOwner`, `jobTitle`, `phoneNumber`, `lifecycleStage`, `leadStatus` |
| `hubspot.createNewDeal`    | Create New Deal    | `dealname`, `pipelineId`, `dealStageId`, `ownerId`, `dealType`, `amount`, `priority`, `closeDate`           |

#### Triggers

| Trigger               | Description                  | Properties                  |
| --------------------- | ---------------------------- | --------------------------- |
| `new_deal_created`    | New Deal (Instant)           | -                           |
| `new_contact_created` | New Contact (Instant)        | -                           |
| `deal_stage_reached`  | Deal Stage Reached (Instant) | `pipelineId`, `dealStageId` |

## Development & Project Management

### GitHub

**Package**: `@taskade/automade-piece-github`

#### Actions

| Action                    | Description           | Properties                                |
| ------------------------- | --------------------- | ----------------------------------------- |
| `create_comment_on_issue` | Create Comment        | `repository`, `issueNumber`, `comment`    |
| `create_issue`            | Create Issue          | `repository`, `title`, `description`      |
| `get_issue_information`   | Get Issue Information | `repository`, `issueNumber`               |
| `lock_issue`              | Lock Issue            | `repository`, `issueNumber`, `lockReason` |
| `unlock_issue`            | Unlock Issue          | `repository`, `issueNumber`               |

#### Triggers

| Trigger             | Description                 | Properties                                |
| ------------------- | --------------------------- | ----------------------------------------- |
| `new_pull_request`  | New Pull Request (Instant)  | `repository`                              |
| `new_star`          | New Star (Instant)          | `repository`                              |
| `new_issue`         | New Issue (Instant)         | `repository`                              |
| `new_push`          | New Push (Instant)          | `repository`                              |
| `new_release`       | New Release (Instant)       | `repository`                              |
| `new_issue_comment` | New Issue Comment (Instant) | `monitorType`, `organizationOrRepository` |

## Forms & Lead Generation

### Typeform

**Package**: `@taskade/automade-piece-typeform`

#### Triggers

| Trigger          | Description              | Properties |
| ---------------- | ------------------------ | ---------- |
| `new_submission` | New Submission (Instant) | `form`     |

### Google Forms

**Package**: `@taskade/automade-piece-google-forms`

#### Triggers

| Trigger        | Description              | Properties |
| -------------- | ------------------------ | ---------- |
| `new_response` | New Response (Scheduled) | `form_id`  |

### Webflow

**Package**: `@taskade/automade-piece-webflow`

#### Triggers

| Trigger               | Description                   | Properties         |
| --------------------- | ----------------------------- | ------------------ |
| `new_form_submission` | New Form Submission (Instant) | `siteId`, `formId` |

### Calendly

**Package**: `@taskade/automade-piece-calendly`

#### Triggers

| Trigger                          | Description                                 | Properties     |
| -------------------------------- | ------------------------------------------- | -------------- |
| `invitee_created`                | Any Event Scheduled (Instant)               | `scope`        |
| `invitee_cancelled`              | Event Canceled (Instant)                    | `scope`        |
| `invitee_created_for_event_type` | Event Scheduled for an Event Type (Instant) | `eventTypeUri` |

## Marketing & Email

### MailChimp

**Package**: `@taskade/automade-piece-mailchimp`

#### Actions

| Action            | Description | Properties                                           |
| ----------------- | ----------- | ---------------------------------------------------- |
| `addMemberToList` | Add Contact | `firstName`, `lastName`, `email`, `listId`, `status` |

## Social Media & Publishing

### Facebook Pages

**Package**: `@taskade/automade-piece-facebook-pages`

#### Actions

| Action              | Description            | Properties                 |
| ------------------- | ---------------------- | -------------------------- |
| `create_post`       | Create Post            | `page`, `message`, `link`  |
| `create_photo_post` | Create Post with Image | `page`, `photo`, `caption` |

### X (Twitter)

**Package**: `@taskade/automade-piece-twitter`

#### Actions

| Action         | Description  | Properties       |
| -------------- | ------------ | ---------------- |
| `create_reply` | Create Reply | `postId`, `text` |
| `create_post`  | Create Post  | `text`           |

### LinkedIn

**Package**: `@taskade/automade-piece-linkedin`

#### Actions

| Action                  | Description           | Properties                                                   |
| ----------------------- | --------------------- | ------------------------------------------------------------ |
| `create_share_update`   | Create Share Update   | `text`, `visibility`, `link`, `linkTitle`, `linkDescription` |
| `create_company_update` | Create Company Update | `company`, `text`, `link`, `linkTitle`, `linkDescription`    |

### WordPress

**Package**: `@taskade/automade-piece-wordpress`

#### Actions

| Action        | Description | Properties                                   |
| ------------- | ----------- | -------------------------------------------- |
| `create_post` | Create Post | `type`, `title`, `content`, `slug`, `status` |

### YouTube

**Package**: `@taskade/automade-piece-youtube`

#### Triggers

| Trigger                     | Description           | Properties           |
| --------------------------- | --------------------- | -------------------- |
| `new_video`                 | New Video (Scheduled) | `channel_identifier` |
| `multiple_channels_trigger` | New Video (Scheduled) | `channelIdentifiers` |

### Reddit

**Package**: `@taskade/automade-piece-reddit`

#### Actions

| Action        | Description | Properties                                                                     |
| ------------- | ----------- | ------------------------------------------------------------------------------ |
| `post-create` | Create Post | `subreddit`, `title`, `kind`, `link`, `text`, `nsfw`, `spoiler`, `sendReplies` |
| `post-get`    | Get Post    | `postId`, `subreddit`                                                          |

### RSS

**Package**: `@taskade/automade-piece-rss`

#### Triggers

| Trigger                  | Description                       | Properties   |
| ------------------------ | --------------------------------- | ------------ |
| `new_item`               | New Item In Feed (Scheduled)      | `rssFeedUrl` |
| `multiple_feeds_trigger` | New Item In RSS Feeds (Scheduled) | `feedUrls`   |

## SMS & Messaging

### Twilio

**Package**: `@taskade/automade-piece-twilio`

#### Actions

| Action     | Description | Properties           |
| ---------- | ----------- | -------------------- |
| `send_sms` | Send SMS    | `from`, `body`, `to` |

## Data Enrichment

### Apollo

**Package**: `@taskade/automade-piece-apollo`

#### Actions

| Action                  | Description             | Properties             |
| ----------------------- | ----------------------- | ---------------------- |
| `enrichUserInformation` | Enrich User Information | `email`, `linkedinUrl` |

## Technical Integrations

### HTTP

**Package**: `@taskade/automade-piece-http`

#### Actions

| Action             | Description       | Properties                                                                                      |
| ------------------ | ----------------- | ----------------------------------------------------------------------------------------------- |
| `http.sendRequest` | Send HTTP Request | `method`, `url`, `headers`, `queryParams`, `bodyType`, `body`, `responseType`, `responseSchema` |

## Control Actions & App Triggers

### App Triggers

- **Forms**: [AI Forms Documentation](https://help.taskade.com/en/articles/9711589-ai-forms-automation-trigger)
- **Webhooks**: [Webhooks Documentation](https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger)
- **Agent Triggers**: Built-in agent conversation triggers

### Control Actions

- **Delay**: Wait/Sleep actions for timing control
- **Branch**: [Conditional logic documentation](https://help.taskade.com/en/articles/9805047-branch-automation-action)
- **Loop**: [Iteration control documentation](https://help.taskade.com/en/articles/10351362-loop-automation-action)
- **Filter Data**: [Data filtering documentation](https://help.taskade.com/en/articles/9615031-filter-data-automation-action)

## Getting Started

To learn more about setting up and using these integrations:

1. **[Getting Started with Automation](https://help.taskade.com/en/articles/8958467-getting-started-with-automation)** - Complete beginner's guide
2. **[AI Automation Collection](https://help.taskade.com/en/collections/8400803-ai-automation)** - All automation resources
3. **[Community Forum](https://www.taskade.com/feedback/public-api)** - Get help from the community
4. **[Developer API](../api/README.md)** - Build custom integrations

---

_This reference is updated regularly with new integrations and features. For the latest updates, visit our [Changelog](../changelog/README.md)._
