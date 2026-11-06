---
description: >-
  Format Taskade tasks with headings, lists, highlights, and multiple project views, plus add-ons like due dates, timers, and keyboard shortcuts.
---

# Editing & Formatting

---

## Table of Contents

- [Overview](#overview)
- [Format Tasks & Sub-Tasks](#format-tasks-and-sub-tasks)
- [Available Block Types](#available-block-types)
- [Project Views](#project-views)
- [Highlight & Style](#highlight-and-style)
- [Drag to Reorder](#drag-to-reorder)
- [Multi-Select Formatting](#multi-select-formatting)
- [Add-Ons Menu](#add-ons-menu)
- [Keyboard Shortcuts](#keyboard-shortcuts)
- [What's Next](#whats-next)

---

## Overview

Every Taskade project is a collection of **tasks** — structured like bullet points that can be nested into sub-tasks. You can format, style, reorder, and enhance tasks with add-ons like due dates, assignees, comments, timers, and custom fields.

> **Taskade Genesis hint:** Genesis apps use these same formatting and structuring capabilities in their project databases. Understanding formatting helps you build better apps.

---

## Format Tasks & Sub-Tasks

Taskade lets you turn tasks into checklists, headings, ordered lists, paragraphs, and more.

### How to Format

| Method | Steps |
|---|---|
| **Drag icon** | Click the six-dot drag icon to the left of a task → Click the first item → Select a format |
| **Slash command** | Type `/` followed by the format name (e.g., `/paragraph`, `/heading1`, `/checklist`) |
| **Keyboard shortcut** | Use shortcuts listed below |

---

## Available Block Types

| Format | Slash command | Markdown shortcut |
|---|---|---|
| **Heading 1** (large section title) | `/heading1` | `# ` + space |
| **Heading 2** (sub-section title) | `/heading2` | `## ` + space |
| **Paragraph** (plain text block) | `/paragraph` | — |
| **Check 1** (square checkbox task item) | `/checklist` | `[] ` + space |
| **Check 2** (circle checkbox variant) | `/circle-check` | — |
| **Bullet 1** (unordered list item) | `/bullet` | `- ` + space |
| **Number** (ordered list item) | `/numbered` | `1. ` + space |
| **Letter** (lettered list item: a, b, c) | `/alpha` | — |
| **Check 3** (heart checkbox variant) | `/heart` | — |
| **Bullet 2** (triangle bullet) | `/triangle` | — |
| **Bullet 3** (square bullet) | `/square` | — |

---

## Project Views

The same content can be displayed in **multiple project views** — switch anytime without changing your data:

| View | Description | Best For |
|---|---|---|
| **List** | Vertical list/to-do format with checkboxes and hierarchy | Task management, checklists, notes |
| **Board** | Kanban columns for workflow stages (drag-and-drop) | Pipeline management, sprints |
| **Table** | Structured spreadsheet-like format with filtering, sorting, grouping | Data management, CRM |
| **Calendar** | Events on calendar grid for deadline tracking | Scheduling, content calendars |
| **Gantt Chart** | Timeline with task duration, dependencies, and progress | Project planning, milestones |
| **Mind Map** | Connected nodes radiating from center | Brainstorming, concept mapping |
| **Org Chart** | Hierarchical organizational structure | Team structure, process flows |
| **Actionsheet** | Compact action-oriented format | Quick task management |
| **Docs (Beta)** | Continuous rich-text document editing | Specs, long-form writing |

Gantt Chart, Actionsheet, and Org Chart are on paid plans.

---

## Highlight & Style

### Text Styling

| Style | Keyboard Shortcut (Mac) | Keyboard Shortcut (PC) | Markdown |
|---|---|---|---|
| **Bold** | Cmd + B | Ctrl + B | `**text**` |
| **Italic** | Cmd + I | Ctrl + I | `_text_` |
| **Underline** | Cmd + U | Ctrl + U | `__text__` |
| **Strikethrough** | — | — | `~~text~~` |
| **Inline code** | — | — | `` `code` `` |
| **Block quote** | — | — | `> quote` |
| **Code block** | — | — | ` ```code``` ` |

### Color Highlights

| Method | Steps |
|---|---|
| **Menu** | Select text → Click three dots → Select **A** (highlight) → Choose color |
| **Keyboard** | Select text → Cmd + E (Mac) / Ctrl + E (PC) → Cycle through colors |
| **Slash command** | Type `/red`, `/blue`, `/green`, etc. |
| **Remove highlight** | Select same color again, or press Cmd/Ctrl + E |

---

## Drag to Reorder

| Action | How |
|---|---|
| **Reorder tasks** | Grab the six-dot drag icon to the left of any task → Drag to new position |
| **Nest as sub-task** | Drag a task underneath and to the right of another task |
| **Un-nest** | Drag a sub-task to the left to promote it |
| **Move sections** | Drag a top-level task to reorder its entire section (including sub-tasks) |

---

## Multi-Select Formatting

Format multiple tasks at once:

| Step | Action |
|---|---|
| 1 | Highlight multiple tasks or lines of text with the mouse cursor |
| 2 | Apply formatting using the toolbar, slash commands, or keyboard shortcuts |
| 3 | All selected items are formatted simultaneously |

---

## Add-Ons Menu

Enhance tasks with additional features:

| Add-On | Shortcut (after Cmd + /) | Slash Command | Description |
|---|---|---|---|
| **Due Date** | D | `/due` | Set start/end dates with optional times |
| **Assign** | A | `/assign` | Assign to team members |
| **Comment** | C | `/comment` | Thread discussions on tasks |
| **Embed** | E | `/embed` | Embed media, links, or files |
| **Timer** | T | `/timer` | Track time spent on tasks |
| **Label/Tag** | — | `/tag` | Color-coded categorization |
| **Custom Fields** | — | `/field` | Add custom field values (text, number, date, select) |
| **File Attachment** | — | `/file` | Attach documents and media |

### Accessing the Add-Ons Menu

| Method | Steps |
|---|---|
| **Plus icon** | Click the **+** icon next to a task → Choose an add-on |
| **Keyboard** | Press **Cmd + /** then a letter (D, A, C, E, T) |
| **Slash command** | Type `/` followed by the add-on name |

---

## Keyboard Shortcuts

| Action | Mac | PC |
|---|---|---|
| Bold | Cmd + B | Ctrl + B |
| Italic | Cmd + I | Ctrl + I |
| Underline | Cmd + U | Ctrl + U |
| Highlight | Cmd + E | Ctrl + E |
| Add-ons menu | Cmd + / | Ctrl + / |
| Due date | Cmd + / then D | Ctrl + / then D |
| Assign | Cmd + / then A | Ctrl + / then A |
| Comment | Cmd + / then C | Ctrl + / then C |
| Embed | Cmd + / then E | Ctrl + / then E |
| Timer | Cmd + / then T | Ctrl + / then T |
| Indent (nest) | Tab | Tab |
| Outdent (un-nest) | Shift + Tab | Shift + Tab |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Markdown Support](./markdown.md) | Full Markdown syntax reference |
| [Import](./import.md) | Import .md and PDF files as projects |
| [Version History](../genesis/version-history.md) | Restore an earlier version of a Taskade Genesis app |
| [Embed Taskade](./embed.md) | Embed projects on your website |

---

_Step-by-step guides on taskade.com/learn: [Editing & Formatting](https://www.taskade.com/learn/projects/editing-formatting), [Slash Commands](https://www.taskade.com/learn/projects/slash-commands)._
