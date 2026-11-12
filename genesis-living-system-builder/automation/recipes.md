---
description: >-
  Taskade automation recipes with flow outlines: AI blog posts, social posts, lead capture, ticket routing, GitHub sync and abandoned carts.
---

# Automation Recipes

Use these recipes to build real automations. Each recipe has a flow outline, setup steps and ideas to change it.

{% hint style="info" %}
The JSON blocks on this page show the outline of each flow. You cannot import them. Build each recipe in the automation editor. Add the trigger, then add each step from the step picker. Premium integrations (for example WordPress, X/Twitter, LinkedIn, HubSpot, Slack and Gmail) need a paid plan.
{% endhint %}

## Content Creation & Marketing

### Recipe 1: Daily Blog Article Generator

{% hint style="success" %}
An AI agent writes blog articles from your titles, and the WordPress integration publishes them. Use it if you must publish on a regular schedule.
{% endhint %}

**Use Case**: The automation makes full blog posts from article titles. Then it publishes them to WordPress each day.

**Workflow**: Daily Schedule → Find Unprocessed Titles → Generate Articles → Publish to WordPress → Update Status

**Setup Requirements**:

* An AI Blog Writing Agent (made with the Agent Generator)
* A connected WordPress integration
* A Taskade project with custom fields for the post status
* Article titles as tasks in the project

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
#### Create Blog Writing Agent

Make a "Blog Writer" agent with the AI Agent Generator. Give it examples of your blog style and your content guidelines.
{% endstep %}

{% step %}
#### Set Up Content Tracking Project

Make a Taskade project with the name "Blog Content Tracker". Add these custom fields:

* `post_status` (dropdown: draft, generated, posted)
* `wordpress_url` (text field for published URL)
* `target_word_count` (number)
* `target_publish_date` (date)
{% endstep %}

{% step %}
#### Configure WordPress Integration

Connect your WordPress site to Taskade. Make sure that the connection has permission to make posts.
{% endstep %}

{% step %}
#### Create the Automation

Build the automation with these parts: a daily schedule, a step that finds tasks, a loop and a WordPress publish action.
{% endstep %}

{% step %}
#### Test and Refine

Start with one article and read the result. If the result is not correct, change the agent prompts or the automation steps.
{% endstep %}
{% endstepper %}

**Customization Options**:

* **Scheduling**: Run it each week or at a custom interval, not each day
* **Content Types**: Make social media posts, newsletters or other content
* **Quality Control**: Add a step where a person reviews the post before it goes live
* **Multi-platform**: Also publish to LinkedIn, Facebook Pages or other platforms
* **SEO Optimization**: Add keyword research and write meta descriptions

### Recipe 2: Automated Social Media Posting

{% hint style="success" %}
Post to social media on a schedule with due dates and custom fields. Use it if you must post on a regular schedule.
{% endhint %}

**Use Case**: When a task gets to its due date, the automation posts its content to social media (for example X/Twitter).

**Workflow**: Task Due → Post to Social Media → Update Status

**Setup Requirements**:
- A Taskade project with your social media content
- Custom fields for the post status
- A social media integration (Twitter/X, LinkedIn, Facebook)
- A due date on each task, for the schedule

**Example Project Structure:**
```

📱 Social Media Content Calendar ├── 📝 Post Content (task description) ├── 📅 Due Date (posting schedule) ├── 🔖 Status (Draft → Scheduled → Posted) ├── 📊 Platform (Twitter, LinkedIn, Facebook) └── 🎯 Target Audience

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

#### Create Content Calendar Project

Make a Taskade project in Table view for your social media content.
{% endstep %}

{% step %}

#### Add Custom Fields

Add these fields: Status (dropdown: draft, scheduled, posted), Platform and Posted_At (date).
{% endstep %}

{% step %}

#### Set Up Automation Trigger

Add a "Task Due" trigger. It starts the automation when a post is due.
{% endstep %}

{% step %}

#### Configure Social Media Actions

Add one conditional action for each platform (Twitter, LinkedIn, Facebook). Each action reads the Platform field.
{% endstep %}

{% step %}

#### Add Status Updates

Add actions that change the task status and the post time after the post goes live.
{% endstep %}

{% endstepper %}

**Platform-Specific Configuration:**

| **Platform and integration** | **Content Limits** | **Best Practices** |
| --- | --- | --- |
| **Twitter/X** (Twitter API connection) | 280 characters | Use hashtags, join current topics |
| **LinkedIn** (LinkedIn Business API) | 3000 characters | Professional tone, industry news |
| **Facebook** (Facebook Graph API) | 63206 characters | Images and video, talk with your community |

**Advanced Features:**

{% hint style="info" %}
**Multi-Platform Posting**: With conditional steps, one automation can post the same content to many platforms at the same time.
{% endhint %}

**Content Personalization:**

* Use variables to change posts for different audiences
* Add hashtags and formats for each platform
* Change the tone and style for each platform

**Reporting:**

* Record each published post in a project or a Google Sheet
* Make a weekly report of your posts with an AI step

**Bulk Scheduling:**

* Import content calendars from spreadsheets
* Schedule many posts at one time
* Use recurring tasks to post on a regular schedule

**Customization Options:**

* **Content Variations**: Make a different version of a post for each platform
* **A/B Testing**: Compare two versions of your content
* **Approval Workflows**: Add a review step before each post
* **Performance Tracking**: Record each post and read about it in a weekly AI summary

## Lead Generation & Sales

### Recipe 3: Lead Capture & Qualification

**Use Case**: The automation gets leads from the form on your website. An AI agent scores each lead, and the automation sends it to the right sales team.

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
          "type": "taskade.createTask",
          "projectId": "sales_followups",
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

1. Make a lead qualification agent. Give it prompts that score a lead from the company size, the industry and the message.
2. In Taskade, connect your HubSpot and Slack integrations.
3. In your email service, make an email template with the ID `nurture_sequence_start`.
4. Make a public Taskade form with the title "Contact Form". Add the `name`, `email`, `company`, and `message` fields.

### Recipe 4: Deal Stage Automation

**Use Case**: The automation changes the deal stage when a customer acts. Then it tells the right team members.

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

1. Connect your HubSpot, Email and Slack integrations.
2. Make sure that your HubSpot deal pipeline has a stage with the name "proposal\_sent".
3. Make an email template with the name `proposal_followup`.

## Customer Support

### Recipe 5: Intelligent Ticket Routing

**Use Case**: An AI agent puts each support ticket in a category and gives it a priority. Then the automation sends it to the right team.

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

1. Make a "Support Classifier" agent. It reads each ticket and returns JSON with `project_id`, `category`, `priority`, and `assignee`.
2. Connect your email and Slack integrations.
3. Make one Taskade project for each `project_id` that your agent can return.

## Content Operations

### Recipe 6: Content Creation Pipeline

**Use Case**: Get ideas for blog posts, make drafts and manage the approval of each post.

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

## Development & Project Management

### Recipe 7: GitHub Issue to Project Task

**Use Case**: The automation makes a project task from each new GitHub issue and keeps the status the same in both places.

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

## Data Processing & Analytics

### Recipe 8: Weekly Analytics Report

**Use Case**: Make a weekly analytics report and send it to the people who need it.

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

## HR & Operations

### Recipe 9: Employee Onboarding Automation

**Use Case**: Make the onboarding tasks and messages for each new employee automatically.

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

## E-commerce & Sales

### Recipe 10: Abandoned Cart Recovery

**Use Case**: Send a message to each customer who leaves items in the shopping cart and does not buy.

Send the abandoned-checkout event from your store platform to the webhook address of the automation. The webhook trigger needs Pro and up.

```json
{
  "name": "Abandoned Cart Recovery",
  "trigger": {
    "type": "webhook.received",
    "source": "your store platform (abandoned checkout event)"
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

## Custom Recipe Builder

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

1. **Start Simple**: Start with one trigger and one action.
2. **Add Conditions**: Use conditional steps for complex workflows.
3. **Handle Errors**: Decide what each step does if it fails (**Continue if this step fails**).
4. **Test Thoroughly**: Run a test with sample data before you turn the automation on.
5. **Monitor Performance**: Watch how often the automation succeeds and how long it takes.

***

> **Need help with a custom recipe?**\
> → [Read the automation guides](https://www.taskade.com/learn/automation) for help and examples

> **Want to share your recipe?**\
> → [Look at the Taskade template gallery](https://www.taskade.com/templates)

→ **Next:** [**Set up your first automation**](README.md)

---

_Step-by-step guide on taskade.com/learn: [Prompt Library for Automations](https://www.taskade.com/learn/automation/prompts)._
