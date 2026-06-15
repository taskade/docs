# January 29, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

### Space Agent Tool Calls v2 — Automation Actions as Agent Tools

Space Agents can now invoke **Automation Actions as callable tools** at inference time. The agent can resolve dynamic property options for automation actions mid-conversation, enabling agents to drive automations without requiring the user to pre-configure all parameters.

Key changes:
- Automation actions surface as agent tool definitions on the AI SDK backend.
- The agent system prompt is updated to describe how to select and invoke automation steps.
- Tool call results are rendered inline in the chat UI (v2 tool call display).

Relevant docs: [Automation Actions](../../../genesis-living-system-builder/automation/actions.md)

### Space Agents — Projects & Knowledge Retrieval

Agents now have access to **workspace projects and media knowledge** as first-class context sources:

- Agents can now search and retrieve content from files and media attached to a space.
- Project task data and entity lookups are exposed directly to the agent at query time.
- The agent system prompt is updated to describe how to reference project data in generated app context.

This means agents can answer questions grounded in your workspace's project tasks and uploaded knowledge files without manual retrieval steps.

Relevant docs: [Autonomous Agents](../../../apis-living-system-development/autonomous-agents.md)

### Public Agent v2 — Rebuilt Embed & Public Screen (shipped January 31)

The public/embedded agent experience is rebuilt as a **v2 screen** with a redesigned active-conversation view, a chat sidebar, and an embeddable customizer. Key developer-facing capabilities:

- **Parent-frame communication** — the embed exposes a customizer API to the parent window for same-origin iframes, allowing the host page to override agent preferences (background, timeout, branding) programmatically.
- **Conversation creation** — the embed automatically provisions a fresh conversation on load, compatible with the AI SDK persistent message store.
- The public agent route now resolves via `https://www.taskade.com/a/<id>` using the v2 screen.

Relevant docs: [API Guide](../../../apis-living-system-development/comprehensive-api-guide/README.md)

### Gmail Trigger — HTML Body Fallback

The Gmail automation trigger now falls back to the **HTML email body** when the plain-text body is unavailable. Previously, emails sent without a `text/plain` part produced empty trigger payloads. Automations that parse email content from the Gmail trigger are now more reliable for HTML-only senders.

### Agent Team Orchestrate — Anthropic Model Compatibility Fix

The Agent Team Orchestrate mode removes the conflicting `topP` parameter when using Anthropic models. The `topP` / `top_p` combination was rejected by the Anthropic API, causing orchestrated multi-agent runs to error. Agent teams using Anthropic models (Claude family) now complete orchestrated runs without parameter-conflict failures.

Relevant docs: [Autonomous Agents](../../../apis-living-system-development/autonomous-agents.md)

## Improvements & Fixes:

* Action and trigger search tags (`searchTags`) are now included in the automations menu, improving discoverability of connectors by keyword.
* Action and trigger descriptions have been rewritten for clarity across all connectors.
