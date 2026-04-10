# Feature Specification: Multilingual Support - Landing Page

**Feature Branch**: `004-it-seemslike-multilingual`  
**Created**: 2026-04-09  
**Status**: Draft  
**Input**: "it seemslike the multilingual support of the landing page is incomplete cuz some sections like testimonials don't have a support for this also other sectoin may not have do your investigation about it"

## Clarifications

### Session 2026-04-09

- Q: Primary languages → A: English & Arabic
- Q: Language switcher location → A: Top nav LanguageSwitcher component
- Q: Sections needing support → A: Testimonials and other sections require multilingual support
- Q: Session persistence → A: Persist language preference across sessions
- Q: Date/currency formats → A: No special formatting required (tech content only)
- Q: Unavailable language handling → A: Default to previous language with toast message
- Q: Auto-detect user language → A: Yes, if possible
- Q: Special content types (images/videos) → A: No special handling needed
- Q: Performance requirements → A: Fast loading - language should feel like content delivery, not a waterfall
- Q: Fallback behavior → A: Toast message + default to English

## User Scenarios & Testing _(mandatory)_

### User Story 1 - Language Switching (Priority: P1)

Users can switch between English and Arabic using the LanguageSwitcher in the top navigation.

**Why this priority**: Core functionality - users must be able to access content in their preferred language

**Independent Test**: Can be tested by clicking each language option and verifying page content changes accordingly

**Acceptance Scenarios**:

1. **Given** user is on English page, **When** clicks Arabic in LanguageSwitcher, **Then** content displays in Arabic
2. **Given** user is on Arabic page, **When** clicks English in LanguageSwitcher, **Then** content displays in English

---

### User Story 2 - Persistent Language Preference (Priority: P1)

Language preference persists across sessions.

**Why this priority**: User convenience - returning users shouldn't need to reselect language

**Independent Test**: Can be tested by selecting a language, closing browser, reopening page, and verifying language is preserved

**Acceptance Scenarios**:

1. **Given** user selects Arabic, **When** returns to site after closing browser, **Then** page loads in Arabic
2. **Given** user selects English, **When** returns to site after closing browser, **Then** page loads in English

---

### User Story 3 - Testimonials Multilingual Support (Priority: P2)

Testimonials section displays correctly in both English and Arabic.

**Why this priority**: Testimonials are key social proof elements that must be accessible to all users

**Independent Test**: Can be tested by switching to each language and verifying testimonial cards display properly

**Acceptance Scenarios**:

1. **Given** language is Arabic, **When** user scrolls to testimonials section, **Then** Arabic testimonial text displays correctly (RTL)
2. **Given** language is English, **When** user scrolls to testimonials section, **Then** English testimonial text displays correctly

---

### User Story 4 - Language Fallback Handling (Priority: P2)

System handles unavailable languages gracefully with user feedback.

**Why this priority**: Graceful degradation - users understand what's happening when content isn't available

**Independent Test**: Can be tested by attempting to switch to an unsupported language and verifying toast appears

**Acceptance Scenarios**:

1. **Given** user selects unsupported language, **When** language switch attempted, **Then** toast shows "This language not supported - defaulting to English" and English loads
2. **Given** user previously had Arabic, **When** unsupported language selected, **Then** toast shows message and returns to Arabic

---

### Edge Cases

- What happens when browser language auto-detection conflicts with user manual selection? → Manual detection ALWAYS wins over auto-detection
- How does system handle RTL layout transitions smoothly? → [To be defined in implementation]
- What happens when translation loading times out? → [To be defined in implementation]
- What happens when localStorage is unavailable (private/incognito)? → Use cookies as fallback storage
- What happens when URL locale and stored locale mismatch? → Priority: 1) URL locale if valid, 2) Stored locale if valid, 3) Default to Arabic
- What happens when testimonial translations are missing? → Show English content with toast notification

## Additional Requirements _(mandatory)_

### Sections Requiring Multilingual Support

All page sections MUST have translations in both English and Arabic:

| Section          | Component             | Status                                      |
| ---------------- | --------------------- | ------------------------------------------- |
| Hero             | `HeroSection`         | ✅ Complete                                 |
| Services         | `ServicesSection`     | ✅ Complete                                 |
| Why Choose Us    | `WhyChooseUsSection`  | ✅ Complete                                 |
| Process          | `ProcessSection`      | ✅ Complete                                 |
| Tech Stack       | `TechStackSection`    | ✅ Complete                                 |
| Projects         | `ProjectsSection`     | ✅ Complete                                 |
| Team             | `TeamSection`         | ✅ Complete                                 |
| Courses          | `CoursesSection`      | ✅ Complete                                 |
| AI Tools         | `AIToolsSection`      | ✅ Complete                                 |
| **Testimonials** | `TestimonialsSection` | ✅ Complete (6 testimonials EN+AR)          |
| **FAQ**          | `FAQSection`          | ⚠️ **Missing: all 6 questions and answers** |
| Newsletter       | `NewsletterSection`   | ✅ Complete                                 |
| CTA              | `CTASection`          | ✅ Complete                                 |
| Contact          | `ContactSection`      | ✅ Complete                                 |
| Footer           | `Footer`              | ✅ Complete                                 |

> **Note**: Testimonials now have full multilingual support. FAQ still needs Arabic content.

### Language Detection Priority

- **FR-009**: Manual language selection (via LanguageSwitcher) MUST always take priority over auto-detected browser language
- **FR-010**: On first visit, system MUST attempt browser language auto-detection
- **FR-011**: Auto-detected language MUST only be applied if no manual preference exists in storage

### Storage & Persistence

- **FR-012**: Language preference MUST persist across sessions using cookies (NOT localStorage)
- **FR-013**: System MUST gracefully fallback to cookies when localStorage unavailable (private/incognito mode)
- **FR-014**: Cookie storage MUST include locale value and timestamp

### Locale Resolution Priority

- **FR-015**: URL locale MUST be checked first (e.g., `/en/`, `/ar/`)
- **FR-016**: If URL locale invalid/unavailable, use stored preference from cookies
- **FR-017**: If no stored preference, default to Arabic as per user requirement

### SEO Requirements

- **FR-018**: Every page MUST include `hreflang` tags for all language variants (en, ar)
- **FR-019**: Each page MUST have canonical URL in its language
- **FR-020**: `hreflang` links MUST be mirror-consistent (if A points to B, B points to A)
- **FR-021**: All hreflang URLs MUST use full absolute URLs, not relative
- **FR-022**: Each page MUST have localized `<title>` and `<meta name="description">` in that language
- **FR-023**: Each page MUST have `<html lang="...">` attribute matching page language (lang="en" or lang="ar")
- **FR-024**: SEO metadata (title, description) MUST be stored in translation files and generated centrally
- **FR-025**: hreflang and metadata generation MUST be centralized in one config file, not copy-pasted per page

## Requirements _(mandatory)_

### Functional Requirements

- **FR-001**: System MUST provide LanguageSwitcher component in top navigation bar
- **FR-002**: System MUST support English and Arabic languages
- **FR-003**: Users MUST be able to switch between English and Arabic via LanguageSwitcher
- **FR-004**: System MUST persist language preference across sessions (using cookies)
- **FR-005**: System MUST render Arabic content in RTL (right-to-left) direction
- **FR-006**: Testimonials section MUST display in both supported languages
- **FR-007**: When unsupported language selected, system MUST show toast message and default to English
- **FR-008**: System MUST auto-detect browser language on first visit if possible
- **FR-009**: Manual language selection (via LanguageSwitcher) MUST always take priority over auto-detected browser language
- **FR-010**: On first visit, system MUST attempt browser language auto-detection
- **FR-011**: Auto-detected language MUST only be applied if no manual preference exists in storage
- **FR-012**: Language preference MUST persist across sessions using cookies (NOT localStorage)
- **FR-013**: System MUST gracefully fallback to cookies when localStorage unavailable (private/incognito mode)
- **FR-014**: Cookie storage MUST include locale value and timestamp
- **FR-015**: URL locale MUST be checked first (e.g., `/en/`, `/ar/`)
- **FR-016**: If URL locale invalid/unavailable, use stored preference from cookies
- **FR-017**: If no stored preference, default to Arabic as per user requirement
- **FR-018**: Every page MUST include `hreflang` tags for all language variants (en, ar)
- **FR-019**: Each page MUST have canonical URL in its language
- **FR-020**: `hreflang` links MUST be mirror-consistent (if A points to B, B points to A)
- **FR-021**: All hreflang URLs MUST use full absolute URLs, not relative
- **FR-022**: Each page MUST have localized `<title>` and `<meta name="description">` in that language
- **FR-023**: Each page MUST have `<html lang="...">` attribute matching page language (lang="en" or lang="ar")
- **FR-024**: SEO metadata (title, description) MUST be stored in translation files and generated centrally
- **FR-025**: hreflang and metadata generation MUST be centralized in one config file, not copy-pasted per page

### Key Entities

- **Language Preference**: Stores user's selected language (en/ar)
- **Translation Data**: Content strings for each supported language
- **Toast Notification**: User feedback messages for language events

## Success Criteria _(mandatory)_

### Measurable Outcomes

- **SC-001**: Users can switch language in under 2 seconds (95th percentile)
- **SC-002**: 100% of user-selectable text content is available in both English and Arabic
- **SC-003**: Language preference persists correctly across browser sessions (100% retention)
- **SC-004**: Testimonials section displays correctly in Arabic with proper RTL formatting
- **SC-005**: Toast messages appear within 500ms when language fallback occurs
- **SC-006**: All pages have proper hreflang tags for both en and ar variants
- **SC-007**: Each page has localized `<title>` and `<meta name="description">` in current language
- **SC-008**: Cookie-based persistence works in private/incognito browser modes
- **SC-009**: Manual language selection always overrides auto-detected browser language
- **SC-010**: URL locale takes priority over stored preference when both exist

## Assumptions

- Next.js i18n infrastructure exists and can be extended
- Existing LanguageSwitcher component can be modified/enhanced
- Translation content will be provided for all text elements
- Browser language detection API is available for auto-detection feature
