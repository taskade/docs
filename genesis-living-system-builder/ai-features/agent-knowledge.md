# Agent Knowledge & Memory

---

## Table of Contents

- [Overview](#overview)
- [Explore the Knowledge Tab](#explore-the-knowledge-tab)
- [Train Your Agent](#train-your-agent)
- [Supported Knowledge Sources](#supported-knowledge-sources)
- [Training Methods](#training-methods)
  - [Upload Documents](#upload-documents)
  - [Use Web Resources](#use-web-resources)
  - [Create Sources Manually](#create-sources-manually)
  - [Dynamic Knowledge (Projects)](#dynamic-knowledge-projects)
- [Bulk Training](#bulk-training)
- [Look Up References](#look-up-references)
- [Knowledge Backlinks](#knowledge-backlinks)
- [What Projects Expose to Agents](#what-projects-expose-to-agents)
- [Knowledge Best Practices](#knowledge-best-practices)
- [What's Next](#whats-next)

---

## Overview

Agent knowledge is the information your custom AI agents use to provide **contextual, accurate responses**. It combines pre-trained AI capabilities with **your own data** — documents, URLs, projects, and media — to create agents that truly understand your business.

> **Workspace DNA connection:** Knowledge is what transforms a generic AI into a specialist. The more knowledge you add, the richer your [Workspace DNA](../genesis/how-genesis-works.md) becomes, and the smarter all your Genesis apps get.

---

## Explore the Knowledge Tab

| Step | Action |
|---|---|
| 1 | Go to the **Agents** tab |
| 2 | Click the three dots (⋯) next to your agent |
| 3 | Select **Edit agent** |
| 4 | Open the **Knowledge** tab |

<!-- Screenshot: Knowledge tab with sources listed -->

The Knowledge tab shows all sources your agent has been trained on, with options to add, remove, and manage sources.

---

## Train Your Agent

### Supported Knowledge Sources

| Source Type | Formats / Types | How It's Used |
|---|---|---|
| **Documents** | PDF, CSV, TXT, DOCX, MD, PPTX, XLSX, EPUB | Full text extraction and indexing |
| **Web URLs** | Any web page, blog post, documentation page | Content scraped and indexed |
| **YouTube videos** | Video URLs | Transcript extracted and indexed |
| **Social content** | Tweets, Reddit posts, news articles | Content extracted and indexed |
| **Cloud files** | Google Drive, Dropbox, Box, OneDrive | File content pulled and indexed |
| **Taskade projects** | Any project in your workspace | Live, dynamic knowledge (updates automatically) |
| **Manual sources** | Markdown or plain text created in the Knowledge tab | Direct knowledge injection |

---

## Training Methods

### Upload Documents

| Step | Action |
|---|---|
| 1 | Open the Knowledge tab |
| 2 | Drag & drop files directly, or click **Add Media** |
| 3 | Select files from your device |
| 4 | Files are processed and indexed automatically |

**Supported document formats:**

| Format | Best For |
|---|---|
| **PDF** | Brand guidelines, reports, manuals, legal docs |
| **CSV / XLSX** | Customer data, product catalogs, pricing tables |
| **DOCX** | Procedures, policies, templates |
| **TXT / MD** | Plain text knowledge, FAQ answers, notes |
| **PPTX** | Presentations, training materials |
| **EPUB** | Books, long-form content |

### Use Web Resources

| Step | Action |
|---|---|
| 1 | Click **Add Media** in the Knowledge tab |
| 2 | Paste a URL (web page, YouTube video, cloud file link) |
| 3 | Content is scraped/transcribed and indexed |

| Resource Type | What Gets Indexed |
|---|---|
| **Web pages** | Full page text content |
| **YouTube videos** | Full video transcript |
| **Google Drive files** | Document text content |
| **Dropbox / Box / OneDrive files** | Document text content |
| **Blog posts** | Article text and metadata |
| **Tweets** | Tweet text and thread |
| **Reddit posts** | Post and top comments |
| **News articles** | Full article text |

### Create Sources Manually

| Step | Action |
|---|---|
| 1 | Open the Knowledge tab |
| 2 | Click **"Create Source"** |
| 3 | Write or paste Markdown/plain text directly |
| 4 | Save — the source is immediately available to your agent |

> **Tip:** Use manual sources for FAQ answers, custom instructions, edge case handling, or information not available in any file.

### Dynamic Knowledge (Projects)

Connect Taskade projects as **living knowledge sources** that update automatically:

| Step | Action |
|---|---|
| 1 | Open the Knowledge tab |
| 2 | Click **Add Media** → **Add from Workspace** |
| 3 | Select one or more projects |
| 4 | Projects become live knowledge — agent always has the latest data |

> **Dynamic = real-time.** When you update a project, the agent's knowledge updates automatically. No re-upload needed.

---

## Bulk Training

Upload multiple sources simultaneously:

| Method | How |
|---|---|
| **Multi-file upload** | Select multiple files in the file picker |
| **Multi-project connect** | Select multiple projects from your workspace |
| **Multi-URL paste** | Add multiple links at once |
| **Drag & drop batch** | Drag a folder or multiple files into the Knowledge tab |

---

## Look Up References

When your agent responds, it shows which sources it referenced:

| Feature | Detail |
|---|---|
| **Source citations** | Chat displays which knowledge sources were used |
| **Preview capability** | Click a citation to preview the source content |
| **Transparency** | Users can verify agent responses against source material |

<!-- Screenshot: Agent chat showing source reference citations -->

---

## Knowledge Backlinks

Projects used as agent knowledge show **backlinks** indicating which agents reference them:

| Feature | Detail |
|---|---|
| **Backlink indicator** | Projects display a badge showing connected agents |
| **Bi-directional awareness** | See which agents use a project, and which projects an agent uses |
| **Impact visibility** | Know which agents are affected when you edit a project |

> **Tip:** Backlinks help you maintain knowledge integrity. Before editing a project, check its backlinks to understand which agents depend on it.

---

## What Projects Expose to Agents

When a project is connected as knowledge, agents can access:

| Accessible | Not Accessible |
|---|---|
| Text content (tasks, notes, descriptions) | Uploaded file attachments within the project |
| Block structure (headings, lists, checklists) | Comments on tasks |
| Due dates | Embedded links within task descriptions |
| Assignee information | Reactions (emojis) |
| Timer data | Chat messages in the project |
| Custom field values | |
| Labels and tags | |

---

## Knowledge Best Practices

| Practice | Why | Example |
|---|---|---|
| **Start with your most-used docs** | Highest ROI knowledge sources | FAQ doc, product guide, pricing sheet |
| **Use projects for dynamic data** | Always up-to-date, no re-uploading | Customer list project, inventory project |
| **Create manual sources for gaps** | Fill knowledge holes quickly | Edge case handling, tone guidelines |
| **Organize by topic** | Helps agent find relevant info faster | Separate "Product" and "Pricing" sources |
| **Update regularly** | Stale knowledge = wrong answers | Quarterly review of all knowledge sources |
| **Test with real questions** | Verify agent uses knowledge correctly | Ask questions you know the answers to |
| **Use backlinks to audit** | Understand cross-dependencies | Check before editing shared projects |
| **Upload diverse formats** | Different formats capture different knowledge | PDFs for detail, CSVs for data, URLs for current info |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Tools for AI Agents](./agent-tools.md) | Add action capabilities to your agents |
| [Custom AI Agents](./ai-agents-getting-started.md) | Build and configure agents from scratch |
| [Multi-Agents](./multi-agents.md) | Create teams of agents with shared knowledge |
| [Projects & Databases](../workspaces/projects-databases.md) | Structure data for optimal agent training |
| [Adding Genesis Context](../genesis/adding-context.md) | Upload context for Genesis app creation |
