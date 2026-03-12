# Account Management

Manage your Taskade account, team, billing, and security settings.

## Your Account

### Profile & Settings

| Setting | Where to Find It |
|---------|-----------------|
| **Update profile** (name, avatar) | Click avatar (bottom-left) → Settings → Profile |
| **Change email** | Settings → Account → Email → verify via confirmation link |
| **Change password** | Settings → Account → Password |
| **Language & region** | Settings → Preferences → display language, date format, time zone |
| **Dark mode** | Settings → Preferences → Theme → Light, Dark, or System |

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
| **Free** | $0 | 1,000 | 1 workspace, 3 deployable apps, 500+ templates |
| **Starter** | $6/mo (annual) | 10,000 | 3 users, frontier AI models, file uploads |
| **Pro** | $16/mo (annual) | 50,000 | 10 users, 100+ integrations, background agents, 24/7 automations |
| **Business** | $40/mo (annual) | 150,000 | Unlimited users, custom domains, API access, advanced analytics |
| **Enterprise** | Custom | Custom | SSO/SAML, private cloud, dedicated support |

Full details: [taskade.com/pricing](https://www.taskade.com/pricing)

### Manage Your Subscription

- **Upgrade**: Settings > Billing > Change Plan.
- **Downgrade**: Settings > Billing > Change Plan. Changes take effect at the end of your current billing cycle.
- **Cancel**: Settings > Billing > Cancel Subscription. You keep access until the end of your paid period.
- **View invoices**: Settings > Billing > Invoices.

### AI Credits

AI credits are consumed when you use AI features (agents, chat, automations with AI steps, Genesis app generation). Credits reset monthly. Check your usage at Settings > Billing > Usage.

## Security

{% hint style="info" %}
**Keep your account secure.** Enable 2FA for all team members. Enterprise teams should use SSO/SAML to centralize access control.
{% endhint %}

### Two-Factor Authentication (2FA)

1. Settings > Account > Security.
2. Click Enable 2FA.
3. Scan the QR code with an authenticator app (Google Authenticator, Authy, etc.).
4. Enter the verification code to confirm.

### SSO / SAML (Enterprise)

Enterprise plans support Single Sign-On via:

| Provider | Protocol |
|----------|----------|
| **Azure Active Directory** | SAML 2.0 |
| **Google Workspace** | SAML 2.0 |
| **Okta** | SAML 2.0 |
| **Custom providers** | Any SAML 2.0 IdP |

Contact your account manager or [support@taskade.com](mailto:support@taskade.com) for SSO setup.

### SCIM Provisioning (Enterprise)

Automate user provisioning and deprovisioning through your identity provider. Available on Enterprise plans.

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
