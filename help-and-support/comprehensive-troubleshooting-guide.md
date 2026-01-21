# Troubleshooting Guide

Resolve common Taskade issues quickly with our comprehensive troubleshooting guide covering everything from basic connectivity problems to advanced workflow debugging.

{% hint style="success" %}
This guide provides step-by-step solutions for the most common Taskade issues. If you can't find a solution here, our support team is available 24/7 to help you get back to productivity.
{% endhint %}

## Quick Diagnostic Tools

### System Status Check

**Before troubleshooting, check if the issue is system-wide:**

{% stepper %}
{% step %}
#### Check Taskade Status

Visit [status.taskade.com](https://status.taskade.com) to see if there are any known service issues.
{% endstep %}

{% step %}
#### Test Internet Connection

Ensure you have a stable internet connection by visiting other websites.
{% endstep %}

{% step %}
#### Clear Browser Cache

Clear your browser cache and cookies for Taskade.com.
{% endstep %}

{% step %}
#### Try Incognito/Private Mode

Test Taskade in an incognito or private browsing window.
{% endstep %}
{% endstepper %}

### Browser Compatibility

**Supported browsers and versions:**

| Browser     | Minimum Version | Recommended Version |
| ----------- | --------------- | ------------------- |
| **Chrome**  | 90+             | Latest              |
| **Firefox** | 88+             | Latest              |
| **Safari**  | 14+             | Latest              |
| **Edge**    | 90+             | Latest              |
| **Brave**   | 1.20+           | Latest              |

## Login and Authentication Issues

### Cannot Log In

**Common login problems and solutions:**

#### Email/Password Issues

{% stepper %}
{% step %}
#### Verify Credentials

Double-check your email address and password for typos.
{% endstep %}

{% step %}
#### Reset Password

Click "Forgot Password" on the login page and check your email for reset instructions.
{% endstep %}

{% step %}
#### Check Email Verification

Ensure you've verified your email address by clicking the link in your welcome email.
{% endstep %}

{% step %}
#### Clear Stored Data

Clear your browser's stored passwords and try logging in again.
{% endstep %}
{% endstepper %}

#### Two-Factor Authentication (2FA) Problems

* **Invalid Code**: Ensure your device's time is synchronized correctly
* **Lost Device**: Use backup codes provided during 2FA setup
* **App Issues**: Try generating a new code or reinstalling your authenticator app
* **Recovery**: Contact support if you've lost access to both your device and backup codes

#### Social Login Issues (Google/Microsoft)

* **Permission Denied**: Check that you're using the correct Google/Microsoft account
* **Account Linking**: Ensure your social account is properly linked to your Taskade account
* **Pop-up Blocked**: Allow pop-ups for Taskade.com in your browser settings
* **Third-party Cookies**: Enable third-party cookies for authentication to work properly

### Account Access Problems

**Resolving account-related issues:**

#### Account Locked or Suspended

1. **Check Email**: Look for suspension notification emails from Taskade
2. **Review Terms**: Ensure you haven't violated Taskade's Terms of Service
3. **Contact Support**: Submit a support ticket with your account details
4. **Provide Information**: Include any relevant context about recent account activity

#### Multiple Accounts

* **Account Consolidation**: Contact support to merge multiple accounts
* **Email Conflicts**: Use different email addresses for separate accounts
* **Workspace Access**: Ensure you're logging into the correct account for your workspace

## Sync and Data Issues

### Projects Not Syncing

**Resolve synchronization problems:**

#### Real-time Sync Issues

{% stepper %}
{% step %}
#### Check Connection

Verify you have a stable internet connection.
{% endstep %}

{% step %}
#### Refresh Browser

Hard refresh the page (Ctrl+F5 or Cmd+Shift+R).
{% endstep %}

{% step %}
#### Check Other Devices

Test if the issue occurs on other devices or browsers.
{% endstep %}

{% step %}
#### Wait and Retry

Sometimes sync delays resolve within a few minutes.
{% endstep %}
{% endstepper %}

#### Offline Changes Not Syncing

* **Network Restoration**: Ensure your internet connection is fully restored
* **Conflict Resolution**: Manually resolve any sync conflicts that appear
* **Data Recovery**: Check if offline changes are stored locally and can be manually copied
* **Version History**: Use project version history to recover lost changes

### Missing or Corrupted Data

**Recover lost or corrupted project data:**

#### Missing Projects or Tasks

1. **Check Trash/Archive**: Look in archived or deleted items
2. **Search Function**: Use the global search to locate missing content
3. **Version History**: Access project version history to recover deleted items
4. **Team Member Check**: Ask team members if they moved or deleted the content
5. **Backup Recovery**: Contact support for data recovery from backups

#### Formatting Issues

* **Copy-Paste Problems**: Avoid pasting complex formatting from other applications
* **Character Encoding**: Check for special characters that might cause display issues
* **File Corruption**: Re-upload corrupted files or attachments
* **Browser Rendering**: Try viewing the content in a different browser

## Performance Issues

### Slow Loading Times

**Optimize Taskade performance:**

#### Browser Optimization

{% stepper %}
{% step %}
#### Update Browser

Ensure you're using the latest version of your browser.
{% endstep %}

{% step %}
#### Clear Cache

Clear browser cache, cookies, and stored data for Taskade.
{% endstep %}

{% step %}
#### Disable Extensions

Temporarily disable browser extensions that might interfere.
{% endstep %}

{% step %}
#### Check Resources

Close unnecessary tabs and applications to free up system resources.
{% endstep %}
{% endstepper %}

#### Network Optimization

* **Bandwidth Check**: Test your internet speed and connection quality
* **VPN Issues**: Try disabling VPN if you're using one
* **Firewall Settings**: Ensure Taskade isn't blocked by firewall or security software
* **DNS Issues**: Try switching to public DNS servers (8.8.8.8 or 1.1.1.1)

### High CPU or Memory Usage

**Reduce resource consumption:**

#### Browser Resource Management

* **Tab Management**: Close unnecessary Taskade tabs and projects
* **Extension Conflicts**: Identify and disable resource-heavy browser extensions
* **Memory Leaks**: Restart your browser periodically to clear memory leaks
* **Hardware Acceleration**: Enable or disable hardware acceleration in browser settings

#### Project Optimization

* **Large Projects**: Break down very large projects into smaller, manageable ones
* **Media Files**: Optimize or compress large images and attachments
* **Complex Automations**: Simplify complex automation workflows that might consume resources
* **Real-time Features**: Temporarily disable real-time collaboration if not needed

## AI and Automation Issues

### AI Agents Not Responding

**Troubleshoot AI agent problems:**

#### Agent Configuration Issues

{% stepper %}
{% step %}
#### Check Agent Status

Verify the agent is active and properly configured.
{% endstep %}

{% step %}
#### Review Permissions

Ensure the agent has necessary permissions for the requested actions.
{% endstep %}

{% step %}
#### Test Simple Queries

Try basic questions to test if the agent is responsive at all.
{% endstep %}

{% step %}
#### Check Knowledge Base

Verify the agent's knowledge base is properly loaded and accessible.
{% endstep %}
{% endstepper %}

#### Response Quality Issues

* **Training Data**: Ensure the agent has sufficient and relevant training data
* **Prompt Clarity**: Use clear, specific prompts and questions
* **Context Limits**: Break down complex requests into smaller parts
* **Model Updates**: Check if the agent model needs updating or retraining

### Automation Failures

**Debug automation workflow problems:**

#### Trigger Issues

* **Trigger Conditions**: Verify trigger conditions are properly configured
* **Event Detection**: Check if the triggering events are actually occurring
* **Permission Problems**: Ensure automation has necessary permissions
* **Rate Limiting**: Check if automation is hitting API rate limits

#### Action Failures

* **Integration Status**: Verify all integrated services are connected and authorized
* **Data Mapping**: Check if data is properly mapped between automation steps
* **Error Logs**: Review automation error logs for specific failure reasons
* **Dependency Issues**: Ensure all required data and resources are available

## Mobile App Issues

### Mobile App Problems

**Resolve mobile-specific issues:**

#### App Performance

{% stepper %}
{% step %}
#### Update App

Ensure you're using the latest version of the Taskade mobile app.
{% endstep %}

{% step %}
#### Restart App

Force close and restart the Taskade app.
{% endstep %}

{% step %}
#### Restart Device

Restart your mobile device to clear memory and refresh connections.
{% endstep %}

{% step %}
#### Reinstall App

Uninstall and reinstall the app if problems persist.
{% endstep %}
{% endstepper %}

#### Sync Issues on Mobile

* **Background Sync**: Enable background app refresh for Taskade
* **Data Connection**: Ensure you have a stable cellular or Wi-Fi connection
* **Storage Space**: Free up device storage space if running low
* **Battery Optimization**: Disable battery optimization for Taskade to prevent sync interruption

### Mobile-Specific Features

**Troubleshoot mobile feature problems:**

#### Widget Issues

* **Widget Setup**: Remove and re-add widgets if they're not displaying correctly
* **Permissions**: Grant necessary permissions for widgets to function
* **iOS Shortcuts**: Recreate Siri shortcuts if they stop working
* **Android Widgets**: Clear widget cache and data if experiencing issues

#### Notification Problems

* **Permission Settings**: Check notification permissions for Taskade
* **Do Not Disturb**: Verify Do Not Disturb settings aren't blocking notifications
* **Battery Optimization**: Disable battery optimization for consistent notifications
* **Notification Categories**: Check individual notification category settings

## Integration Issues

### Third-Party Service Integration

**Resolve integration problems:**

#### Connection Issues

{% stepper %}
{% step %}
#### Re-authorize Service

Disconnect and reconnect the third-party service integration.
{% endstep %}

{% step %}
#### Check Service Status

Verify the third-party service is operational and accessible.
{% endstep %}

{% step %}
#### Update Permissions

Ensure Taskade has necessary permissions for the integrated service.
{% endstep %}

{% step %}
#### Test Credentials

Verify your credentials for the third-party service are still valid.
{% endstep %}
{% endstepper %}

#### Data Transfer Issues

* **API Limits**: Check if you've exceeded API rate limits for the integrated service
* **Data Format**: Ensure data formats are compatible between services
* **Field Mapping**: Verify field mapping is correctly configured
* **Sync Frequency**: Adjust sync frequency if experiencing timeout issues

### Calendar Integration Problems

**Fix calendar sync issues:**

#### Google Calendar

* **Permission Scope**: Ensure Taskade has calendar read/write permissions
* **Calendar Selection**: Verify you're syncing with the correct calendar
* **Two-way Sync**: Check if changes in both directions are syncing properly
* **Time Zone**: Ensure time zone settings match between Taskade and Google Calendar

#### Outlook Integration

* **Account Type**: Verify you're using the correct Microsoft account type
* **Exchange Settings**: Check Exchange server settings if using corporate Outlook
* **Sync Conflicts**: Resolve any calendar sync conflicts that may arise
* **Recurring Events**: Test that recurring events sync properly

## Workspace and Collaboration Issues

### Team Collaboration Problems

**Resolve multi-user issues:**

#### Permission Issues

{% stepper %}
{% step %}
#### Check User Roles

Verify team members have appropriate roles and permissions.
{% endstep %}

{% step %}
#### Review Workspace Settings

Check workspace-level permissions and access controls.
{% endstep %}

{% step %}
#### Test Individual Access

Test each user's access to specific projects and features.
{% endstep %}

{% step %}
#### Update Permissions

Adjust permissions as needed and notify affected users.
{% endstep %}
{% endstepper %}

#### Real-time Collaboration Issues

* **Conflict Resolution**: Manually resolve editing conflicts between team members
* **Version Control**: Use version history to track and resolve conflicting changes
* **Communication**: Ensure team members communicate about simultaneous editing
* **Browser Compatibility**: Verify all team members are using supported browsers

### Sharing and Access Problems

**Fix sharing and access issues:**

#### Link Sharing

* **Link Generation**: Regenerate sharing links if they're not working
* **Permission Levels**: Verify sharing links have appropriate permission levels
* **Expiration Dates**: Check if sharing links have expired
* **Domain Restrictions**: Ensure domain restrictions aren't blocking access

#### Guest Access

* **Email Verification**: Ensure guests verify their email addresses
* **Account Creation**: Help guests create accounts if required
* **Browser Support**: Verify guests are using supported browsers
* **Firewall Issues**: Check if corporate firewalls are blocking guest access

## Advanced Troubleshooting

### Network and Connectivity

**Diagnose network-related issues:**

#### Corporate Network Issues

* **Firewall Configuration**: Work with IT to whitelist Taskade domains and ports
* **Proxy Settings**: Configure proxy settings if required by your organization
* **SSL Certificate**: Ensure SSL certificates are properly configured
* **Content Filtering**: Check if content filters are blocking Taskade features

#### DNS and Routing Issues

* **DNS Resolution**: Test DNS resolution for Taskade domains
* **Traceroute**: Use traceroute to identify network routing issues
* **CDN Problems**: Try accessing Taskade from different geographic locations
* **ISP Issues**: Contact your ISP if experiencing persistent connectivity problems

### Browser Developer Tools

**Use browser tools for advanced debugging:**

#### Console Errors

{% stepper %}
{% step %}
#### Open Developer Tools

Press F12 or right-click and select "Inspect Element".
{% endstep %}

{% step %}
#### Check Console Tab

Look for error messages in the Console tab.
{% endstep %}

{% step %}
#### Note Error Details

Copy error messages and share with support if needed.
{% endstep %}

{% step %}
#### Clear Errors

Refresh the page and see if errors persist.
{% endstep %}
{% endstepper %}

#### Network Tab Analysis

* **Failed Requests**: Identify failed network requests and their status codes
* **Load Times**: Analyze resource loading times to identify bottlenecks
* **CORS Errors**: Check for Cross-Origin Resource Sharing issues
* **API Responses**: Examine API response data for debugging

## Getting Help

### Self-Service Resources

**Additional help resources:**

* **📚 Help Center**: Comprehensive articles at [help.taskade.com](https://help.taskade.com)
* **🎥 Video Tutorials**: Step-by-step video guides for common tasks
* **💬 Community Forum**: Connect with other users and share solutions
* **📖 Documentation**: Complete feature documentation and guides

### Contact Support

**When to contact our support team:**

#### Before Contacting Support

1. **Try Basic Troubleshooting**: Follow the relevant steps in this guide
2. **Gather Information**: Note error messages, browser version, and steps to reproduce
3. **Check Status Page**: Verify there are no known service issues
4. **Document the Issue**: Take screenshots or screen recordings if helpful

#### Support Channels

* **📧 Email Support**: [support@taskade.com](mailto:support@taskade.com)
* **💬 Live Chat**: Available in-app during business hours
* **📞 Phone Support**: Available for Enterprise customers
* **🎫 Ticket System**: Submit detailed support requests through the help center

#### Information to Include

* **Account Details**: Your email address and workspace name
* **Browser/Device**: Browser version, operating system, and device type
* **Error Messages**: Exact error messages and when they occur
* **Steps to Reproduce**: Detailed steps that lead to the issue
* **Screenshots**: Visual documentation of the problem

{% hint style="info" %}
**Response Times**: We typically respond to support requests within 24 hours on business days. Enterprise customers receive priority support with faster response times.
{% endhint %}

## Preventive Measures

### Best Practices

**Prevent common issues:**

#### Regular Maintenance

* **Browser Updates**: Keep your browser updated to the latest version
* **Cache Clearing**: Regularly clear browser cache and cookies
* **Extension Management**: Periodically review and update browser extensions
* **Account Security**: Use strong passwords and enable two-factor authentication

#### Data Management

* **Regular Backups**: Export important projects regularly as backups
* **Version Control**: Use version history features to track important changes
* **Access Review**: Regularly review team member access and permissions
* **Integration Monitoring**: Periodically test and maintain third-party integrations

### Performance Optimization

**Maintain optimal performance:**

* **Project Organization**: Keep projects organized and avoid overly complex structures
* **Media Management**: Optimize file sizes and remove unnecessary attachments
* **Automation Efficiency**: Design efficient automation workflows to reduce resource usage
* **Team Training**: Ensure team members follow best practices for collaboration
