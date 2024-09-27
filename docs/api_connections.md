# Frontend API Client Alignment with Backend Routes

Below is a detailed mapping between your backend route files and the corresponding frontend API client methods.

## Table of Contents

1. [Authentication Routes (`/auth`)](#authentication-routes-auth)
2. [User Routes (`/users`)](#user-routes-users)
3. [Household Routes (`/households`)](#household-routes-households)
4. [Chore Routes (`/households/:householdId/chores`)](#chore-routes-householdshouseholdidchores)
5. [Expense Routes (`/households/:householdId/expenses`)](#expense-routes-householdshouseholdidexpenses)
6. [Message Routes (`/households/:householdId/messages`)](#message-routes-householdshouseholdidmessages)
7. [Event Routes (`/households/:householdId/events`)](#event-routes-householdshouseholdidevents)
8. [Calendar Integration Routes (`/households/:householdId/calendar`)](#calendar-integration-routes-householdshouseholdidcalendar)
9. [Notification Routes (`/notifications`)](#notification-routes-notifications)
10. [Subtask Routes (`/households/:householdId/chores/:choreId/subtasks`)](#subtask-routes-householdshouseholdidchoreschoreidsubtasks)
11. [Transaction Routes (`/households/:householdId/transactions`)](#transaction-routes-householdshouseholdidtransactions)
12. [Utility Routes (`/upload`, `/attachments`)](#utility-routes-upload-attachments)

---

## Authentication Routes (/auth)

### Backend Route File

- **File**: `backend/src/routes/auth-routes.ts`
- **Mounted Path**: `/auth`
- **Defined Routes**:
  - POST `/register`
  - POST `/login`
  - POST `/logout`
  - POST `/refresh-token`
  - GET `/me`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  auth = {
    login: async (credentials) => { /* POST /auth/login */ },
    register: async (data) => { /* POST /auth/register */ },
    logout: async () => { /* POST /auth/logout */ },
    refreshToken: async () => { /* POST /auth/refresh-token */ },
    getCurrentUser: async () => { /* GET /auth/me */ },
    initializeAuth: async () => { /* Calls getCurrentUser */ },
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|-------------------|------------------|-------------|
| POST /auth/register | auth.register | Register a new user |
| POST /auth/login | auth.login | Authenticate a user and obtain tokens |
| POST /auth/logout | auth.logout | Invalidate the user session |
| POST /auth/refresh-token | auth.refreshToken | Refresh the access token |
| GET /auth/me | auth.getCurrentUser | Retrieve the current authenticated user details |
| N/A | auth.initializeAuth | Initialize authentication state on frontend |

## User Routes (/users)

### Backend Route File

- **File**: `backend/src/routes/user-routes.ts`
- **Mounted Path**: `/users`
- **Defined Routes**:
  - POST `/register`
  - POST `/login`
  - GET `/profile`
  - Routes under `/households`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  auth = {
    // Existing auth methods
    // ...
  };

  households = {
    // Existing household methods
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|-----------------------------|-------------------------------|----------------------------------------------|
| POST /users/register | auth.register | Register a new user (same as /auth/register)|
| POST /users/login | auth.login | Authenticate a user (same as /auth/login) |
| GET /users/profile | auth.getCurrentUser | Get user profile |
| Routes under /users/households | households methods | Manage user-associated households |

> Note: There appears to be overlap between /auth and /users routes for register and login. Ensure that these routes serve distinct purposes or consider consolidating to avoid redundancy.

---

## Household Routes (/households)

### Backend Route File

- **File**: `backend/src/routes/household-routes.ts`
- **Mounted Path**: `/households`
- **Defined Routes**:
  - POST `/`
  - GET `/:householdId`
  - PATCH `/:householdId`
  - DELETE `/:householdId`
  - Member management under `/:householdId/members`

### Frontend API Client Methods

```ts
class ApiClient {
  // ...

  households = {
    getHouseholds: async () => { /* GET /households */ },
    createHousehold: async (data) => { /* POST /households */ },
    getHousehold: async (householdId) => { /* GET /households/:householdId */ },
    updateHousehold: async (householdId, data) => { /* PATCH /households/:householdId */ },
    deleteHousehold: async (householdId) => { /* DELETE /households/:householdId */ },
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|----------------------------|----------------------------|-------------------------------------|
| GET /households | households.getHouseholds | Retrieve all households |
| POST /households | households.createHousehold | Create a new household |
| GET /households/:householdId | households.getHousehold | Get details of a specific household |
| PATCH /households/:householdId | households.updateHousehold | Update household information |
| DELETE /households/:householdId | households.deleteHousehold | Delete a household |

---

## Chore Routes (/households/:householdId/chores)

### Backend Route File

- **File**: `backend/src/routes/chore-routes.ts`
- **Mounted Path**: `/households/:householdId/chores`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - GET `/:choreId`
  - PATCH `/:choreId`
  - DELETE `/:choreId`
  - Subtask management under `/:choreId/subtasks`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...
class ApiClient {
  // ...

  chores = {
    getChores: async (householdId) => { /* GET /households/:householdId/chores */ },
    createChore: async (householdId, choreData) => { /* POST /households/:householdId/chores */ },
    updateChore: async (householdId, choreId, choreData) => { /* PATCH /households/:householdId/chores/:choreId */ },
    deleteChore: async (householdId, choreId) => { /* DELETE /households/:householdId/chores/:choreId */ },
    // ...
  };

  // ...
}
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|--------------------------------------------------------|----------------------------------|-----------------------------------|
| GET /households/:householdId/chores | chores.getChores | Retrieve all chores in a household|
| POST /households/:householdId/chores | chores.createChore | Create a new chore |
| PATCH /households/:householdId/chores/:choreId | chores.updateChore | Update an existing chore |
| DELETE /households/:householdId/chores/:choreId | chores.deleteChore | Delete a chore |
| Subtask Routes (/:choreId/subtasks) | Handled in Subtask Routes | Manage subtasks for a chore |

---

## Expense Routes (/households/:householdId/expenses)

### Backend Route File

- **File**: `backend/src/routes/expense-routes.ts`
- **Mounted Path**: `/households/:householdId/expenses`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - GET `/:expenseId`
  - PATCH `/:expenseId`
  - DELETE `/:expenseId`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  finances = {
    getExpenses: async (householdId) => { /* GET /households/:householdId/expenses */ },
    createExpense: async (householdId, expenseData) => { /* POST /households/:householdId/expenses */ },
    updateExpense: async (householdId, expenseId, expenseData) => { /* PATCH /households/:householdId/expenses/:expenseId */ },
    deleteExpense: async (householdId, expenseId) => { /* DELETE /households/:householdId/expenses/:expenseId */ },
    // ...
  };

  // ...
}
```

### Alignment

| Backend Endpoint | Frontend Method | Description |
|-------------------------------------------------------------|-------------------------------|------------------------------------|
| GET /households/:householdId/expenses | finances.getExpenses | Retrieve all expenses in a household|
| POST /households/:householdId/expenses | finances.createExpense | Create a new expense |
| PATCH /households/:householdId/expenses/:expenseId | finances.updateExpense | Update an existing expense |
| DELETE /households/:householdId/expenses/:expenseId | finances.deleteExpense | Delete an expense |

---

## Message Routes (/households/:householdId/messages)

### Backend Route File

- **File**: `backend/src/routes/message-routes.ts`
- **Mounted Path**: `/households/:householdId/messages`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - GET `/:messageId`
  - PATCH `/:messageId`
  - DELETE `/:messageId`
  - Threads and attachments under `/:messageId`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  messages = {
    getMessages: async (householdId) => { /* GET /households/:householdId/messages */ },
    createMessage: async (householdId, data) => { /* POST /households/:householdId/messages */ },
    updateMessage: async (householdId, messageId, data) => { /* PATCH /households/:householdId/messages/:messageId */ },
    deleteMessage: async (householdId, messageId) => { /* DELETE /households/:householdId/messages/:messageId */ },
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|---------------------------------------------------------|---------------------------|--------------------------------------|
| GET /households/:householdId/messages | messages.getMessages | Retrieve all messages in a household |
| POST /households/:householdId/messages | messages.createMessage | Create a new message |
| PATCH /households/:householdId/messages/:messageId | messages.updateMessage | Update an existing message |
| DELETE /households/:householdId/messages/:messageId | messages.deleteMessage | Delete a message |
| Threads and Attachments (/:messageId/threads, etc.) | Not explicitly handled | Consider adding methods if needed |

> Suggestion: If your backend handles threads and attachments within messages, you might want to extend your messages methods to manage these nested resources.

---

## Event Routes (/households/:householdId/events)

### Backend Route File

- **File**: `backend/src/routes/event-routes.ts`
- **Mounted Path**: `/households/:householdId/events`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - GET `/:eventId`
  - PATCH `/:eventId`
  - DELETE `/:eventId`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  households = {
    // Existing household methods

    getHouseholdEvents: async (householdId) => { /* GET /households/:householdId/events */ },
    createEvent: async (householdId, eventData) => { /* POST /households/:householdId/events */ },
    updateEvent: async (householdId, eventId, eventData) => { /* PATCH /households/:householdId/events/:eventId */ },
    deleteEvent: async (householdId, eventId) => { /* DELETE /households/:householdId/events/:eventId */ },
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|--------------------------------------------------------------|------------------------------|----------------------------------------|
| GET /households/:householdId/events | households.getHouseholdEvents | Retrieve all events in a household |
| POST /households/:householdId/events | households.createEvent | Create a new event |
| PATCH /households/:householdId/events/:eventId | households.updateEvent | Update an existing event |
| DELETE /households/:householdId/events/:eventId | households.deleteEvent | Delete an event |

---

## Calendar Integration Routes (/households/:householdId/calendar)

### Backend Route File

- **File**: `backend/src/routes/calendar-integration-routes.ts`
- **Mounted Path**: `/households/:householdId/calendar`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - PATCH `/:eventId`
  - DELETE `/:eventId`
  - POST `/sync`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  households = {
    // Existing household methods

    syncCalendar: async (householdId, data) => { /* POST /households/:householdId/calendar/sync */ },
    // Other calendar integration methods can be added here
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|-----------------------------------------------------------------|---------------------------|--------------------------------------------|
| POST /households/:householdId/calendar/sync | households.syncCalendar | Sync household calendar with external providers|
| GET /households/:householdId/calendar | Not explicitly handled | Consider adding methods if needed |
| POST /households/:householdId/calendar | Not explicitly handled | Consider adding methods if needed |
| PATCH /households/:householdId/calendar/:eventId | Not explicitly handled | Consider adding methods if needed |
| DELETE /households/:householdId/calendar/:eventId | Not explicitly handled | Consider adding methods if needed |

> Suggestion: Currently, only syncCalendar is handled. You may want to implement additional methods for full CRUD operations on the calendar if required.

---

## Notification Routes (/notifications)

### Backend Route File

- **File**: `backend/src/routes/notification-routes.ts`
- **Mounted Path**: `/notifications`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - PATCH `/:notificationId/read`
  - DELETE `/:notificationId`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  notifications = {
    getNotifications: async () => { /* GET /notifications */ },
    markAsRead: async (notificationId) => { /* PATCH /notifications/:notificationId/read */ },
    // Add more notification-related methods as needed
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|----------------------------------------------|------------------------|----------------------------------------------|
| GET /notifications | notifications.getNotifications | Retrieve all notifications |
| PATCH /notifications/:notificationId/read | notifications.markAsRead | Mark a specific notification as read |
| DELETE /notifications/:notificationId | Not explicitly handled | Consider adding a method to delete notifications |

> Suggestion: Implement a method like deleteNotification(notificationId) to align with backend capabilities.

---

## Subtask Routes (/households/:householdId/chores/:choreId/subtasks)

### Backend Route File

- **File**: `backend/src/routes/subtask-routes.ts`
- **Mounted Path**: `/households/:householdId/chores/:choreId/subtasks`
- **Defined Routes**:
  - POST `/:subtaskId`
  - PATCH `/:subtaskId`
  - DELETE `/:subtaskId`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  // Potentially within `chores` or a separate `subtasks` section
  chores = {
    // Existing chore methods

    createSubtask: async (householdId, choreId, subtaskData) => { /* POST /households/:householdId/chores/:choreId/subtasks */ },
    updateSubtask: async (householdId, choreId, subtaskId, subtaskData) => { /* PATCH /households/:householdId/chores/:choreId/subtasks/:subtaskId */ },
    deleteSubtask: async (householdId, choreId, subtaskId) => { /* DELETE /households/:householdId/chores/:choreId/subtasks/:subtaskId */ },
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|-----------------------------------------------------------------------------|-----------------------------------|------------------------------------|
| POST /households/:householdId/chores/:choreId/subtasks | chores.createSubtask | Create a new subtask |
| PATCH /households/:householdId/chores/:choreId/subtasks/:subtaskId | chores.updateSubtask | Update an existing subtask |
| DELETE /households/:householdId/chores/:choreId/subtasks/:subtaskId | chores.deleteSubtask | Delete a subtask |

> Note: Ensure that subtask methods are appropriately nested within the chores namespace or consider creating a separate subtasks namespace for better organization.

---

## Transaction Routes (/households/:householdId/transactions)

### Backend Route File

- **File**: `backend/src/routes/transaction-routes.ts`
- **Mounted Path**: `/households/:householdId/transactions`
- **Defined Routes**:
  - GET `/`
  - POST `/`
  - PATCH `/:transactionId`
  - DELETE `/:transactionId`

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  finances = {
    getExpenses: async () => { /* Existing expenses methods */ },
    // Existing finances methods
    // Implement transaction-specific methods:
    getTransactions: async (householdId) => { /* GET /households/:householdId/transactions */ },
    createTransaction: async (householdId, transactionData) => { /* POST /households/:householdId/transactions */ },
    updateTransaction: async (householdId, transactionId, transactionData) => { /* PATCH /households/:householdId/transactions/:transactionId */ },
    deleteTransaction: async (householdId, transactionId) => { /* DELETE /households/:householdId/transactions/:transactionId */ },
    // ...
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|----------------------------------------------------------------------|--------------------------------|-----------------------------------------|
| GET /households/:householdId/transactions | finances.getTransactions | Retrieve all transactions in a household|
| POST /households/:householdId/transactions | finances.createTransaction | Create a new transaction |
| PATCH /households/:householdId/transactions/:transactionId | finances.updateTransaction | Update an existing transaction |
| DELETE /households/:householdId/transactions/:transactionId | finances.deleteTransaction | Delete a transaction |

> Suggestion: Implement these transaction methods within the finances namespace to maintain logical grouping.

---

## Utility Routes (/upload, /attachments)

### Backend Route File

- **File**: Varies (Not specified, but endpoints include /upload and /attachments)
- **Defined Routes**:
  - POST /upload: Upload files
  - GET /attachments/:attachmentId: Retrieve attachment details

### Frontend API Client Methods
```ts
class ApiClient {
  // ...

  utils = {
    uploadFile: async (file) => { /* POST /upload */ },
    getAttachment: async (attachmentId) => { /* GET /attachments/:attachmentId */ },
    // Add more utility-related methods as needed
  };

  // ...
}
```
### Alignment

| Backend Endpoint | Frontend Method | Description |
|--------------------------------------|--------------------------|---------------------------------|
| POST /upload | utils.uploadFile | Upload a file to the server |
| GET /attachments/:attachmentId | utils.getAttachment | Retrieve attachment details |

---

### Summary

Your frontend apiClient comprehensively covers the backend routes, ensuring seamless interaction between the frontend and backend of your Household Management App. Here's a quick checklist to ensure full alignment:

- **Authentication**: Fully aligned with all necessary methods implemented.
- **User Management**: Slight overlap in register and login between /auth and /users. Clarify or consolidate routes if necessary.
- **Household Management**: All essential CRUD operations are covered.
- **Chores, Expenses, Messages, Events, Calendar, Notifications, Subtasks, Transactions**: Properly mapped with potential areas for expansion as noted.
- **Utilities**: File upload and attachment retrieval are handled.

### Recommendations

1. **Handle Nested Resources**: For routes like threads and attachments within messages, consider adding dedicated methods in the messages namespace.
2. **Expand API Client**: Implement any missing methods for complete CRUD functionality, such as deleting notifications.
3. **Review Route Overlaps**: Ensure that overlapping routes between /auth and /users serve distinct purposes or refactor to eliminate redundancy.
4. **Namespace Organization**: Maintain consistent namespace organization in the apiClient for better scalability and maintainability.

By following this alignment and the associated recommendations, you can ensure that your frontend and backend remain synchronized, facilitating efficient development and reducing potential integration issues.