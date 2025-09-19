# SAML Authentication via Okta

Configure secure single sign-on (SSO) for your organization using SAML 2.0 authentication with Okta as your identity provider.

{% hint style="success" %}
SAML authentication provides secure, password-less login for your team members while maintaining centralized user management and enhanced security controls.
{% endhint %}

## Overview

Security Assertion Markup Language (SAML) is a secure, industry-standard protocol that enables single sign-on (SSO) authentication. By integrating Taskade with Okta via SAML, your team members can access Taskade using their existing Okta credentials without needing to remember additional passwords.

This integration provides:
- **Enhanced Security**: Centralized authentication and access control
- **Streamlined User Experience**: Single sign-on across all applications
- **Centralized User Management**: Manage user access through Okta
- **Compliance Support**: Meet enterprise security and compliance requirements

## Prerequisites

Before configuring SAML authentication via Okta, ensure you have:

- **Okta Administrator Access**: Administrative privileges in your Okta tenant
- **Taskade Enterprise Plan**: SAML authentication requires an enterprise subscription
- **Domain Verification**: Verified ownership of your organization's domain
- **User Directory**: Properly configured user accounts in Okta

## SAML Configuration Process

### Step 1: Configure Okta Application

#### Create New Application Integration

1. **Access Okta Admin Dashboard**
   - Log in to your Okta admin console
   - Navigate to **Applications** → **Applications**

2. **Create App Integration**
   - Click **Create App Integration**
   - Select **SAML 2.0** as the sign-on method
   - Click **Next**

3. **Configure General Settings**
   - **App name**: Enter "Taskade" (or your preferred name)
   - **App logo**: Upload Taskade logo (optional but recommended)
   - **App visibility**: Configure visibility settings as needed
   - Click **Next**

#### Configure SAML Settings

4. **SAML Configuration**
   - **Single sign-on URL**: `https://taskade.com/login/sso/saml`
   - **Audience URI (SP Entity ID)**: `https://taskade.com`
   - **Name ID format**: Select **EmailAddress**
   - **Application username**: Select **Email**

5. **Attribute Statements**
   Add the following attribute mappings:
   - **Name**: `email`
     - **Name format**: `Unspecified`
     - **Value**: `user.email`
   - **Name**: `firstName`
     - **Name format**: `Unspecified`
     - **Value**: `user.firstName`
   - **Name**: `lastName`
     - **Name format**: `Unspecified`
     - **Value**: `user.lastName`

6. **Complete Configuration**
   - Review your settings
   - Select "I'm an Okta customer adding an internal app"
   - Click **Finish**

#### Obtain SAML Metadata

7. **View SAML Setup Instructions**
   - From the application details page, click **View SAML setup instructions**
   - Copy the following values (keep this page open for reference):
     - **Identity Provider Single Sign-On URL**
     - **Identity Provider Issuer**
     - **X.509 Certificate**

### Step 2: Configure Taskade SAML Settings

#### Access Enterprise Settings

1. **Log in to Taskade**
   - Sign in to your Taskade account with an administrator account

2. **Navigate to Enterprise Settings**
   - Go to **Workspace Settings** → **Enterprise** (or contact Taskade support for enterprise setup)

3. **Configure SAML Provider**
   - Select **Okta** as your SAML provider
   - Enter the SAML configuration details:
     - **SSO URL**: Paste the Identity Provider Single Sign-On URL from Okta
     - **Entity ID**: Paste the Identity Provider Issuer from Okta
     - **Certificate**: Paste the X.509 Certificate from Okta

4. **Save Configuration**
   - Click **Save** to apply your SAML settings
   - Taskade will validate the configuration

### Step 3: Assign Users in Okta

#### User Assignment

1. **Assign to Individuals/Groups**
   - From your Taskade application in Okta
   - Click **Assignments** tab
   - Assign users or groups who should have access to Taskade

2. **Configure User Access**
   - Ensure users have appropriate permissions in Okta
   - Configure any additional access policies as needed

## User Authentication Flow

### How SAML SSO Works

1. **User Access**: User navigates to `https://taskade.com/login`
2. **SSO Redirect**: User clicks "Sign in with Single Sign-On"
3. **Okta Authentication**: User is redirected to Okta login page
4. **Identity Verification**: Okta authenticates the user credentials
5. **SAML Assertion**: Okta sends SAML assertion to Taskade
6. **Taskade Access**: User is logged in to Taskade automatically

### Login Options

Users can authenticate via SAML in two ways:

1. **Direct SSO Login**
   - Visit `https://taskade.com/login`
   - Click "Sign in with Single Sign-On"
   - Enter your email domain

2. **Domain-Based Auto-Redirect**
   - If your domain is configured for SAML, users are automatically redirected to Okta

## User Provisioning and Management

### Just-in-Time Provisioning

Taskade supports automatic user creation through SAML:

- **First Login**: Users are automatically created in Taskade on first SAML login
- **Profile Sync**: User profile information is synced from Okta attributes
- **Role Assignment**: Default roles can be configured for new users

### User Lifecycle Management

- **Account Creation**: Automatic account creation on first login
- **Profile Updates**: User profile information synced on each login
- **Account Deactivation**: Users are deactivated when removed from Okta

## Advanced Configuration

### Custom SAML Attributes

You can configure additional SAML attributes for enhanced user management:

```xml
<saml:Attribute Name="department">
  <saml:AttributeValue>Engineering</saml:AttributeValue>
</saml:Attribute>
<saml:Attribute Name="jobTitle">
  <saml:AttributeValue>Software Engineer</saml:AttributeValue>
</saml:Attribute>
```

### Security Settings

#### SAML Security Options

- **Signed Assertions**: Require signed SAML assertions
- **Encrypted Assertions**: Enable encrypted SAML responses
- **Name ID Encryption**: Encrypt name identifier in SAML responses

#### Session Management

- **Session Timeout**: Configure automatic logout after inactivity
- **Force Re-authentication**: Require fresh authentication for sensitive operations
- **Single Logout**: Enable single logout across all applications

## Troubleshooting

### Common Issues and Solutions

#### Users Can't Sign In

**Symptoms:**
- Users receive "Invalid SAML response" error
- Users are redirected back to Okta login

**Solutions:**
- Verify SAML configuration URLs are correct
- Check certificate validity and format
- Ensure user is assigned to Taskade application in Okta
- Confirm email domains match between Okta and Taskade

#### Certificate Errors

**Symptoms:**
- "Invalid certificate" or "Certificate expired" errors

**Solutions:**
- Download new certificate from Okta
- Update certificate in Taskade settings
- Verify certificate format (should be X.509 PEM)

#### Attribute Mapping Issues

**Symptoms:**
- User profiles missing information
- Login succeeds but profile data is incomplete

**Solutions:**
- Verify attribute mappings in Okta SAML configuration
- Check attribute names match Taskade requirements
- Ensure user profile fields are populated in Okta

### Debugging SAML

#### Enable SAML Debug Logging

1. Contact Taskade support to enable debug logging
2. Attempt login to capture SAML request/response
3. Review logs for specific error details

#### SAML Validation Tools

Use online SAML validation tools to test your configuration:
- SAML Developer Tools
- SAML Tracer browser extensions
- Okta SAML Debugger

## Security Best Practices

### SAML Security Recommendations

1. **Use HTTPS**: Always use HTTPS for SAML communications
2. **Certificate Management**: Regularly rotate X.509 certificates
3. **Signed Responses**: Require signed SAML assertions and responses
4. **Encryption**: Enable SAML response encryption for sensitive data
5. **Access Policies**: Implement conditional access policies in Okta

### Compliance Considerations

- **GDPR**: Ensure proper data handling and user consent
- **SOX**: Maintain audit trails for user access
- **HIPAA**: Implement appropriate security controls for healthcare data
- **Industry Standards**: Follow SAML security best practices

## Integration with SCIM

### Enhanced User Management

For comprehensive user lifecycle management, combine SAML with SCIM:

- **Automatic Provisioning**: Users automatically created/deactivated
- **Group Sync**: Sync Okta groups to Taskade teams
- **Profile Updates**: Real-time profile synchronization
- **License Management**: Automatic license assignment/removal

See [SCIM via Okta](scim-okta.md) for detailed configuration instructions.

## Support and Resources

### Getting Help

If you encounter issues with SAML configuration:

1. **Check Documentation**: Review this guide and related articles
2. **Okta Resources**: Consult Okta's SAML documentation
3. **Taskade Support**: Contact Taskade enterprise support
4. **Community Forums**: Check community discussions for similar issues

### Related Documentation

- [SAML via Google Workspace](saml-google-workspace.md)
- [SAML via Azure AD](saml-azure-ad.md)
- [SCIM via Okta](scim-okta.md)
- [Enterprise Security Overview](../security.md)
- [User Management Best Practices](../account-management/user-management.md)

### Additional Resources

- **Okta SAML Documentation**: https://developer.okta.com/docs/concepts/saml/
- **SAML Technical Overview**: https://docs.oasis-open.org/security/saml/v2.0/
- **Taskade Enterprise Features**: https://taskade.com/enterprise

---

## Configuration Checklist

- [ ] Okta administrator access confirmed
- [ ] Taskade enterprise plan active
- [ ] Domain ownership verified
- [ ] Okta application created with SAML 2.0
- [ ] SAML URLs and certificate copied from Okta
- [ ] Taskade SAML settings configured
- [ ] Users/groups assigned in Okta
- [ ] SAML login tested successfully
- [ ] User provisioning verified
- [ ] Security settings reviewed and applied

**Last Updated**: {{ git_revision_date_localized }}
