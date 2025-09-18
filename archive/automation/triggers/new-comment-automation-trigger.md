# New Comment Automation Trigger

Automatically initiate workflows and responses when new comments are added to tasks, enabling real-time collaboration and feedback management across your projects.

{% hint style="success" %}
The New Comment trigger enables proactive collaboration by automatically detecting comment events and triggering appropriate follow-up actions, ensuring team communication flows seamlessly through your automation workflows.
{% endhint %}

## Overview

The New Comment automation trigger monitors projects for new comment additions and automatically initiates configured workflows when team members add comments to tasks. This trigger is essential for maintaining communication flows, managing feedback, and ensuring timely responses to collaborative input.

**Key Capabilities:**
- **Real-time Comment Detection**: Instantly identifies when comments are added to tasks
- **Content Analysis**: Access to comment content for processing and routing
- **Collaborative Workflows**: Enable automated responses to team discussions
- **Feedback Management**: Streamline comment-based feedback and review processes

**Trigger Behavior:**
- Fires immediately when a comment is added to any task
- Captures full comment content and metadata
- Supports both task comments and project comments
- Works across all comment types (text, mentions, attachments)

## How to Configure

### Basic Setup

Create automated responses to new comments with minimal configuration.

{% stepper %}
{% step %}
### Access Automation Builder
Navigate to your project and click the automation icon in the top-right corner
{% endstep %}

{% step %}
### Add New Comment Trigger
Click "Add Trigger" and select "New Comment" from the trigger menu
{% endstep %}

{% step %}
### Configure Scope (Optional)
Select specific projects or blocks to monitor for new comments
{% endstep %}

{% step %}
### Add Response Actions
Configure what should happen when new comments are added
{% endstep %}
{% endstepper %}

### Advanced Configuration

Fine-tune the trigger for specific comment management requirements.

**Configuration Options:**
- **Project Selection**: Choose specific projects to monitor or monitor all projects
- **Block Filtering**: Target specific sections within projects for more granular control
- **Comment Types**: Filter by comment type (regular comments, mentions, system comments)
- **Content Filtering**: Trigger only on comments containing specific keywords or patterns

**Trigger Settings:**
```
🏷️ Field                    🔤 Description
───────────────────────────── ──────────────────────────────────────────────
Project (Optional)          Select which Project to monitor. Leave blank to monitor all projects.
Block (Optional)            Select specific Blocks within the project. Leave blank to monitor all tasks.
Comment Type (Optional)     Filter by comment type (all, mentions, attachments, text only)
Keyword Filter (Optional)   Trigger only on comments containing specific keywords
```

## Use Cases and Applications

### Collaboration and Communication Workflows

Automate responses to team discussions and feedback.

#### Feedback Management
```
Trigger: New Comment (in "Feedback" project)
Action: Send notification to Slack feedback channel
Action: Add task to follow-up project with comment details
Action: Tag comment author for acknowledgment
```

#### Team Coordination
```
Trigger: New Comment (with @mention)
Action: Send mobile push notification to mentioned user
Action: Update task priority if urgent keywords detected
Action: Add reminder for response within 24 hours
```

#### Documentation Updates
```
Trigger: New Comment (in "Documentation" project)
Action: Append comment content to Google Doc
Action: Update version history automatically
Action: Notify documentation team of changes
```

### Development and Issue Tracking

Streamline bug reports and feature requests.

#### Bug Tracking
```
Trigger: New Comment (in "Bug Reports" project)
Action: Create GitHub issue automatically
Action: Assign to appropriate developer based on keywords
Action: Set priority based on severity indicators
Action: Send confirmation email to reporter
```

#### Feature Requests
```
Trigger: New Comment (in "Feature Requests" project)
Action: Create Jira ticket in product backlog
Action: Add to product roadmap automatically
Action: Notify product manager of new request
Action: Start voting period for community features
```

#### Code Review Comments
```
Trigger: New Comment (in "Code Review" project)
Action: Update pull request with comment
Action: Notify original author of feedback
Action: Schedule follow-up review meeting if needed
Action: Update code quality metrics
```

### Customer Service and Support

Automate customer interaction workflows.

#### Customer Feedback Processing
```
Trigger: New Comment (in "Customer Feedback" project)
Action: Categorize feedback using AI
Action: Route to appropriate department
Action: Send automated response to customer
Action: Update customer satisfaction metrics
```

#### Support Ticket Management
```
Trigger: New Comment (in "Support Tickets" project)
Action: Update Zendesk ticket automatically
Action: Notify support agent of new information
Action: Escalate if urgent keywords detected
Action: Update ticket status and SLA tracking
```

#### Client Communication
```
Trigger: New Comment (in "Client Projects" project)
Action: Send email summary to client contact
Action: Update project timeline with discussion points
Action: Create action items from client requests
Action: Schedule follow-up meeting if needed
```

## Integration with Automation Actions

### Notification and Communication Actions

Keep teams and stakeholders informed about new discussions.

**Team Notifications:**
- Send instant Slack or Microsoft Teams notifications
- Email digests of recent project comments
- Mobile push notifications for urgent mentions
- SMS alerts for critical feedback

**Stakeholder Communications:**
- Client update emails with discussion summaries
- Partner notifications for collaborative projects
- Management reports on team communication patterns
- Customer service response acknowledgments

### Task and Project Management Actions

Automate task updates based on comment content.

**Task Updates:**
- Update task status based on comment keywords
- Add subtasks from action items mentioned in comments
- Reassign tasks based on comment content
- Update task descriptions with additional context

**Project Management:**
- Update project progress based on milestone discussions
- Create new tasks from action items in comments
- Update project documentation automatically
- Generate status reports from comment patterns

### AI and Content Processing Actions

Leverage AI to process and respond to comment content.

**Content Analysis:**
- Use AI to categorize and prioritize comments
- Extract action items and deadlines from discussions
- Summarize long comment threads automatically
- Detect sentiment and urgency in feedback

**Automated Responses:**
- Generate contextual responses using AI agents
- Create documentation from discussion threads
- Translate comments for international teams
- Generate meeting notes from comment discussions

## Best Practices

### Comment Monitoring Strategy

Set up effective comment triggers that enhance rather than disrupt collaboration.

**Scope Management:**
- **Targeted Monitoring**: Focus on high-collaboration projects and critical feedback channels
- **Keyword Filtering**: Use specific keywords to trigger only relevant automation
- **Comment Types**: Differentiate between regular comments, mentions, and system notifications
- **Project Segmentation**: Monitor different project types with appropriate response workflows

**Notification Balance:**
- **Avoid Spam**: Use intelligent filtering to prevent notification overload
- **Context Awareness**: Include relevant project context in notifications
- **Frequency Control**: Implement cooldown periods for busy projects
- **Personalization**: Tailor notifications based on user preferences and roles

### Workflow Integration

Design comment automation that complements existing communication processes.

**Process Integration:**
- **Existing Workflows**: Ensure triggers enhance rather than conflict with current processes
- **Approval Chains**: Integrate with existing review and approval processes
- **Escalation Procedures**: Connect with established escalation protocols
- **Documentation Standards**: Maintain consistent record-keeping practices

**Team Communication:**
- **Clear Expectations**: Communicate automation rules to team members
- **Training**: Educate teams on how to write effective trigger comments
- **Feedback Loops**: Allow teams to provide feedback on automation effectiveness
- **Continuous Improvement**: Regularly review and optimize comment workflows

## Troubleshooting

### Common Comment Trigger Issues

Resolve frequent problems with comment automation configurations.

**Trigger Not Firing:**
- **Scope Settings**: Verify trigger is monitoring intended projects/blocks
- **Comment Types**: Check if trigger filters match the comment type
- **Keyword Matching**: Ensure keyword filters are correctly configured
- **Permission Issues**: Confirm automation has access to monitored content

**False Positives:**
- **Overly Broad Filters**: Refine keyword filters to reduce unwanted triggers
- **Comment Context**: Consider comment context when setting up triggers
- **System Comments**: Exclude system-generated comments from triggers
- **Test Scenarios**: Test triggers with various comment types and content

**Performance Issues:**
- **High Volume**: Implement rate limiting for projects with many comments
- **Processing Delays**: Monitor system performance during peak comment activity
- **Action Conflicts**: Resolve conflicts between multiple comment-triggered automations
- **Resource Usage**: Track automation resource consumption for optimization

### Advanced Troubleshooting

Address complex issues with comment automation and integration.

**Integration Challenges:**
- **External System Sync**: Verify integration with external communication tools
- **API Limitations**: Check API rate limits and authentication issues
- **Data Mapping**: Ensure proper mapping of comment data to external systems
- **Error Handling**: Implement robust error handling for failed integrations

**Complex Workflows:**
- **Multi-Step Logic**: Handle complex conditional logic in comment responses
- **Context Preservation**: Maintain conversation context across multiple comments
- **User Attribution**: Correctly attribute comments to the right users
- **Time-Based Logic**: Implement time-sensitive responses to comments

**Content Processing:**
- **Text Analysis**: Improve accuracy of keyword detection and content analysis
- **Multilingual Support**: Handle comments in multiple languages
- **Rich Content**: Process comments with attachments, mentions, and formatting
- **Spam Detection**: Filter out spam or irrelevant comments

## Examples and Templates

### Basic Comment Response
```
Trigger: New Comment
→ Action: Send Slack notification
→ Action: Add reaction emoji to acknowledge
```

### Advanced Feedback Processing
```
Trigger: New Comment (in "Feedback" project)
→ Action: Analyze sentiment with AI
→ Action: Categorize by topic automatically
→ Action: Route to appropriate team member
→ Action: Send personalized response
→ Action: Update feedback dashboard
```

### Development Workflow Integration
```
Trigger: New Comment (with "@review" mention)
→ Action: Create pull request review task
→ Action: Notify code review team
→ Action: Update development board
→ Action: Set review deadline
```

### Customer Support Automation
```
Trigger: New Comment (in "Support" project)
→ Action: Update ticket status
→ Action: Send acknowledgment email
→ Action: Escalate if urgent keywords detected
→ Action: Update knowledge base if solution provided
```

## Related Features

### Complementary Automation Triggers

Work with other triggers for comprehensive collaboration automation.

- **[Task Assigned Trigger](task-assigned-automation-trigger.md)** - Monitor task assignments
- **[Task Completed Trigger](task-completed-automation-trigger.md)** - Track task completion
- **[Task Due Trigger](task-due-automation-trigger.md)** - Monitor deadlines
- **[New Due Date Trigger](new-due-date-automation-trigger.md)** - Track due date changes

### Supporting Automation Actions

Combine with actions for complete comment management workflows.

- **[Send Channel Message Action](send-channel-message-action.md)** - Communicate comment events
- **[Add Task Action](add-task-automation-action.md)** - Create follow-up tasks from comments
- **[Assign Task Action](assign-task-automation-action.md)** - Assign tasks based on comments
- **[Ask Agent Action](ask-agent-automation-action.md)** - Process comment content with AI

---

## **New Comment Trigger Summary**

The New Comment automation trigger serves as the bridge between team communication and automated workflows by automatically detecting when comments are added to tasks and initiating appropriate follow-up actions. This ensures collaborative input is captured, processed, and acted upon efficiently.

**Core Functionality:**
- **Real-time Detection**: Automatically identifies new comments as they're added
- **Content Access**: Full access to comment text, metadata, and context
- **Flexible Filtering**: Target specific projects, comment types, and content patterns
- **Workflow Integration**: Connect with any Taskade automation action
- **Collaboration Enhancement**: Transform discussions into actionable workflows

**Business Impact:**
- **Enhanced Communication**: Keep teams informed and engaged with automated notifications
- **Faster Response Times**: Ensure timely responses to feedback and requests
- **Improved Coordination**: Streamline collaborative workflows and decision-making
- **Better Documentation**: Automatically capture and organize team discussions

**Implementation Benefits:**
- **Comprehensive Coverage**: Works with all comment types and formats
- **Scalable Automation**: Handle complex comment processing across teams
- **Context Preservation**: Maintain full discussion context in automated responses
- **Audit Trail**: Complete records of comment-triggered actions and decisions

The New Comment trigger transforms team collaboration from manual follow-up processes into automated, efficient workflows that ensure no important discussion gets overlooked and every comment contributes to project success.

**Automate comment management and transform team collaboration into efficient, actionable workflows!** 💬⚡📝

## Related Resources

- **[Automation Overview](overview.md)** - Complete automation system guide
- **[Task Completed Trigger](task-completed-automation-trigger.md)** - Monitor task completion
- **[Send Channel Message Action](send-channel-message-action.md)** - Communicate events
- **[Ask Agent Action](ask-agent-automation-action.md)** - Process content with AI
