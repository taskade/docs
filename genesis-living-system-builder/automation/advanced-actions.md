---
description: >-
  Build advanced Taskade automations with loop and batch actions, WhatsApp Business messaging, HTTP response schemas, and error handling.
---

# Advanced Automation Actions

**Master the latest automation capabilities including loop processing, WhatsApp Business integration, HTTP response schema generation, and error handling. These features turn complex workflows into simple, reliable automations.**

{% hint style="info" %}
The flows on this page use the automation editor. You add each step from the step picker, and you insert values from earlier steps with the `@` picker. Premium integrations (for example WhatsApp Business, Slack, X/Twitter, LinkedIn and Facebook Pages) need a paid plan.
{% endhint %}

---

## Loop Actions & Batch Processing

### **What Are Loop Actions?**

A Loop repeats a set of steps once for each item in a list. One trigger fans out into many personalized actions, one per row, task, or item. Loops support filters, conditional branches, and nested loops.

#### **For Each Loop**
A loop is a bounded for-each. It runs once for every item that already exists in the list, then stops. It does not repeat until a goal is reached, and it has no exit condition of its own.

Point the loop at a list in one of two ways:

| Field | Description |
| --- | --- |
| **List** | Type a custom list of items by hand. The loop processes each item in order. |
| **Variable** | Connect the loop to a list from an earlier step, such as **Find Row(s)** in Google Sheets or **Find Task(s)** in Taskade. |

```
Trigger: Schedule (weekly)
Action: Google Sheets → Find Row(s) (customers to contact)
Loop: For each row
  Action: HubSpot → Create New Contact
  Action: Gmail → Send email (personalized with the row's name)
```

### **Advanced Loop Features**

#### **Nested Loops**
Put a loop inside another loop when each item holds its own list, for example projects that each hold tasks.

```
Action: Find Task(s) (tasks to review)
Loop: For each task
  Loop: For each assignee
    Action: Send an email (review reminder)
```

#### **Skip Items in a Loop**
A loop has no break condition. To skip items, add a **Filter Data** step inside the loop. An item that does not match stops there, and the loop continues with the next item.

| What happens | Result |
| --- | --- |
| The list is empty | The loop runs zero times, and the automation continues after it. |
| A step inside the loop fails | The loop stops at that item and the run is recorded as **Failed**. Earlier items keep their work. |
| A failed step has **Continue if this step fails** checked, with **Stop here** | The loop moves to the next item. |
| A failed step has **Continue if this step fails** checked, with **Go to the next step** | The next step inside the loop runs for the same item and reads the result of the failed step as empty. |

---

## WhatsApp Business Integration

### **Setup & Authentication**

#### **WhatsApp Business API Configuration**
1. Add a WhatsApp Business action to an automation and click **Connect**.
2. In [Meta for Developers](https://developers.facebook.com/apps/), create a **Business** app and click **Set Up WhatsApp**.
3. Link your Business Portfolio and click **Start using API**.
4. Click **Generate Access Token**. Paste it in the **System User Access Token** field.
5. Copy the **WhatsApp Business Account ID** from the same page.

{% hint style="info" %}
**Building your own webhook receiver?** See the developer [Webhooks reference](../../apis-living-system-development/webhooks.md) for payload formats and event types.
{% endhint %}

### **Message Types & Templates**

A trigger from any source starts the automation, and the WhatsApp step sends the message. WhatsApp Business also has a New Message Received trigger.

| Action | Description |
| --- | --- |
| **Send Message** | Sends a text message to a contact or group |
| **Send Template Message** | Sends a pre-approved template message |
| **Send Media** | Sends an image or other media file |

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

---

## HTTP Schema Generator

### **Auto-Generate API Schemas**

The **Send HTTP Request** action can build a response schema for you. Later steps can then pick fields from the response with the `@` picker.

#### **Automatic Schema Detection**
1. Set up the HTTP request as usual.
2. Under **Response Body Schema**, select **JSON**.
3. Click **Generate Automatically**. A dialog opens where you send a test request.
4. Taskade extracts the available fields from the JSON response.
5. Review the extracted fields, and keep or remove each one.

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
To check a response before you act on it, add a **Branch** or **Filter Data** step after the request. For example, continue only when `email` is not empty. To stop the run on bad data, use **Stop and mark as failed**.

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
Action: Generate with AI (write a short launch post)
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
| **Create Post** | Creates a post on a Facebook Page you manage |
| **Create Post with Image** | Creates a post with an image on a Facebook Page you manage |
| **Create Video Post** | Creates a video post on a Facebook Page you manage |

---

## Advanced Error Handling

### **Smart Error Recovery**

#### **Automatic Retry Strategies**
Taskade retries a step automatically after a temporary error, such as a network error, an API rate limit, or a server error. An agent step (**Ask an agent**, **Ask an agent team**, or **Run an agent command**) runs once and is not retried.

To decide what happens when a step still fails, open an action step and check **Continue if this step fails**. Then pick one option:

* **Stop here** ends the work on that item. In a loop, the loop moves to the next item. Outside a loop, the automation stops at that step, and the run is not marked as failed.
* **Go to the next step** runs the next step as if the failed step returned nothing. The run is not marked as failed.

Some steps, such as Scrape Webpage, also have an **Error Behavior** setting with **Continue** or **Fail**.

#### **Context-Aware Error Classification**
Use a **Branch** step after a risky step to route on its result. Use **Stop and mark as failed** to end a run on purpose when the data is wrong.

### **Comprehensive Error Monitoring**

#### **Run history**
The automation **Runs** tab lists every run. Open a run to see the exact input and output of each step and the reason a step failed or was skipped. Click **↻** to retry a failed run after you fix the cause.

---

## AI Agent Integration Enhancements

### **Agent Search & Discovery**

#### **Dynamic Agent Selection**
| Action | Description |
| --- | --- |
| **Ask an agent** | Uses a custom AI agent to respond to a query |
| **Run an agent command** | Runs a custom agent command |
| **Ask an agent**, with **Output Type** set to **Structured Output** | Returns typed fields you can use in later steps |
| **Create an agent** | Creates a new AI agent in the workspace |
| **Update an agent** | Changes the name, the greeting, or the instructions of an agent |

To pick an agent per case, add a **Branch** step and call a different agent on each path.

#### **Agent Collaboration Workflows**
The **Ask an agent team** action sends one prompt to an AI Team and returns responses from multiple agents. AI Teams need Pro and up. The **Agent Tool** trigger lets an agent run an automation as one of its tools during a conversation.

### **Conversation Export & Analysis**

#### **Automated Conversation Processing**
The **Agent Public Chat Ended** trigger starts an automation when a public agent conversation stays inactive for 5 minutes. The trigger passes the full transcript to later steps.

```
Trigger: Agent Public Chat Ended
Action: Categorize with AI (Sentiment Analysis)
Action: Google Sheets → Insert Row (transcript + sentiment)
Action: Add Knowledge to Agent (transcript)
```

---

## Performance Optimization

### **Batch Processing Optimization**

#### **Intelligent Batching**
* Put a **Filter Data** step early, so later steps run only for the items you need.
* Keep expensive steps, such as AI steps, after the filter inside a loop.
* Use **Delay** to space out calls to a service with rate limits.

### **Resource Management**

#### **Memory & Processing Limits**
Automation runs count toward the plan limit for runs per billing period. AI steps use AI credits, and utility actions use no AI credits. See [pricing](https://www.taskade.com/pricing) for the limits of each plan.

---

## Build automations with AI

You don't have to assemble flows by hand — Taskade already builds automations from natural language:

* **Taskade EVE** — describe the outcome you want and Taskade EVE drafts the automation: trigger, actions, and connected integrations.
* **Workflow Generator** at [taskade.com/create/flow](https://www.taskade.com/create/flow), or **Add automation → Generate With AI** in the Automations tab — describe the workflow and pick a mode: Auto, Agent Tool, Workflow, or Form.
* Generated flows are normal automations — open them in the flow editor to adjust triggers, actions, and conditions like any hand-built workflow.

---

**🚀 Ready to use these advanced automation capabilities?** Start with loop actions to handle batch processing, then explore WhatsApp Business integration to reach customers where they are.

*For more automation examples and tutorials, check out our [Automation Recipes](./recipes.md) and [Integration Guide](./integrations.md).*

---

_Step-by-step guides on taskade.com/learn: [Loop](https://www.taskade.com/learn/automation/loop-action), [HTTP Request](https://www.taskade.com/learn/automation/http-request), [WhatsApp Business Integration](https://www.taskade.com/learn/connect/whatsapp)._
