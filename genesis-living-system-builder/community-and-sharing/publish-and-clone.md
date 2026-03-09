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
- [Custom Domains](#custom-domains)
- [Advanced Sharing Options](#advanced-sharing-options)
- [Security Considerations](#security-considerations)
- [Sharing Methods at a Glance](#sharing-methods-at-a-glance)
- [What's Next](#whats-next)

---

## Overview

Once you've built an app with Genesis, you can share it with the world in multiple ways — from private team tools to public community templates. This guide covers every publishing, sharing, and distribution option available.

> **Haven't built an app yet?** Start with [Create Your First App](../genesis/create-your-first-app.md).

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

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Genesis Version History](../genesis/version-history.md) | Track changes and restore previous versions |
| [App Analytics](../genesis/app-analytics.md) | Monitor visitor data and optimize your app |
| [Create Your First App](../genesis/create-your-first-app.md) | Build something to publish |
| [Taskade AI Credits](https://help.taskade.com/en/articles/taskade-ai-credits) | Understand credit costs for app operations |
