# Supported Integrations

Taskade connects to **100+ tools and services** across communication, productivity, AI, and developer ecosystems. Each integration supports both triggers (events that start automations) and actions (tasks that automations can perform).

## Categories

### 🗣️ Communication & Collaboration

| Service | Triggers | Actions | Authentication |
|---------|----------|---------|----------------|
| **Slack** | New message, mention, reaction | Send message, create channel, update status, invite user | OAuth 2.0 |
| **Microsoft Teams** | New message, meeting scheduled | Post message, create meeting, manage channels | OAuth 2.0 |
| **Discord** | New message, member joined | Send message, manage roles, create invite | Bot Token |
| **WhatsApp Business** | New message received | Send message, send template | API Key |
| **Telegram** | New message, command | Send message, create poll, manage chat | Bot Token |
| **Email (SMTP)** | New email received | Send email, create campaign | SMTP Credentials |
| **Gmail** | New email, label added | Send email, create draft, add label | OAuth 2.0 |

### 🛠️ Development & Project Management

| Service | Triggers | Actions | Authentication |
|---------|----------|---------|----------------|
| **GitHub** | Issue created, PR opened, push | Create issue, comment, merge PR, trigger workflow | OAuth 2.0 / PAT |
| **GitLab** | Issue created, MR opened | Create issue, update MR, trigger pipeline | OAuth 2.0 / PAT |
| **Jira** | Issue created, status changed | Create ticket, update status, assign user | OAuth 2.0 / API Key |
| **Linear** | Issue created, updated | Create issue, update priority, assign | OAuth 2.0 / API Key |
| **Asana** | Task created, completed | Create task, update project, assign | OAuth 2.0 / PAT |
| **Trello** | Card created, moved | Create card, move card, add member | OAuth 2.0 / API Key |
| **Monday.com** | Item created, updated | Create item, update status, notify | OAuth 2.0 / API Key |

### 📊 Data & Analytics

| Service | Triggers | Actions | Authentication |
|---------|----------|---------|----------------|
| **Google Sheets** | New row, cell updated | Add row, update cell, create chart | OAuth 2.0 |
| **Airtable** | New record, updated | Create record, update field, link records | OAuth 2.0 / API Key |
| **Notion** | Page created, updated | Create page, update database, add content | OAuth 2.0 |
| **HubSpot** | Contact created, deal updated | Create contact, update deal, send email | OAuth 2.0 / API Key |
| **Salesforce** | Lead created, opportunity updated | Create lead, update opportunity, assign | OAuth 2.0 |
| **Pipedrive** | Deal created, activity added | Create deal, add activity, update stage | OAuth 2.0 / API Key |
| **Custom Webhooks** | Webhook received | Send HTTP request, trigger workflow | API Key / Bearer Token |

### 📧 Marketing & Sales

| Service | Triggers | Actions | Authentication |
|---------|----------|---------|----------------|
| **Mailchimp** | Subscriber added, campaign sent | Add subscriber, send campaign, create list | OAuth 2.0 / API Key |
| **ConvertKit** | Subscriber added, tag applied | Add subscriber, create sequence, send broadcast | OAuth 2.0 / API Key |
| **Calendly** | Event scheduled, cancelled | Create event, update availability, send reminder | OAuth 2.0 / API Key |
| **Stripe** | Payment succeeded, subscription created | Create customer, process payment, send receipt | OAuth 2.0 / API Key |
| **PayPal** | Payment completed, dispute opened | Process payment, send invoice, refund | OAuth 2.0 / API Key |
| **Shopify** | Order created, product updated | Create order, update inventory, send notification | OAuth 2.0 / API Key |
| **WooCommerce** | Order placed, customer registered | Update order, manage inventory, send email | REST API / API Key |

### 🌐 Web & Content

| Service | Triggers | Actions | Authentication |
|---------|----------|---------|----------------|
| **WordPress** | Post published, comment added | Create post, update content, moderate comment | OAuth 2.0 / API Key |
| **Webflow** | Form submitted, item published | Create CMS item, update content, publish | OAuth 2.0 / API Key |
| **Typeform** | Form submitted, response updated | Create form, update response, send email | OAuth 2.0 / PAT |
| **Google Forms** | Form submitted | Create form, add response, send notification | OAuth 2.0 |
| **RSS Feeds** | New item published | Parse content, extract data, trigger workflow | URL |
| **YouTube** | Video uploaded, comment added | Upload video, update metadata, respond | OAuth 2.0 / API Key |
| **Medium** | Story published, clap received | Publish story, update profile, send response | OAuth 2.0 / API Key |

### 🔧 Custom & Developer

| Service | Triggers | Actions | Authentication |
|---------|----------|---------|----------------|
| **HTTP Webhooks** | Webhook received | Send HTTP request, POST data, call API | API Key / Bearer Token |
| **REST APIs** | Custom endpoint called | Make API call, send data, receive response | Various |
| **GraphQL** | Query executed | Execute query, mutation, subscription | API Key / OAuth |
| **Custom Forms** | Form submitted | Process data, validate, route to workflow | None |
| **Database** | Record created, updated | Insert record, update data, run query | Connection String |
| **FTP/SFTP** | File uploaded, modified | Upload file, download, sync directory | Credentials |

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
Automatically retry failed requests and handle service outages gracefully.

### **Rate Limiting**
Respect API limits and queue requests when necessary.

### **Batch Processing**
Process multiple records efficiently to reduce API calls.

## Custom Integrations

Don't see your service listed? You can create custom integrations using:

### **HTTP Webhooks**
- Send data to any REST API
- Receive webhooks from external services
- Custom authentication headers
- JSON/XML data formatting

### **Database Connections**
- Connect to PostgreSQL, MySQL, MongoDB
- Execute custom queries
- Sync data bidirectionally
- Handle large datasets efficiently

### **File Processing**
- Upload/download files via FTP/SFTP
- Process CSV, JSON, XML files
- Image and document processing
- Cloud storage integration

## Detailed Integration Examples

### Google Calendar Integration

**Automatic Event Creation:**
- **Trigger:** Task with due date added
- **Action:** Create Google Calendar event
- **Use Case:** Never miss project deadlines

**Meeting Follow-up:**
- **Trigger:** Calendar event ends
- **Action:** Create follow-up tasks in Taskade
- **Use Case:** Ensure meeting action items are tracked

**Project Milestone Sync:**
- **Trigger:** Project phase completed
- **Action:** Update calendar with next milestone
- **Use Case:** Keep stakeholders informed of progress

### Google Sheets Integration

**AI Agent Integration:**
- **Agent Tools:** Connect AI agents to read/write Google Sheets data
- **Use Case:** AI agents can update spreadsheets, generate reports, and analyze data automatically

**Advanced Actions:**

| Action | Description | Use Case |
|--------|-------------|----------|
| **Insert Row** | Add new row to sheet | Data collection, form submissions |
| **Find Row(s)** | Search for specific data | Data lookup, conditional updates |
| **Update Row** | Modify existing data | Status updates, data corrections |
| **Delete Row** | Remove unwanted data | Data cleanup, archival |
| **Create Chart** | Generate visual reports | Automated reporting, dashboards |

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

**Twitter/X Engagement:**
- **Trigger:** Mention detected
- **Action:** Create task for social media manager
- **Use Case:** Never miss customer interactions

**YouTube Content Workflow:**
- **Trigger:** Video uploaded
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
| **Send Media Message** | Send images, documents, audio | `phoneNumber`, `mediaUrl`, `mediaType`, `caption` | Product catalogs, instruction manuals |
| **Get Message Status** | Check delivery status | `messageId` | Track message delivery and read receipts |

#### **Real-World Use Cases**

**Customer Support Automation:**
- **Trigger:** WhatsApp message received
- **Action:** Create support ticket, auto-reply with case number
- **AI Enhancement:** Sentiment analysis, automatic categorization
- **Follow-up:** Route to appropriate specialist based on message content

**Order Management:**
- **Trigger:** Order status changed in system
- **Action:** Send WhatsApp notification with tracking info
- **Personalization:** Include customer name, order details, estimated delivery
- **Escalation:** Alert if delivery is delayed

**Lead Qualification:**
- **Trigger:** WhatsApp message from new contact
- **Action:** Run AI agent to qualify lead, update CRM
- **Automation:** Schedule follow-up, assign to sales rep
- **Integration:** Sync with HubSpot, Salesforce, or other CRM

**Appointment Reminders:**
- **Trigger:** 24 hours before appointment
- **Action:** Send WhatsApp reminder with appointment details
- **Options:** Include reschedule link, location map
- **Confirmation:** Request confirmation reply, update calendar

## Getting Help

### **Documentation**
Each integration has detailed setup guides and examples in our help center.

### **Community**
Join our developer community to share integration patterns and get help.

### **Support**
Enterprise customers get priority support for custom integrations.

---

> **Need a custom integration?**  
> → [Contact our team](https://taskade.com/contact) for enterprise solutions

> **Want to contribute an integration?**  
> → [Submit a request](https://taskade.com/community) to our community

## 🆕 Extended Integrations Library

### Advanced Google Workspace

| Service | Key Actions | Agent Tools | Use Cases |
|---------|-------------|-------------|-----------|
| **Google Sheets** | Insert row, Find rows, Update row, Delete row, Get row, Clear range | ✅ Spreadsheet management | Data sync, reporting, inventory tracking |
| **Google Docs** | Create doc, Update content, Share document, Export formats | ✅ Document generation | Report automation, content creation |
| **Google Drive** | Upload file, Create folder, Share file, Sync changes | ✅ File management | Asset organization, backup workflows |
| **Google Calendar** | Create event, Update event, Send invites, Check availability | ✅ Schedule management | Meeting coordination, deadline tracking |
| **Google Forms** | Create form, Add questions, Process responses, Send notifications | ✅ Data collection | Survey automation, feedback processing |

### Social Media & Content

| Service | Features | Content Types | Automation Level |
|---------|----------|---------------|------------------|
| **LinkedIn** | Post updates, Share content, Message connections, Company pages | Articles, images, videos, polls | Full automation |
| **Facebook** | Post to timeline, Share to groups, Manage pages, Event creation | Posts, images, videos, events | Full automation |
| **Instagram** | Upload photos, Stories, Reels, IGTV, Manage comments | Images, videos, stories | Limited automation |
| **Twitter/X** | Tweet, Reply, Retweet, DM, Thread creation | Text, images, videos | Full automation |
| **YouTube** | Upload videos, Update metadata, Manage playlists, Comments | Videos, shorts, live streams | Full automation |
| **Reddit** | Submit posts, Comment, Moderate subreddits, Monitor mentions | Text, links, images | Full automation |

### Business & CRM

| Service | Core Functions | Data Sync | Integration Level |
|---------|----------------|-----------|-------------------|
| **HubSpot** | Contact management, Deal tracking, Email campaigns, Analytics | Bidirectional | Enterprise |
| **Salesforce** | Lead management, Opportunity tracking, Campaign automation | Bidirectional | Enterprise |
| **Pipedrive** | Deal pipeline, Activity tracking, Email integration | Bidirectional | Professional |
| **Apollo** | Lead enrichment, Contact discovery, Email verification | Pull data | Professional |
| **Calendly** | Meeting scheduling, Availability management, Reminder automation | Push/Pull | Standard |

### Communication Platforms

| Platform | Message Types | Automation Features | Bot Capabilities |
|----------|---------------|-------------------|------------------|
| **Slack** | Messages, Files, Threads, Reactions | Channel management, User invites, Status updates | Custom commands, Interactive messages |
| **Discord** | Messages, Embeds, Reactions, Voice | Role management, Channel creation, Moderation | Slash commands, Event handling |
| **Microsoft Teams** | Messages, Files, Meetings, Tabs | Channel management, Meeting scheduling | Bot framework integration |
| **WhatsApp Business** | Text, Media, Templates, Lists | Broadcast messages, Quick replies | Business API features |
| **Telegram** | Messages, Media, Polls, Keyboards | Bot commands, Group management | Inline keyboards, Webhooks |

### Cloud Storage & Files

| Service | File Operations | Sharing Features | Sync Capabilities |
|---------|----------------|------------------|-------------------|
| **Google Drive** | Upload, Download, Move, Copy, Delete | Share links, Permission management | Real-time sync, Version control |
| **Dropbox** | File management, Folder sync, Team folders | Public links, Team sharing | Automatic backup, Conflict resolution |
| **OneDrive** | Document management, Office integration | SharePoint integration | Cross-platform sync, Collaboration |
| **Box** | Enterprise file management, Workflow automation | Advanced permissions, Compliance | Enterprise security, Audit logs |

### E-commerce & Payments

| Platform | Order Management | Inventory Sync | Customer Data |
|----------|-----------------|----------------|---------------|
| **Shopify** | Order processing, Product updates, Customer management | Real-time inventory, Variant tracking | Customer profiles, Purchase history |
| **WooCommerce** | Order automation, Product sync, Email notifications | Stock management, Backorder handling | Customer segmentation, Analytics |
| **Stripe** | Payment processing, Subscription management, Invoicing | Transaction data, Customer billing | Revenue analytics, Churn tracking |
| **PayPal** | Payment processing, Invoice management, Dispute handling | Transaction history, Refund processing | Customer insights, Risk management |

## 🔗 Integration Use Cases

### Customer Support Workflow
```
Intercom → New Ticket → Taskade Task → Slack Notification → HubSpot Contact Update → Follow-up Email
```

### Content Marketing Pipeline
```
RSS Feed → New Article → AI Summary → Social Media Posts → LinkedIn/Twitter → Analytics Tracking
```

### Sales Lead Processing
```
Google Forms → Lead Capture → Apollo Enrichment → HubSpot Contact → Slack Alert → Calendly Booking
```

### Development Workflow
```
GitHub Issue → Taskade Task → Jira Ticket → Slack Update → Progress Tracking → Release Notes
```

### E-commerce Order Management
```
Shopify Order → Inventory Check → Google Sheets Update → Shipping Label → Customer Email → Analytics
```

→ **Next: [Browse Actions & Triggers](./actions.md)**  
→ **Complete Reference: [Comprehensive Automation Integrations](./comprehensive-integrations.md)** 