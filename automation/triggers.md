# Triggers Reference

Triggers are the "if" part of automation workflows—they define the events that initiate automated actions. Taskade provides a comprehensive set of triggers that monitor for task changes, project events, external integrations, and scheduled conditions.

**[Automations Guide →](https://help.taskade.com/en/articles/8958467-automations-the-execution-pillar)**

{% hint style="success" %}
Triggers act as the intelligent sensors of your automation system, detecting events across Taskade and external services to initiate workflows.
{% endhint %}

## Quick Reference: Trigger Types

| Category | Trigger Types | Use Cases |
|----------|---------------|-----------|
| **Task Events** | Task Added, Completed, Assigned, Due | Project management, notifications |
| **Project Events** | Project Completed, Custom Field Updated | Milestones, status tracking |
| **Time Events** | Schedule, Delay, Task Due | Recurring tasks, reminders |
| **Collaboration** | New Comment, New Due Date | Team notifications, feedback |
| **AI Events** | Agent Trigger, Chat Ended, Command Executed | Agent workflows, automation |
| **External** | Webhook, Mailhook, Form Submission | API integrations, data import |
| **Integrations** | Slack, Gmail, HubSpot, GitHub, 100+ more | Cross-platform automation |

## Complete Trigger Reference

### Taskade Core Triggers

| Trigger | Description | Event Type | Data Available | Use Cases |
|---------|-------------|------------|----------------|-----------|
| **Task Added** | Triggers whenever a new task is created in a selected project | Task Events | `task`, `project`, `creator`, `content` | Auto-assignment, task templates, notifications |
| **Task Completed** | Activates when a task is marked as completed | Task Events | `task`, `project`, `completedBy`, `completionTime` | Follow-ups, notifications, next steps |
| **Task Assigned** | Triggers when a task is assigned to you or a team member | Task Events | `task`, `project`, `assignee`, `assigner` | Workload alerts, acceptance workflows |
| **Task Due** | Triggers when a task with a due date is due | Time Events | `task`, `project`, `dueDate`, `assignee` | Reminders, escalations, status updates |
| **Task Custom Field Updated** | Triggers when a custom field is updated | Data Events | `task`, `project`, `fieldId`, `oldValue`, `newValue` | Status tracking, conditional workflows |
| **Task Manual Trigger** | Manually trigger task-based automations from within projects | Manual Events | `task`, `project`, `user` | Ad-hoc workflows, testing, special cases |
| **Project Completed** | Triggers when a project is completed | Project Events | `project`, `completedBy`, `completionTime` | Archiving, reporting, celebrations |
| **New Comment** | Triggers when a new comment is made on tasks | Collaboration Events | `task`, `project`, `comment`, `author` | Notifications, mentions, feedback loops |
| **New Due Date** | Triggers when a new due date is added to a task | Data Events | `task`, `project`, `dueDate`, `addedBy` | Scheduling, planning updates |
| **Agent Trigger** | Enables AI Agents to optionally run actions during a conversation | AI Events | `agent`, `conversation`, `userInput` | Agent workflows, data processing |
| **Agent Public Chat Ended** | Triggers when the public agent conversation comes to an end | AI Events | `agent`, `conversation`, `duration` | Follow-ups, analytics, cleanup |
| **Form Trigger** | Triggers when a form is used | External Events | `form`, `responses`, `submitter` | Data processing, notifications, integrations |
| **Schedule** | Schedules the automation to run every hour, day, week, or month | Time Events | `schedule`, `timestamp` | Recurring tasks, reports, maintenance |
| **Delay** | Pause an automation for a specified time period or until a specific date | Control Flow | `duration`, `targetTime` | Timing control, sequential processes |
| **Mailhook Trigger** | Trigger automation flows by sending tasks & data to a unique email address | External Events | `email`, `content`, `attachments` | Email processing, data import |
| **Webhook** | Triggers actions through requests received from external services | External Events | `payload`, `headers`, `source` | API integrations, third-party connections |

### Integration Triggers

| Trigger | Integration | Description | Data Available |
|---------|-------------|-------------|----------------|
| **Calendly Triggers** | Calendly | Meeting scheduled, cancelled, or completed | `meeting`, `attendee`, `time`, `status` |
| **Slack Triggers** | Slack | Messages, mentions, reactions, channel events | `message`, `channel`, `user`, `timestamp` |
| **Typeform Triggers** | Typeform | Form responses and submissions | `form`, `responses`, `respondent` |
| **Gmail Triggers** | Gmail | New emails, attachments, labels | `email`, `sender`, `subject`, `attachments` |
| **Google Sheets Triggers** | Google Sheets | Row additions, updates, deletions | `sheet`, `row`, `changes`, `user` |
| **HubSpot Triggers** | HubSpot | Contact updates, deal changes, form submissions | `contact`, `deal`, `changes` |
| **Zapier Triggers** | Zapier | Any Zapier-supported service events | `payload`, `source`, `data` |
| **RSS Triggers** | RSS | New items in RSS feeds | `feed`, `item`, `content`, `published` |
| **Twitter Triggers** | Twitter/X | Tweets, mentions, follows, engagement | `tweet`, `user`, `engagement` |
| **LinkedIn Triggers** | LinkedIn | Posts, messages, connection updates | `post`, `message`, `connection` |
| **Facebook Triggers** | Facebook | Posts, comments, engagement, page events | `post`, `comment`, `engagement` |
| **WhatsApp Triggers** | WhatsApp Business | Messages, media, status updates | `message`, `sender`, `media` |

## Understanding Triggers

Triggers are predefined conditions that monitor for specific events or changes. When these conditions are met, they initiate automated action sequences. Triggers provide contextual data that can be referenced in subsequent automation steps.

### Trigger Types by Category

**Task Events**: Monitor task lifecycle changes (creation, completion, assignment, due dates)
**Project Events**: Track project-level changes (completion, status updates)
**Time Events**: Schedule-based or time-sensitive triggers (due dates, schedules)
**Collaboration Events**: Monitor team interactions (comments, mentions)
**Data Events**: Track data changes (custom fields, form submissions)
**External Events**: Integration-based triggers from external services
**AI Events**: Agent and AI-related triggers
**Control Flow**: Workflow control triggers (delays, manual triggers)

Triggers are events that start automations. They monitor for specific conditions and launch your automation workflows when those conditions are met. Each trigger provides context data that can be used in subsequent actions.

## Core Taskade Triggers

### Project & Task Events

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| **Task Added** | Triggers whenever a new task is created in a selected project | `task`, `project`, `creator` | Auto-assign based on keywords, create follow-up tasks |
| **Task Completed** | Activates when a task is marked as completed | `task`, `project`, `completedBy` | Notify stakeholders, trigger next phase |

### Task Completed Trigger Settings

{% hint style="info" %}
The Task Completed trigger automatically runs workflows whenever a task is marked as done. This is essential for project management, follow-up actions, and maintaining momentum across teams.
{% endhint %}

#### When to Use Task Completed Trigger

**Perfect for:**
- **Project progression** - Automatically start the next phase when a milestone is reached
- **Team notifications** - Alert relevant stakeholders when key tasks are finished
- **Data tracking** - Log completion metrics and update dashboards
- **Quality assurance** - Trigger reviews or approvals for completed work
- **Workflow automation** - Chain dependent tasks and maintain project flow

#### Task Completed Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Assign Next Steps** | Task Completed → Add Task → Assign Task | Ensures continuous workflow momentum |
| **Team Notifications** | Task Completed → Slack Message/Email | Keeps everyone informed and aligned |
| **Project Creation** | Task Completed → Create Project | Automatically starts new project phases |
| **Data Logging** | Task Completed → Insert Row (Sheets) | Maintains comprehensive completion records |
| **Task Organization** | Task Completed → Move Task | Keeps active work separate from completed items |
| **Summary Generation** | Task Completed → AI Generation | Creates documentation for future reference |

#### Example Implementations

**1. Project Phase Progression:**
```
Trigger: Task Completed (Milestone)
Action: Create Project From Template
Action: Assign Team Members
Action: Set Project Timeline
Result: Seamless project phase transitions
```

**2. Completion Notifications:**
```
Trigger: Task Completed
Action: Send Slack Channel Message
Content: "✅ {task.name} completed by {completedBy}"
Channel: #project-updates
Result: Real-time team awareness
```

**3. Automated Reporting:**
```
Trigger: Task Completed
Action: Insert Row (Google Sheets)
Data: [task.name, completedBy, completion_date, project]
Sheet: "Task Completion Log"
Result: Automatic progress tracking
```

#### Configuration Options

| Setting | Description | Example |
|---------|-------------|---------|
| **Project Scope** | Which projects to monitor | Specific project or workspace-wide |
| **Task Filters** | Only trigger on specific task types | Priority = "high", Type = "milestone" |
| **Completion Method** | Trigger on manual or automatic completion | Manual completion only |
| **Delay** | Wait before triggering actions | 5 minutes (for task verification) |

#### Integration with Other Triggers

**Task Lifecycle Automation:**
- **Task Added** → Initial setup and assignment
- **Task Assigned** → Notification and preparation  
- **Task Completed** → Follow-up actions and progression
- **Task Due** → Escalation and reminders

#### Best Practices

- **Use specific filters** to avoid triggering on routine task completion
- **Chain with delays** for quality checks before triggering follow-up actions
- **Combine with conditionals** for different actions based on task type
- **Monitor completion patterns** to identify bottlenecks
- **Test thoroughly** to ensure workflows don't create unintended loops

---

## External Service Triggers
| **Task Assigned** | Triggers when a task is assigned to you or a team member | `task`, `assignee`, `assigner` | Send notification to assignee, update workload tracking |

### Task Assigned Trigger Settings

{% hint style="info" %}
The Task Assigned trigger automatically runs workflows whenever a task is assigned to someone. This is essential for onboarding new assignees, setting up communication channels, and ensuring tasks are properly prepared for execution.
{% endhint %}

#### When to Use Task Assigned Trigger

**Perfect for:**
- **Onboarding new assignees** - Automatically set up resources and information for task owners
- **Communication setup** - Notify relevant stakeholders and establish communication channels
- **Task preparation** - Generate checklists, templates, or preparatory materials
- **Workload management** - Update dashboards and balance team capacity
- **Quality assurance** - Ensure tasks have all necessary information before assignment

#### Task Assigned Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Task Onboarding** | Task Assigned → Generate Checklist → Send Welcome Email | 40% faster task preparation |
| **Content Creation** | Task Assigned → Create Draft → Set Up Review Process | 60% reduction in content creation time |
| **Project Communication** | Task Assigned → Notify Stakeholders → Set Up Status Updates | Improved team coordination |
| **Resource Allocation** | Task Assigned → Update Capacity → Balance Workload | Optimized resource utilization |
| **Quality Control** | Task Assigned → Validate Requirements → Flag Missing Info | Consistent task quality |

#### Example Implementations

**1. Task Onboarding Automation:**
```
Trigger: Task Assigned
Action: Create Project (Task Resources)
Action: Generate Checklist (Required Actions)
Action: Send Welcome Email with Resources
Result: Streamlined task handoff process
```

**2. Content Creation Workflow:**
```
Trigger: Task Assigned
Action: Generate with AI (Initial Draft)
Action: Create Review Checklist
Action: Set Up Approval Workflow
Result: Accelerated content production
```

**3. Stakeholder Notification:**
```
Trigger: Task Assigned
Action: Identify Stakeholders
Action: Send Assignment Notification
Action: Schedule Status Check-in
Result: Enhanced communication and visibility
```

#### Configuration Options

| Setting | Description | Example |
|---------|-------------|---------|
| **Project Scope** | Which projects to monitor | Specific project or workspace-wide |
| **Block Scope** | Specific blocks to monitor | Content calendar, Task board |
| **Assignee Filters** | Only trigger for specific people | Team members, External contractors |
| **Assignment Type** | New assignments vs. reassignments | New assignments only |
| **Notification Settings** | Who gets notified | Assignee, Manager, Stakeholders |

#### Integration with Task Lifecycle

**Complete Assignment Automation:**
- **Task Added** → Initial task setup
- **Task Assigned** → Assignee onboarding and preparation
- **Task Due** → Progress monitoring and reminders
- **Task Completed** → Follow-up and closure

#### Advanced Features

**Smart Assignment Detection:**
- **New vs. Reassignment** - Different workflows for initial vs. reassigned tasks
- **Bulk Assignments** - Handle multiple assignments simultaneously
- **Conditional Logic** - Different actions based on assignee role or task type
- **Delegation Tracking** - Monitor task handoffs and responsibility changes

#### Best Practices

- **Personalize onboarding** based on assignee role and experience level
- **Include all necessary context** in automated communications
- **Set up clear expectations** with checklists and deadlines
- **Monitor assignment patterns** to identify workload imbalances
- **Combine with task templates** for consistent task structures

---

## External Service Triggers
| **Task Due** | Triggers when a task with a due date is due | `task`, `project`, `dueDate` | Send reminder notifications, escalate overdue items |

### Task Due Trigger Settings

{% hint style="info" %}
The Task Due trigger automatically runs workflows when a task's due date is reached. This is essential for deadline management, automated follow-ups, and ensuring timely completion of critical tasks.
{% endhint %}

#### When to Use Task Due Trigger

**Perfect for:**
- **Deadline management** - Automated reminders and escalations for approaching deadlines
- **Content publishing** - Schedule posts, emails, and communications based on due dates
- **Project progression** - Trigger next steps when milestones are reached
- **Quality assurance** - Review and validation processes for completed work
- **Reporting automation** - Generate status updates and progress reports

#### Task Due Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Content Publishing** | Task Due → Generate Content → Publish | 100% on-time content delivery |
| **Email Automation** | Task Due → Send Reminder → Follow-up Sequence | Improved response rates |
| **Project Milestones** | Task Due → Review Process → Next Phase | Accelerated project completion |
| **Quality Control** | Task Due → Automated Review → Approval Gate | Consistent quality standards |
| **Status Reporting** | Task Due → Generate Report → Stakeholder Update | Better project visibility |

#### Example Implementations

**1. Scheduled Content Publishing:**
```
Trigger: Task Due (Content Calendar)
Action: Generate with AI (Blog Post)
Action: Publish to WordPress
Action: Update Social Media Calendar
Result: Automated content workflow
```

**2. Deadline Reminders:**
```
Trigger: Task Due (Reminder - 3 days before)
Action: Send Slack Notification
Action: Email Team Reminder
Action: Update Task Priority
Result: Proactive deadline management
```

**3. Project Escalation:**
```
Trigger: Task Due (Overdue)
Action: Escalate to Manager
Action: Update Project Status
Action: Generate Delay Report
Result: Improved accountability
```

#### Configuration Options

| Setting | Description | Example |
|---------|-------------|---------|
| **Project Scope** | Which projects to monitor | Specific project or workspace-wide |
| **Block Scope** | Specific blocks to monitor | Content calendar, Task board |
| **Trigger Timing** | When to trigger relative to due date | On due date, 1 day before, 3 days before |
| **Filter Conditions** | Only trigger on specific tasks | Priority = "high", Type = "milestone" |

#### Integration with Task Lifecycle

**Complete Task Management Automation:**
- **Task Added** → Initial setup and assignment
- **Task Due** → Proactive reminders and escalations (before due date)
- **Task Completed** → Follow-up actions and progression
- **Task Overdue** → Escalation and delay management

#### Advanced Timing Options

**Flexible Due Date Triggers:**
- **Exact Due Date** - Trigger exactly when due date is reached
- **Advance Notice** - Trigger X days/hours before due date
- **Overdue Handling** - Trigger when past due date
- **Recurring Tasks** - Handle recurring due dates

#### Best Practices

- **Set appropriate advance notice** to give teams time to prepare
- **Use filters** to avoid triggering on low-priority tasks
- **Combine with delays** for quality checks before automation
- **Monitor trigger frequency** to prevent notification overload
- **Test thoroughly** with different due date scenarios

---

## External Service Triggers
| **Task Custom Field Updated** | Triggers when a custom field is updated | `task`, `field`, `oldValue`, `newValue` | Update external systems, notify relevant teams |
| **Task Manual Trigger** | Manually trigger task-based automations from within projects | `task`, `project`, `triggerUser` | On-demand processing, manual workflow initiation |
| **Project Completed** | Triggers when a project is completed | `project`, `completedBy`, `completionDate` | Archive resources, generate reports, notify clients |
| **New Comment** | Triggers when a new comment is made on tasks | `task`, `comment`, `author` | Notify task assignee, log communication |

### New Comment Trigger Settings

{% hint style="info" %}
The New Comment trigger automatically runs workflows whenever a comment is added to a task. This is essential for feedback management, team notifications, documentation updates, and collaborative workflows.
{% endhint %}

#### When to Use New Comment Trigger

**Perfect for:**
- **Feedback management** - Process and route customer or team feedback
- **Team communication** - Notify relevant stakeholders of discussions
- **Documentation** - Automatically update knowledge bases and docs
- **Issue tracking** - Create tickets or tasks from comments
- **Knowledge management** - Enrich AI agent knowledge from discussions

#### New Comment Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Team Feedback Alerts** | New Comment → Slack Message → Add Follow-up Task | 50% faster feedback response |
| **Documentation Updates** | New Comment → Append to Google Doc | Real-time knowledge base updates |
| **Bug Tracking** | New Comment → Create GitHub Issue → Assign Developer | Streamlined issue management |
| **Meeting Scheduling** | New Comment → Create Calendar Event → Send Confirmation | Improved client communication |
| **AI Knowledge Enrichment** | New Comment → Add to Agent Knowledge | Smarter AI responses |

#### Example Implementations

**1. Team Feedback Management:**
```
Trigger: New Comment (in "Feedback" project)
Action: Send Slack Channel Message
Action: Create Follow-up Task
Action: Categorize with AI (Feedback Type)
Result: Streamlined feedback processing
```

**2. Automatic Documentation:**
```
Trigger: New Comment (in "Documentation" project)
Action: Append Text to Google Doc
Action: Update Knowledge Base Index
Action: Notify Documentation Team
Result: Current documentation maintained
```

**3. Issue Tracking Integration:**
```
Trigger: New Comment (Bug-related keywords)
Action: Create GitHub Issue
Action: Assign to Development Team
Action: Set Priority Based on Keywords
Result: Automated bug tracking workflow
```

#### Configuration Options

| Setting | Description | Example |
|---------|-------------|---------|
| **Project Scope** | Which projects to monitor | Specific project or workspace-wide |
| **Block Scope** | Specific blocks to monitor | Feedback board, Documentation hub |
| **Comment Filters** | Only trigger on specific comments | Contains keywords, From specific users |
| **Content Analysis** | Process comment content | Sentiment analysis, keyword extraction |
| **Notification Settings** | Who gets notified | Assignee, Team, Stakeholders |

#### Comment Content Processing

**Available Comment Data:**
```json
{
  "comment": {
    "id": "comment_123",
    "content": "This feature needs improvement",
    "author": "user@example.com",
    "timestamp": "2024-01-15T10:30:00Z",
    "task_id": "task_456",
    "project_id": "project_789"
  },
  "task": {
    "name": "Implement new feature",
    "assignee": "developer@example.com",
    "status": "in_progress"
  }
}
```

#### Integration with Communication Workflows

**Comment-Driven Automation:**
- **Feedback Processing** → Categorize → Route → Follow-up
- **Knowledge Updates** → Extract → Index → Update AI
- **Issue Creation** → Parse → Create → Assign
- **Meeting Requests** → Schedule → Confirm → Notify

#### Advanced Features

**Smart Comment Processing:**
- **Keyword Detection** - Trigger on specific terms or phrases
- **Sentiment Analysis** - Route based on comment tone
- **Mention Detection** - Notify when specific users are mentioned
- **Content Classification** - Automatically categorize comment types
- **Spam Filtering** - Ignore or flag inappropriate content

#### Best Practices

- **Use specific filters** to avoid triggering on routine comments
- **Combine with content analysis** for intelligent routing
- **Set up notification hierarchies** to avoid alert fatigue
- **Monitor comment patterns** to identify process improvements
- **Ensure privacy compliance** when processing user-generated content

---

## External Service Triggers
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

### Task Added Trigger Settings

{% hint style="info" %}
The Task Added trigger automatically runs workflows whenever a new task is created in a selected Taskade project. This is one of the most commonly used triggers for building real-time task management and progress tracking automations.
{% endhint %}

#### When to Use Task Added Trigger

**Perfect for:**
- **Real-time notifications** - Alert team members when new work arrives
- **Automatic task processing** - Route, categorize, or enrich new tasks
- **Data synchronization** - Keep external systems updated with new tasks
- **Quality assurance** - Apply validation rules to new tasks
- **Progress tracking** - Log task creation for analytics and reporting

#### Task Added Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Team Notifications** | Task Added → Slack Message | 50% faster response to new work |
| **Task Tracking** | Task Added → Google Sheets Row | Complete project visibility |
| **Content Generation** | Task Added → AI Generation | 60% faster content creation |
| **Lead Processing** | Task Added → CRM Update | Streamlined sales workflow |
| **Quality Control** | Task Added → Validation Check | Consistent task standards |

#### Example Implementations

**1. Notify Team on New Tasks:**
```
Trigger: Task Added
Action: Send Slack Message
Content: "New task created: {task.name} by {task.creator}"
Channel: #team-updates
```

**2. Track Tasks in Spreadsheet:**
```
Trigger: Task Added
Action: Insert Google Sheets Row
Data: [task.id, task.name, task.creator, task.created_date]
Sheet: "Task Tracker"
```

**3. Generate AI Content Drafts:**
```
Trigger: Task Added (Content Tasks Only)
Action: Generate with AI
Prompt: "Create initial draft for: {task.name}"
Action: Create Google Doc
```

#### Configuration Options

| Setting | Description | Example |
|---------|-------------|---------|
| **Project Scope** | Which projects to monitor | Single project or workspace-wide |
| **Filter Conditions** | Only trigger on specific tasks | Priority = "high", Type = "bug" |
| **Delay** | Wait before triggering | 5 minutes (for task completion) |
| **Rate Limiting** | Prevent spam triggers | Max 10 per minute |

#### Best Practices

- **Use filters** to avoid triggering on every task creation
- **Combine with delays** for users who create multiple tasks quickly
- **Add error handling** for external service failures
- **Monitor trigger frequency** to optimize performance
- **Test thoroughly** to ensure workflows don't create loops

---

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
| **Slack Message Received** | Triggers when new messages are posted in Slack channels | `message`, `channel`, `user`, `timestamp`, `thread` | Monitor mentions, auto-respond |
| **Slack Reaction Added** | Triggers when reactions are added to Slack messages | `message`, `reaction`, `user`, `channel` | Track engagement, sentiment analysis |
| **Slack Channel Created** | Triggers when new Slack channels are created | `channel`, `creator`, `purpose` | Auto-configure new channels |
| **Slack User Joined** | Triggers when users join Slack workspaces | `user`, `workspace`, `inviter` | Welcome new team members |
| **Gmail Message Received** | Triggers when new emails arrive in Gmail | `email`, `sender`, `subject`, `body`, `attachments` | Process support tickets, route emails |
| **Gmail Label Added** | Triggers when labels are added to Gmail messages | `email`, `label`, `user` | Categorize and process emails |
| **Discord Message Posted** | Triggers when messages are posted in Discord channels | `message`, `channel`, `user`, `attachments` | Moderate community, auto-respond |
| **Discord User Joined** | Triggers when users join Discord servers | `user`, `server`, `joinTime` | Welcome new members |
| **Teams Message Received** | Triggers when messages are posted in Microsoft Teams | `message`, `channel`, `user`, `team` | Monitor team communication |
| **Teams Channel Created** | Triggers when new Teams channels are created | `channel`, `creator`, `team` | Configure channel settings |

### Development Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| **GitHub Issue Opened** | Triggers when new issues are created in GitHub repositories | `issue`, `repository`, `author`, `labels`, `body` | Create project tasks, notify team |
| **GitHub Pull Request Opened** | Triggers when new pull requests are created | `pr`, `repository`, `author`, `base`, `head`, `title` | Notify reviewers, trigger CI |
| **GitHub Pull Request Merged** | Triggers when pull requests are merged | `pr`, `repository`, `merger`, `merge_commit` | Deploy code, update changelogs |
| **GitHub Push to Main** | Triggers when code is pushed to main/master branch | `commits`, `repository`, `pusher`, `ref` | Trigger deployment, run tests |
| **GitHub Release Created** | Triggers when new releases are published | `release`, `repository`, `author`, `tag_name` | Notify stakeholders, deploy to production |
| **GitHub Star Added** | Triggers when repositories receive new stars | `repository`, `starrer`, `star_count` | Track popularity, send thank you notes |
| **GitHub Issue Commented** | Triggers when comments are added to issues | `issue`, `comment`, `author`, `repository` | Notify assignees, update status |
| **Jira Issue Created** | Triggers when new issues are created in Jira | `issue`, `project`, `reporter`, `issue_type` | Sync with project management |
| **Jira Issue Updated** | Triggers when Jira issues are modified | `issue`, `changes`, `updater`, `project` | Update external systems |
| **Jira Status Changed** | Triggers when issue status changes | `issue`, `oldStatus`, `newStatus`, `transitioner` | Update stakeholders, trigger workflows |

### Data & CRM Triggers

| Trigger | Description | Data Available | Example Use Case |
|---------|-------------|----------------|------------------|
| **HubSpot Contact Created** | Triggers when new contacts are added to HubSpot | `contact`, `properties`, `source`, `createDate` | Welcome emails, lead qualification |
| **HubSpot Deal Updated** | Triggers when deal stages change in HubSpot | `deal`, `oldStage`, `newStage`, `amount`, `closeDate` | Notify sales team, update forecasts |
| **HubSpot Company Created** | Triggers when new companies are added | `company`, `properties`, `domain` | Account setup, data enrichment |
| **HubSpot Form Submitted** | Triggers when HubSpot forms are submitted | `form`, `submission`, `contact`, `fields` | Process leads, create tasks |
| **Salesforce Lead Created** | Triggers when new leads are created in Salesforce | `lead`, `source`, `score`, `owner` | Route leads, initiate nurturing |
| **Salesforce Opportunity Updated** | Triggers when opportunities change in Salesforce | `opportunity`, `oldValue`, `newValue`, `stage` | Update project status, notify stakeholders |
| **Google Sheets Row Added** | Triggers when new rows are added to Google Sheets | `row`, `sheet`, `spreadsheet`, `values` | Process form responses, update databases |
| **Google Sheets Row Updated** | Triggers when existing rows are modified | `row`, `changes`, `sheet`, `spreadsheet` | Sync data changes, trigger workflows |
| **Google Forms Response** | Triggers when Google Forms receive new responses | `form`, `response`, `respondent`, `answers` | Process survey data, create tasks |
| **Airtable Record Created** | Triggers when new records are added to Airtable | `record`, `table`, `base`, `fields` | Sync with other systems, trigger processes |
| **Airtable Record Updated** | Triggers when Airtable records are modified | `record`, `changes`, `table`, `base` | Update external systems, maintain consistency |
| **Notion Page Created** | Triggers when new pages are created in Notion | `page`, `database`, `properties`, `content` | Index content, create summaries |
| **Notion Database Updated** | Triggers when Notion databases are modified | `database`, `changes`, `page`, `updater` | Sync with project management tools |

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