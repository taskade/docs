---
description: >-
  Publish, clone, and sell Taskade Genesis apps with live URLs, password protection, custom domains, SEO, white-label branding, and paid copies.
---

# Publish and Clone Your Apps

---

## Overview

Once you've built an app with Taskade Genesis, you can share it with the world in multiple ways — from private team tools to public community templates. This guide covers every publishing, sharing, and distribution option available.

> **Haven't built an app yet?** Start with [Create Your First App](../genesis/getting-started.md).

---

## What "Publish" Means

When you publish a Genesis app, it becomes a **live, accessible application**:

| What Happens | Detail |
|---|---|
| **Live URL** | Your app gets a shareable URL anyone can access |
| **Real-time functionality** | All features work — forms, databases, agents, automations |
| **Powered by your workspace** | Backend databases, AI agents, and automations run live |
| **Clone-ready** | Others can fork your app into their own workspace, if you turn on **Let others clone** |
| **Analytics active** | Visitor tracking begins immediately (App Analytics dashboard on Business and up) |
| **Version controlled** | Every published version is saved and restorable |

<!-- Screenshot: Published app with live URL -->

---

## App Visibility Settings

Open **Publish** and pick who can open the app under **Who can open it**:

| Choice | What Visitors Do | Plan |
|---|---|---|
| **Anyone with the link** | Open the app. No password needed. | All plans |
| **Anyone with the password** | Type one shared password first | Pro and up |
| **Each person signs in** | Sign in with their own app account ([GenesisAuth](genesis-auth.md)) | All plans |

Then set discoverability under **More options**:

| Visibility | Who Can Access | Discoverable |
|---|---|---|
| **Listed** (**Show in public listings** on) | Anyone who can open it | Yes — public listings and search. The Taskade App Factory after approval ([see below](#publish-to-the-taskade-app-factory)) |
| **Unlisted** (called Secret in earlier versions) | Anyone with the link | No — link-only access |
| **Draft / unpublished** | Your workspace team only, inside Taskade | No |

Best for:

- **Listed:** templates, showcases, community tools, and marketing.
- **Unlisted:** client portals, team tools, and partner apps.
- **Draft / unpublished:** apps you are still building, and internal testing.

---

## Publishing Strategies

Genesis supports two publishing strategies:

| Strategy | How It Works | Best For |
|---|---|---|
| **Auto** | Every change is published immediately | Development/testing phase, rapid iteration, internal tools |
| **Manual** | You choose when to publish | Production apps, client-facing tools, quality-controlled releases |

> **Tip:** Start with Auto while building, switch to Manual when your app is live with real users. You can change this anytime in app settings. Both strategies work on every plan, Free included.

---

## Password Protection

Add an extra layer of security to any published app:

1. Click **Publish**
2. Under **Who can open it**, pick **Anyone with the password**
3. Type your password and click **Update password**
4. Share the password separately with authorized users

| Feature | Detail |
|---|---|
| Available on | Pro and up |
| Protection level | Site-wide — covers entire app |
| Password sharing | Manual (share via secure channel) |
| Can be changed | Yes, anytime with **Change password** or **Remove password** (also in **App settings → People & access → Security**) |

---

## Publish to the Taskade App Factory

Share your app with the entire Taskade community:

1. Under **More options**, turn on **Show in public listings**
2. Click **"Publish to Community"**
3. Your app enters the community approval queue
4. Once approved, it appears in the public Taskade App Factory

### Community App Metrics

Published community apps track engagement automatically:

| Metric | What It Measures |
|---|---|
| **Views** | How many people viewed your app |
| **Likes** | Community engagement and endorsement |
| **Installs** | How many people cloned/forked your app |
| **Intelligence Score** | Your app's DNA maturity (0–100) |

> **Community status flow:** Pending → Approved / Rejected. You can unsubmit anytime.

---

## Clone and Remix Apps

Cloning is the fastest way to start — pick a working app, copy it to your workspace, and customize it instead of building from a blank prompt. Browse apps to clone in Taskade App Factory at [taskade.com/apps](https://www.taskade.com/apps) and [Taskade's official kits](https://www.taskade.com/apps/official).

A public app is not cloneable by default. An app can be cloned only when its creator turns on **Let others clone** (**Free** or **Paid**). A kit with a **PRO** badge needs a paid plan to clone.

1. Open the app's public listing
2. Click **"Clone"** (shown only on a free or paid kit)
3. Review the contents Taskade lists, then choose the destination workspace
4. The app is copied to your workspace with its components

To let others clone your own app, open **Publish → Let others clone** and pick **Free** or **Paid** (**Off** stops new clones). This control was called "Share as Template" and then "Share as kit" in earlier versions.

### What Gets Cloned

| Component | Cloned? | Notes |
|---|---|---|
| **UI / Frontend** | Yes | Full React app code |
| **Project databases** | Yes | Structure + data. A project that holds what visitors sent (form answers, sign-ups) ships without those rows, unless the creator ships it as sample data |
| **AI agents** | Yes | Agent config + knowledge references |
| **Automations** | Yes | Flow definitions. Connected accounts are not copied, so connect your own |
| **Secrets** | No | Connected accounts and secrets stay with the creator |
| **Taskade EVE memory** | No | The creator's Taskade EVE memory projects are not copied |
| **Media files** | Yes | Images, uploads |
| **Custom domain** | No | You'll need to configure your own |
| **Analytics data** | No | Fresh start with new metrics |
| **Passwords** | No | Set your own |

---

## Prefilled Taskade Genesis Links

You can share a link that opens Taskade Genesis with an app description already filled in, so the recipient generates it in one click instead of retyping the idea.

**Link format:**

```
https://www.taskade.com/create?input=YOUR_APP_DESCRIPTION
```

When opened, Taskade Genesis loads with the description pre-populated and ready to generate — the recipient can still edit it first. The `input` value is URL-encoded (a space becomes `%20`); most browsers encode it automatically when you copy the link back out of the address bar.

{% hint style="info" %}
Specific descriptions produce better results: "Create a restaurant reservation system with table availability, guest preferences, and confirmation emails" works far better than "Build a booking app." Very long descriptions may hit browser URL-length limits.
{% endhint %}

---

## Paid Apps

Taskade Genesis lets creators sell original apps as paid App Kits. Buyers pay before receiving their own private copy.

### How It Works

| Step | What Happens |
|---|---|
| **Creator sets a price** | In the app's **Publish** panel, open **Let others clone**, choose **Paid**, enter the price, and click **Put on sale**. Finish payout setup in **Earnings**. |
| **Buyer discovers the app** | The app appears in the Taskade App Factory (or via a direct link) with a price tag. |
| **Buyer pays via Stripe** | Checkout is handled by Stripe. No payment details are stored by Taskade. |
| **Buyer receives a private copy** | After successful payment, Taskade clones the app directly into the buyer's workspace. |

### Key Rules for Paid App Copies

| Rule | Detail |
|---|---|
| **Scope** | Cloned paid apps are scoped to the buyer's workspace only. |
| **Re-selling** | Buyers can customize and publish their copy, but cannot sell it as their original work. |
| **Clone ancestry** | Taskade tracks clone lineage — each paid copy is linked to the original app and its creator. |
| **Payouts** | See **Earnings** for current payout terms. |

{% hint style="info" %}
Paid apps do not affect the buyer's ability to customize or extend the app within their own workspace. An app cloned from another creator cannot be sold as original work, which protects creator rights.
{% endhint %}

---

## Custom Domains

Connect your own domain to any published Genesis app:

| Feature | Detail |
|---|---|
| **Available on** | Pro (up to 10 per workspace), Business and up (unlimited) |
| **Setup method** | CNAME record pointing to `external.taskade.com`, plus a short SSL record Taskade gives you (or buy a domain inside Taskade) |
| **SSL** | Automatic |
| **Configuration** | App settings → Launch → Domains |

1. Open **App settings** → **Launch** → **Domains**
2. Enter your custom domain (e.g., `app.yourcompany.com`)
3. Add the provided CNAME record (and the SSL record) to your DNS provider
4. Wait for DNS propagation (up to 48 hours)
5. SSL certificate is provisioned automatically

---

## Advanced Sharing Options

| Feature | Description | Plan |
|---|---|---|
| **Direct link** | Copy and share the app URL | All |
| **Embed** | Embed app in your website or blog via iframe | All |
| **Social sharing** | Share on LinkedIn, Twitter, Reddit, Facebook | All |
| **SEO customization** | Custom meta title, description, Open Graph image | Business+ |
| **Custom colors** | Branded app color theme | Business+ |
| **Remove Taskade badge** | Hide the "Powered by Taskade" badge | All paid plans |
| **App sign-in** | App Users sign in to your app ([GenesisAuth](genesis-auth.md)) | All |

---

## Embedding Your App

You can embed any published Genesis app into an external website, blog, or documentation page using an iframe.

### Getting the Embed Code

1. Open your published app in Taskade.
2. Click **Publish**.
3. Click the embed button (`</>`) next to the app address, or **Copy Embed Code**.
4. Paste the `<iframe>` tag into your page's HTML.

### Recommended iframe Attributes

```html
<iframe
  src="https://your-app.taskade.app"
  width="100%"
  style="min-height: 600px; border: none;"
  allowfullscreen
></iframe>
```

| Attribute | Recommended Value | Why |
|---|---|---|
| `width` | `100%` | Fills the container responsively |
| `min-height` | `600px` (adjust to content) | Prevents the frame from collapsing |
| `border` | `none` | Removes the default iframe border |
| `allowfullscreen` | present | Allows modal/fullscreen views inside the app |

{% hint style="info" %}
If your embedding site enforces a `Content-Security-Policy` with `frame-ancestors`, you must add `taskade.com` (or your custom domain) to the allowed-origin list. Frames blocked by CSP will show a blank panel with no error visible to the end user.
{% endhint %}

---

## SEO Customization

Genesis apps support custom search-engine and social metadata so your published app is discoverable and looks polished when shared.

### How to Set SEO Fields

1. Open **App settings → Launch → Branding**.
2. Review the **SEO Health** checklist.
3. Fill in the fields described below. Editing them needs Business and up.
4. Save and republish (or let Auto-publish apply the change).

| Field | What It Controls | Tips |
|---|---|---|
| **Meta title** | The `<title>` tag and browser tab label | Keep under ~60 characters to avoid truncation in search results |
| **Meta description** | The snippet shown in search results | Aim for ~150 characters; describe what the app does and who it's for |
| **Social image** | The preview image on social shares (LinkedIn, X/Twitter, Slack, etc.) | Recommended size 1200 × 630 px; paste a full `https://` address. Leave it blank to use a live screenshot of your app |

{% hint style="info" %}
The social image field takes a full `https://` address. If you leave it blank, or enter a relative path, Taskade uses a live screenshot of your app as the social preview.
{% endhint %}

---

## White-Label Branding

Paid workspaces can hide Taskade's badge on published apps. Custom app colors need Business and up.

### How to Configure White-Label Options

1. Click **Publish** to reach **Show Taskade badge**, or open **App settings → Launch → Branding**.
2. Apply the options below and save.

| Option | What It Does |
|---|---|
| **Show Taskade badge** | Turn it off to hide the "Powered by Taskade" badge from the published app (all paid plans) |
| **Favicon upload** | Replaces the default Taskade favicon with your own `.ico` or `.png` file |
| **Color theme** | Sets primary and accent colors for the app chrome to match your brand palette (Business and up) |

{% hint style="info" %}
White-label settings apply to the published view only. The Taskade editor interface retains standard Taskade branding for workspace members.
{% endhint %}

---

## App Sign-In (OIDC)

App sign-in runs on OpenID Connect (OIDC), with Taskade as the identity provider. It is available on every plan. Turn it on to require an account before visitors can use the app — see [GenesisAuth](genesis-auth.md).

Sign-in confirms who a visitor is. It does not hide other people's records by itself: to give each user only their own rows, turn on **Private entries** (private per-user data, off by default) under **Publish → More options** — see [Add Login & Roles](../run-your-business/add-login-and-roles.md#give-each-user-only-their-own-rows).

For your own team, workspace SSO/SAML is available on Business and up — see [Account Management](../../account-management/README.md).

---

## Security Considerations

| Practice | Recommendation |
|---|---|
| **Sensitive data** | Never publish apps containing passwords, API keys, or PII publicly |
| **Private links** | Keep confidential apps unlisted, and pick **Each person signs in** |
| **Password protection** | Add a site-wide password (Pro and up) for a quick shared lock |
| **Access review** | Regularly review who has access to your published apps |
| **Automation credentials** | Integration credentials are workspace-level, not exposed in published apps |
| **Version awareness** | Old published versions may contain data you later removed — use [Version History](../genesis/version-history.md) to audit |

---

## Sharing Methods at a Glance

| Method | Visibility | Clonable | Custom Domain | Password | Analytics | Best For |
|---|---|---|---|---|---|---|
| **Listed + Community** | Anyone | If **Let others clone** is on | Pro+ | Optional (Pro+) | Business+ | Templates, showcases |
| **Listed (no community)** | Anyone with URL | If **Let others clone** is on | Pro+ | Optional (Pro+) | Business+ | Marketing pages |
| **Unlisted link** | Link holders | If **Let others clone** is on | Pro+ | Optional (Pro+) | Business+ | Client portals, partners |
| **Each person signs in** | Signed-in app users | If **Let others clone** is on | Pro+ | Optional (Pro+) | Business+ | Internal tools, portals |
| **Embed** | Website visitors | No | N/A | Optional (Pro+) | Business+ | Blog, documentation |
| **Paid** | Anyone (after purchase) | Yes (paid copy) | Pro+ | Optional (Pro+) | Business+ | Monetized templates, premium apps — buyer receives a private copy in their own workspace |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Genesis Version History](../genesis/version-history.md) | Track changes and restore previous versions |
| [App Analytics](../genesis/app-analytics.md) | Monitor visitor data and optimize your app |
| [Create Your First App](../genesis/getting-started.md) | Build something to publish |
| [Taskade AI Credits](https://www.taskade.com/learn/agents/ai-usage) | Understand credit costs for app operations |
| [Sharing Best Practices](best-practices.md) | Tips for collaborating and distributing apps |
| [Sharing FAQ](faq.md) | Common questions about publishing and access |
| [Developer Platform](../../apis-living-system-development/developer-home.md) | Publish and manage apps programmatically via the API |

---

_Step-by-step guides on taskade.com/learn: [Publish and Clone Your Apps](https://www.taskade.com/learn/genesis/publishing), [Builder Community & App Kits](https://www.taskade.com/learn/genesis/community-kits), [Sell Your Taskade Genesis App as an App Kit](https://www.taskade.com/learn/genesis/sell-app-kits)._
