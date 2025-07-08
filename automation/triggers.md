# Triggers Reference

Triggers are events that start automations. They monitor for specific conditions and launch your automation workflows when those conditions are met. Each trigger provides context data that can be used in subsequent actions.

## Core Taskade Triggers

### Project & Task Events

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `taskade.taskCreated` | Task is created in project | `task`, `project`, `creator` | Auto-assign based on keywords |
| `taskade.taskCompleted` | Task is marked complete | `task`, `project`, `completedBy` | Notify stakeholders |
| `taskade.taskAssigned` | Task is assigned to user | `task`, `assignee`, `assigner` | Send notification to assignee |
| `taskade.taskDueSoon` | Task due date approaching | `task`, `project`, `dueDate` | Send reminder notifications |
| `taskade.taskOverdue` | Task is past due date | `task`, `project`, `daysOverdue` | Escalate to manager |
| `taskade.commentAdded` | Comment added to task | `task`, `comment`, `author` | Notify task assignee |
| `taskade.projectCreated` | New project created | `project`, `creator`, `folder` | Set up project templates |
| `taskade.memberAdded` | Member added to project | `project`, `member`, `inviter` | Send welcome message |

### Agent Events

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `agent.conversationStarted` | New conversation with agent | `agent`, `user`, `message` | Log interaction start |
| `agent.commandExecuted` | Agent command completed | `agent`, `command`, `result`, `user` | Process command results |
| `agent.errorOccurred` | Agent encountered error | `agent`, `error`, `context` | Alert administrators |
| `agent.responseGenerated` | Agent generated response | `agent`, `response`, `conversation` | Quality check responses |

## External Service Triggers

### Form & Web Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| `form.submitted` | Public form submitted | `form`, `responses`, `submitter` | Process lead information |
| `webhook.received` | HTTP webhook received | `payload`, `headers`, `source` | Handle external system events |
| `api.called` | API endpoint called | `endpoint`, `parameters`, `caller` | Process API requests |
| `page.visited` | Website page visited | `page`, `visitor`, `referrer` | Track user behavior |

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
| `webhook.zapier` | Zapier webhook | `zapUrl`, `filters` | Zapier automations |
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