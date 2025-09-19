---
title: "How Database Projects Work"
description: "<h1 id=\"h_4ac84c885e\"><b>Overview</b></h1><p class=\"no-margin\">When Genesis creates an app, it automatically generates database projects that serve as..."
url: "https://help.taskade.com/en/articles/12166149-how-database-projects-work"
updated_at: "1757080555"
intercom_id: "12166149"
---

Overview

When Genesis creates an app, it automatically generates database projects that serve as your app's data layer. Those databases are perfect for apps like:

- Customer portals with client data and project history
​

- Booking systems with appointments and customer records
​

- Inventory apps with product catalogs and stock levels
​

- CRM applications with leads, contacts, and sales data

💡 Note: Database projects default to [the Table view]($1) for easy data management, but you can [switch between views]($1) at any time.

Using Database Projects

Genesis apps use database projects for:

- Smart data structure automatically created based on your app's needs
​

- Real-time synchronization between your app interface and database
​

- AI-powered insights from [agents trained on your  data]($1)
​

- [Automated workflows]($1) that respond to the actions within the app

Your workspaces and project become the single source of truth.

Data Management

Genesis-Generated Databases

When you create an app, Genesis automatically builds the required projects:

- Describe your app needs to Genesis in plain English.
​

- Genesis analyzes your requirements and generates projects to store data.
​

- [Custom fields and relationships]($1) are automatically configured.
​

- Your app launches with a fully functional database backend

You can also request a specific data structure in your prompts:

- `"Create a yoga studio booking app with a customer database, class schedule database, and instructor database."`
- `"Build a client portal for our agency with a client database, project database, and invoice database."`
- `"Make an inventory management system with a product database, supplier database, and order database."`

Manual Database Creation

Here's how to add new database projects to existing apps:

- Open your app in Taskade
​

- Click + New Project within the app's [dashboard view]($1).
​

- Choose a template, ask Taskade to generate a project, or start blank.
​

- Configure custom fields inside the project.
​

- Ask Genesis to connect to connect the database to the app.

Importing Data into App Databases

Transform existing business data into app-ready databases:

- Navigate to your app's dashboard.
​

- Got to Projects → Import → Import CSV.
​

- Upload your file (CSV, Excel, Google Sheets).
​

- Ask Genesis to use connect the database and adjust the custom fields.

App Database Automation

Automated App Workflows

Your app's database projects can trigger intelligent workflows.

For example, you can prompt Genesis in the chat to create:

Booking App Automations

- When appointment status → "Confirmed" → Send reminder email
​

- When new booking → Created → Notify staff and block calendar
​

- When payment → "Received" → Update booking status and send receipt

CRM App Automations

- When lead score → Above 80 → Assign to sales rep and create follow-up task
​

- When deal stage → "Proposal Sent" → Set 7-day follow-up reminder
​

- When client → "Inactive for 30 days" → Trigger re-engagement campaign

Inventory App Automations

- When stock level → Below minimum → Create purchase order
​

- When new product → Added → Update catalog and notify sales team
​

- When order → "Shipped" → Send tracking info to customer

These are just a handful of examples of what can be accomplished with automation flows. Experiment, try different approaches, and build your perfect setup!

AI Agents in App Databases

Your app's [custom AI agents]($1) can work directly with database data. Simply ask Genesis to [generate a new AI agent]($1) specifically for your app.

💡 Note: New to the concept of AI agents? Visit our [guide to Custom AI Agents ]($1)to learn everything you need to know to get stated.

Once you've created agents for your apps, you can ask them to:

- Data analysis: "Analyze this month's bookings and suggest optimization"
​

- Smart categorization: Automatically classify new leads or products
​

- Predictive insights: Forecast inventory needs or sales trends
​

- Data cleanup: Find and fix inconsistencies in customer records
​

- Content generation: Create product descriptions or email templates
​

- Decision support: Recommend next actions based on data patterns

💡 Note: Read our [guide to AI Agents Tools]($1) to learn more.

Best Practices for App Databases

Keep Data Focused

- One main purpose per database project
​

- Related data in the same project
​

- Clear naming conventions for fields
​

- Logical field ordering for user experience

Plan For Growth

- Add fields you might need later
​

- Use consistent data formats across apps
​

- Regular data cleanup and validation\

Control Access

- Control who can view the live app
​

- Separate admin vs. user permissions
​

- Secure sensitive data fields
​

- Implement role-based access control
​

- Limit who can edit the underlying data

😊 Helpful Links

- Download our apps: [taskade.com/downloads]($1)
​

- Leave feedback: [taskade.com/feedback]($1)
​

- Changelog: [taskade.com/blog/updates]($1)
​

- Watch tutorials: [youtube.com/taskade]($1)
​

- Contact us: [taskade.com/contact]($1)