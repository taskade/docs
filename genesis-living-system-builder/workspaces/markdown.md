---
description: >-
  Use Markdown in Taskade across the project editor, chat, comments, AI agent chat, import/export, and widgets. Full syntax reference for headings, lists, and formatting.
---

# Markdown Support

---

## Overview

Markdown is a lightweight markup language that uses characters like `*`, `#`, and `-` to format text. Taskade supports Markdown across **several surfaces** — from the project editor to AI agent chats, import/export, and browser widgets.

---

## Where Markdown Works in Taskade

| Surface | What Markdown Does |
|---|---|
| **Project editor** | Format tasks, checklists, headings, and paragraphs inline |
| **Import/Export** | Convert `.md` docs to projects and projects to `.md` files |
| **AI Project Studio** | Add `.md` files as context for AI-generated projects |
| **AI Agents** | Fine-tune agents using Markdown knowledge; structure prompts in agent chat |
| **Chat & Comments** | Format team messages and task comments |
| **Quick Add widget** | Add formatted notes and tasks from the desktop/browser widget |
| **Taskade Genesis Context** | Upload `.md` files as app-building context |

---

## Supported Syntax Reference

### Inline Formatting

| Feature | Syntax | Rendered Output |
|---|---|---|
| **Bold** | `**bold text**` | **bold text** |
| **Italic** | `_italic text_` | _italic text_ |
| **Underline** | `__underlined__` | Underlined text |
| **Strikethrough** | `~~strikethrough~~` | ~~strikethrough~~ |
| **Inline code** | `` `code` `` | `code` |
| **Block quote** | `> quoted text` | A quoted, indented line |
| **Code block** | ` ```code block``` ` | Formatted code block |

### Block Formatting (Project Editor)

Type these at the beginning of a line followed by a space:

| Syntax | Result | Description |
|---|---|---|
| `#` | H1 heading | Large section title |
| `##` | H2 heading | Sub-section title |
| `-` | Bullet list | Unordered list item |
| `1.` `2.` `3.` | Numbered list | Ordered list items |
| `[]` | Checklist | Checkbox task item |

### Links

| Feature | Syntax | Description |
|---|---|---|
| **Web link** | `[text](url)` | Standard hyperlink |

---

## Markdown in the Project Editor

Type Markdown syntax directly while editing tasks:

| Action | How |
|---|---|
| Create heading | Type `# ` or `## ` at the start of a line |
| Create bullet list | Type `- ` at the start of a line |
| Create numbered list | Type `1. ` at the start of a line |
| Create checklist | Type `[] ` at the start of a line |
| Bold text | Wrap text in `**double asterisks**` |
| Italic text | Wrap text in `_underscores_` |
| Code block | Wrap text in `` ``` `` |

---

## Markdown in Chat & Comments

### Chat

1. Open the project chat box
2. Wrap your message in Markdown syntax
3. Taskade renders the formatted text

### Comments

1. Select a task → Click **+** → Select **Comments** (or press C)
2. Type your comment with Markdown syntax
3. Click send — Markdown is rendered

---

## Markdown in Agent Chat

Use Markdown to structure prompts and get better AI responses:

| Technique | Example | Use Case |
|---|---|---|
| **Emphasis** | `Fields marked with **bold** are mandatory.` | Highlight important instructions |
| **Code blocks** | `` ```python\ndef calculate(): ... ``` `` | Ask AI to analyze or debug code |
| **Lists** | `1. Download installer\n2. Accept license\n3. Choose directory` | Define step-by-step instructions |
| **Block quotes** | `> "Success is not final..."` | Emphasize key quotes or reminders |

---

## Markdown in AI Project Studio

Use `.md` files as context for AI-generated projects:

1. Click **+ Create new** → **AI Project**
2. Describe the project you want
3. Click the upload dropdown → **Upload Files**
4. Upload your `.md` files as context
5. Generate the project — AI uses your Markdown as input

---

## Markdown in Browser Widgets & Quick Add

| Method | Steps |
|---|---|
| **Browser extension** | Right-click Taskade Extension → Add content with Markdown → Choose project |
| **Quick Add widget** | Open Quick Add → Write Markdown → Choose target project |

---

## Import & Export Markdown

### Import

| Method | Steps |
|---|---|
| **File upload** | **+ Create new** → **Import** → Drag `.md` files or click upload |
| **Paste** | **+ Create new** → **Import** → **Paste Text & Markdown** → Paste content |
| **Direct** | Visit `taskade.com/create` to start instantly |

### Export

1. Click the three dots (⋯) at the top-right of your project
2. Select **Export** → Choose **Markdown**
3. Download the `.md` file

---

## Add Markdown to Agent Knowledge

Create Markdown knowledge sources directly in your agent:

1. Go to your workspace → **AI Agents** tab → Click the arrow next to the name of your agent → **Edit agent**
2. Open the **Knowledge** tab
3. Click **Add Markdown/Text**
4. Paste Markdown or plain text into the pop-up
5. Click **Add to Knowledge**
6. Click **Update** in the Knowledge tab to save

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Import](./import.md) | Full import walkthrough |
| [Editing & Formatting](./editing-formatting.md) | All formatting options |

---

_Step-by-step guide on taskade.com/learn: [Markdown Support](https://www.taskade.com/learn/projects/markdown-support)._
