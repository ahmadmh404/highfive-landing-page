# Data Model: Typography Audit

## Entities

### Typography Style

Represents a specific text styling used across the landing page.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier (e.g., "hero-heading") |
| fontFamily | string | Font family name (e.g., "Inter", "Geist") |
| fontSize | string | Font size value (e.g., "3rem", "48px") |
| fontWeight | number | Font weight (e.g., 700, 600) |
| lineHeight | string | Line height (e.g., "1.2", "tight") |
| letterSpacing | string | Letter spacing (e.g., "tight", "-0.02em") |
| usageLocations | string[] | Sections/components using this style |

### Section

A major content area of the landing page.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| name | string | Display name (e.g., "Hero", "Features") |
| path | string | File path or route |
| typographyStyles | string[] | IDs of Typography Style entities used |

### Component

A reusable UI element with its own typography requirements.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| name | string | Component name |
| path | string | File path |
| typographyStyles | string[] | IDs of Typography Style entities used |
| isVariant | boolean | Whether this is a variant of another component |

### Typography Pattern

A set of related styles that should be applied consistently.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| name | string | Pattern name (e.g., "Heading Scale") |
| styles | TypographyStyle[] | Collection of related styles |
| description | string | Usage guidance |

## Relationships

```
Typography Style (many-to-many) ← → Section
Typography Style (many-to-many) ← → Component
Typography Pattern (one-to-many) → Typography Style
```

## Validation Rules

- All Typography Style entries must include fontSize and fontWeight
- Section and Component entries must reference valid Typography Style IDs
- Duplicate Typography Style definitions should be flagged as inconsistencies

## State Transitions

Not applicable - this is a documentation entity, not a stateful system.