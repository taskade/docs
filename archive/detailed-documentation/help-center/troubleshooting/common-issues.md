# Common Issues & Solutions

**Quick solutions to the most frequently encountered Taskade issues. These troubleshooting steps resolve 90% of user problems—bookmark this page for instant help when you need it.**

{% hint style="success" %}
**Quick Fix Strategy:** Most issues can be resolved by refreshing the page, clearing browser cache, or updating to the latest version. Start with the simplest solutions first!
{% endhint %}

---

## 🔄 Sync & Data Issues

### **Changes Not Appearing Across Devices**

#### **Symptoms**:
- Updates made on desktop not showing on mobile
- Team member changes not visible
- Projects appearing outdated

#### **Solutions**:
1. **Force Refresh**: 
   - Web: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - Mobile: Pull down to refresh or restart app
   - Desktop: Restart the application

2. **Check Connection**:
   - Verify internet connectivity
   - Look for sync indicator in top bar
   - Switch to mobile data or different network to test

3. **Clear Cache**:
   - Browser: Clear site data for taskade.com
   - Mobile: Clear app cache in device settings
   - Desktop: Clear application cache from settings

#### **Advanced Fixes**:
```yaml
If Standard Solutions Don't Work:
  1. Sign out and sign back in
  2. Check account sync settings
  3. Verify you're using the same account on all devices
  4. Contact support with specific sync error messages
```

---

## 🚫 Login & Authentication Problems

### **Can't Access Account**

#### **Common Causes & Solutions**:

| Issue | Solution |
|-------|----------|
| **Forgot Password** | Use "Forgot Password" link on login page |
| **Account Locked** | Wait 15 minutes or contact support |
| **2FA Problems** | Use backup codes or contact support |
| **Social Login Issues** | Clear browser cookies and try again |
| **Email Not Recognized** | Try alternate email or check spelling |

### **"Invalid Credentials" Error**

1. **Double-check email and password**
2. **Clear browser cookies and cache**
3. **Try logging in from incognito/private window**
4. **Reset password if still failing**
5. **Contact support if using SSO/enterprise login**

---

## 💾 Loading & Performance Issues

### **Slow Loading Times**

#### **Quick Fixes**:
- **Close unused browser tabs** (Taskade works best with sufficient memory)
- **Disable browser extensions** temporarily
- **Switch to Chrome or Edge** for best performance
- **Check available device storage** (need 500MB+ free space)

#### **Advanced Optimization**:
```yaml
Performance Checklist:
  Browser:
    - Update to latest version
    - Clear browsing data (cache, cookies)
    - Disable unnecessary extensions
    - Enable hardware acceleration
  
  Device:
    - Close other applications
    - Restart device if sluggish
    - Check available RAM (4GB+ recommended)
    - Ensure stable internet connection (10Mbps+)
```

### **App Crashes or Freezes**

#### **Immediate Steps**:
1. **Force quit** the application
2. **Restart** your device
3. **Update** Taskade to latest version
4. **Check system requirements**

#### **Platform-Specific Recovery Steps**:

**Desktop Apps:**
- **macOS**: Right-click Taskade icon in Dock → **Quit**
- **Windows**: Press **Alt + F4** to force quit
- **Reinstall**: Download latest version from taskade.com/downloads

**iOS (iPhone/iPad):**
1. Close app completely (swipe up from bottom, swipe up on Taskade)
2. Restart device (hold power + volume button)
3. Redownload from App Store if issues persist

**Android:**
1. Go to Settings → Apps → Taskade → **Force stop**
2. Clear cache: Settings → Apps → Taskade → Storage → **Clear Cache**
3. Clear data if needed, then restart device
4. Reinstall from Google Play Store if problems continue

**Web Browser:**
1. **Chrome**: Click ⋮ → More tools → Clear browsing data → Cached images and files
2. **Firefox**: Hamburger menu → Options → Privacy & Security → Cookies and Site Data → Clear cached web content
3. **Edge**: Three dots → Settings → Privacy & services → Clear browsing data → Cached images and files

#### **Prevention**:
- Keep Taskade updated
- Don't overload projects with excessive data
- Regular device maintenance
- Monitor device temperature (overheating can cause issues)
- Close unused browser tabs
- Ensure stable internet connection

---

## 🌐 ISP & Network Blocking Issues

### **Taskade Blocked by ISP**

#### **Symptoms**:
- Can't access taskade.com or app won't load
- Error messages about blocked content
- Works on mobile data but not WiFi
- Colleagues can access but you can't

#### **Root Cause**:
Some internet service providers (ISPs) use security software that can mistakenly block access to Taskade domains. This is rare but can happen with certain network configurations or security policies.

#### **Solutions**:

1. **Contact Your ISP**:
   - Most effective long-term solution
   - Explain that Taskade is a legitimate business application
   - Request Taskade be added to their allowlist

2. **Interim Workaround - Use CloudFlare VPN**:
   ```
   Quick Setup:
   1. Visit https://1.1.1.1/ in your web browser
   2. Choose your operating system
   3. Follow the installation instructions
   4. Reopen Taskade and test the connection
   ```

3. **Alternative Network Solutions**:
   - Try different WiFi network (coffee shop, library)
   - Use mobile hotspot/data instead of WiFi
   - Connect via VPN (NordVPN, ExpressVPN, etc.)
   - Use work/school network if available

#### **Prevention**:
- Keep ISP contact information handy
- Have backup internet options ready
- Use VPN as permanent solution if needed

---

## 🎥 Video Calls & Collaboration Issues

### **Video/Audio Not Working**

#### **Browser Permissions**:
1. **Camera/Microphone Access**: Check browser permissions
2. **HTTPS Required**: Ensure you're on https://taskade.com
3. **Browser Compatibility**: Use Chrome, Edge, or Safari
4. **Firewall Settings**: Allow Taskade through corporate firewalls

#### **Quality Issues**:
```yaml
Video Call Optimization:
  Bandwidth:
    - Minimum 1Mbps upload/download
    - Close other streaming applications
    - Use wired connection when possible
  
  Device:
    - Close unnecessary applications
    - Check camera/microphone hardware
    - Update device drivers
    - Ensure good lighting for video
```

---

## 🔔 Notification Problems

### **Not Receiving Notifications**

#### **Desktop Notifications**:
1. **Browser Settings**: Allow notifications for taskade.com
2. **System Settings**: Enable browser notifications in OS
3. **Do Not Disturb**: Check if enabled
4. **Focus Mode**: Disable during work hours

#### **Mobile Push Notifications**:
1. **App Permissions**: Enable notifications in device settings
2. **App Updates**: Update to latest version
3. **Background Refresh**: Allow Taskade to run in background
4. **Battery Optimization**: Exclude Taskade from battery saving

#### **Email Notifications**:
- **Check Spam Folder**: Taskade emails might be filtered
- **Update Email Preferences**: Review notification settings in account
- **Whitelist Domain**: Add @taskade.com to safe senders
- **Check Email Validity**: Ensure email address is correct in account

---

## 📱 Mobile App Specific Issues

### **App Won't Start or Keeps Crashing**

#### **iOS Solutions**:
1. **Force Close**: Double tap home button, swipe up on Taskade
2. **Restart Device**: Hold power + volume buttons
3. **Update App**: Check App Store for updates
4. **Reinstall**: Delete and reinstall from App Store
5. **iOS Version**: Ensure iOS 13+ for compatibility

#### **Android Solutions**:
1. **Clear App Cache**: Settings > Apps > Taskade > Storage > Clear Cache
2. **Clear App Data**: Settings > Apps > Taskade > Storage > Clear Data
3. **Check Storage**: Ensure 1GB+ free space
4. **Update App**: Check Play Store for updates
5. **Android Version**: Ensure Android 8.0+ for compatibility

### **Features Missing in Mobile App**

| Feature | Availability | Alternative |
|---------|-------------|-------------|
| **Complex Formatting** | Limited | Use web app for advanced editing |
| **File Uploads** | Photo/Camera only | Use web app for documents |
| **Advanced Views** | Basic support | Web app for full view options |
| **Bulk Operations** | Not available | Use web app for bulk edits |

---

## 🌐 Browser Compatibility Issues

### **Supported Browsers**

#### **✅ Fully Supported**:
- **Chrome 80+** (Recommended)
- **Edge 80+** (Recommended) 
- **Safari 13+** (Mac/iOS)
- **Firefox 75+** (Basic support)

#### **❌ Not Supported**:
- Internet Explorer (all versions)
- Chrome 79 and below
- Safari 12 and below
- Mobile browsers in "Desktop Mode"

### **Feature Limitations by Browser**

```yaml
Browser-Specific Issues:
  Firefox:
    - Video calls may have audio issues
    - Some animations might be slower
    - File upload interface different
  
  Safari:
    - Notification permissions work differently
    - Some keyboard shortcuts unavailable
    - Video calls require additional permissions
  
  Mobile Browsers:
    - Limited file upload capabilities
    - Reduced keyboard shortcut support
    - Different touch gesture behavior
```

---

## 🔧 API & Integration Issues

### **Automation Not Working**

#### **Common Triggers**:
1. **Check Integration Status**: Green dot indicates active connection
2. **Verify Permissions**: Ensure third-party app access granted
3. **Test Manually**: Try triggering automation manually first
4. **Check Rate Limits**: Some integrations have usage limits
5. **Update API Keys**: Refresh expired authentication tokens

### **Data Not Syncing with External Tools**

#### **Troubleshooting Steps**:
```yaml
Integration Debugging:
  1. Authentication:
     - Reconnect the integration
     - Check if API keys are valid
     - Verify account permissions
  
  2. Configuration:
     - Review automation setup
     - Check field mapping
     - Verify trigger conditions
  
  3. Testing:
     - Test with simple data first
     - Check activity logs
     - Monitor error messages
```

---

## 🆘 When to Contact Support

### **Contact Support If**:
- **Data Loss**: Missing projects or important information
- **Account Issues**: Can't access account after trying all steps
- **Billing Problems**: Payment or subscription issues
- **Enterprise Features**: SSO, advanced security, or compliance questions
- **Bug Reports**: Reproducible issues with specific steps

### **Before Contacting Support**:
1. **Try basic troubleshooting** from this guide
2. **Note error messages** exactly as they appear
3. **Document steps** to reproduce the issue
4. **Check service status** at [status.taskade.com](https://status.taskade.com)
5. **Gather system info**: Browser version, OS, device type

### **How to Contact**:
- **Help Center**: [help.taskade.com](https://help.taskade.com)
- **Community Forum**: [community.taskade.com](https://community.taskade.com)
- **Email Support**: support@taskade.com
- **Live Chat**: Available in app during business hours

---

## 📋 Troubleshooting Checklist

### **Quick Diagnostic Steps**:
- [ ] **Refresh the page** or restart the app
- [ ] **Check internet connection** and speed
- [ ] **Clear browser cache** and cookies
- [ ] **Disable browser extensions** temporarily
- [ ] **Update Taskade** to latest version
- [ ] **Try different browser** or device
- [ ] **Check service status** page
- [ ] **Review recent changes** that might have caused issues

### **When Issues Persist**:
- [ ] **Document the problem** with screenshots
- [ ] **Note exact error messages**
- [ ] **Try reproducing** the issue consistently
- [ ] **Check with team members** if it's widespread
- [ ] **Contact support** with detailed information

---

**🔧 Still having trouble?** Most issues can be resolved quickly with these solutions. If problems persist, our support team is here to help with more complex situations.

*For specific feature questions, check our [Help Center](../README.md). For account and billing issues, visit our [Account Management](../account-management/README.md) section.*
