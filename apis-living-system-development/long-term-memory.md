---
description: >-
  Taskade EVE stores long-term memory as a project in your workspace. You can open it, edit it, and read it with the API.
---

# Long-Term Memory

Taskade EVE keeps its long-term memory **in a Project in your workspace**. It is not a hidden data object.

You can open, edit, and version this project in Taskade. You can also read or change it with the Public API.

To read memory with the API now, go to [API access](#api-access).

## Before you start

- To read memory with the API, a personal access token from [taskade.com/settings/api](https://www.taskade.com/settings/api). See [Authentication](developers/authentication.md).
- Edit access to the workspace that holds the memory project.
- `curl` in a terminal, or Node.js 18 or later for the TypeScript examples.

---

## Mental model: memory as projects

Most AI platforms store memory in a hidden vector database. You cannot see or directly correct the stored memory.

Taskade stores memory in a different way.

| Platform | Where memory lives | Can you read and edit it? |
| --- | --- | --- |
| Traditional AI platforms | A hidden memory store | No |
| Taskade | A Memory Project in your workspace | Yes: browse it, edit it, and query it with the API |

**What you get:**

- **You can see it.** You see exactly what Taskade EVE remembers.
- **You can edit it.** You can edit or delete memory blocks like other project content.
- **You can reuse it.** You can use memory as an input to automations, agents, or other apps.
- **You can move it.** Memory is part of your workspace. It is not locked in a separate system.

---

## How Taskade EVE uses memory

Taskade EVE is the main agent in Taskade. You talk to it to build apps and to organize work.

- Memory **stays between sessions.** Taskade EVE keeps the work context after you close and open Taskade again.
- Memory **belongs to one workspace.** Each workspace has its own Taskade EVE memory.
- Personal preferences are the one exception. Taskade EVE keeps them in a single note on your account. This note applies in every workspace. You can edit or clear it in **Settings** → **Account**, under **Taskade EVE memory**.
- Memory grows **automatically**. You do not tag entries by hand.
- Taskade EVE uses the same Workspace DNA that it manages for you: Memory (projects), Intelligence (agents), and Execution (automations).


---

## Agent memory and Taskade EVE memory

Taskade has two separate memory systems. Both store memory as Projects. Each system has a different purpose.

| Dimension | Per-Agent Memory | Taskade EVE Workspace Memory |
| --- | --- | --- |
| **Scope** | Single agent | Whole workspace |
| **Kept across** | Conversations with that agent | All sessions and agents |
| **User can edit** | Limited | Full. It is a Project |
| **API access** | No API operation | With project endpoints |
| **Model support** | Every model in the picker | Every model in the picker |
| **Typical use** | Assistant behavior for one person | Workspace context between sessions |

---

## Memory works on every model

Memory works with every AI model that you can pick.

- Persistent memory is **not limited to specific models**. Every AI agent supports memory on any model that you pick.
- The memory tool is on for every model that Taskade offers.
- A model change does not reset the memory of an agent. For example, a change from TSK-Auto to a pinned model keeps the same memory.

---

## Inspect and edit memory

### Find the memory project

Taskade EVE marks each memory project with the **Memory** tag. Taskade EVE titles the project itself, so the name has no fixed prefix. To review the memory, open a project that has the **Memory** tag.

### Edit memory by hand

Open the memory project like any other project. Then use these controls:

- **Remove entries** that you do not want Taskade EVE to remember.
- **Correct facts** that Taskade EVE got wrong.
- **Add context** for information that Taskade EVE did not infer.
- **Version** the memory with the Taskade version history.


{% hint style="info" %}
Taskade EVE reads the memory project at each interaction. Your edits take effect in the next conversation.
{% endhint %}


### Common cleanup patterns

- After a large change in project direction, remove assumptions that are out of date.
- Before you share a workspace, review Taskade EVE memory for sensitive content.
- At regular intervals, archive old context that you do not need. Then memory stays on current work.

---

## API access

Memory is a Project, so you can read and change it with the Public API.

All calls use the [Action API v2](api-v2-reference.md) with a `Bearer` token.

### Find the memory project

`listProjects` returns the tag names of each project in `tags`. Select the projects whose `tags` include `Memory`. If your account is not a member of the workspace, the `tags` list is empty.

You can also open the memory project in Taskade and copy its id. Then save the token and the id in your terminal:

```bash
export TASKADE_TOKEN="tskdp_your_token_here"
export MEMORY_PROJECT_ID="id_copied_from_the_memory_project"
```

The TypeScript examples use the same two values:

```typescript
const headers = {
  Authorization: `Bearer ${process.env.TASKADE_TOKEN}`,
  "Content-Type": "application/json",
};

// Copied from the memory project in Taskade.
const MEMORY_PROJECT_ID = process.env.MEMORY_PROJECT_ID;
```

### Read memory contents

```bash
curl -s -X POST https://www.taskade.com/api/v2/listBlocks \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"projectId\": \"$MEMORY_PROJECT_ID\"}"
```

The response lists each block with its `id`, `text`, and `completed` state:

```json
{
  "ok": true,
  "items": [
    { "id": "Bk2mQ7xR4pL9sT1v", "text": "Prefers weekly summaries on Monday", "completed": false }
  ]
}
```

The same call in TypeScript:

```typescript
const res = await fetch("https://www.taskade.com/api/v2/listBlocks", {
  method: "POST",
  headers,
  body: JSON.stringify({ projectId: MEMORY_PROJECT_ID }),
});
const { items: blocks } = await res.json();
console.log("Taskade EVE remembers:", blocks);
```

### Attach memory as knowledge to another agent

This call gives a specialist agent access to the workspace context. First, save the agent id:

```bash
export AGENT_ID="your_agent_id"

curl -s -X POST https://www.taskade.com/api/v2/addKnowledgeProject \
  -H "Authorization: Bearer $TASKADE_TOKEN" \
  -H "Content-Type: application/json" \
  -d "{\"agentId\": \"$AGENT_ID\", \"projectId\": \"$MEMORY_PROJECT_ID\"}"
```

The response returns the updated agent as `{ "ok": true, "item": { "id", "name", "space_id", "data" } }`.

### Fix common errors

| What you see | Cause | Fix |
| --- | --- | --- |
| `"code": "UNAUTHORIZED"` | The token is missing, wrong, or revoked | Send `Authorization: Bearer $TASKADE_TOKEN`. Make sure that the variable is set in the same terminal. |
| `"code": "FST_ERR_VALIDATION"` | `projectId` or `agentId` is missing | Set `MEMORY_PROJECT_ID` and `AGENT_ID`, then send the request again. |
| `"code": "NOT_FOUND"` or `"code": "FORBIDDEN"` | The id is wrong, or your account cannot open that project or agent | Copy the id again from Taskade. Make sure that you have access to the workspace. |


{% hint style="info" %}
Memory projects use the same schema for blocks, tasks, and metadata as other projects. Treat them as projects that Taskade EVE reads often.
{% endhint %}


---

## Privacy and scoping

- **One workspace.** A memory project belongs to one workspace. Other workspaces cannot see it.
- **Account preferences go with you.** The preferences note on your account applies in every workspace. No other memory does.
- **Workspace members control it.** Anyone with edit access to the workspace can see and change memory.
- **No external service.** Taskade keeps memory on its own infrastructure, not in a third-party vector store.


{% hint style="warning" %}
**A bundle export includes memory projects as ordinary projects.** A [bundle](bundles.md) export takes every project in the workspace that is not archived. The export does not keep the **Memory** tag. Thus the imported copy is not Taskade EVE memory in the target workspace.

Review memory projects for sensitive content before you export a workspace. Your account preferences note is never part of a bundle.
{% endhint %}


---

## Best practices

- **Let Taskade EVE remember enough to be useful.** Do not clear memory often. Context becomes more useful over time.
- **Clean up old context.** After a large change in direction, review and edit memory.
- **Use memory as input to automations.** Read memory with the API to personalize the automations that run.
- **Keep sensitive information separate.** If you work with people outside your team, keep confidential context in a separate workspace.
- **Write memory assumptions in the project.** Taskade EVE reads the whole project, including memory notes that you write.

---

## Next steps

- [Action API guide](api-v2-reference.md): the v2 operations that these examples use.
- [SDK Cookbook](sdk-cookbook.md): more end-to-end examples.
- [Autonomous Agents](autonomous-agents.md): agents that run without a prompt.
- [AI Agents in Learn Taskade](https://www.taskade.com/learn/agents): the in-app agent guide.

---

_This page is also published at [taskade.com/docs/guides/long-term-memory](https://www.taskade.com/docs/guides/long-term-memory)._
