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
| **Zapier** | Webhook received | Trigger Zap, send data | Webhook URL |

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

→ **Next: [Browse Actions & Triggers](./actions.md)** 