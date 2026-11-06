---
description: >-
  Create a Taskade personal access token, send it as a Bearer token, and replace it when it leaks or after a password reset.
---

# Taskade Personal Access Tokens

Create a personal access token, then send it as a Bearer token on every request to the Taskade API. A token calls Taskade as you, with no OAuth 2.0 flow.

Taskade supports two credentials: personal access tokens and [OAuth 2.0](authentication.md). Use a personal access token for your own scripts and tools. Use OAuth 2.0 when your app acts for other Taskade users.

## Before you start

Make sure that your account is ready for a new token.

- A Taskade account with a verified email address. Taskade does not create a token for an unverified account.
- Fewer than 5 active tokens on the account.
- `curl` in a terminal.

## 1. Create a token

You get one token string. Taskade shows it only once.

1. Go to [taskade.com/settings/api](https://www.taskade.com/settings/api).
2. Scroll to **Personal access tokens**.
3. Click **Create token**.
4. Give the token a name, and click **Create**.
5. Copy the token.

## 2. Save the token in your terminal

Every example in these docs reads the token from `TASKADE_TOKEN`.

```bash
export TASKADE_TOKEN="tskdp_your_token_here"
```

{% hint style="warning" %}
**Warning:** Keep the token out of source code and out of the browser. Anyone with the token can use the API as you.
{% endhint %}

## 3. Send the token on a request

Put the token in the `Authorization` header of each API request.

```bash
curl -s https://www.taskade.com/api/v1/me/projects \
  -H "Authorization: Bearer $TASKADE_TOKEN"
```

A valid token returns `ok: true` and the projects that your account can open:

```json
{ "ok": true, "items": [{ "id": "Pj8sK2nV4wQx6ZbE", "name": "API quickstart" }] }
```

## Check the result

You are done when the request in step 3 returns `"ok": true`. A missing, wrong, or revoked token returns `401`:

```json
{ "ok": false, "message": "Unauthorized", "code": "UNAUTHORIZED", "statusMessage": "Unauthorized" }
```

## Replace a compromised token

If you think that a token is compromised, revoke it and create a new token immediately.

1. Go to [taskade.com/settings/api](https://www.taskade.com/settings/api).
2. Revoke the token in the **Personal access tokens** list.
3. Create a new token, as in step 1.
4. Replace the old value everywhere that you use it.

A password reset also revokes every personal access token and every OAuth app grant of the account. If you reset your password, create new tokens before your scripts run again.

## Where the token works

One token authenticates every developer surface. The Workspace MCP server reads it from a different variable.

| Surface | How to send the token |
| --- | --- |
| REST API v1 | `Authorization: Bearer $TASKADE_TOKEN` |
| Action API v2 | `Authorization: Bearer $TASKADE_TOKEN` |
| Hosted MCP (`https://www.taskade.com/mcp`), every paid plan | `Authorization: Bearer` header, from a client that sets its own headers |
| Workspace MCP (`@taskade/mcp-server`) | The `TASKADE_API_KEY` environment variable |

For OAuth 2.0 and the hosted MCP options, see [Authentication](authentication.md).

## Limits

These limits apply to every account.

| Limit | Value |
| --- | --- |
| Prefix | Every token starts with `tskdp_` |
| Visibility | Taskade shows the value once, at creation |
| Tokens per account | **5**. Taskade refuses a sixth with the message `Cannot create more than 5 personal access tokens.` |
| Scopes | **None**. A token grants everything that the owning account can reach |
| Email | Your account email must be verified before you can create a token |
| Password reset | A password reset revokes every personal access token of the account. Taskade sends an email that says so |

## Fix common errors

Match the message to a fix.

| What you see | Cause | Fix |
| --- | --- | --- |
| `"code": "UNAUTHORIZED"` | The token is missing, wrong, or revoked | Send `Authorization: Bearer $TASKADE_TOKEN`. Make sure that the variable is set in the same terminal. |
| `"code": "UNAUTHORIZED"` after a password reset | The password reset revoked every personal access token of the account | Create a new token, then replace the old value everywhere that you use it. |
| `Cannot create more than 5 personal access tokens.` | The account holds 5 tokens | Revoke a token that you do not use. |

## Next steps

- [Quickstart](https://www.taskade.com/docs/getting-started/quickstart): use the token to create a project and add a task.
- [Taskade API overview](api.md): every endpoint group that the token can call.
- [Authentication](authentication.md): use OAuth 2.0 when your app acts for other users.
- [Hosted MCP](../genesis-app-mcp.md): connect an MCP client with the token or with OAuth.

---

_This page is also published at [taskade.com/docs/getting-started/personal-tokens](https://www.taskade.com/docs/getting-started/personal-tokens)._
