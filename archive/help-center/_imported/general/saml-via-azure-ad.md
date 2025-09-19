---
title: "SAML via Azure AD"
description: "Streamline access management with SAML authentication via Azure AD."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/8958554-saml-via-azure-ad"
intercom_id: "8958554"
state: "published"
date_created: "1708097259"
date_updated: "1747883793"
date_imported: "2025-09-13T19:17:35.150Z"
---

Title: SAML via Azure AD | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/8958554-saml-via-azure-ad

Markdown Content:
**What Is SAML?**
-----------------

SAML is an important security standard that allows Taskade users to log in securely without remembering and managing multiple passwords. SAML can be set up with Okta, Azure AD, Google Workspace, and other identity providers. Follow the instructions below to configure SAML for your organization.

**Configure with Azure AD**
---------------------------

**Requirements**
----------------

1) Create an Organization
-------------------------

In order to manage multiple workspaces and enable group provisioning, you need to create an organization on the Settings page of your Taskade account.

[![Image 1: step_2.png](https://taskade.intercom-attachments-7.com/i/o/965379131/a61c4390e3772456676afdb5/24923868577043?expires=1757792700&signature=edbdc6e47487d5c2145f11f4b6cb558c020be088abd6590f5615adae0ef73642&req=fSYiFc53nIJeFb4f3HP0gA7RIarzaUGtpDyQ2A36lOA1zuQUzanPEJDFnZS4%0AE9KEmcD%2B%2Bv5%2BerTFYg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379131/a61c4390e3772456676afdb5/24923868577043?expires=1757792700&signature=edbdc6e47487d5c2145f11f4b6cb558c020be088abd6590f5615adae0ef73642&req=fSYiFc53nIJeFb4f3HP0gA7RIarzaUGtpDyQ2A36lOA1zuQUzanPEJDFnZS4%0AE9KEmcD%2B%2Bv5%2BerTFYg%3D%3D%0A)

2) Configure Azure
------------------

Next, navigate to your Azure Portal and follow the steps below:

[![Image 2: step_1.png](https://taskade.intercom-attachments-7.com/i/o/965379130/7aae831c097a5ffad870d2d4/15576455916307?expires=1757792700&signature=0c65603aaafc2c84de9b980eda08131679a98a85f51ed1b0508d85a2867dc990&req=fSYiFc53nIJfFb4f3HP0gCalluJr0ioykcJazWQCE4nPTz7D5QI%2FSCRJv7XY%0AuMncCXVF8HOZ0b3QjA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379130/7aae831c097a5ffad870d2d4/15576455916307?expires=1757792700&signature=0c65603aaafc2c84de9b980eda08131679a98a85f51ed1b0508d85a2867dc990&req=fSYiFc53nIJfFb4f3HP0gCalluJr0ioykcJazWQCE4nPTz7D5QI%2FSCRJv7XY%0AuMncCXVF8HOZ0b3QjA%3D%3D%0A)

[![Image 3: step_2.png](https://taskade.intercom-attachments-7.com/i/o/965379128/e09f62993c8d5e5c8bc0aa8d/15576499241491?expires=1757792700&signature=d274689978b9d9ae5423e37cf874479f822cc2f4daa4a60a3fba1559215f1cea&req=fSYiFc53nINXFb4f3HP0gGoI6YY4CZ5XO9PnXnzTWvg6a2eYFXskrq%2BgLDxN%0ApqlIcZLoPIJhiybw%2FQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379128/e09f62993c8d5e5c8bc0aa8d/15576499241491?expires=1757792700&signature=d274689978b9d9ae5423e37cf874479f822cc2f4daa4a60a3fba1559215f1cea&req=fSYiFc53nINXFb4f3HP0gGoI6YY4CZ5XO9PnXnzTWvg6a2eYFXskrq%2BgLDxN%0ApqlIcZLoPIJhiybw%2FQ%3D%3D%0A)

[![Image 4: step_3.png](https://taskade.intercom-attachments-7.com/i/o/965379129/c15f2e515fb7de17da091bd3/15576455989267?expires=1757792700&signature=7bf16f6c808aa2e1cab2fa041c77636e1dfad53944973eb8802f720ee237a4a2&req=fSYiFc53nINWFb4f3HP0gOYNi%2BuPN%2FAAKbH5LS8JnAxPmEcddq2Ufzem1vxA%0ApisCD%2FNINl%2BDe5ay5g%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379129/c15f2e515fb7de17da091bd3/15576455989267?expires=1757792700&signature=7bf16f6c808aa2e1cab2fa041c77636e1dfad53944973eb8802f720ee237a4a2&req=fSYiFc53nINWFb4f3HP0gOYNi%2BuPN%2FAAKbH5LS8JnAxPmEcddq2Ufzem1vxA%0ApisCD%2FNINl%2BDe5ay5g%3D%3D%0A)

[![Image 5: step_4.png](https://taskade.intercom-attachments-7.com/i/o/965379139/a1df456418d15c7dc97b29b1/15576423615123?expires=1757792700&signature=778f51ae2f0673ec07136bfb3c4ab5906ceaad68dff733a3ac6bf744c9660dda&req=fSYiFc53nIJWFb4f3HP0gIAhAG36jhMip%2BCL8tUsyekSvNXQ%2Bq75FTL0Zw2i%0AVYVWIbPI89pF9zr1GQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379139/a1df456418d15c7dc97b29b1/15576423615123?expires=1757792700&signature=778f51ae2f0673ec07136bfb3c4ab5906ceaad68dff733a3ac6bf744c9660dda&req=fSYiFc53nIJWFb4f3HP0gIAhAG36jhMip%2BCL8tUsyekSvNXQ%2Bq75FTL0Zw2i%0AVYVWIbPI89pF9zr1GQ%3D%3D%0A)

As of this moment, Taskade is not available in the Azure AD gallery. In the **Create your own application menu**, select **Integrate any other application you don't find in the gallery**. When you're done, click **Create** at the bottom of the panel.

[![Image 6: step_5.png](https://taskade.intercom-attachments-7.com/i/o/965379142/52904e1ec0a9c64e6d44a730/15576456053651?expires=1757792700&signature=a343386c8e143dcd4490c40ab7b2fb9cae33fb43160426e5a802e5986c531db6&req=fSYiFc53nIVdFb4f3HP0gGl27g6eCE6jJ25BFkhZt9rKIn5i5nMXnqPUNE8o%0AZ4PSlf7VyQhAuqFpUw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379142/52904e1ec0a9c64e6d44a730/15576456053651?expires=1757792700&signature=a343386c8e143dcd4490c40ab7b2fb9cae33fb43160426e5a802e5986c531db6&req=fSYiFc53nIVdFb4f3HP0gGl27g6eCE6jJ25BFkhZt9rKIn5i5nMXnqPUNE8o%0AZ4PSlf7VyQhAuqFpUw%3D%3D%0A)

The next step is configuring the Single sign-on for the newly added application.

[![Image 7: step_6.png](https://taskade.intercom-attachments-7.com/i/o/965379140/784b34d1489929d7a97420c0/15576423671571?expires=1757792700&signature=adf4c0b8c59a8525ce8f5deb665a4c0f842c90f74aeaf4957f6698a78002a25e&req=fSYiFc53nIVfFb4f3HP0gE%2BjNlGzTvhaXRLdr3lALIN4ndvywY4v1AwwMuwE%0AgAL0TCN%2F0DP2RcjVQw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379140/784b34d1489929d7a97420c0/15576423671571?expires=1757792700&signature=adf4c0b8c59a8525ce8f5deb665a4c0f842c90f74aeaf4957f6698a78002a25e&req=fSYiFc53nIVfFb4f3HP0gE%2BjNlGzTvhaXRLdr3lALIN4ndvywY4v1AwwMuwE%0AgAL0TCN%2F0DP2RcjVQw%3D%3D%0A)

Make sure to select **SAML** as the authentication method.

[![Image 8: step_7.png](https://taskade.intercom-attachments-7.com/i/o/965379143/53e5e6a47b6ef4ec0e2a4c42/15576456141203?expires=1757792700&signature=bd54bae14dea002d52088174e9ae2764355fbd62a57ffc168e3bad12c31fd6de&req=fSYiFc53nIVcFb4f3HP0gOODPDmS1YEkhPBw6ryE2PPsMTueI23HfyLz1kcO%0ADfx3l9qZMaraU0DKzw%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379143/53e5e6a47b6ef4ec0e2a4c42/15576456141203?expires=1757792700&signature=bd54bae14dea002d52088174e9ae2764355fbd62a57ffc168e3bad12c31fd6de&req=fSYiFc53nIVcFb4f3HP0gOODPDmS1YEkhPBw6ryE2PPsMTueI23HfyLz1kcO%0ADfx3l9qZMaraU0DKzw%3D%3D%0A)

[![Image 9: step_8.png](https://taskade.intercom-attachments-7.com/i/o/965379157/7688591084c11e399e617b3b/15576456185747?expires=1757792700&signature=aec0cbe0ad2fb48d6c19f2f2e96a2777f79d658e23cbf1e03ce8f98f4923694b&req=fSYiFc53nIRYFb4f3HP0gC64RCWs9HERmUVVMGZbV7fjx%2BbLAu4nJ5CA8Lb1%0A4F%2F%2BckSYajugICg7JA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379157/7688591084c11e399e617b3b/15576456185747?expires=1757792700&signature=aec0cbe0ad2fb48d6c19f2f2e96a2777f79d658e23cbf1e03ce8f98f4923694b&req=fSYiFc53nIRYFb4f3HP0gC64RCWs9HERmUVVMGZbV7fjx%2BbLAu4nJ5CA8Lb1%0A4F%2F%2BckSYajugICg7JA%3D%3D%0A)

3) Set Up SAML Certificate
--------------------------

In the **Basic SAML Configuration panel**, use the following values:

[![Image 10: step_9.png](https://taskade.intercom-attachments-7.com/i/o/965379159/8e547166f03f4ca1a6b4ce36/15576423924883?expires=1757792700&signature=7b5aabb2d590d254ddd22f0e499ff578ece188480de348082136b521006d2bf1&req=fSYiFc53nIRWFb4f3HP0gGG%2BJjw3C6%2Fi%2FCRciOHTLaprGRO3Sn4ikP5luhUy%0AdYyXjSG8El5gthmXgg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379159/8e547166f03f4ca1a6b4ce36/15576423924883?expires=1757792700&signature=7b5aabb2d590d254ddd22f0e499ff578ece188480de348082136b521006d2bf1&req=fSYiFc53nIRWFb4f3HP0gGG%2BJjw3C6%2Fi%2FCRciOHTLaprGRO3Sn4ikP5luhUy%0AdYyXjSG8El5gthmXgg%3D%3D%0A)

Click **Save** at the top left corner of the **Basic SAML Configuration****panel**. Next, scroll down to **SAML Certificates** and click **Edit**.

[![Image 11: step_10.png](https://taskade.intercom-attachments-7.com/i/o/965379162/8b98524b61b5f129c44d61a4/15576456306707?expires=1757792700&signature=85ec7c02943320676f9f50f266f15666a522c95eaa382ebce2e794435073fc00&req=fSYiFc53nIddFb4f3HP0gKhRuFtg4Sebu%2FJECKZLl6aI3%2B5FcK0SFXsucz01%0A5fNLqXVtT7c87YjlWg%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379162/8b98524b61b5f129c44d61a4/15576456306707?expires=1757792700&signature=85ec7c02943320676f9f50f266f15666a522c95eaa382ebce2e794435073fc00&req=fSYiFc53nIddFb4f3HP0gKhRuFtg4Sebu%2FJECKZLl6aI3%2B5FcK0SFXsucz01%0A5fNLqXVtT7c87YjlWg%3D%3D%0A)

You have to create a new certificate and use the **Sign SAML response and assertion**option for the **Signing Option**. Click **Save** to create the certificate.

In the next step, you will need to activate the new certificate.

Click the three dots (···) on the right and select **Make certificate active.**Finally, download the **Base64 certification**. You will need the certificate in the next step.,

[![Image 12: step_12.png](https://taskade.intercom-attachments-7.com/i/o/965379161/d1814510b03e02611b75403f/15576424061203?expires=1757792700&signature=35cbc197207784dcb6a5ee98b8e94b7fb97ca12188d965b3d0f195c17c0f7ae9&req=fSYiFc53nIdeFb4f3HP0gA7Oez9GCSkssi8%2FKizmX6AtIeQgF4vjFJ7YNRPr%0A1mN%2FMl4FwVwhBI38SQ%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379161/d1814510b03e02611b75403f/15576424061203?expires=1757792700&signature=35cbc197207784dcb6a5ee98b8e94b7fb97ca12188d965b3d0f195c17c0f7ae9&req=fSYiFc53nIdeFb4f3HP0gA7Oez9GCSkssi8%2FKizmX6AtIeQgF4vjFJ7YNRPr%0A1mN%2FMl4FwVwhBI38SQ%3D%3D%0A)

Close the SAML Signing Certificate panel and scroll to **Set up Taskade** (step 4) of the Single Sign-On configuration page.

[![Image 13: step_13.png](https://taskade.intercom-attachments-7.com/i/o/965379187/fbecf30671da4565e1c0be8d/15576456516755?expires=1757792700&signature=7c79d7452d0c6dee9c5a2d7ce32aec298affbd28e0ab0b79a76af32572833471&req=fSYiFc53nIlYFb4f3HP0gEnEZC47VsDAIr3Y1T3YLTKQtgafbBHp1JM9iWg5%0AC7BIKz87TN598%2BUb0Q%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379187/fbecf30671da4565e1c0be8d/15576456516755?expires=1757792700&signature=7c79d7452d0c6dee9c5a2d7ce32aec298affbd28e0ab0b79a76af32572833471&req=fSYiFc53nIlYFb4f3HP0gEnEZC47VsDAIr3Y1T3YLTKQtgafbBHp1JM9iWg5%0AC7BIKz87TN598%2BUb0Q%3D%3D%0A)

You will need to copy these values to Taskade, so keep this window open and navigate back to your organization.

4) Finish Setup in Taskade
--------------------------

In the **SAML SSO** page, paste the **SSO URL**, **IDP Issuer**, and the **Base64 Certificate** from the previous step. You can open the certificate file with any text editor.

**Taskade****Azure AD**
2 Login URL SSO URL
3 Azure AD Identifier IDP Issuer
4 Base64 Certificate (copy using a text editor)IDP Public Signing Cert

[![Image 14](https://downloads.intercomcdn.com/i/o/plyqw4hf/1354640215/16b7d9945c233c187f1528de72ff/saml-azure-taskade.jpg?expires=1757792700&signature=d9efac935ccac5bd3ff2b2302bb7c81508400ea69bcec81702915c05364c038f&req=dSMiEs96nYNeXPMW1HO4zbRaPUmq6GKOSTlvBrIQC4XqtaVMaPWiVQAkZ7a2%0AJ7XdmyGFF1TrgdH3LFE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1354640215/16b7d9945c233c187f1528de72ff/saml-azure-taskade.jpg?expires=1757792700&signature=d9efac935ccac5bd3ff2b2302bb7c81508400ea69bcec81702915c05364c038f&req=dSMiEs96nYNeXPMW1HO4zbRaPUmq6GKOSTlvBrIQC4XqtaVMaPWiVQAkZ7a2%0AJ7XdmyGFF1TrgdH3LFE%3D%0A)

Once you're done, scroll down and click **Save**. If you've experienced any errors up until this point, please email us at [support@taskade.com](mailto:support@taskade.com).

The last and final step is to ensure your Single Sign-On has been configured correctly. Navigate to your Azure Portal and click **Test** under the T**est single sign-on with Taskade**. Then click **Test sign in** as the current user.

[![Image 15: step_15.png](https://taskade.intercom-attachments-7.com/i/o/965379186/df6fb06449e4bde511fb532a/15576456622611?expires=1757792700&signature=661b2576ad0d2a7d7c95fbc5079b3d52b0ebb6722e70ab525df04c9222772b1b&req=fSYiFc53nIlZFb4f3HP0gMOJV0cAv4jz%2FV3tvDYXng1pU2zgoo%2BF1n28EodM%0AunWtAlyM%2FyKkHEKtwA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379186/df6fb06449e4bde511fb532a/15576456622611?expires=1757792700&signature=661b2576ad0d2a7d7c95fbc5079b3d52b0ebb6722e70ab525df04c9222772b1b&req=fSYiFc53nIlZFb4f3HP0gMOJV0cAv4jz%2FV3tvDYXng1pU2zgoo%2BF1n28EodM%0AunWtAlyM%2FyKkHEKtwA%3D%3D%0A)

[![Image 16: step_16.png](https://taskade.intercom-attachments-7.com/i/o/965379190/f151fd486da9526925ded06b/15576456629395?expires=1757792700&signature=1b6b7477fc46bdc58bc16181dd93f3656b50b26cf021689ab233e2ab45959eeb&req=fSYiFc53nIhfFb4f3HP0gLGE1sTolXDHYDKZ5XYsZKYlx%2Fn2dEzOf7XWUi48%0A5dtpxjc%2F6ajX2I7IEA%3D%3D%0A)](https://taskade.intercom-attachments-7.com/i/o/965379190/f151fd486da9526925ded06b/15576456629395?expires=1757792700&signature=1b6b7477fc46bdc58bc16181dd93f3656b50b26cf021689ab233e2ab45959eeb&req=fSYiFc53nIhfFb4f3HP0gLGE1sTolXDHYDKZ5XYsZKYlx%2Fn2dEzOf7XWUi48%0A5dtpxjc%2F6ajX2I7IEA%3D%3D%0A)

You'll be redirected to [https://www.taskade.com/saml/sso](https://www.taskade.com/saml/sso) where you'll log in using your Azure credentials. If the test is successful, anyone in your Active Directory assigned to the application can sign up or sign in to Taskade.

If you require further assistance with this configuration, please email us at [support@taskade.com](mailto:support@taskade.com), and we'll be more than happy to help set this up for you.

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[SAML via Google Workspace](https://help.taskade.com/en/articles/8958552-saml-via-google-workspace)[SCIM via Azure AD](https://help.taskade.com/en/articles/8958555-scim-via-azure-ad)[SAML via Okta](https://help.taskade.com/en/articles/8958556-saml-via-okta)[SCIM via Okta](https://help.taskade.com/en/articles/8958557-scim-via-okta)[LinkedIn Integration](https://help.taskade.com/en/articles/9994380-linkedin-integration)
