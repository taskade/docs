---
title: "Agent Tool (Automation Trigger)"
description: "Initiate custom automations during conversations with AI agents."
category: "paginated-import"
source_url: "https://help.taskade.com/en/articles/9495506-agent-tool-automation-trigger"
intercom_id: "9495506"
state: "published"
date_created: "1718779726"
date_updated: "1739358416"
date_imported: "2025-09-13T19:02:30.685Z"
---

Title: Agent Tool (Automation Trigger) | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/9495506-agent-tool-automation-trigger

Markdown Content:
**Overview**
------------

The Agent Tool trigger allows AI agents to initiate automated workflows during conversations. It also connects agents to third-party tools.

[![Image 1](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247247475/9832aa0b0321c624db3155d79f51/agent-tool-trigger.jpg?expires=1757791800&signature=fd96101134e2867f0aa448a079c48140291d367c3d192cc48d8a168ca5b1c052&req=dSIjEct6moVYXPMW1HO4zUXVat%2BTHOc9zcsxbjxytEslcvGB6plItHLUcAd4%0A2rcIP0qKK7g74inBpic%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247247475/9832aa0b0321c624db3155d79f51/agent-tool-trigger.jpg?expires=1757791800&signature=fd96101134e2867f0aa448a079c48140291d367c3d192cc48d8a168ca5b1c052&req=dSIjEct6moVYXPMW1HO4zUXVat%2BTHOc9zcsxbjxytEslcvGB6plItHLUcAd4%0A2rcIP0qKK7g74inBpic%3D%0A)

**Convert Automations into Tools**
----------------------------------

The Agent Tool trigger works in sync with [Agent Tools](https://help.taskade.com/en/articles/9314171-tools-for-ai-agents) in your [Custom AI Agents](https://help.taskade.com/en/articles/8958457-custom-ai-agents). The trigger exposes the automation as a new tool that can be used by the agent.

**1) Set Up Parameters**
------------------------

Parameters are a way to divide and categorize information to be used in the subsequent actions. In this example, we're going to define **Title** and **Content**. This will help AI understand what should be placed in which parameter.

[![Image 2](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373725314/b2838cf7a752f2c066ca5dcc19fb/agent-tool-trigger.jpg?expires=1757791800&signature=83e892da0aba276106b5a3584f6111288014dd4ccc82dd5b348494f4a4d95622&req=dSMgFc58mIJeXfMW1HO4zeLldV5yYc%2FgXGWyzKCnrziXuI74bmifKfKTp8FI%0Al2OlhmxqKdboAIco%2FBw%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373725314/b2838cf7a752f2c066ca5dcc19fb/agent-tool-trigger.jpg?expires=1757791800&signature=83e892da0aba276106b5a3584f6111288014dd4ccc82dd5b348494f4a4d95622&req=dSMgFc58mIJeXfMW1HO4zeLldV5yYc%2FgXGWyzKCnrziXuI74bmifKfKTp8FI%0Al2OlhmxqKdboAIco%2FBw%3D%0A)

**2) Reference Parameters**
---------------------------

After the parameters are set up, you can use them in the next Action, in this example, it is referenced in the input field for the Insert Row Google Sheets Action.

[![Image 3](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247244913/9b2b88095b0b7bd342b34facfc7b/agent-tool-parameters-2.jpg?expires=1757791800&signature=dd2d401e3b3740600f77f688df8892826e1b7c5945d06c286b3cb2475124e8f9&req=dSIjEct6mYheWvMW1HO4zWKMzRswDxNpK0nbF%2B6D4OTVpZ7ECs48a0trvqob%0Atl%2FKNpDZA3u93AfuUyE%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247244913/9b2b88095b0b7bd342b34facfc7b/agent-tool-parameters-2.jpg?expires=1757791800&signature=dd2d401e3b3740600f77f688df8892826e1b7c5945d06c286b3cb2475124e8f9&req=dSIjEct6mYheWvMW1HO4zWKMzRswDxNpK0nbF%2B6D4OTVpZ7ECs48a0trvqob%0Atl%2FKNpDZA3u93AfuUyE%3D%0A)

**3) Name the Automation**
--------------------------

Name the automation appropriately, as the AI will use its name to determine when to call it. Next, add the automation to your agent's tools and enable it.

[![Image 4](https://downloads.intercomcdn.com/i/o/1125365756/e2bbccc8a3319205ac590c1c/AT4.png?expires=1757791800&signature=034bf93c3f39cff744db0449b948f1f10192293053ce7b103a50436ccd7dc704&req=dSElE8p4mIZaX%2FMW1HO4zYkrM8HfTnDxMFQUT6ZG6ZouPwJtDPG02xPRuAd4%0AmvOgFlcdIAvwko6BSMo%3D%0A)](https://downloads.intercomcdn.com/i/o/1125365756/e2bbccc8a3319205ac590c1c/AT4.png?expires=1757791800&signature=034bf93c3f39cff744db0449b948f1f10192293053ce7b103a50436ccd7dc704&req=dSElE8p4mIZaX%2FMW1HO4zYkrM8HfTnDxMFQUT6ZG6ZouPwJtDPG02xPRuAd4%0AmvOgFlcdIAvwko6BSMo%3D%0A)

**4) Interact with the Agent**
------------------------------

Chat with the agent and mention the name of the automation to call the tool.

[![Image 5](https://downloads.intercomcdn.com/i/o/1125365861/9a6ea9e7d9002c24bad6d79a/AT5.png?expires=1757791800&signature=9e719795994b68734e2816fe186f553932d86ccd69be8316f590be31f1c26f1f&req=dSElE8p4mIlZWPMW1HO4zddumo6OSjYilQ1XaNUS4Y%2F2Rb7m%2B8FlzhFSvq1r%0ARkJvltkREBXDU7Uoo%2B8%3D%0A)](https://downloads.intercomcdn.com/i/o/1125365861/9a6ea9e7d9002c24bad6d79a/AT5.png?expires=1757791800&signature=9e719795994b68734e2816fe186f553932d86ccd69be8316f590be31f1c26f1f&req=dSElE8p4mIlZWPMW1HO4zddumo6OSjYilQ1XaNUS4Y%2F2Rb7m%2B8FlzhFSvq1r%0ARkJvltkREBXDU7Uoo%2B8%3D%0A)

**5) Approve the Trigger**
--------------------------

By default, agents will ask for your approval before they use a tool. However, you can enable automatic approval, which will allow agents to act autonomously.

To change approval settings:

[![Image 6](https://downloads.intercomcdn.com/i/o/plyqw4hf/1370393299/7bef35b3082b1e86ba6a5ee74ea2/agent-tool-approval.jpg?expires=1757791800&signature=3baf96bbd81d78d929d91531c48ca0e5e44fdf57a64df087f9228587d647dadf&req=dSMgFsp3noNWUPMW1HO4zaYLTpw%2FRcMN%2BSzn%2FZ1udcIvCQjrLVwmbwD%2BY1iG%0AwTibP3d4X087B44wr6Y%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1370393299/7bef35b3082b1e86ba6a5ee74ea2/agent-tool-approval.jpg?expires=1757791800&signature=3baf96bbd81d78d929d91531c48ca0e5e44fdf57a64df087f9228587d647dadf&req=dSMgFsp3noNWUPMW1HO4zaYLTpw%2FRcMN%2BSzn%2FZ1udcIvCQjrLVwmbwD%2BY1iG%0AwTibP3d4X087B44wr6Y%3D%0A)

**(optional) Define Output**
----------------------------

You can control the output of custom agent tools using the **Agent Tool Output**field at the bottom of your automation flow. Here's how to set it up:

[![Image 7](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767847/053f2fbc1308c80d954064bf23ac/agent-tool-output-1.jpg?expires=1757791800&signature=f4a0777e49fe89dee24dbaafbe8017d4e8e2aa56c8668f13368df032b0fc1618&req=dSMgFc54molbXvMW1HO4zU3OMfF9K0J68MuRmFJiTKi9OO6f3wx5576%2Bu47z%0AZ6AGeEvv%2FShxX4IX87c%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767847/053f2fbc1308c80d954064bf23ac/agent-tool-output-1.jpg?expires=1757791800&signature=f4a0777e49fe89dee24dbaafbe8017d4e8e2aa56c8668f13368df032b0fc1618&req=dSMgFc54molbXvMW1HO4zU3OMfF9K0J68MuRmFJiTKi9OO6f3wx5576%2Bu47z%0AZ6AGeEvv%2FShxX4IX87c%3D%0A)

[![Image 8](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767845/37cb31f068e3d43894572e202e0a/agent-tool-output-2.jpg?expires=1757791800&signature=f48b46311562af7c8cc34b6cd170c6acbeb1a6662ef6b99741657597d06073b2&req=dSMgFc54molbXPMW1HO4zSblTT1ws59s%2FYlW%2Bpn2ELEJlOBhCFaUgB6WbUmB%0ABUIMl8NYNYG3ZnQN1hM%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767845/37cb31f068e3d43894572e202e0a/agent-tool-output-2.jpg?expires=1757791800&signature=f48b46311562af7c8cc34b6cd170c6acbeb1a6662ef6b99741657597d06073b2&req=dSMgFc54molbXPMW1HO4zSblTT1ws59s%2FYlW%2Bpn2ELEJlOBhCFaUgB6WbUmB%0ABUIMl8NYNYG3ZnQN1hM%3D%0A)

[![Image 9](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767843/e59d6bf7827709a7a9bd7288c0f5/agent-tool-output-3.jpg?expires=1757791800&signature=202bb8fbf2ce9bc609ece1ce2f828fe63f89675f520c1d4c23e1a6324758d7a9&req=dSMgFc54molbWvMW1HO4zQJ7VELsbnU2BPrOTa3oXQY13huixK%2BPL1AU9Ujp%0AT80hl%2B%2FNnkKh0hKMgkA%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767843/e59d6bf7827709a7a9bd7288c0f5/agent-tool-output-3.jpg?expires=1757791800&signature=202bb8fbf2ce9bc609ece1ce2f828fe63f89675f520c1d4c23e1a6324758d7a9&req=dSMgFc54molbWvMW1HO4zQJ7VELsbnU2BPrOTa3oXQY13huixK%2BPL1AU9Ujp%0AT80hl%2B%2FNnkKh0hKMgkA%3D%0A)

[![Image 10](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373770183/b263fbd86cf455c6446bb8ae8fb9/agent-tool-output-4.jpg?expires=1757791800&signature=6d416e483fd54e6b6887de2f46a00c5628bba5d851da47b658c749de420e04e3&req=dSMgFc55nYBXWvMW1HO4zTrh9vRcXamBkGz9OOC4UxVWa2XAnF6anDArcX31%0ACsg1oK2S2Z%2B%2BpQvkfu0%3D%0A)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373770183/b263fbd86cf455c6446bb8ae8fb9/agent-tool-output-4.jpg?expires=1757791800&signature=6d416e483fd54e6b6887de2f46a00c5628bba5d851da47b658c749de420e04e3&req=dSMgFc55nYBXWvMW1HO4zTrh9vRcXamBkGz9OOC4UxVWa2XAnF6anDArcX31%0ACsg1oK2S2Z%2B%2BpQvkfu0%3D%0A)

### **😊 Helpful Links**

### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Agent (Automation Action)](https://help.taskade.com/en/articles/8958471-agent-automation-action)[Webhooks (Automation Trigger)](https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)[Agent Public Chat Ended (Automation Trigger)](https://help.taskade.com/en/articles/10255741-agent-public-chat-ended-automation-trigger)[Tools for AI Agents (Mobile)](https://help.taskade.com/en/articles/11501412-tools-for-ai-agents-mobile)
