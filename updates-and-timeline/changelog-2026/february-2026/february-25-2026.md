---
description: >-
  Taskade developer changelog — February 25, 2026.
---

# February 25, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Taskade Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

- **SAML SSO security patch (critical)** — the SAML library was upgraded to fix a forged-assertion / auth-bypass vulnerability affecting enterprise SSO. Enterprise SSO customers should ensure they are on the latest release.
- **Webhook CORS preflight handled** — inbound webhook endpoints now answer CORS preflight (OPTIONS) requests instead of erroring (wildcard for public webhooks, origin-restricted for app webhooks).
- **Parseable 413 errors** — the public API now returns JSON ({ok:false, message}) on oversized-body (HTTP 413) rejections instead of an HTML error page, so API/SDK clients get structured errors.
- **Relaxed ID validation** — public API output schemas no longer require UUID-format node IDs / pagination cursors, fixing 500s for callers using nanoid-style IDs.

See [Webhooks](../../../apis-living-system-development/webhooks.md) and [Authentication](../../../apis-living-system-development/developers/authentication.md).
