---
title: "Add Knowledge to Agent (Automation Action)"
description: "Automatically train your agents on knowledge from various sources."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action"
intercom_id: "9994434"
state: "published"
date_created: "1728933944"
date_updated: "1748969209"
date_imported: "2025-09-13T18:58:27.191Z"
---

Title: Add Knowledge to Agent (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action

Markdown Content:
Automatically train your agents on knowledge from various sources.

Updated over 3 months ago

**Overview**
------------

The **Add Knowledge to Agent** automation action lets you grow your AI agent’s knowledge base automatically. You can pass in content from a variety of sources — structured or unstructured — and Taskade will store it as searchable knowledge**.**

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1552605289/035c8d2462206dd42c0bab3050e3/agent-knowledge-to-agent.jpg?expires=1757791800&signature=28802b3c48329fec4c5b24c8107215e33a2d1709960e5c06455915e090a79768&req=dSUiFM9%2BmINXUPMW1HO4zV0NsrHulbQSmD38LraJdjJv5Rc9dYQUnwE5lcph%0AYN2XDLgV8jP5xB%2Bk8rA%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1552605289/035c8d2462206dd42c0bab3050e3/agent-knowledge-to-agent.jpg?expires=1757791800&signature=28802b3c48329fec4c5b24c8107215e33a2d1709960e5c06455915e090a79768&req=dSUiFM9%2BmINXUPMW1HO4zV0NsrHulbQSmD38LraJdjJv5Rc9dYQUnwE5lcph%0AYN2XDLgV8jP5xB%2Bk8rA%3D%0A)

**How to Use It**
-----------------

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1554022705/9121c5d831328c96c91961df112d/add-knowledge-to-agent-settings.jpg?expires=1757791800&signature=5f720b0a5381af5d8e41585c4dec9e930d93a19bcd1ca3920af2d91440cd7c72&req=dSUiEsl8n4ZfXPMW1HO4zbkG92PSKvsMcu51ciZrJ1EuxV92mQlciMp%2FaNkt%0AooPzRmHRqkJvE%2B2LgxM%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1554022705/9121c5d831328c96c91961df112d/add-knowledge-to-agent-settings.jpg?expires=1757791800&signature=5f720b0a5381af5d8e41585c4dec9e930d93a19bcd1ca3920af2d91440cd7c72&req=dSUiEsl8n4ZfXPMW1HO4zbkG92PSKvsMcu51ciZrJ1EuxV92mQlciMp%2FaNkt%0AooPzRmHRqkJvE%2B2LgxM%3D%0A)

Add Knowledge to Agent (Settings)
---------------------------------

Connector options give you full control over the Create Project automation:

**🏷️ Field****🔤 Description**
(required) Agent The agent that will be fine-tuned.
(required) Knowledge Type The type of knowledge to be added.
(required) File Download The URL of the knowledge source.
(required) YouTube URL The URL of the YouTube video.
(optional) Title The title of the knowledge file.
(required) Content The content of the knowledge file.

Add Knowledge to Agent Use Cases
--------------------------------

Not sure how to use the Add Knowledge to Agent action? Here are a few ideas:

🪄 **Use Case**⏩ **Action Flow**
**Expand industry knowledge**✅ Trigger: `Schedule` (weekly)

➡️ Action: `Scrape Webpage` (industry blog)

➡️ Action: `Add Knowledge to Agent` (with scraped content)
**Incorporate company policies**✅ Trigger: `New File` (Google Drive Trigger)

➡️ Action: `Convert File to Text` (PDF of policy)

➡️ Action: `Add Knowledge to Agent` (with content)
**Update product information**✅ Trigger: `New Row` (in Google Sheets)

➡️ Action: `Find Row(s)` with product update details

➡️ Action: `Transform Array to String`

➡️ Action: `Add Knowledge to Agent`
**Integrate training materials**✅ Trigger: `Task Added` (video URL in a "Training" project)

➡️ Action: `Transcribe YouTube Video`

➡️ Action: `Add Knowledge to Agent`
**Update compliance documents**✅ Trigger: `New File` (legal folder in Google Drive)

➡️ Action: `Convert File to Text`

➡️ Action: `Add Knowledge to Agent` (extracted text)

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Agent Knowledge & Memory](https://help.taskade.com/en/articles/9495190-agent-knowledge-memory)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)[Upload File to Media (Automation Action)](https://help.taskade.com/en/articles/10111256-upload-file-to-media-automation-action)[Mark Task as Completed (Automation Action)](https://help.taskade.com/en/articles/11410590-mark-task-as-completed-automation-action)[Add Project to Agent Knowledge (Automation Action)](https://help.taskade.com/en/articles/11410854-add-project-to-agent-knowledge-automation-action)
