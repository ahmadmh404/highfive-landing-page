# Data Model: HighFive Landing Page MVP

## Entities

### TeamMember

Represents one of the 5 team members.

| Field       | Type         | Required | Validation        | Notes                |
| ----------- | ------------ | -------- | ----------------- | -------------------- |
| id          | string       | Yes      | UUID              | Unique identifier    |
| name        | string       | Yes      | 1-100 chars       | Display name         |
| role        | string       | Yes      | 1-100 chars       | Job title            |
| bio         | string       | Yes      | 50-500 chars      | Short biography      |
| photo       | string       | Yes      | Valid URL or path | Image path           |
| skills      | string[]     | Yes      | Min 1 item        | Tech skills array    |
| socialLinks | SocialLink[] | Yes      | Min 1 item        | Social/tech profiles |

**Relationships**: None (flat entity)

---

### AI Tool

Represents an AI tool/package offering with demo capability.

| Field            | Type        | Required | Validation      | Notes                  |
| ---------------- | ----------- | -------- | --------------- | ---------------------- |
| id               | string      | Yes      | UUID            | Unique identifier      |
| name             | string      | Yes      | 1-50 chars      | Tool name              |
| icon             | string      | Yes      | Valid icon name | Lucide icon identifier |
| description      | string      | Yes      | 20-200 chars    | One-line description   |
| problemStatement | string      | Yes      | 50-300 chars    | What problem it solves |
| formFields       | FormField[] | Yes      | Min 1 field     | Demo input fields      |
| mockResponse     | object      | Yes      | Valid JSON      | Simulated output       |
| category         | string      | Yes      | Enum            | Tool category          |

**Relationships**: None (flat entity)

---

### Project

Represents a completed project in the portfolio.

| Field        | Type     | Required | Validation        | Notes                |
| ------------ | -------- | -------- | ----------------- | -------------------- |
| id           | string   | Yes      | UUID              | Unique identifier    |
| title        | string   | Yes      | 1-100 chars       | Project name         |
| image        | string   | Yes      | Valid URL or path | Screenshot/thumbnail |
| description  | string   | Yes      | 50-300 chars      | Short description    |
| technologies | string[] | Yes      | Min 1 item        | Tech stack used      |
| outcome      | string   | Yes      | 20-200 chars      | Business outcome     |
| category     | string   | Yes      | Enum              | Filter category      |

**Categories**: `web-apps`, `ai-features`, `tools`

---

### Course

Represents a programming course offering.

| Field       | Type   | Required | Validation   | Notes                          |
| ----------- | ------ | -------- | ------------ | ------------------------------ |
| id          | string | Yes      | UUID         | Unique identifier              |
| title       | string | Yes      | 1-100 chars  | Course name                    |
| level       | string | Yes      | Enum         | Beginner/Intermediate/Advanced |
| description | string | Yes      | 50-300 chars | Short description              |
| ctaLink     | string | Yes      | Valid URL    | Link to full course            |

**Levels**: `beginner`, `intermediate`, `advanced`

---

### ContactInquiry

Represents a submitted contact form (client-side only).

| Field          | Type   | Required | Validation         | Notes               |
| -------------- | ------ | -------- | ------------------ | ------------------- |
| name           | string | Yes      | 1-100 chars        | Required            |
| email          | string | Yes      | Valid email format | Required, validated |
| phone          | string | No       | Valid phone format | Optional            |
| projectType    | string | Yes      | Enum               | Required            |
| projectDetails | string | Yes      | 10-2000 chars      | Required            |
| submittedAt    | Date   | Auto     | ISO timestamp      | Generated on submit |

**Project Types**: `web-development`, `ai-ml`, `mobile-app`, `other`

---

### DemoSession

Represents a single AI tool demo interaction.

| Field          | Type   | Required | Validation       | Notes                 |
| -------------- | ------ | -------- | ---------------- | --------------------- |
| id             | string | Yes      | UUID             | Unique identifier     |
| toolId         | string | Yes      | Valid AI Tool ID | Reference             |
| inputData      | object | Yes      | Valid JSON       | User input            |
| processingTime | number | Auto     | 2000-5000ms      | Simulated delay       |
| result         | object | Yes      | Valid JSON       | Mock response         |
| startedAt      | Date   | Auto     | ISO timestamp    | When Run clicked      |
| completedAt    | Date   | Auto     | ISO timestamp    | When result displayed |

---

## State Transitions

### Demo Session States

```
IDLE → PROCESSING → COMPLETED
              ↓
            ERROR (if failure)
```

### Contact Form States

```
EMPTY → FILLED → VALIDATING → SUBMITTED → RESET
                      ↓
                   ERROR (validation fail)
```

---

## Data Storage

All data is static and client-side:

- Team, Projects, Courses, AI Tools: JSON in `src/lib/data/`
- Contact Inquiries: Client-side only, not persisted (MVP scope)
- Demo Sessions: In-memory only during session

---

## Validation Rules Summary

| Entity         | Required Fields                                            | Custom Validation                         |
| -------------- | ---------------------------------------------------------- | ----------------------------------------- |
| TeamMember     | name, role, bio, photo, skills, socialLinks                | -                                         |
| AITool         | name, icon, description, formFields, mockResponse          | formFields min 1                          |
| Project        | title, image, description, technologies, outcome, category | -                                         |
| Course         | title, level, description, ctaLink                         | level in enum                             |
| ContactInquiry | name, email, projectType, projectDetails                   | email format, projectDetails min 10 chars |
| DemoSession    | toolId, inputData, result                                  | processingTime 2000-5000ms                |
