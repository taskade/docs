# Agent Public Chat Ended Automation Trigger

Automatically initiate workflows and follow-up processes when public AI agent conversations conclude, enabling comprehensive conversation analysis and post-interaction automation.

{% hint style="success" %}
The Agent Public Chat Ended trigger enables intelligent follow-up automation by automatically detecting when public agent conversations finish, providing access to complete conversation data for analysis, CRM updates, and service optimization.
{% endhint %}

## Overview

The Agent Public Chat Ended automation trigger monitors public AI agent interactions and automatically initiates configured workflows when conversations conclude after a period of inactivity. This trigger is essential for post-conversation processing, customer relationship management, and continuous improvement of AI agent performance.

**Key Capabilities:**
- **Conversation Completion Detection**: Automatically identifies when public chats end after 5 minutes of inactivity
- **Full Conversation Access**: Provides complete conversation transcript and metadata
- **Post-Interaction Automation**: Enables automated follow-up processes and data processing
- **Customer Service Enhancement**: Supports CRM updates, feedback collection, and service quality monitoring

**Trigger Behavior:**
- Fires when a public agent conversation becomes inactive for 5 minutes
- Captures entire conversation history and metadata
- Works with embedded and shared AI agents
- Supports both successful and abandoned conversations

## How to Configure

### Basic Setup

Create automated follow-up processes for ended agent conversations with minimal configuration.

{% stepper %}
{% step %}
### Access Automation Builder
Navigate to your project and click the automation icon in the top-right corner
{% endstep %}

{% step %}
### Add Agent Public Chat Ended Trigger
Click "Add Trigger" and select "Agent Public Chat Ended" from the trigger menu
{% endstep %}

{% step %}
### Configure Agent Scope (Optional)
Select specific AI agents to monitor or monitor all public agents
{% endstep %}

{% step %}
### Add Follow-up Actions
Configure what should happen when conversations end (CRM updates, analysis, notifications)
{% endstep %}
{% endstepper %}

### Advanced Configuration

Fine-tune the trigger for specific agent conversation management requirements.

**Configuration Options:**
- **Agent Selection**: Choose specific AI agents to monitor or monitor all public agents
- **Inactivity Timeout**: Configure the inactivity period before considering a chat ended
- **Conversation Type**: Filter by conversation outcome (successful, abandoned, escalated)
- **Content Filtering**: Trigger only on conversations containing specific keywords or topics

**Trigger Settings:**
```
🏷️ Field                    🔤 Description
───────────────────────────── ──────────────────────────────────────────────
Agent (Optional)            Select specific AI agents to monitor. Leave blank to monitor all public agents.
Timeout Period             Time of inactivity before chat is considered ended (default: 5 minutes).
Conversation Type          Filter by conversation outcome (all, successful, abandoned, escalated).
Keyword Filter            Trigger only on conversations containing specific keywords.
```

## Use Cases and Applications

### Customer Service and Support Automation

Streamline post-conversation processes to enhance customer experience and service quality.

#### CRM Integration and Updates
```
Trigger: Agent Public Chat Ended
Action: Extract customer information from conversation
Action: Update CRM with conversation summary and outcomes
Action: Create customer profile or update existing records
Action: Flag high-value or at-risk customers for follow-up
```

#### Automated Support Ticket Creation
```
Trigger: Agent Public Chat Ended (unsolved conversations)
Action: Generate support ticket from conversation transcript
Action: Categorize issue based on conversation content
Action: Assign appropriate support agent automatically
Action: Send confirmation email to customer with ticket details
```

#### Customer Feedback Collection
```
Trigger: Agent Public Chat Ended
Action: Send automated satisfaction survey via email
Action: Analyze conversation sentiment and key topics
Action: Update customer satisfaction metrics
Action: Identify common issues for process improvement
```

### Sales and Lead Management

Convert agent interactions into sales opportunities and lead nurturing workflows.

#### Lead Qualification and Routing
```
Trigger: Agent Public Chat Ended (sales inquiries)
Action: Score lead based on conversation content and intent
Action: Route qualified leads to appropriate sales team
Action: Create opportunity in CRM with conversation insights
Action: Schedule follow-up call or email sequence
```

#### Product Interest Tracking
```
Trigger: Agent Public Chat Ended (product questions)
Action: Log product interests and feature requests
Action: Update prospect profile with interest data
Action: Add to targeted email marketing campaigns
Action: Notify product team of feature requests
```

#### Demo Request Processing
```
Trigger: Agent Public Chat Ended (demo requests)
Action: Schedule demo call automatically
Action: Send confirmation and preparation materials
Action: Update lead status in sales pipeline
Action: Notify sales team of qualified demo requests
```

### Service Quality and Analytics

Monitor and improve AI agent performance through automated analysis.

#### Conversation Quality Analysis
```
Trigger: Agent Public Chat Ended
Action: Analyze conversation for quality metrics (resolution time, satisfaction indicators)
Action: Identify successful vs. unsuccessful interactions
Action: Generate agent performance reports
Action: Flag conversations needing human review
```

#### Knowledge Base Enhancement
```
Trigger: Agent Public Chat Ended (unanswered questions)
Action: Extract unanswered questions from conversations
Action: Add to knowledge base improvement backlog
Action: Notify content team of knowledge gaps
Action: Update agent training data
```

#### Trend Analysis and Reporting
```
Trigger: Agent Public Chat Ended (daily summary)
Action: Aggregate conversation data and trends
Action: Generate daily/weekly performance reports
Action: Identify peak usage times and popular topics
Action: Update service level dashboards
```

## Integration with Automation Actions

### Data Processing and Analysis Actions

Leverage AI and data processing to extract insights from conversations.

**Content Analysis:**
- Use AI to summarize conversation outcomes and key insights
- Extract customer information, preferences, and requirements
- Categorize conversations by topic, sentiment, and urgency
- Identify action items and follow-up requirements

**Data Enrichment:**
- Update customer profiles with conversation insights
- Append conversation summaries to CRM records
- Tag customers based on conversation content and behavior
- Update lead scores and qualification status

### Communication and Notification Actions

Keep teams informed about important agent interactions.

**Team Notifications:**
- Alert support teams about unresolved issues from conversations
- Notify sales teams about qualified leads and opportunities
- Inform product teams about feature requests and user feedback
- Update management about service quality metrics

**Customer Communications:**
- Send follow-up emails based on conversation outcomes
- Provide additional resources mentioned during conversations
- Schedule follow-up calls for complex inquiries
- Send satisfaction surveys and feedback requests

### Task and Project Management Actions

Create actionable items from agent conversations.

**Task Creation:**
- Generate support tickets from unresolved conversations
- Create follow-up tasks for sales opportunities
- Add feature requests to product backlog
- Schedule review tasks for conversation quality assessment

**Project Updates:**
- Update customer projects with conversation insights
- Add conversation summaries to project documentation
- Create action items for team follow-up
- Update project status based on customer interactions

## Best Practices

### Conversation Monitoring Strategy

Set up effective monitoring to maximize the value of agent conversation data.

**Agent Selection:**
- **Strategic Monitoring**: Focus on high-traffic or high-value public agents
- **Business Critical**: Prioritize agents handling customer support, sales, or critical inquiries
- **Performance Tracking**: Include agents where performance improvement is a priority
- **New Agent Evaluation**: Monitor newly deployed agents for initial performance assessment

**Data Quality Management:**
- **Complete Context**: Ensure conversations capture full interaction context
- **Metadata Inclusion**: Preserve important metadata (timestamps, user info, agent responses)
- **Privacy Compliance**: Implement proper data handling for customer conversations
- **Data Retention**: Establish appropriate retention policies for conversation data

### Workflow Optimization

Design efficient post-conversation processes that add value without creating overhead.

**Automation Balance:**
- **High-Value Focus**: Automate processes for high-volume, repetitive tasks
- **Human Oversight**: Reserve complex decisions for human review when needed
- **Gradual Implementation**: Start with pilot automations and expand based on success
- **Performance Monitoring**: Track automation effectiveness and adjust as needed

**Customer Experience:**
- **Timely Responses**: Ensure automated follow-ups happen within appropriate timeframes
- **Personalization**: Use conversation insights to personalize follow-up communications
- **Value Addition**: Focus on automations that genuinely improve customer experience
- **Transparency**: Consider informing customers about automated processes when appropriate

### Analytics and Improvement

Use conversation data to continuously improve agent performance and customer service.

**Performance Metrics:**
- **Resolution Rates**: Track successful vs. unsuccessful conversation outcomes
- **Response Quality**: Monitor agent response effectiveness and customer satisfaction
- **Topic Analysis**: Identify common questions and knowledge gaps
- **Trend Monitoring**: Track conversation patterns and service demands over time

**Continuous Improvement:**
- **Feedback Integration**: Use conversation insights to improve agent responses
- **Training Updates**: Incorporate learnings into agent training and knowledge bases
- **Process Optimization**: Identify and automate repetitive manual processes
- **Quality Assurance**: Implement review processes for complex or high-value conversations

## Troubleshooting

### Common Agent Chat Trigger Issues

Resolve frequent problems with public chat automation configurations.

**Trigger Not Firing:**
- **Agent Configuration**: Verify agents are set to public and properly configured
- **Timeout Settings**: Check inactivity timeout matches expected behavior
- **Conversation State**: Ensure conversations are properly ending (not just paused)
- **Agent Permissions**: Confirm automation has access to agent conversation data

**Data Quality Issues:**
- **Incomplete Transcripts**: Verify conversation capture is working correctly
- **Missing Metadata**: Check that all required conversation metadata is included
- **Privacy Settings**: Ensure data handling complies with privacy requirements
- **Encoding Issues**: Verify special characters and formatting are preserved

**Integration Problems:**
- **CRM Connection**: Test CRM integration and authentication
- **API Limits**: Monitor API usage and rate limits for external services
- **Data Mapping**: Verify correct mapping of conversation data to target systems
- **Error Handling**: Implement robust error handling for failed integrations

### Advanced Troubleshooting

Address complex issues with agent conversation automation and integration.

**Scalability Challenges:**
- **High Volume**: Implement batching and queuing for high-volume conversation processing
- **Performance Impact**: Monitor system performance during peak conversation times
- **Data Processing**: Optimize data processing workflows for efficiency
- **Storage Management**: Plan for conversation data storage and retention needs

**Complex Workflows:**
- **Multi-Step Logic**: Handle complex conditional logic based on conversation content
- **Cross-System Integration**: Manage data synchronization across multiple external systems
- **Exception Handling**: Plan for edge cases like interrupted conversations or system failures
- **Audit Trails**: Maintain complete records of automated actions and decisions

**Quality Assurance:**
- **Testing Scenarios**: Develop comprehensive test cases for different conversation types
- **Monitoring Dashboards**: Create dashboards to track automation performance and issues
- **Feedback Loops**: Implement mechanisms to report and resolve automation issues
- **Continuous Validation**: Regularly validate that automations are working as expected

## Examples and Templates

### Basic CRM Update Workflow
```
Trigger: Agent Public Chat Ended
→ Action: Extract customer contact information
→ Action: Update CRM with conversation summary
→ Action: Set follow-up reminder for sales team
```

### Support Ticket Generation
```
Trigger: Agent Public Chat Ended (unsolved issues)
→ Action: Create support ticket with full conversation transcript
→ Action: Categorize ticket based on conversation content
→ Action: Assign to appropriate support agent
→ Action: Send ticket confirmation to customer
```

### Performance Analytics Dashboard
```
Trigger: Agent Public Chat Ended (daily aggregation)
→ Action: Analyze conversation outcomes and metrics
→ Action: Update performance dashboard with key statistics
→ Action: Generate agent performance report
→ Action: Identify trends and improvement opportunities
```

### Customer Feedback Automation
```
Trigger: Agent Public Chat Ended (successful resolutions)
→ Action: Send satisfaction survey via email
→ Action: Analyze conversation for quality indicators
→ Action: Update customer satisfaction database
→ Action: Flag conversations for quality review if needed
```

## Related Features

### Complementary Automation Triggers

Work with other AI agent triggers for comprehensive agent automation.

- **[Agent Tool Trigger](agent-tool-automation-trigger.md)** - Monitor agent tool usage
- **[Webhooks Trigger](webhooks-automation-trigger.md)** - External system integration
- **[Task Added Trigger](task-added-automation-trigger.md)** - Monitor task creation
- **[New Comment Trigger](new-comment-automation-trigger.md)** - Monitor task comments

### Supporting Automation Actions

Combine with actions for complete agent conversation workflows.

- **[Ask Agent Action](ask-agent-automation-action.md)** - Process conversation content
- **[Send Channel Message Action](send-channel-message-action.md)** - Team notifications
- **[Add Task Action](add-task-automation-action.md)** - Create follow-up tasks
- **[Create Project Action](create-project-automation-action.md)** - Generate analysis projects

---

## **Agent Public Chat Ended Trigger Summary**

The Agent Public Chat Ended automation trigger serves as the bridge between AI agent conversations and automated post-interaction processes by automatically detecting when public agent chats conclude and initiating comprehensive follow-up workflows.

**Core Functionality:**
- **Conversation Monitoring**: Automatically detects ended public agent conversations after 5 minutes of inactivity
- **Complete Data Access**: Provides full conversation transcripts, metadata, and interaction details
- **Flexible Configuration**: Target specific agents, conversation types, and content patterns
- **Workflow Integration**: Connect with any Taskade automation action for comprehensive processing
- **Business Intelligence**: Enable data-driven insights and process improvements

**Business Impact:**
- **Enhanced Customer Service**: Automate follow-up processes and CRM updates from agent interactions
- **Improved Agent Performance**: Track, analyze, and optimize AI agent conversation quality
- **Streamlined Operations**: Convert conversations into actionable tasks, tickets, and opportunities
- **Data-Driven Insights**: Generate analytics and reports from conversation patterns and outcomes

**Implementation Benefits:**
- **Comprehensive Coverage**: Works with all public agent conversation types and outcomes
- **Scalable Automation**: Handle complex post-conversation workflows across multiple agents
- **Quality Assurance**: Implement automated quality checks and performance monitoring
- **Customer Experience**: Enable personalized follow-ups based on conversation insights

The Agent Public Chat Ended trigger transforms AI agent conversations from standalone interactions into comprehensive customer engagement and business intelligence opportunities, ensuring no valuable conversation data goes unutilized and every agent interaction contributes to improved service delivery and operational efficiency.

**Automate post-conversation processes and unlock the full business value of your AI agent interactions!** 🤖💬⚡📊

## Related Resources

- **[Automation Overview](overview.md)** - Complete automation system guide
- **[AI Agents Guide](../ai-agents/getting-started.md)** - AI agent creation and management
- **[Public Agent Inbox](../ai-agents/public-agent-inbox.md)** - Managing public agent conversations
- **[Share & Embed Agents](../ai-agents/share-embed-ai-agents.md)** - Deploying public agents
