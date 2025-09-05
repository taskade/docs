# Advanced Automation Actions

**Master the latest automation capabilities including loop processing, WhatsApp Business integration, AI-powered schema generation, and advanced error handling. These powerful features transform complex workflows into simple, reliable automations.**

{% hint style="success" %}
**New in 2025!** Loop actions, WhatsApp Business messaging, HTTP schema auto-generation, and enhanced social media integrations make Taskade automations even more powerful.
{% endhint %}

---

## 🔁 Loop Actions & Batch Processing

### **What Are Loop Actions?**

Loop actions enable batch processing and nested automation workflows, allowing you to process multiple items, repeat actions, and create sophisticated multi-step processes.

### **Loop Types**

#### **1. For Each Loop**
Process each item in a list or array:

```json
{
  "type": "loop.forEach",
  "input": "{{webhook.customer_list}}",
  "actions": [
    {
      "type": "crm.updateContact",
      "contactId": "{{item.id}}",
      "properties": {
        "lastEngagement": "{{now}}",
        "status": "processed"
      }
    },
    {
      "type": "email.send",
      "to": "{{item.email}}",
      "template": "engagement_update",
      "variables": {
        "name": "{{item.name}}"
      }
    }
  ],
  "options": {
    "maxConcurrency": 5,
    "delayBetweenItems": "2s",
    "continueOnError": true
  }
}
```

#### **2. While Loop**
Repeat actions until a condition is met:

```json
{
  "type": "loop.while",
  "condition": "{{api_response.hasMore}} === true",
  "maxIterations": 50,
  "actions": [
    {
      "type": "http.get",
      "url": "https://api.example.com/data",
      "params": {
        "page": "{{loop.iteration}}",
        "limit": 100
      }
    },
    {
      "type": "data.append",
      "target": "collected_data",
      "value": "{{response.data}}"
    }
  ]
}
```

#### **3. Retry Loop**
Automatically retry failed operations with exponential backoff:

```json
{
  "type": "loop.retry",
  "maxRetries": 3,
  "retryDelay": "5s",
  "exponentialBackoff": true,
  "retryConditions": ["network_error", "rate_limit", "timeout"],
  "actions": [
    {
      "type": "http.post",
      "url": "https://api.external-service.com/webhook",
      "payload": "{{form.data}}"
    }
  ],
  "onFinalFailure": [
    {
      "type": "slack.notify",
      "channel": "#alerts",
      "message": "Failed to sync data after 3 attempts: {{error.message}}"
    }
  ]
}
```

### **Advanced Loop Features**

#### **Nested Loops**
```json
{
  "type": "loop.forEach",
  "input": "{{projects}}",
  "actions": [
    {
      "type": "loop.forEach",
      "input": "{{item.tasks}}",
      "actions": [
        {
          "type": "task.update",
          "taskId": "{{item.id}}",
          "status": "reviewed"
        }
      ]
    }
  ]
}
```

#### **Loop Control & Break Conditions**
```json
{
  "type": "loop.forEach",
  "input": "{{candidates}}",
  "breakWhen": "{{item.score}} >= 90",
  "actions": [
    {
      "type": "crm.scoreCandidate",
      "candidateId": "{{item.id}}"
    }
  ],
  "onBreak": [
    {
      "type": "email.notify",
      "message": "Found high-scoring candidate: {{item.name}}"
    }
  ]
}
```

---

## 💬 WhatsApp Business Integration

### **Setup & Authentication**

#### **WhatsApp Business API Configuration**
```json
{
  "whatsapp": {
    "provider": "whatsapp_business",
    "config": {
      "phoneNumberId": "your_phone_number_id",
      "accessToken": "your_whatsapp_access_token",
      "businessAccountId": "your_business_account_id"
    },
    "webhook": {
      "verifyToken": "your_verify_token",
      "callbackUrl": "https://your-domain.com/whatsapp/webhook"
    }
  }
}
```

### **Message Types & Templates**

#### **Text Messages**
```json
{
  "type": "whatsapp.sendMessage",
  "to": "{{form.phone_number}}",
  "messageType": "text",
  "content": {
    "text": "Hi {{form.name}}! Thanks for your inquiry about {{form.service}}. We'll get back to you within 24 hours."
  }
}
```

#### **Template Messages**
```json
{
  "type": "whatsapp.sendTemplate",
  "to": "{{contact.phone}}",
  "template": {
    "name": "appointment_reminder",
    "language": "en_US",
    "parameters": [
      {
        "type": "text",
        "text": "{{appointment.date}}"
      },
      {
        "type": "text", 
        "text": "{{appointment.time}}"
      }
    ]
  }
}
```

#### **Interactive Messages**
```json
{
  "type": "whatsapp.sendInteractive",
  "to": "{{customer.phone}}",
  "interactive": {
    "type": "button",
    "header": {
      "type": "text",
      "text": "Order Status Update"
    },
    "body": {
      "text": "Your order #{{order.id}} is ready for pickup!"
    },
    "action": {
      "buttons": [
        {
          "type": "reply",
          "reply": {
            "id": "confirm_pickup",
            "title": "Confirm Pickup"
          }
        },
        {
          "type": "reply",
          "reply": {
            "id": "request_delivery",
            "title": "Request Delivery"
          }
        }
      ]
    }
  }
}
```

#### **Media Messages**
```json
{
  "type": "whatsapp.sendMedia",
  "to": "{{recipient.phone}}",
  "media": {
    "type": "image",
    "url": "{{product.image_url}}",
    "caption": "Check out our new {{product.name}}! Available now for ${{product.price}}"
  }
}
```

### **Advanced WhatsApp Workflows**

#### **Customer Support Automation**
```json
{
  "name": "WhatsApp Support Flow",
  "trigger": {
    "type": "whatsapp.messageReceived"
  },
  "actions": [
    {
      "type": "ai.analyzeMessage",
      "input": "{{message.text}}",
      "analysis": ["intent", "urgency", "sentiment"]
    },
    {
      "type": "condition.switch",
      "value": "{{ai.intent}}",
      "cases": {
        "order_status": [
          {
            "type": "database.lookup",
            "table": "orders",
            "query": {
              "phone": "{{message.from}}"
            }
          },
          {
            "type": "whatsapp.sendMessage",
            "to": "{{message.from}}",
            "content": {
              "text": "Your order #{{order.id}} is {{order.status}}. Expected delivery: {{order.delivery_date}}"
            }
          }
        ],
        "complaint": [
          {
            "type": "whatsapp.sendMessage",
            "to": "{{message.from}}",
            "content": {
              "text": "I'm sorry to hear about your experience. Let me connect you with a manager who can help resolve this immediately."
            }
          },
          {
            "type": "slack.notify",
            "channel": "#customer-support",
            "message": "Urgent: WhatsApp complaint from {{message.from}}: {{message.text}}"
          }
        ]
      }
    }
  ]
}
```

#### **E-commerce Integration**
```json
{
  "name": "WhatsApp E-commerce Flow",
  "trigger": {
    "type": "ecommerce.orderPlaced"
  },
  "actions": [
    {
      "type": "whatsapp.sendTemplate",
      "to": "{{order.customer.phone}}",
      "template": {
        "name": "order_confirmation",
        "parameters": [
          "{{order.id}}",
          "{{order.total}}",
          "{{order.estimated_delivery}}"
        ]
      }
    },
    {
      "type": "delay.wait",
      "duration": "1 day"
    },
    {
      "type": "whatsapp.sendMessage",
      "to": "{{order.customer.phone}}",
      "content": {
        "text": "Your order is being prepared! Track your delivery here: {{order.tracking_url}}"
      }
    }
  ]
}
```

---

## 🔧 HTTP Schema Generator

### **Auto-Generate API Schemas**

The HTTP Schema Generator automatically creates data schemas from API responses, making integration setup faster and more reliable.

#### **Automatic Schema Detection**
```json
{
  "type": "http.schemaGenerator",
  "endpoint": "https://api.example.com/users",
  "method": "GET",
  "sampleSize": 10,
  "generateSchema": {
    "format": "json-schema",
    "includeExamples": true,
    "inferTypes": true,
    "detectPatterns": true
  }
}
```

#### **Generated Schema Output**
```json
{
  "schema": {
    "type": "object",
    "properties": {
      "id": {
        "type": "integer",
        "example": 12345
      },
      "name": {
        "type": "string",
        "pattern": "^[A-Za-z\\s]+$",
        "example": "John Doe"
      },
      "email": {
        "type": "string",
        "format": "email",
        "example": "john@example.com"
      },
      "created_at": {
        "type": "string",
        "format": "date-time",
        "example": "2024-01-15T10:30:00Z"
      }
    }
  },
  "validationRules": [
    {
      "field": "email",
      "rule": "required",
      "message": "Email is required"
    }
  ]
}
```

### **Schema-Driven Validations**
```json
{
  "type": "http.post",
  "url": "https://api.external.com/webhook",
  "payload": "{{form.data}}",
  "schema": "{{generated.schema}}",
  "validation": {
    "enabled": true,
    "strictMode": false,
    "onValidationError": [
      {
        "type": "log.error",
        "message": "Schema validation failed: {{validation.errors}}"
      },
      {
        "type": "email.notify",
        "to": "admin@company.com",
        "subject": "API Integration Error"
      }
    ]
  }
}
```

---

## 📱 Enhanced Social Media Integrations

### **Advanced Twitter/X Integration**

#### **Smart Content Publishing**
```json
{
  "type": "twitter.publishThread",
  "content": [
    {
      "text": "🧵 Thread about {{topic}} (1/{{thread.length}})",
      "media": ["{{image.url}}"]
    },
    {
      "text": "{{ai.generated_content.part1}}",
      "hashtags": ["{{ai.relevant_hashtags}}"]
    },
    {
      "text": "{{ai.generated_content.part2}}",
      "mentions": ["{{ai.relevant_mentions}}"]
    }
  ],
  "scheduling": {
    "publishAt": "{{ai.optimal_time}}",
    "timezone": "{{user.timezone}}"
  }
}
```

#### **Engagement Automation**
```json
{
  "type": "twitter.engagementFlow",
  "triggers": ["mention", "reply", "dm"],
  "actions": [
    {
      "type": "ai.analyzeEngagement",
      "input": "{{tweet.text}}",
      "sentiment": true,
      "intent": true
    },
    {
      "type": "condition.if",
      "condition": "{{ai.sentiment}} > 0.7",
      "then": [
        {
          "type": "twitter.like",
          "tweetId": "{{tweet.id}}"
        },
        {
          "type": "twitter.reply",
          "tweetId": "{{tweet.id}}",
          "text": "{{ai.generate_positive_response}}"
        }
      ]
    }
  ]
}
```

### **LinkedIn Business Automation**

#### **Professional Content Distribution**
```json
{
  "type": "linkedin.publishPost",
  "content": {
    "text": "{{ai.professional_content}}",
    "media": [
      {
        "type": "image",
        "url": "{{generated.infographic}}",
        "alt": "{{ai.alt_text}}"
      }
    ]
  },
  "targeting": {
    "audience": "professional_network",
    "industries": ["{{user.industry}}"],
    "includeHashtags": true
  },
  "engagement": {
    "trackMetrics": true,
    "autoRespond": true,
    "escalateThreshold": 10
  }
}
```

### **Facebook Pages Integration**

#### **Multi-Format Content Publishing**
```json
{
  "type": "facebook.publishContent",
  "pageId": "{{facebook.page_id}}",
  "content": {
    "type": "carousel",
    "items": [
      {
        "image": "{{product.image1}}",
        "headline": "{{product.name}}",
        "description": "{{ai.product_description}}",
        "callToAction": "Shop Now",
        "link": "{{product.url}}"
      }
    ]
  },
  "scheduling": {
    "publishTime": "{{ai.optimal_posting_time}}",
    "crossPost": ["instagram", "twitter"]
  }
}
```

---

## 🚨 Advanced Error Handling

### **Smart Error Recovery**

#### **Automatic Retry Strategies**
```json
{
  "errorHandling": {
    "retryPolicy": {
      "maxRetries": 3,
      "retryDelay": "exponential",
      "retryConditions": [
        "network_timeout",
        "rate_limit_exceeded",
        "temporary_server_error"
      ]
    },
    "fallbackActions": [
      {
        "type": "queue.add",
        "queue": "failed_requests",
        "data": "{{original.payload}}"
      },
      {
        "type": "slack.notify",
        "channel": "#system-alerts",
        "message": "Automation failed after retries: {{error.message}}"
      }
    ]
  }
}
```

#### **Context-Aware Error Classification**
```json
{
  "type": "error.classifier",
  "error": "{{caught.error}}",
  "categories": {
    "transient": {
      "patterns": ["timeout", "rate.limit", "503", "502"],
      "action": "retry_with_backoff"
    },
    "authentication": {
      "patterns": ["401", "403", "invalid.token"],
      "action": "refresh_credentials"
    },
    "permanent": {
      "patterns": ["400", "404", "invalid.request"],
      "action": "log_and_alert"
    }
  }
}
```

### **Comprehensive Error Monitoring**

#### **Error Analytics Dashboard**
```json
{
  "errorAnalytics": {
    "tracking": {
      "errorRate": "percentage of failed executions",
      "commonFailures": "most frequent error types",
      "recoveryTime": "average time to successful retry",
      "impactAnalysis": "affected workflows and users"
    },
    "alerts": [
      {
        "condition": "error_rate > 5%",
        "action": "immediate_alert",
        "channels": ["slack", "email", "sms"]
      },
      {
        "condition": "critical_workflow_failure",
        "action": "escalation_protocol",
        "notify": ["team_lead", "system_admin"]
      }
    ]
  }
}
```

---

## 🤖 AI Agent Integration Enhancements

### **Agent Search & Discovery**

#### **Dynamic Agent Selection**
```json
{
  "type": "agent.smartSelect",
  "criteria": {
    "task": "{{automation.current_task}}",
    "domain": "{{workspace.industry}}",
    "complexity": "{{task.complexity_score}}"
  },
  "selection": "best_match",
  "fallback": "general_purpose_agent"
}
```

#### **Agent Collaboration Workflows**
```json
{
  "type": "agent.collaboration",
  "agents": [
    {
      "role": "analyst",
      "task": "analyze_data",
      "input": "{{form.responses}}"
    },
    {
      "role": "writer",
      "task": "create_summary",
      "input": "{{analyst.insights}}"
    },
    {
      "role": "reviewer",
      "task": "quality_check",
      "input": "{{writer.summary}}"
    }
  ],
  "coordination": "sequential",
  "quality_gates": true
}
```

### **Conversation Export & Analysis**

#### **Automated Conversation Processing**
```json
{
  "type": "agent.exportConversation",
  "conversationId": "{{trigger.conversation_id}}",
  "format": "markdown",
  "processing": [
    {
      "type": "ai.extractInsights",
      "focus": ["key_decisions", "action_items", "unresolved_questions"]
    },
    {
      "type": "document.create",
      "title": "Conversation Summary - {{conversation.date}}",
      "content": "{{processed.markdown}}",
      "project": "meeting_notes"
    }
  ]
}
```

---

## 📈 Performance Optimization

### **Batch Processing Optimization**

#### **Intelligent Batching**
```json
{
  "batchOptimization": {
    "dynamicBatching": {
      "enabled": true,
      "minBatchSize": 10,
      "maxBatchSize": 100,
      "timeWindow": "5m",
      "optimization": "throughput" // or "latency"
    },
    "loadBalancing": {
      "strategy": "round_robin",
      "healthCheck": true,
      "failover": "automatic"
    }
  }
}
```

### **Resource Management**

#### **Memory & Processing Limits**
```json
{
  "resourceLimits": {
    "memory": {
      "max": "512MB",
      "alertThreshold": "80%"
    },
    "processingTime": {
      "max": "300s",
      "timeout": "hard"
    },
    "concurrency": {
      "max": 10,
      "queue": "redis"
    }
  }
}
```

---

## 🔮 Future Automation Features

### **Coming Soon**

#### **AI-Powered Automation Builder**
- Natural language automation creation
- Smart workflow suggestions based on usage patterns  
- Automatic optimization recommendations
- Predictive failure detection

#### **Advanced Integration Hub**
- One-click setup for popular service combinations
- Custom connector builder
- Real-time integration health monitoring
- Marketplace for community-built integrations

---

**🚀 Ready to leverage these advanced automation capabilities?** Start with loop actions to handle batch processing, then explore WhatsApp Business integration to reach customers where they are.

*For more automation examples and tutorials, check out our [Automation Recipes](./recipes.md) and [Integration Guide](./integrations.md).*
