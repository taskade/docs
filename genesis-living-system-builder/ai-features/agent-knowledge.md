---
description: >-
  Train your AI agents with documents, websites, videos, and live project data
  so they can answer questions and take action using your business context.
---

# Agent Knowledge & Memory

Knowledge is what makes your agent **yours**. Without it, an agent is a general-purpose assistant. With it, the agent understands your products, processes, customers, and data — and gives answers grounded in your reality.

{% hint style="info" %}
**The smarter you train, the smarter it gets.** An agent with well-organized, up-to-date knowledge will outperform one with more tools but no context.
{% endhint %}

## How to Train an Agent

1. Open the **Agents** tab and select your agent.
2. Click **Edit Agent** in the top-right corner.
3. Switch to the **Knowledge** tab in the sidebar.
4. Toggle **Enable Knowledge** on.
5. Add your sources (see options below).
6. Click **Update** to save.

Your agent immediately starts learning from the uploaded content. You can add, remove, or replace sources at any time.

## Supported Knowledge Sources

| Source Type | Supported Formats |
|---|---|
| **Files** | `.pdf`, `.csv`, `.txt`, `.docx`, `.md`, `.pptx`, `.xlsx`, `.epub` |
| **Web** | YouTube transcripts, blog posts, tweets, Reddit threads, news articles |
| **Cloud Storage** | Google Drive, Dropbox, Box, OneDrive |
| **Live Data** | Taskade Projects (auto-updates), Web Links |

### How to add each source

| Source | Steps |
|---|---|
| **Upload Files** | Knowledge tab > **Upload** > drag and drop or browse files |
| **Add from Media** | Knowledge tab > **Add from Media** > select files already in your workspace |
| **Add a Web Link** | Knowledge tab > **Add Link** > paste URL > the agent fetches and indexes the content |
| **Add YouTube** | Knowledge tab > **Add YouTube** > paste video URL > the agent reads the transcript |
| **Connect a Project** | Knowledge tab > **Add Project** > select a Taskade project from your workspace |

## Dynamic Knowledge (Live Project Data)

When you add a **Taskade Project** as a knowledge source, it becomes **dynamic knowledge** — a living data connection that updates automatically whenever the project changes.

{% hint style="success" %}
**This is the secret to agents that stay current.** Instead of re-uploading documents every time something changes, point your agent at the project and let it learn continuously.
{% endhint %}

### What the agent can read from projects

| Included | Not included |
|---|---|
| Text content and blocks | Uploaded file attachments |
| Due dates and deadlines | Comments on tasks |
| Assignee information | Embedded links within tasks |
| Task structure and hierarchy | Timers and time tracking data |
| | Reactions |
| | Custom field values |

{% hint style="warning" %}
If your agent needs information from uploaded files or comments, copy the relevant content into the project's text blocks or upload those files directly to the agent's knowledge.
{% endhint %}

## Look Up References

When your agent answers a question, it can show you **which knowledge sources it referenced**. This gives you transparency into where the answer came from.

In an agent chat, look for the **source references** section below the response. Each reference links back to the original document, web page, or project so you can verify the information.

## Knowledge Backlinks

Taskade also tracks the reverse direction: which agents use a given project as knowledge.

Open any project and check the **Backlinks** section to see a list of agents that reference it. This helps you understand the impact of editing or deleting a project — you will know exactly which agents depend on it.

{% hint style="info" %}
**Before deleting a project**, check its backlinks. Removing a project that agents rely on will reduce their ability to answer questions accurately.
{% endhint %}

## Best Practices

### Start with your best content

Upload your most accurate, well-written documents first. The quality of your knowledge directly determines the quality of your agent's answers.

### Keep sources current

Set a regular cadence to review and refresh knowledge sources. Outdated information leads to outdated answers.

### Use projects for fast-changing data

For information that changes frequently (task lists, team rosters, pricing, inventory), use dynamic project knowledge instead of static file uploads.

### Organize before you upload

Structure your documents with clear headings and sections. Agents retrieve information more accurately from well-organized content.

### Test after training

After adding new knowledge, ask your agent several questions to verify it can find and use the new information correctly. Try both direct questions ("What is our return policy?") and indirect ones ("A customer wants to send back a product — what do I tell them?").

## Next Steps

* [AI Agent Tools](agent-tools.md) — give your agent the ability to take action
* [AI Agent Teams](agent-teams.md) — combine agents into collaborative teams
* [AI Agents Getting Started](ai-agents-getting-started.md) — create your first agent
* [Knowledge Organization](../workspaces/knowledge-management.md) — structure your workspace for better AI understanding
