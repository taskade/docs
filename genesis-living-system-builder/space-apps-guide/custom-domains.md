---
description: Connect your own branded domain to a published Taskade Genesis app — set up DNS, enable SSL, and go live on your own URL in minutes.
---

# Put Your App on Your Own Domain

**Connect your own domain to a published Taskade Genesis app: add a CNAME record with your DNS provider, verify it in the app's publish settings, and SSL is provisioned automatically. Your customers see your brand, not Taskade's.**

{% hint style="success" %}
**Pro plan and up.** Custom domains are available on **Pro** (up to 10 per workspace) and on **Business and up** (unlimited). A domain you buy inside Taskade does not count toward the limit. Connect your own branded web address to a published Genesis app.
{% endhint %}

***

## What Are Custom Domains?

Custom domains let your Genesis apps live at your own web address instead of a shared `taskade.app` subdomain.

### Before: a shared Taskade subdomain

```
https://random-gibberish-a7b2.taskade.app
https://purple-elephant-xyz.taskade.site
```

### After: your own domain

```
https://app.yourcompany.com
https://portal.clientname.com
https://booking.restaurantname.com
```

***

## Benefits of Custom Domains

### **Professional Appearance**

* Apps appear to be built specifically for your brand
* Clients see your domain in the URL, not a Taskade subdomain
* Consistent branding throughout the user experience
* Higher perceived value and professionalism

### **Trust & Credibility**

* Users feel more secure entering data on your domain
* Better conversion rates for customer-facing forms
* Enhanced brand recognition and recall
* Professional email sharing and link distribution

### **SEO & Marketing Benefits**

* Custom domains can improve search engine rankings
* Better analytics tracking with your own domain
* Easier to remember and share links
* Integration with your existing marketing materials

### **Client Deliverables**

* Perfect for agencies delivering client solutions
* White-label applications under client brands
* No ongoing Taskade branding in client-facing tools
* The tool looks like your own product

***

## Setting Up Custom Domains

### Prerequisites

**Plan Requirements:**

* A Taskade Pro plan or higher
* Admin access to your workspace
* Domain ownership and DNS management access

**Domain Requirements:**

* Own a domain (e.g., yourcompany.com)
* Ability to create CNAME DNS records
* SSL certificate (handled automatically by Taskade)

### Step-by-Step Setup

#### 1. Choose Your Subdomain

Decide what subdomain to use for your Genesis apps:

**Common Patterns:**

```
app.yourcompany.com      - General applications
portal.yourcompany.com   - Customer portals  
booking.yourcompany.com  - Appointment systems
feedback.yourcompany.com - Feedback collection
client.yourcompany.com   - Client-specific tools
```

#### 2. Add Domain in Taskade

1. **Open your published Genesis app** and open **App settings**
2. **Go to Launch → Domains**
3. **Click "Connect a domain you own"**
4. **Enter your chosen subdomain** (e.g., `app.yourcompany.com`)
5. **Click "Connect"**. Taskade shows the exact DNS records to add

#### 3. Update DNS Records

In your domain registrar's DNS settings:

```
Type: CNAME
Name: app (or your chosen subdomain)
Value: external.taskade.com
TTL: 3600 (or your registrar's default)
```

**Popular Registrars:**

* **Cloudflare**: Dashboard → DNS → Records → Add CNAME (set Proxy status to **DNS only**)
* **Namecheap**: Dashboard → Domain List → Manage → Advanced DNS
* **GoDaddy**: DNS Management → Records → Add → CNAME
* **Google Domains**: DNS → Custom records → Create new record

#### 4. Verify Setup

1. **Add the SSL Validation record** that the Domains panel shows under the routing record (copy its exact type, name, and value, or click **Copy all records**)
2. **Return to the Domains panel**. Taskade keeps checking your records for you
3. **Wait for verification** (usually a few minutes; DNS can take up to 48 hours)
4. **SSL certificate generates automatically** once both records resolve, and Taskade emails the workspace when the domain is live

If HTTPS is still off after about 10 minutes, the panel offers an optional extra record. Add it and the certificate finishes on its own. Most domains never need it.

#### 5. Assign to Taskade Genesis Apps

1. **Connect the domain from the app's own settings** (Launch → Domains), as in step 2
2. **Publish the app** if it is not live yet
3. **Wait for the domain to show as Connected**
4. **Your app is now live at your custom URL!**

***

## Enhanced Cloudflare SSL Integration

**Latest Enhancement:** Advanced custom domain support with seamless Cloudflare SSL integration for maximum security and performance.

### Cloudflare SSL Benefits

**Automatic SSL Certificate Management:**

* **Automatic SSL** - Cloudflare issues the certificate once the SSL Validation record resolves (a domain you buy inside Taskade needs no manual record)
* **Always-On Encryption** - HTTPS enabled by default for all custom domains
* **Certificate Renewal** - Automatic renewal prevents expired certificate issues
* **Security Headers** - Enhanced security headers applied automatically

**Performance Optimizations:**

* **Global CDN** - Content delivered through Cloudflare's worldwide network
* **Edge Computing** - Faster response times with edge-based processing
* **DDoS Protection** - Built-in protection against malicious traffic
* **Caching Optimization** - Intelligent caching for improved load times

**Advanced Features:**

* **Flexible DNS Configuration** - Full control over DNS settings
* **Analytics Integration** - Cloudflare analytics integrated with Taskade insights
* **Rate Limiting** - Advanced protection against abuse

### How Cloudflare SSL Works

1. **Domain Connection** - Connect your domain to Taskade from any DNS provider
2. **Automatic SSL** - Cloudflare provisions and manages SSL certificates
3. **DNS Propagation** - Cloudflare handles DNS routing and optimization
4. **Live Deployment** - Your Genesis app is live with enterprise-grade security

### Setup with Cloudflare

1. **Any DNS provider works** - Taskade serves custom domains through Cloudflare's network on your behalf; you do **not** need a Cloudflare account — any DNS provider that can create a CNAME record works
2. **Add CNAME Record** - Point your subdomain to `external.taskade.com`. If your DNS is on Cloudflare, set the record to **DNS only** (gray cloud), not Proxied
3. **Enable SSL/TLS** - Add the SSL Validation record from the Domains panel, and Cloudflare handles SSL certificate provisioning
4. **Taskade Integration** - Connect the domain in the app's **Launch → Domains** settings

**Result:** Enterprise-grade security, global performance, and seamless SSL management for your Genesis apps!

## Advanced Domain Configuration

### Reassign a Domain to Another App

Connected the domain to the wrong app, or launching a replacement? You can **reassign a custom domain to a different app or workspace yourself** — no need to delete the domain and redo DNS:

1. Open **App settings → Launch → Domains** in the app where the domain is currently connected.
2. In the domain configuration, choose **Move domain** and pick the destination from the workspace picker.
3. Confirm with **Move domain** — all of the domain's settings move with it; only the app the domain points to changes.

### Multiple Subdomains

You can configure multiple subdomains for different purposes:

```
app.yourcompany.com      → Main application hub
portal.yourcompany.com   → Customer portal
admin.yourcompany.com    → Administrative interface
api.yourcompany.com      → API endpoints
```

Each subdomain requires its own CNAME record and Taskade configuration, and each one counts toward your plan's limit (up to 10 per workspace on Pro, unlimited on Business and up).

### Domain Path Structure

A custom domain serves one app. Deep links to the pages inside that app resolve on your domain, with no error on refresh:

```
app.yourcompany.com/feedback    → Feedback page of the app
app.yourcompany.com/booking     → Booking page of the app
app.yourcompany.com/dashboard   → Dashboard page of the app
```

To run separate apps, give each app its own subdomain.

### Wildcard Subdomains

A wildcard CNAME record at your DNS provider can point many names at Taskade at once:

```
DNS: *.yourcompany.com → external.taskade.com

Covers the DNS part for:
client1.yourcompany.com
client2.yourcompany.com
project-x.yourcompany.com
```

The wildcard does not connect the names in Taskade. Add each name in the app's **Domains** settings before it serves an app, and each name counts toward your plan's limit.

***

## Branding Your Custom Domain Apps

### Visual Customization

Once your app is on a custom domain, enhance the branding:

**Through Genesis Prompts:**

```
"Add our company logo to the top left corner"
"Use our brand colors: primary #FF6B35, secondary #004E89"  
"Style the interface to match our website design"
"Add our company contact information in the footer"
```

**Advanced Customization:**

* Set the tab icon, share image, and search settings in **Launch → Branding** (Business and up)
* Custom CSS for advanced styling
* Brand-specific error pages
* Consistent typography with your website

### Content Customization

**Remove Taskade References:**

```
❌ "Powered by Taskade"
✅ "© Your Company Name"

❌ "Built with Genesis"  
✅ Custom footer with your branding

❌ Default success messages
✅ "Thank you! Our team will review your submission."
```

### Email Integration

Configure emails from your domain:

```
From: noreply@yourcompany.com
Subject: Booking Confirmation - Your Company Name
```

Instead of:

```
From: notifications@taskade.com
Subject: Form Submission Notification
```

***

## Use Cases & Examples

### Agency Client Deliverables

**Scenario:** Marketing agency building client portal

```
Domain: portal.clientname.com
App: Project status tracking, file sharing, invoice payments
Branding: Complete client branding throughout
Result: Client thinks agency built custom software
```

### Restaurant Chain Management

**Scenario:** Multi-location restaurant feedback system

```
Domain: feedback.restaurantchain.com  
App: Location-specific feedback with manager alerts
Branding: Restaurant logo and colors throughout
Result: Professional customer feedback experience
```

### Consultant Service Delivery

**Scenario:** Business consultant's assessment tools

```
Domain: assessment.consultantname.com
App: Client questionnaires and results dashboards  
Branding: Professional consulting firm appearance
Result: Higher-value perception and client trust
```

### SaaS MVP Development

**Scenario:** Entrepreneur testing product concept

```
Domain: app.startupname.com
App: Core product functionality built with Genesis
Branding: Full startup branding and positioning
Result: Professional MVP for investor demos
```

***

## Security & SSL

### Automatic SSL Certificates

Taskade handles SSL certificate generation and renewal automatically:

* **SSL certificates provisioned automatically** via Cloudflare once the SSL Validation record from the Domains panel resolves (a domain you buy inside Taskade needs no manual record)
* **Automatic renewal** — certificates are managed and renewed for you
* **HTTPS redirect** enforced for all traffic
* **Modern security standards** (TLS 1.2+)

### Domain Verification

Security measures ensure domain ownership:

* **DNS verification** required before activation
* **Certificate validation** through domain control
* **Regular security scanning** of custom domain apps
* **Automatic security updates** for underlying infrastructure

### Privacy & Data Protection

Custom domain apps maintain full privacy protection:

* **No data sharing** with domain registrars
* **Encrypted data transmission** end-to-end
* **GDPR compliance** maintained
* **Your privacy policy** applies, not Taskade's

***

## Analytics & Monitoring

### Domain Performance

Track your custom domain app performance:

**Built-in Analytics** (Business and up):

* Page views and unique visitors
* Traffic sources and bounce rate
* Geographic user distribution
* Device and browser statistics

**Integration Options:**

```javascript
// Google Analytics integration
gtag('config', 'GA_TRACKING_ID', {
  'custom_map': {'custom_parameter_1': 'app_name'}
});

// Facebook Pixel integration
fbq('track', 'PageView');
fbq('track', 'Lead', {
  content_name: 'Custom Domain App'
});
```

### Monitoring & Uptime

**Automatic Monitoring:**

* 24/7 uptime monitoring
* SSL certificate expiration tracking
* DNS propagation verification
* Performance optimization alerts

**Custom Monitoring:**

* Integration with monitoring services (Pingdom, UptimeRobot)
* Custom alerting for business-critical applications
* Performance benchmarking and optimization
* Regular security scanning and reports

***

## Troubleshooting

### Common DNS Issues

**Problem**: Domain not resolving after 24 hours **Solutions:**

* Verify CNAME record points to `external.taskade.com`
* Check DNS propagation using online tools
* Contact your domain registrar for assistance
* Ensure no conflicting A records exist

**Problem**: SSL certificate not generating **Solutions:**

* Compare the SSL Validation record at your registrar with the one the Domains panel shows
* Wait up to 1 hour for certificate generation
* Check for CAA records blocking certificate issuance
* Contact Taskade support if issue persists

### App Configuration Issues

**Problem**: App not accessible on custom domain **Solutions:**

* Verify app is published and active
* Confirm custom domain is assigned to the correct app
* Check workspace permissions and access controls
* Test with incognito/private browsing mode

**Problem**: Branding not appearing correctly **Solutions:**

* Clear browser cache and refresh page
* Verify custom CSS and branding settings
* Test across different browsers and devices
* Review app configuration for branding elements

### Performance Issues

**Problem**: Slow loading on custom domain **Solutions:**

* Check DNS response times with diagnostic tools
* Verify CDN configuration and caching
* Optimize images and media files in app
* Contact support for infrastructure review

***

## Best Practices

### Domain Selection

**Choose Memorable Subdomains:**

```
✅ app.yourcompany.com (clear and professional)
✅ portal.clientname.com (specific and branded)
✅ booking.restaurantname.com (functional and clear)

❌ x7b9-temp.yourcompany.com (confusing and temporary-looking)
❌ genesis-app-test.yourcompany.com (too technical)
```

### Security Considerations

**Domain Management:**

* Use strong passwords for domain registrar accounts
* Enable two-factor authentication where available
* Regularly review DNS records for unauthorized changes
* Keep domain registration current and auto-renewing

**App Security:**

* Regularly review user access and permissions
* Monitor for suspicious activity or usage patterns
* Keep integrations and API keys secure
* Implement appropriate data retention policies

### Professional Presentation

**Consistency:**

* Match your website's visual design and branding
* Use consistent language and tone throughout
* Include appropriate legal disclaimers and policies
* Provide clear contact information and support

**User Experience:**

* Test thoroughly across devices and browsers
* Ensure fast loading times and reliable functionality
* Provide clear navigation and user guidance
* Include helpful error messages and support resources

***

## Scaling with Custom Domains

### Multi-Client Management

For agencies managing multiple clients:

**Domain Strategy:**

```
client1.youragency.com
client2.youragency.com
client3.youragency.com
```

**Or Client-Owned:**

```
portal.client1.com  
portal.client2.com
portal.client3.com
```

### Enterprise Deployment

For large organizations:

**Departmental Structure:**

```
hr.company.com         → HR applications
marketing.company.com  → Marketing tools
sales.company.com      → Sales dashboards
```

**Geographic Distribution:**

```
us.company.com    → US operations
eu.company.com    → European operations  
asia.company.com  → Asian operations
```

***

## Common Patterns

Custom domains are commonly used to:

* **Agencies** — deliver client portals under the client's own brand (`portal.clientname.com`)
* **Multi-location businesses** — run a single branded feedback or operations app across sites
* **Consultants & service providers** — present assessments and dashboards on a professional domain
* **Founders** — put an MVP on `app.startupname.com` for demos and early users

***

### Support Resources

* [**Custom Domain Setup Guide**](https://www.taskade.com/learn/genesis/custom-domains) - Step-by-step instructions
* [**DNS Configuration Examples**](https://www.taskade.com/learn/genesis/custom-domains) - Registrar-specific guides
* [**Branding Best Practices**](https://www.taskade.com/learn/genesis/publishing) - Professional presentation tips
* [**Troubleshooting Guide**](https://www.taskade.com/learn/genesis/custom-domains) - Common issues and solutions

***

**🌟 Transform your Genesis apps into professional, branded solutions that command respect and drive results.**

_Custom domains are more than just URLs—they're the foundation of professional digital presence and client trust._

---

_Step-by-step guides on taskade.com/learn: [Custom Domains for Your Apps](https://www.taskade.com/learn/genesis/custom-domains), [Buy a Custom Domain Inside Taskade](https://www.taskade.com/learn/genesis/buy-domain)._
