# Agent Public Chat Ended Trigger: Automate Conversation Follow-Up

Automatically process and analyze public AI agent conversations when they conclude, enabling comprehensive customer interaction management and continuous improvement.

{% hint style="success" %}
The Agent Public Chat Ended trigger transforms every customer interaction into actionable insights, ensuring that conversations don't end when the chat does—they become the foundation for better service, products, and customer relationships.
{% endhint %}

## Overview

The Agent Public Chat Ended trigger activates automation workflows when public AI agent conversations conclude. This powerful trigger captures complete conversation data, enabling analysis, follow-up actions, and continuous improvement of customer interactions.

## Key Features

- **💬 Complete Conversation Capture** - Access full chat history and context
- **🎯 Customer Insights** - Extract actionable intelligence from conversations
- **🔄 Automated Follow-Up** - Intelligent next-step recommendations
- **📊 Sentiment Analysis** - Understand customer satisfaction and emotions
- **🎨 Quality Monitoring** - Track agent performance and conversation quality
- **🔗 CRM Integration** - Automatic customer data updates
- **📈 Analytics & Reporting** - Comprehensive conversation analytics
- **⚡ Real-Time Processing** - Immediate conversation analysis and actions

## When to Use Agent Public Chat Ended Triggers

### Perfect Use Cases

| Scenario | Trigger Benefits | Example Applications |
|----------|------------------|----------------------|
| **Customer Support** | Convert conversations into support tickets and follow-ups | Automatic ticket creation, priority assessment, escalation routing |
| **Lead Generation** | Capture and qualify leads from casual conversations | Contact information extraction, lead scoring, sales team notifications |
| **Feedback Collection** | Gather insights on products, services, and user experience | Satisfaction surveys, feature requests, bug reports |
| **CRM Enrichment** | Update customer profiles with conversation insights | Purchase intent, preferences, pain points, buying signals |
| **Quality Assurance** | Monitor and improve agent performance | Conversation analysis, coaching opportunities, best practice identification |
| **Sales Intelligence** | Track buying signals and sales opportunities | Deal progression, objection handling, competitor mentions |
| **Product Development** | Gather user feedback and feature requests | Idea capture, user story generation, roadmap prioritization |
| **Compliance Monitoring** | Ensure conversations meet regulatory requirements | Data handling verification, compliance logging, audit trails |

### Common Applications

**Support Ticket Automation:**
```
Agent Chat Ended: Customer reported login issue
Automation Flow:
├── Analyze conversation for issue details
├── Create prioritized support ticket
├── Extract customer contact information
├── Route to appropriate support team
└── Send customer confirmation email
```

**Lead Qualification:**
```
Agent Chat Ended: Visitor interested in premium features
Automation Flow:
├── Score lead based on conversation content
├── Add contact to CRM with conversation summary
├── Send personalized follow-up email
├── Create sales opportunity record
└── Notify sales development team
```

**Customer Feedback Analysis:**
```
Agent Chat Ended: Completed product demo conversation
Automation Flow:
├── Analyze customer sentiment and satisfaction
├── Extract feature requests and pain points
├── Update product feedback database
├── Trigger customer satisfaction survey
└── Generate insights for product team
```

## Setup and Configuration

### Creating Agent Public Chat Ended Triggers

{% stepper %}
{% step %}
### Access Agent Settings
Navigate to your public agent → Automations → Triggers tab.
{% endstep %}

{% step %}
### Add Chat Ended Trigger
Click "Add Trigger" → Select "Agent Public Chat Ended".
{% endstep %}

{% step %}
### Configure Trigger Scope
Choose which agents or agent types to monitor for chat endings.
{% endstep %}

{% step %}
### Set Conversation Filters (Optional)
Filter triggers based on conversation properties (length, sentiment, keywords).
{% endstep %}

{% step %}
### Build Automation Workflow
Connect the trigger to your desired automation actions.
{% endstep %}

{% step %}
### Test with Sample Chats
End test conversations to verify automation execution.
{% endstep %}
{% endstepper %}

### Configuration Options

| Setting | Options | Description |
|---------|---------|-------------|
| **Agent Scope** | All agents, Specific agents, Agent types | Control which agent conversations trigger automations |
| **Conversation Filters** | Length, Duration, Sentiment, Keywords | Limit triggers to specific conversation types |
| **Inactivity Timeout** | 5 minutes (default), Custom duration | Time before conversation is considered ended |
| **Data Retention** | Conversation data, Analysis results, Metadata | Control what conversation data is processed |
| **Processing Priority** | High, Normal, Low | Control processing speed vs. resource usage |

## Trigger Behavior and Context

### What Triggers the Automation

**Chat End Events:**
```javascript
// Trigger activates when:
- User explicitly ends the conversation
- Conversation becomes inactive for timeout period (5+ minutes)
- Agent detects conversation conclusion naturally
- User navigates away from chat interface
- Browser tab/window is closed

// Does NOT trigger when:
- User is temporarily away but returns
- Agent is processing a response
- Conversation is actively ongoing
- Technical connection issues (temporary)
```

**Context Variables Available:**
```javascript
// Comprehensive conversation context passed to automations
trigger: {
  event: "agent_public_chat_ended",
  timestamp: "2024-01-15T14:30:00Z",
  agent: {
    id: "agent_12345",
    name: "Customer Support Assistant",
    type: "public_chat",
    version: "2.1",
    training_data: "customer_support_v3",
    persona: "helpful_professional"
  },
  conversation: {
    id: "chat_67890",
    start_time: "2024-01-15T14:15:00Z",
    end_time: "2024-01-15T14:30:00Z",
    duration_seconds: 900,
    message_count: 24,
    participant_count: 2,
    end_reason: "user_inactive_timeout"
  },
  user: {
    id: "user_anonymous_11111",
    ip_address: "192.168.1.100",
    user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    location: "New York, NY, US",
    language: "en-US",
    is_returning_visitor: false,
    page_url: "https://company.com/support",
    referrer: "https://google.com"
  },
  messages: [
    {
      id: "msg_001",
      timestamp: "2024-01-15T14:15:05Z",
      sender: "user",
      content: "Hi, I'm having trouble logging into my account",
      sentiment: "frustrated",
      intent: "technical_support"
    },
    {
      id: "msg_002",
      timestamp: "2024-01-15T14:15:12Z",
      sender: "agent",
      content: "I'd be happy to help you with your login issue. Can you tell me what error message you're seeing?",
      sentiment: "helpful",
      confidence: 0.92
    }
    // ... full conversation history
  ],
  analysis: {
    overall_sentiment: "neutral_to_positive",
    customer_satisfaction: "3.8/5",
    issue_category: "authentication_problem",
    urgency_level: "medium",
    resolution_status: "partially_resolved",
    key_topics: ["login", "password_reset", "account_access"],
    action_items: ["send_password_reset", "verify_account_status"],
    follow_up_needed: true
  }
}
```

## Common Automation Workflows

### Customer Support Automation

**Intelligent Ticket Creation:**
```
Trigger: Support conversation ended
Actions:
├── Analyze conversation for issue details
├── Determine priority and category automatically
├── Create support ticket with conversation summary
├── Assign to appropriate support agent
└── Send customer ticket confirmation
```

**Follow-Up Management:**
```
Trigger: Conversation ended with unresolved issue
Actions:
├── Identify follow-up requirements
├── Schedule automated follow-up email
├── Create customer callback task
├── Update customer record with issue status
└── Notify support manager of escalated cases
```

### Sales and Marketing Automation

**Lead Processing:**
```
Trigger: Sales-qualified conversation ended
Actions:
├── Extract contact information and requirements
├── Score lead based on conversation content
├── Add to CRM with conversation summary
├── Send personalized follow-up sequence
└── Notify sales team of hot leads
```

**Content Personalization:**
```
Trigger: Product interest conversation ended
Actions:
├── Analyze expressed interests and pain points
├── Tag user profile with preferences
├── Send targeted content recommendations
├── Add to relevant email nurture sequences
└── Update marketing segmentation
```

### Quality and Analytics

**Conversation Analysis:**
```
Trigger: Any public chat ended
Actions:
├── Perform sentiment and intent analysis
├── Extract key insights and feedback
├── Update conversation quality metrics
├── Identify training opportunities for agents
└── Generate aggregated analytics reports
```

**Performance Monitoring:**
```
Trigger: Support chat ended
Actions:
├── Calculate conversation metrics (resolution time, satisfaction)
├── Update agent performance dashboards
├── Identify common issues and solutions
├── Generate quality assurance reports
└── Trigger coaching sessions when needed
```

## Advanced Configuration

### Intelligent Conversation Processing

**Natural Language Processing:**
```javascript
// Advanced conversation analysis
nlp_processing: {
  intent_recognition: {
    primary_intents: ["get_support", "ask_question", "report_issue", "request_feature"],
    confidence_threshold: 0.75,
    fallback_category: "general_inquiry"
  },
  entity_extraction: {
    contact_info: "email_addresses, phone_numbers, company_names",
    technical_details: "error_messages, product_versions, system_info",
    personal_data: "names, locations, preferences",
    business_context: "company_size, industry, use_case"
  },
  sentiment_analysis: {
    model: "multilingual_sentiment_analyzer",
    granularity: "message_level",
    escalation_triggers: ["very_negative", "urgent_language"]
  }
}
```

**Conversation Intelligence:**
```javascript
// Extract actionable insights
conversation_intelligence: {
  topic_clustering: {
    algorithm: "semantic_clustering",
    min_cluster_size: 3,
    max_clusters: 10
  },
  action_item_extraction: {
    patterns: ["please", "can you", "I need", "follow up"],
    confidence_threshold: 0.8,
    assignee_detection: true
  },
  resolution_tracking: {
    success_indicators: ["thank you", "that helped", "problem solved"],
    partial_resolution: ["I'll check back", "follow up needed"],
    escalation_signals: ["manager", "supervisor", "urgent"]
  },
  quality_scoring: {
    response_time: "< 30 seconds ideal",
    helpfulness_score: "agent_response_quality",
    completeness_score: "issue_resolution_completeness",
    satisfaction_prediction: "based_on_conversation_flow"
  }
}
```

### Automated Workflow Routing

**Smart Escalation:**
```javascript
// Intelligent routing based on conversation content
smart_routing: {
  priority_assessment: {
    urgent_keywords: ["emergency", "critical", "immediately", "asap"],
    high_priority: "response_time < 1 hour",
    medium_priority: "response_time < 4 hours",
    low_priority: "response_time < 24 hours"
  },
  skill_based_routing: {
    technical_issues: "engineering_team",
    billing_questions: "finance_team",
    product_feedback: "product_team",
    account_issues: "support_team"
  },
  load_balancing: {
    current_workload: "team_member_capacity",
    expertise_matching: "skill_based_assignment",
    round_robin: "fair_distribution_fallback"
  }
}
```

## Integration Examples

### CRM Systems

**Salesforce Integration:**
```
Chat Ended → Salesforce Update
├── Create or update lead/contact record
├── Add conversation summary to notes
├── Set lead score based on conversation
├── Create follow-up tasks for sales team
└── Update opportunity stage if applicable
```

**HubSpot Integration:**
```
Chat Ended → HubSpot Enrichment
├── Update contact properties with conversation insights
├── Add conversation to contact timeline
├── Update lead scoring and lifecycle stage
├── Trigger automated email sequences
└── Create deal records for qualified leads
```

### Help Desk Systems

**Zendesk Integration:**
```
Chat Ended → Ticket Creation
├── Generate support ticket from conversation
├── Set priority based on urgency analysis
├── Assign to appropriate agent or team
├── Include full conversation transcript
└── Set up automated customer follow-ups
```

**Intercom Integration:**
```
Chat Ended → Intercom Update
├── Add conversation to user profile
├── Update user attributes and tags
├── Create follow-up conversations if needed
├── Trigger customer satisfaction surveys
└── Update user journey and engagement metrics
```

### Analytics Platforms

**Google Analytics Integration:**
```
Chat Ended → Analytics Update
├── Track conversation events and outcomes
├── Update user behavior and engagement metrics
├── Send conversation data to BigQuery
├── Generate real-time dashboards
└── Trigger alerts for important conversations
```

**Mixpanel Integration:**
```
Chat Ended → Product Analytics
├── Track user interactions and feature usage
├── Update user profiles with conversation insights
├── Create conversion funnels from chat interactions
├── Generate cohort analysis reports
└── Identify product improvement opportunities
```

## Best Practices

### Conversation Quality Management

**Agent Training Optimization:**
- Use conversation analysis to identify training needs
- Create personalized coaching based on interaction patterns
- Develop best practice guides from successful conversations
- Monitor agent performance improvements over time

**Quality Assurance:**
- Implement automated quality scoring
- Set up periodic conversation reviews
- Create feedback loops for continuous improvement
- Establish quality benchmarks and KPIs

### Customer Experience Enhancement

**Personalization Strategies:**
- Use conversation history for personalized responses
- Build customer profiles from interaction patterns
- Create contextual follow-up communications
- Develop proactive customer service approaches

**Satisfaction Optimization:**
- Monitor customer sentiment trends
- Identify common pain points and issues
- Implement proactive solution recommendations
- Create customer success pathways based on conversations

## Monitoring and Analytics

### Conversation Performance Metrics

**Key Performance Indicators:**
```javascript
// Track conversation effectiveness
kpis: {
  conversation_quality: {
    average_satisfaction: "4.2/5",
    resolution_rate: "87%",
    first_contact_resolution: "73%",
    average_handle_time: "8.5 minutes"
  },
  automation_effectiveness: {
    ticket_creation_accuracy: "94%",
    lead_qualification_rate: "76%",
    follow_up_completion: "89%"
  },
  business_impact: {
    cost_per_conversation: "$4.50",
    revenue_attribution: "$125K/month",
    customer_retention_improvement: "12%"
  }
}
```

### Advanced Analytics

**Conversation Mining:**
```javascript
// Extract insights from conversation data
analytics_insights: {
  topic_analysis: {
    trending_issues: ["login_problems", "billing_questions", "feature_requests"],
    seasonal_patterns: "Q4_support_spike",
    product_feedback: ["UI_improvements", "new_features", "bug_reports"]
  },
  customer_segmentation: {
    power_users: "frequent_feature_requests",
    support_dependents: "recurring_technical_issues",
    champions: "positive_feedback_providers"
  },
  predictive_modeling: {
    churn_prediction: "based_on_sentiment_trends",
    upsell_opportunities: "feature_interest_indicators",
    support_load_forecasting: "historical_pattern_analysis"
  }
}
```

## Troubleshooting

### Common Chat Processing Issues

**Trigger Not Firing:**
- ✅ Verify agent is set to public chat mode
- ✅ Check conversation actually ended (not just paused)
- ✅ Ensure automation permissions are correct
- ✅ Test with different conversation scenarios

**Incomplete Context:**
- ✅ Verify conversation data capture settings
- ✅ Check for message processing timeouts
- ✅ Review conversation length limits
- ✅ Test with various conversation types

**Processing Errors:**
- ✅ Monitor API rate limits for integrations
- ✅ Check data format compatibility
- ✅ Review error handling in automation workflows
- ✅ Test with sample conversation data

### Advanced Diagnostics

**Conversation Analysis:**
```javascript
// Debug conversation processing
1. Access Agent Settings → Conversation Logs
2. Select specific ended conversation
3. Review trigger execution details
4. Check automation action results
5. Analyze error logs and processing steps
```

**Performance Monitoring:**
- Track conversation processing times
- Monitor automation success rates
- Identify bottleneck conversations
- Optimize processing workflows
- Generate performance improvement reports

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Define Conversation Workflows
Map out post-chat processes and requirements.
{% endstep %}

{% step %}
### Configure Chat Ended Triggers
Set up triggers in agent automation settings.
{% endstep %}

{% step %}
### Design Processing Workflows
Create appropriate conversation analysis and actions.
{% endstep %}

{% step %}
### Set Up Integration Endpoints
Configure connections to CRM, help desk, and analytics systems.
{% endstep %}

{% step %}
### Test with Sample Conversations
End test chats to verify automation execution.
{% endstep %}

{% step %}
### Monitor and Optimize
Track performance and refine based on real conversation data.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: The Agent Public Chat Ended trigger transforms every customer conversation into a business opportunity. Every ended chat becomes data for improving products, processes, and customer relationships. Use it to ensure that conversations don't just end—they become the foundation for better business outcomes.

Agent Public Chat Ended triggers ensure that the value of customer conversations extends far beyond the interaction itself, creating continuous improvement and deeper customer relationships. 💬📊

## Related Automation Triggers

- **[Task Assigned Trigger](task-assigned-trigger.md)** - When tasks are delegated to team members
- **[Task Completed Trigger](task-completed-trigger.md)** - When tasks are finished
- **[New Comment Trigger](new-comment-trigger.md)** - When discussions happen on tasks
- **[Project Completed Trigger](project-completed-trigger.md)** - When projects are marked complete

