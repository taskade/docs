# Examples and Templates

Ready-to-use prompts for common business applications. Copy these templates and customize them for your specific needs.

## Customer Service & Support

### Customer Service Portal

**Perfect for:** Businesses that need to track and respond to customer inquiries

**Prompt template:**
```
I run a [type of business] and need customers to submit support requests. They should describe their issue, upload screenshots if needed, and select from categories like 'billing', 'technical', or 'general'. Each ticket gets a unique number and customers receive email updates when we respond. Our support team needs a dashboard to see all open tickets, assign them to team members, and track response times. When a ticket is resolved, automatically send a satisfaction survey.
```

**Customization ideas:**
- Add priority levels (urgent, normal, low)
- Include customer information lookup
- Connect to existing help desk software
- Add live chat integration

### Feedback Collection System

**Perfect for:** Restaurants, retail stores, service businesses

**Prompt template:**
```
I run a [business type] and need customers to submit feedback about their experience. They should rate [specific aspects] on a 1-5 scale and leave optional comments. When someone gives us [threshold] stars or lower, immediately alert our [role] via [communication method] so we can follow up personally. All feedback should be stored in a dashboard where we can see trends and respond to individual reviews.
```

**Example for a restaurant:**
```
I run a restaurant and need customers to submit feedback about their dining experience. They should rate food quality, service speed, and overall satisfaction on a 1-5 scale, plus leave optional comments and upload photos if they want. When someone gives us 3 stars or lower, immediately alert our manager via Slack so we can follow up personally. All feedback should be stored in a dashboard where we can see trends and respond to individual reviews. Include an AI agent trained on our menu and policies that can help categorize feedback and suggest appropriate responses.
```

**What Genesis builds for you:**
- **📊 Smart Database** - Stores all feedback with ratings, comments, and photos automatically
- **🤖 AI Assistant** - Learns your menu and policies, can suggest responses to feedback
- **⚡ Automatic Actions** - Sends Slack alerts for low ratings, emails customers back
- **📁 File Handling** - Customers can upload photos, you can upload your menu for the AI to learn

## Booking & Scheduling

### Event Registration System

**Perfect for:** Organizations hosting workshops, classes, or events

**Prompt template:**
```
I organize [type of events] and need people to register online. They should see event details, available dates/times, and pricing options. Attendees pay a deposit through Stripe and receive confirmation emails with calendar invites. I need to set capacity limits, send reminder emails 24 hours before events, and handle waitlists when events are full. Include a dashboard where I can see registrations, check-in attendees, and export attendee lists.
```

**Example for a fitness studio:**
```
I organize yoga classes and workshops and need people to register online. They should see class descriptions, available times, and pricing options. Attendees pay a deposit through Stripe and receive confirmation emails with calendar invites. I need to set capacity limits of 20 people per class, send reminder emails 24 hours before classes, and handle waitlists when classes are full. Include a dashboard where I can see registrations, check-in attendees, and export attendee lists. Train an AI agent on our class descriptions and instructor bios so it can help people choose the right classes.
```

**What Genesis builds for you:**
- **📊 Registration Database** - Tracks who signed up, payment status, waitlist automatically
- **🤖 Class Advisor** - Helps people choose the right classes based on their experience level
- **⚡ Payment & Notifications** - Handles Stripe payments, sends confirmations and reminders
- **📁 Class Materials** - Stores class photos and instructor info for the AI to reference

### Appointment Booking

**Perfect for:** Healthcare, consulting, personal services

**Prompt template:**
```
I run a [service type] practice where clients book [duration] sessions with [staff type]. Clients should see available time slots, select their preferred [staff member/service], and pay a deposit through Stripe. Send confirmation emails and calendar invites automatically. I need to block out [break times] and handle cancellations with [notice period] notice. Include a dashboard for staff to see their schedules and client information.
```

**Example for a massage therapy practice:**
```
I run a massage therapy practice where clients book 60 or 90-minute sessions with specific therapists. Clients should see available time slots, select their preferred therapist, and pay a deposit through Stripe. Send confirmation emails and calendar invites automatically. I need to block out lunch breaks from 12-1 PM and handle cancellations with 24-hour notice. Include a dashboard for therapists to see their schedules and client information.
```

## Business Operations

### Inventory Management

**Perfect for:** Small businesses tracking products or supplies

**Prompt template:**
```
I run a [type of business] and need to track inventory for [types of items]. Staff should be able to add new items, update quantities when items are sold or used, and see current stock levels. Send automatic alerts when items drop below [number] units. Include barcode scanning if possible, and generate reports showing which items sell fastest and which are running low. Connect to our accounting system to track costs.
```

**Example for a coffee shop:**
```
I run a coffee shop and need to track inventory for coffee beans, pastries, and supplies. Staff should be able to add new items, update quantities when items are sold or used, and see current stock levels. Send automatic alerts when items drop below 10 units. Include barcode scanning if possible, and generate reports showing which items sell fastest and which are running low. Connect to our QuickBooks to track costs. Include an AI agent that can predict reorder quantities based on sales patterns and seasonal trends.
```

**What Genesis builds for you:**
- **📊 Inventory Tracker** - Keeps track of stock levels, costs, suppliers automatically
- **🤖 Smart Reordering** - Learns your sales patterns and suggests when to reorder
- **⚡ Automatic Alerts** - Emails you when stock is low, syncs with QuickBooks
- **📁 Product Info** - Stores supplier catalogs and product photos for easy reference

### Team Resource Booking

**Perfect for:** Organizations sharing equipment, rooms, or resources

**Prompt template:**
```
Our team needs to book [type of resources] like meeting rooms, equipment, or vehicles. Staff should see what's available, make reservations, and get confirmation emails. Include conflict prevention so double-bookings can't happen, and send reminder emails before scheduled times. Managers need a dashboard to see all bookings and usage statistics. Allow recurring bookings for regular meetings and include a check-in/check-out system.
```

**Example for an office:**
```
Our team needs to book meeting rooms and presentation equipment. Staff should see what's available, make reservations, and get confirmation emails. Include conflict prevention so double-bookings can't happen, and send reminder emails 15 minutes before scheduled times. Managers need a dashboard to see all bookings and usage statistics. Allow recurring bookings for weekly team meetings and include a check-in/check-out system.
```

## Client & Project Management

### Client Project Portal

**Perfect for:** Service businesses managing client work

**Prompt template:**
```
I run a [type of service business] and need clients to submit project requests with all necessary details. They should describe their project, upload reference materials, set deadlines, and choose service packages. Once submitted, our team needs to review requests, provide estimates, and track project progress. Clients should see updates on their projects and receive notifications when work is completed. Include file sharing so we can deliver final work securely.
```

**Example for a design agency:**
```
I run a graphic design agency and need clients to submit project requests with all necessary details. They should describe their project, upload reference materials and brand guidelines, set deadlines, and choose from logo design, website design, or print design packages. Once submitted, our team needs to review requests, provide estimates, and track project progress. Clients should see updates on their projects and receive notifications when work is completed. Include file sharing so we can deliver final designs securely.
```

### Lead Management System

**Perfect for:** Sales teams and service businesses

**Prompt template:**
```
I need to track leads from [source] through our sales process. When someone submits their information, automatically create a lead record with their contact details, interest level, and source. Assign leads to sales team members based on [criteria], and send follow-up reminders. Track all interactions, calls, and emails with each lead. When a lead becomes a customer, move them to our customer database and trigger our onboarding process.
```

**Example for a real estate agent:**
```
I need to track leads from my website and referrals through our sales process. When someone submits their information, automatically create a lead record with their contact details, budget range, and property preferences. Assign leads to team members based on location, and send follow-up reminders every 3 days. Track all interactions, property showings, and emails with each lead. When a lead becomes a client, move them to our customer database and trigger our home buying process checklist.
```

## Internal Operations

### Employee Onboarding

**Perfect for:** HR teams and growing companies

**Prompt template:**
```
I need to streamline our employee onboarding process. New hires should complete forms for [information needed], upload required documents, and access their onboarding checklist. HR should be able to track progress, assign tasks to different departments, and ensure nothing is missed. Include automated reminders for incomplete items and notifications when new employees complete each step. Create a dashboard showing all new hires and their onboarding status.
```

**Example for a tech startup:**
```
I need to streamline our employee onboarding process. New hires should complete forms for emergency contacts and bank details, upload their ID and diploma, and access their onboarding checklist. HR should be able to track progress, assign laptop setup to IT and workspace setup to facilities, and ensure nothing is missed. Include automated reminders for incomplete items and notifications when new employees complete each step. Create a dashboard showing all new hires and their onboarding status.
```

### Expense Reporting

**Perfect for:** Teams that need to track business expenses

**Prompt template:**
```
Our team needs to submit expense reports for [types of expenses]. Employees should be able to upload receipts, categorize expenses, and add descriptions. Managers need to review and approve expenses, with automatic routing based on amount thresholds. Include mileage calculation for travel expenses and integration with our accounting system. Send notifications for pending approvals and generate monthly expense reports.
```

**Example for a consulting firm:**
```
Our team needs to submit expense reports for client meetings, travel, and office supplies. Employees should be able to upload receipts, categorize expenses by client project, and add descriptions. Managers need to review and approve expenses over $100, with automatic approval for smaller amounts. Include mileage calculation for client visits and integration with our QuickBooks. Send notifications for pending approvals and generate monthly expense reports by client and employee.
```

## E-commerce & Retail

### Product Catalog

**Perfect for:** Small retailers and online stores

**Prompt template:**
```
I need a product catalog for my [type of store] where customers can browse [product categories], see detailed descriptions and photos, and check availability. Include search and filtering by [attributes]. Customers should be able to add items to a wishlist and request quotes for bulk orders. I need to update inventory levels, add new products, and track which items are most popular. Include integration with [payment processor] for online orders.
```

**Example for a craft store:**
```
I need a product catalog for my craft supply store where customers can browse yarn, fabric, tools, and patterns, see detailed descriptions and photos, and check availability. Include search and filtering by material type, color, and price range. Customers should be able to add items to a wishlist and request quotes for bulk orders. I need to update inventory levels, add new products, and track which items are most popular. Include integration with Square for online orders.
```

### Vendor Management

**Perfect for:** Businesses working with multiple suppliers

**Prompt template:**
```
I need to manage relationships with our vendors and suppliers. Track contact information, product catalogs, pricing agreements, and delivery schedules. Include a system for submitting purchase orders, tracking deliveries, and managing payments. Vendors should be able to update their product information and confirm order details. Include performance tracking to see which vendors deliver on time and provide quality products.
```

## Education & Training

### Course Management

**Perfect for:** Training organizations and educational institutions

**Prompt template:**
```
I offer [type of courses] and need students to register, access course materials, and track their progress. Include lesson plans, assignments, and quizzes with automatic grading. Students should see their grades and completion status. Instructors need to post announcements, grade assignments, and communicate with students. Include certificate generation when students complete courses and integration with [payment system] for course fees.
```

**Example for a cooking school:**
```
I offer cooking classes and need students to register, access recipes and video lessons, and track their progress. Include lesson plans, cooking assignments, and skill assessments. Students should see their grades and completion status for each technique. Instructors need to post announcements, grade practical assignments, and communicate with students. Include certificate generation when students complete courses and integration with Stripe for class fees.
```

## Healthcare & Wellness

### Patient Portal

**Perfect for:** Healthcare practices and wellness centers

**Prompt template:**
```
I run a [type of practice] and need patients to schedule appointments, complete intake forms, and access their health information. Include appointment reminders via email and SMS, and allow patients to upload documents or photos related to their condition. Staff should be able to update patient records, send secure messages, and track appointment history. Include integration with our [practice management system] and ensure HIPAA compliance.
```

**Example for a dental practice:**
```
I run a dental practice and need patients to schedule appointments, complete health history forms, and access their treatment plans. Include appointment reminders via email and SMS, and allow patients to upload insurance cards and photos of dental concerns. Staff should be able to update patient records, send secure messages about treatment options, and track appointment history. Include integration with our Dentrix system and ensure HIPAA compliance.
```

## Customization Tips

### Making Templates Your Own

1. **Replace bracketed placeholders** with your specific details
2. **Add industry-specific requirements** that aren't covered
3. **Include your existing tools** for integration
4. **Specify your brand colors and style** preferences
5. **Add unique business rules** that apply to your situation

### Testing Your Customized App

1. **Use real scenarios** from your business
2. **Test with actual team members** who will use the app
3. **Try edge cases** that might break the workflow
4. **Check mobile experience** if users will access on phones
5. **Verify integrations** work with your actual accounts

### Common Additions

**For any app, consider adding:**
- **Analytics dashboard** to track usage and trends
- **Export functionality** to get data out when needed
- **Mobile optimization** for users on the go
- **Notification preferences** so users can control communications
- **Help documentation** built into the app

---

**Need help customizing these templates?** The AI agent in Genesis can help you adapt any template to your specific needs. Just describe what's different about your business and ask for modifications!
