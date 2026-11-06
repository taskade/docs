---
description: >-
  Build Taskade AI Forms that start an automation on every submission, then use AI steps to analyze, categorize, and route responses into your workspace and CRM.
---

# AI Forms: Intelligent Data Collection

**Create forms that start an automation the moment someone submits them. AI Forms collect the data, and the AI steps in your automation analyze each response, categorize it, and run the follow-up actions.**

{% hint style="success" %}
**New to AI Forms?** Start with a simple feedback form, then add one AI step after the trigger to see how a basic form turns into an automated workflow.
{% endhint %}

***

## What Makes AI Forms Special?

### **Traditional Forms vs. AI Forms**

| Feature               | Traditional Forms             | AI Forms                                          |
| --------------------- | ----------------------------- | ------------------------------------------------- |
| **Data Processing**   | Store raw responses           | AI steps analyze each response                    |
| **Follow-up Actions** | Manual review required        | Automation routes each submission                 |
| **Integration**       | Basic webhook/email           | Taskade projects, agents, and 100+ integrations   |
| **Result Display**    | Static thank-you page         | Custom end page after submission                  |

### **Key AI Capabilities**

The form is the trigger. The AI work happens in the steps that follow it:

* **Sentiment Analysis**: Add **Categorize with AI** with the Sentiment Analysis preset to detect the tone of text responses
* **Auto-categorization**: Use **Categorize with AI** or **Ask Agent With Structured Output** to tag and organize responses
* **Intelligent Routing**: Add a **Branch** step on the AI result to pick the next action
* **File Reading**: Add **Convert File to Text** to read an uploaded file, including a scanned PDF or a phone photo

***

## Creating Your First AI Form

### **Step 1: Choose Your Creation Method**

#### **Option A: AI Generation (Recommended)**

In the Automations tab, click **Add automation → Generate With AI** and pick **Form** mode. Describe the form and what happens after a submission:

```
"Create a customer satisfaction survey for my restaurant with:
- Ratings for food quality, service speed, and atmosphere
- Optional text feedback section
- Photo upload for meal pictures
- A thank-you end page
- If rating is below 3, notify the manager in Slack"
```

#### **Option B: Form Builder Interface**

1. Go to your workspace **Automations** tab
2. Create an automation: **Create with AI**, **Browse templates**, or **Start from scratch**
3. Click **➕ Add Trigger → Form**
4. Configure form settings and fields in the sidebar
5. Add automation actions for processing responses

### **Step 2: Configure Form Settings**

| Setting                | Description                              | Example                                    |
| ---------------------- | ---------------------------------------- | ------------------------------------------ |
| **Form Title**         | Choose a unique title for your form      | "Customer Feedback Survey"                 |
| **Form Description**   | Describe the purpose of the form         | "Help us improve your experience"          |
| **Submit Button Text** | Choose a title for the submission button | "Submit Feedback"                          |
| **Form End Page**      | Display an end screen with custom text   | "Thank you! We'll respond within 24 hours" |

### **Step 3: Choose Form Fields**

AI Forms include customizable field types to collect different kinds of information:

| Field Type          | Description                             | Best For                       | Pair With                                  |
| ------------------- | --------------------------------------- | ------------------------------ | ------------------------------------------ |
| **Short Text**      | For short answers like a name or title  | Names, titles, keywords        | Add Task, Insert Row                       |
| **Long Text**       | For longer answers like comments        | Feedback, descriptions         | Categorize with AI (sentiment, topic)      |
| **Option Dropdown** | A list of choices where one is selected | Categories, preferences        | Branch on the selected option              |
| **Number**          | For numbers like age or quantity        | Ages, quantities, scores       | Filter Data on a range                     |
| **File**            | Lets users upload a file                | Documents, images, attachments | Convert File to Text, then Ask Agent       |
| **Phone**           | For phone numbers                       | Contact information            | Twilio Send SMS, WhatsApp Business         |
| **Email**           | For email addresses                     | Contact information            | Gmail Send Email, CRM contact              |
| **Date**            | A calendar to pick a date               | Appointments, deadlines        | Google Calendar Create Event               |
| **Rating**          | For giving a rating                     | Satisfaction, quality scores   | Branch on low ratings                      |
| **Single-Select**   | Allow one option from predefined list   | Multiple choice questions      | Branch on the answer                       |
| **Multi-Select**    | Allow multiple options                  | Interests, features, tags      | Loop over the selected options             |
| **Checkbox**        | A yes/no checkbox submitting true/false | Consent boxes, opt-ins, toggles | Branch or filter automations on the value |
| **URL**             | Accept web addresses or links           | Website links, references      | Scrape Webpage                             |

A **File** upload is saved with the submission and shows up in the Media tab.

### **Step 4: Configure AI-Powered Processing**

#### **Smart Rating Fields**

```
Trigger: Form (Rating field: "Overall rating")
Branch: If "Overall rating" is less than 3
          → Slack → Send Channel Message (#managers)
        Otherwise
          → Add Task (feedback log)
```

#### **Intelligent Text Fields**

```
Trigger: Form (Long Text field: "Feedback")
Action: Categorize with AI (Sentiment Analysis preset, input = "Feedback")
Action: Update Custom Fields (Sentiment)
```

#### **Dynamic Question Logic**

Form questions are fixed. To act differently on different answers, add **Branch** steps after the trigger.

### **Step 5: Set Up AI Processing Rules**

#### **Automatic Response Analysis**

```
Trigger: Form
Action: Ask Agent With Structured Output
  Output: Category (Single Select: complaint, compliment, suggestion, question)
          Urgent (Boolean)
Branch: If Urgent is true → Slack → Send Direct Message (on-call)
```

#### **Smart Validation Rules**

Each field type checks its own format, for example Email, Phone, Number, Date, and URL. For checks after submission, add a **Filter Data** step, or an **Ask Agent With Structured Output** step that flags incomplete answers.

***

## Advanced Form Customization

### **Visual Design & Branding**

#### **Smart Theme Adaptation**

Set the title, the description, the submit button text, and the end page text in the trigger sidebar.

#### **Dynamic Visual Elements**

* **Hide Branding**: Remove the "Powered by Taskade" footer from your public form (paid plans)
* **Form End Page**: Show a custom end screen after submission

### **Multi-Step Forms with AI Logic**

#### **Smart Step Progression**

A form is one page. To collect more information later, send a second form link from the automation, for example in a follow-up email.

***

## Form Templates & Quick Start

### **Start with AI Form Templates**

Don't want to build forms from scratch? Click **➕ Add Trigger**, go to the **Forms** category, and choose a template on the right. Then customize it. Common uses:

| Template Type          | Use Case                         | Included Fields                         | Automation Actions                       |
| ---------------------- | -------------------------------- | --------------------------------------- | ---------------------------------------- |
| **Customer Feedback**  | Collect product/service feedback | Rating, comments, contact info          | Auto-categorize, notify team             |
| **Lead Qualification** | Qualify potential customers      | Company, budget, timeline               | Score leads, assign to sales             |
| **Support Ticket**     | Technical support requests       | Issue type, priority, description       | Route to specialists, create tasks       |
| **Event Registration** | Event sign-ups and RSVPs         | Name, email, dietary restrictions       | Send confirmations, update attendee list |
| **Job Application**    | Collect job applications         | Resume upload, experience, availability | Screen candidates, schedule interviews   |
| **Survey Research**    | Market research and surveys      | Multiple choice, ratings, demographics  | Analyze trends, generate reports         |

### **Share and Use Forms**

1. Go to the **Automations** tab and open your form automation.
2. Go to the **Form** tab at the top.
3. Use the run button to test the form.
4. Click **Publish** in the top-right corner to share the form.

#### **Public Link Sharing**

* Share the form link by email, social media, or messaging
* Publish forms on your own domain with a [custom domain](https://www.taskade.com/learn/genesis/custom-domains) (Pro and up)
* See every submission in the automation **Runs** tab

#### **Website Embedding**

You can embed a published form on your website as well as share its link. Click **Publish**, then copy the **Embed Code**.

#### **Configure Form Visibility**

* **Public link**: Anyone with the link can open and submit the form
* **Require Password**: Anyone who opens the link must enter the password before viewing or submitting (Pro and up)

***

## Integration & Automation

### **Real-Time Workspace Integration**

#### **Automatic Project Creation**

```
Trigger: Form (Customer Feedback)
Action: Categorize with AI (Customer Feedback Analysis preset)
Action: Create Project From Template ("Feedback analysis")
Action: Add Task (customer name, rating, and category)
```

#### **AI Agent Collaboration**

* **Response Analysis**: An **Ask Agent** step reviews each submission
* **Quality Scoring**: **Ask Agent With Structured Output** returns a score field
* **Follow-up Suggestions**: The agent drafts the next step, and a person reviews it
* **Pattern Recognition**: A weekly **Schedule** automation with **Find Task(s)** and **Ask Agent** summarizes trends

### **External Service Integration**

#### **CRM Synchronization**

```
Trigger: Form (Lead form: email, full name, company)
Action: Categorize with AI (Lead Qualification preset)
Action: HubSpot → Create New Contact
Action: HubSpot → Create New Deal (stage from the qualification)
```

Premium integrations such as HubSpot and Salesforce need a paid plan. Pipedrive needs Pro and up.

#### **Communication Automation**

```
Branch on the Lead Qualification result:
  "Hot Lead":
    - Slack → Send Channel Message (#sales)
    - Twilio → Send SMS (manager)
    - Google Calendar → Create Event (follow-up call)
  "Warm Lead":
    - Send an email (team lead)
    - Add Task (sales pipeline)
  "Cold Lead":
    - Gmail → Send Email (thank you)
    - Google Sheets → Insert Row (for trend analysis)
```

***

## Analytics & Insights

### **AI-Powered Form Analytics**

#### **Completion Intelligence**

The automation **Runs** tab lists each submission with the input and output of every step.

#### **Response Quality Metrics**

To track quality, save the AI results of each submission (for example sentiment and category) to a project or a Google Sheet. Then review or chart that data.

### **Smart Reporting Dashboard**

#### **Auto-Generated Insights**

* **Weekly Intelligence Reports**: A **Schedule** automation finds the week's submissions and asks an agent to summarize trends
* **Actionable Recommendations**: Ask the agent to suggest form and process improvements in the same summary

***

## Technical Implementation

### **Embedding Options**

#### **Direct Website Embed**

Publish the form, then share its link or embed it on your website.

### **API Access**

#### **Form Data**

AI Forms does not currently expose a public REST API for reading submissions in API v1 (there is no `/forms` endpoint). To work with submission data programmatically, capture it with an **automation** when a form is submitted — route responses into a project, forward them to an external service via the HTTP/Webhook action, or hand them to an agent. See [Webhooks](../../apis-living-system-development/webhooks.md) and the [Action & Trigger Reference](./actions.md).

### **Webhook Integration**

To send each submission to your own server, add a **Send HTTP Request** step after the form trigger:

```
Trigger: Form
Action: Categorize with AI (Support Ticket Prioritization)
Action: Send HTTP Request
  Method: POST
  URL: https://your-server.example.com/taskade-form
  Body (JSON): the form fields and the AI result
```

***

## Best Practices & Tips

### **Form Design Optimization**

#### **AI-Driven UX Principles**

* **Start small**: Ask only for the fields your automation uses
* **Use the right field type**: Email, Phone, Date, and URL fields check their own format
* **Use a Checkbox for consent**: Branch or filter on the true/false value

#### **Response Quality Enhancement**

* **Question Clarity**: Write short, specific questions
* **Response Validation**: Add a Filter Data step, or an AI step that flags incomplete answers
* **Test first**: Submit a test entry and read the run before you publish

### **Data Privacy & Security**

#### **AI-Enhanced Privacy Controls**

* **Require Password**: Protect a form that is not for the public (Pro and up)
* **Collect less**: Do not ask for data the automation does not need
* **Review the steps**: Check which connected tools receive each submission

### **Performance Optimization**

#### **Loading Speed & Responsiveness**

* Put **Filter Data** early, so later steps run only for submissions that need them
* Keep AI steps after the filter to save AI credits

***

## Real-World Examples

### **Customer Feedback Survey**

```
Use Case: Restaurant feedback collection
Steps:
  - Convert File to Text or Ask Agent on uploaded meal photos
  - Categorize with AI (Sentiment Analysis) on written feedback
  - Branch: route complaints to managers
  - Weekly Schedule automation: summarize service quality trends
```

### **Lead Generation Form**

```
Use Case: B2B lead qualification
Steps:
  - Categorize with AI (Lead Qualification)
  - HubSpot → Create New Contact
  - Branch: Hot leads → Slack alert to sales
```

### **Event Registration System**

```
Use Case: Conference attendee registration
Steps:
  - Ask Agent: recommend sessions from the attendee's interests
  - Gmail → Send Email (confirmation with the recommendations)
  - Google Sheets → Insert Row (attendee list)
```

***

## Troubleshooting & Support

### **Common Issues & Solutions**

#### **AI Analysis Not Working**

* **Check AI credits**: AI steps use the workspace AI credits
* **Check the runs**: Open the run in the **Runs** tab and read the input and output of each step
* **Response Quality**: AI steps need meaningful text responses for analysis
* **Check the input**: Make sure that the AI step points at the right form field with the `@` picker

#### **Integration Problems**

* **Plan**: Premium integrations need a paid plan
* **Data Mapping**: Verify the field mapping between the form and the destination step
* **Authentication**: Reconnect the integration if its connection expired
* **Rate Limits**: Add a Delay step for a service with rate limits

### **Getting Help**

* **Documentation**: [Taskade Developer API](../../apis-living-system-development/developer-home.md)
* **Support**: Contact support for advanced configuration assistance
* **Templates**: Browse pre-built AI form templates in your workspace

***

**🚀 Ready to transform your data collection with AI?** Start with a simple feedback form and discover how AI steps can make every form submission more valuable and actionable.

_For more advanced AI integrations, explore our_ [_AI Agents documentation_](../ai-features/ai-agents-getting-started.md) _and_ [_Automation workflows_](./)_._

---

_Step-by-step guide on taskade.com/learn: [AI Forms](https://www.taskade.com/learn/automation/forms-trigger)._
