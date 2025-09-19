# Automation Recipes

Real-world automation workflows that you can implement immediately. Each recipe includes the complete configuration, setup instructions, and customization options.

## 📝 Content Creation & Marketing

### Recipe 1: Daily Blog Article Generator

{% hint style="success" %}
Automatically generate and publish blog articles from titles using AI agents and WordPress integration. Perfect for content marketers and bloggers who need consistent publishing.
{% endhint %}

**Use Case**: Turn article titles into full blog posts automatically, then publish them to WordPress on a daily schedule.

**Workflow**: Daily Schedule → Find Unprocessed Titles → Generate Articles → Publish to WordPress → Update Status

**Setup Requirements**:
- AI Blog Writing Agent (created via Agent Generator)
- WordPress integration configured
- Taskade project with custom fields for tracking post status
- Article titles stored as tasks in the project

```json
{
  "name": "Daily Blog Article Generator",
  "trigger": {
    "type": "schedule.daily",
    "time": "09:00",
    "timezone": "America/New_York"
  },
  "actions": [
    {
      "type": "findTasks",
      "projectId": "blog_content_tracker",
      "filters": {
        "customField": {
          "post_status": {
            "not_equals": "posted"
          }
        }
      },
      "returnType": "array",
      "limit": 5
    },
    {
      "type": "loop.forEach",
      "array": "{{steps.0.tasks}}",
      "actions": [
        {
          "type": "agent.runCommand",
          "agentId": "blog_writer_agent",
          "command": "write_full_article",
          "input": {
            "title": "{{loop.item.name}}",
            "word_count": "1500",
            "tone": "professional",
            "include_images": true
          }
        },
        {
          "type": "createProject",
          "name": "{{loop.item.name}}",
          "content": "{{steps.1.output}}",
          "tags": ["blog", "auto-generated"]
        },
        {
          "type": "wordpress.createPost",
          "title": "{{loop.item.name}}",
          "content": "{{steps.1.output}}",
          "status": "publish",
          "categories": ["blog"],
          "tags": ["automated", "ai-generated"]
        },
        {
          "type": "updateCustomField",
          "taskId": "{{loop.item.id}}",
          "fieldName": "post_status",
          "value": "posted"
        },
        {
          "type": "updateCustomField",
          "taskId": "{{loop.item.id}}",
          "fieldName": "wordpress_url",
          "value": "{{steps.3.postUrl}}"
        }
      ]
    }
  ]
}
```

**Setup Instructions**:

{% stepper %}
{% step %}
### Create Blog Writing Agent
Use the AI Agent Generator to create a "Blog Writer" agent. Train it with examples of your blog style and content guidelines.
{% endstep %}

{% step %}
### Set Up Content Tracking Project
Create a Taskade project called "Blog Content Tracker" with custom fields:
- `post_status` (dropdown: draft, generated, posted)
- `wordpress_url` (text field for published URL)
- `target_word_count` (number)
- `target_publish_date` (date)
{% endstep %}

{% step %}
### Configure WordPress Integration
Connect your WordPress site to Taskade and ensure proper permissions for post creation.
{% endstep %}

{% step %}
### Create the Automation
Build the automation with daily scheduling, task finding, looping, and WordPress publishing actions.
{% endstep %}

{% step %}
### Test and Refine
Start with one article, review the output, and adjust the agent prompts or automation logic as needed.
{% endstep %}
{% endstepper %}

**Customization Options**:
- **Scheduling**: Change frequency from daily to weekly or custom intervals
- **Content Types**: Modify for social media posts, newsletters, or other content formats
- **Quality Control**: Add human review steps before publishing
- **Multi-platform**: Extend to publish to Medium, LinkedIn, or other platforms
- **SEO Optimization**: Include keyword research and meta description generation
```

### Recipe 2: Automated Social Media Posting

{% hint style="success" %}
Schedule and automate social media posts using due dates and custom fields. Perfect for social media managers and digital marketers who need consistent posting schedules.
{% endhint %}

**Use Case**: Automatically post content to social media platforms (like X/Twitter) when tasks reach their due date, maintaining consistent online presence.

**Workflow**: Task Due → Post to Social Media → Update Status → Track Performance

**Setup Requirements**:
- Taskade project with social media content
- Custom fields for tracking post status
- Social media integration (Twitter/X, LinkedIn, Facebook)
- Due dates set on tasks for scheduling

**Example Project Structure:**
```
📱 Social Media Content Calendar
├── 📝 Post Content (task description)
├── 📅 Due Date (posting schedule)
├── 🔖 Status (Draft → Scheduled → Posted)
├── 📊 Platform (Twitter, LinkedIn, Facebook)
└── 🎯 Target Audience
```

```json
{
  "name": "Social Media Auto-Poster",
  "trigger": {
    "type": "task.due",
    "projectId": "social_media_calendar",
    "filters": {
      "customField": {
        "status": {
          "equals": "scheduled"
        }
      }
    }
  },
  "actions": [
    {
      "type": "conditional",
      "condition": "@trigger.task.customFields.platform == 'twitter'",
      "actions": [
        {
          "type": "twitter.createPost",
          "content": "@trigger.task.content",
          "account": "main_account"
        }
      ]
    },
    {
      "type": "conditional",
      "condition": "@trigger.task.customFields.platform == 'linkedin'",
      "actions": [
        {
          "type": "linkedin.createPost",
          "content": "@trigger.task.content",
          "account": "company_page"
        }
      ]
    },
    {
      "type": "updateCustomField",
      "taskId": "@trigger.task.id",
      "fieldName": "status",
      "value": "posted"
    },
    {
      "type": "updateCustomField",
      "taskId": "@trigger.task.id",
      "fieldName": "posted_at",
      "value": "@current.timestamp"
    }
  ]
}
```

**Setup Instructions:**

{% stepper %}
{% step %}
### Create Content Calendar Project
Set up a Taskade project using Table view to organize your social media content
{% endstep %}

{% step %}
### Add Custom Fields
Create fields for Status (dropdown: draft, scheduled, posted), Platform, and Posted_At (date)
{% endstep %}

{% step %}
### Set Up Automation Trigger
Create a "Task Due" trigger that fires when content is scheduled to post
{% endstep %}

{% step %}
### Configure Social Media Actions
Add conditional actions for each platform (Twitter, LinkedIn, Facebook) based on custom field values
{% endstep %}

{% step %}
### Add Status Updates
Include actions to update the task status and posting timestamp after successful publication
{% endstep %}
{% endstepper %}

**Platform-Specific Configuration:**

| **Platform** | **Integration Required** | **Content Limits** | **Best Practices** |
|-------------|-------------------------|-------------------|-------------------|
| **Twitter/X** | Twitter API connection | 280 characters | Use hashtags, engage with trends |
| **LinkedIn** | LinkedIn Business API | 3000 characters | Professional tone, industry insights |
| **Facebook** | Facebook Graph API | 63206 characters | Visual content, community engagement |
| **Instagram** | Meta Business API | 2200 characters | High-quality images, Stories integration |

**Advanced Features:**

{% hint style="info" %}
**Multi-Platform Posting**: Set up conditional logic to post the same content across multiple platforms simultaneously.
{% endhint %}

**Content Personalization:**
- Use variables to customize posts for different audiences
- Include platform-specific hashtags and formatting
- Adapt tone and style based on target platform

**Analytics Integration:**
- Track engagement metrics automatically
- Update performance data in Taskade
- Generate posting reports and insights

**Bulk Scheduling:**
- Import content calendars from spreadsheets
- Schedule multiple posts at once
- Use recurring tasks for consistent posting

**Customization Options:**
- **Content Variations**: Create platform-specific versions of posts
- **Timing Optimization**: Use analytics to determine best posting times
- **A/B Testing**: Test different content approaches
- **Approval Workflows**: Add review steps before posting
- **Performance Tracking**: Monitor engagement and adjust strategies

## 🎯 Lead Generation & Sales

### Recipe 1: Lead Capture & Qualification

**Use Case**: Automatically capture leads from your website form, qualify them with AI, and route to the appropriate sales team.

**Workflow**: Form Submission → AI Qualification → CRM Creation → Team Notification

```json
{
  "name": "Lead Capture & Qualification",
  "trigger": {
    "type": "form.submitted",
    "form_name": "Contact Form"
  },
  "actions": [
    {
      "type": "agent.runCommand",
      "agentId": "lead_qualifier",
      "command": "qualify_lead",
      "input": {
        "name": "{{form.name}}",
        "email": "{{form.email}}",
        "company": "{{form.company}}",
        "message": "{{form.message}}"
      }
    },
    {
      "type": "hubspot.createContact",
      "email": "{{form.email}}",
      "firstName": "{{form.name}}",
      "company": "{{form.company}}",
      "properties": {
        "lead_score": "{{previous.score}}",
        "qualification_notes": "{{previous.notes}}"
      }
    },
    {
      "type": "condition.if",
      "condition": "{{steps.0.score}} >= 80",
      "then": [
        {
          "type": "slack.sendMessage",
          "channel": "#sales-hot-leads",
          "message": "🔥 Hot lead: {{form.name}} from {{form.company}} (Score: {{steps.0.score}})"
        },
        {
          "type": "hubspot.createTask",
          "contactId": "{{steps.1.id}}",
          "title": "Follow up with hot lead",
          "dueDate": "{{now + 1 hour}}"
        }
      ],
      "else": [
        {
          "type": "email.sendTemplate",
          "to": "{{form.email}}",
          "templateId": "nurture_sequence_start",
          "variables": {
            "name": "{{form.name}}",
            "company": "{{form.company}}"
          }
        }
      ]
    }
  ]
}
```

**Setup Instructions**:
1. Create a lead qualification agent with prompts for scoring leads based on company size, industry, and message content.
2. Connect your HubSpot and Slack integrations in Taskade.
3. Create an email template in your email service with the ID `nurture_sequence_start`.
4. Create a public Taskade form titled "Contact Form" with `name`, `email`, `company`, and `message` fields.

### Recipe 2: Deal Stage Automation

**Use Case**: Automatically update deal stages based on customer actions and notify relevant team members.

```json
{
  "name": "Deal Stage Automation",
  "trigger": {
    "type": "hubspot.dealUpdated",
    "filters": {
      "stage": "proposal_sent"
    }
  },
  "actions": [
    {
      "type": "schedule.delay",
      "delay": "3 days"
    },
    {
      "type": "condition.if",
      "condition": "{{deal.stage}} === 'proposal_sent'",
      "then": [
        {
          "type": "email.send",
          "to": "{{deal.contact.email}}",
          "subject": "Following up on your proposal",
          "template": "proposal_followup"
        },
        {
          "type": "slack.sendMessage",
          "channel": "#sales",
          "message": "📧 Follow-up sent to {{deal.contact.name}} for deal: {{deal.name}}"
        }
      ]
    }
  ]
}
```

**Setup Instructions**:
1. Connect your HubSpot, Email, and Slack integrations.
2. Ensure your HubSpot deal pipeline has a stage named "proposal_sent".
3. Create an email template named `proposal_followup`.

## 🎧 Customer Support

### Recipe 3: Intelligent Ticket Routing

**Use Case**: Automatically categorize support tickets and route them to the right team with appropriate priority.

```json
{
  "name": "Intelligent Ticket Routing",
  "trigger": {
    "type": "email.received",
    "filters": {
      "to": "support@company.com"
    }
  },
  "actions": [
    {
      "type": "agent.runCommand",
      "agentId": "support_classifier",
      "command": "categorize_ticket",
      "input": {
        "subject": "{{email.subject}}",
        "body": "{{email.body}}",
        "from": "{{email.from}}"
      }
    },
    {
      "type": "taskade.createTask",
      "projectId": "{{previous.project_id}}",
      "title": "{{email.subject}}",
      "content": "**From**: {{email.from}}\n**Category**: {{previous.category}}\n**Priority**: {{previous.priority}}\n\n{{email.body}}",
      "priority": "{{previous.priority}}",
      "assignee": "{{previous.assignee}}"
    },
    {
      "type": "condition.switch",
      "value": "{{steps.0.priority}}",
      "cases": {
        "urgent": [
          {
            "type": "slack.sendMessage",
            "channel": "#support-urgent",
            "message": "🚨 Urgent ticket: {{email.subject}} from {{email.from}}"
          }
        ],
        "high": [
          {
            "type": "slack.sendMessage",
            "channel": "#support",
            "message": "⚠️ High priority ticket: {{email.subject}} assigned to {{steps.0.assignee}}"
          }
        ]
      }
    }
  ]
}
```

**Setup Instructions**:
1. Create a "Support Classifier" agent trained to analyze ticket content and output a structured JSON with `project_id`, `category`, `priority`, and `assignee`.
2. Connect your email and Slack integrations.
3. Set up Taskade projects corresponding to the `project_id` your agent will return.

## 📝 Content & Marketing

### Recipe 4: Content Creation Pipeline

**Use Case**: Generate blog content ideas, create drafts, and manage the approval process.

```json
{
  "name": "Content Creation Pipeline",
  "trigger": {
    "type": "schedule.weekly",
    "day": "monday",
    "time": "09:00"
  },
  "actions": [
    {
      "type": "agent.runCommand",
      "agentId": "content_researcher",
      "command": "research_trending_topics",
      "input": {
        "industry": "technology",
        "audience": "developers",
        "count": 5
      }
    },
    {
      "type": "loop.forEach",
      "array": "{{previous.topics}}",
      "actions": [
        {
          "type": "taskade.createTask",
          "projectId": "content_calendar",
          "title": "Write: {{item.title}}",
          "content": "**Keywords**: {{item.keywords}}\n**Outline**: {{item.outline}}",
          "assignee": "content_team"
        }
      ]
    }
  ]
}
```

## 🔧 Development & Project Management

### Recipe 5: GitHub Issue to Project Task

**Use Case**: Automatically create project tasks from GitHub issues and sync status updates.

```json
{
  "name": "GitHub Issue to Project Task",
  "trigger": {
    "type": "github.issueOpened",
    "repository": "company/product"
  },
  "actions": [
    {
      "type": "agent.runCommand",
      "agentId": "issue_analyzer",
      "command": "analyze_issue",
      "input": {
        "title": "{{issue.title}}",
        "body": "{{issue.body}}",
        "labels": "{{issue.labels}}"
      }
    },
    {
      "type": "taskade.createTask",
      "projectId": "{{previous.project_id}}",
      "title": "{{issue.title}}",
      "content": "**GitHub Issue**: {{issue.html_url}}\n**Priority**: {{previous.priority}}\n\n{{issue.body}}",
      "assignee": "{{previous.assignee}}"
    }
  ]
}
```

## 📊 Data Processing & Analytics

### Recipe 6: Weekly Analytics Report

**Use Case**: Generate and distribute weekly analytics reports to stakeholders.

```json
{
  "name": "Weekly Analytics Report",
  "trigger": {
    "type": "schedule.weekly",
    "day": "friday",
    "time": "17:00"
  },
  "actions": [
    {
      "type": "agent.runCommand",
      "agentId": "analytics_agent",
      "command": "generate_weekly_report",
      "input": {
        "start_date": "{{now - 7 days}}",
        "end_date": "{{now}}",
        "metrics": ["traffic", "conversions", "revenue"]
      }
    },
    {
      "type": "email.send",
      "to": ["team@company.com"],
      "subject": "Weekly Analytics Report",
      "body": "{{previous.formatted_report}}"
    }
  ]
}
```

## 🏢 HR & Operations

### Recipe 7: Employee Onboarding Automation

**Use Case**: Automate the employee onboarding process with task creation and notifications.

```json
{
  "name": "Employee Onboarding Automation",
  "trigger": {
    "type": "form.submitted",
    "form_name": "New Employee Form"
  },
  "actions": [
    {
      "type": "taskade.createProject",
      "name": "{{form.employee_name}} - Onboarding",
      "template": "employee_onboarding_template"
    },
    {
      "type": "email.sendTemplate",
      "to": "{{form.employee_email}}",
      "templateId": "welcome_email",
      "variables": {
        "name": "{{form.employee_name}}",
        "start_date": "{{form.start_date}}"
      }
    }
  ]
}
```

## 🎯 E-commerce & Sales

### Recipe 8: Abandoned Cart Recovery

**Use Case**: Automatically follow up with customers who abandon their shopping carts.

```json
{
  "name": "Abandoned Cart Recovery",
  "trigger": {
    "type": "shopify.cartAbandoned",
    "filters": {
      "cart_value": "> 50"
    }
  },
  "actions": [
    {
      "type": "schedule.delay",
      "delay": "1 hour"
    },
    {
      "type": "email.sendTemplate",
      "to": "{{cart.customer.email}}",
      "templateId": "abandoned_cart_recovery",
      "variables": {
        "customer_name": "{{cart.customer.name}}",
        "cart_url": "{{cart.recovery_url}}"
      }
    }
  ]
}
```

## 🔧 Custom Recipe Builder

### Template Structure

```json
{
  "name": "Your Recipe Name",
  "description": "What this automation does",
  "trigger": {
    "type": "trigger_type",
    "filters": {},
    "config": {}
  },
  "actions": [
    {
      "type": "action_type",
      "parameters": {}
    }
  ]
}
```

### Best Practices

1. **Start Simple**: Begin with basic trigger-action pairs
2. **Add Conditions**: Use conditional logic for complex workflows
3. **Handle Errors**: Always include error handling and retries
4. **Test Thoroughly**: Test with sample data before deployment
5. **Monitor Performance**: Track automation success rates and timing

---

> **Need help with a custom recipe?**  
> → [Join our community](https://taskade.com/community) for support and examples

> **Want to share your recipe?**  
> → [Submit to our recipe gallery](https://taskade.com/automations/recipes)

→ **Next: [Set up your first automation](../README.md#getting-started)** 