# Genesis API Documentation

The Genesis API provides programmatic access to Taskade's revolutionary no-code app generation system. Create complete React applications and project-based workflows using natural language prompts through our REST API and GraphQL endpoints.

## Overview

Genesis offers two primary creation modes through the API:

### 🏗️ **Project-Based Apps**
Traditional Genesis apps that create structured workspaces with projects, agents, and automations.

### ⚡ **Space Apps** 
Complete React web applications deployed to live URLs with real-time data integration.

## Authentication

All Genesis API endpoints require authentication using your Taskade API token:

```bash
curl -H "Authorization: Bearer YOUR_API_TOKEN" \
     -H "Content-Type: application/json" \
     https://api.taskade.com/v1/genesis/...
```

## Core Endpoints

### Create Space App

Generate a complete React web application from a natural language prompt.

```http
POST /v1/genesis/space-apps
```

#### Request Body

```json
{
  "space_id": "string",
  "app_id": "default",
  "prompt": "Create a customer feedback form with ratings and comments",
  "model_id": "openai/gpt-5",
  "options": {
    "style": "modern",
    "responsive": true,
    "theme": "light"
  }
}
```

#### Parameters

| Parameter | Type | Required | Description |
|-----------|------|----------|-------------|
| `space_id` | string | Yes | The workspace space ID where the app will be created |
| `app_id` | string | No | App identifier (defaults to "default") |
| `prompt` | string | Yes | Natural language description of the desired application |
| `model_id` | string | No | AI model to use ("openai/gpt-5" or "anthropic/sonnet-4") |
| `options` | object | No | Additional styling and configuration options |

#### Response

```json
{
  "spaceApp": {
    "id": "space_app_12345",
    "space_id": "space_67890",
    "app_id": "default",
    "preview_url": "https://app-67890.fly.dev",
    "status": "deployed",
    "created_at": "2024-01-15T10:30:00Z",
    "data": {
      "fileSystem": {
        "src/App.tsx": "// Generated React application code",
        "src/components/FeedbackForm.tsx": "// Component code",
        "package.json": "// Dependencies and config"
      }
    },
    "state": {
      "machine_id": "machine_abc123",
      "deployment_status": "deployed",
      "last_deployed_at": "2024-01-15T10:32:00Z"
    }
  }
}
```

### Get Space App

Retrieve details about an existing Space App.

```http
GET /v1/genesis/space-apps/{space_app_id}
```

#### Response

```json
{
  "spaceApp": {
    "id": "space_app_12345",
    "space_id": "space_67890",
    "app_id": "default",
    "preview_url": "https://app-67890.fly.dev",
    "status": "deployed",
    "commit_id": "commit_xyz789",
    "gateway_token": "gateway_token_secure",
    "created_at": "2024-01-15T10:30:00Z",
    "updated_at": "2024-01-15T10:35:00Z"
  }
}
```

### Update Space App

Modify an existing Space App using conversational updates.

```http
PUT /v1/genesis/space-apps/{space_app_id}
```

#### Request Body

```json
{
  "prompt": "Add a search bar at the top and make the buttons larger",
  "model_id": "openai/gpt-5"
}
```

#### Response

```json
{
  "spaceApp": {
    "id": "space_app_12345",
    "commit_id": "commit_new456",
    "status": "updating",
    "updated_at": "2024-01-15T11:00:00Z"
  }
}
```

### Deploy Space App

Deploy or redeploy a Space App to Fly.io infrastructure.

```http
POST /v1/genesis/space-apps/{space_app_id}/deploy
```

#### Response

```json
{
  "deployment": {
    "status": "deploying",
    "machine_id": "machine_new789",
    "preview_url": "https://app-67890.fly.dev",
    "started_at": "2024-01-15T11:05:00Z"
  }
}
```

### List Space Apps

Get all Space Apps for a specific workspace.

```http
GET /v1/spaces/{space_id}/apps
```

#### Response

```json
{
  "spaceApps": [
    {
      "id": "space_app_12345",
      "app_id": "default",
      "preview_url": "https://app-67890.fly.dev",
      "status": "deployed",
      "created_at": "2024-01-15T10:30:00Z"
    }
  ]
}
```

## GraphQL API

### Space App Creation

Create a Space App using GraphQL:

```graphql
mutation CreateSpaceApp($input: SpaceAppCreateInput!) {
  spaceAppCreate(input: $input) {
    spaceApp {
      id
      previewUrl
      status
      data {
        fileSystem
      }
      state {
        machineId
        deploymentStatus
      }
    }
  }
}
```

#### Variables

```json
{
  "input": {
    "spaceId": "space_67890",
    "appId": "default",
    "prompt": "Create a team directory with search and filtering",
    "modelId": "anthropic/sonnet-4"
  }
}
```

### Space App Query

Query Space App details:

```graphql
query GetSpaceApp($id: ID!) {
  spaceApp(id: $id) {
    id
    spaceId
    appId
    previewUrl
    status
    commitId
    createdAt
    updatedAt
    data {
      fileSystem
    }
    state {
      machineId
      deploymentStatus
      lastDeployedAt
    }
  }
}
```

### Space App Update

Update an existing Space App:

```graphql
mutation UpdateSpaceApp($id: ID!, $input: SpaceAppUpdateInput!) {
  spaceAppUpdate(id: $id, input: $input) {
    spaceApp {
      id
      commitId
      status
      updatedAt
    }
  }
}
```

## Model Selection

Genesis supports multiple AI models for different use cases:

### GPT-5 (`openai/gpt-5`)
- **Best For**: Complex logic, data processing, technical applications
- **Strengths**: Advanced reasoning, code generation, API integrations
- **Use Cases**: CRM systems, analytics dashboards, developer tools

### Claude-4 Sonnet (`anthropic/sonnet-4`)
- **Best For**: Creative designs, user experience, content-heavy applications
- **Strengths**: UI/UX design, content creation, user-friendly interfaces
- **Use Cases**: Marketing sites, portfolios, content management systems

## File System Access

Access and modify the generated React codebase:

### Get App Files

```http
GET /v1/genesis/space-apps/{space_app_id}/files
```

#### Response

```json
{
  "fileSystem": {
    "src/App.tsx": "import React from 'react';\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <h1>Customer Feedback</h1>\n      {/* Generated components */}\n    </div>\n  );\n}\n\nexport default App;",
    "src/components/FeedbackForm.tsx": "// Component implementation",
    "src/styles/globals.css": "/* Tailwind CSS styles */",
    "package.json": "{\n  \"name\": \"taskade-space-app\",\n  \"dependencies\": {\n    \"react\": \"^18.2.0\",\n    \"tailwindcss\": \"^3.3.0\"\n  }\n}"
  }
}
```

### Update App Files

```http
PUT /v1/genesis/space-apps/{space_app_id}/files
```

#### Request Body

```json
{
  "files": {
    "src/App.tsx": "// Updated React component code",
    "src/styles/custom.css": "/* Additional custom styles */"
  }
}
```

## Data Integration

### Connect to Taskade Projects

Space Apps can integrate with existing Taskade projects as data sources:

```javascript
// Generated app code automatically includes:
const projectData = useTaskadeProject('project_id');
const formSubmissions = useTaskadeProject('form_responses');

// Real-time updates
useEffect(() => {
  // App updates when project data changes
  console.log('Updated data:', projectData);
}, [projectData]);
```

### Project Integration API

```http
POST /v1/genesis/space-apps/{space_app_id}/integrations
```

#### Request Body

```json
{
  "type": "taskade_project",
  "project_id": "project_12345",
  "access_mode": "read_write",
  "sync_mode": "real_time"
}
```

## Deployment Configuration

### Fly.io Settings

Configure deployment settings for your Space App:

```http
PUT /v1/genesis/space-apps/{space_app_id}/deployment-config
```

#### Request Body

```json
{
  "region": "lax",
  "machine_config": {
    "cpu_count": 1,
    "memory_mb": 512
  },
  "environment": {
    "NODE_ENV": "production",
    "API_BASE_URL": "https://api.taskade.com"
  }
}
```

## Webhooks

Get notified when Space App events occur:

### Webhook Events

- `space_app.created` - New Space App created
- `space_app.deployed` - App successfully deployed  
- `space_app.updated` - App code or configuration updated
- `space_app.failed` - Deployment or generation failed

### Webhook Payload

```json
{
  "event": "space_app.deployed",
  "timestamp": "2024-01-15T11:10:00Z",
  "data": {
    "space_app": {
      "id": "space_app_12345",
      "space_id": "space_67890",
      "preview_url": "https://app-67890.fly.dev",
      "status": "deployed"
    }
  }
}
```

## Error Handling

### Common Error Codes

| Code | Description |
|------|-------------|
| `400` | Invalid prompt or parameters |
| `401` | Authentication required |
| `403` | Insufficient permissions |
| `404` | Space App not found |
| `429` | Rate limit exceeded |
| `500` | Generation or deployment failed |

### Error Response Format

```json
{
  "error": {
    "code": "invalid_prompt",
    "message": "The provided prompt is too vague. Please be more specific about the desired functionality.",
    "details": {
      "prompt": "make something cool",
      "suggestions": [
        "Specify what type of application you want to create",
        "Describe the target users and main features",
        "Include any specific styling preferences"
      ]
    }
  }
}
```

## Rate Limits

Genesis API endpoints have the following rate limits:

- **Space App Creation**: 10 requests per hour per workspace
- **Space App Updates**: 50 requests per hour per app
- **File Operations**: 100 requests per hour per app
- **General Queries**: 1000 requests per hour per token

## SDKs and Libraries

### JavaScript SDK

```bash
npm install @taskade/genesis-sdk
```

```javascript
import { GenesisClient } from '@taskade/genesis-sdk';

const client = new GenesisClient({
  apiToken: 'your_api_token'
});

// Create a Space App
const spaceApp = await client.createSpaceApp({
  spaceId: 'space_67890',
  prompt: 'Create a customer feedback form with ratings',
  modelId: 'openai/gpt-5'
});

console.log('App URL:', spaceApp.previewUrl);
```

### Python SDK

```bash
pip install taskade-genesis
```

```python
from taskade_genesis import GenesisClient

client = GenesisClient(api_token='your_api_token')

# Create a Space App
space_app = client.create_space_app(
    space_id='space_67890',
    prompt='Build a team directory with search functionality',
    model_id='anthropic/sonnet-4'
)

print(f"App URL: {space_app['preview_url']}")
```

## Best Practices

### Prompt Engineering

- **Be Specific**: Include detailed functionality requirements
- **Mention Users**: Describe who will use the application
- **Include Style**: Specify visual preferences and branding
- **Consider Data**: Mention what information should be displayed

### Performance Optimization

- **Model Selection**: Choose the right AI model for your use case
- **Iterative Updates**: Use conversational updates for refinements
- **File Management**: Only update files that actually need changes
- **Deployment Timing**: Batch updates before deploying

### Security Considerations

- **API Tokens**: Store tokens securely and rotate regularly
- **Permissions**: Use least-privilege access for Space Apps
- **Data Validation**: Validate all inputs from generated forms
- **HTTPS**: Always use secure connections for API calls

---

**🚀 Ready to integrate Genesis into your application?** Start with the Space App creation endpoint and explore the possibilities of AI-powered app generation.

*For more examples and tutorials, visit our [Genesis Examples Gallery](../../help-center/ai-features/genesis-examples.md).*
