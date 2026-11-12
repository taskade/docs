---
description: >-
  Import Taskade Genesis apps from GitHub repos, and export them back with a branch and a pull request. Keep each app in version control.
---

# GitHub Import & Export

You can import Taskade Genesis apps from GitHub repositories. You can also send your apps back to GitHub on a new branch with a pull request. With this two-way sync, each Genesis app becomes a kit that you can move and keep in version control.

***

## Overview

With GitHub Import & Export, you can use a Genesis app like code. You can make a backup, work on it with pull requests and share it as a repository that other people can clone.

* **Import** an app from a public or private GitHub repo. Import works on every plan, with the item limits of your plan. For example, a Free workspace can hold 1 agent and 3 apps, and cannot import automations.
* **Export** an app to a new repo, or send updates to a repo that exists as a pull request. Export to GitHub needs **Pro or above**. Taskade checks the plan on the server.
* **Round trip**: Export to a repo, then import it back into a workspace.

***

## Importing a Genesis App

### From a Public Repository

1. Open the workspace for the app. In the workspace header, open the **More** menu and click **Import from GitHub**.
2. If Taskade asks, click **Connect GitHub account** and sign in. You must do this step for public repos too.
3. Paste the repository URL and click **Import**.

Taskade gets the app bundle and imports it into your workspace.

Import works with a repo that holds an exported Taskade app. Import does not change a normal code repo into an app.

If your plan includes automations, the full app kit comes in: projects, agents and automations. Taskade **turns on the automations automatically** after the import. Thus the app is ready to run, and you do not have to configure it. On a plan without automations (Free), Taskade stops the import of an app that holds automations and asks you to upgrade.

### From a Private Repository

To import from a private repository, you must sign in to GitHub.

1. Click **Connect GitHub account** and give Taskade access.
2. Paste the URL of the private repo.

The import works if your connected GitHub account can read the repo. Taskade reads the content of the repo and imports it as it does a public repo.

{% hint style="info" %}
The GitHub token needs `repo` scope to read private repositories. You can remove this access at any time in the settings of your GitHub account.
{% endhint %}

***

## Exporting a Genesis App

### Create a New Repository

1. Open your Genesis app, click **Publish**, then click the **Advanced Settings** icon. You can also open **App settings → Developer → Code**.
2. Click **Export to GitHub**. If your GitHub account is not connected, connect it.
3. Choose **Create new repo**. Pick an **Owner** and type a **Repository name**.
4. To keep the repo private, select **Private repository**.
5. Click **Export**.

Taskade makes the repo and sends your full app kit to it.

### Push to an Existing Repository

1. In the Export modal, choose **Update existing**.
2. Enter the **Repository owner** and **Repository name**, then click **Create PR**.
3. Taskade opens a pull request with your app bundle.
4. Review the changes in GitHub. Merge the pull request when you are ready.

{% hint style="success" %}
Taskade keeps the files that are already in the repo. Taskade only adds or updates the Genesis app bundle.
{% endhint %}

If you removed a file from the app, Taskade also removes it from the export folders. Thus old files do not collect in your repo. Other files in the repo do not change.

***

## What's in an Export Bundle

An export holds all that is necessary to build the app again in another workspace.

| Included                                              | Not Included                                   |
| ----------------------------------------------------- | ---------------------------------------------- |
| Projects (structure, tasks, notes)                    | Live state (users who are online, sessions)    |
| AI agents (definitions, tools, knowledge attachments) | API tokens or the credentials of connected accounts |
| Automations (triggers, actions, flow logic)           | Workspace settings                             |
| Media assets                                          | Accounts of app users (GenesisAuth keeps them) |
| App configuration (branding, theming)                 | Billing and plan state                         |

***

## Working with the Pull Request Flow

When you send an app to a repo that exists, Taskade does not commit directly to the base branch. Taskade does these steps:

1. Taskade makes a new branch in the target repo.
2. Taskade commits the Genesis app bundle to that branch.
3. Taskade opens a pull request with the changes.
4. You review and merge it in GitHub, as you do with other pull requests.

Each new export makes a new branch and a new pull request against the default branch of the repo.

***

## Permissions & Errors

| Problem and message | How to Fix |
| --- | --- |
| **The workspace plan is below Pro**: an upgrade prompt shows instead of the export | Upgrade the workspace to Pro or above. |
| **A collaborator does not have export permission**: an error message shows in the Export modal | The workspace owner must give export rights. |
| **The GitHub token expired**: "Unable to access repository" | Connect GitHub again from the workspace settings. |
| **A private repo import fails**: "Repository not found" after you connect | Make sure that your connected GitHub account can read the repo. Then connect again. |
| **A merge conflict occurs after a new export**: GitHub shows conflict markers | Correct the conflict in GitHub, as for other pull requests. |

***

## Troubleshooting

{% hint style="warning" %}
**"Repository not found" on import**: Examine the URL again. Make sure that the repo is public, or that your connected GitHub account has access to it.
{% endhint %}

{% hint style="warning" %}
**The exported bundle shows old data**: Export uses the current state of your app. Make sure that Taskade saved your last changes before you export.
{% endhint %}

{% hint style="warning" %}
**The pull request did not open automatically**: Look at the pending authorizations of your GitHub account. Make sure that the Taskade app has write access to the target repository.
{% endhint %}

***

## Related

{% content-ref url="../community-and-sharing/publish-and-clone.md" %}
[publish-and-clone.md](../community-and-sharing/publish-and-clone.md)
{% endcontent-ref %}

{% content-ref url="../../apis-living-system-development/bundles.md" %}
[bundles.md](../../apis-living-system-development/bundles.md)
{% endcontent-ref %}

{% content-ref url="../../apis-living-system-development/developer-home.md" %}
[developer-home.md](../../apis-living-system-development/developer-home.md)
{% endcontent-ref %}

{% content-ref url="../community-and-sharing/genesis-auth.md" %}
[genesis-auth.md](../community-and-sharing/genesis-auth.md)
{% endcontent-ref %}

---

_Step-by-step guide on taskade.com/learn: [GitHub App Export & Import](https://www.taskade.com/learn/genesis/github-export-import)._
