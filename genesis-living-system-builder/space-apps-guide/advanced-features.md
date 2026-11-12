---
description: >-
  Advanced Taskade Genesis features: smart data structures, AI agent training, multi-step automations, integrations, access control, and version history.
---

# Advanced Features

Ready to take your Taskade Genesis app to the next level? These powerful features help you build even smarter and more capable applications. No coding required—just plain English descriptions of what you want!

## How Genesis Gets So Smart

Genesis works like having a whole tech team at your fingertips. Behind the scenes, it coordinates different tools to make your app intelligent:

* **Smart Data Storage** - Organizes information automatically
* **AI Assistants** - Learns your business and helps users
* **Workflow Automation** - Connects to your favorite business tools
* **File Handling** - Manages documents, photos, and uploads seamlessly
* **Easy Navigation** - Creates user-friendly interfaces that just work

The best part? You describe what you want, and Genesis handles all the technical complexity for you.

## Organizing Your Data Like a Pro

Genesis automatically creates smart storage for your information, but you can make it even better organized for your specific needs.

### Making Data Work for Your Business

**Organize information into clear categories:**

{% code overflow="wrap" %}
```
"I want separate sections for different feedback types: how was the food, how was the service, and how was the restaurant cleanliness. Give each section its own 1-5 star rating and room for comments."
```
{% endcode %}

**Use dropdowns to keep things consistent:**

{% code overflow="wrap" %}
```
"Add a dropdown menu so customers can pick which location they visited: our Downtown spot, Mall location, or Airport branch."
```
{% endcode %}

**Track important details:**

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

**Create parent-child relationships:**

{% code overflow="wrap" %}
```
"Each project should have multiple tasks underneath it, and each task can have subtasks with individual deadlines and assignees."
```
{% endcode %}

## Making Your AI Assistant Amazing

Every Genesis app comes with its own AI assistant that learns about your business. Think of it as hiring a super-smart employee who never sleeps and always knows exactly what to do!

### Choose an AI Model

Taskade Genesis uses Auto by default, which picks a frontier model for each request. You can choose a specific model from the model picker.

### Comprehensive Agent Training

**Three Types of Knowledge Sources:**

**1. Dynamic Knowledge (Real-Time Data):**

{% code overflow="wrap" %}
```
"Train the agent on our customer feedback project so it learns from every new review and can identify patterns in real-time."
```
{% endcode %}

**2. Static Knowledge (Uploaded Files):**

{% code overflow="wrap" %}
```
"Upload our employee handbook, service menu with prices, and company policies so the agent always gives accurate information about our business."
```
{% endcode %}

**3. Web Knowledge (Current Information):**

{% code overflow="wrap" %}
```
"Connect the agent to our industry news websites and competitor analysis so it stays current with market trends and can provide informed recommendations."
```
{% endcode %}

### Advanced Agent Capabilities

**Multi-Modal Understanding:**

{% code overflow="wrap" %}
```
"Train the agent to analyze customer photos along with their feedback to identify specific issues like food presentation problems or facility maintenance needs."
```
{% endcode %}

**Cross-Project Intelligence:**

{% code overflow="wrap" %}
```
"Have the agent analyze patterns across both customer feedback and sales data to identify which services generate the most satisfaction and revenue."
```
{% endcode %}

**Predictive Analytics:**

{% code overflow="wrap" %}
```
"Train the agent to predict busy periods based on historical booking data and suggest optimal staffing levels and inventory orders."
```
{% endcode %}

### Custom Agent Commands

Create specialized commands for specific business tasks:

**Customer Service Commands:**

{% code overflow="wrap" %}
```
"/analyze-feedback" - Automatically categorize and prioritize customer feedback
"/suggest-response" - Generate personalized responses based on customer history
"/escalate-issue" - Identify when issues need management attention
```
{% endcode %}

**Sales and Marketing Commands:**

{% code overflow="wrap" %}
```
"/qualify-lead" - Assess lead quality based on business criteria
"/recommend-service" - Suggest appropriate services based on customer needs
"/follow-up-reminder" - Create personalized follow-up tasks
```
{% endcode %}

**Operations Commands:**

{% code overflow="wrap" %}
```
"/inventory-forecast" - Predict inventory needs based on trends
"/schedule-optimize" - Suggest optimal staff scheduling
"/performance-report" - Generate insights from operational data
```
{% endcode %}

### Agent Personality and Communication

**Industry-Specific Personalities:**

**Healthcare/Wellness:**

{% code overflow="wrap" %}
```
"Make the AI agent sound caring and professional, like a knowledgeable healthcare coordinator. Use reassuring language, ask thoughtful follow-up questions, and always prioritize patient comfort and safety."
```
{% endcode %}

**Retail/E-commerce:**

{% code overflow="wrap" %}
```
"Train the agent to be enthusiastic and helpful, like a knowledgeable sales associate. Focus on understanding customer needs, making relevant product suggestions, and creating a positive shopping experience."
```
{% endcode %}

**Professional Services:**

{% code overflow="wrap" %}
```
"Configure the agent to communicate like a trusted business advisor - knowledgeable, professional, and focused on delivering value. Use industry terminology appropriately and always back recommendations with data."
```
{% endcode %}

### Agent Teams and Collaboration

{% hint style="info" %}
AI Teams (multi-agent teams) are available on **Pro and up**.
{% endhint %}

**Multi-Agent Workflows:**

{% code overflow="wrap" %}
```
"Create a team of specialized agents: a Customer Service Agent for initial inquiries, a Technical Support Agent for complex issues, and a Sales Agent for upselling opportunities. Have them collaborate on complex customer cases."
```
{% endcode %}

**Handoff Protocols:**

{% code overflow="wrap" %}
```
"When the Customer Service Agent encounters a technical issue beyond basic troubleshooting, automatically hand off the conversation to the Technical Support Agent with full context and conversation history."
```
{% endcode %}

### AI-Powered Agent Creation

**EVE Creates Agents for You:**

Taskade EVE can now build custom AI agents automatically based on your needs:

{% code overflow="wrap" %}
```
"Create a marketing assistant agent that helps with content planning"
"Set up a customer service bot for handling FAQ questions"  
"Build a sales agent that qualifies leads from our contact form"
```
{% endcode %}

**Automatic Configuration:**

* EVE determines the optimal agent personality and tone
* Uses **Auto** to pick a frontier model for each task
* Configures relevant tools and integrations
* Sets up proper knowledge sources and training

### Public Agent Publishing

**Share Your Agents with the World:**

Transform your private AI agents into public resources accessible to anyone:

**One-Click Publishing:**

{% code overflow="wrap" %}
```
"Make my customer support agent public so customers can get help 24/7"
"Publish our product expert agent for potential clients to explore our services"
"Create a public FAQ bot for our website visitors"
```
{% endcode %}

**Public Agent Features:**

* Unique public URL for each agent (e.g., `taskade.com/a/support-bot-01JK82XFM2`)
* Customizable branding and appearance
* Visitor conversations collected in the agent's **Visitor Inbox**
* Optional password (Pro and up) and per-tool permissions for visitors

### Embeddable AI Agents

**Agents Anywhere on the Web:**

Embed your public agent using the in-product “Embed” option.

Use it for support chat, onboarding, or interactive docs.

If you need setup help, start with [AI Agents Getting Started](../ai-features/ai-agents-getting-started.md).

**Embedding Use Cases:**

* **Customer Support**: Add help chat to any page
* **Product Guides**: Interactive product exploration
* **Lead Qualification**: Pre-qualify visitors before sales calls
* **Documentation**: Interactive help within knowledge bases
* **Training**: Embedded learning assistants in educational content

**Embedding Customization:**

* Match your website's design and branding
* Control agent positioning and behavior
* Customize conversation starters and prompts
* Set up analytics and conversation tracking

## Advanced Automations

Connect your app to your existing business tools and create sophisticated workflows.

### Multi-Step Workflows

**Complex approval processes:**

{% code overflow="wrap" %}
```
"When someone submits an expense report over $500, send it to their direct manager for approval. If approved, forward to finance for final review. If rejected at any stage, notify the employee with specific feedback."
```
{% endcode %}

**Customer journey automation:**

{% code overflow="wrap" %}
```
"When we get 5-star feedback, automatically post it to our Google My Business page, add the customer to our VIP newsletter list, and send them a discount code for their next visit."
```
{% endcode %}

### Conditional Logic

**Smart routing based on conditions:**

{% code overflow="wrap" %}
```
"If a support ticket is marked as 'urgent' and hasn't been responded to within 2 hours, escalate it to the manager and send an alert to the team Slack channel."
```
{% endcode %}

**Dynamic content based on user data:**

{% code overflow="wrap" %}
```
"Show different service packages to customers based on their previous booking history - first-time visitors see our intro packages, returning customers see advanced options."
```
{% endcode %}

### Enterprise-Grade Integrations

Genesis apps can connect to **100+ business tools** through Taskade's unified integration system. The Free plan includes the standard connectors only. Premium integrations need a paid plan.

#### Communication & Collaboration

* **Slack, Microsoft Teams, Discord** - Team notifications and alerts
* **Gmail, Outlook** - Email automation and customer communication
* **WhatsApp Business** - Customer messaging and support
* **Twilio** - SMS notifications and reminders

#### Productivity & Storage

* **Google Workspace** (Sheets, Docs, Drive, Calendar) - Document management and scheduling
* **Microsoft Outlook, Microsoft To Do** - Email, calendar, and task synchronization
* **Trello, Asana, Monday.com** - Project management integration

#### Sales & Marketing

* **HubSpot, Salesforce, Pipedrive** - CRM synchronization and lead management
* **Mailchimp, Brevo** - Email marketing automation
* **Stripe** - Payment processing and subscription management
* **LinkedIn, X/Twitter** - Social media management and posting

#### Specialized Business Tools

* **Calendly** - Meeting scheduling
* **WordPress** - Content management and publishing

### Advanced Integration Examples

**CRM + AI + Automation:**

{% code overflow="wrap" %}
```
"When someone fills out our contact form, automatically create a HubSpot contact, have the AI agent score the lead based on our qualification criteria, assign high-value leads to our senior sales rep, and send a personalized follow-up email sequence."
```
{% endcode %}

**Multi-Platform Workflow:**

{% code overflow="wrap" %}
```
"When a customer books a high-value service, create a deal in Salesforce, add them to our VIP Mailchimp list, schedule a follow-up call in Google Calendar, post a celebration message in our team Slack channel, and create a customer success task in our project management system."
```
{% endcode %}

**Intelligent Content Distribution:**

{% code overflow="wrap" %}
```
"When we publish a new blog post in WordPress, have the AI agent create social media versions optimized for LinkedIn and Twitter, schedule posts across platforms, add the content to our knowledge base for customer service agents, and track engagement metrics."
```
{% endcode %}

## Access Control and Permissions

Create sophisticated permission systems for different types of users.

### Role-Based Access

{% hint style="warning" %}
App sign-in (App Users) works on every plan, Free included, and confirms who a visitor is. It does not hide other people's rows. To show each user only their own records, turn on **Private entries** (private per-user data, or row scoping) under **Publish → More options**. It is off by default. Test it with a second account.
{% endhint %}

**Define user roles:**

{% code overflow="wrap" %}
```
"Create three user types: customers who can only submit and view their own feedback, staff who can see all feedback for their location, and managers who can access everything plus analytics."
```
{% endcode %}

**Granular permissions:**

{% code overflow="wrap" %}
```
"Let servers see feedback that mentions them by name, but not other reviews. Give shift supervisors access to all feedback during their shifts, and give the general manager full access to everything."
```
{% endcode %}

### Dynamic Access Control

**Time-based permissions:**

{% code overflow="wrap" %}
```
"Staff can only access the scheduling system during their assigned shifts, but managers can access it 24/7."
```
{% endcode %}

**Location-based access:**

{% code overflow="wrap" %}
```
"Regional managers can see data for all locations in their region, but individual store managers can only see their own location's information."
```
{% endcode %}

## Advanced User Interface Features

### Progressive Disclosure

**Guided user experiences:**

{% code overflow="wrap" %}
```
"Start with a simple form asking for basic information, then show additional fields based on their selections. If they choose 'technical issue', show technical troubleshooting options."
```
{% endcode %}

**Smart defaults:**

{% code overflow="wrap" %}
```
"Pre-fill appointment forms with the customer's previous preferences and service history, but allow them to change anything they want."
```
{% endcode %}

### Mobile Optimization

**Touch-friendly interfaces:**

{% code overflow="wrap" %}
```
"Make all buttons large enough for easy tapping on phones, use simple navigation, and ensure forms work well with mobile keyboards."
```
{% endcode %}

**Offline capability:**

{% code overflow="wrap" %}
```
"Allow staff to record customer feedback even when the internet is spotty, and sync the data when connection is restored."
```
{% endcode %}

## Advanced Media Management

Genesis apps include sophisticated media handling capabilities that go far beyond simple file uploads.

### Intelligent File Processing

**Automatic Content Analysis:**

{% code overflow="wrap" %}
```
"When customers upload photos with their feedback, automatically analyze them to identify the type of issue (food quality, cleanliness, service) and route to the appropriate department for review."
```
{% endcode %}

**Document Intelligence:**

{% code overflow="wrap" %}
```
"Process uploaded contracts and invoices to automatically extract key information like dates, amounts, and client details, then populate the relevant project fields and create follow-up tasks."
```
{% endcode %}

**Multi-Format Support:**

{% code overflow="wrap" %}
```
"Accept and process various file types: PDFs for contracts, images for visual feedback, videos for training materials, and spreadsheets for bulk data imports."
```
{% endcode %}

{% hint style="info" %}
**File uploads flow end-to-end.** When your app's form includes a file upload, the file is delivered into the triggered automation, saved to your workspace's media library, and readable by downstream steps like [Convert File to Text](../automation/actions.md) — including scanned or image-only documents, which are transcribed with vision OCR automatically.
{% endhint %}

### Media as Agent Knowledge

**Dynamic Training:**

{% code overflow="wrap" %}
```
"Automatically train customer service agents on new product manuals and policy updates as they're uploaded, ensuring agents always have the latest information."
```
{% endcode %}

**Visual Understanding:**

{% code overflow="wrap" %}
```
"Train agents to recognize products in customer photos so they can provide specific troubleshooting advice and recommend compatible accessories."
```
{% endcode %}

**Video Transcription:**

{% code overflow="wrap" %}
```
"Upload training videos and have agents learn from the transcribed content, then use that knowledge to guide customers through complex procedures step-by-step."
```
{% endcode %}

### Automated Media Workflows

**Content Generation:**

{% code overflow="wrap" %}
```
"When new product photos are uploaded, automatically generate social media posts with AI-written descriptions, schedule them across platforms, and add the products to our online catalog."
```
{% endcode %}

**Quality Control:**

{% code overflow="wrap" %}
```
"Analyze uploaded customer photos for inappropriate content, automatically blur sensitive information, and flag potential issues for human review before publishing."
```
{% endcode %}

**Archive Management:**

{% code overflow="wrap" %}
```
"Automatically organize uploaded files by date, project, and type, compress older files for storage efficiency, and maintain searchable indexes for quick retrieval."
```
{% endcode %}

## Analytics and Reporting

### Custom Dashboards

**Executive summaries:**

{% code overflow="wrap" %}
```
"Create a manager dashboard showing daily revenue, customer satisfaction scores, most popular services, and any urgent issues that need attention."
```
{% endcode %}

**Operational metrics:**

{% code overflow="wrap" %}
```
"Build a staff dashboard showing their individual performance metrics, upcoming appointments, and any customer feedback that mentions them."
```
{% endcode %}

### Automated Reporting

**Scheduled reports:**

{% code overflow="wrap" %}
```
"Generate a weekly report every Monday morning showing customer satisfaction trends, popular menu items, and any recurring issues that need attention."
```
{% endcode %}

**Alert-based reporting:**

{% code overflow="wrap" %}
```
"Send an immediate report to management whenever customer satisfaction drops below 4 stars for three consecutive days."
```
{% endcode %}

## Performance Optimization

### Smart Loading

**Prioritized content:**

{% code overflow="wrap" %}
```
"Load the most important information first - show available appointment times immediately, then load service descriptions and pricing in the background."
```
{% endcode %}

**Lazy loading:**

{% code overflow="wrap" %}
```
"Only load detailed customer history when someone specifically clicks to view it, not on every page load."
```
{% endcode %}

### Caching Strategies

**Frequently accessed data:**

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

**Third-party services:**

{% code overflow="wrap" %}
```
"Integrate with our email marketing platform to automatically add customers to relevant campaigns based on their service preferences and booking history."
```
{% endcode %}

### Webhook Automation

Automation webhooks are available on **Pro and up**.

**Real-time updates:**

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

**Audit trails:**

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

## Testing and Quality Assurance

### Automated Testing

**Workflow validation:**

{% code overflow="wrap" %}
```
"Set up automated tests to ensure that booking confirmations are sent, payment processing works correctly, and all integrations are functioning properly."
```
{% endcode %}

### User Acceptance Testing

**Feedback collection:**

{% code overflow="wrap" %}
```
"Create a beta testing group with select customers who can try new features before they go live and provide feedback on usability and functionality."
```
{% endcode %}

## Scaling Your App

### Performance Monitoring

**Usage analytics:**

{% code overflow="wrap" %}
```
"Track how many people use different features, where they spend the most time, and where they encounter problems or drop off."
```
{% endcode %}

### Capacity Planning

**Growth preparation:**

{% code overflow="wrap" %}
```
"Monitor app performance and user load to ensure it can handle busy periods like holiday booking rushes or special promotions."
```
{% endcode %}

## Best Practices for Advanced Features

### Start Simple, Add Complexity

1. **Build the core functionality first** and ensure it works perfectly
2. **Add one advanced feature at a time** and test thoroughly
3. **Get user feedback** before adding more complexity
4. **Document your workflows** so team members understand how everything works

### Maintain User Focus

1. **Every advanced feature should solve a real problem** for your users
2. **Don't add complexity just because you can** - keep the user experience simple
3. **Test with actual users** to ensure advanced features improve rather than complicate their experience

### Plan for Maintenance

1. **Document your automations and integrations** so others can understand and maintain them
2. **Test regularly** to ensure external integrations continue working
3. **Have backup plans** for critical workflows in case integrations fail
4. **Train your team** on how to use and troubleshoot advanced features

## **Power User Prompts & Use Cases**

Ready to unlock Genesis's full potential? Here are advanced prompts and real-world scenarios that show how Taskade powers your business success.

### **🎯 Smart Business Prompts**

**Customer Experience Apps:**

{% code overflow="wrap" %}
```
"Create a restaurant feedback system where customers rate food quality, service speed, and cleanliness on a 1-5 scale. When someone gives a rating below 3, immediately send me a Slack alert with their feedback and contact info so I can follow up personally within 30 minutes."
```
{% endcode %}

**Team Productivity Apps:**

{% code overflow="wrap" %}
```
"Build a project handoff system where when someone marks a task as 'Ready for Review', it automatically assigns it to the next person, sends them a notification with all the context, and creates a deadline 2 days from now. If they don't respond in 24 hours, escalate to the team lead."
```
{% endcode %}

**Sales & Lead Management:**

{% code overflow="wrap" %}
```
"Make a lead qualification app where prospects fill out their business size, budget range, and timeline. Automatically score them as Hot (budget >$10K, timeline <30 days), Warm, or Cold, then route Hot leads to my CRM and send me an instant notification with their details."
```
{% endcode %}

### **🔗 Connecting the Dots: How Taskade Powers You**

**Your Workspace = Your Business Brain:** Every Genesis app you build learns from your workspace's existing knowledge. Your customer data, team processes, and business intelligence all work together automatically.

**Example: Restaurant Chain Owner**

* **Morning**: Check your feedback app (powered by customer data from all locations)
* **Afternoon**: Your inventory app (connected to the same customer preferences) suggests menu adjustments
* **Evening**: Your staff scheduling app (knowing busy periods from feedback data) optimizes tomorrow's shifts

**The Magic:** All three apps share the same business intelligence, making each one smarter.

### **🎨 Creative Workflow Prompts**

**Content Production Pipeline:**

{% code overflow="wrap" %}
```
"Create a video production tracker where I can upload scripts, assign roles (writer, editor, thumbnail designer), set deadlines, and track progress. When a video is marked 'Complete', automatically post it to our content calendar and notify the social media team."
```
{% endcode %}

**Brand Asset Management:**

{% code overflow="wrap" %}
```
"Build a brand library where team members can upload logos, photos, and graphics with tags like 'summer campaign' or 'product shots'. Make it searchable so anyone can quickly find the right assets, and track who downloaded what for usage reporting."
```
{% endcode %}

### **📊 Data-Driven Decision Making**

**Business Intelligence Prompts:**

{% code overflow="wrap" %}
```
"Create a dashboard that shows me this week's customer feedback scores, compares them to last month, identifies trending complaints, and suggests which locations need attention. Update it automatically every morning at 9 AM."
```
{% endcode %}

**Performance Tracking:**

{% code overflow="wrap" %}
```
"Build a team productivity app that tracks project completion rates, identifies bottlenecks, and shows me which team members might need support. Send me a weekly summary every Friday with actionable insights."
```
{% endcode %}

### **⚡ Automation That Actually Helps**

**Smart Follow-ups:**

* When a customer books a service, automatically send them preparation instructions 24 hours before
* If a project deadline is approaching and tasks aren't complete, notify the team lead
* When inventory runs low, create a reorder task and assign it to the purchasing manager

**Intelligent Routing:**

* Route customer complaints to different departments based on keywords
* Assign leads to sales reps based on territory and availability
* Escalate urgent issues to managers automatically

### **🌟 Real Success Stories**

**"I built our entire client onboarding system in 20 minutes"** _Marketing Agency Owner_

* New clients fill out a detailed intake form
* Automatically creates project folders with their brand assets
* Assigns team members based on service type
* Sends welcome email with timeline and next steps

**"My food truck's daily operations run themselves now"** _Food Truck Entrepreneur_

* Morning inventory check creates shopping lists
* Customer orders track popular items for tomorrow's prep
* End-of-day sales automatically update ingredient needs
* Weather alerts suggest menu adjustments

**"Our remote team finally feels connected"** _Startup Founder_

* Daily standup app collects updates without meetings
* Project handoffs include all context and files
* Team celebration app highlights wins and milestones
* Knowledge sharing app captures lessons learned

### **💡 Pro Tips for Advanced Users**

**Start Small, Think Big:** Begin with one workflow that annoys you daily, then gradually connect it to other parts of your business.

**Use Natural Language:** Don't overthink the technical details. Describe what you want like you're talking to a smart assistant.

**Connect Everything:** The more your apps share data, the smarter they become. Let Taskade's intelligence work for you.

**Iterate Quickly:** Build a basic version first, use it for a week, then refine based on what you learn.

***

## **Genesis Version History**

Taskade Genesis saves revisions of your app as you build. Open **Version history** to preview a saved revision and restore it.

### **What Gets Tracked**

Each saved revision captures the app itself:

| **Change Type**            | **Details Captured**                          |
| -------------------------- | --------------------------------------------- |
| **Content Modifications**  | Text updates, layout changes                  |
| **Feature Additions**      | New pages, components, and functionality      |

A restore brings back the app's design and code. Your project data stays as it is.

### **Restoration Made Simple**

**Restore Version**: Bring back any saved revision

* Preview a revision before you restore it
* See which revision is live: the **Live** badge marks the version visitors use
* After a restore, a manually published app asks you to publish the restored version

### **Professional Development Benefits**

* **Client Confidence**: Show complete development history
* **Safe Experimentation**: Try bold changes knowing you can always revert
* **Milestone Backups**: Export important versions to GitHub for an external copy

***

## **Database Projects: Your App's Data Foundation**

When Genesis creates an app, it automatically generates database projects that serve as your app's intelligent data layer.

### **What Are Database Projects?**

Database projects are smart storage systems that:

* **Structure Data Automatically** based on your app's needs
* **Sync in Real-Time** between your app interface and database
* **Train AI Agents** with your business data and patterns
* **Trigger Automations** when data changes or meets conditions

### **Perfect For Business Applications**

| **App Type**          | **Database Use**                 | **Smart Features**                            |
| --------------------- | -------------------------------- | --------------------------------------------- |
| **Customer Portals**  | Client data, project history     | AI agents trained on customer patterns        |
| **Inventory Systems** | Stock levels, supplier info      | Automatic reorder triggers                    |
| **Support Platforms** | Ticket data, resolution patterns | Smart routing and response suggestions        |
| **Sales Dashboards**  | Lead data, conversion metrics    | Predictive analytics and follow-up automation |

### **Database Intelligence Features**

* **Smart Relationships**: Automatically connects related data
* **Pattern Recognition**: Identifies trends and anomalies
* **Predictive Insights**: Suggests actions based on data patterns
* **Real-Time Sync**: Updates instantly across all connected systems

### **Getting Started with Database Projects**

1. **Let Genesis Create**: Your database structure is built automatically
2. **Review the Structure**: Check the generated fields and relationships
3. **Customize as Needed**: Add custom fields or modify relationships
4. **Connect Automations**: Set up triggers for data changes
5. **Train AI Agents**: Let agents learn from your data patterns

***

## **Advanced App Publishing & Distribution**

### **Preview and Live Versions**

Each Genesis app has a working version and a live version:

| **Version**         | **Purpose**                 | **Features**                                  |
| ------------------- | --------------------------- | --------------------------------------------- |
| **Current**         | Testing and iteration       | Full editing access in the builder and preview |
| **Live**            | Live public access          | The revision visitors see after you publish   |

### **Custom Domain Integration**

Brand your Genesis apps with professional custom domains:

What you get with a custom domain:

* Branded URL (e.g., `app.yourcompany.com`)

* Automatic SSL
* Fast global delivery
* A cleaner, professional sharing experience

See [Custom Domains & Branding](custom-domains.md).

### **Advanced Security & Access Control**

| **Security Feature**     | **Implementation**            | **Use Case**           |
| ------------------------ | ----------------------------- | ---------------------- |
| **Password Protection**  | App-level password (Pro and up) | Client-specific access |
| **App Sign-In**          | Email sign-in for app users (every plan) | Client portals |
| **User Role Management** | Granular permission control   | Team collaboration     |

### **Performance Optimization**

**Automatic Optimizations:**

* **Code Splitting** - Load only necessary components
* **Image Optimization** - Automatic compression and format selection
* **Caching Strategy** - Intelligent content caching
* **Mobile Optimization** - Responsive design and touch optimization

**Performance Monitoring:**

* **Real-Time Analytics** - Visits, traffic sources, and device metrics (Business and up)
* **Error Tracking** - Automatic bug detection and reporting
* **Load Testing** - Simulate high-traffic scenarios
* **Performance Alerts** - Notifications for performance issues

***

**Ready to implement advanced features?** Start with one area that would have the biggest impact on your business, implement it thoroughly, and then gradually add more sophisticated capabilities.

**Need help with complex implementations?** The Genesis AI agent can guide you through setting up advanced features and troubleshooting complex workflows.

---

_Step-by-step guides on taskade.com/learn: [Version History & Restore](https://www.taskade.com/learn/genesis/version-history), [Publish Agents Publicly](https://www.taskade.com/learn/agents/public-agents)._
