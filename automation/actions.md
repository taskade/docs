# Actions Reference

Actions are the tasks that automations can perform. Each action connects to a specific service or system to create, update, or retrieve data. Actions can be chained together to create complex workflows.

## Core Taskade Actions

### Project & Task Management

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `taskade.createProject` | Creates a new project | `name`, `folderId`, `template` | Create "Customer Feedback" project |
| `taskade.createTask` | Creates a new task | `projectId`, `title`, `content`, `assignee` | Add task "Review feedback #123" |
| `taskade.updateTask` | Updates an existing task | `taskId`, `title`, `content`, `status` | Mark task as completed |
| `taskade.moveTask` | Moves task to different project | `taskId`, `targetProjectId` | Move to "Processed" project |
| `taskade.addComment` | Adds comment to task | `taskId`, `comment`, `author` | Add "Customer contacted" note |
| `taskade.assignTask` | Assigns task to team member | `taskId`, `userId` | Assign to support specialist |
| `taskade.setDueDate` | Sets task due date | `taskId`, `dueDate` | Set deadline for follow-up |
| `taskade.addTag` | Adds tag to task | `taskId`, `tag` | Tag as "urgent" or "bug" |

### Agent Commands

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `agent.runCommand` | Executes agent command | `agentId`, `command`, `input` | Run "analyze_sentiment" command |
| `agent.askQuestion` | Asks agent a question | `agentId`, `question`, `context` | "What's the priority of this ticket?" |
| `agent.summarize` | Summarizes content | `agentId`, `content`, `length` | Create brief summary of feedback |
| `agent.categorize` | Categorizes content | `agentId`, `content`, `categories` | Classify as "bug", "feature", "question" |
| `agent.translate` | Translates text | `agentId`, `text`, `targetLanguage` | Translate feedback to English |
| `agent.extract` | Extracts structured data | `agentId`, `content`, `schema` | Extract contact info from email |

## Communication Actions

### Slack

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `slack.sendMessage` | Sends message to channel | `channel`, `message`, `attachments` | Notify team of new ticket |
| `slack.sendDM` | Sends direct message | `userId`, `message` | Alert assignee of urgent task |
| `slack.createChannel` | Creates new channel | `name`, `description`, `isPrivate` | Create project-specific channel |
| `slack.inviteUser` | Invites user to channel | `channelId`, `userId` | Add stakeholder to discussion |
| `slack.updateStatus` | Updates user status | `userId`, `status`, `emoji` | Set "In meeting" status |
| `slack.scheduleMessage` | Schedules message | `channel`, `message`, `scheduleTime` | Send reminder tomorrow |

### Email

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `email.send` | Sends email | `to`, `subject`, `body`, `attachments` | Send confirmation to customer |
| `email.sendTemplate` | Sends templated email | `to`, `templateId`, `variables` | Send welcome email with variables |
| `email.addToList` | Adds contact to mailing list | `email`, `listId`, `customFields` | Subscribe to newsletter |
| `email.removeFromList` | Removes from mailing list | `email`, `listId` | Unsubscribe user |
| `email.createCampaign` | Creates email campaign | `listId`, `subject`, `content` | Launch product announcement |

### Discord

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `discord.sendMessage` | Sends message to channel | `channelId`, `message`, `embed` | Post update to community |
| `discord.createRole` | Creates new role | `guildId`, `name`, `permissions` | Create "Beta Tester" role |
| `discord.assignRole` | Assigns role to user | `guildId`, `userId`, `roleId` | Grant access to private channel |
| `discord.createInvite` | Creates invite link | `channelId`, `maxUses`, `expires` | Generate one-time invite |

## Data & CRM Actions

### HubSpot

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `hubspot.createContact` | Creates new contact | `email`, `firstName`, `lastName`, `properties` | Add lead from form |
| `hubspot.updateContact` | Updates contact properties | `contactId`, `properties` | Update lead score |
| `hubspot.createDeal` | Creates new deal | `contactId`, `dealName`, `amount`, `stage` | Create sales opportunity |
| `hubspot.updateDeal` | Updates deal properties | `dealId`, `properties` | Move to next stage |
| `hubspot.createTask` | Creates task for contact | `contactId`, `title`, `dueDate` | Schedule follow-up call |
| `hubspot.addNote` | Adds note to contact | `contactId`, `note` | Log interaction details |

### Salesforce

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `salesforce.createLead` | Creates new lead | `email`, `firstName`, `lastName`, `company` | Add qualified lead |
| `salesforce.convertLead` | Converts lead to opportunity | `leadId`, `accountName` | Convert to sales opportunity |
| `salesforce.createCase` | Creates support case | `contactId`, `subject`, `description` | Log support ticket |
| `salesforce.updateCase` | Updates case status | `caseId`, `status`, `priority` | Escalate to manager |
| `salesforce.createActivity` | Creates activity record | `recordId`, `type`, `subject` | Log call or meeting |

### Google Sheets

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `sheets.addRow` | Adds new row to sheet | `spreadsheetId`, `range`, `values` | Log form submission |
| `sheets.updateCell` | Updates specific cell | `spreadsheetId`, `cell`, `value` | Update status column |
| `sheets.findRow` | Finds row by criteria | `spreadsheetId`, `column`, `searchValue` | Find customer record |
| `sheets.deleteRow` | Deletes row | `spreadsheetId`, `rowIndex` | Remove processed entry |
| `sheets.createChart` | Creates chart | `spreadsheetId`, `range`, `chartType` | Generate analytics chart |

### Airtable

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `airtable.createRecord` | Creates new record | `baseId`, `tableId`, `fields` | Add customer to CRM |
| `airtable.updateRecord` | Updates record fields | `baseId`, `tableId`, `recordId`, `fields` | Update project status |
| `airtable.linkRecords` | Links records together | `baseId`, `tableId`, `recordId`, `linkedRecordIds` | Connect customer to orders |
| `airtable.deleteRecord` | Deletes record | `baseId`, `tableId`, `recordId` | Remove obsolete entry |

## Development Actions

### GitHub

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `github.createIssue` | Creates new issue | `repo`, `title`, `body`, `labels` | Report bug from feedback |
| `github.updateIssue` | Updates issue | `repo`, `issueNumber`, `title`, `body`, `state` | Close resolved issue |
| `github.addComment` | Adds comment to issue | `repo`, `issueNumber`, `comment` | Add investigation notes |
| `github.createPR` | Creates pull request | `repo`, `title`, `body`, `head`, `base` | Submit fix for review |
| `github.mergePR` | Merges pull request | `repo`, `prNumber`, `mergeMethod` | Auto-merge approved PR |
| `github.createRelease` | Creates release | `repo`, `tag`, `name`, `body` | Publish new version |

### Jira

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `jira.createIssue` | Creates new issue | `project`, `issueType`, `summary`, `description` | Create bug ticket |
| `jira.updateIssue` | Updates issue fields | `issueKey`, `fields` | Update priority or assignee |
| `jira.transitionIssue` | Changes issue status | `issueKey`, `transitionId` | Move to "In Progress" |
| `jira.addComment` | Adds comment | `issueKey`, `comment` | Add troubleshooting notes |
| `jira.assignIssue` | Assigns issue to user | `issueKey`, `assignee` | Assign to developer |

## Web & Content Actions

### WordPress

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `wordpress.createPost` | Creates new post | `title`, `content`, `status`, `categories` | Publish blog article |
| `wordpress.updatePost` | Updates existing post | `postId`, `title`, `content`, `status` | Edit published content |
| `wordpress.createPage` | Creates new page | `title`, `content`, `parent` | Add landing page |
| `wordpress.uploadMedia` | Uploads media file | `file`, `title`, `description` | Add featured image |
| `wordpress.moderateComment` | Moderates comment | `commentId`, `status` | Approve or reject |

### Webflow

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `webflow.createItem` | Creates CMS item | `collectionId`, `fields` | Add new blog post |
| `webflow.updateItem` | Updates CMS item | `collectionId`, `itemId`, `fields` | Edit product details |
| `webflow.publishSite` | Publishes site changes | `siteId` | Deploy updates live |
| `webflow.createForm` | Creates form | `name`, `fields` | Add contact form |

## Utility Actions

### HTTP/Webhook

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `http.post` | Sends POST request | `url`, `headers`, `body` | Call external API |
| `http.get` | Sends GET request | `url`, `headers`, `params` | Fetch data from service |
| `http.put` | Sends PUT request | `url`, `headers`, `body` | Update external record |
| `http.delete` | Sends DELETE request | `url`, `headers` | Remove external data |
| `webhook.send` | Sends webhook payload | `url`, `payload`, `headers` | Notify external system |

### Data Processing

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `data.transform` | Transforms data format | `input`, `mapping`, `outputFormat` | Convert CSV to JSON |
| `data.validate` | Validates data schema | `input`, `schema` | Check required fields |
| `data.merge` | Merges data objects | `objects`, `mergeStrategy` | Combine multiple sources |
| `data.filter` | Filters data by criteria | `input`, `conditions` | Remove invalid entries |
| `data.aggregate` | Aggregates data | `input`, `groupBy`, `functions` | Calculate totals |

### File Operations

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `file.upload` | Uploads file to storage | `file`, `destination`, `metadata` | Store form attachment |
| `file.download` | Downloads file | `url`, `destination` | Save external resource |
| `file.convert` | Converts file format | `file`, `targetFormat` | PDF to images |
| `file.compress` | Compresses file | `file`, `compressionLevel` | Reduce file size |

## Conditional Actions

### Logic & Control Flow

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `condition.if` | Conditional execution | `condition`, `then`, `else` | If priority is high, notify manager |
| `condition.switch` | Multi-way branching | `value`, `cases`, `default` | Route by category |
| `loop.forEach` | Iterate over array | `array`, `actions` | Process each item |
| `loop.while` | Loop while condition true | `condition`, `actions` | Retry until success |
| `delay.wait` | Wait for specified time | `duration` | Wait 5 minutes before retry |

## Error Handling

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `error.catch` | Catches and handles errors | `actions`, `errorHandler` | Retry on failure |
| `error.retry` | Retries failed actions | `actions`, `maxRetries`, `delay` | Retry API call 3 times |
| `error.notify` | Sends error notification | `message`, `recipients` | Alert admin of failure |
| `error.log` | Logs error details | `error`, `context` | Record for debugging |

## Usage Examples

### Basic Action Chain
```json
{
  "actions": [
    {
      "type": "taskade.createTask",
      "projectId": "proj_123",
      "title": "{{form.subject}}",
      "content": "{{form.description}}"
    },
    {
      "type": "slack.sendMessage",
      "channel": "#support",
      "message": "New task created: {{previous.title}}"
    }
  ]
}
```

### Conditional Logic
```json
{
  "actions": [
    {
      "type": "condition.if",
      "condition": "{{form.priority}} === 'high'",
      "then": [
        {
          "type": "slack.sendMessage",
          "channel": "#urgent",
          "message": "High priority: {{form.subject}}"
        }
      ],
      "else": [
        {
          "type": "taskade.createTask",
          "projectId": "backlog",
          "title": "{{form.subject}}"
        }
      ]
    }
  ]
}
```

### Error Handling
```json
{
  "actions": [
    {
      "type": "error.retry",
      "maxRetries": 3,
      "delay": 1000,
      "actions": [
        {
          "type": "http.post",
          "url": "https://api.example.com/webhook",
          "body": "{{trigger.data}}"
        }
      ]
    }
  ]
}
```

---

→ **Next: [Browse Triggers Reference](./triggers.md)**  
→ **See Also: [Automation Recipes](./recipes.md)** 