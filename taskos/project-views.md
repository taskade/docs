# Project Views Explained

Taskade stores information in a flexible tree-structured database. The **same data** can be visualized in multiple ways to suit different workflows. These presentation modes are called **Project Views**.

**[Projects & Databases Guide →](https://help.taskade.com/en/articles/12166149-projects-databases-the-memory-pillar)**

## Views Reference

| View | Best For | Key Interactions | Use Cases |
|------|----------|------------------|-----------|
| **List** | Linear task lists, meeting agendas | Drag-to-indent / reorder, checkboxes | To-do lists, meeting notes, SOPs |
| **Board** | Kanban workflows, pipelines | Drag cards between columns | Sales pipelines, project stages, sprint boards |
| **Table** | Spreadsheet-style databases | Inline edit custom fields, sort & filter | CRM, inventory, contact lists |
| **Calendar** | Scheduling & deadlines | Drag tasks on calendar, date pickers | Content calendars, event planning, deadlines |
| **Mind Map** | Brain-storming & hierarchical planning | Radial drag to create branches | Strategy planning, idea mapping, research |
| **Org Chart** | Organizational hierarchies | Expand / collapse levels | Team structures, reporting lines, decision trees |
| **Action** | Mobile-friendly task capture | Quick-add, swipe to complete | Daily tasks, quick capture, on-the-go |
| **Gantt** | Timeline & dependency tracking | Resize bars to adjust durations | Project timelines, resource planning, dependencies |

All views are backed by the **same underlying data**—update a task in one view and it instantly updates everywhere, thanks to Taskade's real-time engine.

> 💡 **Tip:** Use the `/view` slash-command or the View switcher in the top-right corner of any project to toggle between visualizations.

## Field Types Reference

Projects support custom fields for structured data storage:

| Field Type | Description | Use Cases |
|------------|-------------|-----------|
| **Text** | Single or multi-line text | Names, descriptions, notes |
| **Number** | Numeric values | Prices, quantities, scores |
| **Date** | Date and time values | Deadlines, schedules, milestones |
| **Select** | Dropdown options (single/multi) | Status, categories, priorities |
| **Person** | Team member assignment | Assignees, owners, reviewers |
| **Checkbox** | True/false toggle | Completion flags, approvals |
| **URL** | Web links | References, resources, documents |
| **Email** | Email addresses | Contact information |
| **Phone** | Phone numbers | Contact information |
| **File** | Attachments | Documents, images, assets |
| **Formula** | Calculated values | Totals, averages, derived data |
| **Relation** | Links to other projects | Dependencies, parent/child relationships |

## View Selection Guide

| If You Need To... | Use This View |
|-------------------|---------------|
| Track tasks with subtasks | List |
| Visualize workflow stages | Board |
| Manage structured data | Table |
| Plan by date | Calendar or Gantt |
| Brainstorm ideas | Mind Map |
| Show team hierarchy | Org Chart |
| Quick mobile capture | Action |

### API Considerations

The REST and GraphQL APIs expose **data only**; view choice is a client-side concern. Use the `view` query parameter in certain list endpoints (or the `X-Taskade-View` header) to request server-optimized payloads for large Gantt or Calendar renders.

**[API Documentation →](https://www.taskade.com/api/documentation/)**

---
