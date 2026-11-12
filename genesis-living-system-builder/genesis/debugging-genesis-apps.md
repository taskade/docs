---
description: >-
  Debug Taskade Genesis apps: classify failures, diagnose import, routing, schema, and namespace bugs, and prevent them with better prompts.
---

# Debugging Genesis Apps

---

## Overview

Sometimes a Taskade Genesis app has a bug. A component does not show, the navigation goes to the wrong page, or data does not show. These bugs are common in code that AI writes, and they follow known patterns.

This guide gives you two tools:

* The **Genesis Debugging Framework (GDF)**. It helps you sort, find, and record bugs in an app.
* The **Genesis Prompting Protocol (GPP)**. It gives prompt rules that stop the most common bugs before they start.

{% hint style="info" %}
**From real-world experience** — We made this framework from real Taskade Genesis builds. It covers the four most common types of failure: import graph failures, routing registry drift, UI-to-API schema mismatch, and namespace collisions.
{% endhint %}

---

## Let Taskade EVE Fix It First

Use the recovery controls on the error card before you debug by hand:

1. Click **Show error details** to see what failed.
2. If the error is a connection, timeout, or other temporary failure, click **Try again**.
3. If the preview shows an app error, click **Fix with AI**. Taskade EVE then tries a targeted repair.
4. Test the same action again. A repair can need a second attempt.

If the error continues, copy its Error ID for support. A failed Taskade EVE turn stays in the chat with the same Error ID after you reload the page.

To go back to a working version, open **Version history**. The **Live** badge shows the version that visitors see now. Click **Restore Version** on a version that works. See [Version History](./version-history.md).

Use the framework that follows to find the root cause yourself.

---

## Genesis Debugging Framework (GDF)

The GDF gives you a fixed method to find and fix failures in code that AI writes. Use it for each bug. Over time, you will see the patterns faster.

### Layer 1: Failure Classification

Give each bug one of these types:

* **Import Graph** (missing or incorrect imports): The code uses a component but does not import it. Symptom: a runtime ReferenceError.
* **Registry Drift** (router or component mismatch): The navigation opens the wrong component. Symptom: the wrong UI view.
* **Schema Drift** (UI vs API data mismatch): The frontend and the backend use different enum values or data structures. Symptom: filters return 0 results.
* **Namespace Collision** (variable or function shadowing): A local name replaces an imported name. Symptom: behavior that you cannot predict.
* **State Desync** (React state mismatch): Props or derived state are old. Symptom: the UI does not update.
* **Async Drift** (async state errors): Two async operations finish in the wrong order (a race condition). Symptom: random failures.
* **Dependency Drift** (package mismatch): A library function is missing or changed. Symptom: compile or runtime errors.

{% hint style="success" %}
**Most Genesis bugs are of the first four types.** When you look for the cause of a bug, start with these four types.
{% endhint %}

---

### Layer 2: Diagnostic Checklist

If a bug shows, do these checks in this order.

#### 1. Import Integrity

Make sure that each component in the JSX has an import statement.

**Bad:**

```jsx
// No import — will crash at runtime
<Loader2 className="animate-spin" />
```

**Correct:**

```jsx
import { Loader2 } from "lucide-react"

<Loader2 className="animate-spin" />
```

**Look for these errors:**

- A missing import
- An incorrect import path (the wrong file or package)
- A renamed component that does not match its import

---

#### 2. Router Registry Integrity

Look at your navigation map. Make sure that each route opens the correct component.

```jsx
const views = {
  dashboard: DashboardView,
  forms: FormsView,
  contacts: ContactsView
}
```

**Make sure of these points:**

| Check | What to Look For |
|---|---|
| Component exists | The code defines and exports the imported component |
| Import matches file | The import path points to the correct file |
| Sidebar key matches router key | The navigation menu key matches the key in the views object |

---

#### 3. Data Schema Alignment

Make sure that the values in the UI match the values that the API or backend returns.

**Example failure:**

| Layer | Values Used |
|---|---|
| UI filter | `manual`, `webform`, `csv` |
| API data | `src-inb`, `src-web`, `src-csv` |

The UI expects one set of values, but the data uses a different set. As a result, the filters return zero results.

**Correct architecture:**

```
API enum -> mapping layer -> UI labels
```

Always make an explicit map from the backend values to the labels in the frontend.

---

#### 4. Namespace Conflicts

Look in your file for a name that has two declarations, where a local declaration hides an import.

**Example failure:**

```jsx
import { Zap } from "lucide-react"

// This local function shadows the imported Zap icon
function Zap() {
  return <div>Custom component</div>
}
```

**Fix:** Rename the local function or the import. Then the two names do not collide.

---

#### 5. Component Ownership

Make sure that each file exports one main component with a clear name.

**Recommended pattern:**

```jsx
export default function ContactsView() {
  // ...
}
```

Do not use more than one default export in a file. Do not use generic names that can conflict with names in other files.

---

### Layer 3: Root Cause Documentation

After you fix a bug, record it with this structure. Over time, the records become a knowledge base of the bugs that occur again.

```
Bug ID:      GDF-001
Class:       Import Graph Failure
Location:    segments-view.tsx
Symptom:     Runtime crash when opening CreateSegmentModal
Cause:       Loader2 icon used in JSX but not imported
Fix:         Added import { Loader2 } from "lucide-react"
Prevention:  Run import validation checklist before merge
```

| Field | Purpose |
|---|---|
| Bug ID | A unique ID to track the bug |
| Class | The failure type from Layer 1 |
| Location | The file and component that hold the bug |
| Symptom | What the user sees when the bug occurs |
| Cause | The technical root cause |
| Fix | What you changed to correct the bug |
| Prevention | How to find this bug earlier next time |

---

## Genesis Prompting Protocol (GPP)

The GPP is a set of prompt rules that stop common bugs before they start. It solves one main problem. If you build parts of an app again in pieces, a new prompt can break code that worked before.

### The Core Problem

In a large app, you often fix or extend one section at a time. Each new prompt can make Taskade EVE write new code that conflicts with code that worked. Then each fix breaks a different part of the app.

### Prevention Strategies

| Strategy | How It Helps |
|---|---|
| **Build in logical order** | Start with the data models and the navigation. Then add views one at a time. Do not jump between sections that are not related. |
| **Prompt incrementally** | Ask for small changes, not large rewrites. "Add a search bar to the contacts view" is better than "rebuild the contacts page." |
| **Reference existing code** | Name the components and patterns that exist in your prompt. Then Taskade EVE keeps the code consistent. |
| **Validate after each change** | Test the app after each prompt. A bug that you find at once does not grow into more bugs. |
| **Use the diagnostic checklist** | After each build, do the Layer 2 checklist. It finds the four most common failure types. |

{% hint style="warning" %}
**Do not send a large re-prompt to an app that is partly built.** If a part breaks, find the bug with the GDF. Then fix it with a targeted prompt. Do not build full sections again.
{% endhint %}

### Recommended Build Order

If you build or extend an app in pieces, use this order:

1. **Data layer** — Define your data models, enums, and API mappings first.
2. **Navigation and routing** — Make the router registry and the sidebar.
3. **Core views** — Build each view one at a time, and test after each view.
4. **Shared components** — Add the parts that you use again, such as modals and forms.
5. **Integrations and automations** — Connect outside tools last.

---

## Putting It All Together

If you find a bug in an app, do these steps:

1. **Classify** — Give the bug a type from Layer 1.
2. **Diagnose** — Do the Layer 2 checklist to find the root cause.
3. **Fix** — Send a targeted fix in a short prompt.
4. **Document** — Record the bug with the Layer 3 template.
5. **Prevent** — Use the GPP rules in your next builds.

Over time, your bug records become your own knowledge base. With them, you debug faster and write better prompts from the start.

---

## Next Steps

| Guide | What You Learn |
|---|---|
| [Prompt Guide](./prompt-guide.md) | 12 principles for effective Genesis prompts |
| [How Genesis Works](./how-genesis-works.md) | The architecture of a Taskade Genesis app |
| [Version History](./version-history.md) | How to restore an earlier version after a change breaks the app |
| [Troubleshooting](../community-and-sharing/troubleshooting.md) | Fixes for common problems |

---

_Step-by-step guides on taskade.com/learn: [AI Error Recovery for Apps](https://www.taskade.com/learn/genesis/error-fixing), [Troubleshooting Your App](https://www.taskade.com/learn/genesis/troubleshooting)._
