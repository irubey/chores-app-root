# Full Plan

## User Stories

### 1. Messaging and Collaboration

- **As a household member, I want to participate in threaded discussions on a message board so that our conversations stay organized and relevant.**
- **As a user, I want to send and receive messages in real-time so that communication is immediate and efficient.**
- **As a user, I want to attach files, images, and links to messages so that I can share important documents and resources with my housemates.**
- **As a user, I want to mention specific roommates in messages so that they receive direct notifications and can easily respond to relevant conversations.**
- **As a user, I want to react to messages with emojis so that I can express my feelings or provide quick feedback without sending additional messages.**
- **As a user, I want to create and manage polls so that I can gather feedback or make decisions collectively.**

### 2. Shared Finances Management

- **As a household member, I want to track shared expenses so that we know who owes whom money.**
- **As a user, I want to split common household expenses (e.g., toilet paper) among roommates so that costs are shared fairly.**
- **As a user, I want to view a summary of household expenses and debts so that I can keep track of our financial status.**
- **As a user, I want to receive notifications when new expenses are added or when payments are due so that I stay informed.**
- **As a user, I want to categorize expenses with tags so that I can better organize and analyze our spending patterns.**
- **As a user, I want to settle debts directly within the app so that financial transactions are streamlined and transparent.**
- **As a user, I want to upload receipts for expenses so that we have proof and better tracking of our expenditures.**

### 3. Chore Management with Task Checklists

- **As a household member, I want to create chores with detailed task checklists so that complex chores are broken down into manageable steps.**
- **As a user, I want to assign chores to specific roommates or to all roommates so that responsibilities are clear.**
- **As a user, I want to track the progress of chores and their subtasks so that everyone knows what has been completed.**
- **As a user, I want to set due dates and receive reminders for chores so that tasks are completed on time.**
- **As a household member, I want to swap chores with other roommates so that we can balance workloads and accommodate individual schedules.**
- **As a user, I want to save chore templates so that we can easily create recurring or standard chores without duplicating effort.**

### 4. Shared Calendar and Rotating Chores

- **As a user, I want to view and add events to a shared household calendar so that everyone's schedules are coordinated.**
- **As a household member, I want rotating chores to be automatically scheduled on the calendar so that chore assignments are fair and systematic.**
- **As a user, I want to sync the household calendar with my personal calendar (e.g., Google Calendar) so that I have all events in one place.**
- **As a user, I want to receive notifications for upcoming events and chores so that I don't miss important dates.**

### 5. Improvements and Additional Features

- **As a user, I want to customize notification preferences for messages, chores, finances, and other activities so that I only receive alerts that are important to me.**
- **As a user, I want to have a dashboard that summarizes household activities so that I can quickly see what's new at a glance.**
- **As a user, I want to access the app from mobile devices so that I can stay connected on the go.**
- **As a household member, I want to integrate with third-party services (e.g., payment platforms, shopping lists) so that managing household tasks is more convenient.**
- **As a new user, I want an onboarding tutorial so that I can quickly learn how to use the app's features effectively.**
- **As a user, I want to provide feedback or report issues directly within the app so that the development team can continuously improve the application.**
- **As a user, I want collaborative shopping lists so that household members can add and assign items to purchase, ensuring that all essentials are covered without duplication.**
- **As a user, I want item assignments within collaborative lists so that each roommate knows their responsibilities for purchasing specific items.**

## Features Prioritization

### Must-Have Features (MVP)

#### Messaging and Collaboration

- Threaded message board for organized discussions.
- Real-time messaging capabilities.
- Ability to attach files and images to messages.
- Notifications for new messages and replies.

#### Shared Finances Management

- Track and split shared expenses among roommates.
- Record debts and manage who owes whom.
- Expense summaries and history.
- Notifications for new expenses and payment reminders.

#### Chore Management with Task Checklists

- Create chores with detailed task checklists.
- Assign chores to roommates individually or collectively.
- Track progress on chores and subtasks.
- Set due dates and receive chore reminders.

#### Shared Calendar

- View and add events to a shared calendar.
- Automatic scheduling of rotating chores.
- Sync with personal calendars (e.g., Google Calendar).
- Notifications for upcoming events and chores.

### Should-Have Features

#### Customization and Preferences

- Notification settings for messages, chores, finances, and other activities.
- Theme and layout customization for personal preferences.
- User profiles with avatars and contact info.

#### Dashboard and Analytics

- Dashboard summarizing household activities.
- Analytics for chores completion, expenses, and participation.
- Quick links to pending tasks and recent messages.

#### Mobile Accessibility

- Responsive design for mobile browsers.
- Push notifications for important updates.

#### Integrations

- Integration with payment platforms (e.g., PayPal, Venmo) for settling debts.
- Import/export capabilities for data (e.g., CSV files for expenses).
- Integration with shopping lists for collaborative purchasing.

### Could-Have Features

#### Gamification

- Reward system (points, badges) for completing chores and participating.
- Leaderboards to encourage friendly competition.

#### Advanced Chore Features

- **Chore Swapping**: Allow roommates to swap chores among themselves with approval, adding flexibility.
- **Chore Templates**: Save chore checklists as templates for reuse.

#### Advanced Financial Features

- **Expense Categorization**: Tag expenses for better tracking and analytics.
- **Debt Settlement Options**: Provide options to settle debts directly through the app via integrations.
- **Receipt Uploads**: Allow users to upload photos of receipts for transparency.

#### Improved Messaging

- **Mentions and Notifications**: Use @username to mention a roommate, triggering a notification.
- **Message Reactions**: Add the ability to react to messages with emojis.

#### Shared Shopping List

- **Collaborative Lists**: Add a shared shopping list feature for household essentials.
- **Item Assignments**: Assign items to roommates for purchasing.

#### User Experience Enhancements

- **Onboarding Tutorial**: Provide a guided tutorial for new users to understand app features.
- **Feedback Mechanism**: Allow users to submit feedback or report issues directly within the app.

#### Third-Party Integrations

- **Task Management Integration**: Optionally integrate with apps like Trello or Asana for advanced task management.
- **Calendar Integrations**: Support syncing with Apple Calendar and Outlook in addition to Google Calendar.

### Won't Have Features (Out of Scope for Now)

#### In-App Payments Processing

- Processing payments within the app using financial APIs.

#### AI-Powered Features

- Machine learning for chore suggestions or expense forecasting.

#### Smart Home Integrations

- Controlling smart devices or appliances through the app.

#### Offline Functionality

- Full app functionality without an internet connection.

## System Constraints

### Technical Constraints

#### Technology Stack

- **Frontend**:
  - Frameworks/Languages: Next.js w/ app router, React, TypeScript.
  - Styling: Tailwind CSS.
  - State Management: Redux slices.
  - Real-Time Communication: Socket.IO.
- **Backend**:
  - Frameworks/Languages: Node.js, Express, TypeScript.
  - Database ORM: Prisma.
  - Database: PostgreSQL.
  - Authentication: HTTP only cookies with JWT, OAuth (optional for third-party services).
- **Styling**:
  - Tailwind CSS.
- **Deployment**:
  - Frontend web platform: Vercel.
  - Backend server platform: Render.
- **Mobile Accessibility**:
  - Responsive web design for compatibility with mobile devices.

#### Scalability

- Design for horizontal scaling to handle increasing user loads.
- Optimize database queries and indexing for performance.
- Use caching mechanisms where appropriate (e.g., Redis).

#### Performance

- Aim for frontend load times under 3 seconds on standard networks.
- Backend API responses should average below 200ms.
- Implement lazy loading and code splitting on the frontend.

#### Security

- Implement HTTPS for all network communications.
- Store passwords and sensitive data using strong encryption.
- Input validation and sanitization to prevent SQL injection and XSS attacks.
- Regular security audits and penetration testing.

### Compliance Constraints

#### Data Protection and Privacy

- Compliance with GDPR for European users.
- Provide clear terms of service and privacy policies.
- Allow users to manage their data (view, edit, delete personal information).

#### Accessibility Standards

- Adhere to WCAG 2.1 Level AA guidelines for accessibility.
- Ensure keyboard navigability and screen reader compatibility.

### Operational Constraints

#### Deployment and DevOps

- Use Docker for containerization of applications.
- Set up CI/CD pipelines in github actions for automated testing and deployment.
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

## Potential Improvements

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

Styling Guide:

# Styling Guide

## Color System

### Primary Colors

- Primary:
  - Light: `bg-primary-light` (#8ECAE6)
  - Default: `bg-primary` (#219EBC)
  - Dark: `bg-primary-dark` (#023047)

### Secondary Colors

- Secondary:
  - Light: `bg-secondary-light` (#B8E0D2)
  - Default: `bg-secondary` (#95D5B2)
  - Dark: `bg-secondary-dark` (#74C69D)

### Accent Colors

- Accent:
  - Light: `bg-accent-light` (#FFD166)
  - Default: `bg-accent` (#EEB62B)
  - Dark: `bg-accent-dark` (#CB9D06)

### Neutral Colors

- Background:
  - Light: `bg-background-light` (#F8F9FA)
  - Dark: `bg-background-dark` (#212529)
- Text:
  - Primary: `text-text-primary` (#343A40)
  - Secondary: `text-text-secondary` (#6C757D)

## Typography

### Font Families

- Headings: Playfair Display
- Body: Lato

### Type Scale

### Type Scale Examples

```html
<h1 class="text-h1">Heading 1 - 2.25rem / 2.75rem line height</h1>
<h2 class="text-h2">Heading 2 - 1.875rem / 2.25rem line height</h2>
<h3 class="text-h3">Heading 3 - 1.5rem / 2rem line height</h3>
<h4 class="text-h4">Heading 4 - 1.25rem / 1.75rem line height</h4>
<h5 class="text-h5">Heading 5 - 1rem / 1.5rem line height</h5>
<h6 class="text-h6">Heading 6 - 0.875rem / 1.25rem line height</h6>
<p class="text-body">Body Text - 1rem / 1.5rem line height</p>
```

## Component Patterns

### Buttons

Primary Button:

```tsx
<button class="btn-primary">Primary Action</button>
```

Secondary Button:

```tsx
<button class="btn-secondary">Secondary Action</button>
```

Accent Button:

```tsx
<button class="btn-accent">Accent Action</button>
```

Disabled State:

```tsx
<button
  class="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
  disabled
>
  Disabled Button
</button>
```

### Form Elements

Text Input:

```tsx
<input class="input" type="text" placeholder="Enter text" />
```

Textarea:

```tsx
<textarea
  class="input min-h-[100px]"
  placeholder="Enter longer text"
></textarea>
```

Select:

```tsx
<select class="input">
  <option>Select an option</option>
</select>
```

Checkbox:

```tsx
<label class="flex items-center gap-2">
  <input
    type="checkbox"
    class="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
  />
  <span>Checkbox label</span>
</label>
```

### Cards

Basic Card:

```tsx
<div class="card">
  <h3 class="text-h3 mb-4">Card Title</h3>
  <p class="text-body">Card content goes here</p>
</div>
```

Interactive Card:

```tsx
<div class="card hover:shadow-lg transition-shadow duration-200">
  <h3 class="text-h3 mb-4">Interactive Card</h3>
  <p class="text-body">Hover to see shadow effect</p>
</div>
```

## Layout Patterns

### Container

Main Content Container:

```tsx
<div class="container-custom">
<!-- Content with max-width and responsive padding -->
</div>
```

### Grid Layouts

Basic Grid:

```tsx
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  <div class="card">Item 1</div>
  <div class="card">Item 2</div>
  <div class="card">Item 3</div>
</div>
```

Responsive Grid with Different Sizes:

```tsx
<div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 md:col-span-8">Main Content</div>
  <div class="col-span-12 md:col-span-4">Sidebar</div>
</div>
```

### Flex Patterns

Center Content:

```tsx
<div class="flex items-center justify-center min-h-screen">
  <div>Centered Content</div>
</div>
```

Space Between:

```tsx
<div class="flex items-center justify-between">
  <div>Left Content</div>
  <div>Right Content</div>
</div>
```

## Interactive States

Hover States:

```tsx
<button class="btn-primary hover:bg-primary-dark">Hover Me</button>
```

Focus States:

```tsx
<input class="input focus:ring-2 focus:ring-primary focus:border-primary" />
```

Active States:

```tsx
<button class="btn-primary active:bg-primary-dark active:transform active:scale-95">
  Click Me
</button>
```

## Animation Patterns

Loading Spinner:

```tsx
<div class="animate-spin h-5 w-5 border-2 border-primary border-t-transparent rounded-full"></div>
```

Fade In:

```tsx
<div class="animate-fade-in opacity-0">Content fades in</div>
```

Transition:

```tsx
<div class="transition-all duration-300 ease-in-out">Smooth transition</div>
```

## Best Practices

### Responsive Design

- Always start with mobile-first design
- Use breakpoint prefixes consistently: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Test layouts at all breakpoints

### Dark Mode

- Include dark mode variants for all color-based styles
- Test contrast ratios in both modes

Example:

<div class="bg-white dark:bg-background-dark text-text-primary dark:text-text-secondary">
Content adapts to dark mode
</div>

### Accessibility

- Maintain minimum contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Include focus states for all interactive elements
- Use semantic HTML elements
- Add appropriate ARIA labels where needed

### Performance

- Use `@apply` sparingly and only for commonly repeated patterns
- Leverage Tailwind's built-in purge functionality
- Keep custom CSS to a minimum

## Common Patterns

### Navigation

Navigation Bar:

```tsx
<nav class="bg-white dark:bg-background-dark shadow-sm">
<div class="container-custom">
<div class="flex items-center justify-between h-16">
<div class="flex items-center gap-4">
<!-- Navigation Items -->
</div>
</div>
</div>
</nav>
```

### Forms

Form Group:

```tsx
<div class="space-y-4">
  <label class="block">
    <span class="text-sm font-medium text-text-primary dark:text-text-secondary">
      Label
    </span>
    <input class="input mt-1 block w-full" type="text" />
  </label>
  <div class="flex justify-end">
    <button class="btn-primary">Submit</button>
  </div>
</div>
```

This styling guide provides a comprehensive foundation for maintaining consistent design across the application while ensuring accessibility, responsiveness, and maintainability.
