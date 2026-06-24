---
description: >-
  Publish, clone, and sell Taskade Genesis apps with live URLs, password protection, custom domains, SEO, white-label branding, and paid copies.
---

# Publish and Clone Your Apps

---

## Table of Contents

- [Overview](#overview)
- [What "Publish" Means](#what-publish-means)
- [App Visibility Settings](#app-visibility-settings)
- [Publishing Strategies](#publishing-strategies)
- [Password Protection](#password-protection)
- [Publish to Community Gallery](#publish-to-community-gallery)
- [Clone and Remix Apps](#clone-and-remix-apps)
- [Paid Apps](#paid-apps)
- [Custom Domains](#custom-domains)
- [Advanced Sharing Options](#advanced-sharing-options)
- [Embedding Your App](#embedding-your-app)
- [SEO Customization](#seo-customization)
- [White-Label Branding](#white-label-branding)
- [Enterprise SSO (OIDC)](#enterprise-sso-oidc)
- [Security Considerations](#security-considerations)
- [Sharing Methods at a Glance](#sharing-methods-at-a-glance)
- [What's Next](#whats-next)

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
| **Clone-ready** | Others can fork your app into their own workspace |
| **Analytics active** | Visitor tracking begins immediately |
| **Version controlled** | Every published version is saved and restorable |

<!-- Screenshot: Published app with live URL -->

---

## App Visibility Settings

| Visibility | Who Can Access | Discoverable | Best For |
|---|---|---|---|
| **Public** | Anyone on the internet | Yes — listed in Community Gallery | Templates, showcases, community tools, marketing |
| **Secret** | Anyone with the link | No — link-only access | Client portals, team tools, partner apps |
| **Private** | Workspace members only | No | Internal dashboards, company tools |

---

## Publishing Strategies

Genesis supports two publishing strategies:

| Strategy | How It Works | Best For |
|---|---|---|
| **Auto** | Every change is published immediately | Development/testing phase, rapid iteration, internal tools |
| **Manual** | You choose when to publish | Production apps, client-facing tools, quality-controlled releases |

> **Tip:** Start with Auto while building, switch to Manual when your app is live with real users. You can change this anytime in app settings.

---

## Password Protection

Add an extra layer of security to any published app:

| Step | Action |
|---|---|
| 1 | Open your app's **Publish** settings |
| 2 | Toggle **"Require Password"** on |
| 3 | Set your password |
| 4 | Share the password separately with authorized users |

| Feature | Detail |
|---|---|
| Available on | All plans |
| Protection level | Site-wide — covers entire app |
| Password sharing | Manual (share via secure channel) |
| Can be changed | Yes, anytime in settings |

---

## Publish to Community Gallery

Share your app with the entire Taskade community:

| Step | Action |
|---|---|
| 1 | Set your app visibility to **Public** |
| 2 | Click **"Publish to Community"** |
| 3 | Your app enters the community approval queue |
| 4 | Once approved, it appears in the public Community Gallery |

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

Cloning is the fastest way to start — pick a working app, copy it to your workspace, and customize it instead of building from a blank prompt. Browse apps to clone in the [community gallery](https://www.taskade.com/community) and [Taskade's official kits](https://www.taskade.com/user/taskade).

Any public or shared app can be cloned:

| Step | Action |
|---|---|
| 1 | Open a published app (yours or someone else's) |
| 2 | Click **"Edit in Taskade"** |
| 3 | Click **"Clone"** |
| 4 | The app is copied to your workspace with all components |

### What Gets Cloned

| Component | Cloned? | Notes |
|---|---|---|
| **UI / Frontend** | Yes | Full React app code |
| **Project databases** | Yes | Structure + sample data |
| **AI agents** | Yes | Agent config + knowledge references |
| **Automations** | Yes | Flow definitions (may need re-authentication for integrations) |
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

Genesis lets creators monetize their apps directly. When you enable monetization for an app, buyers pay via Stripe before receiving their own private copy.

### How It Works

| Step | What Happens |
|---|---|
| **Creator sets a price** | In the app's **Publish** settings, open the **Monetization** panel and set a price for the app. |
| **Buyer discovers the app** | The app appears in the Community Gallery (or via a direct link) with a price tag. |
| **Buyer pays via Stripe** | Checkout is handled by Stripe. No payment details are stored by Taskade. |
| **Buyer receives a private copy** | After successful payment, Taskade clones the app directly into the buyer's workspace. |

### Key Rules for Paid App Copies

| Rule | Detail |
|---|---|
| **Scope** | Cloned paid apps are scoped to the buyer's workspace only. |
| **Re-sharing** | Buyers cannot re-publish or redistribute paid app copies to other users. |
| **Clone ancestry** | Taskade tracks clone lineage — each paid copy is linked to the original app and its creator. |
| **No revenue figures here** | Payout terms and percentages are shown in your Monetization dashboard, not documented here — they may change. |

{% hint style="info" %}
Paid apps do not affect the buyer's ability to customize or extend the app within their own workspace. Re-sharing and re-selling the cloned copy is blocked to protect creator rights.
{% endhint %}

---

## Custom Domains

Connect your own domain to any published Genesis app:

| Feature | Detail |
|---|---|
| **Available on** | Business+ plans |
| **Setup method** | CNAME record pointing to Taskade |
| **SSL** | Automatic via Cloudflare |
| **Configuration** | App Settings → Domains |

| Step | Action |
|---|---|
| 1 | Open app **Settings** → **Domains** |
| 2 | Enter your custom domain (e.g., `app.yourcompany.com`) |
| 3 | Add the provided CNAME record to your DNS provider |
| 4 | Wait for DNS propagation (up to 24 hours) |
| 5 | SSL certificate is provisioned automatically |

---

## Advanced Sharing Options

| Feature | Description | Plan |
|---|---|---|
| **Direct link** | Copy and share the app URL | All |
| **Embed** | Embed app in your website or blog via iframe | All |
| **Social sharing** | Share on LinkedIn, Twitter, Reddit, Facebook | All |
| **SEO customization** | Custom meta title, description, Open Graph image | Business+ |
| **Custom colors** | Branded share previews and social cards | Business+ |
| **White-label branding** | Custom favicon, remove Taskade branding | Business+ |
| **OIDC authentication** | Enterprise SSO for app access | Enterprise |

---

## Embedding Your App

You can embed any published Genesis app into an external website, blog, or documentation page using an iframe.

### Getting the Embed Code

1. Open your published app.
2. Click the **Share** menu (top-right of the app toolbar).
3. Select **Embed** to reveal the embed code snippet.
4. Copy the `<iframe>` tag and paste it into your page's HTML.

### Recommended iframe Attributes

```html
<iframe
  src="https://your-app-url.taskade.com"
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

1. Open your app's **Publish** settings.
2. Locate the **SEO** panel.
3. Fill in the fields described below.
4. Save and republish (or let Auto-publish apply the change).

| Field | What It Controls | Tips |
|---|---|---|
| **Meta title** | The `<title>` tag and browser tab label | Keep under ~60 characters to avoid truncation in search results |
| **Meta description** | The snippet shown in search results | Aim for ~150 characters; describe what the app does and who it's for |
| **Open Graph image** | The preview image on social shares (LinkedIn, X/Twitter, Slack, etc.) | Recommended size 1200 × 630 px; upload via the OG Image field |

{% hint style="info" %}
The Open Graph image you upload is stored in your workspace assets. If you later delete the asset, the social preview will fall back to the Taskade default image.
{% endhint %}

---

## White-Label Branding

Business+ workspaces can strip or replace Taskade's default branding on published apps.

### How to Configure White-Label Options

1. Open your app's **Publish** settings.
2. Navigate to the **Branding** panel.
3. Apply the options below and save.

| Option | What It Does |
|---|---|
| **Watermark toggle** | Hides the "Powered by Taskade" badge from the published app footer |
| **Favicon upload** | Replaces the default Taskade favicon with your own `.ico` or `.png` file |
| **Color theme** | Sets primary and accent colors for the app chrome to match your brand palette |

{% hint style="info" %}
White-label settings apply to the published view only. The Taskade editor interface retains standard Taskade branding for workspace members.
{% endhint %}

---

## Enterprise SSO (OIDC)

Enterprise workspaces can gate app access behind your organization's Identity Provider (IdP) using OpenID Connect (OIDC). This means visitors must sign in through your corporate SSO before they can view or interact with the app.

Contact sales to enable OIDC for your workspace — setup guidance is provided during Enterprise onboarding.

---

## Security Considerations

| Practice | Recommendation |
|---|---|
| **Sensitive data** | Never publish apps containing passwords, API keys, or PII publicly |
| **Private links** | Use Secret visibility for confidential applications |
| **Password protection** | Add site-wide password for client portals |
| **Access review** | Regularly review who has access to your published apps |
| **Automation credentials** | Integration credentials are workspace-level, not exposed in published apps |
| **Version awareness** | Old published versions may contain data you later removed — use [Version History](../genesis/version-history.md) to audit |

---

## Sharing Methods at a Glance

| Method | Visibility | Clonable | Custom Domain | Password | Analytics | Best For |
|---|---|---|---|---|---|---|
| **Public + Community** | Anyone | Yes | Business+ | Optional | Yes | Templates, showcases |
| **Public (no community)** | Anyone with URL | Yes | Business+ | Optional | Yes | Marketing pages |
| **Secret link** | Link holders | Yes | Business+ | Optional | Yes | Client portals, partners |
| **Private** | Workspace only | N/A | Business+ | Optional | Yes | Internal tools |
| **Embed** | Website visitors | No | N/A | Optional | Yes | Blog, documentation |
| **Paid** | Anyone (after purchase) | Yes (paid copy) | Business+ | Optional | Yes | Monetized templates, premium apps — buyer receives a private copy in their own workspace |

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
