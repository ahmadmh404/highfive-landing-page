---
name: writing-skills
description: Meta-skill for creating and testing new skills following established best practices and methodologies. Use when creating new SKILL.md files.
---

# Writing Skills

## Overview

This skill guides the creation of new skills for the Qwen Code skills system. Skills package expertise into discoverable, reusable capabilities that extend the model's effectiveness.

**Core principle:** One skill, one capability. Keep skills focused and testable.

## When to Create a Skill

Create a skill when you notice:

- Repeated patterns in how you explain something
- Processes that should be followed consistently
- Domain expertise that would help future tasks
- Team workflows that need documentation
- Anti-patterns that need prevention

## Skill Structure

Each skill is a directory containing:

```
my-skill-name/
├── SKILL.md              # Required - main skill instructions
├── reference.md          # Optional - detailed reference material
├── examples.md           # Optional - usage examples
├── templates/            # Optional - template files
└── scripts/              # Optional - helper scripts
```

### SKILL.md Format

```yaml
---
name: my-skill-name
description: Brief description of what this skill does and when to use it. Include keywords users will naturally mention.
---

# Skill Title

## Overview

2-3 sentences explaining what this skill does and its core principle.

## When to Use

Clear criteria for when the skill should be invoked.

## The Process

Step-by-step instructions for following this skill.

## Examples

Concrete examples of using this skill.

## Common Mistakes

What to avoid and why.

## Red Flags

Signals that indicate the skill isn't being followed correctly.
```

### Frontmatter Requirements

| Field | Required | Notes |
|-------|----------|-------|
| `name` | Yes | Lowercase, hyphens, no spaces |
| `description` | Yes | Include both what it does AND when to use it |

**Good description:**

```yaml
description: Extract text and tables from PDF files, fill forms, merge documents. Use when working with PDFs, forms, or document extraction.
```

**Bad description:**

```yaml
description: Helps with documents
```

## Best Practices

### Keep Skills Focused

One skill should address one capability:

- **Focused:** "PDF form filling", "Excel analysis", "Git commit messages"
- **Too broad:** "Document processing" (split into smaller skills)

### Write Clear Descriptions

Help the model discover when to use skills by including specific triggers:

```yaml
description: Analyze Excel spreadsheets, create pivot tables, and generate charts. Use when working with Excel files, spreadsheets, or .xlsx data.
```

### Test With Your Team

- Does the skill activate when expected?
- Are the instructions clear?
- Are there missing examples or edge cases?

## Writing Good SKILL.md Content

### Start with the Core Principle

Every good skill has a memorable core principle:

```
**Core principle:** Evidence before claims, always.
**Core principle:** Fresh subagent per task + two-stage review = high quality.
**Core principle:** Wait for the actual condition, not a guess about timing.
```

### Use Tables for Quick Reference

```
| Scenario | Pattern | When to Use |
|----------|---------|-------------|
| X | Y | Z |
```

### Show Good vs Bad Examples

```
✅ Good: [concrete example]
❌ Bad: [concrete example]
```

### Include Red Flags

Help users recognize when the skill isn't being followed:

```
## Red Flags

- "should", "probably", "seems to" (before verification)
- "Quick fix" (before root cause investigation)
- Test passes immediately (tests written after code)
```

### Add Rationalization Prevention

Common excuses for not following the skill:

```
| Excuse | Reality |
|--------|---------|
| "Too simple to need process" | Process is fast for simple cases |
```

## Testing a Skill

After creating a skill, test it:

1. Ask questions that match the skill's description
2. Verify the skill activates appropriately
3. Check if instructions are clear enough to follow
4. Look for missing edge cases or examples

## Updating a Skill

Edit the SKILL.md directly:

```bash
code .qwen/skills/my-skill/SKILL.md
```

Changes take effect the next time Qwen Code is started.

## Removing a Skill

Delete the skill directory:

```bash
rm -rf .qwen/skills/my-skill
```

## Example: Creating a "Code Review" Skill

```yaml
---
name: code-review-checklist
description: Systematic code review checklist. Use before merging or creating PRs to catch bugs, security issues, and style problems.
---

# Code Review Checklist

## Overview

Systematic code review before merging. Catch bugs, security issues, and style problems.

**Core principle:** Check everything, assume nothing.

## The Checklist

- [ ] Logic correct? Edge cases handled?
- [ ] Security: No SQL injection, XSS, exposed secrets?
- [ ] Performance: No N+1 queries, efficient algorithms?
- [ ] Tests: Comprehensive, testing real behavior?
- [ ] Style: Consistent with codebase?
- [ ] Docs: Complex logic explained?

## Common Issues

| Issue | How to Check |
|-------|-------------|
| SQL injection | All queries parameterized? |
| XSS | All user input escaped? |
| Exposed secrets | No API keys, passwords in code? |
```

## Sharing Skills with Your Team

Add skills under `.qwen/skills/` in your project:

```bash
git add .qwen/skills/
git commit -m "Add team skill for PDF processing"
git push
```

Teammates get the skills automatically after pulling.
