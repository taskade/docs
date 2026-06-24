---
description: >-
  Build an internal ops dashboard, CRM, or pipeline your team logs into — describe it to Taskade Genesis, connect live workspace data, and add logins.
keywords: ops dashboard, internal tool, CRM, pipeline, no-code
---

# Build an internal ops dashboard your team runs on

You don't need a developer to give your team one place to run the day. Describe the board, pipeline, or tracker you wish you had, and Taskade Genesis builds it on top of your live workspace data. Your team logs in with the Taskade identity they already use, sees the same up-to-date picture you do, and gets a daily summary in Slack or email — without anyone touching a spreadsheet on the side.

This is the **internal** counterpart to a client portal. Here the people logging in are your own crew, dispatchers, project managers, or coordinators — not your customers.

{% stepper %}
{% step %}
### Describe your board or pipeline

Open Taskade Genesis and tell it, in plain English, what your team needs to see and do every day. Name the stages, the fields you track, and the views you want. Taskade Genesis turns that one description into a working app — the UI, the database behind it, and the structure to keep it organized.

```
I run field operations for a construction company and need my project
managers to track every active job from bid to close-out. Show jobs as a
board with columns for Bid, Scheduled, In Progress, Inspection, and Closed.
Each job has a site address, client name, assigned crew, start date,
target completion, and current status. Let managers drag jobs between
columns and add notes and photos. I want a dashboard view that shows how
many jobs sit in each stage so I can see where we're stuck at a glance.
```

Start with one workflow you already run on whiteboards or spreadsheets. You can refine wording, add fields, or change views later just by asking. For the full describe-and-build loop, see [Getting Started with Taskade Genesis](../genesis/getting-started.md).
{% endstep %}

{% step %}
### Connect live workspace data

The board Taskade Genesis builds isn't a static mockup — it's backed by a real project database that acts as your **system of record**. Every job, lead, or shipment is a live record your team reads and updates in real time, and the same data feeds your dashboards, agents, and automations.

That means there's no separate spreadsheet to reconcile. When a manager moves a job to "Inspection," the dashboard counts update instantly for everyone. To understand how projects work as live databases — fields, views, relationships, and permissions — see [Projects & Databases](../workspaces/projects-databases.md).
{% endstep %}

{% step %}
### Let your team in with their existing Taskade identity

Because this is an internal tool, your team should sign in with the identity they already have. **Workspace members** use Workspace Single Sign-On — their existing Taskade credentials get them into the app with no second account to manage and no separate user directory to maintain.

This is the key distinction for an internal dashboard: you invite people to the **workspace**, and they reach the app through the identity they already use every day. Set who can view versus edit, and you control access from one place. See [GenesisAuth](../community-and-sharing/genesis-auth.md) for Workspace SSO, the App Users tab, and access control.
{% endstep %}

{% step %}
### Wire a daily digest

Give your team a heads-up without anyone having to open the app first thing. Add a scheduled automation that builds a short summary — open jobs, overdue items, what moved yesterday — and sends it to a Slack channel or by email every morning.

Describe it the same way you described the board: tell Taskade Genesis what to include and when to send it. The automation reads straight from your live project data, so the digest is always current. See [Automations](../automation/README.md) to build the scheduled summary.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
**Internal vs. external — pick the right access model.**

**Internal (this guide):** your team logs in with their **workspace identity** (Workspace SSO). Use this for ops dashboards, CRMs, and pipelines your own crew runs on.

**External:** clients and customers sign in as **App Users** — separate accounts scoped to the app, not members of your workspace. Use that model when you're building a client-facing portal. See [Build a client portal](./build-a-client-portal.md).

Same Taskade Genesis app, two different doors. Choose based on who's logging in.
{% endhint %}

## Next steps

* [Add login and roles](./add-login-and-roles.md) — control who can view versus edit your dashboard.
* [Go-live checklist](./go-live-checklist.md) — what to check before your team starts relying on it.
* [Build a client portal](./build-a-client-portal.md) — the external counterpart, for customers instead of your team.
