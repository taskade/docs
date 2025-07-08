# Project Views Explained

Taskade stores information in a flexible tree-structured database.  The **same data** can be visualised in multiple ways to suit different workflows.  These presentation modes are called **Project Views**.

| View | Best For | Key Interactions |
|------|----------|------------------|
| **List** | Linear task lists, meeting agendas | Drag-to-indent / reorder, checkboxes |
| **Board** | Kanban workflows, pipelines | Drag cards between columns |
| **Table** | Spreadsheet-style databases | Inline edit custom fields, sort & filter |
| **Calendar** | Scheduling & deadlines | Drag tasks on calendar, date pickers |
| **Mind Map** | Brain-storming & hierarchical planning | Radial drag to create branches |
| **Org Chart** | Organisational hierarchies | Expand / collapse levels |
| **Action Sheet** | Mobile-friendly task capture | Quick-add, swipe to complete |
| **Gantt** | Timeline & dependency tracking | Resize bars to adjust durations |

All views are backed by the **same underlying data** – update a task in one view and it instantly updates everywhere, thanks to Taskade’s real-time engine.

> 💡 Tip: Use the `/view` slash-command or the View switcher in the top-right corner of any project to toggle between visualisations.

### API Considerations

The REST and GraphQL APIs expose **data only**; view choice is a client-side concern.  Use the `view` query parameter in certain list endpoints (or the `X-Taskade-View` header) to request server-optimised payloads for large Gantt or Calendar renders.

--- 