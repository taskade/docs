---
title: "Gather and Manage Partner Information"
description: "Use Taskade to automatically gather and sort information from potential partners."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/11168119-gather-and-manage-partner-information"
intercom_id: "11168119"
state: "published"
date_created: "1745985212"
date_updated: "1750841940"
date_imported: "2025-09-13T18:51:41.860Z"
---

Title: Gather and Manage Partner Information | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/11168119-gather-and-manage-partner-information

Markdown Content:
Use Taskade to automatically gather and sort information from potential partners.

Updated over 3 months ago

Overview
--------

Today, you'll learn how to use Taskade to automatically gather and sort partner information from incoming emails. This information can be broken down into key details and organized into respective Taskade Projects for easy reference.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508365807/5bbe3b85c942ca6ecfed9759fce1/Helpcenter+SS2.png?expires=1757790900&signature=1eb32884258ede5b945923781a1569be4c6f6dea9ce13c1a8359e6dc92498f63&req=dSUnHsp4mIlfXvMW1HO4zfO7Exr3UxOIaSpKyIjCXXayOiL2MHWtPGQ1S46p%0AlOFB8Roz%2FVgqMvA%2FFXg%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508365807/5bbe3b85c942ca6ecfed9759fce1/Helpcenter+SS2.png?expires=1757790900&signature=1eb32884258ede5b945923781a1569be4c6f6dea9ce13c1a8359e6dc92498f63&req=dSUnHsp4mIlfXvMW1HO4zfO7Exr3UxOIaSpKyIjCXXayOiL2MHWtPGQ1S46p%0AlOFB8Roz%2FVgqMvA%2FFXg%3D%0A)

Click here to access the bundle and quickly get started.

​

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1587345118/9d386b9016ed8c665737f655136d/ADD+TO+WORKSPACE1.png?expires=1757790900&signature=8dcf1c5a22472ef780a19033df22911d532f9a3ed22a971bc27863f242739ae5&req=dSUvEcp6mIBeUfMW1HO4zcPJzH27qdWOg%2FFWkvNkvbO1hP2YVcWJ6G4zjnWA%0AXc6hAIPaM2SZWzJOyCQ%3D%0A)](https://www.taskade.com/k/01JTFG82WPQ1ZXAF820287VTVK)

Here's what we'll cover:

*   How to set up a project to store a list of existing partners, which will be used and updated by the following automation.

*   How to set up an automation to analyse and breakdown incoming emails and add relevant information to their respective Taskade project(s). Use the Automation: Gather and Manage Partner Information (Email) to follow along.

*   Testing the automation.

Setting up the Project
----------------------

*   Setting up the Project

​

    2.   Add a new Text Custom Field (Add Column) and title it **Project ID Field**. This will be referenced throughout the automation and is crucial for the automation to work seamlessly.

​

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508352229/551a4330880dbb9c102266ddc63a/Helpcenter+SS13.png?expires=1757790900&signature=79e98da9aa25f3e82cb919550bd258ffa15194d4cc5395fcf0b2f84a7c08e2de&req=dSUnHsp7n4NdUPMW1HO4zWzkq4Ny6yeDcEhzKDj2aBw%2FoVti%2B4NExpOuRoxj%0A2rDO%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508352229/551a4330880dbb9c102266ddc63a/Helpcenter+SS13.png?expires=1757790900&signature=79e98da9aa25f3e82cb919550bd258ffa15194d4cc5395fcf0b2f84a7c08e2de&req=dSUnHsp7n4NdUPMW1HO4zWzkq4Ny6yeDcEhzKDj2aBw%2FoVti%2B4NExpOuRoxj%0A2rDO%0A)

    3.   Add or hide columns depending on your use. These **Columns** or **Fields** can be referenced throughout the automation, or used for your own organisation purposes.

​

Creating the Automation
-----------------------

*   
    1.   Create a trigger and select **New Email**. Connect to your Gmail Account.

    2.   [![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508360405/651b2de41a4ac4e0519834d21671/Helpcenter+SS4.png?expires=1757790900&signature=1e3855699d2ba6b0745e684dc43ba1841002de0d30934df193ceb8bf5c3c81fb&req=dSUnHsp4nYVfXPMW1HO4zflLItIC0e%2FgUlPvX1Igg2t7CUp61sp9tEh1R4zw%0Aj2xo%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508360405/651b2de41a4ac4e0519834d21671/Helpcenter+SS4.png?expires=1757790900&signature=1e3855699d2ba6b0745e684dc43ba1841002de0d30934df193ceb8bf5c3c81fb&req=dSUnHsp4nYVfXPMW1HO4zflLItIC0e%2FgUlPvX1Igg2t7CUp61sp9tEh1R4zw%0Aj2xo%0A)

    3.   In the **Find Task(s)** action, select the **Partner Management** project included in the kit. This action is put in place to allow us to reference the [custom field](https://help.taskade.com/en/articles/9767679-custom-fields) - Project ID Field in future steps. Under **Tasks To Return**, select **Return first matching task**.

​

    4.   Under **Identify Tasks**, select **New Filter**.

Fill in the fields as such - **Field**: Task Content, **Condition**: Contains (Text).

    5.   Under **Value**, reference the **Sender's Email** by typing the **@ symbol**.

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508359211/cfbd02f89b5631b3a0bb065a0afe/Helpcenter+SS3.png?expires=1757790900&signature=882286121bd72d5a8388b2c3326cd6347028eba07f65dff6a6d09e5f0a5f4ad7&req=dSUnHsp7lINeWPMW1HO4zd4h4QufCOhpxvhElNcwwd1KLaV3QxLjviry5P5A%0AR5%2B%2F%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508359211/cfbd02f89b5631b3a0bb065a0afe/Helpcenter+SS3.png?expires=1757790900&signature=882286121bd72d5a8388b2c3326cd6347028eba07f65dff6a6d09e5f0a5f4ad7&req=dSUnHsp7lINeWPMW1HO4zd4h4QufCOhpxvhElNcwwd1KLaV3QxLjviry5P5A%0AR5%2B%2F%0A)

    6.   In the**Ask Agent**Action, select the **Email Analyzer Agent**included in the kit, and input a prompt to breakdown information from the email as needed. Type the **@ symbol** to reference content from the **New Email** Trigger.

    7.   Change Output Type to **Structured Output**. Add a **Text Field** and name it Tasks. Structured Output is used to ensure that the output from the Ask Agent Action will not contain extra verbiage from the AI.

​

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508368076/2d8b275ac0984ca83ff4fe2e3ed3/Helpcenter+SS6.png?expires=1757790900&signature=c45a33f95b8ff9863d8d5c096f73abc8b22e969346487f15878e1574ee45421d&req=dSUnHsp4lYFYX%2FMW1HO4ze6T8GA%2BjlL99IkI9%2FbPwHl7zUq3RMylm4cR%2BbH%2B%0AFTTJ%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508368076/2d8b275ac0984ca83ff4fe2e3ed3/Helpcenter+SS6.png?expires=1757790900&signature=c45a33f95b8ff9863d8d5c096f73abc8b22e969346487f15878e1574ee45421d&req=dSUnHsp4lYFYX%2FMW1HO4ze6T8GA%2BjlL99IkI9%2FbPwHl7zUq3RMylm4cR%2BbH%2B%0AFTTJ%0A)

    8.   In the **Path Condition A** action.

Fill in the fields as such - **Data**: Find Task(s) -> Task Content. **Condition**: Contains (Text).

    9.   Under **Value**, reference the **Sender's Email** by typing the **@ symbol**.

​

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508360958/f4bc2c22c309ee6829690e20b6af/Helpcenter+SS7.png?expires=1757790900&signature=4f8e916e09cad68d9f0cb7b7aaa3a80d46d8fff9e40869b77676a84c4758f9d4&req=dSUnHsp4nYhaUfMW1HO4zT7JpV%2Bft4b89xvV6zLCVZ%2FJ2hRXQQ0sQbD4IdcI%0AJzJY%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508360958/f4bc2c22c309ee6829690e20b6af/Helpcenter+SS7.png?expires=1757790900&signature=4f8e916e09cad68d9f0cb7b7aaa3a80d46d8fff9e40869b77676a84c4758f9d4&req=dSUnHsp4nYhaUfMW1HO4zT7JpV%2Bft4b89xvV6zLCVZ%2FJ2hRXQQ0sQbD4IdcI%0AJzJY%0A)

    10.   In the **Path Condition B** action, change the**Path Condition Type** to **Fallback**.

[![Image 8](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508362457/8c0b7da66d69ddcedb8d80284ebc/Helpcenter+SS8.png?expires=1757790900&signature=5d84716c35c10cc05ae8fd203a99f5bf8f595ad26df9996e1c083e9693969f1a&req=dSUnHsp4n4VaXvMW1HO4zasVAaNlz%2FHVt4yUIJ072XyOGdyQqhs7E36NuO0d%0AorqD%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508362457/8c0b7da66d69ddcedb8d80284ebc/Helpcenter+SS8.png?expires=1757790900&signature=5d84716c35c10cc05ae8fd203a99f5bf8f595ad26df9996e1c083e9693969f1a&req=dSUnHsp4n4VaXvMW1HO4zasVAaNlz%2FHVt4yUIJ072XyOGdyQqhs7E36NuO0d%0AorqD%0A)

*   Setting up the automation for existing partners

    1.   We will now set up the automation to work with existing partners. After the **Path Condition A** action, add the **[Add Task](https://help.taskade.com/en/articles/9787788-add-task-automation-action)** action. 

​

    2.   In the **Add Task** action, under **Project**, select **Enter Manually**. Type the **@ symbol**and select Project Field ID from **Find Task(s).**

Note that Project Field ID is a custom field added to the Partner Management project provided.

    3.   Under **Content**, reference the result from the **Ask Agent** (Breakdown Email) action by typing the**@ symbol**.

​

[![Image 9](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508369307/02a0945601191301cd70999f026f/Helpcenter+SS9.png?expires=1757790900&signature=1c8660cc7421535aa60238424cfa87bc48b3b3b1f9838f495396a3dae33e7b72&req=dSUnHsp4lIJfXvMW1HO4zcS3yRpComoHcf13M1aIxKf9%2BKtdbPu3IvA8RnLP%0AOLx8%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508369307/02a0945601191301cd70999f026f/Helpcenter+SS9.png?expires=1757790900&signature=1c8660cc7421535aa60238424cfa87bc48b3b3b1f9838f495396a3dae33e7b72&req=dSUnHsp4lIJfXvMW1HO4zcS3yRpComoHcf13M1aIxKf9%2BKtdbPu3IvA8RnLP%0AOLx8%0A)

*   Setting up the automation for new partners

    1.   We will now set up the automation to work with new partners. (Path B)

    2.   After the **Path Condition B** action, add the **Ask Agent**, **[Create Project](https://help.taskade.com/en/articles/8958370-create-a-project)** and **Add****Task** actions respectively.

​

[![Image 10](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508383170/edf874df2cb16985400e589bb3c0/Helpcenter+SS14.png?expires=1757790900&signature=0742d06321b2887f05a225e2548cb715c55b023cc87226adc22cead19788d942&req=dSUnHsp2noBYWfMW1HO4za9tl5KR%2Fbk7b1OIgjTnnqV2GG3G2wmfBkQpDXJq%0AnVs7%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508383170/edf874df2cb16985400e589bb3c0/Helpcenter+SS14.png?expires=1757790900&signature=0742d06321b2887f05a225e2548cb715c55b023cc87226adc22cead19788d942&req=dSUnHsp2noBYWfMW1HO4za9tl5KR%2Fbk7b1OIgjTnnqV2GG3G2wmfBkQpDXJq%0AnVs7%0A)

    3.   In the **Ask Agent** Action, select the **Email Analyzer Agent**and input a prompt to get the partner name from the email as needed. Type the **@ symbol** to reference content from the **New Email** Trigger.

​

    4.   Change Output Type to **Structured Output**. Add a **Text**Field and name it Partner Name.

​

[![Image 11](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508354676/737384a43dddfd22adeb5d064be6/Helpcenter+SS10.png?expires=1757790900&signature=15ea0116068cb41a40e92e0d791dbe6a31b3badd2e87cc54cb5928bd2fc3599f&req=dSUnHsp7mYdYX%2FMW1HO4zVBYrj%2Fh4idpYWH%2Bg20XogBStwkSXFh%2BeSWHUx51%0AwyF8%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508354676/737384a43dddfd22adeb5d064be6/Helpcenter+SS10.png?expires=1757790900&signature=15ea0116068cb41a40e92e0d791dbe6a31b3badd2e87cc54cb5928bd2fc3599f&req=dSUnHsp7mYdYX%2FMW1HO4zVBYrj%2Fh4idpYWH%2Bg20XogBStwkSXFh%2BeSWHUx51%0AwyF8%0A)

    5.   In the **Create Project**action, under Title, reference the output, Partner Name, from the**Ask Agent**action by typing the **@ symbol**.

    6.   Under Content, reference the output, Tasks, from the **Ask Agent**(Breakdown Email) action by typing the **@ symbol**.

​

[![Image 12](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508356278/2691c6a3d852bbf2d0d8f0c58815/Helpcenter+SS11.png?expires=1757790900&signature=d1a75598ae978e2d378681d92ce2b7085c0c89cb9f158dcce2762a6beda53d4a&req=dSUnHsp7m4NYUfMW1HO4zZgEx69PWFaUpn2BkVFMgpy99sCpnbFTpLrESWBs%0Av70O%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508356278/2691c6a3d852bbf2d0d8f0c58815/Helpcenter+SS11.png?expires=1757790900&signature=d1a75598ae978e2d378681d92ce2b7085c0c89cb9f158dcce2762a6beda53d4a&req=dSUnHsp7m4NYUfMW1HO4zZgEx69PWFaUpn2BkVFMgpy99sCpnbFTpLrESWBs%0Av70O%0A)

    7.   In the **Add Task** action, under Project, select the Partner Management Project.

    8.   Under content, reference the result from the **Ask Agent** (Get Company Name) action, and the**Sender's Email**, by typing the **@ symbol** respectively. 

​

    9.   Add the **Project ID Field** and reference the **Project ID** from **Create Project**by typing the **@ symbol.** This field is used to identify each project with its **Project ID**, allowing the automation to identify existing projects for the **Add Tasks** action in Path A.

    10.   Add the remaining fields and reference the relevant information from the previous actions or**New Email**trigger by using the **@ symbol** to fill up the columns with the right data. 

​

[![Image 13](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508364974/6fe53aeeadd20d442ad969299bd3/Helpcenter+SS12.png?expires=1757790900&signature=38b338dc4091bc4b699f62dedc549cccaf60b51ad54c4eca53bdd29ccb8b3781&req=dSUnHsp4mYhYXfMW1HO4zVFzzNdjAKj0pWQn%2Bu%2BKH%2F4JXd%2F8%2FsXRgGD1zX8a%0Al1wO%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508364974/6fe53aeeadd20d442ad969299bd3/Helpcenter+SS12.png?expires=1757790900&signature=38b338dc4091bc4b699f62dedc549cccaf60b51ad54c4eca53bdd29ccb8b3781&req=dSUnHsp4mYhYXfMW1HO4zVFzzNdjAKj0pWQn%2Bu%2BKH%2F4JXd%2F8%2FsXRgGD1zX8a%0Al1wO%0A)

Testing the Automation
----------------------

*   Testing the automation

    1.   Click on the slider next to **Share** to activate the flow.

​

[![Image 14](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508389263/185761bf0608368b571ba7805b7f/Helpcenter+SS15.png?expires=1757790900&signature=2de078ef9f10f90ab14f15c3a41cfb119081bff3130cc63c1fc655f26ece6b9e&req=dSUnHsp2lINZWvMW1HO4zVk0H6SxFG7WLFc6HXLuZFwdHL1xvLrk8RXFxJVd%0AfavG%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508389263/185761bf0608368b571ba7805b7f/Helpcenter+SS15.png?expires=1757790900&signature=2de078ef9f10f90ab14f15c3a41cfb119081bff3130cc63c1fc655f26ece6b9e&req=dSUnHsp2lINZWvMW1HO4zVk0H6SxFG7WLFc6HXLuZFwdHL1xvLrk8RXFxJVd%0AfavG%0A)

    2.   The **New Email** Trigger only checks for new emails every 15min. In this case you may want to quickly test it out with a**[Form](https://help.taskade.com/en/articles/9711589-ai-forms-automation-trigger)** trigger instead.

    3.   The automation titled: Gather and Manage Partner Information (testing) is included in the Kit for your convenience.

    4.   Replace the **New Email** trigger with a**Form** trigger. Add the typical email fields like Email, Email Subject, Email Body.

[![Image 15](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508391205/c8baf26e30a0667387053d3a9439/Helpcenter+SS5.png?expires=1757790900&signature=e7f3097891bbaa8a59f857a0059fad7fada9fa9fa72532695b84f8e1baa9692b&req=dSUnHsp3nINfXPMW1HO4zTAoHIwlf%2F0lo2%2BnXP19xh8PM6a1QdAMZUgvYhEx%0AIAD%2B%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508391205/c8baf26e30a0667387053d3a9439/Helpcenter+SS5.png?expires=1757790900&signature=e7f3097891bbaa8a59f857a0059fad7fada9fa9fa72532695b84f8e1baa9692b&req=dSUnHsp3nINfXPMW1HO4zTAoHIwlf%2F0lo2%2BnXP19xh8PM6a1QdAMZUgvYhEx%0AIAD%2B%0A)

    5.   Replace the references to **New Email** with references to the **Form** trigger respectively. Do this for the whole automation.

    6.   Click on the **Share**tab above to test the form. Fill in the form with necessary data and click run. 

​

[![Image 16](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508351316/422a404f3ab8f569aa4995bb2903/Helpcenter+SS1.png?expires=1757790900&signature=b7f08a2e897381f708adb20179f2b9cefa0c550d7123e120a0e1cfc7ec952365&req=dSUnHsp7nIJeX%2FMW1HO4zS226k2UbTTcbmKdFHU2wm1EPej35Za2aqjXhp67%0AYiI9%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1508351316/422a404f3ab8f569aa4995bb2903/Helpcenter+SS1.png?expires=1757790900&signature=b7f08a2e897381f708adb20179f2b9cefa0c550d7123e120a0e1cfc7ec952365&req=dSUnHsp7nIJeX%2FMW1HO4zS226k2UbTTcbmKdFHU2wm1EPej35Za2aqjXhp67%0AYiI9%0A)

    7.   To get the automation working for emails again, change the trigger to **New Email**, and change the references back accordingly.

​

Additional Customization
------------------------

Additional Actions

*   You can add an**[Add Knowledge To Agent](https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action)** action at the end of the automation, to add knowledge sources to an agent based on the emails received. This allows you to ask the agent information on each partner (gathered from the Email).

​

*   You can add a combination of **Ask Agent** and **[Send Email](https://help.taskade.com/en/articles/8958474-gmail-integration)** actions to craft and send follow-up emails based on the emails received.

### 😊**Helpful Links**

* * *

Related Articles

[Gather and Manage Customer Feedback](https://help.taskade.com/en/articles/9978689-gather-and-manage-customer-feedback)[Real Estate News Gathering](https://help.taskade.com/en/articles/10382856-real-estate-news-gathering)[Reseller Assessment Form](https://help.taskade.com/en/articles/10515541-reseller-assessment-form)[Daily Blog Article Generator](https://help.taskade.com/en/articles/10575689-daily-blog-article-generator)[Streamlining Contract Management](https://help.taskade.com/en/articles/11122004-streamlining-contract-management)

Did this answer your question?
