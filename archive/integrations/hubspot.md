# HubSpot Integration

Connect Taskade with HubSpot to streamline your CRM workflows, automate lead management, and enhance customer relationship processes with powerful marketing and sales automation.

{% hint style="success" %}
HubSpot integration enables seamless data flow between Taskade and your CRM, perfect for sales teams, marketing automation, and customer success workflows.
{% endhint %}

## Overview

The HubSpot integration provides two main capabilities:

1. **🤖 Agent Tool Integration** - AI agents can manage contacts, deals, and marketing campaigns
2. **⚙️ Automation Actions** - Automate CRM operations and data synchronization

## Agent Tool Integration

### Connect AI Agents to HubSpot

Enable your custom AI agents to interact with HubSpot for automated CRM management and sales processes.

{% hint style="info" %}
Agent tool integration allows AI agents to create contacts, update deals, send marketing emails, and manage customer relationships autonomously.
{% endhint %}

#### Setup Steps

{% stepper %}
{% step %}
### Access Agent Settings
Go to your custom agent and click **Settings** → **Tools**.
{% endstep %}

{% step %}
### Add HubSpot Tool
Click **+ Add Tool** and select **HubSpot**.
{% endstep %}

{% step %}
### Authorize Access
Sign in to your HubSpot account and grant the necessary permissions.
{% endstep %}

{% step %}
### Configure Permissions
Choose which HubSpot features the agent can access (CRM, Marketing, Sales).
{% endstep %}

{% step %}
### Test Connection
Ask your agent to create a test contact or deal to verify the connection.
{% endstep %}
{% endstepper %}

#### Agent Capabilities

Once connected, your agents can:

- **👥 Manage Contacts** - Create, update, and segment contacts automatically
- **💼 Handle Deals** - Create deals, update pipeline stages, track opportunities
- **📧 Send Marketing Emails** - Create and send automated email campaigns
- **📊 Generate Reports** - Pull CRM data and create performance reports
- **📞 Manage Communications** - Track interactions and follow-up activities

#### Example Agent Commands

```bash
"Create a new contact for John Doe from Acme Corp in the technology industry"
"Update the deal status for Project X to 'Closed Won' with amount $50,000"
"Send a follow-up email to all leads who haven't responded in 7 days"
"Generate a monthly sales pipeline report for Q4"
"Create a marketing email campaign for product launch"
```

## Automation Integration

### HubSpot Automation Actions

Use HubSpot actions in Taskade automations to create powerful CRM workflows.

#### Available Actions

| Action | Description | Use Case |
|--------|-------------|----------|
| **Create Contact** | Add new contact to HubSpot | Lead capture, customer onboarding |
| **Update Contact** | Modify existing contact information | Data enrichment, status updates |
| **Create Deal** | Add new deal to pipeline | Opportunity tracking, sales automation |
| **Update Deal** | Change deal properties | Pipeline progression, deal management |
| **Send Email** | Send marketing or transactional emails | Nurture campaigns, notifications |
| **Create Task** | Add task to contact/deal | Follow-up reminders, activity tracking |
| **Update Company** | Modify company records | Account management, data updates |

#### Available Triggers

| Trigger | Description | Use Case |
|---------|-------------|----------|
| **New Contact** | When contact is added | Lead qualification, welcome sequences |
| **Contact Updated** | When contact properties change | Status tracking, data validation |
| **New Deal** | When deal is created | Opportunity management, notifications |
| **Deal Stage Changed** | When deal moves in pipeline | Progress tracking, alerts |
| **Email Sent** | When marketing email is sent | Campaign monitoring, analytics |
| **Form Submitted** | When HubSpot form is filled | Lead capture, immediate response |

### Setup Automation Integration

{% stepper %}
{% step %}
### Create New Automation
Go to **Automations** and click **+ New Automation**.
{% endstep %}

{% step %}
### Add HubSpot Trigger/Action
Choose your trigger (Taskade event) and add HubSpot actions.
{% endstep %}

{% step %}
### Connect HubSpot Account
Authorize Taskade to access your HubSpot account.
{% endstep %}

{% step %}
### Configure Data Mapping
Map Taskade fields to HubSpot properties.
{% endstep %}

{% step %}
### Test Automation
Create a test contact or deal to ensure data flows correctly.
{% endstep %}
{% endstepper %}

## Common Use Cases

### Lead Qualification & Nurture

**Scenario:** Automatically qualify and nurture leads from form submissions.

```
Trigger: Form Submitted (Landing Page)
Action: Create Contact in HubSpot
Action: Apply Lead Score with AI
Action: Send Welcome Email Sequence
Action: Create Follow-up Task
Result: Automated lead qualification and nurturing
```

**Benefits:**
- ✅ Instant lead capture and qualification
- ✅ Consistent nurture sequences
- ✅ Improved lead-to-customer conversion

### Sales Pipeline Management

**Scenario:** Sync project progress with sales pipeline updates.

```
Trigger: Task Completed (Milestone Tasks)
Action: Update Deal Stage in HubSpot
Action: Send Progress Update Email
Action: Create Next Steps Task
Action: Update Deal Amount (if changed)
Result: Synchronized sales and project management
```

**Benefits:**
- ✅ Real-time pipeline visibility
- ✅ Automated deal progression
- ✅ Improved forecasting accuracy

### Customer Onboarding Automation

**Scenario:** Automate customer onboarding and relationship management.

```
Trigger: Deal Won (Closed)
Action: Update Contact Lifecycle Stage
Action: Send Onboarding Email Sequence
Action: Create Customer Success Tasks
Action: Set Up Renewal Reminders
Result: Smooth customer transition and retention
```

**Benefits:**
- ✅ Consistent onboarding experience
- ✅ Proactive customer success management
- ✅ Reduced churn through engagement

### Marketing Campaign Tracking

**Scenario:** Track and analyze marketing campaign performance.

```
Trigger: Campaign Email Sent
Action: Create Task for Follow-up
Action: Track Email Engagement
Action: Update Contact Scores
Action: Generate Campaign Reports
Result: Data-driven marketing optimization
```

**Benefits:**
- ✅ Automated performance tracking
- ✅ Real-time campaign insights
- ✅ Improved marketing ROI

## Data Mapping & Properties

### Contact Properties

Map Taskade data to HubSpot contact properties:

```json
{
  "email": "contact_email",
  "firstname": "contact_first_name",
  "lastname": "contact_last_name",
  "company": "contact_company",
  "phone": "contact_phone",
  "website": "contact_website",
  "lifecyclestage": "contact_lifecycle_stage",
  "leadstatus": "contact_lead_status"
}
```

### Deal Properties

Configure deal creation with essential properties:

```json
{
  "dealname": "Project Name - Company",
  "pipeline": "default",
  "dealstage": "qualified_to_buy",
  "amount": "50000",
  "closedate": "2024-03-15",
  "dealtype": "newbusiness",
  "dealowner": "sales_rep_id"
}
```

### Custom Properties

Create custom properties for specific business needs:

- **Taskade_Project_ID** - Link to Taskade projects
- **Last_Taskade_Update** - Track sync timestamps
- **Automation_Status** - Monitor automation health
- **Priority_Score** - Calculated priority values

## Advanced Integration Patterns

### Bidirectional Sync

Create two-way synchronization between Taskade and HubSpot:

```
HubSpot → Taskade:
New Deal → Create Project → Assign Team

Taskade → HubSpot:
Task Completed → Update Deal Stage → Send Notification
```

### Conditional Workflows

Implement business logic with conditional actions:

```
If Deal Amount > $100K → Assign to Senior Rep
Else If Deal Amount > $50K → Assign to Mid-level Rep
Else → Assign to Junior Rep
```

### Lifecycle Automation

Automate customer lifecycle management:

```
Lead → Marketing Qualified → Sales Qualified → Customer → Advocate
Each stage triggers: Email sequences, Task creation, Status updates
```

### Multi-Object Workflows

Handle complex relationships between objects:

```
New Contact → Create Company → Link Contact to Company → Create Deal → Assign Tasks
```

## Marketing Automation

### Email Campaign Integration

Automate email marketing workflows:

**Welcome Series:**
```
New Contact → Send Welcome Email 1 → Wait 3 days → Send Welcome Email 2 → Create Follow-up Task
```

**Re-engagement Campaigns:**
```
Inactive Contact → Send Re-engagement Email → Track Opens/Clicks → Update Engagement Score
```

### Lead Scoring Integration

Implement automated lead scoring:

```
Form Submission + Website Visit + Email Open → Calculate Lead Score → Move to MQL if Score > 50
```

## Sales Automation

### Pipeline Management

Automate sales pipeline progression:

```
Contact Created → Send Intro Email → Schedule Demo → Update Deal Stage → Send Proposal → Close Deal
```

### Follow-up Automation

Ensure consistent follow-up processes:

```
Demo Completed → Send Thank You Email → Create Follow-up Task → Send Proposal Reminder
```

### Forecasting Integration

Improve sales forecasting accuracy:

```
Deal Stage Changed → Update Forecast Model → Send Forecast Update → Adjust Quota if Needed
```

## Security & Compliance

### HubSpot Permissions

The integration requires these HubSpot permissions:

- **Contacts:** Read, Write - Manage contact records
- **Companies:** Read, Write - Handle company data
- **Deals:** Read, Write - Manage sales opportunities
- **Marketing:** Email - Send marketing communications
- **Automation:** Workflows - Create automated processes

### Data Privacy

- **GDPR Compliance:** Support for data deletion and portability
- **CCPA Compliance:** California Consumer Privacy Act support
- **Audit Logging:** Complete activity tracking and logging
- **Data Encryption:** End-to-end encryption for sensitive data

### Best Practices

- **Data Validation:** Ensure data accuracy before syncing
- **Duplicate Prevention:** Implement deduplication logic
- **Consent Management:** Respect marketing preferences
- **Regular Audits:** Review integration permissions and usage

## Troubleshooting

### Common Issues

**Authentication Errors:**
- ✅ Re-authorize HubSpot connection
- ✅ Check API key validity
- ✅ Verify account permissions

**Data Not Syncing:**
- ✅ Confirm property names match exactly
- ✅ Check data type compatibility
- ✅ Verify HubSpot limits and quotas

**Automation Not Triggering:**
- ✅ Ensure workflows are published
- ✅ Check trigger conditions
- ✅ Verify enrollment criteria

**Email Not Sending:**
- ✅ Confirm email authentication
- ✅ Check spam filters
- ✅ Verify sender reputation

### Performance Optimization

**Batch Operations:**
- Group multiple operations together
- Use scheduled syncs for large datasets
- Implement pagination for bulk operations

**Rate Limiting:**
- Respect HubSpot API limits (100 requests/10 seconds)
- Implement exponential backoff for retries
- Monitor API usage and quotas

**Data Optimization:**
- Sync only necessary properties
- Use webhooks for real-time updates
- Cache frequently accessed data

## Integration Limits & Quotas

### HubSpot API Limits

- **Marketing Professional:** 40,000 requests/day
- **Sales Professional:** 80,000 requests/day
- **Enterprise:** Custom limits available
- **Email Sending:** Based on plan (1,000-5,000/day)

### Taskade Integration Limits

- **Automation Runs:** 1000 runs/hour per workspace
- **Data Transfer:** 100 MB/hour per integration
- **Concurrent Operations:** 10 simultaneous operations

### Monitoring & Alerts

Set up monitoring for integration health:

- **Sync Success Rate:** Track data synchronization
- **Error Rates:** Alert on failed operations
- **Performance Metrics:** Monitor response times
- **Usage Analytics:** Track integration utilization

## Integration Examples

### Complete Sales Funnel

**Setup:** End-to-end sales process automation from lead to customer.

**Workflow:**
1. Website form submission → Create contact in HubSpot
2. Apply lead scoring → Route to sales rep
3. Send nurture emails → Schedule demo
4. Demo completed → Create deal in pipeline
5. Deal won → Send onboarding sequence
6. Customer created → Set up success plan

**Result:** Fully automated sales and customer success process.

### Marketing Campaign Management

**Setup:** Coordinate marketing campaigns with sales activities.

**Workflow:**
1. Campaign launched → Create campaign in HubSpot
2. Leads generated → Add to nurture workflow
3. Lead qualified → Notify sales team
4. Deal created → Associate with campaign
5. Revenue attributed → Update campaign ROI

**Result:** Integrated marketing and sales performance tracking.

### Customer Success Automation

**Setup:** Automate customer onboarding and retention activities.

**Workflow:**
1. New customer → Update lifecycle stage
2. Send onboarding emails → Create check-in tasks
3. Milestone reached → Send success survey
4. Feedback received → Create improvement tasks
5. Renewal approaching → Send proactive communication

**Result:** Proactive customer success management.

## Support & Resources

### Getting Help

- **Documentation:** Comprehensive integration guides
- **HubSpot Academy:** Official training resources
- **Community:** User forums and integration examples
- **Support:** Priority support for enterprise integrations

### Additional Resources

- **HubSpot API Documentation:** Official API reference
- **Taskade Integration Templates:** Pre-built automation examples
- **CRM Best Practices:** Guides for effective CRM automation
- **Video Tutorials:** Step-by-step setup guides

---

## Quick Start Guide

{% stepper %}
{% step %}
### Choose Integration Type
Decide between Agent Tool or Automation integration based on your needs.
{% endstep %}

{% step %}
### Set Up HubSpot Connection
Connect your HubSpot account and configure permissions.
{% endstep %}

{% step %}
### Select Objects & Properties
Choose which HubSpot objects (contacts, deals, companies) to work with.
{% endstep %}

{% step %}
### Configure Automation Rules
Set up triggers and actions for automated CRM processes.
{% endstep %}

{% step %}
### Test Data Flow
Create test records and verify data synchronization.
{% endstep %}

{% step %}
### Build Advanced Workflows
Add conditional logic and multi-step processes.
{% endstep %}

{% step %}
### Monitor & Optimize
Track performance and refine your CRM automation.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: Start with core CRM operations (contact and deal management) before expanding to marketing automation. Use HubSpot's property customization to align with your business processes, and leverage Taskade's AI capabilities for intelligent lead scoring and automated follow-ups. The combination creates a powerful, automated growth engine for your business.
