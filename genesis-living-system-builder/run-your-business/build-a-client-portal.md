---
description: >-
  Build a client portal or member portal where each client logs in and sees only
  their own info — no code. Keywords: client portal, member portal, login, no-code.
---

# Build a client or member portal in 10 minutes

**You describe the portal you want. Taskade Genesis builds it. Each client logs in and sees only their own record — their projects, their files, their status — and nothing belonging to anyone else.**

No code. No separate login service to wire up. No spreadsheets to share by hand. By the end of this guide you'll have a working, branded portal at your own web address that you can hand to your first client.

***

{% hint style="info" %}
**This works for any business.** A "client" can be whatever you serve — swap the examples to fit:

* **Consulting** — each client sees their project status, deliverables, and invoices.
* **Clinic / practice** — each patient sees their appointments, intake forms, and documents.
* **Course / membership** — each member sees their lessons, progress, and resources.
* **Agency** — each account sees their campaigns, assets, and reports.
{% endhint %}

***

{% stepper %}
{% step %}
### Describe the portal

Open Taskade Genesis and describe what you want in plain English — who logs in, what they see, and what stays private. Taskade Genesis turns that description into a working app with a database and screens already wired together.

Start with a prompt like this and edit the bracketed parts for your business:

```
Build a client portal for my consulting business. Each client signs in with
their own account and sees only their own dashboard: their active projects,
the documents I've shared with them, an invoice list, and a status update for
each project. Clients can never see other clients' information. I sign in as
the owner and can see and manage every client from one admin view.
```

The more specific you are about *what each client sees*, the better the first build. New to Taskade Genesis? Walk through [Getting Started](../genesis/getting-started.md) first.
{% endstep %}

{% step %}
### Give each client their own login

A portal needs real sign-in so the right person sees the right thing. When your prompt mentions per-client accounts, Taskade Genesis adds a secure login automatically — no auth provider to set up.

You manage everyone from the **App Users** tab: invite clients by email, suspend access when an engagement ends, and remove accounts you no longer need. See [GenesisAuth — add login & roles](../community-and-sharing/genesis-auth.md) for the full picture.

{% hint style="success" %}
If your first build didn't add sign-in, just tell Taskade Genesis *"add sign-in so each client has their own account"* while editing the app.
{% endhint %}
{% endstep %}

{% step %}
### Show each client only their record

This is what makes it a *portal* instead of a shared page: every client sees only their own data. Conceptually, each record in your portal is tied to the client it belongs to, and the login decides which records that person can open. Client A signs in and sees Client A's projects; Client B never sees them.

You don't configure this by hand — you describe it. Phrases like *"each client sees only their own projects and documents"* tell Taskade Genesis to scope the data per user. To shape what's stored and shown, see how [Projects & Databases](../workspaces/projects-databases.md) hold your records, and how [GenesisAuth](../community-and-sharing/genesis-auth.md) ties each record to the signed-in client.

{% hint style="warning" %}
Always test isolation before going live: sign in as a test client and confirm you can't see anyone else's records.
{% endhint %}
{% endstep %}

{% step %}
### Put it on your domain

A portal at `portal.yourbrand.com` feels like software you built, not a generic link. Once your domain is connected, clients sign in and work entirely under your brand — they never see Taskade in the URL.

Follow [Custom Domains & Branding](../space-apps-guide/custom-domains.md) to connect a subdomain like `portal.yourbrand.com`, add your logo and colors, and turn on automatic HTTPS.
{% endstep %}

{% step %}
### Invite your first client

You're ready to go live. Open the **App Users** tab and invite your first client by email — they'll get a link, set a password, and land directly on their own dashboard.

Before you send invites, run the [Go-live checklist](./go-live-checklist.md) so logins, per-client access, and your domain are all confirmed. Then start small: invite one trusted client, watch them use it, and refine the wording or layout by describing the change to Taskade Genesis.
{% endstep %}
{% endstepper %}

***

## Next steps

* [Add login & roles](./add-login-and-roles.md) — set up sign-in and decide who can see and do what.
* [Go-live checklist](./go-live-checklist.md) — confirm access, branding, and your domain before inviting clients.
* [GenesisAuth](../community-and-sharing/genesis-auth.md) — manage clients in the App Users tab.
* [Custom Domains & Branding](../space-apps-guide/custom-domains.md) — host the portal at `portal.yourbrand.com`.
* [Getting Started with Taskade Genesis](../genesis/getting-started.md) — how describing an app turns into a working one.
