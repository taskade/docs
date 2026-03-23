# SDK Quickstart

The official TypeScript SDK for the Taskade API. Build AI-powered apps with Projects, Agents, Automations, and Genesis.

## Install

```bash
npm install @taskade/sdk
```

## Setup

```typescript
import { Taskade } from '@taskade/sdk';

const taskade = new Taskade({
  apiKey: process.env.TASKADE_API_KEY,
});
```

Get your API key from [Settings > API](https://www.taskade.com/settings/api).

## Examples

### List Workspaces

```typescript
const { items: workspaces } = await taskade.workspaces.list();
console.log(workspaces);
```

### Create a Task

```typescript
await taskade.tasks.create('project-id', {
  tasks: [{ text: 'Follow up with client' }],
  placement: 'afterbegin',
});
```

### Get Project Tasks

```typescript
const { items: tasks } = await taskade.projects.listTasks('project-id');
for (const task of tasks) {
  console.log(`${task.completed ? '✓' : '○'} ${task.text}`);
}
```

### Manage Agents

```typescript
// Get agent details
const { item: agent } = await taskade.agents.get('agent-id');

// Add a project as knowledge source
await taskade.agents.addProjectKnowledge('agent-id', {
  projectId: 'project-id',
});
```

### Export a Genesis App

```typescript
// Export a complete Genesis app as a bundle
const bundle = await taskade.bundles.export('space-id');

// Import into another workspace
await taskade.bundles.import('workspace-id', {
  bundleData: bundle,
});
```

## Error Handling

```typescript
import { Taskade, TaskadeAPIError } from '@taskade/sdk';

try {
  await taskade.projects.get('invalid-id');
} catch (error) {
  if (error instanceof TaskadeAPIError) {
    console.log(error.status);     // 404
    console.log(error.statusText); // "Not Found"
  }
}
```

## Resources

| Resource | Description |
|----------|-------------|
| [Full API Reference](comprehensive-api-guide/) | Complete endpoint documentation |
| [GitHub: @taskade/sdk](https://github.com/taskade/sdk) | SDK source code |
| [Agent Cookbook](https://github.com/taskade/agent-cookbook) | Use cases and architecture patterns |
| [Community Apps](https://github.com/taskade/awesome-app-kits) | 120+ Genesis apps |
