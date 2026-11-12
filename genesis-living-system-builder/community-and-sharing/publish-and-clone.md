---
description: >-
  Publish, clone, and sell Taskade Genesis apps with live URLs, password protection, custom domains, SEO, white-label branding, and paid copies.
---

# Publish and Clone Your Apps

---

## Overview

After you build an app with Taskade Genesis, you can share it in many ways. You can keep it as a private team tool, or share it as a public community template. This guide covers each publishing, sharing, and distribution option.

> **No app yet?** Start with [Create Your First App](../genesis/getting-started.md).

---

## What "Publish" Means

When you publish a Taskade Genesis app, it becomes a **live app that people can open**:

| What Happens | Detail |
|---|---|
| **Live URL** | Your app gets a link that you can share. |
| **Real-time functions** | Forms, databases, agents, and automations all work. |
| **Your workspace runs it** | The databases, AI agents, and automations of your workspace run live. |
| **Clone-ready** | If you turn on **Let others clone**, other people can copy your app into their own workspace. |
| **Analytics active** | Visitor tracking starts at once. The App Analytics dashboard is on Business and up. |
| **Version control** | Taskade saves each published version, and you can restore it. |

<!-- Screenshot: Published app with live URL -->

---

## App Visibility Settings

Open **Publish**. Under **Who can open it**, pick who can open the app:

| Choice | What Visitors Do | Plan |
|---|---|---|
| **Anyone with the link** | Open the app. No password needed. | All plans |
| **Anyone with the password** | Type one shared password first | Pro and up |
| **Each person signs in** | Sign in with their own app account ([GenesisAuth](genesis-auth.md)) | All plans |

Then set who can find the app, under **More options**:

| Visibility | Who Can Open It | Who Can Find It |
|---|---|---|
| **Listed** (**Show in public listings** on) | Anyone who can open it | Public listings and search. The Taskade App Factory after approval ([see Publish to the Taskade App Factory](#publish-to-the-taskade-app-factory)) |
| **Unlisted** (called Secret in earlier versions) | Anyone with the link | Nobody. Only people with the link can open it |
| **Draft / unpublished** | Your workspace team only, inside Taskade | Nobody |

Each choice fits a different use:

- **Listed:** templates, showcases, community tools, and marketing.
- **Unlisted:** client portals, team tools, and partner apps.
- **Draft / unpublished:** apps that you still build, and internal tests.

---

## Publishing Strategies

Taskade Genesis has two publishing strategies:

| Strategy | How It Works | Best For |
|---|---|---|
| **Auto** | Taskade publishes each change at once | Tests, fast changes, and internal tools |
| **Manual** | You choose when to publish | Production apps, client-facing tools, and controlled releases |

Both strategies work on every plan, Free included. You can change the strategy at any time in the app settings. Auto is good while you build. Manual is good when real users use your app.

{% hint style="info" %}
**New apps save changes as drafts.** When Taskade EVE finishes the first build of a new app, the app goes live once at its link, unlisted. After that, Taskade saves each change as a draft. Visitors see a change only after you click **Publish** again. The header button reads **Update** when changes wait to go live, and **Live** when the app is up to date.
{% endhint %}

---

## Password Protection

Add a password to a published app (Pro and up):

1. Click **Publish**.
2. Under **Who can open it**, pick **Anyone with the password**.
3. Type your password.
4. Click **Save password**. On a draft, **Publish** also saves the typed password.
5. Read the line under the field. It says "Password protection is on".
6. Wait about a minute. Then test the password in a private browser window.
7. Send the password to your users through a secure channel.

To change the password:

1. Click **Change password** in the **Publish** panel.
2. Type the new password.
3. Click **Update password**.

To remove the password, pick **Anyone with the link** under **Who can open it**. If the app also needs sign-in, click **Remove password**.

| Feature | Detail |
|---|---|
| Available on | Pro and up |
| Protection level | The whole app |
| Password sharing | You send it yourself, through a secure channel |
| Also set in | **App settings → Launch → Publish**, for a draft app and a published app |

---

## Publish to the Taskade App Factory

Share your app with the whole Taskade community:

1. Under **More options**, turn on **Show in public listings**.
2. Click **Publish to Community**.
3. Wait for approval. Your app goes into the community approval queue.

After approval, your app shows in the public Taskade App Factory.

### Community App Metrics

Taskade tracks these numbers for each published community app:

| Metric | What It Measures |
|---|---|
| **Views** | How many people looked at your app |
| **Likes** | How many people liked your app |
| **Installs** | How many people cloned your app |
| **Intelligence Score** | How complete the Workspace DNA of your app is (0–100) |

> **Community status:** Pending → Approved or Rejected. You can withdraw your app at any time.

---

## Clone and Remix Apps

A clone is the fastest way to start. You copy a working app to your workspace and change it. You do not start from a blank prompt. Browse apps to clone in the Taskade App Factory at [taskade.com/apps](https://www.taskade.com/apps) and in [Taskade's official kits](https://www.taskade.com/apps/official).

A public app is not cloneable by default. People can clone an app only when its creator turns on **Let others clone** (**Free** or **Paid**). A kit with a **PRO** badge needs a paid plan to clone.

1. Open the public listing of the app.
2. Click **Clone**. This button shows only on a free or paid kit.
3. Read the list of contents that Taskade shows.
4. Choose the destination workspace.

Taskade then copies the app and its parts to your workspace.

A creator can archive a kit or the workspace behind it. Taskade can also take a kit down. In both cases, the kit page says that the app is no longer available, and it has no **Clone** button. A person who bought a paid kit can still open its page and clone it. A copy that you cloned before stays in your workspace.

### Let Others Clone Your App

1. Open **Publish → Let others clone**.
2. Pick **Free** or **Paid**. **Off** stops new clones.

In earlier versions, this control had the name "Share as Template" and then "Share as kit".

After you publish an app that you built, the dialog that says your app is live can show the line **Share as a free template in the app gallery**. Click **Add** to do the same as **Let others clone** set to **Free**. To hide the line for that app in this browser, click **x** (**Not now**). Only the app owner sees the line. An app that came from a paid or PRO kit can be added for people to open, but not to clone.

### What Gets Cloned

| Component | Cloned? | Notes |
|---|---|---|
| **UI / Frontend** | Yes | The full React app code |
| **Project databases** | Yes | Structure and data. A project that holds what visitors sent (form answers, sign-ups) ships without those rows. If the creator ships it as sample data, only the creator's own example rows come with it. A project where each person sees only their own entries never ships its rows |
| **AI agents** | Yes | Agent settings and knowledge references. Each tool keeps the creator's choice: visitors of a public agent can use it, or they cannot |
| **Access settings** | Yes | **Invite only** sign-up and **Private entries** with an owner field carry over to your copy. Test your copy with a second account before you share it |
| **Automations** | Yes | The automation steps. Taskade does not copy connected accounts, so connect your own |
| **Secrets** | No | Connected accounts and secrets stay with the creator |
| **Taskade EVE memory** | No | Taskade does not copy the Taskade EVE memory projects of the creator |
| **Media files** | Yes | Images and uploads |
| **Custom domain** | No | Connect your own domain |
| **Analytics data** | No | Your copy starts with new metrics |
| **Passwords** | No | Set your own password |

---

## Prefilled Taskade Genesis Links

You can share a link that opens Taskade Genesis with an app description in the prompt box. The recipient then builds the app with one click and does not type the idea again.

**Link format:**

```
https://www.taskade.com/create?input=YOUR_APP_DESCRIPTION
```

The link opens Taskade Genesis with the description in the prompt box. The recipient can edit the description first. The `input` value is URL-encoded (a space becomes `%20`). Most browsers encode it automatically when you copy the link from the address bar.

{% hint style="info" %}
A specific description gives better results. "Create a restaurant reservation system with table availability, guest preferences, and confirmation emails" works much better than "Build a booking app." A very long description can go over the URL length limit of a browser.
{% endhint %}

---

## Paid Apps

With Taskade Genesis, creators can sell original apps as paid App Kits. Buyers pay first, then get their own private copy.

### How It Works

| Step | What Happens |
|---|---|
| **The creator sets a price** | In the **Publish** panel of the app, open **Let others clone**, choose **Paid**, type the price, and click **Put on sale**. Then finish the payout setup in **Earnings**. |
| **A buyer finds the app** | The app shows in the Taskade App Factory, or at a direct link, with a price tag. |
| **The buyer pays through Stripe** | Stripe runs the checkout. Taskade does not store payment details. |
| **The buyer gets a private copy** | After the payment, Taskade clones the app into the workspace of the buyer. |

### Key Rules for Paid App Copies

| Rule | Detail |
|---|---|
| **Scope** | A cloned paid app stays in the workspace of the buyer only. |
| **Re-selling** | Buyers can change and publish their copy. They cannot sell it as their original work. |
| **Clone ancestry** | Taskade links each paid copy to the original app and its creator. |
| **Sample rows** | When you check a project that also takes visitor rows, the kit ships your rows only. A row that a visitor, a form, or an automation adds after you checked the project stays out of every new kit version. |
| **Payouts** | Read **Earnings** for the current payout terms. |

{% hint style="info" %}
A paid app does not limit how the buyer changes or extends it in their own workspace. Nobody can sell an app that they cloned from another creator as original work. This rule protects the rights of creators.
{% endhint %}

---

## Custom Domains

Connect your own domain to a published Taskade Genesis app:

| Feature | Detail |
|---|---|
| **Available on** | Pro (up to 10 per workspace), Business and up (unlimited) |
| **Setup method** | A CNAME record that points to `external.taskade.com`, plus a short SSL record that Taskade gives you. You can also buy a domain inside Taskade |
| **SSL** | Automatic |
| **Settings** | App settings → Launch → Domains |

1. Open **App settings** → **Launch** → **Domains**.
2. Under **Connect a domain you own**, click **Connect**.
3. In **Your domain**, type your custom domain, for example `app.yourcompany.com`.
4. Add the CNAME record and the SSL record to your DNS provider.
5. Wait for DNS propagation. It can take up to 48 hours.

Taskade then provisions the SSL certificate automatically. To buy a new domain instead, click **Shop domains** under **Buy a brand-new domain**.

---

## Advanced Sharing Options

| Feature | Description | Plan |
|---|---|---|
| **Direct link** | Copy and share the app URL | All |
| **Embed** | Put the app in your website or blog with an iframe | All |
| **Social sharing** | Share on LinkedIn, Twitter, Reddit, or Facebook | All |
| **SEO settings** | Custom meta title, description, and Open Graph image | Business+ |
| **Custom colors** | A color theme for your brand | Business+ |
| **Remove Taskade badge** | Hide the "Powered by Taskade" badge | All paid plans |
| **App sign-in** | App Users sign in to your app ([GenesisAuth](genesis-auth.md)) | All |

---

## Embedding Your App

You can put a published Taskade Genesis app into an external website, blog, or documentation page with an iframe.

### Getting the Embed Code

1. Open your published app in Taskade.
2. Click **Publish**.
3. Click the embed button (`</>`) next to the app address, or click **Copy Embed Code**.
4. Paste the `<iframe>` tag into the HTML of your page.

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
| `width` | `100%` | The frame fills its container on all screen sizes |
| `min-height` | `600px` (adjust to content) | The frame does not collapse |
| `border` | `none` | The default iframe border goes away |
| `allowfullscreen` | present | Modals and full-screen views work inside the app |

{% hint style="info" %}
If your site has a `Content-Security-Policy` with `frame-ancestors`, add `taskade.com` (or your custom domain) to the list of allowed origins. If the CSP blocks the frame, the user sees a blank panel and no error.
{% endhint %}

---

## SEO Customization

Taskade Genesis apps support custom search and social data. Then people can find your published app, and a shared link looks good.

### How to Set SEO Fields

1. Open **App settings → Launch → Branding**.
2. Read the **SEO Health** checklist.
3. Fill in the fields in the table that follows. You need Business and up to edit them.
4. Save and publish again, or let Auto publish the change.

| Field | What It Controls | Tips |
|---|---|---|
| **Meta title** | The `<title>` tag and the browser tab label | Use fewer than about 60 characters, so search results do not cut it |
| **Meta description** | The text in search results | Use about 150 characters. Say what the app does and who it is for |
| **Social image** | The preview image on social shares (LinkedIn, X/Twitter, Slack, and more) | Use 1200 × 630 px. Paste a full `https://` address. If you leave it blank, Taskade uses a live screenshot of your app |

{% hint style="info" %}
The social image field takes a full `https://` address. If you leave it blank or type a relative path, Taskade uses a live screenshot of your app as the social preview.
{% endhint %}

---

## White-Label Branding

Paid workspaces can hide the Taskade badge on published apps. Custom app colors need Business and up.

### How to Configure White-Label Options

1. Click **Publish** to find **Show Taskade badge**, or open **App settings → Launch → Branding**.
2. Set the options in the table that follows, and save.

| Option | What It Does |
|---|---|
| **Show Taskade badge** | Turn it off to hide the "Powered by Taskade" badge on the published app (all paid plans) |
| **Favicon upload** | Replaces the default Taskade favicon with your own `.ico` or `.png` file |
| **Color theme** | Sets the primary and accent colors of the app to match your brand (Business and up) |

{% hint style="info" %}
White-label settings apply to the published app only. Workspace members still see the standard Taskade branding in the Taskade editor.
{% endhint %}

---

## App Sign-In (OIDC)

App sign-in uses OpenID Connect (OIDC), with Taskade as the identity provider. It is available on every plan. Turn it on so that visitors must have an account before they use the app. Read [GenesisAuth](genesis-auth.md).

Sign-in confirms who a visitor is. It does not hide other people's records by itself. To give each user only their own rows, turn on **Private entries** under **Publish → More options**. **Private entries** (private per-user data) is off by default. Read [Add Login & Roles](../run-your-business/add-login-and-roles.md#give-each-user-only-their-own-rows).

For your own team, workspace SSO/SAML is available on Business and up. Read [Account Management](../../account-management/README.md).

---

## Security Considerations

| Practice | Recommendation |
|---|---|
| **Sensitive data** | Do not publish an app that contains passwords, API keys, or personal data |
| **Private links** | Keep confidential apps unlisted, and pick **Each person signs in** |
| **Password protection** | Add a password for the whole app (Pro and up) as a quick shared lock |
| **Access review** | Examine regularly who has access to your published apps |
| **Automation credentials** | Integration credentials stay in the workspace. Published apps do not show them |
| **Old versions** | An old published version can contain data that you removed later. Use [Version History](../genesis/version-history.md) to examine old versions |

---

## Sharing Methods at a Glance

| Method | Who Can Open It | Best For |
|---|---|---|
| **Listed + Community** | Anyone | Templates and showcases |
| **Listed (no community)** | Anyone with the URL | Marketing pages |
| **Unlisted link** | Link holders | Client portals and partners |
| **Each person signs in** | Signed-in app users | Internal tools and portals |
| **Embed** | Website visitors | Blogs and documentation |
| **Paid** | Anyone, after purchase | Paid templates and premium apps. The buyer gets a private copy in their own workspace |

These rules apply to each method:

* **Clones**: People can clone the app only if **Let others clone** is on. An embed is not clonable. A paid app gives the buyer a paid copy.
* **Custom domain**: Pro and up. An embed does not use a custom domain.
* **Password**: Optional, on Pro and up.
* **Analytics**: Business and up.

---

## What's Next

| Guide | What You Learn |
|---|---|
| [Genesis Version History](../genesis/version-history.md) | See changes and restore earlier versions |
| [App Analytics](../genesis/app-analytics.md) | Look at visitor data and improve your app |
| [Create Your First App](../genesis/getting-started.md) | Build an app to publish |
| [Taskade AI Credits](https://www.taskade.com/learn/agents/ai-usage) | Learn the credit cost of app operations |
| [Sharing Best Practices](best-practices.md) | Tips for team work and app distribution |
| [Sharing FAQ](faq.md) | Common questions about publishing and access |
| [Developer Platform](../../apis-living-system-development/developer-home.md) | Publish and manage apps with the API |

---

_Step-by-step guides on taskade.com/learn: [Publish and Clone Your Apps](https://www.taskade.com/learn/genesis/publishing), [Builder Community & App Kits](https://www.taskade.com/learn/genesis/community-kits), [Sell Your Taskade Genesis App as an App Kit](https://www.taskade.com/learn/genesis/sell-app-kits)._
