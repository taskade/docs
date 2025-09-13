#!/usr/bin/env node

/**
 * Taskade Help Center Import Tool
 * 
 * Uses Jina AI's reader service to convert help.taskade.com articles
 * into clean Markdown files for GitBook integration.
 * 
 * Usage:
 *   node scripts/import-help-center.js --url "https://help.taskade.com/en/articles/123-example"
 *   node scripts/import-help-center.js --sitemap (imports all articles)
 *   node scripts/import-help-center.js --batch urls.txt
 */

const fs = require('fs').promises;
const path = require('path');
const https = require('https');
const { URL } = require('url');

class TaskadeHelpImporter {
  constructor() {
    this.baseDir = path.join(__dirname, '..');
    this.importDir = path.join(this.baseDir, 'help-center', '_imported');
    this.assetsDir = path.join(this.baseDir, '.gitbook', 'assets', 'imported');
    this.summaryFile = path.join(this.importDir, 'SUMMARY_IMPORT.md');
    this.processed = new Set();
    this.articles = [];
  }

  async init() {
    // Create directories
    await fs.mkdir(this.importDir, { recursive: true });
    await fs.mkdir(this.assetsDir, { recursive: true });
    
    console.log('📁 Created import directories');
    console.log(`   Import: ${this.importDir}`);
    console.log(`   Assets: ${this.assetsDir}`);
  }

  /**
   * Fetch content using Jina AI reader service
   */
  async fetchWithJina(url) {
    const jinaUrl = `https://r.jina.ai/${url}`;
    
    return new Promise((resolve, reject) => {
      console.log(`🔍 Fetching: ${url}`);
      
      https.get(jinaUrl, (res) => {
        let data = '';
        
        res.on('data', (chunk) => {
          data += chunk;
        });
        
        res.on('end', () => {
          if (res.statusCode === 200) {
            resolve(data);
          } else {
            reject(new Error(`HTTP ${res.statusCode}: ${data}`));
          }
        });
      }).on('error', reject);
    });
  }

  /**
   * Extract article metadata from Jina response
   */
  parseArticleMetadata(content) {
    const lines = content.split('\n');
    const titleMatch = lines.find(line => line.startsWith('Title:'));
    const urlMatch = lines.find(line => line.startsWith('URL Source:'));
    
    const title = titleMatch ? titleMatch.replace('Title: ', '').trim() : 'Untitled';
    const sourceUrl = urlMatch ? urlMatch.replace('URL Source: ', '').trim() : '';
    
    // Extract article ID from URL
    const articleIdMatch = sourceUrl.match(/\/articles\/(\d+)-/);
    const articleId = articleIdMatch ? articleIdMatch[1] : Date.now().toString();
    
    // Extract slug from URL
    const slugMatch = sourceUrl.match(/\/articles\/\d+-(.+)/);
    const slug = slugMatch ? slugMatch[1] : title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    
    return { title, sourceUrl, articleId, slug };
  }

  /**
   * Process images in markdown content
   */
  async processImages(content, articleSlug) {
    const imageRegex = /!\[([^\]]*)\]\((https:\/\/downloads\.intercomcdn\.com[^)]+)\)/g;
    let processedContent = content;
    let match;
    let imageIndex = 1;

    while ((match = imageRegex.exec(content)) !== null) {
      const [fullMatch, altText, imageUrl] = match;
      
      try {
        // Clean up the image URL (remove query params for filename)
        const cleanUrl = imageUrl.split('?')[0];
        const ext = path.extname(cleanUrl) || '.jpg';
        const filename = `${articleSlug}-${imageIndex}${ext}`;
        const localPath = path.join(this.assetsDir, filename);
        
        console.log(`  📷 Downloading image: ${filename}`);
        
        // Download image
        await this.downloadFile(imageUrl, localPath);
        
        // Replace in content with relative path
        const relativePath = `../../.gitbook/assets/imported/${filename}`;
        const newImageTag = `![${altText || `Image ${imageIndex}`}](${relativePath})`;
        
        processedContent = processedContent.replace(fullMatch, newImageTag);
        imageIndex++;
        
      } catch (error) {
        console.warn(`  ⚠️  Failed to download image: ${error.message}`);
      }
    }

    return processedContent;
  }

  /**
   * Download a file from URL
   */
  async downloadFile(url, filepath) {
    return new Promise((resolve, reject) => {
      https.get(url, (res) => {
        if (res.statusCode === 200) {
          const fileStream = require('fs').createWriteStream(filepath);
          res.pipe(fileStream);
          fileStream.on('finish', () => {
            fileStream.close();
            resolve();
          });
          fileStream.on('error', reject);
        } else {
          reject(new Error(`HTTP ${res.statusCode}`));
        }
      }).on('error', reject);
    });
  }

  /**
   * Clean and format markdown content
   */
  cleanMarkdown(content) {
    // Remove Jina metadata lines
    const lines = content.split('\n');
    const markdownStart = lines.findIndex(line => line.startsWith('Markdown Content:'));
    
    if (markdownStart === -1) {
      throw new Error('No markdown content found');
    }
    
    let markdown = lines.slice(markdownStart + 1).join('\n');
    
    // Clean up common issues
    markdown = markdown
      // Remove excessive whitespace
      .replace(/\n{3,}/g, '\n\n')
      // Fix bold formatting
      .replace(/\\\*\\\*/g, '**')
      // Fix italic formatting  
      .replace(/\\\*/g, '*')
      // Fix links
      .replace(/\\\[/g, '[')
      .replace(/\\\]/g, ']')
      .replace(/\\\(/g, '(')
      .replace(/\\\)/g, ')')
      // Clean up escaped characters
      .replace(/\\(.)/g, '$1')
      // Fix headings
      .replace(/^(\s*)([#]+)(\s*)/gm, '$2 ')
      .trim();

    return markdown;
  }

  /**
   * Generate frontmatter for GitBook
   */
  generateFrontmatter(metadata) {
    return `---
title: "${metadata.title}"
description: "Imported from Taskade Help Center"
source_url: "${metadata.sourceUrl}"
article_id: "${metadata.articleId}"
imported_at: "${new Date().toISOString()}"
---

`;
  }

  /**
   * Import a single article
   */
  async importArticle(url) {
    try {
      if (this.processed.has(url)) {
        console.log(`⏭️  Skipping already processed: ${url}`);
        return null;
      }

      const content = await this.fetchWithJina(url);
      const metadata = this.parseArticleMetadata(content);
      
      console.log(`📄 Processing: ${metadata.title}`);
      
      // Clean markdown
      let markdown = this.cleanMarkdown(content);
      
      // Process images
      markdown = await this.processImages(markdown, metadata.slug);
      
      // Add frontmatter
      const frontmatter = this.generateFrontmatter(metadata);
      const finalContent = frontmatter + markdown;
      
      // Determine category from URL path
      const category = this.extractCategory(url);
      const categoryDir = path.join(this.importDir, category);
      await fs.mkdir(categoryDir, { recursive: true });
      
      // Write file
      const filename = `${metadata.slug}.md`;
      const filepath = path.join(categoryDir, filename);
      await fs.writeFile(filepath, finalContent, 'utf8');
      
      console.log(`✅ Saved: ${category}/${filename}`);
      
      this.processed.add(url);
      this.articles.push({
        title: metadata.title,
        slug: metadata.slug,
        category,
        filepath: `${category}/${filename}`,
        sourceUrl: metadata.sourceUrl
      });
      
      return { metadata, filepath, category };
      
    } catch (error) {
      console.error(`❌ Failed to import ${url}:`, error.message);
      return null;
    }
  }

  /**
   * Extract category from help center URL
   */
  extractCategory(url) {
    // Extract category from URL structure
    if (url.includes('/collections/')) {
      const match = url.match(/\/collections\/\d+-([^\/]+)/);
      return match ? match[1] : 'general';
    }
    
    // Categorize by article content or use general
    if (url.includes('ai-') || url.includes('agent')) return 'ai-features';
    if (url.includes('automation')) return 'automations';
    if (url.includes('integration')) return 'integrations';
    if (url.includes('mobile')) return 'mobile';
    if (url.includes('troubleshoot')) return 'troubleshooting';
    if (url.includes('getting-started')) return 'getting-started';
    
    return 'general';
  }

  /**
   * Discover all articles from sitemap
   */
  async discoverArticles() {
    console.log('🗺️  Discovering articles from help center...');
    
    try {
      // Try to get sitemap or article list
      const sitemapUrl = 'https://help.taskade.com/sitemap.xml';
      const sitemapContent = await this.fetchWithJina(sitemapUrl);
      
      // Extract URLs from sitemap
      const urlRegex = /<loc>(https:\/\/help\.taskade\.com\/en\/articles\/[^<]+)<\/loc>/g;
      const urls = [];
      let match;
      
      while ((match = urlRegex.exec(sitemapContent)) !== null) {
        urls.push(match[1]);
      }
      
      console.log(`📋 Found ${urls.length} articles in sitemap`);
      return urls;
      
    } catch (error) {
      console.warn('⚠️  Could not fetch sitemap, using manual URL list');
      
      // Fallback: common help center URLs
      return [
        'https://help.taskade.com/en/articles/8958457-custom-ai-agents',
        'https://help.taskade.com/en/articles/9495190-agent-knowledge-memory',
        'https://help.taskade.com/en/articles/8958467-getting-started-with-automation',
        'https://help.taskade.com/en/articles/8958567-custom-ai-agents-mobile',
        // Add more known URLs here
      ];
    }
  }

  /**
   * Generate summary file for easy GitBook integration
   */
  async generateSummary() {
    console.log('📝 Generating SUMMARY_IMPORT.md...');
    
    // Group articles by category
    const categories = {};
    this.articles.forEach(article => {
      if (!categories[article.category]) {
        categories[article.category] = [];
      }
      categories[article.category].push(article);
    });
    
    // Generate summary content
    let summary = `# Imported Help Center Content

This file contains the navigation structure for imported help center articles.
Merge sections into your main SUMMARY.md as needed.

`;
    
    Object.keys(categories).sort().forEach(category => {
      const categoryTitle = category.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      summary += `\n## ${categoryTitle}\n\n`;
      
      categories[category].forEach(article => {
        summary += `- [${article.title}](help-center/_imported/${article.filepath})\n`;
      });
    });
    
    summary += `\n---

**Import Statistics:**
- Total articles: ${this.articles.length}
- Categories: ${Object.keys(categories).length}
- Imported on: ${new Date().toISOString()}

**Next Steps:**
1. Review imported content in \`help-center/_imported/\`
2. Move relevant articles to appropriate sections
3. Update main SUMMARY.md with new navigation
4. Update internal links and references
5. Delete this file when integration is complete
`;
    
    await fs.writeFile(this.summaryFile, summary, 'utf8');
    console.log(`✅ Summary saved: ${this.summaryFile}`);
  }

  /**
   * Import from batch file
   */
  async importFromBatch(batchFile) {
    console.log(`📄 Reading batch file: ${batchFile}`);
    
    const content = await fs.readFile(batchFile, 'utf8');
    const urls = content.split('\n')
      .map(line => line.trim())
      .filter(line => line && line.startsWith('http'));
    
    console.log(`📋 Found ${urls.length} URLs in batch file`);
    
    for (const url of urls) {
      await this.importArticle(url);
      // Small delay to be respectful
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }

  /**
   * Main import process
   */
  async run(options = {}) {
    await this.init();
    
    if (options.url) {
      // Single URL import
      await this.importArticle(options.url);
      
    } else if (options.batch) {
      // Batch file import
      await this.importFromBatch(options.batch);
      
    } else if (options.sitemap) {
      // Full sitemap import
      const urls = await this.discoverArticles();
      
      console.log(`🚀 Starting import of ${urls.length} articles...`);
      
      for (let i = 0; i < urls.length; i++) {
        const url = urls[i];
        console.log(`\n[${i + 1}/${urls.length}]`);
        
        await this.importArticle(url);
        
        // Respectful delay between requests
        if (i < urls.length - 1) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        }
      }
      
    } else {
      throw new Error('Please specify --url, --batch, or --sitemap option');
    }
    
    // Generate summary
    if (this.articles.length > 0) {
      await this.generateSummary();
    }
    
    console.log(`\n🎉 Import complete!`);
    console.log(`   Articles imported: ${this.articles.length}`);
    console.log(`   Location: ${this.importDir}`);
    console.log(`   Summary: ${this.summaryFile}`);
  }
}

// CLI handling
async function main() {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    
    if (arg === '--url' && args[i + 1]) {
      options.url = args[i + 1];
      i++;
    } else if (arg === '--batch' && args[i + 1]) {
      options.batch = args[i + 1];
      i++;
    } else if (arg === '--sitemap') {
      options.sitemap = true;
    } else if (arg === '--help' || arg === '-h') {
      console.log(`
Taskade Help Center Import Tool

Usage:
  node scripts/import-help-center.js --url "https://help.taskade.com/en/articles/123-example"
  node scripts/import-help-center.js --batch urls.txt
  node scripts/import-help-center.js --sitemap

Options:
  --url URL        Import a single article
  --batch FILE     Import URLs from a text file (one per line)
  --sitemap        Import all articles from sitemap
  --help           Show this help message

Examples:
  # Import single article
  node scripts/import-help-center.js --url "https://help.taskade.com/en/articles/9495190-agent-knowledge-memory"
  
  # Import all articles (recommended)
  node scripts/import-help-center.js --sitemap
  
  # Import from URL list
  echo "https://help.taskade.com/en/articles/8958457-custom-ai-agents" > urls.txt
  node scripts/import-help-center.js --batch urls.txt
`);
      return;
    }
  }
  
  if (!options.url && !options.batch && !options.sitemap) {
    console.error('❌ Please specify --url, --batch, or --sitemap option. Use --help for usage.');
    process.exit(1);
  }
  
  try {
    const importer = new TaskadeHelpImporter();
    await importer.run(options);
  } catch (error) {
    console.error('❌ Import failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = TaskadeHelpImporter;
