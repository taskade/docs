---
description: >-
  Train Taskade AI agents on your own knowledge: upload PDFs, CSVs, and docs, add URLs and YouTube, or connect projects as live, auto-updating sources.
---

# Agent Knowledge & Memory

---

## Overview

Agent knowledge is the information that your custom AI agents answer from. It is **your own data**: documents, links, projects, and media. With this data, the agent gives **accurate answers about your business** instead of general answers. Knowledge is the persistent memory of the agent.

> **Workspace DNA connection:** Knowledge makes a general AI into a specialist for your work. Your knowledge is the Memory part of [Workspace DNA](../genesis/how-genesis-works.md). Your Taskade Genesis apps use the same Memory.

---

## Explore the Knowledge Tab

1. In your workspace sidebar, open **AI Agents**.
2. Click the agent. You can also click the three dots (⋯) next to it and select **Add knowledge**.
3. Click the **Knowledge** tab, then the **Sources** sub-tab.
4. Turn on the **Enable knowledge** switch. The switch is off by default. You cannot add sources until it is on.

<!-- Screenshot: Knowledge tab with sources listed -->

The side panel groups the sources: **Taskade Workspace**, **Web Sources**, **Cloud Import**, **Local Upload**, and **Custom Text**. Your sources show under **Trained Sources**. The agent reads a source after its status shows that it is trained.

{% hint style="info" %}
A Free workspace can add one knowledge source to each agent. Every paid plan holds up to 50 sources for each agent. Web sources and cloud imports need a paid plan.
{% endhint %}

---

## Train Your Agent

### Supported Knowledge Sources

| Source Type | Formats / Types | What Taskade does with it |
|---|---|---|
| **Documents** | PDF, CSV, TXT, DOCX, MD, PPTX, XLSX, XLS, EPUB | Reads all the text and indexes it |
| **Web URLs** (paid plans) | Website URL, blog or article | Reads the page and indexes it |
| **Feeds and sitemaps** (paid plans) | RSS or Atom feed, sitemap XML | Reads the content and indexes it |
| **YouTube videos** (paid plans) | Video URLs | Reads the transcript and indexes it |
| **Cloud files** (paid plans) | Google Drive, Dropbox, Box, OneDrive | Reads the file content and indexes it |
| **Taskade projects** | Projects in your workspace | Live knowledge that updates when the project changes |
| **Manual sources** | Markdown or plain text that you write in the Knowledge tab | Adds your text to the knowledge as it is |

---

## Training Methods

### Upload Documents

1. Open the Knowledge tab.
2. Make sure that **Enable knowledge** is on.
3. Under **Local Upload**, click **Upload from Computer**. You can also drag the files into the upload box.
4. To use a file that is already in your projects, click **Add Media** under **Taskade Workspace**.

Each file then shows under **Trained Sources**. Taskade processes and indexes each file.

The Knowledge tab does not accept image files. It does not read text from scanned pages. To teach an agent from a scanned file, convert the file to text first. If you drop a file that Taskade cannot read, Taskade skips it, and a notice names the file. The other files of the batch upload as usual.

**Supported document formats:**

| Format | Best For |
|---|---|
| **PDF** | Brand guidelines, reports, manuals, legal documents |
| **CSV / XLSX / XLS** | Customer data, product catalogs, price tables |
| **DOCX** | Procedures, policies, templates |
| **TXT / MD** | Plain text knowledge, FAQ answers, notes |
| **PPTX** | Presentations, training materials |
| **EPUB** | Books, long documents |

### Use Web Resources

Web sources and cloud imports need a paid plan. On Free, they show an upgrade badge.

1. Open the Knowledge tab.
2. Make sure that **Enable knowledge** is on.
3. For a web source, pick **Website URL**, **Blog / Article**, **YouTube Video**, **RSS / Atom Feed**, or **Sitemap XML** under **Web Sources**.
4. For a cloud file, pick **Google Drive**, **Dropbox**, **OneDrive**, or **Box** under **Cloud Import**.
5. Paste the link, or pick the files.
6. Confirm the selection.

Taskade reads, transcribes, and indexes the content.

> **Note:** Taskade reads a link or a sitemap as one page. It does not follow the internal links inside the page. Taskade reads a web source one time, when you add it. After the page changes, click **Retrain** to read it again.

| Resource Type | What Taskade indexes |
|---|---|
| **Web pages** | All the text of the page |
| **YouTube videos** | The full transcript of the video |
| **Google Drive files** | The text of the document |
| **Dropbox / Box / OneDrive files** | The text of the document |
| **Blog posts** | The text and the metadata of the article |
| **RSS / Atom feeds** | The content of the feed |
| **Sitemap XML** | The sitemap page, read as one page |

### Create Sources Manually

1. Open the Knowledge tab.
2. Make sure that **Enable knowledge** is on.
3. Under **Custom Text**, click **Write Markdown** or **Paste Text**.
4. Type or paste your text.
5. Click **Add to Knowledge**.

The agent uses the new source in its next reply.

> **Tip:** A manual source is good for FAQ answers, custom instructions, special cases, and facts that are not in a file.

### Dynamic Knowledge (Projects)

A connected Taskade project is **live knowledge**. When the project changes, the knowledge of the agent changes too.

1. Open the Knowledge tab.
2. Make sure that **Enable knowledge** is on.
3. Under **Taskade Workspace**, click **Add Project**.
4. Select one or more projects.

Each connected project carries the **Auto** badge. The agent always reads the latest data of the project.

> **Live updates:** When you edit a connected project, the agent gets the change in its next reply. You do not upload it again.

---

## Bulk Training

You can add many sources at the same time:

| Method | How |
|---|---|
| **Many files** | Select many files in the file picker |
| **Many projects** | Select many projects from your workspace |
| **Many links** | Add many links at the same time |
| **Drag and drop** | Drag many files into the Knowledge tab |

---

## Look Up References

Each reply of the agent shows the sources that it used:

| Feature | Detail |
|---|---|
| **Source citations** | The chat shows which knowledge sources the agent used |
| **Preview** | Click a citation to see the content of the source |
| **Transparency** | Users can compare the reply with the source |

<!-- Screenshot: Agent chat showing source reference citations -->

---

## Knowledge Backlinks

A project that an agent uses as knowledge shows a **backlink** to that agent:

| Feature | Detail |
|---|---|
| **Backlink indicator** | The project shows a badge with the connected agents |
| **Two-way view** | You can see the agents that use a project, and the projects that an agent uses |
| **Impact** | You know which agents change when you edit a project |

> **Tip:** Before you edit a project, look at its backlinks. They show which agents use the project.

---

## What Projects Share with Agents

A connected project gives the agent some of its content, but not all of it:

| Accessible | Not Accessible |
|---|---|
| Text content (tasks, notes, descriptions) | Uploaded file attachments within the project |
| Block structure (headings, lists, checklists) | Comments on tasks |
| Due dates | Embedded links within task descriptions |
| Assignee information | Reactions (emojis) |
| Custom field values | Chat messages in the project |
| Labels and tags | Timer data |

---

## Knowledge Best Practices

| Practice | Why | Example |
|---|---|---|
| **Start with the documents that you use most** | They answer the most questions | FAQ document, product guide, price sheet |
| **Use projects for data that changes** | The agent always has the latest data | Customer list project, inventory project |
| **Write manual sources for gaps** | You add a missing fact fast | Special cases, tone rules |
| **Organize by topic** | The agent finds the correct fact faster | Separate "Product" and "Pricing" sources |
| **Update regularly** | Old knowledge gives wrong answers | Review all knowledge sources each quarter |
| **Do a test with real questions** | You see if the agent uses the knowledge correctly | Ask questions with answers that you know |
| **Use backlinks for audits** | You see which agents depend on a project | Look at backlinks before you edit a shared project |
| **Use different formats** | Each format holds a different type of fact | PDFs for detail, CSVs for data, links for current information |

---

## What's Next

| Guide | What you learn |
|---|---|
| [Tools for AI Agents](./agent-tools.md) | Let your agents take actions |
| [Custom AI Agents](./ai-agents-getting-started.md) | Build and configure agents from the start |
| [Multi-Agents](./multi-agents.md) | Make teams of agents that share knowledge |
| [Projects & Databases](../workspaces/projects-databases.md) | Organize data for agent knowledge |
| [Adding Genesis Context](../genesis/adding-context.md) | Upload context to build a Taskade Genesis app |

---

_Step-by-step guides on taskade.com/learn: [Agent Knowledge & Memory](https://www.taskade.com/learn/agents/knowledge), [Keep Your Agent's Knowledge Up to Date](https://www.taskade.com/learn/agents/knowledge-updates)._
