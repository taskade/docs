---
description: >-
  View, compare, and restore Taskade Genesis app versions, with auto vs manual publish controls and the Code tab.
---

# Genesis Version History

---

## Overview

Taskade Genesis **automatically saves versions** of your apps as you build. Content edits and styling updates create new versions (commits) you can view, compare, and restore. This gives you a safety net for experimentation and iteration. It is not a promise of unlimited retention, so export important milestones (see [GitHub Import & Export](./github-import-export.md)).

> **Experiment freely:** Try bold changes knowing you can always roll back. See [A Maker's Guide to AI Prompts — Experiment](./prompt-guide.md#id-12.-experiment).

---

## What Is Tracked

Every version captures the design and code of your app:

| Category | What's Tracked |
|---|---|
| **Content** | Text, copy, labels, placeholder content |
| **UI / Layout** | Component arrangement, page structure, navigation |
| **Styling** | Colors, fonts, spacing, visual themes |
| **Features** | Functional additions, removals, and modifications in the app code |
| **Design** | Images, icons, branding elements |

> Restoring a version brings back its **design and code**. Your data stays as it is: the projects, agents, and automations of the workspace are not rolled back.

---

## View App Versions

1. Open your Genesis app
2. Click the **Version history** button (clock icon) in the toolbar above the app preview. On a narrow screen, open the kebab menu (⋮) and choose **Version history**
3. Wait for the list of saved versions to open
4. Browse the chronological list of versions
5. Click any version to preview what the app looked like

<!-- Screenshot: Version history panel with list of commits -->

### Version List Details

Each version entry shows:

| Field | Description |
|---|---|
| **Version number** | The version's place in the sequence, with its number of edits |
| **Timestamp** | When the change was made |
| **Current** | Marks your newest working state |
| **Live** | Marks the version that visitors see |
| **Preview** | Visual preview of the app at that state |

---

## Inspect and Configure Your App

### Code Tab

Open **App settings → Developer → Code** to see the source code Genesis has generated for your app — useful for understanding what was built, debugging unexpected behavior, or sharing context with a developer. The full Code tab, with **Export to GitHub** and **Download .tsk**, needs **Pro or above**. On lower plans it shows a locked preview. Workspace members who can edit the app can also edit a file and save it. A save updates the preview, or publishes the app at once if it uses Auto Publishing.

### Custom `<head>` HTML Injection

Published Genesis apps support injecting custom HTML into the `<head>` of every page. Access this in the **Custom code** section (**Head HTML** field) of your app's branding settings. It needs a **Business plan or higher**. Common uses include:

- Adding analytics snippets (e.g., a tracking pixel or tag manager)
- Loading custom fonts via a `<link>` tag
- Including third-party scripts that must load early

{% hint style="warning" %}
Only add trusted, well-understood code here. Injected `<head>` markup runs on every page of your published app and affects all visitors.
{% endhint %}

---

## Restore a Previous Version

1. Open the **Version history** panel
2. Browse and select the version you want to restore
3. Preview the version to confirm it's correct
4. Click the restore button. It shows the version number, for example **Restore Version 3**
5. Follow the message shown after the restore

| Important Notes | |
|---|---|
| **Restoring creates a new version** | The restore itself becomes a new commit in your history |
| **Non-destructive** | The versions between current and restored are preserved — you can restore forward again |
| **Live update** | With Auto Publishing, the restored version goes live when the update finishes |
| **Design and code** | The app's design and code are restored. Your data stays as it is |
| **Permission** | Restoring a version needs the same workspace permission as publishing the app |

---

## Version History & Publishing

How version history interacts with your publishing strategy:

| Publishing Strategy | Behavior |
|---|---|
| **Auto Publishing** | Every version is immediately live. Restoring a version updates the published app. |
| **Manual Publishing** | Versions accumulate in draft. Restoring a version updates the draft. You choose when to publish with **Publish restored version**. |

### Auto vs. Manual Publish

Genesis lets you choose how versions reach your live app. Click **Publish**, then the **Advanced settings** icon, and pick **Auto Publishing** or **Manual Publishing** under **Publishing Mode**.

**Auto publish** (the default) pushes every save and every restored version directly to your published URL. This is convenient during early development but means any mistake — including a misfire restore — is immediately visible to users.

**Manual publish** decouples iteration from release. Changes (including restored versions) stay in draft until you explicitly click **Publish**. For an app that already has live users, manual mode is the safer choice: you can restore, preview, and validate a version internally before anyone else sees it. A restore under manual publish updates the draft state only — the published app continues running whatever version was last deliberately published.

{% hint style="info" %}
Prefer **Manual** publish for any Genesis app in active use. It gives you a review gate between your Version History and your users, so a restore or experimental prompt never reaches production unintentionally.
{% endhint %}

### Publish Status Indicators

| Status | Meaning |
|---|---|
| **Published (Latest)** | The live app matches the most recent version |
| **Published (Older)** | The live app is running an older version — newer uncommitted changes exist |
| **Unpublished** | The app has not been published yet |

> **Tip:** If you're using Manual publishing and want to test a restoration before it goes live, restore the version first, preview it, then publish when satisfied.

---

## Best Practices

| Practice | Why |
|---|---|
| **Make incremental changes** | Smaller changes = easier to identify which version to restore |
| **Test before major changes** | Preview your current version before making significant modifications |
| **Use Manual publish for production** | Keeps your live app stable while you experiment |
| **Restore before re-building** | If something breaks, restore instead of trying to fix — it's faster |
| **Note your milestones** | Remember which versions represent stable, working states |
| **Experiment boldly** | Version history is your safety net — try radical redesigns knowing you can always go back |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [App Analytics](./app-analytics.md) | Track visitor data on your published app |
| [Publish and Clone Your Apps](../community-and-sharing/publish-and-clone.md) | Control how and when your app goes live |
| [A Maker's Guide to AI Prompts](./prompt-guide.md) | Iterate confidently with proven prompt patterns |

---

_Step-by-step guide on taskade.com/learn: [Version History & Restore](https://www.taskade.com/learn/genesis/version-history)._
