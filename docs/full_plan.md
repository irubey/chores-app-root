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

### UX/UI Focus

#### Single Household Experience

- Focus on active household management rather than multi-household switching
- Move household selection to profile dropdown menu for cleaner navigation
- Auto-unselect previous household when switching to maintain single-context
- Emphasize household identity with customizable header:
  - Stick figure avatars for household members
  - Pet avatars
  - Custom stick figure styles/accessories
  - Visual household composition display

#### Core Experience Principles

- Prioritize household management tools over general messaging app
- Keep UI focused on four core features:
  - Messaging
  - Expenses
  - Tasks
  - Calendar
- Streamline household switching to prevent context confusion
- Create visual identity for each household through avatars and customization

## Features Prioritization

### Must-Have Features (MVP)

#### Core Features (MVP)

1. Enhanced Message Board

   - Threaded discussions with read status
   - @mentions with notifications
   - File/image attachments
   - Message reactions (emojis)
   - Polls for group decisions

2. Expense Management

   - Track shared expenses
   - Split bills with customizable ratios
   - Receipt uploads
   - Settlement tracking
   - Expense categories

3. Task Management

   - Customizable checklists
   - Subtasks with progress tracking
   - Task templates
   - Due dates and reminders
   - Task assignments

4. Shared Calendar
   - Household events
   - Chore schedules
   - Event categories
   - Calendar sync (Google)

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
  - State Management: React Query, Context API for auth/user state.
  - Real-Time Communication: Socket.IO.
- **Backend**:
  - Frameworks/Languages: Node.js, Express, TypeScript.
  - Database ORM: Prisma.
  - Database: PostgreSQL.
  - Authentication: JWT auth with HTTP-only cookies.
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

## System Architecture

### State Management

#### Global Context Structure

1. **User Context (`UserContext.tsx`)**

   - Authentication state
   - User profile information
   - Active household selection
   - Available households list
   - Login/logout functionality
   - Session management

2. **React Query**

   - Manages all household-specific data
   - Caches and syncs per active household
   - Real-time updates through Socket.IO + invalidation

### Data Flow

1. **Context Updates**

   - Contexts update based on route/page changes
   - Data is fetched and cached at the context level
   - Real-time updates via WebSocket connections
   - Optimistic updates for better UX

2. **Page-Level Data Management**
   - Pages subscribe to relevant contexts
   - React Query for data fetching and caching
   - Local state for UI-specific data
   - Form state management
   - Temporary data storage

### Component Architecture

1. **Layout Components**

   - Wrapped in global context providers
   - Handle authentication checks
   - Manage navigation state
   - Theme management

2. **Feature Components**

   - Subscribe to feature-specific contexts
   - Handle local state
   - Manage UI interactions
   - Form handling

3. **Shared Components**
   - Reusable UI elements
   - Context-aware when needed
   - Theme-aware styling
   - Accessibility features

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
