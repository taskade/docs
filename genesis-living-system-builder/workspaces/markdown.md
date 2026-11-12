---
description: >-
  Use Markdown in Taskade in the project editor, chat, comments, AI agent chat, import and export, and widgets. See the syntax for headings, lists, and styles.
---

# Markdown Support

---

## Overview

Markdown is a simple way to format text with characters such as `*`, `#`, and `-`. You can use Markdown in many places in Taskade: the project editor, AI agent chats, import and export, and browser widgets.

---

## Where Markdown Works in Taskade

| Place | What Markdown does |
|---|---|
| **Project editor** | Formats tasks, checklists, headings, and paragraphs as you type |
| **Import/Export** | Changes `.md` documents into projects, and projects into `.md` files |
| **AI Project Studio** | Gives `.md` files to the AI as context for a new project |
| **AI Agents** | Teaches agents with Markdown knowledge, and gives structure to your prompts in agent chat |
| **Chat & Comments** | Formats team messages and task comments |
| **Quick Add widget** | Adds formatted notes and tasks from the desktop or browser widget |
| **Taskade Genesis Context** | Gives `.md` files to Taskade Genesis as context when it builds an app |

---

## Supported Syntax Reference

### Inline Formatting

| Feature | Syntax | Result |
|---|---|---|
| **Bold** | `**bold text**` | **bold text** |
| **Italic** | `_italic text_` | _italic text_ |
| **Underline** | `__underlined__` | Underlined text |
| **Strikethrough** | `~~strikethrough~~` | ~~strikethrough~~ |
| **Inline code** | `` `code` `` | `code` |
| **Block quote** | `> quoted text` | A quoted line with an indent |
| **Code block** | ` ```code block``` ` | A formatted code block |

### Block Formatting (Project Editor)

Type these characters at the start of a line, and then type a space:

| Syntax | Result | Description |
|---|---|---|
| `#` | Heading 1 | A large section title |
| `##` | Heading 2 | A sub-section title |
| `-` | Bullet list | An item in a list with no order |
| `1.` `2.` `3.` | Numbered list | Items in a numbered list |
| `[]` | Checklist | A task with a checkbox |

### Links

| Feature | Syntax | Description |
|---|---|---|
| **Web link** | `[text](url)` | A standard link to a web page |

---

## Markdown in the Project Editor

Type Markdown syntax while you edit tasks:

| Action | How |
|---|---|
| Make a heading | Type `# ` or `## ` at the start of a line |
| Make a bullet list | Type `- ` at the start of a line |
| Make a numbered list | Type `1. ` at the start of a line |
| Make a checklist | Type `[] ` at the start of a line |
| Make text bold | Put `**double asterisks**` on the two sides of the text |
| Make text italic | Put `_underscores_` on the two sides of the text |
| Make a code block | Put `` ``` `` on the two sides of the text |

---

## Markdown in Chat & Comments

### Chat

1. Open the project chat box.
2. Write your message with Markdown syntax.
3. Send the message. Taskade shows the formatted text.

### Comments

1. Select a task → Click **+** → Select **Comments** (or press C).
2. Type your comment with Markdown syntax.
3. Click send. Taskade shows the formatted comment.

---

## Markdown in Agent Chat

Use Markdown to give structure to your prompts. A clear structure helps the AI give better answers.

| Technique | Example | Use |
|---|---|---|
| **Emphasis** | `Fields marked with **bold** are mandatory.` | Show the most important instructions |
| **Code blocks** | `` ```python\ndef calculate(): ... ``` `` | Ask the AI to analyze or debug code |
| **Lists** | `1. Download installer\n2. Accept license\n3. Choose directory` | Give instructions step by step |
| **Block quotes** | `> "Success is not final..."` | Show a key quote or reminder |

---

## Markdown in AI Project Studio

Give `.md` files to the AI as context for a new project:

1. Click **+** next to **Projects** in the sidebar → **AI Project**.
2. Describe the project that you want.
3. Click the upload dropdown → **Upload Files**.
4. Upload your `.md` files.
5. Generate the project. The AI uses your Markdown as input.

---

## Markdown in Browser Widgets & Quick Add

| Method | Steps |
|---|---|
| **Browser extension** | Right-click the Taskade extension → Add content with Markdown → Select a project |
| **Quick Add widget** | Open Quick Add → Write Markdown → Select the project |

---

## Import & Export Markdown

### Import

| Method | Steps |
|---|---|
| **File upload** | **Projects** tab → **Import** → Drag `.md` files into the dropzone, or click to upload |
| **Paste** | **Projects** tab → **Import** → **Paste Text & Markdown** → Paste the content |
| **Sidebar** | **+** next to **Projects** → **Import** |

### Export

1. Click the three dots (⋯) at the top right of your project.
2. Select **Export** → **Markdown**.
3. Download the `.md` file.

---

## Add Markdown to Agent Knowledge

You can write Markdown knowledge for an agent in the agent itself:

1. Go to your workspace → **AI Agents** tab → Click the arrow next to the name of your agent → **Edit agent**.
2. Open the **Knowledge** tab.
3. Turn on the **Enable knowledge** switch. It is off by default.
4. Open **Sources**. Under **Custom Text**, select **Write Markdown** or **Paste Text**.
5. Paste Markdown or plain text into the pop-up.
6. Click **Add to Knowledge**.

---

## What's Next

| Guide | What you learn |
|---|---|
| [Import](./import.md) | All the steps to import content |
| [Editing & Formatting](./editing-formatting.md) | All the format options |

---

_Step-by-step guide on taskade.com/learn: [Markdown Support](https://www.taskade.com/learn/projects/markdown-support)._
