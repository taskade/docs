---
description: >-
  Complete Taskade automation action reference: create tasks, run AI agents, send HTTP requests, connect Slack and GitHub, and chain steps into workflows.
---

# Action & Trigger Reference

Actions are the steps that an automation does. Each action connects to a service or to your workspace. It creates, updates, or reads data. You can put actions one after the other to make a workflow.

## Overview

A trigger starts an automation. The actions are the "then" part: they do the work when the trigger conditions are true. With actions, you can create projects, manage tasks, ask AI, send data to other apps, and change data.

{% hint style="success" %}
You can connect actions in a chain. Add a condition to choose a path, and transform data between steps.
{% endhint %}

## Complete Action Reference

### Taskade Core Actions

| Action | Description | Parameters |
| --- | --- | --- |
| **Create Project** | Creates a new project in your workspace or folder | `name`, `folderId`, `template`, `defaultView` |
| **Add Task** | Adds a new task to a project | `projectId`, `title`, `content`, `assignee`, `dueDate` |
| **Mark Task as Completed** | Marks a task as done | `taskId`, `completedBy`, `completionNote` |
| **Create Project From Template** | Creates a project from a Taskade template or your own template | `templateId`, `name`, `folderId` |
| **Move Task** | Moves a task to another block in the same project | `projectId`, `taskId`, `targetBlockId` |
| **Assign Task** | Assigns a task to a person | `taskId`, `userId`, `notifyAssignee` |
| **Ask AI** | Uses AI to answer a question | `query`, `context`, `model` |
| **Write with AI** | Uses AI to write content or a reply | `prompt`, `style`, `length` |
| **Reply with AI** | Writes a reply with AI | `input`, `tone`, `format` |
| **Ask an agent** | Sends a question to one of your custom AI agents | `agentId`, `query`, `parameters` |
| **Run an agent command** | Runs a saved command of a custom AI agent | `agentId`, `command`, `input` |
| **Add knowledge to an agent** | Gives an agent a file, a website, a YouTube video, or text to learn from | `agentId`, `content`, `source` |
| **Add a project to an agent** | Lets an agent read a project as knowledge | `agentId`, `projectId`, `scope` |
| **Structured output** | Set **Output Type** to **Structured Output** on an **Ask an agent** or **Run an agent command** step. The step returns typed fields instead of free text | `outputType`, `output` |
| **Add a comment** | Adds a comment to a task | `taskId`, `comment` |
| **Update a task** | Changes the content or the note of a task | `taskId`, `content`, `note` |
| **Get a task** | Reads a task and returns its current data | `taskId` |
| **Get project info** | Reads the project data: name, dates, and members | `projectId` |
| **Attach a file** | Attaches a file to a task. It returns `attachmentId`, `fileId`, `projectId`, `nodeId`, `filename`, and `mimetype` | `projectId` (Project), `nodeId` (Task ID, UUID), `fileUrl` (File) |

### Data Processing & Integration Actions

| Action | Description | Parameters |
| --- | --- | --- |
| **Read a web page** | Gets the content of a web page | `url`, `errorBehavior` |
| **Turn a file into text** | Changes a source file into text | `fileId`, `outputFormat`, `encoding` |
| **Transcribe a YouTube video** | Changes a YouTube video into text | `youtubeUrl` |
| **Turn a recording into a project** | Writes an audio recording as text in a new project | `audioRecording`, `projectTitle` |
| **Save a file to Media** | Downloads a file from a link into Media | `url`, `fileName`, `folderId` |
| **Send HTTP Request** | Sends a request to an API endpoint. Authentication is optional for each call | `method`, `url`, `headers`, `body`, optional auth |
| **Search the web** | Searches the web for information. You can add the result to a project or give it to AI | `query` |

{% hint style="info" %}
**Scanned documents work too.** If a file has no text that a computer can read, Turn a file into text uses **vision OCR**. OCR reads the words in scanned PDFs, image-only documents, and photos of pages. OCR runs count toward the AI usage of your workspace.
{% endhint %}

### Workflow Control Actions

| Action | Description | Parameters |
| --- | --- | --- |
| **Loop** | Runs the steps inside it once for each item | `dataSource`, `iterationLogic` |
| **Filter Data** | Continues only when the data meets a condition | `condition`, `dataSource`, `filterCriteria` |
| **Branch** | Makes different paths in your workflow. Each path has a condition | `condition`, `truePath`, `falsePath` |
| **Transform Array to String** | Changes the output of Find Task(s) and Find Row(s) into text | `arrayInput`, `template`, `separator` |
| **Run Automation** | Runs a saved automation as a subflow. A depth limit stops an endless chain | `flowId`, `input` |

### Advanced Actions

| Action | Description | Parameters |
| --- | --- | --- |
| **Update Custom Fields** | Changes the custom fields of a task | `taskId`, `fieldId`, `value`, `projectId` |
| **Find Task(s)** | Finds tasks in projects | `projectId`, `searchCriteria`, `maxResults` |
| **Delay** | Stops the automation for a time, then continues | `duration`, `unit` |

## Core Taskade Actions

### Project & Task Management

| Action | Description | Parameters |
| --- | --- | --- |
| **Create Project** | Creates a new project in your workspace or folder. Example: Create a "Customer Feedback" project from a template | `name`, `folderId`, `template`, `defaultView` |
| **Create Project From Template** | Creates a project from a Taskade template or your own template. Example: Create a project from the "Support Workflow" template | `templateId`, `name`, `folderId` |
| **Add Task** | Adds a new task to a project. Example: Add the task "Review feedback #123" | `projectId`, `title`, `content`, `assignee`, `dueDate` |
| **Mark Task as Completed** | Marks a task as done. Example: Mark a task as done with a resolution note | `taskId`, `completedBy`, `completionNote` |
| **Move Task** | Moves a task to another block in the same project. Example: Move the task to the "Processed" block | `projectId`, `taskId`, `targetBlockId` |
| **Assign Task** | Assigns a task to a person. Example: Assign the task to a support specialist and send a notification | `taskId`, `userId`, `notifyAssignee` |
| **Update Custom Fields** | Changes the custom fields of a task. Example: Set the priority to "High" and the status to "In Progress" | `taskId`, `fieldId`, `value`, `projectId` |
| **Find Task(s)** | Finds tasks in projects. Example: Find all tasks of one person | `projectId`, `searchCriteria`, `maxResults` |

### Find Task(s) Automation Settings

{% hint style="info" %}
With the Find Task(s) action, an automation can get tasks while it runs. You can search and filter tasks by your criteria. Then later steps use the tasks that the action finds.
{% endhint %}

#### When to Use Find Tasks

**Use it to:**

* **Process many tasks** - Do the same work on many tasks at one time
* **Run conditional workflows** - Process only the tasks that meet your criteria
* **Make reports** - Write summaries of a group of tasks
* **Synchronize data** - Keep other apps up to date
* **Control quality** - Find the tasks that need attention

#### Search Criteria Options

| Field                 | Conditions                                                                             | Value Type       | Example       |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------- | ------------- |
| **Task Created At**   | Before, After, Empty, Not Empty                                                        | Date             | `2024-01-01`  |
| **Task Completed At** | Before, After, Empty, Not Empty                                                        | Date             | `2024-01-15`  |
| **Task Content**      | Contains, Not Contains, Matches, Not Matches, Starts With, Ends With, Empty, Not Empty | Text             | `"urgent"`    |
| **Task Status**       | Equals, Not Equals                                                                     | Status           | `"completed"` |
| **Assignee**          | Equals, Not Equals, Empty, Not Empty                                                   | User             | `"john.doe"`  |
| **Due Date**          | Before, After, Empty, Not Empty                                                        | Date             | `today()`     |
| **Custom Fields**     | The conditions depend on the field type                                                | Depends on field | `"high"`      |

#### Output Data Structure

**Task Object Properties:**

```json
{
  "id": "task_123",
  "name": "Complete project proposal",
  "content": "Detailed task description",
  "assignee": "user@example.com",
  "due_date": "2024-01-15T10:00:00Z",
  "status": "in_progress",
  "created_at": "2024-01-10T09:00:00Z",
  "completed_at": null,
  "custom_fields": {
    "priority": "high",
    "category": "sales"
  }
}
```

#### Find Tasks Use Cases

| Use Case                    | Automation Flow                                               | Result                            |
| --------------------------- | ------------------------------------------------------------- | --------------------------------- |
| **Overdue Task Alerts**     | Schedule → Find Tasks (overdue) → Send Email                  | Fewer missed deadlines            |
| **Weekly Progress Reports** | Schedule → Find Tasks (completed this week) → Generate Report | A clear view of project progress  |
| **Workload Balancing**      | Schedule → Find Tasks (by assignee) → Reassign Tasks          | Work divided fairly in the team   |
| **Quality Assurance**       | Schedule → Find Tasks (missing details) → Flag for Review     | Tasks with complete details       |
| **Performance Analytics**   | Schedule → Find Tasks (by criteria) → Update Dashboard        | Decisions based on data           |

#### Advanced Filtering Examples

**Find High-Priority Overdue Tasks:**

```
Project: "Active Projects"
Filters:
- Priority Custom Field = "high"
- Due Date < today()
- Status ≠ "completed"
```

**Find Tasks Assigned to Specific Team:**

```
Project: "Team Tasks"
Filters:
- Assignee contains "@company.com"
- Created At > last_week()
- Status = "in_progress"
```

**Find Tasks with Missing Information:**

```
Project: "All Projects"
Filters:
- Due Date is empty
- Assignee is empty
- Custom Field "Priority" is empty
```

#### Integration with Other Actions

**Find Tasks + Loop Processing:**

```
Find Tasks → Loop → Process Each Task → Update Status
```

**Find Tasks + Conditional Actions:**

```
Find Tasks → Branch (if count > 10) → Send Alert
```

**Find Tasks + Data Export:**

```
Find Tasks → Transform Array → Export to CSV
```

#### Best Practices

* **Limit the results** - Smaller results run faster
* **Use specific filters** - Narrow the results to the tasks that you need
* **Sort the results** - Then the automation processes the tasks in a known order
* **Plan for no results** - Make sure that the workflow works when the action finds no task
* **Test on a small project first** - Then use the automation on large projects

***

### Custom Fields Automation Settings

{% hint style="info" %}
The Update Custom Fields action changes the custom fields of a task for you. Your task data stays current, and you do not update it by hand.
{% endhint %}

**Available Parameters:**

* **PROJECT ID**: The ID of the project
* **TASK ID**: The ID of the task to update
* **FIELDS**: The fields to update, each with its new value

**Example Usage:**

```json
{
  "action": "Update Custom Fields",
  "projectId": "proj_123",
  "taskId": "task_456",
  "fields": {
    "priority": "High",
    "status": "In Progress",
    "dueDate": "2024-01-15"
  }
}
```

**Related Triggers:**

* Custom Field Updated (Automation Trigger)
* Task Added
* Task Completed

### Agent Commands

| Action | Description | Parameters |
| --- | --- | --- |
| **Ask AI** | Uses AI to answer a question. Example: "What is the priority of this ticket?" | `question`, `context`, `model` |
| **Write with AI** | Uses AI to write content or a reply. Example: Write an email reply to a customer | `prompt`, `contentType`, `length` |
| **Reply with AI** | Writes a reply with AI. Example: Reply to common questions | `input`, `responseType`, `tone` |
| **Ask an agent** | Sends a question to one of your custom AI agents. Example: Ask a support agent | `agentId`, `question`, `context` |
| **Run an agent command** | Runs a saved command of a custom AI agent. Example: Run the "analyze\_sentiment" command | `agentId`, `commandId`, `input` |
| **Structured output** | Set **Output Type** to **Structured Output** on an **Ask an agent** or **Run an agent command** step. Example: Get typed fields back instead of free text | `outputType`, `output` |
| **Add a project to an agent** | Lets an agent read a project as knowledge. Example: Keep an agent up to date with the newest project data | `agentId`, `projectId` |

{% hint style="info" %}
**Create and change agents from a flow:** The **Create an agent** action adds a new AI agent to the workspace with a name and instructions. The **Update an agent** action changes the name, the greeting, or the instructions of an agent.
{% endhint %}

### Structured Output Settings

{% hint style="info" %}
Structured output is a setting on the **Ask an agent** and **Run an agent command** steps, not a separate action. Set **Output Type** to **Structured Output**, then add the typed fields that you want back. Later steps can use each field as a variable.

**BYOK support:** You can give the agent a model on your own API key (BYOK). Then the structured output step uses your key, and your own API account pays for the call.
{% endhint %}

#### When to Use Structured Output

**Use it to:**

* Get specific data points from text that has no fixed format
* Change AI replies into variables that later steps can use
* Fill spreadsheet columns for you
* Choose a path in the workflow from the AI result
* Use the same data format in all your automations

#### Output Schema Types

| Type              | Description                    | Example Use Case                            |
| ----------------- | ------------------------------ | ------------------------------------------- |
| **String**        | Text data                      | Get product names, titles, descriptions     |
| **Number**        | Numbers                        | Calculate costs, scores, percentages        |
| **Boolean**       | True or false                  | Examine conditions, validate data           |
| **Date**          | Dates                          | Get deadlines and schedule dates            |
| **Single Select** | One value from a list          | Status: "pending", "approved", "rejected"   |

#### Structured Output Use Cases

| Use Case                | Automation Flow                               | Example                                   |
| ----------------------- | --------------------------------------------- | ----------------------------------------- |
| **Cost Analysis**       | Task Added → Ask an agent → Update Fields        | Calculate the budget difference           |
| **Lead Qualification**  | Form Submitted → Ask an agent → Route Lead       | Score and qualify new leads               |
| **Content Scoring**     | Task Added → Ask an agent → Update Status        | Rate content quality and assign reviewers |
| **Performance Metrics** | Schedule → Ask an agent → Update Dashboard       | Calculate completion rates and KPIs       |
| **Approval Routing**    | Task Created → Ask an agent → Conditional Action | Send tasks to a path from the AI result   |

#### Example Schema Configuration

```json
{
  "output_schema": {
    "priority_score": {
      "type": "number",
      "description": "Rate priority from 1-10"
    },
    "category": {
      "type": "single_select",
      "options": ["urgent", "normal", "low"],
      "description": "Task priority category"
    },
    "needs_review": {
      "type": "boolean",
      "description": "Whether task requires additional review"
    }
  }
}
```

**Tips:**

* Give each field a clear name that matches your workflow
* Write a clear description for each field. The AI uses it to fill the field
* Test the fields with sample data before you turn the automation on
* Use the fields in a Branch or a Filter Data step

***

| Action | Description | Parameters |
| --- | --- | --- |
| **Prompt AI** | Gives the model detailed instructions. Example: Process text with your own instructions | `prompt`, `systemMessage`, `temperature` |

### Add a project to an agent Automation Settings

{% hint style="info" %}
The Add a project to an agent action lets an agent read a project as knowledge. The agent can then use the project details in its replies. The agent stays up to date with the newest project data.
{% endhint %}

#### When to Use Add a project to an agent

**Use it to:**

* **Teach agents about new work** - Give agents the newest project data
* **Get replies with context** - Let agents use the details of a project
* **Help new team members** - Give an agent past projects, so it can answer questions
* **Make a research assistant** - Give an agent the content of research projects
* **Prepare a launch** - Give an agent the plan of a feature launch or a campaign

#### Add a project to an agent Parameters

| Parameter                   | Description                                     | Example                            |
| --------------------------- | ----------------------------------------------- | ---------------------------------- |
| **Agent ID**                | The ID of the AI agent                          | `agent_123456`                     |
| **Project ID**              | The ID of the project to add as knowledge       | `proj_789012`                      |

#### Add a project to an agent Use Cases

| Use Case                   | Automation Flow                                                  | Result                                     |
| -------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| **New Project Onboarding** | Project Created → Add a project to an agent → Welcome Message         | The agent knows each new project at once   |
| **Research Assistant**     | Task Added → Add a project to an agent → Enable Queries               | Research help with context                 |
| **Customer Support**       | Project Completed → Add a project to an agent → Update Knowledge Base | Support replies that use project data      |
| **Team Collaboration**     | Task Added → Add a project to an agent → Notify Team                  | The team gets the same information         |
| **Knowledge Management**   | Schedule → Add a project to an agent → Update Documentation           | The knowledge base stays current           |

#### Integration Examples

**Automated Agent Training:**

```
Trigger: Project Created
Action: Add a project to an agent
Action: Send Channel Message (Agent trained on new project)
Result: Agents immediately knowledgeable about new projects
```

**Research Project Updates:**

```
Trigger: Task Added (to the research project)
Action: Add a project to an agent
Action: Ask an agent (Summarize new findings)
Action: Update Dashboard (With insights)
Result: Real-time research insights and summaries
```

**Launch Preparation:**

```
Trigger: Task Added (To launch project)
Action: Add a project to an agent
Action: Ask an agent (Generate FAQ)
Action: Send Email (Team preparation)
Result: Comprehensive launch support and documentation
```

#### Best Practices

* **Add projects at the right time** - Add a project when the agent needs it
* **Add focused projects** - Too much data in one agent can make its replies less clear
* **Refresh the knowledge** - Use a schedule to add a project again when it changes
* **Use specialized agents** - Make one agent for each type of project
* **Examine the replies** - Read the agent replies after you add new knowledge

***

### Data Processing & Utilities

| Action | Description | Parameters |
| --- | --- | --- |
| **Read a web page** | Gets the content of a web page. Example: Get product information from a public site | `url`, `errorBehavior` |

### Read a web page Automation Settings

{% hint style="info" %}
The Read a web page action gets data from a website for you. You can use it for market research, lead lists, and price tracking. You do not copy the data by hand.
{% endhint %}

#### When to Use Read a web page

**Use it to:**

* **Monitor other companies** - Track prices, products, and promotions
* **Do market research** - Get data from many sources
* **Find leads** - Get contact information from public directories
* **Monitor prices** - Track product prices on store sites
* **Collect content** - Collect news, reviews, and industry updates

#### Read a web page Parameters

| Parameter       | Description                         | Example                               |
| --------------- | ----------------------------------- | ------------------------------------- |
| **URL**            | The address of the web page                           | `https://competitor.com/products` |
| **Error Behavior** | What the step does if it cannot read the page: Continue or Fail | `Fail` (default)        |

#### Read a web page Use Cases

| Use Case                | Automation Flow                                                        | Result                             |
| ----------------------- | ---------------------------------------------------------------------- | ---------------------------------- |
| **Competitor Analysis** | Schedule → Read a web page → Analyze with AI → Update Dashboard         | Current data about the market      |
| **Price Monitoring**    | Schedule → Read a web page → Compare Prices → Send Alerts               | Fast reaction to price changes     |
| **Lead Generation**     | Task Added → Read a web page → Extract Contacts → Create Leads          | New leads without manual search    |
| **Market Research**     | Schedule → Read a web page → Aggregate Data → Generate Reports          | Regular market reports             |
| **Content Monitoring**  | Schedule → Read a web page → Categorize Content → Update Knowledge Base | Current industry news              |

#### Integration Examples

**Competitor Price Monitoring:**

```
Trigger: Schedule (Daily)
Action: Read a web page (Competitor Pricing Page)
Action: Ask an agent with structured output (Extract and compare prices)
Action: Send Slack Alert (If Significant Changes)
Result: Automated competitive pricing intelligence
```

**Lead Generation from Directories:**

```
Trigger: Task Added (Industry Research)
Action: Read a web page (Industry Directory)
Action: Ask an agent with structured output (Extract company details)
Action: Categorize with AI (Lead Qualification)
Action: Create Tasks (Follow-up Actions)
Result: Automated lead discovery and qualification
```

**Market News Aggregation:**

```
Trigger: Schedule (Hourly)
Action: Read a web page (Industry News Sites)
Action: Categorize with AI (Document Classification)
Action: Add to Knowledge Base
Result: Current industry news awareness
```

#### Output Data Structure

**Page Content Format:**

```json
{
  "title": "Product Catalog",
  "url": "https://example.com/products",
  "content": "Full page text content..."
}
```

#### Best Practices

* **Obey robots.txt** and the terms of service of each website
* **Do not send too many requests** to one server in a short time
* **Monitor the results** in the **Runs** tab
* **Keep results that you need again** - Then you send fewer requests
* **Plan for errors** - A site can be down or change its layout

#### Legal and Ethical Considerations

* **Terms of Service**: Read the terms of each website and obey them
* **Request Rate**: Do not send too many requests to a server
* **Data Usage**: Obey the data protection laws that apply to you
* **Attribution**: Name your sources when you use their content
* **Fair Use**: Use the data in a responsible way

| Action | Description | Parameters |
| --- | --- | --- |
| **Turn a file into text** | Changes a source file into text. Example: Change a PDF manual into text that you can search | `fileUrl`, `fileType`, `extractImages` |
| **Transcribe a YouTube video** | Changes a YouTube video into text. Example: Make a transcript of a training video | `youtubeUrl` |
| **Turn a recording into a project** | Writes an audio recording as text in a new project. Example: Turn a voice memo into project notes | `audioRecording`, `projectTitle` |

### Transcribe a YouTube video Automation Settings

{% hint style="info" %}
The Transcribe a YouTube video action changes the audio of a video into text that you can read and search. You can use the text for an index, for accessibility, for study material, or for new content.
{% endhint %}

#### When to Use Transcribe a YouTube video

**Use it to:**

* **Index content** - Make video content searchable
* **Make study material** - Write study guides from a video
* **Reuse content** - Change a video into a blog post, an article, or social posts
* **Improve accessibility** - Give a text transcript to users who cannot hear the video
* **Do research** - Get the main points of a video presentation
* **Manage knowledge** - Make a library of video transcripts that you can search

#### Transcribe a YouTube video Parameters

| Parameter                  | Description                               | Example                                       |
| -------------------------- | ----------------------------------------- | --------------------------------------------- |
| **YouTube URL**            | The address of the YouTube video          | `https://www.youtube.com/watch?v=VIDEO_ID`    |

#### Transcribe a YouTube video Use Cases

| Use Case                  | Automation Flow                                | Result                                  |
| ------------------------- | ---------------------------------------------- | --------------------------------------- |
| **Content Indexing**      | Schedule → Transcribe → Index in Search        | Searchable transcripts of your videos   |
| **Educational Resources** | Task Added → Transcribe → Generate Study Guide | Faster study guides                     |
| **Content Repurposing**   | Video Upload → Transcribe → Generate Blog Post | The same content on more channels       |
| **Accessibility**         | Video Published → Transcribe → Add Captions    | Content that more people can use        |
| **Research Analysis**     | Video Found → Transcribe → Extract Insights    | Faster research                         |

#### Integration Examples

**Educational Content Pipeline:**

```
Trigger: Video Added to Course
Action: Transcribe a YouTube video
Action: Write with AI (Study guide)
Action: Create Quiz Questions
Action: Add to Learning Management System
Result: Automated course content creation
```

**Content Repurposing Workflow:**

```
Trigger: YouTube Video Published
Action: Transcribe a YouTube video
Action: Ask an agent with structured output (Extract key points)
Action: Write with AI (Blog post)
Action: Publish to Website
Result: Multi-platform content distribution
```

**Research and Analysis System:**

```
Trigger: Weekly Schedule
Action: Search the web (Industry videos)
Action: Transcribe a YouTube video (Top results)
Action: Categorize with AI (Topics)
Action: Generate Research Summary
Action: Add to Knowledge Base
Result: Automated industry research
```

#### Output Data Structure

The action returns the video title, a metadata section, and a transcript section. Give the transcript to an AI step to summarize it or to get the main points.

#### Best Practices

* **Use videos with clear audio** - Clear audio gives better transcripts
* **Protect privacy** - Read the content before you share it in public
* **Control cost** - Long videos can cost more to process
* **Examine the quality** - Read important transcripts for errors
* **Plan the next steps** - Decide how later steps use the transcript

#### Processing Time

* **Processing Time** - A longer video takes more time to process
* **Saved Transcripts** - Save transcripts, so you do not process the same video again

#### Content Repurposing Workflows

**Blog Post Generation:**

```
YouTube Video → Transcribe → Extract Key Points → Generate Blog Post → SEO Optimize → Publish
```

**Social Media Content:**

```
YouTube Video → Transcribe → Identify Highlights → Create Short Clips → Generate Captions → Post to Social
```

**Educational Materials:**

```
YouTube Video → Transcribe → Generate Quiz → Create Study Guide → Add to LMS → Track Completion
```

***

| Action | Description | Parameters |
| --- | --- | --- |
| **OpenAI Generate Image** | Makes images from text prompts with your own OpenAI key. Example: Make illustrations for your content | `prompt`, `model`, `size` |

### HTTP Request Automation Settings

{% hint style="info" %}
With the HTTP Request action, Taskade can send data to almost any web service or API, and get data back. HTTP (HyperText Transfer Protocol) is the protocol that the web uses.
{% endhint %}

#### HTTP Request Parameters

| Parameter              | Description                                      | Example                                         |
| ---------------------- | ------------------------------------------------ | ----------------------------------------------- |
| **Method**             | The HTTP method: GET, POST, PUT, DELETE, and more | `POST`                                         |
| **URL**                | The endpoint address for the request             | `https://api.example.com/v1/users`              |
| **Headers**            | HTTP headers, for example Authorization and Content-Type | `Authorization: Bearer token123`        |
| **Query Params**       | The query parameters in the URL                  | `?limit=10&sort=date`                           |
| **Body Type**          | The format of the request body: JSON, Form Data, Raw, or XML | `JSON`                              |
| **Body Content**       | The data to send                                 | `{"name": "John", "email": "john@example.com"}` |
| **Response Body Type** | How the step reads the response: JSON or None    | `JSON`                                          |

#### HTTP Request Use Cases

| Use Case                | Automation Flow                               | Example                                   |
| ----------------------- | --------------------------------------------- | ----------------------------------------- |
| **Weather Data**        | Schedule → HTTP Request → Add Task            | Get the daily weather for project plans   |
| **Email Validation**    | Task Added → HTTP Request → Update Fields     | Validate contact emails                   |
| **Content Translation** | Task Added → HTTP Request → Append Text       | Translate content for teams in other countries |
| **Stock Prices**        | Schedule → HTTP Request → Insert Row          | Track the data of your investments        |
| **Public Holidays**     | Project Created → HTTP Request → Create Event | Add holidays to project calendars         |
| **Business Lookup**     | Form Submitted → HTTP Request → Update Fields | Add company data to a contact             |

### OpenAI Generate Image Settings

{% hint style="info" %}
The OpenAI **Generate Image** step makes an image from a text prompt with your own OpenAI API key. OpenAI bills your account for the image, and the step uses a fixed step fee in Taskade credits. The step needs Pro and up. OpenAI retired its older DALL·E image models.
{% endhint %}

#### Setup Requirements

**OpenAI API Key Required:**

1. Go to [OpenAI Platform](https://platform.openai.com/api-keys) and create an API key.
2. In the automation, add a step and select **OpenAI** → **Generate Image**.
3. Click **Connect** and paste the key. Taskade examines the key before it saves it.

#### Generate Image Parameters

| Parameter  | Description                               | Options                                  | Default         |
| ---------- | ----------------------------------------- | ---------------------------------------- | --------------- |
| **Prompt** | A text description of the image           | Any descriptive text                     | Required        |
| **Model**  | The image model                           | Leave empty for the current default      | Current default |
| **Size**   | The size of the image in pixels           | `1024x1024`, `1536x1024`, `1024x1536`    | Optional        |

The step returns a hosted `url` for the image. It also returns `revisedPrompt` when the model gives one.

#### Generate Image Use Cases

| Use Case                      | Automation Flow                                  | Example                             |
| ----------------------------- | ------------------------------------------------ | ----------------------------------- |
| **Visual Content Generation** | Task Added → Generate Image → Add to Project     | Make illustrations for blog posts   |
| **Creative Project Support**  | Task Added → Generate Image → Attach to Task     | Add mood boards and concept images  |
| **Social Media Visuals**      | Schedule → Generate Image → Post to Social       | Make images for social media        |
| **Learning Materials**        | Task Added → Generate Image → Embed in Content   | Add images to study materials       |
| **Product Prototyping**       | Task Added → Generate Image → Review & Iterate   | Make concept images for products    |

**Tips for prompts:**

* Describe the style, the light, and the composition
* Say the image format and how you will use the image
* Use clear adjectives

To make images without an API key, ask Taskade EVE or an agent. That path uses Taskade AI credits and saves the file to Media.

### Taskade Genesis — Image Format Conversion

{% hint style="info" %}
The **Convert an image** action changes an image from one format to another in Taskade. It needs no outside service. Use it to give all images the same format before later steps use them.
{% endhint %}

| Action | Description | Parameters |
| --- | --- | --- |
| **Convert an image** | Saves a copy of an image in another format: JPEG, PNG, WebP, or AVIF. Example: Convert an uploaded PNG to WebP before you save it | `imageUrl`, `targetFormat` |

By default, the action removes EXIF metadata, for example the GPS location and the camera data. The output is a file reference. Later actions, such as **Save a file to Media**, can use it.

### Categorize with AI Automation Settings

{% hint style="info" %}
The Categorize with AI action uses AI to analyze, classify, and sort information. Select a preset, or make your own output schema.
{% endhint %}

#### When to Use Categorize with AI

**Use it to:**

* **Analyze sentiment** - Find out if feedback is positive, neutral, or negative
* **Qualify leads** - Score and sort possible customers
* **Moderate content** - Find content that is not correct for your community
* **Prioritize support** - Send tickets to a path by urgency and type
* **Organize data** - Tag and sort new information

#### Preset Categories Available

| Preset                            | Use Cases                                | Output Fields                                                     |
| --------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| **Sentiment Analysis**            | Customer feedback, reviews, social media | Sentiment (Positive/Neutral/Negative), intensity, confidence, key phrases |
| **Lead Qualification**            | Sales inquiries, prospect data           | Qualification (Hot Lead/Warm Lead/Cold Lead), fit score, budget match |
| **Content Moderation**            | User content, comments                   | Status (Approved/Flagged/Rejected), reason, risk level, action    |
| **Support Ticket Prioritization** | Help tickets, customer issues            | Priority (High/Medium/Low), category, response time, escalation level |
| **Document Classification**       | Articles, documents                      | Type, quarter, year, relevance (Low/Medium/High)                 |

More presets are available for these jobs:

* Recruitment candidate scoring
* Customer feedback analysis
* Churn risk prediction
* Meeting agendas
* Marketing campaigns
* Project status
* Competitor analysis
* Expense categorization
* Email response prioritization
* Social media engagement

#### Custom Category Configuration

If no preset is correct for your job, make a custom output schema. Each field that you add becomes a variable for later steps.

**Example: Customer Support Ticket Classification**

```json
{
  "type": "object",
  "properties": {
    "category": {
      "type": "string",
      "enum": ["billing", "technical", "account", "feature"]
    },
    "reason": {
      "type": "string"
    }
  }
}
```

#### Categorize with AI Use Cases

| Use Case               | Automation Flow                                 | Result                                  |
| ---------------------- | ----------------------------------------------- | --------------------------------------- |
| **Sentiment Analysis** | Form Submission → Categorize → Route Response   | Faster replies to customers             |
| **Lead Qualification** | New Contact → Categorize → Assign Sales Rep     | Each lead goes to the correct rep       |
| **Support Routing**    | Ticket Created → Categorize → Assign Agent      | Each ticket gets a category and an owner |
| **Content Moderation** | User Post → Categorize → Approve/Reject         | Your community rules stay in force      |
| **Feedback Analysis**  | Survey Response → Categorize → Update Dashboard | Product decisions based on data         |

#### Integration Examples

**Customer Support Automation:**

```
Trigger: Support Ticket Created
Action: Categorize with AI (Support Ticket Prioritization)
Branch: If "High" → Escalate + SMS Alert
        If "Medium" → Add to Queue + Auto-Response
        If "Low" → Self-Service Resources
```

**Lead Management System:**

```
Trigger: Lead Form Submission
Action: Categorize with AI (Lead Qualification)
Action: Update Custom Field (Lead Grade)
Branch: If "Hot Lead" → Immediate Sales Call
        If "Warm Lead" → Email Sequence
        If "Cold Lead" → Nurture Campaign
```

**Content Moderation Workflow:**

```
Trigger: User Comment Posted
Action: Categorize with AI (Content Moderation)
Branch: If "Approved" → Publish Immediately
        If "Flagged" → Human Review Queue
        If "Rejected" → Block + Notify Moderator
```

#### Configuration Best Practices

* **Try the presets first** - Make custom categories only if no preset is correct
* **Branch on the confidence field** - Some presets return a confidence value. Use it to decide which results need a person
* **Test with sample data** - Make sure that the categories are correct
* **Improve the categories** - Change them when real results show a problem
* **Let a person decide important cases** - Add a review step for critical decisions

#### Output Data Structure

**Sentiment Analysis preset example:**

```json
{
  "sentiment": "Positive",
  "intensity": "High",
  "confidence": 0.89,
  "key_phrases": ["fast support", "would recommend"]
}
```

***

### Search the web Automation Settings

{% hint style="info" %}
With the Search the web action, an automation gets current information from the internet. You can use it for research, content, and market analysis. Your workflows then use the newest information.
{% endhint %}

#### When to Use Search the web

**Use it to:**

* **Do research** - Get current information for reports and presentations
* **Write content** - Find data and trends for blog posts and articles
* **Analyze the market** - Monitor other companies and industry trends
* **Examine information** - Make sure that information is correct, and get more context
* **Add to your data** - Add information from the web to the data that you have

#### Search the web Use Cases

| Use Case                  | Automation Flow                           | Result                     |
| ------------------------- | ----------------------------------------- | -------------------------- |
| **Resume Verification**   | Task Added → Search the web → Compare Results | Better hiring decisions    |
| **Content Research**      | Schedule → Search the web → Generate Article  | Faster content             |
| **Market Intelligence**   | Schedule → Search the web → Update Dashboard  | Better plans               |
| **Competitor Analysis**   | Task Added → Search the web → Analyze Trends  | Current market knowledge   |
| **Automated Newsletters** | Schedule → Search the web → Curate Content    | Regular newsletters        |

#### Configuration Options

| Setting   | Description                        | Example                 |
| --------- | ---------------------------------- | ----------------------- |
| **Query** | The words to search for            | "latest AI trends 2026" |

#### Integration Examples

**Research Automation Workflow:**

```
Trigger: Task Added (Research Topic)
Action: Search the web (Query from task name)
Action: Ask an agent with structured output (Summarize findings)
Action: Create Project (Research Report)
Result: Automated research compilation
```

**Content Creation Pipeline:**

```
Trigger: Schedule (Daily)
Action: Search the web (Industry news)
Action: Categorize with AI (Topic classification)
Action: Write with AI (News summary)
Action: Publish to Blog
Result: Automated content publishing
```

**Competitor Monitoring:**

```
Trigger: Schedule (Weekly)
Action: Search the web (Competitor name + news)
Action: Analyze with AI (Impact assessment)
Action: Update Custom Fields (Competitor activity)
Action: Send Slack Alert (If significant changes)
Result: Proactive competitive intelligence
```

#### Output Data Structure

The action returns an AI summary of the top results:

```json
{
  "summary": "Key AI developments this year include..."
}
```

#### Best Practices

* **Write specific queries** - Specific words give better results
* **Name the time frame in the query** - Then you get recent information
* **Add an AI step** - Use AI to process and summarize the results
* **Keep the results small** - Too much data can slow later steps
* **Monitor the cost** - Examine the cost of automations that search many times

#### Performance

* **Response times** - A complex query can take more time
* **Error handling** - The action needs the network. Plan for a failed search

***

## Communication Actions

{% hint style="info" %}
Most third-party connectors below are premium integrations, so they need a paid plan. The Free plan runs the built-in steps and the standard connectors (HTTP Request, RSS, Pushover and MCP Client). Open the step picker to see the plan badge on each step.
{% endhint %}

### Slack

| Action                       | Description                                                        | Example                         |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------- |
| **Send Channel Message**     | Sends a message to a channel                                       | Tell the team about a new ticket |
| **Send Direct Message**      | Sends a personal message to a user                                 | Tell the assignee about an urgent task |
| **Create Channel**           | Creates a new Slack channel                                        | Create a channel for a project  |
| **Add User to Channel**      | Adds a user to a channel                                           | Add a stakeholder to a discussion |
| **Set User's Current Slack Status** | Sets the status text and emoji                              | Set the "In meeting" status     |
| **Schedule Channel Message** | Sends a message to a channel later, up to 120 days ahead           | Send a reminder tomorrow        |
| **Find User by Handle** / **Find User by Email** | Finds a user by Slack handle or email address  | Match a form email to a user    |
| **List Thread Replies**      | Reads the first message of a thread and its replies                | Summarize a thread with AI      |
| **Fetch Channel Messages**   | Reads the recent messages of a channel                             | Make a daily digest             |
| **Add Reaction to Message** / **Pin Message to Channel** | Adds a reaction to a message, or pins it | Pin the release note          |
| **Request Approval in a Channel** | Sends an approval request and waits for a reply               | Approve a post before it goes out |

### Email

| Action                              | Description                                         | Example                           |
| ----------------------------------- | --------------------------------------------------- | --------------------------------- |
| **Gmail: Send Email**               | Sends an email through Gmail                        | Send a confirmation to a customer |
| **Gmail: Reply to Email** / **Forward Email** | Replies to an email, or forwards it       | Reply to a support request        |
| **Gmail: Find Email(s)**            | Finds emails in your Gmail account                  | Find the last order email         |
| **Gmail: Create Draft Email**       | Creates a new draft email                           | Write a draft reply for review    |
| **Gmail: Get Thread**               | Gets all messages of an email thread, oldest first  | Summarize a thread                |
| **Gmail: Create Draft Reply**       | Saves a reply in a thread as a draft                | Let a person examine an AI reply  |
| **Gmail: Request Approval by Email** | Sends an approval request by email                 | Approve a refund                  |
| **Mailchimp: Add Contact**          | Adds a contact to a Mailchimp audience              | Add a subscriber to a newsletter  |
| **Mailchimp: Update Contact Status** | Changes the subscription status of a contact       | Unsubscribe a user                |

### Discord

| Action                     | Description                           | Example                         |
| -------------------------- | ------------------------------------- | ------------------------------- |
| **Send Message**           | Sends a message to a Discord channel  | Send an update to the community |
| **Create Guild Role**      | Creates a new role                    | Create a "Beta Tester" role     |
| **Add Guild Member Role**  | Gives a role to a member              | Give access to a private channel |
| **Create Channel** / **Rename Channel** / **Delete Channel** | Manages channels | Create a channel for each event |

### Notify by Email (Native)

{% hint style="success" %}
Taskade has a built-in **Send an email** action. It sends notifications through the Taskade mail service. You do not need an OAuth connection or another email provider.
{% endhint %}

| Action | Description | Parameters |
| --- | --- | --- |
| **Send an email** | Sends an email from the verified Taskade address to you or a verified member of this workspace. Example: Tell a teammate about a new task | `to`, `subject`, `message` |

To email another person, use the Gmail or Outlook send email action. If the step does not send to a recipient, the run history shows the step as **Skipped** with the reason. The automation continues.

## Data & CRM Actions

### HubSpot

| Action                        | Description                          | Example                  |
| ----------------------------- | ------------------------------------ | ------------------------ |
| **Create New Contact**        | Creates a new contact in HubSpot CRM | Add a lead from a form   |
| **Create or Update Contact**  | Creates a contact, or updates it if it exists | Add or update a lead |
| **Update Contact**            | Changes the properties of a contact  | Update a lead score      |
| **Create New Deal**           | Creates a new deal in HubSpot CRM    | Create a sales opportunity |
| **Update Deal**               | Changes the properties of a deal     | Move a deal to the next stage |
| **Find Contact** / **Find Deal** / **Search Contacts** / **Search Deals** | Finds records | Find an existing lead |

### Salesforce

| Action                    | Description                                                     | Example                 |
| ------------------------- | --------------------------------------------------------------- | ----------------------- |
| **Create Record**         | Creates a new record (Lead, Contact, Account, and more)         | Add a qualified lead    |
| **Update Record**         | Changes a Salesforce record                                     | Update a lead status    |
| **Find Records by Query** | Finds Salesforce records with a SOQL query                      | Find a customer record  |

### Google Sheets

| Action          | Description                                                      | Example                  |
| --------------- | ---------------------------------------------------------------- | ------------------------ |
| **Insert Row**  | Adds a new row to a sheet                                        | Save a form submission   |
| **Add or Update Multiple Rows** | Writes many rows in one step                     | Sync a list of orders    |
| **Update Row**  | Changes a row in a sheet                                         | Update a status column   |
| **Find Row(s)** | Gets the rows that match your criteria. It works with loops      | Find a customer record   |
| **Get Rows** / **Get Row by Row Number** | Reads rows from a sheet                 | Load a price list        |
| **Read Range** / **Clear Range** | Reads or clears the cells of a range in A1 notation | Read `A1:D20`    |
| **Delete Row**  | Deletes a row in a sheet                                         | Remove a processed entry |
| **Create Spreadsheet** / **Create Worksheet** | Creates a new spreadsheet or tab   | Start a monthly report   |

### Airtable

| Action            | Description                                     | Example               |
| ----------------- | ----------------------------------------------- | --------------------- |
| **Create Record** | Creates a new record in an Airtable base        | Add a customer to a CRM |
| **List Records**  | Lists the records of a base, with optional filters | Find open orders   |
| **Update Record** | Changes an Airtable record                      | Update a project status |

## Development Actions

### GitHub

| Action                    | Description                         | Example                  |
| ------------------------- | ----------------------------------- | ------------------------ |
| **Create Issue**          | Opens a new issue in a repository   | Report a bug from feedback |
| **Update Issue**          | Changes an issue                    | Close a resolved issue   |
| **Create Comment**        | Adds a comment to an issue or pull request | Add investigation notes |
| **Get Issue Information** | Gets the details of an issue        | Read the issue status    |
| **Lock Issue** / **Unlock Issue** | Locks or unlocks the comments of an issue | Lock a resolved thread |

### Jira

| Action                  | Description                           | Example                     |
| ----------------------- | ------------------------------------- | --------------------------- |
| **Create Issue**        | Creates a new Jira issue              | Create a bug ticket         |
| **Update Issue**        | Changes the fields of an issue        | Update the priority or assignee |
| **Move Issue to Status** | Changes the issue status             | Move to "In Progress"       |
| **Add Comment**         | Adds a comment                        | Add troubleshooting notes   |
| **Get Issue** / **Search Issues** | Reads an issue, or searches with JQL | Find open bugs   |

## Web & Content Actions

### WordPress

| Action          | Description                                                                 | Example              |
| --------------- | --------------------------------------------------------------------------- | -------------------- |
| **Create Post** | Publishes a new post, or saves it as a draft. Add a Featured Image URL to set the featured image | Publish a blog article |

### Webflow

| Action               | Description                                  | Example              |
| -------------------- | -------------------------------------------- | -------------------- |
| **List Sites**       | Lists the Webflow sites of the connection    | Select a site        |
| **List Collections** | Lists the CMS collections of a site          | Select a collection  |
| **Create CMS Item**  | Creates a staged collection item             | Add a new blog post  |
| **Get CMS Item**     | Gets an item and its fields                  | Read product details |
| **Update CMS Item**  | Changes the fields of an item                | Edit product details |
| **Publish CMS Item** | Publishes a staged item to the live site     | Make updates live    |

## Utility Actions

### HTTP/Webhook

| Action | Description | Parameters |
| --- | --- | --- |
| **Send HTTP Request** | Calls a web service with GET, POST, PUT, PATCH, DELETE, or HEAD. Example: Call an outside API | `method`, `url`, `headers`, `queryParams`, `body` |
| **Webhook** (trigger) | Starts the automation when an outside service sends data to its private address. Needs Pro and up. Example: Receive a payment event | — |

### Data Processing

These actions change text and lists without AI.

| Action                          | Description                                                  | Example                              |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| **Split Text into a List**      | Divides text into a list at a delimiter                      | Divide a CSV line into fields        |
| **Trim Extra Spaces**           | Removes the spaces at the start and at the end of text       | Clean user input                     |
| **Change Capitalization**       | Changes the case of text                                     | Make status labels lowercase         |
| **Merge Two Sets of Data**      | Combines two sets of data. You select which set wins on a shared field | Combine two sources        |
| **Get Multiple Values (JSONPath)** | Gets values from the data that an earlier step returned   | Read a nested field                  |

### Utilities

These actions change data in the flow. They do not call AI and use no credits.

| Action | Description | Parameters |
| --- | --- | --- |
| **Generate QR Code** | Makes a QR image from text or a URL and saves it to your workspace Media library. Example: Make a QR code for a check-in URL | `text` (required), `size` (150/300/600 px), `errorCorrection` (L/M/Q/H) |
| **Convert CSV to JSON** | Changes a CSV string into rows of data. Example: Turn an upload into JSON rows | `csv` (required), `hasHeader` (header/noHeader), `delimiter` (optional, auto-detect) |
| **Convert JSON to CSV** | Changes a JSON array into CSV. Example: Export records to a spreadsheet | `json` (required), `includeHeader` (yes/no), `delimiter` (optional, default `,`) |
| **Average** | The mean of a list of numbers. Example: Average response time | `values` (required) |
| **Sum** | The total of a list of numbers. Example: Sum order amounts | `values` (required) |
| **Count Unique Values** | Counts the different values in a list. Example: Count unique customers | `values` (required) |
| **Min / Max** | The highest or lowest value in a list. Example: Find the largest invoice | `values` (required), `mode` (max/min) |
| **Concatenate Text** | Joins many parts into one string. Example: Make a full name from fields | `parts` (required), `separator` (optional) |
| **Find Text** | Finds a value in a string (the first match or all matches). Example: Find a keyword in a message | `text` (required), `searchValue` (required), `mode` (first/all), `caseSensitivity` (optional) |
| **Slugify Text** | Changes text into a slug that is safe in a URL. Example: Make a slug from an article title | `text` (required), `casing` (optional), `separator` (default `-`) |
| **Strip HTML** | Removes markup and returns plain text. Example: Clean an HTML email body | `html` (required) |
| **HTML to Markdown** | Changes HTML into Markdown. Example: Save content as Markdown | `html` (required) |
| **Markdown to HTML** | Changes Markdown into safe HTML. Example: Publish formatted content | `markdown` (required) |

### File Operations

| Action                       | Description                                                  | Example                |
| ---------------------------- | ------------------------------------------------------------ | ---------------------- |
| **Save a file to Media**     | Downloads a file from a link into Media                      | Save a form attachment |
| **Save text to Media**       | Saves text as a file in the Media tab                        | Save an AI report      |
| **Find Files in Media**      | Lists files by folder, file type, and name                   | Find the uploads of this week |
| **Convert an image**         | Saves a copy of an image as JPEG, PNG, WebP, or AVIF         | PNG to WebP            |
| **Make a smaller video**     | Saves a smaller copy of a video                              | Make a file smaller    |
| **Turn a file into text**     | Changes a source file into text                             | PDF to text            |

## Conditional Actions

### Logic & Control Flow

| Action                       | Description                                                       | Example                             |
| ---------------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| **Branch**                   | Makes different paths. Each path has a condition                  | If the priority is high, tell the manager |
| **Filter Data**              | Continues only when the data meets a condition                    | Skip low-value leads                |
| **Loop**                     | Runs the steps inside it once for each item in a list             | Process each item                   |
| **Delay**                    | Stops the automation for a set time or until a date               | Wait 5 minutes before the next step |
| **Run Automation**           | Starts another automation from this one                           | Use a shared subflow again          |

## Error Handling

| Action or setting               | Description                                                                 | Example                 |
| ------------------------------- | --------------------------------------------------------------------------- | ----------------------- |
| **Stop and mark as failed**     | Stops a run on purpose and marks it as failed                               | Stop when data is missing |
| **Get run info**                | Reads the ID and the start time of the current run                          | Save the run ID         |
| **Error Behavior** (step setting) | On steps that have it, select **Continue** or **Fail** for when the step has an error | Continue after a page cannot be read |

The **Runs** tab of the automation lists every run, with the input and the output of each step.

## Usage Examples

### Basic Action Chain

```
Trigger: Form submission
Action: Add Task (title from the form subject, note from the form description)
Action: Slack → Send Channel Message (#support: "New task created")
```

### Conditional Logic

```
Trigger: Form submission
Branch: If priority is "high"
          → Slack → Send Channel Message (#urgent)
        Otherwise
          → Add Task (to the Backlog project)
```

### Error Handling

```
Trigger: Schedule (daily)
Action: Send HTTP Request (POST to your API)
Branch: If the response is missing a required field
          → Stop and mark as failed
        Otherwise
          → Add Task (log the result)
```

***

## **Advanced File Handling**

Automations can send, receive, and process files.

### **Multipart File Uploads**

HTTP actions can send files as a multipart upload. Many modern APIs accept files in this format:

```json
{
  "action": "Send HTTP Request",
  "method": "POST",
  "url": "https://api.example.com/upload",
  "headers": {
    "Authorization": "Bearer {{token}}"
  },
  "files": {
    "document": "{{file_from_trigger}}",
    "thumbnail": "{{generated_image}}"
  },
  "body": {
    "title": "{{document_title}}",
    "category": "{{document_type}}"
  }
}
```

### **Webhook File Processing**

Webhooks can receive and process multipart/form-data. Use this for:

* **Document workflows**: Process uploaded files
* **Image analysis**: Analyze images that people send through forms
* **File validation**: Examine the file type and size before later steps

### **Form Field Mapping**

A form can start an automation that creates tasks. Taskade then matches the form field labels to the task custom fields:

* **Name match**: A "Priority Level" dropdown goes to the Priority custom field
* **Type match**: A date field goes to a date custom field
* **Dropdown options**: The dropdown values match the options of the custom field

### **Example Use Cases**

**Document Approval Workflow:**

```
Form Upload → File Validation → Manager Notification → Approval Task Creation
```

**Image Processing Pipeline:**

```
Image Upload → AI Analysis → Metadata Extraction → Database Storage
```

**Client Onboarding System:**

```
Document Collection → Verification → CRM Update → Welcome Email
```

### **File Type Support**

Automations can process these file types:

* **Documents**: PDF, DOC, DOCX, TXT, RTF
* **Images**: JPG, PNG, GIF, WebP, SVG
* **Spreadsheets**: CSV, XLS, XLSX
* **Archives**: ZIP, RAR, 7Z
* **Media**: MP4, MP3, WAV, MOV

***

→ **Next:** [**Advanced Automation Actions**](./advanced-actions.md)\
→ **See Also:** [**Automation Recipes**](recipes.md)

---

_Step-by-step guides on taskade.com/learn: [Automation Actions](https://www.taskade.com/learn/automation/actions), [Automation Triggers](https://www.taskade.com/learn/automation/triggers)._
