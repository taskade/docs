---
title: "Ask Agent Team (Automation Action)"
description: "Use AI Teams as part of your automation flows."
category: "ai-agents"
source_url: "https://help.taskade.com/en/articles/11702371-ask-agent-team-automation-action"
intercom_id: "11702371"
state: "published"
date_created: "1751512345"
date_updated: "1751880138"
date_imported: "2025-09-13T18:43:41.248Z"
---

Title: Ask Agent Team (Automation Action) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/11702371-ask-agent-team-automation-action

Markdown Content:
Overview
--------

The Ask Agent Team action allows you to send prompts to your existing [AI Teams](https://help.taskade.com/en/articles/9586050-ai-teams), giving you a set of varied responses according to how you set it up. This allows for AI Teams functionality, right from your automation - allowing the output to be referenced in later actions.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607124040/ae17fc36bc03525fbc2efcabc580/CleanShot+2025-07-07+at+17_14_40%402x.png?expires=1757790000&signature=2223d2e6af12d6a4c4e412de7cec6583c0e7ec2b39d000a73e0a6164ff912c63&req=dSYnEch8mYFbWfMW1HO4zboTaWy4%2FCP6PvMsbye3mQzgMce4S6Jxd4i%2BkEZu%0AEJuIOJfiZFeZLvLAN8s%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607124040/ae17fc36bc03525fbc2efcabc580/CleanShot+2025-07-07+at+17_14_40%402x.png?expires=1757790000&signature=2223d2e6af12d6a4c4e412de7cec6583c0e7ec2b39d000a73e0a6164ff912c63&req=dSYnEch8mYFbWfMW1HO4zboTaWy4%2FCP6PvMsbye3mQzgMce4S6Jxd4i%2BkEZu%0AEJuIOJfiZFeZLvLAN8s%3D%0A)

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

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607127425/560cb7f5959056802c229505826e/CleanShot+2025-07-07+at+17_17_45%402x.png?expires=1757790000&signature=3c7eba7debb713c010a9882eed74fea46a9ad966e235cdde1c4a283029b947b5&req=dSYnEch8moVdXPMW1HO4zTYrntQCxPSuH9LBOtfzlaDnOjV6nmiWjQX3NmJz%0Az7O2Y59ScXYr6rVZAFI%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607127425/560cb7f5959056802c229505826e/CleanShot+2025-07-07+at+17_17_45%402x.png?expires=1757790000&signature=3c7eba7debb713c010a9882eed74fea46a9ad966e235cdde1c4a283029b947b5&req=dSYnEch8moVdXPMW1HO4zTYrntQCxPSuH9LBOtfzlaDnOjV6nmiWjQX3NmJz%0Az7O2Y59ScXYr6rVZAFI%3D%0A)

**Processing Types**
--------------------

Here are the different processing types you can choose from. This will determine what is extracted from the conversation.

### Summary

This summarizes the AI conversation as if it were writing notes for a teammate who wasn’t present. The AI conversation is categorized into: a general summary, main objective, key suggestions and follow up actions.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607128437/bb6d7e923622e69d97e515afb37a/CleanShot+2025-07-07+at+17_18_28%402x.png?expires=1757790000&signature=59ca7068a20f68000b578f52743bbe75d6368e7c3d3a0faa07cff265c760ea96&req=dSYnEch8lYVcXvMW1HO4zR%2BV6avAjQCc2ZNBKW3QqgRC6UarZn6nLwx3inZ1%0AO1c0ikINuAdei17RVgw%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607128437/bb6d7e923622e69d97e515afb37a/CleanShot+2025-07-07+at+17_18_28%402x.png?expires=1757790000&signature=59ca7068a20f68000b578f52743bbe75d6368e7c3d3a0faa07cff265c760ea96&req=dSYnEch8lYVcXvMW1HO4zR%2BV6avAjQCc2ZNBKW3QqgRC6UarZn6nLwx3inZ1%0AO1c0ikINuAdei17RVgw%3D%0A)

### Lead Qualification

This analyzes and score sales leads based on their potential. The AI conversation is categorized into: Qualification, Fit Score, Budget Match, Timeline, and Next action.

​

[![Image 4](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607129077/2fb0942cbe529a707d1f93315a96/CleanShot+2025-07-07+at+17_19_11%402x.png?expires=1757790000&signature=70de611e7924e644904a609088becda530f42866ee770336e2cbd5168dd87d2d&req=dSYnEch8lIFYXvMW1HO4zUFkm7xPI1r9toHBRw87l3rltqoebeUNcFQA4Uiy%0AqSNnYf%2BNQ6UoPTOFTe4%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607129077/2fb0942cbe529a707d1f93315a96/CleanShot+2025-07-07+at+17_19_11%402x.png?expires=1757790000&signature=70de611e7924e644904a609088becda530f42866ee770336e2cbd5168dd87d2d&req=dSYnEch8lIFYXvMW1HO4zUFkm7xPI1r9toHBRw87l3rltqoebeUNcFQA4Uiy%0AqSNnYf%2BNQ6UoPTOFTe4%3D%0A)

### Custom

Add your own prompt to give instructions about what you want to be extracted from the Team conversation. Add the appropriate fields that you want to be extracted.

​

[![Image 5](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607130939/72b16a62c43789525a9d2eebd07c/CleanShot+2025-07-07+at+17_20_44%402x.png?expires=1757790000&signature=68e2983ab689baf2975af9b75d0e083b3e480948998c4a3da163e670c906aeb6&req=dSYnEch9nYhcUPMW1HO4zUeOHU5q%2F%2BAb1ZxXTk4j77xZqITXl47Uk2Xy08CP%0A7TcQvUynudSnkim2lqk%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1607130939/72b16a62c43789525a9d2eebd07c/CleanShot+2025-07-07+at+17_20_44%402x.png?expires=1757790000&signature=68e2983ab689baf2975af9b75d0e083b3e480948998c4a3da163e670c906aeb6&req=dSYnEch9nYhcUPMW1HO4zUeOHU5q%2F%2BAb1ZxXTk4j77xZqITXl47Uk2Xy08CP%0A7TcQvUynudSnkim2lqk%3D%0A)

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Automation Actions](https://help.taskade.com/en/articles/8958470-automation-actions)[Agent (Automation Action)](https://help.taskade.com/en/articles/8958471-agent-automation-action)[Taskade AI (Automation Action)](https://help.taskade.com/en/articles/8958472-taskade-ai-automation-action)[Agent Tool (Automation Trigger)](https://help.taskade.com/en/articles/9495506-agent-tool-automation-trigger)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)
