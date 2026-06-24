# February 18, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Taskade Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

### Automation: Retry-After Header Support for 429 Responses

The automation workflow engine now reads the `Retry-After` header from upstream HTTP 429 responses and schedules the next retry at the time the external service requests, rather than using a fixed back-off interval. Both numeric-seconds (`Retry-After: 60`) and HTTP-date (`Retry-After: Wed, 18 Feb 2026 20:00:00 GMT`) formats are parsed.

This improves reliability for automations that call rate-limited external APIs (Shopify, Slack, etc.) without requiring any configuration change on your end.

***

### Automation: Flow-Enable Idempotency

Enabling an automation flow (`flowEnable`) is now idempotent — calling it when the flow is already active no longer throws an error. This removes a class of race conditions for integrations that programmatically toggle flows (e.g., via webhook-driven enable/disable cycles).

***

### Automation: Null-Byte Sanitization for Run Records

Automation run payloads are now sanitized before being persisted to the automation run store. Null bytes (`\x00`) embedded in webhook or external-API payloads previously caused silent write failures; they are now stripped at ingestion, preventing lost run records.

_(items 2–3 shipped February 17)_

See [Automation Actions](../../../genesis-living-system-builder/automation/actions.md) for the full action library.
