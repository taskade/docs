---
description: >-
  Authenticate to the Taskade REST API, Action API, and hosted MCP with a personal access token or OAuth 2.0 with PKCE, then refresh tokens and fix auth errors.
---

# Taskade API Authentication

Send a **Bearer token** in the `Authorization` header on every request. REST API v1, Action API v2, and the MCP servers all accept it.

{% hint style="info" %}
**TL;DR:** To act as yourself, create a personal access token at [taskade.com/settings/api](https://www.taskade.com/settings/api) and send `Authorization: Bearer $TASKADE_TOKEN`. To act for other users, use OAuth 2.0 with PKCE. An access token lasts 1 hour, and each refresh returns a new refresh token.
{% endhint %}

## Before you start

- A Taskade account with a verified email address. Taskade does not create a token or an OAuth application for an unverified account.
- `curl` in a terminal. The PKCE example also uses `openssl`.
- For OAuth 2.0, a redirect URI that your app controls.

## Choose a credential

| If you are… | Use | How |
| --- | --- | --- |
| Writing a script, or running the local Workspace MCP server (`@taskade/mcp-server`) | **Personal access token** | `Authorization: Bearer tskdp_…` |
| Building a third-party app that acts on behalf of other users | **OAuth 2.0** (Authorization Code + PKCE) | Redirect flow |
| Connecting an interactive MCP client to the **hosted** server at `https://www.taskade.com/mcp` | **OAuth 2.0** | Best default. The MCP client handles sign-in and consent |
| Calling the **hosted** MCP from your own script, service, or client that can set headers | **Personal access token** | Send `Authorization: Bearer tskdp_…` directly |

---

## Personal access tokens

Personal access tokens authenticate requests as yourself. They work well for server scripts, the local Workspace MCP server, and early development.

### Create a token

1. Go to [taskade.com/settings/api](https://www.taskade.com/settings/api).
2. Go to **Personal access tokens** and click **Create token**.
3. Give the token a descriptive name.
4. Copy the token immediately. Taskade shows it **only once**.
5. Save the token in your terminal:

```bash
export TASKADE_TOKEN="tskdp_your_token_here"
```

A personal access token starts with the prefix `tskdp_`. You can hold up to **5 tokens** per account, and your email must be verified to create one.

> ⚠️
> A personal access token grants **full access to your account**. Treat it like a password.
>
> Never commit or share the token. Store it in an environment variable or secret manager.

### Use a token

Send it in the `Authorization` header on every request:

```bash
# REST API v1
curl -s https://www.taskade.com/api/v1/me/projects \
  -H "Authorization: Bearer $TASKADE_TOKEN"

# Action API v2
curl -s -X POST https://www.taskade.com/api/v2/listMyProjects \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{}'
```

A valid token returns `ok: true` and the projects that your account can open:

```json
{ "ok": true, "items": [{ "id": "Pj8sK2nV4wQx6ZbE", "name": "API quickstart" }] }
```

A missing, wrong, or revoked token returns `401`:

```json
{ "ok": false, "message": "Unauthorized", "code": "UNAUTHORIZED", "statusMessage": "Unauthorized" }
```

The local Workspace MCP server (`@taskade/mcp-server`) reads the token from the `TASKADE_API_KEY` environment variable, not from `TASKADE_TOKEN`. See [Workspace MCP](../workspace-mcp.md).

### Use a personal token with hosted MCP

The hosted endpoint at `https://www.taskade.com/mcp` accepts the same `tskdp_…` personal access token as the public APIs:

```http
POST https://www.taskade.com/mcp
Authorization: Bearer tskdp_your_token_here
Content-Type: application/json
```

Choose this option for a script, server process, CI job, or MCP client where you control the request headers.

The connection acts as your Taskade account. Personal tokens carry no OAuth scopes and grant their owner's access. Do not distribute them.

For Claude, Cursor, and other interactive clients with remote MCP OAuth support, prefer the OAuth flow. The flow keeps a full-account personal token out of the client. It also gives each user a separate consent flow.

---

## OAuth 2.0

Use OAuth 2.0 when your application acts **on behalf of other users**. Each user signs in and grants access.

Also use OAuth 2.0 for interactive clients that connect to hosted MCP. Header-controlled scripts can use a personal access token instead.

### Endpoints

| Purpose | URL |
| --- | --- |
| Authorization | `https://www.taskade.com/oauth2/authorize` |
| Token / Refresh | `https://www.taskade.com/oauth2/token` |
| Dynamic client registration | `https://www.taskade.com/oauth2/register` |
| Server metadata (RFC 8414) | `https://www.taskade.com/.well-known/oauth-authorization-server` |

### Register an application

Go to [taskade.com/settings/api](https://www.taskade.com/settings/api) → **OAuth2 Applications**. Click **Create application**, then register your app and set its redirect URI(s). Your email must be verified before you can create an application.

Taskade gives you a **Client ID** and **Client Secret**. Save them, and the redirect URI, in your terminal:

```bash
export CLIENT_ID="your_client_id"
export CLIENT_SECRET="your_client_secret"
export REDIRECT_URI="https://your-app.example.com/callback"
```

### Authorization Code flow (with PKCE)

Taskade supports the **Authorization Code** grant with **PKCE (S256)**, the recommended flow for both confidential and public clients.

```mermaid
sequenceDiagram
    participant App as Your App
    participant Taskade as www.taskade.com
    participant User as End User

    App->>Taskade: GET /oauth2/authorize?client_id&redirect_uri&code_challenge&scope
    Taskade->>User: Show consent screen
    User->>Taskade: Approve
    Taskade->>App: Redirect with authorization code
    App->>Taskade: POST /oauth2/token (code + code_verifier)
    Taskade->>App: access_token (1 hour) + refresh_token
    App->>Taskade: API request with Bearer access_token
```

1. **Redirect** the user to `/oauth2/authorize` with `client_id`, `redirect_uri`, `response_type=code`, `code_challenge`, and `code_challenge_method=S256`. If the token must reach the hosted MCP server, add `scope=mcp`. Taskade supports no other scope, and the REST and Action APIs ignore scope.
2. **Exchange** the returned `code` at `/oauth2/token` with `grant_type=authorization_code` and your `code_verifier`.
   - For confidential apps, also send `client_secret`.
   - For public clients, omit `client_secret`.
3. Store the **`access_token`** and **`refresh_token`**. The access token is valid for **1 hour**.

**Generate the PKCE pair.** Most implementation errors occur in this step:

```bash
# code_verifier: a high-entropy random string
code_verifier=$(openssl rand -base64 96 | tr -d '\n=+/' | cut -c1-64)

# code_challenge = BASE64URL( SHA256(code_verifier) )
code_challenge=$(printf '%s' "$code_verifier" \
  | openssl dgst -binary -sha256 \
  | openssl base64 | tr -d '=\n' | tr '+/' '-_')
```

Send `code_challenge` (with `code_challenge_method=S256`) on the authorize request. Then send the original `code_verifier` on the token exchange that follows.

### Exchange the code for tokens

Your redirect URI receives the authorization code in the `code` query parameter. Save it, then exchange it in the same terminal that holds `code_verifier`:

```bash
export AUTH_CODE="code_from_the_redirect"

curl -s -X POST https://www.taskade.com/oauth2/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=authorization_code" \
  -d "code=$AUTH_CODE" \
  -d "code_verifier=$code_verifier" \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET" \
  -d "redirect_uri=$REDIRECT_URI"
```

A public client omits the `client_secret` line. The response carries both tokens:

```json
{
  "access_token": "eyJhbGciOi…",
  "refresh_token": "…",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

Send `access_token` as `Authorization: Bearer <access_token>` on each API or MCP request.

### Refresh an expired token

Access tokens expire after one hour. Exchange the stored refresh token for a new pair:

```bash
export REFRESH_TOKEN="your_stored_refresh_token"

curl -s -X POST https://www.taskade.com/oauth2/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=refresh_token" \
  -d "refresh_token=$REFRESH_TOKEN" \
  -d "client_id=$CLIENT_ID" \
  -d "client_secret=$CLIENT_SECRET"
```

Every refresh request must send `client_id`. A confidential app must also send `client_secret`, the same as on the code exchange. A public client omits the `client_secret` line.

The response has the same shape as the code exchange. It carries a **new** `refresh_token`, and the old refresh token stops working:

```json
{
  "access_token": "eyJhbGciOi…",
  "refresh_token": "a_new_refresh_token",
  "expires_in": 3600,
  "token_type": "Bearer"
}
```

Store the new refresh token before you send the next request. Each refresh token works once:

```mermaid
sequenceDiagram
    participant App as Your app
    participant Taskade as Taskade token endpoint
    App->>Taskade: POST /oauth2/token with refresh token 1
    Taskade->>App: New access token and refresh token 2
    Note over App: Save refresh token 2 now
    App->>Taskade: POST /oauth2/token with refresh token 1 again
    Taskade->>App: 400 Refresh token not found
    App->>Taskade: POST /oauth2/token with refresh token 2
    Taskade->>App: New access token and refresh token 3
```

> ℹ️
> Taskade supports the `authorization_code` and `refresh_token` grants only. Taskade rejects `password`, `implicit`, and `client_credentials`.

### Scopes and the hosted MCP

When you use OAuth, the hosted MCP server at [https://www.taskade.com/mcp](../genesis-app-mcp.md) requires an access token with the **`mcp`** scope. When you add the server URL, MCP clients (Claude Desktop, Cursor, Claude Code) do this handshake automatically, with dynamic client registration.

Personal access tokens do not use OAuth scopes. If you set the `Authorization` header yourself, as shown earlier, use a personal token.

---

## Fix common errors

The token endpoint returns OAuth errors with status `400`, in the RFC 6749 shape. For example, an expired or reused code returns:

```json
{ "error": "invalid_grant", "error_description": "Grant not found" }
```

| What you see | Cause | Fix |
| --- | --- | --- |
| `"code": "UNAUTHORIZED"` on an API call | The token is missing, wrong, revoked, or expired | Send `Authorization: Bearer $TASKADE_TOKEN`, or refresh the OAuth access token. |
| `Cannot create more than 5 personal access tokens.` | An account holds 5 tokens maximum | Revoke a token that you do not use. |
| `"error_description": "Grant not found"` | The code is wrong, expired, already used, or sent with a different `redirect_uri` | Start the authorize step again. Send the same `redirect_uri` on both steps. |
| `"error_description": "Missing code_verifier"` | The token request has no `code_verifier` | Send the verifier that produced the `code_challenge`. |
| `"error_description": "Invalid code_verifier"` | The verifier does not match the `code_challenge` | Keep the verifier from the authorize step, and send it without changes. |
| `Invalid code_challenge_method` on the authorize request | The authorize request sent a `code_challenge` with a method other than `S256` | Send `code_challenge_method=S256`. |
| `"error_description": "Invalid client credentials"` | A confidential app sent no `client_secret`, or a wrong one, on the code exchange or the refresh | Send the `client_secret` of your OAuth app on both token requests. |
| `"code": "UNAUTHORIZED"` after the user reset the password | A password reset revokes every OAuth grant, access token, and personal access token of the account | Send the user through the authorize step again. |
| `"error_description": "Refresh token not found"` | The refresh token is wrong, or a newer one replaced it | Use the most recent `refresh_token`. If you lost it, send the user through the authorize step again. |

---

## Security best practices

- **Never expose tokens in client-side code.** Personal tokens grant full account access.
- **Use OAuth, not personal tokens,** for an app that more than one person uses.
- **Store refresh tokens encrypted at rest.** They are long-lived.
- **Rotate personal tokens** periodically. You can keep up to 5 active.
- **Always use HTTPS.**

## Next steps

- [Quickstart](https://www.taskade.com/docs/getting-started/quickstart): make your first call with a personal access token.
- [Personal access tokens](personal-tokens.md): limits and token management.
- [Action API guide](../api-v2-reference.md): call the API with the token you created.
- [Hosted MCP](../genesis-app-mcp.md): connect an MCP client with OAuth or a personal token.

---

_This page is also published at [taskade.com/docs/getting-started/authentication](https://www.taskade.com/docs/getting-started/authentication)._
