---
description: >-
  Build advanced Taskade automations with loop and batch actions, WhatsApp Business messaging, HTTP response schemas, and error handling.
---

# Advanced Automation Actions

This page shows how to repeat steps for each item in a list and send WhatsApp Business messages. It also shows how to read API responses and control what happens when a step fails.

{% hint style="info" %}
The flows on this page use the automation editor. You add each step from the step picker. You insert values from earlier steps with the `@` picker. Premium integrations need a paid plan, for example WhatsApp Business, Slack, X/Twitter, LinkedIn, and Facebook Pages.
{% endhint %}

---

## Loop Actions & Batch Processing

### **What Are Loop Actions?**

A Loop repeats a set of steps one time for each item in a list. One trigger can start one personalized action for each row, task, or item. A loop can contain filters, branches, and other loops.

#### **For Each Loop**
A loop runs one time for each item that is in the list when the loop starts. Then it stops. It does not repeat until a goal occurs, and it has no exit condition of its own.

Under **Variable**, select the source of the list:

| Option | Description |
| --- | --- |
| **Manual List** | You type a custom list of items. The loop uses the items in their order. |
| **Link to Variable** | You connect the loop to a list from an earlier step, for example **Find Row(s)** in Google Sheets or **Find Task(s)** in Taskade. |

```
Trigger: Schedule (weekly)
Action: Google Sheets → Find Row(s) (customers to contact)
Loop: For each row
  Action: HubSpot → Create New Contact
  Action: Gmail → Send email (personalized with the row's name)
```

### **Advanced Loop Features**

#### **Nested Loops**
If each item holds its own list, put a loop inside another loop. For example, each project can hold tasks.

```
Action: Find Task(s) (tasks to review)
Loop: For each task
  Loop: For each assignee
    Action: Send an email (review reminder)
```

#### **Skip Items in a Loop**
A loop has no break condition. To skip items, add a **Filter Data** step inside the loop. An item that does not match stops at the filter. Then the loop continues with the next item.

| What occurs | Result |
| --- | --- |
| The list is empty | The loop runs zero times. The automation continues after the loop. |
| A step inside the loop fails | The loop stops at that item, and the run shows as **Failed**. Earlier items keep their work. |
| A failed step has **Continue if this step fails** checked, with **Stop here** | The loop moves to the next item. |
| A failed step has **Continue if this step fails** checked, with **Go to the next step** | The next step inside the loop runs for the same item. It reads the result of the failed step as empty. |

---

## WhatsApp Business Integration

### **Setup & Authentication**

#### **WhatsApp Business API Configuration**
1. Add a WhatsApp Business action to an automation.
2. Click **Connect**.
3. In [Meta for Developers](https://developers.facebook.com/apps/), create a **Business** app.
4. Click **Set Up WhatsApp**.
5. Link your Business Portfolio, then click **Start using API**.
6. Click **Generate Access Token**.
7. Paste the token in the **System User Access Token** field.
8. Copy the **WhatsApp Business Account ID** from the same page.

{% hint style="info" %}
**Do you build your own webhook receiver?** The developer [Webhooks reference](../../apis-living-system-development/webhooks.md) gives the payload formats and the event types.
{% endhint %}

### **Message Types & Templates**

A trigger from any source starts the automation. Then the WhatsApp step sends the message. WhatsApp Business also has a New Message Received trigger.

| Action | Description |
| --- | --- |
| **Send Message** | Sends a text message to a contact or a group |
| **Send Template Message** | Sends a template message that Meta approved |
| **Send Media** | Sends an image or another media file |

#### **Text Messages**
```
Trigger: Form submission (name, phone, service)
Action: WhatsApp Business → Send Message
  To: @phone
  Text: "Hi @name! Thanks for your inquiry about @service.
         We'll get back to you within 24 hours."
```

#### **Template Messages**
```
Trigger: Task Due (appointment reminders project)
Action: WhatsApp Business → Send Template Message
  Template: appointment_reminder
  Parameters: appointment date and time
```

### **Advanced WhatsApp Workflows**

#### **Customer Support Automation**
```
Trigger: Form submission (support request with phone number)
Action: Categorize with AI (Support Ticket Prioritization)
Branch: If priority is "High"
          → Slack → Send Channel Message (#customer-support)
          → WhatsApp Business → Send Message
              ("A manager will contact you shortly.")
        Otherwise
          → Add Task (support queue)
          → WhatsApp Business → Send Message
              ("We received your request.")
```

#### **E-commerce Integration**
```
Trigger: Stripe → New Payment
Action: WhatsApp Business → Send Template Message
  Template: order_confirmation
Action: Delay (1 day)
Action: WhatsApp Business → Send Message
  Text: "Your order is being prepared!"
```

#### **If a message does not arrive**

| What you see | What to do |
| --- | --- |
| "WhatsApp delivers a free-form message only within 24 hours" (Meta error 131047) | Use **Send Template Message**. |
| "WhatsApp could not deliver to this number" (Meta error 131026) | Make sure that the number is correct and includes the country code. If the person does not use WhatsApp, contact them another way. |
| "The WhatsApp access token expired or was revoked" (Meta error 190) | Connect again with a permanent System User token. |

---

## HTTP Schema Generator

### **Auto-Generate API Schemas**

The **Send HTTP Request** action can make a response schema for you. A schema lists the fields of the response. Later steps can then select these fields with the `@` picker.

#### **Automatic Schema Detection**
1. Configure the HTTP request.
2. Under **Response Body Schema**, select **JSON**.
3. Click **Generate Automatically**.
4. In the dialog, send a test request. Taskade reads the fields from the JSON response.
5. Examine the fields. Keep or remove each field.

#### **Generated Schema Output**
```json
{
  "type": "object",
  "properties": {
    "id": { "type": "integer" },
    "name": { "type": "string" },
    "email": { "type": "string" }
  }
}
```

### **Schema-Driven Validations**
To examine a response before the next steps use it, add a **Branch** or **Filter Data** step after the request. For example, continue only when `email` is not empty. To stop the run when the data is bad, use **Stop and mark as failed**.

---

## Enhanced Social Media Integrations

### **Advanced Twitter/X Integration**

#### **Smart Content Publishing**
| Action | Description |
| --- | --- |
| **Create Post** | Creates a new post on X/Twitter |
| **Create Reply** | Creates a reply to a post |
| **Delete Post** | Deletes a post by its ID |

```
Trigger: Task Completed (launch checklist)
Action: Write with AI (write a short launch post)
Action: X/Twitter → Create Post
```

#### **Engagement Automation**
```
Trigger: RSS → New Item In Feed (your blog feed)
Action: Summarize with AI
Action: X/Twitter → Create Post (summary + link)
```

### **LinkedIn Business Automation**

#### **Professional Content Distribution**
| Action | Description |
| --- | --- |
| **Create Share Update** | Publishes a post to your LinkedIn profile |
| **Create Company Update** | Publishes a post to your company LinkedIn page |

### **Facebook Pages Integration**

#### **Multi-Format Content Publishing**
| Action | Description |
| --- | --- |
| **Create Post** | Creates a post on a Facebook Page that you manage |
| **Create Post with Image** | Creates a post with an image on a Facebook Page that you manage |
| **Create Video Post** | Creates a video post on a Facebook Page that you manage |

---

## Advanced Error Handling

### **Smart Error Recovery**

#### **Automatic Retry Strategies**
Taskade tries a step again automatically after a temporary error. Examples are a network error, an API rate limit, or a server error. An agent step runs one time only, and Taskade does not try it again. The agent steps are **Ask an agent**, **Ask an agent team**, and **Run an agent command**.

You can select what occurs when a step still fails. Open an action step and check **Continue if this step fails**. Then select one option:

* **Stop here** ends the work on that item. In a loop, the loop moves to the next item. Outside a loop, the automation stops at that step, and the run does not show as failed.
* **Go to the next step** runs the next step as if the failed step returned nothing. The run does not show as failed.

Some steps also have an **Error Behavior** setting with **Continue** or **Fail**. Read a web page is one of these steps.

#### **Retry a step when an app is down**
Open an action step and check **Retry if this step fails**. Select how long to **Wait** (1 to 5 minutes). Then select how many times to try again (1 to 5).

This option helps when a connected app is busy or down for a few minutes. A bad input or a broken connection still fails at once. Retries can delay later runs of the same automation. A step that sends a message can send it two times. An agent step does not have this option.

#### **Pause for a person**
Add a **Wait for approval** step. The run waits until a teammate approves or rejects it. A rejection stops the run.

#### **Context-Aware Error Classification**
To send the flow on a different path after a step that can fail, add a **Branch** step after it. To end a run on purpose when the data is wrong, use **Stop and mark as failed**.

### **Comprehensive Error Monitoring**

#### **Run history**
The automation **Runs** tab lists every run. Open a run to see the input and the output of each step. The run also shows why a step failed or why Taskade skipped it. After you correct the cause, click **↻** to run a failed run again.

---

## AI Agent Integration Enhancements

### **Agent Search & Discovery**

#### **Dynamic Agent Selection**
| Action | Description |
| --- | --- |
| **Ask an agent** | Uses a custom AI agent to answer a query |
| **Run an agent command** | Runs a command of a custom agent |
| **Ask an agent**, with **Output Type** set to **Structured Output** | Returns typed fields that you can use in later steps |
| **Create an agent** | Creates a new AI agent in the workspace |
| **Update an agent** | Changes the name, the greeting, or the instructions of an agent |

To use a different agent for each case, add a **Branch** step. Then call a different agent on each path.

#### **Agent Collaboration Workflows**
The **Ask an agent team** action sends one prompt to an AI Team. It returns the answers of more than one agent. AI Teams need Pro and up. With the **Agent Tool** trigger, an agent can run an automation as one of its tools during a chat.

### **Conversation Export & Analysis**

#### **Automated Conversation Processing**
The **Agent Public Chat Ended** trigger starts an automation when a public agent chat has no activity for 5 minutes. The trigger sends the full transcript to later steps.

```
Trigger: Agent Public Chat Ended
Action: Categorize with AI (Sentiment Analysis)
Action: Google Sheets → Insert Row (transcript + sentiment)
Action: Add knowledge to an agent (transcript)
```

---

## Performance Optimization

### **Batch Processing Optimization**

#### **Intelligent Batching**
* Put a **Filter Data** step early. Then later steps run only for the items that you need.
* Inside a loop, put steps that cost more, such as AI steps, after the filter.
* If a service has rate limits, add **Delay** steps between the calls to it.

### **Resource Management**

#### **Memory & Processing Limits**
Each automation run counts toward the limit of runs for each billing period of your plan. AI steps use AI credits. Utility actions use no AI credits. The [pricing](https://www.taskade.com/pricing) page gives the limits of each plan.

---

## Build automations with AI

You do not have to build each flow step by step. Taskade can make an automation from a plain-English description:

* **Taskade EVE**: Describe the result that you want. Taskade EVE writes the automation with its trigger, actions, and connected integrations.
* **Workflow Generator**: Go to [taskade.com/create/flow](https://www.taskade.com/create/flow), or click **Add automation → Generate With AI** in the Automations tab. Describe the workflow and select a mode: Auto, Agent Tool, Workflow, or Form.
* **Generated flows**: A generated flow is a normal automation. You can open it in the flow editor and change its triggers, actions, and conditions.

---

For more automation examples, read [Automation Recipes](./recipes.md) and the [Integration Guide](./integrations.md).

---

_Step-by-step guides on taskade.com/learn: [Loop](https://www.taskade.com/learn/automation/loop-action), [HTTP Request](https://www.taskade.com/learn/automation/http-request), [WhatsApp Business Integration](https://www.taskade.com/learn/connect/whatsapp)._
