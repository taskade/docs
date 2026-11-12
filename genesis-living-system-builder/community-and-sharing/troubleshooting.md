---
description: >-
  Fix a Taskade Genesis app that missed the mark: sharpen prompts, add missing features, match your brand, connect integrations, and resolve context-limit errors.
---

# Troubleshooting Your Genesis App

Your first app does not have to be perfect. Taskade Genesis builds from what you tell it. If the result is not correct, give it more details about your business. Each new detail makes the next version better.

## Why Things Go Sideways

Most apps miss the mark because the prompt leaves out a fact about the business. This list shows the usual gaps and the fix for each one.

### Common Reasons Apps Miss the Mark

**❌ "I assumed Genesis would know my business"**
- Taskade Genesis does not know that your yoga studio is for beginners, or that your restaurant is fast-casual.
- Fix: Tell it your type of business and what makes it different.

**❌ "I asked for features instead of describing my problem"**
- "I need a booking system" does not tell Taskade Genesis why your customers have a problem today.
- Fix: Give the real problem. For example: "Customers call during busy hours to book, and the calls interrupt service."

**❌ "I forgot to mention who will use this"**
- An app for young, tech-savvy customers needs a different design than an app for older customers.
- Fix: Describe your typical customer and how they like to use an app.

**❌ "I was too vague about what I wanted"**
- "Make it look professional" can mean corporate, medical, artistic, or modern.
- Fix: Give the exact style. For example: "Clean and medical-looking for our dental practice."

## Get Back on Track

**Problem:** "I asked for a booking system and got... something else entirely"

This result usually means that Taskade Genesis did not get enough facts about your business.

### How to Fix It

**Tell Taskade Genesis the real-world problem that the app must solve:**

❌ **Too vague:** "I need a booking system"

✅ **Much better:** "I run a massage therapy practice where clients need to book 60 or 90-minute sessions with specific therapists. Clients should see available time slots, pay a deposit through Stripe, and get confirmation emails. We also need to block out lunch breaks and handle last-minute cancellations."

### The Magic Formula

**Who + What + When + Why = Better Results**

```
[Who] needs to [What] because [Why], and it should [When/How]
```

**Examples:**

```
"Busy parents need to quickly book birthday party packages because they're planning last-minute, and it should show available dates, party themes, and total pricing upfront so they can decide immediately."

"Remote team members need to reserve conference rooms because we're back in the office 2 days a week, and it should prevent double-bookings, send calendar invites, and remind people 15 minutes before their meeting."
```

💡 **Tip:** Write your prompt for a person who never worked in your industry. That level of detail gives Taskade Genesis the facts it needs.

## Add Missing Features

**Problem:** Taskade Genesis built what you asked for, but you forgot an important part.

This problem occurs when you think about the main feature and forget the steps around it.

### How to Fix It

**Go through the full journey of a user, from start to finish:**

1. Write down what happens **before** a person uses the main feature.
2. Write down what must happen **during** the main task.
3. Write down what must happen **after** it.
4. Ask Taskade Genesis to add each missing step.

**Example: Contact Form Missing File Uploads**

```
"The contact form looks great, but I also need clients to upload project briefs and reference materials when they submit requests. Add a secure file upload section that accepts PDFs and images up to 10MB."
```

**Example: Booking System Missing Cancellation Policy**

```
"The booking system works well, but I need to add our cancellation policy. Customers should be able to cancel up to 24 hours before their appointment, and cancellations within 24 hours should charge a 50% fee. Send confirmation emails for all cancellations."
```

💡 **Think like your users:** A missing step that annoys a user is a step that you must add.

## Build On Brand

**Problem:** Your app looks generic. It can belong to any business.

A generic app does not give your customers trust or interest.

### How to Fix It

**Describe the personality of your business in simple words:**

**For a yoga studio:**
```
"We're a yoga studio, so make it feel calm and zen—soft colors like sage green and cream, rounded corners, and peaceful vibes. Use gentle language like 'find your session' instead of 'book appointment'."
```

**For a fitness gym:**
```
"We're a high-energy fitness gym, so make it feel motivating—bold colors like orange and black, strong typography, and action-oriented language like 'crush your workout' and 'claim your spot'."
```

**For a law firm:**
```
"We're a family law firm, so keep it professional but approachable—navy blue and gray colors, clean lines, and trustworthy messaging that makes people feel supported during difficult times."
```

### Brand Elements to Specify

Tell Taskade Genesis these parts of your brand:

- **Colors:** The hex codes, if you have them
- **Tone:** Professional, friendly, energetic, or calm
- **Language style:** Formal, casual, technical, or simple
- **Visual style:** Clean, bold, minimal, or detailed
- **Logo placement:** Where the logo goes and how large it is

💡 **"Make it look professional" is not enough.** Tell Taskade Genesis what professional means for your business and your customers.

## Connect Integrations

**Problem:** Your integrations do not work as you expect.

Most problems with integrations come from unclear instructions about which data goes where.

### How to Fix It

**Tell Taskade Genesis which information goes where, and when:**

❌ **Too vague:** "Connect this to Slack"

✅ **Clear and actionable:** "When someone submits the contact form, send a message to our #leads Slack channel with the person's name, email, and which service they're interested in. Include a link to their full submission."

### Integration Checklist

**For each integration, give these five facts:**

1. **Trigger:** The event that starts the integration
2. **Data:** The exact information to send
3. **Destination:** The place where the information goes
4. **Format:** How the information looks when it arrives
5. **Timing:** When the integration runs

**Example: CRM Integration**

```
"When someone books an appointment, automatically create a new contact in our HubSpot CRM with their name, email, phone, service booked, and appointment date. Tag them as 'New Client' and assign them to the team member who will provide their service."
```

💡 **Test with real accounts:** Use your real Slack workspace, email address, and CRM, not test accounts. Real accounts show permission problems early.

## Speed Things Up

**Problem:** Your app loads slowly or feels slow.

Speed problems usually come from too much work on one screen.

### Common Performance Problems

- **Large images** that load slowly
- **Too many items** on one screen
- **Heavy animations** that make the page jump when you scroll
- **Complex layouts** with many parts on one screen

### How to Fix It

**Show what users need first:**

```
"Make this load faster by showing the booking calendar first, then loading the service descriptions and pricing in the background. Most people just want to see available times right away."
```

**Make heavy content lighter:**

```
"The homepage is loading too slowly because of all those high-resolution photos. Compress the images and only show 3-4 key services upfront, with a 'See More' button for the rest."
```

**Make dashboards simpler:**

```
"Simplify the dashboard by showing just the essential metrics first—revenue, bookings, and alerts. Move the detailed charts and reports to a separate tab so the main view loads instantly."
```

💡 **Ask for one measurable improvement at a time.** For example, ask Taskade Genesis to make the images on the first screen smaller before you change the full dashboard.

## Start Fresh

Sometimes a new build is faster than more fixes. Start again in these cases:

- You asked for **many large changes**, and the app is still not correct.
- You **learned an important fact** about your users that changes the app.
- The app became **too complex** after many fixes.
- You need a **different type of app**.

### How to Start Over Successfully

1. **Write down what you learned** from the first attempt.
2. **Write a more detailed prompt** with those facts.
3. **Give examples** of what must happen and what must not happen.
4. **Name other apps that you like:** "Like the booking flow on [website], but simpler"

**A new start is not a failure.** You use what you learned to build a better app.

## Common Error Messages

### "Context Limit Exceeded"

**Error message:**
```
"input length and `max_tokens` exceed context limit: 197180 + 8192 > 200000"
```

**What it means:** Your request is too large for the AI to do in one step.

**Why it occurs:**
- Your prompt is very long.
- You ask for too many changes at the same time.
- The app has many features, so it is large.

**How to fix it:**
1. **Start a new chat.** Name one page or feature, and ask for one clear change. Test it before you ask for the next change.
2. **Break your request into smaller parts:**
   ```
   Instead of: "Change the colors, add file uploads, connect to Slack, update the layout, and add a payment system"
   
   Try: "First, let's change the colors to match our brand: blue (#1e40af) and white"
   ```
3. **Use simpler words:**
   ```
   Instead of: "Implement a comprehensive customer relationship management system with advanced analytics..."
   
   Try: "Add a simple way to track customer information and see which services they prefer"
   ```

### "Generation Failed"

**What it means:** The build of the app stopped with an error.

**How to fix it:**
1. **Make sure that your internet connection works**, then click **Try again**.
2. **Try a simpler version** of your prompt first.
3. **Refresh the page** and try again.
4. If the error continues, **contact support**.

### "Integration Error"

**What it means:** Taskade Genesis cannot connect to an outside service.

**How to fix it:**
1. **Make sure that your account has permission** to use the service.
2. **Make sure that you use the correct account.** Do not use a personal account for a business integration.
3. **Connect the service by hand** first, and test the connection.
4. **Make the integration simpler**, then add steps one at a time.

### A Button That Runs an Automation Says Wait

A button or form in your app can start an automation. Two messages tell you that the automation works and only needs time:

| What you see | Cause | Fix |
| --- | --- | --- |
| A test submission in Taskade shows **Still saving** and "is still running. Check its runs." | The automation takes longer than the app waits for an answer | Do not submit again. A second submit runs the automation a second time. Click **See run** or open the **Runs** tab to watch it finish. |
| A visitor sees "Too many requests from your network. Wait a minute, then try again." or "Too many requests from your network today. Try again tomorrow." | Each network can start each automation of the app only a limited number of times in a minute and in a day | Ask the visitor to wait a minute, or to try again the next day. The limit protects your credits and your automation runs. |

If the run in the **Runs** tab failed, open the run and fix the step. Then run the automation again.

### Restore a Working Version

If your app breaks after a change and a repair does not correct it, go back to an earlier version:

1. Open your app and go to Preview.
2. Open **Version history** from the toolbar.
3. Find the **Live** badge. It shows the version that visitors see now.
4. Preview the version that you want.
5. Click **Restore Version**, then test the app.

See [Version History](../genesis/version-history.md).

## When to Get Help

### Self-Service First

**Ask Taskade Genesis for help in the chat:**
```
"This booking system isn't quite right for my massage therapy business. What features should I add to make it work better for clients booking wellness appointments?"

"How can I improve the user experience for people submitting customer feedback on mobile devices?"

"What integrations would be most useful for a restaurant feedback app?"
```

### Contact Support

**Send an email to [support@taskade.com](mailto:support@taskade.com) in these cases:**
- You tried many fixes, and the problem continues.
- The same error message shows again and again.
- You need help with your account or your bill.
- You want an integration that is not on the list.

**Put this information in your request:**
- **What you want to build** (copy your prompt)
- **What you expected** to occur
- **What occurred** (add screenshots if they help)
- **Your app URL**, if the problem is in one app
- **The Error ID** on the error card, if one shows

### Community Help

**Join the community to get:**
- **Ideas** from apps that other users built
- **Tips** for better prompts
- **Advice for your industry** from other business owners
- **Partners** for larger projects

---

## Quick Troubleshooting Checklist

If your app does not work as you expect, answer these questions:

- [ ] **Is my prompt specific?** (Industry, users, business rules)
- [ ] **Did I give the full journey of a user?** (Before, during, after)
- [ ] **Do I test with real data?** (Real email addresses, real cases)
- [ ] **Did I describe the personality of my brand?** (Colors, tone, style)
- [ ] **Are my integration instructions clear?** (Which data goes where, and when)
- [ ] **Do I ask for too many changes at the same time?** (Make one change at a time)

**Remember:** Each attempt that misses the mark teaches Taskade Genesis more about your business. Use what you learn in your next prompt.

---

**Still stuck?** Describe the problem in the chat, and ask Taskade Genesis for a specific fix.

---

_Step-by-step guides on taskade.com/learn: [Troubleshooting Your App](https://www.taskade.com/learn/genesis/troubleshooting), [AI Error Recovery for Apps](https://www.taskade.com/learn/genesis/error-fixing)._
