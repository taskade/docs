---
title: "Ask Agent Team (Automation Action)"
description: "Use AI Teams as part of your automation flows."
category: "search-automation"
source_url: "https://help.taskade.com/en/articles/11702371-ask-agent-team-automation-action"
intercom_id: "11702371"
state: "published"
date_created: "1751512345"
date_updated: "1751880138"
date_imported: "2025-09-13T19:42:26.856Z"
---

Title: Ask Agent Team (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/11702371-ask-agent-team-automation-action

Markdown Content:
Overview
--------

The Ask Agent Team action allows you to send prompts to your existing [AI Teams](https://help.taskade.com/en/articles/9586050-ai-teams), giving you a set of varied responses according to how you set it up. This allows for AI Teams functionality, right from your automation - allowing the output to be referenced in later actions.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607124040/ae17fc36bc03525fbc2efcabc580/CleanShot+2025-07-07+at+17_14_40%402x.png?expires=1757794500&signature=dc0008cc4beef11bd32c61a481b343e99fa79406aac75658ac0f067faaf020e4&req=dSYnEch8mYFbWfMW1HO4zboTaWy4%2FCf%2FPvMsbye3mQz2ssWC%2Fd%2Bpxbl3cPdx%0AffieTxzILAsDCpSlNP8%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607124040/ae17fc36bc03525fbc2efcabc580/CleanShot+2025-07-07+at+17_14_40%402x.png?expires=1757794500&signature=dc0008cc4beef11bd32c61a481b343e99fa79406aac75658ac0f067faaf020e4&req=dSYnEch8mYFbWfMW1HO4zboTaWy4%2FCf%2FPvMsbye3mQz2ssWC%2Fd%2Bpxbl3cPdx%0AffieTxzILAsDCpSlNP8%3D%0A)

**How to Use**
--------------

**Action Settings**
-------------------

This is the list of fields that need to be set up for this action.

**🏷️ Field****🔤 Description**
Agent Team The Agent Team that will process the prompt.
Execution Mode The execution mode the Agent Team will use.
Input The prompt you want the Agent Team to process.
Processing Type Configure what to extract from the conversation. Choose from custom or pre-built types.
Additional Prompt (Custom Processing Type)Give instructions about what you want to be extracted from the Team conversation.

**Execution Modes**
-------------------

Here are the available Execution Modes in this action. Each one will determine how the Agent Team processes the prompt.

​

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607127425/560cb7f5959056802c229505826e/CleanShot+2025-07-07+at+17_17_45%402x.png?expires=1757794500&signature=b54034324e7ae0d45861cd06a80752b6e1e24b3fd77869c87845543bfbb17d87&req=dSYnEch8moVdXPMW1HO4zTYrntQCxPCrH9LBOtfzlaCC%2BpxbAaAk3vZ7Voq%2F%0AFOxJVqioUMvo6HsbcgE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607127425/560cb7f5959056802c229505826e/CleanShot+2025-07-07+at+17_17_45%402x.png?expires=1757794500&signature=b54034324e7ae0d45861cd06a80752b6e1e24b3fd77869c87845543bfbb17d87&req=dSYnEch8moVdXPMW1HO4zTYrntQCxPCrH9LBOtfzlaCC%2BpxbAaAk3vZ7Voq%2F%0AFOxJVqioUMvo6HsbcgE%3D%0A)

**Processing Types**
--------------------

Here are the different processing types you can choose from. This will determine what is extracted from the conversation.

### Summary

This summarizes the AI conversation as if it were writing notes for a teammate who wasn’t present. The AI conversation is categorized into: a general summary, main objective, key suggestions and follow up actions.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607128437/bb6d7e923622e69d97e515afb37a/CleanShot+2025-07-07+at+17_18_28%402x.png?expires=1757794500&signature=5bedbe1f9f2f276e8b57ebd3b2f6ae711c6433e574368b390040b7696fd167d7&req=dSYnEch8lYVcXvMW1HO4zR%2BV6avAjQSZ2ZNBKW3QqgTq0vUs6i%2BZijWbEmM5%0AsZZnfx8o6K%2BgU%2B1oPu0%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607128437/bb6d7e923622e69d97e515afb37a/CleanShot+2025-07-07+at+17_18_28%402x.png?expires=1757794500&signature=5bedbe1f9f2f276e8b57ebd3b2f6ae711c6433e574368b390040b7696fd167d7&req=dSYnEch8lYVcXvMW1HO4zR%2BV6avAjQSZ2ZNBKW3QqgTq0vUs6i%2BZijWbEmM5%0AsZZnfx8o6K%2BgU%2B1oPu0%3D%0A)

### Lead Qualification

This analyzes and score sales leads based on their potential. The AI conversation is categorized into: Qualification, Fit Score, Budget Match, Timeline, and Next action.

​

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607129077/2fb0942cbe529a707d1f93315a96/CleanShot+2025-07-07+at+17_19_11%402x.png?expires=1757794500&signature=ed67a7167a373d9bfbd02c0e8310da6598cb0429e01a579e3e340908395617cc&req=dSYnEch8lIFYXvMW1HO4zUFkm7xPI174toHBRw87l3pc9gqdP%2BEiZRG69tuc%0Ax6bvYfpiROm8QLvtzy8%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607129077/2fb0942cbe529a707d1f93315a96/CleanShot+2025-07-07+at+17_19_11%402x.png?expires=1757794500&signature=ed67a7167a373d9bfbd02c0e8310da6598cb0429e01a579e3e340908395617cc&req=dSYnEch8lIFYXvMW1HO4zUFkm7xPI174toHBRw87l3pc9gqdP%2BEiZRG69tuc%0Ax6bvYfpiROm8QLvtzy8%3D%0A)

### Custom

Add your own prompt to give instructions about what you want to be extracted from the Team conversation. Add the appropriate fields that you want to be extracted.

​

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607130939/72b16a62c43789525a9d2eebd07c/CleanShot+2025-07-07+at+17_20_44%402x.png?expires=1757794500&signature=ab0cd8193061def1139fbfae23b6813e8f3f04f91346a8001791505974f231f1&req=dSYnEch9nYhcUPMW1HO4zUeOHU5q%2F%2BQe1ZxXTk4j77xWub5S4EWN5kuzmtxj%0A2zYMLMOjZ6e0d%2BvUmDI%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607130939/72b16a62c43789525a9d2eebd07c/CleanShot+2025-07-07+at+17_20_44%402x.png?expires=1757794500&signature=ab0cd8193061def1139fbfae23b6813e8f3f04f91346a8001791505974f231f1&req=dSYnEch9nYhcUPMW1HO4zUeOHU5q%2F%2BQe1ZxXTk4j77xWub5S4EWN5kuzmtxj%0A2zYMLMOjZ6e0d%2BvUmDI%3D%0A)

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Actions](https://help.taskade.com/en/articles/8958470-automation-actions)[Agent (Automation Action)](https://help.taskade.com/en/articles/8958471-agent-automation-action)[Taskade AI (Automation Action)](https://help.taskade.com/en/articles/8958472-taskade-ai-automation-action)[Agent Tool (Automation Trigger)](https://help.taskade.com/en/articles/9495506-agent-tool-automation-trigger)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)
