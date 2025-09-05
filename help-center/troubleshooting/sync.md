# Sync Issues

**Keep your data in perfect harmony across all devices. This guide resolves sync problems and ensures your changes appear instantly everywhere you use Taskade.**

{% hint style="info" %}
**Sync Status Indicator**: Look for the sync icon in the top-right corner of Taskade. Green means everything is synchronized, orange indicates syncing in progress, red means sync issues need attention.
{% endhint %}

---

## 🔄 Understanding Taskade Sync

### **How Sync Works**

Taskade uses **real-time synchronization** powered by operational transformation:

```yaml
Sync Architecture:
  Real-time Updates:
    - Changes appear instantly (typically <200ms)
    - Conflict-free collaborative editing
    - Automatic conflict resolution
    - Offline changes sync when reconnected
  
  Data Flow:
    - Device → Taskade Servers → All Other Devices
    - WebSocket connections for instant updates
    - Background sync for reliability
    - Local caching for offline access
```

### **What Gets Synced**
- ✅ **Tasks and Projects**: All content and structure changes
- ✅ **Custom Fields**: Field values and configurations  
- ✅ **Assignments**: Task assignments and team member changes
- ✅ **Due Dates**: All scheduling and deadline information
- ✅ **Comments**: Team communication and feedback
- ✅ **File Attachments**: Documents, images, and media files
- ✅ **View Preferences**: Your preferred project views and settings
- ✅ **Workspace Settings**: Team configurations and permissions

---

## 🚨 Common Sync Problems

### **Changes Not Appearing on Other Devices**

#### **Immediate Diagnosis**:
1. **Check Sync Status**: Look for sync indicator in app
2. **Force Refresh**: 
   - **Web**: Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)
   - **Mobile**: Pull down to refresh in any project
   - **Desktop**: Restart application completely

3. **Verify Connection**: Ensure stable internet on all devices
4. **Check Account**: Confirm you're signed into same account everywhere

#### **Advanced Troubleshooting**:
```yaml
Step-by-Step Resolution:
  1. Connection Test:
     - Visit taskade.com in browser
     - Check if you can create a test task
     - Verify test task appears on mobile
  
  2. Account Verification:
     - Check email address in account settings
     - Ensure no duplicate accounts exist
     - Verify team membership is consistent
  
  3. Local Data Reset:
     - Clear browser cache (web app)
     - Clear app cache (mobile app)  
     - Sign out and sign back in
     - Force sync from settings menu
```

### **Delayed Sync (Changes Take Too Long)**

#### **Acceptable Sync Times**:
- **Real-time edits**: Under 1 second
- **File uploads**: 5-30 seconds depending on size
- **Large project changes**: 2-10 seconds
- **Initial load**: 3-15 seconds depending on project size

#### **Improving Sync Speed**:
```yaml
Performance Optimization:
  Network:
    - Use WiFi instead of cellular when possible
    - Ensure 10+ Mbps connection for best performance
    - Avoid VPNs that add latency
    - Close bandwidth-heavy applications
  
  Device:
    - Keep Taskade app updated
    - Restart device if performance is sluggish
    - Free up device storage (500MB+ recommended)
    - Close unnecessary background apps
```

---

## 📱 Device-Specific Sync Issues

### **Mobile App Sync Problems**

#### **iOS Sync Issues**:
```yaml
Common iOS Problems:
  Background App Refresh:
    - Settings > General > Background App Refresh
    - Enable for Taskade specifically
    - Allows sync when app not active
  
  Low Power Mode:
    - Disables background sync
    - Turn off during active work sessions
    - Re-enable after important sync operations
  
  Storage Issues:
    - iOS needs 1GB+ free for smooth sync
    - Clear photos/videos to free space
    - Offload unused apps temporarily
```

#### **Android Sync Issues**:
```yaml
Android-Specific Solutions:
  Battery Optimization:
    - Settings > Battery > Battery Optimization
    - Set Taskade to "Not Optimized"
    - Prevents Android from limiting sync
  
  Data Saver Mode:
    - Disable Data Saver for Taskade
    - Allow unrestricted data usage
    - Essential for real-time sync
  
  Auto-Sync Settings:
    - Settings > Accounts > Auto-sync
    - Ensure auto-sync is enabled
    - Check Taskade account specifically
```

### **Desktop App Sync Issues**

#### **Windows Desktop Problems**:
1. **Firewall/Antivirus**: Add Taskade as exception
2. **Network Adapter**: Update network drivers
3. **Windows Updates**: Install latest system updates
4. **Proxy Settings**: Configure corporate proxy settings if needed

#### **Mac Desktop Problems**:
1. **Security Settings**: Allow Taskade internet access
2. **Network Preferences**: Reset network settings if needed
3. **macOS Updates**: Keep system updated
4. **Little Snitch**: Configure if using network monitoring tools

---

## 🌐 Network & Connection Issues

### **Corporate Network Problems**

#### **Common Enterprise Restrictions**:
```yaml
Corporate Network Issues:
  WebSocket Blocking:
    - Many firewalls block WebSocket connections
    - Required for real-time sync
    - Contact IT to whitelist *.taskade.com
  
  Proxy Configuration:
    - Corporate proxies can interfere with sync
    - May require proxy bypass for Taskade
    - Test with mobile hotspot to confirm
  
  Port Restrictions:
    - Sync requires standard HTTPS ports (443)
    - Some networks block non-standard ports
    - VPN might provide workaround
```

#### **Working with IT Department**:
```
Subject: Taskade Access Request for Business Productivity

Hi [IT Team],

We're using Taskade for project management and need the following domains whitelisted:
- *.taskade.com (all subdomains)  
- WebSocket connections on port 443
- Allow persistent connections for real-time sync

Taskade is SOC 2 compliant and used by [number] team members for [business purpose].

Technical contact: support@taskade.com for any security questions.

Thanks for your help!
```

### **Home Network Sync Issues**

#### **Router/WiFi Problems**:
1. **Restart Router**: Unplug for 30 seconds, plug back in
2. **Update Firmware**: Check for router firmware updates
3. **WiFi Channel**: Switch to less congested channel (1, 6, or 11)
4. **QoS Settings**: Prioritize Taskade traffic if available

#### **ISP-Related Issues**:
- **Throttling**: Some ISPs throttle WebSocket connections
- **DNS Issues**: Try Google DNS (8.8.8.8) or Cloudflare (1.1.1.1)
- **Regional Restrictions**: Use VPN if accessing from restricted regions

---

## 💾 Offline Sync & Data Recovery

### **Working Offline**

#### **Offline Capabilities**:
```yaml
What Works Offline:
  ✅ Viewing existing projects and tasks
  ✅ Editing task content and descriptions
  ✅ Checking off completed tasks
  ✅ Adding new tasks to existing projects
  ✅ Basic project navigation

What Requires Connection:
  ❌ Creating new projects
  ❌ Real-time collaboration
  ❌ File uploads and attachments
  ❌ Team member invitations
  ❌ Advanced AI features
```

#### **Offline Best Practices**:
1. **Sync Before Going Offline**: Ensure all changes are uploaded
2. **Work in Existing Projects**: Avoid creating new projects offline
3. **Keep Changes Simple**: Complex formatting may not sync properly
4. **Reconnect ASAP**: Upload changes as soon as connection returns

### **Data Recovery After Sync Issues**

#### **If Changes Are Lost**:
1. **Check Project History**: Look for version history in project
2. **Review Team Activity**: Check if teammates made conflicting changes
3. **Browser Recovery**: Check browser history/recent tabs
4. **Contact Support**: Provide approximate time of lost changes

#### **Preventing Data Loss**:
```yaml
Data Protection Strategy:
  Regular Habits:
    - Sync frequently when online
    - Don't work offline for extended periods
    - Create backup copies of critical content
    - Use project templates for important structures
  
  Emergency Backup:
    - Export critical projects to markdown
    - Take screenshots of important layouts
    - Keep local copies of uploaded files
    - Document team workflow processes
```

---

## 👥 Team Collaboration Sync

### **Team Member Changes Not Syncing**

#### **Permission-Related Issues**:
```yaml
Common Permission Problems:
  Team Access:
    - Verify team member has correct role
    - Check workspace permissions
    - Ensure member accepted invitation
    - Confirm account is active
  
  Project-Level Permissions:
    - Check individual project sharing
    - Verify edit vs. view permissions
    - Review custom role restrictions
    - Test with admin account
```

#### **Collaboration Best Practices**:
1. **Establish Sync Protocols**: Team agreement on sync checking
2. **Use Comments**: Communicate major changes to team
3. **Work in Sections**: Divide large projects to reduce conflicts
4. **Regular Check-ins**: Verify everyone sees latest changes

### **Resolving Sync Conflicts**

#### **When Multiple People Edit Same Content**:
```yaml
Conflict Resolution:
  Automatic Resolution:
    - Taskade uses operational transformation
    - Most conflicts resolved automatically
    - Last save typically wins for simple changes
  
  Manual Resolution Required:
    - Complex formatting changes
    - Structural reorganization
    - Large-scale deletions or moves
    - Custom field modifications
  
  Best Practices:
    - Communicate before major changes
    - Work on different sections simultaneously
    - Use comments for change notifications
    - Establish team editing guidelines
```

---

## 🔧 Advanced Sync Troubleshooting

### **Debugging Sync Issues**

#### **Technical Diagnostics**:
```yaml
Developer Tools Debugging:
  1. Open Browser Developer Tools (F12)
  2. Go to Network tab
  3. Filter by "WS" (WebSocket)
  4. Look for active WebSocket connections
  5. Red/failed connections indicate sync issues
  
Connection Health Check:
  - Green indicator: All systems operational
  - Orange indicator: Temporary sync delays
  - Red indicator: Connection issues requiring attention
  - Gray indicator: Offline mode active
```

#### **Force Sync Options**:
1. **Browser**: Hard refresh (Ctrl+Shift+R)
2. **Mobile**: Pull-to-refresh in any project view
3. **Desktop**: File menu → Force Sync
4. **Last Resort**: Sign out completely, clear cache, sign back in

### **API Rate Limiting**

#### **High-Volume Sync Issues**:
```yaml
Rate Limiting Scenarios:
  Bulk Operations:
    - Importing large datasets
    - Mass task creation/updates
    - Automated API usage
    - Third-party integrations
  
  Solutions:
    - Pace operations (1-2 per second)
    - Use bulk API endpoints when available
    - Implement exponential backoff
    - Contact support for rate limit increases
```

---

## 📊 Sync Status Monitoring

### **Understanding Sync Indicators**

#### **Visual Status Indicators**:
```yaml
Sync Status Icons:
  🟢 Green Circle: Fully synchronized
  🟠 Orange Circle: Sync in progress
  🔴 Red Circle: Sync error, action needed
  ⚫ Gray Circle: Offline mode
  ↻ Spinning: Active sync operation
```

#### **Detailed Sync Information**:
- **Last Sync Time**: Available in account settings
- **Sync Queue**: Shows pending operations  
- **Error Log**: Details about failed sync attempts
- **Network Status**: Connection quality and speed

### **Proactive Sync Monitoring**:
1. **Check Status Regularly**: Glance at sync indicator frequently
2. **Address Issues Quickly**: Don't let sync problems accumulate
3. **Monitor Team Sync**: Ensure all team members stay synchronized
4. **Regular Maintenance**: Weekly sync health check

---

**🔄 Still experiencing sync issues?** Our support team can investigate server-side sync problems and provide advanced troubleshooting for complex scenarios.

*For network configuration help, contact your IT department. For account-related sync issues, see our [Account Management](../account-management/README.md) guide.*
