# Task Completed Automation Trigger

Automatically initiate follow-up workflows and notifications when tasks are marked as complete, ensuring seamless project progression and team coordination.

{% hint style="success" %}
The Task Completed trigger enables proactive project management by automatically detecting task completion events and triggering appropriate follow-up actions, ensuring nothing gets overlooked when milestones are achieved.
{% endhint %}

## Overview

The Task Completed automation trigger monitors projects for task completion events and automatically initiates configured workflows when team members mark tasks as done. This trigger is fundamental for maintaining project momentum, ensuring proper handoffs, and automating the coordination that occurs when work items are finished.

**Key Capabilities:**
- **Real-time Completion Detection**: Instantly identifies when tasks are marked as complete
- **Project and Block Filtering**: Target specific projects or sections for monitoring
- **Workflow Continuation**: Automate next steps, notifications, and follow-up tasks
- **Quality Assurance**: Ensure completed work meets standards and triggers appropriate reviews

**Trigger Behavior:**
- Fires immediately when a task completion occurs
- Works across all completion methods (checkbox clicks, bulk operations, API calls)
- Supports all task types and completion states
- Maintains completion history and audit trails

## How to Configure

### Basic Setup

Create automated responses to task completions with minimal configuration.

{% stepper %}
{% step %}
### Access Automation Builder
Navigate to your project and click the automation icon in the top-right corner
{% endstep %}

{% step %}
### Add Task Completed Trigger
Click "Add Trigger" and select "Task Completed" from the trigger menu
{% endstep %}

{% step %}
### Configure Scope (Optional)
Select specific projects or blocks to monitor, or leave blank for all projects
{% endstep %}

{% step %}
### Add Response Actions
Configure what should happen when tasks are completed (notifications, next tasks, etc.)
{% endstep %}
{% endstepper %}

### Advanced Configuration

Fine-tune the trigger for specific workflow requirements.

**Configuration Options:**
- **Project Selection**: Choose specific projects to monitor or monitor all projects
- **Block Filtering**: Target specific sections within projects for more granular control
- **Completion Types**: Monitor all completions or filter by specific conditions
- **Frequency Controls**: Set cooldown periods to prevent trigger spam

**Trigger Settings:**
```
🏷️ Field                    🔤 Description
───────────────────────────── ──────────────────────────────────────────────
Project (Optional)          Select which Project to monitor. Leave blank to monitor all projects.
Block (Optional)            Select specific Blocks within the project. Leave blank to monitor all tasks.
Completion Filter (Optional) Filter by completion method or task characteristics
Cooldown Period (Optional)   Prevent rapid-fire triggers with timing controls
```

## Use Cases and Applications

### Project Management Workflows

Maintain project momentum and ensure proper progression through automated follow-ups.

#### Next Step Assignment
```
Trigger: Task Completed
Action: Create and assign the next logical task in the workflow
Action: Update project progress indicators
Action: Notify stakeholders of milestone achievement
```

#### Quality Assurance Process
```
Trigger: Task Completed
Action: Add quality review checklist for completed work
Action: Assign review task to appropriate team member
Action: Schedule follow-up meeting if needed
```

#### Progress Reporting
```
Trigger: Task Completed
Action: Update project dashboards and progress reports
Action: Generate completion summaries for stakeholders
Action: Archive completed task data for reporting
```

### Team Coordination Automation

Keep teams informed and coordinated when work is completed.

#### Status Notifications
```
Trigger: Task Completed
Action: Send completion notification to project team
Action: Update task status in connected project management tools
Action: Log completion in team activity feeds
```

#### Workload Balancing
```
Trigger: Task Completed
Action: Update team member's workload metrics
Action: Suggest next available tasks based on capacity
Action: Redistribute work if team member becomes overloaded
```

#### Client Communications
```
Trigger: Task Completed
Action: Send client update notifications for completed deliverables
Action: Generate completion certificates or documentation
Action: Schedule client review meetings for major milestones
```

### Administrative and Reporting Workflows

Maintain accurate records and generate necessary documentation.

#### Task Logging and Analytics
```
Trigger: Task Completed
Action: Log task completion data in analytics systems
Action: Update time tracking and productivity metrics
Action: Generate completion reports for management
```

#### Documentation Generation
```
Trigger: Task Completed
Action: Create completion documentation automatically
Action: Generate work summaries and next steps
Action: Archive task details for future reference
```

#### Compliance and Audit Trails
```
Trigger: Task Completed
Action: Record completion in compliance tracking systems
Action: Generate audit trails for regulatory requirements
Action: Update certification and quality assurance records
```

## Integration with Automation Actions

### Task and Project Management Actions

Automate task creation and project organization following completions.

**Task Creation Actions:**
- Generate follow-up tasks based on completion patterns
- Create quality assurance and review tasks automatically
- Set up recurring tasks for ongoing maintenance work
- Assign next steps to appropriate team members

**Project Organization Actions:**
- Move completed tasks to archive sections
- Update project status and completion percentages
- Reorganize remaining tasks based on new priorities
- Create new project phases or milestones

### Communication and Notification Actions

Keep stakeholders informed of progress and completions.

**Team Notifications:**
- Send completion alerts to project teams via Slack or Teams
- Post updates in project communication channels
- Email stakeholders with completion summaries
- Update shared dashboards and progress boards

**External Communications:**
- Notify clients of completed deliverables
- Send status updates to external partners
- Generate completion reports for management
- Update customer relationship management systems

### Analytics and Reporting Actions

Track performance and generate insights from task completions.

**Data Collection Actions:**
- Log completion metrics in analytics platforms
- Update productivity dashboards and KPIs
- Record time-to-completion and efficiency metrics
- Generate performance reports for team members

**Insight Generation:**
- Identify completion patterns and bottlenecks
- Generate recommendations for process improvements
- Create predictive analytics for future planning
- Produce insights for continuous improvement initiatives

## Best Practices

### Trigger Configuration

Optimize trigger setup for reliable and efficient automation.

**Scope Definition:**
- **Target Specific Projects**: Avoid monitoring all projects unnecessarily
- **Use Block Filtering**: Focus on relevant sections for better performance
- **Consider Completion Patterns**: Align triggers with your team's workflow

**Performance Optimization:**
- **Avoid Overlapping Triggers**: Don't create redundant monitoring
- **Use Appropriate Filters**: Reduce false positives with targeted scoping
- **Monitor Trigger Frequency**: Adjust based on actual completion patterns

### Workflow Design

Create effective automated responses to task completions.

**Response Timing:**
- **Immediate Actions**: Handle urgent notifications and status updates
- **Follow-up Tasks**: Allow time for proper task setup and assignment
- **Reporting Actions**: Schedule periodic summary generation

**Action Sequencing:**
- **Priority Order**: Critical updates first, administrative tasks second
- **Dependency Management**: Ensure actions don't conflict or duplicate
- **Error Handling**: Plan for failed automation steps

### Quality Assurance

Ensure completed tasks meet standards and trigger appropriate reviews.

**Review Integration:**
- **Automated Quality Checks**: Trigger review processes for critical tasks
- **Standards Enforcement**: Ensure completion meets predefined criteria
- **Feedback Loops**: Generate improvement suggestions based on patterns

**Documentation Standards:**
- **Consistent Reporting**: Standardize completion documentation
- **Knowledge Capture**: Preserve lessons learned from completed tasks
- **Process Improvement**: Use completion data to refine workflows

## Troubleshooting

### Common Issues

Resolve frequent problems with Task Completed trigger configurations.

**Trigger Not Firing:**
- **Check Completion Method**: Ensure tasks are completed through supported methods
- **Verify Project Selection**: Confirm target projects are properly selected
- **Review Permissions**: Confirm automation has access to monitored projects

**False Positives:**
- **Refine Scope**: Use block filtering to reduce irrelevant triggers
- **Completion Filters**: Target specific task types or completion conditions
- **Cooldown Settings**: Prevent trigger spam with appropriate timing

**Performance Issues:**
- **Scope Reduction**: Monitor fewer projects to improve response times
- **Action Optimization**: Simplify complex automation chains
- **Trigger Consolidation**: Combine similar triggers when possible

### Advanced Troubleshooting

Address complex automation and integration challenges.

**Integration Problems:**
- **API Connectivity**: Verify external service connections are stable
- **Authentication**: Check API keys and access tokens are current
- **Rate Limits**: Monitor for service-imposed usage limits

**Complex Workflows:**
- **Logic Testing**: Use test completions to verify automation logic
- **Error Handling**: Implement fallback actions for failed steps
- **Monitoring**: Track automation success rates and identify patterns

**Data Consistency:**
- **Completion Verification**: Ensure tasks are truly complete before triggering
- **Duplicate Prevention**: Avoid triggering multiple times for the same completion
- **State Management**: Maintain accurate task state across all systems

## Examples and Templates

### Basic Completion Notification
```
Trigger: Task Completed
→ Action: Send Slack Message
→ Action: Update Project Dashboard
```

### Comprehensive Project Management Workflow
```
Trigger: Task Completed
→ Action: Create Next Task
→ Action: Assign to Team Member
→ Action: Send Notification
→ Action: Update Progress Metrics
→ Action: Generate Completion Report
```

### Quality Assurance Process
```
Trigger: Task Completed
→ Action: Add Review Checklist
→ Action: Assign Quality Reviewer
→ Action: Set Review Deadline
→ Action: Send Review Notification
→ Action: Update Quality Dashboard
```

## Related Features

### Complementary Automation Triggers

Work with other triggers for comprehensive task lifecycle automation.

- **[Task Assigned Trigger](task-assigned-automation-trigger.md)** - Monitor task assignment events
- **[Task Due Trigger](task-due-automation-trigger.md)** - Handle upcoming deadlines
- **[Task Added Trigger](task-added-automation-trigger.md)** - Track new task creation
- **[Project Completed Trigger](project-completed-automation-trigger.md)** - Monitor project completion

### Supporting Automation Actions

Combine with actions for complete task completion workflows.

- **[Add Task Action](add-task-automation-action.md)** - Create follow-up tasks automatically
- **[Assign Task Action](assign-task-automation-action.md)** - Assign next steps to team members
- **[Send Channel Message Action](send-channel-message-action.md)** - Communicate completion events
- **[Move Task Action](move-task-automation-action.md)** - Organize completed tasks

---

## **Task Completed Trigger Summary**

The Task Completed automation trigger serves as the cornerstone of proactive project management by automatically detecting task completion events and initiating appropriate follow-up actions. This ensures seamless workflow progression, proper quality assurance, and effective team coordination when work items are finished.

**Core Functionality:**
- **Real-time Detection**: Instantly identifies task completions across projects
- **Flexible Scoping**: Target specific projects, blocks, or completion types
- **Workflow Integration**: Connect with any Taskade automation action
- **Quality Assurance**: Ensure completed work meets standards and triggers reviews

**Business Impact:**
- **Improved Momentum**: Maintain project velocity through automated next steps
- **Enhanced Quality**: Ensure proper review and validation of completed work
- **Better Coordination**: Keep teams informed and aligned on progress
- **Streamlined Processes**: Reduce manual follow-up and coordination overhead

**Implementation Benefits:**
- **Immediate Response**: Triggers activate instantly upon task completion
- **Comprehensive Coverage**: Works with all completion methods and task types
- **Scalable Automation**: Handle complex workflows across large teams
- **Audit Trail**: Maintain complete history of automated responses

The Task Completed trigger transforms task completion from a simple checkbox action into a comprehensive coordination event that ensures proper follow-up, quality assurance, and workflow continuation. By automating the critical post-completion process, teams can focus on execution rather than administration, significantly improving productivity and project success rates.

**Automate task completion workflows and ensure seamless project progression!** ✅⚡📈

## Related Resources

- **[Automation Overview](overview.md)** - Complete automation system guide
- **[Task Assigned Trigger](task-assigned-automation-trigger.md)** - Monitor task assignment
- **[Add Task Action](add-task-automation-action.md)** - Create follow-up tasks
- **[Send Channel Message Action](send-channel-message-action.md)** - Communicate events
