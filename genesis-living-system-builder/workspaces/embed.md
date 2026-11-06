---
description: >-
  Embed Taskade projects and Taskade Genesis apps on any site via iframe, set theme and size, and embed Google Docs, Figma, Loom, YouTube inside projects.
---

# Embed Taskade

---

## Overview

You can embed entire Taskade projects on your website or blog and keep everyone on the same page. Any changes you make will be **instantly visible** to your audience. You can also embed external content inside Taskade projects.

> **Genesis connection:** Taskade Genesis apps can be embedded on any website using iframe. Published apps also support custom domains on Pro and up. See [Publish and Clone Your Apps](../community-and-sharing/publish-and-clone.md).

---

## Embed a Project

### Step-by-Step Tutorial

1. Open a project and switch to your desired project view
2. Click the **Share** button in the top-right corner
3. Select **Invite to project**, then the **< > Embed** tab
4. Click **Copy embed code**
5. Paste the embed code into your website or blog HTML
6. _(Optional)_ Customize the view, theme, dimensions, and footer visibility before you copy

### Embed Code Example

```html
<iframe
  width="100%"
  height="400px"
  scrolling="yes"
  frameborder="no"
  src="https://www.taskade.com/embed/YOUR_PROJECT_ID?as=list&share=view&view=YOUR_SHARE_TOKEN&theme=light"
></iframe>
```

The `src` URL ends with the query string `?as=list&share=view&view=YOUR_SHARE_TOKEN&theme=light`: `as` sets the view, `view` carries the share token, and `theme` sets light or dark.

Copy the real code from the **Embed** tab. It carries the share token of the project. If you regenerate or disable the invite link, copy the embed code again.

---

## Embed Settings

| Setting | Options | Description |
|---|---|---|
| **Embed view** | Any project view | The view that visitors see first |
| **Cover Image** | Banner, Background, None | Controls how the project cover displays |
| **Dimensions** | Width (%), Height (px) | Set iframe size (default: 100% width, 400 px height) |
| **Theme** | Light, Dark | Match your website's color scheme |
| **Allow edit** | On, Off | Off gives a View Only embed. On gives a View & Edit embed |
| **Hide footer** | On, Off | Toggle the Taskade footer bar |
| **Hide views** | On, Off | Hide the view switcher in the embed |
| **Hide copy** | On, Off | Hide the copy option in the embed |

Cover Image, Allow edit, Hide footer, Hide views, and Hide copy need a workspace on a paid plan.

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

## Embed Taskade Genesis Apps

Taskade Genesis apps can be embedded on any website:

| Method | How | Plan |
|---|---|---|
| **iframe embed** | Copy the embed code from the Publish settings | All plans |
| **Direct link** | Share the published app URL | All plans |
| **Custom domain** | Point your domain to the app (CNAME) | Pro+ |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Editing & Formatting](./editing-formatting.md) | Format and style your project content |
| [Markdown Support](./markdown.md) | Use Markdown in embedded projects |
| [Taskade for Teams](./teams.md) | Share embedded projects with teams |

---

_Step-by-step guide on taskade.com/learn: [Embed Taskade](https://www.taskade.com/learn/projects/embed-taskade)._
