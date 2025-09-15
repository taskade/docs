# Workspaces

Workspaces are the foundational containers that organize your teams, projects, and resources in Taskade. Each workspace creates an isolated collaborative environment with dedicated members, customizable settings, and granular permission controls.

## 🏢 What is a Workspace?

**Your Digital Headquarters**

- **Centralized Hub**: Single location for all team collaboration and project management
- **Isolated Environment**: Secure, private space with dedicated members and content
- **Customizable Identity**: Personalize with unique colors, icons, and branding
- **Scalable Structure**: Grows from personal use to enterprise-level organization

**Key Benefits**

- **Organized Collaboration**: Keep different teams and projects clearly separated
- **Secure Access Control**: Manage who can see and edit what content
- **Unified Communication**: Centralized chat, video calls, and notifications
- **Seamless Integration**: AI agents, automations, and templates shared across workspace

## 🚀 Creating a Workspace

### Step-by-Step Setup

1. **Access Creation Menu**

   - Click the workspace dropdown in the left sidebar
   - Select "Create New Workspace" from the options

2. **Configure Workspace Details**

   - **Name**: Choose a clear, descriptive workspace name
   - **Description**: Add purpose and scope information
   - **Color & Icon**: Select visual identity for easy recognition
   - **Privacy Settings**: Choose between private or public folders

3. **Initial Team Setup**

   - Add founding members via email addresses
   - Set initial roles and permissions
   - Create welcome message for new members

4. **Workspace Structure**
   - Plan folder organization for different teams/projects
   - Set up initial project templates
   - Configure workspace-wide settings

### Workspace Types

| Type           | Use Case                 | Suggested Member Count | Features                               |
| -------------- | ------------------------ | ---------------------- | -------------------------------------- |
| **Personal**   | Individual productivity  | 1                      | Basic features, unlimited projects     |
| **Team**       | Small team collaboration | 10                     | Full collaboration, basic automations  |
| **Business**   | Department/company use   | 100                    | Advanced features, priority support    |
| **Enterprise** | Large organization       | Unlimited              | Custom integrations, advanced security |

## 📁 Team Folders (Teams)

**Organizational Structure**

- **Department Teams**: Marketing, Sales, Engineering, HR
- **Project Teams**: Product launches, campaigns, initiatives
- **Client Teams**: Dedicated spaces for client collaboration
- **Resource Teams**: Templates, assets, knowledge bases

### Folder Management

**Creating Team Folders**

- Select "Create New Team"
- Name and configure folder settings
- Set initial permissions and members

**Folder Features**

- **Bulk Operations**: Move, copy, or delete multiple projects at once
- **Shared Resources**: Templates and assets available to folder members
- **Activity Tracking**: Monitor folder-level activity and changes

### Folder Permissions

| Role        | View | Edit | Share | Manage |
| ----------- | ---- | ---- | ----- | ------ |
| **Viewer**  | ✅   | ❌   | ❌    | ❌     |
| **Checker** | ✅   | ✅   | ✅    | ❌     |
| **Editor**  | ✅   | ✅   | ✅    | ❌     |
| **Admin**   | ✅   | ✅   | ✅    | ✅     |
| **Owner**   | ✅   | ✅   | ✅    | ✅     |

## 👥 Member Management

### Inviting Members

**Email Invitations**

- Send personalized invitations with role assignments
- Include welcome message and getting started resources
- Track invitation status and follow up on pending invites

**Invitation Links**

- Generate shareable links for easy team onboarding
- Configure default roles for link-based joins

### Member Roles & Permissions

**Owner**

- Full workspace control and management
- Can transfer ownership to other members
- Access to billing and subscription settings
- Delete workspace and all contents

**Admin**

- Manage members and permissions
- Create and configure folders/teams
- Access workspace settings (except billing)
- Moderate content and communications

**Member**

- Create and edit projects within assigned folders
- Participate in all collaboration features
- Use AI agents and automations
- Limited administrative capabilities

**Checker**

- Only able to check off tasks
- Use AI agents and automations
- Limited administrative capabilities
- Ideal for client management

**Viewer**

- Read-only access to assigned content
- Can comment and participate in discussions
- Cannot create or edit projects
- Ideal for stakeholders and clients

### Advanced Member Management

**Workspace Limits**

- Free: Up to 1 member
- Pro: Up to 3 members
- Team and Enterprise: Up to Unlimited members

**Guest Access**

- Temporary access for external collaborators
- Limited to specific projects or folders
- No access to workspace-wide resources

## 🧭 Navigation & Organization

### Workspace Switching

- **Sidebar Dropdown**: Quick access to all your workspaces
- **Keyboard Shortcuts**: Rapid switching between frequently used workspaces
- **Recent Workspaces**: Quick access to recently visited spaces

### Search & Discovery

- **Global Search**: Find content across all workspace projects
- **Scoped Search**: Search within specific folders or teams
- **Filter Options**: Search by content type, author, date, or tags

### Activity & Notifications

- **Activity Feed**: Real-time updates on workspace changes
- **Notification Settings**: Customize alerts for different event types
- **Digest Emails**: Weekly summaries of workspace activity
- **Mobile Notifications**: Stay updated on-the-go

## 🔒 Security & Privacy

### Workspace Privacy Settings

**Private Folders** (Recommended)

- Invitation-only access
- Content hidden from search engines
- Member list not publicly visible
- Full control over who can join

**Public Folders**

- Discoverable by other Workspace users
- Open invitation links
- Suitable for open-source projects

### Advanced Security Features

**Two-Factor Authentication**

- Require 2FA for all workspace members
- Enhanced security for sensitive projects
- Integration with authenticator apps

**Audit Logs** (Enterprise)

- Complete activity tracking
- Member action logs
- Compliance reporting
- Data export capabilities

## ⚙️ Workspace Customization

### Visual Identity

- **Custom Colors**: Choose brand colors for workspace theming
- **Icon Selection**: Pick from hundreds of icons or upload custom
- **Logo Upload**: Add company or team logos
- **Theme Settings**: Light/dark mode preferences

### Workspace Settings

- **Default Language**: Set primary language for the workspace
- **Time Zone**: Configure default time zone for scheduling
- **Date Format**: Customize date display preferences
- **Notification Defaults**: Set workspace-wide notification preferences

### Integration Configuration

- **Connected Apps**: Manage third-party integrations
- **Webhook Settings**: Set up external system notifications

---

## 🔒 **Enterprise Security & Compliance**

### **Single Sign-On (SSO) Integration**

Taskade supports enterprise-grade authentication through multiple identity providers:

| **Provider**           | **Protocol** | **Features**                          | **Best For**               |
| ---------------------- | ------------ | ------------------------------------- | -------------------------- |
| **Google Workspace**   | SAML 2.0     | Directory sync, MFA support           | Google-first organizations |
| **Microsoft Azure AD** | SAML 2.0     | Conditional access, device compliance | Microsoft 365 environments |
| **Okta**               | SAML 2.0     | Advanced identity management          | Multi-app enterprises      |
| **Generic SAML**       | SAML 2.0     | Custom identity providers             | Specialized security needs |

### **SSO Setup Process**

**1. Identity Provider Configuration**

- Configure SAML application in your IdP
- Set ACS URL: `https://www.taskade.com/auth/saml/callback`
- Configure attribute mapping for email and name
- Download IdP certificate and metadata

**2. Taskade Configuration**

- Navigate to Workspace Settings → Security
- Upload IdP certificate and configure metadata
- Test SSO connection with test user
- Enable for all workspace members

**3. User Provisioning**

- **Automatic**: Users created on first SSO login
- **Manual**: Pre-create users with email matching
- **SCIM**: Automated user lifecycle management (Enterprise)

### **SCIM User Provisioning**

Automate user lifecycle management with SCIM 2.0 support:

| **Capability**        | **Description**                     | **Business Benefit**                   |
| --------------------- | ----------------------------------- | -------------------------------------- |
| **Auto-Provisioning** | Create users automatically from IdP | Instant workspace access for new hires |
| **De-provisioning**   | Remove access when users leave      | Immediate security compliance          |
| **Profile Sync**      | Keep user information updated       | Accurate directory information         |
| **Group Management**  | Sync team memberships               | Consistent access across systems       |

### **Advanced Access Controls**

| **Feature**            | **Description**                       | **Use Case**                         |
| ---------------------- | ------------------------------------- | ------------------------------------ |
| **Device Management**  | Control access by device type/status  | BYOD security compliance             |
| **Session Management** | Configure session timeouts and limits | Enhanced security for sensitive data |
| **MFA Enforcement**    | Require multi-factor authentication   | Additional security layer            |

### **Audit & Compliance**

| **Audit Type**             | **Information Tracked**                               | **Retention**         |
| -------------------------- | ----------------------------------------------------- | --------------------- |
| **User Activity**          | Login/logout, project access, data changes            | 1 year (configurable) |
| **Administrative Actions** | Permission changes, user management, settings         | 3 years (compliance)  |
| **Security Events**        | Failed logins, suspicious activity, policy violations | 5 years (security)    |

### **Data Protection & Privacy**

**Encryption Standards**

- **In Transit**: TLS 1.3 for all communications
- **At Rest**: AES-256 encryption for stored data
- **Key Management**: Hardware security modules (HSMs)
- **Certificate Management**: Automated renewal and rotation

**Privacy Controls**

- **Data Residency**: Choose data storage regions
- **Data Retention**: Configurable retention policies
- **Right to Deletion**: GDPR-compliant data removal
- **Data Portability**: Complete data export capabilities

**Compliance Certifications**

- **SOC 2 Type II**: Security and availability controls
- **GDPR**: European data protection compliance
- **CCPA**: California privacy rights compliance

## 🎯 Best Practices

### Organization Strategy

- **Clear Naming**: Use descriptive, consistent naming conventions
- **Logical Structure**: Organize folders by function, not just projects
- **Regular Cleanup**: Archive completed projects and remove inactive members
- **Documentation**: Maintain workspace guidelines and onboarding docs

### Security Best Practices

- **Regular Audits**: Review member permissions quarterly
- **Principle of Least Privilege**: Grant minimum necessary access
- **Guest Management**: Regularly review and expire guest access
- **Backup Strategy**: Regular exports of critical workspace data

### Collaboration Optimization

- **Onboarding Process**: Standardized welcome and training for new members
- **Communication Guidelines**: Establish norms for chat, comments, and meetings
- **Template Library**: Maintain shared templates for common project types
- **Feedback Loops**: Regular retrospectives and improvement sessions

## 📱 Mobile Workspace Management

### Mobile Features

- **Full Workspace Access**: Complete workspace functionality on mobile
- **Push Notifications**: Real-time alerts for important workspace activity
- **Quick Actions**: Rapid project creation and task management

### Mobile-Specific Tools

- **Voice Commands**: Create tasks and projects using voice input
- **Photo Integration**: Capture and share photos directly to projects

---

**Related Features:**

- [Collaboration](collaboration.md) - Team communication and coordination
- [AI Agents](ai-features/ai-agents-getting-started.md) - Workspace-wide AI assistance
- [Project Views](project-views-mastery.md) - Organizing and visualizing work
- [Mobile Optimization](mobile-optimization.md) - Mobile workspace management
