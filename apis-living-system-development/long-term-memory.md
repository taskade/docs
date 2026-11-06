---
description: >-
  Taskade's Long-Term Memory architecture - memory that lives as real Projects you can browse, edit, and query via the API.
---

# Long-Term Memory

Taskade EVE's long-term memory **is a Project in your workspace**. It is not an opaque data object.

You can browse, edit, and version it in Taskade, and read or change it through the Public API.

This architecture keeps Taskade memory visible, editable, and reusable.

## Before you start

- To read memory with the API, a personal access token from [taskade.com/settings/api](https://www.taskade.com/settings/api). See [Authentication](developers/authentication.md).
- Edit access to the workspace that holds the memory project.
- `curl` in a terminal, or Node.js 18 or later for the TypeScript examples.

---

## Mental model: memory as projects

Most AI platforms store memory in a hidden vector database. You cannot see or directly correct the stored memory.

Taskade takes a different approach.

| Platform | Where memory lives | Can you read and edit it? |
| --- | --- | --- |
| Traditional AI platforms | A hidden memory store | No |
| Taskade | A Memory Project in your workspace | Yes: browse it, edit it, and query it with the API |

**Why this matters:**

- **Transparency** - you see exactly what Taskade EVE remembers.
- **Controllability** - edit or delete memory blocks like any project content.
- **Composability** - use memory as an input to automations, agents, or other apps.
- **Portability** - memory is part of your workspace, not locked in a separate system.

---

## How Taskade EVE uses memory

Taskade EVE is the meta-agent of the platform. You talk to it to build apps and orchestrate work.

- Memory **persists across sessions.** Taskade EVE retains work context after you close and reopen Taskade.
- Memory is **workspace-scoped.** Each workspace has its own Taskade EVE memory.
- Personal preferences are the one exception. Taskade EVE keeps them in a single note on your account, and that note applies in every workspace. Edit or clear it in **Settings** → **Account**, under **Taskade EVE memory**.
- Memory grows **automatically**. You do not tag entries by hand.
- Taskade EVE runs on the same Workspace DNA that it orchestrates for you: Memory (projects), Intelligence (agents), and Execution (automations).


---

## Agent memory and Taskade EVE memory

Taskade has two distinct memory systems. Both use the same architectural principle (memory-as-Projects). They serve different purposes.

| Dimension | Per-Agent Memory | Taskade EVE Workspace Memory |
| --- | --- | --- |
| **Scope** | Single agent | Whole workspace |
| **Persists across** | Conversations with that agent | All sessions and agents |
| **User-editable** | Limited | Full - it is a Project |
| **API addressable** | No API operation | Via project endpoints |
| **Model support** | Every model in the picker | Every model in the picker |
| **Typical use** | Personalized assistant behavior | Cross-session workspace context |

---

## Memory works on every model

Memory works across every available AI model.

- Persistent memory is **not limited to specific models**. Every AI agent supports memory on any model that you pick.
- The memory tool is on for every model that Taskade offers.
- A model change does not reset an agent's memory. For example, a change from TSK-Auto to a pinned model keeps the same memory.

---

## Inspect and edit memory

### Find the memory project

Taskade EVE marks each memory project with the **Memory** tag. Taskade EVE titles the project itself, so the name has no fixed prefix. Open a project that carries the **Memory** tag to review it.

### Edit memory by hand

Open the memory project like any other project. Then use these controls:

- **Remove entries** that you do not want Taskade EVE to remember.
- **Correct facts** that Taskade EVE got wrong.
- **Add context** for information that Taskade EVE did not infer.
- **Version** the memory (Taskade's version history applies).


{% hint style="info" %}
Taskade EVE reads the memory project at each interaction. Your edits take effect in the next conversation.
{% endhint %}


### Common cleanup patterns

- After a major project pivot, prune outdated assumptions.
- Before you share a workspace, review Taskade EVE memory for sensitive content.
- Periodically archive resolved context so memory stays focused on current work.

---

## API access

Because memory is a Project, the Public API can address it.

All calls use the [Action API v2](api-v2-reference.md) with a `Bearer` token.

### Find the memory project

`listProjects` returns the tag names of each project in `tags`. Select the projects whose `tags` include `Memory`. The `tags` list is empty when your account is not a member of the workspace. You can also open the memory project in Taskade and copy its id. Then save the token and the id in your terminal:

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

Give a specialist agent access to workspace context. Save the agent id first:

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
| `"code": "NOT_FOUND"` or `"code": "FORBIDDEN"` | The id is wrong, or your account cannot open that project or agent | Copy the id again from Taskade, and check your workspace access. |


{% hint style="info" %}
Memory projects use the same blocks, tasks, and metadata schema as other projects. Treat them as frequently read projects.
{% endhint %}


---

## Privacy and scoping

- **Workspace-scoped.** A memory project belongs to one workspace. Another workspace does not see it.
- **Account preferences follow you.** The preferences note on your account applies in every workspace, and only that note does.
- **Controlled by workspace members.** Anyone with edit access to the workspace can view and modify memory.
- **No external service.** Memory lives in Taskade's infrastructure, not a third-party vector store.


{% hint style="warning" %}
**A bundle export includes memory projects as ordinary projects.** A [bundle](bundles.md) export takes every project in the workspace that is not archived. It does not carry the **Memory** tag, so the imported copy is not Taskade EVE memory in the target workspace.

Review memory projects for sensitive content before you export a workspace. Your account preferences note is never part of a bundle.
{% endhint %}


---

## Best practices

- **Let Taskade EVE remember enough to be useful.** Do not wipe memory often. Context compounds.
- **Prune when context drifts.** After a major pivot, review and edit memory.
- **Use memory as input to automations.** Read memory with the API to personalize triggered automations.
- **Scope sensitive information.** If you collaborate with external parties, keep confidential context in a dedicated workspace.
- **Document memory assumptions in the project.** Taskade EVE reads the project, including explicit memory notes.

---

## Next steps

- [Action API guide](api-v2-reference.md): the v2 operations that these examples use.
- [SDK Cookbook](sdk-cookbook.md): more end-to-end examples.
- [Autonomous Agents](autonomous-agents.md): agents that run without a prompt.
- [AI Agents in Learn Taskade](https://www.taskade.com/learn/agents): the in-app agent guide.

---

_This page is also published at [taskade.com/docs/guides/long-term-memory](https://www.taskade.com/docs/guides/long-term-memory)._
