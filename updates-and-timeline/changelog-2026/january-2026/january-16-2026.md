---
description: >-
  Taskade developer changelog — January 16, 2026.
---

# January 16, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Taskade Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

- **Agents migrate to the Vercel AI SDK** — Space, Public, and Project chat agents move off the internal engine onto the Vercel AI SDK backend, with parity for model selection, system prompt, tone/language, and title generation.
- **Persistent conversations** — agent chats are now persisted server-side; legacy conversations migrate to the new message format with backward compatibility.
- **Tool calls (function calling) v2 + conversation starters** — supported on the new backend, including for published/embedded public agents.

Build on agents via the [Developer Platform](../../../apis-living-system-development/developer-home.md).
