# February 27, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

### Hosted MCP v2 — OAuth 2.0 PKCE + Dynamic Client Registration

The hosted MCP server (`https://www.taskade.com/mcp`) was upgraded to the MCP 2025-11 Streamable HTTP transport and now supports full **OAuth 2.0 with PKCE** (Proof Key for Code Exchange, S256 method). Key changes for integrators:

- **Dynamic client registration** — a new endpoint at `POST /oauth2/register` allows MCP clients to self-register without a manual approval step. At launch, redirect URIs are restricted to `claude.ai` domains and localhost (127.0.0.1 / localhost) for CLI clients, as the allow-list is expanded.
- **PKCE-only public clients** — clients registered via `/oauth2/register` are issued as public PKCE clients (`token_endpoint_auth_method: none`, `pkce_required: true`). No client secret is needed.
- **Streamable HTTP sessions** — the MCP endpoint supports session-based Streamable HTTP (`POST /`, `GET /`, `DELETE /`) with per-session state. A `mcp-session-id` header is used to resume sessions.
- **Bearer token auth** — MCP requests authenticate with `Authorization: Bearer <your_pat_or_oauth2_token>`. Personal Access Tokens (PATs) and OAuth2 access tokens are both accepted.

{% hint style="info" %}
The production deployment fix (`fix(mcp): MCP server not connecting on staging/prod`) shipped alongside this release. If you experienced MCP connection failures before Feb 26, retry with the current endpoint.
{% endhint %}

See [Workspace MCP](../../../apis-living-system-development/workspace-mcp.md) and [Authentication](../../../apis-living-system-development/developers/authentication.md) for PAT and OAuth2 setup. Source: [github.com/taskade/mcp](https://github.com/taskade/mcp).

***

### New Automation Piece: Telegram Bot

A **Telegram Bot** automation piece is now available, adding 8 actions for sending and managing Telegram messages from automation workflows:

| Action | Description |
|---|---|
| `telegram.sendMessage` | Send a text message to a chat |
| `telegram.sendPhoto` | Send an image via URL or file ID |
| `telegram.sendDocument` | Send a document/file |
| `telegram.sendVideo` | Send a video |
| `telegram.editMessageText` | Edit an existing message |
| `telegram.deleteMessage` | Delete a message |
| `telegram.pinChatMessage` | Pin a message in a chat |
| `telegram.getChat` | Retrieve chat metadata |

Trigger a Telegram notification from any automation — connect your bot token in the Integrations panel to get started.

{% hint style="info" %}
**Note:** send/manage actions are available at launch; trigger support shipped in a later release.
{% endhint %}

See [Automation Integrations](../../../genesis-living-system-builder/automation/integrations.md) for the full integration library and [Integration Kit](https://github.com/taskade/integrations) for the open-source piece source.

***

### Automation: Webhook Signature Mismatch Diagnostics

When an inbound webhook's HMAC signature does not match, automation runs now emit a structured diagnostic log entry instead of a bare rejection. The log includes the expected vs. received signature lengths and the hashing algorithm used, making it easier to debug misconfigured webhook secrets without enabling verbose logging.

See [Webhooks](../../../apis-living-system-development/webhooks.md) for HMAC signing details.
