---
description: >-
  Build Taskade AI Forms that start an automation on each submission. AI steps then analyze, sort, and route the responses to your workspace and CRM.
---

# AI Forms: Intelligent Data Collection

With AI Forms, you can collect answers and act on them at once. Each submission starts an automation. The AI steps in that automation read each answer, sort it, and run the follow-up actions.

{% hint style="success" %}
**Is this your first AI Form?** Start with a simple feedback form. Then add one AI step after the trigger and see the result of each submission.
{% endhint %}

***

## What Makes AI Forms Special?

### **Traditional Forms vs. AI Forms**

| Feature               | Traditional Forms             | AI Forms                                          |
| --------------------- | ----------------------------- | ------------------------------------------------- |
| **Data Processing**   | Keep the raw answers          | AI steps read and sort each answer                |
| **Follow-up Actions** | A person reviews each answer  | The automation sends each submission to the correct place |
| **Integration**       | A basic webhook or email      | Taskade projects, agents, and 100+ integrations   |
| **Result Display**    | A fixed thank-you page        | A custom end page after the submission            |

### **Key AI Capabilities**

The form is the trigger. The AI work occurs in the steps after the trigger:

* **Sentiment Analysis**: Add **Categorize with AI** with the Sentiment Analysis preset. It finds the tone of text answers.
* **Auto-categorization**: Use **Categorize with AI**, or an **Ask an agent** step with structured output. These steps tag and sort the answers.
* **Intelligent Routing**: Add a **Branch** step on the AI result. The branch selects the next action.
* **File Reading**: Add **Turn a file into text** to read an uploaded file. It also reads a scanned PDF or a photo from a phone.

***

## Creating Your First AI Form

### **Step 1: Choose Your Creation Method**

#### **Option A: AI Generation (Recommended)**

1. In the Automations tab, click **Add automation → Generate With AI**.
2. Select **Form** mode.
3. Describe the form and the actions after a submission:

```
"Create a customer satisfaction survey for my restaurant with:
- Ratings for food quality, service speed, and atmosphere
- Optional text feedback section
- Photo upload for meal pictures
- A thank-you end page
- If rating is below 3, notify the manager in Slack"
```

#### **Option B: Form Builder Interface**

1. Open the **Automations** tab of your workspace.
2. Click **Add automation**. Then select a template, or click **Create** to start with an empty automation.
3. Click **➕ Add Trigger → Form**.
4. Configure the form settings and the fields in the sidebar.
5. Add the automation actions that process the answers.

### **Step 2: Configure Form Settings**

| Setting                | Description                              | Example                                    |
| ---------------------- | ---------------------------------------- | ------------------------------------------ |
| **Form Title**         | A unique title for your form             | "Customer Feedback Survey"                 |
| **Form Description**   | The purpose of the form                  | "Help us improve your experience"          |
| **Submit Button Text** | The text on the submit button            | "Submit Feedback"                          |
| **Form End Page**      | An end screen with custom text           | "Thank you! We'll respond within 24 hours" |

### **Step 3: Choose Form Fields**

AI Forms have many field types. Each type collects a different kind of information:

| Field Type          | Description                             | Use It For                     | Next Step to Add                           |
| ------------------- | --------------------------------------- | ------------------------------ | ------------------------------------------ |
| **Short Text**      | A short answer, like a name or a title  | Names, titles, keywords        | Add Task, Insert Row                       |
| **Long Text**       | A longer answer, like a comment         | Feedback, descriptions         | Categorize with AI (sentiment, topic)      |
| **Option Dropdown** | A list of choices. The user selects one | Categories, preferences        | Branch on the selected option              |
| **Number**          | A number, like an age or a quantity     | Ages, quantities, scores       | Filter Data on a range                     |
| **File**            | The user uploads a file                 | Documents, images, attachments | Turn a file into text, then Ask an agent   |
| **Phone**           | A phone number                          | Contact information            | Twilio Send SMS, WhatsApp Business         |
| **Email**           | An email address                        | Contact information            | Gmail Send Email, CRM contact              |
| **Date**            | A calendar to select a date             | Appointments, deadlines        | Google Calendar Create Event               |
| **Rating**          | A rating                                | Satisfaction, quality scores   | Branch on low ratings                      |
| **Single-Select**   | One option from a list                  | Multiple-choice questions      | Branch on the answer                       |
| **Multi-Select**    | More than one option from a list        | Interests, features, tags      | Loop over the selected options             |
| **Checkbox**        | A yes or no box. It sends true or false | Consent boxes, opt-ins, toggles | Branch or Filter Data on the value        |
| **URL**             | A web address or a link                 | Website links, references      | Read a web page                            |

Taskade saves a **File** upload with the submission. The file shows in the Media tab.

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
Action: Categorize with AI
  Preset: Sentiment Analysis
  Input: "Feedback"
Action: Update Custom Fields (Sentiment)
```

#### **Dynamic Question Logic**

The questions of a form do not change. To do different actions for different answers, add **Branch** steps after the trigger.

### **Step 5: Set Up AI Processing Rules**

#### **Automatic Response Analysis**

```
Trigger: Form
Action: Ask an agent with structured output
  Output: Category (Single Select:
            complaint, compliment, suggestion, question)
          Urgent (Boolean)
Branch: If Urgent is true → Slack → Send Direct Message (on-call)
```

#### **Smart Validation Rules**

Each field type examines its own format, for example Email, Phone, Number, Date, and URL. To examine answers after a submission, add a **Filter Data** step. You can also add an **Ask an agent** step with structured output that finds incomplete answers.

***

## Advanced Form Customization

### **Visual Design & Branding**

#### **Smart Theme Adaptation**

Set the title, the description, the submit button text, and the end page text in the trigger sidebar.

#### **Dynamic Visual Elements**

* **Hide Branding**: Removes the "Powered by Taskade" footer from your public form (paid plans).
* **Form End Page**: Shows a custom end screen after a submission.

### **Multi-Step Forms with AI Logic**

#### **Smart Step Progression**

A form has one page only. To collect more information later, send a link to a second form from the automation. For example, put the link in a follow-up email.

***

## Form Templates & Quick Start

### **Start with AI Form Templates**

You can start from a template instead of an empty form:

1. Click **➕ Add Trigger**.
2. Open the **Forms** category.
3. Select a template on the right.
4. Change the template to fit your needs.

Common templates:

| Template Type          | Use Case                         | Included Fields                         | Automation Actions                       |
| ---------------------- | -------------------------------- | --------------------------------------- | ---------------------------------------- |
| **Customer Feedback**  | Collect feedback on a product or service | Rating, comments, contact info  | Sort the feedback, notify the team       |
| **Lead Qualification** | Qualify possible customers       | Company, budget, timeline               | Score leads, assign them to sales        |
| **Support Ticket**     | Technical support requests       | Issue type, priority, description       | Send to specialists, create tasks        |
| **Event Registration** | Event sign-ups and RSVPs         | Name, email, dietary restrictions       | Send confirmations, update the attendee list |
| **Job Application**    | Collect job applications         | Resume upload, experience, availability | Screen candidates, schedule interviews   |
| **Survey Research**    | Market research and surveys      | Multiple choice, ratings, demographics  | Find trends, make reports                |

### **Share and Use Forms**

1. Open the **Automations** tab, then open your form automation.
2. Open the **Form** tab at the top.
3. Click the run button to test the form.
4. To share the form, click **Publish** in the top-right corner.

#### **Public Link Sharing**

* You can share the form link by email, on social media, or in a message.
* You can publish forms on your own domain with a [custom domain](https://www.taskade.com/learn/genesis/custom-domains) (Pro and up).
* The automation **Runs** tab shows every submission.

#### **Website Embedding**

You can also put a published form on your website. Click **Publish**, then copy the **Embed Code**.

#### **Configure Form Visibility**

* **Public link**: Anyone with the link can open and submit the form.
* **Require Password**: A visitor must enter the password before the visitor can see or submit the form (Pro and up).

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

* **Response Analysis**: An **Ask an agent** step reviews each submission.
* **Quality Scoring**: An **Ask an agent** step with structured output returns a score field.
* **Follow-up Suggestions**: The agent writes a draft of the next step. Then a person reviews it.
* **Pattern Recognition**: A weekly **Schedule** automation with **Find Task(s)** and **Ask an agent** summarizes trends.

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

The automation **Runs** tab lists each submission. It shows the input and the output of each step.

#### **Response Quality Metrics**

To track quality, save the AI results of each submission to a project or a Google Sheet. Examples are the sentiment and the category. Then review that data or make a chart of it.

### **Smart Reporting Dashboard**

#### **Auto-Generated Insights**

* **Weekly Intelligence Reports**: A **Schedule** automation finds the submissions of the week. Then it asks an agent to summarize trends.
* **Actionable Recommendations**: In the same summary, the agent can suggest improvements to the form and to the process.

***

## Technical Implementation

### **Embedding Options**

#### **Direct Website Embed**

Publish the form. Then share its link or put it on your website.

### **API Access**

#### **Form Data**

API v1 has no public REST endpoint to read form submissions (there is no `/forms` endpoint). To use submission data in your own code, catch it with an **automation** when a user submits the form. The automation can:

* Add the answers to a project
* Send the answers to an outside service with the HTTP or Webhook action
* Give the answers to an agent

Read [Webhooks](../../apis-living-system-development/webhooks.md) and the [Action & Trigger Reference](./actions.md).

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

* **Start small**: Ask only for the fields that your automation uses.
* **Use the correct field type**: Email, Phone, Date, and URL fields examine their own format.
* **Use a Checkbox for consent**: Branch or filter on the true or false value.

#### **Response Quality Enhancement**

* **Question Clarity**: Write short and specific questions.
* **Response Validation**: Add a Filter Data step, or an AI step that finds incomplete answers.
* **Test first**: Before you publish, submit a test entry and read the run.

### **Data Privacy & Security**

#### **AI-Enhanced Privacy Controls**

* **Require Password**: Protect a form that is not for the public (Pro and up).
* **Collect less**: Do not ask for data that the automation does not need.
* **Review the steps**: Find out which connected tools get each submission.

### **Performance Optimization**

#### **Loading Speed & Responsiveness**

* Put **Filter Data** early. Then later steps run only for the submissions that need them.
* Put AI steps after the filter. This uses fewer AI credits.

***

## Real-World Examples

### **Customer Feedback Survey**

```
Use Case: Restaurant feedback collection
Steps:
  - Turn a file into text or Ask an agent on uploaded meal photos
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
  - Ask an agent: recommend sessions from the attendee's interests
  - Gmail → Send Email (confirmation with the recommendations)
  - Google Sheets → Insert Row (attendee list)
```

***

## Troubleshooting & Support

### **Common Issues & Solutions**

#### **AI Analysis Not Working**

* **AI credits**: AI steps use the AI credits of the workspace. Make sure that credits are available.
* **Runs**: Open the run in the **Runs** tab. Read the input and the output of each step.
* **Response Quality**: An AI step needs a text answer with real content.
* **Input**: Make sure that the AI step points at the correct form field. Use the `@` picker.

#### **Integration Problems**

* **Plan**: Premium integrations need a paid plan.
* **Data Mapping**: Make sure that each form field goes to the correct field of the next step.
* **Authentication**: If the connection of an integration expired, connect it again.
* **Rate Limits**: If a service has rate limits, add a Delay step.

### **Getting Help**

* **Documentation**: [Taskade Developer API](../../apis-living-system-development/developer-home.md)
* **Support**: Contact support for help with advanced configuration.
* **Templates**: Find ready-made AI form templates in your workspace.

***

_For more AI integrations, read the_ [_AI Agents documentation_](../ai-features/ai-agents-getting-started.md) _and_ [_Automation workflows_](./)_._

---

_Step-by-step guide on taskade.com/learn: [AI Forms](https://www.taskade.com/learn/automation/forms-trigger)._
