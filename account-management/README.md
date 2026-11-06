---
description: >-
  Manage your Taskade account: update profile, invite members and set roles, handle billing and plans, AI credits, 2FA, SSO/SAML, and data export.
---

# Account Management

Manage your Taskade account, team, billing, and security settings.

## Your Account

### Profile & Settings

- **Update your profile**: Click your avatar (bottom-left) > Settings > Profile. Change your name, avatar, and display preferences.
- **Change your email**: Open Settings, enter the new address in the **Email** field, and click **Save**. The change is active after you click the confirmation link sent to the new address.
- **Change your password**: Settings > Password. Enter your current password, then set a new one.
- **Language & region**: Settings > Preferences. Choose your display language, date format, and time zone.
- **Dark mode**: Settings > Preferences > Theme. Choose Light, Dark, or System.

### Workspaces

- **Create a workspace**: Click the "+" button in the sidebar > New Workspace.
- **Switch workspaces**: Use the workspace switcher in the top-left corner.
- **Rename a workspace**: Workspace Settings > General > Workspace Name.
- **Delete a workspace**: Workspace Settings > General > Delete Workspace. This is permanent.

## Team Management

### Invite Members

1. Open Settings > Members.
2. Enter email addresses (comma-separated for multiple).
3. Choose a role (Editor, Checker, or Viewer).
4. Click Invite.

You can also click **Copy Invite Link** to share a link that people can use to join.

### Roles & Permissions

Taskade uses role-based access from Owner to Viewer.

| Role | What they can do |
|------|------------------|
| **Owner** | Full control: billing, settings, delete or transfer the workspace |
| **Admin** | Invite or remove members, change roles, manage billing, full editing access |
| **Editor** | Create and edit projects, run agents and automations |
| **Checker** | Complete assigned tasks, tick checklists, comment (paid plans) |
| **Viewer** | Read projects and leave comments |

### Remove Members

Settings > Members > click the **✕** icon next to the member.

## Billing & Plans

### Current Plans

| Plan | Price | AI Credits/mo |
|------|-------|--------------|
| **Free** | $0 | 0 (earn credits with referrals and invites) |
| **Starter** | $6/mo, billed annually | 10,000 |
| **Pro** | $10/mo billed annually, or $20 monthly | 50,000 |
| **Business** | $25/mo billed annually, or $50 monthly | 150,000 |
| **Max** | $100/mo billed annually, or $200 monthly | 400,000 |
| **Enterprise** | Custom (contact sales) | Custom |

Key features of each plan:

- **Free**: 2 members, 3 Taskade Genesis apps, 1 AI agent, 10 automation runs a month.
- **Starter**: 3 members, unlimited apps, premium integrations, hosted MCP access.
- **Pro**: 10 members, custom domains (up to 10), webhooks, your own AI key (BYOK), app bundle export.
- **Business**: Unlimited members, unlimited custom domains, SSO/SAML, app analytics, custom branding.
- **Max**: Everything in Business, with higher AI limits.
- **Enterprise**: Everything in Max, plus SCIM provisioning and the highest AI limits.

Full details: [taskade.com/pricing](https://www.taskade.com/pricing)

### Manage Your Subscription

- **Upgrade**: Settings > Billing > Change Plan.
- **Downgrade**: Settings > Billing > Change Plan. Changes take effect at the end of your current billing cycle.
- **Cancel**: Settings > Billing > Cancel Subscription. You keep access until the end of your paid period.
- **View invoices**: Settings > Billing > **Manage billing and invoices**.

### AI Credits

AI credits are consumed when you use AI features (agents, chat, automations with AI steps, Taskade Genesis app generation). The Monthly Credits of a paid plan reset each billing cycle. Extra Credits that you buy or earn do not expire. Check your usage on the [Credits page](https://www.taskade.com/settings/usage).

## Security

### Two-Factor Authentication (2FA)

1. Settings > Password > Two-Factor Authentication.
2. Click Configure, then Set up.
3. Scan the QR code with an authenticator app (Google Authenticator, Authy, etc.).
4. Enter the verification code to confirm.

### SSO / SAML (Business and up)

Business, Max, and Enterprise plans support Single Sign-On via:
- Azure Active Directory
- Google Workspace
- Okta
- Custom SAML 2.0 providers

To set it up, open Settings > Organization > SAML SSO. For help, contact [support@taskade.com](mailto:support@taskade.com).

### SCIM Provisioning (Enterprise)

Automate user provisioning and deprovisioning through your identity provider. SCIM is available on the Enterprise plan only.

## Data & Privacy

- **Export your data**: Click (...) on any project > Export > choose a format (Markdown or CSV).
- **Delete your account**: Cancel any paid plan first. Then open Settings, type your email in **Confirm Email**, and click **Delete Account**. This permanently removes all your data.

{% hint style="warning" %}
Account deletion is irreversible. Export any data you need before deleting your account.
{% endhint %}

## Need Help?

- [Contact Support](https://www.taskade.com/contact)
- [Community Forum](https://www.taskade.com/feedback)
- [Troubleshooting Guide](../help-and-support/comprehensive-troubleshooting-guide.md)

---

_Step-by-step guides on taskade.com/learn: [Compare Taskade Plans: Free to Enterprise (2026 Pricing)](https://www.taskade.com/learn/account/plan-matrix), [Roles and Permissions in Taskade](https://www.taskade.com/learn/account/roles-permissions), [Invite People to Your Workspace](https://www.taskade.com/learn/account/invite-members)._
