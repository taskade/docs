---
title: "SCIM via Okta"
description: "Use SCIM integration via Okta to automate user management in Taskade."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/8958557-scim-via-okta"
intercom_id: "8958557"
state: "published"
date_created: "1708097263"
date_updated: "1726043563"
date_imported: "2025-09-13T19:17:14.572Z"
---

Title: SCIM via Okta | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/8958557-scim-via-okta

Markdown Content:
Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.Copyright (c) 2023, Intercom, Inc. (legal@intercom.io) with Reserved Font Name "Inter". This Font Software is licensed under the SIL Open Font License, Version 1.1.[Skip to main content](https://help.taskade.com/en/articles/8958557-scim-via-okta#main-content)

Use SCIM integration via Okta to automate user management in Taskade.

Updated over a year ago

**What Is SCIM?**
-----------------

SCIM is an open standard for automating user provisioning and de-provisioning in cloud-based applications. It simplifies user management by synchronizing user data across different applications and systems, ensuring access to cloud-based applications is always up-to-date and secure. The benefits of SCIM include improved efficiency, reduced administrative costs, and enhanced security.

**Configure SCIM in Taskade**
-----------------------------

**This feature is only available under our Enterprise plan**. We work exclusively with Okta as our identity provider (with support for other IDPs in the near future).

The first step is to make sure you upgraded your workspace.

[![Image 1: step_1.png](https://taskade.intercom-attachments-7.com/i/o/965379385/fac89dcac9255476825769cb/15343263565075?expires=1757792700&signature=5fc72043466b8982ea3f358f6aaa7c937a526c25c409d1d486279b50b18c5e8e&req=fSYiFc53nolaFb4f3HP0gE2GuUReS4ILXGbUNelawPqFyPGNx1TNHXuFqW%2FS%0AzLWjiCvzVQHMr%2FbpAA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379385/fac89dcac9255476825769cb/15343263565075?expires=1757792700&signature=5fc72043466b8982ea3f358f6aaa7c937a526c25c409d1d486279b50b18c5e8e&req=fSYiFc53nolaFb4f3HP0gE2GuUReS4ILXGbUNelawPqFyPGNx1TNHXuFqW%2FS%0AzLWjiCvzVQHMr%2FbpAA%3D%3D%0A)

[![Image 2: step_2.png](https://taskade.intercom-attachments-7.com/i/o/965379384/b597e3efcdf08bba5e8d92f2/15343483436947?expires=1757792700&signature=722fb07e457aaa069123ebf468e34420c328f139c14224e833c109e585f52dac&req=fSYiFc53nolbFb4f3HP0gHhZ5hj%2BlDR0o5k3gr1%2Fm8Bd4mDyplwxdmresscQ%0AEYP6DrGpaBDCW2c55Q%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379384/b597e3efcdf08bba5e8d92f2/15343483436947?expires=1757792700&signature=722fb07e457aaa069123ebf468e34420c328f139c14224e833c109e585f52dac&req=fSYiFc53nolbFb4f3HP0gHhZ5hj%2BlDR0o5k3gr1%2Fm8Bd4mDyplwxdmresscQ%0AEYP6DrGpaBDCW2c55Q%3D%3D%0A)

[![Image 3: step_3.png](https://taskade.intercom-attachments-7.com/i/o/965379386/9b896dd53af7f476f6ff4b90/15343569212819?expires=1757792700&signature=1f4ce81d0a7eb0c03bcb7be039579e0abdbbe5599fa6c25e5bac5614dcaa5546&req=fSYiFc53nolZFb4f3HP0gFkbyIstZYR6Gwni2GGEXDHjzcZwmahF8kS67I26%0AKbRPi0YfOb0vuicOhw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379386/9b896dd53af7f476f6ff4b90/15343569212819?expires=1757792700&signature=1f4ce81d0a7eb0c03bcb7be039579e0abdbbe5599fa6c25e5bac5614dcaa5546&req=fSYiFc53nolZFb4f3HP0gFkbyIstZYR6Gwni2GGEXDHjzcZwmahF8kS67I26%0AKbRPi0YfOb0vuicOhw%3D%3D%0A)

[![Image 4: step_4.png](https://taskade.intercom-attachments-7.com/i/o/965379390/4ec6c5a5f5ca2d364bd85a80/15343846498195?expires=1757792700&signature=e6f2099ac604f5b66a8e609312339cd20e74fb71493c97012de936bf6b652fa9&req=fSYiFc53nohfFb4f3HP0gImPebyNfOLIWPYC8DT7StqsrbX8JgsykFoqA1jc%0Au5TSRKmi9QnJVaLv5A%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379390/4ec6c5a5f5ca2d364bd85a80/15343846498195?expires=1757792700&signature=e6f2099ac604f5b66a8e609312339cd20e74fb71493c97012de936bf6b652fa9&req=fSYiFc53nohfFb4f3HP0gImPebyNfOLIWPYC8DT7StqsrbX8JgsykFoqA1jc%0Au5TSRKmi9QnJVaLv5A%3D%3D%0A)

[![Image 5: step_5.png](https://taskade.intercom-attachments-7.com/i/o/965379403/7b76efe598eaf71a0db17fd5/15343996392339?expires=1757792700&signature=113a81f6e4dee0cc700f58f7773d127d3f4a0fa4ebd3c879e1ae236632ae2ab1&req=fSYiFc53mYFcFb4f3HP0gMRYEu7L6N9oRiI5Pvv6nlIsp9%2B2osqLA%2FkJ9cwF%0A6CNFnBeq4Nr%2BIkzKdg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379403/7b76efe598eaf71a0db17fd5/15343996392339?expires=1757792700&signature=113a81f6e4dee0cc700f58f7773d127d3f4a0fa4ebd3c879e1ae236632ae2ab1&req=fSYiFc53mYFcFb4f3HP0gMRYEu7L6N9oRiI5Pvv6nlIsp9%2B2osqLA%2FkJ9cwF%0A6CNFnBeq4Nr%2BIkzKdg%3D%3D%0A)

[![Image 6: step_6.png](https://taskade.intercom-attachments-7.com/i/o/965379406/9ded69cb78c6c506eedc9a6d/15344149443347?expires=1757792700&signature=70310556c1c0b172c1fd902e883956483e3780cba73203e62c8009fa7d304724&req=fSYiFc53mYFZFb4f3HP0gKaB661g0BM3XpR7nV8OZT7AEzsqWATMQyicu6C6%0AuZH1Btsuvz3F1kOt1g%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379406/9ded69cb78c6c506eedc9a6d/15344149443347?expires=1757792700&signature=70310556c1c0b172c1fd902e883956483e3780cba73203e62c8009fa7d304724&req=fSYiFc53mYFZFb4f3HP0gKaB661g0BM3XpR7nV8OZT7AEzsqWATMQyicu6C6%0AuZH1Btsuvz3F1kOt1g%3D%3D%0A)

This is a preview of what the settings page should look like. Once you're done:

[![Image 7: step_7.png](https://taskade.intercom-attachments-7.com/i/o/965379405/d37870190a78c29879d3e6de/15344408789139?expires=1757792700&signature=502c798171900c5decba2d60c1db1bcc627a2b1468fbb9a23875c96c86e88236&req=fSYiFc53mYFaFb4f3HP0gJ1TzPRi2JoGU2bqGRhRiVnYQyUDvzS2FVRRTYcC%0AutP38H5Buaw8OhjOmQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379405/d37870190a78c29879d3e6de/15344408789139?expires=1757792700&signature=502c798171900c5decba2d60c1db1bcc627a2b1468fbb9a23875c96c86e88236&req=fSYiFc53mYFaFb4f3HP0gJ1TzPRi2JoGU2bqGRhRiVnYQyUDvzS2FVRRTYcC%0AutP38H5Buaw8OhjOmQ%3D%3D%0A)

Now it's time to add a push group to your application:

[![Image 8: step_8.png](https://taskade.intercom-attachments-7.com/i/o/965379409/d228c29ab4dff08351458330/15346232268691?expires=1757792700&signature=4eab0bbfdd062e79e72b84aa6c542a886664a5c1e51d5df05c52c247703ff273&req=fSYiFc53mYFWFb4f3HP0gMIBat7KMKIrUJA%2BQByIrwLxvhBkJNq05fhDosnA%0AkCPKQ4eExPAA8coPmA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379409/d228c29ab4dff08351458330/15346232268691?expires=1757792700&signature=4eab0bbfdd062e79e72b84aa6c542a886664a5c1e51d5df05c52c247703ff273&req=fSYiFc53mYFWFb4f3HP0gMIBat7KMKIrUJA%2BQByIrwLxvhBkJNq05fhDosnA%0AkCPKQ4eExPAA8coPmA%3D%3D%0A)

Once you decide on which group to push, enable **Push groups memberships immediately** and set the match result and push action to **Create Group**.

[![Image 9: step_9.png](https://taskade.intercom-attachments-7.com/i/o/965379416/9d05f49b3e9b767a9e2ef8ac/15346264353811?expires=1757792700&signature=061ead808f9b3432ebc45d692036ef0ae00e9028165394d509cdd30a09bb971a&req=fSYiFc53mYBZFb4f3HP0gJrrtoCZEyHQd%2B3EnKWMh1YCsl3B6UnjdiFw7HTu%0A8hMvfaaP%2BvmwhifZdw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379416/9d05f49b3e9b767a9e2ef8ac/15346264353811?expires=1757792700&signature=061ead808f9b3432ebc45d692036ef0ae00e9028165394d509cdd30a09bb971a&req=fSYiFc53mYBZFb4f3HP0gJrrtoCZEyHQd%2B3EnKWMh1YCsl3B6UnjdiFw7HTu%0A8hMvfaaP%2BvmwhifZdw%3D%3D%0A)

When you're done, scroll down and click on **Save** or **Save & Add Another** if you have other groups to add. If successful, the new group's push status will be set to **Active**.

And that's it!

[![Image 10: step_10.png](https://taskade.intercom-attachments-7.com/i/o/965379419/c302bbfb9b79be96c5b06a42/15346365228307?expires=1757792700&signature=f8dc5bbe7b7b3a71ee8fb79b516deb843535ad141d50605b2ca1419182272e41&req=fSYiFc53mYBWFb4f3HP0gD5mtoQCUBF7lbvNTUpRQ4FKmw2Q5bY2%2FcZo20Cu%0A8nhAlMvYwbNKb0zmcg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379419/c302bbfb9b79be96c5b06a42/15346365228307?expires=1757792700&signature=f8dc5bbe7b7b3a71ee8fb79b516deb843535ad141d50605b2ca1419182272e41&req=fSYiFc53mYBWFb4f3HP0gD5mtoQCUBF7lbvNTUpRQ4FKmw2Q5bY2%2FcZo20Cu%0A8nhAlMvYwbNKb0zmcg%3D%3D%0A)

Now that we have everything configured, let's return to your Taskade dashboard. The groups will populate at the bottom of the organization screen. Make sure to **select all the workspaces that you wish to manage in your organization**.

[![Image 11: step_11.png](https://taskade.intercom-attachments-7.com/i/o/965379425/09aab406336e30edaf237e43/15346624555027?expires=1757792700&signature=955e30179526dfeee1c8c15df484a1172c46b2af3e0a6947ac3fc2530f8d381c&req=fSYiFc53mYNaFb4f3HP0gLE88cKdyJzKNHjqR24Uzdq7MTphXl%2FqfYq6PeuS%0AFUQKs1b6Pz6kM9IiZw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379425/09aab406336e30edaf237e43/15346624555027?expires=1757792700&signature=955e30179526dfeee1c8c15df484a1172c46b2af3e0a6947ac3fc2530f8d381c&req=fSYiFc53mYNaFb4f3HP0gLE88cKdyJzKNHjqR24Uzdq7MTphXl%2FqfYq6PeuS%0AFUQKs1b6Pz6kM9IiZw%3D%3D%0A)

As an example, let's provision the Sales group and grant access to the Sales workspace:

[![Image 12: step_12.png](https://taskade.intercom-attachments-7.com/i/o/965379430/64c2f4cafb4452fdfd4bc12f/15346672553619?expires=1757792700&signature=e6b05490c49f2ef64e2aa7a37a556be58492521b5abb6d98a8a475184ca9c9e2&req=fSYiFc53mYJfFb4f3HP0gMH5iScGD6N2v%2Fv02OzoN%2FMMaXivqJKEV5Z0H0Z0%0AxzwJjDWeeA2kyCGdVQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379430/64c2f4cafb4452fdfd4bc12f/15346672553619?expires=1757792700&signature=e6b05490c49f2ef64e2aa7a37a556be58492521b5abb6d98a8a475184ca9c9e2&req=fSYiFc53mYJfFb4f3HP0gMH5iScGD6N2v%2Fv02OzoN%2FMMaXivqJKEV5Z0H0Z0%0AxzwJjDWeeA2kyCGdVQ%3D%3D%0A)

Group members will now be able to SSO to Taskade and automatically get access to the Sales workspace. For new group members, the first click will let them join the workspace, from that point onward they'll convert to members.

[![Image 13: step_13.png](https://taskade.intercom-attachments-7.com/i/o/965379434/e100359d9ac5b7e4b154c1ba/15346873175699?expires=1757792700&signature=01680d843d4d71bc00051618876c582154523871ab2dc9ba64d0fe982f2d1ad0&req=fSYiFc53mYJbFb4f3HP0gJCI76X8UbetlsK1vp3uJfhaBognVu73Lvvd%2FqfA%0ABhB%2F6QV2afiQhiY16g%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379434/e100359d9ac5b7e4b154c1ba/15346873175699?expires=1757792700&signature=01680d843d4d71bc00051618876c582154523871ab2dc9ba64d0fe982f2d1ad0&req=fSYiFc53mYJbFb4f3HP0gJCI76X8UbetlsK1vp3uJfhaBognVu73Lvvd%2FqfA%0ABhB%2F6QV2afiQhiY16g%3D%3D%0A)

Organization owners can also provision folders. Here's how it works:

[![Image 14: step_15.png](https://taskade.intercom-attachments-7.com/i/o/965379440/850137051d7e7fd22b1648cf/15347130792723?expires=1757792700&signature=3a8ca897b736e38e6f9dd8268a00ed6cec7f2291c71d8d9c3ca0d20d486894d1&req=fSYiFc53mYVfFb4f3HP0gOkUT5ij%2FEyp%2B4kEn7wCCpKfojTecRrwJcBEfU%2BP%0APErNC4XvkagoAKhxbw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379440/850137051d7e7fd22b1648cf/15347130792723?expires=1757792700&signature=3a8ca897b736e38e6f9dd8268a00ed6cec7f2291c71d8d9c3ca0d20d486894d1&req=fSYiFc53mYVfFb4f3HP0gOkUT5ij%2FEyp%2B4kEn7wCCpKfojTecRrwJcBEfU%2BP%0APErNC4XvkagoAKhxbw%3D%3D%0A)

### **😊 Helpful Links**

* * *

Related Articles

[Google Calendar Sync](https://help.taskade.com/en/articles/8958536-google-calendar-sync)[SAML via Azure AD](https://help.taskade.com/en/articles/8958554-saml-via-azure-ad)[SCIM via Azure AD](https://help.taskade.com/en/articles/8958555-scim-via-azure-ad)[SAML via Okta](https://help.taskade.com/en/articles/8958556-saml-via-okta)[Taskade for HR](https://help.taskade.com/en/articles/8958679-taskade-for-hr)
