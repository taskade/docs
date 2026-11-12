---
description: >-
  Format Taskade tasks with headings, lists, and highlights. Use the slash command menu, add-ons such as due dates and timers, and keyboard shortcuts.
---

# Editing & Formatting

---

## Overview

A Taskade project is a list of **tasks**. Each task is a line, like a bullet point, and you can put tasks inside other tasks as sub-tasks. You can change the format of a task, add style to its text, move it, and add add-ons such as due dates, assignees, comments, timers, and custom fields.

> **Taskade Genesis hint:** Taskade Genesis apps keep their data in projects with the same formats. If you know these formats, you can build better apps.

---

## Format Tasks & Sub-Tasks

You can change a task into a checkbox, a heading, a numbered item, a paragraph, and more.

### How to Format

| Method | Steps |
|---|---|
| **Drag icon** | Click the six-dot drag icon to the left of a task → Click the first item → Select a format |
| **Slash command** | Type `/turn to` and select a format. You can also type `/` and the first letters of the format name, for example `/heading` |
| **Keyboard shortcut** | Use the shortcuts in the tables below |

---

## Available Block Types

The **Turn To** section of the slash command menu shows each format by the name in the first column.

| Format | What it shows | Markdown shortcut |
|---|---|---|
| **Heading 1** | A large section title | `# ` + space |
| **Heading 2** | A sub-section title | `## ` + space |
| **Text** | A plain paragraph | — |
| **Checkbox** | A task with a square checkbox | `[] ` + space |
| **Round checkbox** | A task with a round checkbox | — |
| **Heart checkbox** | A task with a heart checkbox | — |
| **Bullet** | An item in a list with no order | `- ` + space |
| **Triangle bullet** | A list item with a triangle bullet | — |
| **Square bullet** | A list item with a square bullet | — |
| **Numbered** | An item in a numbered list | `1. ` + space |
| **Lettered** | An item in a lettered list (a, b, c) | — |

The old format names, such as **Check 2** or **Bullet 3**, still find the format when you type them in the menu.

---

## Project Views

You can show the same content in **multiple project views**. When you change the view, your data does not change.

| View | Description | Best For |
|---|---|---|
| **List** | A vertical list with checkboxes and levels | Task management, checklists, notes |
| **Board** | Kanban columns for the stages of your work. Drag cards from one column to the next | Sales pipelines, sprints |
| **Table** | A grid of rows and columns that you can filter, sort, and group | Data management, CRM |
| **Calendar** | Tasks on a calendar grid, by date | Schedules, content calendars |
| **Gantt Chart** | A timeline with task durations, dependencies, and progress | Project plans, milestones |
| **Mind Map** | Connected nodes around a center topic | Brainstorms, concept maps |
| **Org Chart** | A tree of levels from top to bottom | Team structure, process flows |
| **Actionsheet** | A short, simple sheet of actions | Quick task management |
| **Docs** | One continuous rich-text document | Specs, long-form writing |

List, Board, Table, and Mind Map are tabs at the top of the project. The other views are under **More views**. Gantt Chart, Actionsheet, and Org Chart need a paid plan.

---

## Highlight & Style

### Text Styling

| Style | Keyboard shortcut (Mac / PC) | Markdown |
|---|---|---|
| **Bold** | Cmd + B / Ctrl + B | `**text**` |
| **Italic** | Cmd + I / Ctrl + I | `_text_` |
| **Underline** | Cmd + U / Ctrl + U | `__text__` |
| **Strikethrough** | — | `~~text~~` |
| **Inline code** | — | `` `code` `` |
| **Block quote** | — | `> quote` |
| **Code block** | — | ` ```code``` ` |

### Color Highlights

| Method | Steps |
|---|---|
| **Menu** | Select text → Click the three dots → Select **A** (highlight) → Select a color |
| **Keyboard** | Select text → Press Cmd + E (Mac) or Ctrl + E (PC) to go to the next color |
| **Slash command** | Type `/highlight`, or type a color name, for example `/red` or `/blue` |
| **Remove highlight** | Select the same color again, or press Cmd/Ctrl + E |

---

## Drag to Reorder

| Action | How |
|---|---|
| **Move a task** | Hold the six-dot drag icon to the left of the task → Drag the task to its new position |
| **Make a sub-task** | Drag a task below another task, and a bit to the right |
| **Move a sub-task up one level** | Drag the sub-task to the left |
| **Move a section** | Drag a top-level task. Its sub-tasks move with it |

---

## Multi-Select Formatting

You can format many tasks at the same time:

1. Select the tasks or lines of text with your mouse.
2. Apply a format with the toolbar, a slash command, or a keyboard shortcut.

Taskade applies the format to all the selected items.

---

## Slash Command Menu

Type `/` anywhere in a project to open the slash command menu. Type more letters to filter the list, then press **Enter** to run the command.

| Command | What it does |
|---|---|
| `/ask`, `/expand`, `/rewrite`, `/summarize` | AI commands for the text of the task |
| `/translate`, `/shorten`, `/fix spelling` | More AI commands for the text of the task |
| `/check` | Completes the task. **Check all** also completes its sub-tasks |
| `/turn to` | Changes the format of the task |
| `/add block` | Adds a new block in the format that you select |
| `/date` or `/now` | Writes today's date, or the date and time, as text |
| `/sort` | Sorts the sub-tasks, for example A to Z or by due date |

Each AI command uses AI credits. The **AI** section of the menu also has **Brainstorm**, **Outline**, **Generate Questions**, **Research**, and more.

---

## Add-Ons Menu

Add-ons add more data to a task:

| Add-On | Shortcut (after Cmd + /) | Slash command |
|---|---|---|
| **Due Date**: start and end dates, with times if you want them | D | `/due` |
| **Assign**: a team member, an AI agent, or an AI team | A | `/assign` |
| **Comment**: a discussion on the task | C | `/comment` |
| **Embed**: external content, for example YouTube or Figma | E | `/embed` |
| **Timer**: a countdown for a focus session | T | `/timer` |
| **Upload**: a file from Computer, Google Drive, Dropbox, Box, or OneDrive | — | `/upload` |
| **Label/Tag**: color tags to sort tasks into groups | — | — |
| **Custom Fields**: values such as text, number, date, or select | — | — |

The timer has presets of 15 minutes, 25 minutes, 30 minutes, 1 hour, and 2 hours. To set your own length, type it in the custom field. A number without a unit is minutes, and units such as `90s`, `1h30m`, or `1d2h` also work.

### Open the Add-Ons Menu

| Method | Steps |
|---|---|
| **Plus icon** | Click the **+** icon next to a task → Select an add-on |
| **Keyboard** | Press **Cmd + /** and then a letter (D, A, C, E, T) |
| **Slash command** | Type `/` and then the name of the add-on |

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
| Indent (make a sub-task) | Tab | Tab |
| Outdent (move up one level) | Shift + Tab | Shift + Tab |

---

## What's Next

| Guide | What you learn |
|---|---|
| [Markdown Support](./markdown.md) | All the Markdown syntax that Taskade reads |
| [Import](./import.md) | Import .md and PDF files as projects |
| [Version History](../genesis/version-history.md) | Restore an earlier version of a Taskade Genesis app |
| [Embed Taskade](./embed.md) | Embed projects on your website |

---

_Step-by-step guides on taskade.com/learn: [Editing & Formatting](https://www.taskade.com/learn/projects/editing-formatting), [Slash Commands](https://www.taskade.com/learn/projects/slash-commands)._
