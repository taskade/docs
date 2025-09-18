# Ask Agent With Structured Output Automation Action

Extract specific, structured information from AI agent responses to power data-driven automations and ensure consistent, parseable outputs for downstream processing.

{% hint style="success" %}
The Ask Agent With Structured Output action enables reliable data extraction from AI responses, ensuring structured outputs that integrate seamlessly with other automation actions like adding tasks, updating spreadsheets, or creating database records.
{% endhint %}

## Overview

The Ask Agent With Structured Output automation action sends prompts to AI agents and receives responses in predefined, structured formats. This ensures that AI-generated content can be reliably parsed and used by subsequent automation steps, eliminating the variability of natural language responses.

## Key Features

- **📋 Structured Data Extraction** - Consistent, parseable output formats
- **🔗 Seamless Integration** - Outputs feed directly into other automation actions
- **🎯 Schema Validation** - Ensures output matches expected structure
- **📊 Multiple Output Types** - Support for various data structures
- **🔄 Error Handling** - Robust handling of parsing failures
- **📈 Performance Optimized** - Efficient processing for high-volume automations
- **🎨 Custom Schemas** - Flexible output format definitions

## Output Schema Types

### JSON Schema

**Structured Data Objects:**
```json
{
  "type": "object",
  "properties": {
    "summary": {
      "type": "string",
      "description": "Brief summary of the content"
    },
    "sentiment": {
      "type": "string",
      "enum": ["positive", "negative", "neutral"],
      "description": "Overall sentiment analysis"
    },
    "priority": {
      "type": "string",
      "enum": ["low", "medium", "high", "urgent"],
      "description": "Content priority level"
    },
    "categories": {
      "type": "array",
      "items": {"type": "string"},
      "description": "Relevant category tags"
    }
  },
  "required": ["summary", "sentiment", "priority"]
}
```

### Array/List Schema

**Structured Collections:**
```json
{
  "type": "array",
  "items": {
    "type": "object",
    "properties": {
      "task_name": {"type": "string"},
      "assignee": {"type": "string"},
      "due_date": {"type": "string"},
      "priority": {"type": "string"}
    }
  },
  "minItems": 1,
  "maxItems": 10
}
```

### Simple Value Schema

**Single Value Extraction:**
```json
{
  "type": "string",
  "enum": ["bug", "feature", "improvement", "question"],
  "description": "Request type classification"
}
```

## Setup and Configuration

### Basic Structured Output

{% stepper %}
{% step %}
### Add Action to Automation
In your automation flow, click **+ Add Action** and select **Ask Agent With Structured Output**.
{% endstep %}

{% step %}
### Select AI Agent
Choose which agent will process the request.
{% endstep %}

{% step %}
### Define Output Schema
Specify the expected output structure using JSON schema.
{% endstep %}

{% step %}
### Craft Input Prompt
Write a clear prompt that guides the agent toward the desired output.
{% endstep %}

{% step %}
### Configure Error Handling
Set up fallback behavior for parsing failures.
{% endstep %}
{% endstepper %}

### Advanced Configuration

| Setting | Description | Use Case |
|---------|-------------|----------|
| **Agent Selection** | Which AI agent to use | Specialized processing agents |
| **Output Schema** | JSON schema defining output structure | Data validation and consistency |
| **Prompt Template** | Input prompt with variables | Dynamic request generation |
| **Temperature** | Response creativity level | Consistent vs. varied outputs |
| **Max Tokens** | Response length limit | Cost and performance control |
| **Validation Rules** | Additional output constraints | Business rule enforcement |

## Common Use Cases

### Content Analysis and Categorization

**Article Processing:**
```
Trigger: New article submitted
Action: Ask Agent With Structured Output
Schema: {
  "title": "string",
  "summary": "string",
  "topics": ["string"],
  "sentiment": "enum",
  "readability_score": "number"
}
Result: Structured article metadata for content management system
```

**Email Classification:**
```
Trigger: New email received
Action: Ask Agent With Structured Output
Schema: {
  "category": "enum",
  "priority": "enum",
  "sentiment": "enum",
  "action_required": "boolean",
  "suggested_response": "string"
}
Result: Intelligent email triage and routing
```

### Task and Project Analysis

**Task Breakdown:**
```
Trigger: Complex task added
Action: Ask Agent With Structured Output
Schema: {
  "subtasks": [
    {
      "name": "string",
      "description": "string",
      "estimated_hours": "number",
      "assignee": "string"
    }
  ],
  "total_estimate": "number",
  "risk_level": "enum"
}
Result: Automatic task decomposition and assignment
```

**Meeting Summarization:**
```
Trigger: Meeting recording uploaded
Action: Ask Agent With Structured Output
Schema: {
  "summary": "string",
  "key_decisions": ["string"],
  "action_items": [
    {
      "task": "string",
      "owner": "string",
      "deadline": "string"
    }
  ],
  "follow_up_date": "string"
}
Result: Structured meeting outcomes and task creation
```

### Data Extraction and Processing

**Document Analysis:**
```
Trigger: Document uploaded
Action: Ask Agent With Structured Output
Schema: {
  "document_type": "enum",
  "key_information": {
    "parties_involved": ["string"],
    "important_dates": ["string"],
    "financial_amounts": ["number"],
    "risk_factors": ["string"]
  },
  "summary": "string",
  "action_required": "boolean"
}
Result: Automated document processing and data extraction
```

**Customer Feedback Analysis:**
```
Trigger: Customer feedback received
Action: Ask Agent With Structured Output
Schema: {
  "overall_sentiment": "enum",
  "key_themes": ["string"],
  "specific_suggestions": ["string"],
  "priority_level": "enum",
  "escalation_required": "boolean"
}
Result: Structured feedback analysis for product improvement
```

## Advanced Schema Patterns

### Conditional Schemas

**Dynamic Output Structures:**
```json
{
  "type": "object",
  "properties": {
    "request_type": {
      "type": "string",
      "enum": ["bug", "feature", "question"]
    },
    "bug_details": {
      "type": "object",
      "properties": {
        "severity": {"type": "string"},
        "steps_to_reproduce": {"type": "string"}
      },
      "required": ["severity"]
    },
    "feature_details": {
      "type": "object",
      "properties": {
        "user_benefit": {"type": "string"},
        "implementation_complexity": {"type": "string"}
      }
    }
  },
  "required": ["request_type"],
  "dependencies": {
    "request_type": {
      "oneOf": [
        {"required": ["bug_details"]},
        {"required": ["feature_details"]}
      ]
    }
  }
}
```

### Nested and Complex Structures

**Hierarchical Data:**
```json
{
  "type": "object",
  "properties": {
    "project_overview": {
      "type": "object",
      "properties": {
        "name": {"type": "string"},
        "description": {"type": "string"},
        "budget": {"type": "number"},
        "timeline_weeks": {"type": "integer"}
      }
    },
    "team_structure": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "role": {"type": "string"},
          "count": {"type": "integer"},
          "responsibilities": {"type": "array", "items": {"type": "string"}}
        }
      }
    },
    "milestones": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "name": {"type": "string"},
          "week": {"type": "integer"},
          "deliverables": {"type": "array", "items": {"type": "string"}}
        }
      }
    }
  }
}
```

## Integration Examples

### Database Population

**CRM Data Entry:**
```
Agent Output → Insert Row (Google Sheets)
├── Structured customer data → CRM spreadsheet
├── Contact information → Customer database
├── Interaction history → Activity log
└── Follow-up tasks → Task management system

Result: Automated CRM data population from unstructured inputs
```

### Task Management Automation

**Project Planning:**
```
Agent Output → Add Task (Bulk)
├── Task breakdown → Individual task creation
├── Dependencies → Task linking
├── Assignments → Team member allocation
└── Deadlines → Due date setting

Result: Automated project planning from high-level requirements
```

### Content Management

**Article Processing:**
```
Agent Output → Update Custom Fields
├── Article metadata → Content management system
├── SEO optimization → Search ranking fields
├── Category assignment → Content organization
└── Publishing workflow → Editorial process

Result: Structured content management from raw articles
```

---

## Best Practices

### Schema Design

**Effective Schema Creation:**
- **Clear Field Definitions** - Detailed descriptions for each field
- **Appropriate Data Types** - Match field types to intended use
- **Validation Rules** - Include constraints and requirements
- **Scalable Structures** - Design for future expansion
- **Error Prevention** - Anticipate edge cases and failures

### Prompt Engineering

**Optimized Prompts:**
- **Clear Instructions** - Explicit guidance on output format
- **Examples Provided** - Sample outputs in prompts
- **Context Included** - Relevant background information
- **Constraints Specified** - Limits and requirements clearly stated
- **Error Handling** - Instructions for edge cases

### Performance Optimization

**Efficient Processing:**
- **Schema Complexity** - Balance detail with processing speed
- **Batch Processing** - Group similar requests together
- **Caching** - Reuse common schema validations
- **Async Processing** - Handle complex requests asynchronously
- **Rate Limiting** - Respect API limits and costs

## Troubleshooting

### Common Structured Output Issues

**Schema Validation Errors:**
- ✅ Verify JSON schema syntax and structure
- ✅ Check field type compatibility
- ✅ Validate enum values and constraints
- ✅ Test schema with sample data

**Parsing Failures:**
- ✅ Review agent prompt clarity and specificity
- ✅ Check for ambiguous or conflicting instructions
- ✅ Verify agent has access to required context
- ✅ Test with simpler schemas first

**Integration Issues:**
- ✅ Ensure output variables are properly referenced
- ✅ Check data type compatibility between actions
- ✅ Verify field mappings in downstream actions
- ✅ Test complete automation flow end-to-end

### Monitoring and Analytics

**Output Quality Metrics:**
```json
{
  "structured_output_metrics": {
    "total_requests": 2547,
    "success_rate": "96.8%",
    "average_processing_time": "3.2 seconds",
    "schema_validation_errors": 23,
    "most_common_schemas": ["task_breakdown", "content_analysis", "data_extraction"],
    "cost_per_request": "$0.023"
  }
}
```

---

## Quick Implementation Guide

{% stepper %}
{% step %}
### Define Output Requirements
Determine what structured data you need from AI responses.
{% endstep %}

{% step %}
### Design JSON Schema
Create a clear schema defining your output structure.
{% endstep %}

{% step %}
### Craft Effective Prompts
Write prompts that guide agents toward your desired output.
{% endstep %}

{% step %}
### Configure Automation Action
Set up the Ask Agent With Structured Output action.
{% endstep %}

{% step %}
### Test and Validate
Verify outputs match your schema and integrate properly.
{% endstep %}

{% step %}
### Monitor and Refine
Track performance and improve schemas over time.
{% endstep %}
{% endstepper %}

> **💡 ProTip**: Structured output is the bridge between AI creativity and automation reliability. Use it whenever you need consistent, parseable data from AI responses. Start with simple schemas and gradually increase complexity as you become comfortable with the format. The key is finding the right balance between output flexibility and structural consistency for your automation needs.
