# Action (Automations)

The **Action Layer** is the nervous system of your application. It connects your app's knowledge and intelligence to the outside world, allowing it to execute workflows, interact with users, and integrate with other services. This layer is powered by **Taskade Automations**.

Automations are powerful, event-driven workflows that you can build with no code. They allow you to:

*   **Trigger Workflows:** Start an automation from a form submission, a webhook, a schedule, or an event within a Taskade project.
*   **Execute Logic:** Run AI Agent commands, create and modify tasks, and add data to your Knowledge Layer.
*   **Integrate with Anything:** Send notifications to Slack, add rows to Google Sheets, create issues in GitHub, or call any external API with webhooks.

This combination of triggers and actions allows you to build everything from simple data intake forms to complex, multi-step agentic workflows that power your application's backend.

## Common Automation Patterns

### 1. Form-to-Project Workflows
Capture data from public forms and automatically organize it in your projects:

```json
{
  "trigger": {
    "type": "form_submission",
    "form_title": "Customer Feedback"
  },
  "actions": [
    {
      "type": "create_task",
      "project_id": "feedback_project",
      "task_title": "{{form.subject}}",
      "task_content": "{{form.message}}",
      "custom_fields": {
        "customer_email": "{{form.email}}",
        "priority": "{{form.priority}}",
        "category": "{{form.category}}"
      }
    },
    {
      "type": "run_agent_command",
      "agent_id": "feedback_analyzer",
      "command": "analyze_sentiment",
      "input": "{{form.message}}"
    }
  ]
}
```

### 2. AI-Powered Content Processing
Use AI agents to analyze and categorize incoming content:

```json
{
  "trigger": {
    "type": "webhook",
    "source": "support_tickets"
  },
  "actions": [
    {
      "type": "run_agent_command",
      "agent_id": "support_agent",
      "command": "categorize_ticket",
      "input": "{{webhook.ticket_content}}"
    },
    {
      "type": "create_task",
      "project_id": "support_queue",
      "task_title": "{{webhook.ticket_title}}",
      "assignee": "{{previous.recommended_assignee}}",
      "priority": "{{previous.urgency_level}}"
    },
    {
      "type": "slack_notification",
      "channel": "#support",
      "message": "New {{previous.urgency_level}} ticket: {{webhook.ticket_title}}"
    }
  ]
}
```

### 3. Scheduled Reporting
Generate regular reports and summaries:

```json
{
  "trigger": {
    "type": "schedule",
    "frequency": "weekly",
    "day": "monday",
    "time": "09:00"
  },
  "actions": [
    {
      "type": "run_agent_command",
      "agent_id": "analytics_agent",
      "command": "generate_weekly_report",
      "input": "project_id: {{project.id}}"
    },
    {
      "type": "email_notification",
      "recipients": ["team@company.com"],
      "subject": "Weekly Project Report",
      "body": "{{previous.report_content}}"
    }
  ]
}
```

## Integration Ecosystem

Taskade Automations connect with 100+ external services, including:

### Communication & Collaboration
- **Slack**: Send messages, create channels, update status
- **Microsoft Teams**: Post messages, create meetings, manage channels
- **Discord**: Send messages, manage roles, create invites
- **Email**: Send notifications, create campaigns, manage lists

### Development & Project Management
- **GitHub**: Create issues, manage pull requests, trigger workflows
- **GitLab**: Manage merge requests, create issues, update pipelines
- **Jira**: Create tickets, update status, manage sprints
- **Linear**: Create issues, update priorities, manage projects

### Data & Analytics
- **Google Sheets**: Add rows, update cells, create charts
- **Airtable**: Create records, update fields, manage bases
- **Notion**: Create pages, update databases, manage content
- **HubSpot**: Manage contacts, create deals, update properties

### Marketing & Sales
- **Mailchimp**: Manage campaigns, update lists, send emails
- **ConvertKit**: Manage subscribers, create sequences, send broadcasts
- **Calendly**: Schedule meetings, manage availability, send reminders
- **Stripe**: Process payments, manage subscriptions, handle webhooks

## Advanced Automation Features

### Conditional Logic
```json
{
  "actions": [
    {
      "type": "conditional",
      "condition": "{{form.priority}} === 'high'",
      "then": [
        {
          "type": "slack_notification",
          "channel": "#urgent",
          "message": "High priority issue: {{form.subject}}"
        }
      ],
      "else": [
        {
          "type": "create_task",
          "project_id": "backlog",
          "task_title": "{{form.subject}}"
        }
      ]
    }
  ]
}
```

### Multi-Step Agent Workflows
```json
{
  "actions": [
    {
      "type": "run_agent_command",
      "agent_id": "research_agent",
      "command": "gather_information",
      "input": "{{trigger.topic}}"
    },
    {
      "type": "run_agent_command",
      "agent_id": "writing_agent",
      "command": "create_content",
      "input": "{{previous.research_results}}"
    },
    {
      "type": "run_agent_command",
      "agent_id": "review_agent",
      "command": "quality_check",
      "input": "{{previous.content}}"
    }
  ]
}
```

### Human-in-the-Loop Approval
```json
{
  "actions": [
    {
      "type": "run_agent_command",
      "agent_id": "content_agent",
      "command": "generate_post",
      "input": "{{form.topic}}"
    },
    {
      "type": "request_approval",
      "approver": "content_manager",
      "message": "Please review this generated content",
      "content": "{{previous.generated_content}}"
    },
    {
      "type": "conditional",
      "condition": "{{previous.approved}} === true",
      "then": [
        {
          "type": "publish_content",
          "platform": "blog",
          "content": "{{steps.0.generated_content}}"
        }
      ]
    }
  ]
}
```

## Building Your First Automation

1. **Define Your Trigger**: What event should start your automation?
2. **Map Your Actions**: What steps should happen in sequence?
3. **Configure Integrations**: Connect to external services as needed
4. **Test Your Workflow**: Run through the automation with sample data
5. **Deploy and Monitor**: Activate your automation and track its performance

## API Access (Coming Soon)

While automations are currently managed through the Taskade interface, we're building API endpoints to programmatically create and manage automations:

```bash
# Create an automation (planned)
curl -X POST https://www.taskade.com/api/v1/automations \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "name": "Customer Feedback Processor",
    "trigger": {...},
    "actions": [...]
  }'
```

### Learn More

*   **[Getting Started with Automation ›](https://help.taskade.com/en/articles/8958467-getting-started-with-automation)**
*   **[Integrations & Extensions ›](https://help.taskade.com/en/collections/8400831-integrations-extensions)**

---

**Note:** Automation management is currently available through the Taskade web interface. Full API support for creating and managing automations programmatically is coming soon. 