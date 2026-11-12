---
description: >-
  Upload brand files, data, and reference docs as context so Taskade Genesis builds on-brand apps and enriches your Workspace DNA for future builds.
---

# Adding Genesis Context

---

## Overview

When you build an app with Taskade Genesis, you can **upload reference files** as context. Context tells the AI your requirements, your brand, and the design that you want. The app that you get then looks like your team made it.

> **Taskade adds each file that you upload to the Media tab.** The file becomes part of your Workspace DNA. Future app builds and AI agents can use it.

---

## What You Can Use as Context

Taskade Genesis reads many types of files. Each table that follows shows what to upload and how Taskade Genesis uses it.

### Brand & Design Files

| File Type | What to Upload | How Genesis Uses It |
|---|---|---|
| **Brand guidelines** (PDF) | Color codes, typography, logo rules, design principles | Matches your brand identity |
| **Logo files** (PNG, JPG) | Primary logos, variations, icons, brand marks | Puts your logo in the app with a consistent look |
| **Color palettes** | Hex codes, color combinations, visual hierarchy | Uses your colors in the full app |
| **Website screenshots** | Your current site design, layout patterns, UI elements | Copies your design language |
| **Mockups / wireframes** | App layouts, screen designs, navigation flows | Builds to your plan |

### Data & Structure Files

| File Type | What to Upload | How Genesis Uses It |
|---|---|---|
| **Existing forms** (PDF) | Contact forms, registration forms, surveys | Makes a digital copy of your form structure |
| **Data examples** | Table structures, field definitions, sample records | Makes databases with the same fields |
| **Workflow documents** | Process flows, SOPs, business rules | Builds automation logic and business rules |
| **Spreadsheets** (XLSX, CSV) | Customer data, inventory lists, schedules | Fills databases and makes the correct views |
| **Code snippets** | Validation rules, integration examples | Adds the logic that you need |

### Reference Materials

| File Type | What to Upload | How Genesis Uses It |
|---|---|---|
| **App screenshots** | UI ideas, feature examples, interaction patterns | Copies the design patterns that you like |
| **Other tools** | Screenshots of tools that you use today | Builds the same steps into your app |
| **Process documentation** | Standard procedures, user manuals, training materials | Makes apps that follow your processes |
| **Requirements docs** | Feature specs, acceptance criteria, use cases | Adds the features that you list |
| **API/Tech docs** | API specs, integration guides, config files | Connects to the systems that you have |

{% hint style="info" %}
Do you want to connect Taskade Genesis to Taskade with code? See the [Public API reference](../../apis-living-system-development/comprehensive-api-guide/README.md).
{% endhint %}

### Supported Upload Formats

| Category | Formats |
|---|---|
| **Documents** | PDF, DOCX, TXT, MD, PPTX, XLSX, CSV, EPUB |
| **Images** | PNG, JPG, GIF, SVG, WebP |
| **Web sources** | YouTube videos, blog URLs, tweets, Reddit posts, news articles |
| **Cloud storage** | Google Drive, Dropbox, Box, OneDrive |

{% hint style="info" %}
On the Free plan, you can upload images. Documents, spreadsheets, and other files that are not images need a paid plan. The largest file size that you can upload also increases with your plan. See [taskade.com/pricing](https://www.taskade.com/pricing).
{% endhint %}

---

## Provide App Context

You can add context in two ways. The way depends on your stage in the build.

### Initial Prompt (New App)

Attach context to your first prompt:

1. Open Taskade Genesis and type your first app prompt.
2. Drag the files into the prompt box, or click the **Attachment** button.
3. Select a source: **Upload Files** (device), **Add from Workspace** (files in your workspace), or **Add from Cloud** (cloud storage).
4. Submit the prompt. Taskade Genesis makes the app from your text and your files.

<!-- Screenshot: Initial prompt with attachment button and file upload options -->

**Example prompt with context:**

> "Build a customer portal for my consulting firm. Use the brand guidelines I've uploaded for colors and fonts. The wireframe shows the layout I want. The spreadsheet has our current client list."

### Follow-Up Prompts (Existing App)

After Taskade Genesis makes your app, add more context to improve it:

1. Open your app in **Preview** mode.
2. Drag the files into the chat box, or use the **Attachment** button.
3. Ask Taskade Genesis to update the app with the new context.

**Example follow-up prompts:**

| Context Added | Prompt |
|---|---|
| Brand PDF | "Update the contact form to match our brand guidelines. Use the colors and fonts specified in the uploaded PDF." |
| Competitor screenshot | "Make our dashboard layout more like this competitor screenshot, but keep our brand colors." |
| Data spreadsheet | "Import the customer data from this spreadsheet into the app's database." |
| Process document | "Update the booking workflow to match the steps in this SOP document." |
| Logo files | "Replace the placeholder logo with our uploaded logo files." |

<!-- Screenshot: Follow-up prompt with file attached in chat -->

### Files Your App's Users Send You

Context files teach Taskade Genesis about your business. Uploads from your users go the other way. For example, a client attaches a signed agreement to your intake form. A technician sends a photo of a paper work order.

These files arrive with the submission. They go to the same Media tab as your context files. A **Turn a file into text** step in an automation can then read the words, also from a scan or a phone photo. Each file that a person sends through a published app can be up to 10 MB.

---

## Context Best Practices

| Practice | Why | Example |
|---|---|---|
| **Upload brand files first** | They set the look for all other work | Brand PDF and logos before style prompts |
| **Include data samples** | Taskade Genesis makes more accurate databases | 5-10 sample records with all field types |
| **Show, do not only tell** | Screenshots and mockups are more exact than words | Upload a wireframe, do not describe the layout |
| **Add context in steps** | Too much context at one time makes the result less focused | Brand first, then data, then workflows |
| **Use clear file names** | You can name the file in a prompt | "brand-guidelines-2025.pdf", not "document1.pdf" |
| **Include edge cases** | The app then handles unusual cases | "Here's an example of a canceled order..." |

---

## How Context Powers Workspace DNA

Each file that you upload becomes part of the memory of your workspace:

| Context Added | Effect on Workspace DNA | Future Benefit |
|---|---|---|
| Brand guidelines | Future builds can use your brand files again with no new upload | The same brand in every app |
| Data samples | AI agents know your data structures | Better answers from agents |
| Process documents | Automations follow your business rules | More accurate workflows |
| Screenshots of other tools | Taskade Genesis knows the steps that you use today | Better feature suggestions |
| Customer data | Databases start full and with the correct structure | Faster launch of the app |

> **Workspace DNA hint:** Context uploads add to the memory of your workspace, and you can use them again in each future build. The [Intelligence Score](./how-genesis-works.md#workspace-intelligence-score) of an app counts its projects, agents, and automations. It does not count uploaded files.

---

## Next Steps

| Guide | What You Learn |
|---|---|
| [Image Generation](../ai-features/image-generation.md) | Make custom images for your apps |
| [Advanced Features](../space-apps-guide/advanced-features.md) | Use your brand context to change the look of an app |
| [Agent Knowledge & Memory](../ai-features/agent-knowledge.md) | Train AI agents on your uploaded files |
| [Projects & Databases](../workspaces/projects-databases.md) | How uploaded data becomes structured databases |

---

_Step-by-step guide on taskade.com/learn: [Adding Taskade Genesis Context](https://www.taskade.com/learn/genesis/app-context)._
