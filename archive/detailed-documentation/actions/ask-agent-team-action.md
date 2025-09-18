# Ask Agent Team (Automation Action)

Leverage AI Teams in your automation workflows to generate collaborative AI responses and structured outputs for complex decision-making and analysis.

{% hint style="success" %}
The Ask Agent Team action brings collaborative AI conversations into your automated workflows, enabling sophisticated analysis and structured decision-making.
{% endhint %}

## Overview

The Ask Agent Team action integrates AI Teams into automation sequences, allowing multiple AI agents to collaborate on prompts and provide structured outputs for complex tasks.

**Key Features:**
- **Collaborative AI Processing**: Multiple agents work together on prompts
- **Structured Output Extraction**: Extract specific information from conversations
- **Flexible Execution Modes**: Different approaches for team collaboration
- **Automation Integration**: Outputs feed into subsequent workflow steps

## Configuration

### Required Settings

| Field | Description |
|-------|-------------|
| **Agent Team** | Select the AI Team to process the prompt |
| **Execution Mode** | Choose how the team collaborates (Standard, Fast, Consensus) |
| **Input** | The prompt or question for the team to analyze |
| **Processing Type** | How to extract and structure the output |

### Execution Modes

**Standard Mode:**
- Full collaborative discussion among all team members
- Comprehensive analysis with multiple perspectives
- Best for complex decision-making

**Fast Mode:**
- Streamlined discussion with focused outcomes
- Quicker processing for time-sensitive tasks
- Reduced depth but faster execution

**Consensus Mode:**
- Emphasis on reaching agreement among team members
- Structured consensus-building process
- Ideal for decision-making scenarios

## Processing Types

### Pre-built Types

**Summary:**
- Extracts general summary, main objective, key suggestions, and follow-up actions
- Perfect for project retrospectives and meeting summaries

**Lead Qualification:**
- Analyzes and scores sales leads
- Outputs qualification status, fit score, budget match, timeline, and next actions
- Ideal for sales and marketing automation

### Custom Processing

**Define your own extraction rules:**
- Add custom prompts for specific information extraction
- Create structured output fields tailored to your needs
- Include validation and fallback values

## Use Cases

### Business Analysis
```
Trigger: New project proposal submitted
→ Ask Agent Team: Evaluate risks and feasibility
→ Processing: Extract risk levels, mitigation strategies, success factors
→ Conditional Branch: Route based on assessment
→ Send Email: Notify stakeholders with results
```

### Content Review
```
Trigger: Article draft completed
→ Ask Agent Team: Review for accuracy, engagement, and SEO
→ Processing: Custom scoring for quality metrics
→ Conditional Branch: Approve or request revisions
→ Send Email: Provide detailed feedback
```

### Lead Management
```
Trigger: New lead added to CRM
→ Ask Agent Team: Analyze lead profile and potential
→ Processing: Lead qualification scoring
→ Update HubSpot: Set lead score and next steps
→ Create Task: Schedule personalized follow-up
```

### Project Management
```
Trigger: Sprint completed
→ Ask Agent Team: Review outcomes and improvements
→ Processing: Summary of achievements and action items
→ Update Confluence: Document retrospective
→ Create Task: Implement improvements
```

## Best Practices

### Team Selection
- Choose teams based on task complexity and required expertise
- Balance team size with processing speed needs
- Test team performance with sample scenarios

### Prompt Engineering
- Provide clear context and specific objectives
- Include relevant data and success criteria
- Use consistent formatting for better results

### Output Processing
- Define clear output schemas for structured data
- Use validation rules to ensure data quality
- Plan how outputs will integrate with subsequent actions

## Performance Considerations

### Processing Speed
- **Team Size**: Larger teams take longer for consensus
- **Complexity**: Detailed prompts require more analysis time
- **Mode**: Fast mode prioritizes speed over depth

### Cost Optimization
- Right-size teams for task requirements
- Use pre-built processing types when possible
- Monitor usage and optimize for efficiency

## Troubleshooting

### Common Issues
**No response from team:**
- Verify team configuration and member availability
- Check team permissions and access rights
- Ensure sufficient context in the prompt

**Unexpected output format:**
- Review processing type configuration
- Validate custom prompt instructions
- Check team expertise alignment

**Integration failures:**
- Confirm webhook endpoints and API connections
- Verify data format compatibility
- Check authentication and permissions

### Debugging
- Review execution logs for detailed conversation transcripts
- Test with simplified prompts to isolate issues
- Monitor team performance and response quality

## Security and Compliance

### Data Protection
- Sanitize sensitive information before team processing
- Implement appropriate access controls
- Maintain audit trails of team interactions

### Compliance
- Control data retention for team conversations
- Ensure compliance with privacy regulations
- Implement content filtering as needed

## Integration Examples

### Complete Workflows

**Support Escalation:**
```
High-priority ticket → Team analysis → Route to specialists → Create tickets → Notify teams
```

**Content Approval:**
```
Draft submitted → Team review → Quality scoring → Approve/revise → Send feedback
```

**Investment Analysis:**
```
New opportunity → Team due diligence → Risk assessment → Update portfolio → Schedule meetings
```

## Conclusion

The Ask Agent Team action enables sophisticated collaborative AI processing within automation workflows, providing nuanced analysis and structured outputs for complex business decisions.

## Related Features

- [AI Teams Overview](../ai-agents/ai-teams.md)
- [Automation Triggers](../automation-triggers-overview.md)
- [Ask Agent Action](ask-agent-action.md)

---

*Add collaborative AI intelligence to your automation workflows.*