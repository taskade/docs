# Import

---

## Table of Contents

- [Import Markdown](#import-markdown)
  - [Overview](#overview)
  - [Import Markdown Files](#import-markdown-files)
  - [Paste Text & Markdown](#paste-text--markdown)
  - [Create Markdown Sources](#create-markdown-sources)
  - [How AI Processing Works](#how-ai-processing-works)
  - [Where Markdown Is Used in Taskade](#where-markdown-is-used-in-taskade)
- [Import PDF](#import-pdf)
  - [Overview](#overview-1)
  - [Convert PDF Into Projects](#convert-pdf-into-projects)
  - [Add PDF as Agent Knowledge](#add-pdf-as-agent-knowledge)
  - [Use PDF as Project Context](#use-pdf-as-project-context)
  - [PDF in Automations](#pdf-in-automations)
- [What's Next](#whats-next)

---

## Import Markdown

### Overview

You can quickly create new Taskade projects from Markdown (.md) files. The importer preserves your formatting — headings, lists, bold/italic text, links, and images — while AI cleans up spacing and line breaks without changing meaning.

---

### Import Markdown Files

#### Step-by-Step Tutorial

| Step | Action |
|---|---|
| 1 | Navigate to your workspace or folder |
| 2 | Click the **+ Create new** button |
| 3 | Select **Import** from the dropdown |
| 4 | **Option A:** Drag and drop `.md` files into the import box |
| 5 | **Option B:** Click **Paste Text & Markdown** to paste content directly |
| 6 | Click **Import** to finish |

#### Supported Import Formats

| Format | Extension | Notes |
|---|---|---|
| Markdown | `.md` | Full Markdown syntax preserved |
| Plain text | `.txt` | Converted to task structure |
| PDF | `.pdf` | See [Import PDF](#import-pdf) |
| Word | `.docx` | Structure preserved |
| PowerPoint | `.pptx` | Slides converted to sections |
| Excel | `.xlsx`, `.xls` | Tables preserved |
| CSV | `.csv` | Data converted to table view |
| EPUB | `.epub` | Chapters converted to sections |

---

### Paste Text & Markdown

When you paste `.txt` or `.md` content directly, Taskade AI automatically cleans it up:

#### What AI Does

| Action | Example |
|---|---|
| Adds spacing and line breaks | Proper paragraph separation |
| Preserves bullet points | `- item` stays as a bullet |
| Preserves numbered lists | `1. item` stays numbered |
| Preserves headings | `## Title` becomes H2 |
| Preserves bold/italic | `**bold**` stays bold |
| Preserves links and images | URLs and image references kept |

#### What AI Does NOT Do

| Action | Guarantee |
|---|---|
| Summarize content | Original content unchanged |
| Translate text | Language preserved |
| Add/remove meaning | No content modification |
| Add intro/outro | No extra text added |
| Comment on text | No AI commentary |

---

### Create Markdown Sources

Create `.md` files directly in Taskade and use them as project sources:

| Step | Action |
|---|---|
| 1 | Go to your workspace or folder |
| 2 | Click **+ Create new** → **AI Project** |
| 3 | Click **+ Add source** → **Paste text** |
| 4 | Paste Markdown-formatted text |
| 5 | The `.md` file is created and added to the **Media Tab** |

> Created Markdown documents can be used as agent knowledge, project context, or Genesis app context.

---

### How AI Processing Works

| Input | Output |
|---|---|
| `## Task List` | **[H2]** Task List |
| `- Buy milk` | Bullet: Buy milk |
| `1. Launch by Friday` | Numbered: Launch by Friday |
| `**Important**` | **Bold**: Important |
| `_Note_` | _Italic_: Note |
| `[Link](url)` | Clickable link |

---

### Where Markdown Is Used in Taskade

| Location | How Markdown Is Used |
|---|---|
| **Project editor** | Format tasks, checklists, and paragraphs inline |
| **Import/Export** | Convert `.md` files to projects and vice versa |
| **AI Project Studio** | Add `.md` files as context for AI-generated projects |
| **AI Agents** | Fine-tune agents using Markdown knowledge sources |
| **Chat & Comments** | Format messages with Markdown syntax |
| **Quick Add widget** | Add formatted notes and tasks |
| **Genesis Context** | Upload `.md` files as app-building context |

---

## Import PDF

### Overview

Taskade supports PDF import in three powerful ways: convert PDFs to structured projects, use them as AI agent knowledge, or add them as context for AI-generated projects. PDFs can also be processed in automation flows using the `pdf.convertToText` action.

> **Genesis connection:** Upload PDFs as Genesis context to create apps that match your existing documents, forms, and processes.

---

### Convert PDF Into Projects

Turn any PDF into a structured Taskade project:

| Step | Action |
|---|---|
| 1 | Click **+ Create new** in your workspace (top-right corner) |
| 2 | Choose **Import** from the dropdown |
| 3 | Select an import mode: |

| Mode | What It Does |
|---|---|
| **Convert to Taskade** | Converts the PDF into a structured project with headings, tasks, and sections |
| **Summarize with AI** | Creates a concise summary of the PDF in a new project |

| Step | Action |
|---|---|
| 4 | Drag files into the box or click to upload |
| 5 | Wait for the importer to process |
| 6 | Click **+ Create Project** to create the new project |

---

### Add PDF as Agent Knowledge

Train your AI agents on PDF content:

| Step | Action |
|---|---|
| 1 | Go to your workspace → **Agents** tab |
| 2 | Click the three dots (⋯) next to your agent → **Edit agent** |
| 3 | Open the **Knowledge** tab |
| 4 | Enable agent knowledge (toggle on) |
| 5 | **Option A:** Drag PDF files into the box, or click to upload |
| 6 | **Option B:** Click **Add Media** to select files from your workspace |

> **Result:** Your agent can now answer questions using information from the uploaded PDFs. References are cited in agent responses.

---

### Use PDF as Project Context

Use PDFs as seed data for AI-generated projects:

| Step | Action |
|---|---|
| 1 | Click **+ Create new** → **AI Project** |
| 2 | Describe the project you want to generate |
| 3 | Click **Upload Files** and upload your `.pdf` files |
| 4 | Click Enter to generate the project |

> **What happens:** AI reads the PDF content and uses it as context to generate a more relevant, customized project.

---

### PDF in Automations

PDFs can be processed automatically within automation flows:

| Action | What It Does | Use Case |
|---|---|---|
| **pdf.convertToText** | Converts PDF content to plain text | Extract text for AI analysis, data processing |
| **Upload File to Media** | Saves PDF to workspace Media | Archive incoming attachments |
| **Agent Knowledge Add** | Adds PDF content to agent knowledge | Auto-train agents on new documents |

#### Example Automation Flow

| Step | Action |
|---|---|
| Trigger | New Email with PDF attachment (Gmail) |
| Action 1 | Loop through attachments |
| Action 2 | Convert PDF to text (`pdf.convertToText`) |
| Action 3 | AI summarizes the text (`ai.generate`) |
| Action 4 | Create task with summary in project |
| Action 5 | Notify team on Slack |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Markdown Support](./markdown.md) | Full syntax reference and usage guide |
| [Editing & Formatting](./editing-formatting.md) | Format tasks and projects |
