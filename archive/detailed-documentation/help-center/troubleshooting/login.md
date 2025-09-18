# Login Problems

**Can't access your Taskade account? This comprehensive guide covers every login scenario and provides step-by-step solutions to get you back to work quickly.**

{% hint style="warning" %}
**Security First**: Never share your login credentials. If you suspect your account has been compromised, reset your password immediately and contact support.
{% endhint %}

---

## 🔐 Password Issues

### **Forgot Your Password**

#### **Reset Process**:
1. **Go to Login Page**: Visit [taskade.com/login](https://taskade.com/login)
2. **Click "Forgot Password"** link below the password field
3. **Enter Your Email**: Use the email associated with your account
4. **Check Your Email**: Look for reset email (check spam folder)
5. **Follow Email Link**: Click the reset link (valid for 1 hour)
6. **Create New Password**: Must be 8+ characters with mix of letters/numbers

#### **Not Receiving Reset Email**:
```yaml
Troubleshooting Steps:
  1. Check Spam/Junk Folder:
     - Look for emails from noreply@taskade.com
     - Mark as "not spam" if found
  
  2. Email Delivery Issues:
     - Wait 5-10 minutes for delivery
     - Try requesting reset again
     - Use different email if you have multiple accounts
  
  3. Whitelist Taskade:
     - Add @taskade.com to safe senders
     - Check corporate email filters
     - Contact IT if using company email
```

### **Password Not Working**

#### **Common Causes**:
- **Caps Lock enabled** - Check keyboard indicator
- **Recent password change** - Use most recent password
- **Autocomplete error** - Type password manually
- **Different keyboard layout** - Check language settings
- **Account locked** - Too many failed attempts

#### **Solutions**:
1. **Clear Browser Data**:
   - Clear cookies and cache for taskade.com
   - Try logging in from incognito/private window
   - Disable browser password manager temporarily

2. **Check Account Status**:
   - Verify you're using correct email address
   - Try alternate email addresses you might have used
   - Ensure account hasn't been suspended

---

## 📧 Email Address Issues

### **Email Not Recognized**

#### **Possible Reasons**:
- **Typo in email address** - Double-check spelling
- **Multiple email addresses** - Try other emails you use
- **Account created with different email** - Check all your email accounts
- **Social login originally used** - Try Google/Microsoft login instead

#### **Finding Your Account Email**:
1. **Check Email History**: Look for old Taskade emails in your inbox
2. **Try Common Variations**: Different email addresses you use
3. **Social Login**: Try "Continue with Google" or "Continue with Microsoft"
4. **Contact Support**: Provide any information about your account

### **Changed Email Address**

If you need to update the email on your account:
1. **Log in with current email**
2. **Go to Account Settings**
3. **Update email in profile**
4. **Verify new email address**
5. **Use new email for future logins**

---

## 🔗 Social Login Issues (Google, Microsoft, Apple)

### **"Continue with Google" Not Working**

#### **Common Solutions**:
1. **Clear Browser Cookies**: Especially Google-related cookies
2. **Sign Out of Google**: Log out of Google account, then try again
3. **Browser Extensions**: Disable ad blockers and privacy extensions
4. **Third-party Cookies**: Enable third-party cookies for login
5. **Pop-up Blockers**: Allow pop-ups for taskade.com

#### **Account Mismatch Issues**:
```yaml
Multiple Account Problems:
  Scenario: "I have both Google and email login"
  Solution:
    - Each login method creates separate account
    - Use original login method consistently
    - Contact support to merge accounts if needed
  
  Scenario: "Wrong Google account opens"
  Solution:
    - Sign out of all Google accounts
    - Sign in with correct Google account first
    - Then access Taskade
```

### **Microsoft/Office 365 Login Issues**

#### **Enterprise Account Problems**:
- **IT Restrictions**: Company may block third-party app connections
- **Conditional Access**: May require additional verification
- **Multi-Factor Authentication**: Ensure you complete all MFA steps
- **Account Permissions**: Check if personal Microsoft apps are allowed

#### **Solutions**:
1. **Contact IT Department**: Verify Taskade is approved for use
2. **Use Personal Microsoft Account**: If available and allowed
3. **Alternative Login**: Create account with email/password instead
4. **Admin Consent**: May require IT admin to approve Taskade access

---

## 🔒 Two-Factor Authentication (2FA) Problems

### **Can't Access 2FA Code**

#### **Lost Phone/Authenticator App**:
1. **Use Backup Codes**: Check where you saved them during 2FA setup
2. **Try Alternative Methods**: SMS if you set it up as backup
3. **Contact Support**: Provide account verification information
4. **Account Recovery**: May require identity verification process

#### **2FA Code Not Working**

```yaml
Common 2FA Issues:
  Wrong Time:
    - Ensure device time is correct
    - Sync time automatically in device settings
    - Time zone differences can affect codes
  
  App Issues:
    - Try regenerating code in authenticator app
    - Ensure you're using the right account in app
    - Try backup method if available
  
  Network Delays:
    - Wait 30 seconds and try next code
    - Codes refresh every 30 seconds
    - Don't use expired codes
```

### **Setting Up 2FA**

If you need to enable or reconfigure 2FA:
1. **Log into Account Settings**
2. **Security Section**
3. **Enable Two-Factor Authentication**
4. **Scan QR Code** with authenticator app
5. **Save Backup Codes** in secure location
6. **Test Login** before closing setup

---

## 🌐 Browser & Network Issues

### **Login Page Won't Load**

#### **Browser Issues**:
- **Clear Browser Cache**: Full clear of browsing data
- **Update Browser**: Ensure you're using supported version
- **Try Different Browser**: Chrome, Edge, Safari, or Firefox
- **Disable Extensions**: Ad blockers can interfere with login

#### **Network Issues**:
```yaml
Connection Troubleshooting:
  Corporate Networks:
    - VPN might block social logins
    - Firewall restrictions on authentication
    - Proxy settings interfering
    - Contact IT for whitelist requests
  
  Home Networks:
    - Router firewall blocking login servers
    - ISP restrictions on certain sites
    - DNS issues preventing connection
    - Try mobile hotspot to test
```

### **Login Redirects or Loops**

#### **Redirect Issues**:
1. **Clear All Cookies**: Especially for taskade.com
2. **Check URL**: Ensure you're on official taskade.com
3. **Browser Settings**: Enable JavaScript and cookies
4. **Extensions**: Disable privacy/security extensions temporarily

---

## 🏢 Enterprise & SSO Login Issues

### **Single Sign-On (SSO) Problems**

#### **SAML/SSO Not Working**:
- **Contact IT Administrator**: SSO setup issues require admin help
- **Check SSO Configuration**: Verify settings match requirements
- **User Not Provisioned**: You might not be added to Taskade in identity provider
- **Role Permissions**: Ensure you have correct permissions assigned

#### **Domain-Based Login**:
```yaml
Enterprise Login Process:
  1. Go to taskade.com/login
  2. Enter your work email address
  3. Click "Continue"
  4. You'll be redirected to your company login
  5. Complete your normal work login process
  6. You'll be redirected back to Taskade

Common Issues:
  - Wrong email domain
  - Not configured for your organization
  - Identity provider downtime
  - Permissions not granted by admin
```

---

## 📱 Mobile App Login Issues

### **iOS App Login Problems**

#### **Common Solutions**:
1. **Update App**: Check App Store for latest version
2. **Restart App**: Force close and reopen
3. **Clear App Cache**: Delete and reinstall app
4. **Check iOS Version**: Requires iOS 13+ for latest features
5. **Network Connection**: Try WiFi and cellular data

### **Android App Login Problems**

#### **Common Solutions**:
1. **Clear App Cache**: Settings > Apps > Taskade > Storage > Clear Cache
2. **Clear App Data**: Settings > Apps > Taskade > Storage > Clear Data
3. **Update App**: Check Google Play Store
4. **Check Android Version**: Requires Android 8.0+ for latest features
5. **Permissions**: Ensure app has internet access

#### **Biometric Login Issues**:
```yaml
Fingerprint/Face ID Problems:
  Setup Issues:
    - Enable biometric login in Taskade settings
    - Ensure device biometrics are set up
    - Re-register biometrics if changed
  
  Not Working:
    - Clean sensor/camera
    - Re-register fingerprint/face
    - Check device settings for app permissions
    - Fall back to password login
```

---

## 🆘 Account Recovery

### **Can't Access Account At All**

#### **Complete Account Recovery**:
1. **Gather Information**:
   - Any email addresses you might have used
   - Approximate account creation date
   - Names of projects or team members
   - Billing information if you have a subscription

2. **Contact Support**:
   - Email: support@taskade.com
   - Subject: "Account Recovery Request"
   - Provide all information you can remember
   - Include any screenshots or emails from Taskade

3. **Verification Process**:
   - Support may ask for identity verification
   - Provide information that only account owner would know
   - May require photo ID for security purposes

### **Suspicious Account Activity**

#### **If You Suspect Account Compromise**:
1. **Change Password Immediately**: Use password reset process
2. **Enable 2FA**: Add extra security layer
3. **Check Account Activity**: Review recent changes and logins
4. **Contact Support**: Report suspicious activity
5. **Secure Other Accounts**: If you used same password elsewhere

---

## ✅ Login Success Checklist

### **After Successful Login**:
- [ ] **Verify Account Data**: Ensure all your projects are visible
- [ ] **Check Team Access**: Confirm you can see shared workspaces
- [ ] **Test Core Features**: Create a task or project to verify functionality
- [ ] **Update Security**: Enable 2FA if not already active
- [ ] **Save Login Method**: Note which method worked for future reference

### **Prevent Future Login Issues**:
- [ ] **Bookmark Correct URL**: Always use taskade.com/login
- [ ] **Save Password Securely**: Use password manager
- [ ] **Keep Backup Codes**: Store 2FA backup codes safely
- [ ] **Update Contact Info**: Ensure email is current
- [ ] **Regular Security Review**: Check account settings monthly

---

**🔐 Still can't log in?** Our support team can help with complex account recovery situations. Contact us with as much detail as possible about your account and the issues you're experiencing.

*For account security best practices, see our [Account Management](../account-management/README.md) guide. For other issues, return to [Troubleshooting](./README.md).*
