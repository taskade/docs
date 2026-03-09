# Taskade for Teams

---

## Table of Contents

- [Overview](#overview)
- [Key Terminology](#key-terminology)
- [Workspace Organization Methods](#workspace-organization-methods)
  - [Method 1: Workspace per Department](#method-1-workspace-per-department)
  - [Method 2: One Workspace, Folders per Department](#method-2-one-workspace-folders-per-department)
  - [Method 3: One Workspace, Folders per Function](#method-3-one-workspace-folders-per-function)
- [Permission System](#permission-system)
- [Step-by-Step Setup](#step-by-step-setup)
- [AI-Powered Team Features](#ai-powered-team-features)
- [What's Next](#whats-next)

---

## Overview

Taskade is designed for teams of any size. This guide covers the different ways to organize your workspace — from small teams to large enterprises — and how AI-powered features amplify team productivity.

> **Genesis hint:** Teams that use Genesis apps can give every department custom internal tools, dashboards, and client portals — all connected to the same Workspace DNA.

---

## Key Terminology

| Term | Definition | Analogy |
|---|---|---|
| **Workspace** | Top-level container for folders, projects, and templates | Like a company or organization |
| **Folder** | Container for projects nested within a workspace | Like a department or team |
| **Project** | Digital canvas for tasks, notes, and collaboration | Like a document or whiteboard |
| **Space** | Collaborative workspace with sub-spaces (max 2 levels: Root → Sub-space) | Like a team room |

---

## Workspace Organization Methods

### Method 1: Workspace per Department

Create a separate workspace for each department with function-specific folders.

| Setup | Detail |
|---|---|
| **Structure** | One workspace per department |
| **Folders** | Function-specific folders within each workspace |
| **Invitations** | Team members in their respective workspaces |
| **Cross-department** | Invite members from other departments to specific projects |

**Example:**

| Marketing Workspace | HR Workspace | Accounting Workspace | Engineering Workspace |
|---|---|---|---|
| Home (Default) | Home (Default) | Home (Default) | Home (Default) |
| Meetings | Performance Reviews | Accounts Payable | Sprint Planning |
| Campaigns | Hiring Pipeline | Budget Tracking | Code Reviews |
| Social Media | Training | Invoicing | QA & Testing |
| Analytics | Policies | Reporting | Infrastructure |

**Ideal for:**
- Medium to large organizations
- Specialized, independent teams
- Functional/divisional structures
- Teams with minimal cross-department overlap

### Method 2: One Workspace, Folders per Department

A single workspace with department-level folders.

| Setup | Detail |
|---|---|
| **Structure** | One workspace for entire team |
| **Folders** | One folder per department |
| **Invitations** | Each member added to their department folder |
| **Cross-department** | Easy collaboration — everyone is in the same workspace |

**Ideal for:**
- Small to medium teams (under 50 people)
- Teams with frequent cross-department collaboration
- Startups and growing companies

### Method 3: One Workspace, Folders per Function

A single workspace with function-specific folders (not department-based).

| Setup | Detail |
|---|---|
| **Structure** | One workspace for entire team |
| **Folders** | One folder per function (Meetings, Operations, Planning, etc.) |
| **Permissions** | Function-level access control |
| **Cross-functional** | All departments contribute to shared function folders |

**Ideal for:**
- Cross-functional teams
- Matrix organizations
- Project-based structures

---

## Permission System

Taskade uses a **5-role, 7-tier RBAC** permission system:

| Role | Capabilities |
|---|---|
| **Owner** | Full control — manage workspace, billing, members, all content |
| **Admin** | Manage members, projects, folders, agents, automations |
| **Collaborator** | Create and edit projects, use agents, run automations |
| **Participant** | Edit assigned tasks, comment, chat |
| **Viewer** | Read-only access to shared content |

> Permission inheritance flows: Organization → Workspace → Folder → Project. Members inherit permissions from higher levels unless overridden.

---

## Step-by-Step Setup

### Create a Workspace

| Step | Action |
|---|---|
| 1 | In your dashboard, click the **+** icon on the left sidebar |
| 2 | Enter the workspace name |
| 3 | _(Optional)_ Choose a workspace logo |
| 4 | _(Optional)_ Invite team members |

### Create Folders

| Step | Action |
|---|---|
| 1 | Open your workspace |
| 2 | Click **New folder** under Home |
| 3 | Enter the folder name |
| 4 | _(Optional)_ Choose a folder logo |
| 5 | _(Optional)_ Share the folder with specific team members |

### Create Projects

| Step | Action |
|---|---|
| 1 | Open a folder |
| 2 | Click **+ Create new** (top-right corner) |
| 3 | Type the project title |
| 4 | _(Optional)_ Share the project to collaborate |

---

## AI-Powered Team Features

| Feature | How It Helps Teams | Learn More |
|---|---|---|
| **Taskade Autopilot** | Generate entire team workspaces from a single prompt | [Taskade Autopilot](../ai-features/autopilot.md) |
| **AI Agents** | Create specialist agents for each department | [Custom AI Agents](https://help.taskade.com/en/collections/14476419-taskade-genesis) |
| **Multi-Agent Teams** | Teams of agents that collaborate (Business+) | [Multi-Agents](https://help.taskade.com/en/collections/14476419-taskade-genesis) |
| **Automation Workflows** | Automate cross-department processes | [Automation Triggers](../automation/README.md) |
| **Genesis Apps** | Build internal tools and dashboards for teams | [Taskade Genesis](https://help.taskade.com/en/collections/14476419-taskade-genesis) |
| **Shared Agent Chats** | AI + human conversations together | [Custom AI Agents](https://help.taskade.com/en/collections/14476419-taskade-genesis) |
| **Version History** | Track all changes across team projects | [Version History](./version-history.md) |
| **Real-time Collaboration** | Multiple users editing simultaneously (OT-based) | Built-in |

---

## What's Next

| Guide | What You'll Learn |
|---|---|
| [Taskade Autopilot](../ai-features/autopilot.md) | Auto-generate team workspaces |
| [Editing & Formatting](./editing-formatting.md) | Format and style team projects |
| [Embed Taskade](./embed.md) | Share projects on your website |
| [Version History](./version-history.md) | Track team changes |
