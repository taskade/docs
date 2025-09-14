# Triggers Reference

Triggers are events that start automations. They monitor for specific conditions and launch your automation workflows when those conditions are met. Each trigger provides context data that can be used in subsequent actions.

## Core Taskade Triggers

### Project & Task Events

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| **Task Added** | Triggers whenever a new task is created in a selected project | `task`, `project`, `creator` | Auto-assign based on keywords, create follow-up tasks |
| **Task Completed** | Activates when a task is marked as completed | `task`, `project`, `completedBy` | Notify stakeholders, trigger next phase |
| **Task Assigned** | Triggers when a task is assigned to you or a team member | `task`, `assignee`, `assigner` | Send notification to assignee, update workload tracking |
| **Task Due** | Triggers when a task with a due date is due | `task`, `project`, `dueDate` | Send reminder notifications, escalate overdue items |
| **Task Custom Field Updated** | Triggers when a custom field is updated | `task`, `field`, `oldValue`, `newValue` | Update external systems, notify relevant teams |
| **Task Manual Trigger** | Manually trigger task-based automations from within projects | `task`, `project`, `triggerUser` | On-demand processing, manual workflow initiation |
| **Project Completed** | Triggers when a project is completed | `project`, `completedBy`, `completionDate` | Archive resources, generate reports, notify clients |
| **New Comment** | Triggers when a new comment is made on tasks | `task`, `comment`, `author` | Notify task assignee, log communication |
| **New Due Date** | Triggers when a new due date is added to a task | `task`, `dueDate`, `setter` | Update calendars, adjust resource allocation |

### Agent Events

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| **Agent Trigger** | Enables AI Agents to optionally run actions during a conversation | `agent`, `conversation`, `command`, `user` | Process agent responses, trigger follow-up actions |
| **Agent Public Chat Ended** | Triggers when the public agent conversation comes to an end | `agent`, `conversation`, `endReason`, `duration` | Collect feedback, analyze conversation quality |
| **Agent Tool Trigger** | Triggers when agent uses specific tools during conversations | `agent`, `tool`, `toolInput`, `toolOutput` | Process tool results, update external systems |
| **Agent Response Generated** | Triggers after agent generates response | `agent`, `response`, `confidence`, `sources` | Quality control, response logging |
| **Agent Knowledge Updated** | Triggers when agent knowledge base is modified | `agent`, `knowledgeItem`, `updateType`, `source` | Sync knowledge across systems |
| **Agent Command Executed** | Agent command completed successfully | `agent`, `command`, `result`, `user` | Process command results, update knowledge base |
| **Agent Error Occurred** | Agent encountered error during processing | `agent`, `error`, `context`, `user` | Alert administrators, log issues for improvement |

## External Service Triggers

### Form & Web Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| **Form Trigger (AI Forms)** | Triggers when a form is used/submitted | `form`, `responses`, `submitter`, `timestamp` | Process lead information, create support tickets |
| **Webhook** | Triggers actions through requests received from external services | `payload`, `headers`, `source`, `method` | Handle external system events, API integrations |
| **Mailhook Trigger** | Trigger automation flows by sending tasks & data to a unique email address | `email`, `sender`, `subject`, `body`, `attachments` | Email-to-task conversion, support ticket creation |
| **Schedule** | Schedules the automation to run every hour, day, week, or month | `schedule`, `timestamp`, `frequency` | Recurring reports, maintenance tasks, reminders |
| **Delay** | Pause automation for a specified time period or until a specific date/time | `delayType`, `duration`, `targetDate` | Workflow timing control, follow-up sequences |

### Communication Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `slack.messageReceived` | New Slack message | `message`, `channel`, `user` | Monitor mentions |
| `slack.reactionAdded` | Reaction added to message | `message`, `reaction`, `user` | Track engagement |
| `email.received` | New email received | `email`, `sender`, `subject`, `body` | Process support emails |
| `discord.messagePosted` | New Discord message | `message`, `channel`, `user` | Moderate community |

### Development Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `github.issueOpened` | New GitHub issue | `issue`, `repository`, `author` | Create project task |
| `github.pullRequestOpened` | New pull request | `pr`, `repository`, `author` | Notify reviewers |
| `github.pushToMain` | Code pushed to main branch | `commits`, `repository`, `pusher` | Trigger deployment |
| `jira.issueCreated` | New Jira issue | `issue`, `project`, `reporter` | Sync with project |
| `jira.statusChanged` | Issue status changed | `issue`, `oldStatus`, `newStatus` | Update stakeholders |

### Data & CRM Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `hubspot.contactCreated` | New HubSpot contact | `contact`, `properties`, `source` | Welcome new leads |
| `hubspot.dealUpdated` | Deal stage changed | `deal`, `oldStage`, `newStage` | Notify sales team |
| `salesforce.leadCreated` | New Salesforce lead | `lead`, `source`, `score` | Qualify and route |
| `sheets.rowAdded` | New Google Sheets row | `row`, `sheet`, `spreadsheet` | Process form data |
| `airtable.recordCreated` | New Airtable record | `record`, `table`, `base` | Sync with other systems |

### E-commerce Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `stripe.paymentSucceeded` | Payment completed | `payment`, `customer`, `amount` | Send receipt |
| `stripe.subscriptionCreated` | New subscription | `subscription`, `customer`, `plan` | Provision access |
| `shopify.orderCreated` | New Shopify order | `order`, `customer`, `products` | Process fulfillment |
| `woocommerce.orderPlaced` | WooCommerce order | `order`, `customer`, `items` | Update inventory |

## Schedule Triggers

### Time-Based Triggers

| Trigger | Description | Configuration | Example Use Case |
|---------|-------------|---------------|------------------|
| `schedule.daily` | Runs daily at specified time | `time`, `timezone` | Daily report generation |
| `schedule.weekly` | Runs weekly on specified day | `day`, `time`, `timezone` | Weekly team updates |
| `schedule.monthly` | Runs monthly on specified date | `date`, `time`, `timezone` | Monthly analytics |
| `schedule.cron` | Custom cron expression | `expression`, `timezone` | Complex scheduling |
| `schedule.interval` | Runs at regular intervals | `interval`, `unit` | Health checks |

### Date-Based Triggers

| Trigger | Description | Configuration | Example Use Case |
|---------|-------------|---------------|------------------|
| `date.anniversary` | Runs on anniversary dates | `date`, `recurrence` | Customer anniversaries |
| `date.reminder` | Runs before important dates | `date`, `advance` | Event reminders |
| `date.deadline` | Runs on deadline dates | `date`, `grace` | Project deadlines |

## Custom Triggers

### Webhook Triggers

| Trigger | Description | Configuration | Example Use Case |
|---------|-------------|---------------|------------------|
| `webhook.custom` | Custom webhook endpoint | `url`, `method`, `auth` | External integrations |
| `webhook.custom` | Custom webhook endpoint | `url`, `method`, `auth` | External integrations |
| `webhook.ifttt` | IFTTT webhook | `iftttKey`, `event` | IFTTT triggers |

### API Triggers

| Trigger | Description | Configuration | Example Use Case |
|---------|-------------|---------------|------------------|
| `api.rest` | REST API endpoint | `endpoint`, `method`, `auth` | Custom API calls |
| `api.graphql` | GraphQL subscription | `query`, `variables` | Real-time updates |
| `api.websocket` | WebSocket connection | `url`, `protocol` | Live data streams |

## Trigger Configuration

### Authentication

Most external triggers require authentication:

```json
{
  "trigger": {
    "type": "slack.messageReceived",
    "auth": {
      "type": "oauth2",
      "token": "xoxb-your-token"
    },
    "channel": "#general"
  }
}
```

### Filters

Apply filters to trigger only on specific conditions:

```json
{
  "trigger": {
    "type": "form.submitted",
    "filters": {
      "form_name": "Contact Form",
      "priority": "high"
    }
  }
}
```

### Rate Limiting

Control trigger frequency to prevent spam:

```json
{
  "trigger": {
    "type": "email.received",
    "rateLimit": {
      "maxPerMinute": 10,
      "maxPerHour": 100
    }
  }
}
```

## Data Context

### Trigger Data Structure

Each trigger provides structured data:

```json
{
  "trigger": {
    "type": "form.submitted",
    "timestamp": "2024-01-15T10:30:00Z",
    "data": {
      "form": {
        "id": "form_123",
        "name": "Contact Form",
        "url": "https://example.com/contact"
      },
      "responses": {
        "name": "John Doe",
        "email": "john@example.com",
        "message": "Need help with integration"
      },
      "submitter": {
        "ip": "192.168.1.1",
        "userAgent": "Mozilla/5.0...",
        "location": "New York, NY"
      }
    }
  }
}
```

### Using Trigger Data

Access trigger data in actions using template variables:

```json
{
  "actions": [
    {
      "type": "taskade.createTask",
      "title": "{{trigger.data.responses.name}} - {{trigger.data.responses.message}}",
      "assignee": "support@company.com"
    }
  ]
}
```

## Advanced Trigger Features

### Conditional Triggers

Only trigger when specific conditions are met:

```json
{
  "trigger": {
    "type": "taskade.taskCreated",
    "condition": "{{task.priority}} === 'high' && {{task.assignee}} === null"
  }
}
```

### Batch Triggers

Process multiple events together:

```json
{
  "trigger": {
    "type": "email.received",
    "batch": {
      "size": 10,
      "timeout": 300
    }
  }
}
```

### Debounced Triggers

Prevent rapid-fire triggers:

```json
{
  "trigger": {
    "type": "sheets.rowAdded",
    "debounce": {
      "delay": 5000,
      "key": "{{sheet.id}}"
    }
  }
}
```

## Error Handling

### Retry Logic

Retry failed triggers automatically:

```json
{
  "trigger": {
    "type": "webhook.received",
    "retry": {
      "maxAttempts": 3,
      "backoff": "exponential"
    }
  }
}
```

### Dead Letter Queue

Handle permanently failed triggers:

```json
{
  "trigger": {
    "type": "api.rest",
    "deadLetter": {
      "enabled": true,
      "action": "notify_admin"
    }
  }
}
```

## Testing Triggers

### Manual Testing

Test triggers with sample data:

```bash
curl -X POST https://api.taskade.com/webhooks/test \
  -H "Content-Type: application/json" \
  -d '{
    "trigger": "form.submitted",
    "data": {
      "name": "Test User",
      "email": "test@example.com"
    }
  }'
```

### Simulation Mode

Run triggers in simulation mode:

```json
{
  "trigger": {
    "type": "schedule.daily",
    "simulate": true,
    "simulationData": {
      "date": "2024-01-15",
      "time": "09:00"
    }
  }
}
```

## Best Practices

### 1. **Use Specific Filters**
Filter triggers to reduce noise and improve performance.

### 2. **Handle Errors Gracefully**
Always include error handling for external triggers.

### 3. **Monitor Trigger Health**
Set up monitoring for trigger failures and performance.

### 4. **Secure Webhooks**
Use authentication and validation for webhook triggers.

### 5. **Test Thoroughly**
Test triggers with various scenarios and edge cases.

---

→ **Next: [Explore Automation Recipes](./recipes.md)**  
→ **See Also: [Actions Reference](./actions.md)** 