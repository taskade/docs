# Project Completed (Automation Trigger)

Automatically execute actions when a project is marked as completed, enabling seamless project handoffs, notifications, and workflow transitions.

{% hint style="success" %}
The Project Completed trigger streamlines project lifecycle management by automating follow-up actions, notifications, and organizational tasks when work wraps up.
{% endhint %}

## Overview

The Project Completed trigger fires whenever a project is marked as completed in Taskade. This powerful automation trigger enables you to:

- **Send completion notifications** to stakeholders and team members
- **Generate project summaries** and reports automatically
- **Create follow-up projects** for the next phase of work
- **Archive completed work** to maintain workspace organization
- **Update external systems** with project status changes
- **Trigger client communications** and handoffs

{% hint style="info" %}
This trigger activates when a project is manually marked complete, not when all tasks within it are finished. It's perfect for milestone-based or phase-based project management.
{% endhint %}

## How It Works

### Trigger Conditions
**Activates when:**
- A project is marked as completed via the project menu
- A project is completed through bulk operations
- A project completion status is set programmatically

**Does NOT activate when:**
- Individual tasks within a project are completed
- Projects are archived (different from completed)
- Projects are deleted

### Available Data
- **Project Details**: Name, description, completion date, owner
- **Project Metadata**: Custom fields, tags, workspace location
- **Completion Information**: Who marked it complete, when, any notes

## Setup Guide

### Basic Configuration

{% stepper %}
{% step %}
### Access Automation
Navigate to the Automation tab in your workspace or project.
{% endstep %}

{% step %}
### Create Automation
Click **Create Automation** or **Add Rule**.
{% endstep %}

{% step %}
### Select Trigger
Choose **Project Completed** from the trigger dropdown.
{% endstep %}

{% step %}
### Set Scope
Select which projects this automation should monitor.
{% endstep %}
{% endstepper %}

### Advanced Options

**Filtering and conditions:**
- **Workspace**: Limit to specific workspaces or folders
- **Project Tags**: Trigger only for projects with specific tags
- **Project Owner**: Filter by project creator or owner
- **Custom Fields**: Use project custom fields as conditions

## Use Cases

### Project Summary & Reporting
```
Trigger: Project Completed
→ Generate with AI: Create project summary
→ Send Email: Distribute to stakeholders
→ Insert Row: Add to tracking spreadsheet
```

### Follow-Up Project Creation
```
Trigger: Project Completed
→ Ask Agent: Generate follow-up tasks
→ Create Project: New project with next steps
→ Assign Task: Assign to team members
```

### Workspace Organization
```
Trigger: Project Completed
→ Move Project: To "Completed Projects" folder
→ Update Custom Field: Mark as archived
→ Send Notification: Alert team
```

### Client Communication
```
Trigger: Project Completed
→ Generate with AI: Client summary
→ Send Email via Gmail: Professional notification
→ Update HubSpot: Mark deal completed
```

### Cross-Functional Notifications
```
Trigger: Project Completed
→ Send Slack Message: Notify relevant teams
→ Create Calendar Event: Schedule review meeting
→ Update External System: Sync project status
```

## Best Practices

### Configuration Tips
- Use specific workspace scopes rather than global monitoring
- Apply project tags for better filtering and control
- Test automations with sample projects before deployment

### Action Design
- Prioritize immediate notifications for time-sensitive communications
- Use delays for non-urgent follow-up actions
- Include clear context and next steps in notifications

### Performance Optimization
- Avoid overly broad triggers that fire too frequently
- Monitor automation execution logs regularly
- Use conditional logic to handle different project types

## Troubleshooting

### Common Issues
**Trigger not firing:**
- Verify project is marked "completed" (not archived)
- Check trigger scope and filter settings
- Confirm automation is enabled

**Actions failing:**
- Review action configurations and permissions
- Check integration connections
- Verify data availability in trigger context

### Debugging
- Use execution logs to track automation performance
- Test automations manually before full deployment
- Monitor for conflicting automation rules

## Integration Examples

### Project Management Tools
- **Monday.com**: Update board status and timelines
- **Asana**: Create completion tasks and update portfolios
- **Jira**: Close related tickets and update workflows

### Communication Platforms
- **Slack**: Send channel notifications with project summaries
- **Microsoft Teams**: Post completion updates and tag teams
- **Email**: Send professional completion notifications

### Business Systems
- **CRM**: Update Salesforce opportunities and deals
- **ERP**: Update project status and resource allocation
- **Google Workspace**: Sync completion data and create reports

## Conclusion

The Project Completed trigger automates project closure processes, ensuring consistent follow-up actions, stakeholder communication, and workspace organization. Use it to create seamless project transitions and maintain professional project management standards.

## Related Features

- [Task Completed Trigger](task-completed-trigger.md)
- [Automation Actions Overview](automation-actions-overview.md)
- [Project Lifecycle Management](../project-management/project-lifecycle-management.md)

---

*Automate project completion workflows with the Project Completed trigger.*