---
title: "Troubleshooting Your App"
description: "When your app needs adjustments, here's how to get it just right."
category: "ai-agents"
source_url: "https://help.taskade.com/en/articles/11972868-troubleshooting-your-app"
intercom_id: "11972868"
state: "published"
date_created: "1754682942"
date_updated: "1756354436"
date_imported: "2025-09-13T18:43:20.660Z"
---

Title: Troubleshooting Your App | Taskade Help Center

URL Source: https://help.taskade.com/en/articles/11972868-troubleshooting-your-app

Markdown Content:
**Overview**
------------

Building with AI is like having a conversation with a good friend who wants to help but sometimes needs clarification. So, don't worry if your first result isn't perfect. Think of troubleshooting as teaching Genesis to understand your business better.

**Why Things Go Sideways**
--------------------------

Before we dive in, let's understand why Genesis might miss the mark. Most of the time, it's because we humans aren't always great at describing what we want.

**Common culprits:**

The good news? Once you know what to look for, these issues are easy to fix.

**Get Back on Track**
---------------------

This is the classic "I asked for a booking system and got... something else entirely" situation. Don't panic! This usually means Genesis needed more context.

**Here's how to fix it:**

Start by explaining the real-world problem you're solving.

Instead of saying "I need a booking system," try something like:

See the difference? The second prompt gives Genesis real business context.

**Add Missing Features**
------------------------

Sometimes Genesis builds exactly what you asked for, but you realize you forgot something. You're focused on the main feature and missed supporting processes.

**Here's how to fix it:**

Walk through the complete user journey from start to finish. What happens before someone uses your main feature? What needs to happen afterward?

For example, if you built a contact form but forgot about file uploads:

**Build On Brand**
------------------

Generic-looking apps don't inspire trust or excitement. If your app feels like it could belong to any business, it's time to add some personality.

**Here's how to fix it:**

Describe your business personality in simple terms:

**Connect Integrations**
------------------------

Integration issues usually come down to unclear instructions about data flow. Genesis needs to know exactly what information goes where and when.

**Here's how to fix it:**

Instead of limiting instructions to:

Write prompts that are specific and logical:

**Speed Things Up**
-------------------

Speed issues usually come from trying to do too much at once: loading heavy images, displaying too many items, or running complex processes.

Visual performance problems to watch for:

**Here's how to fix it:**

**Start Fresh**
---------------

Sometimes it's faster to rebuild than to keep patching. Consider starting over if:

**Here's how to fix it:**

Starting over isn't failure; it's using valuable learning to build something better.

**A Blank Screen**
------------------

Sometimes after editing the app multiple times or resuming the app you are met with a blank screen or screen stuck on "Spinning up" indefinitely.

**Why this happens:**

​

When an app is updated with new features or changes, it can sometimes causes internal errors in what files are referenced or what libraries its using, the error may not clearly be displayed on the app preview page, causing a blank screen.

When an app is resumed, it can sometimes have an incorrect reference to where the app's code is stored in your server, for example you typed "go.oogle.com" instead of "google.com".

**How to fix it:**

You need to prompt the AI to help correct the errors to get your app showing again. Starting a brand new chat also helps. Here are some prompts you can give the AI to help get back your app.

Common Error Messages
---------------------

You are busy creating your app but you run into errors in the chat box that are too technical and don't seem to make sense, here are list of common errors, why they happen and how you can resolve them.

### Context Limit

**Error Message:**

**Why this happens:**

The prompt given or trying to be executed is too large for the the AI to handle in one go, it can also be trying to change too many things in the app at once when you prompt it to fix errors or modify the app. Note that this is not related to the number of [AI requests](https://help.taskade.com/en/articles/8958455-taskade-ai-usage) for your account.

**How to resolve it:**

Click on the "Fix me" button to retry the prompt or modify the prompt by including phrases like "do this in smaller chunks" or use a simplified prompt instead.

### **Machine Limit**

**Error Message:**

**Why this happens:**

Each App runs on its own machine. If too many Apps are active across Taskade at the same time, the system can reach its capacity limit. When this happens, no new Apps can be created until resources become available.

**How to resolve it:**

If you see an overcapacity message when creating a new App, it means all available machines are in use. Please wait and try again later – Resources free up automatically as other Apps go to sleep or are deleted.

Once resources are available, you’ll be able to create new Apps as usual.

**Anthropic Limits**
--------------------

**Error Message:**

**Why this happens:**

Each App's changes and generation is using Anthropic's LLM model at the moment. If too many Apps are active and in use across Taskade at the same time, we reach the limit on the LLM. When this happens, no new Apps can be created or edited until resources become available.

**How to resolve it:**

Please wait and try again later.

### **😊 Helpful Links**

* * *

Related Articles

[Create Your First App](https://help.taskade.com/en/articles/11957643-create-your-first-app)[Prompt Library](https://help.taskade.com/en/articles/12037677-prompt-library)[Your First Genesis Prompt](https://help.taskade.com/en/articles/12068507-your-first-genesis-prompt)[Genesis App Gallery](https://help.taskade.com/en/articles/12123045-genesis-app-gallery)[Genesis Version History](https://help.taskade.com/en/articles/12269476-genesis-version-history)
