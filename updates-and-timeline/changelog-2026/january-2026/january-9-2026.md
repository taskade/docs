# January 9, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

### Email Trigger Reliability — Mailhook Schema Fix

The inbound email trigger (`mailhook`) schema now tolerates missing `commonHeaders.messageId` fields. Previously an absent `messageId` caused the automation trigger to fail schema validation and silently drop the email event. Automations using the **Email Received** trigger are now more resilient against non-standard email senders that omit the `Message-ID` header.

Relevant docs: [Automation Actions](../../../genesis-living-system-builder/automation/actions.md)

### Custom Domain — Health Check Middleware Fix

The Genesis custom-domain middleware now short-circuits AWS ELB health-check requests before they are processed by app routing logic. This resolves a class of errors that appeared in logs when load-balancer probes hit custom-domain endpoints, and improves reliability for apps deployed on custom domains.

Relevant docs: [Custom Domains](../../../genesis-living-system-builder/space-apps-guide/custom-domains.md)

### Knowledge & Memory — Unified Search Indexing Schema (Part 1)

The backend introduces a new **unified search indexing system** (a new internal indexing layer) that consolidates knowledge and memory retrieval under a single search index. This replaces the previous separate embeddings path and lays the groundwork for consistent cross-resource knowledge queries in agents. The legacy embeddings indexing path was removed as part of this migration (removed January 14).

Relevant docs: [Autonomous Agents](../../../apis-living-system-development/autonomous-agents.md)

## Improvements & Fixes:

* Fixed an infinite-loop condition that could occur when adding URL knowledge sources to an agent.
* SSO sign-in now extracts and pre-fills the user's display name during onboarding, reducing friction for identity-provider-backed workspaces (shipped January 7).
