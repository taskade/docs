---
description: >-
  Build a client or member portal with no code. Each client signs in, and with
  Private entries on, sees only their own records.
---

# Build a client or member portal in 10 minutes

**You describe the portal that you want, and Taskade Genesis builds it. Each client signs in. When you turn on Private entries, each client sees only their own records: their projects, their files, and their status.**

You write no code. You do not connect a separate sign-in service, and you do not share spreadsheets by hand. At the end of this guide, you have a working portal with your brand at your own web address. You can give it to your first client.

***

{% hint style="info" %}
**This works for each type of business.** A "client" is the person that you serve. Change the examples to fit your business:

* **Consulting** — each client sees their project status, deliverables, and invoices.
* **Clinic / practice** — each patient sees their appointments, intake forms, and documents.
* **Course / membership** — each member sees their lessons, progress, and resources.
* **Agency** — each account sees their campaigns, assets, and reports.
{% endhint %}

***

{% stepper %}
{% step %}
### Describe the portal

Open Taskade Genesis. In plain English, tell it who signs in, what they see, and what stays private. Taskade Genesis then builds a working app with a database and screens that work together.

Start with a prompt like this one. Change the parts in brackets for your business:

{% code overflow="wrap" %}
```text
Build a client portal for my consulting business. Each client signs in with
their own account and sees only their own dashboard: their active projects,
the documents I've shared with them, an invoice list, and a status update for
each project. Clients can never see other clients' information. I sign in as
the owner and can see and manage every client from one admin view.
```
{% endcode %}

The first build is better when you say exactly *what each client sees*. New to Taskade Genesis? Read [Getting Started](../genesis/getting-started.md) first.
{% endstep %}

{% step %}
### Give each client their own login

A portal needs real sign-in, so that each person sees the correct data. If your prompt asks for an account for each client, Taskade Genesis adds a secure login. You do not configure a sign-in service.

You manage all clients on the **App Users** tab. Add clients by email, disable access at the end of a project, and delete accounts that you do not need. See [GenesisAuth — add login & roles](../community-and-sharing/genesis-auth.md) for all the details.

{% hint style="success" %}
If your first build has no sign-in, tell Taskade Genesis *"add sign-in so each client has their own account"* while you edit the app.
{% endhint %}
{% endstep %}

{% step %}
### Show each client only their record

This step makes the app a *portal* and not a shared page. Sign-in confirms who each client is. It does not hide the records of other clients. Without **Private entries**, each signed-in client can open each record.

**Private entries** is off by default. To show each client only their own records:

1. Open **Publish → More options → Private entries**, and turn it on.
2. Turn on **Each person signs in** too. Without it, anyone with the link sees all entries.
3. Pick the field that holds the owner of each record, then click **Enable row scoping**.

Each record then belongs to its owner, so Client A sees only the projects of Client A. For the full steps, see [Give each user only their own rows](add-login-and-roles.md#give-each-user-only-their-own-rows).

To see every client from one admin view, give your own app account the **Admin** role. Then turn on **Admins see every row** in the same **Private entries** dialog. See [Give admins the full view](add-login-and-roles.md#give-admins-the-full-view).

Also put the goal in your prompt, for example *"each client sees only their own projects and documents"*. Taskade Genesis then builds the app around it. To learn how your records are stored and shown, read [Projects & Databases](../workspaces/projects-databases.md). To learn how sign-in confirms which client is signed in, read [GenesisAuth](../community-and-sharing/genesis-auth.md).

{% hint style="warning" %}
Always test the isolation before you go live. Sign in as a test client, and make sure that you cannot see the records of other clients.
{% endhint %}
{% endstep %}

{% step %}
### Put it on your domain

A portal at `portal.yourbrand.com` looks like your own software, not a generic link. When you connect your domain, clients sign in and work under your brand. They do not see Taskade in the URL.

To connect a subdomain such as `portal.yourbrand.com` (Pro and up), follow [Custom Domains & Branding](../space-apps-guide/custom-domains.md). The same page shows how to add your logo and colors (custom colors need Business and up) and how to turn on automatic HTTPS.
{% endstep %}

{% step %}
### Invite your first client

You are ready to go live:

1. Run the [Go-live checklist](./go-live-checklist.md). It confirms the logins, the access for each client, and your domain.
2. Open the **App Users** tab.
3. Type the email of your first client in **Add person**, and click **Add person**.

The client gets a link, sets a password, and goes directly to their own dashboard. Start small. Invite one trusted client, and watch how they use the portal. To change the words or the layout, describe the change to Taskade Genesis.
{% endstep %}
{% endstepper %}

***

## Next steps

* [Add login & roles](./add-login-and-roles.md) — add sign-in and decide who can see and do what.
* [Go-live checklist](./go-live-checklist.md) — confirm access, branding, and your domain before you invite clients.
* [GenesisAuth](../community-and-sharing/genesis-auth.md) — manage clients on the App Users tab.
* [Custom Domains & Branding](../space-apps-guide/custom-domains.md) — put the portal at `portal.yourbrand.com`.
* [Getting Started with Taskade Genesis](../genesis/getting-started.md) — how a description becomes a working app.

---

_Step-by-step guides on taskade.com/learn: [Build a Customer Portal](https://www.taskade.com/learn/genesis/build-customer-portal), [App Users (Beta): End-User Management for Taskade Genesis Apps](https://www.taskade.com/learn/genesis/app-users)._
