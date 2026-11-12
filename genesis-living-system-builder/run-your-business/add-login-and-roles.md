---
description: >-
  Add secure sign-in and access control to your Taskade Genesis app so the right people
  see the right things — no code, no third-party auth provider.
keywords: add login, access control, RBAC, app users, SSO, no-code
---

# Add login and roles to your app

A Taskade Genesis app can have real user accounts and secure sign-in. [GenesisAuth](../community-and-sharing/genesis-auth.md) supplies them. You do not configure sign-in. You describe it when you build the app, for example *"users can sign in to see their own dashboard"*. Taskade Genesis then adds the sign-in screen and the session management.

Sign-in confirms who a visitor is. It does not hide the records of other people. Per-user data is a different setting, and it is off by default. See [Give each user only their own rows](#give-each-user-only-their-own-rows).

{% hint style="success" %}
**The short version:** Describe an app that needs accounts, and your app gets a working login screen. You then control who can sign in on the **App Users** tab in the settings of your app.
{% endhint %}

***

## When to use what

GenesisAuth is one of several access controls. Pick the control that matches who must get in and how strict the lock must be. All of these controls need no code.

| Control | What it does | When to use |
| --- | --- | --- |
| **GenesisAuth (App Users)** | Sign-in with an account for the people who use your app, on every plan | Each app with more than one user: external clients, members, customers, or your own team |
| **Private entries (row scoping)** | Shows each signed-in person only the rows that match their login. Off by default | Client portals and member apps |
| **Workspace SSO** | Company single sign-on for your team inside Taskade (Business and up). It does not sign people in to a published app | The Taskade accounts of your own team |
| **Password-protected public links** | One shared password on a link (Pro and up) | A quick preview with a lock |
| **Listed / Unlisted** | Controls if people can find the app (**Show in public listings**) | Share by link only, not in search |
| **Public agent tool opt-out** | Keeps sensitive tools workspace-only | Apps that publish an AI agent |

Use **App Users** for external customers and members. For your own staff in a published app, add each teammate on the **App Users** tab. Taskade workspace credentials do not open an app account. For a fast lock on a low-risk app, a **password-protected link** is enough.

{% hint style="info" %}
The **App Users** tab is in Beta. App Users and app sign-in work on every plan, Free included.
{% endhint %}

***

## How to turn it on

There is no switch for sign-in. You ask for it in plain language:

1. In Taskade Genesis, describe an app that needs accounts. Use words such as *"a client portal where each client has their own dashboard"* or *"a members-only knowledge base."*
2. Wait for Taskade Genesis to build the app **with the sign-in component in place**.
3. Open **App settings → People & access → App users**.
4. Add people by email, disable or enable access, or delete accounts.
5. Under **Who can sign up**, pick **Anyone** or **Invite only**.

If your first prompt did not add login, ask Taskade Genesis to *"add sign-in for users"* while you edit the app.

For the App Users tab, sign-in on a custom domain, and the security model, read the full page:

{% content-ref url="../community-and-sharing/genesis-auth.md" %}
[genesis-auth.md](../community-and-sharing/genesis-auth.md)
{% endcontent-ref %}

***

## Give each user only their own rows

In a client portal or a member app, signed-in users usually must not see the records of other users. To show each person only their own rows, turn on **Private entries** (private per-user data, or row scoping) when you publish:

1. Open **Publish**, expand **More options**, and click **Private entries**. The option shows for apps on the current app template that have sign-in. When you turn it on, Taskade builds and publishes the app again.
2. Turn on **Each person signs in** too. Without it, anyone with the link sees all entries.
3. Pick or add the owner field of each private project. This field holds the owner of each row.
4. Click **Enable row scoping**.
5. Publish. Each signed-in user then sees only their own rows.

Taskade tags each row that a person makes **through the app** with that person's login. A row with no value in the owner field is hidden from all app users. This is the safe default.

{% hint style="info" %}
Before you launch, sign in as a test user. Make sure that this user sees only their own records. The [go-live checklist](go-live-checklist.md) has the same item for per-user data. Data that you add inside Taskade, not through the app, has no owner tag. App users cannot see it until you give it an owner.
{% endhint %}

***

## Give admins the full view

Each App User has a **Role**: **Admin** or **Member**. A new account is a Member. The workspace owner changes the role in the **Role** column of the **App users** table. A signed-in person gets the new role within 15 minutes.

A role decides what the app shows, for example an admin page that only admins can open. A role is not a data permission. Do not use an admin page as a security boundary.

To let admins see and edit every row of the projects that **Private entries** keeps private:

1. Open **Publish**, expand **More options**, and click **Private entries**.
2. Turn on **Admins see every row**.
3. Save the dialog.

| Role | Switch off | Switch on |
| --- | --- | --- |
| Admin | Rows that match their login | Every row in the listed projects |
| Member | Rows that match their login | Rows that match their login |

A project that you did not list stays closed to admins too. The switch is off by default. Test the result with one admin account and one member account.

***

## Pair it with a custom domain

GenesisAuth works on apps at your own web address, with no more settings. Sign-in on a [custom domain](../space-apps-guide/custom-domains.md) gives your users a product with your own brand.

{% hint style="warning" %}
**Do not put real credentials in your app.** If your app calls an outside service that needs an API key or a token, keep the key in [App Secrets](../space-apps-guide/app-secrets.md). App Secrets is a vault for each space. Secrets stay on the server, and they are never in your exported app bundle.
{% endhint %}

***

## Next steps

* New to building? Start with [Getting Started](../genesis/getting-started.md).
* Read the full [GenesisAuth](../community-and-sharing/genesis-auth.md) page for access control and security best practices.
* Connect a [custom domain](../space-apps-guide/custom-domains.md) for sign-in at your own address.
* See login and roles in real apps: [Build a client portal](build-a-client-portal.md) and [Build an ops dashboard](build-an-ops-dashboard.md).

---

_Step-by-step guides on taskade.com/learn: [GenesisAuth: Built-In Login for Your Apps](https://www.taskade.com/learn/genesis/genesis-auth), [App Users (Beta): End-User Management for Taskade Genesis Apps](https://www.taskade.com/learn/genesis/app-users)._
