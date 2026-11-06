---
description: >-
  Bring your existing work into Taskade and take it with you anywhere. Step-by-step guide for importing files, migrating from other tools, and exporting your data.
---

# Import & Export

## Import Your Content into Taskade

Already have notes, docs, or spreadsheets in other tools? You can bring everything into Taskade in three steps.

### Quick Start: Import in 3 Steps

1. Open the **Projects** tab of your workspace and click **Import**. On a narrow screen, click **+ New** > **Import**. You can also click **+** next to **Projects** in the sidebar and choose **Import**
2. Pick a tab in the Import dialog:
   * **Import with AI** — turn a file, webpage, YouTube video, or pasted text into a structured project
   * **Summarize with AI** — turn the content into a summary or an outline
   * **Import CSV** — turn spreadsheet rows into a table project
3. Drop your file, or click **Webpage**, **YouTube**, or **Paste Text & Markdown**, then follow the prompts

To let an AI agent learn from content, open the agent's **Knowledge** tab, turn on **Enable knowledge**, and add it there, or open a project's **···** menu and choose **Add to Agent Knowledge**.

{% hint style="info" %}
**Imported content becomes a project in your workspace.** Add it to an agent's Knowledge so that the agent can learn from it — docs, spreadsheets, presentations, and more.
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

Uploading a PDF or another document needs a paid plan. CSV import works on every plan, including Free, for files up to 5 MB and 5,000 rows.

***

### Import Methods

{% tabs %}
{% tab title="Files & Docs" %}
Upload files directly from your computer.

1. Open the **Projects** tab of your workspace and click **Import**
2. Open the **Import with AI** or **Summarize with AI** tab
3. Drag your file into the dropzone, or click to upload it
4. Taskade turns it into a project
{% endtab %}

{% tab title="Webpages" %}
Import any public webpage by URL.

1. Open the **Projects** tab of your workspace and click **Import**
2. In the **Import with AI** tab, click **Webpage**
3. Paste the URL
4. Taskade extracts the content automatically
{% endtab %}

{% tab title="YouTube" %}
Pull in content from YouTube videos.

1. Open the **Projects** tab of your workspace and click **Import**
2. In the **Import with AI** tab, click **YouTube**
3. Paste the video URL
4. Taskade extracts the transcript and key information
{% endtab %}

{% tab title="Text & Markdown" %}
Paste text or Markdown directly.

1. Open the **Projects** tab of your workspace and click **Import**
2. In the **Import with AI** tab, click **Paste Text & Markdown**
3. Paste your content
4. Click **Create Project**
{% endtab %}

{% tab title="Other Tools" %}
Use the general import flow for content from any tool.

1. Export your content from the other tool (see migration guides below)
2. Open the **Projects** tab of your workspace and click **Import**
3. Upload the exported file or paste the content. Under **Or import from**, the dialog also has direct options for Todoist, Dynalist, and Workflowy
{% endtab %}
{% endtabs %}

***

## Migrate from Other Tools

Switching to Taskade? Here is how to bring your work over from popular tools.

### From Notion

1. In Notion, go to **Settings & Members** > **Settings**
2. Scroll to **Export all workspace content**
3. Choose **Markdown & CSV** format and export
4. Unzip the downloaded file
5. In Taskade, open the **Projects** tab, click **Import**, and open the **Import with AI** tab
6. Upload the `.md` files. For databases exported as `.csv` files, use the **Import CSV** tab

{% hint style="success" %}
**Result:** Your Notion pages become Taskade projects, ready for AI agents to work with.
{% endhint %}

### From Trello

1. In Trello, open your board
2. Click **Menu** > **More** > **Print and Export** > **Export as CSV**
3. In Taskade, open the **Projects** tab, click **Import**, and open the **Import CSV** tab
4. Upload the CSV file, set the column types, and import it

### From Asana

1. In Asana, open your project
2. Click the **drop-down arrow** next to the project name > **Export / Print** > **CSV**
3. In Taskade, open the **Projects** tab, click **Import**, and open the **Import CSV** tab
4. Upload the CSV file, set the column types, and import it

### From Google Docs

1. Install the free [Docs to Markdown](https://workspace.google.com/marketplace/app/docs_to_markdown/700168918607) add-on in Google Docs
2. Open your document and run the add-on to convert to Markdown
3. Copy the Markdown output
4. In Taskade, open the **Projects** tab, click **Import**, then click **Paste Text & Markdown**
5. Paste and import

### From Any Other Tool

Most tools let you export as CSV, Markdown, or plain text. The general pattern:

1. **Export** from your current tool in the most structured format available (Markdown or CSV preferred)
2. **Upload** the file in the **Import** dialog (**Projects** tab > **Import**)
3. **Choose** the tab — **Import with AI**, **Summarize with AI**, or **Import CSV**

{% hint style="info" %}
**Tip:** For spreadsheets and CSVs, use the **Import CSV** tab. Taskade reads the first row as column names, and you set each column to Text, Select, or Number before the import.
{% endhint %}

***

## Export Your Content from Taskade

You can export any project to share outside Taskade or keep a local backup.

### How to Export

1. Open the project you want to export
2. Click the **(...)** menu in the top-right corner
3. Select **Export**
4. Choose your format:

| Format       | Best For                                              |
| ------------ | ----------------------------------------------------- |
| **PDF**      | Sharing polished documents, printing                  |
| **Markdown** | Moving to other tools, version control                |
| **CSV**      | Spreadsheet rows, one row per task                    |
| **Mind Map** | A FreeMind (`.mm`) file for other mind-map tools      |
| **Text**     | Simple plain-text backup                              |
| **Image**    | Sharing mind maps or org charts                       |

{% hint style="warning" %}
**Markdown, CSV, and Mind Map** export on every plan, including Free. **Image, Text, and PDF** export need a paid plan. Image export works best for mind map and org chart views.
{% endhint %}

### Print a Project

Need a hard copy? You can also print directly:

1. Click the **(...)** menu in the top-right corner
2. Select **Print**
3. Use your browser's print dialog to print or save as PDF

***

## Related Guides

* [Getting Started with Taskade](../getting-started/)
* [AI Agents Getting Started](../genesis-living-system-builder/ai-features/ai-agents-getting-started.md)
* [Features Overview](../genesis-living-system-builder/genesis/README.md)
* [Developer Hub](../apis-living-system-development/developer-home.md) — for programmatic and bulk migration via the API

---

_Step-by-step guides on taskade.com/learn: [Convert to Taskade](https://www.taskade.com/learn/import/convert), [Import CSV Spreadsheets](https://www.taskade.com/learn/import/csv-import), [Export & Print Projects](https://www.taskade.com/learn/import/exporting)._
