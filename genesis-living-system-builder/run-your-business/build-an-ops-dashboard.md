---
description: >-
  Build an internal ops dashboard, CRM, or pipeline your team logs into — describe it to Taskade Genesis, connect live workspace data, and add logins.
keywords: ops dashboard, internal tool, CRM, pipeline, no-code
---

# Build an internal ops dashboard your team runs on

You do not need a developer to give your team one place to run the day. Describe the board, pipeline, or tracker that you want. Taskade Genesis builds it on top of the live data in your workspace. Your team signs in with their own app accounts and sees the same current data as you. Each morning, they get a summary in Slack or by email. Nobody keeps a separate spreadsheet.

This guide is the **internal** version of a client portal. The people who sign in are your own crew, dispatchers, project managers, or coordinators. They are not your customers.

{% stepper %}
{% step %}
### Describe your board or pipeline

Open Taskade Genesis. In plain English, tell it what your team must see and do each day. Name the stages, the fields that you track, and the views that you want. Taskade Genesis turns that description into a working app: the screens, the database behind them, and the structure.

{% code overflow="wrap" %}
```
I run field operations for a construction company and need my project
managers to track every active job from bid to close-out. Show jobs as a
board with columns for Bid, Scheduled, In Progress, Inspection, and Closed.
Each job has a site address, client name, assigned crew, start date,
target completion, and current status. Let managers drag jobs between
columns and add notes and photos. I want a dashboard view that shows how
many jobs sit in each stage so I can see where we're stuck at a glance.
```
{% endcode %}

Start with one workflow that you run today on a whiteboard or in a spreadsheet. Later, you can ask for new words, new fields, or new views. For the full loop from description to app, see [Getting Started with Taskade Genesis](../genesis/getting-started.md).
{% endstep %}

{% step %}
### Connect live workspace data

The board that Taskade Genesis builds is not a static mockup. A real project database holds the data, and it is your **system of record**. Each job, lead, or shipment is a live record. Your team reads and updates it in real time. The same data goes to your dashboards, agents, and automations.

As a result, you have no separate spreadsheet to keep in sync. When a manager moves a job to "Inspection", the dashboard counts change at once for everyone. To learn how projects work as live databases, read [Projects & Databases](../workspaces/projects-databases.md). That page explains fields, views, relationships, and permissions.
{% endstep %}

{% step %}
### Let your team in with their own app accounts

Only your team must get in to an internal tool:

1. Add sign-in to the app.
2. Set **Who can sign up** to **Invite only**.
3. Add each teammate by email on the **App Users** tab.

Taskade workspace credentials do not open an app account. Each teammate sets a password for the app.

Workspace roles, from Owner to Viewer, control who can edit the app and its projects inside Taskade. They do not apply to the people who sign in to the published app. In the app, give each teammate the **Admin** or **Member** role. Then ask Taskade Genesis to show each role the correct screens. See [GenesisAuth](../community-and-sharing/genesis-auth.md) for the App Users tab and access control.
{% endstep %}

{% step %}
### Wire a daily digest

Give your team the news before they open the app. Add a scheduled automation that writes a short summary each morning: open jobs, late items, and what moved yesterday. The automation sends the summary to a Slack channel or by email. Slack is a premium integration, so it needs a paid plan.

Describe the digest as you described the board. Tell Taskade Genesis what to include and when to send it. The automation reads your live project data, so the digest is always current.

To bring in numbers from outside Taskade, add an action such as **Send HTTP Request** or **Read a web page** to a scheduled automation. Then write the result to a row of the project. See [Automations](../automation/README.md) to build the scheduled automation.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
**Internal vs. external — pick the correct access model.**

**Internal (this guide):** Your team works in the workspace. They sign in to the published app as **App Users** that you add yourself (**Invite only**). Use this model for ops dashboards, CRMs, and pipelines that your own crew uses.

**External:** Clients and customers sign in as **App Users**. These accounts belong to the app, and they are not members of your workspace. To show each client only their own rows, turn on **Private entries**, pick the owner field, and test with a second account. Use that model for a portal that faces your clients. See [Build a client portal](./build-a-client-portal.md).

Both models use the same Taskade Genesis app and the same sign-in. Choose who can sign up and what each person sees.
{% endhint %}

## Next steps

* [Add login and roles](./add-login-and-roles.md) — control who can view and who can edit your dashboard.
* [Go-live checklist](./go-live-checklist.md) — what to examine before your team starts to use it each day.
* [Build a client portal](./build-a-client-portal.md) — the external version, for customers and not for your team.

---

_Step-by-step guides on taskade.com/learn: [Build an Internal Tool](https://www.taskade.com/learn/genesis/build-internal-tool), [Build an AI Dashboard](https://www.taskade.com/learn/genesis/build-ai-dashboard)._
