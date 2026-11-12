---
description: >-
  Keep API keys and tokens in a safe store for each space, and use them in Taskade Genesis app code. The real credentials never leave the server.
---

# App Secrets & External API Calls

**Connect your Taskade Genesis app to other services: weather APIs, payment providers, CRMs or any HTTP endpoint. Your credentials never show in the source code of your app.**

{% hint style="info" %}
Each Taskade Genesis app has **App Secrets**. The **Secrets** tab is in the settings of the app. Only workspace Owners and Admins can manage secrets.
{% endhint %}

***

## What Are App Secrets?

App Secrets is a safe store for the credentials of one space. You find it in the settings of your app, under **Developer → Secrets**. Each secret has two parts:

- **Key** (the alias): a short name that you choose, for example `MY_API_KEY`, `STRIPE_SECRET` or `WEATHER_TOKEN`
- **Value**: the real API key, token or password

After you save a secret, Taskade encrypts the value and never sends it to the browser. Your Genesis app code uses only the alias of a secret. The server puts in the real value when the request goes out.

***

## Adding a Secret

1. Open the settings of your app and go to **Developer → Secrets**.
2. Click **Add secret**.
3. Enter a **Key**. This is the alias that your code uses.
4. Paste the **Value** (your API key or token).
5. Click **Save secret**.

A key can have letters, numbers, dashes, dots and underscores. A key cannot have spaces, and it must start with a letter or a number. After you save, all code in that Genesis app can use the alias.

{% hint style="warning" %}
After you save a secret, you cannot read its value again. Taskade never shows a saved value. To change a credential, click **Edit secret** and enter the **New value**. If you leave it empty, the current value stays. The key does not change, so your code does not change.
{% endhint %}

***

## Calling External APIs Safely

Genesis sends all outbound HTTP calls through a proxy on the server. The proxy finds the `{{secret}}` placeholders in the headers and body of each request. The alias field of the request tells the proxy which secret to use. The proxy puts in the real value before the request leaves Taskade. The browser never gets the real value.

### Conceptual example

This example shows the placeholder pattern. It is not an exact SDK call. It shows the type of code that your Genesis app makes or uses with the proxy.

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

When the request goes out, the proxy finds the stored secret for `secretAlias`. Then it replaces `{{secret}}` in the request with the real credential. The code in the browser holds only the alias, not the credential.

{% hint style="info" %}
Genesis manages the proxy. Describe the integration that you need in plain English, and Genesis writes the outbound call. The `{{secret}}` replacement occurs automatically. The alias that you give selects the secret.
{% endhint %}

***

## Security Model

| Layer | What Taskade does |
| ----- | ----------------- |
| **Storage** | Taskade encrypts secret values. After you save a value, Taskade never sends it back to the client. |
| **Substitution** | The proxy on the server replaces `{{secret}}`, never the browser. The alias field selects the stored secret. |
| **SSRF protection** | The proxy blocks requests to internal network ranges and loopback addresses (for example `169.254.x.x`, `10.x.x.x`, `127.0.0.1`). Taskade adds an allowlist of destination hosts in stages. |
| **Response scrubbing** | The proxy removes sensitive headers from the external response (for example `Set-Cookie`) before the response gets to your app. |
| **Audit scope** | A secret works only in the space where you made it. Other spaces cannot use it. |

***

## Publish Guard

Before Genesis publishes or deploys your app, it scans the source code for text that looks like a credential. Examples are long random strings in assignments and frequent key prefixes.

If Genesis finds a credential in the code, it **blocks the publish**. Genesis shows a warning that names the line. To correct it:

1. Move the credential to **Developer → Secrets** with a good key.
2. Remove the credential from your source code. Call the external API through the proxy, with `secretAlias: 'YOUR_KEY'` and the `{{secret}}` placeholder where the credential goes.
3. Publish again.

This guard runs on each publish, and you cannot skip it. It is a safety rule, not an optional check.

***

## Best Practices

- **Use clear aliases**: `SENDGRID_API_KEY` is clearer than `KEY1` when you open the project again later.
- **Use one secret for each credential**: Do not put many keys in one secret value. When each secret holds one key, it is faster to change a key.
- **Change credentials regularly**: Update the secret value in the store. Your app code uses the alias and gets the new value at once.
- **Give the smallest access**: If the external API has limited tokens (read-only, one resource), use the smallest access that your app needs.
- **Never write secret aliases in logs or output**: The alias name can show which services your app connects to.

---

_Step-by-step guide on taskade.com/learn: [Connect Your App to Outside Services](https://www.taskade.com/learn/genesis/app-secrets)._
