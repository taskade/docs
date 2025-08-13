# Troubleshooting Your Genesis App

Building with AI is like explaining your business to a really smart assistant who wants to help but sometimes needs more details. Don't worry if your first app isn't perfect - that's completely normal! Think of it as refining your idea until Genesis understands exactly what you need.

## Why Things Go Sideways

Before diving into fixes, let's understand why Genesis might miss the mark:

### Common Reasons Apps Miss the Mark

**❌ "I assumed Genesis would know my business"**
- Genesis is smart, but it doesn't know that your yoga studio focuses on beginners or that your restaurant is fast-casual
- Solution: Explain your business type and what makes it unique

**❌ "I asked for features instead of describing my problem"**
- Saying "I need a booking system" doesn't tell Genesis why customers currently struggle
- Solution: Explain the real problem - "Customers call during busy hours to book, interrupting service"

**❌ "I forgot to mention who will use this"**
- An app for tech-savvy millennials needs different design than one for elderly customers
- Solution: Describe your typical customer and how they prefer to interact

**❌ "I was too vague about what I wanted"**
- "Make it look professional" could mean corporate, medical, artistic, or trendy
- Solution: Be specific - "Clean and medical-looking for our dental practice"

## Get Back on Track

**Problem:** "I asked for a booking system and got... something else entirely"

This usually means Genesis needed more context about your specific business.

### How to Fix It

**Start by explaining the real-world problem you're solving:**

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

💡 **Pro tip:** Pretend you're explaining your business to someone who's never worked in your industry. That level of detail will get Genesis on the right track.

## Add Missing Features

**Problem:** Genesis built exactly what you asked for, but you forgot something important.

This happens when we focus on the main feature and miss supporting processes.

### How to Fix It

**Walk through the complete user journey from start to finish:**

1. What happens **before** someone uses your main feature?
2. What needs to happen **during** the main interaction?
3. What should happen **afterward**?

**Example: Contact Form Missing File Uploads**

```
"The contact form looks great, but I also need clients to upload project briefs and reference materials when they submit requests. Add a secure file upload section that accepts PDFs and images up to 10MB."
```

**Example: Booking System Missing Cancellation Policy**

```
"The booking system works well, but I need to add our cancellation policy. Customers should be able to cancel up to 24 hours before their appointment, and cancellations within 24 hours should charge a 50% fee. Send confirmation emails for all cancellations."
```

💡 **Think like your users:** What would frustrate them if it was missing? What would make their experience smooth and complete?

## Build On Brand

**Problem:** Your app looks generic and could belong to any business.

Generic-looking apps don't inspire trust or excitement.

### How to Fix It

**Describe your business personality in simple terms:**

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

- **Colors:** Use specific hex codes if you have them
- **Tone:** Professional, friendly, energetic, calming, etc.
- **Language style:** Formal, casual, technical, simple
- **Visual style:** Clean, bold, minimal, detailed
- **Logo placement:** Where and how prominent

💡 **Don't just say "make it look professional."** Tell Genesis what professional means for your specific business and audience.

## Connect Integrations

**Problem:** Your integrations aren't working as expected.

Integration issues usually come down to unclear instructions about data flow.

### How to Fix It

**Be specific about what information goes where and when:**

❌ **Too vague:** "Connect this to Slack"

✅ **Clear and actionable:** "When someone submits the contact form, send a message to our #leads Slack channel with the person's name, email, and which service they're interested in. Include a link to their full submission."

### Integration Checklist

**For each integration, specify:**

1. **Trigger:** What event starts the integration?
2. **Data:** What specific information should be sent?
3. **Destination:** Where exactly should it go?
4. **Format:** How should the information be presented?
5. **Timing:** When should this happen?

**Example: CRM Integration**

```
"When someone books an appointment, automatically create a new contact in our HubSpot CRM with their name, email, phone, service booked, and appointment date. Tag them as 'New Client' and assign them to the team member who will provide their service."
```

💡 **Test with real accounts:** Use your actual Slack workspace, email address, and CRM system, not dummy accounts. This helps catch permission issues early.

## Speed Things Up

**Problem:** Your app loads too slowly or feels sluggish.

Speed issues usually come from trying to do too much at once.

### Common Performance Problems

- **Large images** that take forever to load
- **Too many items** displayed on one screen
- **Heavy animations** that make scrolling choppy
- **Complex layouts** with lots of competing elements

### How to Fix It

**Prioritize what users need to see first:**

```
"Make this load faster by showing the booking calendar first, then loading the service descriptions and pricing in the background. Most people just want to see available times right away."
```

**Optimize heavy content:**

```
"The homepage is loading too slowly because of all those high-resolution photos. Compress the images and only show 3-4 key services upfront, with a 'See More' button for the rest."
```

**Simplify complex dashboards:**

```
"Simplify the dashboard by showing just the essential metrics first—revenue, bookings, and alerts. Move the detailed charts and reports to a separate tab so the main view loads instantly."
```

💡 **Genesis can optimize automatically:** Just say "make this faster" and it will identify the biggest performance bottlenecks.

## Start Fresh

Sometimes it's faster to rebuild than keep patching. Consider starting over if:

- You've made **multiple major change requests** and it still doesn't feel right
- You **learned something fundamental** about your users that changes everything
- The app became **overly complex** while trying to fix multiple issues
- You realized you need a **completely different type** of solution

### How to Start Over Successfully

1. **Write down everything you learned** from the first attempt
2. **Create a much more detailed prompt** using those insights
3. **Include specific examples** of what should and shouldn't happen
4. **Reference other apps:** "Like the booking flow on [website], but simpler"

**Starting over isn't failure** - it's using valuable learning to build something better.

## Common Error Messages

### "Context Limit Exceeded"

**Error message:**
```
"input length and `max_tokens` exceed context limit: 197180 + 8192 > 200000"
```

**What it means:** Your prompt or changes are too large for the AI to handle in one go.

**Why it happens:**
- Your prompt is extremely detailed (which is usually good, but can be too much)
- You're trying to change too many things at once
- The app has become very complex with lots of features

**How to fix it:**
1. **Click "Fix me"** to retry the prompt automatically
2. **Break your request into smaller pieces:**
   ```
   Instead of: "Change the colors, add file uploads, connect to Slack, update the layout, and add a payment system"
   
   Try: "First, let's change the colors to match our brand: blue (#1e40af) and white"
   ```
3. **Use simpler language:**
   ```
   Instead of: "Implement a comprehensive customer relationship management system with advanced analytics..."
   
   Try: "Add a simple way to track customer information and see which services they prefer"
   ```

### "Generation Failed"

**What it means:** Something went wrong during the app creation process.

**How to fix it:**
1. **Check your internet connection**
2. **Try a simpler version** of your prompt first
3. **Refresh the page** and try again
4. **Contact support** if it keeps happening

### "Integration Error"

**What it means:** Genesis couldn't connect to an external service.

**How to fix it:**
1. **Check your account permissions** for the service you're trying to connect
2. **Make sure you're using the correct account** (not a personal account for business integrations)
3. **Try connecting manually** first to test the integration
4. **Simplify the integration** and add complexity later

## When to Get Help

### Self-Service First

**Ask Genesis itself for help:**
```
"This booking system isn't quite right for my massage therapy business. What features should I add to make it work better for clients booking wellness appointments?"

"How can I improve the user experience for people submitting customer feedback on mobile devices?"

"What integrations would be most useful for a restaurant feedback app?"
```

### Contact Support

**Email [support@taskade.com](mailto:support@taskade.com) when:**
- You've tried multiple approaches and nothing works
- You're getting consistent error messages
- You need help with account or billing issues
- You want to integrate with a service that's not listed

**Include in your support request:**
- **What you're trying to build** (copy your prompt)
- **What you expected** to happen
- **What actually happened** (include screenshots if helpful)
- **Your app URL** if you need help with a specific issue

### Community Help

**Join the community** for:
- **Inspiration** from other users' creations
- **Tips and tricks** for better prompts
- **Industry-specific advice** from other business owners
- **Collaboration opportunities** on bigger projects

---

## Quick Troubleshooting Checklist

When your app isn't working as expected, try this checklist:

- [ ] **Is my prompt specific enough?** (Industry, users, business rules)
- [ ] **Did I explain the complete user journey?** (Before, during, after)
- [ ] **Am I testing with real data?** (Actual email addresses, real scenarios)
- [ ] **Have I described my brand personality?** (Colors, tone, style)
- [ ] **Are my integration instructions clear?** (What data goes where and when)
- [ ] **Am I trying to change too many things at once?** (Make one change at a time)

**Remember:** Every "failed" attempt teaches Genesis more about your business. Use what you learn to make your next prompt even better!

---

**Still stuck?** The AI agent in Genesis is always available to help troubleshoot issues and suggest improvements. Just describe what's not working and ask for specific help!
