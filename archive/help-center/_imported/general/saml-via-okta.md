---
title: "SAML via Okta"
description: "Implement SAML authentication via Okta for secure and convenient single sign-on."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/8958556-saml-via-okta"
intercom_id: "8958556"
state: "published"
date_created: "1708097262"
date_updated: "1726043339"
date_imported: "2025-09-13T19:17:20.097Z"
---

Title: SAML via Okta | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/8958556-saml-via-okta

Markdown Content:
**What Is SAML?**
-----------------

SAML is an important security standard that allows Taskade users to log in securely without remembering and managing multiple passwords. SAML can be set up with Okta, Azure, Google Workspace, and other identity providers. Follow the instructions below to configure SAML for your organization.

**Configure with Okta**
-----------------------

**Okta Setup**
--------------

Go to Applications on your Okta dashboard and select "Create App Integration."

[![Image 1: saml-okta-1a.png](https://taskade.intercom-attachments-7.com/i/o/965379348/440e82e8c1d0d9fa0d16adc8/12080871576083?expires=1757792700&signature=501dc8b82ea2cdb88fe2c71de55e91f1c54335c285adaf566fc1b581de430db7&req=fSYiFc53noVXFb4f3HP0gJ%2FTCMELmlwGtbpDQpxKe5yIlJ%2BrRzoLTZx0ZcYu%0AmPkI8X2minSsKCQF6A%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379348/440e82e8c1d0d9fa0d16adc8/12080871576083?expires=1757792700&signature=501dc8b82ea2cdb88fe2c71de55e91f1c54335c285adaf566fc1b581de430db7&req=fSYiFc53noVXFb4f3HP0gJ%2FTCMELmlwGtbpDQpxKe5yIlJ%2BrRzoLTZx0ZcYu%0AmPkI8X2minSsKCQF6A%3D%3D%0A)

Choose SAML 2.0 and click"Next."

[![Image 2: saml-okta-1.png](https://taskade.intercom-attachments-7.com/i/o/965379351/585605a9eb04a9fdcf82ff1a/12080789815187?expires=1757792700&signature=b8bc59b3077ba940fb59e266978f20c79f074e6d64a04601c00b5c20186a921b&req=fSYiFc53noReFb4f3HP0gE7r24IquFZK4zStEx%2BIGXhbbF0HVHt60cSTpsGN%0ArE9qAPpRS%2BQbPtHipg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379351/585605a9eb04a9fdcf82ff1a/12080789815187?expires=1757792700&signature=b8bc59b3077ba940fb59e266978f20c79f074e6d64a04601c00b5c20186a921b&req=fSYiFc53noReFb4f3HP0gE7r24IquFZK4zStEx%2BIGXhbbF0HVHt60cSTpsGN%0ArE9qAPpRS%2BQbPtHipg%3D%3D%0A)

In General Settings, Enter "Taskade" under "App name" and upload a logo (optional).

[![Image 3: saml-okta-2.png](https://taskade.intercom-attachments-7.com/i/o/965379350/54501716c17dea2b8f6287a6/12080867948307?expires=1757792700&signature=878139220cedc77d6c9f98262a0f53a71fed698479c32f96475f88e7f1d8a3f0&req=fSYiFc53noRfFb4f3HP0gIuqVH8j8V1lXed6hIE2Jl4szdVimwoESqoWHeMr%0A0kBDdJ%2FbjAYyoyT7kA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379350/54501716c17dea2b8f6287a6/12080867948307?expires=1757792700&signature=878139220cedc77d6c9f98262a0f53a71fed698479c32f96475f88e7f1d8a3f0&req=fSYiFc53noRfFb4f3HP0gIuqVH8j8V1lXed6hIE2Jl4szdVimwoESqoWHeMr%0A0kBDdJ%2FbjAYyoyT7kA%3D%3D%0A)

On the "Configure SAML" screen (section A), enter the following information:

[![Image 4: saml-okta-3.png](https://taskade.intercom-attachments-7.com/i/o/965379352/2bcc04ba9f2bd0083c665acc/12081006299155?expires=1757792700&signature=b5f6896ee06b12a2c39e50fb65d568bad6a9911e2c0f21947d35acd2be8212fd&req=fSYiFc53noRdFb4f3HP0gG1RRGnmyz3U143xjJl7%2F4f%2BlZiYwva4bj3Ji6gX%0AM4pqrdGCB44OQ8%2FjRw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379352/2bcc04ba9f2bd0083c665acc/12081006299155?expires=1757792700&signature=b5f6896ee06b12a2c39e50fb65d568bad6a9911e2c0f21947d35acd2be8212fd&req=fSYiFc53noRdFb4f3HP0gG1RRGnmyz3U143xjJl7%2F4f%2BlZiYwva4bj3Ji6gX%0AM4pqrdGCB44OQ8%2FjRw%3D%3D%0A)

Go to "Attribute Statements (optional)" and add the following details:

[![Image 5: saml-okta-4.png](https://taskade.intercom-attachments-7.com/i/o/965379363/c4142041289c676ab87381c1/12081067602835?expires=1757792700&signature=fd7e6609ddfd718581cad82de5b886df5e318255009edc1a2bb83a58e562cff8&req=fSYiFc53nodcFb4f3HP0gOJMilNDNzlOhRVb%2FWsTNm5FMLkdfZ1wMzc0wHcw%0ARppYRkKq0%2BPLXIsWMg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379363/c4142041289c676ab87381c1/12081067602835?expires=1757792700&signature=fd7e6609ddfd718581cad82de5b886df5e318255009edc1a2bb83a58e562cff8&req=fSYiFc53nodcFb4f3HP0gOJMilNDNzlOhRVb%2FWsTNm5FMLkdfZ1wMzc0wHcw%0ARppYRkKq0%2BPLXIsWMg%3D%3D%0A)

Once you're done, scroll down and click "Next." When prompted, select "I'm an Okta customer adding an internal app".

Once you're done, scroll down and click "Finish."

On the following page, find "SAML Setup" on the right and click "View SAML setup instructions." Keep this page open.

[![Image 6: saml-okta-5.png](https://taskade.intercom-attachments-7.com/i/o/965379364/b708ec767a7511ce7fa1834e/12081186823315?expires=1757792700&signature=ad8a60527aa0d506a73c3b45759e2c87ffeed63b0cab0b48bffc582017e3b9e2&req=fSYiFc53nodbFb4f3HP0gPn6xHAPGqKnoUoaqCRlA0OFCAXTf7hEO5GcKoeP%0AQotMz7l6%2B0qKKXAIqw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379364/b708ec767a7511ce7fa1834e/12081186823315?expires=1757792700&signature=ad8a60527aa0d506a73c3b45759e2c87ffeed63b0cab0b48bffc582017e3b9e2&req=fSYiFc53nodbFb4f3HP0gPn6xHAPGqKnoUoaqCRlA0OFCAXTf7hEO5GcKoeP%0AQotMz7l6%2B0qKKXAIqw%3D%3D%0A)

**Taskade Setup**
-----------------

Once you've configured SAML for your organization, ensure that Taskade is assigned to individuals or groups in your directory inside the Okta Dashboard.

Anyone with an email address in your business's domain can now go to **[https://taskade.com/login](https://taskade.com/login)** and choose "Sign In with Single Sign-On" to sign.

### **😊 Helpful Links**

* * *

Related Articles

[SAML via Google Workspace](https://help.taskade.com/en/articles/8958552-saml-via-google-workspace)[SAML via Azure AD](https://help.taskade.com/en/articles/8958554-saml-via-azure-ad)[SCIM via Azure AD](https://help.taskade.com/en/articles/8958555-scim-via-azure-ad)[SCIM via Okta](https://help.taskade.com/en/articles/8958557-scim-via-okta)[HTTP Request (Automation Action)](https://help.taskade.com/en/articles/9421110-http-request-automation-action)
