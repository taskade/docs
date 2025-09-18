# Import from Logseq

Transform Logseq knowledge graphs into structured Taskade projects, converting your note-taking workflow into collaborative, actionable workspaces with enhanced project management capabilities.

{% hint style="success" %}
Taskade's Logseq import functionality bridges the gap between personal knowledge management and collaborative project workflows, converting your Logseq graphs into dynamic, shareable projects with AI-powered features and team collaboration tools.
{% endhint %}

## Overview

Logseq is a powerful knowledge management and note-taking application that uses bidirectional linking to create interconnected graphs of information. Taskade's Logseq import feature transforms your carefully organized notes into fully functional projects, preserving your knowledge structure while adding powerful collaboration, automation, and AI features.

### Supported Logseq Features

- **Markdown Export**: Direct import of .md files exported from Logseq
- **Bidirectional Links**: Preservation of [[link]] syntax and relationships
- **Page Properties**: Frontmatter and page metadata conversion
- **Block References**: ((block-ref)) syntax handling
- **Tags and Categories**: #tag conversion to Taskade tags
- **Journal Entries**: Date-based pages become structured tasks

## Export from Logseq

### Step-by-Step Export Process

**Prepare your Logseq content for Taskade import:**

{% stepper %}
{% step %}
### Open Logseq Application
Launch Logseq and open the graph you want to export
{% endstep %}

{% step %}
### Access Export Menu
Click the three dots (⋯) menu in the top-right corner of the Logseq interface
{% endstep %}

{% step %}
### Choose Export Option
Select **"Export Graph"** → **"Export as standard Markdown"**
{% endstep %}

{% step %}
### Complete Export
Wait for the export process to complete and note the export location
{% endstep %}

{% step %}
### Extract Archive
Unzip the exported archive to access individual .md files in the pages directory
{% endstep %}
{% endstepper %}

**Export Settings:**
- **Format**: Standard Markdown (.md files)
- **Structure**: Each page becomes a separate .md file
- **Assets**: Images and attachments are included in the export
- **Metadata**: Page properties and frontmatter are preserved

## Import to Taskade

### Import Process

**Convert Logseq content into Taskade projects:**

{% stepper %}
{% step %}
### Access Import Feature
Navigate to your Taskade workspace or folder and click the arrow next to "➕ New Project"
{% endstep %}

{% step %}
### Select Import Option
Choose **"Import"** from the dropdown menu, then select **"Markdown & Text"**
{% endstep %}

{% step %}
### Upload Files
Drag and drop or browse to select the .md files from your Logseq export folder
{% endstep %}

{% step %}
### Configure Import
Choose import settings and select the target workspace/folder for your new project
{% endstep %}

{% step %}
### Complete Import
Click **"Import"** and wait for the conversion process to finish
{% endstep %}
{% endstepper %}

### Content Conversion

**How Logseq elements transform in Taskade:**

| Logseq Element | Taskade Conversion |
|----------------|-------------------|
| **Page Title** | Project title or main task |
| **Page Content** | Task descriptions and notes |
| **[[Page Links]]** | Clickable project references |
| **#tags** | Taskade tags and categories |
| **TODO items** | Interactive checkboxes |
| **Block References** | Linked content blocks |
| **Properties** | Custom fields and metadata |

### Advanced Import Options

**Fine-tune your Logseq import:**

- **Selective Import**: Choose specific pages or exclude certain content types
- **Structure Preservation**: Maintain Logseq's hierarchical organization
- **Link Conversion**: Transform bidirectional links into Taskade's linking system
- **Tag Mapping**: Convert Logseq tags to Taskade's organizational system

## Post-Import Enhancements

### AI-Powered Content Enhancement

**Leverage Taskade's AI features on imported content:**

- **Content Summarization**: Generate overviews of imported knowledge graphs
- **Task Extraction**: Convert notes into actionable tasks and checklists
- **Relationship Mapping**: Visualize connections between imported pages
- **Content Organization**: Automatically categorize and structure imported content

### Collaboration Features

**Transform personal notes into team knowledge:**

- **Team Sharing**: Share imported projects with colleagues
- **Real-time Collaboration**: Work together on imported content
- **Commenting**: Add context and discussions to imported notes
- **Version Control**: Track changes to imported and enhanced content

### Project Integration

**Connect imported knowledge with workflows:**

- **Task Creation**: Convert notes into assignable tasks
- **Due Dates**: Add time-based organization to imported content
- **Dependencies**: Create task relationships from note references
- **Automation**: Set up workflows based on imported knowledge structures

## Use Cases

### Personal Knowledge Management

**Transition from personal notes to collaborative knowledge:**

- **Research Organization**: Convert research notes into structured projects
- **Learning Management**: Transform study materials into actionable learning plans
- **Idea Development**: Convert brainstorming sessions into project plans

### Team Knowledge Base

**Share organizational knowledge effectively:**

- **Documentation**: Convert team documentation into interactive resources
- **Process Documentation**: Transform workflow notes into standardized procedures
- **Training Materials**: Convert training notes into comprehensive learning paths

### Project Planning

**Convert planning notes into executable projects:**

- **Meeting Notes**: Transform meeting summaries into action items
- **Project Planning**: Convert planning documents into structured project timelines
- **Requirement Gathering**: Transform requirements into organized task lists

## Best Practices

### Pre-Import Preparation

**Optimize your Logseq content for Taskade:**

- **Clean Up Content**: Remove outdated or irrelevant notes before export
- **Organize Structure**: Ensure logical page and block organization
- **Tag Consistently**: Use clear, consistent tagging for better categorization
- **Review Links**: Verify important bidirectional links are properly established

### Import Strategy

**Plan your import approach:**

- **Batch Imports**: Import related pages together for better organization
- **Project Structure**: Plan how imported content will fit into your workspace
- **Naming Conventions**: Ensure clear, descriptive names for imported projects
- **Metadata Preservation**: Decide which Logseq properties to maintain as custom fields

### Post-Import Organization

**Optimize imported content:**

- **Content Review**: Review and edit imported content for clarity
- **Structure Enhancement**: Add Taskade-specific organization (sections, priorities)
- **Collaboration Setup**: Configure sharing and permissions as needed
- **Integration Planning**: Connect imported content with existing projects

## Troubleshooting

### Common Import Issues

**Resolve import problems:**

- **File Size Limits**: Large graphs may need to be imported in smaller batches
- **Encoding Issues**: Ensure files are UTF-8 encoded for proper character display
- **Link Preservation**: Some complex link structures may need manual recreation
- **Formatting Loss**: Advanced Logseq formatting may need post-import adjustment

### Content Conversion Problems

**Fix content transformation issues:**

- **Block References**: Complex block references may need manual linking
- **Properties**: Custom properties may need recreation as custom fields
- **Embeds**: Embedded content may need re-embedding in Taskade format
- **Queries**: Logseq queries will need conversion to Taskade's automation system

## Integration with Taskade Features

### AI Agent Knowledge

**Use imported Logseq content as AI agent knowledge:**

- Add imported projects to agent knowledge bases
- Enable context-aware AI responses based on your notes
- Create specialized agents for different knowledge domains

### Automation Workflows

**Build automations around imported content:**

- Set up triggers based on imported task completion
- Create automated workflows for knowledge management
- Build notification systems for important updates

### Project Templates

**Convert successful imports into reusable templates:**

- Save well-structured imported projects as templates
- Create standardized knowledge management frameworks
- Build repeatable processes for different content types

## Success Metrics

### Import Quality Assessment

**Evaluate the success of your Logseq import:**

- **Content Preservation**: Verify all important information was transferred
- **Structure Maintenance**: Check that organizational hierarchy is intact
- **Link Functionality**: Test that important connections work in Taskade
- **Usability**: Assess how easily the imported content can be used and modified

### Value Realization

**Measure the benefits of the migration:**

- **Collaboration Improvement**: Track increased team usage of imported knowledge
- **Productivity Gains**: Monitor time saved through better organization
- **Knowledge Accessibility**: Measure improvements in information findability
- **Process Efficiency**: Track completion rates of imported action items

This comprehensive import process transforms your Logseq knowledge graphs into powerful, collaborative Taskade projects, enhancing both personal productivity and team knowledge management capabilities.


