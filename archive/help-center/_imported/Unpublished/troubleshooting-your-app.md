---
title: "Troubleshooting Your App"
description: "<h1 id=\"h_2beb788486\"><b>Overview</b></h1><p class=\"no-margin\">Building with AI is like having a conversation with a good friend who wants to help but..."
url: "https://help.taskade.com/en/articles/11972868-troubleshooting-your-app"
updated_at: "1756354436"
intercom_id: "11972868"
---

Overview

Building with AI is like having a conversation with a good friend who wants to help but sometimes needs clarification. So, don't worry if your first result isn't perfect. Think of troubleshooting as teaching Genesis to understand your business better. 

Why Things  Go Sideways

Before we dive in, let's understand why Genesis might miss the mark. Most of the time, it's because we humans aren't always great at describing what we want.

Common culprits:

- We assume Genesis knows our industry context.
​

- We focus on features instead of explaining the actual problem.
​

- We forget to mention who will use the app and how.
​

- We use vague language when we need to be specific.

The good news? Once you know what to look for, these issues are easy to fix.

Get Back on Track

This is the classic "I asked for a booking system and got... something else entirely" situation. Don't panic! This usually means Genesis needed more context.

Here's how to fix it:

Start by explaining the real-world problem you're solving.

Instead of saying "I need a booking system," try something like:

`"I run a massage therapy practice where clients need to book 60 or 90-minute sessions with specific therapists. Clients should see available time slots, pay a deposit through Stripe, and get confirmation emails. We also need to block out lunch breaks and handle last-minute cancellations."`

See the difference? The second prompt gives Genesis real business context.

💡 Note: Pretend you're explaining your business to someone who's never worked in your industry. That level of detail will get Genesis on the right track.

Add Missing Features

Sometimes Genesis builds exactly what you asked for, but you realize you forgot something. You're focused on the main feature and missed supporting processes.

Here's how to fix it:

Walk through the complete user journey from start to finish. What happens before someone uses your main feature? What needs to happen afterward?

For example, if you built a contact form but forgot about file uploads:

`"The contact form looks great, but I also need clients to upload project briefs and reference materials when they submit requests. Add a secure file upload section that accepts PDFs and images up to 10MB."`💡 Note: Think like your users. What would frustrate them if it was missing? What would make their experience smooth and complete?

Build On Brand

Generic-looking apps don't inspire trust or excitement. If your app feels like it could belong to any business, it's time to add some personality.

Here's how to fix it:

Describe your business personality in simple terms:

- `"We're a yoga studio, so make it feel calm and zen—soft colors like sage green and cream, rounded corners, and peaceful vibes"`
- `"We're a fitness gym, so make it energetic—bold colors like orange and black, strong typography, and buttons that motivate action"`
- `"We're a law firm, so keep it professional but approachable—navy blue and gray colors, clean lines, and trustworthy messaging"`

💡 Note: Don't just say "make it look professional." Tell Genesis what professional means for your specific business and audience.

Connect Integrations

Integration issues usually come down to unclear instructions about data flow. Genesis needs to know exactly what information goes where and when.

Here's how to fix it:

Instead of limiting instructions to:

`"Connect this to Slack"`

Write prompts that are specific and logical:

`"When someone submits the contact form, send a message to our #leads Slack channel with the person's name, email, and which service they're interested in. Include a link to their full submission."`💡 Note: Test with real workspaces and email addresses, not dummy accounts. This helps you catch authentication and permission issues early.

Speed Things Up

Speed issues usually come from trying to do too much at once: loading heavy images, displaying too many items, or running complex processes.

Visual performance problems to watch for:

- Large images that take forever to load.
​

- Too many items displayed on one screen.
​

- Heavy animations or effects that make scrolling choppy.
​

- Complex layouts with lots of elements competing for attention.

Here's how to fix it:

- `"Make this load faster by showing the booking calendar first, then loading the service descriptions and pricing in the background. Most people just want to see available times right away."`
- `"The homepage is loading too slowly because of all those high-resolution photos. Compress the images and only show 3-4 key services upfront, with a 'See More' button for the rest."`
- `"Simplify the dashboard by showing just the essential metrics first—revenue, bookings, and alerts. Move the detailed charts and reports to a separate tab so the main view loads instantly."`

💡 Note: Genesis can optimize automatically. Just say "make this faster" and it will identify the biggest performance bottlenecks.

Start Fresh

Sometimes it's faster to rebuild than to keep patching. Consider starting over if:

- You've made multiple major change requests and it still doesn't feel right.
​

- You learned something fundamental about your users that changes everything.
​

- The app became overly complex while trying to fix multiple issues.
​

- You realized you need a completely different type of solution.

Here's how to fix it:

- Write down everything you learned from the first attempt.
​

- Create a much more detailed prompt using those insights.
​

- Include specific examples of what should and shouldn't happen.
​

- Reference other apps: "Like the booking flow on [website], but simpler"

Starting over isn't failure; it's using valuable learning to build something better.

A Blank Screen

Sometimes after editing the app multiple times or resuming the app you are met with a blank screen or screen stuck on "Spinning up" indefinitely.

Why this happens:
​

When an app is updated with new features or changes, it can sometimes causes internal errors in what files are referenced or what libraries its using, the error may not clearly be displayed on the app preview page, causing a blank screen.

When an app is resumed, it can sometimes have an incorrect reference to where the app's code is stored in your server, for example you typed "go.oogle.com" instead of "google.com".

How to fix it:

You need to prompt the AI to help correct the errors to get your app showing again. Starting a brand new chat also helps. Here are some prompts you can give the AI to help get back your app.

- `I can't see my app, please help. `

- `The app is showing a blank screen, please resolve it.`

- `Help fix any errors with the app and show the preview.`

Common Error Messages

You are busy creating your app but you run into errors in the chat box that are too technical and don't seem to make sense, here are list of common errors, why they happen and how you can resolve them.

Context Limit

Error Message:

`"input length and `max_tokens` exceed context limit: 197180 + 8192 &gt; 200000"`

Why this happens:

The prompt given or trying to be executed is too large for the the AI to handle in one go, it can also be trying to change too many things in the app at once when you prompt it to fix errors or modify the app. Note that this is not related to the number of [AI requests]($1) for your account.

How to resolve it:

Click on the "Fix me" button to retry the prompt or modify the prompt by including phrases like "do this in smaller chunks" or use a simplified prompt instead.

Machine Limit

Error Message:

`"Your organization has reached its machine limit. Please contact billing@XYZ“`

Why this happens:

Each App runs on its own machine. If too many Apps are active across Taskade at the same time, the system can reach its capacity limit. When this happens, no new Apps can be created until resources become available.

How to resolve it:

If you see an overcapacity message when creating a new App, it means all available machines are in use. Please wait and try again later – Resources free up automatically as other Apps go to sleep or are deleted.

Once resources are available, you’ll be able to create new Apps as usual. 

Anthropic Limits

Error Message:

`"Your credit balance is too low to access the Anthropic API. Please go to Plans &amp; Billing to upgrade or purchase credits."`

Why this happens:

Each App's changes and generation is using Anthropic's LLM model at the moment. If too many Apps are active and in use across Taskade at the same time, we reach the limit on the LLM. When this happens, no new Apps can be created or edited until resources become available.

How to resolve it:

Please wait and try again later.

😊 Helpful Links

- Download our apps: [taskade.com/downloads]($1)
​

- Leave feedback: [taskade.com/feedback]($1)
​

- Changelog: [taskade.com/blog/updates]($1)
​

- Watch tutorials: [youtube.com/taskade]($1)
​

- Contact us: [taskade.com/contact]($1)