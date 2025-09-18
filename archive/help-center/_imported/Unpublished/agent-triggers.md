---
title: "Agent Tool (Automation Trigger) | Taskade Help Center"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/9495506-agent-triggers"
article_id: "9495506"
imported_at: "2025-09-13T05:03:17.285Z"
---

**Overview**
------------

The Agent Tool trigger allows AI agents to initiate automated workflows during conversations. It also connects agents to third-party tools.

[![Image 1](../../.gitbook/assets/imported/agent-triggers-1.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247247475/9832aa0b0321c624db3155d79f51/agent-tool-trigger.jpg?expires=1757741400&signature=ff9e29e534fd3e8650b4afff229635a5ffb2110394a2fc89ff7b3d6feb7fed27&req=dSIjEct6moVYXPMW1HO4zUXVat%2BTEecxzcsxbjxytEt5d6hYKrNiwkcr9HoJ%0A4P412kvZD%2Fu8k82Iyxo%3D%0A)

**Convert Automations into Tools**
----------------------------------

The Agent Tool trigger works in sync with [Agent Tools](https://help.taskade.com/en/articles/9314171-tools-for-ai-agents) in your [Custom AI Agents](https://help.taskade.com/en/articles/8958457-custom-ai-agents). The trigger exposes the automation as a new tool that can be used by the agent.

**1) Set Up Parameters**
------------------------

Parameters are a way to divide and categorize information to be used in the subsequent actions. In this example, we're going to define **Title** and **Content**. This will help AI understand what should be placed in which parameter.

[![Image 2](../../.gitbook/assets/imported/agent-triggers-2.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373725314/b2838cf7a752f2c066ca5dcc19fb/agent-tool-trigger.jpg?expires=1757741400&signature=d7180c9e98f2e8e34f878e3317ced6cc628d10ed83302f71a723d9923ae7eea7&req=dSMgFc58mIJeXfMW1HO4zeLldV5ybM%2FsXGWyzKCnrzhW83GEhfNdCD%2BsBw%2FS%0AHAOeVFBQlAHD06MY0A4%3D%0A)

**2) Reference Parameters**
---------------------------

After the parameters are set up, you can use them in the next Action, in this example, it is referenced in the input field for the Insert Row Google Sheets Action.

[![Image 3](../../.gitbook/assets/imported/agent-triggers-3.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1247244913/9b2b88095b0b7bd342b34facfc7b/agent-tool-parameters-2.jpg?expires=1757741400&signature=93a842623c694148915c83ce8644a85ff4a3c15bb136c62f6eef081f18e1d3d7&req=dSIjEct6mYheWvMW1HO4zWKMzRswAhNlK0nbF%2B6D4ORGoAy%2Flz%2BDTYtiOSJc%0A4TTfk2HUFf7nfMYTiNI%3D%0A)

**3) Name the Automation**
--------------------------

Name the automation appropriately, as the AI will use its name to determine when to call it. Next, add the automation to your agent's tools and enable it.

[![Image 4](../../.gitbook/assets/imported/agent-triggers-4.png)](https://downloads.intercomcdn.com/i/o/1125365756/e2bbccc8a3319205ac590c1c/AT4.png?expires=1757741400&signature=b3deb68ecaa63abc7462913c8afe6489932591231cbe1b349b0c2ab52de4da28&req=dSElE8p4mIZaX%2FMW1HO4zYkrM8HfQ3D9MFQUT6ZG6ZpGzslV4xPNGqqp6rQq%0AKR5YcBSAdC78XuzyPWc%3D%0A)

**4) Interact with the Agent**
------------------------------

Chat with the agent and mention the name of the automation to call the tool.

[![Image 5](../../.gitbook/assets/imported/agent-triggers-5.png)](https://downloads.intercomcdn.com/i/o/1125365861/9a6ea9e7d9002c24bad6d79a/AT5.png?expires=1757741400&signature=55be074482eb17bedbc05b9b6441dafb9d3c271fc9336e588b9622a1ff549bc5&req=dSElE8p4mIlZWPMW1HO4zddumo6ORzYulQ1XaNUS4Y%2FVcn0JjVJDFdvVOmZq%0AjyILnjbzR%2FEN%2BoJgKt4%3D%0A)

**5) Approve the Trigger**
--------------------------

By default, agents will ask for your approval before they use a tool. However, you can enable automatic approval, which will allow agents to act autonomously.

To change approval settings:

[![Image 6](../../.gitbook/assets/imported/agent-triggers-6.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1370393299/7bef35b3082b1e86ba6a5ee74ea2/agent-tool-approval.jpg?expires=1757741400&signature=c8c084c2eadf49d48bfbb88cc303f9a889a80e096aac0bb41bb96f2a3d078437&req=dSMgFsp3noNWUPMW1HO4zaYLTpw%2FSMMB%2BSzn%2FZ1udcIyCi69557m%2Bi%2FcmpHw%0AZyDoRv7m%2Fq5h4kfgTfs%3D%0A)

**(optional) Define Output**
----------------------------

You can control the output of custom agent tools using the **Agent Tool Output**field at the bottom of your automation flow. Here's how to set it up:

[![Image 7](../../.gitbook/assets/imported/agent-triggers-7.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767847/053f2fbc1308c80d954064bf23ac/agent-tool-output-1.jpg?expires=1757741400&signature=48da7a844d9d361945e1788afa5d9e43f0238aad6dbc7f96f38427e571ec2d93&req=dSMgFc54molbXvMW1HO4zU3OMfF9JkJ28MuRmFJiTKgSpYugqQV21weFW7mp%0A0G7RHn%2FqhgzA1wwtHwc%3D%0A)

[![Image 8](../../.gitbook/assets/imported/agent-triggers-8.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767845/37cb31f068e3d43894572e202e0a/agent-tool-output-2.jpg?expires=1757741400&signature=7d5bf11c30213bcde5db00136f94f61b9444522e0eda54a3a2996f59a3477e6f&req=dSMgFc54molbXPMW1HO4zSblTT1wvp9g%2FYlW%2Bpn2ELHNbz98TtLERyE05%2FGD%0AVjtGe%2FrbDK4qvdt8cRQ%3D%0A)

[![Image 9](../../.gitbook/assets/imported/agent-triggers-9.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373767843/e59d6bf7827709a7a9bd7288c0f5/agent-tool-output-3.jpg?expires=1757741400&signature=3e23811685de26ca04d2563239b6d4f568e8346786da2ef2f1111202ce00e82c&req=dSMgFc54molbWvMW1HO4zQJ7VELsY3U6BPrOTa3oXQb9jfbQK2phznFM29xY%0A38mqNzI%2B1pjU4zUdlog%3D%0A)

[![Image 10](../../.gitbook/assets/imported/agent-triggers-10.jpg)](https://downloads.intercomcdn.com/i/o/plyqw4hf/1373770183/b263fbd86cf455c6446bb8ae8fb9/agent-tool-output-4.jpg?expires=1757741400&signature=2b039ab57e5d8afd78a5b767ca659cf008ab6d1c32238daf1b03749913fc748a&req=dSMgFc55nYBXWvMW1HO4zTrh9vRcUKmNkGz9OOC4UxWkoefA%2Fg%2Fiovq1ZaIC%0AG5ifYa5RzEN9NwOdCpk%3D%0A)
### **😊 Helpful Links**
### 🤖 **Taskade AI Essentials**

* * *

Related Articles

[Agent (Automation Action)](https://help.taskade.com/en/articles/8958471-agent-automation-action)[Webhooks (Automation Trigger)](https://help.taskade.com/en/articles/9494976-webhooks-automation-trigger)[Ask Agent With Structured Output (Automation Action)](https://help.taskade.com/en/articles/9994450-ask-agent-with-structured-output-automation-action)[Agent Public Chat Ended (Automation Trigger)](https://help.taskade.com/en/articles/10255741-agent-public-chat-ended-automation-trigger)[Tools for AI Agents (Mobile)](https://help.taskade.com/en/articles/11501412-tools-for-ai-agents-mobile)