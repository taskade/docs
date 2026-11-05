---
description: >-
  Manage your Taskade account: update profile, invite members and set roles, handle billing and plans, AI credits, 2FA, SSO/SAML, and data export.
---

# Account Management

Manage your Taskade account, team, billing, and security settings.

## Your Account

### Profile & Settings

- **Update your profile**: Click your avatar (bottom-left) > Settings > Profile. Change your name, avatar, and display preferences.
- **Change your email**: Settings > Account > Email. Verify the new address via the confirmation link.
- **Change your password**: Settings > Account > Password. Enter your current password, then set a new one.
- **Language & region**: Settings > Preferences. Choose your display language, date format, and time zone.
- **Dark mode**: Settings > Preferences > Theme. Choose Light, Dark, or System.

### Workspaces

- **Create a workspace**: Click the "+" button in the sidebar > New Workspace.
- **Switch workspaces**: Use the workspace switcher in the top-left corner.
- **Rename a workspace**: Workspace Settings > General > Workspace Name.
- **Delete a workspace**: Workspace Settings > General > Delete Workspace. This is permanent.

## Team Management

### Invite Members

1. Open Workspace Settings > Members.
2. Enter email addresses (comma-separated for multiple).
3. Choose a role (Owner, Admin, Member, or Viewer).
4. Click Send Invite.

### Roles & Permissions

| Role | What they can do |
|------|------------------|
| **Owner** | Full control: billing, settings, delete workspace |
| **Admin** | Manage members, create/delete projects and agents |
| **Member** | Create and edit projects, use agents, run automations |
| **Viewer** | View-only access to projects |

### Remove Members

Workspace Settings > Members > click the three dots next to a member > Remove.

## Billing & Plans

### Current Plans

| Plan | Price | AI Credits/mo | Key Features |
|------|-------|--------------|--------------|
| **Free** | $0 | 0 (earn credits with referrals and invites) | 2 members, 3 Genesis apps, 1 AI agent, 10 automation runs a month |
| **Starter** | $6/mo, billed annually | 10,000 | 3 members, unlimited apps, premium integrations, hosted MCP access |
| **Pro** | $10/mo billed annually, or $20 monthly | 50,000 | 10 members, custom domains (up to 10), webhooks, your own AI key (BYOK), app bundle export |
| **Business** | $25/mo billed annually, or $50 monthly | 150,000 | Unlimited members, unlimited custom domains, SSO/SAML, app analytics, custom branding |
| **Max** | $100/mo billed annually, or $200 monthly | 400,000 | Everything in Business, with higher AI limits |
| **Enterprise** | Custom (contact sales) | Custom | Everything in Max, plus SCIM provisioning and the highest AI limits |

Full details: [taskade.com/pricing](https://www.taskade.com/pricing)

### Manage Your Subscription

- **Upgrade**: Settings > Billing > Change Plan.
- **Downgrade**: Settings > Billing > Change Plan. Changes take effect at the end of your current billing cycle.
- **Cancel**: Settings > Billing > Cancel Subscription. You keep access until the end of your paid period.
- **View invoices**: Settings > Billing > Invoices.

### AI Credits

AI credits are consumed when you use AI features (agents, chat, automations with AI steps, Taskade Genesis app generation). Credits reset monthly. Check your usage at Settings > Billing > Usage.

## Security

### Two-Factor Authentication (2FA)

1. Settings > Account > Security.
2. Click Enable 2FA.
3. Scan the QR code with an authenticator app (Google Authenticator, Authy, etc.).
4. Enter the verification code to confirm.

### SSO / SAML (Business and up)

Business, Max, and Enterprise plans support Single Sign-On via:
- Azure Active Directory
- Google Workspace
- Okta
- Custom SAML 2.0 providers

Contact your account manager or [support@taskade.com](mailto:support@taskade.com) for SSO setup.

### SCIM Provisioning (Enterprise)

Automate user provisioning and deprovisioning through your identity provider. SCIM is available on the Enterprise plan only.

## Data & Privacy

- **Export your data**: Click (...) on any project > Export > choose format (PDF, Markdown, Text).
- **Delete your account**: Settings > Account > Delete Account. This permanently removes all your data.

{% hint style="warning" %}
Account deletion is irreversible. Export any data you need before deleting your account.
{% endhint %}

## Need Help?

- [Contact Support](https://www.taskade.com/contact)
- [Community Forum](https://www.taskade.com/feedback)
- [Troubleshooting Guide](../help-and-support/comprehensive-troubleshooting-guide.md)
