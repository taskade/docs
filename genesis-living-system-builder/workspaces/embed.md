# Embed Taskade

---

## Table of Contents

- [Overview](#overview)
- [Embed a Project](#embed-a-project)
- [Embed Settings](#embed-settings)
- [Supported Embed Sources (In Taskade)](#supported-embed-sources-in-taskade)
- [Embed Genesis Apps](#embed-genesis-apps)
- [What's Next](#whats-next)

---

## Overview

You can embed entire Taskade projects on your website or blog and keep everyone on the same page. Any changes you make will be **instantly visible** to your audience. You can also embed external content inside Taskade projects.

> **Genesis connection:** Genesis apps can be embedded on any website using iframe. Published apps also support custom domains for white-label embedding. See [Publish and Clone Your Apps](../community-and-sharing/publish-and-clone.md).

---

## Embed a Project

### Step-by-Step Tutorial

| Step | Action |
|---|---|
| 1 | Open a project and switch to your desired project view |
| 2 | Click the **Share** button in the top-right corner |
| 3 | Select the **< > Embed** tab |
| 4 | Click **Copy** to copy the embed code |
| 5 | Paste the embed code into your website or blog HTML |
| 6 | _(Optional)_ Customize theme, dimensions, and footer visibility |

### Embed Code Example

```html
<iframe
  src="https://www.taskade.com/embed/YOUR_PROJECT_ID"
  width="100%"
  height="600"
  frameborder="0"
  style="border: none;"
></iframe>
```

---

## Embed Settings

| Setting | Options | Description |
|---|---|---|
| **Cover image style** | Banner, Background, None | Controls how the project cover displays |
| **Dimensions** | Custom width/height | Set iframe size (default: 80% width/height) |
| **Theme** | Light, Dark, Auto | Match your website's color scheme |
| **Editing access** | View only, Edit allowed | Control whether embedded viewers can edit |
| **Footer visibility** | Show, Hide | Toggle the Taskade footer bar |

---

## Supported Embed Sources (In Taskade)

You can embed external content inside Taskade projects using the Embed add-on:

| Platform | URL Pattern | Description |
|---|---|---|
| **Google Docs** | `docs.google.com/document/...` | Embed Google Documents |
| **Google Sheets** | `docs.google.com/spreadsheets/...` | Embed Google Spreadsheets |
| **Canva** | `design.canva.com/...` | Embed Canva designs |
| **Figma** | `figma.com/...` | Embed Figma designs and prototypes |
| **Loom** | `loom.com/share/...` | Embed Loom videos |
| **Vimeo** | `vimeo.com/...` | Embed Vimeo videos |
| **Wistia** | `wistia.com/...` | Embed Wistia videos |
| **YouTube** | `youtube.com/...` or `youtu.be/...` | Embed YouTube videos |
| **SoundCloud** | `soundcloud.com/...` | Embed SoundCloud audio tracks |
| **Spotify** | `open.spotify.com/embed/track/...` | Embed Spotify tracks |
| **Instagram** | `instagram.com/p/...` | Embed Instagram posts |
| **Typeform** | `typeform.com/...` | Embed Typeform forms |
| **Whimsical** | `whimsical.com/...` | Embed Whimsical boards |
| **InVision** | InVision embed URLs | Embed InVision prototypes |
| **PDF files** | Any `.pdf` URL | Embed PDF documents with viewer |
| **Markdown files** | Any `.md` URL | Embed Markdown with preview |
| **Any URL** | Any web URL | Embed as iframe with Open Graph metadata |

### How to Embed Content in a Project

| Method | Steps |
|---|---|
| **Add-on menu** | Click **+** next to a task → Select **Embed** → Paste URL |
| **Keyboard** | Press **Cmd + /** then **E** → Paste URL |
| **Slash command** | Type `/embed` → Paste URL |
| **Drag & drop** | Drag a file or link into the project editor |

---

## Embed Genesis Apps

Genesis apps can be embedded on any website:

| Method | How | Plan |
|---|---|---|
| **iframe embed** | Copy the embed code from the Publish settings | All plans |
| **Direct link** | Share the published app URL | All plans |
| **Custom domain** | Point your domain to the app (CNAME) | Business+ |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Editing & Formatting](./editing-formatting.md) | Format and style your project content |
| [Markdown Support](./markdown.md) | Use Markdown in embedded projects |
| [Taskade for Teams](./teams.md) | Share embedded projects with teams |
