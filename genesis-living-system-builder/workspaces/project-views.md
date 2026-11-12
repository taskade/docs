---
description: >-
  Show one Taskade project as a List, Board, Table, Calendar, Mind Map, Gantt Chart, and more. Learn the field types and Fill with AI.
---

# Project Views Explained

You can show the **same project data** in many ways. Each way is a **project view**. When you change the view, Taskade does not copy or change your data.

**[Projects & Databases Guide →](https://www.taskade.com/learn/projects/databases)**

{% hint style="success" %}
Your data stays in one place. Each view shows a different part of the same project. You can change the view at any time, and you lose no data.
{% endhint %}

## Views Reference

| View | Best For | Key Interactions |
|------|----------|------------------|
| **List** | Lists of tasks in order. Examples: to-do lists, meeting notes, SOPs. | Drag to indent or move tasks, checkboxes |
| **Board** | Kanban stages and pipelines. Examples: sales pipelines, project stages, sprint boards. | Drag cards from one column to the next |
| **Table** | Rows and columns of data. Examples: CRM, inventory, contact lists. | Edit custom fields in the cell, sort and filter, select many rows (Shift-click or Cmd-click) and delete them, with undo |
| **Mind Map** | Brainstorms and plans in levels. Examples: strategy plans, idea maps, research. | Drag out from the center to add branches |
| **Docs** | Long documents and wikis. Examples: specs, knowledge bases, proposals, SOPs. | One continuous rich-text page with headings and embeds |
| **Calendar** | Schedules and deadlines. Examples: content calendars, events, deadlines. | Drag tasks onto dates, date pickers |
| **Gantt Chart** (paid plans) | Timelines and dependencies. Examples: project timelines, resource plans, dependencies. | Drag the ends of a bar to change its duration |
| **Actionsheet** (paid plans) | Simple lists in a sheet. Examples: small client lists, lead trackers, task queues. | Change the size, order, and visibility of columns |
| **Org Chart** (paid plans) | Trees of levels. Examples: team structures, reporting lines, decision trees. | Expand or collapse levels |

List, Board, Table, and Mind Map are tabs in the project toolbar. Docs, Calendar, Gantt Chart, Actionsheet, and Org Chart are under **More views**. Gantt Chart, Actionsheet, and Org Chart need a paid plan. The timeline is part of the Gantt Chart view. It is not a separate view.

If you can edit the project, the view that you pick becomes its default view.

All views use the **same data**. When you change a task in one view, Taskade shows the change in all views at once.

> 💡 **Tip:** To change the view, click a view tab in the project toolbar or open the **More views** menu. To go to the next view, press `⌘/Ctrl + Shift + .`. To go to the previous view, press `⌘/Ctrl + Shift + ,`.

> 📤 **Export any view.** Open the project's **⋯ More menu > Export**. Export works in every view that you can open, on all plans. This includes Mind Map, Board, and Calendar. A CSV export gives one row for each task (depth, text, note, completed), for spreadsheets and BI tools. A Markdown export keeps the outline.

## When to Use Each View

This section tells you which view to use for each type of work.

{% tabs %}
{% tab title="List" %}
**Use List when your work goes in steps or in levels.**

- Step-by-step processes and standard operating procedures
- Meeting agendas in a fixed order
- Checklists, outlines, and content plans
- Quick notes and new tasks that you sort later

Indent tasks to make a tree. Put the main categories at the top level. Put the sub-processes below them. Put the action items, with assignees and dates, at the lowest level.
{% endtab %}

{% tab title="Board" %}
**Use Board when your work moves through stages.**

- Kanban workflows and pipelines
- Status tracking, with a clear hand-off from one person or team to the next
- Sales leads and editorial workflows
- Sprints and project phases

Each column is a stage. Drag a card to the next column when the work moves forward. Keep card titles short and clear. Use few labels and assignees on each card, so that the board is easy to read.
{% endtab %}

{% tab title="Table" %}
**Use Table when you need rows of data that you can sort.**

- Records that you sort and filter
- CRM, contact lists, and inventory
- Budgets and money tracking
- Reports and analysis

Add custom fields (text, number, date, select, relationship, password, and more) to give each row a structure. Then sort and filter the rows to find what you need.
{% endtab %}

{% tab title="Calendar" %}
**Use Calendar when dates are important.**

- Events and schedules
- Deadlines and milestones
- Editorial calendars and content plans
- Personal time blocks

Drag tasks onto dates. Change between the day, week, and month modes to see details or the full period.
{% endtab %}

{% tab title="Mind Map" %}
**Use Mind Map when you think about ideas before you act.**

- Brainstorms and new ideas
- Maps of concepts and knowledge
- Creative plans and problem solving

Put the main topic at the center. Add a small number of main themes as branches. Then add specific ideas and next steps to each theme.
{% endtab %}

{% tab title="Org Chart" %}
**Use Org Chart to show levels and flow.** (Paid plans)

- Teams and reporting lines
- Decision trees and process flows
- Product groups and categories

Expand and collapse levels to see the full structure or the details.
{% endtab %}

{% tab title="Actionsheet" %}
**Use Actionsheet when you want a simple, fast spreadsheet.** (Paid plans)

- Small client lists and lead trackers
- Personal task queues that fit on one screen
- Simple logs of costs, quantities, or hours

Actionsheet is a simpler version of Table view. It has fewer columns, it is faster to read, and it uses the same project data.
{% endtab %}

{% tab title="Gantt" %}
**Use Gantt Chart when timelines and dependencies are important.** (Paid plans)

- Project schedules with dependencies
- Resource and capacity plans
- Milestones and progress reports

Drag the ends of a bar to change its duration. Link tasks to show which task must finish or start first (finish-to-start, start-to-start, finish-to-finish, start-to-finish).
{% endtab %}
{% endtabs %}

## Switching Views Across a Project's Lifecycle

A project often needs a different view at each stage. Here is a common order:

{% stepper %}
{% step %}
### Ideation
Use **Mind Map** to brainstorm. Then use **List** to write down and sort the ideas.
{% endstep %}

{% step %}
### Planning
Use **Gantt Chart** to make the timeline. Use **Table** to track resources and details.
{% endstep %}

{% step %}
### Execution
Use **Board** to move work through its stages. Use **Actionsheet** for a fast, simple list of action items.
{% endstep %}

{% step %}
### Review
Use **Calendar** to look back at the timeline. Use **Table** to review records and results.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Select the view that fits the job. Gantt Chart is too much for a simple checklist. Actionsheet is too simple for detailed plans. Table is too strict for open brainstorms. Use the same custom fields and names in all views, so that a change of view is easy.
{% endhint %}

## Focus Management: Hide Completed Tasks (List View)

You can hide completed tasks in a long project. The progress bar still shows your progress.

{% stepper %}
{% step %}
### Open project options
Click the three dots (···) in the top-right corner of your project.
{% endstep %}

{% step %}
### Toggle visibility
Select **Hide completed** from the menu.
{% endstep %}

{% step %}
### Track progress
The progress bar at the top still fills when you complete tasks, also when Taskade hides them.
{% endstep %}
{% endstepper %}

- You can set a default for all projects in a workspace. Each project can use a different setting.
- To complete a task, press `⌘ + Enter` (Mac) or `Ctrl + Enter` (Windows/Linux).

## Fill with AI (Table View)

In Table view, **Fill with AI** can fill text and Select columns for you. It reads the data that is already in each row.

| AI Action | What It Does | Example Use |
|-----------|--------------|-------------|
| **Translate** | Changes text into another language | Customer data in many languages |
| **Summarize** | Makes long text into short key points | Key points from customer feedback |
| **Extract** | Finds specific values in free text | Data entry without manual work |
| **Categorize** | Selects an option in a Select column | Records that you sort the same way |
| **Custom analysis** | Runs a prompt that you write on each row | Results for your specific business |

{% hint style="info" %}
Fill with AI uses the data in your table. Its results are suggestions. Review them before you use them, especially for decisions.
{% endhint %}

## Field Types Reference

You can add custom fields to a project to give its data a structure:

| Field Type | Description | Use Cases |
|------------|-------------|-----------|
| **Text** | One line of text | Names, descriptions, notes |
| **Number** | A number (decimal, currency, or unit format) | Prices, quantities, scores |
| **Date** | A calendar date picker | Deadlines, schedules, milestones |
| **Select** | One option from a list | Status, categories, priorities |
| **Relationship** | Link to a record in another project | Dependencies, parent and child records |
| **Password** | A hidden value that Taskade stores as a hash | Sign-in passwords for app users |

Each task also has built-in fields: **Assignee**, **Due Date**, **Attachments**, and the completed state of the task. Presets such as **Status**, **Priority**, and **Progress** add Select fields that are ready to use.

## View Selection Guide

| If You Need To... | Use This View |
|-------------------|---------------|
| Track tasks with subtasks | List |
| See the stages of your work | Board |
| Manage rows of data | Table |
| Plan by date | Calendar or Gantt Chart |
| Brainstorm ideas | Mind Map |
| Show team levels | Org Chart |
| Keep a simple list in a sheet | Actionsheet |

### API Considerations

The REST and GraphQL APIs give you **only the data**. The view is a choice in the app, not in the API.

**[API Documentation →](https://www.taskade.com/api/documentation/)**

**[REST API v1 Guide →](../../apis-living-system-development/comprehensive-api-guide/README.md)**

---

_Step-by-step guides on taskade.com/learn: [What Are Project Views?](https://www.taskade.com/learn/projects/project-views), [Custom Fields](https://www.taskade.com/learn/projects/custom-fields)._
