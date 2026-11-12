---
description: >-
  Advanced Taskade Genesis features: smart data structures, AI agent training, multi-step automations, integrations, access control, and version history.
---

# Advanced Features

Use these features to make your Taskade Genesis app do more. You do not write code. You describe what you want in plain English.

## What Taskade Genesis Builds for You

When you describe an app, Taskade Genesis builds these parts for you:

* **Data storage** - Keeps the information of your app in order
* **AI agents** - Learn your business and help your users
* **Automations** - Connect your app to your business tools
* **File handling** - Keeps documents, photos, and uploads
* **Navigation** - Gives your users clear pages and menus

You describe the result. Taskade Genesis does the technical work.

## Organize Your Data

Taskade Genesis makes the data storage for your app. You can describe a structure that fits your business.

### Make Data Fit Your Business

**Put information into clear categories:**

{% code overflow="wrap" %}
```
"I want separate sections for different feedback types: how was the food, how was the service, and how was the restaurant cleanliness. Give each section its own 1-5 star rating and room for comments."
```
{% endcode %}

**Use dropdowns to keep values the same:**

{% code overflow="wrap" %}
```
"Add a dropdown menu so customers can pick which location they visited: our Downtown spot, Mall location, or Airport branch."
```
{% endcode %}

**Keep important details:**

{% code overflow="wrap" %}
```
"Add a field for the server's name so we can recognize when someone gives great service and share the feedback with our team."
```
{% endcode %}

### Data Relationships

**Link related information:**

{% code overflow="wrap" %}
```
"When a customer books an appointment, automatically pull in their previous service history and preferences from our customer database."
```
{% endcode %}

**Put items under other items (parent and child):**

{% code overflow="wrap" %}
```
"Each project should have multiple tasks underneath it, and each task can have subtasks with individual deadlines and assignees."
```
{% endcode %}

## Improve Your AI Agent

Each Taskade Genesis app has its own AI agent. The agent learns about your business and helps your users at any hour.

### Choose an AI Model

Taskade Genesis uses Auto by default. Auto picks a frontier model for each request. You can choose a specific model in the model picker.

### Train the Agent

**Three types of knowledge sources:**

**1. Live knowledge (project data that changes):**

{% code overflow="wrap" %}
```
"Train the agent on our customer feedback project so it learns from every new review and can identify patterns in real-time."
```
{% endcode %}

**2. Fixed knowledge (uploaded files):**

{% code overflow="wrap" %}
```
"Upload our employee handbook, service menu with prices, and company policies so the agent always gives accurate information about our business."
```
{% endcode %}

**3. Web knowledge (public web pages):**

{% code overflow="wrap" %}
```
"Connect the agent to our industry news websites and competitor analysis so it stays current with market trends and can provide informed recommendations."
```
{% endcode %}

### More Agent Capabilities

**Read photos and text together:**

{% code overflow="wrap" %}
```
"Train the agent to analyze customer photos along with their feedback to identify specific issues like food presentation problems or facility maintenance needs."
```
{% endcode %}

**Compare data from more than one project:**

{% code overflow="wrap" %}
```
"Have the agent analyze patterns across both customer feedback and sales data to identify which services generate the most satisfaction and revenue."
```
{% endcode %}

**Forecast from past data:**

{% code overflow="wrap" %}
```
"Train the agent to predict busy periods based on historical booking data and suggest optimal staffing levels and inventory orders."
```
{% endcode %}

### Custom Agent Commands

A command is a `/` shortcut that runs a saved prompt. Make commands for your frequent business tasks:

**Customer service commands:**

{% code overflow="wrap" %}
```
"/analyze-feedback" - Automatically categorize and prioritize customer feedback
"/suggest-response" - Generate personalized responses based on customer history
"/escalate-issue" - Identify when issues need management attention
```
{% endcode %}

**Sales and marketing commands:**

{% code overflow="wrap" %}
```
"/qualify-lead" - Assess lead quality based on business criteria
"/recommend-service" - Suggest appropriate services based on customer needs
"/follow-up-reminder" - Create personalized follow-up tasks
```
{% endcode %}

**Operations commands:**

{% code overflow="wrap" %}
```
"/inventory-forecast" - Predict inventory needs based on trends
"/schedule-optimize" - Suggest optimal staff scheduling
"/performance-report" - Generate insights from operational data
```
{% endcode %}

### Agent Tone and Style

**Tone for each industry:**

**Healthcare and wellness:**

{% code overflow="wrap" %}
```
"Make the AI agent sound caring and professional, like a knowledgeable healthcare coordinator. Use reassuring language, ask thoughtful follow-up questions, and always prioritize patient comfort and safety."
```
{% endcode %}

**Retail and online stores:**

{% code overflow="wrap" %}
```
"Train the agent to be enthusiastic and helpful, like a knowledgeable sales associate. Focus on understanding customer needs, making relevant product suggestions, and creating a positive shopping experience."
```
{% endcode %}

**Professional services:**

{% code overflow="wrap" %}
```
"Configure the agent to communicate like a trusted business advisor - knowledgeable, professional, and focused on delivering value. Use industry terminology appropriately and always back recommendations with data."
```
{% endcode %}

### AI Teams

{% hint style="info" %}
AI Teams (multi-agent teams) are available on **Pro and up**.
{% endhint %}

**Agents that work together:**

{% code overflow="wrap" %}
```
"Create a team of specialized agents: a Customer Service Agent for initial inquiries, a Technical Support Agent for complex issues, and a Sales Agent for upselling opportunities. Have them collaborate on complex customer cases."
```
{% endcode %}

**Send a chat from one agent to another (handoff):**

{% code overflow="wrap" %}
```
"When the Customer Service Agent encounters a technical issue beyond basic troubleshooting, automatically hand off the conversation to the Technical Support Agent with full context and conversation history."
```
{% endcode %}

### Let Taskade EVE Make Agents

**Taskade EVE makes agents for you:**

Ask Taskade EVE for an agent, and Taskade EVE builds it:

{% code overflow="wrap" %}
```
"Create a marketing assistant agent that helps with content planning"
"Set up a customer service bot for handling FAQ questions"  
"Build a sales agent that qualifies leads from our contact form"
```
{% endcode %}

**What Taskade EVE sets for the agent:**

* The tone and personality of the agent
* **Auto**, which picks a frontier model for each task
* The tools and integrations that the job needs
* The knowledge sources of the agent

### Public Agent Publishing

**Share your agents with anyone:**

You can make a private AI agent public. Then anyone with the link can chat with it.

**Publish with one prompt:**

{% code overflow="wrap" %}
```
"Make my customer support agent public so customers can get help 24/7"
"Publish our product expert agent for potential clients to explore our services"
"Create a public FAQ bot for our website visitors"
```
{% endcode %}

**Public agent features:**

* A public URL for each agent (for example, `taskade.com/a/support-bot-01JK82XFM2`)
* Your own look and branding
* Visitor chats in the agent's **Visitor Inbox**
* An optional password (Pro and up) and tool permissions for visitors
* Hide Branding and a background image (Business and up)

A public chat searches the web only when the agent has **Search the web** turned on. It reads a web page only when **Read a web page** is on. In both cases, the **Media** row on **Tool Permissions** must read **Visitors can use this**. A visitor does not see the tool input, the tool output, or the reasoning of the agent.

### Embeddable AI Agents

**Put agents on your website:**

To put your public agent on a web page, use the **Embed** option in the product.

You can use the embed for support chat, onboarding, or interactive docs.

For setup help, read [AI Agents Getting Started](../ai-features/ai-agents-getting-started.md).

**What you can use an embed for:**

* **Customer support**: Help chat on a page
* **Product guides**: Questions and answers about your product
* **Lead qualification**: Questions for visitors before a sales call
* **Documentation**: Help inside your knowledge base
* **Training**: An AI tutor in your course content

**What you can change in an embed:**

* The design and branding, to match your website
* The position and behavior of the agent
* The conversation starters and prompts
* Analytics and conversation records

## Advanced Automations

Connect your app to the business tools that you use, and build workflows with many steps.

### Multi-Step Workflows

**Approvals with more than one step:**

{% code overflow="wrap" %}
```
"When someone submits an expense report over $500, send it to their direct manager for approval. If approved, forward to finance for final review. If rejected at any stage, notify the employee with specific feedback."
```
{% endcode %}

**Steps for each stage of the customer journey:**

{% code overflow="wrap" %}
```
"When we get 5-star feedback, automatically post it to our Google My Business page, add the customer to our VIP newsletter list, and send them a discount code for their next visit."
```
{% endcode %}

### Conditional Logic

**Send work to the right place by condition:**

{% code overflow="wrap" %}
```
"If a support ticket is marked as 'urgent' and hasn't been responded to within 2 hours, escalate it to the manager and send an alert to the team Slack channel."
```
{% endcode %}

**Show content that matches the user data:**

{% code overflow="wrap" %}
```
"Show different service packages to customers based on their previous booking history - first-time visitors see our intro packages, returning customers see advanced options."
```
{% endcode %}

### Business Integrations

Taskade Genesis apps can connect to **100+ business tools** through Taskade integrations. The Free plan includes the standard connectors only. Premium integrations need a paid plan.

#### Communication and Collaboration

* **Slack, Microsoft Teams, Discord** - Team notifications and alerts
* **Gmail, Outlook** - Email automation and customer messages
* **WhatsApp Business** - Customer messages and support
* **Twilio** - SMS notifications and reminders

#### Productivity and Storage

* **Google Workspace** (Sheets, Docs, Drive, Calendar) - Documents and schedules
* **Microsoft Outlook, Microsoft To Do** - Sync of email, calendar, and tasks
* **Trello, Asana, Monday.com** - Project management integration

#### Sales and Marketing

* **HubSpot, Salesforce, Pipedrive** - CRM sync and lead management
* **Mailchimp, Brevo** - Email marketing automation
* **Stripe** - Payments and subscriptions
* **LinkedIn, X/Twitter** - Social media posts

#### Other Business Tools

* **Calendly** - Meeting schedules
* **WordPress** - Content management and publication

### Integration Examples

**CRM, AI, and automation together:**

{% code overflow="wrap" %}
```
"When someone fills out our contact form, automatically create a HubSpot contact, have the AI agent score the lead based on our qualification criteria, assign high-value leads to our senior sales rep, and send a personalized follow-up email sequence."
```
{% endcode %}

**One workflow across many tools:**

{% code overflow="wrap" %}
```
"When a customer books a high-value service, create a deal in Salesforce, add them to our VIP Mailchimp list, schedule a follow-up call in Google Calendar, post a celebration message in our team Slack channel, and create a customer success task in our project management system."
```
{% endcode %}

**Send new content to many channels:**

{% code overflow="wrap" %}
```
"When we publish a new blog post in WordPress, have the AI agent create social media versions optimized for LinkedIn and Twitter, schedule posts across platforms, add the content to our knowledge base for customer service agents, and track engagement metrics."
```
{% endcode %}

## Access Control and Permissions

Give each type of user the access that the user needs.

### Role-Based Access

{% hint style="warning" %}
App sign-in (App Users) works on every plan, Free included. It confirms who a visitor is. It does not hide the rows of other people. To show each user only their own records, turn on **Private entries** under **Publish → More options**. This setting (private data for each user, or row scoping) is off by default. Test it with a second account.
{% endhint %}

**Define user roles:**

{% code overflow="wrap" %}
```
"Create three user types: customers who can only submit and view their own feedback, staff who can see all feedback for their location, and managers who can access everything plus analytics."
```
{% endcode %}

**Detailed permissions:**

{% code overflow="wrap" %}
```
"Let servers see feedback that mentions them by name, but not other reviews. Give shift supervisors access to all feedback during their shifts, and give the general manager full access to everything."
```
{% endcode %}

### Access That Changes by Condition

**Access by time:**

{% code overflow="wrap" %}
```
"Staff can only access the scheduling system during their assigned shifts, but managers can access it 24/7."
```
{% endcode %}

**Access by location:**

{% code overflow="wrap" %}
```
"Regional managers can see data for all locations in their region, but individual store managers can only see their own location's information."
```
{% endcode %}

## Advanced User Interface Features

### Show Fields Step by Step

**Guide your users:**

{% code overflow="wrap" %}
```
"Start with a simple form asking for basic information, then show additional fields based on their selections. If they choose 'technical issue', show technical troubleshooting options."
```
{% endcode %}

**Fill in fields with known values:**

{% code overflow="wrap" %}
```
"Pre-fill appointment forms with the customer's previous preferences and service history, but allow them to change anything they want."
```
{% endcode %}

### Phones and Tablets

**Screens that are easy to tap:**

{% code overflow="wrap" %}
```
"Make all buttons large enough for easy tapping on phones, use simple navigation, and ensure forms work well with mobile keyboards."
```
{% endcode %}

**Work with a weak connection:**

{% code overflow="wrap" %}
```
"Allow staff to record customer feedback even when the internet is spotty, and sync the data when connection is restored."
```
{% endcode %}

## Advanced Media Management

Taskade Genesis apps can do more with files than store uploads.

### File Processing

**Sort uploads by content:**

{% code overflow="wrap" %}
```
"When customers upload photos with their feedback, automatically analyze them to identify the type of issue (food quality, cleanliness, service) and route to the appropriate department for review."
```
{% endcode %}

**Get data from documents:**

{% code overflow="wrap" %}
```
"Process uploaded contracts and invoices to automatically extract key information like dates, amounts, and client details, then populate the relevant project fields and create follow-up tasks."
```
{% endcode %}

**Accept many file types:**

{% code overflow="wrap" %}
```
"Accept and process various file types: PDFs for contracts, images for visual feedback, videos for training materials, and spreadsheets for bulk data imports."
```
{% endcode %}

{% hint style="info" %}
**File uploads go through every step.** When a form in your app has a file upload, the triggered automation gets the file. Taskade saves the file to the media library of your workspace. Later steps can read it, for example [Convert File to Text](../automation/actions.md). This step also reads scanned or image-only documents with vision OCR (text recognition).
{% endhint %}

### Media as Agent Knowledge

**Train agents on new files:**

{% code overflow="wrap" %}
```
"Automatically train customer service agents on new product manuals and policy updates as they're uploaded, ensuring agents always have the latest information."
```
{% endcode %}

**Read photos:**

{% code overflow="wrap" %}
```
"Train agents to recognize products in customer photos so they can provide specific troubleshooting advice and recommend compatible accessories."
```
{% endcode %}

**Learn from video transcripts:**

{% code overflow="wrap" %}
```
"Upload training videos and have agents learn from the transcribed content, then use that knowledge to guide customers through complex procedures step-by-step."
```
{% endcode %}

### Automated Media Workflows

**Make content from new files:**

{% code overflow="wrap" %}
```
"When new product photos are uploaded, automatically generate social media posts with AI-written descriptions, schedule them across platforms, and add the products to our online catalog."
```
{% endcode %}

**Review uploads before you publish them:**

{% code overflow="wrap" %}
```
"Analyze uploaded customer photos for inappropriate content, automatically blur sensitive information, and flag potential issues for human review before publishing."
```
{% endcode %}

**Keep files in order:**

{% code overflow="wrap" %}
```
"Automatically organize uploaded files by date, project, and type, compress older files for storage efficiency, and maintain searchable indexes for quick retrieval."
```
{% endcode %}

## Analytics and Reporting

### Custom Dashboards

**Summaries for managers:**

{% code overflow="wrap" %}
```
"Create a manager dashboard showing daily revenue, customer satisfaction scores, most popular services, and any urgent issues that need attention."
```
{% endcode %}

**Numbers for daily work:**

{% code overflow="wrap" %}
```
"Build a staff dashboard showing their individual performance metrics, upcoming appointments, and any customer feedback that mentions them."
```
{% endcode %}

### Automated Reports

**Reports on a schedule:**

{% code overflow="wrap" %}
```
"Generate a weekly report every Monday morning showing customer satisfaction trends, popular menu items, and any recurring issues that need attention."
```
{% endcode %}

**Reports when a value changes:**

{% code overflow="wrap" %}
```
"Send an immediate report to management whenever customer satisfaction drops below 4 stars for three consecutive days."
```
{% endcode %}

## Speed

### Load the Most Important Content First

**Show the key content first:**

{% code overflow="wrap" %}
```
"Load the most important information first - show available appointment times immediately, then load service descriptions and pricing in the background."
```
{% endcode %}

**Load details only on request:**

{% code overflow="wrap" %}
```
"Only load detailed customer history when someone specifically clicks to view it, not on every page load."
```
{% endcode %}

### Keep Frequent Data Ready (Cache)

**Data that users open often:**

{% code overflow="wrap" %}
```
"Cache our service menu and pricing information so it loads instantly, but update it automatically whenever we make changes in the admin panel."
```
{% endcode %}

## Advanced Integrations

### API Connections

**Custom integrations:**

{% code overflow="wrap" %}
```
"Connect to our existing customer database API to pull in loyalty points and membership status, and display this information when customers log in."
```
{% endcode %}

**Other services:**

{% code overflow="wrap" %}
```
"Integrate with our email marketing platform to automatically add customers to relevant campaigns based on their service preferences and booking history."
```
{% endcode %}

### Webhook Automation

A webhook sends an event from one app to another at the time that it occurs. Automation webhooks are available on **Pro and up**.

**Updates at the time of the change:**

{% code overflow="wrap" %}
```
"Set up webhooks so that when a customer cancels an appointment in our app, it immediately updates our main scheduling system and notifies the assigned staff member."
```
{% endcode %}

## Security and Compliance

### Data Protection

**Privacy controls:**

{% code overflow="wrap" %}
```
"Ensure that customer personal information is encrypted and only accessible to authorized staff members. Include options for customers to download or delete their data."
```
{% endcode %}

**Access records (audit trails):**

{% code overflow="wrap" %}
```
"Log all access to customer data, including who viewed what information and when, for compliance and security monitoring."
```
{% endcode %}

### GDPR and Privacy Compliance

**Data handling:**

{% code overflow="wrap" %}
```
"Include clear privacy notices, allow customers to opt out of marketing communications, and provide easy ways for them to update or delete their information."
```
{% endcode %}

## Tests and Quality

### Automated Tests

**Make sure that workflows operate correctly:**

{% code overflow="wrap" %}
```
"Set up automated tests to ensure that booking confirmations are sent, payment processing works correctly, and all integrations are functioning properly."
```
{% endcode %}

### Tests With Real Users

**Collect feedback:**

{% code overflow="wrap" %}
```
"Create a beta testing group with select customers who can try new features before they go live and provide feedback on usability and functionality."
```
{% endcode %}

## Grow Your App

### Usage Analytics

**See how people use the app:**

{% code overflow="wrap" %}
```
"Track how many people use different features, where they spend the most time, and where they encounter problems or drop off."
```
{% endcode %}

### Busy Periods

**Prepare for growth:**

{% code overflow="wrap" %}
```
"Monitor app performance and user load to ensure it can handle busy periods like holiday booking rushes or special promotions."
```
{% endcode %}

## Best Practices for Advanced Features

### Start Small

1. **Build the core function first.** Make sure that it operates correctly.
2. **Add one advanced feature at a time.** Test each feature.
3. **Get user feedback** before you add more features.
4. **Write down your workflows**, so that your team knows how the app operates.

### Keep the Focus on Your Users

1. **Add a feature only if it solves a real problem** for your users.
2. **Keep the experience simple.** Do not add a feature only because you can.
3. **Test with real users.** Make sure that each advanced feature makes their work easier.

### Plan for Maintenance

1. **Write down your automations and integrations**, so that other people can maintain them.
2. **Test external integrations at regular intervals.**
3. **Have a backup plan** for each important workflow, for the time when an integration stops.
4. **Train your team** to use and repair advanced features.

## **Advanced Prompts and Use Cases**

These prompts and examples show what an advanced Taskade Genesis app can do for your business.

### **🎯 Business Prompts**

**Customer experience apps:**

{% code overflow="wrap" %}
```
"Create a restaurant feedback system where customers rate food quality, service speed, and cleanliness on a 1-5 scale. When someone gives a rating below 3, immediately send me a Slack alert with their feedback and contact info so I can follow up personally within 30 minutes."
```
{% endcode %}

**Team productivity apps:**

{% code overflow="wrap" %}
```
"Build a project handoff system where when someone marks a task as 'Ready for Review', it automatically assigns it to the next person, sends them a notification with all the context, and creates a deadline 2 days from now. If they don't respond in 24 hours, escalate to the team lead."
```
{% endcode %}

**Sales and lead management:**

{% code overflow="wrap" %}
```
"Make a lead qualification app where prospects fill out their business size, budget range, and timeline. Automatically score them as Hot (budget >$10K, timeline <30 days), Warm, or Cold, then route Hot leads to my CRM and send me an instant notification with their details."
```
{% endcode %}

### **🔗 How Your Apps Share One Workspace**

**Your workspace holds your business knowledge.** Each Taskade Genesis app that you build learns from the knowledge in your workspace. Your customer data, team processes, and business data work together.

**Example: the owner of a restaurant chain**

* **Morning**: The owner opens the feedback app. It shows customer data from all locations.
* **Afternoon**: The inventory app uses the same customer preferences. It suggests changes to the menu.
* **Evening**: The staff schedule app knows the busy periods from the feedback data. It plans the shifts for the next day.

**The result:** The three apps use the same business data, so each app gives better results.

### **🎨 Creative Workflow Prompts**

**Content production:**

{% code overflow="wrap" %}
```
"Create a video production tracker where I can upload scripts, assign roles (writer, editor, thumbnail designer), set deadlines, and track progress. When a video is marked 'Complete', automatically post it to our content calendar and notify the social media team."
```
{% endcode %}

**Brand assets:**

{% code overflow="wrap" %}
```
"Build a brand library where team members can upload logos, photos, and graphics with tags like 'summer campaign' or 'product shots'. Make it searchable so anyone can quickly find the right assets, and track who downloaded what for usage reporting."
```
{% endcode %}

### **📊 Decisions From Data**

**Business data prompts:**

{% code overflow="wrap" %}
```
"Create a dashboard that shows me this week's customer feedback scores, compares them to last month, identifies trending complaints, and suggests which locations need attention. Update it automatically every morning at 9 AM."
```
{% endcode %}

**Team results:**

{% code overflow="wrap" %}
```
"Build a team productivity app that tracks project completion rates, identifies bottlenecks, and shows me which team members might need support. Send me a weekly summary every Friday with actionable insights."
```
{% endcode %}

### **⚡ Useful Automations**

**Follow-ups:**

* A customer books a service. The automation sends preparation instructions 24 hours before the service.
* A project deadline is near and tasks are open. The automation tells the team lead.
* Stock of an item is low. The automation makes a reorder task for the purchasing manager.

**Routing:**

* The automation sends each customer complaint to a department by its keywords.
* The automation gives each lead to a sales rep by territory and availability.
* The automation sends urgent issues to a manager.

### **🌟 Example Stories**

**"I built our entire client onboarding system in 20 minutes"** _Marketing Agency Owner_

* New clients fill out an intake form.
* The app makes project folders with their brand assets.
* The app gives the work to team members by service type.
* The app sends a welcome email with the timeline and next steps.

**"My food truck's daily operations run themselves now"** _Food Truck Entrepreneur_

* A morning inventory check makes shopping lists.
* Customer orders show the popular items for the preparation of the next day.
* End-of-day sales update the ingredient needs.
* Weather alerts suggest changes to the menu.

**"Our remote team finally feels connected"** _Startup Founder_

* A daily standup app collects updates with no meeting.
* Project handoffs include all context and files.
* A team celebration app shows wins and milestones.
* A knowledge app keeps the lessons that the team learned.

### **💡 Tips for Advanced Users**

**Start small:** Start with one workflow that gives you trouble each day. Then connect it to other parts of your business, one at a time.

**Use plain language:** Describe what you want, as you do to a colleague. You do not need technical details.

**Connect your apps:** Apps that share data give better results.

**Make changes in small steps:** Build a basic version first. Use it for a week. Then improve it with what you learned.

***

## **Genesis Version History**

Taskade Genesis saves revisions of your app while you build it. To preview a saved revision and restore it, open **Version history**.

### **What a Revision Keeps**

Each saved revision keeps the app itself:

| **Change Type**            | **Details Captured**                          |
| -------------------------- | --------------------------------------------- |
| **Content Modifications**  | Text updates, layout changes                  |
| **Feature Additions**      | New pages, components, and features           |

A restore brings back the design and code of the app. Your project data does not change.

### **Restore a Revision**

**Restore Version**: Bring back a saved revision.

* Preview a revision before you restore it.
* Find the live revision: the **Live** badge marks the version that visitors use.
* If you publish your app manually, publish the restored version after the restore. The app asks you to do this.

### **Why Version History Helps**

* **Client trust**: Show the full history of the app.
* **Safe tests**: Try large changes. You can always go back.
* **Backups of milestones**: Export important versions to GitHub for an external copy.

***

## **Database Projects: Your App's Data Foundation**

When Taskade Genesis makes an app, it also makes database projects. These projects keep the data of your app.

### **What Are Database Projects?**

A database project is a Taskade project that stores the data of your app. Database projects do these things:

* **Structure the data** to fit the needs of your app
* **Sync at once** between the app screens and the database
* **Train AI agents** on your business data and patterns
* **Start automations** when data changes or meets a condition

### **Database Projects for Business Apps**

| **App Type**          | **Database Use**                 | **Smart Features**                            |
| --------------------- | -------------------------------- | --------------------------------------------- |
| **Customer Portals**  | Client data, project history     | AI agents trained on customer patterns        |
| **Inventory Systems** | Stock levels, supplier info      | Automatic reorder triggers                    |
| **Support Platforms** | Ticket data, resolution patterns | Smart routing and response suggestions        |
| **Sales Dashboards**  | Lead data, conversion metrics    | Predictive analytics and follow-up automation |

### **Database Features**

* **Relationships**: Connects related data
* **Patterns**: Finds trends and unusual values
* **Forecasts**: Suggests actions from data patterns
* **Sync**: Updates all connected parts at once

### **Start With Database Projects**

1. **Let Taskade Genesis make the database.** It builds the structure for you.
2. **Review the structure.** Look at the generated fields and relationships.
3. **Change it to fit your needs.** Add custom fields or change relationships.
4. **Connect automations.** Add triggers for data changes.
5. **Train AI agents.** Let agents learn from your data patterns.

***

## **Advanced App Publishing & Distribution**

### **Preview and Live Versions**

Each Taskade Genesis app has a working version and a live version:

| **Version**         | **Purpose**                 | **Features**                                  |
| ------------------- | --------------------------- | --------------------------------------------- |
| **Current**         | Tests and changes           | Full edit access in the builder and preview   |
| **Live**            | Public access               | The revision visitors see after you publish   |

### **Custom Domain Integration**

You can give your Taskade Genesis app the domain of your company.

A custom domain gives you:

* A branded URL (for example, `app.yourcompany.com`)
* Automatic SSL
* Fast global delivery
* A clean, professional link to share

Read [Custom Domains & Branding](custom-domains.md).

### **Advanced Security & Access Control**

| **Security Feature**     | **Implementation**            | **Use Case**           |
| ------------------------ | ----------------------------- | ---------------------- |
| **Password Protection**  | App-level password (Pro and up) | Client-specific access |
| **App Sign-In**          | Email sign-in for app users (every plan) | Client portals |
| **User Role Management** | Detailed permission control   | Team collaboration     |

### **App Speed**

**Automatic improvements:**

* **Code splitting** - Loads only the necessary components
* **Image optimization** - Compresses images and selects the format
* **Caching** - Keeps frequent content ready
* **Mobile optimization** - Responsive design for touch screens

**Performance monitoring:**

* **Real-time analytics** - Visits, traffic sources, and device metrics (Business and up)
* **Error tracking** - Finds and reports bugs automatically
* **Load tests** - Simulate periods of high traffic
* **Performance alerts** - Notifications about performance problems

***

**Add advanced features:** Start with the area that helps your business most. Finish it, then add more features one at a time.

**Get help with complex setups:** The Taskade Genesis AI agent can guide you through advanced features. It can also help you repair complex workflows.

---

_Step-by-step guides on taskade.com/learn: [Version History & Restore](https://www.taskade.com/learn/genesis/version-history), [Publish Agents Publicly](https://www.taskade.com/learn/agents/public-agents)._
