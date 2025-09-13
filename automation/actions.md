# Actions Reference

Actions are the tasks that automations can perform. Each action connects to a specific service or system to create, update, or retrieve data. Actions can be chained together to create complex workflows.

## Core Taskade Actions

### Project & Task Management

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| **Create Project** | Sets up a new project in your workspace/folder | `name`, `folderId`, `template`, `defaultView` | Create "Customer Feedback" project from template |
| **Create Project From Template** | Uses a pre-defined or custom template | `templateId`, `name`, `folderId` | Create project from "Support Workflow" template |
| **Add Task** | Adds a new task to an existing project | `projectId`, `title`, `content`, `assignee`, `dueDate` | Add task "Review feedback #123" |
| **Mark Task as Completed** | Automatically marks a task as done | `taskId`, `completedBy`, `completionNote` | Mark task complete with resolution note |
| **Move Task** | Moves a task to a different project/space | `taskId`, `targetProjectId`, `position` | Move to "Processed" project |
| **Assign Task** | Assigns a task to someone | `taskId`, `userId`, `notifyAssignee` | Assign to support specialist with notification |
| **Update Custom Fields** | Updates custom fields within projects | `taskId`, `fieldId`, `value` | Set priority to "High", status to "In Progress" |
| **Find Task(s)** | Searches for tasks within projects | `projectId`, `searchCriteria`, `maxResults` | Find all tasks assigned to user |
| **Transform Array to String** | Converts task arrays into readable text | `array`, `separator`, `format` | Convert task list to comma-separated string |

### Agent Commands

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| **Ask AI** | Uses AI to answer questions | `question`, `context`, `model` | "What's the priority of this ticket?" |
| **Generate with AI** | Uses AI to generate content or responses | `prompt`, `contentType`, `length` | Generate email response to customer |
| **Respond with AI** | Automatically provides AI-generated responses | `input`, `responseType`, `tone` | Auto-respond to common inquiries |
| **Ask Agent** | Uses a custom AI agent to respond to a query | `agentId`, `question`, `context` | Query specialized support agent |
| **Run Agent Command** | Uses a custom AI agent command | `agentId`, `commandId`, `input` | Run "analyze_sentiment" command |
| **Ask Agent With Structured Output** | Structures the output of agent replies | `agentId`, `query`, `outputSchema` | Get JSON response with specific fields |
| **Prompt AI** | Give the model detailed instructions | `prompt`, `systemMessage`, `temperature` | Custom AI processing with specific instructions |
| **Add Knowledge to Agent** | Transcribes knowledge and adds it to an agent | `agentId`, `content`, `source` | Train agent with new documentation |
| **Add Project to Agent Knowledge** | Automatically trains AI agents with project content | `agentId`, `projectId`, `includeCompleted` | Add project data to agent's knowledge base |

### Data Processing & Utilities

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| **Scrape Webpage** | Extract the contents of a web page | `url`, `selector`, `format` | Extract product info from competitor site |
| **Convert File to Text** | Convert a source file into text | `fileUrl`, `fileType`, `extractImages` | Convert PDF manual to searchable text |
| **Transcribe YouTube Video** | Turn a YouTube video into text | `videoUrl`, `language`, `includeTimestamps` | Create transcript of training video |
| **Upload File to Media** | Upload file through URL to workspace media | `fileUrl`, `fileName`, `folderId` | Save document to project media library |
| **Send HTTP Request** | Makes an API request to an endpoint with multipart file support | `method`, `url`, `headers`, `body`, `files` | Call external API with file attachments |
| **Search Web** | Searches the web for information | `query`, `maxResults`, `safeSearch` | Research topic for content creation |
| **Filter Data** | Performs actions only when data meets conditions | `data`, `condition`, `operator` | Process only high-priority tickets |
| **Loop** | Iterates through data for batch processing | `array`, `actions`, `maxIterations` | Process multiple form submissions |
| **Branch** | Creates different workflow paths based on conditions | `condition`, `trueActions`, `falseActions` | Route tickets based on urgency level |

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

## 📁 **Advanced File Handling**

Recent updates have significantly enhanced automation file processing capabilities.

### **Multipart File Uploads**

HTTP actions now support multipart file uploads, enabling seamless integration with modern APIs:

```json
{
  "action": "Send HTTP Request",
  "method": "POST",
  "url": "https://api.example.com/upload",
  "headers": {
    "Authorization": "Bearer {{token}}"
  },
  "files": {
    "document": "{{file_from_trigger}}",
    "thumbnail": "{{generated_image}}"
  },
  "body": {
    "title": "{{document_title}}",
    "category": "{{document_type}}"
  }
}
```

### **Enhanced Webhook File Processing**

Webhooks can now receive and process multipart/form-data, perfect for:

- **Document Processing Workflows**: Automatically process uploaded files
- **Image Analysis Pipelines**: Analyze images submitted through forms
- **File Validation Systems**: Check file types and sizes before processing

### **Smart Form Field Mapping**

When forms trigger automations that create tasks, the system intelligently maps form field labels to task custom fields:

- **Automatic Matching**: "Priority Level" dropdown → Priority custom field
- **Type Recognition**: Date fields map to date custom fields automatically
- **Dynamic Options**: Dropdown values sync with custom field options

### **Professional Use Cases**

**Document Approval Workflow:**
```
Form Upload → File Validation → Manager Notification → Approval Task Creation
```

**Image Processing Pipeline:**
```
Image Upload → AI Analysis → Metadata Extraction → Database Storage
```

**Client Onboarding System:**
```
Document Collection → Verification → CRM Update → Welcome Email
```

### **File Type Support**

Automations now handle a wide range of file types:
- **Documents**: PDF, DOC, DOCX, TXT, RTF
- **Images**: JPG, PNG, GIF, WebP, SVG
- **Spreadsheets**: CSV, XLS, XLSX
- **Archives**: ZIP, RAR, 7Z
- **Media**: MP4, MP3, WAV, MOV

---

→ **Next: [Browse Triggers Reference](./triggers.md)**  
→ **See Also: [Automation Recipes](./recipes.md)** 