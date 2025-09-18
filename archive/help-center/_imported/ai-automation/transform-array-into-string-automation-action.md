---
title: "Transform Array Into String (Automation Action)"
description: "Converts arrays to a formatted strings for easy processing."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/10498015-transform-array-into-string-automation-action"
intercom_id: "10498015"
state: "published"
date_created: "1738414560"
date_updated: "1739396070"
date_imported: "2025-09-13T18:54:22.677Z"
---

Title: Transform Array Into String (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/10498015-transform-array-into-string-automation-action

Markdown Content:
Overview
--------

The Transform Array into String action converts the output of the [Find Task(s)](https://help.taskade.com/en/articles/8958470-automation-actions#h_f1c19f9c19) and [Find Row(s)](https://intercom.help/taskade/en/articles/8958475-google-sheets-integration) actions to a single, formatted string. This allows you to pass the list of items (array) directly to subsequent actions or AI Agents for further processing.

How to Use the Action
---------------------

*   **Configure** the **action** to **pull data** from an **existing project** or a Google Sheet doc.

​

    *   (2) **Choose** the **project** you want **to****search****for****tasks**.

​

    *   (3) **Choose****what****to****return**:

​

        *   **Return all matching tasks as array**: Retrieves every task that meets your criteria and outputs them as a complete array.

​

        *   Return the first matching task: Retrieves only the first task that meets your criteria, ignoring any subsequent matches.

​

    *   Decide what to do if not tasks are found:

​

        *   **Continue**: Proceeds with the automation.

​

        *   **Fail**: Stops the automation.

​

    *   (optional) Add more conditions under **Identify Tasks**.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1360912051/4ac3629a185c0669bb9ed4b0da88/transform-array-1.jpg?expires=1757791800&signature=4e2234b776c48302b8f30a2427a4e7257bb65e4238b6444804ae5f6f2094059e&req=dSMhFsB%2Fn4FaWPMW1HO4zUZcnXc7t%2FbKs0BUJAPrniVk%2BVUAzgJTX1qrZosx%0Ap%2FFWLV0s9ANEDVTKkvU%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1360912051/4ac3629a185c0669bb9ed4b0da88/transform-array-1.jpg?expires=1757791800&signature=4e2234b776c48302b8f30a2427a4e7257bb65e4238b6444804ae5f6f2094059e&req=dSMhFsB%2Fn4FaWPMW1HO4zUZcnXc7t%2FbKs0BUJAPrniVk%2BVUAzgJTX1qrZosx%0Ap%2FFWLV0s9ANEDVTKkvU%3D%0A)

*   **Add** the **Transform Array into String** action and configure it:

​

    *   **Choose** the **array** your want **to****transform**.

​

    *   **Select** the **items** to **transform** and **structure** the **output**.

​

    *   Choose**New Line**under**Join By**to insert a new line between each item.

💡 **Note**: You can preview the output of the action in the **Preview** section.

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364438470/f19a626aab623a11cfa6bdc183a4/saf.jpg?expires=1757791800&signature=d9937c93d8dab5eb3dbd10e4d98d9e831f836442246bc78f27b0458e9a1b462e&req=dSMhEs19lYVYWfMW1HO4zaXSAY7Q1y3TcO%2FbauFP0d6Oprb71v%2BtNTg9wFZC%0A0KnTnAz1u6BG%2BhLa%2FSc%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1364438470/f19a626aab623a11cfa6bdc183a4/saf.jpg?expires=1757791800&signature=d9937c93d8dab5eb3dbd10e4d98d9e831f836442246bc78f27b0458e9a1b462e&req=dSMhEs19lYVYWfMW1HO4zaXSAY7Q1y3TcO%2FbauFP0d6Oprb71v%2BtNTg9wFZC%0A0KnTnAz1u6BG%2BhLa%2FSc%3D%0A)

*   Add more steps and reference the output of **Transform Array into String**.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1360918958/fa71c6de231881a3f5a0c2771bae/transform-array-3.jpg?expires=1757791800&signature=65f5b22520222a3e57ca57c3f9c6ef44fcc0c7379a13dbb57125ea797d8e347d&req=dSMhFsB%2FlYhaUfMW1HO4zRplXnQ5Y1%2FVeJkbhCG1nsI6GKZq7W%2FYjjKIJAyl%0ArNvLw1dtZAg6m8eH39Q%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1360918958/fa71c6de231881a3f5a0c2771bae/transform-array-3.jpg?expires=1757791800&signature=65f5b22520222a3e57ca57c3f9c6ef44fcc0c7379a13dbb57125ea797d8e347d&req=dSMhFsB%2FlYhaUfMW1HO4zRplXnQ5Y1%2FVeJkbhCG1nsI6GKZq7W%2FYjjKIJAyl%0ArNvLw1dtZAg6m8eH39Q%3D%0A)

*   **Add** a **trigger**and**configure** it in the **sidebar****on****the****right**.

**Action Settings**
-------------------

You can easily control the output of the **Transform Array into String** action:

**🏷️ Field****🔤 Purpose**
**Array**Select the input array that you want to transform to a string. This is the output from Find Task(s) or Find Row(s) actions.
**Transform Each Item to String**Choose the elements of the array to transform and structure the output.
**Join By**Specify the delimiter inserted between each item in the transformed array.

Use Cases
---------

Not sure where to start? Here are a few ideas on how to use the action:

**Daily Task Summary**
----------------------

**Goal:** Automatically compile a list of tasks and send it to your team.

*   **Trigger:**[Schedule](https://intercom.help/taskade/en/articles/10477405-schedule-automation-trigger)**(Run daily at 9 AM)**

​

*   **Actions:**

​

    *   Find Task(s)**:** Retrieve all tasks created in the last 24 hours.

​

    *   **Transform Array into String:** Convert the task list into a formatted message.

​

**Meeting Notes Summary**
-------------------------

**Goal:** Generate a summary of notes added to a project during a meeting.

*   **Trigger:****Project Completed**

​

*   **Actions:**

​

    *   **Find Task(s):** Retrieve all notes and action items from the completed project.

​

    *   **Transform Array into String:** Turn the output of Find Task(s) into a string.

​

    *   **Ask AI**: Generate a summary of the notes and highlight key takeaways.

​

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Add Knowledge to Agent (Automation Action)](https://help.taskade.com/en/articles/9994434-add-knowledge-to-agent-automation-action)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)[Google Docs Integration](https://help.taskade.com/en/articles/10101659-google-docs-integration)[Find Task(s) (Automation Action)](https://help.taskade.com/en/articles/10504418-find-task-s-automation-action)[Daily To-Do Reminder Automation](https://help.taskade.com/en/articles/10544835-daily-to-do-reminder-automation)
