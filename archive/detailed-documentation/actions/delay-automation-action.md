# Delay Automation Action

Pause automation workflows for specified time periods or until specific dates to create timed sequences, follow-up processes, and scheduled actions.

{% hint style="success" %}
The Delay action provides precise timing control in automations, enabling drip campaigns, follow-up sequences, time-based escalations, and scheduled workflow progression.
{% endhint %}

## Overview

The Delay automation action temporarily halts workflow execution for a defined duration or until a specific date/time. This enables sophisticated timing-based automation patterns that respect business processes, user preferences, and optimal engagement windows.

## Key Features

- **⏰ Precise Timing Control** - Delay for exact durations or until specific times
- **📅 Schedule-Based Delays** - Wait until business hours, specific dates, or events
- **🔄 Workflow Sequencing** - Create multi-step processes with timed intervals
- **📊 Performance Optimization** - Prevent system overload with controlled pacing
- **🎯 Business Logic Integration** - Align with business hours and processes
- **🔍 Progress Tracking** - Monitor delayed actions and completion status
- **🔧 Flexible Configuration** - Support for various delay types and conditions

## Delay Types

### Duration-Based Delays

**Fixed Time Periods:**
```javascript
// Simple time delays
delay(5, "minutes")
delay(2, "hours")
delay(1, "day")

// Complex duration calculations
delay(estimated_response_time, "hours")
delay((priority_score * 2), "hours")
delay(Math.max(min_delay, calculated_delay), "minutes")
```

**Business Hours Consideration:**
```javascript
// Delay until next business hour
delay_until_business_hours()

// Skip weekends and holidays
delay_business_days(3)

// Delay until specific time of day
delay_until_time("09:00", "America/New_York")
```

### Date/Time-Based Delays

**Specific Date/Time:**
```javascript
// Delay until exact date/time
delay_until("2024-12-25 09:00:00")

// Delay until business event
delay_until("next_quarter_start")

// Delay until user preference
delay_until(user.preferred_contact_time)
```

**Recurring Schedules:**
```javascript
// Weekly schedule
delay_until("next_monday_09:00")

// Monthly schedule
delay_until("first_day_next_month")

// Custom business cycles
delay_until("next_sprint_planning")
```

## Setup and Configuration

### Basic Delay Configuration

{% stepper %}
{% step %}
### Add Action to Automation
In your automation flow, click **+ Add Action** and select **Delay**.
{% endstep %}

{% step %}
### Choose Delay Type
Select duration-based or date/time-based delay.
{% endstep %}

{% step %}
### Configure Delay Parameters
Set duration, date/time, or calculation method.
{% endstep %}

{% step %}
### Add Conditions (Optional)
Specify when the delay should actually execute.
{% endstep %}

{% step %}
### Test Delay Logic
Verify delay calculations work as expected.
{% endstep %}
{% endstepper %}

### Advanced Configuration

| Setting | Description | Use Case |
|---------|-------------|----------|
| **Delay Type** | Duration or date/time based | Different timing requirements |
| **Duration** | Time period for delay | Fixed interval delays |
| **Target Date/Time** | Specific moment to wait until | Scheduled actions |
| **Timezone** | Time zone for calculations | Global team coordination |
| **Business Hours** | Respect working hours | Professional communication |
| **Conditions** | When to apply delay | Conditional timing logic |

## Common Use Cases

### Communication Sequences

**Drip Email Campaigns:**
```
Trigger: Lead subscribed to newsletter
Action: Send Email (Welcome message)
Action: Delay (3 days)
Action: Send Email (Value proposition)
Action: Delay (5 days)
Action: Send Email (Case studies)
Action: Delay (7 days)
Action: Send Email (Final call-to-action)

Result: Automated nurture sequence with optimal timing
```

**Follow-up Sequences:**
```
Trigger: Customer inquiry received
Action: Send Auto-Reply
Action: Delay (24 hours)
Action: Check Response Status
├── If no response → Send Follow-up
├── If response → Create Task for agent
Action: Delay (48 hours)
Action: Send Satisfaction Survey

Result: Intelligent customer communication flow
```

### Process Automation

**Approval Workflows:**
```
Trigger: Document submitted for approval
Action: Notify Approver
Action: Delay (review_deadline - 24 hours)
Action: Send Reminder Email
Action: Delay (24 hours)
Action: Escalate to Manager
Action: Send Escalation Notification

Result: Structured approval process with automated reminders
```

**Quality Assurance:**
```
Trigger: Code committed
Action: Run Automated Tests
Action: Delay (test_completion_time)
Action: Send Test Results
Action: If tests pass → Deploy to staging
Action: Delay (manual_review_time)
Action: Notify QA Team for manual testing

Result: Automated testing pipeline with human oversight
```

### Time-Based Business Processes

**Escalation Management:**
```
Trigger: High-priority ticket created
Action: Assign to Tier 1 Support
Action: Delay (4 hours)
Action: Check Resolution Status
├── If unresolved → Escalate to Tier 2
├── If resolved → Close ticket
Action: Delay (2 hours)
Action: Check Tier 2 Status
├── If unresolved → Escalate to management

Result: Automated escalation with appropriate timeframes
```

**Contract Management:**
```
Trigger: Contract signed
Action: Send Welcome Package
Action: Delay (30 days)
Action: Send Check-in Email
Action: Delay (60 days)
Action: Send Renewal Reminder
Action: Delay (30 days)
Action: Initiate Renewal Process

Result: Automated customer lifecycle management
```

## Advanced Delay Patterns

### Conditional Delays

**Smart Timing Logic:**
```javascript
// Delay based on priority
if (task.priority === 'urgent') {
  delay(1, 'hour'); // Quick response
} else if (task.priority === 'high') {
  delay(4, 'hours'); // Standard response
} else {
  delay(24, 'hours'); // Normal response
}

// Delay based on business hours
if (is_business_hours()) {
  delay(2, 'hours');
} else {
  delay_until_business_hours();
}
```

### Dynamic Delay Calculation

**Calculated Delays:**
```javascript
// Delay based on task complexity
const complexity_delay = task.estimated_hours * 0.5; // 30 minutes per hour of work
delay(complexity_delay, 'hours');

// Delay based on user preferences
const user_delay = user.response_time_preference || default_delay;
delay(user_delay, 'hours');

// Delay based on workload
const workload_factor = team.current_workload > 80 ? 2 : 1;
delay(base_delay * workload_factor, 'hours');
```

### Sequential Delays

**Multi-Step Timing:**
```json
{
  "sequential_delays": [
    {
      "action": "send_initial_email",
      "delay_after": "0 minutes"
    },
    {
      "action": "send_follow_up",
      "delay_after": "48 hours",
      "condition": "no_response"
    },
    {
      "action": "send_final_reminder",
      "delay_after": "72 hours",
      "condition": "no_response"
    },
    {
      "action": "escalate_to_manager",
      "delay_after": "24 hours",
      "condition": "still_no_response"
    }
  ]
}
```

## Integration Examples

### Marketing Automation

**Multi-Channel Campaigns:**
```
Email Campaign → Delay → Social Media Post → Delay → Blog Post
├── Send initial email blast
├── Wait 2 days for engagement
├── Post on social media
├── Wait 3 days for virality
├── Publish supporting blog post
└── Send final email with blog link

Result: Coordinated multi-channel campaign timing
```

### Customer Success

**Onboarding Sequences:**
```
New Customer → Welcome Email → Delay → Setup Call → Delay → Check-in Survey
├── Immediate welcome and resources
├── 3-day delay for initial exploration
├── Schedule personalized setup call
├── 7-day delay for implementation
├── Send satisfaction and progress survey
└── 30-day delay for comprehensive review

Result: Structured customer onboarding experience
```

### Sales Enablement

**Lead Nurturing:**
```
Lead Generated → Initial Contact → Delay → Educational Content → Delay → Demo Request
├── Send immediate acknowledgment
├── 2-hour delay for lead scoring
├── Send targeted educational content
├── 48-hour delay for content consumption
├── Send demo request with social proof
└── Track engagement and follow-up

Result: Automated lead nurturing with optimal timing
```

---

## Best Practices

### Delay Strategy Design

**Timing Considerations:**
- **Business Hours Respect** - Don't send communications outside working hours
- **Audience Preferences** - Consider time zones and communication preferences
- **Legal Compliance** - Respect do-not-contact periods and regulations
- **Cultural Sensitivity** - Account for international time differences
- **Peak Performance** - Schedule during optimal engagement times

### Performance Optimization

**Efficient Delay Management:**
- **Batch Processing** - Group similar delays together
- **Queue Management** - Monitor and manage delayed actions
- **Resource Planning** - Consider system capacity for delayed actions
- **Monitoring** - Track delay performance and success rates
- **Cleanup** - Remove expired or unnecessary delays

### User Experience

**Communication Transparency:**
- **Progress Indicators** - Show delay status to users
- **Expectation Setting** - Communicate timing to stakeholders
- **Cancellation Options** - Allow early execution when appropriate
- **Status Updates** - Keep users informed of progress

## Troubleshooting

### Common Delay Issues

**Delay Not Executing:**
- ✅ Verify automation is active and enabled
- ✅ Check delay duration is reasonable (not too long)
- ✅ Ensure no conflicting actions in the flow
- ✅ Verify user permissions for delayed actions

**Timing Inaccuracies:**
- ✅ Check timezone settings in automation
- ✅ Verify business hours configuration
- ✅ Confirm date calculations are correct
- ✅ Test with short delays first

**Performance Problems:**
- ✅ Monitor queue length and processing times
- ✅ Implement rate limiting for high-volume automations
- ✅ Use batch processing for similar delays
- ✅ Optimize delay calculations and conditions

### Monitoring and Analytics

**Delay Performance Metrics:**
```json
{
  "delay_metrics": {
    "total_delays": 1234,
    "average_delay_duration": "4.2 hours",
    "on_time_execution_rate": "97.8%",
    "most_common_delay_types": ["follow_up", "escalation", "campaign"],
    "delay_success_rate": "99.1%"
  }
}
```

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Identify Timing Requirements
Determine when delays are needed in your processes.
{% endstep %}

{% step %}
### Choose Delay Strategy
Select appropriate delay type and duration.
{% endstep %}

{% step %}
### Configure Business Rules
Set up conditions and business hour considerations.
{% endstep %}

{% step %}
### Test Delay Logic
Verify delays work as expected in different scenarios.
{% endstep %}

{% step %}
### Monitor Performance
Track delay effectiveness and user satisfaction.
{% endstep %}

{% step %}
### Optimize and Scale
Refine timing based on results and expand usage.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: Delay actions are the rhythm of automation, providing the timing that makes workflows feel natural and respectful of human processes. Use them to create drip campaigns, follow-up sequences, and time-based escalations that enhance rather than interrupt user experience. The key is finding the right balance between immediate action and respectful timing that aligns with business processes and user expectations.
