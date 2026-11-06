---
description: >-
  Complete Taskade automation action reference: create tasks, run AI agents, send HTTP requests, connect Slack and GitHub, and chain steps into workflows.
---

# Action & Trigger Reference

Actions are the tasks that automations can perform. Each action connects to a specific service or system to create, update, or retrieve data. Actions can be chained together to create complex workflows.

## Overview

Actions are the "then" part of automation workflows - the tasks that get performed when trigger conditions are met. Taskade provides a comprehensive set of actions that can create projects, manage tasks, interact with AI, integrate with external services, and perform complex data operations.

{% hint style="success" %}
Actions can be chained together to create complex multi-step workflows, with conditional logic and data transformation capabilities that enable truly intelligent automation.
{% endhint %}

## Complete Action Reference

### Taskade Core Actions

| Action                               | Description                                                | Use Case                                         | Parameters                                             |
| ------------------------------------ | ---------------------------------------------------------- | ------------------------------------------------ | ------------------------------------------------------ |
| **Create Project**                   | Sets up a new project in your workspace/folder             | Project initialization, template-based workflows | `name`, `folderId`, `template`, `defaultView`          |
| **Add Task**                         | Adds a new task to an existing project                     | Task creation workflows, issue tracking          | `projectId`, `title`, `content`, `assignee`, `dueDate` |
| **Mark Task as Completed**           | Automatically marks a task as done                         | Status updates, completion workflows             | `taskId`, `completedBy`, `completionNote`              |
| **Create Project From Template**     | Uses a pre-defined or custom template                      | Standardized project setup                       | `templateId`, `name`, `folderId`                       |
| **Move Task**                        | Moves a task to another block in the same project          | Workflow progression, categorization             | `projectId`, `taskId`, `targetBlockId`                 |
| **Assign Task**                      | Assigns a task to someone                                  | Work distribution, team management               | `taskId`, `userId`, `notifyAssignee`                   |
| **Ask AI**                           | Uses AI to answer questions                                | Information retrieval, analysis                  | `query`, `context`, `model`                            |
| **Generate with AI**                 | Uses AI to generate content or responses                   | Content creation, drafting                       | `prompt`, `style`, `length`                            |
| **Respond with AI**                  | Automatically provides AI-generated responses              | Automated communication                          | `input`, `tone`, `format`                              |
| **Ask Agent**                        | Uses a custom AI agent to respond to a query               | Specialized AI interactions                      | `agentId`, `query`, `parameters`                       |
| **Run Agent Command**                | Uses a custom AI agent command                             | Agent-driven automation                          | `agentId`, `command`, `input`                          |
| **Add Knowledge to Agent**           | Transcribes knowledge and adds it as knowledge to an agent | Agent training, content integration              | `agentId`, `content`, `source`                         |
| **Add Project to Agent Knowledge**   | Automatically trains your AI agents with project content   | Agent enhancement, knowledge management          | `agentId`, `projectId`, `scope`                        |
| **Ask Agent With Structured Output** | Structures the output of agent replies                     | Standardized AI responses                        | `agentId`, `query`, `outputFormat`                     |
| **Add a comment**                    | Appends a comment to an existing task node                 | Audit trails, team communication on tasks        | `taskId`, `comment`                                    |
| **Update a task**                    | Updates a task node's content or note field                | Inline edits, AI-driven content rewrites         | `taskId`, `content`, `note`                            |
| **Get a task**                       | Reads a task node and returns its current data             | Conditional logic, data-driven downstream steps  | `taskId`                                               |
| **Get project info**                 | Reads project metadata (name, dates, member list, etc.)    | Dynamic references to project context in flows   | `projectId`                                            |
| **Attach a file**                    | Attaches a file to a task node (returns `attachmentId`, `fileId`, `projectId`, `nodeId`, `filename`, `mimetype`) | Save uploads or generated files onto a task      | `projectId` (Project), `nodeId` (Task ID, UUID), `fileUrl` (File) |

### Data Processing & Integration Actions

| Action                       | Description                                                                   | Use Case                                    | Parameters                           |
| ---------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------- | ------------------------------------ |
| **Scrape Webpage**           | Extract the contents of a web page                                            | Content aggregation, research               | `url`, `selectors`, `format`         |
| **Convert File to Text**     | Convert a source file into text                                               | Document processing, content extraction     | `fileId`, `outputFormat`, `encoding` |
| **Transcribe YouTube Video** | Turn a YouTube video into text                                                | Content creation, accessibility             | `videoUrl`, `language`, `format`     |
| **Turn a recording into a project** | Transcribes an audio recording into a new project                      | Meeting notes, voice memos, podcast indexing | `audioRecording`, `projectTitle`      |
| **Upload File to Media**     | Upload file through a URL to save in your workspace or folder's media tab     | Media management, content storage           | `url`, `fileName`, `folderId`        |
| **Send HTTP Request**        | Makes an API request to an endpoint; authentication is optional per call     | External integrations, data synchronization | `method`, `url`, `headers`, `body`, optional auth |
| **Search Web**               | Searches the web for information to add to a project or for the AI to analyze | Research automation, content enrichment     | `query`                              |

{% hint style="info" %}
**Scanned documents work too.** Convert File to Text now falls back to **vision OCR** when a file has no machine-readable text — scanned PDFs, image-only documents, and photos of pages are transcribed automatically. OCR runs count toward your workspace's AI usage.
{% endhint %}

### Workflow Control Actions

| Action                        | Description                                                                   | Use Case                                | Parameters                                      |
| ----------------------------- | ----------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------- |
| **Loop**                      | Iterates data tasks                                                           | Batch processing, data transformation   | `dataSource`, `iterationLogic`, `maxIterations` |
| **Filter Data**               | Performs actions only when the data meets a certain condition                 | Conditional processing, data validation | `condition`, `dataSource`, `filterCriteria`     |
| **Branch**                    | Creates different paths within your workflow, depending on certain conditions | Decision trees, conditional logic       | `condition`, `truePath`, `falsePath`            |
| **Transform Array to String** | Converts the output of Find Task(s) and Find Row(s) actions into text         | Data formatting, reporting              | `arrayInput`, `template`, `separator`           |
| **Run Automation**            | Runs a saved flow as a depth-guarded subflow (prevents infinite recursion)    | Reusable sub-flows, modular automation  | `flowId`, `input`                               |

### Advanced Actions

| Action                   | Description                               | Use Case                         | Parameters                                  |
| ------------------------ | ----------------------------------------- | -------------------------------- | ------------------------------------------- |
| **Update Custom Fields** | Updates custom fields within projects     | Data management, status tracking | `taskId`, `fieldId`, `value`, `projectId`   |
| **Find Task(s)**         | Searches for tasks within projects        | Task retrieval, reporting        | `projectId`, `searchCriteria`, `maxResults` |
| **Delay**                | Adds a time delay to automation workflows | Timing control, scheduling       | `duration`, `unit`                          |

## Core Taskade Actions

### Project & Task Management

| Action                           | Description                                    | Parameters                                             | Example                                          |
| -------------------------------- | ---------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------ |
| **Create Project**               | Sets up a new project in your workspace/folder | `name`, `folderId`, `template`, `defaultView`          | Create "Customer Feedback" project from template |
| **Create Project From Template** | Uses a pre-defined or custom template          | `templateId`, `name`, `folderId`                       | Create project from "Support Workflow" template  |
| **Add Task**                     | Adds a new task to an existing project         | `projectId`, `title`, `content`, `assignee`, `dueDate` | Add task "Review feedback #123"                  |
| **Mark Task as Completed**       | Automatically marks a task as done             | `taskId`, `completedBy`, `completionNote`              | Mark task complete with resolution note          |
| **Move Task**                    | Moves a task to another block in the same project | `projectId`, `taskId`, `targetBlockId`              | Move to the "Processed" block                    |
| **Assign Task**                  | Assigns a task to someone                      | `taskId`, `userId`, `notifyAssignee`                   | Assign to support specialist with notification   |
| **Update Custom Fields**         | Updates custom fields within projects          | `taskId`, `fieldId`, `value`, `projectId`              | Set priority to "High", status to "In Progress"  |
| **Find Task(s)**                 | Searches for tasks within projects             | `projectId`, `searchCriteria`, `maxResults`            | Find all tasks assigned to user                  |

### Find Task(s) Automation Settings

{% hint style="info" %}
The Find Task(s) action enables dynamic task retrieval within automation workflows. Search, filter, and process tasks based on specific criteria to create intelligent, data-driven automations.
{% endhint %}

#### When to Use Find Tasks

**Perfect for:**

* **Bulk processing** - Handle multiple tasks at once
* **Conditional workflows** - Process tasks meeting specific criteria
* **Reporting** - Generate summaries of task collections
* **Data synchronization** - Keep external systems updated
* **Quality control** - Identify tasks needing attention

#### Search Criteria Options

| Field                 | Conditions                                                                             | Value Type       | Example       |
| --------------------- | -------------------------------------------------------------------------------------- | ---------------- | ------------- |
| **Task Created At**   | Before, After, Empty, Not Empty                                                        | Date             | `2024-01-01`  |
| **Task Completed At** | Before, After, Empty, Not Empty                                                        | Date             | `2024-01-15`  |
| **Task Content**      | Contains, Not Contains, Matches, Not Matches, Starts With, Ends With, Empty, Not Empty | Text             | `"urgent"`    |
| **Task Status**       | Equals, Not Equals                                                                     | Status           | `"completed"` |
| **Assignee**          | Equals, Not Equals, Empty, Not Empty                                                   | User             | `"john.doe"`  |
| **Due Date**          | Before, After, Empty, Not Empty                                                        | Date             | `today()`     |
| **Custom Fields**     | Various conditions based on field type                                                 | Depends on field | `"high"`      |

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

| Use Case                    | Automation Flow                                               | Business Impact                   |
| --------------------------- | ------------------------------------------------------------- | --------------------------------- |
| **Overdue Task Alerts**     | Schedule → Find Tasks (overdue) → Send Email                  | Fewer missed deadlines            |
| **Weekly Progress Reports** | Schedule → Find Tasks (completed this week) → Generate Report | Better project visibility         |
| **Workload Balancing**      | Schedule → Find Tasks (by assignee) → Reassign Tasks          | Optimized team productivity       |
| **Quality Assurance**       | Schedule → Find Tasks (missing details) → Flag for Review     | Improved task quality             |
| **Performance Analytics**   | Schedule → Find Tasks (by criteria) → Update Dashboard        | Data-driven insights              |

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

* **Limit result sets** to prevent performance issues (max 1000 tasks)
* **Use specific filters** to narrow down results efficiently
* **Combine with sorting** for predictable processing order
* **Handle empty results** gracefully in your workflows
* **Test with small datasets** before scaling to large projects

***

### Custom Fields Automation Settings

{% hint style="info" %}
The Update Custom Fields action allows you to automatically update custom fields in projects, ensuring your task data stays current without manual updates.
{% endhint %}

**Available Parameters:**

* **PROJECT ID**: ID of the target project
* **TASK ID**: ID of the task you want to update
* **FIELDS**: Add fields that should be updated with their new values

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

| Action                               | Description                                         | Parameters                         | Example                                             |
| ------------------------------------ | --------------------------------------------------- | ---------------------------------- | --------------------------------------------------- |
| **Ask AI**                           | Uses AI to answer questions                         | `question`, `context`, `model`     | "What's the priority of this ticket?"               |
| **Generate with AI**                 | Uses AI to generate content or responses            | `prompt`, `contentType`, `length`  | Generate email response to customer                 |
| **Respond with AI**                  | Automatically provides AI-generated responses       | `input`, `responseType`, `tone`    | Auto-respond to common inquiries                    |
| **Ask Agent**                        | Uses a custom AI agent to respond to a query        | `agentId`, `question`, `context`   | Query specialized support agent                     |
| **Run Agent Command**                | Uses a custom AI agent command                      | `agentId`, `commandId`, `input`    | Run "analyze\_sentiment" command                    |
| **Ask Agent With Structured Output** | Structures the output of agent replies              | `agentId`, `query`, `outputSchema` | Get JSON response with specific fields              |
| **Add Project to Agent Knowledge**   | Automatically trains AI agents with project content | `agentId`, `projectId`             | Keep agents updated with latest project information |

{% hint style="info" %}
**Create and change agents from a flow:** The **Create an agent** action adds a new AI agent to the workspace with a name and instructions. The **Update an agent** action changes the name, the greeting, or the instructions of an agent.
{% endhint %}

### Ask Agent With Structured Output Settings

{% hint style="info" %}
The Ask Agent With Structured Output action extracts specific information from AI agent responses and formats it as structured data that can be used as variables in subsequent automation steps.

**BYOK support:** When a Bring Your Own Key (BYOK) model is configured on the target agent, the one-shot structured-output path honors that key, so inference runs against your own API account rather than Taskade's shared quota.
{% endhint %}

#### When to Use Structured Output

**Perfect for:**

* Extracting specific data points from unstructured text
* Converting AI responses into usable variables
* Filling spreadsheet columns automatically
* Creating conditional logic based on AI analysis
* Standardizing data formats across automations

#### Output Schema Types

| Type              | Description                    | Example Use Case                            |
| ----------------- | ------------------------------ | ------------------------------------------- |
| **String**        | Text data                      | Extract product names, titles, descriptions |
| **Number**        | Numeric values                 | Calculate costs, scores, percentages        |
| **Boolean**       | True/false values              | Check conditions, validate data             |
| **Date**          | Date values                    | Extract deadlines, schedule dates           |
| **Single Select** | Choose from predefined options | Status: "pending", "approved", "rejected"   |

#### Structured Output Use Cases

| Use Case                | Automation Flow                               | Example                                   |
| ----------------------- | --------------------------------------------- | ----------------------------------------- |
| **Cost Analysis**       | Task Added → Ask Agent → Update Fields        | Calculate budget variance automatically   |
| **Lead Qualification**  | Form Submitted → Ask Agent → Route Lead       | Score and qualify incoming leads          |
| **Content Scoring**     | Task Added → Ask Agent → Update Status        | Rate content quality and assign reviewers |
| **Performance Metrics** | Schedule → Ask Agent → Update Dashboard       | Calculate completion rates and KPIs       |
| **Approval Routing**    | Task Created → Ask Agent → Conditional Action | Route tasks based on AI evaluation        |

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

**Pro Tips:**

* Use descriptive field names that match your workflow
* Include clear descriptions for better AI understanding
* Test schemas with sample data before deploying
* Combine with conditional actions for powerful automation flows

***

| Action          | Description                          | Parameters                               | Example                                              |
| --------------- | ------------------------------------ | ---------------------------------------- | ---------------------------------------------------- |
| **Prompt AI**   | Give the model detailed instructions | `prompt`, `systemMessage`, `temperature` | Custom AI processing with specific instructions      |

### Add Project to Agent Knowledge Automation Settings

{% hint style="info" %}
The Add Project to Agent Knowledge action automatically trains AI agents with project content, enabling context-aware responses and keeping agents updated with the latest information.
{% endhint %}

#### When to Use Add Project to Agent Knowledge

**Perfect for:**

* **Training agents on new work** - Keep agents current with project information
* **Enabling context-aware responses** - Allow agents to reference specific project details
* **Supporting onboarding** - Feed previous projects to help new team members
* **Powering research assistants** - Make agents smarter with research project content
* **Preparing for launches** - Train agents on feature launch or campaign plans

#### Add Project to Agent Knowledge Parameters

| Parameter                   | Description                                     | Example                            |
| --------------------------- | ----------------------------------------------- | ---------------------------------- |
| **Agent ID**                | ID of the AI agent to train                     | `agent_123456`                     |
| **Project ID**              | ID of the project to add to knowledge           | `proj_789012`                      |

#### Add Project to Agent Knowledge Use Cases

| Use Case                   | Automation Flow                                                  | Business Impact                            |
| -------------------------- | ---------------------------------------------------------------- | ------------------------------------------ |
| **New Project Onboarding** | Project Created → Add Project to Agent → Welcome Message         | Instant agent training for new initiatives |
| **Research Assistant**     | Task Added → Add Project to Agent → Enable Queries               | Context-aware research support             |
| **Customer Support**       | Project Completed → Add Project to Agent → Update Knowledge Base | Enhanced support with project insights     |
| **Team Collaboration**     | Task Added → Add Project to Agent → Notify Team                  | Improved team coordination                 |
| **Knowledge Management**   | Schedule → Add Project to Agent → Update Documentation           | Automated knowledge base maintenance       |

#### Integration Examples

**Automated Agent Training:**

```
Trigger: Project Created
Action: Add Project to Agent Knowledge
Action: Send Channel Message (Agent trained on new project)
Result: Agents immediately knowledgeable about new projects
```

**Research Project Updates:**

```
Trigger: Task Added (to the research project)
Action: Add Project to Agent Knowledge
Action: Ask Agent (Summarize new findings)
Action: Update Dashboard (With insights)
Result: Real-time research insights and summaries
```

**Launch Preparation:**

```
Trigger: Task Added (To launch project)
Action: Add Project to Agent Knowledge
Action: Ask Agent (Generate FAQ)
Action: Send Email (Team preparation)
Result: Comprehensive launch support and documentation
```

#### Best Practices

* **Strategic Timing** - Add projects when they're most relevant to agent needs
* **Content Filtering** - Add focused projects to avoid information overload
* **Regular Updates** - Schedule periodic knowledge refreshes for evolving projects
* **Agent Specialization** - Create dedicated agents for different project types
* **Performance Monitoring** - Track agent response quality after knowledge updates

***

### Data Processing & Utilities

| Action             | Description                        | Parameters                  | Example                                   |
| ------------------ | ---------------------------------- | --------------------------- | ----------------------------------------- |
| **Scrape Webpage** | Extract the contents of a web page | `url`, `selector`, `format` | Extract product info from competitor site |

### Scrape Webpage Automation Settings

{% hint style="info" %}
The Scrape Webpage action enables automated data extraction from websites. Perfect for competitor monitoring, market research, lead generation, and price tracking without manual data collection.
{% endhint %}

#### When to Use Scrape Webpage

**Perfect for:**

* **Competitor monitoring** - Track pricing, products, and promotions
* **Market research** - Gather data from multiple sources automatically
* **Lead generation** - Extract contact information from directories
* **Price monitoring** - Track product prices across e-commerce sites
* **Content aggregation** - Collect news, reviews, and industry updates

#### Scrape Webpage Parameters

| Parameter       | Description                         | Example                               |
| --------------- | ----------------------------------- | ------------------------------------- |
| **URL**            | Target webpage URL to scrape                          | `https://competitor.com/products` |
| **Error Behavior** | What to do when the scrape fails: Continue or Fail    | `Fail` (default)                  |

#### Scrape Webpage Use Cases

| Use Case                | Automation Flow                                                        | Business Impact                    |
| ----------------------- | ---------------------------------------------------------------------- | ---------------------------------- |
| **Competitor Analysis** | Schedule → Scrape Webpage → Analyze with AI → Update Dashboard         | Real-time competitive intelligence |
| **Price Monitoring**    | Schedule → Scrape Webpage → Compare Prices → Send Alerts               | Dynamic pricing optimization       |
| **Lead Generation**     | Task Added → Scrape Webpage → Extract Contacts → Create Leads          | Automated prospect discovery       |
| **Market Research**     | Schedule → Scrape Webpage → Aggregate Data → Generate Reports          | Comprehensive market insights      |
| **Content Monitoring**  | Schedule → Scrape Webpage → Categorize Content → Update Knowledge Base | Current industry awareness         |

#### Integration Examples

**Competitor Price Monitoring:**

```
Trigger: Schedule (Daily)
Action: Scrape Webpage (Competitor Pricing Page)
Action: Ask Agent With Structured Output (Extract and compare prices)
Action: Send Slack Alert (If Significant Changes)
Result: Automated competitive pricing intelligence
```

**Lead Generation from Directories:**

```
Trigger: Task Added (Industry Research)
Action: Scrape Webpage (Industry Directory)
Action: Ask Agent With Structured Output (Extract company details)
Action: Categorize with AI (Lead Qualification)
Action: Create Tasks (Follow-up Actions)
Result: Automated lead discovery and qualification
```

**Market News Aggregation:**

```
Trigger: Schedule (Hourly)
Action: Scrape Webpage (Industry News Sites)
Action: Categorize with AI (Document Classification)
Action: Add to Knowledge Base
Result: Current industry news awareness
```

#### Output Data Structure

**Scraped Content Format:**

```json
{
  "title": "Product Catalog",
  "url": "https://example.com/products",
  "content": "Full page text content..."
}
```

#### Best Practices

* **Respect robots.txt** and website terms of service
* **Use appropriate delays** between requests to avoid overloading servers
* **Monitor scraping success** rates in the **Runs** tab
* **Cache results** appropriately to reduce unnecessary requests
* **Implement error handling** for network issues and site changes

#### Legal and Ethical Considerations

* **Terms of Service**: Review and comply with website terms
* **Rate Limiting**: Avoid overwhelming target servers
* **Data Usage**: Ensure compliance with data protection regulations
* **Attribution**: Properly credit sources when using scraped content
* **Fair Use**: Use scraped data responsibly and ethically

| Action | Description | Parameters | Example |
|---|---|---|---|
| **Convert File to Text** | Convert a source file into text | `fileUrl`, `fileType`, `extractImages` | Convert PDF manual to searchable text |
| **Transcribe YouTube Video** | Turn a YouTube video into text | `videoUrl`, `language`, `includeTimestamps` | Create transcript of training video |
| **Turn a recording into a project** | Transcribes an audio recording into a new project | `audioRecording`, `projectTitle` | Turn voice memo into project notes |

### Transcribe YouTube Video Automation Settings

{% hint style="info" %}
The Transcribe YouTube Video action converts video audio into searchable, readable text using advanced AI transcription. Perfect for content indexing, accessibility, educational resources, and content repurposing.
{% endhint %}

#### When to Use Transcribe YouTube Video

**Perfect for:**

* **Content indexing** - Make video content searchable and referenceable
* **Educational resources** - Create study guides and learning materials
* **Content repurposing** - Transform video content into blogs, articles, and social posts
* **Accessibility** - Provide text transcripts for hearing-impaired users
* **Research and analysis** - Extract insights from video presentations
* **Knowledge management** - Build searchable video content libraries

#### Transcribe YouTube Video Parameters

| Parameter                  | Description                               | Example                                       |
| -------------------------- | ----------------------------------------- | --------------------------------------------- |
| **YouTube URL**            | YouTube video URL to transcribe           | `https://www.youtube.com/watch?v=VIDEO_ID`    |

#### Transcribe YouTube Video Use Cases

| Use Case                  | Automation Flow                                | Business Impact                         |
| ------------------------- | ---------------------------------------------- | --------------------------------------- |
| **Content Indexing**      | Schedule → Transcribe → Index in Search        | Searchable transcripts of your videos   |
| **Educational Resources** | Task Added → Transcribe → Generate Study Guide | Accelerated learning materials creation |
| **Content Repurposing**   | Video Upload → Transcribe → Generate Blog Post | Multi-platform content distribution     |
| **Accessibility**         | Video Published → Transcribe → Add Captions    | Improved content accessibility          |
| **Research Analysis**     | Video Found → Transcribe → Extract Insights    | Faster research and analysis            |

#### Integration Examples

**Educational Content Pipeline:**

```
Trigger: Video Added to Course
Action: Transcribe YouTube Video
Action: Generate Study Guide with AI
Action: Create Quiz Questions
Action: Add to Learning Management System
Result: Automated course content creation
```

**Content Repurposing Workflow:**

```
Trigger: YouTube Video Published
Action: Transcribe YouTube Video
Action: Ask Agent With Structured Output (Extract key points)
Action: Generate Blog Post with AI
Action: Publish to Website
Result: Multi-platform content distribution
```

**Research and Analysis System:**

```
Trigger: Weekly Schedule
Action: Search Web (Industry videos)
Action: Transcribe YouTube Video (Top results)
Action: Categorize with AI (Topics)
Action: Generate Research Summary
Action: Add to Knowledge Base
Result: Automated industry research
```

#### Output Data Structure

The action returns the video title, a metadata section, and a transcript section. Pass the transcript to an AI step to summarize it or pull out key points.

#### Best Practices

* **Video Quality Matters** - Clear audio produces better transcripts
* **Privacy Considerations** - Review content before public sharing
* **Cost Management** - Long videos may incur higher processing costs
* **Quality Validation** - Review important transcripts for accuracy
* **Integration Planning** - Consider downstream processing of transcript data

#### Rate Limiting & Performance

* **Processing Time** - Longer videos take more time to process
* **Caching** - Store transcripts to avoid re-processing

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

| Action                            | Description                                  | Parameters                        | Example                                   |
| --------------------------------- | -------------------------------------------- | --------------------------------- | ----------------------------------------- |
| **OpenAI Generate Image**         | Create images from text prompts with your own OpenAI key | `prompt`, `model`, `size`   | Generate illustrations and visual content |

### HTTP Request Automation Settings

{% hint style="info" %}
HTTP (HyperText Transfer Protocol) is the foundation of web communication. The HTTP Request action allows you to connect Taskade with any web service or API, enabling seamless data exchange and integration.
{% endhint %}

#### HTTP Request Parameters

| Parameter              | Description                                      | Example                                         |
| ---------------------- | ------------------------------------------------ | ----------------------------------------------- |
| **Method**             | HTTP method (GET, POST, PUT, DELETE, etc.)       | `POST`                                          |
| **URL**                | The endpoint URL to send the request to          | `https://api.example.com/v1/users`              |
| **Headers**            | HTTP headers (Authorization, Content-Type, etc.) | `Authorization: Bearer token123`                |
| **Query Params**       | URL query parameters                             | `?limit=10&sort=date`                           |
| **Body Type**          | Request body format (JSON, Form Data, Raw, XML)  | `JSON`                                          |
| **Body Content**       | The actual data to send                          | `{"name": "John", "email": "john@example.com"}` |
| **Response Body Type** | How to process the response (JSON or None)       | `JSON`                                          |

#### HTTP Request Use Cases

| Use Case                | Automation Flow                               | Example                                   |
| ----------------------- | --------------------------------------------- | ----------------------------------------- |
| **Weather Data**        | Schedule → HTTP Request → Add Task            | Get daily weather for project planning    |
| **Email Validation**    | Task Added → HTTP Request → Update Fields     | Validate contact emails automatically     |
| **Content Translation** | Task Added → HTTP Request → Append Text       | Translate content for international teams |
| **Stock Prices**        | Schedule → HTTP Request → Insert Row          | Track investment portfolio data           |
| **Public Holidays**     | Project Created → HTTP Request → Create Event | Add holidays to project calendars         |
| **Business Lookup**     | Form Submitted → HTTP Request → Update Fields | Enrich contact data with company info     |

### OpenAI Generate Image Settings

{% hint style="info" %}
The OpenAI **Generate Image** step creates an image from a text prompt with your own OpenAI API key. OpenAI bills your account for the image, and the step uses a fixed step fee in Taskade credits. The step needs Pro and up. OpenAI retired its older DALL·E image models.
{% endhint %}

#### Setup Requirements

**OpenAI API Key Required:**

1. Visit [OpenAI Platform](https://platform.openai.com/api-keys) and create an API key
2. In the automation, add a step and pick **OpenAI** → **Generate Image**
3. Click **Connect** and paste the key. Taskade checks the key before it stores it

#### Generate Image Parameters

| Parameter  | Description                               | Options                                  | Default         |
| ---------- | ----------------------------------------- | ---------------------------------------- | --------------- |
| **Prompt** | Text description of the image to generate | Any descriptive text                     | Required        |
| **Model**  | Image model to use                        | Leave empty for the current default      | Current default |
| **Size**   | Image dimensions                          | `1024x1024`, `1536x1024`, `1024x1536`    | Optional        |

The step returns a hosted `url` for the image, plus `revisedPrompt` when the model returns one.

#### Generate Image Use Cases

| Use Case                      | Automation Flow                                  | Example                             |
| ----------------------------- | ------------------------------------------------ | ----------------------------------- |
| **Visual Content Generation** | Task Added → Generate Image → Add to Project     | Create illustrations for blog posts |
| **Creative Project Support**  | Task Added → Generate Image → Attach to Task     | Add moodboards and concept images   |
| **Social Media Visuals**      | Schedule → Generate Image → Post to Social       | Create dynamic social media content |
| **Learning Materials**        | Task Added → Generate Image → Embed in Content   | Make educational materials engaging |
| **Product Prototyping**       | Task Added → Generate Image → Review & Iterate   | Produce concept images for products |

**Prompt Engineering Tips:**

* Be specific about style, lighting, and composition
* Specify image format and intended use
* Use descriptive adjectives for better results

For images without an API key, ask Taskade EVE or an agent to generate them. That path uses Taskade AI credits and saves the file to Media.

### Taskade Genesis — Image Format Conversion

{% hint style="info" %}
The **Convert an image** action converts an image from one format to another entirely within Taskade — no external service required. Useful for normalizing images before uploading them to downstream steps.
{% endhint %}

| Action                       | Description                                              | Parameters                          | Example                                     |
| ---------------------------- | -------------------------------------------------------- | ----------------------------------- | ------------------------------------------- |
| **Convert an image**         | Saves a copy of an image in another format: JPEG, PNG, WebP, or AVIF | `imageUrl`, `targetFormat` | Convert an uploaded PNG to WebP before storing |

The action strips EXIF metadata (GPS, camera info) by default. Output is returned as a file reference that can be passed to subsequent actions such as **Upload File to Media**.

### Categorize with AI Automation Settings

{% hint style="info" %}
The Categorize with AI action automatically analyzes, classifies, and organizes information using AI. Choose a preset or define a custom output schema for your specific needs.
{% endhint %}

#### When to Use Categorize with AI

**Perfect for:**

* **Sentiment analysis** - Determine positive, neutral, or negative sentiment in feedback
* **Lead qualification** - Score and prioritize potential customers
* **Content moderation** - Filter inappropriate or sensitive content
* **Support prioritization** - Route tickets based on urgency and type
* **Data organization** - Automatically tag and sort incoming information

#### Preset Categories Available

| Preset                            | Use Cases                                | Output Fields                                                     |
| --------------------------------- | ---------------------------------------- | ----------------------------------------------------------------- |
| **Sentiment Analysis**            | Customer feedback, reviews, social media | Sentiment (Positive/Neutral/Negative), intensity, confidence, key phrases |
| **Lead Qualification**            | Sales inquiries, prospect data           | Qualification (Hot Lead/Warm Lead/Cold Lead), fit score, budget match |
| **Content Moderation**            | User-generated content, comments         | Status (Approved/Flagged/Rejected), reason, risk level, action    |
| **Support Ticket Prioritization** | Help tickets, customer issues            | Priority (High/Medium/Low), category, response time, escalation level |
| **Document Classification**       | Articles, documents                      | Type, quarter, year, relevance (Low/Medium/High)                 |

More presets cover recruitment candidate scoring, customer feedback analysis, churn risk prediction, meeting agendas, marketing campaigns, project status, competitor analysis, expense categorization, email response prioritization, and social media engagement.

#### Custom Category Configuration

If no preset fits, define a custom output schema. Each field you add becomes a variable for later steps.

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

| Use Case               | Automation Flow                                 | Business Impact                         |
| ---------------------- | ----------------------------------------------- | --------------------------------------- |
| **Sentiment Analysis** | Form Submission → Categorize → Route Response   | Faster, routed customer responses       |
| **Lead Qualification** | New Contact → Categorize → Assign Sales Rep     | Leads routed to the right rep           |
| **Support Routing**    | Ticket Created → Categorize → Assign Agent      | Tickets categorized and assigned        |
| **Content Moderation** | User Post → Categorize → Approve/Reject         | Maintains community standards           |
| **Feedback Analysis**  | Survey Response → Categorize → Update Dashboard | Data-driven product improvements        |

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

* **Start with presets** before creating custom categories
* **Branch on the confidence field** where a preset returns one, to balance accuracy vs. coverage
* **Test with sample data** to validate categorization accuracy
* **Monitor and refine** categories based on real-world performance
* **Combine with human review** for critical decisions

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

### Search Web Automation Settings

{% hint style="info" %}
The Search Web action enables automations to gather real-time information from the internet. Perfect for research, content creation, market analysis, and keeping your workflows updated with the latest information.
{% endhint %}

#### When to Use Search Web

**Perfect for:**

* **Research automation** - Gather up-to-date information for reports and presentations
* **Content creation** - Find relevant data and trends for blog posts and articles
* **Market analysis** - Monitor competitor activity and industry trends
* **Background checking** - Verify information and gather additional context
* **Data enrichment** - Enhance existing data with web-sourced information

#### Search Web Use Cases

| Use Case                  | Automation Flow                           | Business Impact            |
| ------------------------- | ----------------------------------------- | -------------------------- |
| **Resume Verification**   | Task Added → Search Web → Compare Results | Improved hiring quality    |
| **Content Research**      | Schedule → Search Web → Generate Article  | Faster content creation    |
| **Market Intelligence**   | Schedule → Search Web → Update Dashboard  | Better strategic decisions |
| **Competitor Analysis**   | Task Added → Search Web → Analyze Trends  | Competitive advantage      |
| **Automated Newsletters** | Schedule → Search Web → Curate Content    | Engaging communications    |

#### Configuration Options

| Setting   | Description                        | Example                 |
| --------- | ---------------------------------- | ----------------------- |
| **Query** | Search terms to use for web search | "latest AI trends 2026" |

#### Integration Examples

**Research Automation Workflow:**

```
Trigger: Task Added (Research Topic)
Action: Search Web (Query from task name)
Action: Ask Agent With Structured Output (Summarize findings)
Action: Create Project (Research Report)
Result: Automated research compilation
```

**Content Creation Pipeline:**

```
Trigger: Schedule (Daily)
Action: Search Web (Industry news)
Action: Categorize with AI (Topic classification)
Action: Generate with AI (News summary)
Action: Publish to Blog
Result: Automated content publishing
```

**Competitor Monitoring:**

```
Trigger: Schedule (Weekly)
Action: Search Web (Competitor name + news)
Action: Analyze with AI (Impact assessment)
Action: Update Custom Fields (Competitor activity)
Action: Send Slack Alert (If significant changes)
Result: Proactive competitive intelligence
```

#### Output Data Structure

The action returns an AI-generated summary of the top results:

```json
{
  "summary": "Key AI developments this year include..."
}
```

#### Best Practices

* **Craft specific queries** for better, more relevant results
* **Name the time frame in the query** to focus on recent information
* **Combine with AI analysis** to process and summarize findings
* **Set reasonable limits** to avoid overwhelming downstream actions
* **Monitor search costs** for high-volume automations

#### Rate Limiting & Performance

* **API quotas** may apply depending on search provider
* **Response times** vary based on query complexity
* **Caching** can be implemented for repeated searches
* **Error handling** important for network-dependent actions

***

## Communication Actions

{% hint style="info" %}
Most third-party connectors below are premium integrations, so they need a paid plan. The Free plan runs the built-in steps and the standard connectors (HTTP Request, RSS, Pushover and MCP Client). Open the step picker to see the plan badge on each step.
{% endhint %}

### Slack

| Action                       | Description                                                        | Example                         |
| ---------------------------- | ------------------------------------------------------------------ | ------------------------------- |
| **Send Channel Message**     | Posts a message to a selected channel                              | Notify team of new ticket       |
| **Send Direct Message**      | Sends a personal message to a user                                 | Alert assignee of urgent task   |
| **Create Channel**           | Creates a new Slack channel                                        | Create project-specific channel |
| **Add User to Channel**      | Adds a user to a channel                                           | Add stakeholder to discussion   |
| **Set User's Current Slack Status** | Sets status text and emoji                                  | Set "In meeting" status         |
| **Schedule Channel Message** | Schedules a message to post to a channel later, up to 120 days ahead | Send reminder tomorrow        |
| **Find User by Handle** / **Find User by Email** | Finds a user by Slack handle or email address  | Match a form email to a user    |
| **List Thread Replies**      | Reads the parent message of a thread and its replies               | Summarize a thread with AI      |
| **Fetch Channel Messages**   | Reads recent messages from a channel                               | Build a daily digest            |
| **Add Reaction to Message** / **Pin Message to Channel** | Reacts to or pins a message            | Pin the release note            |
| **Request Approval in a Channel** | Posts an approval request and waits for a reply              | Approve a post before it goes out |

### Email

| Action                              | Description                                         | Example                           |
| ----------------------------------- | --------------------------------------------------- | --------------------------------- |
| **Gmail: Send Email**               | Sends an email through Gmail to a recipient         | Send confirmation to customer     |
| **Gmail: Reply to Email** / **Forward Email** | Replies to or forwards an email           | Reply to a support request        |
| **Gmail: Find Email(s)**            | Finds emails in your Gmail account                  | Find the last order email         |
| **Gmail: Create Draft Email**       | Creates a new draft email message                   | Draft a reply for review          |
| **Gmail: Get Thread**               | Gets every message of an email thread, oldest first | Summarize a thread                |
| **Gmail: Create Draft Reply**       | Saves a reply in an existing thread as a draft      | Let a person review an AI reply   |
| **Gmail: Request Approval by Email** | Sends an approval request by email                 | Approve a refund                  |
| **Mailchimp: Add Contact**          | Adds a contact to a Mailchimp audience              | Subscribe to newsletter           |
| **Mailchimp: Update Contact Status** | Changes the subscription status of a contact       | Unsubscribe user                  |

### Discord

| Action                     | Description                           | Example                         |
| -------------------------- | ------------------------------------- | ------------------------------- |
| **Send Message**           | Sends a message to a Discord channel  | Post update to community        |
| **Create Guild Role**      | Creates a new role                    | Create "Beta Tester" role       |
| **Add Guild Member Role**  | Assigns a role to a member            | Grant access to private channel |
| **Create Channel** / **Rename Channel** / **Delete Channel** | Manages channels | Create a channel for each event |

### Notify by Email (Native)

{% hint style="success" %}
Taskade includes a built-in **Send an email** action that sends notifications through Taskade's own mail infrastructure. No OAuth connection or third-party email provider is required.
{% endhint %}

| Action             | Description                                                                                   | Parameters                     | Example                                    |
| ------------------ | --------------------------------------------------------------------------------------------- | ------------------------------ | ------------------------------------------ |
| **Send an email**  | Sends an email from Taskade's verified address to you or a verified member of this workspace | `to`, `subject`, `message`     | Alert a teammate when a task is created    |

To email anyone else, use the Gmail or Outlook send email action. If the step does not send to a recipient, the run history shows the step as **Skipped** with the reason, and the automation keeps running.

## Data & CRM Actions

### HubSpot

| Action                        | Description                          | Example                  |
| ----------------------------- | ------------------------------------ | ------------------------ |
| **Create New Contact**        | Creates a new contact in HubSpot CRM | Add lead from form       |
| **Create or Update Contact**  | Creates a contact, or updates it if it exists | Upsert a lead   |
| **Update Contact**            | Updates contact properties           | Update lead score        |
| **Create New Deal**           | Creates a new deal in HubSpot CRM    | Create sales opportunity |
| **Update Deal**               | Updates deal properties              | Move to next stage       |
| **Find Contact** / **Find Deal** / **Search Contacts** / **Search Deals** | Looks up records | Check for an existing lead |

### Salesforce

| Action                    | Description                                                     | Example                 |
| ------------------------- | --------------------------------------------------------------- | ----------------------- |
| **Create Record**         | Creates a new record (Lead, Contact, Account, and more)         | Add qualified lead      |
| **Update Record**         | Updates an existing Salesforce record                           | Update lead status      |
| **Find Records by Query** | Searches for Salesforce records with a SOQL query               | Find a customer record  |

### Google Sheets

| Action          | Description                                                      | Example                  |
| --------------- | ---------------------------------------------------------------- | ------------------------ |
| **Insert Row**  | Adds a new row to a sheet                                        | Log form submission      |
| **Add or Update Multiple Rows** | Writes several rows in one step                  | Sync a list of orders    |
| **Update Row**  | Updates a row in a sheet                                         | Update status column     |
| **Find Row(s)** | Retrieves rows that match defined criteria (works with loops)    | Find customer record     |
| **Get Rows** / **Get Row by Row Number** | Reads rows from a sheet                 | Load a price list        |
| **Read Range** / **Clear Range** | Reads or clears the cells of a range in A1 notation | Read `A1:D20`    |
| **Delete Row**  | Deletes a row in a sheet                                         | Remove processed entry   |
| **Create Spreadsheet** / **Create Worksheet** | Creates a new spreadsheet or tab   | Start a monthly report   |

### Airtable

| Action            | Description                                     | Example               |
| ----------------- | ----------------------------------------------- | --------------------- |
| **Create Record** | Creates a new record in an Airtable base        | Add customer to CRM   |
| **List Records**  | Lists records from a base with optional filters | Find open orders      |
| **Update Record** | Updates an existing Airtable record             | Update project status |

## Development Actions

### GitHub

| Action                    | Description                         | Example                  |
| ------------------------- | ----------------------------------- | ------------------------ |
| **Create Issue**          | Opens a new issue in a repository   | Report bug from feedback |
| **Update Issue**          | Updates an issue                    | Close resolved issue     |
| **Create Comment**        | Adds a comment to an issue or pull request | Add investigation notes |
| **Get Issue Information** | Retrieves details about an issue    | Read issue status        |
| **Lock Issue** / **Unlock Issue** | Locks or unlocks comments on an issue | Lock a resolved thread |

### Jira

| Action                  | Description                           | Example                     |
| ----------------------- | ------------------------------------- | --------------------------- |
| **Create Issue**        | Creates a new Jira issue              | Create bug ticket           |
| **Update Issue**        | Updates issue fields                  | Update priority or assignee |
| **Move Issue to Status** | Changes the issue status             | Move to "In Progress"       |
| **Add Comment**         | Adds a comment                        | Add troubleshooting notes   |
| **Get Issue** / **Search Issues** | Reads an issue or searches with JQL | Find open bugs     |

## Web & Content Actions

### WordPress

| Action          | Description                                                                 | Example              |
| --------------- | --------------------------------------------------------------------------- | -------------------- |
| **Create Post** | Publishes a new post, or saves it as a draft. Add a Featured Image URL to set the featured image | Publish blog article |

### Webflow

| Action               | Description                                  | Example              |
| -------------------- | -------------------------------------------- | -------------------- |
| **List Sites**       | Lists the Webflow sites available to the connection | Pick a site     |
| **List Collections** | Lists CMS collections for a selected site    | Pick a collection    |
| **Create CMS Item**  | Creates a staged collection item             | Add new blog post    |
| **Get CMS Item**     | Retrieves an item and its fields             | Read product details |
| **Update CMS Item**  | Changes fields on an existing item           | Edit product details |
| **Publish CMS Item** | Publishes a staged item to the live site     | Deploy updates live  |

## Utility Actions

### HTTP/Webhook

| Action                | Description                                                                 | Parameters                                   | Example                 |
| --------------------- | --------------------------------------------------------------------------- | -------------------------------------------- | ----------------------- |
| **Send HTTP Request** | Calls a web service with GET, POST, PUT, PATCH, DELETE, or HEAD             | `method`, `url`, `headers`, `queryParams`, `body` | Call external API  |
| **Webhook** (trigger) | Starts the automation when an outside service posts to its private address. Needs Pro and up | —                   | Receive a payment event |

### Data Processing

These actions work on text and lists without an AI call.

| Action                          | Description                                                  | Example                              |
| ------------------------------- | ------------------------------------------------------------ | ------------------------------------ |
| **Split Text into a List**      | Splits a text string into a list on a delimiter              | Split CSV line into fields           |
| **Trim Extra Spaces**           | Removes leading and trailing whitespace from a text string   | Clean user-submitted input           |
| **Change Capitalization**       | Converts text case                                           | Normalize status labels to lowercase |
| **Merge Two Sets of Data**      | Combines two sets of data and picks which one wins on a shared field | Combine multiple sources     |
| **Get Multiple Values (JSONPath)** | Pulls values out of the data an earlier step returned     | Read a nested field                  |

### Utilities

Pure, no-credit transform actions for reshaping data inline in a flow — no AI call required.

| Action                  | Description                                                                  | Parameters                                           | Example                                |
| ----------------------- | --------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------- |
| **Generate QR Code**    | Renders text or a URL into a QR image saved to your workspace Media library  | `text` (required), `size` (150/300/600 px), `errorCorrection` (L/M/Q/H) | Encode a check-in URL as a QR code      |
| **Convert CSV to JSON** | Parses a CSV string into structured rows                                     | `csv` (required), `hasHeader` (header/noHeader), `delimiter` (optional, auto-detect) | Turn an upload into JSON rows           |
| **Convert JSON to CSV** | Serializes a JSON array into CSV                                             | `json` (required), `includeHeader` (yes/no), `delimiter` (optional, default `,`) | Export records to a spreadsheet         |
| **Average**             | Mean of a list of numbers                                                   | `values` (required)                                  | Average response time                  |
| **Sum**                 | Total of a list of numbers                                                  | `values` (required)                                  | Sum order amounts                      |
| **Count Unique Values** | Counts the distinct values in a list                                        | `values` (required)                                  | Count unique customers                 |
| **Min / Max**           | Highest or lowest value in a list                                           | `values` (required), `mode` (max/min)                | Find the largest invoice               |
| **Concatenate Text**    | Joins multiple parts into one string                                        | `parts` (required), `separator` (optional)           | Build a full name from fields          |
| **Find Text**           | Locates a search value in a string (first match or all)                     | `text` (required), `searchValue` (required), `mode` (first/all), `caseSensitivity` (optional) | Find a keyword in a message            |
| **Slugify Text**        | Turns text into a URL-safe slug                                             | `text` (required), `casing` (optional), `separator` (default `-`) | Slugify an article title               |
| **Strip HTML**          | Removes markup and returns plain text                                        | `html` (required)                                    | Clean HTML email body                  |
| **HTML to Markdown**    | Converts an HTML fragment to Markdown                                        | `html` (required)                                    | Store content as Markdown              |
| **Markdown to HTML**    | Renders Markdown to sanitized HTML                                          | `markdown` (required)                                | Publish formatted content              |

### File Operations

| Action                       | Description                                                  | Example                |
| ---------------------------- | ------------------------------------------------------------ | ---------------------- |
| **Upload File to Media**     | Uploads a file from a URL to the Media tab                   | Store form attachment  |
| **Save text to Media**       | Saves text as a file in the Media tab                        | Save an AI report      |
| **Find Files in Media**      | Lists files by folder, file type, and name                   | Find this week's uploads |
| **Convert an image**         | Saves a copy of an image as JPEG, PNG, WebP, or AVIF         | PNG to WebP            |
| **Make a smaller video**     | Saves a smaller copy of a video                              | Reduce file size       |
| **Convert File to Text**     | Converts a source file into text                             | PDF to text            |

## Conditional Actions

### Logic & Control Flow

| Action                       | Description                                                       | Example                             |
| ---------------------------- | ----------------------------------------------------------------- | ----------------------------------- |
| **Branch**                   | Creates different paths depending on conditions                  | If priority is high, notify manager |
| **Filter Data**              | Continues only when the data meets a condition                    | Skip low-value leads                |
| **Loop**                     | Runs the steps inside it once for each item in a list             | Process each item                   |
| **Delay**                    | Pauses the automation for a set time or until a date              | Wait 5 minutes before the next step |
| **Run Automation**           | Starts another automation from this one                           | Reuse a shared sub-flow             |

## Error Handling

| Action or setting               | Description                                                                 | Example                 |
| ------------------------------- | --------------------------------------------------------------------------- | ----------------------- |
| **Stop and mark as failed**     | Stops a run on purpose and marks it as failed                               | Stop on missing data    |
| **Get run info**                | Reads the ID and the start time of the current run                          | Log the run ID          |
| **Error Behavior** (step setting) | On steps that offer it, choose **Continue** or **Fail** when the step errors | Keep going after a failed scrape |

Every run is listed in the automation **Runs** tab, with the input and output of each step.

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

Recent updates have significantly enhanced automation file processing capabilities.

### **Multipart File Uploads**

HTTP actions now support multipart file uploads, enabling seamless integration with modern APIs:

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

### **Enhanced Webhook File Processing**

Webhooks can now receive and process multipart/form-data, perfect for:

* **Document Processing Workflows**: Automatically process uploaded files
* **Image Analysis Pipelines**: Analyze images submitted through forms
* **File Validation Systems**: Check file types and sizes before processing

### **Smart Form Field Mapping**

When forms trigger automations that create tasks, the system intelligently maps form field labels to task custom fields:

* **Automatic Matching**: "Priority Level" dropdown → Priority custom field
* **Type Recognition**: Date fields map to date custom fields automatically
* **Dynamic Options**: Dropdown values sync with custom field options

### **Professional Use Cases**

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

Automations now handle a wide range of file types:

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
