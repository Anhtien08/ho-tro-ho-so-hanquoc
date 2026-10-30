---
name: Visa5S Consulting System
colors:
  surface: '#fbf8ff'
  surface-dim: '#d6d8f4'
  surface-bright: '#fbf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f2ff'
  surface-container: '#edecff'
  surface-container-high: '#e6e6ff'
  surface-container-highest: '#dfe0fd'
  on-surface: '#171a2e'
  on-surface-variant: '#464652'
  inverse-surface: '#2c2f44'
  inverse-on-surface: '#f0efff'
  outline: '#767684'
  outline-variant: '#c7c5d4'
  surface-tint: '#4d53b8'
  primary: '#161984'
  on-primary: '#ffffff'
  primary-container: '#30359a'
  on-primary-container: '#a3a8ff'
  inverse-primary: '#bfc2ff'
  secondary: '#4a50c5'
  on-secondary: '#ffffff'
  secondary-container: '#8087ff'
  on-secondary-container: '#0e0e93'
  tertiary: '#60000d'
  on-tertiary: '#ffffff'
  tertiary-container: '#8a0018'
  on-tertiary-container: '#ff8f8c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bfc2ff'
  on-primary-fixed: '#02006e'
  on-primary-fixed-variant: '#353a9e'
  secondary-fixed: '#e0e0ff'
  secondary-fixed-dim: '#bfc2ff'
  on-secondary-fixed: '#02006d'
  on-secondary-fixed-variant: '#3136ac'
  tertiary-fixed: '#ffdad8'
  tertiary-fixed-dim: '#ffb3b0'
  on-tertiary-fixed: '#410006'
  on-tertiary-fixed-variant: '#93001a'
  background: '#fbf8ff'
  on-background: '#171a2e'
  surface-variant: '#dfe0fd'
typography:
  display-hero:
    fontFamily: Be Vietnam Pro
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 58px
    letterSpacing: -0.02em
  display-hero-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Be Vietnam Pro
    fontSize: 26px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Be Vietnam Pro
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-badge:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '600'
    lineHeight: 16px
  button-text:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1.25rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies trust, authoritative precision, and frictionless guidance for South Korea visa consulting services. It merges contemporary East Asian diplomatic professionalism with clear corporate fintech aesthetics. The interface creates an atmosphere of institutional legitimacy, reassuring applicants confronting complex regulatory hurdles.

The design movement is **Corporate Modern with Tactile Refinement**:
- Clean geometric structure paired with generous breathing room.
- Balanced contrasts ensuring full legibility across both Vietnamese diacritics and bilingual alphanumeric tokens.
- Restrained application of high-energy crimson to steer urgent decision paths without inciting panic.
- Systematic micro-elevations evoking pristine physical visa dossiers, legal credentials, and official documents.

## Colors

The palette establishes diplomatic authority through deep lapis and indigo tones, anchored by pure neutrals and punctuated by selective crimson highlights.

### Hierarchy & Role Distribution
- **Primary (`#30359A`)**: The anchor of authority. Dedicated to headers, prominent H1/H2 headlines, primary call-to-action buttons, the institutional footer, and structural timeline vectors.
- **Secondary (`#454BC0`)**: The energetic utility tone. Drives interactive hover states, contextual iconography, active badges, status indicators, and focus rings.
- **Tertiary Accent (`#ED1B36`)**: High-salience brand accent. Confined to high-priority alert chips, guarantee badges ("Tỉ lệ đậu 99%"), urgent processing indicators, and selective notification markers. Never used for standard primary actions.
- **Neutral Primary (`#25283D`)**: The primary ink token. Provides high-contrast, fatigue-free reading for body copy, table figures, and structural metadata.
- **Neutral Light & Surfaces**:
  - Main Canvas: `#FFFFFF` for pristine clarity.
  - Alternating Bands & Soft Panels: `#F3F5FF` (soft lavender-blue) provides contrast without heavy visual weight.
  - Borders & Delimiters: `#E2E8F0` for structural containers; `#F5F6FA` for soft dividers.
- **Constraint**: Green is strictly prohibited as a dominant color. Success states use muted royal indigo paired with monochrome check icons or neutral status markers.

## Typography

Typography prioritizes pristine rendering of complex Vietnamese tone marks and diacritics without line-clipping or irregular vertical tracking.

- **Primary Typeface**: `Be Vietnam Pro` serves as both display and body font. Its generous counter-forms, precise accent positioning, and contemporary neo-grotesque architecture prevent visual clutter in Vietnamese text while projecting corporate authority.
- **Secondary Typeface**: `Inter` is reserved for condensed badges, metric labels, tabular numbers, and micro-copy.
- **Rhythm & Rules**:
  - Vietnamese copy naturally runs 15-25% longer than English equivalents; headlines utilize generous line-height ratios (minimum 1.25 for display, 1.4 for subheads) to prevent tone marks from colliding with uppercase descenders or ascenders.
  - Section title pill badges always enforce uppercase tracking (`label-caps`) with 0.06em spacing for editorial polish.

## Layout & Spacing

The layout is built on an adaptable 12-column grid anchored by an 8pt base spacing rhythm, scaling smoothly across three key viewports:

- **Desktop (1280px+)**: 12 columns, max content container `1200px`, centered. Gutters set to `24px` (`1.5rem`), outer padding to `32px` (`2rem`).
- **Tablet (768px - 1023px)**: 8 columns, fluid width with minimum `24px` margins.
- **Mobile (< 768px)**: 4 columns, `16px` gutters, `20px` margins. Layout reflows complex step grids and pricing matrix tables into vertically stacked step cards or horizontal snap-carousels.

### Layout Principles
- **Alternating Cadence**: Clean pure white (`#FFFFFF`) primary sections alternate with soft tinted panels (`#F3F5FF`) to create clear topical divisions without harsh horizontal rules.
- **Safe Area Anchoring**: On mobile devices, pages integrate a permanent bottom padding (`88px`) to prevent content from falling behind the fixed mobile consultation bar.

## Elevation & Depth

Visual hierarchy uses architectural surface layering and refined ambient shadows tinted with the primary hue, avoiding neutral grey washouts.

### Layer Hierarchy
1. **Canvas Level (0dp)**: Neutral `#FFFFFF` base canvas and `#F3F5FF` section planes. Zero elevation.
2. **Surface Level 1 (Card & Container)**: Crisp white cards resting on `#F3F5FF` backdrops or bordered by `#E2E8F0` on white backdrops.
   - *Shadow*: `0px 2px 8px -2px rgba(48, 53, 154, 0.05), 0px 1px 3px 0px rgba(0, 0, 0, 0.03)`
   - *Border*: 1px solid `#E2E8F0`
3. **Surface Level 2 (Interactive Cards & Popovers)**: Hovered service cards, consultation forms, and flyout menus.
   - *Shadow*: `0px 12px 24px -6px rgba(48, 53, 154, 0.08), 0px 4px 8px -2px rgba(48, 53, 154, 0.03)`
   - *Border*: 1px solid `#454BC0` (applied smoothly on hover)
4. **Surface Level 3 (Sticky Action Elements)**: Mobile bottom action bar, floating hotline buttons, and modal dialogs.
   - *Shadow*: `0px -4px 16px 0px rgba(37, 40, 61, 0.06), 0px 8px 32px 0px rgba(48, 53, 154, 0.12)`
   - *Backdrop*: `backdrop-filter: blur(12px)` when translucent, combined with a `rgba(255, 255, 255, 0.95)` fill.

## Shapes

The design system adopts a balanced geometry (`roundedness: 2`) that balances legal professionalism with modern consumer accessibility:

- **Cards & Primary Modules**: `16px` border-radius (`rounded-xl` in this tier). Softens large document matrices and qualification assessment cards.
- **Secondary Containers & Inner Cells**: `12px` border-radius (`rounded-lg`). Applied to inner step cards, form groupings, and nested review boxes.
- **Inputs & Standard Controls**: `8px` to `10px` border-radius. Preserves clear field boundaries for data entry.
- **Badges, Status Chips & Floating Action Triggers**: 9999px (full pill). Highlights status verification and phone actions.

## Components

### Buttons
- **Primary CTA**: Background `#30359A`, text `#FFFFFF`, radius `10px`, padding `14px 28px`. Hover: `#454BC0` with a subtle `translateY(-1px)` shift. Active: `#242878`. Focus ring: 3px `#454BC0` at 30% opacity.
- **Secondary (Outlined)**: Background transparent, border `1.5px solid #30359A`, text `#30359A`. Hover: background `#F3F5FF`.
- **Accent Action**: Background `#ED1B36`, text `#FFFFFF`. Reserved exclusively for urgent consultation triggers ("Đăng ký thẩm định hồ sơ khẩn"). Hover: `#D6142E`.

### Cards & Content Modules
- **Service Cards (Visa Categories: C-3-9, D-2, E-7, F-6)**: Base `#FFFFFF`, border `1px solid #E2E8F0`, corner radius `16px`, padding `24px`. Include an icon well using `#F3F5FF` with a `#454BC0` icon fill.
- **FAQ Accordion**: Inactive state features `#F3F5FF` background with flush hidden borders. Active state features white background, `1px solid #30359A`, and smooth height expansion.

### Chips & Badges
- **Category Badge**: Pill-shaped, background `#F3F5FF`, text `#30359A`, border `1px solid rgba(69, 75, 192, 0.2)`.
- **Urgent / Brand Red Badge**: Pill-shaped, background `rgba(237, 27, 54, 0.08)`, text `#ED1B36`, border `1px solid rgba(237, 27, 54, 0.2)`.

### Form Elements & Eligibility Evaluator
- **Input Fields**: Height `48px`, background `#FFFFFF`, border `1.5px solid #E2E8F0`, border-radius `8px`, font size `15px`, placeholder text `#94A3B8`. Focus state shifts border to `#454BC0` with zero layout jump.
- **Checkboxes & Radios**: Custom custom-styled squares/circles with `2px solid #CBD5E1`. Checked state: background `#30359A`, border `#30359A`, white check glyph.

### Specialized Consultation Elements
- **Roadmap / Timeline Vector**: Connecting nodes utilizing `#30359A` for completed milestones, `#454BC0` with a pulsing ring for the current active phase, and `#E2E8F0` for future steps.
- **Mobile Sticky Action Bar**: Fixed bottom bar (`height: 72px`), background `#FFFFFF` with top border `1px solid #E2E8F0`. Features a 2-column layout: Direct Zalo/Call secondary button alongside a high-contrast "Nhận tư vấn ngay" primary CTA button.