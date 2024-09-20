# Styling Guide for Household Management App

This styling guide outlines the visual and aesthetic principles for the Household Management App. It ensures a modern, accessible, and harmonious user experience tailored to foster community and provide social structure among household members.

## Table of Contents
- [Color Palette](#color-palette)
- [Typography](#typography)
- [Spacing and Layout](#spacing-and-layout)
- [Component Styles](#component-styles)
  - [Buttons](#buttons)
  - [Forms and Inputs](#forms-and-inputs)
  - [Cards](#cards)
- [Accessibility Considerations](#accessibility-considerations)
- [Responsive Design](#responsive-design)
- [Tailwind CSS Enhancements](#tailwind-css-enhancements)
- [Global CSS Improvements](#global-css-improvements)

---

## Color Palette

### Primary Colors
- Primary Light: `#8ECAE6` – Soft Blue for backgrounds and highlights.
- Primary Default: `#219EBC` – Medium Blue for interactive elements.
- Primary Dark: `#023047` – Dark Blue for text and primary actions.

### Secondary Colors
- Secondary Light: `#B8E0D2` – Soft Green for backgrounds and highlights.
- Secondary Default: `#95D5B2` – Medium Green for interactive elements.
- Secondary Dark: `#74C69D` – Dark Green for text and secondary actions.

### Accent Colors
- Accent Light: `#FFD166` – Light Gold for highlights and notifications.
- Accent Default: `#EEB62B` – Medium Gold for calls to action.
- Accent Dark: `#CB9D06` – Dark Gold for active states.

### Neutral Colors
- Background Light: `#F8F9FA` – Light background for general areas.
- Background Dark: `#212529` – Dark background for contrast sections.
- Text Primary: `#343A40` – Main text color ensuring readability.
- Text Secondary: `#6C757D` – Secondary text for less prominent information.

### Accessibility Enhancements
- Ensure all color combinations meet WCAG AA contrast requirements.
- Utilize tools like Contrast Checker to validate color pairs.
- Incorporate patterns or textures in addition to color to convey information, aiding colorblind users.

## Typography

### Font Families
- Sans-Serif: `'Lato', sans-serif` – Used for body text to ensure readability.
- Serif: `'Playfair Display', serif` – Employed for headings to add a touch of elegance and distinction.

### Font Sizes
Maintain a consistent typographic scale to ensure visual hierarchy and readability:
- H1: 2.25rem (36px)
- H2: 1.875rem (30px)
- H3: 1.5rem (24px)
- H4: 1.25rem (20px)
- H5: 1rem (16px)
- H6: 0.875rem (14px)
- Body: 1rem (16px)
- Small: 0.875rem (14px)
- Extra Small: 0.75rem (12px)

### Line Heights
Consistent line heights enhance readability:
- Headings: Slightly larger line heights for airy spacing.
- Body Text: 1.5rem (24px) for comfortable reading.

## Spacing and Layout

### Spacing Scale
Adopt a modular spacing system to maintain consistency:
- Spacing-1: 4px
- Spacing-2: 8px
- Spacing-3: 12px
- Spacing-4: 16px
- Spacing-5: 20px
- Spacing-6: 24px
- Spacing-8: 32px
- Spacing-10: 40px
- Spacing-12: 48px

### Layout Principles
- Grid System: Utilize a responsive grid system to organize content efficiently.
- Whitespace: Adequate whitespace prevents clutter and enhances focus on essential elements.
- Alignment: Consistent alignment ensures a cohesive and orderly interface.

## Component Styles

### Buttons
Buttons are primary interactive elements. Ensure they are easily identifiable and provide clear affordances.

#### Primary Button
- Background: `bg-primary`
- Text Color: `text-white`
- Hover State: `hover:bg-primary-dark`
- Padding: `px-4 py-2`
- Border Radius: `rounded-md`
- Shadow: `shadow-sm`

#### Secondary Button
- Background: `bg-secondary`
- Text Color: `text-text-primary`
- Hover State: `hover:bg-secondary-dark`
- Padding: `px-4 py-2`
- Border Radius: `rounded-md`
- Shadow: `shadow-sm`

#### Accent Button
- Background: `bg-accent`
- Text Color: `text-text-primary`
- Hover State: `hover:bg-accent-dark`
- Padding: `px-4 py-2`
- Border Radius: `rounded-md`
- Shadow: `shadow-sm`

### Forms and Inputs
Ensure forms are user-friendly and accessible.

#### Input Fields:
- Border: `border border-neutral-300`
- Padding: `px-3 py-2`
- Border Radius: `rounded-md`
- Focus State: `focus:outline-none focus:ring-2 focus:ring-primary`
- Background: `bg-white`

#### Labels:
- Font Weight: `font-semibold`
- Margin Bottom: `mb-1`

### Cards
Cards encapsulate related information, providing a clear separation of content.
- Background: `bg-white`
- Border: `border border-neutral-200`
- Shadow: `shadow-md`
- Padding: `p-6`
- Border Radius: `rounded-lg`

## Accessibility Considerations
- Color Contrast: Ensure all text and interactive elements meet minimum contrast ratios.
- Keyboard Navigation: All interactive elements should be accessible via keyboard.
- Aria Labels: Use ARIA attributes to enhance screen reader compatibility.
- Responsive Text: Allow users to adjust text sizes without breaking the layout.

## Responsive Design
- Mobile-First Approach: Design primarily for mobile devices and enhance for larger screens.
- Breakpoints: Utilize Tailwind's default breakpoints (sm, md, lg, xl, 2xl) to adjust layouts.
- Flexibility: Ensure components resize and rearrange gracefully across different screen sizes.