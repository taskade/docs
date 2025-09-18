# Add Task (Automation Action)

Automatically create new tasks with multiple parameters, custom fields, and positioning options inside projects as part of automation workflows, enabling dynamic task generation and intelligent workflow management.

{% hint style="success" %}
The Add Task automation action transforms static project management into dynamic, intelligent task creation systems, enabling organizations to automatically generate structured tasks with custom fields, positioning, and metadata for enhanced project workflow automation.
{% endhint %}

## Overview

The Add Task automation action enables organizations to automatically create new tasks with comprehensive parameters and custom fields inside projects as part of automation workflows. This powerful capability transforms manual task creation into intelligent, automated task generation systems that can populate projects with structured tasks, assign metadata, position tasks appropriately, and integrate seamlessly with other automation actions for comprehensive workflow management.

- **Multi-Parameter Task Creation** - Create tasks with content, positioning, and custom fields automatically
- **Custom Field Integration** - Automatically populate task metadata and categorization fields
- **Bulk Task Generation** - Add multiple tasks in a single action with AI-assisted formatting
- **Project Structure Management** - Position tasks within specific blocks and maintain project organization
- **Workflow Integration** - Seamlessly connect task creation with other automation actions
- **Dynamic Content Population** - Use variables and data from previous actions to populate task details
- **Due Date Management** - Automatically set task deadlines and scheduling information
- **Assignment Automation** - Route tasks to appropriate team members based on rules
- **Quality Assurance** - Ensure task creation meets organizational standards and requirements
- **Audit Trail** - Track automated task creation for compliance and project management

## Key Features

- **📝 Multi-Parameter Task Creation** - Create tasks with content, positioning, custom fields, and metadata automatically
- **🏷️ Custom Field Integration** - Automatically populate task categorization and tracking fields
- **📊 Bulk Task Generation** - Add multiple tasks simultaneously with intelligent formatting
- **🎯 Project Structure Management** - Position tasks within specific blocks and maintain project organization
- **🔗 Workflow Integration** - Connect task creation with other automation actions seamlessly
- **🔄 Dynamic Content Population** - Use variables and previous action data to populate task details
- **📅 Due Date Management** - Automatically set task deadlines and scheduling information
- **👥 Assignment Automation** - Route tasks to appropriate team members based on rules
- **✅ Quality Assurance** - Ensure task creation meets organizational standards
- **📋 Audit Trail Tracking** - Track automated task creation for compliance and management
- **⚡ Performance Optimized** - Efficient task creation with minimal system impact
- **🔧 Flexible Configuration** - Customize task creation parameters for different workflows
- **📈 Scalable Operations** - Handle large-scale task creation for enterprise workflows

## When to Use Add Task Automation

### Perfect Use Cases

| Scenario | Task Creation Benefits | Business Impact |
|----------|-------------------------|-----------------|
| **Issue Tracking Automation** | Convert support tickets into structured project tasks | 75% faster issue-to-task conversion, 60% better issue tracking |
| **Content Calendar Management** | Auto-generate content creation tasks from editorial calendars | 80% faster content planning, 65% better content organization |
| **Lead Management** | Create sales tasks from new leads and CRM data | 70% faster lead processing, 55% improved conversion rates |
| **Bug Tracking** | Convert bug reports into development tasks with priorities | 75% faster bug triage, 60% better development efficiency |
| **Meeting Action Items** | Auto-create tasks from meeting notes and decisions | 70% faster follow-up, 50% better action item completion |
| **Compliance Tasks** | Generate regulatory and compliance tasks automatically | 80% improved compliance tracking, 65% better regulatory adherence |
| **Project Milestones** | Create milestone tasks from project planning data | 75% better milestone tracking, 60% improved project delivery |
| **Customer Onboarding** | Generate personalized onboarding tasks for new customers | 70% faster customer setup, 55% better onboarding experience |
| **Quality Assurance** | Create testing and validation tasks from requirements | 75% faster QA processes, 60% better quality assurance |
| **Resource Allocation** | Generate task assignments based on team capacity and skills | 70% better resource utilization, 50% improved team productivity |

### Industry Applications

**Software Development & IT:**
```javascript
software_development_task_automation: {
  bug_tracking: "Convert bug reports and issue tickets into structured development tasks with priority levels, assignees, and estimated effort",
  feature_requests: "Transform feature requests from various sources into prioritized development tasks with acceptance criteria and timelines",
  code_reviews: "Generate code review tasks for pull requests with automatic assignment based on team expertise and availability",
  deployment_tasks: "Create deployment and release tasks from CI/CD pipelines with environment-specific requirements and checklists",
  security_updates: "Generate security patch and update tasks from vulnerability scans with severity-based prioritization",
  performance_optimization: "Create performance improvement tasks from monitoring alerts and analytics data",
  testing_automation: "Generate test case execution tasks from requirement changes and code modifications",
  documentation_tasks: "Create documentation update tasks when code changes affect user-facing features or APIs",
  infrastructure_tasks: "Generate infrastructure maintenance and upgrade tasks from monitoring and compliance requirements",
  support_incidents: "Convert customer support tickets into development tasks for bug fixes and feature improvements"
}
```

**Marketing & Campaign Management:**
```javascript
marketing_campaign_task_automation: {
  content_creation: "Generate content creation tasks from editorial calendars with specific requirements, deadlines, and assignee recommendations",
  campaign_execution: "Create campaign execution tasks from campaign briefs with channel-specific requirements and timelines",
  social_media_scheduling: "Generate social media posting tasks with content guidelines, optimal timing, and performance tracking requirements",
  email_marketing: "Create email campaign tasks from subscriber data with personalization requirements and A/B testing setups",
  seo_optimization: "Generate SEO optimization tasks from keyword research and content analysis with specific improvement requirements",
  lead_nurturing: "Create lead nurturing tasks from lead scoring data with personalized content and follow-up sequences",
  brand_management: "Generate brand monitoring tasks from brand guidelines and competitive analysis data",
  market_research: "Create market research tasks from industry trends and competitor analysis with specific research objectives",
  creative_development: "Generate creative asset development tasks from campaign requirements with style guide specifications",
  performance_analysis: "Create campaign analysis tasks from performance data with specific KPIs and reporting requirements"
}
```

## Setup and Configuration

### Adding the Action

{% stepper %}
{% step %}
### Access Automation Builder
Navigate to your automation workflow and click "Add Step".
{% endstep %}

{% step %}
### Select Add Task Action
Choose "Add Task" from the automation actions menu.
{% endstep %}

{% step %}
### Configure Project Target
Select the project where tasks should be created.
{% endstep %}

{% step %}
### Define Task Parameters
Specify task content, position, custom fields, and due dates.
{% endstep %}

{% step %}
### Set Custom Fields (Optional)
Configure custom field values for task categorization.
{% endstep %}

{% step %}
### Enable Bulk Task Creation (Optional)
Set up multiple task creation with AI-assisted formatting.
{% endstep %}

{% step %}
### Test Task Creation
Verify tasks are created correctly with proper parameters.
{% endstep %}

{% step %}
### Deploy Automation
Activate the workflow with automated task creation.
{% endstep %}
{% endstepper %}

### Configuration Options

| Setting | Options | Description |
|---------|---------|-------------|
| **Project** | Project ID dropdown | Target project for task creation |
| **Block** | Block ID dropdown | Specific block within project for task placement |
| **Content** | Text input, variables | Task description and content |
| **Position** | Numeric position | Task placement within project/block |
| **Custom Fields** | Field mappings | Custom field values for task metadata |
| **Due Date** | Date picker, variables | Task deadline and scheduling |
| **Bulk Creation** | Enabled/Disabled | Multiple task creation capability |
| **AI Formatting** | Enabled/Disabled | AI-assisted task content formatting |
| **Validation Rules** | Custom rules | Task creation validation requirements |
| **Error Handling** | Continue/Fail | Behavior when task creation fails |
| **Audit Logging** | Enabled/Disabled | Track automated task creation |
| **Notification Settings** | Various options | Task creation notifications |
{% endstep %}
{% endstepper %}

### Advanced Configuration Options

| Setting | Description | Use Case |
|---------|-------------|----------|
| **Project** | Target project ID | Cross-project task creation |
| **Block** | Specific section/block | Organize tasks by category |
| **Content** | Task description with formatting | Detailed task specifications |
| **Position** | Task ordering in project | Priority-based placement |
| **Fields** | Custom field key-value pairs | Structured metadata |
| **Due Date** | Deadline with timezone | Time-sensitive task creation |
| **Assignee** | Team member assignment | Automatic workload distribution |

## Detailed Automation Settings

### Core Configuration Parameters

The Add Task action provides granular control over task creation through these key parameters:

| Field | Description | Example |
|-------|-------------|---------|
| **PROJECT** | The ID of the project where you want to add the new task | `proj_abc123def456` |
| **BLOCK** | The ID of the block where you want to add the task inside a project | `block_xyz789ghi012` |
| **CONTENT** | The content of the task (supports rich text and variables) | `Review quarterly budget and prepare summary` |
| **POSITION** | Position of the new task in a project (top, bottom, or specific index) | `bottom`, `top`, or `3` |
| **FIELDS** | Custom fields that will be added to the project together with the task | `{"priority": "high", "category": "finance"}` |
| **DUE DATE** | The due date for the task (supports natural language) | `Dec 31, 2024` or `next Monday 3pm` |

### Custom Fields Integration

Custom fields allow you to instantly categorize, prioritize, and track new tasks inside projects in a way that makes sense for your team and project goals.

**Setup Process:**
1. **Enable Custom Fields** in the target project settings
2. **Define Field Schema** with appropriate field types and validation
3. **Configure Field Mapping** in the automation action
4. **Test Field Population** to ensure data integrity

**Example Custom Field Configuration:**
```json
{
  "fields": {
    "priority": {
      "type": "dropdown",
      "value": "High",
      "options": ["Low", "Medium", "High", "Critical"]
    },
    "estimated_hours": {
      "type": "number",
      "value": 4
    },
    "assigned_team": {
      "type": "text",
      "value": "Development"
    },
    "tags": {
      "type": "multi-select",
      "value": ["urgent", "backend", "api"]
    }
  }
}
```

## Bulk Task Creation

### Multiple Task Addition

The Add Task action supports adding multiple tasks in a single automation execution using properly formatted text input.

**Formatting Requirements:**
- Use clear delimiters to separate individual tasks
- Each task can have independent content, due dates, and custom fields
- Maintain consistent formatting for reliable parsing

**Example Multi-Task Input:**
```
Task 1: Review quarterly budget
Due: Dec 31, 2024
Priority: High

Task 2: Schedule team meeting
Due: next Monday
Priority: Medium

Task 3: Update project documentation
Due: end of week
Priority: Low
```

### AI-Assisted Bulk Formatting

Leverage the Ask Agent action to automatically format complex task lists:

**Example AI Prompt:**
```
Format these meeting action items as individual automation-ready tasks:
- Review budget proposal (urgent, due EOW)
- Schedule stakeholder meeting (next week)
- Update project timeline (medium priority)
- Prepare presentation slides (high priority, due Friday)

Use this format:
Task: [description]
Due: [date]
Priority: [level]
```

**AI-Generated Output:**
```
Task: Review budget proposal
Due: end of week
Priority: high

Task: Schedule stakeholder meeting
Due: next week
Priority: medium

Task: Update project timeline
Due: end of week
Priority: medium

Task: Prepare presentation slides
Due: Friday
Priority: high
```

## Task Content Formatting

### Rich Text Support

**Supported Formatting:**
```markdown
# Task Title

**Bold text** and *italic text*
- Bullet points
- Numbered lists
  - Nested items

[Links](https://example.com)
`Code snippets`

> Blockquotes for important notes
```

### Dynamic Content Variables

**Variable Substitution:**
```json
{
  "content": "Follow up with {{customer.name}} about {{project.name}} proposal due {{due_date}}",
  "assignee": "{{sales_rep.email}}",
  "due_date": "{{meeting_date + 2 days}}"
}
```

**Available Variables:**
- **Trigger Data** - `{{trigger.form.name}}`, `{{trigger.email.subject}}`
- **System Data** - `{{current.date}}`, `{{current.user}}`
- **Custom Fields** - `{{record.priority}}`, `{{record.client_name}}`
- **Calculated Values** - `{{date + 7 days}}`, `{{amount * 1.1}}`

## Bulk Task Creation

### Multiple Task Format

**Structured Input:**
```json
{
  "tasks": [
    {
      "content": "Review quarterly budget",
      "assignee": "finance@company.com",
      "due_date": "2024-01-15",
      "priority": "High"
    },
    {
      "content": "Update client presentation",
      "assignee": "marketing@company.com",
      "due_date": "2024-01-20",
      "tags": ["presentation", "client"]
    }
  ]
}
```

### AI-Assisted Task Generation

**Using AI to Create Tasks:**
```bash
"Create a task breakdown for launching the new product website"

AI Response:
- Set up project infrastructure
- Design homepage mockups  
- Develop core functionality
- Create content strategy
- Test user experience
- Launch and monitor
```

## Common Use Cases

### Customer Support Automation

**Ticket to Task Conversion:**
```
Trigger: New support ticket received
Action: Add Task
Project: Support Queue
Content: "{{ticket.subject}} - {{ticket.description}}"
Assignee: "{{support_agent}}"
Due Date: "{{priority_deadline}}"
Custom Fields: Priority, Customer, Category
Result: Automatic task creation from support tickets
```

### Sales Pipeline Management

**Lead Qualification Tasks:**
```
Trigger: New lead submitted
Action: Add Task
Project: Sales Pipeline
Content: "Qualify {{lead.name}} from {{lead.company}}"
Assignee: "{{sales_rep}}"
Due Date: "{{today + 2 days}}"
Custom Fields: Lead Score, Deal Size, Next Step
Result: Structured sales follow-up process
```

### Content Creation Workflow

**Editorial Calendar Tasks:**
```
Trigger: Content approved for publication
Action: Add Task
Project: Publishing Queue
Content: "Publish: {{article.title}} by {{author.name}}"
Assignee: "{{editor}}"
Due Date: "{{publish_date}}"
Custom Fields: Word Count, SEO Score, Target Audience
Result: Automated publishing workflow
```

### Project Management Automation

**Milestone Task Creation:**
```
Trigger: Project phase completed
Action: Add Task
Project: Next Phase Planning
Content: "Plan {{next_phase.name}} kickoff meeting"
Assignee: "{{project_manager}}"
Due Date: "{{phase_end_date + 1 week}}"
Custom Fields: Budget, Resources, Timeline
Result: Proactive project planning
```

## Advanced Task Management

### Conditional Task Creation

**Smart Task Logic:**
```javascript
if (priority === "urgent") {
  createTask({
    content: "URGENT: {{issue.title}}",
    assignee: "emergency_team",
    due_date: "today + 2 hours",
    priority: "critical"
  });
} else {
  createTask({
    content: "{{issue.title}}",
    assignee: "standard_team",
    due_date: "today + 1 week",
    priority: "normal"
  });
}
```

### Task Dependencies

**Linked Task Creation:**
```json
{
  "tasks": [
    {
      "id": "research_phase",
      "content": "Complete market research",
      "due_date": "2024-01-15"
    },
    {
      "id": "analysis_phase",
      "content": "Analyze research findings",
      "due_date": "2024-01-22",
      "depends_on": "research_phase"
    }
  ]
}
```

### Template-Based Creation

**Task Templates:**
```json
{
  "template": "bug_report",
  "variables": {
    "title": "Login page not loading",
    "severity": "high",
    "browser": "Chrome 120",
    "steps": "1. Navigate to login\n2. Enter credentials\n3. Click login"
  }
}
```

## Integration Examples

### Form Submission to Tasks

**Contact Form Processing:**
```
Typeform → Taskade Add Task
├── Form submission creates task
├── Task assigned to appropriate team
├── Due date set based on urgency
├── Custom fields populated with form data
└── Follow-up tasks created automatically
```

**Result:** Seamless lead processing and task assignment.

### Email to Task Conversion

**Email Processing Workflow:**
```
Gmail → Taskade Add Task
├── Important emails converted to tasks
├── Task content includes email details
├── Attachments automatically linked
├── Due dates extracted from email content
└── Tasks categorized by sender/priority
```

**Result:** Email overload converted to manageable tasks.

### API-Driven Task Creation

**External System Integration:**
```
CRM → Taskade Add Task
├── Customer updates create follow-up tasks
├── Deal changes trigger review tasks
├── Contract renewals create renewal tasks
├── Support tickets generate resolution tasks
└── Performance metrics create analysis tasks
```

**Result:** Unified task management across business systems.

---

## Best Practices

### Task Content Guidelines

**Effective Task Creation:**
- **Clear, Actionable Titles** - Use verbs and specific outcomes
- **Comprehensive Descriptions** - Include all necessary context
- **Structured Information** - Use consistent formatting
- **Relevant Metadata** - Include appropriate custom fields

### Automation Optimization

**Performance Considerations:**
- **Batch Processing** - Create multiple related tasks together
- **Conditional Logic** - Use smart conditions to avoid unnecessary tasks
- **Template Reuse** - Standardize common task types
- **Error Handling** - Include fallback logic for failed creations

### Team Workflow Integration

**Collaborative Task Management:**
- **Role-Based Assignment** - Assign tasks to appropriate team members
- **Priority Management** - Set appropriate urgency levels
- **Dependency Mapping** - Link related tasks together
- **Progress Tracking** - Include completion criteria

## Troubleshooting

### Common Issues

**Task Creation Failures:**
- ✅ Verify project permissions and access
- ✅ Check custom field configurations
- ✅ Validate date formats and variables
- ✅ Ensure assignee accounts exist

**Content Formatting Issues:**
- ✅ Use proper markdown syntax
- ✅ Escape special characters
- ✅ Validate variable substitutions
- ✅ Test content rendering

**Bulk Creation Problems:**
- ✅ Limit batch sizes to avoid timeouts
- ✅ Validate all task data before creation
- ✅ Include error handling for partial failures
- ✅ Monitor automation performance

### Performance Optimization

**Large-Scale Task Creation:**
- **Rate Limiting** - Respect API limits for bulk operations
- **Async Processing** - Handle large batches asynchronously
- **Progress Monitoring** - Track creation status and success rates
- **Error Recovery** - Implement retry logic for failed operations

## Monitoring and Analytics

### Task Creation Metrics

**Automation Performance:**
```json
{
  "tasks_created": 1247,
  "success_rate": "98.7%",
  "average_creation_time": "1.2 seconds",
  "most_common_templates": ["support_ticket", "sales_followup"],
  "peak_creation_times": "9-11 AM EST"
}
```

### Success Measurement

**Key Performance Indicators:**
- **Creation Success Rate** - Percentage of successful task creations
- **Processing Time** - Average time from trigger to task creation
- **User Adoption** - Team usage of automated task creation
- **Task Completion Rate** - Follow-through on created tasks

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Identify Task Creation Triggers
Determine when and why tasks should be created automatically.
{% endstep %}

{% step %}
### Design Task Templates
Create standardized task formats for common scenarios.
{% endstep %}

{% step %}
### Configure Automation Actions
Set up Add Task actions with appropriate settings.
{% endstep %}

{% step %}
### Test Task Creation
Verify tasks are created with correct content and metadata.
{% endstep %}

{% step %}
### Monitor and Optimize
Track performance and refine automation rules.
{% endstep %}

{% step %}
### Scale Implementation
Expand to additional workflows and team use cases.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: The Add Task action is the foundation of many automation workflows. Use it to convert external events (emails, forms, API calls) into structured, actionable tasks that your team can immediately work on. The key to success is creating clear, comprehensive tasks with all the context and metadata needed for efficient completion.
