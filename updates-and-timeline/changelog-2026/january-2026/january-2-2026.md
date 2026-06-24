# January 2, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Taskade Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

### Shopify — "Get Customer Order" Automation Action

A new **Get Customer Order** action is available in the Shopify integration, enabling automations to fetch order details for a given customer directly from a Shopify store. This expands the Shopify connector surface alongside the existing Shopify triggers and actions.

Relevant docs: [Automation Actions](../../../genesis-living-system-builder/automation/actions.md) · [Integrations](../../../genesis-living-system-builder/automation/integrations.md)

### Genesis App Authentication — Space Identities Foundation

An internal per-space identity data layer has been introduced to support **per-identity, per-space authentication records**. Each identity entry stores auth-method metadata (password hash, OAuth provider tokens, etc.) keyed by type. This is the foundational schema for upcoming Genesis app-level multi-auth flows — developers building apps with custom auth or per-user identity management will benefit when the feature becomes publicly configurable.

## Improvements & Fixes:

* Fixed a logical issue with AI credit calculation that could produce incorrect credit balances.
