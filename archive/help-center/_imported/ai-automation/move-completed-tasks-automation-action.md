---
title: "Move Completed Tasks (Automation Action)"
description: ""
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9743619-move-completed-tasks-automation-action"
intercom_id: "9743619"
state: "published"
date_created: "1723702854"
date_updated: "1727852332"
date_imported: "2025-09-13T19:01:35.386Z"
---

Title: Move Completed Tasks (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9743619-move-completed-tasks-automation-action

Markdown Content:
**What Is a Move Completed Tasks Automation?**
----------------------------------------------

A Move Completed Task automation is an automation that allows you to automatically move tasks to different areas of the same project when they are marked as completed. This helps to keep your project organised or help to update a status of a recurring task.

[![Image 1](https://downloads.intercomcdn.com/i/o/1146374040/9ece65074e59e8002aab5f7e/Overall+View+Done.png?expires=1757791800&signature=47c9c91c569e26132d849e71474d4d898d868ebfe0ffd80734da75d31bc92957&req=dSEjEMp5mYFbWfMW1HO4zZ9KIdnjrsalK1CzCYTAB0nWqFgGW6WvlGi1pQcT%0AhXFc2Fb%2BTG3F3f8ucmo%3D%0A)](https://downloads.intercomcdn.com/i/o/1146374040/9ece65074e59e8002aab5f7e/Overall+View+Done.png?expires=1757791800&signature=47c9c91c569e26132d849e71474d4d898d868ebfe0ffd80734da75d31bc92957&req=dSEjEMp5mYFbWfMW1HO4zZ9KIdnjrsalK1CzCYTAB0nWqFgGW6WvlGi1pQcT%0AhXFc2Fb%2BTG3F3f8ucmo%3D%0A)

**Getting Started with Automations**
------------------------------------

Here are the [triggers](https://intercom.help/taskade/en/articles/8958469)&[actions](https://intercom.help/taskade/en/articles/8958467)you will use in this automation:

**How It Works**
----------------

In this example we will create a Move Completed Task automation for a specific project and have completed tasks automatically move to a completed block within the project.

### Task Completed Trigger

First lets set up the Task Completed Trigger.

[![Image 2](https://downloads.intercomcdn.com/i/o/1146375867/eb1eb90e91c3970cb6eb0f55/Create+Automation+Done.png?expires=1757791800&signature=ac4a69c74f80f5a8fead1e76514da680a44469dd9aa34f9bf8d5b5bb4102f2bd&req=dSEjEMp5mIlZXvMW1HO4zV2MYAlt11ml6tLU%2FNTFmFmcWvsQ93q51wummU8T%0A0R0ZBTJM1LIO93cQT%2B8%3D%0A)](https://downloads.intercomcdn.com/i/o/1146375867/eb1eb90e91c3970cb6eb0f55/Create+Automation+Done.png?expires=1757791800&signature=ac4a69c74f80f5a8fead1e76514da680a44469dd9aa34f9bf8d5b5bb4102f2bd&req=dSEjEMp5mIlZXvMW1HO4zV2MYAlt11ml6tLU%2FNTFmFmcWvsQ93q51wummU8T%0A0R0ZBTJM1LIO93cQT%2B8%3D%0A)

[![Image 3](https://downloads.intercomcdn.com/i/o/1146377927/ed48918d27be8c77c12b2cd6/Select+Trigger+Done.png?expires=1757791800&signature=6c9ef158e6c94589087969c3ffa6a3b7900ed26ec4eef7fe7ea5db91ca2ea460&req=dSEjEMp5mohdXvMW1HO4zb4X2%2Fi2LuWyX1ab%2B2Jxqf17MLsxYykKfoYb49O3%0Ai55XBHS1v%2FptMRlfz1k%3D%0A)](https://downloads.intercomcdn.com/i/o/1146377927/ed48918d27be8c77c12b2cd6/Select+Trigger+Done.png?expires=1757791800&signature=6c9ef158e6c94589087969c3ffa6a3b7900ed26ec4eef7fe7ea5db91ca2ea460&req=dSEjEMp5mohdXvMW1HO4zb4X2%2Fi2LuWyX1ab%2B2Jxqf17MLsxYykKfoYb49O3%0Ai55XBHS1v%2FptMRlfz1k%3D%0A)

[![Image 4](https://downloads.intercomcdn.com/i/o/1146376649/1d9897359ef2b2ec1d170599/Trigger+Overview+Done.png?expires=1757791800&signature=1b2acb21fdfbe5fc7f81273bbc28262f519edc0b6b332984ee83fdbfcc3a8f7a&req=dSEjEMp5m4dbUPMW1HO4zQmn%2BTuxOqFMz1uMbbXzF0KFOLdH3Em3drWuQZuR%0AyGnw4%2FHK6Kj1L66LtIQ%3D%0A)](https://downloads.intercomcdn.com/i/o/1146376649/1d9897359ef2b2ec1d170599/Trigger+Overview+Done.png?expires=1757791800&signature=1b2acb21fdfbe5fc7f81273bbc28262f519edc0b6b332984ee83fdbfcc3a8f7a&req=dSEjEMp5m4dbUPMW1HO4zQmn%2BTuxOqFMz1uMbbXzF0KFOLdH3Em3drWuQZuR%0AyGnw4%2FHK6Kj1L66LtIQ%3D%0A)

With the **Task Completed Trigger**selected you will see the following fields:

4. Select the chosen Project in the Project Field.

5. Leave the Block Field blank.

[![Image 5](https://downloads.intercomcdn.com/i/o/1146378860/2f901a994c33b9bb0f53facd/Trigger+Select+Project+Done.png?expires=1757791800&signature=81f0d1a249bd5cb1a4b81d64c7a374ac0b4cb9bbaa82206428d1e611cd02fe39&req=dSEjEMp5lYlZWfMW1HO4zREXrWXdLPk98pxV8ezZP56Hv17qRcfavtqOO2uX%0AaSd%2F903iv7Wxi34qcj0%3D%0A)](https://downloads.intercomcdn.com/i/o/1146378860/2f901a994c33b9bb0f53facd/Trigger+Select+Project+Done.png?expires=1757791800&signature=81f0d1a249bd5cb1a4b81d64c7a374ac0b4cb9bbaa82206428d1e611cd02fe39&req=dSEjEMp5lYlZWfMW1HO4zREXrWXdLPk98pxV8ezZP56Hv17qRcfavtqOO2uX%0AaSd%2F903iv7Wxi34qcj0%3D%0A)

[![Image 6](https://downloads.intercomcdn.com/i/o/1146379878/4760ce114a174dcd265ecae0/Completed+Trigger+Done.png?expires=1757791800&signature=e1fcb57175870baa0c29d7a58e6240a2ea62a089718be91f5f5b66c0599750e4&req=dSEjEMp5lIlYUfMW1HO4zSGZjvecbkjyhF5WnGa%2FGwaJ3X4sSYJgXgcX8sQM%0AknQEzsjm5EdUNYOwdQA%3D%0A)](https://downloads.intercomcdn.com/i/o/1146379878/4760ce114a174dcd265ecae0/Completed+Trigger+Done.png?expires=1757791800&signature=e1fcb57175870baa0c29d7a58e6240a2ea62a089718be91f5f5b66c0599750e4&req=dSEjEMp5lIlYUfMW1HO4zSGZjvecbkjyhF5WnGa%2FGwaJ3X4sSYJgXgcX8sQM%0AknQEzsjm5EdUNYOwdQA%3D%0A)

### Move Task Within Project Action

Next lets set up the Move Task Within Project Action.

[![Image 7](https://downloads.intercomcdn.com/i/o/1146380796/a7d180b7bf9fd51240cc1e5f/Action+Overview+Done.png?expires=1757791800&signature=63d429eadcae1941dee78fdbab1188b4004836541b2064816127074910aa6481&req=dSEjEMp2nYZWX%2FMW1HO4za%2Fnrn0vGXw3YnIXHJKDM6ioDveBGchs8MYEsSVz%0Au31faVjpfIm9Q%2Bk3kDI%3D%0A)](https://downloads.intercomcdn.com/i/o/1146380796/a7d180b7bf9fd51240cc1e5f/Action+Overview+Done.png?expires=1757791800&signature=63d429eadcae1941dee78fdbab1188b4004836541b2064816127074910aa6481&req=dSEjEMp2nYZWX%2FMW1HO4za%2Fnrn0vGXw3YnIXHJKDM6ioDveBGchs8MYEsSVz%0Au31faVjpfIm9Q%2Bk3kDI%3D%0A)

With the **Move Task Within Project Action**selected you will see the following fields:

3. Select the same Project as the one selected in the Trigger.

4. Select the Task ID Field.

5. Type the @ symbol, select the **Task ID Variable**provided by the **Task Completed Trigger.**

6. Select the Destination Block Field.

7. Select the desired Block in the Project.

[![Image 8](https://downloads.intercomcdn.com/i/o/1146381449/2022cdc6c1b1f61726420a4e/Task+ID+field+Done.png?expires=1757791800&signature=c4aa33d6ab1684a90d915ddd52a67ff0f11933429ebfbe292d585955427854a8&req=dSEjEMp2nIVbUPMW1HO4zemBxVCQw6bQO9LlWl8Ugd3n5sii8a47cVX688C3%0A48tPCt72aahO28f8x%2Bg%3D%0A)](https://downloads.intercomcdn.com/i/o/1146381449/2022cdc6c1b1f61726420a4e/Task+ID+field+Done.png?expires=1757791800&signature=c4aa33d6ab1684a90d915ddd52a67ff0f11933429ebfbe292d585955427854a8&req=dSEjEMp2nIVbUPMW1HO4zemBxVCQw6bQO9LlWl8Ugd3n5sii8a47cVX688C3%0A48tPCt72aahO28f8x%2Bg%3D%0A)

[![Image 9](https://downloads.intercomcdn.com/i/o/1146383100/325de1d15de97e11007cd7eb/Completed+Action+Done.png?expires=1757791800&signature=f82120c7ebf4515163d2922912f22cfda20df383ea4854ead93ecec0b06d6b7a&req=dSEjEMp2noBfWfMW1HO4zeMsOBPDjwSZtuarTdz9xLCGDRaSBdEihs%2FKkmYC%0AOoIoc77ENr6HYbAbmdo%3D%0A)](https://downloads.intercomcdn.com/i/o/1146383100/325de1d15de97e11007cd7eb/Completed+Action+Done.png?expires=1757791800&signature=f82120c7ebf4515163d2922912f22cfda20df383ea4854ead93ecec0b06d6b7a&req=dSEjEMp2noBfWfMW1HO4zeMsOBPDjwSZtuarTdz9xLCGDRaSBdEihs%2FKkmYC%0AOoIoc77ENr6HYbAbmdo%3D%0A)

Running the Automation
----------------------

With the set up complete, rename the automation in the top left corner, click **Save Changes** and activate the automation by clicking on the toggle in the top right corner of the screen.

In this example, when any task is completed in the specified Project, it will be moved to the Completed Block.

[![Image 10](https://downloads.intercomcdn.com/i/o/1146384080/75e2df1447ab7d73ad4388a4/CleanShot+2024-08-15+at+16_04_58%402x.png?expires=1757791800&signature=3496b09a236d24f00bdad49af977192c2a11b5449b8e849e2300800013436d30&req=dSEjEMp2mYFXWfMW1HO4zUUouP%2BIcnilWLl9jwYBPbqBhPH6fbcgN4e%2BbbHg%0Ax6iMDdDfcfjzKTYy1Rg%3D%0A)](https://downloads.intercomcdn.com/i/o/1146384080/75e2df1447ab7d73ad4388a4/CleanShot+2024-08-15+at+16_04_58%402x.png?expires=1757791800&signature=3496b09a236d24f00bdad49af977192c2a11b5449b8e849e2300800013436d30&req=dSEjEMp2mYFXWfMW1HO4zUUouP%2BIcnilWLl9jwYBPbqBhPH6fbcgN4e%2BbbHg%0Ax6iMDdDfcfjzKTYy1Rg%3D%0A)

[![Image 11](https://downloads.intercomcdn.com/i/o/1146388748/7c5ea0dbc5d212016e1be2c2/CleanShot+2024-08-15+at+16_06_44.gif?expires=1757791800&signature=20a88f74923d9b1af270f65b26577986ef667b679feceabaaa9352ebc439e3ff&req=dSEjEMp2lYZbUfMW1HO4zUdsX4w6cxDYqTqEbkFBXltRIbeWGvwjylJm6XXR%0AuQpVYHZ7CLEyCL1l4N4%3D%0A)](https://downloads.intercomcdn.com/i/o/1146388748/7c5ea0dbc5d212016e1be2c2/CleanShot+2024-08-15+at+16_06_44.gif?expires=1757791800&signature=20a88f74923d9b1af270f65b26577986ef667b679feceabaaa9352ebc439e3ff&req=dSEjEMp2lYZbUfMW1HO4zUdsX4w6cxDYqTqEbkFBXltRIbeWGvwjylJm6XXR%0AuQpVYHZ7CLEyCL1l4N4%3D%0A)

Automation Variations
---------------------

The same automation can be configured in various ways to fit your workflow.

For example, if the:

The automation can now help track statuses of Tasks in a project's board view.

[![Image 12](https://downloads.intercomcdn.com/i/o/1146396796/850401ce805de5a9becf0feb/CleanShot+2024-08-15+at+16_14_37.gif?expires=1757791800&signature=cde98fb37ead284d0c5e6608930e5b6be025eb921cde4b60dad0aec71b6f3a1f&req=dSEjEMp3m4ZWX%2FMW1HO4ze5cAUoxrfbk7UtdTy58WQswYBqvCAKc1Vf%2FUY9y%0AlzKCL1aEs1rVYhaMoWw%3D%0A)](https://downloads.intercomcdn.com/i/o/1146396796/850401ce805de5a9becf0feb/CleanShot+2024-08-15+at+16_14_37.gif?expires=1757791800&signature=cde98fb37ead284d0c5e6608930e5b6be025eb921cde4b60dad0aec71b6f3a1f&req=dSEjEMp3m4ZWX%2FMW1HO4ze5cAUoxrfbk7UtdTy58WQswYBqvCAKc1Vf%2FUY9y%0AlzKCL1aEs1rVYhaMoWw%3D%0A)

#### 😊 Helpful Links

* * *

Related Articles

[Move Task (Automation Action)](https://help.taskade.com/en/articles/9895728-move-task-automation-action)[Task Completed (Automation Trigger)](https://help.taskade.com/en/articles/9896278-task-completed-automation-trigger)[Task Assigned (Automation Trigger)](https://help.taskade.com/en/articles/9901065-task-assigned-automation-trigger)[Task Due (Automation Trigger)](https://help.taskade.com/en/articles/9901674-task-due-automation-trigger)[Mark Task as Completed (Automation Action)](https://help.taskade.com/en/articles/11410590-mark-task-as-completed-automation-action)
