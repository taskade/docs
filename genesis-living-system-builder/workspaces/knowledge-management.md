---
description: >-
  Upload, organize, and manage knowledge sources in Taskade to power smarter AI agents, with bulk upload, links and YouTube sources, and the Agents API.
---

# Knowledge Organization

This page shows how to add, sort, and maintain the knowledge that your AI agents answer from. Knowledge is the set of files, links, and projects on the **Knowledge** tab of an agent.

{% hint style="success" %}
**Knowledge quality:** An agent answers only as well as its knowledge. Clear, current, and well-named sources give better answers.
{% endhint %}

***

## Understanding Knowledge Types

### **Supported Knowledge Sources**

| **Source Type**      | **Best For**                 | **Processing**                             |
| -------------------- | ---------------------------- | ------------------------------------------ |
| **Documents**        | Policies, manuals, guides    | Text extraction                            |
| **Websites** (paid)  | Latest info, product pages   | Reads the linked page (one page, no crawl) |
| **Spreadsheets**     | Data, lists, structured info | Data parsing + analysis                    |
| **Videos** (paid)    | Training content, demos      | YouTube auto-generated transcript          |
| **Projects**         | Live workspace data          | Real-time sync                             |
| **File Collections** | Document libraries           | Batch processing                           |

The Knowledge tab does not accept image files, and it does not read text from scanned pages. To use a scanned file, convert the file to text first.

### **Knowledge Processing Capabilities**

#### **Automatic Content Enhancement**

```yaml
Processing Features:
  Text Extraction: PDFs, Word docs, spreadsheets
  Video Transcripts: YouTube auto-generated transcripts
  Semantic Indexing: Meaning-based search optimization
```

***

## Bulk Upload & Organization

### **Bulk Upload Strategies**

#### **Method 1: Drag & Drop Collections**

```
📁 Knowledge Folder Structure:
├── 📂 Company Policies/
│   ├── employee_handbook.pdf
│   ├── code_of_conduct.docx
│   └── benefits_guide.xlsx
├── 📂 Product Documentation/
│   ├── user_manual_v2.pdf
│   ├── api_reference.md
│   └── troubleshooting_guide.pdf
├── 📂 Training Materials/
│   ├── onboarding_video.mp4
│   ├── sales_training.pptx
│   └── customer_service_scripts.docx
└── 📂 Live Data Sources/
    ├── current_projects.taskade
    ├── customer_feedback.csv
    └── inventory_data.xlsx
```

**Bulk Upload Process:**

1. **Sort your files** into folders by topic.
2. **Turn on Enable knowledge** on the **Sources** sub-tab of the agent's **Knowledge** tab. It is off by default.
3. Under **Local Upload**, click **Upload from Computer**. You can also drag the files into the upload box.
4. **Add a one-line description** to each file. The agent uses the description to find the right file.
5. **Make sure that each file shows under Trained Sources.**
6. **Ask the agent sample questions** to test the new knowledge.

If Taskade cannot read a file, Taskade skips that file and names it in a notice. The other files still upload. A Free workspace allows one knowledge source for each agent. Paid plans allow 50 sources for each agent.

#### **Method 2: URL Batch Import**

Web sources and cloud imports need a paid plan. On Free, they show an upgrade badge.

1. On the agent's **Knowledge** tab, turn on **Enable knowledge**.
2. Under **Web Sources**, pick **Website URL**, **Blog / Article**, **YouTube Video**, **RSS / Atom Feed**, or **Sitemap XML**.
3. To add files from cloud storage, pick **Google Drive**, **Dropbox**, **OneDrive**, or **Box** under **Cloud Import**.
4. Paste the link, or pick the files.
5. To add more than one source, click **Add another**.
6. Confirm the selection. Each source then shows under **Trained Sources**.

Taskade reads each link as one page. It does not follow the internal links inside a page or a sitemap. Taskade reads a web source when you add it. Click **Retrain** to read the page again after it changes. To refresh a web page on a schedule, open **Knowledge → Automation** and pick the **Web scraping** or **Scheduled updates** recipe.

#### **Method 3: API — Add Knowledge to an Agent**

For developers: the public REST API adds an existing **project** or **media** file to the knowledge of an agent. v1 has no bulk endpoint. To add several items, send one request for each item.

```bash
# Attach a project to an agent's knowledge base
curl -X POST "https://www.taskade.com/api/v1/agents/{agentId}/knowledge/project" \
  -H "Authorization: Bearer your_api_token_placeholder" \
  -H "Content-Type: application/json" \
  -d '{"projectId": "your_project_id"}'

# Attach an uploaded media file to an agent's knowledge base
curl -X POST "https://www.taskade.com/api/v1/agents/{agentId}/knowledge/media" \
  -H "Authorization: Bearer your_api_token_placeholder" \
  -H "Content-Type: application/json" \
  -d '{"mediaId": "your_media_id"}'
```

### **Smart Organization Systems**

#### **Categorization Rules**

Taskade does not sort knowledge into categories for you. Use rules like these when you name projects and files, and when you write the description of each file:

```yaml
Categorization Rules:
  By Content Type:
    - "Manual" → Product Documentation
    - "Policy" → Company Guidelines  
    - "Training" → Educational Materials
    - "FAQ" → Customer Support
  
  By Department:
    - Marketing documents → Marketing Knowledge
    - HR files → People Operations
    - Engineering docs → Technical Resources
  
  By Recency:
    - Last 30 days → Current Information
    - 3-12 months → Recent Updates
    - 1+ years → Historical Reference
```

#### **Hierarchical Knowledge Structure**

```
🏢 Company Knowledge
├── 📋 Policies & Procedures
│   ├── 🏛️ Legal & Compliance
│   ├── 👥 HR & People Operations  
│   └── 🔒 Security & Privacy
├── 📦 Products & Services
│   ├── 🛍️ Product Catalog
│   ├── 📖 User Documentation
│   └── 🔧 Technical Specifications
├── 🎯 Sales & Marketing
│   ├── 📊 Market Research
│   ├── 🎨 Brand Guidelines
│   └── 📈 Sales Materials
└── 🛠️ Operations
    ├── 📋 Standard Procedures
    ├── 🔄 Workflow Documentation
    └── 📞 Customer Support Scripts
```

***

## Advanced Knowledge Processing

### **File Processing Automation**

#### **Automated Content Enhancement**

When you add a source, Taskade prepares it for the agent:

* **Files** (PDF, DOCX, CSV, TXT, MD, PPTX, XLSX, XLS, EPUB): Taskade extracts the text.
* **YouTube videos**: Taskade uses the auto-generated transcript.
* **Web sources**: Taskade reads the page when you add it. **Retrain** reads it again.
* **Connected projects**: The agent reads text, custom fields, due dates, and assignees. It gets each change on its next reply.

Image files are not accepted. Convert a scanned file to text before you add it.

#### **Real-Time Content Updates**

```yaml
Live Sync Configuration:
  Project Integration:
    - Sync: Real-time updates from connected projects
    - Triggers: New tasks, completed items, status changes
    - Processing: Incremental knowledge updates
  
  Website Monitoring (Knowledge → Automation tab):
    - Web scraping: Watch a web page and update the agent when it changes
    - Scheduled updates: Pull fresh content into the agent on a schedule
  
  Project Versioning:
    - Track: Connected projects keep their own version history
    - Rollback: Restore a previous version of a project if needed
```

### **Quality Control & Optimization**

{% hint style="info" %}
Taskade does not make the metrics and checks that follow. They are an example of a review that you track yourself. For a public agent, open the **Inbox** sub-tab on the **Knowledge** tab. It lists the questions that the agent cannot answer and the replies that visitors rated down.
{% endhint %}

#### **Knowledge Quality Metrics**

```javascript
{
  "qualityMetrics": {
    "coverage": {
      "totalTopics": 150,
      "documentedTopics": 142,
      "coverageScore": "94.7%"
    },
    "freshness": {
      "averageAge": "45 days",
      "staleContent": "8%",
      "lastUpdated": "2024-01-15"
    },
    "accessibility": {
      "searchableContent": "98%",
      "duplicates": "2.1%",
      "brokenLinks": "0.3%"
    },
    "usage": {
      "mostAccessed": ["product_manual", "faq", "policies"],
      "leastAccessed": ["archived_docs", "legacy_info"],
      "searchMisses": "5.2%"
    }
  }
}
```

#### **Automated Quality Checks**

```json
{
  "qualityChecks": [
    {
      "type": "duplicate_detection",
      "threshold": 0.85,
      "action": "flag_for_review"
    },
    {
      "type": "content_freshness",
      "maxAge": "90 days",
      "action": "update_reminder"
    },
    {
      "type": "link_validation",
      "frequency": "weekly",
      "action": "auto_fix_or_report"
    },
    {
      "type": "relevance_scoring",
      "minScore": 0.7,
      "action": "suggest_archive"
    }
  ]
}
```

***

## AI Agent Training Optimization

### **Knowledge-to-Performance Mapping**

#### **Training Data Quality Impact**

{% hint style="info" %}
The percentages in the example that follows are illustrations, not Taskade measurements.
{% endhint %}

```yaml
Knowledge Quality Factors:
  Structure:
    - Well-organized: +40% response accuracy
    - Clear categorization: +25% search efficiency
    - Logical hierarchy: +30% context understanding
  
  Content Quality:
    - Current information: +50% accuracy
    - Comprehensive coverage: +35% completeness
    - Clear writing: +20% comprehension
  
  Metadata Richness:
    - Detailed tags: +30% findability
    - Context descriptions: +25% relevance
    - Relationship mapping: +40% connection insights
```

### **Agent-Specific Knowledge Strategies**

#### **Customer Service Agent**

```yaml
Optimal Knowledge Structure:
  Primary Sources:
    - FAQ database (comprehensive Q&A)
    - Product documentation (technical details)
    - Troubleshooting guides (step-by-step solutions)
    - Company policies (service guidelines)
  
  Organization Strategy:
    - By product line for quick product-specific help
    - By issue severity for priority handling
    - By customer type for personalized responses
  
  Update Frequency:
    - Daily: Product updates, new issues
    - Weekly: Policy changes, FAQ additions
    - Monthly: Comprehensive review and optimization
```

#### **Sales Agent**

```yaml
Optimal Knowledge Structure:
  Primary Sources:
    - Product catalogs (features, pricing, specs)
    - Sales playbooks (proven techniques, objection handling)
    - Market research (competitor analysis, trends)
    - Customer case studies (success stories, testimonials)
  
  Organization Strategy:
    - By sales stage for pipeline-appropriate content
    - By industry for vertical-specific approaches
    - By customer size for tailored solutions
  
  Performance Tracking:
    - Conversion rates by knowledge source
    - Most effective sales materials
    - Knowledge gaps causing lost deals
```

#### **Content Creation Agent**

```yaml
Optimal Knowledge Structure:
  Primary Sources:
    - Brand guidelines (voice, tone, visual standards)
    - Content templates (proven formats and structures)
    - Performance data (what content works best)
    - Industry insights (trends, audience preferences)
  
  Creative Enhancement:
    - Example library (high-performing content)
    - Style guides (writing standards by content type)
    - Visual assets (logos, images, design elements)
    - Competitor analysis (market positioning insights)
```

***

## Knowledge Analytics & Insights

### **Usage Analytics Dashboard**

{% hint style="info" %}
This dashboard is an example of a report that you make yourself. Taskade does not make it. For a public agent, the **Inbox** sub-tab on the **Knowledge** tab shows the questions that the agent cannot answer.
{% endhint %}

#### **Knowledge Performance Metrics**

```javascript
{
  "knowledgeAnalytics": {
    "searchPatterns": {
      "topQueries": [
        {"query": "password reset", "frequency": 1250, "success_rate": "94%"},
        {"query": "pricing plans", "frequency": 890, "success_rate": "88%"},
        {"query": "integration setup", "frequency": 670, "success_rate": "76%"}
      ],
      "failedSearches": {
        "count": 45,
        "common_gaps": ["mobile app issues", "advanced reporting", "API limits"]
      }
    },
    "contentEffectiveness": {
      "mostHelpful": [
        {"document": "setup_guide.pdf", "helpfulness": "96%", "usage": 2300},
        {"document": "api_reference.md", "helpfulness": "91%", "usage": 1800}
      ],
      "needsImprovement": [
        {"document": "legacy_docs.pdf", "helpfulness": "45%", "issue": "outdated"}
      ]
    }
  }
}
```

### **Predictive Knowledge Management**

#### **Content Recommendations**

Taskade does not make these suggestions for you. Use the list that follows as a plan for your own reviews.

```yaml
AI-Powered Suggestions:
  Missing Knowledge:
    - Analyze failed searches to identify gaps
    - Predict future information needs based on trends
    - Suggest content creation priorities
  
  Optimization Opportunities:
    - Identify redundant or conflicting information
    - Recommend content consolidation
    - Suggest better organization structures
  
  Update Priorities:
    - Flag outdated content based on usage patterns
    - Predict when information will become stale
    - Recommend refresh schedules
```

***

## Technical Implementation

### **Knowledge API Management**

#### **Agent Knowledge API**

The public REST API adds and removes **projects** and **media** in the knowledge of each agent. v1 has no endpoint for bulk upload, bulk update, or knowledge search. Send one request for each item. To query the knowledge, send a prompt to the agent.

```bash
# Add a project to an agent's knowledge base
curl -X POST "https://www.taskade.com/api/v1/agents/{agentId}/knowledge/project" \
  -H "Authorization: Bearer your_api_token_placeholder" \
  -H "Content-Type: application/json" \
  -d '{"projectId": "your_project_id"}'

# Add a media file (upload it via the Media API first)
curl -X POST "https://www.taskade.com/api/v1/agents/{agentId}/knowledge/media" \
  -H "Authorization: Bearer your_api_token_placeholder" \
  -H "Content-Type: application/json" \
  -d '{"mediaId": "your_media_id"}'

# Remove a project from an agent's knowledge base
curl -X DELETE "https://www.taskade.com/api/v1/agents/{agentId}/knowledge/project/{projectId}" \
  -H "Authorization: Bearer your_api_token_placeholder"
```

See the full [Agents API reference](../../apis-living-system-development/comprehensive-api-guide/agents/README.md).

### **Integration Patterns**

#### **CMS Integration**

```javascript
// Sync with content management systems
const syncCMS = async (agentId, token) => {
  const cmsContent = await fetchFromCMS();
  
  // No bulk endpoint exists in v1 — attach each imported project to the agent:
  for (const projectId of cmsContent.projectIds) {
    await fetch(`https://www.taskade.com/api/v1/agents/${agentId}/knowledge/project`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
      body: JSON.stringify({ projectId }),
    });
  }
  const processedContent = cmsContent.projectIds;
  
  return processedContent;
};
```

#### **Real-Time Updates**

Taskade has no public WebSocket API. A knowledge change through the REST endpoints in the previous section takes effect at once. To start work when a change occurs, use an automation trigger, for example **File Added to Media**.

***

## Best Practices & Strategies

### **Knowledge Organization Principles**

#### **The 3-Layer Structure**

```yaml
Layer 1 - Core Knowledge (80% of queries):
  - Essential product information
  - Common procedures and policies
  - Frequently asked questions
  
Layer 2 - Detailed Reference (15% of queries):
  - Technical documentation
  - Advanced features and configurations
  - Troubleshooting guides
  
Layer 3 - Specialized Content (5% of queries):
  - Edge cases and rare scenarios
  - Legacy information
  - Highly technical specifications
```

#### **Maintenance Strategies**

**Monthly Knowledge Audit:**

Use this schedule as a guide for a monthly review:

```yaml
Review Process:
  Week 1: Usage Analytics Review
    - Identify most/least accessed content
    - Review search success rates
    - Analyze user feedback
  
  Week 2: Content Quality Check
    - Update outdated information
    - Fix broken links and references
    - Consolidate duplicate content
  
  Week 3: Gap Analysis
    - Identify missing knowledge areas
    - Plan new content creation
    - Review competitor knowledge bases
  
  Week 4: Optimization Implementation
    - Reorganize based on usage patterns
    - Update tags and categories
    - Improve search functionality
```

### **Team Collaboration on Knowledge**

#### **Role-Based Knowledge Management**

```yaml
Team Responsibilities:
  Knowledge Owners:
    - Subject matter experts for specific domains
    - Responsible for content accuracy and updates
    - Primary reviewers for their knowledge areas
  
  Content Contributors:
    - Create and submit new knowledge items
    - Report outdated or incorrect information
    - Suggest improvements and additions
  
  Knowledge Administrators:
    - Manage overall knowledge structure
    - Coordinate updates and reviews
    - Monitor usage analytics and optimization
```

***

## Getting Started Checklist

### **Week 1: Foundation Setup**

* [ ] Review your current knowledge sources
* [ ] Define knowledge categories and structure
* [ ] Prepare folders for bulk upload
* [ ] Add descriptions to your files

### **Week 2: Content Migration**

* [ ] Upload your core documents
* [ ] Connect live sources (projects, websites)
* [ ] Add an automation that refreshes web content
* [ ] Ask sample questions to test the knowledge

### **Week 3: AI Agent Training**

* [ ] Add knowledge to the agents that need it
* [ ] Test the answers of each agent
* [ ] Improve the sources of weak answers
* [ ] Read the **Inbox** of each public agent

### **Week 4: Optimization & Scaling**

* [ ] Remove old and duplicate sources
* [ ] Make a monthly review schedule
* [ ] Show your team how to add and name sources
* [ ] Plan which content to add next

***

**🧠 Start small.** Add the documents that your team uses most. Then add more sources topic by topic.

_For more about agents, read the_ [_AI Agents Guide_](../ai-features/ai-agents-getting-started.md)_. To automate knowledge updates, read_ [_Advanced Automation Actions_](../automation/advanced-actions.md)_._

_To add knowledge from code, read the_ [_Developer Hub_](../../apis-living-system-development/developer-home.md) _and the_ [_REST API Guide_](../../apis-living-system-development/comprehensive-api-guide/README.md)_._

---

_Step-by-step guides on taskade.com/learn: [Agent Knowledge & Memory](https://www.taskade.com/learn/agents/knowledge), [Keep Your Agent's Knowledge Up to Date](https://www.taskade.com/learn/agents/knowledge-updates)._
