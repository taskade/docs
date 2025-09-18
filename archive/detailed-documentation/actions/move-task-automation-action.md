# Move Task (Automation Action)

Automatically relocate tasks within projects to optimize workflow organization, task prioritization, and project management efficiency through intelligent task repositioning.

{% hint style="success" %}
The Move Task automation action transforms manual task organization into intelligent, automated workflow management systems, enabling organizations to automatically reposition tasks within projects for optimal organization, priority management, and productivity enhancement.
{% endhint %}

## Overview

The Move Task automation action enables organizations to automatically relocate tasks within projects for better organization, workflow optimization, and task management efficiency. This powerful capability transforms manual task repositioning into intelligent, automated systems that can adjust task priorities, shift tasks between workflow stages, and maintain optimal project structure through seamless task movement within project hierarchies.

- **Intelligent Task Repositioning** - Automatically move tasks to optimal positions within projects
- **Workflow Stage Management** - Shift tasks between different workflow stages and phases
- **Priority-Based Organization** - Adjust task positions based on priority and importance
- **Project Structure Optimization** - Maintain optimal project organization and task flow
- **Dynamic Task Reordering** - Automatically reorder tasks based on changing conditions
- **Block-Based Organization** - Move tasks between different blocks and sections
- **Automated Cleanup** - Organize completed tasks and maintain project clarity
- **Workflow Optimization** - Streamline task flows and improve project management efficiency
- **Position-Based Logic** - Control task placement with precise positioning rules
- **Bulk Task Movement** - Handle multiple task movements efficiently
- **Audit Trail** - Track automated task movements for compliance and management
- **Conditional Movement** - Move tasks based on specific conditions and triggers

## Key Features

- **🎯 Intelligent Task Repositioning** - Automatically move tasks to optimal positions within projects for better organization and workflow management
- **🔄 Workflow Stage Management** - Shift tasks between different workflow stages and phases seamlessly
- **📊 Priority-Based Organization** - Adjust task positions based on priority, importance, and business rules
- **🏗️ Project Structure Optimization** - Maintain optimal project organization and task flow through automated repositioning
- **🔀 Dynamic Task Reordering** - Automatically reorder tasks based on changing conditions and requirements
- **📦 Block-Based Organization** - Move tasks between different blocks and sections within projects
- **🧹 Automated Cleanup** - Organize completed tasks and maintain project clarity through automated movement
- **⚡ Workflow Optimization** - Streamline task flows and improve project management efficiency
- **📍 Position-Based Logic** - Control task placement with precise positioning rules and algorithms
- **📈 Bulk Task Movement** - Handle multiple task movements efficiently and reliably
- **📋 Audit Trail Tracking** - Track automated task movements for compliance and project management
- **🎛️ Conditional Movement** - Move tasks based on specific conditions, triggers, and business rules
- **🔧 Flexible Configuration** - Customize movement rules for different project types and workflows
- **📈 Performance Optimized** - Efficient task movement processing with minimal system impact

## Movement Types

### Within Project Movement

**Block/Section Changes:**
```javascript
// Move completed tasks to archive section
if (task.status === "completed") {
  moveToBlock("archive");
}

// Move urgent tasks to priority section
if (task.priority === "urgent") {
  moveToBlock("urgent");
}
```

**Position Management:**
```javascript
// Move high-priority tasks to top
if (task.priority === "high") {
  moveToPosition("top");
}

// Move new tasks to appropriate priority position
moveToPosition("priority_based");
```

### Cross-Project Movement

**Project Transfer Logic:**
```javascript
// Move tasks to department-specific projects
switch (task.department) {
  case "engineering":
    moveToProject("eng-tasks");
    break;
  case "marketing":
    moveToProject("marketing-campaigns");
    break;
  case "sales":
    moveToProject("sales-activities");
    break;
}
```

**Lifecycle Management:**
```javascript
// Move tasks through project lifecycle
if (task.status === "planned") {
  moveToProject("backlog");
} else if (task.status === "in_progress") {
  moveToProject("active-work");
} else if (task.status === "completed") {
  moveToProject("completed-archive");
}
```

## Setup and Configuration

### Basic Task Movement

{% stepper %}
{% step %}
### Add Action to Automation
In your automation flow, click **+ Add Action** and select **Move Task**.
{% endstep %}

{% step %}
### Select Movement Type
Choose whether to move within project or to different project.
{% endstep %}

{% step %}
### Configure Target Location
Specify destination project, block, or position.
{% endstep %}

{% step %}
### Set Movement Conditions
Define when and how tasks should be moved.
{% endstep %}

{% step %}
### Configure Options
Set additional movement parameters and options.
{% endstep %}
{% endstepper %}

### Advanced Configuration Options

| Setting | Description | Use Case |
|---------|-------------|----------|
| **Source Project** | Current project containing the task | Multi-project workflows |
| **Target Project** | Destination project for the task | Cross-project handoffs |
| **Target Block** | Specific section within target project | Workflow stage organization |
| **Position** | Where to place task in target location | Priority-based ordering |
| **Preserve Metadata** | Keep assignees, due dates, tags | Maintain task context |
| **Update Status** | Change task status during move | Workflow progression |
| **Notification** | Alert team members of move | Transparency and communication |

## Common Use Cases

### Workflow Stage Progression

**Kanban Board Management:**
```
Trigger: Task status changed to "In Review"
Action: Move Task
From: "development" block
To: "review" block
Project: current project

Result: Automatic progression through development pipeline
```

**Sales Pipeline Movement:**
```
Trigger: Deal stage updated
Action: Move Task
From: current sales stage block
To: new sales stage block
Update Status: match new stage

Result: Visual sales pipeline progression
```

### Project Lifecycle Management

**Task Escalation:**
```
Trigger: Task overdue by 3 days
Action: Move Task
From: current assignee's project
To: "escalated-tasks" project
Block: "urgent-attention"
Assignee: manager

Result: Automatic escalation of overdue work
```

**Department Handoff:**
```
Trigger: Task status changed to "Ready for QA"
Action: Move Task
From: "development" project
To: "quality-assurance" project
Block: "pending-review"
Assignee: QA team lead

Result: Smooth handoff between departments
```

### Priority-Based Organization

**Dynamic Prioritization:**
```
Trigger: Task priority changed to "Critical"
Action: Move Task
To: "critical-priority" block
Position: top of block
Add Tag: "urgent"

Result: Immediate visibility for critical tasks
```

**Time-Based Movement:**
```
Trigger: Task due date within 24 hours
Action: Move Task
To: "due-soon" block
Position: priority order
Send Notification: assignee

Result: Proactive due date management
```

## Advanced Movement Patterns

### Conditional Movement Logic

**Complex Routing Rules:**
```javascript
function routeTask(task) {
  // Multi-criteria movement logic
  if (task.priority === 'critical' && task.department === 'engineering') {
    return moveToProject('emergency-fixes');
  } else if (task.type === 'feature' && task.size === 'large') {
    return moveToBlock('major-features');
  } else if (task.overdue && task.assignee.workload > 80) {
    return moveToProject('overflow-queue');
  } else {
    return moveToBlock('standard-workflow');
  }
}
```

### Bulk Movement Operations

**Category-Based Movement:**
```json
{
  "movement_rules": [
    {
      "condition": "tag:marketing",
      "action": "move_to_project",
      "target": "marketing-campaigns"
    },
    {
      "condition": "due_date:today",
      "action": "move_to_block",
      "target": "urgent-today"
    },
    {
      "condition": "status:completed",
      "action": "move_to_project",
      "target": "completed-archive"
    }
  ]
}
```

### Automated Archive Management

**Smart Archiving:**
```
Trigger: Task completed AND older than 30 days
Action: Move Task
To: "archive-{current_year}" project
Block: "{completion_month}"
Remove from active dashboards

Result: Automatic archive organization
```

## Integration Examples

### CRM System Integration

**Lead Processing Workflow:**
```
CRM → Taskade Move Task
├── New leads → Move to "qualification" block
├── Qualified leads → Move to "sales" project
├── Won deals → Move to "implementation" project
└── Lost deals → Move to "follow-up" block

Result: Automated lead-to-customer pipeline
```

### Help Desk Integration

**Support Ticket Routing:**
```
Help Desk → Taskade Move Task
├── Bug reports → Move to "engineering" project
├── Feature requests → Move to "product" project
├── Billing issues → Move to "finance" project
└── Account changes → Move to "support" block

Result: Intelligent ticket routing and assignment
```

### Project Management Integration

**Jira Integration:**
```
Jira → Taskade Move Task
├── Story completed → Move to "testing" block
├── Bug fixed → Move to "verification" block
├── Epic done → Move to "completed" project
└── Sprint ended → Move to "retrospective" block

Result: Synchronized project management workflow
```

---

## Best Practices

### Movement Strategy Design

**Logical Organization:**
- **Clear Destination Rules** - Define specific conditions for each movement
- **Consistent Naming** - Use standardized project and block names
- **Hierarchical Structure** - Maintain logical organization levels
- **Scalable Rules** - Design for team growth and process evolution

### Performance Optimization

**Efficient Movement:**
- **Batch Operations** - Move multiple related tasks together
- **Conditional Logic** - Avoid unnecessary movements
- **Index Optimization** - Use efficient search criteria
- **Async Processing** - Handle large movements asynchronously

### Team Communication

**Movement Transparency:**
- **Automatic Notifications** - Alert relevant team members
- **Movement Logging** - Track task movement history
- **Status Updates** - Update task status during movement
- **Context Preservation** - Maintain all task metadata

## Troubleshooting

### Common Movement Issues

**Permission Errors:**
- ✅ Verify user access to source and target projects
- ✅ Check project sharing and permission settings
- ✅ Ensure automation has proper access rights
- ✅ Validate workspace membership

**Movement Failures:**
- ✅ Confirm target project/block exists
- ✅ Check for circular movement patterns
- ✅ Verify task is not locked or in use
- ✅ Ensure movement doesn't violate business rules

**Performance Issues:**
- ✅ Limit bulk movement sizes
- ✅ Implement movement throttling
- ✅ Monitor automation performance
- ✅ Use async processing for large operations

### Monitoring and Analytics

**Movement Metrics:**
```json
{
  "movement_analytics": {
    "total_movements": 1247,
    "average_move_time": "1.8 seconds",
    "most_common_destinations": ["completed", "urgent", "review"],
    "peak_movement_times": "9-11 AM",
    "success_rate": "98.7%"
  }
}
```

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Define Movement Requirements
Identify when and why tasks need to be moved.
{% endstep %}

{% step %}
### Design Movement Rules
Create logic for task relocation decisions.
{% endstep %}

{% step %}
### Set Up Automation Actions
Configure Move Task actions in your workflows.
{% endstep %}

{% step %}
### Test Movement Logic
Verify tasks move to correct locations.
{% endstep %}

{% step %}
### Monitor and Optimize
Track movement performance and refine rules.
{% endstep %}

{% step %}
### Scale Implementation
Expand to additional workflows and teams.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: The Move Task action is fundamental to maintaining organized, efficient workflows. Use it to create dynamic task management systems where work automatically flows to the right place at the right time. The key is designing clear movement rules that reflect your team's actual work processes and communication preferences. Start simple and gradually add sophistication as you understand your workflow patterns.
