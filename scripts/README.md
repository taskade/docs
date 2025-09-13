# Help Center Import Scripts

This directory contains tools for importing content from `help.taskade.com` into the GitBook documentation structure.

## 🚀 Quick Start

### Import All Articles (Recommended)

```bash
# Import all articles from help center sitemap
npm run import:help:all
```

### Import Single Article

```bash
# Import a specific article
npm run import:help:single "https://help.taskade.com/en/articles/9495190-agent-knowledge-memory"
```

### Import from URL List

```bash
# Create a file with URLs (one per line)
echo "https://help.taskade.com/en/articles/8958457-custom-ai-agents" > urls.txt
echo "https://help.taskade.com/en/articles/9495190-agent-knowledge-memory" >> urls.txt

# Import from the file
npm run import:help:batch urls.txt
```

## 📁 Output Structure

The import tool creates the following structure:

```
help-center/
└── _imported/
    ├── ai-features/
    │   ├── custom-ai-agents.md
    │   └── agent-knowledge-memory.md
    ├── automations/
    │   └── getting-started-with-automation.md
    ├── general/
    │   └── other-articles.md
    └── SUMMARY_IMPORT.md
```

Images are downloaded to:

```
.gitbook/
└── assets/
    └── imported/
        ├── agent-knowledge-memory-1.jpg
        ├── agent-knowledge-memory-2.jpg
        └── custom-ai-agents-1.png
```

## 🔧 How It Works

### 1. Jina AI Reader Service

The script uses [Jina AI's reader service](https://jina.ai/reader/) to convert help center pages to clean Markdown:

```
https://r.jina.ai/https://help.taskade.com/en/articles/9495190-agent-knowledge-memory
```

This service:
- Extracts clean text content
- Preserves markdown formatting
- Removes navigation and ads
- Provides structured output

### 2. Content Processing

For each article, the script:

1. **Fetches** content via Jina AI reader
2. **Extracts** metadata (title, URL, article ID)
3. **Downloads** images from Intercom CDN
4. **Converts** image URLs to local references
5. **Cleans** markdown formatting
6. **Adds** GitBook frontmatter
7. **Categorizes** content by topic
8. **Saves** to appropriate directory

### 3. Image Handling

Images are automatically:
- Downloaded from Intercom CDN
- Renamed with article slug prefix
- Saved to `.gitbook/assets/imported/`
- Referenced with relative paths in markdown

## 📋 Generated Files

### Article Files

Each imported article gets:

```markdown
---
title: "Agent Knowledge & Memory"
description: "Imported from Taskade Help Center"
source_url: "https://help.taskade.com/en/articles/9495190-agent-knowledge-memory"
article_id: "9495190"
imported_at: "2024-01-15T10:30:00.000Z"
---

# Agent Knowledge & Memory

**Overview**
------------

Agent knowledge refers to the information your [custom AI agents](https://help.taskade.com/en/articles/8958457-custom-ai-agents) use to provide contextual and accurate responses...

![Agent Knowledge Tab](../../.gitbook/assets/imported/agent-knowledge-memory-1.jpg)
```

### Summary File

`SUMMARY_IMPORT.md` contains navigation structure:

```markdown
# Imported Help Center Content

## AI Features

- [Custom AI Agents](help-center/_imported/ai-features/custom-ai-agents.md)
- [Agent Knowledge & Memory](help-center/_imported/ai-features/agent-knowledge-memory.md)

## Automations

- [Getting Started with Automation](help-center/_imported/automations/getting-started-with-automation.md)

---

**Import Statistics:**
- Total articles: 45
- Categories: 6
- Imported on: 2024-01-15T10:30:00.000Z
```

## 🎯 Integration Workflow

### 1. Run Import

```bash
npm run import:help:all
```

### 2. Review Content

Check imported files in `help-center/_imported/`:

```bash
ls -la help-center/_imported/
```

### 3. Organize Content

Move articles to appropriate sections:

```bash
# Example: Move AI articles to main features section
mv help-center/_imported/ai-features/* features/ai-features/
```

### 4. Update Navigation

Add entries to main `SUMMARY.md`:

```markdown
## 🤖 AI Features

- [AI Agents Getting Started](features/ai-features/ai-agents-getting-started.md)
- [Custom AI Agents](features/ai-features/custom-ai-agents.md)  # ← Imported
- [Agent Knowledge & Memory](features/ai-features/agent-knowledge-memory.md)  # ← Imported
```

### 5. Fix Internal Links

Update cross-references between articles:

```bash
# Find articles that reference each other
grep -r "help.taskade.com" help-center/_imported/

# Update to relative links
# Before: [Custom AI Agents](https://help.taskade.com/en/articles/8958457-custom-ai-agents)
# After:  [Custom AI Agents](../custom-ai-agents.md)
```

### 6. Clean Up

Remove import directory when done:

```bash
rm -rf help-center/_imported/
```

## 🔍 Advanced Usage

### Custom Categories

The script auto-categorizes articles, but you can customize by editing the `extractCategory()` function:

```javascript
extractCategory(url) {
  if (url.includes('genesis')) return 'genesis';
  if (url.includes('mobile')) return 'mobile';
  // Add your custom rules
  return 'general';
}
```

### Batch Processing

Create targeted import lists:

```bash
# AI-related articles only
cat > ai-articles.txt << EOF
https://help.taskade.com/en/articles/8958457-custom-ai-agents
https://help.taskade.com/en/articles/9495190-agent-knowledge-memory
https://help.taskade.com/en/articles/8958567-custom-ai-agents-mobile
EOF

npm run import:help:batch ai-articles.txt
```

### Error Handling

The script handles common issues:

- **Rate limiting**: 2-second delays between requests
- **Image failures**: Continues processing if images can't be downloaded
- **Malformed URLs**: Skips invalid articles
- **Network errors**: Retries with exponential backoff

## 🚨 Troubleshooting

### Common Issues

**"No markdown content found"**
```bash
# The Jina service might be down or the URL is invalid
# Try accessing the Jina URL directly:
curl "https://r.jina.ai/https://help.taskade.com/en/articles/9495190-agent-knowledge-memory"
```

**Images not downloading**
```bash
# Check if assets directory exists
ls -la .gitbook/assets/imported/

# Manually test image URL
curl -I "https://downloads.intercomcdn.com/i/o/plyqw4hf/1286985932/68a8902bfff9f816ea78bc241fc4/agent-knowledge-tab.jpg"
```

**Permission errors**
```bash
# Make sure directories are writable
chmod -R 755 help-center/ .gitbook/assets/
```

### Debug Mode

Add debug logging to the script:

```javascript
// Add at the top of import-help-center.js
const DEBUG = process.env.DEBUG === 'true';

// Use throughout the script
if (DEBUG) console.log('Debug info:', data);
```

Run with debug:
```bash
DEBUG=true npm run import:help:all
```

## 📊 Import Statistics

After import, you'll see statistics like:

```
🎉 Import complete!
   Articles imported: 47
   Location: /path/to/docs/help-center/_imported
   Summary: /path/to/docs/help-center/_imported/SUMMARY_IMPORT.md

Categories processed:
- ai-features: 12 articles
- automations: 8 articles  
- integrations: 6 articles
- mobile: 5 articles
- troubleshooting: 9 articles
- general: 7 articles

Images downloaded: 156
Total processing time: 3m 42s
```

## 🔄 Updating Content

To refresh imported content:

1. **Re-run import** (overwrites existing files)
2. **Compare changes** using git diff
3. **Merge updates** with any local modifications
4. **Update timestamps** in frontmatter

```bash
# Re-import specific articles
npm run import:help:single "https://help.taskade.com/en/articles/9495190-agent-knowledge-memory"

# Check what changed
git diff help-center/_imported/
```

## 🎯 Best Practices

### Before Import

- [ ] Backup existing documentation
- [ ] Plan directory structure
- [ ] Review GitBook configuration

### During Import

- [ ] Monitor for errors in console
- [ ] Check image download progress
- [ ] Verify article categorization

### After Import

- [ ] Review all imported content
- [ ] Fix broken internal links
- [ ] Update main navigation
- [ ] Test GitBook build
- [ ] Commit changes with descriptive message

### Content Quality

- [ ] Remove duplicate content
- [ ] Update outdated information
- [ ] Standardize formatting
- [ ] Add missing context for GitBook readers

---

**Need help?** Check the [main documentation](../README.md) or open an issue on GitHub.
