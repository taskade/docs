# Debugging Genesis Apps

---

## Table of Contents

- [Overview](#overview)
- [Genesis Debugging Framework (GDF)](#genesis-debugging-framework-gdf)
  - [Layer 1: Failure Classification](#layer-1-failure-classification)
  - [Layer 2: Diagnostic Checklist](#layer-2-diagnostic-checklist)
  - [Layer 3: Root Cause Documentation](#layer-3-root-cause-documentation)
- [Genesis Prompting Protocol (GPP)](#genesis-prompting-protocol-gpp)
- [Putting It All Together](#putting-it-all-together)
- [What's Next](#whats-next)

---

## Overview

When building apps with Genesis, you may run into issues where components don't render, navigation breaks, or data doesn't display correctly. These are common growing pains of AI-generated codebases and they follow predictable patterns.

This guide introduces the **Genesis Debugging Framework (GDF)** — a structured approach to classifying, diagnosing, and documenting bugs in Genesis apps. It also covers the **Genesis Prompting Protocol (GPP)**, a set of prompting strategies that prevent the most common issues before they occur.

{% hint style="info" %}
**Community contribution** — This framework was developed by Stephane J Metral based on real-world experience building Genesis apps. It addresses the four most common failure classes: import graph failures, routing registry drift, UI-to-API schema mismatch, and namespace collisions.
{% endhint %}

---

## Genesis Debugging Framework (GDF)

The GDF gives you a systematic way to isolate and fix failures in AI-generated codebases. Use it every time you encounter a bug so that patterns accumulate and become easier to spot.

### Layer 1: Failure Classification

Every bug should be tagged with one of these categories:

| Class | Name | Description | Typical Symptom |
|---|---|---|---|
| Import Graph | Missing or incorrect imports | Component referenced but not imported | Runtime ReferenceError |
| Registry Drift | Router or component mismatch | Navigation mapped to wrong component | Wrong UI view |
| Schema Drift | UI vs API data mismatch | Enum values or data structures differ between frontend and backend | Filters return 0 results |
| Namespace Collision | Variable or function shadowing | Imported name overwritten locally | Unpredictable behavior |
| State Desync | React state mismatch | Stale props or derived state | UI not updating |
| Async Drift | Async state errors | Race conditions in async operations | Random or intermittent failures |
| Dependency Drift | Package mismatch | Library functions missing or changed | Compile or runtime errors |

{% hint style="success" %}
**Most Genesis bugs fall into the first four classes.** Start there when diagnosing an issue.
{% endhint %}

---

### Layer 2: Diagnostic Checklist

When a bug appears, work through this checklist in order.

#### 1. Import Integrity

Check that every component used in JSX has a corresponding import statement.

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

**Look for:**

- Missing imports entirely
- Incorrect import paths (wrong file or package)
- Renamed components that don't match the import

---

#### 2. Router Registry Integrity

Inspect your navigation mapping to make sure routes point to the right components.

```jsx
const views = {
  dashboard: DashboardView,
  forms: FormsView,
  contacts: ContactsView
}
```

**Verify:**

| Check | What to Look For |
|---|---|
| Component exists | The imported component is defined and exported |
| Import matches file | The import path points to the correct file |
| Sidebar key matches router key | The navigation menu key matches the key in the views object |

---

#### 3. Data Schema Alignment

Confirm that values used in the UI match the values returned by the API or backend.

**Example failure:**

| Layer | Values Used |
|---|---|
| UI filter | `manual`, `webform`, `csv` |
| API data | `src-inb`, `src-web`, `src-csv` |

The UI expects one set of values but the data uses another, so filters return zero results.

**Correct architecture:**

```
API enum -> mapping layer -> UI labels
```

Always create an explicit mapping between backend values and frontend display labels.

---

#### 4. Namespace Conflicts

Search your file for duplicated identifiers where an import gets shadowed by a local declaration.

**Example failure:**

```jsx
import { Zap } from "lucide-react"

// This local function shadows the imported Zap icon
function Zap() {
  return <div>Custom component</div>
}
```

**Fix:** Rename either the local function or the import to avoid the collision.

---

#### 5. Component Ownership

Confirm that each file exports one main component with a clear, unambiguous name.

**Recommended pattern:**

```jsx
export default function ContactsView() {
  // ...
}
```

Avoid multiple default exports or generic names that could conflict across files.

---

### Layer 3: Root Cause Documentation

After fixing a bug, document it using this structure. Over time, this builds a knowledge base of recurring patterns.

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
| Bug ID | Unique identifier for tracking |
| Class | Which failure class from Layer 1 |
| Location | File and component where the bug lives |
| Symptom | What the user sees when the bug triggers |
| Cause | The root technical cause |
| Fix | What you changed to resolve it |
| Prevention | How to catch this earlier next time |

---

## Genesis Prompting Protocol (GPP)

The GPP is a set of prompting strategies designed to prevent common issues before they happen. It addresses a key challenge: when you need to rebuild parts of a Genesis app in chunks, re-prompting can cause a "schism" that breaks previously working code.

### The Core Problem

When building complex apps with Genesis, you may need to iterate on individual sections. Each time you re-prompt to fix or extend a section, Eve may regenerate code that conflicts with what was already working — creating a loop of fixes that break other things.

### Prevention Strategies

| Strategy | How It Helps |
|---|---|
| **Build in logical order** | Start with data models and navigation, then add views one at a time. Don't jump between unrelated sections. |
| **Prompt incrementally** | Make small, focused requests instead of large rewrites. "Add a search bar to the contacts view" is better than "rebuild the contacts page." |
| **Reference existing code** | When prompting for changes, mention the components and patterns that already exist so Eve maintains consistency. |
| **Validate after each change** | Test the app after every prompt. Catching issues immediately prevents them from compounding. |
| **Use the diagnostic checklist** | After each generation cycle, run through the Layer 2 checklist above to catch the four most common failure classes. |

{% hint style="warning" %}
**Avoid large-scope re-prompts** on a partially built app. If something breaks, isolate the specific issue using the GDF and fix it with a targeted prompt rather than regenerating entire sections.
{% endhint %}

### Recommended Build Order

When rebuilding or extending a Genesis app in chunks, follow this sequence:

1. **Data layer** — Define your data models, enums, and API mappings first
2. **Navigation and routing** — Set up the router registry and sidebar
3. **Core views** — Build each view one at a time, testing after each
4. **Shared components** — Add reusable elements like modals and forms
5. **Integrations and automations** — Connect external tools last

---

## Putting It All Together

Here is the recommended workflow when you encounter a bug in a Genesis app:

1. **Classify** — Tag the bug using the Layer 1 failure classes
2. **Diagnose** — Run through the Layer 2 checklist to find the root cause
3. **Fix** — Apply a targeted fix with a focused prompt
4. **Document** — Record the bug using the Layer 3 template
5. **Prevent** — Apply GPP strategies to avoid similar issues in future builds

Over time, your documented bugs become a personal knowledge base that makes debugging faster and helps you write better prompts from the start.

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Prompt Guide](./prompt-guide.md) | 12 principles for writing effective Genesis prompts |
| [How Genesis Works](./how-genesis-works.md) | Understanding the architecture behind Genesis apps |
| [Version History](./version-history.md) | How to restore previous versions if something breaks |
| [Troubleshooting](../community-and-sharing/troubleshooting.md) | General troubleshooting guide for common issues |
