---
description: >-
  Publish Taskade Genesis apps as real products — add custom domains, branding, advanced features, and styling to turn your workspace into a live application.
---

# Space Apps: Living Systems

**Create professional websites and web applications just by describing what you want. No coding, no hosting headaches—just your idea turned into a live website that works everywhere.**

{% hint style="success" %}
**New to Space Apps?** Think of them as Taskade Genesis's superpower for building customer-facing websites. Perfect for businesses that need professional web presence quickly!
{% endhint %}

***

## What Are Space Apps?

Space Apps are Genesis's way of turning your ideas into real, professional websites. Instead of building internal tools for your team, Space Apps create polished websites that your customers can visit and use—complete with their own web address!

### **Space Apps vs. Project-Based Apps**

| Feature            | Space Apps                                | Project-Based Apps              |
| ------------------ | ----------------------------------------- | ------------------------------- |
| **What You Get**   | Real websites your customers visit        | Internal team workspaces        |
| **Where It Lives** | Your own web address (like yoursite.com)  | Inside your Taskade workspace   |
| **Who Uses It**    | Your customers and the public             | Your team members               |
| **How It Looks**   | Complete control over design and branding | Uses Taskade's standard layouts |
| **What's Inside**  | Modern website technology                 | Taskade's project tools         |
| **Speed**          | Lightning-fast loading worldwide          | Fast within Taskade             |
| **Tech Stuff**     | All the code if you want to see it        | No code access needed           |

***

## Getting Started with Space Apps

### Step 1: Choose Space Apps for Your Use Case

**Perfect for:**

* Customer-facing applications (booking systems, feedback forms, portals)
* Marketing websites and landing pages
* E-commerce storefronts and catalogs
* Public dashboards and reporting tools
* Mobile-responsive web applications

**Consider Project-Based Apps for:**

* Internal team collaboration
* Complex workflow management
* Heavy data manipulation and reporting
* Advanced automation workflows

### Step 2: Create Your First Space App

1. **Open Taskade Genesis** at [taskade.com/create](https://www.taskade.com/create)
2. **Type into the prompt box**, or choose **New app → Generate with AI** in your workspace
3. **Write your prompt** using the proven formula:

```
I run a [BUSINESS TYPE] and need [TARGET USERS] to [PRIMARY ACTION].

They should be able to [SPECIFIC FEATURES], and when they [TRIGGER], 
the system should [AUTOMATIC RESPONSES].

The app should [VISUAL/UX REQUIREMENTS] and work well on [DEVICES].
```

### Step 3: Deployment and Sharing

Space Apps deploy automatically with global distribution:

* **Instant URLs**: Your app gets a live URL immediately
* **Global CDN**: Fast loading worldwide with edge caching
* **Mobile Responsive**: Automatically optimized for all screen sizes
* **HTTPS Enabled**: Secure connections out of the box

***

## Advanced Space App Features

### Responsive Design & Mobile Optimization

Space Apps are built mobile-first using Tailwind CSS:

```css
/* Generated responsive components */
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
    {/* Card content */}
  </div>
</div>
```

**Mobile Optimization Features:**

* Touch-friendly UI elements
* Optimized form inputs for mobile keyboards
* Swipe gestures where appropriate
* Fast loading with code splitting

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

Space Apps include a rich set of pre-built components:

* **Form Components**: Multi-step forms, file uploads, validation
* **Data Display**: Tables, charts, dashboards, galleries
* **Navigation**: Headers, sidebars, breadcrumbs, tabs
* **Interactive Elements**: Modals, dropdowns, accordions
* **Media**: Image galleries, video players, carousels

***

## Space App Examples & Templates

### E-Commerce Product Catalog

**Prompt:**

```
Create an online product catalog for my clothing boutique where customers can browse items by category (dresses, tops, bottoms, accessories), filter by size and color, and view detailed product information with multiple photos. Include a search function and wishlist feature. The design should be modern and elegant with a clean layout that works perfectly on mobile devices.
```

**Generated Features:**

* Product grid with lazy loading
* Advanced filtering and search
* Product detail modals
* Mobile-optimized image gallery
* Wishlist functionality
* Category navigation

### Customer Service Portal

**Prompt:**

```
Build a customer support portal where users can submit tickets, track their status, and access our knowledge base. Include ticket categories (technical, billing, general), priority levels, file uploads, and automated email confirmations. Customers should be able to rate their support experience and see estimated response times.
```

**Generated Features:**

* Ticket submission form with validation
* Status tracking dashboard
* Knowledge base with search
* File upload handling
* Rating and feedback system
* Email integration

### Event Registration Platform

**Prompt:**

```
Create an event registration system for our conference where attendees can register, select sessions, choose meal preferences, and pay registration fees. Include speaker profiles, schedule display, and networking features. The app should handle multiple ticket types and send calendar invites upon registration.
```

**Generated Features:**

* Multi-step registration flow
* Session selection interface
* Payment processing integration
* Calendar integration
* Speaker and schedule displays
* Networking features

***

## Customization & Development

### Visual Customization

Space Apps support extensive visual customization through natural language:

```
"Make the header navy blue with white text"
"Use our brand colors: primary #FF6B35, secondary #004E89"
"Add our logo to the top left corner"
"Make the buttons larger and more rounded"
"Use a sidebar layout instead of top navigation"
```

### Advanced Styling with Tailwind CSS

Generated apps use Tailwind CSS for styling:

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

View your app's complete source in the **Code** tab of the app's settings, or export it to GitHub (both on Pro and up):

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

Space Apps deploy automatically with global infrastructure:

**Key Benefits:**

* **Global Distribution**: Fast loading worldwide
* **Edge Caching**: Static assets served from CDN
* **Auto Scaling**: Handles traffic spikes automatically
* **High Availability**: Enterprise-grade reliability
* **SSL/TLS**: HTTPS enabled by default

### Performance Optimization

Space Apps are optimized for performance:

```javascript
// Automatic optimizations included:
- Code splitting for faster loading
- Lazy loading for images and components  
- Bundle optimization and minification
- Progressive loading strategies
```

### Custom Domains & SSL

Connect your own domain name (Pro and up, up to 10 per workspace on Pro and unlimited on Business and up):

1. Open the app's settings and go to **Launch → Domains**
2. Click **Connect a domain you own**, or buy a new domain inside Taskade
3. Add the CNAME record (`external.taskade.com`) and the SSL Validation record that the panel shows

SSL is provisioned automatically. See [Custom Domains](custom-domains.md) for the full steps.

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

### Data Privacy & GDPR

Compliance features for data protection:

```javascript
// Generated privacy controls
const PrivacyConsent = () => {
  return (
    <div className="privacy-notice">
      <p>We use cookies to enhance your experience...</p>
      <button onClick={handleAccept}>Accept</button>
      <button onClick={handleDecline}>Decline</button>
    </div>
  );
};
```

### Access Control & Authentication

Add sign-in and access controls to your app:

* **App sign-in** (App Users): visitors sign in with their email on your app's own URL, with Taskade as the identity provider. It works on every plan, Free included
* **Optional emailed sign-in code** and invite-only sign-up
* **App user roles** (Admin or Member): with private per-user data on, the workspace owner can turn on **Admins see every row** so that admins can read and change every row
* **Private entries** (private per-user data, or row scoping), under **Publish → More options**: off by default. Sign-in confirms who a visitor is but does not hide other people's rows until you turn this on and test it with a second account
* **Password protection** for the whole app (Pro and up)

***

## Analytics & Monitoring

### Built-in Analytics

Track app traffic with the built-in App Analytics dashboard (Business and up), with no tracking scripts to install:

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

Space Apps maintain complete version history:

* **Saved revisions** as you build, listed in **Version history**
* **Preview** any saved revision before you restore it
* **Restore Version** to roll back to a previous revision
* **Live badge** that marks the revision visitors see

### Conversational Updates

Modify your app through natural language:

```
"Add a search bar to the product page"
"Make the contact form shorter - remove the company field"
"Change the color scheme to match our new brand colors"
"Add a testimonials section to the homepage"
```

### Automated Maintenance

Built-in maintenance features:

* **Dependency updates** handled automatically
* **Security patches** applied immediately
* **Performance monitoring** with alerts
* **Backup and recovery** systems
* **Health checks** and uptime monitoring

***

## Best Practices for Space Apps

### Prompt Engineering

Write effective prompts for better results:

**Include these elements:**

1. **Business context**: What type of business/industry
2. **Target users**: Who will use the application
3. **Core functionality**: What users need to accomplish
4. **Visual preferences**: Brand colors, style, layout
5. **Device requirements**: Mobile, tablet, desktop focus

**Example of a well-structured prompt:**

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

Optimize your Space Apps for speed:

* **Image optimization**: Use WebP format for faster loading
* **Lazy loading**: Load content as users scroll
* **Code splitting**: Split large features into separate bundles
* **Caching strategies**: Leverage browser and CDN caching
* **Mobile-first**: Design for mobile, enhance for desktop

### Accessibility Standards

Ensure your apps are accessible to all users:

* **Semantic HTML**: Proper heading structure and landmarks
* **Keyboard navigation**: All interactive elements accessible via keyboard
* **Screen reader support**: ARIA labels and descriptions
* **Color contrast**: Meet WCAG 2.1 AA standards
* **Focus management**: Clear focus indicators throughout

***

## Troubleshooting Common Issues

### Performance Problems

**Issue**: App loading slowly **Solutions**:

* Check image sizes and formats
* Review third-party scripts and integrations
* Optimize database queries if using external data
* Enable browser caching headers

**Issue**: Mobile layout issues **Solutions**:

* Test on actual devices, not just browser dev tools
* Review responsive breakpoints in Tailwind CSS
* Check touch target sizes (minimum 44px)
* Verify form inputs work with mobile keyboards

### Deployment Issues

**Issue**: App not updating after changes **Solutions**:

* Clear browser cache and hard refresh
* Check deployment status in Taskade Genesis dashboard
* Verify changes were committed to the codebase
* Review deployment logs for errors

### Data Integration Problems

**Issue**: Taskade project data not syncing **Solutions**:

* Verify project permissions and access
* Check API rate limits and quotas
* Confirm project ID is correct in integration

***

## Resources & Support

### Documentation Links

* [**Genesis API Reference**](../../apis-living-system-development/developer-home.md) - Complete API documentation
* [**Space Apps API**](../../apis-living-system-development/developer-home.md) - Specific Space Apps endpoints
* [**Best Practices**](../community-and-sharing/best-practices.md) - General Genesis optimization tips
* [**Examples Gallery**](../genesis/examples-and-templates.md) - Ready-to-use prompts

### Development Resources

* [**Tailwind CSS Documentation**](https://tailwindcss.com/docs) - Styling reference
* [**React Documentation**](https://react.dev) - Component development guide
* [**TypeScript Handbook**](https://www.typescriptlang.org/docs/) - Type system reference
* [**Taskade API Documentation**](https://www.taskade.com/api/documentation/) - API reference

### Community & Support

* [**Community Forum**](https://www.taskade.com/feedback) - Connect with other developers
* [**Help Center**](https://www.taskade.com/learn) - Comprehensive guides and tutorials
* **Email Support**: [support@taskade.com](mailto:support@taskade.com)
* **Live Chat**: Available in your Taskade dashboard

***

## Ready to Build Your Space App?

Space Apps represent the future of no-code application development - combining the simplicity of natural language with the power of modern web technologies.

### Quick Start Checklist

* [ ] **Define your use case** - Customer-facing or internal application?
* [ ] **Write a detailed prompt** - Include business context, users, and features
* [ ] **Choose your style** - Brand colors, layout preferences, mobile focus
* [ ] **Test thoroughly** - Check on multiple devices and screen sizes
* [ ] **Deploy and iterate** - Use conversational updates to perfect your app

### Next Steps

1. [**Create your first Space App**](https://taskade.com/genesis) in your workspace
2. **Explore the** [**API documentation**](../../apis-living-system-development/developer-home.md) for advanced integrations
3. **Join our** [**community**](https://www.taskade.com/feedback) to share your creation and get inspiration
4. **Check out** [**advanced features**](advanced-features.md) as your app grows in complexity

***

**🎯 Transform your ideas into production-ready React applications today.**

_With Space Apps, the only limit is your imagination - from simple landing pages to complex business applications, all accessible through natural language prompts._

---

_Step-by-step guides on taskade.com/learn: [Publish and Clone Your Apps](https://www.taskade.com/learn/genesis/publishing), [What is Taskade Genesis?](https://www.taskade.com/learn/genesis/overview)._
