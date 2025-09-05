# AI Forms API Reference

**Create and manage intelligent forms programmatically with Taskade's AI Forms API. Build dynamic data collection experiences with smart validation, AI-powered analysis, and seamless workflow integration.**

{% hint style="info" %}
**API Status**: The AI Forms API is currently in development. This documentation provides a preview of the upcoming capabilities. For immediate form creation, use the [Genesis approach](../../features/ai-forms.md).
{% endhint %}

---

## 📋 Overview

The AI Forms API enables programmatic creation and management of intelligent forms with:

- **Dynamic Field Generation**: AI-powered form structure based on use case
- **Smart Validation**: Context-aware field validation and error handling
- **Real-time Analysis**: Automatic response processing and insights
- **Workflow Integration**: Seamless automation and data routing

---

## 🔧 Authentication

All AI Forms API endpoints require authentication using your Taskade API token:

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.taskade.com/v1/forms/...
```

---

## 🎯 Core Endpoints

### Create AI Form

Generate an intelligent form from a natural language description.

```http
POST /v1/forms/create
```

#### Request Body
```json
{
  "workspace_id": "workspace_123",
  "form_config": {
    "title": "Customer Feedback Form",
    "description": "Collect customer satisfaction and improvement suggestions",
    "ai_prompt": "Create a form to gather customer feedback with star ratings, specific comments, and improvement suggestions. Include fields for contact information if they want follow-up.",
    "options": {
      "enable_ai_analysis": true,
      "auto_categorize": true,
      "response_insights": true,
      "mobile_optimized": true
    }
  }
}
```

#### Response
```json
{
  "success": true,
  "form": {
    "id": "form_abc123",
    "title": "Customer Feedback Form",
    "public_url": "https://forms.taskade.com/form_abc123",
    "embed_code": "<iframe src='...'></iframe>",
    "fields": [
      {
        "id": "rating_overall",
        "type": "star_rating",
        "label": "Overall Satisfaction",
        "required": true,
        "ai_config": {
          "sentiment_analysis": true,
          "threshold_alerts": {
            "low_rating": 3
          }
        }
      },
      {
        "id": "feedback_text",
        "type": "textarea",
        "label": "What could we improve?",
        "ai_config": {
          "categorization": true,
          "keyword_extraction": true,
          "priority_scoring": true
        }
      }
    ],
    "created_at": "2024-01-15T10:30:00Z"
  }
}
```

### Get Form Details

Retrieve information about an existing form.

```http
GET /v1/forms/{form_id}
```

#### Response
```json
{
  "success": true,
  "form": {
    "id": "form_abc123",
    "title": "Customer Feedback Form",
    "status": "active",
    "response_count": 127,
    "analytics": {
      "average_rating": 4.2,
      "completion_rate": 0.89,
      "top_categories": ["ui_design", "performance", "feature_request"]
    }
  }
}
```

### Update Form Configuration

Modify form settings and AI configuration.

```http
PUT /v1/forms/{form_id}
```

#### Request Body
```json
{
  "ai_config": {
    "sentiment_analysis": true,
    "auto_categorization": {
      "enabled": true,
      "custom_categories": ["bug_report", "feature_request", "praise", "complaint"]
    },
    "priority_scoring": {
      "enabled": true,
      "urgent_keywords": ["broken", "error", "bug", "crash"]
    }
  }
}
```

---

## 📊 Response Management

### Get Form Responses

Retrieve responses with AI analysis and categorization.

```http
GET /v1/forms/{form_id}/responses
```

#### Query Parameters
- `limit`: Number of responses to return (default: 50)
- `offset`: Pagination offset
- `category`: Filter by AI-generated category
- `sentiment`: Filter by sentiment analysis result
- `priority`: Filter by priority score

#### Response
```json
{
  "success": true,
  "responses": [
    {
      "id": "response_xyz789",
      "submitted_at": "2024-01-15T14:22:00Z",
      "data": {
        "rating_overall": 5,
        "feedback_text": "Love the new interface! Much easier to use."
      },
      "ai_analysis": {
        "sentiment": "positive",
        "confidence": 0.94,
        "categories": ["ui_design", "usability"],
        "keywords": ["interface", "easier", "use"],
        "priority_score": 0.2
      }
    }
  ],
  "pagination": {
    "total": 127,
    "page": 1,
    "limit": 50,
    "has_more": true
  }
}
```

### Export Responses

Export form responses with AI insights in various formats.

```http
POST /v1/forms/{form_id}/export
```

#### Request Body
```json
{
  "format": "csv", // csv, json, xlsx
  "include_ai_analysis": true,
  "date_range": {
    "start": "2024-01-01",
    "end": "2024-01-31"
  },
  "filters": {
    "sentiment": ["positive", "negative"],
    "min_priority": 0.7
  }
}
```

---

## 🤖 AI Configuration

### Smart Validation Rules

Configure AI-powered field validation.

```json
{
  "validation_config": {
    "email_field": {
      "type": "email",
      "ai_validation": {
        "disposable_email_detection": true,
        "corporate_email_preference": true,
        "typo_correction_suggestions": true
      }
    },
    "phone_field": {
      "type": "phone",
      "ai_validation": {
        "format_standardization": true,
        "region_detection": true,
        "business_hours_preference": true
      }
    }
  }
}
```

### Response Analysis Configuration

Set up automated analysis for form responses.

```json
{
  "analysis_config": {
    "sentiment_analysis": {
      "enabled": true,
      "languages": ["en", "es", "fr"],
      "custom_sentiment_rules": {
        "industry_specific_terms": ["bug", "feature", "improvement"]
      }
    },
    "categorization": {
      "enabled": true,
      "method": "ai_clustering", // or "keyword_matching"
      "custom_categories": [
        "product_feedback",
        "technical_issue",
        "feature_request",
        "billing_question"
      ]
    },
    "priority_scoring": {
      "enabled": true,
      "factors": [
        "sentiment_score",
        "urgency_keywords",
        "customer_tier",
        "response_length"
      ]
    }
  }
}
```

---

## 🔗 Workflow Integration

### Automation Triggers

Connect forms to automation workflows.

```json
{
  "automation_config": {
    "triggers": [
      {
        "condition": "priority_score > 0.8",
        "actions": [
          {
            "type": "slack_notification",
            "channel": "#urgent-feedback",
            "message": "High priority feedback received: {{response.feedback_text}}"
          },
          {
            "type": "create_task",
            "project": "customer_issues",
            "title": "Urgent: {{response.subject}}",
            "assignee": "customer_success_lead"
          }
        ]
      },
      {
        "condition": "sentiment === 'negative'",
        "actions": [
          {
            "type": "email_notification",
            "template": "negative_feedback_followup",
            "recipient": "{{response.email}}"
          }
        ]
      }
    ]
  }
}
```

---

## 📈 Analytics & Insights

### Form Performance Metrics

Get detailed analytics about form performance.

```http
GET /v1/forms/{form_id}/analytics
```

#### Response
```json
{
  "success": true,
  "analytics": {
    "performance": {
      "total_responses": 1250,
      "completion_rate": 0.87,
      "average_completion_time": 145, // seconds
      "bounce_rate": 0.13
    },
    "sentiment_analysis": {
      "positive": 0.65,
      "neutral": 0.23,
      "negative": 0.12
    },
    "top_categories": [
      {
        "name": "feature_request",
        "count": 345,
        "percentage": 0.28
      },
      {
        "name": "ui_feedback",
        "count": 278,
        "percentage": 0.22
      }
    ],
    "priority_distribution": {
      "high": 89,
      "medium": 456,
      "low": 705
    }
  }
}
```

---

## 🎨 Customization Options

### Form Styling

Customize form appearance and branding.

```json
{
  "styling": {
    "theme": "modern", // modern, classic, minimal
    "colors": {
      "primary": "#007bff",
      "background": "#ffffff",
      "text": "#333333"
    },
    "typography": {
      "font_family": "Inter, sans-serif",
      "heading_size": "large",
      "body_size": "medium"
    },
    "layout": {
      "max_width": "600px",
      "field_spacing": "comfortable",
      "button_style": "rounded"
    }
  }
}
```

---

## 🔒 Security & Compliance

### Data Protection

AI Forms API includes comprehensive security features:

- **Encryption**: All data encrypted in transit and at rest
- **GDPR Compliance**: Built-in data subject rights management
- **Access Controls**: Role-based permissions and audit logging
- **Data Retention**: Configurable retention policies

### Privacy Configuration

```json
{
  "privacy_config": {
    "data_retention_days": 365,
    "anonymize_after_days": 90,
    "gdpr_compliant": true,
    "consent_tracking": true,
    "pii_detection": {
      "enabled": true,
      "auto_mask": true,
      "notification": true
    }
  }
}
```

---

## 🚨 Error Handling

### Common Error Codes

| Code | Description | Resolution |
|------|-------------|------------|
| `400` | Invalid form configuration | Check required fields and data types |
| `401` | Authentication required | Verify API token is valid |
| `403` | Insufficient permissions | Check workspace access rights |
| `404` | Form not found | Verify form ID exists |
| `429` | Rate limit exceeded | Implement exponential backoff |
| `500` | AI processing error | Retry request or contact support |

### Error Response Format

```json
{
  "success": false,
  "error": {
    "code": "invalid_form_config",
    "message": "Form configuration is missing required fields",
    "details": {
      "missing_fields": ["title", "workspace_id"],
      "suggestions": [
        "Include a descriptive form title",
        "Specify valid workspace_id"
      ]
    }
  }
}
```

---

## 🔄 Migration & Updates

### Upgrading Existing Forms

Convert traditional forms to AI-powered forms:

```http
POST /v1/forms/{form_id}/upgrade-to-ai
```

#### Request Body
```json
{
  "ai_features": [
    "sentiment_analysis",
    "auto_categorization",
    "priority_scoring",
    "smart_validation"
  ],
  "preserve_responses": true,
  "maintain_url": true
}
```

---

## 📚 SDKs & Libraries

### JavaScript SDK

```bash
npm install @taskade/forms-sdk
```

```javascript
import { TaskadeFormsAPI } from '@taskade/forms-sdk';

const client = new TaskadeFormsAPI({
  apiKey: 'your_api_key'
});

// Create a new AI form
const form = await client.forms.create({
  workspace_id: 'workspace_123',
  ai_prompt: 'Create a customer satisfaction survey with ratings and feedback',
  options: {
    enable_ai_analysis: true,
    mobile_optimized: true
  }
});

console.log('Form created:', form.public_url);
```

---

## 🎯 Use Case Examples

### Customer Feedback System
```javascript
const feedbackForm = await client.forms.create({
  ai_prompt: `Create a customer feedback form that:
    - Captures star ratings for different aspects
    - Asks for improvement suggestions
    - Detects urgent issues automatically
    - Routes complaints to support team`,
  automation: {
    low_rating_alert: true,
    priority_routing: true
  }
});
```

### Lead Qualification Form
```javascript
const leadForm = await client.forms.create({
  ai_prompt: `Build a lead qualification form that:
    - Scores leads based on responses
    - Identifies high-value prospects
    - Integrates with CRM systems
    - Sends follow-up emails automatically`,
  ai_config: {
    lead_scoring: true,
    qualification_rules: 'enterprise_focused'
  }
});
```

---

**🚀 Ready to build intelligent forms programmatically?** The AI Forms API transforms data collection into intelligent user experiences that learn and adapt.

*For implementation examples and best practices, see our [AI Forms Guide](../../features/ai-forms.md) and [Automation Integration](../../automation/advanced-actions.md) documentation.*
