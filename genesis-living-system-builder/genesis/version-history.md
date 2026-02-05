# Genesis Version History

---

## Table of Contents

- [Overview](#overview)
- [What Is Tracked](#what-is-tracked)
- [View App Versions](#view-app-versions)
- [Restore a Previous Version](#restore-a-previous-version)
- [Version History & Publishing](#version-history--publishing)
- [Best Practices](#best-practices)
- [What's Next](#whats-next)

---

## Overview

Genesis **automatically tracks every change** to your apps. Every modification — from content edits to styling updates — creates a new version (commit) you can view, compare, and restore at any time. This gives you a complete safety net for experimentation and iteration.

> **Experiment freely:** Try bold changes knowing you can always roll back. See [A Maker's Guide to AI Prompts — Experiment](./prompt-guide.md#12-experiment).

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
