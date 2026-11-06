---
description: >-
  A go-live checklist for launching your Taskade Genesis business app to real users —
  secrets, logins, your domain, and credits, all in one place.
---

# Is your app production-ready? A go-live checklist

You described an app, shaped your data, and it works. Before you put it in front of real customers or your team, run this checklist. Each item links to the page that covers it in full — work top to bottom and you'll launch with confidence.

***

### Security

* [ ] **Secrets are vaulted, not hardcoded.** Any API key, token, or password your app uses lives in the secret vault — never pasted into a prompt or page. → [App Secrets](../space-apps-guide/app-secrets.md)
* [ ] **The publish guard passed.** Taskade Genesis blocks publishing if it spots a hardcoded credential; resolve any warning before launch. → [App Secrets](../space-apps-guide/app-secrets.md)

### Access & data

* [ ] **Login and roles are configured.** The right people can sign in, and the app shows each role the right screens. → [Add login and roles](add-login-and-roles.md)
* [ ] **Per-user data isolation is verified.** Sign-in alone does not hide other people's records. Turn on **Private entries**, then sign in as a test client and confirm they can see only their own record — never anyone else's. → [Add login and roles](add-login-and-roles.md)

### Domain & publishing

* [ ] **Your custom domain is live with HTTPS (Pro and up).** Your app loads at your own address with the padlock showing. → [Put your app on your own domain](../space-apps-guide/custom-domains.md)
* [ ] **Visibility and publish strategy are set correctly.** Under **Who can open it**, pick the link, a password, or each person signs in. Turn **Show in public listings** on or off — match it to who should reach the app. → [Publishing & cloning](../community-and-sharing/publish-and-clone.md)

### Cost & reliability

* [ ] **Auto Top-Up is enabled.** A customer-facing agent should never hit an out-of-credits screen mid-session — set a top-up so credits replenish automatically. → [Credits & billing](../../account-management/credits-and-billing.md)

### Final checks

* [ ] **Test data is purged.** Remove the dummy records you created while building.
* [ ] **A known-good version is noted** in Version history, so you can roll back if a later change misbehaves. → [Version history](../genesis/version-history.md)

***

{% hint style="success" %}
**You're ready to launch.** Every box checked means your app is secure, access-controlled, on your domain, and won't run out of credits in front of a customer.
{% endhint %}

## Next steps

* [From idea to live business — the 5 steps](from-idea-to-live-business.md)
* [Add login and roles to your app](add-login-and-roles.md)
* [Put your app on your own domain](../space-apps-guide/custom-domains.md)

---

_Step-by-step guide on taskade.com/learn: [Publish and Clone Your Apps](https://www.taskade.com/learn/genesis/publishing)._
