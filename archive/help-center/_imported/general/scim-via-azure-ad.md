---
title: "SCIM via Azure AD"
description: "Automate user provisioning and de-provisioning in Taskade with SCIM via Azure AD."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/8958555-scim-via-azure-ad"
intercom_id: "8958555"
state: "published"
date_created: "1708097261"
date_updated: "1726043246"
date_imported: "2025-09-13T19:17:27.061Z"
---

Title: SCIM via Azure AD | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/8958555-scim-via-azure-ad

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/8958555-scim-via-azure-ad#main-content)

Automate user provisioning and de-provisioning in Taskade with SCIM via Azure AD.

Updated over a year ago

**What Is SCIM?**
-----------------

SCIM is an open standard for automating user provisioning and de-provisioning in cloud-based applications. It simplifies user management by synchronizing user data across different applications and systems, ensuring access to cloud-based applications is always up-to-date and secure. The benefits of SCIM include improved efficiency, reduced administrative costs, and enhanced security.

**Configure SCIM in Taskade**
-----------------------------

**This feature is only available under our Enterprise Plan.**

The first step is to make sure you upgraded your workspace.

[![Image 1: step_1.png](https://taskade.intercom-attachments-7.com/i/o/965379225/ff12dc31d650aa4206d65cc9/22429162296595?expires=1757792700&signature=87b2d17dff9653ea7d5e1c96a3db5a06aa9bc1a3b0ea08b4e7535a883ea8a028&req=fSYiFc53n4NaFb4f3HP0gDw9k9KctomRlACeAUNuhAhmYhRcKJ2ggNvBcWSC%0AeQWYXgRe7YWm%2BcHFFA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379225/ff12dc31d650aa4206d65cc9/22429162296595?expires=1757792700&signature=87b2d17dff9653ea7d5e1c96a3db5a06aa9bc1a3b0ea08b4e7535a883ea8a028&req=fSYiFc53n4NaFb4f3HP0gDw9k9KctomRlACeAUNuhAhmYhRcKJ2ggNvBcWSC%0AeQWYXgRe7YWm%2BcHFFA%3D%3D%0A)

[![Image 2: step_2.png](https://taskade.intercom-attachments-7.com/i/o/965379226/a86cfbb360478c8d1654a09a/22429130794131?expires=1757792700&signature=6f14fca16dce78b22473f372f0acd44fadb8807e2a0832a35a77869a6eb8353b&req=fSYiFc53n4NZFb4f3HP0gI2bzLv3aXpRN0nqAPQXBRsg4o%2F2xh%2F0d7ASFN1O%0AvjMBsLHo7FML3TBpPg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379226/a86cfbb360478c8d1654a09a/22429130794131?expires=1757792700&signature=6f14fca16dce78b22473f372f0acd44fadb8807e2a0832a35a77869a6eb8353b&req=fSYiFc53n4NZFb4f3HP0gI2bzLv3aXpRN0nqAPQXBRsg4o%2F2xh%2F0d7ASFN1O%0AvjMBsLHo7FML3TBpPg%3D%3D%0A)

[![Image 3: step_7a.png](https://taskade.intercom-attachments-7.com/i/o/965379228/a5a56fe5569a1261d4a63f4f/16328059294483?expires=1757792700&signature=a50da6583cb069ea415eed2a6a8280e24710aa8333ab47e747469cde4068e08a&req=fSYiFc53n4NXFb4f3HP0gL8AnVmFqScdXRbtcN4NznZJ7jy0%2Bi23h6BWPZTF%0Ai7d597M1WhVJXD2IdQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379228/a5a56fe5569a1261d4a63f4f/16328059294483?expires=1757792700&signature=a50da6583cb069ea415eed2a6a8280e24710aa8333ab47e747469cde4068e08a&req=fSYiFc53n4NXFb4f3HP0gL8AnVmFqScdXRbtcN4NznZJ7jy0%2Bi23h6BWPZTF%0Ai7d597M1WhVJXD2IdQ%3D%3D%0A)

[![Image 4: step_1.png](https://taskade.intercom-attachments-7.com/i/o/965379230/000b0b5bf38cfd2a58c0cf60/16328099415955?expires=1757792700&signature=aa6bac9be85d3fe2fe197a7ed52e13b4f336507b44abf426c10446c82f3cc8c5&req=fSYiFc53n4JfFb4f3HP0gEVzymScDCj3eIUrRsIjonybpkp8BXRECeYL1S0j%0AUzij7o3OtBn4QWXFiQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379230/000b0b5bf38cfd2a58c0cf60/16328099415955?expires=1757792700&signature=aa6bac9be85d3fe2fe197a7ed52e13b4f336507b44abf426c10446c82f3cc8c5&req=fSYiFc53n4JfFb4f3HP0gEVzymScDCj3eIUrRsIjonybpkp8BXRECeYL1S0j%0AUzij7o3OtBn4QWXFiQ%3D%3D%0A)

Select **Enterprise Applications** and find Taskade among the list of applications.

[![Image 5: step_3.png](https://taskade.intercom-attachments-7.com/i/o/965379254/f5b16a90e5356952c085cc01/16328160900115?expires=1757792700&signature=a05e45d1f749d2cdaf3451ac9fd33ca57c30ddd7e6951bad83abf13998962f42&req=fSYiFc53n4RbFb4f3HP0gG0qrQWOdFaYeUoWWecGE%2FF67lkFiFGgTredm8Ra%0A48XR4vLEJ7pIaOliEg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379254/f5b16a90e5356952c085cc01/16328160900115?expires=1757792700&signature=a05e45d1f749d2cdaf3451ac9fd33ca57c30ddd7e6951bad83abf13998962f42&req=fSYiFc53n4RbFb4f3HP0gG0qrQWOdFaYeUoWWecGE%2FF67lkFiFGgTredm8Ra%0A48XR4vLEJ7pIaOliEg%3D%3D%0A)

[![Image 6: step_4.png](https://taskade.intercom-attachments-7.com/i/o/965379255/7edbd8ce8852183febaf0a25/16328160901395?expires=1757792700&signature=ece67d9d5e05b8335efc64330163de99124abf05dbe0117a10b00826bda8f069&req=fSYiFc53n4RaFb4f3HP0gKGUMmbGqvhwsqwF%2BDHCEVmZHjuRacCPa428SSdt%0Ab85melwVSchZTXzHsw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379255/7edbd8ce8852183febaf0a25/16328160901395?expires=1757792700&signature=ece67d9d5e05b8335efc64330163de99124abf05dbe0117a10b00826bda8f069&req=fSYiFc53n4RaFb4f3HP0gKGUMmbGqvhwsqwF%2BDHCEVmZHjuRacCPa428SSdt%0Ab85melwVSchZTXzHsw%3D%3D%0A)

[![Image 7: step_7b.png](https://taskade.intercom-attachments-7.com/i/o/965379256/73c1fee3c408a98c1397b3f6/16328321163795?expires=1757792700&signature=55f80321ed9332754dc2b1dcb425f9a6c7c07b5a644b6fecedeefc002d5ac609&req=fSYiFc53n4RZFb4f3HP0gGrEeUecWmz4k72McXjbkcBxE8qy9UIqHGHuSLTp%0AdcS1akuzqFKjGWSBPg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379256/73c1fee3c408a98c1397b3f6/16328321163795?expires=1757792700&signature=55f80321ed9332754dc2b1dcb425f9a6c7c07b5a644b6fecedeefc002d5ac609&req=fSYiFc53n4RZFb4f3HP0gGrEeUecWmz4k72McXjbkcBxE8qy9UIqHGHuSLTp%0AdcS1akuzqFKjGWSBPg%3D%3D%0A)

The following steps will guide you through provisioning groups.

[![Image 8: step_9.png](https://taskade.intercom-attachments-7.com/i/o/965379263/4fb0f138a04c50a47622f5b6/16328348929683?expires=1757792700&signature=21cc136bf859bcff69ea1525457ce5b4f5771041fc2c96ccef88992a587c07c8&req=fSYiFc53n4dcFb4f3HP0gPbBx8cjLE2gWpyEjj4vOS%2BOuZKdLsCGBkeGYM6b%0AEtcXiQ3axIt0qt2H%2BA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379263/4fb0f138a04c50a47622f5b6/16328348929683?expires=1757792700&signature=21cc136bf859bcff69ea1525457ce5b4f5771041fc2c96ccef88992a587c07c8&req=fSYiFc53n4dcFb4f3HP0gPbBx8cjLE2gWpyEjj4vOS%2BOuZKdLsCGBkeGYM6b%0AEtcXiQ3axIt0qt2H%2BA%3D%3D%0A)

Add a group you'd like to sync with your Taskade organization, then click **Assign**.

[![Image 9: step_10.png](https://taskade.intercom-attachments-7.com/i/o/965379272/6512558785a375403590650f/16328448826771?expires=1757792700&signature=250a4dccd6e2240471a1356ae7087a949c8c6e890b7989ad0b9a60e42ea9eeb4&req=fSYiFc53n4ZdFb4f3HP0gAYvzVnSw8JOMzI3IN8hzwvRSKo%2FxwNjYWJ54bLA%0A4VlitVhdutmux9qc5Q%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379272/6512558785a375403590650f/16328448826771?expires=1757792700&signature=250a4dccd6e2240471a1356ae7087a949c8c6e890b7989ad0b9a60e42ea9eeb4&req=fSYiFc53n4ZdFb4f3HP0gAYvzVnSw8JOMzI3IN8hzwvRSKo%2FxwNjYWJ54bLA%0A4VlitVhdutmux9qc5Q%3D%3D%0A)

[![Image 10: step_11.png](https://taskade.intercom-attachments-7.com/i/o/965379276/7bfdb889f17116873fc59101/16328448818451?expires=1757792700&signature=e8c87f7e5a5c5e74c46da682f0bb3ec27f25e99a23f51779e71b8d11a081ccb8&req=fSYiFc53n4ZZFb4f3HP0gJh8Yl%2BcYUdqIFUOM0u34K9bYq0TxT0d1dDWwSYt%0Aq%2BcMD5OhvZpjO8gNRw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379276/7bfdb889f17116873fc59101/16328448818451?expires=1757792700&signature=e8c87f7e5a5c5e74c46da682f0bb3ec27f25e99a23f51779e71b8d11a081ccb8&req=fSYiFc53n4ZZFb4f3HP0gJh8Yl%2BcYUdqIFUOM0u34K9bYq0TxT0d1dDWwSYt%0Aq%2BcMD5OhvZpjO8gNRw%3D%3D%0A)

Select **Provision on demand** and choose the group you recently assigned.

[![Image 11: step_13.png](https://taskade.intercom-attachments-7.com/i/o/965379280/8173855ee87f85d429fa2777/16328514969107?expires=1757792700&signature=14861fa05f2a4dc2f08b5b3f6b0444828f99c97ec86cdf885471330d398d4593&req=fSYiFc53n4lfFb4f3HP0gHCDHnOKkSGQ21KaId4fHPsoaxFx93ijgpyLrYi9%0AX5BQkbEy6yqwRUlHtA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379280/8173855ee87f85d429fa2777/16328514969107?expires=1757792700&signature=14861fa05f2a4dc2f08b5b3f6b0444828f99c97ec86cdf885471330d398d4593&req=fSYiFc53n4lfFb4f3HP0gHCDHnOKkSGQ21KaId4fHPsoaxFx93ijgpyLrYi9%0AX5BQkbEy6yqwRUlHtA%3D%3D%0A)

Choose all the group members, then click **Provision**.

[![Image 12: step_14.png](https://taskade.intercom-attachments-7.com/i/o/965379279/249b0a30e2f09e33edb134f0/16328555016211?expires=1757792700&signature=7b099d17ae61d4a8ef6c7fac1a4b19f5c53bdd94d4d7c360597a2257e53513b8&req=fSYiFc53n4ZWFb4f3HP0gLRUF889GW%2Bpb3ZKMAK6USL5eXDqJ344qLzyQD4J%0AaYduA%2Fgbn3YrSgVvug%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379279/249b0a30e2f09e33edb134f0/16328555016211?expires=1757792700&signature=7b099d17ae61d4a8ef6c7fac1a4b19f5c53bdd94d4d7c360597a2257e53513b8&req=fSYiFc53n4ZWFb4f3HP0gLRUF889GW%2Bpb3ZKMAK6USL5eXDqJ344qLzyQD4J%0AaYduA%2Fgbn3YrSgVvug%3D%3D%0A)

When you open Taskade, the group you provisioned will appear in the **Organization** tab.

[![Image 13: step_15.png](https://taskade.intercom-attachments-7.com/i/o/965379292/b9edde91278a9c46efc792f3/16328557950611?expires=1757792700&signature=0f44618fa446172cee2d8657aa9d1c36e54cfc7b4fd93595e431b907cfee5caf&req=fSYiFc53n4hdFb4f3HP0gHbJg7%2BX30h83YkTrJ9bga7JWp%2FKNhN06S9W3r5g%0AZ8Rh45wcT6zAjeqTYA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379292/b9edde91278a9c46efc792f3/16328557950611?expires=1757792700&signature=0f44618fa446172cee2d8657aa9d1c36e54cfc7b4fd93595e431b907cfee5caf&req=fSYiFc53n4hdFb4f3HP0gHbJg7%2BX30h83YkTrJ9bga7JWp%2FKNhN06S9W3r5g%0AZ8Rh45wcT6zAjeqTYA%3D%3D%0A)

**Provision Folders**
---------------------

You can provision groups for both folders and workspaces. To begin with folders, navigate to any folder within a workspace that's part of your organization. Click on the folder name in the header, and choose **Edit** from the drop-down menu.

[![Image 14: step_16.png](https://taskade.intercom-attachments-7.com/i/o/965379291/789df04d55880d3484ab51e3/16328734102291?expires=1757792700&signature=6d6b87a0158569d0b862623fdfda602b471f62d05cf204854fcce6e8e8a6f4d7&req=fSYiFc53n4heFb4f3HP0gJJqPWsoh1mjNHM%2BQfGhtsDIAtAajCkwSjUUSiR9%0Ad5NI9HDcJ6JeiZfKZg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379291/789df04d55880d3484ab51e3/16328734102291?expires=1757792700&signature=6d6b87a0158569d0b862623fdfda602b471f62d05cf204854fcce6e8e8a6f4d7&req=fSYiFc53n4heFb4f3HP0gJJqPWsoh1mjNHM%2BQfGhtsDIAtAajCkwSjUUSiR9%0Ad5NI9HDcJ6JeiZfKZg%3D%3D%0A)

[![Image 15: step_17.png](https://taskade.intercom-attachments-7.com/i/o/965379297/fe976e239ab571c5f9df4f3f/16328734429459?expires=1757792700&signature=397150e2e3c97b75b82f7946ac880e4ea433e1a37670b0bd7ccb24683e783641&req=fSYiFc53n4hYFb4f3HP0gJnJkBCl%2FYZsr8TIZI5dsyX95EpNreYYMYNSPT4f%0AtqVl0WKLqIJE1%2BAfBQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379297/fe976e239ab571c5f9df4f3f/16328734429459?expires=1757792700&signature=397150e2e3c97b75b82f7946ac880e4ea433e1a37670b0bd7ccb24683e783641&req=fSYiFc53n4hYFb4f3HP0gJnJkBCl%2FYZsr8TIZI5dsyX95EpNreYYMYNSPT4f%0AtqVl0WKLqIJE1%2BAfBQ%3D%3D%0A)

You can provision the Azure group within the **Edit Folder** menu. Determine the desired group access level from **Editor**, **Viewer**, or **Checker**.

**Provision Workspaces**
------------------------

[![Image 16: step_18.png](https://taskade.intercom-attachments-7.com/i/o/965379296/bd54be9de05751ced0478689/16328816170003?expires=1757792700&signature=4b8f37c8b222e5860da93a55ee1e4253d6b0e52cb3bae0644e12bf89af9d3f1c&req=fSYiFc53n4hZFb4f3HP0gMwfwtU781kCNKj4Fxn2AHo%2F6BE1YHDGZUiLWFr7%0An%2BzjKSKmsuGVzit0iw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379296/bd54be9de05751ced0478689/16328816170003?expires=1757792700&signature=4b8f37c8b222e5860da93a55ee1e4253d6b0e52cb3bae0644e12bf89af9d3f1c&req=fSYiFc53n4hZFb4f3HP0gMwfwtU781kCNKj4Fxn2AHo%2F6BE1YHDGZUiLWFr7%0An%2BzjKSKmsuGVzit0iw%3D%3D%0A)

[![Image 17: step_19.png](https://taskade.intercom-attachments-7.com/i/o/965379305/2968c9b6e4c770ee4581cd1c/16328829658515?expires=1757792700&signature=963ed2af15e543d7e39b869c0bafb3b178326bd2dd8c8356d031202266383da9&req=fSYiFc53noFaFb4f3HP0gLzMhrct93vNDLnsLGojcZ5fucB3eaxpbuSzESsf%0AIf3%2B3d9Zk4JRaB5uIw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379305/2968c9b6e4c770ee4581cd1c/16328829658515?expires=1757792700&signature=963ed2af15e543d7e39b869c0bafb3b178326bd2dd8c8356d031202266383da9&req=fSYiFc53noFaFb4f3HP0gLzMhrct93vNDLnsLGojcZ5fucB3eaxpbuSzESsf%0AIf3%2B3d9Zk4JRaB5uIw%3D%3D%0A)

[![Image 18: step_20.png](https://taskade.intercom-attachments-7.com/i/o/965379306/e7f89c21f272ed85b1e7c15c/16329042527123?expires=1757792700&signature=75a52791793da2a69511aff2fbf7d7e5651bf568b68c8da3121d9a7aceb03696&req=fSYiFc53noFZFb4f3HP0gHAjsaCzsTFW3%2BWaD7em1Uqz8hYY4HGmoNk2tVPa%0A0M8uwVekOK212fSQ3w%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379306/e7f89c21f272ed85b1e7c15c/16329042527123?expires=1757792700&signature=75a52791793da2a69511aff2fbf7d7e5651bf568b68c8da3121d9a7aceb03696&req=fSYiFc53noFZFb4f3HP0gHAjsaCzsTFW3%2BWaD7em1Uqz8hYY4HGmoNk2tVPa%0A0M8uwVekOK212fSQ3w%3D%3D%0A)

To prevent organization members from creating their own workspaces, disable the **Allow members to create workspaces** option in the organization settings.

### **😊 Helpful Links**

* * *

Related Articles

[Taskade GPT](https://help.taskade.com/en/articles/8958541-taskade-gpt)[SAML via Azure AD](https://help.taskade.com/en/articles/8958554-saml-via-azure-ad)[SAML via Okta](https://help.taskade.com/en/articles/8958556-saml-via-okta)[SCIM via Okta](https://help.taskade.com/en/articles/8958557-scim-via-okta)[Upgrade to Premium Plans](https://help.taskade.com/en/articles/8958628-upgrade-to-premium-plans)
