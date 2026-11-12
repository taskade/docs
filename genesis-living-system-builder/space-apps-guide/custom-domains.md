---
description: Connect your own branded domain to a published Taskade Genesis app — set up DNS, enable SSL, and go live on your own URL in minutes.
---

# Put Your App on Your Own Domain

**Put a published Taskade Genesis app on your own domain. Add a CNAME record at your DNS provider, and add the SSL record that Taskade shows you. Taskade then turns on SSL automatically. Your customers see your brand, not the Taskade brand.**

{% hint style="success" %}
**Pro plan and up.** Custom domains are available on **Pro** (up to 10 per workspace) and on **Business and up** (unlimited). A domain that you buy inside Taskade does not count toward the limit.
{% endhint %}

***

## What Are Custom Domains?

With a custom domain, your Taskade Genesis app opens at your own web address. Without one, it opens at a shared `taskade.app` subdomain.

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

* The app looks like a product of your brand.
* Clients see your domain in the URL, not a Taskade subdomain.
* Your branding stays the same on each page.
* The app looks more professional and more valuable.

### **Trust & Credibility**

* Users feel more secure when they enter data on your domain.
* Customer-facing forms can get more sign-ups.
* People remember your brand better.
* Your shared links look professional.

### **SEO & Marketing Benefits**

* A custom domain can help your search rankings.
* Your analytics show your own domain.
* People remember and share the link more easily.
* The link matches your other marketing materials.

### **Client Deliverables**

* Agencies can deliver apps to clients on the client's domain.
* You can white-label apps under the brand of a client.
* Client-facing tools do not show Taskade branding.
* The tool looks like your own product.

***

## Setting Up Custom Domains

### Prerequisites

**Plan requirements:**

* A Taskade Pro plan or higher
* Admin access to your workspace
* Ownership of the domain, and access to its DNS settings

**Domain requirements:**

* You own a domain, for example yourcompany.com.
* You can add CNAME records at your DNS provider.
* You do not need your own SSL certificate. Taskade provides it.

### Step-by-Step Setup

#### 1. Choose Your Subdomain

Choose a subdomain for your Taskade Genesis apps.

**Common patterns:**

```
app.yourcompany.com      - General applications
portal.yourcompany.com   - Customer portals  
booking.yourcompany.com  - Appointment systems
feedback.yourcompany.com - Feedback collection
client.yourcompany.com   - Client-specific tools
```

#### 2. Add Domain in Taskade

1. Open your published Taskade Genesis app, then open **App settings**.
2. Go to **Launch → Domains**.
3. Under **Connect a domain you own**, click **Connect**.
4. In **Your domain**, type your subdomain, for example `app.yourcompany.com`.
5. Read the records. Taskade shows the exact DNS records to add.

{% hint style="info" %}
**No domain yet?** Under **Buy a brand-new domain**, click **Shop domains**. Taskade buys the domain and sets up DNS and SSL for you, so you add no records. Buying a domain inside Taskade works on every paid plan. A bought domain does not count toward the custom-domain limit. Read [Buy a Custom Domain Inside Taskade](https://www.taskade.com/learn/genesis/buy-domain).
{% endhint %}

#### 3. Update DNS Records

Add this record in the DNS settings at your domain registrar:

```
Type: CNAME
Name: app (or your chosen subdomain)
Value: external.taskade.com
TTL: 3600 (or your registrar's default)
```

**Popular registrars:**

* **Cloudflare**: Dashboard → DNS → Records → Add CNAME (set Proxy status to **DNS only**)
* **Namecheap**: Dashboard → Domain List → Manage → Advanced DNS
* **GoDaddy**: DNS Management → Records → Add → CNAME
* **Google Domains**: DNS → Custom records → Create new record

#### 4. Verify Setup

1. Add the SSL Validation record that the Domains panel shows under the routing record. Copy its exact type, name, and value, or click **Copy all records**.
2. Go back to the Domains panel. Taskade continues to examine your records for you.
3. Wait for the verification. It usually takes a few minutes. DNS can take up to 48 hours.
4. Wait for the SSL certificate. Taskade makes it when both records resolve, and emails the workspace when the domain is live.
5. If HTTPS is still off after about 10 minutes, add the TXT record under **Optional extra check** in the Domains panel.

After the optional TXT record resolves, the certificate finishes on its own. Most domains do not need this record.

#### 5. Assign to Taskade Genesis Apps

1. Connect the domain from the settings of the app (**Launch → Domains**), as in step 2.
2. If the app is not live yet, publish it.
3. Wait for the domain status to read **Active**.

Your app is then live at your custom URL.

***

## Enhanced Cloudflare SSL Integration

Taskade serves custom domains through the Cloudflare network. Cloudflare gives your app SSL, speed, and protection.

### Cloudflare SSL Benefits

**Automatic SSL certificates:**

* **Automatic SSL**: Cloudflare issues the certificate when the SSL Validation record resolves. A domain that you buy inside Taskade needs no manual record.
* **Always-on encryption**: HTTPS is on by default for all custom domains.
* **Certificate renewal**: Certificates renew automatically, so they do not expire.
* **Security headers**: Cloudflare adds security headers automatically.

**Performance:**

* **Global CDN**: Cloudflare delivers your content through its worldwide network.
* **Edge computing**: Processing at the network edge gives faster responses.
* **DDoS protection**: Built-in protection blocks malicious traffic.
* **Caching**: Cloudflare caches your content, so pages load faster.

**Advanced features:**

* **DNS settings**: You keep full control of your DNS records.
* **Analytics**: Cloudflare analytics connect with the Taskade insights.
* **Rate limiting**: Cloudflare limits abuse.

### How Cloudflare SSL Works

1. **Domain connection**: You connect your domain to Taskade from any DNS provider.
2. **Automatic SSL**: Cloudflare provisions and manages the SSL certificates.
3. **DNS propagation**: Cloudflare routes the traffic for your domain.
4. **Live deployment**: Your Taskade Genesis app is live with enterprise-grade security.

### Setup with Cloudflare

You do **not** need a Cloudflare account. Taskade serves custom domains through the Cloudflare network for you. Any DNS provider that can make a CNAME record works.

1. **Add the CNAME record.** Point your subdomain to `external.taskade.com`. If your DNS is on Cloudflare, set the record to **DNS only** (gray cloud), not Proxied.
2. **Add the SSL Validation record** from the Domains panel. Cloudflare then provisions the SSL certificate.
3. **Connect the domain** in the **Launch → Domains** settings of the app.

## Advanced Domain Configuration

### Reassign a Domain to Another App

Did you connect the domain to the wrong app, or do you launch a replacement app? You can **move a custom domain to a different app or workspace yourself**. You do not delete the domain or change DNS.

1. Open **App settings → Launch → Domains** in the app that has the domain now.
2. In the domain settings, choose **Move domain**, and pick the destination in the workspace picker.
3. Click **Move domain** to confirm.

All the settings of the domain move with it. Only the app that the domain points to changes.

### Multiple Subdomains

You can use more than one subdomain, each for a different purpose:

```
app.yourcompany.com      → Main application hub
portal.yourcompany.com   → Customer portal
admin.yourcompany.com    → Administrative interface
api.yourcompany.com      → API endpoints
```

Each subdomain needs its own CNAME record and its own Taskade settings. Each one counts toward the limit of your plan: up to 10 per workspace on Pro, subspaces included, and unlimited on Business and up.

To add one more domain:

1. Open **Launch → Domains** and find the connected domain.
2. Click **Add another** beside its green **Connected** chip.
3. Do the same CNAME and SSL steps for the new name.

If **Add another** is missing, the workspace connected every domain that its plan includes.

### Remove a Domain

1. Open **App settings → Launch → Domains**.
2. Open the domain.
3. Click **Remove this domain**.

The domain then stops serving your app. If you brought the domain yourself, you can then point its DNS records anywhere else.

### Domain Path Structure

A custom domain serves one app. Links to pages inside that app work on your domain, and a refresh shows no error:

```
app.yourcompany.com/feedback    → Feedback page of the app
app.yourcompany.com/booking     → Booking page of the app
app.yourcompany.com/dashboard   → Dashboard page of the app
```

To run separate apps, give each app its own subdomain.

### Wildcard Subdomains

At your DNS provider, one wildcard CNAME record can point many names at Taskade:

```
DNS: *.yourcompany.com → external.taskade.com

Covers the DNS part for:
client1.yourcompany.com
client2.yourcompany.com
project-x.yourcompany.com
```

The wildcard does not connect the names in Taskade. Add each name in the **Domains** settings of an app before it serves that app. Each name counts toward the limit of your plan.

***

## Branding Your Custom Domain Apps

### Visual Customization

When your app is on a custom domain, add your brand to it.

**With Taskade Genesis prompts:**

```
"Add our company logo to the top left corner"
"Use our brand colors: primary #FF6B35, secondary #004E89"  
"Style the interface to match our website design"
"Add our company contact information in the footer"
```

**More options:**

* Set the tab icon, the share image, and the search settings in **Launch → Branding** (Business and up).
* Add custom CSS for more styles.
* Add error pages with your brand.
* Use the same fonts as your website.

### Content Customization

**Replace Taskade references with your own text:**

```
❌ "Powered by Taskade"
✅ "© Your Company Name"

❌ "Built with Genesis"  
✅ Custom footer with your branding

❌ Default success messages
✅ "Thank you! Our team will review your submission."
```

### Email Integration

You can send emails from your own domain:

```
From: noreply@yourcompany.com
Subject: Booking Confirmation - Your Company Name
```

The default emails look like this:

```
From: notifications@taskade.com
Subject: Form Submission Notification
```

***

## Use Cases & Examples

### Agency Client Deliverables

**Scenario:** A marketing agency builds a client portal.

```
Domain: portal.clientname.com
App: Project status tracking, file sharing, invoice payments
Branding: Complete client branding throughout
Result: Client thinks agency built custom software
```

### Restaurant Chain Management

**Scenario:** A restaurant chain collects feedback for each location.

```
Domain: feedback.restaurantchain.com  
App: Location-specific feedback with manager alerts
Branding: Restaurant logo and colors throughout
Result: Professional customer feedback experience
```

### Consultant Service Delivery

**Scenario:** A business consultant gives assessment tools to clients.

```
Domain: assessment.consultantname.com
App: Client questionnaires and results dashboards  
Branding: Professional consulting firm appearance
Result: Higher-value perception and client trust
```

### SaaS MVP Development

**Scenario:** A founder tests a product idea.

```
Domain: app.startupname.com
App: Core product functionality built with Genesis
Branding: Full startup branding and positioning
Result: Professional MVP for investor demos
```

***

## Security & SSL

### Automatic SSL Certificates

Taskade makes and renews the SSL certificates for you:

* **Automatic certificates**: Cloudflare provisions the certificate when the SSL Validation record from the Domains panel resolves. A domain that you buy inside Taskade needs no manual record.
* **Automatic renewal**: Taskade manages and renews the certificates.
* **HTTPS redirect**: All traffic uses HTTPS.
* **Modern standards**: TLS 1.2+.

### Domain Verification

Taskade makes sure that you own the domain:

* **DNS verification**: The domain must pass this check before it goes live.
* **Certificate validation**: The certificate authority confirms that you control the domain.
* **Security scans**: Taskade scans custom domain apps regularly.
* **Security updates**: Taskade updates the infrastructure automatically.

### Privacy & Data Protection

Custom domain apps keep your data private:

* **No data sharing**: Taskade does not share your data with domain registrars.
* **Encryption**: Data is encrypted from end to end.
* **GDPR**: Compliance stays the same.
* **Your privacy policy**: Your policy applies, not the Taskade policy.

***

## Analytics & Monitoring

### Domain Performance

You can track the performance of your custom domain app.

**Built-in Analytics** (Business and up):

* Page views and unique visitors
* Traffic sources and bounce rate
* Locations of users
* Devices and browsers

**Integration options:**

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

**Automatic monitoring by Taskade:**

* Uptime monitoring at all hours
* Tracking of SSL certificate expiry dates
* DNS propagation checks
* Performance alerts

**Your own monitoring:**

* Connect a monitoring service (Pingdom, UptimeRobot).
* Set alerts for business-critical apps.
* Measure performance and compare it over time.
* Run regular security scans and reports.

***

## Troubleshooting

### Common DNS Issues

**Problem**: The domain does not resolve after 48 hours. **Solutions**:

* Make sure that the CNAME record points to `external.taskade.com`.
* Examine the DNS propagation with an online tool.
* Ask your domain registrar for help.
* Make sure that no A record conflicts with the CNAME record.

**Problem**: The SSL certificate does not generate. **Solutions**:

* Compare the SSL Validation record at your registrar with the record that the Domains panel shows.
* If HTTPS is still off after about 10 minutes, add the TXT record under **Optional extra check** in the Domains panel.
* Look for CAA records that block the certificate.
* If the problem continues, contact Taskade support.

### App Configuration Issues

**Problem**: The app does not open on the custom domain. **Solutions**:

* Make sure that the app is published and active.
* Make sure that you connected the custom domain to the correct app.
* Examine the workspace permissions and access controls.
* Open the domain in a private browser window.

**Problem**: The branding does not show correctly. **Solutions**:

* Clear the browser cache and refresh the page.
* Examine the custom CSS and the branding settings.
* Test in different browsers and on different devices.
* Examine the branding elements in the app settings.

### Performance Issues

**Problem**: The app loads slowly on the custom domain. **Solutions**:

* Measure the DNS response times with a diagnostic tool.
* Examine the CDN and caching settings.
* Make the images and media files in the app smaller.
* Ask support for an infrastructure review.

***

## Best Practices

### Domain Selection

**Choose subdomains that people remember:**

```
✅ app.yourcompany.com (clear and professional)
✅ portal.clientname.com (specific and branded)
✅ booking.restaurantname.com (functional and clear)

❌ x7b9-temp.yourcompany.com (confusing and temporary-looking)
❌ genesis-app-test.yourcompany.com (too technical)
```

### Security Considerations

**Domain management:**

* Use strong passwords for your domain registrar accounts.
* Turn on two-factor authentication where it is available.
* Examine your DNS records regularly for changes that you did not make.
* Keep your domain registration current, with auto-renewal on.

**App security:**

* Examine user access and permissions regularly.
* Look for suspicious activity or usage patterns.
* Keep your integrations and API keys secure.
* Set data retention rules that fit your data.

### Professional Presentation

**Consistency:**

* Match the visual design and branding of your website.
* Use the same language and tone on all pages.
* Include the necessary legal disclaimers and policies.
* Give clear contact and support information.

**User experience:**

* Test the app on different devices and browsers.
* Make sure that the app loads fast and works reliably.
* Give clear navigation and guidance.
* Show helpful error messages and support links.

***

## Scaling with Custom Domains

### Multi-Client Management

Agencies with many clients can use one of these patterns.

**Subdomains of the agency domain:**

```
client1.youragency.com
client2.youragency.com
client3.youragency.com
```

**Domains that the clients own:**

```
portal.client1.com  
portal.client2.com
portal.client3.com
```

### Enterprise Deployment

Large organizations can use one of these patterns.

**One subdomain for each department:**

```
hr.company.com         → HR applications
marketing.company.com  → Marketing tools
sales.company.com      → Sales dashboards
```

**One subdomain for each region:**

```
us.company.com    → US operations
eu.company.com    → European operations  
asia.company.com  → Asian operations
```

***

## Common Patterns

People often use custom domains for these purposes:

* **Agencies**: client portals under the brand of the client (`portal.clientname.com`)
* **Multi-location businesses**: one branded feedback or operations app for all sites
* **Consultants and service providers**: assessments and dashboards on a professional domain
* **Founders**: an MVP on `app.startupname.com` for demos and early users

***

### Support Resources

* [**Custom Domain Setup Guide**](https://www.taskade.com/learn/genesis/custom-domains): step-by-step instructions
* [**DNS Configuration Examples**](https://www.taskade.com/learn/genesis/custom-domains): guides for each registrar
* [**Branding Best Practices**](https://www.taskade.com/learn/genesis/publishing): tips for a professional app
* [**Troubleshooting Guide**](https://www.taskade.com/learn/genesis/custom-domains): common problems and solutions

***

**🌟 Put your Taskade Genesis apps on your own domain and give your clients a branded product.**

---

_Step-by-step guides on taskade.com/learn: [Custom Domains for Your Apps](https://www.taskade.com/learn/genesis/custom-domains), [Buy a Custom Domain Inside Taskade](https://www.taskade.com/learn/genesis/buy-domain)._
