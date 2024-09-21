# AI Reference for Household Management App

## Table of Contents
1. [Full Plan](#full-plan)
   - [User Stories](#user-stories)
     - [1. Messaging and Collaboration](#1-messaging-and-collaboration)
     - [2. Shared Finances Management](#2-shared-finances-management)
     - [3. Chore Management with Task Checklists](#3-chore-management-with-task-checklists)
     - [4. Shared Calendar and Rotating Chores](#4-shared-calendar-and-rotating-chores)
     - [5. Improvements and Additional Features](#5-improvements-and-additional-features)
   - [Features Prioritization](#features-prioritization)
     - [Must-Have Features (MVP)](#must-have-features-mvp)
     - [Operational Constraints](#operational-constraints)
     - [Environmental Constraints](#environmental-constraints)
   - [Potential Improvements](#potential-improvements)
2. [Frontend Implementation Plan](#frontend-implementation-plan)
   - [Overview](#overview)
   - [Naming Conventions](#naming-conventions-1)
   - [UI Components Mapping and API Consumption Plan](#ui-components-mapping-and-api-consumption-plan)
     - [Common Components](#common-components)
     - [Layout Components](#layout-components)
3. [Naming Conventions](#naming-conventions-2)
   - [General Principles](#general-principles)
   - [Case Usage](#case-usage)
   - [Frontend Naming Conventions](#frontend-naming-conventions)
   - [Backend Naming Conventions](#backend-naming-conventions)
   - [Additional Naming Rules](#additional-naming-rules)
   - [Additional Guidelines](#additional-guidelines)
4. [Cross Reference](#cross-reference)
5. [Traceability Matrix](#traceability-matrix)
6. [Styling Guide](#styling-guide-for-household-management-app)
   - [Color Palette](#color-palette)
   - [Typography](#typography)
   - [Spacing and Layout](#spacing-and-layout)
   - [Component Styles](#component-styles)
   - [Accessibility Considerations](#accessibility-considerations)
   - [Responsive Design](#responsive-design)
   - [Tailwind CSS Enhancements](#tailwind-css-enhancements)
   - [Global CSS Improvements](#global-css-improvements)
7. [Project Structure](#project-structure)
8. [Database Schema](#database-schema)
9. [Backend Types](#backend-types)
10. [Backend Implementation Plan](#backend-implementation-plan)

---

## Full Plan

### User Stories

#### 1. Messaging and Collaboration
- **As a household member, I want to participate in threaded discussions on a message board so that our conversations stay organized and relevant.**
- **As a user, I want to send and receive messages in real-time so that communication is immediate and efficient.**
- **As a user, I want to attach files, images, and links to messages so that I can share important documents and resources with my housemates.**
- **As a user, I want to mention specific roommates in messages so that they receive direct notifications and can easily respond to relevant conversations.**
- **As a user, I want to react to messages with emojis so that I can express my feelings or provide quick feedback without sending additional messages.**

#### 2. Shared Finances Management
- **As a household member, I want to track shared expenses so that we know who owes whom money.**
- **As a user, I want to split common household expenses (e.g., toilet paper) among roommates so that costs are shared fairly.**
- **As a user, I want to view a summary of household expenses and debts so that I can keep track of our financial status.**
- **As a user, I want to receive notifications when new expenses are added or when payments are due so that I stay informed.**
- **As a user, I want to categorize expenses with tags so that I can better organize and analyze our spending patterns.**
- **As a user, I want to settle debts directly within the app so that financial transactions are streamlined and transparent.**
- **As a user, I want to upload receipts for expenses so that we have proof and better tracking of our expenditures.**

#### 3. Chore Management with Task Checklists
- **As a household member, I want to create chores with detailed task checklists so that complex chores are broken down into manageable steps.**
- **As a user, I want to assign chores to specific roommates or to all roommates so that responsibilities are clear.**
- **As a user, I want to track the progress of chores and their subtasks so that everyone knows what has been completed.**
- **As a user, I want to set due dates and receive reminders for chores so that tasks are completed on time.**
- **As a household member, I want to swap chores with other roommates so that we can balance workloads and accommodate individual schedules.**
- **As a user, I want to save chore templates so that we can easily create recurring or standard chores without duplicating effort.**

#### 4. Shared Calendar and Rotating Chores
- **As a user, I want to view and add events to a shared household calendar so that everyone's schedules are coordinated.**
- **As a household member, I want rotating chores to be automatically scheduled on the calendar so that chore assignments are fair and systematic.**
- **As a user, I want to sync the household calendar with my personal calendar (e.g., Google Calendar) so that I have all events in one place.**
- **As a user, I want to receive notifications for upcoming events and chores so that I don't miss important dates.**

### Features Prioritization

#### Must-Have Features (MVP)

##### Messaging and Collaboration
- Threaded message board for organized discussions.
- Real-time messaging capabilities.
- Ability to attach files and images to messages.
- Notifications for new messages and replies.

##### Shared Finances Management
- Track and split shared expenses among roommates.
- Record debts and manage who owes whom.
- Expense summaries and history.
- Notifications for new expenses and payment reminders.

##### Chore Management with Task Checklists
- Create chores with detailed task checklists.
- Assign chores to roommates individually or collectively.
- Track progress on chores and subtasks.

... (Lines omitted for brevity) ...

#### Accessibility Standards
- Adhere to WCAG 2.1 Level AA guidelines for accessibility.
- Ensure keyboard navigability and screen reader compatibility.

### Operational Constraints

#### Deployment and DevOps
- Use Docker for containerization of applications.
- Set up CI/CD pipelines for automated testing and deployment.
- Environment configurations managed through secure methods (e.g., environment variables, secrets management).

#### Monitoring and Logging
- Implement monitoring tools (e.g., Prometheus, Grafana).
- Set up centralized logging with tools like ELK Stack.
- Use error tracking services (e.g., Sentry) for real-time alerts.

### Environmental Constraints

#### Network
- Application should handle varying network speeds gracefully.
- Implement offline-friendly features where possible (e.g., local caching).

#### Device Compatibility
- Ensure compatibility with major browsers: Chrome, Firefox, Safari, Edge.
- Responsive design for different screen sizes and resolutions.

#### Availability
- Target uptime of 99.9% excluding scheduled maintenance.
- Plan for redundancy and failover mechanisms.

### Potential Improvements

- **Enhanced Chore Management**:
  - **Chore Swapping**: Allow roommates to swap chores among themselves with approval, adding flexibility.
  - **Chore Templates**: Save chore checklists as templates for reuse.

- **Advanced Financial Features**:
  - **Expense Categorization**: Tag expenses for better tracking and analytics.
  - **Debt Settlement Options**: Provide options to settle debts directly through the app via integrations.
  - **Receipt Uploads**: Allow users to upload photos of receipts for transparency.

- **Improved Messaging**:
  - **Mentions and Notifications**: Use @username to mention a roommate, triggering a notification.
  - **Message Reactions**: Add the ability to react to messages with emojis.

- **Shared Shopping List**:
  - **Collaborative Lists**: Add a shared shopping list feature for household essentials.
  - **Item Assignments**: Assign items to roommates for purchasing.

- **User Experience Enhancements**:
  - **Onboarding Tutorial**: Provide a guided tutorial for new users to understand app features.
  - **Feedback Mechanism**: Allow users to submit feedback or report issues directly within the app.

- **Third-Party Integrations**:
  - **Task Management Integration**: Optionally integrate with apps like Trello or Asana for advanced task management.
  - **Calendar Integrations**: Support syncing with Apple Calendar and Outlook in addition to Google Calendar.

---

## Frontend Implementation Plan

### Overview
- **Framework:** Next.js (v13+) with React and TypeScript
- **State Management:** Context API with Custom Hooks and Redux Toolkit for complex state scenarios
- **Styling:** Tailwind CSS
- **Real-Time Communication:** Socket.IO
- **Focus:** Accessibility, responsiveness, and user-centric design

---

### Naming Conventions
Following the standards from `naming_conventions.md`:

- **Components:** PascalCase with `.tsx` extension
  - Example: `ChoreItem.tsx`
- **Hooks:** camelCase starting with `use` and `.ts` extension
  - Example: `useChores.ts`
- **Services:** camelCase with `.ts` extension
  - Example: `apiClient.ts`
- **Contexts:** PascalCase with `.tsx` extension
  - Example: `AuthContext.tsx`
- **Utilities:** camelCase with `.ts` extension
  - Example: `helpers.ts`
- **Constants:** UPPER_SNAKE_CASE
  - Example: `MAX_CHORE_COUNT`
- **WebSocket Events:** snake_case
  - Example: `message_new`, `chore_update`

---

### UI Components Mapping and API Consumption Plan

#### Common Components

##### Header (`components/layout/Header.tsx`)
- **Purpose:** Navigation and user profile options
- **API Consumption:** Uses `GET /api/users/me` to display user info
- **Error Handling:**
  - Displays an error message if user information fails to load.
  - Utilizes `ErrorBoundary` to catch and handle unexpected errors within the component.

##### Sidebar (`components/layout/Sidebar.tsx`)
- **Purpose:** Provides navigation links to different sections of the app
- **API Consumption:** None
- **Error Handling:**
  - Minimal error handling as there are no API interactions.

##### Footer (`components/layout/Footer.tsx`)
- **Purpose:** Links to important pages and legal information
- **API Consumption:** None
- **Error Handling:**
  - Minimal error handling as there are no API interactions.

##### Button (`components/common/Button.tsx`)
- **Purpose:** Reusable button component
- **API Consumption:** None
- **Error Handling:**
  - Props validation to ensure correct usage.
  - Gracefully handles any unexpected rendering issues using `ErrorBoundary`.

##### Input (`components/common/Input.tsx`)
- **Purpose:** Reusable input component for forms
- **API Consumption:** None
- **Error Handling:**
  - Validates input types and formats.
  - Displays error messages based on validation results.

##### Modal (`components/common/Modal.tsx`)
- **Purpose:** Reusable modal dialog component
- **API Consumption:** None
- **Error Handling:**
  - Ensures proper opening and closing states.
  - Handles unexpected content gracefully.

... (Lines omitted for brevity) ...

---

## Naming Conventions

### General Principles

1. **Clarity and Descriptiveness:** Names should clearly describe the purpose or functionality of the entity.
2. **Consistency:** Follow the same naming patterns throughout the project to avoid confusion.
3. **Avoid Abbreviations:** Use full words unless the abbreviation is widely recognized (e.g., API, ID).

### Case Usage

- **PascalCase:** Used for components, classes, and interfaces.
  - Example: `ChoreItem`, `AuthController`
- **camelCase:** Used for variables, functions, and object properties.
  - Example: `userPreferences`, `handleSubmit()`
- **kebab-case:** Used for file and folder names.
  - Example: `chore-item.tsx`, `user-profile/`
- **UPPER_SNAKE_CASE:** Used for constants.
  - Example: `MAX_CHORE_COUNT`, `DEFAULT_TIMEOUT`

### Frontend Naming Conventions

#### File Names

1. **Components:** Use PascalCase with `.tsx` extension.
   - Example: `ChoreItem.tsx`
2. **Hooks:** Use camelCase starting with "use" and `.ts` extension.
   - Example: `useChores.ts`
3. **Services:** Use camelCase with `.ts` extension.
   - Example: `choreService.ts`
4. **Contexts:** Use PascalCase with `.tsx` extension.
   - Example: `AuthContext.tsx`
5. **Utilities:** Use camelCase with `.ts` extension.
   - Example: `logger.ts`
6. **Types:** Use PascalCase with `.ts` extension.
   - Example: `UserType.ts`

### Backend Naming Conventions

#### File Names

1. **Controllers:** Use PascalCase ending with `Controller.ts`.
   - Example: `AuthController.ts`
2. **Services:** Use camelCase ending with `Service.ts`.
   - Example: `choreService.ts`
3. **Models:** Defined by Prisma schema, use PascalCase.
   - Example: `Chore`, `User`
4. **Routes:** Use camelCase with `.ts` extension.
   - Example: `auth.ts`, `chores.ts`
5. **Middlewares:** Use camelCase ending with `Middleware.ts`.
   - Example: `authMiddleware.ts`
6. **Utilities:** Use camelCase with `.ts` extension.
   - Example: `logger.ts`, `tokenUtils.ts`
7. **Types:** Use PascalCase with `.ts` extension.
   - Example: `RequestType.ts`

### Additional Naming Rules

4. **WebSocket Events:**
   - Use `snake_case` for event names to differentiate from REST API endpoints.
     - Example: `chore_update`, `household_update`
  
5. **Environment Variables:**
   - Include variables specific to Socket.IO connections.
     - Example: `SOCKET_IO_SECRET`

### Additional Guidelines

#### Frontend and Backend Shared Conventions

1. **API Endpoints:**
   - Use plural nouns for resource names.
     - Example: `/api/chores`, `/api/users`
   - Nest related routes appropriately.
     - Example: `/api/households/:householdId/chores`

2. **Environment Variables:**
   - Use `UPPER_SNAKE_CASE`.
     - Example: `JWT_SECRET`, `DATABASE_URL`

3. **Constants:**
   - Use `UPPER_SNAKE_CASE`.
     - Example: `DEFAULT_TIMEOUT = 5000`

#### Naming Specific Entities

1. **Pages (Frontend):**
   - Use lowercase and kebab-case.
     - Example: `pages/chores/[id]/feedback.tsx`

2. **API Routes (Backend):**
   - Use kebab-case matching frontend routes.
     - Example: `/api/chores/:choreId/feedback`

3. **Database Models (Prisma):**
   - Use singular PascalCase.
     - Example: `Chore`, `User`

4. **Prisma Files:**
   - Schema file: `schema.prisma`
   - Migration files: Timestamped with descriptive names.
     - Example: `20231010_initial_migration/`

---

## Cross Reference

| Frontend Component           | Backend API Endpoint(s)                                                        | Backend Service              |
|------------------------------|--------------------------------------------------------------------------------|------------------------------|
| Header.tsx                   | GET /api/users/me                                                               | authService.ts               |
| HouseholdSelector.tsx        | GET /api/households                                                             | householdService.ts          |
| ChoreList.tsx                | GET /api/households/:householdId/chores                                         | choreService.ts              |
|                              | (Real-Time) chore_update event via Socket.IO                                    | choreService.ts              |
| ChoreItem.tsx                | PATCH /api/households/:householdId/chores/:choreId                              | choreService.ts              |
|                              | DELETE /api/households/:householdId/chores/:choreId                             | choreService.ts              |
| ChoreForm.tsx                | POST /api/households/:householdId/chores                                         | choreService.ts              |
| MessageList.tsx              | GET /api/households/:householdId/messages                                        | messageService.ts            |
|                              | (Real-Time) message_new, message_reply events via Socket.IO                      | messageService.ts            |
| MessageItem.tsx              | GET /api/households/:householdId/messages/:messageId/threads                    | messageService.ts            |
| MessageForm.tsx              | POST /api/households/:householdId/messages                                        | messageService.ts            |
|                              | POST /api/households/:householdId/messages/:messageId/threads                    | messageService.ts            |
| ExpenseList.tsx              | GET /api/households/:householdId/expenses                                         | sharedExpenseService.ts      |
|                              | (Real-Time) expense_new event via Socket.IO                                      | sharedExpenseService.ts      |
| ExpenseForm.tsx              | POST /api/households/:householdId/expenses                                        | sharedExpenseService.ts      |
| SharedCalendar.tsx           | GET /api/households/:householdId/events                                           | eventService.ts              |
|                              | (Real-Time) event_new, event_update events via Socket.IO                          | eventService.ts              |
| CalendarIntegrationForm.tsx   | POST /api/calendar/integrations                                                   | calendarIntegrationService.ts|
| NotificationCenter.tsx        | GET /api/notifications                                                            | notificationService.ts       |
|                              | (Real-Time) notification_new event via Socket.IO                                 | notificationService.ts       |
| AuthContext.tsx               | POST /api/auth/refresh                                                            | authService.ts               |
|                              | POST /api/auth/logout                                                             | authService.ts               |
| HouseholdMemberList.tsx       | GET /api/households/:householdId/members                                         | householdService.ts          |
|                              | DELETE /api/households/:householdId/members/:memberId                            | householdService.ts          |
| InviteUserButton.tsx          | POST /api/households/:householdId/invitations                                     | householdService.ts          |
| useChores.ts                  | - (Uses apiClient for chores API)                                                 | choreService.ts              |
|                              | - Subscribes to chore_update event via Socket.IO                                   |                              |
| useMessages.ts                | - (Uses apiClient for messages API)                                               | messageService.ts            |
|                              | - Subscribes to message_new, message_reply events via Socket.IO                     |                              |
| useExpenses.ts                | - (Uses apiClient for expenses API)                                               | sharedExpenseService.ts      |
|                              | - Subscribes to expense_new event via Socket.IO                                     |                              |
| apiClient.ts                  | All API endpoints                                                                | Various backend services     |
| SocketContext.tsx             | Establishes WebSocket connection to the backend Socket.IO server                   |                              |

---

## Traceability Matrix

| User Story                                                                                                                                                                           | Frontend Components                                    | Backend Services              | API Endpoints                                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| As a household member, I want to participate in threaded discussions on a message board so that our conversations stay organized and relevant.                                        | MessageList.tsx, MessageItem.tsx, MessageForm.tsx     | messageService.ts            | GET /api/households/:householdId/messages<br>POST /api/households/:householdId/messages<br>GET /api/households/:householdId/messages/:messageId/threads<br>POST /api/households/:householdId/messages/:messageId/threads |
| As a user, I want to send and receive messages in real-time so that communication is immediate and efficient.                                                                           | MessageList.tsx, useMessages.ts                       | messageService.ts            | WebSocket Events: message_new, message_reply                                                                                                                                          |
| As a user, I want to attach files, images, and links to messages so that I can share important documents and resources with my housemates.                                             | MessageForm.tsx                                       | messageService.ts            | POST /api/messages/:messageId/attachments                                                                                                                                              |
| As a user, I want to mention specific roommates in messages so that they receive direct notifications and can easily respond to relevant conversations.                                | MessageForm.tsx, MessageItem.tsx                      | notificationService.ts       | Enhancement: Implement parsing of @username and trigger notification_new event                                                                                                         |
| As a user, I want to react to messages with emojis so that I can express my feelings or provide quick feedback without sending additional messages.                                       | MessageItem.tsx                                       | messageService.ts            | Enhancement: POST /api/messages/:messageId/reactions                                                                                                                                  |
| As a household member, I want to track shared expenses so that we know who owes whom money.                                                                                             | ExpenseList.tsx, ExpenseItem.tsx                      | sharedExpenseService.ts      | GET /api/households/:householdId/expenses                                                                                                                                              |
| As a user, I want to split common household expenses among roommates so that costs are shared fairly.                                                                                  | ExpenseForm.tsx                                       | sharedExpenseService.ts      | POST /api/households/:householdId/expenses                                                                                                                                             |
| As a user, I want to view a summary of household expenses and debts so that I can keep track of our financial status.                                                                    | ExpenseList.tsx, DashboardSummary.tsx                 | sharedExpenseService.ts      | GET /api/households/:householdId/expenses                                                                                                                                              |
| As a user, I want to receive notifications when new expenses are added or when payments are due so that I stay informed.                                                              | NotificationCenter.tsx, useNotifications.ts            | notificationService.ts       | GET /api/notifications<br>WebSocket Event: notification_new                                                                                                                            |
| As a user, I want to create chores with detailed task checklists so that complex chores are broken down into manageable steps.                                                           | ChoreForm.tsx, ChoreItem.tsx                           | choreService.ts              | POST /api/households/:householdId/chores                                                                                                                                               |
| As a user, I want to assign chores to specific roommates or to all roommates so that responsibilities are clear.                                                                       | ChoreForm.tsx                                          | choreService.ts              | POST /api/households/:householdId/chores                                                                                                                                               |
| As a user, I want to track the progress of chores and their subtasks so that everyone knows what has been completed.                                                                     | ChoreList.tsx, ChoreItem.tsx                           | choreService.ts              | GET /api/households/:householdId/chores<br>PATCH /api/households/:householdId/chores/:choreId                                                                                            |
| As a user, I want to set due dates and receive reminders for chores so that tasks are completed on time.                                                                                | ChoreForm.tsx, NotificationCenter.tsx                  | choreService.ts, notificationService.ts | POST /api/households/:householdId/chores<br>GET /api/notifications<br>WebSocket Event: notification_new                                                                                    |
| As a user, I want to view and add events to a shared household calendar so that everyone's schedules are coordinated.                                                                    | SharedCalendar.tsx                                     | eventService.ts              | GET /api/households/:householdId/events<br>POST /api/households/:householdId/events                                                                                                     |
| As a household member, I want rotating chores to be automatically scheduled on the calendar so that chore assignments are fair and systematic.                                            | SharedCalendar.tsx, ChoreList.tsx                      | eventService.ts, choreService.ts | Automatic scheduling logic within services                                                                                                                                               |
| As a user, I want to sync the household calendar with my personal calendar so that I have all events in one place.                                                                       | CalendarIntegrationForm.tsx                            | calendarIntegrationService.ts | POST /api/calendar/integrations                                                                                                                                                         |
| As a user, I want to receive notifications for upcoming events and chores so that I don't miss important dates.                                                                        | NotificationCenter.tsx, SharedCalendar.tsx              | notificationService.ts       | GET /api/notifications<br>WebSocket Event: notification_new                                                                                                                            |

---

## Styling Guide for Household Management App

This styling guide outlines the visual and aesthetic principles for the Household Management App. It ensures a modern, accessible, and harmonious user experience tailored to foster community and provide social structure among household members.

### Table of Contents
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

### Color Palette

#### Primary Colors
- **Primary Light:** `#8ECAE6` – Soft Blue for backgrounds and highlights.
- **Primary Default:** `#219EBC` – Medium Blue for interactive elements.
- **Primary Dark:** `#023047` – Dark Blue for text and primary actions.

#### Secondary Colors
- **Secondary Light:** `#B8E0D2` – Soft Green for backgrounds and highlights.
- **Secondary Default:** `#95D5B2` – Medium Green for interactive elements.
- **Secondary Dark:** `#74C69D` – Dark Green for text and secondary actions.

#### Accent Colors
- **Accent Light:** `#FFD166` – Light Gold for highlights and notifications.
- **Accent Default:** `#EEB62B` – Medium Gold for calls to action.
- **Accent Dark:** `#CB9D06` – Dark Gold for active states.

#### Neutral Colors
- **Background Light:** `#F8F9FA` – Light background for general areas.
- **Background Dark:** `#212529` – Dark background for contrast sections.
- **Text Primary:** `#343A40` – Main text color ensuring readability.
- **Text Secondary:** `#6C757D` – Secondary text for less prominent information.

#### Accessibility Enhancements
- Ensure all color combinations meet WCAG AA contrast requirements.
- Utilize tools like Contrast Checker to validate color pairs.
- Incorporate patterns or textures in addition to color to convey information, aiding colorblind users.

### Typography

#### Font Families
- **Sans-Serif:** `'Lato', sans-serif` – Used for body text to ensure readability.
- **Serif:** `'Playfair Display', serif` – Employed for headings to add a touch of elegance and distinction.

#### Font Sizes
Maintain a consistent typographic scale to ensure visual hierarchy and readability:
- **H1:** 2.25rem (36px)
- **H2:** 1.875rem (30px)
- **H3:** 1.5rem (24px)
- **H4:** 1.25rem (20px)
- **H5:** 1rem (16px)
- **H6:** 0.875rem (14px)
- **Body:** 1rem (16px)
- **Small:** 0.875rem (14px)
- **Extra Small:** 0.75rem (12px)

#### Line Heights
Consistent line heights enhance readability:
- **Headings:** Slightly larger line heights for airy spacing.
- **Body Text:** 1.5rem (24px) for comfortable reading.

### Spacing and Layout

#### Spacing Scale
Adopt a modular spacing system to maintain consistency:
- **Spacing-1:** 4px
- **Spacing-2:** 8px
- **Spacing-3:** 12px
- **Spacing-4:** 16px
- **Spacing-5:** 20px
- **Spacing-6:** 24px
- **Spacing-8:** 32px
- **Spacing-10:** 40px
- **Spacing-12:** 48px

#### Layout Principles
- **Grid System:** Utilize a responsive grid system to organize content efficiently.
- **Whitespace:** Adequate whitespace prevents clutter and enhances focus on essential elements.
- **Alignment:** Consistent alignment ensures a cohesive and orderly interface.

### Component Styles

#### Buttons
Buttons are primary interactive elements. Ensure they are easily identifiable and provide clear affordances.

##### Primary Button
- **Background:** `bg-primary`
- **Text Color:** `text-white`
- **Hover State:** `hover:bg-primary-dark`
- **Padding:** `px-4 py-2`
- **Border Radius:** `rounded-md`
- **Shadow:** `shadow-sm`

##### Secondary Button
- **Background:** `bg-secondary`
- **Text Color:** `text-text-primary`
- **Hover State:** `hover:bg-secondary-dark`
- **Padding:** `px-4 py-2`
- **Border Radius:** `rounded-md`
- **Shadow:** `shadow-sm`

##### Accent Button
- **Background:** `bg-accent`
- **Text Color:** `text-text-primary`
- **Hover State:** `hover:bg-accent-dark`
- **Padding:** `px-4 py-2`
- **Border Radius:** `rounded-md`
- **Shadow:** `shadow-sm`

#### Forms and Inputs
Ensure forms are user-friendly and accessible.

##### Input Fields:
- **Border:** `border border-neutral-300`
- **Padding:** `px-3 py-2`
- **Border Radius:** `rounded-md`
- **Focus State:** `focus:outline-none focus:ring-2 focus:ring-primary`
- **Background:** `bg-white`

##### Labels:
- **Font Weight:** `font-semibold`
- **Margin Bottom:** `mb-1`

#### Cards
Cards encapsulate related information, providing a clear separation of content.
- **Background:** `bg-white`
- **Border:** `border border-neutral-200`
- **Shadow:** `shadow-md`
- **Padding:** `p-6`
- **Border Radius:** `rounded-lg`

### Accessibility Considerations
- **Color Contrast:** Ensure all text and interactive elements meet minimum contrast ratios.
- **Keyboard Navigation:** All interactive elements should be accessible via keyboard.
- **Aria Labels:** Use ARIA attributes to enhance screen reader compatibility.
- **Responsive Text:** Allow users to adjust text sizes without breaking the layout.

### Responsive Design
- **Mobile-First Approach:** Design primarily for mobile devices and enhance for larger screens.
- **Breakpoints:** Utilize Tailwind's default breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) to adjust layouts.
- **Flexibility:** Ensure components resize and rearrange gracefully across different screen sizes.

---

## Project Structure
```yaml:docs/structure.yml
choresApp:
  frontend:
    src:
      app:
        (auth):
          login:
            - page.tsx
          register:
            - page.tsx
          - layout.tsx
        dashboard:
          - page.tsx
          - layout.tsx
        messages:
          '[threadId]':
            - page.tsx
          - page.tsx
        finances:
          expenses:
            - page.tsx
          debts:
            - page.tsx
          - page.tsx
        chores:
          '[choreId]':
            - page.tsx
          - page.tsx
        calendar:
          - page.tsx
        settings:
          - page.tsx
        - layout.tsx
        - page.tsx
      components:
        common:
          - Button.tsx
          - Input.tsx
          - Modal.tsx
          - NotificationCenter.tsx
          - ErrorBoundary.tsx
          - LoadingSpinner.tsx
        layout:
          - Header.tsx
          - Sidebar.tsx
          - Footer.tsx
        messages:
          - MessageThread.tsx
          - MessageThreadList.tsx
          - MessageForm.tsx
          - MessageList.tsx
          - MessageItem.tsx
          - AttachmentUploader.tsx
        finances:
          - ExpenseForm.tsx
          - ExpenseList.tsx
          - DebtSummary.tsx
          - ExpenseItem.tsx
          - ReceiptUploader.tsx
        chores:
          - ChoreList.tsx
          - ChoreForm.tsx
          - ChoreItem.tsx
          - SubtaskList.tsx
        calendar:
          - CalendarView.tsx
          - SharedCalendar.tsx
          - EventForm.tsx
          - CalendarIntegrationForm.tsx
          - AutomaticScheduler.tsx
        dashboard:
          - DashboardSummary.tsx
          - QuickActionPanel.tsx
          - RecentActivityFeed.tsx
          - UpcomingChores.tsx
        household:
          - HouseholdSelector.tsx
          - HouseholdMemberList.tsx
          - InviteUserButton.tsx
      hooks:
        - useAuth.ts
        - useMessages.ts
        - useFinances.ts
        - useChores.ts
        - useExpenses.ts
        - useNotifications.ts
        - useCalendar.ts
      contexts:
        - AuthContext.tsx
        - ThemeContext.tsx
        - SocketContext.tsx
      lib:
        - apiClient.ts
        - socketClient.ts
        - utils.ts
      styles:
        - globals.css
      types:
        - message.ts
        - expense.ts
        - chore.ts
        - notification.ts
        - api.ts
        - socket.ts
        - attachment.ts
        - event.ts
        - household.ts
        - subtask.ts
        - user.ts
        - oauth.ts
        - upload.ts
      store:
        slices:
          - authSlice.ts
          - messagesSlice.ts
          - financesSlice.ts
          - choresSlice.ts
          - calendarSlice.ts
          - notificationsSlice.ts
        store.ts
      test:
        testfiles...
  backend:
    src:
      controllers:
        - AuthController.ts
        - UserController.ts
        - HouseholdController.ts
        - MessageController.ts
        - ChoreController.ts
        - ExpenseController.ts
        - TransactionController.ts
        - EventController.ts
        - CalendarIntegrationController.ts
        - NotificationController.ts
        - SubtaskController.ts
      services:
        - authService.ts
        - userService.ts
        - householdService.ts
        - messageService.ts
        - choreService.ts
        - sharedExpenseService.ts
        - transactionService.ts
        - eventService.ts
        - calendarIntegrationService.ts
        - notificationService.ts
        - pushNotificationService.ts
        - subtaskService.ts
      routes:
        - auth-routes.ts
        - user-routes.ts
        - household-routes.ts
        - message-routes.ts
        - chore-routes.ts
        - expense-routes.ts
        - transaction-routes.ts
        - event-routes.ts
        - calendar-integration-routes.ts
        - notification-routes.ts
        - subtask-routes.ts
      middlewares:
        - authMiddleware.ts
        - rbacMiddleware.ts
        - rateLimitMiddleware.ts
        - errorHandler.ts
        - validateMiddleware.ts
        - socketAuthMiddleware.ts
      utils:
        - asyncHandler.ts
        - emailUtils.ts
        - fileUpload.ts
        - logger.ts
        - tokenUtils.ts
        - passwordUtils.ts
        - validationSchemas.ts
      sockets:
        - index.ts
      config:
        - database.ts
        - passport.ts
        - auth.ts
        - socket.ts
    prisma:
      - schema.prisma
    - package.json
    - tsconfig.json
    test:
      - testfiles...
  
  docs:
    - full_plan.md
    - frontend_implementation.md
    - backend_implementation.md
    - naming_conventions.md
    - cross_reference.md
    - traceability_matrix.md
    - styling_guide.md
    - structure.yml
    - ai_ref.md
  - docker-compose.yml
  - .gitignore
  - README.md



```
---
## Database Schema
```prisma:backend/prisma/schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

enum HouseholdRole {
  ADMIN
  MEMBER
}

enum ChoreStatus {
  PENDING
  IN_PROGRESS
  COMPLETED
}

enum SubtaskStatus {
  PENDING
  COMPLETED
}

enum TransactionStatus {
  PENDING
  COMPLETED
}

enum NotificationType {
  MESSAGE
  CHORE
  EXPENSE
  EVENT
  OTHER
}

enum Provider {
  GOOGLE
  FACEBOOK
  APPLE
}

model User {
  id               String              @id @default(uuid())
  email            String              @unique
  passwordHash     String?
  name             String
  profileImageURL  String?
  createdAt        DateTime            @default(now())
  updatedAt        DateTime            @updatedAt
  deviceTokens     String[]            @default([])

  households       HouseholdMember[]
  messages         Message[]
  threads          Thread[]
  assignedChores   Chore[]             @relation("UserAssignedChores")
  expensesPaid     Expense[]
  expenseSplits    ExpenseSplit[]
  transactionsFrom Transaction[]       @relation("TransactionsFrom")
  transactionsTo   Transaction[]       @relation("TransactionsTo")
  notifications    Notification[]
  oauthIntegrations OAuthIntegration[]
  eventsCreated    Event[]
}

model Household {
  id          String            @id @default(uuid())
  name        String
  createdAt   DateTime          @default(now())
  updatedAt   DateTime          @updatedAt

  members     HouseholdMember[]
  messages    Message[]
  chores      Chore[]
  expenses    Expense[]
  events      Event[]
}

model HouseholdMember {
  id             String            @id @default(uuid())
  userId         String
  householdId    String
  role           HouseholdRole     @default(MEMBER)
  joinedAt       DateTime          @default(now())

  user           User              @relation(fields: [userId], references: [id])
  household      Household         @relation(fields: [householdId], references: [id])

  @@unique([userId, householdId])
}

model Message {
  id          String     @id @default(uuid())
  householdId String
  authorId    String
  content     String
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  household   Household  @relation(fields: [householdId], references: [id])
  author      User       @relation(fields: [authorId], references: [id])

  threads     Thread[]
  attachments Attachment[]
}

model Thread {
  id         String     @id @default(uuid())
  messageId  String
  authorId   String
  content    String
  createdAt  DateTime   @default(now())
  updatedAt  DateTime   @updatedAt

  message    Message    @relation(fields: [messageId], references: [id])
  author     User       @relation(fields: [authorId], references: [id])

  attachments Attachment[]
}

model Attachment {
  id          String     @id @default(uuid())
  messageId   String?
  threadId    String?
  url         String
  fileType    String
  createdAt   DateTime   @default(now())
  updatedAt   DateTime   @updatedAt

  message     Message?   @relation(fields: [messageId], references: [id])
  thread      Thread?    @relation(fields: [threadId], references: [id])

  @@index([messageId])
  @@index([threadId])
}

model Chore {
  id            String         @id @default(uuid())
  householdId   String
  title         String
  description   String?
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
  dueDate       DateTime?
  status        ChoreStatus    @default(PENDING)
  recurrence    String?
  priority      Int?
  eventId       String?        @unique

  household     Household      @relation(fields: [householdId], references: [id])
  subtasks      Subtask[]
  assignedUsers User[]         @relation("UserAssignedChores")
  event         Event?         @relation("ChoreEvent", fields: [eventId], references: [id])
}

model Subtask {
  id        String        @id @default(uuid())
  choreId   String
  title     String
  status    SubtaskStatus @default(PENDING)

  chore     Chore         @relation(fields: [choreId], references: [id])
}

model Expense {
  id            String         @id @default(uuid())
  householdId   String
  amount        Float
  description   String
  paidById      String
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt
  dueDate       DateTime?
  category      String?

  household     Household      @relation(fields: [householdId], references: [id])
  paidBy        User           @relation(fields: [paidById], references: [id])
  splits        ExpenseSplit[]
  transactions  Transaction[]
}

model ExpenseSplit {
  id           String     @id @default(uuid())
  expenseId    String
  userId       String
  amount       Float

  expense      Expense    @relation(fields: [expenseId], references: [id])
  user         User       @relation(fields: [userId], references: [id])

  @@unique([expenseId, userId])
}

model Transaction {
  id          String            @id @default(uuid())
  expenseId   String
  fromUserId  String
  toUserId    String
  amount      Float
  status      TransactionStatus @default(PENDING)
  createdAt   DateTime          @default(now())
  updatedAt   DateTime          @updatedAt

  expense     Expense           @relation(fields: [expenseId], references: [id])
  fromUser    User              @relation("TransactionsFrom", fields: [fromUserId], references: [id])
  toUser      User              @relation("TransactionsTo", fields: [toUserId], references: [id])
}

model Event {
  id            String       @id @default(uuid())
  householdId   String
  title         String
  description   String?
  startTime     DateTime
  endTime       DateTime
  createdById   String
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
  choreId       String?      @unique

  household     Household    @relation(fields: [householdId], references: [id])
  createdBy     User         @relation(fields: [createdById], references: [id])
  chore         Chore?       @relation("ChoreEvent")
}

model Notification {
  id          String            @id @default(uuid())
  userId      String
  type        NotificationType
  message     String
  isRead      Boolean           @default(false)
  createdAt   DateTime          @default(now())
  updatedAt   DateTime          @updatedAt

  user        User              @relation(fields: [userId], references: [id])

  @@index([userId])
}

model OAuthIntegration {
  id             String    @id @default(uuid())
  userId         String
  provider       Provider
  accessToken    String
  refreshToken   String?
  expiresAt      DateTime?

  user           User      @relation(fields: [userId], references: [id])

  @@unique([userId, provider])
}
```

## Backend Types
```typescript:backend/types/index.ts
import { Request } from 'express';
import {
  ChoreStatus,
  SubtaskStatus,
  NotificationType,
  TransactionStatus,
  Provider,
  User,
  Household,
  HouseholdMember,
  Message,
  Thread,
  Attachment,
  Chore,
  Subtask,
  Expense,
  Event,
  ExpenseSplit,
  Notification as PrismaNotification,
} from '@prisma/client';

// Enums
/**
 * Defines the OAuth providers supported for authentication.
 */
export enum OAuthProvider {
  GOOGLE = 'GOOGLE',
  FACEBOOK = 'FACEBOOK',
  APPLE = 'APPLE',
}

/**
 * Defines the roles a user can have within a household.
 */
export enum UserRole {
  ADMIN = 'ADMIN',
  MEMBER = 'MEMBER',
}

/**
 * Defines the possible statuses of a household.
 */
export enum HouseholdStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

/**
 * Defines the frequency options for recurring chores.
 */
export enum ChoreFrequency {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  CUSTOM = 'CUSTOM',
}

/**
 * Defines the priority levels for chores.
 */
export enum ChorePriority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
}

/**
 * Defines the types of transactions for shared funds.
 */
export enum TransactionType {
  DEPOSIT = 'DEPOSIT',
  WITHDRAWAL = 'WITHDRAWAL',
}

/**
 * Defines the possible statuses of an invitation.
 */
export enum InvitationStatus {
  PENDING = 'PENDING',
  ACCEPTED = 'ACCEPTED',
  DECLINED = 'DECLINED',
  EXPIRED = 'EXPIRED',
}

// Interfaces

/**
 * Extends the Express Request interface to include authenticated user information.
 */
export interface AuthenticatedRequest extends Request {
  user?: User;
  cookies: {
    refreshToken?: string;
  };
}

/**
 * Defines the payload structure for JWT tokens.
 */
export interface TokenPayload {
  userId: string;
  email: string;
}

/**
 * Extends the TokenPayload interface for OAuth-specific information.
 */
export interface OAuthTokenPayload extends TokenPayload {
  provider: Provider;
  accessToken: string;
  refreshToken?: string;
}

/**
 * Defines options for pagination in API responses.
 */
export interface PaginationOptions {
  page: number;
  limit: number;
}

// Data Transfer Objects (DTOs)

/**
 * DTO for creating a new expense split.
 */
export interface CreateExpenseSplitDTO {
  userId: string;
  amount: number;
}

/**
 * DTO for creating a new expense.
 */
export interface CreateExpenseDTO {
  householdId: string;
  amount: number;
  description: string;
  paidById: string;
  dueDate?: Date;
  category?: string;
  splits?: CreateExpenseSplitDTO[];
}

/**
 * DTO for updating an existing expense.
 */
export interface UpdateExpenseDTO {
  amount?: number;
  description?: string;
  dueDate?: Date;
  category?: string;
  splits?: UpdateExpenseSplitDTO[];
}

/**
 * DTO for updating an expense split.
 */
export interface UpdateExpenseSplitDTO {
  userId: string;
  amount: number;
}

/**
 * DTO for creating a new chore.
 */
export interface CreateChoreDTO {
  title: string;
  description?: string;
  householdId: string;
  dueDate?: Date;
  status?: ChoreStatus;
  recurrence?: string;
  priority?: number;
  assignedUserIds?: string[];
  subtasks?: CreateSubtaskDTO[];
}

/**
 * DTO for updating an existing chore.
 */
export interface UpdateChoreDTO {
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: ChoreStatus;
  recurrence?: string;
  priority?: number;
  assignedUserIds?: string[];
  subtasks?: UpdateSubtaskDTO[];
}

/**
 * DTO for creating a new subtask.
 */
export interface CreateSubtaskDTO {
  choreId: string;
  title: string;
  status?: SubtaskStatus;
}

/**
 * DTO for updating an existing subtask.
 */
export interface UpdateSubtaskDTO {
  title?: string;
  status?: SubtaskStatus;
}

/**
 * DTO for creating a new household.
 */
export interface CreateHouseholdDTO {
  name: string;
}

/**
 * DTO for updating an existing household.
 */
export interface UpdateHouseholdDTO {
  name?: string;
}

/**
 * DTO for adding a new member to a household.
 */
export interface AddMemberDTO {
  userId: string;
  role?: UserRole;
}

/**
 * DTO for creating a new message.
 */
export interface CreateMessageDTO {
  householdId: string;
  authorId: string;
  content: string;
}

/**
 * DTO for creating a new thread.
 */
export interface CreateThreadDTO {
  messageId: string;
  authorId: string;
  content: string;
}

/**
 * DTO for creating a new event.
 */
export interface CreateEventDTO {
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  createdById: string;
  choreId?: string | null;
}

/**
 * DTO for updating an existing event.
 */
export interface UpdateEventDTO {
  title?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  choreId?: string | null;
}

/**
 * DTO for syncing with a personal calendar.
 */
export interface SyncCalendarDTO {
  provider: OAuthProvider;
  accessToken: string;
}

/**
 * DTO for registering a new user.
 */
export interface RegisterUserDTO {
  email: string;
  password: string;
  name: string;
}

/**
 * DTO for user login credentials.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * DTO for creating a new notification.
 */
export interface CreateNotificationDTO {
  userId: string;
  type: NotificationType;
  message: string;
  isRead?: boolean;
}

/**
 * DTO for updating an existing notification.
 */
export interface UpdateNotificationDTO {
  isRead?: boolean;
}

/**
 * DTO for creating a new OAuth integration.
 */
export interface OAuthIntegrationDTO {
  userId: string;
  provider: Provider;
  accessToken: string;
  refreshToken?: string;
  expiresAt?: Date;
}

/**
 * DTO for creating a new transaction.
 */
export interface CreateTransactionDTO {
  expenseId: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  status?: TransactionStatus;
}

/**
 * DTO for updating an existing transaction's status.
 */
export interface UpdateTransactionDTO {
  status: TransactionStatus;
}

// Utility Types
export type UserWithoutPassword = Omit<User, 'passwordHash'>;

export type HouseholdWithMembers = Household & {
  members: HouseholdMember[];
};

export type ChoreWithAssignees = Chore & {
  assignedUsers: User[];
  subtasks: Subtask[];
};

export type MessageWithThreads = Message & {
  threads: Thread[];
  attachments: Attachment[];
};

export type EventWithChore = Event & {
  chore?: Chore;
};

/**
 * Extends the Notification interface to include user details.
 */
export type NotificationWithUser = PrismaNotification & {
  user: User;
};

// Socket Event Types
export interface NotificationEvent {
  type: NotificationType;
  message: string;
  userId: string;
}

export interface ChoreUpdateEvent {
  chore: Chore;
}

export interface MessageEvent {
  message: Message;
}

// New Interfaces and DTOs for Messaging

/**
 * DTO for creating a new message.
 */
export interface CreateMessageDTO {
  content: string;
  attachments?: CreateAttachmentDTO[];
}

/**
 * DTO for updating an existing message.
 */
export interface UpdateMessageDTO {
  content?: string;
  attachments?: CreateAttachmentDTO[];
}

/**
 * DTO for creating a new thread.
 */
export interface CreateThreadDTO {
  content: string;
}

/**
 * DTO for creating a new attachment.
 */
export interface CreateAttachmentDTO {
  url: string;
  fileType: string;
}

/**
 * Extends the Message interface to include author details.
 */
export type MessageWithDetails = Message & {
  author: User;
  threads: Thread[];
  attachments: Attachment[];
};

/**
 * Extends the Thread interface to include author and attachments.
 */
export type ThreadWithDetails = Thread & {
  author: User;
  attachments: Attachment[];
};

/**
 * Extends the Attachment interface to include optional relations.
 */
export type AttachmentWithDetails = Attachment & {
  message?: Message;
  thread?: Thread;
};

export interface HouseholdUpdateEvent {
  household: Household;
}

export interface ExpenseUpdateEvent {
  expense: Expense;
}

export interface EventUpdateEvent {
  event: Event;
}

// Partial types for flexible updates
export type PartialUpdateChoreDTO = Partial<UpdateChoreDTO>;
export type ChorePickDTO = Pick<Chore, 'id' | 'title' | 'status'>;


// Expense with splits for reminders
export type ExpenseWithSplits = Expense & {
  splits: (ExpenseSplit & {
    user: User;
  })[];
};


// Prisma Models and enums Export
export {
  User,
  Household,
  HouseholdRole,
  HouseholdMember,
  Message,
  Thread,
  Attachment,
  Chore,
  Subtask,
  Expense,
  ExpenseSplit,
  Transaction,
  Event,
  Notification as PrismaNotification,
  OAuthIntegration,
  ChoreStatus,
  SubtaskStatus,
  TransactionStatus,
  NotificationType,
  Provider,
} from '@prisma/client';
```

---

## Backend Implementation Plan

### Overview
- **Structure:** MVC (Model-View-Controller) pattern
- **Components:** Models (Prisma schema), Controllers, Services, Routes, Middlewares, Utilities
- **Technology Stack:**
  - **Languages/Frameworks:** Node.js, Express.js, TypeScript
  - **Database ORM:** Prisma
  - **Database:** PostgreSQL
  - **Real-Time Communication:** Socket.IO
  - **Authentication:** JWT (JSON Web Tokens), OAuth (for third-party services)

---

### Naming Conventions
Following the standards from `naming_conventions.md`:

- **Controllers:** PascalCase ending with `Controller.ts`
  - Example: `AuthController.ts`
- **Services:** camelCase ending with `Service.ts`
  - Example: `authService.ts`
- **Models:** PascalCase
  - Example: `Chore`, `User`
- **Routes:** kebab-case with `.ts` extension
  - Example: `auth-routes.ts`, `chores-routes.ts`
- **Middlewares:** camelCase ending with `Middleware.ts`
  - Example: `authMiddleware.ts`
- **Utilities:** camelCase with `.ts` extension
  - Example: `tokenUtils.ts`
- **Constants:** UPPER_SNAKE_CASE
  - Example: `DEFAULT_TIMEOUT`
- **WebSocket Events:** snake_case
  - Example: `message_new`, `chore_update`

---

### Authentication and Authorization

#### OAuth Implementation using Passport.js
- **Support for:** Google, Facebook, and Apple logins

#### JWT Management:
- **Access Tokens:** Short-lived tokens (e.g., 15 minutes)
- **Refresh Tokens:** Long-lived tokens (e.g., 7 days) to obtain new access tokens

#### Token Refresh Strategy:
- **Endpoint:** `POST /api/auth/refresh`
- **Process:** Verify refresh token and issue a new access token

#### Password Handling:
- **Method:** Use bcrypt with a salt factor of 12 for hashing passwords

#### Role-Based Access Control (RBAC):
- **Roles:** ADMIN, MEMBER
- **Implementation:** Middleware to check user roles and permissions

#### Files:
- `src/controllers/AuthController.ts`
- `src/services/authService.ts`
- `src/middlewares/authMiddleware.ts`
- `src/utilities/tokenUtils.ts`

#### Custom `AuthenticatedRequest` Type

To enhance type safety and maintain clarity between authenticated and non-authenticated routes, the application uses a custom `AuthenticatedRequest` type instead of globally augmenting the `Express.Request` interface.

##### Custom Request Type Definition
```typescript
import { Request } from 'express';
import { User } from '@prisma/client';
// Extends the Express Request interface to include authenticated user information.
export interface AuthenticatedRequest extends Request {
user?: User;
cookies: {
refreshToken?: string;
};
}
```

### authService.ts Methods:
- `login(credentials: LoginCredentials)`: Authenticates a user and returns JWT tokens.
- `register(userData: RegisterUserDTO)`: Creates a new user account.
- `refreshToken(token: string)`: Issues a new access token using a refresh token.
- `hashPassword(password: string)`: Hashes a plain text password using bcrypt.
- `validatePassword(plainText: string, hashed: string)`: Validates a password.
- `getUserRoles(userId: string)`: Retrieves the roles associated with a user.

---

### API Endpoints and Controllers

#### User Management

##### User Profile (`/api/users`)
- **GET /me:** Get current user's profile
- **PATCH /me:** Update current user's profile

##### Endpoint Files:
- `src/controllers/UserController.ts`
- `src/routes/user-routes.ts`

#### Household Management

##### Household CRUD (`/api/households`)
- **GET /**: Get households the user is a member of
- **POST /**: Create a new household
- **GET /:householdId**: Get household details
- **PATCH /:householdId**: Update household details
- **DELETE /:householdId**: Delete a household

##### Member Management
- **GET /:householdId/members**: Get members of a household
- **POST /:householdId/invitations**: Invite a new member
- **DELETE /:householdId/members/:memberId**: Remove a member

##### Endpoint Files:
- `src/controllers/HouseholdController.ts`
- `src/routes/household-routes.ts`

#### Messaging and Collaboration

##### Messages (`/api/households/:householdId/messages`)
- **GET /**: Get all messages in the household's message board
- **POST /**: Create a new message

##### Message Threads (`/api/households/:householdId/messages/:messageId/threads`)
- **GET /**: Get threaded replies to a message
- **POST /**: Reply to a message

##### Attachments (`/api/messages/:messageId/attachments`)
- **POST /**: Attach a file or image to a message

##### Real-Time Notifications via Socket.IO

##### Endpoint Files:
- `src/controllers/MessageController.ts`
- `src/routes/message-routes.ts`
- `src/controllers/ThreadController.ts`
- `src/routes/thread-routes.ts`

#### Shared Finances Management

##### Shared Expenses (`/api/households/:householdId/expenses`)
- **GET /**: Get all shared expenses for a household
- **POST /**: Add a new shared expense

##### Transactions (`/api/expenses/:expenseId/transactions`)
- **GET /**: Get transactions for an expense
- **POST /**: Record a new transaction

##### Notifications for new expenses and payment reminders

... (Lines omitted for brevity) ...

### sharedExpenseService.ts

#### Methods:
- `getExpenses(householdId: string)`: Retrieves all shared expenses for a household.
- `addExpense(householdId: string, data: CreateExpenseDTO)`: Adds a new shared expense.
- `recordTransaction(expenseId: string, data: CreateTransactionDTO)`: Records a transaction.

#### WebSocket Events:
- Emits `expense_new` and `expense_update` events.

#### Interaction:
- Used by `ExpenseController` and communicates with models to update data.

### eventService.ts

#### Methods:
- `getEvents(householdId: string)`: Retrieves all events in a household calendar.
- `createEvent(householdId: string, data: CreateEventDTO)`: Adds a new event.
- `updateEvent(eventId: string, data: UpdateEventDTO)`: Updates an event.
- `deleteEvent(eventId: string)`: Deletes an event.

#### WebSocket Events:
- Emits `event_new` and `event_update` events.

#### Interaction:
- Works with `EventController` and listens to chore schedule changes for calendar updates.

### notificationService.ts

#### Methods:
- `createNotification(data: CreateNotificationDTO)`: Creates a new notification.
- `getUserNotifications(userId: string)`: Retrieves notifications for a user.

#### WebSocket Events:
- Emits `notification_new` when a notification is created.

#### Interaction:
- Used across services to notify users about relevant events.

### calendarIntegrationService.ts

#### Methods:
- `connectCalendar(userId: string, provider: string, tokens: OAuthTokens)`: Stores calendar integration details.
- `syncEvents(userId: string)`: Syncs events with external calendars.

#### Interaction:
- Communicates with external APIs (e.g., Google Calendar) and updates the `Event` model.

---

### Middlewares

Implement the following middleware functions:

#### Authentication Middleware (`src/middlewares/authMiddleware.ts`)
- **Purpose:** Protect routes by verifying JWTs.
- **Implementation:**
  - Checks for the presence of an Authorization header.
  - Verifies the token using `tokenUtils.verifyToken`.
  - Attaches `req.user` with user details.

#### RBAC Middleware (`src/middlewares/rbacMiddleware.ts`)
- **Purpose:** Enforce permissions based on user roles.
- **Implementation:**
  - Receives required roles as parameters.
  - Checks `req.user.roles` for required permissions.
  - Returns `403 Forbidden` if access is denied.

#### Error Handling Middleware (`src/middlewares/errorHandler.ts`)
- **Purpose:** Catch and handle errors uniformly.
- **Implementation:**
  - Logs error details using `logger`.
  - Sends structured error responses with status codes.
  - Differentiates between operational and programming errors.

#### Validation Middleware (`src/middlewares/validateMiddleware.ts`)
- **Purpose:** Validate request data.
- **Implementation:**
  - Uses Joi schemas to validate `req.body`, `req.params`, and `req.query`.
  - Returns `400 Bad Request` with validation errors.

#### Socket Authentication Middleware (`src/middlewares/socketAuthMiddleware.ts`)
- **Purpose:** Authenticate WebSocket connections.
- **Implementation:**
  - Verifies JWT token from the query parameters.
  - Attaches user information to the socket instance.

---

### Utilities

#### Logger (`src/utilities/logger.ts`)
- **Uses:** Winston for logging.
- **Configuration:** Different environments (development, production).

#### Token Utilities (`src/utilities/tokenUtils.ts`)
- `generateAccessToken(userId: string)`: Creates an access JWT.
- `generateRefreshToken(userId: string)`: Creates a refresh JWT.
- `verifyToken(token: string, type: 'access' | 'refresh')`: Verifies JWT tokens.

#### File Upload Utility (`src/utilities/fileUpload.ts`)
- **Purpose:** Handles file storage using services like AWS S3.
- **Methods:** Upload and retrieve files.

#### Validation Schemas (`src/validations/`)
- **Purpose:** Define Joi schemas for request validation.

---

### Real-Time Communication Mechanisms

Implement real-time communication using Socket.IO:

#### Socket Server Setup (`src/sockets/index.ts`)
- Initialize and configure Socket.IO server.
- Use `socketAuthMiddleware.ts` for authentication.

#### WebSocket Events

##### Events and Data Payloads:

| Event Name       | Emitted By               | Listened By                    | Data Payload                        |
|------------------|--------------------------|--------------------------------|-------------------------------------|
| `message_new`    | `messageService.ts`      | Frontend `MessageList` component| `{ message: Message }`              |
| `message_reply`  | `messageService.ts`      | Frontend `MessageList` component| `{ thread: Thread }`                |
| `chore_update`   | `choreService.ts`        | Frontend `ChoreList` component  | `{ chore: Chore }`                  |
| `expense_new`    | `sharedExpenseService.ts`| Frontend `ExpenseList` component| `{ expense: Expense }`              |
| `notification_new`| `notificationService.ts` | Frontend `NotificationCenter`   | `{ notification: Notification }`    |
| `event_new`      | `eventService.ts`        | Frontend `SharedCalendar` component| `{ event: Event }`                 |
| `household_update`| `householdService.ts`   | Frontend `HouseholdSelector`    | `{ household: Household }`          |

##### Client Integration:
- **Listening:** Clients listen to events relevant to their households.
- **Emitting:** Emit events for actions like creating messages or updating chores.

##### Integration with Services
- **Emission:** Services emit events after data changes.
- **Separation:** Controllers do not handle Socket.IO logic directly.

---

### Error Handling Mechanisms

#### Backend Error Handling
- **Operational Errors:**
  - Handled by `errorHandler.ts`.
  - Common errors include validation failures, authentication errors, and not found errors.
  - Errors have a `statusCode`, `message`, and optional `details`.
- **Programming Errors:**
  - Logged with full stack traces.
  - Generic `500 Internal Server Error` sent to clients.

#### Error Response Structure
```json
{
  "status": "error",
  "statusCode": 400,
  "message": "Validation failed.",
  "details": {
  "field": "email",
  "error": "Invalid email format."
  }
}
```