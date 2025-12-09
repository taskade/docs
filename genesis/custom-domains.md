# Custom Domains: Make Your Apps Look Like Million-Dollar Software

**Turn your Genesis apps from "homemade" looking tools into professional business software that looks like you spent a fortune to build it. Your customers will see your brand, not Taskade's.**

{% hint style="success" %}
**Professional Feature!** Custom domains come with Pro plans and higher. Perfect for impressing clients and looking legitimate in your industry.
{% endhint %}

---

## 🌐 What Are Custom Domains?

Custom domains let your Genesis apps live at your own web address instead of a random Taskade link that screams "I used a free tool."

### Before Custom Domains (Looks Amateurish)
```
https://random-gibberish-a7b2.taskade.app
https://purple-elephant-xyz.taskade.com
```

### With Custom Domains (Looks Professional)
```
https://app.yourcompany.com
https://portal.clientname.com
https://booking.restaurantname.com
```

This simple change makes customers think you hired a team of developers when really you just described what you wanted in plain English!

---

## ✨ Benefits of Custom Domains

### **Professional Appearance**
- Apps appear to be built specifically for your brand
- Clients never see "Taskade" in the URL or interface
- Consistent branding throughout the user experience
- Higher perceived value and professionalism

### **Trust & Credibility**
- Users feel more secure entering data on your domain
- Better conversion rates for customer-facing forms
- Enhanced brand recognition and recall
- Professional email sharing and link distribution

### **SEO & Marketing Benefits**
- Custom domains can improve search engine rankings
- Better analytics tracking with your own domain
- Easier to remember and share links
- Integration with your existing marketing materials

### **Client Deliverables**
- Perfect for agencies delivering client solutions
- White-label applications under client brands
- No ongoing Taskade branding in client-facing tools
- Complete solution ownership appearance

---

## 🚀 Setting Up Custom Domains

### Prerequisites

**Plan Requirements:**
- Taskade Pro, Ultra, or Team plan
- Admin access to your workspace
- Domain ownership and DNS management access

**Domain Requirements:**
- Own a domain (e.g., yourcompany.com)
- Ability to create CNAME DNS records
- SSL certificate (handled automatically by Taskade)

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

1. **Navigate to Workspace Settings**
2. **Go to "Custom Domains" section**
3. **Click "Add Custom Domain"**
4. **Enter your chosen subdomain** (e.g., `app.yourcompany.com`)
5. **Save the configuration**

#### 3. Update DNS Records

In your domain registrar's DNS settings:

```
Type: CNAME
Name: app (or your chosen subdomain)
Value: custom-domains.taskade.com
TTL: 3600 (or your registrar's default)
```

**Popular Registrars:**
- **Cloudflare**: Dashboard → DNS → Records → Add CNAME
- **Namecheap**: Dashboard → Domain List → Manage → Advanced DNS
- **GoDaddy**: DNS Management → Records → Add → CNAME
- **Google Domains**: DNS → Custom records → Create new record

#### 4. Verify Setup

1. **Return to Taskade Custom Domains settings**
2. **Click "Verify Domain"** next to your added domain
3. **Wait for verification** (usually 5-15 minutes)
4. **SSL certificate generates automatically**

#### 5. Assign to Genesis Apps

1. **Open your Genesis app**
2. **Click "Publish" dropdown**
3. **Select "Custom Domain"**
4. **Choose your configured domain**
5. **Your app is now live at your custom URL!**

---

## 🛡️ Enhanced Cloudflare SSL Integration

**Latest Enhancement:** Advanced custom domain support with seamless Cloudflare SSL integration for maximum security and performance.

### Cloudflare SSL Benefits:

**Automatic SSL Certificate Management:**
- **One-Click SSL Setup** - SSL certificates provisioned automatically through Cloudflare
- **Always-On Encryption** - HTTPS enabled by default for all custom domains
- **Certificate Renewal** - Automatic renewal prevents expired certificate issues
- **Security Headers** - Enhanced security headers applied automatically

**Performance Optimizations:**
- **Global CDN** - Content delivered through Cloudflare's worldwide network
- **Edge Computing** - Faster response times with edge-based processing
- **DDoS Protection** - Built-in protection against malicious traffic
- **Caching Optimization** - Intelligent caching for improved load times

**Advanced Features:**
- **Custom SSL Certificates** - Support for your own SSL certificates if needed
- **Flexible DNS Configuration** - Full control over DNS settings
- **Analytics Integration** - Cloudflare analytics integrated with Taskade insights
- **Rate Limiting** - Advanced protection against abuse

### How Cloudflare SSL Works:

1. **Domain Connection** - Connect your Cloudflare-managed domain to Taskade
2. **Automatic SSL** - Cloudflare provisions and manages SSL certificates
3. **DNS Propagation** - Cloudflare handles DNS routing and optimization
4. **Live Deployment** - Your Genesis app is live with enterprise-grade security

### Setup with Cloudflare:

1. **Ensure Domain is on Cloudflare** - Your domain must be managed by Cloudflare
2. **Add CNAME Record** - Point your subdomain to `custom-domains.taskade.com`
3. **Enable SSL/TLS** - Cloudflare handles SSL certificate provisioning
4. **Taskade Integration** - Connect domain in Taskade Custom Domains settings

**Result:** Enterprise-grade security, global performance, and seamless SSL management for your Genesis apps!

## 🛠 Advanced Domain Configuration

### Multiple Subdomains

You can configure multiple subdomains for different purposes:

```
app.yourcompany.com      → Main application hub
portal.yourcompany.com   → Customer portal
admin.yourcompany.com    → Administrative interface
api.yourcompany.com      → API endpoints
```

Each subdomain requires its own CNAME record and Taskade configuration.

### Domain Path Structure

Custom domains support path-based app organization:

```
app.yourcompany.com/feedback    → Feedback system
app.yourcompany.com/booking     → Booking system  
app.yourcompany.com/dashboard   → Analytics dashboard
```

### Wildcard Subdomains

For advanced users, wildcard CNAME records enable dynamic subdomains:

```
DNS: *.yourcompany.com → custom-domains.taskade.com

Results in:
anything.yourcompany.com works automatically
client1.yourcompany.com
client2.yourcompany.com
project-x.yourcompany.com
```

---

## 🎨 Branding Your Custom Domain Apps

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
- Upload favicon for browser tab branding
- Custom CSS for advanced styling
- Brand-specific error pages
- Consistent typography with your website

### Content Customization

**Remove Taskade References:**
```
❌ "Powered by Taskade"
✅ "© 2025 Your Company Name"

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

---

## 💼 Use Cases & Examples

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

---

## 🔒 Security & SSL

### Automatic SSL Certificates

Taskade handles SSL certificate generation and renewal automatically:

- **Let's Encrypt certificates** issued within minutes
- **Automatic renewal** every 90 days
- **HTTPS redirect** enforced for all traffic
- **Modern security standards** (TLS 1.2+)

### Domain Verification

Security measures ensure domain ownership:

- **DNS verification** required before activation
- **Certificate validation** through domain control
- **Regular security scanning** of custom domain apps
- **Automatic security updates** for underlying infrastructure

### Privacy & Data Protection

Custom domain apps maintain full privacy protection:

- **No data sharing** with domain registrars
- **Encrypted data transmission** end-to-end
- **GDPR compliance** maintained
- **Your privacy policy** applies, not Taskade's

---

## 📊 Analytics & Monitoring

### Domain Performance

Track your custom domain app performance:

**Built-in Analytics:**
- Page views and unique visitors
- Conversion rates and form submissions
- Geographic user distribution
- Device and browser statistics

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
- 24/7 uptime monitoring
- SSL certificate expiration tracking
- DNS propagation verification
- Performance optimization alerts

**Custom Monitoring:**
- Integration with monitoring services (Pingdom, UptimeRobot)
- Custom alerting for business-critical applications
- Performance benchmarking and optimization
- Regular security scanning and reports

---

## 🛠 Troubleshooting

### Common DNS Issues

**Problem**: Domain not resolving after 24 hours
**Solutions:**
- Verify CNAME record points to `custom-domains.taskade.com`
- Check DNS propagation using online tools
- Contact your domain registrar for assistance
- Ensure no conflicting A records exist

**Problem**: SSL certificate not generating
**Solutions:**
- Confirm domain verification completed successfully
- Wait up to 1 hour for certificate generation
- Check for CAA records blocking Let's Encrypt
- Contact Taskade support if issue persists

### App Configuration Issues

**Problem**: App not accessible on custom domain
**Solutions:**
- Verify app is published and active
- Confirm custom domain is assigned to the correct app
- Check workspace permissions and access controls
- Test with incognito/private browsing mode

**Problem**: Branding not appearing correctly
**Solutions:**
- Clear browser cache and refresh page
- Verify custom CSS and branding settings
- Test across different browsers and devices
- Review app configuration for branding elements

### Performance Issues

**Problem**: Slow loading on custom domain
**Solutions:**
- Check DNS response times with diagnostic tools
- Verify CDN configuration and caching
- Optimize images and media files in app
- Contact support for infrastructure review

---

## 💡 Best Practices

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
- Use strong passwords for domain registrar accounts
- Enable two-factor authentication where available
- Regularly review DNS records for unauthorized changes
- Keep domain registration current and auto-renewing

**App Security:**
- Regularly review user access and permissions
- Monitor for suspicious activity or usage patterns
- Keep integrations and API keys secure
- Implement appropriate data retention policies

### Professional Presentation

**Consistency:**
- Match your website's visual design and branding
- Use consistent language and tone throughout
- Include appropriate legal disclaimers and policies
- Provide clear contact information and support

**User Experience:**
- Test thoroughly across devices and browsers
- Ensure fast loading times and reliable functionality  
- Provide clear navigation and user guidance
- Include helpful error messages and support resources

---

## 📈 Scaling with Custom Domains

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

---

## 🎯 Success Stories

### Digital Agency Growth

*"Custom domains transformed how we deliver client solutions. Clients see professional apps under their own branding, which justifies higher project fees and leads to more referrals. We've increased our project values by 40% since implementing custom domains."*

**— Sarah Chen, Digital Marketing Agency Owner**

### Restaurant Chain Efficiency  

*"Our multi-location feedback system on feedback.ourrestaurants.com processes 500+ customer submissions daily. The professional appearance increased response rates by 60%, and managers love getting instant alerts about service issues."*

**— Miguel Rodriguez, Operations Director**

### Consulting Practice Expansion

*"Custom domain client assessments at assessment.myconsulting.com helped us close 3x more enterprise deals. Prospects take us more seriously when they interact with professional, branded tools instead of generic forms."*

**— Dr. Jennifer Park, Business Consultant**

---

## 🚀 Getting Started with Custom Domains

Ready to elevate your Genesis apps with professional custom domains?

### Planning Checklist

- [ ] **Confirm plan eligibility** (Pro, Ultra, or Team)
- [ ] **Choose subdomain strategy** (app, portal, specific function)
- [ ] **Verify domain ownership** and DNS management access
- [ ] **Plan branding updates** for professional appearance
- [ ] **Prepare launch timeline** and stakeholder communication

### Implementation Steps

1. **Set up custom domain** in workspace settings
2. **Configure DNS records** with your domain registrar
3. **Verify domain** and wait for SSL certificate
4. **Assign domain** to your Genesis app
5. **Test thoroughly** across devices and browsers
6. **Update branding** and remove Taskade references
7. **Launch and monitor** performance and user feedback

### Support Resources

- **[Custom Domain Setup Guide](https://help.taskade.com/en/articles/10443706-cname-custom-domain)** - Step-by-step instructions
- **[DNS Configuration Examples](https://help.taskade.com/en/articles/10443706-cname-custom-domain)** - Registrar-specific guides
- **[Branding Best Practices](https://help.taskade.com/en/articles/12165353-publish-and-clone-your-apps)** - Professional presentation tips
- **[Troubleshooting Guide](https://help.taskade.com/en/articles/10443706-cname-custom-domain)** - Common issues and solutions

---

**🌟 Transform your Genesis apps into professional, branded solutions that command respect and drive results.**

*Custom domains are more than just URLs—they're the foundation of professional digital presence and client trust.*
