---
name: using-superpowers
description: Introduction to the superpowers skills system and core workflow. Use when starting any new development session to understand available skills and how they work together.
---

# Using Superpowers

## Overview

Superpowers is a structured skills system for AI coding agents. It provides process-driven workflows for software development, from brainstorming ideas through implementation to code review and branch completion.

**Core principle:** Systematic processes produce better results than ad-hoc approaches.

## The Superpowers Loop

The core workflow flows through these skills in order:

```
brainstorming → writing-plans → subagent-driven-development → finishing-a-development-branch
```

1. **brainstorming** - Extract specs, refine ideas via Socratic dialogue, present design, get approval
2. **writing-plans** - Break approved design into bite-sized implementation tasks
3. **subagent-driven-development** - Dispatch fresh subagents per task with two-stage review
4. **finishing-a-development-branch** - Verify tests, present merge/PR/keep/discard options, cleanup

## Available Skills

### Development Workflow

| Skill | When to Use |
|-------|-------------|
| **brainstorming** | Before any creative work - features, components, adding functionality |
| **writing-plans** | When you have a spec/requirements for a multi-step task |
| **subagent-driven-development** | Execute implementation plans with independent tasks |
| **executing-plans** | Execute plans in a separate session with checkpoints |
| **dispatching-parallel-agents** | 2+ independent tasks with no shared state |

### Quality Assurance

| Skill | When to Use |
|-------|-------------|
| **test-driven-development** | Implementing any feature or bugfix, before writing code |
| **systematic-debugging** | Any bug, test failure, or unexpected behavior |
| **verification-before-completion** | Before claiming work is complete, before committing |
| **requesting-code-review** | After completing tasks or major features |
| **receiving-code-review** | When receiving code review feedback |

### Git & Branch Management

| Skill | When to Use |
|-------|-------------|
| **using-git-worktrees** | Starting isolated feature work or before executing plans |
| **finishing-a-development-branch** | Implementation complete, deciding how to integrate work |

### Meta Skills

| Skill | When to Use |
|-------|-------------|
| **writing-skills** | Creating new skills for the system |
| **using-superpowers** | Introduction to the skills system (this skill) |

## Key Principles

### Test-Driven Development

Tests must always be written before implementation code. Follow the RED-GREEN-REFACTOR cycle.

### Systematic over Ad-hoc

Rely on structured processes, checklists, and phased workflows instead of guessing.

### Evidence over Claims

Require empirical verification (passing tests, manual validation) before declaring success.

### YAGNI

Strictly avoid building speculative or unnecessary features.

### DRY

Actively eliminate code duplication.

### Mandatory Execution

Skills function as strict, non-optional rules rather than suggestions.

## Starting a New Feature

```
1. Use brainstorming skill
   ↓
2. Design approved? → Use writing-plans skill
   ↓
3. Plan written? → Use subagent-driven-development skill
   (or executing-plans if no subagents available)
   ↓
4. All tasks done? → Use finishing-a-development-branch skill
```

## Quick Commands

To use a skill, reference it by name:

```
"use the brainstorming skill to design a new auth feature"
"use the systematic-debugging skill to investigate test failures"
"use the test-driven-development skill for this bug fix"
```

The model will autonomously decide when to use skills based on your request and each skill's description.

## Skill Invocation

Skills are **model-invoked** — the model autonomously decides when to use them based on your request and the skill's description.

If you want to invoke a skill explicitly, you can reference it:

```
"use the brainstorming skill"
```

## Tips for Best Results

1. **Always start with brainstorming** - Even for "simple" changes
2. **Never skip verification** - Run tests before claiming success
3. **Use subagents when available** - Higher quality, faster iteration
4. **Request code review between tasks** - Catch issues early
5. **Follow TDD strictly** - Tests first, watch them fail, minimal code

## Philosophy

- **Complexity Reduction** - Prioritizes simplicity as the primary architectural goal
- **Junior-Readable Planning** - Plans designed to be clear enough for an inexperienced engineer
- **Priority Hierarchy** - Project skills override personal skills, which override superpowers skills
