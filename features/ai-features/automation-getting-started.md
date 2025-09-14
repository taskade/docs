# Getting Started with Automation

Put your routine work on autopilot! Taskade's automation feature helps you save time by automatically handling repetitive tasks.

## What is Automation?

Think of automation like setting up dominoes – when the first one falls (something happens), it makes all the others fall in sequence (actions get triggered automatically).

**Simple examples:**
- ✅ When someone completes a task → notify the team in Slack
- ✅ When a form is submitted → create a new project and assign it to someone
- ✅ When a deadline approaches → send reminder emails
- ✅ When inventory is low → order more supplies automatically

## How It Works: "If This, Then That"

Every automation follows this simple pattern:

**🔥 Trigger** (If this happens...)
- Someone submits a form
- A task gets completed
- It's 9 AM every Monday
- A new customer signs up

**⚡ Action** (Then do that...)
- Send a Slack message
- Create a new project
- Send an email
- Update a spreadsheet

## Your First Automation in 5 Steps

### Step 1: Go to Automations

1. Open your Taskade workspace
2. Click the **Automations** tab at the top
3. Click **➕ Add automation**

### Step 2: Choose What Triggers Your Automation

Pick from these popular triggers:

**📝 Form Submitted** - Great for lead capture, feedback collection
**✅ Task Completed** - Perfect for progress notifications  
**📅 Schedule** - Use for daily/weekly reports, reminders
**🔗 Webhook** - Connect with other apps and services through HTTP requests
**🤖 Agent Trigger** - Let AI agents initiate automation flows
**📧 Mailhook** - Trigger automations via email
**📋 Task Added** - When new tasks are created in selected projects
**👤 Task Assigned** - When tasks are assigned to team members
**📆 Task Due** - When tasks with due dates become due
**💬 New Comment** - When comments are added to tasks
**🔄 Custom Field Updated** - When project custom fields change
**🏁 Project Completed** - When entire projects are marked complete
**🤖 Agent Response Trigger** - When AI agents provide specific responses
**🎯 Agent Tool Trigger** - When agents use specific tools
**📱 Agent Public Chat Ended** - When public agent conversations end

**Example:** Let's choose "Task Completed"

### Step 3: Set Your Trigger Conditions

Tell Taskade exactly when to trigger:
- Which project should we watch?
- Which specific tasks matter?
- Should this apply to all tasks or just certain ones?

**Example:** "When any task in the 'Client Projects' folder is completed"

### Step 4: Choose Your Actions

Pick what happens automatically:

**📨 Send Notifications**
- Slack messages to your team
- Email alerts to stakeholders
- SMS updates via Twilio

**📋 Create & Update**
- New tasks and projects
- Spreadsheet entries
- Calendar events

**🤖 AI Actions**
- **Ask Agent** - Query your custom AI agents for insights
- **Ask Agent with Structured Output** - Get responses in JSON/table format
- **Taskade AI** - Use built-in AI for content generation and analysis
- **Categorize with AI** - Automatically sort and label content
- **DALL-E 3 Image Generation** - Create images from text descriptions
- Generate reports, summaries, and analysis
- Process and filter information intelligently
- Make data-driven decisions automatically

**🔄 Data Actions**
- **Add Task** - Create new tasks with specific details
- **Assign Task** - Automatically assign tasks to team members
- **Mark Task as Completed** - Complete tasks when conditions are met
- **Move Task** - Transfer tasks between projects
- **Move Completed Tasks** - Archive finished work automatically
- **Create Project** - Generate new projects from templates
- **Project Template** - Use predefined project structures
- **Update Custom Fields** - Modify project-specific data
- **Upload File to Media** - Add files to your media library
- **Add Knowledge to Agent** - Train agents with new information
- **Add Project to Agent Knowledge** - Connect projects to agent learning

**🌐 Web & Content Actions**
- **Scrape Webpage** - Extract content from websites
- **Search Web** - Find information online automatically
- **Convert File to Text** - Transform documents into readable text
- **Transcribe YouTube Video** - Convert video content to text
- **Filter Data** - Process and clean information
- **Transform Array into String** - Convert data formats
- **Find Tasks** - Locate specific tasks based on criteria

**🌐 Integration Actions**
- HTTP requests to any API
- Google Sheets updates
- Calendar event creation
- Social media posting
- Email marketing campaigns
- CRM record updates

**Example:** "Send a message to #general channel: 'Great work! [Task Name] has been completed by [Person Name]'"

### Step 5: Test and Enable

1. Click **Save changes**
2. Toggle the automation **ON**
3. Test it by completing a task
4. Check if your Slack message appears!

## Popular Automation Templates

### 📋 Daily Standup Reminder
**Trigger:** Every day at 9 AM  
**Action:** Post in Slack "Good morning team! Please share your daily updates in this thread 👇"

### 🎯 Lead Follow-Up
**Trigger:** New form submission  
**Action:** Create a task assigned to sales team + send welcome email

### 📊 Weekly Report
**Trigger:** Every Friday at 5 PM  
**Action:** Generate AI summary of completed tasks + email to manager

### 🚨 Urgent Task Alert
**Trigger:** Task marked as "High Priority"  
**Action:** Send Slack alert + create calendar reminder

## Working with AI in Automations

Make your automations smarter with AI actions:

### Ask Agent
**What it does:** Gets answers from your custom AI agents  
**Example use:** "Analyze this customer feedback and suggest next steps"

### Generate with AI
**What it does:** Creates content automatically  
**Example use:** "Write a follow-up email for this lead"

### Categorize with AI
**What it does:** Automatically sorts and tags information  
**Example use:** "Classify this support ticket as urgent, normal, or low priority"

## Variables: Making Automations Personal

Use variables to include specific information in your actions:

**@trigger.taskName** → The name of the completed task  
**@trigger.userName** → Who completed the task  
**@trigger.projectName** → Which project it belongs to  
**@trigger.dueDate** → When it was due

**Example message:** "🎉 Great job @trigger.userName! You completed '@trigger.taskName' in the @trigger.projectName project."

## Common Use Cases

### Customer Support
- **Trigger:** Support form submitted
- **Actions:** Create task → Assign to support team → Send confirmation email

### Event Management
- **Trigger:** Event registration form
- **Actions:** Add to attendee list → Send calendar invite → Update headcount

### Project Management
- **Trigger:** Project milestone reached
- **Actions:** Notify stakeholders → Schedule review meeting → Generate progress report

### Sales Pipeline
- **Trigger:** New lead captured
- **Actions:** Create CRM entry → Assign to sales rep → Send follow-up sequence

## Troubleshooting Tips

### Automation Not Triggering?
✅ Check if the automation is turned ON  
✅ Verify your trigger conditions are correct  
✅ Make sure you have the right permissions  
✅ Test with a simple action first (like posting to Slack)

### Actions Not Working?
✅ Confirm you're connected to external services (Slack, Gmail, etc.)  
✅ Check if variables are spelled correctly  
✅ Verify the receiving service is working (test manually)  
✅ Look at the automation history for error details

### Getting Too Many Notifications?
✅ Add more specific trigger conditions  
✅ Use filters to limit when automations run  
✅ Consider batching similar actions together

## Next Steps

Ready to automate your workflow?

1. **Start simple** - Pick one repetitive task you do daily
2. **Use a template** - Browse our automation templates for inspiration  
3. **Test thoroughly** - Make sure your automation works before relying on it
4. **Build gradually** - Add more automations as you get comfortable

**Need more help?**
- [Complete Integration Reference](../../automation/comprehensive-integrations.md) - All available triggers and actions
- [Community Forum](https://www.taskade.com/feedback/public-api) - Get help from other users

---

**💡 Remember:** Good automation saves you time without creating complexity. Start with simple, reliable automations and build from there!
