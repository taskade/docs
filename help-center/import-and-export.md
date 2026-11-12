---
description: >-
  Import files, webpages, and data from other tools into Taskade, and export your projects. A step-by-step guide to import, migration, and export.
---

# Import & Export

## Import Your Content into Taskade

If your notes, docs, or spreadsheets are in another tool, you can import them into Taskade in three steps.

### Quick Start: Import in 3 Steps

The **Import** dialog has three tabs:

* **Import with AI**: Turns a file, webpage, YouTube video, or pasted text into a structured project
* **Summarize with AI**: Turns the content into a summary or an outline
* **Import CSV**: Turns spreadsheet rows into a table project

1. In the **Projects** tab of your workspace, click **Import**. On a narrow screen, click **+ New** > **Import**. You can also click **+** next to **Projects** in the sidebar, and then choose **Import**.
2. Pick a tab in the **Import** dialog.
3. Drop your file, or click **Webpage**, **YouTube**, or **Paste Text & Markdown**. Then do the steps that Taskade shows.

You can also give content to an AI agent as knowledge. The agent then learns from it. Do these steps:

1. Open the **Knowledge** tab of the agent.
2. Turn on **Enable knowledge**.
3. Add the content.

To add a project as knowledge, open the **···** menu of the project, and choose **Add to Agent Knowledge**.

{% hint style="info" %}
**Each import becomes a project in your workspace.** You can add the project to the knowledge of an agent. The agent can then learn from your docs, spreadsheets, presentations, and more.
{% endhint %}

***

### Supported File Formats

| Format        | Extension                 |
| ------------- | ------------------------- |
| PDF           | `.pdf`                    |
| Word          | `.docx`                   |
| Plain Text    | `.txt`                    |
| Markdown      | `.md`                     |
| PowerPoint    | `.pptx`                   |
| Excel         | `.xlsx`, `.xls`           |
| eBook         | `.epub`                   |
| Spreadsheet   | `.csv`                    |

You need a paid plan to upload a PDF or another document. CSV import works on every plan, including Free, for files up to 5 MB and 5,000 rows. For every other document, the dropzone shows the upload limit of your workspace. A paid plan raises this limit. If a file is too large, Taskade refuses the upload before it spends your credits.

***

### Import Methods

{% tabs %}
{% tab title="Files & Docs" %}
Upload files from your computer.

1. In the **Projects** tab of your workspace, click **Import**.
2. Open the **Import with AI** tab or the **Summarize with AI** tab.
3. Drag your file into the dropzone, or click the dropzone to upload the file.

Taskade turns the file into a project.
{% endtab %}

{% tab title="Webpages" %}
Import a public webpage by its URL.

1. In the **Projects** tab of your workspace, click **Import**.
2. In the **Import with AI** tab, click **Webpage**.
3. Paste the URL.

Taskade gets the content from the page automatically.
{% endtab %}

{% tab title="YouTube" %}
Import the content of a YouTube video.

1. In the **Projects** tab of your workspace, click **Import**.
2. In the **Import with AI** tab, click **YouTube**.
3. Paste the URL of the video.

Taskade gets the transcript and the key information from the video.
{% endtab %}

{% tab title="Text & Markdown" %}
Paste text or Markdown.

1. In the **Projects** tab of your workspace, click **Import**.
2. In the **Import with AI** tab, click **Paste Text & Markdown**.
3. Paste your content.
4. Click **Create Project**.
{% endtab %}

{% tab title="Other Tools" %}
Use the same import steps for content from any tool.

1. Export your content from the other tool. The migration guides that follow show how.
2. In the **Projects** tab of your workspace, click **Import**.
3. Upload the exported file, or paste the content.

Under **Or import from**, the dialog also has direct options for Todoist, Dynalist, and Workflowy.
{% endtab %}
{% endtabs %}

***

## Migrate from Other Tools

Do these steps to move your work from other tools to Taskade.

### From Notion

1. In Notion, open **Settings & Members** > **Settings**.
2. Scroll to **Export all workspace content**.
3. Choose the **Markdown & CSV** format.
4. Export the content.
5. Unzip the downloaded file.
6. In the **Projects** tab of Taskade, click **Import**.
7. Open the **Import with AI** tab.
8. Upload the `.md` files.
9. If you have databases as `.csv` files, upload them in the **Import CSV** tab.

{% hint style="success" %}
**Result:** Your Notion pages become Taskade projects. Your AI agents can work with these projects.
{% endhint %}

### From Trello

1. In Trello, open your board.
2. Click **Menu** > **More** > **Print and Export** > **Export as CSV**.
3. In the **Projects** tab of Taskade, click **Import**.
4. Open the **Import CSV** tab.
5. Upload the CSV file.
6. Set the column types, and import the file.

### From Asana

1. In Asana, open your project.
2. Click the **drop-down arrow** next to the project name > **Export / Print** > **CSV**.
3. In the **Projects** tab of Taskade, click **Import**.
4. Open the **Import CSV** tab.
5. Upload the CSV file.
6. Set the column types, and import the file.

### From Google Docs

1. In Google Docs, install the free [Docs to Markdown](https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607) add-on.
2. Open your document.
3. Run the add-on. The add-on converts the document to Markdown.
4. Copy the Markdown output.
5. In the **Projects** tab of Taskade, click **Import**.
6. Click **Paste Text & Markdown**.
7. Paste the Markdown, and import it.

### From Any Other Tool

Most tools can export CSV, Markdown, or plain text files. Do these steps:

1. **Export** your content from your current tool. Pick the most structured format that the tool has. Markdown and CSV give the best results.
2. **Open** the **Import** dialog (**Projects** tab > **Import**).
3. **Choose** the tab: **Import with AI**, **Summarize with AI**, or **Import CSV**.
4. **Upload** the file.

{% hint style="info" %}
**Tip:** The **Import CSV** tab is for spreadsheets and CSV files. Taskade reads the first row as column names. Before the import, you set each column to Text, Select, or Number.
{% endhint %}

***

## Export Your Content from Taskade

You can export a project to share it outside Taskade, or to keep a backup on your computer.

### How to Export

1. Open the project that you want to export.
2. Click the **(...)** menu in the top-right corner.
3. Select **Export**.
4. Choose your format:

| Format       | Best For                                              |
| ------------ | ----------------------------------------------------- |
| **PDF**      | Polished documents to share, printing                 |
| **Markdown** | A move to other tools, version control                |
| **CSV**      | Spreadsheet rows, one row per task                    |
| **Mind Map** | A FreeMind (`.mm`) file for other mind-map tools      |
| **Text**     | A plain-text backup                                   |
| **Image**    | Mind maps or org charts to share                      |

{% hint style="warning" %}
**Markdown, CSV, and Mind Map** exports work on every plan, including Free. **Image, Text, and PDF** exports need a paid plan. Image export works best for mind map and org chart views.
{% endhint %}

### Print a Project

You can also print a project:

1. Click the **(...)** menu in the top-right corner.
2. Select **Print**.
3. In the print dialog of your browser, print the project or save it as a PDF.

***

## Related Guides

* [Getting Started with Taskade](../getting-started/)
* [AI Agents Getting Started](../genesis-living-system-builder/ai-features/ai-agents-getting-started.md)
* [Features Overview](../genesis-living-system-builder/genesis/README.md)
* [Developer Hub](../apis-living-system-development/developer-home.md) — for programmatic and bulk migration via the API

---

_Step-by-step guides on taskade.com/learn: [Convert to Taskade](https://www.taskade.com/learn/import/convert), [Import CSV Spreadsheets](https://www.taskade.com/learn/import/csv-import), [Export & Print Projects](https://www.taskade.com/learn/import/exporting)._
