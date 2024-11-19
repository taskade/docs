---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# OAuth 2.0 Authentication

Authentication is a crucial aspect of ensuring the security and integrity of your interactions with our API. We provide two distinct methods for authentication: Personal Access Tokens and OAuth 2.0. This guide is designed to assist you in understanding and implementing OAuth 2.0.

## Overview

OAuth 2.0 is a widely-recognized protocol for authorization that enables third-party applications to obtain limited access to user accounts on an HTTP service. It's suitable for scenarios where you want to authorize applications to act on behalf of users or when you want more granular access controls.

## Endpoint URLs

* Authorization URL: [https://www.taskade.com/oauth2/authorize](https://www.taskade.com/oauth2/authorize)
* Access Token URL: [https://www.taskade.com/oauth2/token](https://www.taskade.com/oauth2/token)
* Refresh Token URL: [https://www.taskade.com/oauth2/token](https://www.taskade.com/oauth2/token)

## Steps to Set Up and Use OAuth 2.0:

1. **Register Your Application:**
   * Navigate to https://taskade.com/settings/password and scroll down to **OAuth 2.0 Apps**.
   * Provide the necessary details about your application to obtain client credentials (i.e., `Client ID` and `Client Secret`).
2. **Implement the OAuth 2.0 Flow:**
   * Depending on your application's needs, you might opt for one of the standard OAuth 2.0 flows: Authorization Code, Implicit, Client Credentials, or Resource Owner Password.
   * Redirect users to the provided authorization URL, where they'll grant your application permissions.
3. **Obtain Access Tokens:**
   * After receiving an authorization grant from the user, exchange it for an access token by making a request to our token endpoint.
4. **Using the Access Token in API Requests:**
   *   With the obtained access token, include it in the header of your API requests. Typically, this is done using the `Authorization` header. For example:

       ```makefile
       Authorization: Bearer YOUR_OAUTH2_ACCESS_TOKEN
       ```
5. **Token Refresh & Expiry:**
   * Access tokens obtained via OAuth 2.0 have a limited lifespan. Depending on our platform's configuration, you might need to periodically refresh these tokens. Ensure you handle token expiry and refresh scenarios in your application.

#### Note:

It's essential to follow best practices when implementing OAuth 2.0, especially when handling client secrets and redirect URIs, to ensure the security of your application and user data.
