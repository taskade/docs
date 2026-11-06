---
description: >-
  Store API keys and tokens in a per-space vault, then reference them safely in Taskade Genesis app code — real credentials never leave the server.
---

# App Secrets & External API Calls

**Connect your Taskade Genesis app to third-party services — weather APIs, payment providers, CRMs, or any HTTP endpoint — without ever exposing credentials in your app's source code.**

{% hint style="info" %}
**App Secrets** are part of every Taskade Genesis app. The **Secrets** tab is in the app's settings, and only workspace Owners and Admins can manage secrets.
{% endhint %}

***

## What Are App Secrets?

App Secrets is a per-space credential vault found in your app's settings under **Developer → Secrets**. Each secret has two parts:

- **Key** (the alias) — a short name you choose (e.g., `MY_API_KEY`, `STRIPE_SECRET`, `WEATHER_TOKEN`)
- **Value** — the actual API key, token, or password

Once saved, the value is encrypted at rest and is never returned to the browser. Your Genesis app code references secrets only by their alias — the real value is substituted server-side at request time.

***

## Adding a Secret

1. Open your app's settings and go to **Developer → Secrets**.
2. Click **Add secret**.
3. Enter a **Key**, the alias your code uses (letters, numbers, dashes, dots, or underscores; no spaces; start with a letter or number).
4. Paste the **Value** (your API key or token).
5. Click **Save secret**.

The alias is now available to any code running inside that Genesis app.

{% hint style="warning" %}
Secret values are write-only after saving: Taskade never shows a saved value again. To rotate a credential, click **Edit secret** and enter the **New value** (leave it blank to keep the current one). The key stays the same, so your code references remain unchanged.
{% endhint %}

***

## Calling External APIs Safely

Genesis routes all outbound HTTP calls through a server-side proxy. When your app makes a request, the proxy scans the headers and body for `{{secret}}` placeholders and substitutes the real secret value (identified by the accompanying alias field) before the request leaves Taskade's infrastructure. The substituted value is never sent to the browser.

### Conceptual example

The following illustrates the placeholder pattern. This is not a specific SDK call — it shows the shape of what your Genesis app code would generate or reference when the proxy is configured.

```javascript
// CONCEPTUAL EXAMPLE — illustrates the {{secret}} substitution pattern
// Genesis app code sends this request description to the proxy
// Genesis routes this through its server-side proxy internally

const response = await fetch(/* <Genesis-managed proxy endpoint> */, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    url: "https://api.example.com/v1/data",
    method: "GET",
    headers: {
      // {{secret}} is the substitution token; which stored secret fills it
      // is determined by a separate alias field, e.g. secretAlias: 'MY_API_KEY'
      "Authorization": "Bearer {{secret}}"
    },
    secretAlias: "MY_API_KEY"
  })
});

const data = await response.json();
```

At request time the proxy resolves `secretAlias` to the stored secret and replaces `{{secret}}` in the outbound request with the real credential value. The browser bundle only ever contains the alias string, not the credential itself.

{% hint style="info" %}
The exact proxy surface is managed by Genesis. You describe the integration you need in plain English and Genesis generates the appropriate outbound call — the `{{secret}}` substitution happens automatically, with the target secret selected via the alias you specify.
{% endhint %}

***

## Security Model

| Layer | What Taskade does |
| ----- | ----------------- |
| **Storage** | Secret values are encrypted at rest; the raw value is never returned to the client after saving |
| **Substitution** | `{{secret}}` replacement happens server-side inside the proxy (the alias field selects which stored secret is used), never in the browser bundle |
| **SSRF protection** | The proxy blocks requests to internal network ranges and loopback addresses (e.g., `169.254.x.x`, `10.x.x.x`, `127.0.0.1`); destination-host allowlisting is being rolled out |
| **Response scrubbing** | Sensitive upstream response headers (e.g., `Set-Cookie` from the external API) are stripped before the response reaches your app |
| **Audit scope** | Secret access is scoped to the space where the secret is defined; other spaces cannot reference it |

***

## Publish Guard

Before Genesis publishes or deploys your app, it scans the app source for patterns that look like hardcoded credentials (long random strings in assignment statements, common key-prefix patterns, etc.).

If a potential hardcoded secret is detected, **publishing is blocked** and Genesis surfaces a warning identifying the suspicious line. To resolve it:

1. Move the credential to **Developer → Secrets** with an appropriate key.
2. Remove the hardcoded value from your source and call the upstream API through the proxy, with `secretAlias: 'YOUR_KEY'` and the `{{secret}}` placeholder where the credential goes.
3. Re-publish.

This guard runs on every publish attempt and cannot be bypassed — it is a safety rail, not an optional lint check.

***

## Best Practices

- **Use descriptive aliases** — `SENDGRID_API_KEY` is clearer than `KEY1` when you return to the project later.
- **One secret per credential** — avoid bundling multiple keys into a single secret value; granular secrets are easier to rotate.
- **Rotate regularly** — update the secret value in the vault; your app code references the alias and picks up the new value immediately.
- **Least privilege** — where the external API supports scoped tokens (read-only, single-resource, etc.), use the narrowest scope that your app requires.
- **Never log secret aliases in output** — even the alias name can hint at what services your app connects to.

---

_Step-by-step guide on taskade.com/learn: [Connect Your App to Outside Services](https://www.taskade.com/learn/genesis/app-secrets)._
