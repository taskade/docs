# Personal Tokens

Authentication is a crucial aspect of ensuring the security and integrity of your interactions with our API. We provide two distinct methods for authentication.

## Overview

Personal Access Tokens are unique strings that represent your authorization to access our API. They are designed for simple use-cases and for instances where full OAuth 2.0 flow might be unnecessary or too complex.

## Steps to Obtain and Use a Personal Access Token:

1. **Generate a Token:**
   * Navigate to [https://taskade.com/settings/password](https://taskade.com/settings/password) and scroll down to **Personal Access Tokens**.
   * Follow the on-screen instructions to create your personal access token.
2. **Using the Token in API Requests:**
   *   Once you have your token, include it in the header of your API requests. Typically, this is done using the `Authorization` header. For example:

       ```makefile
       Authorization: Bearer YOUR_PERSONAL_ACCESS_TOKEN
       ```
3. **Note:** Treat your personal access tokens with care. They are like passwords – anyone who has the token can access the API on your behalf. If you believe a token has been compromised, regenerate a new one immediately.
