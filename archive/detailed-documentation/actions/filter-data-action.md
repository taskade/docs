# Filter Data (Automation Action)

Apply conditional logic to your automations, executing actions only when specific data criteria are met for precise workflow control.

{% hint style="success" %}
The Filter Data action adds intelligent conditional execution to automations, ensuring actions only run when appropriate data conditions are satisfied.
{% endhint %}

## Overview

The Filter Data action evaluates data against specified criteria, allowing subsequent actions to execute only when conditions are met. This creates efficient, targeted automations that respond intelligently to different scenarios.

**Key Features:**
- **Conditional Execution**: Run actions only when criteria are satisfied
- **Data Evaluation**: Compare task, project, and custom field data
- **Multiple Conditions**: Combine AND/OR logic for complex filtering
- **Workflow Optimization**: Prevent unnecessary action execution

## Configuration

### Filter Types

**Supported Data Sources:**
- **Task Properties**: Name, status, priority, assignee, due dates
- **Project Data**: Title, owner, creation date, custom fields
- **Custom Fields**: User-defined fields with various data types
- **Dynamic Values**: Data from previous automation actions

### Condition Operators

**Comparison Types:**
- **Text**: Contains, equals, starts with, ends with
- **Numeric**: Greater than, less than, equals, between
- **Date**: Before, after, within range, relative dates
- **Boolean**: Is true, is false, exists, not exists

### Logic Combinations

**Condition Grouping:**
- **AND Logic**: All conditions must be true
- **OR Logic**: Any condition can be true
- **Nested Groups**: Combine AND/OR in complex patterns
- **Priority Order**: Define evaluation sequence

## Setup Guide

### Basic Configuration

{% stepper %}
{% step %}
### Add Filter Action
Insert Filter Data action in your automation flow.
{% endstep %}

{% step %}
### Select Data Field
Choose the data field to evaluate.
{% endstep %}

{% step %}
### Define Condition
Set the comparison operator and criteria.
{% endstep %}

{% step %}
### Configure Logic
Add multiple conditions with AND/OR combinations.
{% endstep %}

{% step %}
### Define Success Path
Actions after filter execute only when conditions pass.
{% endstep %}
{% endstepper %}

### Advanced Setup

**Complex Filtering:**
- Combine multiple data fields in single filter
- Create nested conditional logic
- Use custom fields for business-specific rules

## Use Cases

### Support Escalation
```
Ticket Created
    ↓
Filter Data: Check for urgent keywords
    ├── Contains: "urgent", "critical", "emergency"
    │   → Escalate to senior support + immediate notification
    └── No match → Standard processing queue
```

### Lead Qualification
```
Lead Form Submitted
    ↓
Filter Data: Evaluate lead criteria
    ├── Budget > $50K AND Timeline < 3 months
    │   → Assign to senior sales + schedule demo
    └── Lower priority → Standard nurturing campaign
```

### Content Moderation
```
Content Submitted
    ↓
Filter Data: Check quality criteria
    ├── Contains spam keywords OR inappropriate content
    │   → Flag for moderation + notify team
    └── Clean content → Continue publishing workflow
```

### Task Routing
```
Task Created
    ↓
Filter Data: Evaluate task properties
    ├── Priority = "High" AND Due Date < 24 hours
    │   → Assign to on-call team + urgent notification
    └── Standard priority → Normal assignment workflow
```

### Project Monitoring
```
Project Updated
    ↓
Filter Data: Check project health
    ├── Completion < 50% AND Due Date < 1 week
    │   → Escalate to manager + risk mitigation
    └── On track → Continue normal monitoring
```

## Advanced Features

### Complex Logic

**Multi-Condition Filtering:**
```javascript
// AND Logic
Priority = "High" AND Assignee = "Manager"

// OR Logic
Status = "Overdue" OR DaysPastDue > 7

// Nested Conditions
(Budget > 10000 AND Risk = "High") OR (Timeline < 30 AND Priority = "Critical")
```

### Custom Field Integration

**Business-Specific Filtering:**
- **Deal Stage**: Route based on sales pipeline position
- **Customer Tier**: Apply different service levels
- **Project Type**: Use different approval workflows
- **Department**: Route to appropriate teams

### Dynamic Data

**Use Previous Action Results:**
```
Generate AI Score
    ↓
Filter Data: Evaluate score range
    ├── Score > 8 → Approve automatically
    ├── Score 5-8 → Send for review
    └── Score < 5 → Reject with feedback
```

## Best Practices

### Filter Design
- Use specific, measurable criteria to avoid false positives
- Test filters with various data scenarios including edge cases
- Document filter logic for future maintenance and troubleshooting

### Performance Optimization
- Place most restrictive conditions first for efficiency
- Minimize complex nested conditions
- Monitor execution times and optimize frequently used filters

### Testing and Monitoring
- Test each filter condition individually
- Verify behavior with missing or invalid data
- Monitor filter match rates and adjust criteria as needed

## Troubleshooting

### Common Issues
**Conditions not evaluating correctly:**
- Verify data types and formats match filter criteria
- Check case sensitivity in text comparisons
- Ensure date formats are consistent across systems

**Unexpected filtering behavior:**
- Review logic operators and condition combinations
- Test with sample data to isolate issues
- Check for conflicting or overlapping conditions

**Performance problems:**
- Simplify complex filter logic
- Optimize database queries and data access
- Implement caching for frequently used reference data

### Debugging Tools
- **Execution Logs**: Track condition evaluation and results
- **Test Mode**: Simulate filtering without executing actions
- **Analytics**: Monitor filter performance and usage patterns

## Security Considerations

### Data Access
- Limit filter access to authorized users
- Control visibility of sensitive data fields
- Implement proper data sanitization

### Audit Trails
- Log all filter evaluations and decisions
- Track changes to filter configurations
- Maintain records for compliance purposes

## Integration Examples

### Complete Workflows

**Intelligent Support System:**
```
Ticket Received → Filter by priority/keywords → Route to team → Set SLA → Notify stakeholders
```

**Sales Lead Processing:**
```
Lead Captured → Filter by qualification → Score lead → Assign rep → Schedule follow-up
```

**Content Approval Pipeline:**
```
Draft Submitted → Filter by type/quality → Assign reviewers → Set workflow → Track status
```

**Project Risk Management:**
```
Project Updated → Filter by risk indicators → Assess impact → Trigger mitigation → Alert management
```

## Conclusion

The Filter Data action enables precise, conditional automation execution, ensuring workflows respond appropriately to different data scenarios and business requirements. Perfect for creating efficient, intelligent automations that avoid unnecessary processing.

## Related Features

- [Branch Action](branch-action.md)
- [Automation Triggers Overview](../automation-triggers-overview.md)
- [Custom Fields](../project-management/custom-fields.md)

---

*Add intelligent conditional logic to your automation workflows.*