---
description: >-
  A go-live checklist for launching your Taskade Genesis business app to real users —
  secrets, logins, your domain, and credits, all in one place.
---

# Is your app production-ready? A go-live checklist

Your app works. Before real customers or your team use it, do this checklist. Each item links to the page with the full steps. Start at the top and work down.

***

### Security

* [ ] **Keep secrets in the vault.** Put each API key, token, or password that your app uses in the secret vault. Do not paste a secret into a prompt or a page. → [App Secrets](../space-apps-guide/app-secrets.md)
* [ ] **Pass the publish guard.** Taskade Genesis stops a publish when it finds a credential in the code. Correct each warning before launch. → [App Secrets](../space-apps-guide/app-secrets.md)

### Access & data

* [ ] **Configure login and roles.** Make sure that the right people can sign in, and that each role sees the right screens. → [Add login and roles](add-login-and-roles.md)
* [ ] **Test the data for each user.** Sign-in alone does not hide other people's records. Turn on **Private entries**. Then sign in as a test client and make sure that the client sees only their own records. → [Add login and roles](add-login-and-roles.md)

### Domain & publishing

* [ ] **Make sure that your custom domain is live with HTTPS (Pro and up).** Open your app at your own address and look for the padlock. → [Put your app on your own domain](../space-apps-guide/custom-domains.md)
* [ ] **Set who can open the app.** Under **Who can open it**, pick the link, a password, or each person signs in. Then turn **Show in public listings** on or off for your audience. → [Publishing & cloning](../community-and-sharing/publish-and-clone.md)
* [ ] **Test the shared password (Pro and up).** If you picked **Anyone with the password**, click **Save password**. The line "Password protection is on" shows. Wait about a minute, then test the password in a private browser window. → [Publishing & cloning](../community-and-sharing/publish-and-clone.md)
* [ ] **Publish your latest changes.** On a new app, Taskade saves each change as a draft. If the publish status says **Changes not live yet**, click **Publish** again. → [Publishing & cloning](../community-and-sharing/publish-and-clone.md)

### Cost & reliability

* [ ] **Turn on Auto Top-Up.** Set a top-up so that your credits fill again automatically. Then a customer-facing agent does not stop with an out-of-credits screen. → [Credits & billing](../../account-management/credits-and-billing.md)

### Final checks

* [ ] **Delete the test data.** Remove the sample records that you made during the build.
* [ ] **Note a good version.** Find a version that works in Version history. If a later change causes a problem, you can roll back to it. → [Version history](../genesis/version-history.md)

***

{% hint style="success" %}
**You are ready to launch.** When you check each box, your app is secure, has access control, runs on your domain, and has credits for your customers.
{% endhint %}

## Next steps

* [From idea to live business — the 5 steps](from-idea-to-live-business.md)
* [Add login and roles to your app](add-login-and-roles.md)
* [Put your app on your own domain](../space-apps-guide/custom-domains.md)

---

_Step-by-step guide on taskade.com/learn: [Publish and Clone Your Apps](https://www.taskade.com/learn/genesis/publishing)._
