# February 16, 2026

{% hint style="info" %}
**Developer highlights.** This section tracks API, MCP, SDK, automation, and Taskade Genesis platform changes for developers. For the full product changelog see [taskade.com/changelog](https://www.taskade.com/changelog); for release newsletters see [taskade.com/blog/updates](https://www.taskade.com/blog/updates).
{% endhint %}

## What's New:

### Public API v2 — Preview

A new versioned public API surface (`/api/v2`) was introduced alongside the existing v1 REST API. The initial v2 routes cover:

- **`POST /api/v2/listSpaces`** — list workspaces the authenticated user belongs to, with optional name filter (`contains` / `equals`).
- **`POST /api/v2/listAgents`** — list agents in a given space, with optional name filter.
- **`POST /api/v2/promptAgent`** — send a prompt to a specific agent and stream the response.

The v2 API ships with its own OpenAPI spec. At launch the v2 routes were available in production alongside v1; a temporary production gate was applied on March 4 while the route set expanded, then lifted on April 10 when v2 reached general availability.

{% hint style="info" %}
The existing v1 API (`/api/v1`) is unaffected. All current integrations continue to work without changes.
{% endhint %}

See [API Reference](../../../apis-living-system-development/comprehensive-api-guide/README.md) for v1 endpoints that are currently in production.

***

### Experimental MCP v2 — Auto-Generated Tool Layer

The Taskade MCP server (`@taskade/mcp-server`) gained an OpenAPI code-generation pipeline that reads the live Taskade OpenAPI spec and emits a fully-typed MCP tool manifest. This means MCP tool definitions track the API automatically as new endpoints are added.

The server continues to accept `Authorization: Bearer <token>` and proxies calls to `https://www.taskade.com/api/v2`. This experimental build underpins the hosted MCP v2 that shipped on Feb 26 (see [February 27, 2026](./february-27-2026.md)).

See [Workspace MCP](../../../apis-living-system-development/workspace-mcp.md) and the open-source server at [github.com/taskade/mcp](https://github.com/taskade/mcp).
