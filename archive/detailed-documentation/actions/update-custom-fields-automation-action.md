# Update Custom Fields Automation Action

Automatically update custom field values in tasks based on triggers, calculations, or external data to maintain accurate, up-to-date project metadata.

{% hint style="success" %}
The Update Custom Fields action enables dynamic metadata management, ensuring task attributes stay current with business logic, external data sources, and workflow progression.
{% endhint %}

## Overview

The Update Custom Fields automation action allows you to programmatically modify custom field values in tasks. This is essential for maintaining accurate project metadata, tracking progress, updating status information, and ensuring data consistency across your workflows.

## Key Features

- **📊 Dynamic Field Updates** - Automatically modify field values based on triggers
- **🔢 Calculated Values** - Compute field values using formulas and logic
- **🔗 Cross-Field Dependencies** - Update related fields simultaneously
- **📈 Progress Tracking** - Automatic status and progress field updates
- **🔄 Batch Operations** - Update multiple fields across multiple tasks
- **🎯 Conditional Logic** - Update fields based on complex business rules
- **🔍 Data Validation** - Ensure field values meet business requirements

## Field Types and Updates

### Supported Field Types

| Field Type | Update Capabilities | Example Use Cases |
|------------|-------------------|-------------------|
| **Text Fields** | String manipulation, concatenation | Status messages, descriptions |
| **Number Fields** | Mathematical operations, calculations | Progress percentages, counters |
| **Date Fields** | Date arithmetic, scheduling | Due dates, deadlines |
| **Dropdown Fields** | Status progression, category changes | Workflow stages, priorities |
| **Checkbox Fields** | Boolean logic, toggles | Completion flags, approvals |
| **People Fields** | Assignment changes, team updates | Owner changes, reviewer assignments |
| **Link Fields** | URL updates, reference changes | Document links, resource references |

### Update Operations

**Mathematical Operations:**
```javascript
// Number field calculations
current_value + 10
progress_percentage = (completed_tasks / total_tasks) * 100
priority_score = (urgency * 0.4) + (impact * 0.6)
```

**String Operations:**
```javascript
// Text field manipulation
"Status: " + current_status
customer_name + " - " + project_type
"Week " + current_week + " Update"
```

**Date Operations:**
```javascript
// Date field calculations
due_date + 7 days
start_date + (estimated_hours / 8) days
review_deadline = submission_date + 2 business_days
```

## Setup and Configuration

### Basic Field Updates

{% stepper %}
{% step %}
### Add Action to Automation
In your automation flow, click **+ Add Action** and select **Update Custom Fields**.
{% endstep %}

{% step %}
### Select Target Task
Choose which task's fields to update (current task or specific task).
{% endstep %}

{% step %}
### Choose Fields to Update
Select which custom fields to modify.
{% endstep %}

{% step %}
### Define Update Values
Set new values, formulas, or reference other fields/data.
{% endstep %}

{% step %}
### Configure Conditions (Optional)
Add conditions for when updates should occur.
{% endstep %}
{% endstepper %}

### Advanced Configuration

| Setting | Description | Use Case |
|---------|-------------|----------|
| **Target Task** | Which task to update fields in | Current task or specific task ID |
| **Field Selection** | Which custom fields to update | Single field or multiple fields |
| **Update Mode** | How to update (set, increment, append) | Different update operations |
| **Value Source** | Where to get new values from | Static values, calculations, external data |
| **Conditions** | When to perform updates | Business rule validation |
| **Validation** | Value constraints and checks | Data integrity enforcement |

## Common Use Cases

### Progress Tracking Automation

**Task Completion Updates:**
```
Trigger: Subtask completed
Action: Update Custom Fields
Field: progress_percentage
Value: (completed_subtasks / total_subtasks) * 100
Field: last_updated
Value: current_timestamp

Result: Automatic progress calculation and tracking
```

**Project Status Updates:**
```
Trigger: Task status changed
Action: Update Custom Fields
Field: project_status
Value: calculate_overall_status(all_tasks)
Field: completion_date (if status = "completed")
Value: current_date

Result: Real-time project status aggregation
```

### Deadline and Time Management

**Due Date Calculations:**
```
Trigger: Task created
Action: Update Custom Fields
Field: review_deadline
Value: due_date - 2 business_days
Field: escalation_date
Value: due_date + 1 day

Result: Automatic deadline hierarchy creation
```

**Time Tracking Updates:**
```
Trigger: Time logged
Action: Update Custom Fields
Field: total_time_spent
Value: current_total + logged_time
Field: estimated_vs_actual
Value: (actual_time / estimated_time) * 100

Result: Automatic time tracking calculations
```

### Status and Workflow Management

**Workflow Progression:**
```
Trigger: Task moved to "Review" block
Action: Update Custom Fields
Field: current_stage
Value: "Under Review"
Field: reviewer_assigned
Value: find_available_reviewer()
Field: review_deadline
Value: current_date + 3 days

Result: Automated workflow stage management
```

**Priority Escalation:**
```
Trigger: Task overdue
Action: Update Custom Fields
Field: priority_level
Value: "Critical"
Field: escalation_count
Value: current_count + 1
Field: escalation_reason
Value: "Overdue by " + days_overdue + " days"

Result: Automatic priority and escalation management
```

## Advanced Field Operations

### Calculated Field Updates

**Complex Calculations:**
```javascript
// Revenue calculations
total_revenue = quantity * unit_price * (1 - discount_rate)
profit_margin = (total_revenue - total_cost) / total_revenue * 100

// Risk assessment
risk_score = (impact * 0.6) + (probability * 0.4)
risk_level = risk_score > 7 ? "High" : risk_score > 4 ? "Medium" : "Low"

// SLA compliance
response_time = actual_response - required_response
sla_status = response_time <= 0 ? "Met" : "Breached"
```

### Cross-Field Dependencies

**Interdependent Updates:**
```json
{
  "field_updates": [
    {
      "field": "status",
      "value": "In Progress",
      "triggers": [
        {"field": "start_date", "value": "current_date"},
        {"field": "assigned_to", "value": "current_user"}
      ]
    },
    {
      "field": "completion_percentage",
      "value": "25",
      "condition": "status == 'In Progress'"
    }
  ]
}
```

### Batch Field Operations

**Multiple Field Updates:**
```json
{
  "batch_update": {
    "target_tasks": "all_in_project",
    "field_updates": {
      "quarter": "Q4_2024",
      "last_reviewed": "current_date",
      "reviewer": "current_user"
    },
    "condition": "status != 'completed'"
  }
}
```

## Integration Examples

### CRM Data Synchronization

**Customer Data Updates:**
```
CRM → Taskade Update Custom Fields
├── Contact updates → Update customer fields
├── Deal changes → Update opportunity values
├── Status changes → Update pipeline positions
└── Activity logs → Update last_contact dates

Result: Synchronized customer data across systems
```

### Project Management Integration

**Jira Field Synchronization:**
```
Jira → Taskade Update Custom Fields
├── Status changes → Update task status fields
├── Sprint assignments → Update sprint fields
├── Story points → Update effort estimates
└── Priority changes → Update priority fields

Result: Unified project management data
```

### Financial System Integration

**Budget Tracking Updates:**
```
Accounting → Taskade Update Custom Fields
├── Expense approvals → Update budget fields
├── Invoice payments → Update payment status
├── Budget allocations → Update spending limits
└── Variance calculations → Update budget variances

Result: Real-time financial tracking and reporting
```

---

## Best Practices

### Field Update Strategy

**Consistent Update Patterns:**
- **Atomic Updates** - Update related fields together
- **Validation Rules** - Ensure data integrity constraints
- **Audit Trail** - Track field change history
- **Rollback Capability** - Handle update failures gracefully

### Performance Optimization

**Efficient Updates:**
- **Batch Operations** - Update multiple fields in single operation
- **Conditional Logic** - Avoid unnecessary updates
- **Indexing Strategy** - Optimize field access patterns
- **Caching** - Cache frequently used calculation results

### Data Integrity

**Validation and Constraints:**
- **Type Checking** - Ensure field values match expected types
- **Range Validation** - Validate numeric ranges and limits
- **Required Fields** - Ensure critical fields are populated
- **Business Rules** - Apply organization-specific validation

## Troubleshooting

### Common Field Update Issues

**Update Failures:**
- ✅ Verify field permissions and access rights
- ✅ Check field existence in target project
- ✅ Validate data types and formats
- ✅ Ensure calculation dependencies are available

**Calculation Errors:**
- ✅ Verify formula syntax and variable references
- ✅ Check for division by zero or invalid operations
- ✅ Validate date formats and calculations
- ✅ Test calculations with sample data

**Performance Issues:**
- ✅ Limit batch update sizes
- ✅ Implement update throttling
- ✅ Monitor automation performance
- ✅ Use async processing for complex calculations

### Monitoring and Analytics

**Field Update Metrics:**
```json
{
  "update_metrics": {
    "total_updates": 3456,
    "average_update_time": "0.8 seconds",
    "success_rate": "99.2%",
    "most_updated_fields": ["status", "progress", "priority"],
    "peak_update_times": "9-11 AM EST"
  }
}
```

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Identify Update Requirements
Determine which fields need automatic updates.
{% endstep %}

{% step %}
### Design Update Logic
Create rules for field value calculations.
{% endstep %}

{% step %}
### Configure Automation Actions
Set up Update Custom Fields actions in workflows.
{% endstep %}

{% step %}
### Test Field Updates
Verify fields update with correct values.
{% endstep %}

{% step %}
### Monitor and Optimize
Track update performance and refine logic.
{% endstep %}

{% step %}
### Scale Implementation
Expand to additional fields and workflows.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: Custom fields are the backbone of structured project data, and automatic updates ensure this data stays accurate and useful. Use the Update Custom Fields action to create living, breathing project metadata that reflects real-time status, calculations, and business intelligence. Start with simple status updates and gradually add more sophisticated calculations as your data needs evolve.
