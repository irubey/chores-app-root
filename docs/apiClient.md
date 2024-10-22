# API Client Documentation

## Introduction

The apiClient is a comprehensive API client for the Household Management App, providing strongly-typed methods to interact with various backend endpoints. It handles authentication, calendar synchronization, chores management, financial transactions, household operations, messaging, and notifications. The client ensures global error handling and token refresh mechanisms to maintain seamless user experiences.

## Base URL Configuration

The apiClient is configured with a base URL that points to the backend server. By default, it uses the environment variable `NEXT_PUBLIC_API_BASE_URL`, falling back to `http://localhost:3000/api` if not specified.

## Authentication

### Methods

#### register

- **Description**: Registers a new user.
- **Endpoint**: `POST /auth/register`
- **Request Parameters**:
  - `email` (string)
  - `password` (string)
  - `name` (string)
- **Response**: Returns a User object.

#### login

- **Description**: Logs in an existing user.
- **Endpoint**: `POST /auth/login`
- **Request Parameters**:
  - `email` (string)
  - `password` (string)
- **Response**: Returns a User object.

#### logout

- **Description**: Logs out the current user.
- **Endpoint**: `POST /auth/logout`
- **Request Parameters**: None
- **Response**: Void

#### initializeAuth

- **Description**: Initializes authentication status by fetching the current user.
- **Endpoint**: `GET /auth/me`
- **Request Parameters**: None
- **Response**: Returns a User object or null if unauthenticated.

#### refreshToken

- **Description**: Refreshes the authentication token.
- **Endpoint**: `POST /auth/refresh-token`
- **Request Parameters**: None
- **Response**: Void

### Responses

All authentication methods return data adhering to the `ApiResponse<T>` type, where T varies based on the method.

## User Management

### Methods

#### getProfile

- **Description**: Retrieves the authenticated user's profile.
- **Endpoint**: `GET /users/profile`
- **Request Parameters**: None
- **Response**: Returns a User object.

#### updateProfile

- **Description**: Updates the authenticated user's profile.
- **Endpoint**: `POST /users/profile`
- **Request Parameters**:
  - `name` (string)
  - `email` (string)
  - `password` (string)
  - `profileImageURL` (string)
- **Response**: Returns the updated User object.

## Calendar Management

### Calendar Integration

The Calendar Integration module handles synchronization between the household calendar and external calendar providers.

#### Methods

##### syncCalendar

- **Description**: Syncs the household calendar with a user's personal calendar.
- **Endpoint**: `POST /households/{householdId}/calendar/sync`
- **Request Parameters**:
  - `householdId` (string)
  - `data`: `{ provider: string }`
- **Response**: Returns `SyncCalendarResponse` data.

### Calendar Events

The Calendar Events module manages general calendar events within a household.

#### Methods

##### getEvents

- **Description**: Retrieves all general calendar events for a household.
- **Endpoint**: `GET /households/{householdId}/calendar/events`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of `Event` objects.

##### createEvent

- **Description**: Creates a new general calendar event.
- **Endpoint**: `POST /households/{householdId}/calendar/events`
- **Request Parameters**:
  - `householdId` (string)
  - `eventData`: `Partial<Event>`
- **Response**: Returns the created `Event` object.

##### getEventDetails

- **Description**: Retrieves details of a specific general calendar event.
- **Endpoint**: `GET /households/{householdId}/calendar/events/{eventId}`
- **Request Parameters**:
  - `householdId` (string)
  - `eventId` (string)
- **Response**: Returns an `Event` object.

##### updateEvent

- **Description**: Updates an existing general calendar event.
- **Endpoint**: `PATCH /households/{householdId}/calendar/events/{eventId}`
- **Request Parameters**:
  - `householdId` (string)
  - `eventId` (string)
  - `eventData`: `Partial<Event>`
- **Response**: Returns the updated `Event` object.

##### deleteEvent

- **Description**: Deletes a general calendar event.
- **Endpoint**: `DELETE /households/{householdId}/calendar/events/{eventId}`
- **Request Parameters**:
  - `householdId` (string)
  - `eventId` (string)
- **Response**: Void

##### addReminder

- **Description**: Adds a reminder to a specific calendar event.
- **Endpoint**: `POST /households/{householdId}/calendar/events/{eventId}/reminders`
- **Request Parameters**:
  - `householdId` (string)
  - `eventId` (string)
  - `reminderData`: `{ time: string; method: string }`
- **Response**: Returns the updated `ChoreEvent` object with the new reminder.

##### removeReminder

- **Description**: Removes a specific reminder from a calendar event.
- **Endpoint**: `DELETE /households/{householdId}/calendar/events/{eventId}/reminders/{reminderId}`
- **Request Parameters**:
  - `householdId` (string)
  - `eventId` (string)
  - `reminderId` (string)
- **Response**: Void

##### getEventsByDate

- **Description**: Retrieves all calendar events for a specific date.
- **Endpoint**: `GET /households/{householdId}/calendar/events/date/{date}`
- **Request Parameters**:
  - `householdId` (string)
  - `date` (string in YYYY-MM-DD format)
- **Response**: Returns an array of `Event` objects for the specified date.

##### getUpcomingEvents

- **Description**: Retrieves upcoming general calendar events.
- **Endpoint**: `GET /households/{householdId}/calendar/events/upcoming`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of upcoming `Event` objects.

### Chore Events

The Chore Events module manages events that are specifically linked to chores within a household.

#### Methods

##### getChoreEvents

- **Description**: Retrieves all events linked to a specific chore.
- **Endpoint**: `GET /households/{householdId}/chores/{choreId}/events`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
- **Response**: Returns an array of `ChoreEvent` objects.

##### createChoreEvent

- **Description**: Creates a new event linked to a chore.
- **Endpoint**: `POST /households/{householdId}/chores/{choreId}/events`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `eventData`: `Partial<ChoreEvent>`
- **Response**: Returns the created `ChoreEvent` object.

##### getChoreEventDetails

- **Description**: Retrieves details of a specific chore-linked event.
- **Endpoint**: `GET /households/{householdId}/chores/{choreId}/events/{eventId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `eventId` (string)
- **Response**: Returns a `ChoreEvent` object.

##### updateChoreEvent

- **Description**: Updates an existing chore-linked event.
- **Endpoint**: `PATCH /households/{householdId}/chores/{choreId}/events/{eventId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `eventId` (string)
  - `eventData`: `Partial<ChoreEvent>`
- **Response**: Returns the updated `ChoreEvent` object.

##### deleteChoreEvent

- **Description**: Deletes a chore-linked event.
- **Endpoint**: `DELETE /households/{householdId}/chores/{choreId}/events/{eventId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `eventId` (string)
- **Response**: Void

##### completeChoreEvent

- **Description**: Marks a chore event as completed.
- **Endpoint**: `POST /households/{householdId}/chores/{choreId}/events/{eventId}/complete`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `eventId` (string)
- **Response**: Returns the updated `ChoreEvent` object with status marked as completed.

##### rescheduleChoreEvent

- **Description**: Reschedules a chore event.
- **Endpoint**: `POST /households/{householdId}/chores/{choreId}/events/{eventId}/reschedule`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `eventId` (string)
  - `newDate`: `{ date: string }`
- **Response**: Returns the updated `ChoreEvent` object with the new schedule.

##### getUpcomingChoreEvents

- **Description**: Retrieves upcoming chore-linked events.
- **Endpoint**: `GET /households/{householdId}/chores/{choreId}/events/upcoming`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
- **Response**: Returns an array of upcoming `ChoreEvent` objects.

### Responses

Both Calendar Events and Chore Events methods return data adhering to the `ApiResponse<T>` type, ensuring consistent response structures across all event-related endpoints.

## Chores Management

### Methods

#### getChores

- **Description**: Retrieves all chores for a household.
- **Endpoint**: `GET /households/{householdId}/chores`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of Chore objects.

#### createChore

- **Description**: Creates a new chore in a household.
- **Endpoint**: `POST /households/{householdId}/chores`
- **Request Parameters**:
  - `householdId` (string)
  - `choreData`: CreateChoreDTO
- **Response**: Returns the created Chore object.

#### updateChore

- **Description**: Updates an existing chore.
- **Endpoint**: `PATCH /households/{householdId}/chores/{choreId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `choreData`: UpdateChoreDTO
- **Response**: Returns the updated Chore object.

#### deleteChore

- **Description**: Deletes a chore from a household.
- **Endpoint**: `DELETE /households/{householdId}/chores/{choreId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
- **Response**: Void

#### requestChoreSwap

- **Description**: Requests to swap a chore with another user.
- **Endpoint**: `POST /households/{householdId}/chores/{choreId}/swap-request`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `targetUserId` (string)
- **Response**: Returns a ChoreSwapRequest object.

#### approveChoreSwap

- **Description**: Approves or rejects a chore swap request.
- **Endpoint**: `PATCH /households/{householdId}/chores/{choreId}/swap-approve`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `swapRequestId` (string)
  - `approved` (boolean)
- **Response**: Returns the updated Chore object.

### Subtasks

#### createSubtask

- **Description**: Creates a subtask under a specific chore.
- **Endpoint**: `POST /households/{householdId}/chores/{choreId}/subtasks`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `subtaskData`: CreateSubtaskDTO
- **Response**: Returns the created Subtask object.

#### updateSubtask

- **Description**: Updates an existing subtask.
- **Endpoint**: `PATCH /households/{householdId}/chores/{choreId}/subtasks/{subtaskId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `subtaskId` (string)
  - `subtaskData`: UpdateSubtaskDTO
- **Response**: Returns the updated Subtask object.

#### deleteSubtask

- **Description**: Deletes a subtask from a chore.
- **Endpoint**: `DELETE /households/{householdId}/chores/{choreId}/subtasks/{subtaskId}`
- **Request Parameters**:
  - `householdId` (string)
  - `choreId` (string)
  - `subtaskId` (string)
- **Response**: Void

### Responses

Chores methods adhere to the `ApiResponse<T>` type, providing consistent data structures for responses.

## Finances Management

### Methods

#### getExpenses

- **Description**: Retrieves all expenses for a household.
- **Endpoint**: `GET /households/{householdId}/expenses`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of Expense objects.

#### createExpense

- **Description**: Creates a new expense in a household.
- **Endpoint**: `POST /households/{householdId}/expenses`
- **Request Parameters**:
  - `householdId` (string)
  - `expenseData`: CreateExpenseDTO
- **Response**: Returns the created Expense object.

#### updateExpense

- **Description**: Updates an existing expense.
- **Endpoint**: `PATCH /households/{householdId}/expenses/{expenseId}`
- **Request Parameters**:
  - `householdId` (string)
  - `expenseId` (string)
  - `expenseData`: UpdateExpenseDTO
- **Response**: Returns the updated Expense object.

#### deleteExpense

- **Description**: Deletes an expense from a household.
- **Endpoint**: `DELETE /households/{householdId}/expenses/{expenseId}`
- **Request Parameters**:
  - `householdId` (string)
  - `expenseId` (string)
- **Response**: Void

#### getTransactions

- **Description**: Retrieves all transactions for a household.
- **Endpoint**: `GET /households/{householdId}/transactions`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of Transaction objects.

#### createTransaction

- **Description**: Creates a new transaction for a household.
- **Endpoint**: `POST /households/{householdId}/transactions`
- **Request Parameters**:
  - `householdId` (string)
  - `transactionData`: CreateTransactionDTO
- **Response**: Returns the created Transaction object.

#### updateTransaction

- **Description**: Updates an existing transaction.
- **Endpoint**: `PATCH /households/{householdId}/transactions/{transactionId}`
- **Request Parameters**:
  - `householdId` (string)
  - `transactionId` (string)
  - `transactionData`: UpdateTransactionDTO
- **Response**: Returns the updated Transaction object.

#### deleteTransaction

- **Description**: Deletes a transaction from a household.
- **Endpoint**: `DELETE /households/{householdId}/transactions/{transactionId}`
- **Request Parameters**:
  - `householdId` (string)
  - `transactionId` (string)
- **Response**: Void

#### uploadReceipt

- **Description**: Uploads a receipt file for an expense.
- **Endpoint**: `POST /households/{householdId}/expenses/{expenseId}/receipts`
- **Request Parameters**:
  - `householdId` (string)
  - `expenseId` (string)
  - `file`: File
- **Response**: Returns a Receipt object.

#### getReceipts

- **Description**: Retrieves all receipts for a household.
- **Endpoint**: `GET /households/{householdId}/expenses/{expenseId}/receipts`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of Receipt objects.

#### getReceiptById

- **Description**: Retrieves a receipt by ID.
- **Endpoint**: `GET /households/{householdId}/expenses/{expenseId}/receipts/{receiptId}`
- **Request Parameters**:
  - `householdId` (string)
  - `expenseId` (string)
  - `receiptId` (string)
- **Response**: Returns a Receipt object.

#### deleteReceipt

- **Description**: Deletes a receipt by ID.
- **Endpoint**: `DELETE /households/{householdId}/expenses/{expenseId}/receipts/{receiptId}`
- **Request Parameters**:
  - `householdId` (string)
  - `expenseId` (string)
  - `receiptId` (string)
- **Response**: Void

### Responses

Finances methods utilize the `ApiResponse<T>` type, ensuring uniform response structures across all finance-related endpoints.

## Household Management

### Methods

#### getHouseholds

- **Description**: Retrieves all households the authenticated user belongs to.
- **Endpoint**: `GET /households`
- **Request Parameters**: None
- **Response**: Returns an array of Household objects.

#### createHousehold

- **Description**: Creates a new household.
- **Endpoint**: `POST /households`
- **Request Parameters**:
  - `name` (string)
  - `currency` (string)
- **Response**: Returns the created Household object.

#### getHouseholdDetails

- **Description**: Retrieves details of a specific household.
- **Endpoint**: `GET /households/{householdId}`
- **Query Parameters**
  - `includeMembers` (boolean, optional): if `true`, includes array of members in response
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns a Household object. If `includeMembers=true`, the Household object includes a `members` array.

#### getHouseholdMembers

- **Description**: Retrieves all members of a household.
- **Endpoint**: `GET /households/{householdId}/members`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of HouseholdMember objects.

#### updateHousehold

- **Description**: Updates household details.
- **Endpoint**: `PATCH /households/{householdId}`
- **Request Parameters**:
  - `householdId` (string)
  - `data`: Partial<Household>
- **Response**: Returns the updated Household object.

#### deleteHousehold

- **Description**: Deletes a household.
- **Endpoint**: `DELETE /households/{householdId}`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Void

#### updateMemberStatus

- **Description**: Updates the status of a household member.
- **Endpoint**: `PATCH /households/{householdId}/members/{memberId}/status`
- **Request Parameters**:
  - `householdId` (string)
  - `memberId` (string)
  - `status` ("ACCEPTED" | "REJECTED")
- **Response**: Returns the updated HouseholdMember object.

#### getSelectedHouseholds

- **Description**: Retrieves all selected households for the authenticated user.
- **Endpoint**: `GET /households/selected`
- **Request Parameters**: None
- **Response**: Returns an array of Household objects.

#### toggleHouseholdSelection

- **Description**: Toggles the selection state of a household for a member.
- **Endpoint**: `PATCH /households/{householdId}/members/{memberId}/selection`
- **Request Parameters**:
  - `householdId` (string)
  - `memberId` (string)
  - `isSelected` (boolean)
- **Response**: Returns the updated HouseholdMember object.

### Invitations

#### sendInvitation

- **Description**: Sends an invitation to a new member via email.
- **Endpoint**: `POST /households/{householdId}/invitations`
- **Request Parameters**:
  - `householdId` (string)
  - `email` (string)
- **Response**: Returns a HouseholdMember object.

#### acceptInvitation

- **Description**: Accepts a household invitation using a token.
- **Endpoint**: `POST /households/invitations/accept`
- **Request Parameters**:
  - `invitationToken` (string)
- **Response**: Returns a Household object.

#### rejectInvitation

- **Description**: Rejects a household invitation using a token.
- **Endpoint**: `POST /households/invitations/reject`
- **Request Parameters**:
  - `invitationToken` (string)
    **Response**: Void

### Members

#### addMember

- **Description**: Adds a new member to a household.
- **Endpoint**: `POST /households/{householdId}/members`
- **Request Parameters**:
  - `householdId` (string)
  - `data`: { email: string; role?: string }
- **Response**: Returns a HouseholdMember object.

#### removeMember

- **Description**: Removes a member from a household.
- **Endpoint**: `DELETE /households/{householdId}/members/{memberId}`
- **Request Parameters**:
  - `householdId` (string)
  - `memberId` (string)
- **Response**: Void

#### updateMemberRole

- **Description**: Updates the role of a household member.
- **Endpoint**: `PATCH /households/{householdId}/members/{memberId}/role`
- **Request Parameters**:
  - `householdId` (string)
  - `memberId` (string)
  - `role` (string)
- **Response**: Returns the updated HouseholdMember object.

### Responses

Household methods conform to the `ApiResponse<T>` structure, ensuring consistent and predictable responses.

## Messaging Management

### Threads

#### getThreads

- **Description**: Retrieves all message threads within a household.
- **Endpoint**: `GET /households/{householdId}/threads`
- **Request Parameters**:
  - `householdId` (string)
- **Response**: Returns an array of Thread objects.

#### createThread

- **Description**: Creates a new message thread.
- **Endpoint**: `POST /households/{householdId}/threads`
- **Request Parameters**:
  - `householdId` (string)
  - `data`: { title: string; participants: string[] }
- **Response**: Returns the created Thread object.

#### getThreadDetails

- **Description**: Retrieves details of a specific thread.
- **Endpoint**: `GET /households/{householdId}/threads/{threadId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
- **Response**: Returns a Thread object.

#### updateThread

- **Description**: Updates an existing message thread.
- **Endpoint**: `PATCH /households/{householdId}/threads/{threadId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `data`: UpdateThreadDTO
- **Response**: Returns the updated Thread object.

#### deleteThread

- **Description**: Deletes a specific message thread.
- **Endpoint**: `DELETE /households/{householdId}/threads/{threadId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
- **Response**: Void

#### inviteUsers

- **Description**: Invites users to participate in a thread.
- **Endpoint**: `POST /households/{householdId}/threads/{threadId}/invite`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `userIds` (string[])
- **Response**: Void

### Messages

#### getMessages

- **Description**: Retrieves all messages within a thread.
- **Endpoint**: `GET /households/{householdId}/threads/{threadId}/messages`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
- **Response**: Returns an array of Message objects.

#### getMessageDetails

- **Description**: Retrieves details of a specific message.
- **Endpoint**: `GET /households/{householdId}/threads/{threadId}/messages/{messageId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageId` (string)
- **Response**: Returns a Message object.

#### sendMessage

- **Description**: Sends a new message within a thread.
- **Endpoint**: `POST /households/{householdId}/threads/{threadId}/messages`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageData`: CreateMessageDTO
- **Response**: Returns the created Message object.

#### updateMessage

- **Description**: Updates an existing message.
- **Endpoint**: `PATCH /households/{householdId}/threads/{threadId}/messages/{messageId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageId` (string)
  - `messageData`: UpdateMessageDTO
- **Response**: Returns the updated Message object.

#### deleteMessage

- **Description**: Deletes a message from a thread.
- **Endpoint**: `DELETE /households/{householdId}/threads/{threadId}/messages/{messageId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageId` (string)
- **Response**: Void

#### uploadMessageAttachment

- **Description**: Uploads an attachment for a message.
- **Endpoint**: `POST /households/{householdId}/threads/{threadId}/messages/{messageId}/attachments`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageId` (string)
  - `file`: File
- **Response**: Returns an Attachment object.

#### getMessageAttachment

- **Description**: Retrieves a specific attachment for a message.
- **Endpoint**: `GET /households/{householdId}/threads/{threadId}/messages/{messageId}/attachments/{attachmentId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageId` (string)
  - `attachmentId` (string)
- **Response**: Returns an Attachment object.

#### deleteMessageAttachment

- **Description**: Deletes a specific attachment from a message.
- **Endpoint**: `DELETE /households/{householdId}/threads/{threadId}/messages/{messageId}/attachments/{attachmentId}`
- **Request Parameters**:
  - `householdId` (string)
  - `threadId` (string)
  - `messageId` (string)
  - `attachmentId` (string)
- **Response**: Void

### Responses

Messaging methods utilize specific response types in addition to the general `ApiResponse<T>` structure:

- `GetThreadsResponse`
- `CreateThreadResponse`
- `UpdateThreadResponse`
- `GetMessagesResponse`
- `SendMessageResponse`
- `UpdateMessageResponse`

These specific response types ensure consistent and predictable data structures for messaging-related operations.

## Notifications

### Methods

#### getNotifications

- **Description**: Retrieves all notifications for the authenticated user.
- **Endpoint**: `GET /notifications`
- **Request Parameters**: None
- **Response**: Returns an array of Notification objects.

#### markNotificationAsRead

- **Description**: Marks a specific notification as read.
- **Endpoint**: `PATCH /notifications/{notificationId}/read`
- **Request Parameters**:
  - `notificationId` (string)
- **Response**: Returns the updated Notification object.

#### deleteNotification

- **Description**: Deletes a specific notification.
- **Endpoint**: `DELETE /notifications/{notificationId}`
- **Request Parameters**:
  - `notificationId` (string)
- **Response**: Void

### Responses

Notification methods adhere to the `ApiResponse<T>` structure for uniform responses.

## Error Handling

The apiClient employs global error handling through Axios interceptors. It manages authentication errors by attempting token refreshes and handling failed refresh scenarios by logging out the user. Detailed error scenarios include:

- **401 Unauthorized:**

  - **Action:** Triggers token refresh logic.
  - **If Refresh Succeeds:** Retries the original request.
  - **If Refresh Fails:** Logs out the user and redirects to the login page.

- **Network Errors:**

  - **Action:** Logs "API Error: No response received from server."

- **Other Errors:**
  - **Action:** Logs the specific error message for debugging purposes.

### Method-Specific Error Handling

- Most methods will attempt to refresh the authentication token if a 401 Unauthorized error is received.
- If token refresh fails, the user is logged out and redirected to the login page.
- Network errors and server errors are caught and logged for debugging purposes.

## Data Structures

The apiClient leverages TypeScript interfaces to define the structure of requests and responses. Key data structures include:

- **User**: Represents a user with properties like `id`, `email`, `name`, etc.
- **Household**: Represents a household with properties like `id`, `name`, `members`, etc.
- **Chore**: Represents a chore with properties like `id`, `title`, `assignedUsers`, etc.
- **Expense**: Represents an expense with properties like `id`, `amount`, `description`, etc.
- **Transaction**: Represents a financial transaction with properties like `id`, `amount`, `type`, etc.
- **Message & Thread**: Represents messaging structures with properties like `id`, `content`, `participants`, etc.
- **Notification**: Represents a notification for the user with properties like `id`, `message`, `isRead`, etc.
- **Attachment**: Represents an uploaded file attachement with properties like id, fileURL, fileType, etc.
- **UpdateUserDTO**: Represents a user with properties like name, email, password, profileImage, etc.

Refer to the TypeScript interfaces in the apiClient.ts file for detailed structure definitions.
