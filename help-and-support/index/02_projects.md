---
description: >-
  Taskade projects hold your tasks, notes, and data. Show one project in multiple project views: List, Board, Table, Mind Map, and more.
title: 'Chapter 2: Projects - Your Data Containers'
---

# Chapter 2: Projects - Your Data Containers

Chapter 1 explained your workspace. This chapter explains **projects**. A project is the place where you keep your tasks, notes, and data. You can show one project in different layouts for different types of work.

## What Problem Do Projects Solve?

**Many tools give you only one format:**

* A spreadsheet is good for data, but not for brainstorming
* A kanban board is good for workflows, but not for deep hierarchies
* A document is good for writing, but not for task management

**A Taskade project can change its layout.** The same data can show as a spreadsheet, a kanban board, a calendar, or a mind map. A change of view does not copy or change your data.

## What is a Project? (The Smart Container Concept)

A project in Taskade holds your information in a tree structure. You can show the same data in **multiple project views**.

Each view shows the same tree in a different way:

* **📋 List**: Tasks in a hierarchy
* **📊 Board**: Kanban columns for a workflow
* **📈 Table**: Rows and columns, like a spreadsheet
* **🧠 Mind Map**: Ideas on branches, for brainstorming
* **📝 Docs**: A document for long-form writing
* **📅 Calendar**: Tasks by date
* **📊 Gantt Chart**: Tasks on a timeline
* **⚡ Actionsheet**: A simple spreadsheet
* **🏗️ Org Chart**: A top-down hierarchy

**Projects are:**

* **📚 Containers**: A project holds tasks, notes, files, and custom fields
* **🔄 One data set, many views**: A new view does not change the data
* **🧬 Part of Workspace DNA**: Projects are the Memory of your workspace, and your agents and automations use them
* **🤝 Team spaces**: Your team edits the project together in real time

## How Projects Work (The Tree Structure)

**Internally, every project is a tree of items:**

```
📁 Your Project
├── 📝 Task 1 (with notes, dates, assignees)
│   ├── 🔸 Subtask A
│   ├── 🔸 Subtask B
│   └── 📎 Attachment
├── 📝 Task 2 (with custom fields, comments)
│   ├── 🔸 Follow-up item
│   └── 🔗 Link to document
└── 📝 Task 3 (with images, files)
    └── 🔸 Reminder note
```

**You can show this same tree as:**

* A **List** for step-by-step workflows
* A **Board** for visual project management
* A **Table** for data analysis
* A **Calendar** for timeline planning

## Creating Your First Project (Step-by-Step)

**Do these steps to create a project:**

{% stepper %}
{% step %}
#### Access Project Creation

Open your workspace or folder. Then click **+** next to **Projects** in the sidebar.
{% endstep %}

{% step %}
#### Choose Your Starting Point

Select one of these options:

* **AI Project**: Describe the project, and AI builds it
* **Start Blank**: Start with an empty project
* **Use Template**: Start from a ready-made structure
* **Import**: Import data from other tools

The AI Project option uses AI credits. A new Free account starts with 0 AI credits. On Free, you earn free AI credits with referrals and invites, and you can upgrade any time.
{% endstep %}

{% step %}
#### Name and Describe

Give your project a clear name. You can also add a description. A description helps the AI in your workspace understand the purpose of the project.
{% endstep %}

{% step %}
#### Add Your First Content

Add a task, a note, or an idea. Your project is ready to use.
{% endstep %}
{% endstepper %}

## The Project Views (Choose Your Perspective)

Each view shows your data in a different way. This section tells you when to use each view. List, Board, Table, and Mind Map sit in the toolbar as tabs. Docs, Gantt Chart, Calendar, Actionsheet, and Org Chart sit under **More views**. Gantt Chart, Actionsheet, and Org Chart need a paid plan. If you can edit the project, the view that you pick becomes its default view.

### List View - The Foundation

**Use it for:** Step-by-step processes, checklists, meeting agendas

```
📋 Product Launch Plan
├── 🎯 Research Phase
│   ├── Market analysis
│   └── Competitor review
├── 🎨 Design Phase
│   ├── Wireframes
│   └── User testing
└── 🚀 Launch Phase
    ├── Marketing campaign
    └── Go-live checklist
```

### Board View - Visual Workflow

**Use it for:** Project management, sales pipelines, content workflows

```
📝 Backlog    🔄 In Progress    ✅ Done
├── Task A    ├── Task B        ├── Task C
├── Task D    └── Task E        └── Task F
└── Task G
```

### Table View - Data Analysis

**Use it for:** Metrics, inventory, data analysis

```
| Task | Status | Priority | Due Date | Assignee |
|------|--------|----------|----------|----------|
| Launch website | In Progress | High | 2024-02-01 | Sarah |
| Write blog post | Backlog | Medium | 2024-02-15 | Mike |
| Update database | Done | Low | 2024-01-30 | Alex |
```

### Calendar View - Time Management

**Use it for:** Deadlines, events, schedules, time blocks

```
February 2024
├── 1st: Project kickoff meeting
├── 5th: Design review
├── 12th: Client presentation
└── 20th: Product launch
```

### Mind Map View - Creative Thinking

**Use it for:** Brainstorming, new ideas, visual plans

```
🎯 Main Goal
├── 💡 Idea A
│   ├── Detail 1
│   └── Detail 2
├── 💡 Idea B
│   ├── Option X
│   └── Option Y
└── 💡 Idea C
```

### Org Chart View - Hierarchical Structure

**Use it for:** Team structures, decision trees, organizational charts. Org Chart needs a paid plan.

```
👔 CEO
├── 📊 CTO
│   ├── 💻 Lead Developer
│   └── 🎨 UI Designer
└── 📈 CMO
    ├── 📢 Marketing Manager
    └── 📱 Social Media Specialist
```

### Gantt Chart View - Project Scheduling

**Use it for:** Large projects, task dependencies, resource plans. Gantt Chart needs a paid plan.

```
Task A: Jan 1-5    [█████░░░░░]
Task B: Jan 3-8    [░░█████░░░] (depends on Task A)
Task C: Jan 6-10   [░░░░█████] (depends on Task B)
```

### Actionsheet View - Focused Execution

**Use it for:** Simple CRMs, task lists, and quick reviews. Actionsheet is a simpler form of Table view. Actionsheet needs a paid plan.

```
| Task           | Status      | Due      |
|----------------|-------------|----------|
| Call client    | Done        | Today    |
| Write report   | In progress | Today    |
| Review budget  | Pending     | Tomorrow |
```

## Custom Fields (Adding Intelligence to Your Data)

**Add custom fields to store more data on each task:**

```yaml
Project: Customer Onboarding
Custom Fields:
  - Customer Name: Text field
  - Priority Level: Dropdown (Low/Medium/High)
  - Contract Value: Number field
  - Next Follow-up: Date field
  - Account Manager: People field
  - Deal Stage: Status field (Lead/Qualified/Closed)
```

**Custom fields show in all views. Your data stays the same in each view.**

## Templates (Starting Smart, Not From Scratch)

**Taskade has hundreds of ready-made templates:**

* **📋 Project Management**: Agile sprints, product roadmaps, client projects
* **🎯 Sales & Marketing**: Lead tracking, campaign plans, content calendars
* **💼 Business Operations**: HR onboarding, inventory management, meeting agendas
* **🎨 Creative Work**: Design briefs, video production, content plans
* **📚 Personal**: Goals, habit tracking, reading lists

**A template is a starting point. You can change it to fit your work.**

## Real-Time Collaboration (Working Together, Instantly)

**In a shared project:**

* **👥 Many people edit at the same time** without conflicts
* **💬 Comments and discussions** stay next to the work
* **📎 Files and attachments** stay in the project
* **🔄 Changes sync at once** to all devices
* **📱 Mobile and desktop apps** show the same project

## How Projects Connect to Your Workspace DNA

**Chapter 1 explains Workspace DNA. Projects are its Memory part:**

### Intelligence Inheritance

* **AI agents** read your projects when you add them as agent knowledge
* **Suggestions** come from your work patterns
* **A project event**, such as a new assigned task, can start an automation

### Knowledge Connection

* **Insights across projects** help you see patterns
* **Related content** shows as a suggestion
* **Search** finds content in all your projects

### Growth Adaptation

* **A project** can grow from a simple list into a complex application
* **You can change the view** when your needs change

## Advanced Project Techniques

### Nested Projects (Breaking Down Complexity)

```
📁 Main Project
├── 📁 Research Phase
│   ├── 📄 Market Analysis
│   └── 📄 User Interviews
├── 📁 Development Phase
│   ├── 📄 Design Specs
│   └── 📄 Code Repository
└── 📁 Launch Phase
    ├── 📄 Marketing Plan
    └── 📄 Success Metrics
```

### Project Linking (Creating Connections)

* **Link related projects** so that a change in one project updates the others
* **Share sections** across projects
* **Refer to other projects** without a copy of their content

### Smart Organization

* **Tags and labels** sort your items into groups
* **Sort and filter** controls show items in the order that you pick
* **Saved views** keep a different view for different team members

## How Projects Work Internally

**Internally, Taskade does these things with each project:**

* **Stores it as a tree** of items in a tree-structured database
* **Syncs it in real time** to every device that has the project open
* **Keeps a version history** and merges changes when two people edit at the same time
* **Gives access through the API**, so other software can read and change projects
* **Adds new content to search** at once, so search finds it

**You do not need to know these details to use projects.**

## Common Project Patterns (Real-World Examples)

### Pattern 1: Client Project Hub

```
📁 Client ABC Project
├── 📋 Project Timeline (List View)
├── 📊 Task Board (Board View)
├── 📈 Budget Tracker (Table View)
├── 📅 Key Dates (Calendar View)
└── 🤖 Project Assistant (AI Agent)
```

### Pattern 2: Personal Productivity System

```
📁 My Life OS
├── 🎯 Goals & Objectives (Mind Map)
├── 📝 Daily Tasks (Actionsheet)
├── 📚 Knowledge Base (List View)
├── 💰 Budget & Finance (Table View)
└── 📅 Important Dates (Calendar View)
```

### Pattern 3: Team Sprint Management

```
📁 Development Sprint
├── 📋 Sprint Backlog (List View)
├── 📊 Sprint Board (Board View)
├── 📈 Burndown Chart (Table View)
├── 📅 Sprint Calendar (Calendar View)
└── 🏗️ Team Structure (Org Chart)
```

## How Projects Change as You Work

**A project changes with your work:**

* **If you can edit the project**, the view that you pick becomes its default view
* **Task patterns** help Taskade predict your next task
* **Team preferences** stay saved, and Taskade applies them again
* **Automation ideas** show as suggestions

You now know how projects hold your data. One project can show the same data in different views.

In [Chapter 3: AI Agents](03_ai_agents.md), you meet AI agents. Agents are assistants that work on your projects with you.

***

_Switch between views to see your data in different ways. Each view shows the same data._

[← Back to Chapter 1: Workspaces](01_workspaces.md) | [Next: AI Agents →](03_ai_agents.md)

---

_Step-by-step guides on taskade.com/learn: [Create a Project](https://www.taskade.com/learn/projects/create-project), [What Are Project Views?](https://www.taskade.com/learn/projects/project-views), [Projects & Databases: The Memory Pillar](https://www.taskade.com/learn/projects/databases)._
