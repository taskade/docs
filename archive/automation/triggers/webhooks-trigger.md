# Webhooks Trigger: Connect External Systems to Taskade

Receive real-time notifications from external applications and services, automatically triggering Taskade workflows and keeping your projects synchronized with the wider business ecosystem.

{% hint style="success" %}
Webhooks enable seamless integration between Taskade and external systems, allowing instant automation when events occur in other applications, creating a truly connected workflow ecosystem.
{% endhint %}

## Overview

The Webhooks trigger allows external applications and services to send real-time notifications to Taskade, automatically initiating automation workflows. This powerful feature enables bidirectional integration, ensuring that changes in external systems can immediately trigger actions within Taskade.

## Key Features

- **🔗 Real-Time Integration** - Instant notifications from external systems
- **📊 Flexible Data Handling** - Support for JSON, text, email, and URL parameters
- **🔒 Secure Authentication** - API key and signature verification
- **🎯 Custom Processing** - Extract and transform webhook data for automation
- **📈 Scalable Architecture** - Handle high-volume webhook traffic
- **🔍 Request Logging** - Complete audit trail of webhook activity
- **🛡️ Error Handling** - Robust processing with retry mechanisms
- **🎨 Workflow Integration** - Connect webhooks to any Taskade automation

## When to Use Webhooks Triggers

### Perfect Use Cases

| Scenario | Webhook Benefits | Example Applications |
|----------|------------------|----------------------|
| **E-commerce Integration** | Real-time order and inventory updates | Shopify, WooCommerce, BigCommerce notifications |
| **CRM Synchronization** | Customer and deal status changes | Salesforce, HubSpot, Pipedrive webhooks |
| **Development Workflow** | Code changes and deployment events | GitHub, GitLab, Jenkins webhooks |
| **Support Ticketing** | New tickets and status updates | Zendesk, Intercom, Freshdesk events |
| **Payment Processing** | Transaction and subscription events | Stripe, PayPal, Braintree webhooks |
| **IoT and Sensors** | Device status and alert notifications | Smart devices, monitoring systems |
| **Social Media Monitoring** | Brand mentions and engagement events | Twitter, Facebook, Instagram API webhooks |
| **Calendar Integration** | Meeting and event notifications | Google Calendar, Outlook webhooks |

### Common Applications

**E-commerce Order Processing:**
```
Webhook: New order from Shopify
Automation Flow:
├── Create order fulfillment task
├── Update inventory levels
├── Send order confirmation email
├── Generate shipping label
└── Notify accounting team
```

**GitHub Deployment Integration:**
```
Webhook: Code deployment successful
Automation Flow:
├── Update project status to deployed
├── Create testing checklist task
├── Send deployment notification to team
├── Update documentation links
└── Schedule post-deployment review
```

**Customer Support Ticketing:**
```
Webhook: New urgent support ticket
Automation Flow:
├── Create high-priority support task
├── Assign to on-call engineer
├── Send immediate notification
├── Generate incident response checklist
└── Update support dashboard
```

## Setup and Configuration

### Creating Webhook Triggers

{% stepper %}
{% step %}
### Access Automation Settings
Navigate to your workspace → Automations → Triggers tab.
{% endstep %}

{% step %}
### Add Webhook Trigger
Click "Add Trigger" → Select "Webhook".
{% endstep %}

{% step %}
### Configure Endpoint
Taskade generates a unique webhook URL for your trigger.
{% endstep %}

{% step %}
### Define Parameters
Set up expected parameters (text, JSON, email, URL) from webhook payload.
{% endstep %}

{% step %}
### Configure Authentication (Optional)
Set up API key verification or signature validation.
{% endstep %}

{% step %}
### Build Automation Workflow
Connect the webhook trigger to your desired automation actions.
{% endstep %}

{% step %}
### Test the Webhook
Send a test payload to verify the trigger and automation work correctly.
{% endstep %}
{% endstepper %}

### Webhook Configuration Options

| Setting | Options | Description |
|---------|---------|-------------|
| **Authentication** | None, API Key, Signature | Security verification for webhook requests |
| **Content Type** | JSON, Form Data, Raw Text | Expected format of webhook payload |
| **Parameter Mapping** | Custom field mapping | How webhook data maps to Taskade parameters |
| **Retry Policy** | Retry count, Delay | Handling of failed webhook processing |
| **Rate Limiting** | Requests per minute/hour | Protection against webhook spam |
| **Timeout** | 30 seconds, 1 minute, 5 minutes | Maximum processing time per webhook |

## Webhook URL and Security

### Endpoint Generation

**Unique Webhook URLs:**
```javascript
// Taskade generates secure, unique webhook URLs
webhook_url: "https://hooks.taskade.com/v1/webhooks/trigger/abc123def456"

// URL components:
- Base URL: https://hooks.taskade.com/v1/webhooks/trigger/
- Unique ID: abc123def456 (auto-generated)
- No sensitive information in URL
```

**Security Features:**
```javascript
// Built-in security measures
security: {
  "https_only": true, // HTTPS encryption required
  "rate_limiting": true, // Protection against abuse
  "request_logging": true, // Complete audit trail
  "ip_filtering": "optional", // Restrict by IP address
  "user_agent_validation": true, // Verify legitimate requests
  "timeout_protection": true // Prevent long-running requests
}
```

### Authentication Methods

**API Key Authentication:**
```javascript
// Include API key in request headers
headers: {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
}

// Or as query parameter
url: "https://hooks.taskade.com/v1/webhooks/trigger/abc123?api_key=YOUR_API_KEY"
```

**Signature Verification:**
```javascript
// HMAC signature for request verification
const signature = crypto
  .createHmac('sha256', webhookSecret)
  .update(JSON.stringify(payload))
  .digest('hex');

headers: {
  'X-Webhook-Signature': `sha256=${signature}`,
  'X-Webhook-Timestamp': Date.now()
}
```

## Parameter Configuration

### Parameter Types

**Supported Parameter Types:**
```javascript
// Available parameter types
parameters: [
  {
    name: "text_param",
    type: "text",
    description: "Simple text parameter",
    required: false,
    default_value: ""
  },
  {
    name: "json_param",
    type: "json",
    description: "Complex JSON object",
    schema: { type: "object" }
  },
  {
    name: "email_param",
    type: "email",
    description: "Email address",
    validation: "email_format"
  },
  {
    name: "url_param",
    type: "url",
    description: "Web URL",
    validation: "url_format"
  }
]
```

### Parameter Mapping

**Simple Parameter Access:**
```javascript
// Access parameters in automations using @ syntax
automation: {
  action: "create_task",
  parameters: {
    name: "@webhook.text_param",
    description: "@webhook.json_param.message",
    assignee: "@webhook.email_param"
  }
}
```

**Complex JSON Handling:**
```javascript
// Access nested JSON properties
webhook_payload: {
  user: {
    name: "John Doe",
    email: "john@example.com",
    department: "Engineering"
  },
  event: {
    type: "task_completed",
    timestamp: "2024-01-15T10:30:00Z",
    metadata: {
      project_id: "proj_123",
      task_id: "task_456"
    }
  }
}

// Access in automations:
"@webhook.user.name" // "John Doe"
"@webhook.event.type" // "task_completed"
"@webhook.event.metadata.project_id" // "proj_123"
```

## Common Integration Patterns

### E-commerce Platforms

**Shopify Order Webhook:**
```javascript
// Shopify order creation webhook
shopify_webhook: {
  topic: "orders/create",
  payload: {
    id: 123456789,
    email: "customer@example.com",
    total_price: "99.99",
    line_items: [
      {
        title: "Product Name",
        quantity: 1,
        price: "99.99"
      }
    ]
  }
}

// Taskade automation:
automation: {
  trigger: "webhook",
  actions: [
    {
      type: "create_task",
      name: "Process Order #@webhook.id",
      assignee: "fulfillment_team",
      description: "Order from @webhook.email - $@webhook.total_price"
    },
    {
      type: "update_inventory",
      products: "@webhook.line_items"
    },
    {
      type: "send_email",
      to: "@webhook.email",
      subject: "Order Confirmation #@webhook.id"
    }
  ]
}
```

### Development Tools

**GitHub Pull Request Webhook:**
```javascript
// GitHub PR webhook
github_webhook: {
  action: "opened",
  pull_request: {
    number: 123,
    title: "Add user authentication",
    user: {
      login: "developer_name"
    },
    base: {
      ref: "main"
    }
  },
  repository: {
    name: "my-project",
    full_name: "org/my-project"
  }
}

// Taskade automation:
automation: {
  trigger: "webhook",
  conditions: "@webhook.action == 'opened'",
  actions: [
    {
      type: "create_task",
      name: "Code Review: PR #@webhook.pull_request.number",
      assignee: "code_review_team",
      description: "@webhook.pull_request.title by @webhook.pull_request.user.login"
    },
    {
      type: "schedule_meeting",
      title: "PR Review #@webhook.pull_request.number",
      attendees: ["@webhook.pull_request.user.login", "reviewer"]
    }
  ]
}
```

### Customer Support Systems

**Zendesk Ticket Webhook:**
```javascript
// Zendesk new ticket webhook
zendesk_webhook: {
  ticket: {
    id: 12345,
    subject: "Login issues",
    description: "Cannot access account",
    priority: "urgent",
    requester: {
      name: "John Customer",
      email: "john@example.com"
    }
  }
}

// Taskade automation:
automation: {
  trigger: "webhook",
  actions: [
    {
      type: "create_task",
      name: "Support: @webhook.ticket.subject",
      assignee: "support_team",
      priority: "@webhook.ticket.priority",
      description: "@webhook.ticket.description"
    },
    {
      type: "send_slack_notification",
      channel: "#support",
      message: "New @webhook.ticket.priority ticket: @webhook.ticket.subject"
    },
    {
      type: "add_to_crm",
      contact: "@webhook.ticket.requester"
    }
  ]
}
```

## Advanced Configuration

### Custom Processing and Transformation

**Data Transformation:**
```javascript
// Transform webhook data before processing
transformations: [
  {
    input: "@webhook.raw_data",
    operation: "parse_json",
    output: "parsed_data"
  },
  {
    input: "@webhook.timestamp",
    operation: "format_date",
    format: "YYYY-MM-DD HH:mm:ss",
    output: "formatted_date"
  },
  {
    input: "@webhook.amount",
    operation: "convert_currency",
    from: "USD",
    to: "EUR",
    output: "amount_eur"
  }
]
```

**Conditional Processing:**
```javascript
// Process webhooks based on content
conditional_processing: {
  rules: [
    {
      condition: "@webhook.priority == 'urgent'",
      actions: ["notify_on_call", "create_incident", "escalate_immediately"]
    },
    {
      condition: "@webhook.type == 'order'",
      actions: ["create_fulfillment_task", "update_inventory", "send_confirmation"]
    },
    {
      condition: "@webhook.source == 'api'",
      actions: ["validate_api_key", "log_request", "process_async"]
    }
  ]
}
```

### Error Handling and Retry Logic

**Retry Configuration:**
```javascript
// Handle failed webhook processing
retry_config: {
  max_attempts: 3,
  backoff_strategy: "exponential",
  initial_delay: 1000, // milliseconds
  max_delay: 30000,
  jitter: true // Add randomness to prevent thundering herd
}
```

**Error Handling:**
```javascript
// Comprehensive error handling
error_handling: {
  on_failure: {
    log_error: true,
    send_notification: true,
    retry_logic: "configured_retry",
    fallback_action: "create_error_task"
  },
  on_timeout: {
    timeout_seconds: 30,
    action: "mark_as_failed",
    notification: "timeout_alert"
  },
  on_invalid_payload: {
    validation_rules: ["required_fields", "data_types"],
    action: "reject_with_error",
    log_details: true
  }
}
```

## Monitoring and Analytics

### Webhook Performance Metrics

**Execution Analytics:**
```javascript
// Track webhook performance
analytics: {
  total_requests: 15420,
  success_rate: "98.7%",
  average_response_time: "245ms",
  error_breakdown: {
    authentication_errors: 45,
    payload_errors: 23,
    timeout_errors: 12,
    server_errors: 8
  },
  peak_usage: {
    requests_per_minute: 45,
    peak_hour: "14:00 UTC"
  }
}
```

### Request Logging and Auditing

**Comprehensive Logging:**
```javascript
// Detailed webhook audit trail
audit_log: [
  {
    timestamp: "2024-01-15T10:30:15Z",
    webhook_id: "wh_abc123",
    source_ip: "192.168.1.100",
    user_agent: "Shopify/1.0",
    payload_size: 2048,
    processing_time: 150,
    status: "success",
    actions_triggered: 3
  }
]
```

## Security Best Practices

### Webhook Security

**Authentication and Verification:**
- Always use HTTPS for webhook endpoints
- Implement signature verification for critical webhooks
- Use API keys for additional authentication
- Validate payload structure and data types
- Implement rate limiting to prevent abuse

**Data Protection:**
- Encrypt sensitive data in transit and at rest
- Implement proper access controls for webhook data
- Regular security audits of webhook configurations
- Monitor for unusual activity patterns
- Implement data retention policies

### Compliance Considerations

**Enterprise Compliance:**
```javascript
// Compliance configurations
compliance: {
  gdpr: {
    data_minimization: true,
    consent_management: true,
    right_to_erasure: true
  },
  soc2: {
    audit_trails: true,
    access_controls: true,
    security_monitoring: true
  },
  hipaa: {
    data_encryption: true,
    access_logging: true,
    breach_notification: true
  }
}
```

## Troubleshooting

### Common Webhook Issues

**Authentication Failures:**
- ✅ Verify API keys are correct and not expired
- ✅ Check signature verification implementation
- ✅ Ensure proper headers are included in requests
- ✅ Confirm webhook endpoint URLs are correct

**Payload Processing Errors:**
- ✅ Validate JSON structure and required fields
- ✅ Check parameter mapping configurations
- ✅ Review data type conversions
- ✅ Test with sample payloads

**Performance Issues:**
- ✅ Monitor request rates and implement throttling
- ✅ Check for long-running automation actions
- ✅ Review error handling and retry logic
- ✅ Optimize webhook processing workflows

### Debugging Tools

**Webhook Testing:**
```javascript
// Test webhook with curl
curl -X POST https://hooks.taskade.com/v1/webhooks/trigger/abc123 \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{"test": "data", "timestamp": "'$(date +%s)'"}'
```

**Request Inspection:**
```javascript
// Inspect webhook requests in browser dev tools
1. Open Network tab in browser developer tools
2. Trigger webhook from external system
3. Inspect request headers, payload, and response
4. Check for authentication and content-type issues
```

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Set Up Webhook Trigger
Create a new webhook trigger in Taskade automations.
{% endstep %}

{% step %}
### Configure Parameters
Define expected data fields from your webhook source.
{% endstep %}

{% step %}
### Copy Webhook URL
Get the unique URL for your webhook trigger.
{% endstep %}

{% step %}
### Configure External Service
Set up the webhook in your external application.
{% endstep %}

{% step %}
### Test Integration
Send test data and verify automation execution.
{% endstep %}

{% step %}
### Monitor and Optimize
Track webhook performance and refine configurations.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: Webhooks are the connective tissue of modern automation, enabling real-time synchronization between systems. Start with simple integrations and gradually build more complex workflows. Always implement proper authentication and error handling to ensure reliable operation. The key is understanding the data structure of your webhook source and mapping it effectively to Taskade's automation capabilities.

Webhooks transform Taskade from an isolated productivity tool into a central hub that reacts instantly to events across your entire technology ecosystem, ensuring nothing falls through the cracks.

