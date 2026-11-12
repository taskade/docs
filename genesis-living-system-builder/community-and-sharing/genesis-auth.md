---
description: >-
  Add secure user accounts and sign-in to Taskade Genesis apps with GenesisAuth: no-code App Users on every plan, and custom-domain login.
---

# GenesisAuth

GenesisAuth gives each Taskade Genesis app real user accounts and secure sign-in. You write no code. You do not configure a sign-in service from another company, and you do not manage servers.

---

## What Is GenesisAuth

GenesisAuth is the sign-in system for apps that you build with Taskade Genesis. When you describe an app that needs user accounts, Taskade adds secure sign-in to the app. It also manages the sessions, the passwords, and the access control for you.

* **Built-in user accounts.** You do not connect Auth0 or Clerk, and you do not design a schema.
* **Sign-in component.** Taskade adds a ready sign-in screen to the app that it builds.
* **Grows with your app.** GenesisAuth keeps sessions, password hashes, and session tokens secure.
* **Many users in one app.** Each person who uses your app gets their own account.

---

## Turning Any App Into a Multi-User Product

You do not configure GenesisAuth by hand. You describe what you need:

1. In Taskade Genesis, describe your app in plain language. Use words such as:
   * *"a client portal where each client has their own dashboard"*
   * *"users can sign in to see their own habit streaks"*
   * *"a members-only knowledge base"*
2. Wait for Taskade EVE to build the app **with the sign-in component in place**.
3. Open the settings of the app and go to the **App Users** tab.

Your app then accepts sign-ups and sign-ins. Sign-in confirms who a visitor is. It does not hide the records of other people. To show each person only their own rows, turn on **Private entries** (row scoping, off by default). Then pick the owner field that matches each row to a login, and test with a second account. See [Give each user only their own rows](../run-your-business/add-login-and-roles.md#give-each-user-only-their-own-rows).

{% hint style="info" %}
If your first prompt does not add sign-in, you can add it later. Ask Taskade EVE to *"add sign-in for users"* while you edit the app.
{% endhint %}

{% hint style="success" %}
**Sign-in is always real.** Sometimes a build or an edit makes a login screen that does not sign people in. Taskade EVE finds that screen and replaces it with working, persistent sign-in. By default, it uses GenesisAuth. An app that keeps its own list of users gets secure hashed-credential storage. Taskade EVE tells you when it makes this repair.
{% endhint %}

---

## The App Users Tab

The **App Users** tab is in the settings of your Taskade Genesis app (**App settings → People & access → App users**). On this tab, you manage the people who use your app.

### What You Can Do

On the **App Users** tab, you can:

* See the list of the people who signed in to your app.
* Add a person by email with **Add person**. Taskade emails them a link to set a password.
* Choose who can sign up: **Anyone** or **Invite only**.
* Make a person an **Admin** or a **Member** of the app. A role decides what the app shows. It is not a data permission, with two narrow exceptions such as **Admins see every row** in **Private entries**. See [Give admins the full view](../run-your-business/add-login-and-roles.md#give-admins-the-full-view).
* Disable an account without deleting it, and enable it again later.
* Delete an account.

You do all of this with no code.

{% hint style="info" %}
The App Users tab is in Beta. App Users and app sign-in work on every plan, Free included. Send bug reports to [github.com/taskade/taskade/issues](https://github.com/taskade/taskade/issues).
{% endhint %}

---

## Workspace Single Sign-On

Workspace SSO (SAML) is company single sign-on for the members of your team inside Taskade. It is available on Business and up. See [Account Management](../../account-management/README.md).

* Workspace SSO is a different feature from GenesisAuth.
* Taskade workspace credentials do not open an app account. Each person who uses a published app signs in with an app account. This rule also applies to your teammates.
* For an internal tool, add each teammate on the **App Users** tab, or set **Who can sign up** to **Invite only**.

---

## Custom Domain Sign-In

GenesisAuth also works on apps that use your own domain.

* You do not configure more settings when you connect a custom domain.
* Session cookies and redirects work correctly on custom domains.
* Taskade made sign-in on custom domains more reliable.

{% hint style="success" %}
Use GenesisAuth together with a [custom domain](../space-apps-guide/custom-domains.md). Your users then get a product with your own brand and address.
{% endhint %}

---

## Access Control

GenesisAuth is one of several access controls. This table compares them:

| Control | What It Does | When to Use |
| --- | --- | --- |
| GenesisAuth (App Users) | Sign-in with an account for the people who use your app, on every plan | Each app with more than one user, internal tools included |
| Private entries (row scoping) | Shows each signed-in person only the rows that match their login. Off by default | Client portals, member areas |
| Workspace SSO | Company single sign-on for your team inside Taskade (Business and up). It does not sign people in to a published app | The Taskade accounts of your own team |
| Password-protected public links | One shared password for a link (Pro and up) | A quick preview with a lock |
| Listed / Unlisted | Controls if people can find the app (**Show in public listings**) | Share by link only, not in search |
| Public agent tool opt-out | Sensitive tools stay workspace-only | Published agents |

<figure><img src="../../.gitbook/assets/genesisauth-password-protection.gif" alt="" width="563"><figcaption></figcaption></figure>

---

## How It Works Internally

You do not need these details to use GenesisAuth. They help if you review the security model.

* **Token-based session management.** Sign-in makes a secure session token. The browser keeps it in an HTTP-only cookie.
* **Sessions persist across updates.** Signed-in users stay signed in after an app update. They do not sign in again.
* **No credentials in the app bundle.** An exported app bundle never holds the credentials or session tokens of your users. It holds only the app structure.
* **Per-app user isolation.** Each Taskade Genesis app has its own App Users list.

---

## Security Best Practices

* **Review exposed tools.** For a public agent, turn off the sensitive tools. People outside your workspace then cannot use them.
* **Disable instead of delete.** If you want to keep the history of a user but block access, disable the account.
* **Use a custom domain with TLS** for each production app that holds user data.
* **OIDC sign-in is hardened by default.** App sign-in runs on OIDC, with Taskade as the identity provider. PKCE is an OAuth security check. It stops a person from using a stolen sign-in code again. Taskade accepts only the S256 PKCE method. Taskade also makes sure that `redirect_uri` matches the origin of your app. See [App Sign-In (OIDC)](publish-and-clone.md#app-sign-in-oidc) and the [authentication guide](../../apis-living-system-development/developers/authentication.md).
* **Monitor sign-in activity** on the App Users tab and in the activity log of your workspace.
* **Rotate workspace tokens.** If you also give access to the app through the [Public API](../../apis-living-system-development/developers/authentication.md), rotate the tokens at regular intervals.

---

## Related

{% content-ref url="publish-and-clone.md" %}
[publish-and-clone.md](publish-and-clone.md)
{% endcontent-ref %}

{% content-ref url="../space-apps-guide/custom-domains.md" %}
[custom-domains.md](../space-apps-guide/custom-domains.md)
{% endcontent-ref %}

{% content-ref url="../../apis-living-system-development/developers/authentication.md" %}
[authentication.md](../../apis-living-system-development/developers/authentication.md)
{% endcontent-ref %}

---

_Step-by-step guides on taskade.com/learn: [GenesisAuth: Built-In Login for Your Apps](https://www.taskade.com/learn/genesis/genesis-auth), [App Users (Beta): End-User Management for Taskade Genesis Apps](https://www.taskade.com/learn/genesis/app-users)._
