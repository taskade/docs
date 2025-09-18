# Task Manual Trigger (Automation Trigger)

Manually trigger automation flows from within projects, giving users on-demand control over complex workflows and processes.

{% hint style="success" %}
The Task Manual Trigger provides flexible, user-initiated automation control, perfect for processes that require human judgment or timing decisions.
{% endhint %}

## Overview

The Task Manual Trigger allows users to manually initiate automation sequences from within Taskade projects. Unlike automatic triggers that respond to events, this trigger puts control in users' hands, enabling them to execute complex workflows on demand.

**Key Features:**
- **On-demand execution** of automation sequences
- **Context-aware triggering** from specific tasks or projects
- **User-controlled timing** for optimal process execution
- **Permission-based access** for appropriate user roles

## How It Works

### Trigger Activation
- Appears as a button or menu option in project tasks
- Executes immediately when activated by authorized users
- Provides full context of the triggering task and project
- Supports custom button text and styling

### Available Context Data
- **Task Information**: Title, description, assignees, due dates
- **Project Context**: Project name, workspace, custom fields
- **User Information**: Who triggered the automation, their role
- **Current State**: Task status, completion percentage, metadata

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
Choose **Task Manual Trigger** from the trigger dropdown.
{% endstep %}

{% step %}
### Configure Options
Set button text, permissions, and trigger scope.
{% endstep %}
{% endstepper %}

### Configuration Options

**Button Customization:**
- **Button Text**: Customize trigger button label
- **Button Color**: Choose from predefined colors
- **Icon**: Select representative icon

**Access Control:**
- **User Roles**: Specify which roles can trigger
- **Workspace Members**: Limit to specific team members
- **Project Owners**: Restrict to project creators

**Scope Settings:**
- **Project-wide**: Available on all tasks
- **Specific Tasks**: Only on designated tasks
- **Task Filters**: Based on properties or custom fields

## Use Cases

### Client Onboarding
```
Manual Trigger: "Start Client Onboarding"
→ Send welcome email series
→ Create client project structure
→ Assign team responsibilities
→ Update CRM system
```

### Issue Escalation
```
Manual Trigger: "Escalate Critical Issue"
→ Notify engineering team immediately
→ Create high-priority tracking task
→ Update stakeholder communication
→ Generate incident report
```

### Content Publishing
```
Manual Trigger: "Publish Content"
→ Schedule social media posts
→ Notify marketing team
→ Update content calendar
→ Send distribution notifications
```

### Invoice Processing
```
Manual Trigger: "Generate Invoice"
→ Create professional invoice document
→ Send to client via email
→ Update accounting system
→ Set up payment tracking
```

### Employee Management
```
Manual Trigger: "Process Offboarding"
→ Send exit checklist
→ Reassign active tasks
→ Revoke system access
→ Update HR records
```

## Advanced Features

### Conditional Execution
- **Task-based conditions**: Different actions based on task properties
- **User-based logic**: Vary behavior by user role or department
- **State-dependent actions**: Respond to current project or task status

### Integration Capabilities
- **External systems**: Connect with CRM, HR, and project management tools
- **Communication platforms**: Integrate with Slack, Teams, and email systems
- **Business applications**: Sync with accounting, ERP, and custom systems

### Approval Workflows
- **Multi-step approvals**: Route through multiple decision points
- **Conditional branching**: Different paths based on approval outcomes
- **Escalation procedures**: Automatic routing for delayed responses

## Best Practices

### Trigger Design
- Use clear, action-oriented button text
- Position triggers logically in user workflows
- Provide visual cues for available actions

### Permission Management
- Implement role-based access control
- Regularly audit trigger usage and permissions
- Balance accessibility with security requirements

### User Training
- Document when and how to use manual triggers
- Provide examples and decision criteria
- Offer feedback mechanisms for improvements

## Troubleshooting

### Common Issues
**Trigger not visible:**
- Check user permissions and role assignments
- Verify trigger scope and task eligibility
- Confirm automation is enabled and active

**Actions failing:**
- Review integration connections and credentials
- Check data availability in trigger context
- Validate action configurations and parameters

**Performance problems:**
- Monitor automation execution times
- Optimize complex action sequences
- Implement rate limiting for high-frequency triggers

### Debugging Tools
- **Execution logs**: Track trigger activations and outcomes
- **Test mode**: Simulate executions without real actions
- **Performance monitoring**: Analyze usage patterns and bottlenecks

## Security Considerations

### Access Control
- Implement appropriate permission levels
- Use audit trails for compliance
- Regularly review and update access policies

### Data Protection
- Sanitize sensitive information in actions
- Ensure encrypted data transmission
- Comply with relevant privacy regulations

## Conclusion

The Task Manual Trigger empowers users to initiate complex automation workflows on demand, providing flexibility for processes that require human judgment, specific timing, or conditional execution. It's perfect for critical business processes that need controlled, user-initiated automation.

## Related Features

- [Project Completed Trigger](project-completed-trigger.md)
- [Automation Actions Overview](../automation-actions-overview.md)
- [Webhooks Trigger](webhooks-trigger.md)

---

*Execute automation workflows on your terms with manual triggers.*