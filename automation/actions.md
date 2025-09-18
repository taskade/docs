# Actions Reference

Actions are the tasks that automations can perform. Each action connects to a specific service or system to create, update, or retrieve data. Actions can be chained together to create complex workflows.

## Overview

Actions are the "then" part of automation workflows - the tasks that get performed when trigger conditions are met. Taskade provides a comprehensive set of actions that can create projects, manage tasks, interact with AI, integrate with external services, and perform complex data operations.

{% hint style="success" %}
Actions can be chained together to create complex multi-step workflows, with conditional logic and data transformation capabilities that enable truly intelligent automation.
{% endhint %}

## Complete Action Reference

### Taskade Core Actions

| Action | Description | Use Case | Parameters |
|--------|-------------|----------|------------|
| **Create Project** | Sets up a new project in your workspace/folder | Project initialization, template-based workflows | `name`, `folderId`, `template`, `defaultView` |
| **Add Task** | Adds a new task to an existing project | Task creation workflows, issue tracking | `projectId`, `title`, `content`, `assignee`, `dueDate` |
| **Mark Task as Completed** | Automatically marks a task as done | Status updates, completion workflows | `taskId`, `completedBy`, `completionNote` |
| **Create Project From Template** | Uses a pre-defined or custom template | Standardized project setup | `templateId`, `name`, `folderId` |
| **Move Task** | Moves a task to a different space | Workflow progression, categorization | `taskId`, `targetProjectId`, `position` |
| **Assign Task** | Assigns a task to someone | Work distribution, team management | `taskId`, `userId`, `notifyAssignee` |
| **Ask AI** | Uses AI to answer questions | Information retrieval, analysis | `query`, `context`, `model` |
| **Generate with AI** | Uses AI to generate content or responses | Content creation, drafting | `prompt`, `style`, `length` |
| **Respond with AI** | Automatically provides AI-generated responses | Automated communication | `input`, `tone`, `format` |
| **Ask Agent** | Uses a custom AI agent to respond to a query | Specialized AI interactions | `agentId`, `query`, `parameters` |
| **Run Agent Command** | Uses a custom AI agent command | Agent-driven automation | `agentId`, `command`, `input` |
| **Add Knowledge to Agent** | Transcribes knowledge and adds it as knowledge to an agent | Agent training, content integration | `agentId`, `content`, `source` |
| **Add Project to Agent Knowledge** | Automatically trains your AI agents with project content | Agent enhancement, knowledge management | `agentId`, `projectId`, `scope` |
| **Ask Agent With Structured Output** | Structures the output of agent replies | Standardized AI responses | `agentId`, `query`, `outputFormat` |

### Data Processing & Integration Actions

| Action | Description | Use Case | Parameters |
|--------|-------------|----------|------------|
| **Scrape Webpage** | Extract the contents of a web page | Content aggregation, research | `url`, `selectors`, `format` |
| **Convert File to Text** | Convert a source file into text | Document processing, content extraction | `fileId`, `outputFormat`, `encoding` |
| **Transcribe YouTube Video** | Turn a YouTube video into text | Content creation, accessibility | `videoUrl`, `language`, `format` |
| **Upload File to Media** | Upload file through a URL to save in your workspace or folder's media tab | Media management, content storage | `url`, `fileName`, `folderId` |
| **Send HTTP Request** | Makes an API request to an endpoint | External integrations, data synchronization | `method`, `url`, `headers`, `body` |
| **Search Web** | Searches the web for information to add to a project or for the AI to analyze | Research automation, content enrichment | `query`, `sources`, `maxResults` |

### Workflow Control Actions

| Action | Description | Use Case | Parameters |
|--------|-------------|----------|------------|
| **Loop** | Iterates data tasks | Batch processing, data transformation | `dataSource`, `iterationLogic`, `maxIterations` |
| **Filter Data** | Performs actions only when the data meets a certain condition | Conditional processing, data validation | `condition`, `dataSource`, `filterCriteria` |
| **Branch** | Creates different paths within your workflow, depending on certain conditions | Decision trees, conditional logic | `condition`, `truePath`, `falsePath` |
| **Transform Array to String** | Converts the output of Find Task(s) and Find Row(s) actions into text | Data formatting, reporting | `arrayInput`, `template`, `separator` |

### Advanced Actions

| Action | Description | Use Case | Parameters |
|--------|-------------|----------|------------|
| **Update Custom Fields** | Updates custom fields within projects | Data management, status tracking | `taskId`, `fieldId`, `value`, `projectId` |
| **Find Task(s)** | Searches for tasks within projects | Task retrieval, reporting | `projectId`, `searchCriteria`, `maxResults` |
| **Delay** | Adds a time delay to automation workflows | Timing control, scheduling | `duration`, `unit` |

## Core Taskade Actions

### Project & Task Management

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| **Create Project** | Sets up a new project in your workspace/folder | `name`, `folderId`, `template`, `defaultView` | Create "Customer Feedback" project from template |
| **Create Project From Template** | Uses a pre-defined or custom template | `templateId`, `name`, `folderId` | Create project from "Support Workflow" template |
| **Add Task** | Adds a new task to an existing project | `projectId`, `title`, `content`, `assignee`, `dueDate` | Add task "Review feedback #123" |
| **Mark Task as Completed** | Automatically marks a task as done | `taskId`, `completedBy`, `completionNote` | Mark task complete with resolution note |
| **Move Task** | Moves a task to a different project/space | `taskId`, `targetProjectId`, `position` | Move to "Processed" project |
| **Assign Task** | Assigns a task to someone | `taskId`, `userId`, `notifyAssignee` | Assign to support specialist with notification |
| **Update Custom Fields** | Updates custom fields within projects | `taskId`, `fieldId`, `value`, `projectId` | Set priority to "High", status to "In Progress" |
| **Find Task(s)** | Searches for tasks within projects | `projectId`, `searchCriteria`, `maxResults` | Find all tasks assigned to user |

### Find Task(s) Automation Settings

{% hint style="info" %}
The Find Task(s) action enables dynamic task retrieval within automation workflows. Search, filter, and process tasks based on specific criteria to create intelligent, data-driven automations.
{% endhint %}

#### When to Use Find Tasks

**Perfect for:**
- **Bulk processing** - Handle multiple tasks at once
- **Conditional workflows** - Process tasks meeting specific criteria
- **Reporting** - Generate summaries of task collections
- **Data synchronization** - Keep external systems updated
- **Quality control** - Identify tasks needing attention

#### Search Criteria Options

| Field | Conditions | Value Type | Example |
|-------|------------|------------|---------|
| **Task Created At** | Before, After, Empty, Not Empty | Date | `2024-01-01` |
| **Task Completed At** | Before, After, Empty, Not Empty | Date | `2024-01-15` |
| **Task Content** | Contains, Not Contains, Matches, Not Matches, Starts With, Ends With, Empty, Not Empty | Text | `"urgent"` |
| **Task Status** | Equals, Not Equals | Status | `"completed"` |
| **Assignee** | Equals, Not Equals, Empty, Not Empty | User | `"john.doe"` |
| **Due Date** | Before, After, Empty, Not Empty | Date | `today()` |
| **Custom Fields** | Various conditions based on field type | Depends on field | `"high"` |

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

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Overdue Task Alerts** | Schedule → Find Tasks (overdue) → Send Email | 40% reduction in missed deadlines |
| **Weekly Progress Reports** | Schedule → Find Tasks (completed this week) → Generate Report | Better project visibility |
| **Workload Balancing** | Schedule → Find Tasks (by assignee) → Reassign Tasks | Optimized team productivity |
| **Quality Assurance** | Schedule → Find Tasks (missing details) → Flag for Review | Improved task quality |
| **Performance Analytics** | Schedule → Find Tasks (by criteria) → Update Dashboard | Data-driven insights |

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

- **Limit result sets** to prevent performance issues (max 1000 tasks)
- **Use specific filters** to narrow down results efficiently
- **Combine with sorting** for predictable processing order
- **Handle empty results** gracefully in your workflows
- **Test with small datasets** before scaling to large projects

---
| **Transform Array to String** | Converts task arrays into readable text | `array`, `separator`, `format` | Convert task list to comma-separated string |

### Custom Fields Automation Settings

{% hint style="info" %}
The Update Custom Fields action allows you to automatically update custom fields in projects, ensuring your task data stays current without manual updates.
{% endhint %}

**Available Parameters:**
- **PROJECT ID**: ID of the target project
- **TASK ID**: ID of the task you want to update
- **FIELDS**: Add fields that should be updated with their new values

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
- Custom Field Updated (Automation Trigger)
- Task Added
- Task Completed

### Agent Commands

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| **Ask AI** | Uses AI to answer questions | `question`, `context`, `model` | "What's the priority of this ticket?" |
| **Generate with AI** | Uses AI to generate content or responses | `prompt`, `contentType`, `length` | Generate email response to customer |
| **Respond with AI** | Automatically provides AI-generated responses | `input`, `responseType`, `tone` | Auto-respond to common inquiries |
| **Ask Agent** | Uses a custom AI agent to respond to a query | `agentId`, `question`, `context` | Query specialized support agent |
| **Run Agent Command** | Uses a custom AI agent command | `agentId`, `commandId`, `input` | Run "analyze_sentiment" command |
| **Ask Agent With Structured Output** | Structures the output of agent replies | `agentId`, `query`, `outputSchema` | Get JSON response with specific fields |
| **Add Project to Agent Knowledge** | Automatically trains AI agents with project content | `agentId`, `projectId` | Keep agents updated with latest project information |

### Ask Agent With Structured Output Settings

{% hint style="info" %}
The Ask Agent With Structured Output action extracts specific information from AI agent responses and formats it as structured data that can be used as variables in subsequent automation steps.
{% endhint %}

#### When to Use Structured Output

**Perfect for:**
- Extracting specific data points from unstructured text
- Converting AI responses into usable variables
- Filling spreadsheet columns automatically
- Creating conditional logic based on AI analysis
- Standardizing data formats across automations

#### Output Schema Types

| Type | Description | Example Use Case |
|------|-------------|------------------|
| **String** | Text data | Extract product names, titles, descriptions |
| **Number** | Numeric values | Calculate costs, scores, percentages |
| **Boolean** | True/false values | Check conditions, validate data |
| **Date** | Date values | Extract deadlines, schedule dates |
| **Single Select** | Choose from predefined options | Status: "pending", "approved", "rejected" |

#### Structured Output Use Cases

| Use Case | Automation Flow | Example |
|----------|-----------------|---------|
| **Cost Analysis** | Task Added → Ask Agent → Update Fields | Calculate budget variance automatically |
| **Lead Qualification** | Form Submitted → Ask Agent → Route Lead | Score and qualify incoming leads |
| **Content Scoring** | Task Added → Ask Agent → Update Status | Rate content quality and assign reviewers |
| **Performance Metrics** | Schedule → Ask Agent → Update Dashboard | Calculate completion rates and KPIs |
| **Approval Routing** | Task Created → Ask Agent → Conditional Action | Route tasks based on AI evaluation |

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
- Use descriptive field names that match your workflow
- Include clear descriptions for better AI understanding
- Test schemas with sample data before deploying
- Combine with conditional actions for powerful automation flows

---
| **Prompt AI** | Give the model detailed instructions | `prompt`, `systemMessage`, `temperature` | Custom AI processing with specific instructions |
| **Add Knowledge to Agent** | Transcribes knowledge and adds it to an agent | `agentId`, `content`, `source` | Train agent with new documentation |
| **Add Project to Agent Knowledge** | Automatically trains AI agents with project content | `agentId`, `projectId`, `includeCompleted` | Add project data to agent's knowledge base |

### Add Project to Agent Knowledge Automation Settings

{% hint style="info" %}
The Add Project to Agent Knowledge action automatically trains AI agents with project content, enabling context-aware responses and keeping agents updated with the latest information.
{% endhint %}

#### When to Use Add Project to Agent Knowledge

**Perfect for:**
- **Training agents on new work** - Keep agents current with project information
- **Enabling context-aware responses** - Allow agents to reference specific project details
- **Supporting onboarding** - Feed previous projects to help new team members
- **Powering research assistants** - Make agents smarter with research project content
- **Preparing for launches** - Train agents on feature launch or campaign plans

#### Add Project to Agent Knowledge Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Agent ID** | ID of the AI agent to train | `agent_123456` |
| **Project ID** | ID of the project to add to knowledge | `proj_789012` |
| **Include Completed Tasks** | Whether to include completed tasks (true/false) | `true` |
| **Content Types** | Types of content to include | `tasks`, `comments`, `attachments` |

#### Add Project to Agent Knowledge Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **New Project Onboarding** | Project Created → Add Project to Agent → Welcome Message | Instant agent training for new initiatives |
| **Research Assistant** | Project Updated → Add Project to Agent → Enable Queries | Context-aware research support |
| **Customer Support** | Project Completed → Add Project to Agent → Update Knowledge Base | Enhanced support with project insights |
| **Team Collaboration** | Task Added → Add Project to Agent → Notify Team | Improved team coordination |
| **Knowledge Management** | Schedule → Add Project to Agent → Update Documentation | Automated knowledge base maintenance |

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
Trigger: Project Updated
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

- **Strategic Timing** - Add projects when they're most relevant to agent needs
- **Content Filtering** - Choose specific content types to avoid information overload
- **Regular Updates** - Schedule periodic knowledge refreshes for evolving projects
- **Agent Specialization** - Create dedicated agents for different project types
- **Performance Monitoring** - Track agent response quality after knowledge updates

---

### Data Processing & Utilities

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| **Scrape Webpage** | Extract the contents of a web page | `url`, `selector`, `format` | Extract product info from competitor site |

### Scrape Webpage Automation Settings

{% hint style="info" %}
The Scrape Webpage action enables automated data extraction from websites. Perfect for competitor monitoring, market research, lead generation, and price tracking without manual data collection.
{% endhint %}

#### When to Use Scrape Webpage

**Perfect for:**
- **Competitor monitoring** - Track pricing, products, and promotions
- **Market research** - Gather data from multiple sources automatically
- **Lead generation** - Extract contact information from directories
- **Price monitoring** - Track product prices across e-commerce sites
- **Content aggregation** - Collect news, reviews, and industry updates

#### Scrape Webpage Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| **URL** | Target webpage URL to scrape | `https://competitor.com/products` |
| **Selectors** | CSS selectors for specific elements | `.price`, `.product-title`, `.review` |
| **Max Results** | Limit number of extracted items | 10, 50, 100 |
| **Wait Time** | Delay before scraping (seconds) | 2, 5, 10 |
| **User Agent** | Browser identification string | Desktop Chrome, Mobile Safari |
| **Headers** | Custom HTTP headers | Authorization, Accept-Language |

#### Scrape Webpage Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Competitor Analysis** | Schedule → Scrape Webpage → Analyze with AI → Update Dashboard | Real-time competitive intelligence |
| **Price Monitoring** | Schedule → Scrape Webpage → Compare Prices → Send Alerts | Dynamic pricing optimization |
| **Lead Generation** | Task Added → Scrape Webpage → Extract Contacts → Create Leads | Automated prospect discovery |
| **Market Research** | Schedule → Scrape Webpage → Aggregate Data → Generate Reports | Comprehensive market insights |
| **Content Monitoring** | Schedule → Scrape Webpage → Categorize Content → Update Knowledge Base | Current industry awareness |

#### Integration Examples

**Competitor Price Monitoring:**
```
Trigger: Schedule (Daily)
Action: Scrape Webpage (Competitor Pricing Page)
Action: Extract Prices with Selectors
Action: Compare with Your Prices
Action: Send Slack Alert (If Significant Changes)
Result: Automated competitive pricing intelligence
```

**Lead Generation from Directories:**
```
Trigger: Task Added (Industry Research)
Action: Scrape Webpage (Industry Directory)
Action: Extract Company Details
Action: Categorize with AI (Lead Qualification)
Action: Create Tasks (Follow-up Actions)
Result: Automated lead discovery and qualification
```

**Market News Aggregation:**
```
Trigger: Schedule (Hourly)
Action: Scrape Webpage (Industry News Sites)
Action: Extract Article Headlines
Action: Categorize with AI (Topic Classification)
Action: Add to Knowledge Base
Result: Current industry news awareness
```

#### Output Data Structure

**Scraped Content Format:**
```json
{
  "url": "https://example.com/products",
  "title": "Product Catalog",
  "content": {
    "text": "Full page text content...",
    "html": "<div>HTML structure...</div>",
    "structured_data": {
      "products": [
        {
          "name": "Product A",
          "price": "$99.99",
          "description": "Product description..."
        }
      ]
    }
  },
  "metadata": {
    "scraped_at": "2024-01-15T10:30:00Z",
    "response_time": 1.2,
    "content_length": 15432
  }
}
```

#### Advanced Scraping Techniques

**CSS Selector Strategies:**
- **Element Selection**: `div.product-card` - Select product containers
- **Attribute Extraction**: `img[src]` - Get image URLs
- **Text Content**: `.description::text` - Extract text only
- **Multiple Elements**: `.price, .old-price` - Select multiple elements

**JavaScript-Heavy Sites:**
- **Wait for Elements**: Delay scraping until dynamic content loads
- **Scroll Handling**: Simulate scrolling for infinite scroll pages
- **AJAX Detection**: Wait for asynchronous content to load

#### Best Practices

- **Respect robots.txt** and website terms of service
- **Use appropriate delays** between requests to avoid overloading servers
- **Handle dynamic content** with proper wait times and selectors
- **Monitor scraping success** rates and adjust selectors as needed
- **Cache results** appropriately to reduce unnecessary requests
- **Implement error handling** for network issues and site changes

#### Legal and Ethical Considerations

- **Terms of Service**: Review and comply with website terms
- **Rate Limiting**: Avoid overwhelming target servers
- **Data Usage**: Ensure compliance with data protection regulations
- **Attribution**: Properly credit sources when using scraped content
- **Fair Use**: Use scraped data responsibly and ethically
| **Convert File to Text** | Convert a source file into text | `fileUrl`, `fileType`, `extractImages` | Convert PDF manual to searchable text |
| **Transcribe YouTube Video** | Turn a YouTube video into text | `videoUrl`, `language`, `includeTimestamps` | Create transcript of training video |

### Transcribe YouTube Video Automation Settings

{% hint style="info" %}
The Transcribe YouTube Video action converts video audio into searchable, readable text using advanced AI transcription. Perfect for content indexing, accessibility, educational resources, and content repurposing.
{% endhint %}

#### When to Use Transcribe YouTube Video

**Perfect for:**
- **Content indexing** - Make video content searchable and referenceable
- **Educational resources** - Create study guides and learning materials
- **Content repurposing** - Transform video content into blogs, articles, and social posts
- **Accessibility** - Provide text transcripts for hearing-impaired users
- **Research and analysis** - Extract insights from video presentations
- **Knowledge management** - Build searchable video content libraries

#### Transcribe YouTube Video Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| **URL** | YouTube video URL to transcribe | `https://www.youtube.com/watch?v=VIDEO_ID` |
| **Language** | Audio language for accurate transcription | `en` (English), `es` (Spanish), `fr` (French) |
| **Include Timestamps** | Add time markers to transcript | `true`/`false` |
| **Output Format** | Transcript format (text, JSON, SRT) | `text`, `json`, `srt` |
| **Speaker Identification** | Identify different speakers | `true`/`false` |

#### Transcribe YouTube Video Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Content Indexing** | Schedule → Transcribe → Index in Search | 300% faster content discovery |
| **Educational Resources** | Task Added → Transcribe → Generate Study Guide | Accelerated learning materials creation |
| **Content Repurposing** | Video Upload → Transcribe → Generate Blog Post | Multi-platform content distribution |
| **Accessibility** | Video Published → Transcribe → Add Captions | Improved content accessibility |
| **Research Analysis** | Video Found → Transcribe → Extract Insights | Faster research and analysis |

#### Integration Examples

**Educational Content Pipeline:**
```
Trigger: Video Added to Course
Action: Transcribe YouTube Video (with timestamps)
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

**Basic Text Output:**
```
[00:00:15] Welcome to our product demonstration video.
[00:00:22] Today we'll show you the key features...
[00:00:45] Let's start with the user interface...
```

**JSON Output:**
```json
{
  "video_url": "https://www.youtube.com/watch?v=VIDEO_ID",
  "title": "Product Demo",
  "duration": "00:15:30",
  "language": "en",
  "transcript": [
    {
      "timestamp": "00:00:15",
      "text": "Welcome to our product demonstration video.",
      "speaker": "presenter"
    },
    {
      "timestamp": "00:00:22", 
      "text": "Today we'll show you the key features...",
      "speaker": "presenter"
    }
  ],
  "confidence_score": 0.92
}
```

#### Advanced Features

**Multi-Language Support:**
- **Automatic Language Detection** - Identifies audio language automatically
- **Manual Language Selection** - Specify language for better accuracy
- **Multi-Language Videos** - Handle videos with multiple languages

**Speaker Identification:**
- **Speaker Diarization** - Distinguish between different speakers
- **Speaker Labels** - Assign names or roles to speakers
- **Conversation Analysis** - Identify Q&A sections and discussions

**Timestamp Integration:**
- **Precise Timestamps** - Accurate time markers for each phrase
- **Chapter Markers** - Identify natural breaks and sections
- **Interactive Transcripts** - Click timestamps to jump to video sections

#### Best Practices

- **Video Quality Matters** - Clear audio produces better transcripts
- **Supported Languages** - Check language support for your content
- **Privacy Considerations** - Review content before public sharing
- **Cost Management** - Long videos may incur higher processing costs
- **Quality Validation** - Review important transcripts for accuracy
- **Integration Planning** - Consider downstream processing of transcript data

#### Rate Limiting & Performance

- **Processing Time** - Longer videos take more time to process
- **API Limits** - May have daily/hourly processing limits
- **Cost Per Minute** - Pricing based on video duration
- **Batch Processing** - Process multiple videos efficiently
- **Caching** - Store transcripts to avoid re-processing

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

---

| **Convert File to Text** | Convert a source file into text | `fileUrl`, `fileType`, `extractImages` | Convert PDF manual to searchable text |
| **Generate Image with DALL·E 3** | Create images from text prompts using OpenAI | `prompt`, `size`, `style`, `quality` | Generate illustrations and visual content |
| **Upload File to Media** | Upload file through URL to workspace media | `fileUrl`, `fileName`, `folderId` | Save document to project media library |
| **Send HTTP Request** | Makes an API request to an endpoint with multipart file support | `method`, `url`, `headers`, `body`, `files` | Call external API with file attachments |

### HTTP Request Automation Settings

{% hint style="info" %}
HTTP (HyperText Transfer Protocol) is the foundation of web communication. The HTTP Request action allows you to connect Taskade with any web service or API, enabling seamless data exchange and integration.
{% endhint %}

#### HTTP Request Parameters

| Parameter | Description | Example |
|-----------|-------------|---------|
| **Method** | HTTP method (GET, POST, PUT, DELETE, etc.) | `POST` |
| **URL** | The endpoint URL to send the request to | `https://api.example.com/v1/users` |
| **Headers** | HTTP headers (Authorization, Content-Type, etc.) | `Authorization: Bearer token123` |
| **Query Params** | URL query parameters | `?limit=10&sort=date` |
| **Body Type** | Request body format (JSON, Form Data, Raw, XML) | `JSON` |
| **Body Content** | The actual data to send | `{"name": "John", "email": "john@example.com"}` |
| **Response Body Type** | How to process the response (JSON or None) | `JSON` |

#### HTTP Request Use Cases

| Use Case | Automation Flow | Example |
|----------|-----------------|---------|
| **Weather Data** | Schedule → HTTP Request → Add Task | Get daily weather for project planning |
| **Email Validation** | Task Added → HTTP Request → Update Fields | Validate contact emails automatically |
| **Content Translation** | Task Added → HTTP Request → Append Text | Translate content for international teams |
| **Stock Prices** | Schedule → HTTP Request → Insert Row | Track investment portfolio data |
| **Public Holidays** | Project Created → HTTP Request → Create Event | Add holidays to project calendars |
| **Business Lookup** | Form Submitted → HTTP Request → Update Fields | Enrich contact data with company info |

### DALL·E 3 Image Generation Settings

{% hint style="info" %}
The Generate Image with DALL·E 3 action creates beautiful images from text prompts using OpenAI's advanced image generation technology. Perfect for illustrations, concept art, and visual content creation.
{% endhint %}

#### Setup Requirements

**OpenAI API Key Required:**
1. Visit [OpenAI Platform](https://platform.openai.com/api-keys)
2. Create a new API key with DALL·E access
3. Add the key to your Taskade automation settings

#### DALL·E 3 Parameters

| Parameter | Description | Options | Default |
|-----------|-------------|---------|---------|
| **Prompt** | Text description of the image to generate | Any descriptive text | Required |
| **Size** | Image dimensions | `1024x1024`, `1024x1792`, `1792x1024` | `1024x1024` |
| **Style** | Visual style preference | `vivid`, `natural` | `vivid` |
| **Quality** | Image quality level | `standard`, `hd` | `standard` |

#### DALL·E 3 Use Cases

| Use Case | Automation Flow | Example |
|----------|-----------------|---------|
| **Visual Content Generation** | Task Added → Generate Image → Add to Project | Create illustrations for blog posts |
| **Creative Project Support** | Task Created → Generate Image → Attach to Task | Add moodboards and concept images |
| **Social Media Visuals** | Schedule → Generate Image → Post to Social | Create dynamic social media content |
| **Learning Materials** | Task Added → Generate Image → Embed in Content | Make educational materials engaging |
| **Product Prototyping** | Task Created → Generate Image → Review & Iterate | Produce concept images for products |

**Prompt Engineering Tips:**
- Be specific about style, lighting, and composition
- Include artistic references (e.g., "in the style of Picasso")
- Specify image format and intended use
- Use descriptive adjectives for better results

### Categorize with AI Automation Settings

{% hint style="info" %}
The Categorize with AI action automatically analyzes, classifies, and organizes information using advanced AI algorithms. Choose from dozens of preset categories or create custom classification schemes for your specific needs.
{% endhint %}

#### When to Use Categorize with AI

**Perfect for:**
- **Sentiment analysis** - Determine positive, neutral, or negative sentiment in feedback
- **Lead qualification** - Score and prioritize potential customers
- **Content moderation** - Filter inappropriate or sensitive content
- **Support prioritization** - Route tickets based on urgency and type
- **Data organization** - Automatically tag and sort incoming information

#### Preset Categories Available

| Category Type | Use Cases | Output Format |
|---------------|-----------|----------------|
| **Sentiment Analysis** | Customer feedback, reviews, social media | Positive/Neutral/Negative + confidence score |
| **Lead Qualification** | Sales inquiries, prospect data | Hot/Warm/Cold + priority score |
| **Content Moderation** | User-generated content, comments | Safe/Questionable/Inappropriate |
| **Support Prioritization** | Help tickets, customer issues | Critical/High/Medium/Low |
| **Language Detection** | Multi-language content | Language code + confidence |
| **Topic Classification** | Articles, documents | Primary topic + subtopics |

#### Custom Category Configuration

**Example: Customer Support Ticket Classification**
```json
{
  "custom_categories": {
    "billing": ["payment", "invoice", "charge", "refund"],
    "technical": ["error", "bug", "login", "performance"],
    "account": ["password", "profile", "settings", "access"],
    "feature": ["request", "suggestion", "improvement", "new"]
  },
  "output_format": "single_best_match",
  "confidence_threshold": 0.7
}
```

#### Categorize with AI Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Sentiment Analysis** | Form Submission → Categorize → Route Response | 60% faster customer response time |
| **Lead Qualification** | New Contact → Categorize → Assign Sales Rep | 40% improvement in conversion rates |
| **Support Routing** | Ticket Created → Categorize → Assign Agent | 50% reduction in ticket resolution time |
| **Content Moderation** | User Post → Categorize → Approve/Reject | Maintains community standards |
| **Feedback Analysis** | Survey Response → Categorize → Update Dashboard | Data-driven product improvements |

#### Integration Examples

**Customer Support Automation:**
```
Trigger: Support Ticket Created
Action: Categorize with AI (Support Prioritization)
Branch: If "Critical" → Escalate + SMS Alert
        If "High" → Assign Senior Agent + Email
        If "Medium" → Add to Queue + Auto-Response
        If "Low" → Self-Service Resources
```

**Lead Management System:**
```
Trigger: Lead Form Submission
Action: Categorize with AI (Lead Qualification)
Action: Update Custom Field (Lead Score)
Branch: If Score > 8 → Immediate Sales Call
        If Score > 5 → Email Sequence
        If Score ≤ 5 → Nurture Campaign
```

**Content Moderation Workflow:**
```
Trigger: User Comment Posted
Action: Categorize with AI (Content Moderation)
Branch: If "Safe" → Publish Immediately
        If "Questionable" → Human Review Queue
        If "Inappropriate" → Block + Notify Moderator
```

#### Configuration Best Practices

- **Start with presets** before creating custom categories
- **Set confidence thresholds** to balance accuracy vs. coverage
- **Test with sample data** to validate categorization accuracy
- **Monitor and refine** categories based on real-world performance
- **Combine with human review** for critical decisions

#### Output Data Structure

**Standard Response Format:**
```json
{
  "category": "sentiment_positive",
  "confidence": 0.89,
  "subcategories": ["satisfied", "recommend"],
  "metadata": {
    "processing_time": 0.3,
    "model_version": "v2.1",
    "input_length": 247
  }
}
```

**Batch Processing Response:**
```json
{
  "results": [
    {
      "item_id": "feedback_123",
      "category": "technical_issue",
      "confidence": 0.92
    },
    {
      "item_id": "feedback_124",
      "category": "feature_request",
      "confidence": 0.78
    }
  ],
  "summary": {
    "total_processed": 50,
    "average_confidence": 0.84,
    "categories_found": 8
  }
}
```

---

| **Search Web** | Searches the web for information | `query`, `maxResults`, `safeSearch` | Research topic for content creation |

### Search Web Automation Settings

{% hint style="info" %}
The Search Web action enables automations to gather real-time information from the internet. Perfect for research, content creation, market analysis, and keeping your workflows updated with the latest information.
{% endhint %}

#### When to Use Search Web

**Perfect for:**
- **Research automation** - Gather up-to-date information for reports and presentations
- **Content creation** - Find relevant data and trends for blog posts and articles
- **Market analysis** - Monitor competitor activity and industry trends
- **Background checking** - Verify information and gather additional context
- **Data enrichment** - Enhance existing data with web-sourced information

#### Search Web Use Cases

| Use Case | Automation Flow | Business Impact |
|----------|-----------------|-----------------|
| **Resume Verification** | Task Added → Search Web → Compare Results | Improved hiring quality |
| **Content Research** | Schedule → Search Web → Generate Article | Faster content creation |
| **Market Intelligence** | Schedule → Search Web → Update Dashboard | Better strategic decisions |
| **Competitor Analysis** | Task Added → Search Web → Analyze Trends | Competitive advantage |
| **Automated Newsletters** | Schedule → Search Web → Curate Content | Engaging communications |

#### Configuration Options

| Setting | Description | Example |
|---------|-------------|---------|
| **Query** | Search terms to use for web search | "latest AI trends 2024" |
| **Max Results** | Number of results to return | 5, 10, 20 |
| **Safe Search** | Filter inappropriate content | Enabled for business use |
| **Date Range** | Limit to recent results | Past 24 hours, past week |
| **Language** | Search in specific language | English, Spanish, etc. |

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

**Search Results Format:**
```json
{
  "query": "AI trends 2024",
  "results": [
    {
      "title": "Top AI Trends for 2024",
      "url": "https://example.com/ai-trends",
      "snippet": "Key AI developments expected in 2024...",
      "source": "TechCrunch",
      "date": "2024-01-15"
    }
  ],
  "total_results": 1250000,
  "search_time": 0.45
}
```

#### Best Practices

- **Craft specific queries** for better, more relevant results
- **Use date filters** to focus on recent information
- **Combine with AI analysis** to process and summarize findings
- **Set reasonable limits** to avoid overwhelming downstream actions
- **Monitor search costs** for high-volume automations

#### Rate Limiting & Performance

- **API quotas** may apply depending on search provider
- **Response times** vary based on query complexity
- **Caching** can be implemented for repeated searches
- **Error handling** important for network-dependent actions

---

| **Filter Data** | Performs actions only when data meets conditions | `data`, `condition`, `operator` | Process only high-priority tickets |
| **Loop** | Iterates through data for batch processing | `array`, `actions`, `maxIterations` | Process multiple form submissions |
| **Branch** | Creates different workflow paths based on conditions | `condition`, `trueActions`, `falseActions` | Route tickets based on urgency level |

## Communication Actions

### Slack

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `slack.sendMessage` | Sends message to channel | `channel`, `message`, `attachments` | Notify team of new ticket |
| `slack.sendDM` | Sends direct message | `userId`, `message` | Alert assignee of urgent task |
| `slack.createChannel` | Creates new channel | `name`, `description`, `isPrivate` | Create project-specific channel |
| `slack.inviteUser` | Invites user to channel | `channelId`, `userId` | Add stakeholder to discussion |
| `slack.updateStatus` | Updates user status | `userId`, `status`, `emoji` | Set "In meeting" status |
| `slack.scheduleMessage` | Schedules message | `channel`, `message`, `scheduleTime` | Send reminder tomorrow |

### Email

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `email.send` | Sends email | `to`, `subject`, `body`, `attachments` | Send confirmation to customer |
| `email.sendTemplate` | Sends templated email | `to`, `templateId`, `variables` | Send welcome email with variables |
| `email.addToList` | Adds contact to mailing list | `email`, `listId`, `customFields` | Subscribe to newsletter |
| `email.removeFromList` | Removes from mailing list | `email`, `listId` | Unsubscribe user |
| `email.createCampaign` | Creates email campaign | `listId`, `subject`, `content` | Launch product announcement |

### Discord

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `discord.sendMessage` | Sends message to channel | `channelId`, `message`, `embed` | Post update to community |
| `discord.createRole` | Creates new role | `guildId`, `name`, `permissions` | Create "Beta Tester" role |
| `discord.assignRole` | Assigns role to user | `guildId`, `userId`, `roleId` | Grant access to private channel |
| `discord.createInvite` | Creates invite link | `channelId`, `maxUses`, `expires` | Generate one-time invite |

## Data & CRM Actions

### HubSpot

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `hubspot.createContact` | Creates new contact | `email`, `firstName`, `lastName`, `properties` | Add lead from form |
| `hubspot.updateContact` | Updates contact properties | `contactId`, `properties` | Update lead score |
| `hubspot.createDeal` | Creates new deal | `contactId`, `dealName`, `amount`, `stage` | Create sales opportunity |
| `hubspot.updateDeal` | Updates deal properties | `dealId`, `properties` | Move to next stage |
| `hubspot.createTask` | Creates task for contact | `contactId`, `title`, `dueDate` | Schedule follow-up call |
| `hubspot.addNote` | Adds note to contact | `contactId`, `note` | Log interaction details |

### Salesforce

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `salesforce.createLead` | Creates new lead | `email`, `firstName`, `lastName`, `company` | Add qualified lead |
| `salesforce.convertLead` | Converts lead to opportunity | `leadId`, `accountName` | Convert to sales opportunity |
| `salesforce.createCase` | Creates support case | `contactId`, `subject`, `description` | Log support ticket |
| `salesforce.updateCase` | Updates case status | `caseId`, `status`, `priority` | Escalate to manager |
| `salesforce.createActivity` | Creates activity record | `recordId`, `type`, `subject` | Log call or meeting |

### Google Sheets

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `sheets.addRow` | Adds new row to sheet | `spreadsheetId`, `range`, `values` | Log form submission |
| `sheets.updateCell` | Updates specific cell | `spreadsheetId`, `cell`, `value` | Update status column |
| `sheets.findRow` | Finds row by criteria | `spreadsheetId`, `column`, `searchValue` | Find customer record |
| `sheets.deleteRow` | Deletes row | `spreadsheetId`, `rowIndex` | Remove processed entry |
| `sheets.createChart` | Creates chart | `spreadsheetId`, `range`, `chartType` | Generate analytics chart |

### Airtable

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `airtable.createRecord` | Creates new record | `baseId`, `tableId`, `fields` | Add customer to CRM |
| `airtable.updateRecord` | Updates record fields | `baseId`, `tableId`, `recordId`, `fields` | Update project status |
| `airtable.linkRecords` | Links records together | `baseId`, `tableId`, `recordId`, `linkedRecordIds` | Connect customer to orders |
| `airtable.deleteRecord` | Deletes record | `baseId`, `tableId`, `recordId` | Remove obsolete entry |

## Development Actions

### GitHub

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `github.createIssue` | Creates new issue | `repo`, `title`, `body`, `labels` | Report bug from feedback |
| `github.updateIssue` | Updates issue | `repo`, `issueNumber`, `title`, `body`, `state` | Close resolved issue |
| `github.addComment` | Adds comment to issue | `repo`, `issueNumber`, `comment` | Add investigation notes |
| `github.createPR` | Creates pull request | `repo`, `title`, `body`, `head`, `base` | Submit fix for review |
| `github.mergePR` | Merges pull request | `repo`, `prNumber`, `mergeMethod` | Auto-merge approved PR |
| `github.createRelease` | Creates release | `repo`, `tag`, `name`, `body` | Publish new version |

### Jira

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `jira.createIssue` | Creates new issue | `project`, `issueType`, `summary`, `description` | Create bug ticket |
| `jira.updateIssue` | Updates issue fields | `issueKey`, `fields` | Update priority or assignee |
| `jira.transitionIssue` | Changes issue status | `issueKey`, `transitionId` | Move to "In Progress" |
| `jira.addComment` | Adds comment | `issueKey`, `comment` | Add troubleshooting notes |
| `jira.assignIssue` | Assigns issue to user | `issueKey`, `assignee` | Assign to developer |

## Web & Content Actions

### WordPress

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `wordpress.createPost` | Creates new post | `title`, `content`, `status`, `categories` | Publish blog article |
| `wordpress.updatePost` | Updates existing post | `postId`, `title`, `content`, `status` | Edit published content |
| `wordpress.createPage` | Creates new page | `title`, `content`, `parent` | Add landing page |
| `wordpress.uploadMedia` | Uploads media file | `file`, `title`, `description` | Add featured image |
| `wordpress.moderateComment` | Moderates comment | `commentId`, `status` | Approve or reject |

### Webflow

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `webflow.createItem` | Creates CMS item | `collectionId`, `fields` | Add new blog post |
| `webflow.updateItem` | Updates CMS item | `collectionId`, `itemId`, `fields` | Edit product details |
| `webflow.publishSite` | Publishes site changes | `siteId` | Deploy updates live |
| `webflow.createForm` | Creates form | `name`, `fields` | Add contact form |

## Utility Actions

### HTTP/Webhook

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `http.post` | Sends POST request | `url`, `headers`, `body` | Call external API |
| `http.get` | Sends GET request | `url`, `headers`, `params` | Fetch data from service |
| `http.put` | Sends PUT request | `url`, `headers`, `body` | Update external record |
| `http.delete` | Sends DELETE request | `url`, `headers` | Remove external data |
| `webhook.send` | Sends webhook payload | `url`, `payload`, `headers` | Notify external system |

### Data Processing

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `data.transform` | Transforms data format | `input`, `mapping`, `outputFormat` | Convert CSV to JSON |
| `data.validate` | Validates data schema | `input`, `schema` | Check required fields |
| `data.merge` | Merges data objects | `objects`, `mergeStrategy` | Combine multiple sources |
| `data.filter` | Filters data by criteria | `input`, `conditions` | Remove invalid entries |
| `data.aggregate` | Aggregates data | `input`, `groupBy`, `functions` | Calculate totals |

### File Operations

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `file.upload` | Uploads file to storage | `file`, `destination`, `metadata` | Store form attachment |
| `file.download` | Downloads file | `url`, `destination` | Save external resource |
| `file.convert` | Converts file format | `file`, `targetFormat` | PDF to images |
| `file.compress` | Compresses file | `file`, `compressionLevel` | Reduce file size |

## Conditional Actions

### Logic & Control Flow

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `condition.if` | Conditional execution | `condition`, `then`, `else` | If priority is high, notify manager |
| `condition.switch` | Multi-way branching | `value`, `cases`, `default` | Route by category |
| `loop.forEach` | Iterate over array | `array`, `actions` | Process each item |
| `loop.while` | Loop while condition true | `condition`, `actions` | Retry until success |
| `delay.wait` | Wait for specified time | `duration` | Wait 5 minutes before retry |

## Error Handling

| Action | Description | Parameters | Example |
|--------|-------------|------------|---------|
| `error.catch` | Catches and handles errors | `actions`, `errorHandler` | Retry on failure |
| `error.retry` | Retries failed actions | `actions`, `maxRetries`, `delay` | Retry API call 3 times |
| `error.notify` | Sends error notification | `message`, `recipients` | Alert admin of failure |
| `error.log` | Logs error details | `error`, `context` | Record for debugging |

## Usage Examples

### Basic Action Chain
```json
{
  "actions": [
    {
      "type": "taskade.createTask",
      "projectId": "proj_123",
      "title": "{{form.subject}}",
      "content": "{{form.description}}"
    },
    {
      "type": "slack.sendMessage",
      "channel": "#support",
      "message": "New task created: {{previous.title}}"
    }
  ]
}
```

### Conditional Logic
```json
{
  "actions": [
    {
      "type": "condition.if",
      "condition": "{{form.priority}} === 'high'",
      "then": [
        {
          "type": "slack.sendMessage",
          "channel": "#urgent",
          "message": "High priority: {{form.subject}}"
        }
      ],
      "else": [
        {
          "type": "taskade.createTask",
          "projectId": "backlog",
          "title": "{{form.subject}}"
        }
      ]
    }
  ]
}
```

### Error Handling
```json
{
  "actions": [
    {
      "type": "error.retry",
      "maxRetries": 3,
      "delay": 1000,
      "actions": [
        {
          "type": "http.post",
          "url": "https://api.example.com/webhook",
          "body": "{{trigger.data}}"
        }
      ]
    }
  ]
}
```

---

## 📁 **Advanced File Handling**

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

- **Document Processing Workflows**: Automatically process uploaded files
- **Image Analysis Pipelines**: Analyze images submitted through forms
- **File Validation Systems**: Check file types and sizes before processing

### **Smart Form Field Mapping**

When forms trigger automations that create tasks, the system intelligently maps form field labels to task custom fields:

- **Automatic Matching**: "Priority Level" dropdown → Priority custom field
- **Type Recognition**: Date fields map to date custom fields automatically
- **Dynamic Options**: Dropdown values sync with custom field options

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
- **Documents**: PDF, DOC, DOCX, TXT, RTF
- **Images**: JPG, PNG, GIF, WebP, SVG
- **Spreadsheets**: CSV, XLS, XLSX
- **Archives**: ZIP, RAR, 7Z
- **Media**: MP4, MP3, WAV, MOV

---

→ **Next: [Browse Triggers Reference](./triggers.md)**  
→ **See Also: [Automation Recipes](./recipes.md)** 