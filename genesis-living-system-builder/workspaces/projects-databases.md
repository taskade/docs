# Projects & Databases: The Memory Pillar

---

## Table of Contents

- [Overview](#overview)
- [What Are Database Projects?](#what-are-database-projects)
- [Genesis-Generated Databases](#genesis-generated-databases)
- [8 Project Views](#8-project-views)
- [Manual Database Creation](#manual-database-creation)
- [Importing Data](#importing-data)
- [Automated App Workflows](#automated-app-workflows)
- [AI Agents in App Databases](#ai-agents-in-app-databases)
- [How Memory Powers Your Entire Workspace](#how-memory-powers-your-entire-workspace)
- [Best Practices](#best-practices)
- [What's Next](#whats-next)

---

## Overview

Projects & Databases are the **Memory pillar** of your Workspace DNA — one of three pillars (Memory/Projects, Intelligence/Agents, Execution/Automations) forming the [Tree of Life architecture](../genesis/how-genesis-works.md#the-tree-of-life-architecture). They store, structure, and persist the information that powers every Genesis app, AI agent, and automation flow.

> **DNA Impact:** Each project adds **+2 points** to your [Intelligence Score](../genesis/how-genesis-works.md#workspace-intelligence-score) (up to 10 projects = 20 points max from the Memory pillar).

---

## What Are Database Projects?

Database projects are structured data containers that serve as your app's persistent memory. Unlike regular documents, they have:

| Feature | Description |
|---|---|
| **Custom fields** | Define field types: text, number, date, select, multi-select, checkbox, URL |
| **Relationships** | Link records across databases (e.g., customers ↔ orders) |
| **Views** | List, board, table, calendar, and more |
| **Filters & sorts** | Find and organize data dynamically |
| **Permissions** | Control who can view and edit data |
| **API access** | Programmatic access for integrations (Business+) |
| **Real-time sync** | Changes reflect instantly across all connected apps and agents |
| **Revision tracking** | Every change tracked via operational transform (OT) |

---

## Genesis-Generated Databases

When Genesis builds an app, it **automatically creates the database structures** your app needs:

| App Type | Databases Created | Fields Generated |
|---|---|---|
| **Customer Feedback** | Feedback entries, Contacts | Rating (number), Comment (text), Category (select), Status (select), Photo (media), Contact info (text), Timestamp (date) |
| **Booking System** | Appointments, Clients, Services | Date/time (date), Client (relation), Service (select), Status (select), Price (number), Notes (text) |
| **CRM** | Leads, Deals, Contacts | Name (text), Email (text), Stage (select), Value (number), Source (select), Last contact (date), Score (number) |
| **Inventory** | Products, Suppliers, Orders | SKU (text), Name (text), Quantity (number), Reorder level (number), Supplier (relation), Price (number) |
| **Help Desk** | Tickets, Agents, Categories | Title (text), Description (text), Priority (select), Status (select), Assignee (relation), SLA (date) |
| **Course Platform** | Courses, Students, Enrollments | Title (text), Content (text), Progress (number), Grade (number), Status (select), Certificate (checkbox) |

> **Fully automatic:** You don't need to define these structures. Genesis infers them from your prompt and creates optimized schemas.

---

## 8 Project Views

Every project database supports 8 different views — switch between them without changing your data:

| View | Description | Best For |
|---|---|---|
| **Table** | Structured spreadsheet-like format with filtering, sorting, grouping, and aggregations | Data management, CRM, inventory |
| **List** | Vertical list/to-do format with checkboxes and hierarchy | Task management, checklists, notes |
| **Board** | Kanban columns for workflow stages (drag-and-drop) | Pipeline management, sprints, status tracking |
| **Calendar** | Events on calendar grid for deadline tracking | Scheduling, appointments, content calendars |
| **Gantt** | Timeline with task duration, dependencies, and progress tracking | Project planning, timelines, milestones |
| **Mindmap** | Connected nodes radiating from center for visualization | Brainstorming, concept mapping, planning |
| **Orgchart** | Hierarchical organizational structure | Team structure, process hierarchy |
| **Action Sheet** | Compact action-oriented format | Quick task management |

> **Tip:** In Genesis apps, you can specify which view to use: "Display the customer database as a kanban board with columns for Lead, Qualified, Proposal, Won."

---

## Manual Database Creation

You can also create databases manually:

### Step-by-Step Tutorial

| Step | Action |
|---|---|
| 1 | Create a new project in your workspace |
| 2 | Switch to **Table** view for structured data |
| 3 | Click "+" on column headers to add custom fields |
| 4 | Define field types and options (see table below) |
| 5 | Add records manually, via import, or via automations |
| 6 | Switch between views (Board, Calendar, Gantt, etc.) as needed |
| 7 | Set permissions (who can view, edit) |

### Available Field Types

| Field Type | Use Case | Example | Formatting Options |
|---|---|---|---|
| **Text (String)** | Names, descriptions, notes | Customer name, product description | Plain text |
| **Number** | Quantities, prices, scores | Stock level, deal value, rating | Decimal, currency ($, EUR), percent (%) |
| **DateTime** | Deadlines, timestamps, schedules | Due date, appointment time | Date only, date + time |
| **Select** | Single-choice categories | Status, priority, category | Color-coded options |
| **Multi-select** | Multiple tags/categories | Skills, interests, tags | Color-coded options |
| **Checkbox** | Boolean yes/no states | Completed, approved, active | Toggle |
| **URL** | Web links | Website, profile link | Clickable link |
| **Person** | Team member assignment | Assignee, reviewer, owner | Workspace member picker |

### Task Addons (Beyond Custom Fields)

| Addon | What It Does | Where It Appears |
|---|---|---|
| **Due dates** | Start and end dates with optional times | All views |
| **Assignees** | Assign tasks to team members | All views |
| **Labels/Tags** | Color-coded tags for categorization | All views |
| **Timers** | Track time spent on tasks | List, Table views |
| **Custom fields** | Any field type from the table above | Table view (configurable per view) |
| **Comments** | Thread discussions on any task | Task detail view |

### Task Content Types

| Format | Style | Use For |
|---|---|---|
| **h1** | Heading 1 | Section titles |
| **h2** | Heading 2 | Sub-sections |
| **text** | Paragraph | Descriptions, notes |
| **checkbox** | Checkable task | To-do items |
| **circle-check** | Circle checkbox | Alternative task style |
| **bullet** | Bullet list | Unordered lists |
| **number** | Numbered list | Ordered steps |
| **alpha** | Alphabetical list | Lettered items |

---

## Importing Data

Bring existing data into your projects:

| Method | Format | Best For |
|---|---|---|
| **File upload** | CSV, XLSX | Bulk data import from spreadsheets |
| **Copy-paste** | Structured text | Quick data entry |
| **API import** | JSON via API (Business+) | Programmatic data migration |
| **Automation** | From connected tools | Ongoing data sync from Google Sheets, CRM, etc. |
| **Genesis prompt** | Natural language | "Import the customer data from the uploaded spreadsheet" |

---

## Automated App Workflows

Genesis databases work as live data stores within automation flows:

### Booking System Example

| Trigger | Action | Database Impact |
|---|---|---|
| New booking form submitted | Create appointment record | Appointments database: new row added |
| Payment confirmed | Update status to "Confirmed" | Appointments database: status field updated |
| 24 hours before appointment | Send reminder notification | Read from Appointments database |
| Appointment completed | Request feedback | Create entry in Feedback database |

### CRM Example

| Trigger | Action | Database Impact |
|---|---|---|
| Lead form submitted | Create lead record with score | Leads database: new row with AI-scored qualification |
| Lead unresponsive 48 hours | Send follow-up email | Read from Leads database, update Last Contact date |
| Lead qualified | Move to deals pipeline | Create record in Deals database, link to Lead |
| Deal closed | Update status, notify team | Deals database: status to "Won", Slack notification |

### Inventory Example

| Trigger | Action | Database Impact |
|---|---|---|
| Stock below threshold | AI agent calculates optimal reorder | Products database: read stock level |
| Reorder approved | Email supplier, create PO | Orders database: new purchase order record |
| Shipment received | Update stock levels | Products database: quantity updated |
| Sales data captured | Analyze patterns | Products database: sales history enriched |

---

## AI Agents in App Databases

AI agents interact with your databases as living knowledge:

| Integration | How It Works | Example |
|---|---|---|
| **Knowledge source** | Connect project as agent knowledge | Support agent trained on ticket history database |
| **Data entry** | Agent creates records via tools | Agent logs customer interactions to CRM database |
| **Data retrieval** | Agent queries databases for answers | Agent looks up order status from Orders database |
| **Analysis** | Agent identifies patterns in data | Agent analyzes feedback trends from Feedback database |
| **Updates** | Agent modifies records based on logic | Agent escalates tickets by updating priority field |

> **Dynamic knowledge:** When agents are connected to project databases, they always have the latest data — no re-training needed. See [Agent Knowledge & Memory](../ai-features/agent-knowledge.md#dynamic-knowledge-projects).

---

## How Memory Powers Your Entire Workspace

| Memory Source | What It Feeds | Result |
|---|---|---|
| **Project databases** | Genesis app UI, forms, dashboards | Apps display and interact with real data |
| **Project databases** | AI agent knowledge | Agents answer questions with current data |
| **Project databases** | Automation triggers | Workflows fire based on data changes |
| **Automation results** | Project databases (writes back) | New data from automations enriches memory |
| **Agent conversations** | Project databases (logs) | Interaction data becomes new memory |
| **User interactions** | Project databases (captures) | App usage generates valuable business data |

> **The feedback loop:** Every interaction with your Genesis app writes data back to projects, which agents read, which improves automations, which captures more data. This is the [self-reinforcing feedback loop](../genesis/how-genesis-works.md#the-self-reinforcing-feedback-loop) in action.

---

## Best Practices

| Practice | Why | How |
|---|---|---|
| **Keep data focused** | Prevents bloated, confusing databases | One database per entity type (Customers, Orders, Products) |
| **Plan for growth** | Databases scale with your business | Define fields that accommodate future data |
| **Control access** | Protects sensitive information | Set permissions per project (who can view, edit) |
| **Use relationships** | Connects data meaningfully | Link Customers ↔ Orders ↔ Products via relation fields |
| **Name fields clearly** | Makes agent queries more accurate | "Customer Email" not "Field 3" |
| **Clean data regularly** | Prevents stale knowledge | Archive old records, update outdated entries |
| **Connect to agents** | Maximizes DNA value | Every important database should be agent knowledge |
| **Use automations to write** | Keeps data current automatically | Form submissions → auto-create records |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Automations: The Execution Pillar](../automation/README.md) | Build workflows that read/write to your databases |
| [Agent Knowledge & Memory](../ai-features/agent-knowledge.md) | Connect databases as agent knowledge |
| [Adding Genesis Context](../genesis/adding-context.md) | Import data files to kickstart your databases |
| [How Genesis Works](../genesis/how-genesis-works.md) | Understand how Memory fits in the Tree of Life |
