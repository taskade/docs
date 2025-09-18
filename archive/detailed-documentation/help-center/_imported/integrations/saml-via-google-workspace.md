---
title: "SAML via Google Workspace"
description: "Configure SAML authentication via Google Workspace for secure single sign-on."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/8958552-saml-via-google-workspace"
intercom_id: "8958552"
state: "published"
date_created: "1708097258"
date_updated: "1726051279"
date_imported: "2025-09-13T19:17:43.342Z"
---

Title: SAML via Google Workspace | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/8958552-saml-via-google-workspace

Markdown Content:
**What Is SAML?**
-----------------

SAML is an important security standard that allows Taskade users to log in securely without having to remember and manage multiple passwords. SAML can be set up with Okta, Google Workspace, Azure, and other identity providers. Follow the instructions below to configure SAML via Google Workspace.

**Configure with Google Workspace**
-----------------------------------

**Google Workspace Setup**
--------------------------

Go to the Google Workspace admin dashboard. In the sidebar, select "Web and mobile apps" under Apps. Click "Add app", then "Add custom SAML app".

[![Image 1: google-saml-1.png](https://taskade.intercom-attachments-7.com/i/o/965379053/b0d4af08ca1227c570b21775/12070383934611?expires=1757792700&signature=770ddcbb03dce14bea6e779f507e3f66279155fd76d129becfdc2f133988fddd&req=fSYiFc53nYRcFb4f3HP0gB%2Bl1iWwnAOFxKrL%2Bbrl%2FDngRNnnAln%2FpezTkaHW%0AbVBUImwUHXBdkGq7xg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379053/b0d4af08ca1227c570b21775/12070383934611?expires=1757792700&signature=770ddcbb03dce14bea6e779f507e3f66279155fd76d129becfdc2f133988fddd&req=fSYiFc53nYRcFb4f3HP0gB%2Bl1iWwnAOFxKrL%2Bbrl%2FDngRNnnAln%2FpezTkaHW%0AbVBUImwUHXBdkGq7xg%3D%3D%0A)

Enter "Taskade" under App name and upload a logo (optional). 

​

Click "Next" to continue.

[![Image 2: google-saml-2.png](https://taskade.intercom-attachments-7.com/i/o/965379054/87e8d2764d67a6bf665aff60/12070354890643?expires=1757792700&signature=55b0cd6578001da5ae69982c823e4b89029f961f39ed5caf4c15c263d90111f8&req=fSYiFc53nYRbFb4f3HP0gAHpsgy9v2c92QXtrhxmaIRz0EqgjII8Qx0wCgjh%0AdYBKyBCT54hSLYdEgg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379054/87e8d2764d67a6bf665aff60/12070354890643?expires=1757792700&signature=55b0cd6578001da5ae69982c823e4b89029f961f39ed5caf4c15c263d90111f8&req=fSYiFc53nYRbFb4f3HP0gAHpsgy9v2c92QXtrhxmaIRz0EqgjII8Qx0wCgjh%0AdYBKyBCT54hSLYdEgg%3D%3D%0A)

Save the SSO URL, Entity ID, and Certificate to a file somewhere. You'll need this information for Taskade setup. Click "Continue".

[![Image 3: google-saml-3.png](https://taskade.intercom-attachments-7.com/i/o/965379057/f47336c3d2c668d9257d48f0/12070355833491?expires=1757792700&signature=9d3b537ccf8d826b2f72f6d586efa954cfd158707b244d25f3899eb364a1b8cc&req=fSYiFc53nYRYFb4f3HP0gNF9OXbsIxwrgsnlSXnTDjHM9xEdducFKb5xBuWr%0Awu5uRRhDx5FTbCnAEA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379057/f47336c3d2c668d9257d48f0/12070355833491?expires=1757792700&signature=9d3b537ccf8d826b2f72f6d586efa954cfd158707b244d25f3899eb364a1b8cc&req=fSYiFc53nYRYFb4f3HP0gNF9OXbsIxwrgsnlSXnTDjHM9xEdducFKb5xBuWr%0Awu5uRRhDx5FTbCnAEA%3D%3D%0A)

On the next screen, enter the following information:

Click "Continue".

[![Image 4: google-saml-4.png](https://taskade.intercom-attachments-7.com/i/o/965379055/df98612df6c8adbb9b0c4947/12070471782163?expires=1757792700&signature=56d6f39634ec42c43cd4498435abe1f5deec6762b30a069610df3c6737ab7ab2&req=fSYiFc53nYRaFb4f3HP0gBq6JdosR5iCawnF2Rop4tPruE7bdc58DmM%2BtrOM%0AWEXQX5rUCx1bbgEZHg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379055/df98612df6c8adbb9b0c4947/12070471782163?expires=1757792700&signature=56d6f39634ec42c43cd4498435abe1f5deec6762b30a069610df3c6737ab7ab2&req=fSYiFc53nYRaFb4f3HP0gBq6JdosR5iCawnF2Rop4tPruE7bdc58DmM%2BtrOM%0AWEXQX5rUCx1bbgEZHg%3D%3D%0A)

Under "Google Directory attributes", select "Primary email" and "email" for "App attributes".

[![Image 5: google-saml-5.png](https://taskade.intercom-attachments-7.com/i/o/965379068/1153eb7542baeb293bf1a92d/12070409837331?expires=1757792700&signature=a09d3f5b6be0d10460e4d9fd770b0ff2c5990c95796d08265a35a12bbaac16e3&req=fSYiFc53nYdXFb4f3HP0gDZgsrhz4ZdaInVhZ6ZLtreJ29XzxbvEN6rsemMs%0AAiXqYmw3PGuBGevfyQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379068/1153eb7542baeb293bf1a92d/12070409837331?expires=1757792700&signature=a09d3f5b6be0d10460e4d9fd770b0ff2c5990c95796d08265a35a12bbaac16e3&req=fSYiFc53nYdXFb4f3HP0gDZgsrhz4ZdaInVhZ6ZLtreJ29XzxbvEN6rsemMs%0AAiXqYmw3PGuBGevfyQ%3D%3D%0A)

Click the arrow in the "User access" section to open a drop-down menu.

[![Image 6: google-saml-6.png](https://taskade.intercom-attachments-7.com/i/o/965379070/a4347025964a406b0b8aa9c1/12070478526099?expires=1757792700&signature=d2eff8fd99a410cedaa445b5bab75bd354e9f2f9ab7f0cd0568247cb2ad2565c&req=fSYiFc53nYZfFb4f3HP0gEvV247Zq5Y%2F9dc7mPmc6XWDq9%2BvJObVAr4gocHW%0AK7i4C4dQr1e4sE0GyQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379070/a4347025964a406b0b8aa9c1/12070478526099?expires=1757792700&signature=d2eff8fd99a410cedaa445b5bab75bd354e9f2f9ab7f0cd0568247cb2ad2565c&req=fSYiFc53nYZfFb4f3HP0gEvV247Zq5Y%2F9dc7mPmc6XWDq9%2BvJObVAr4gocHW%0AK7i4C4dQr1e4sE0GyQ%3D%3D%0A)

Choose "ON for everyone" in your Google Workspace Dashboard to enable SSO for all users. Click "Save" to confirm the changes.

[![Image 7: google-saml-7.png](https://taskade.intercom-attachments-7.com/i/o/965379072/e3c493fe2d3e6d03962c51be/12070480269075?expires=1757792700&signature=3fb6946b4866d431224a774695775c125afc797a1c81ccbe9f1531bb1a72671a&req=fSYiFc53nYZdFb4f3HP0gA4oOb%2BYjoW23jzGP4YmI8A0vRa%2BfQ22k9iwsfMj%0A2okdFLnMc9oKJH6uSw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379072/e3c493fe2d3e6d03962c51be/12070480269075?expires=1757792700&signature=3fb6946b4866d431224a774695775c125afc797a1c81ccbe9f1531bb1a72671a&req=fSYiFc53nYZdFb4f3HP0gA4oOb%2BYjoW23jzGP4YmI8A0vRa%2BfQ22k9iwsfMj%0A2okdFLnMc9oKJH6uSw%3D%3D%0A)

That concludes Google Workspace setup. Let's finish the process in Taskade.

**Taskade Setup**
-----------------

Anyone with an email address in your domain can now go to [https://taskade.com/login](https://taskade.com/login) and choose **Sign In with Single Sign-On** to sign in with Okta.

### **😊 Helpful Links**

* * *

Related Articles

[Edit a Workspace](https://help.taskade.com/en/articles/8958485-edit-a-workspace)[SAML via Azure AD](https://help.taskade.com/en/articles/8958554-saml-via-azure-ad)[SCIM via Azure AD](https://help.taskade.com/en/articles/8958555-scim-via-azure-ad)[SAML via Okta](https://help.taskade.com/en/articles/8958556-saml-via-okta)[SCIM via Okta](https://help.taskade.com/en/articles/8958557-scim-via-okta)
