---
description: >-
  Add secure sign-in and access control to your Taskade Genesis app so the right people
  see the right things — no code, no third-party auth provider.
keywords: add login, access control, RBAC, app users, SSO, no-code
---

# Add login and roles to your app

Taskade Genesis apps can ship with real user accounts and secure sign-in built in, powered by [GenesisAuth](../community-and-sharing/genesis-auth.md). To add login, you don't configure anything — you describe the need when you build the app (for example, *"users can sign in to see their own dashboard"*), and Taskade Genesis wires up the sign-in component, session handling, and per-user data access automatically.

{% hint style="success" %}
**The short version:** Describe an app that needs accounts, and your app gets a working login screen. Then manage who gets in from the **App Users** tab in your app's settings.
{% endhint %}

***

## When to use what

GenesisAuth is part of a broader access-control story. Pick the control that matches who needs to get in and how locked-down it has to be. Every option below is no-code.

| Control | What it does | When to use |
| --- | --- | --- |
| **GenesisAuth (App Users)** | Account-based sign-in for your app's end users | Any multi-user app — external clients, members, or customers |
| **Workspace SSO** | Lets your Taskade workspace members sign in with their existing identity | Internal tools for your own team |
| **Password-protected public links** | A single shared password on a link | A quick gated preview |
| **Private / Unlisted visibility** | Controls whether the app can be discovered | Non-indexed, share-by-link only |
| **Public agent tool opt-out** | Keeps sensitive tools workspace-only | Apps that publish an AI agent |

For external customers and members, reach for **App Users**. For your own staff, **Workspace SSO** means no second account to manage. For a fast, low-stakes gate, a **password-protected link** is enough.

{% hint style="info" %}
The **App Users** tab is currently in Beta and rolling out across paid plans.
{% endhint %}

***

## How to turn it on

You won't find a switch to flip — you ask for it in plain language.

1. In Taskade Genesis, describe an app that needs accounts. Include phrases like *"a client portal where each client has their own dashboard"* or *"a members-only knowledge base."*
2. Taskade Genesis generates the app **with the sign-in component already in place**.
3. Open your app's settings and go to the **App Users** tab to invite people, suspend access, or remove accounts.

If your first prompt didn't add login, you can ask Taskade Genesis to *"add sign-in for users"* later while editing the app.

For the full walkthrough — the App Users tab, Workspace SSO, custom-domain sign-in, and the security model — see the source page:

{% content-ref url="../community-and-sharing/genesis-auth.md" %}
[genesis-auth.md](../community-and-sharing/genesis-auth.md)
{% endcontent-ref %}

***

## Pair it with a custom domain

GenesisAuth works on apps hosted at your own web address with no extra setup. Combining sign-in with a [custom domain](../space-apps-guide/custom-domains.md) gives end users a fully branded, production-ready product.

{% hint style="warning" %}
**Never put real credentials in your app.** If your app calls an external service that needs an API key or token, store it in [App Secrets](../space-apps-guide/app-secrets.md) — a per-space vault — instead of writing it into your app. Secrets stay on the server and never ship in your exported app bundle.
{% endhint %}

***

## Next steps

* New to building? Start with [Getting Started](../genesis/getting-started.md).
* Read the full [GenesisAuth](../community-and-sharing/genesis-auth.md) reference for access control and security best practices.
* Connect a [custom domain](../space-apps-guide/custom-domains.md) for a branded, production sign-in.
* See login and roles in action: [Build a client portal](build-a-client-portal.md) and [Build an ops dashboard](build-an-ops-dashboard.md).
