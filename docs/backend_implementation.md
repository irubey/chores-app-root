# Backend Implementation Plan

## Overview
- Structure: MVC (Model-View-Controller) pattern
- Components: Models (Prisma schema), Controllers, Services, Routes, Middlewares, Utilities
- Technology Stack:
  - Languages/Frameworks: Node.js, Express.js, TypeScript
  - Database ORM: Prisma
  - Database: PostgreSQL
  - Real-Time Communication: Socket.IO
  - Authentication: JWT (JSON Web Tokens), OAuth (for third-party services)

---

## Naming Conventions
Following the standards from naming_conventions.md:

- Controllers: PascalCase ending with Controller.ts
  - Example: AuthController.ts
- Services: camelCase ending with Service.ts
  - Example: authService.ts
- Models: PascalCase
  - Example: Chore, User
- Routes: kebab-case with .ts extension
  - Example: auth-routes.ts, chores-routes.ts
- Middlewares: camelCase ending with Middleware.ts
  - Example: authMiddleware.ts
- Utilities: camelCase with .ts extension
  - Example: tokenUtils.ts
- Constants: UPPER_SNAKE_CASE
  - Example: DEFAULT_TIMEOUT
- WebSocket Events: snake_case
  - Example: message_new, chore_update

---

## Authentication and Authorization

### OAuth Implementation using Passport.js
- Support for Google, Facebook, and Apple logins

### JWT Management:
- Access Tokens: Short-lived tokens (e.g., 15 minutes)
- Refresh Tokens: Long-lived tokens (e.g., 7 days) to obtain new access tokens

### Token Refresh Strategy:
- Use /api/auth/refresh endpoint
- Verify refresh token and issue a new access token

### Password Handling:
- Use bcrypt with a salt factor of 12 for hashing passwords

### Role-Based Access Control (RBAC):
- Roles: ADMIN, MEMBER
- Implement middleware to check user roles and permissions

### Files:
- src/controllers/AuthController.ts
- src/services/authService.ts
- src/middlewares/authMiddleware.ts
- src/utilities/tokenUtils.ts

### Custom `AuthenticatedRequest` Type

To enhance type safety and maintain clarity between authenticated and non-authenticated routes, the application uses a custom `AuthenticatedRequest` type instead of globally augmenting the `Express.Request` interface.

### Implementation Details:

#### **Custom Request Type Definition**
```ts
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
- login(credentials: LoginCredentials): Authenticates a user and returns JWT tokens.
- register(userData: RegisterUserDTO): Creates a new user account.
- refreshToken(token: string): Issues a new access token using a refresh token.
- hashPassword(password: string): Hashes a plain text password using bcrypt.
- validatePassword(plainText: string, hashed: string): Validates a password.
- getUserRoles(userId: string): Retrieves the roles associated with a user.

---

## API Endpoints and Controllers

### User Management

#### User Profile (/api/users)
- GET /me - Get current user's profile
- PATCH /me - Update current user's profile

#### Endpoint Files:
- src/controllers/UserController.ts
- src/routes/user-routes.ts

### Household Management

#### Household CRUD (/api/households)
- GET / - Get households the user is a member of
- POST / - Create a new household
- GET /:householdId - Get household details
- PATCH /:householdId - Update household details
- DELETE /:householdId - Delete a household

#### Member Management
- GET /:householdId/members - Get members of a household
- POST /:householdId/invitations - Invite a new member
- DELETE /:householdId/members/:memberId - Remove a member

#### Endpoint Files:
- src/controllers/HouseholdController.ts
- src/routes/household-routes.ts

### Messaging and Collaboration

#### Messages (/api/households/:householdId/messages)
- GET / - Get all messages in the household's message board
- POST / - Create a new message

#### Message Threads (/api/households/:householdId/messages/:messageId/threads)
- GET / - Get threaded replies to a message
- POST / - Reply to a message

#### Attachments (/api/messages/:messageId/attachments)
- POST / - Attach a file or image to a message

#### Real-Time Notifications via Socket.IO

#### Endpoint Files:
- src/controllers/MessageController.ts
- src/routes/message-routes.ts
- src/controllers/ThreadController.ts
- src/routes/thread-routes.ts

### Shared Finances Management

#### Shared Expenses (/api/households/:householdId/expenses)
- GET / - Get all shared expenses for a household
- POST / - Add a new shared expense

#### Transactions (/api/expenses/:expenseId/transactions)
- GET / - Get transactions for an expense
- POST / - Record a new transaction

#### Notifications for new expenses and payment reminders

#### Endpoint Files:
- src/controllers/ExpenseController.ts
- src/routes/expense-routes.ts
- src/controllers/TransactionController.ts
- src/routes/transaction-routes.ts

### Chore Management with Task Checklists

#### Chores (/api/households/:householdId/chores)
- GET / - Get all chores for a household
- POST / - Create a new chore with a task checklist

#### Chore Details (/api/households/:householdId/chores/:choreId)
- GET / - Get details of a specific chore
- PATCH / - Update chore details or progress
- DELETE / - Delete a chore

#### Subtasks (/api/chores/:choreId/subtasks)
- GET / - Get subtasks of a chore
- POST / - Add a new subtask
- PATCH /:subtaskId - Update a subtask's status
- DELETE /:subtaskId - Delete a subtask

#### Endpoint Files:
- src/controllers/ChoreController.ts
- src/routes/chore-routes.ts
- src/controllers/SubtaskController.ts
- src/routes/subtask-routes.ts

### Shared Calendar

#### Calendar Events (/api/households/:householdId/events)
- GET / - Get all events in the household calendar
- POST / - Add a new event

#### Event Details (/api/households/:householdId/events/:eventId)
- GET / - Get details of an event
- PATCH / - Update an event
- DELETE / - Delete an event

#### Calendar Integration (/api/calendar)
- POST /integrations - Connect a personal calendar (e.g., Google Calendar)
- GET /external-events - Get events from connected calendars

#### Automatic Scheduling of Rotating Chores
- Incorporate chore schedules into the calendar
- Notifications for upcoming events and chores

#### Endpoint Files:
- src/controllers/EventController.ts
- src/routes/event-routes.ts
- src/controllers/CalendarIntegrationController.ts
- src/routes/calendar-integration-routes.ts

---

## Services and Business Logic

Implement services to handle business logic:

### userService.ts

#### Methods:
- getUserProfile(userId: string): Retrieves user profile information.
- updateUserProfile(userId: string, data: UpdateUserDTO): Updates user profile.

#### Interaction:
- Used by UserController to handle user-related API requests.

### householdService.ts

#### Methods:
- getUserHouseholds(userId: string): Retrieves households the user is a member of.
- createHousehold(data: CreateHouseholdDTO): Creates a new household.
- getHouseholdDetails(householdId: string): Retrieves household details.
- updateHousehold(householdId: string, data: UpdateHouseholdDTO): Updates household information.
- deleteHousehold(householdId: string): Deletes a household.

#### Interaction:
- Interacts with HouseholdController and HouseholdMember model.

### messageService.ts

#### Methods:
- getMessages(householdId: string): Retrieves all messages for a household.
- createMessage(householdId: string, data: CreateMessageDTO): Creates a new message.
- addAttachment(messageId: string, file: File): Handles message attachments.

#### WebSocket Events:
- Emits message_new event after a new message is created.

#### Interaction:
- Used by MessageController and emits events consumed by frontend components.

### choreService.ts

#### Methods:
- getChores(householdId: string): Retrieves all chores for a household.
- createChore(householdId: string, data: CreateChoreDTO): Creates a new chore.
- updateChore(choreId: string, data: UpdateChoreDTO): Updates chore details or progress.
- deleteChore(choreId: string): Deletes a chore.

#### WebSocket Events:
- Emits chore_update event when a chore is updated.

#### Interaction:
- Interacts with ChoreController, SubtaskController, and updates models accordingly.

### sharedExpenseService.ts

#### Methods:
- getExpenses(householdId: string): Retrieves all shared expenses for a household.
- addExpense(householdId: string, data: CreateExpenseDTO): Adds a new shared expense.
- recordTransaction(expenseId: string, data: CreateTransactionDTO): Records a transaction.

#### WebSocket Events:
- Emits expense_new and expense_update events.

#### Interaction:
- Used by ExpenseController and communicates with models to update data.

### eventService.ts

#### Methods:
- getEvents(householdId: string): Retrieves all events in a household calendar.
- createEvent(householdId: string, data: CreateEventDTO): Adds a new event.
- updateEvent(eventId: string, data: UpdateEventDTO): Updates an event.
- deleteEvent(eventId: string): Deletes an event.

#### WebSocket Events:
- Emits event_new and event_update events.

#### Interaction:
- Works with EventController and listens to chore schedule changes for calendar updates.

### notificationService.ts

#### Methods:
- createNotification(data: CreateNotificationDTO): Creates a new notification.
- getUserNotifications(userId: string): Retrieves notifications for a user.

#### WebSocket Events:
- Emits notification_new when a notification is created.

#### Interaction:
- Used across services to notify users about relevant events.

### calendarIntegrationService.ts

#### Methods:
- connectCalendar(userId: string, provider: string, tokens: OAuthTokens): Stores calendar integration details.
- syncEvents(userId: string): Syncs events with external calendars.

#### Interaction:
- Communicates with external APIs (e.g., Google Calendar) and updates the Event model.

---

## Middlewares

Implement the following middleware functions:

### Authentication Middleware (src/middlewares/authMiddleware.ts)
- Purpose: Protect routes by verifying JWTs.
- Implementation:
  - Checks for the presence of an Authorization header.
  - Verifies the token using tokenUtils.verifyToken.
  - Attaches req.user with user details.

### RBAC Middleware (src/middlewares/rbacMiddleware.ts)
- Purpose: Enforce permissions based on user roles.
- Implementation:
  - Receives required roles as parameters.
  - Checks req.user.roles for required permissions.
  - Returns 403 Forbidden if access is denied.

### Error Handling Middleware (src/middlewares/errorHandler.ts)
- Purpose: Catch and handle errors uniformly.
- Implementation:
  - Logs error details using logger.
  - Sends structured error responses with status codes.
  - Differentiates between operational and programming errors.

### Validation Middleware (src/middlewares/validateMiddleware.ts)
- Purpose: Validate request data.
- Implementation:
  - Uses Joi schemas to validate req.body, req.params, and req.query.
  - Returns 400 Bad Request with validation errors.

### Socket Authentication Middleware (src/middlewares/socketAuthMiddleware.ts)
- Purpose: Authenticate WebSocket connections.
- Implementation:
  - Verifies JWT token from the query parameters.
  - Attaches user information to the socket instance.

---

## Utilities

### Logger (src/utilities/logger.ts)
- Uses Winston for logging.
- Configured for different environments (development, production).

### Token Utilities (src/utilities/tokenUtils.ts)
- generateAccessToken(userId: string): Creates an access JWT.
- generateRefreshToken(userId: string): Creates a refresh JWT.
- verifyToken(token: string, type: 'access' | 'refresh'): Verifies JWT tokens.

### File Upload Utility (src/utilities/fileUpload.ts)
- Handles file storage using services like AWS S3.
- Provides methods to upload and retrieve files.

### Validation Schemas (src/validations/)
- Define Joi schemas for request validation.

---

## Real-Time Communication Mechanisms

Implement real-time communication using Socket.IO:

### Socket Server Setup (src/sockets/index.ts)
- Initialize and configure Socket.IO server.
- Use socketAuthMiddleware.ts for authentication.

### WebSocket Events

#### Events and Data Payloads:

| Event Name | Emitted By | Listened By | Data Payload |
|----------------------|-------------------------|------------------------------------|------------------------------|
| message_new | messageService.ts | Frontend MessageList component | { message: Message } |
| message_reply | messageService.ts | Frontend MessageList component | { thread: Thread } |
| chore_update | choreService.ts | Frontend ChoreList component | { chore: Chore } |
| expense_new | sharedExpenseService.ts| Frontend ExpenseList component | { expense: Expense } |
| notification_new | notificationService.ts| Frontend NotificationCenter | { notification: Notification } |
| event_new | eventService.ts | Frontend SharedCalendar component| { event: Event } |
| household_update | householdService.ts | Frontend HouseholdSelector | { household: Household } |

#### Client Integration:
- Clients listen to events relevant to their households.
- Emit events for actions like creating messages or updating chores.

#### Integration with Services
- Services emit events after data changes.
- Controllers do not handle Socket.IO logic directly.

---

## Error Handling Mechanisms

### Backend Error Handling
- Operational Errors:
  - Handled by errorHandler.ts.
  - Common errors include validation failures, authentication errors, and not found errors.
  - Errors have a statusCode, message, and optional details.
- Programming Errors:
  - Logged with full stack traces.
  - Generic 500 Internal Server Error sent to clients.

### Error Response Structure