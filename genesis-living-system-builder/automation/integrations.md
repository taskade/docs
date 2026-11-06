---
description: >-
  Connect Taskade automations to 100+ tools like Slack, Gmail, GitHub, HubSpot, and Stripe with triggers and actions, plus custom webhook integrations.
---

# Supported Integrations

Taskade connects to **100+ tools and services** across communication, productivity, AI, and developer ecosystems. Integrations run inside automations: triggers (events that start automations) and actions (tasks that automations can perform). Some connectors offer only actions or only triggers.

{% hint style="info" %}
**Plans:** Premium integrations need a paid plan. Pro integrations need Pro and up. The Free plan runs the built-in Taskade steps and the standard connectors: HTTP Request, RSS, Pushover and MCP Client. The step picker shows the plan badge on each step.
{% endhint %}

## Enhanced Integration Features

### **Enterprise-Grade Reliability**
- **Run history** for every automation, with the input and output of each step in the **Runs** tab
- **Error handling** per step: **Continue if this step fails**, with **Stop here** or **Go to the next step**
- **Secure connections**: you connect each account once with **Connect**, and every step in the workspace can reuse the connection

### **Advanced Integration Capabilities**
- **Data transformation** with utility actions that use no AI credits
- **Complex multi-step workflows** spanning multiple services, with Branch, Filter Data, and Loop
- **File processing** with Media actions and Convert File to Text
- **Calendar integration** with Google Calendar, Microsoft Outlook Calendar, Cal.com, Calendly, and iCal feeds

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

> **Related developer docs:** Build custom integrations programmatically with the [Developer Hub](../../apis-living-system-development/developer-home.md) and [Webhooks](../../apis-living-system-development/webhooks.md), or contribute to the open-source [Integration Kit](https://github.com/taskade/integrations) (Zapier & n8n actions and triggers).

## Integration Setup

### 1. **Authentication**
Most integrations require authentication to access your accounts:
- **OAuth 2.0**: Secure authorization flow (recommended)
- **API Keys**: Simple token-based authentication
- **Personal Access Tokens**: User-specific tokens with limited scope

### 2. **Configuration**
Each integration has specific configuration options:
- **Endpoints**: Which API endpoints to use
- **Data Mapping**: How to map fields between systems
- **Rate Limits**: Respect service limitations
- **Error Handling**: What to do when requests fail

### 3. **Testing**
Before deploying automations:
- Test with sample data
- Verify authentication works
- Check data mapping accuracy
- Monitor for errors and edge cases

## Popular Integration Patterns

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
Route data to different services based on content, priority, or other criteria.

### **Data Transformation**
Clean, format, and enrich data as it flows between systems.

### **Error Recovery**
Choose what happens when a step fails: stop the run, skip the item, or go to the next step. Read the reason in the **Runs** tab.

### **Rate Limiting**
Add a **Delay** step to space out calls to a service with rate limits.

### **Batch Processing**
Process multiple records with **Loop**, or write several rows at once with Google Sheets **Add or Update Multiple Rows**.

## Custom Integrations

Don't see your service listed? You can create custom integrations using:

### **HTTP Webhooks**
- Send data to any REST API
- Receive webhooks from external services (Pro and up)
- Custom authentication headers
- JSON, form data, raw, XML, and multipart file bodies

### **Database Connections**
- Use the **Supabase** connector (Pro and up) for a Postgres database
- Call any other database through its HTTP API with **Send HTTP Request**

### **File Processing**
- Read uploaded files with **Convert File to Text**
- Convert CSV to a list and a list to CSV with utility actions
- Convert images and video with Media actions
- Use Google Drive for cloud storage

## Detailed Integration Examples

### Google Calendar Integration

**Automatic Event Creation:**
- **Trigger:** Task with due date added
- **Action:** Create Google Calendar event
- **Use Case:** Never miss project deadlines

**Meeting Follow-up:**
- **Trigger:** New event in Google Calendar
- **Action:** Create follow-up tasks in Taskade
- **Use Case:** Ensure meeting action items are tracked

**Project Milestone Sync:**
- **Trigger:** Project completed
- **Action:** Create a calendar event for the next milestone
- **Use Case:** Keep stakeholders informed of progress

### Google Sheets Integration

**Data Collection:**
- **Trigger:** Form submission
- **Action:** Add row to Google Sheets
- **Use Case:** Centralized data tracking and analysis

**Inventory Management:**
- **Trigger:** Task completed (inventory check)
- **Action:** Update stock levels in spreadsheet
- **Use Case:** Real-time inventory tracking

**Performance Reporting:**
- **Trigger:** Weekly schedule
- **Action:** Generate report from Taskade data to Sheets
- **Use Case:** Automated team performance dashboards

### Social Media Integrations

**LinkedIn Content Sharing:**
- **Trigger:** Content approved in review project
- **Action:** Post to LinkedIn company page
- **Use Case:** Automated content distribution

**Twitter/X Publishing:**
- **Trigger:** Task completed in the content calendar project
- **Action:** Create post on X/Twitter
- **Use Case:** Publish approved posts on time

**YouTube Content Workflow:**
- **Trigger:** New video on your channel
- **Action:** Create promotion tasks and schedule posts
- **Use Case:** Comprehensive video marketing automation

### WhatsApp Business Integration

WhatsApp Business integration enhances your communication strategy by automating customer interactions, managing inquiries, and enabling AI-powered responses.

#### **Setup & Configuration**
1. **Connect WhatsApp Business Account** - Link your verified business account
2. **Configure System User Access Token** - Set up API authentication
3. **Verify Business Account ID** - Ensure proper account linking
4. **Test Connection** - Send test message to verify setup

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
- **Action:** Create support ticket, auto-reply with case number
- **AI Enhancement:** Sentiment analysis, automatic categorization
- **Follow-up:** Route to appropriate specialist based on message content

**Order Management:**
- **Trigger:** Stripe payment or webhook from your order system
- **Action:** Send WhatsApp notification with tracking info
- **Personalization:** Include customer name, order details, estimated delivery
- **Escalation:** Alert if delivery is delayed

**Lead Qualification:**
- **Trigger:** WhatsApp message from new contact
- **Action:** Run AI agent to qualify lead, update CRM
- **Automation:** Schedule follow-up, assign to sales rep
- **Integration:** Sync with HubSpot, Salesforce, or other CRM

**Appointment Reminders:**
- **Trigger:** Daily schedule that finds tomorrow's appointments
- **Action:** Send WhatsApp reminder with appointment details
- **Options:** Include reschedule link and location
- **Confirmation:** Send a Request Approval message to confirm the time

---

## **Enterprise Integration Patterns**

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
Each integration has detailed setup guides and examples in our help center.

### **Support**
Contact support for help with an integration. For Enterprise plans, contact sales.

---

> **Need a custom integration?**  
> → [Contact our team](https://taskade.com/contact) for enterprise solutions

> **Want to contribute an integration?**  
> → Open a PR on the open-source [Integration Kit](https://github.com/taskade/integrations) (Zapier & n8n actions and triggers)

→ **Next: [Browse Actions & Triggers](./actions.md)**  
→ **Complete Reference: [Comprehensive Automation Integrations](./comprehensive-integrations.md)** 

---

_Step-by-step guides on taskade.com/learn: [Integrations Everywhere: Workspace DNA and the App on Top](https://www.taskade.com/learn/connect/everywhere), [Automation Actions](https://www.taskade.com/learn/automation/actions)._
