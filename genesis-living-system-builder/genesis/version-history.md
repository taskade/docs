# Genesis Version History

---

## Table of Contents

- [Overview](#overview)
- [What Is Tracked](#what-is-tracked)
- [View App Versions](#view-app-versions)
- [Inspect and Configure Your App](#inspect-and-configure-your-app)
- [Restore a Previous Version](#restore-a-previous-version)
- [Version History & Publishing](#version-history-and-publishing)
- [Best Practices](#best-practices)
- [What's Next](#whats-next)

---

## Overview

Taskade Genesis **automatically tracks every change** to your apps. Every modification — from content edits to styling updates — creates a new version (commit) you can view, compare, and restore at any time. This gives you a complete safety net for experimentation and iteration.

> **Experiment freely:** Try bold changes knowing you can always roll back. See [A Maker's Guide to AI Prompts — Experiment](./prompt-guide.md#id-12.-experiment).

---

## What Is Tracked

Every version captures the full state of your app:

| Category | What's Tracked |
|---|---|
| **Content** | Text, copy, labels, placeholder content |
| **UI / Layout** | Component arrangement, page structure, navigation |
| **Styling** | Colors, fonts, spacing, visual themes |
| **Features** | Functional additions, removals, and modifications |
| **Configuration** | Settings, permissions, access rules |
| **Integrations** | Automation connections and triggers |
| **Design** | Images, icons, branding elements |
| **Data schemas** | Database field structures and relationships |

> Each version is a complete snapshot — not just a diff. Restoring a version brings back the **entire app state** at that point.

---

## View App Versions

| Step | Action |
|---|---|
| 1 | Open your Genesis app |
| 2 | Go to the **Preview App** tab |
| 3 | Click the **History** button (clock icon) |
| 4 | Browse the chronological list of versions |
| 5 | Click any version to preview what the app looked like |

<!-- Screenshot: Version history panel with list of commits -->

### Version List Details

Each version entry shows:

| Field | Description |
|---|---|
| **Timestamp** | When the change was made |
| **Version ID** | Unique commit identifier |
| **Preview** | Visual preview of the app at that state |

---

## Inspect and Configure Your App

### Code View (Read-Only)

Genesis includes a **Code View** tab inside the app editor. This tab gives you a read-only look at the source code Genesis has generated for your app — useful for understanding what was built, debugging unexpected behavior, or sharing context with a developer. The Code View is inspectable only; edits are made through the Genesis prompt interface, not by modifying the source directly.

### Custom `<head>` HTML Injection

Published Genesis apps support injecting custom HTML into the `<head>` of every page. Access this in your app's **Settings → Advanced**. Common uses include:

- Adding analytics snippets (e.g., a tracking pixel or tag manager)
- Loading custom fonts via a `<link>` tag
- Including third-party scripts that must load early

{% hint style="warning" %}
Only add trusted, well-understood code here. Injected `<head>` markup runs on every page of your published app and affects all visitors.
{% endhint %}

---

## Restore a Previous Version

| Step | Action |
|---|---|
| 1 | Open the **History** panel |
| 2 | Browse and select the version you want to restore |
| 3 | Preview the version to confirm it's correct |
| 4 | Click **"Restore Version"** |
| 5 | Your app is immediately reverted to that state |

| Important Notes | |
|---|---|
| **Restoring creates a new version** | The restore itself becomes a new commit in your history |
| **Non-destructive** | The versions between current and restored are preserved — you can restore forward again |
| **Instant** | The restore is applied immediately to your live app (if Auto-publish is on) |
| **Full restore** | The entire app state is restored — UI, configuration, styling, everything |

---

## Version History & Publishing

How version history interacts with your publishing strategy:

| Publishing Strategy | Behavior |
|---|---|
| **Auto publish** | Every version is immediately live. Restoring a version instantly updates the published app. |
| **Manual publish** | Versions accumulate in draft. Restoring a version updates the draft. You choose when to publish. |

### Auto vs. Manual Publish

Genesis lets you choose how versions reach your live app. The setting lives in your app's **Settings → Publish Strategy**.

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
