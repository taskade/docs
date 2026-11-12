---
description: >-
  Publish Taskade Genesis apps as real products — add custom domains, branding, advanced features, and styling to turn your workspace into a live application.
---

# Space Apps: Living Systems

**Describe a website or a web app, and Taskade Genesis builds it. You do not write code or manage hosting. Your idea becomes a live website that works on all devices.**

{% hint style="success" %}
**New to Space Apps?** A Space App is a customer-facing website that Taskade Genesis builds for you. It is a fast way for a business to get a professional web presence.
{% endhint %}

***

## What Are Space Apps?

A Space App is a professional website that Taskade Genesis builds from your idea. Your customers visit it and use it. It has its own web address.

### **Space Apps vs. Project-Based Apps**

| Feature | Space Apps | Project-Based Apps |
| --- | --- | --- |
| **What You Get** | Real websites for your customers | Internal team workspaces |
| **Where It Lives** | Your own web address (like yoursite.com) | Inside your Taskade workspace |
| **Who Uses It** | Your customers and the public | Your team members |
| **How It Looks** | Your own design and branding | The standard Taskade layouts |
| **What's Inside** | Modern web technology | The project tools of Taskade |
| **Speed** | Fast loading in all regions | Fast inside Taskade |
| **Code** | You can see all the code | You do not need code access |

***

## Getting Started with Space Apps

### Step 1: Choose Space Apps for Your Use Case

**Space Apps are good for:**

* Customer-facing apps (booking systems, feedback forms, portals)
* Marketing websites and landing pages
* Online stores and catalogs
* Public dashboards and reports
* Web apps that work on phones

**Project-based apps are better for:**

* Internal team collaboration
* Complex workflow management
* Large data tasks and reports
* Advanced automation workflows

### Step 2: Create Your First Space App

1. Open Taskade Genesis at [taskade.com/create](https://www.taskade.com/create).
2. Type into the prompt box, or choose **New app → Generate with AI** in your workspace.
3. Write your prompt with this formula:

```
I run a [BUSINESS TYPE] and need [TARGET USERS] to [PRIMARY ACTION].

They should be able to [SPECIFIC FEATURES], and when they [TRIGGER], 
the system should [AUTOMATIC RESPONSES].

The app should [VISUAL/UX REQUIREMENTS] and work well on [DEVICES].
```

### Step 3: Deployment and Sharing

Taskade puts your Space App online for you, on a global network:

* **Instant link**: The first build of a new app goes live once at its own link. It stays unlisted until you turn on **Show in public listings**.
* **Global CDN**: A content delivery network loads the app fast in all regions.
* **Phones**: The layout fits all screen sizes.
* **HTTPS**: Connections are secure by default.

***

## Advanced Space App Features

### Responsive Design & Mobile Optimization

Taskade Genesis builds Space Apps for phones first, with Tailwind CSS.

**Phone features:**

* Buttons and controls that are easy to touch
* Form fields that open the right phone keyboard
* Swipe gestures where they help
* Fast loading, because the app loads its code in parts (code splitting)

### Real-Time Data Integration

Connect your Space Apps to live Taskade projects:

```javascript
// Generated apps read project rows through built-in helpers
import { useLiveNodes } from '@/hooks/use-live-nodes';
import { createNode } from '@/lib/genesis-data';

// A dashboard re-checks the project when the visitor returns and on a slow timer
const { nodes: submissions, refresh } = useLiveNodes(FEEDBACK_PROJECT_ID);

// Writes go back to the same Taskade project
await createNode(FEEDBACK_PROJECT_ID, { Name: 'Maria', Status: 'New' });
await refresh();
```

### Advanced UI Components

Space Apps include many ready-made components:

* **Forms**: multi-step forms, file uploads, and validation
* **Data**: tables, charts, dashboards, and galleries
* **Navigation**: headers, sidebars, breadcrumbs, and tabs
* **Interactive elements**: modals, dropdowns, and accordions
* **Media**: image galleries, video players, and carousels

***

## Space App Examples & Templates

### E-Commerce Product Catalog

**Prompt:**

```
Create an online product catalog for my clothing boutique where customers can browse items by category (dresses, tops, bottoms, accessories), filter by size and color, and view detailed product information with multiple photos. Include a search function and wishlist feature. The design should be modern and elegant with a clean layout that works perfectly on mobile devices.
```

**What Taskade Genesis builds:**

* A product grid that loads images as the visitor scrolls
* Filters and search
* Product detail windows
* An image gallery for phones
* A wishlist
* Category navigation

### Customer Service Portal

**Prompt:**

```
Build a customer support portal where users can submit tickets, track their status, and access our knowledge base. Include ticket categories (technical, billing, general), priority levels, file uploads, and automated email confirmations. Customers should be able to rate their support experience and see estimated response times.
```

**What Taskade Genesis builds:**

* A ticket form with validation
* A status dashboard
* A knowledge base with search
* File uploads
* Ratings and feedback
* Email connection

### Event Registration Platform

**Prompt:**

```
Create an event registration system for our conference where attendees can register, select sessions, choose meal preferences, and pay registration fees. Include speaker profiles, schedule display, and networking features. The app should handle multiple ticket types and send calendar invites upon registration.
```

**What Taskade Genesis builds:**

* Registration in more than one step
* Session selection
* A payment connection
* Calendar invites
* Speaker and schedule pages
* Networking features

***

## Customization & Development

### Visual Customization

To change the look of a Space App, describe the change in plain English:

```
"Make the header navy blue with white text"
"Use our brand colors: primary #FF6B35, secondary #004E89"
"Add our logo to the top left corner"
"Make the buttons larger and more rounded"
"Use a sidebar layout instead of top navigation"
```

### Advanced Styling with Tailwind CSS

The apps that Taskade Genesis builds use Tailwind CSS for styles:

```css
/* Custom utility classes are automatically generated */
.btn-primary {
  @apply bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded;
}

.card {
  @apply bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow;
}
```

### Code Access and Modification

On Pro and up, you can see the full source of your app in the **Code** tab of the app settings. You can also export it to GitHub. The source has this structure:

```javascript
// App structure
src/
├── App.tsx          // Main application component
├── pages/           // One file per screen
├── components/      // Generated React components
├── hooks/           // Custom hooks for data fetching
├── lib/             // Data helpers for your Taskade projects
└── styles/          // Tailwind CSS configurations
```

***

## Deployment & Performance

### Automatic Deployment

Taskade puts your Space App online for you, on a global network:

* **Global distribution**: fast loading in all regions
* **Edge caching**: a CDN serves the static files
* **Auto scaling**: the app keeps working when traffic increases
* **High availability**: enterprise-grade reliability
* **SSL/TLS**: HTTPS is on by default

### Performance Optimization

Taskade Genesis adds these speed features to each Space App:

```javascript
// Automatic optimizations included:
- Code splitting for faster loading
- Lazy loading for images and components  
- Bundle optimization and minification
- Progressive loading strategies
```

### Custom Domains & SSL

You can connect your own domain on Pro and up. Pro includes up to 10 per workspace, and Business and up include an unlimited number.

1. Open the app settings and go to **Launch → Domains**.
2. Under **Connect a domain you own**, click **Connect**.
3. Add the CNAME record (`external.taskade.com`) and the SSL Validation record that the panel shows.

To buy a new domain inside Taskade, click **Shop domains** under **Buy a brand-new domain**. Taskade sets up SSL automatically. Read [Custom Domains](custom-domains.md) for the full steps.

***

## Security & Compliance

### Built-in Security Features

Space Apps include enterprise-grade security:

* **Content Security Policy (CSP)** headers
* **Cross-Origin Resource Sharing (CORS)** protection
* **Input sanitization and validation**
* **SQL injection prevention**
* **XSS attack protection**
* **HTTPS/TLS encryption** for all traffic

### Access Control & Authentication

You can add these sign-in and access controls to your app:

* **App sign-in** (App Users): visitors sign in with their email on the own URL of your app. Taskade is the identity provider. App sign-in works on every plan, Free included.
* **Emailed sign-in code** and **invite-only sign-up**: optional.
* **App user roles** (Admin or Member): with private per-user data on, the workspace owner can turn on **Admins see every row**. Admins can then read and change every row.
* **Private entries** (private per-user data, or row scoping), under **Publish → More options**: off by default. Sign-in confirms who a visitor is. It does not hide other people's rows until you turn on **Private entries** and test with a second account.
* **Password protection** for the whole app (Pro and up).

***

## Analytics & Monitoring

### Built-in Analytics

The built-in App Analytics dashboard shows the traffic of your app (Business and up). You do not install tracking scripts. The dashboard shows:

```javascript
// Automatic analytics tracking
- Visits and pageviews
- Bounce rate and average session duration
- Traffic sources
- Geography
- Device and browser breakdown
```

***

## Maintenance & Updates

### Version Control

Space Apps keep a full version history:

* **Saved revisions**: Taskade saves revisions while you build. **Version history** lists them.
* **Preview**: you can look at a saved revision before you restore it.
* **Restore Version**: you can roll back to an earlier revision.
* **Live badge**: this badge marks the revision that visitors see.

### Conversational Updates

To change your app, describe the change in plain English:

```
"Add a search bar to the product page"
"Make the contact form shorter - remove the company field"
"Change the color scheme to match our new brand colors"
"Add a testimonials section to the homepage"
```

### Automated Maintenance

Taskade maintains the platform for you:

* **Dependency updates**: automatic
* **Security patches**: applied at once
* **Performance monitoring**: with alerts
* **Backup and recovery**: built in
* **Health checks**: uptime monitoring

***

## Best Practices for Space Apps

### Prompt Engineering

A good prompt gives better results. Put these items in your prompt:

1. **Business context**: the type of business or industry
2. **Target users**: the people who use the app
3. **Core functions**: what the users must do
4. **Visual choices**: brand colors, style, and layout
5. **Devices**: phone, tablet, or desktop first

**Example of a good prompt:**

```
I run a dental practice and need patients to book appointments online. 
They should see available time slots, select services (cleaning, checkup, 
cosmetic), and provide insurance information. The app should send 
confirmation emails and add appointments to our practice calendar. 
Use a clean, professional design with our brand colors (blue and white) 
and ensure it works perfectly on mobile devices since most patients 
will book from their phones.
```

### Performance Guidelines

To make your Space App faster, ask Taskade EVE for these changes:

* **Image format**: use WebP for faster loading.
* **Lazy loading**: load content when users scroll to it.
* **Code splitting**: put large features into separate bundles.
* **Caching**: use browser and CDN caching.
* **Phones first**: design for phones, then improve for desktops.

### Accessibility Standards

Make your app usable for all people:

* **Semantic HTML**: use a correct heading structure and landmarks.
* **Keyboard navigation**: make each control usable with a keyboard.
* **Screen readers**: add ARIA labels and descriptions.
* **Color contrast**: meet the WCAG 2.1 AA standard.
* **Focus**: show a clear focus indicator on each control.

***

## Troubleshooting Common Issues

### Performance Problems

**Problem**: The app loads slowly. **Solutions**:

* Look at the size and the format of your images.
* Examine the third-party scripts and integrations.
* If the app uses external data, make the database queries faster.
* Turn on the browser caching headers.

**Problem**: The layout is wrong on phones. **Solutions**:

* Test on real devices, not only in the browser developer tools.
* Examine the responsive breakpoints in Tailwind CSS.
* Make each touch target at least 44px.
* Make sure that the form fields work with phone keyboards.

### Deployment Issues

**Problem**: The app does not show your changes. **Solutions**:

* On a new app, Taskade saves each change as a draft. Visitors see it only after you click **Publish** again. Until you do, the publish status says **Changes not live yet**.
* Clear the browser cache and refresh the page.
* Look at the publish status in Taskade Genesis.
* Make sure that Taskade EVE saved the change in the code.
* Examine the deployment logs for errors.

### Data Integration Problems

**Problem**: The app does not show the current Taskade project data. **Solutions**:

* Make sure that the app has permission to open the project.
* Look at the API rate limits and quotas.
* Make sure that the project ID in the integration is correct.

***

## Resources & Support

### Documentation Links

* [**Genesis API Reference**](../../apis-living-system-development/developer-home.md): the full API documentation
* [**Space Apps API**](../../apis-living-system-development/developer-home.md): the endpoints for Space Apps
* [**Best Practices**](../community-and-sharing/best-practices.md): general tips for Taskade Genesis
* [**Examples Gallery**](../genesis/examples-and-templates.md): ready-to-use prompts

### Development Resources

* [**Tailwind CSS Documentation**](https://tailwindcss.com/docs): style reference
* [**React Documentation**](https://react.dev): component guide
* [**TypeScript Handbook**](https://www.typescriptlang.org/docs/): type system reference
* [**Taskade API Documentation**](https://www.taskade.com/api/documentation/): API reference

### Community & Support

* [**Community Forum**](https://www.taskade.com/feedback): talk with other developers
* [**Help Center**](https://www.taskade.com/learn): guides and tutorials
* **Email Support**: [support@taskade.com](mailto:support@taskade.com)
* **Live Chat**: open it in your Taskade dashboard

***

## Ready to Build Your Space App?

With Space Apps, you describe an app in plain English and Taskade Genesis builds it with modern web technology.

### Quick Start Checklist

* [ ] **Define your use case**: Is the app for customers or for your team?
* [ ] **Write a detailed prompt**: Name your business, your users, and the features.
* [ ] **Choose your style**: Give brand colors, a layout, and the devices.
* [ ] **Test the app**: Open it on different devices and screen sizes.
* [ ] **Publish and improve**: Describe changes in the chat until the app is right.

### Next Steps

1. [**Create your first Space App**](https://taskade.com/genesis) in your workspace.
2. Read the [**API documentation**](../../apis-living-system-development/developer-home.md) for advanced integrations.
3. Join our [**community**](https://www.taskade.com/feedback) to share your app and see other apps.
4. Read about [**advanced features**](advanced-features.md) when your app grows.

***

**🎯 Turn your ideas into production-ready React apps.**

_Space Apps cover simple landing pages and complex business apps. You build each one with a plain-English prompt._

---

_Step-by-step guides on taskade.com/learn: [Publish and Clone Your Apps](https://www.taskade.com/learn/genesis/publishing), [What is Taskade Genesis?](https://www.taskade.com/learn/genesis/overview)._
