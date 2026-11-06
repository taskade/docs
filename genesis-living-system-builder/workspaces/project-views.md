---
description: >-
  Switch Taskade projects between List, Board, Table, Calendar, Mind Map, Gantt, and more views on the same data, plus custom field types and Fill with AI.
---

# Project Views Explained

Taskade stores information in a flexible tree-structured database. The **same data** can be visualized in multiple ways to suit different workflows. These presentation modes are called **Project Views**.

**[Projects & Databases Guide →](https://www.taskade.com/learn/projects/databases)**

{% hint style="success" %}
Your data lives in one place, but you can view it through many lenses. Switch views instantly — no conversion, no data loss. Each view simply emphasizes a different aspect of the same underlying tree.
{% endhint %}

## Views Reference

| View | Best For | Key Interactions |
|------|----------|------------------|
| **List** | Linear task lists, meeting agendas. Examples: to-do lists, meeting notes, SOPs. | Drag-to-indent / reorder, checkboxes |
| **Board** | Kanban workflows, pipelines. Examples: sales pipelines, project stages, sprint boards. | Drag cards between columns |
| **Table** | Spreadsheet-style databases. Examples: CRM, inventory, contact lists. | Inline edit custom fields, sort & filter, multi-select rows (Shift/Cmd-click) + bulk delete with undo |
| **Mind Map** | Brain-storming & hierarchical planning. Examples: strategy planning, idea mapping, research. | Radial drag to create branches |
| **Docs (Beta)** | Long-form documents & wikis. Examples: specs, knowledge bases, proposals, SOPs. | Continuous rich-text editing, headings, embeds |
| **Calendar** | Scheduling & deadlines. Examples: content calendars, event planning, deadlines. | Drag tasks on calendar, date pickers |
| **Gantt Chart** (paid plans) | Timeline & dependency tracking. Examples: project timelines, resource planning, dependencies. | Resize bars to adjust durations |
| **Actionsheet** (paid plans) | Simple spreadsheet-style lists. Examples: lightweight client lists, lead trackers, task queues. | Resize, reorder, and hide columns |
| **Org Chart** (paid plans) | Organizational hierarchies. Examples: team structures, reporting lines, decision trees. | Expand / collapse levels |

List, Board, Table, and Mind Map are tabs in the project toolbar. Docs (Beta), Calendar, Gantt Chart, Actionsheet, and Org Chart are under **More Views**. Gantt Chart, Actionsheet, and Org Chart need a paid plan. The timeline is part of the Gantt Chart view, not a separate view.

All views are backed by the **same underlying data** — update a task in one view and it instantly updates everywhere, thanks to Taskade's real-time engine.

> 💡 **Tip:** Use the view tabs in the project toolbar or the **More Views** menu to toggle between visualizations. Press `⌘/Ctrl + Shift + .` to go to the next view and `⌘/Ctrl + Shift + ,` to go to the previous one.

> 📤 **Export any view.** The project's **⋯ More menu > Export** works in every view you can open — including Mind Map, Board, and Calendar on all plans. CSV export flattens the task tree (depth, text, note, completed) for spreadsheets and BI tools; Markdown export preserves the outline.

## When to Use Each View

A short guide to the situations each view is built for.

{% tabs %}
{% tab title="List" %}
**Reach for List when work is linear or hierarchical.**

- Step-by-step processes and standard operating procedures
- Meeting agendas with clear progression
- Checklists, outlines, and content planning
- Quick task capture and brain dumps

Indent freely to build a tree: major categories at the top level, sub-processes beneath them, and specific action items (with assignees and dates) at the deepest level.
{% endtab %}

{% tab title="Board" %}
**Reach for Board when work moves through stages.**

- Kanban workflows and pipeline management
- Status tracking with clear hand-offs between people or teams
- Sales / lead management and editorial workflows
- Sprint and project-phase tracking

Each column is a stage; drag a card to move work forward. Keep card titles short and actionable, and limit labels and assignees per card so the board stays scannable.
{% endtab %}

{% tab title="Table" %}
**Reach for Table when you need structured, sortable data.**

- Database-like records with sorting and filtering
- CRM, contact lists, and inventory
- Budget and financial tracking
- Reporting and analysis

Define custom fields (text, number, date, select, relationship, password, and more) to give each row structure, then sort and filter to surface what matters.
{% endtab %}

{% tab title="Calendar" %}
**Reach for Calendar when timing matters.**

- Event planning and scheduling coordination
- Deadline and milestone tracking
- Editorial calendars and content planning
- Personal time blocking

Drag tasks onto dates and switch between daily, weekly, and monthly modes for detail vs. overview.
{% endtab %}

{% tab title="Mind Map" %}
**Reach for Mind Map when you're thinking, not yet executing.**

- Brainstorming and idea generation
- Concept and knowledge mapping
- Creative planning and problem solving

Put the core topic at the center, branch into a handful of main themes, then expand outward to specific ideas and next steps.
{% endtab %}

{% tab title="Org Chart" %}
**Reach for Org Chart to show hierarchy and flow.** (Paid plans)

- Organizational and reporting structures
- Decision trees and process flows
- Product hierarchies and categorization

Expand and collapse levels to move between the big picture and the details.
{% endtab %}

{% tab title="Actionsheet" %}
**Reach for Actionsheet when you want a simple, fast spreadsheet.** (Paid plans)

- Lightweight client lists and lead trackers
- Personal task queues you can scan on one screen
- Simple logs of costs, quantities, or hours

A streamlined companion to Table view: fewer columns, quicker to scan, on the same project data.
{% endtab %}

{% tab title="Gantt" %}
**Reach for Gantt Chart when timelines and dependencies are central.** (Paid plans)

- Project scheduling with dependencies
- Resource allocation and capacity planning
- Milestone tracking and progress reporting

Resize bars to adjust durations and link tasks to model dependency relationships (finish-to-start, start-to-start, finish-to-finish, start-to-finish).
{% endtab %}
{% endtabs %}

## Switching Views Across a Project's Lifecycle

The right view often changes as a project evolves. A common progression:

{% stepper %}
{% step %}
### Ideation
Use **Mind Map** to brainstorm, then **List** to capture and roughly organize the output.
{% endstep %}

{% step %}
### Planning
Use **Gantt** to lay out the timeline and **Table** to track resources and structured details.
{% endstep %}

{% step %}
### Execution
Use **Board** to manage workflow stages and **Actionsheet** for a fast, simple list of action items.
{% endstep %}

{% step %}
### Review
Use **Calendar** to look back across the timeline and **Table** to review records and outcomes.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Match the view to the job. Gantt is overkill for a simple checklist; Actionsheet is too lightweight for detailed planning; Table is restrictive for open-ended brainstorming. Keep custom fields and naming consistent so switching views stays seamless.
{% endhint %}

## Focus Management: Hide Completed Tasks (List View)

Keep long-running projects clutter-free by hiding completed tasks while still tracking progress.

{% stepper %}
{% step %}
### Open project options
Click the three dots (···) in the top-right corner of your project.
{% endstep %}

{% step %}
### Toggle visibility
Select **Hide completed** from the dropdown menu.
{% endstep %}

{% step %}
### Track progress
The progress bar at the top continues to fill as tasks are completed, even when they're hidden.
{% endstep %}
{% endstepper %}

- Set a default behavior for all projects in a workspace; individual projects can override it.
- Complete a task quickly with `⌘ + Enter` (Mac) or `Ctrl + Enter` (Windows/Linux).

## Fill with AI (Table View)

In Table View, **Fill with AI** can populate text and Select columns automatically by analyzing the data already in each row — turning the table into an AI-assisted processing tool.

| AI Action | What It Does | Example Use |
|-----------|--------------|-------------|
| **Translate** | Convert text into another language | Multi-language customer data |
| **Summarize** | Condense long text into key points | Turning feedback into takeaways |
| **Extract** | Pull specific values out of unstructured text | Automated data entry |
| **Categorize** | Auto-assign an option in a Select column | Consistent record organization |
| **Custom analysis** | Run a prompt you define against each row | Tailored, business-specific insights |

{% hint style="info" %}
Fill with AI works on the data in your table. Results are suggestions — review them before relying on them, especially for decisions.
{% endhint %}

## Field Types Reference

Projects support custom fields for structured data storage:

| Field Type | Description | Use Cases |
|------------|-------------|-----------|
| **Text** | One line of text | Names, descriptions, notes |
| **Number** | Numeric values (decimal, currency, or unit format) | Prices, quantities, scores |
| **Date** | Calendar date picker | Deadlines, schedules, milestones |
| **Select** | Pick a single option | Status, categories, priorities |
| **Relationship** | Link to another project | Dependencies, parent/child relationships |
| **Password** | Hashed sensitive value | Sign-in passwords for app users |

Every task also has built-in fields: **Assignee**, **Due Date**, **Attachments**, and the task's completed state. Presets such as **Status**, **Priority**, and **Progress** add ready-made Select fields.

## View Selection Guide

| If You Need To... | Use This View |
|-------------------|---------------|
| Track tasks with subtasks | List |
| Visualize workflow stages | Board |
| Manage structured data | Table |
| Plan by date | Calendar or Gantt |
| Brainstorm ideas | Mind Map |
| Show team hierarchy | Org Chart |
| Keep a simple spreadsheet-style list | Actionsheet |

### API Considerations

The REST and GraphQL APIs expose **data only**; view choice is a client-side concern.

**[API Documentation →](https://www.taskade.com/api/documentation/)**

**[REST API v1 Guide →](../../apis-living-system-development/comprehensive-api-guide/README.md)**

---

_Step-by-step guides on taskade.com/learn: [What Are Project Views?](https://www.taskade.com/learn/projects/project-views), [Custom Fields](https://www.taskade.com/learn/projects/custom-fields)._
