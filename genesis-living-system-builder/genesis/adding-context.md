---
description: >-
  Upload brand files, data, and reference docs as context so Taskade Genesis builds on-brand apps and enriches your Workspace DNA for future builds.
---

# Adding Genesis Context

---

## Overview

When you build apps with Taskade Genesis, you can **upload reference files** to provide context and guidance. The additional context helps AI understand your requirements, match your brand, and follow specific design patterns — producing apps that feel like they were custom-built by your team.

> **Any files you upload are automatically added to the Media tab** and become part of your Workspace DNA, enriching all future app builds and AI agent responses.

---

## What You Can Use as Context

Taskade Genesis works with a wide range of file types to understand your requirements:

### Brand & Design Files

| File Type | What to Upload | How Genesis Uses It |
|---|---|---|
| **Brand guidelines** (PDF) | Color codes, typography, logo usage, design principles | Matches your exact brand identity |
| **Logo files** (PNG, JPG) | Primary logos, variations, icons, brand marks | Places logos and creates consistent visual identity |
| **Color palettes** | Hex codes, color combinations, visual hierarchy | Applies your exact color scheme throughout the app |
| **Website screenshots** | Current site design, layout patterns, UI elements | Replicates your existing design language |
| **Mockups / wireframes** | App layouts, user interface designs, navigation flows | Builds to your exact specifications |

### Data & Structure Files

| File Type | What to Upload | How Genesis Uses It |
|---|---|---|
| **Existing forms** (PDF) | Contact forms, registration forms, surveys | Recreates your form structure digitally |
| **Data examples** | Table structures, field definitions, sample records | Creates matching database schemas |
| **Workflow documents** | Process flows, SOPs, business rules | Builds automation logic and business rules |
| **Spreadsheets** (XLSX, CSV) | Customer data, inventory lists, schedules | Pre-populates databases and creates appropriate views |
| **Code snippets** | Validation rules, integration examples | Implements specific logic requirements |

### Reference Materials

| File Type | What to Upload | How Genesis Uses It |
|---|---|---|
| **App screenshots** | UI inspiration, feature examples, interaction patterns | Replicates design patterns you like |
| **Competitor tools** | Screenshots of competitor apps | Builds competitive alternatives |
| **Process documentation** | Standard procedures, user manuals, training materials | Creates apps that follow your processes |
| **Requirements docs** | Feature specs, acceptance criteria, use cases | Implements exact feature requirements |
| **API/Tech docs** | API specs, integration guides, config files | Connects to your existing systems |

{% hint style="info" %}
Connecting Genesis to Taskade programmatically? See the [Public API reference](../../apis-living-system-development/comprehensive-api-guide/README.md).
{% endhint %}

### Supported Upload Formats

| Category | Formats |
|---|---|
| **Documents** | PDF, DOCX, TXT, MD, PPTX, XLSX, CSV, EPUB |
| **Images** | PNG, JPG, GIF, SVG, WebP |
| **Web sources** | YouTube videos, blog URLs, tweets, Reddit posts, news articles |
| **Cloud storage** | Google Drive, Dropbox, Box, OneDrive |

{% hint style="info" %}
On the Free plan you can upload images. Documents, spreadsheets, and other non-image files need a paid plan, and the largest file size you can upload also grows with your plan. See [taskade.com/pricing](https://www.taskade.com/pricing).
{% endhint %}

---

## Provide App Context

There are two ways to provide context depending on where you are in the building process.

### Initial Prompt (New App)

When first creating an app, attach context alongside your prompt:

1. Open Taskade Genesis and type your initial app prompt
2. Add files: **Drag & drop** into the prompt box, or click the **Attachment** button
3. Choose source: **Upload Files** (device), **Add from Workspace** (existing files), or **Add from Cloud** (cloud storage)
4. Submit the prompt — Genesis creates the app using your text + uploaded context

<!-- Screenshot: Initial prompt with attachment button and file upload options -->

**Example prompt with context:**

> "Build a customer portal for my consulting firm. Use the brand guidelines I've uploaded for colors and fonts. The wireframe shows the layout I want. The spreadsheet has our current client list."

### Follow-Up Prompts (Existing App)

After Genesis creates your app, upload additional context to refine it:

1. Open your Genesis app in **Preview** mode
2. Add files: **Drag & drop** into the chat box, or use the **Attachment** button
3. Ask Genesis to update the app using the new context

**Example follow-up prompts:**

| Context Added | Prompt |
|---|---|
| Brand PDF | "Update the contact form to match our brand guidelines. Use the colors and fonts specified in the uploaded PDF." |
| Competitor screenshot | "Make our dashboard layout more like this competitor screenshot, but keep our brand colors." |
| Data spreadsheet | "Import the customer data from this spreadsheet into the app's database." |
| Process document | "Update the booking workflow to match the steps in this SOP document." |
| Logo files | "Replace the placeholder logo with our uploaded logo files." |

<!-- Screenshot: Follow-up prompt with file attached in chat -->

---

## Context Best Practices

| Practice | Why | Example |
|---|---|---|
| **Upload brand files first** | Sets the visual foundation for everything | Brand PDF + logos before any styling prompts |
| **Include data samples** | Helps Genesis create accurate database schemas | 5-10 sample records with all field types |
| **Show, don't just tell** | Screenshots and mockups are more precise than words | Upload a wireframe instead of describing layout |
| **Add incrementally** | Too much context at once can dilute focus | Brand first, then data, then workflows |
| **Use specific file names** | Helps you reference files in prompts | "brand-guidelines-2025.pdf" not "document1.pdf" |
| **Include edge cases** | Prevents gaps in logic | "Here's an example of a canceled order..." |

---

## How Context Powers Workspace DNA

Every file you upload becomes part of your workspace's living memory:

| Context Added | DNA Impact | Future Benefit |
|---|---|---|
| Brand guidelines | Future builds can reuse your brand files without a new upload | Consistent brand across every app |
| Data samples | AI agents understand your data structures | Smarter agent responses and queries |
| Process documents | Automations follow your business rules | More accurate workflow generation |
| Competitor screenshots | Genesis understands your market position | Better feature recommendations |
| Customer data | Databases pre-populated and properly structured | Faster app deployment |

> **Workspace DNA hint:** Context uploads increase the richness of your workspace memory, and you can reuse them in every future build. An app's [Intelligence Score](./how-genesis-works.md#workspace-intelligence-score) counts its projects, agents, and automations, not its uploaded files.

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Image Generation](../ai-features/image-generation.md) | Generate custom images for your apps |
| [Advanced Features](../space-apps-guide/advanced-features.md) | Use your brand context to customize app appearance |
| [Agent Knowledge & Memory](../ai-features/agent-knowledge.md) | Train AI agents on your uploaded files |
| [Projects & Databases](../workspaces/projects-databases.md) | How uploaded data becomes structured databases |

---

_Step-by-step guide on taskade.com/learn: [Adding Taskade Genesis Context](https://www.taskade.com/learn/genesis/app-context)._
