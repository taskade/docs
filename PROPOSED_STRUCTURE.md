# Proposed Taskade Docs Structure (GitBook Model)

## Current vs Proposed Structure

### Current Issues:
❌ `docs.taskade.com/docs/updates` (redundant /docs/)
❌ Mixed audience content (users + developers together)  
❌ "help-center" conflicts with help.taskade.com
❌ Unclear navigation hierarchy

### Proposed Solution:
✅ `docs.taskade.com/` (main product docs)
✅ `docs.taskade.com/developers` (technical docs)
✅ `docs.taskade.com/changelog` (updates)
✅ Clear audience separation like GitBook

## File Structure Migration

### Main Documentation (docs.taskade.com/)
```
/
├── README.md (Landing: "Welcome to Taskade")
├── SUMMARY.md (Updated navigation)
├── getting-started/
│   ├── README.md
│   ├── quick-start.md
│   └── authentication.md
├── genesis/
│   ├── README.md ("Genesis: No-Code Apps")  
│   ├── getting-started.md
│   ├── examples.md
│   └── best-practices.md
├── features/
│   ├── README.md ("Core Features")
│   ├── projects.md
│   ├── ai-agents.md
│   └── collaboration.md
├── ai-features/
│   ├── README.md
│   ├── ai-agents-getting-started.md
│   ├── genesis-quick-start.md
│   └── automation-basics.md
├── vision/
│   ├── README.md ("Platform Vision")
│   ├── architecture.md
│   └── roadmap.md
└── changelog/
    ├── README.md
    ├── 2025/
    └── 2024/
```

### Developer Documentation (docs.taskade.com/developers)
```
developers/
├── README.md ("Developer Documentation")
├── getting-started/
│   ├── README.md
│   ├── quickstart.md
│   └── authentication.md
├── api/
│   ├── README.md ("Core API Reference")
│   ├── workspaces/
│   ├── projects/
│   ├── tasks/
│   ├── agents/
│   └── automations/
├── automations/
│   ├── README.md
│   ├── triggers.md
│   ├── actions.md
│   └── integrations.md
├── genesis-api/
│   ├── README.md
│   ├── app-generation.md
│   └── space-apps.md
├── tools/
│   ├── README.md
│   ├── sdks.md
│   └── cli.md
└── resources/
    ├── README.md
    ├── openapi.md
    └── examples.md
```

## URL Mapping Strategy

| Current URL | New URL | Content Type |
|-------------|---------|--------------|
| `docs.taskade.com/docs/genesis-no-code-apps/` | `docs.taskade.com/genesis/` | Product Feature |
| `docs.taskade.com/docs/help-and-guides/` | `docs.taskade.com/features/` | Product Usage |
| `docs.taskade.com/docs/developer-api/` | `docs.taskade.com/developers/api/` | Technical Docs |
| `docs.taskade.com/docs/updates/` | `docs.taskade.com/changelog/` | Product Updates |
| `docs.taskade.com/docs/automations/` | `docs.taskade.com/developers/automations/` | Technical Integration |

## Benefits of This Structure

### ✅ Clear Audience Separation
- **Product Users**: Find features, tutorials, getting started
- **Developers**: Find APIs, integrations, technical details

### ✅ SEO & Discoverability  
- Clean URLs without redundant prefixes
- Logical hierarchy matches user intent
- Better search engine understanding

### ✅ Scalable Architecture
- Easy to add new product features to main docs
- Developer docs can grow independently  
- Changelog remains focused and accessible

### ✅ Consistent with Industry Standards
- Mirrors GitBook, Stripe, Twilio documentation patterns
- Familiar navigation for users coming from other platforms
- Professional, enterprise-ready structure
