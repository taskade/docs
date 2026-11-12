---
description: >-
  Connect Taskade automations to 100+ tools like Slack, Gmail, GitHub, HubSpot, and Stripe with triggers and actions, plus custom webhook integrations.
---

# Supported Integrations

You can connect Taskade automations to **100+ tools and services** for communication, productivity, AI, and development. Each integration gives you triggers, actions, or both. A trigger is an event that starts an automation. An action is a step that the automation does. Some connectors have only actions or only triggers.

{% hint style="info" %}
**Plans:** Premium integrations need a paid plan. Pro integrations need Pro and up. The Free plan runs the built-in Taskade steps and the standard connectors: HTTP Request, RSS, Pushover, and MCP Client. The step picker shows the plan badge on each step.
{% endhint %}

## What Integrations Give You

### **Reliable Runs**

Each automation has these controls:

- **Run history**: the **Runs** tab shows the input and the output of each step.
- **Continue if this step fails**: you select **Stop here** or **Go to the next step** for each step.
- **Retry if this step fails**: the step tries again when a connected app is busy or down for a few minutes.
- **Wait for approval**: the run stops until a teammate approves or rejects it.
- **Connections**: you connect each account one time with **Connect**. Every step in the workspace can use that connection again.

### **What You Can Build**

You can use integrations for these tasks:

- **Change data**: utility actions change the format of data and use no AI credits.
- **Connect many services in one automation**: use Branch, Filter Data, and Loop to control the flow.
- **Read files**: use Media actions and Turn a file into text.
- **Work with calendars**: connect Google Calendar, Microsoft Outlook Calendar, Cal.com, Calendly, and iCal feeds.

## Categories

### Communication & Collaboration

| Service | Triggers | Actions | Plan |
|---------|----------|---------|------|
| **Slack** | New message, new channel, new mention, new reaction | Send channel or direct message, schedule message, create channel, add user to channel, set status, find user, fetch messages, request approval | Paid |
| **Microsoft Teams** | New channel message | Send channel message, send chat message, create channel, request approval | Paid |
| **Microsoft Outlook** | New email | Send email, reply to email, forward email, move email to folder, get email, find email, mark as read, request approval | Paid |
| **Discord** | New message, new member joined | Send message, create, rename, or delete channel, manage roles and members | Paid |
| **WhatsApp Business** | New message received | Send message, send template message, send media, request approval | Paid |
| **Telegram Bot** | New message, new member, callback query | Send message, photo, document, or video, edit, delete, or pin message, get chat, request approval | Paid |
| **Email (SMTP)** | — | Send email through your own mail server | Paid |
| **Gmail** | New email, new email with label, new email attachment | Send email, reply to email, forward email, get email or thread, find email, create draft or draft reply, send draft, request approval | Paid |

### Development & Project Management

| Service | Triggers | Actions | Plan |
|---------|----------|---------|------|
| **GitHub** | New issue, issue comment, pull request, push, release, star | Create or update issue, create comment, get issue information, lock or unlock issue | Paid |
| **Jira** | New issue, updated issue | Create, update, or get issue, search issues, move issue to status, add comment | Paid |
| **Linear** | New issue, updated issue | Create, update, or get issue, search issues, add comment | Paid |
| **Asana** | New task | Create, update, get, or delete task, search tasks, add comment to task | Paid |
| **ClickUp** | New task, task status updated | Create task, update task, delete task, add comment, get task, list tasks, find task by name, get task comments | Paid |
| **Google Tasks** | New task, task completed | Create task, update task, delete task, complete task, re-open task, list tasks, clear completed, get task, find task | Paid |
| **Monday.com** | — | Create item, get item, update item | Paid |
| **Todoist** | Task completed | Create task, update task, complete task, re-open task, delete task, find task | Paid |
| **Trello** | New card | Create card, get card, update card | Paid |
| **Microsoft To Do** | See the step picker | See the step picker | Pro and up |
| **Confluence** | See the step picker | See the step picker | Pro and up |

### Data & Analytics

| Service | Triggers | Actions | Plan |
|---------|----------|---------|------|
| **Google Sheets** | New row, row updated | Insert row, add or update multiple rows, update row, delete row, find rows, get rows, read or clear range, create spreadsheet or worksheet | Paid |
| **Airtable** | New record, new or updated record | Create record, list records, update record | Paid |
| **Google Docs** | New document | Create document, append text, read document, find document, edit template file | Paid |
| **Google Drive** | New file, new folder | Upload file, create file or folder, copy or duplicate file, get or read file, save file as PDF, search, trash or delete, manage permissions (Shared Drive supported) | Paid |
| **Google Calendar** | New event, new or updated event, event cancelled | Create event, create quick event, update event, list events, delete event, get free/busy, list calendars | Paid |
| **Notion** | New page created, updated database item | Create page, create page under a page, update page, get page, query database, append blocks, search | Paid |
| **HubSpot** | New contact, new or updated contact, new deal, deal stage reached, deal property changed | Create contact, create or update contact, search contacts, get contact, update contact, create deal, update deal, search deals, get deal, get owner | Paid |
| **Salesforce** | New record, new or updated record | Create record, update record, find records by query | Paid |
| **Pipedrive** | New deal, new person, updated deal | Create, get, search, or update deals, persons, organizations, activities, and notes | Pro and up |
| **Supabase** | See the step picker | See the step picker | Pro and up |
| **Custom Webhooks** | Webhook received | Send HTTP request | Webhook trigger: Pro and up. HTTP request: every plan |

### Marketing & Sales

| Service | Triggers | Actions | Plan |
|---------|----------|---------|------|
| **Mailchimp** | — | Add contact, update contact status, manage tags | Paid |
| **Calendly** | Any event scheduled, event canceled, event scheduled for an event type | Get event, list scheduled events, list invitees, cancel event | Paid |
| **Stripe** | New payment, payment failed, new customer, new or updated subscription, canceled subscription, checkout completed, new invoice, invoice paid, invoice payment failed | Create customer, payment intent, payment link, checkout session, product, price, refund, subscription, or invoice, search customers, charges, or invoices, and more | Paid |
| **Apollo** | — | Enrich user information | Paid |
| **Twilio** | New incoming SMS | Send SMS, request approval by SMS | Paid |
| **Brevo**, **Resend**, **SendGrid** | See the step picker | Send email and manage contacts | Pro and up |
| **HighLevel**, **Attio** | See the step picker | See the step picker | Pro and up |

### Web & Content

| Service | Triggers | Actions | Plan |
|---------|----------|---------|------|
| **Twitter/X** | — | Create post, create reply, delete post | Paid |
| **LinkedIn** | — | Create share update, create company update | Paid |
| **Facebook Pages** | — | Create post, create post with image, create video post | Paid |
| **Reddit** | New post in subreddit | Create post, get post | Paid |
| **WordPress** | New post | Create post with featured image | Paid |
| **Webflow** | New form submission | List sites and collections, create, get, update, or publish CMS item | Paid |
| **Typeform** | New submission | — | Paid |
| **Google Forms** | New response | Get form, get form response, list form responses | Paid |
| **Tally**, **Jotform** | New submission | See the step picker | Pro and up |
| **RSS Feeds** | New item in feed, new item in RSS feeds | — | Every plan |
| **YouTube** | New video, new video in playlist | Get video details | Paid |

### Custom & Developer

| Service | Triggers | Actions | Plan |
|---------|----------|---------|------|
| **HTTP Request** | — | Send HTTP request (GET, POST, PUT, PATCH, DELETE, HEAD) with optional Bearer, API key, or Basic auth | Every plan |
| **HTTP Webhook** | Webhook received | — | Pro and up |
| **Zapier / Make / n8n / IFTTT** | Post to a Taskade webhook URL | Call any of them with the HTTP Request action | Webhook trigger: Pro and up |
| **MCP Client** | — | List tools and call a tool on any MCP server | Every plan |
| **Pushover** | — | Send a push notification | Every plan |
| **Forms** | Form submitted | — | Every plan |

> **Related developer docs:** To build an integration in code, read the [Developer Hub](../../apis-living-system-development/developer-home.md) and [Webhooks](../../apis-living-system-development/webhooks.md). You can also add to the open-source [Integration Kit](https://github.com/taskade/integrations) (Zapier & n8n actions and triggers).

## Connect and Test an Integration

### 1. **Sign In to the Service**
Most integrations need access to your account in the other service. The service uses one of these sign-in types:
- **OAuth 2.0**: you sign in to the service in a browser window. Use this type when the service offers it.
- **API key**: you paste a key from the service.
- **Personal access token**: you paste a token that belongs to your user in the service.

### 2. **Set the Step Fields**
Each integration step has its own fields. Decide on these items:
- **Endpoint**: the part of the service that the step calls.
- **Field mapping**: which data goes into which field of the other service.
- **Rate limits**: how many calls the service accepts in a period.
- **Failures**: what the step does when a call fails.

### 3. **Test the Automation**
Do these steps before you turn the automation on:
1. Run the automation with sample data.
2. Make sure that the connection works.
3. Make sure that each field gets the correct data.
4. Read the **Runs** tab for errors.

## Common Integration Patterns

### **CRM Sync**
```
Form Submission → AI Lead Qualification → HubSpot Deal Creation → Slack Notification
```

### **Support Ticket Routing**
```
Email/Webhook → AI Categorization → Jira Ticket Creation → Team Assignment
```

### **Content Publishing**
```
Schedule Trigger → AI Content Generation → Review Process → WordPress Publication
```

### **Project Management**
```
GitHub Issue → AI Analysis → Taskade Task Creation → Team Notification
```

### **Data Processing**
```
Google Sheets Update → AI Data Enrichment → Airtable Record Creation → Report Generation
```

## Advanced Features

### **Conditional Routing**
Send data to different services by its content, its priority, or other conditions. Use a **Branch** step for this.

### **Data Transformation**
Clean the data, change its format, and add data to it between two services.

### **Error Recovery**
Select what happens when a step fails: stop the run, skip the item, or go to the next step. The **Runs** tab shows the reason for the failure.

### **Rate Limiting**
If a service limits the number of calls, add a **Delay** step between the calls.

### **Batch Processing**
Use **Loop** to process many records. To write many rows in one step, use Google Sheets **Add or Update Multiple Rows**.

## Custom Integrations

If your service is not in the list, you can connect it with these tools.

### **HTTP Webhooks**
- Send data to any REST API.
- Receive webhooks from other services (Pro and up).
- Add your own authentication headers.
- Send a body as JSON, form data, raw text, XML, or multipart files.

### **Database Connections**
- Connect a Postgres database with the **Supabase** connector (Pro and up).
- Call another database through its HTTP API with **Send HTTP Request**.

### **File Processing**
- Read uploaded files with **Turn a file into text**.
- Change CSV into a list, and a list into CSV, with utility actions.
- Convert images and video with Media actions.
- Keep files in the cloud with Google Drive.

## Detailed Integration Examples

### Google Calendar Integration

**Automatic Event Creation:**
- **Trigger:** Task with due date added
- **Action:** Create Google Calendar event
- **Use Case:** Show each project deadline in your calendar.

**Meeting Follow-up:**
- **Trigger:** New event in Google Calendar
- **Action:** Create follow-up tasks in Taskade
- **Use Case:** Keep a task for each action item from a meeting.

**Project Milestone Sync:**
- **Trigger:** Project completed
- **Action:** Create a calendar event for the next milestone
- **Use Case:** Tell stakeholders about the progress of the project.

### Google Sheets Integration

**Data Collection:**
- **Trigger:** Form submission
- **Action:** Add row to Google Sheets
- **Use Case:** Keep all form data in one sheet for analysis.

**Inventory Management:**
- **Trigger:** Task completed (inventory check)
- **Action:** Update stock levels in spreadsheet
- **Use Case:** Keep the stock levels current.

**Performance Reporting:**
- **Trigger:** Weekly schedule
- **Action:** Write a report from Taskade data to Sheets
- **Use Case:** Keep a dashboard of team performance up to date.

### Social Media Integrations

**LinkedIn Content Sharing:**
- **Trigger:** Content approved in review project
- **Action:** Post to LinkedIn company page
- **Use Case:** Publish approved content with no manual step.

**Twitter/X Publishing:**
- **Trigger:** Task completed in the content calendar project
- **Action:** Create post on X/Twitter
- **Use Case:** Publish approved posts on time.

**YouTube Content Workflow:**
- **Trigger:** New video on your channel
- **Action:** Create promotion tasks and schedule posts
- **Use Case:** Promote each new video.

### WhatsApp Business Integration

With WhatsApp Business, your automations can answer customers, log their questions, and send AI replies.

#### **Connect WhatsApp Business**
1. Connect your verified WhatsApp Business account.
2. Paste your token in the **System User Access Token** field.
3. Make sure that the **WhatsApp Business Account ID** is correct.
4. Send a test message to make sure that the connection works.

#### **Available Actions**

| Action | Description | Parameters | Use Case |
|--------|-------------|------------|----------|
| **Send Message** | Send text message to contact | `phoneNumber`, `message`, `messageType` | Customer notifications, support responses |
| **Send Template Message** | Send pre-approved template | `templateId`, `phoneNumber`, `variables` | Order confirmations, appointment reminders |
| **Send Media** | Send images, documents, audio | `phoneNumber`, `mediaUrl`, `mediaType`, `caption` | Product catalogs, instruction manuals |
| **Request Approval** | Ask a person to approve before the automation continues | `phoneNumber`, `message` | Approve an order or a refund |

#### **Real-World Use Cases**

**Customer Support Automation:**
- **Trigger:** WhatsApp message received
- **Action:** Create a support ticket and reply with the case number.
- **AI step:** AI finds the mood of the message and puts it in a category.
- **Next step:** Send the ticket to the correct specialist for the message content.

**Order Management:**
- **Trigger:** Stripe payment or webhook from your order system
- **Action:** Send a WhatsApp message with the tracking information.
- **Personal details:** Add the customer name, the order details, and the expected delivery date.
- **Escalation:** Send an alert if the delivery is late.

**Lead Qualification:**
- **Trigger:** WhatsApp message from new contact
- **Action:** An AI agent qualifies the lead and updates the CRM.
- **Next step:** Schedule a follow-up and assign it to a sales rep.
- **CRM:** Sync the lead with HubSpot, Salesforce, or another CRM.

**Appointment Reminders:**
- **Trigger:** Daily schedule that finds the appointments for tomorrow
- **Action:** Send a WhatsApp reminder with the appointment details.
- **Options:** Add a link to change the time, and the location.
- **Confirmation:** Send a Request Approval message to confirm the time.

---

## **Enterprise Integration Patterns**

The examples below give the steps of each automation in outline.

### **Advanced CRM Workflows**

**HubSpot Revenue Operations**
```yaml
Lead Qualification Pipeline:
  Trigger: Form submission or HubSpot new contact
  
  Step 1 - Data Enrichment:
    - Agent analyzes lead profile and company
    - Enriches contact with industry, size, tech stack
    - Scores lead based on ideal customer profile
  
  Step 2 - Intelligent Routing:
    - High-value leads → Senior sales rep
    - SMB leads → Inside sales team
    - Enterprise → Account executive
    - Poor fit → Marketing nurture sequence
  
  Step 3 - Automated Follow-up:
    - Personalized email based on lead profile
    - Calendar link for qualified prospects
    - Task creation for sales rep with context

Outcome: More qualified meetings booked, faster first response
```

**Salesforce Account Management**
```yaml
Customer Success Automation:
  Trigger: Contract renewal date approaching (90 days)
  
  Workflow:
    - Agent analyzes account health score
    - Generates renewal strategy document
    - Creates tasks for CSM with talking points
    - Schedules automated check-in sequence
    - Alerts if risk factors detected
    - Prepares expansion opportunity analysis

Outcome: Better renewal rates and expansion revenue through timely outreach
```

### **Microsoft Teams Enterprise Communication**

**Crisis Communication System**
```yaml
Emergency Response Protocol:
  Trigger: Critical system alert or security incident
  
  Immediate Actions:
    - Create dedicated Teams channel for incident
    - Send alert to on-call team with severity level
    - Generate incident response checklist
    - Document timeline in shared project
    - Post an update to your status page through Send HTTP Request

Recovery Actions:
    - Collect post-mortem feedback via forms
    - Generate incident report with AI analysis
    - Schedule follow-up meetings
    - Update runbooks based on learnings
```

**Executive Briefing Automation**
```yaml
Daily Executive Dashboard:
  Schedule: Every morning at 7 AM
  
  Data Collection:
    - Pull KPIs from multiple systems
    - Analyze team productivity metrics
    - Review customer satisfaction scores
    - Check financial performance indicators
    - Monitor security and compliance status
  
  Report Generation:
    - AI agent creates executive summary
    - Highlights key achievements and concerns
    - Provides actionable recommendations
    - Formats for mobile consumption
  
  Distribution:
    - Send to executive Teams channel
    - Create calendar event for leadership meeting
    - Archive in executive workspace
```

### **Advanced Marketing Automation**

**LinkedIn Content Amplification**
```yaml
Content Distribution Engine:
  Trigger: New blog post published
  
  Content Strategy:
    - Agent analyzes post for key themes
    - Generates LinkedIn post variations
    - Creates different versions for executives vs employees
    - Publishes to the LinkedIn profile and the company page
  
  Follow-up:
    - Creates follow-up tasks for the sales team
    - Logs each post to a Google Sheet for reporting
```

**Multi-Channel Campaign Orchestration**
```yaml
Product Launch Campaign:
  Trigger: Product launch date set
  
  Pre-Launch (30 days):
    - Create LinkedIn teaser content
    - Schedule Facebook Page posts
    - Generate press release and media kit
    - Prepare customer email sequences
  
  Launch Day:
    - Coordinate social media posts across platforms
    - Send announcement emails to segments
    - Update website and product pages
    - Activate PR outreach sequence
  
  Post-Launch (30 days):
    - Analyze campaign performance
    - Generate success metrics report
    - Create case studies from early customers
    - Plan follow-up campaigns
    - Archive assets for future use
```

### **Financial Operations Integration**

**Automated Invoice Processing**
```yaml
Accounts Payable Workflow:
  Trigger: Invoice received via email or upload
  
  Processing:
    - AI agent extracts invoice data
    - Validates against purchase orders
    - Routes for approval based on amount
    - Sends to your accounting system with Send HTTP Request
    - Updates project budgets automatically
    - Notifies stakeholders of status changes
  
  Exception Handling:
    - Flags discrepancies for human review
    - Escalates overdue approvals
    - Tracks vendor performance metrics
    - Generates compliance reports
```

**Revenue Recognition Automation**
```yaml
SaaS Revenue Tracking:
  Trigger: New subscription or upgrade
  
  Revenue Actions:
    - Calculate monthly recurring revenue
    - Update financial forecasts
    - Create revenue recognition schedule
    - Sync with accounting systems
    - Generate investor reporting data
    - Alert finance team of significant changes
```

### **Human Resources Automation**

**Employee Lifecycle Management**
```yaml
Onboarding Automation:
  Trigger: New hire start date confirmed
  
  Pre-boarding (1 week before):
    - Send welcome package and handbook
    - Create onboarding tasks for IT and the workspace
    - Schedule first-day meetings
    - Add to team communication channels
  
  First Day:
    - Send welcome message to team
    - Create onboarding checklist project
    - Schedule check-ins with manager
    - Assign buddy/mentor
    - Begin training sequence
  
  First Month:
    - Track onboarding progress
    - Collect feedback via surveys
    - Schedule HR check-ins
    - Monitor training completion
    - Generate manager reports
```

**Performance Review Automation**
```yaml
360-Degree Review Process:
  Trigger: Review cycle start date
  
  Preparation:
    - Generate review forms for each employee
    - Collect peer feedback requests
    - Analyze performance data from systems
    - Create manager briefing documents
    - Schedule review meetings
  
  Execution:
    - Send automated reminders
    - Compile feedback from multiple sources
    - Generate performance summaries
    - Create development recommendations
    - Track completion rates
  
  Follow-up:
    - Create development plans
    - Set goals for next period
    - Schedule follow-up meetings
    - Archive review documents
    - Generate HR analytics
```

## Getting Help

### **Documentation**
Each integration has a setup guide and examples in the help center.

### **Support**
For help with an integration, contact support. For Enterprise plans, contact sales.

---

> **Do you need a custom integration?**  
> → [Contact our team](https://taskade.com/contact) about enterprise solutions

> **Do you want to add an integration?**  
> → Open a PR on the open-source [Integration Kit](https://github.com/taskade/integrations) (Zapier & n8n actions and triggers)

→ **Next: [Browse Actions & Triggers](./actions.md)**  
→ **Complete Reference: [Comprehensive Automation Integrations](./comprehensive-integrations.md)** 

---

_Step-by-step guides on taskade.com/learn: [Integrations Everywhere: Workspace DNA and the App on Top](https://www.taskade.com/learn/connect/everywhere), [Automation Actions](https://www.taskade.com/learn/automation/actions)._
