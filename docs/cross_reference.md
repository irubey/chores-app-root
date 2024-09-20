| Frontend Component | Backend API Endpoint(s) | Backend Service |
|--------------------------------------------|----------------------------------------------------------------------------------------------------|------------------------------------|
| Header.tsx | GET /api/users/me | authService.ts |
| HouseholdSelector.tsx | GET /api/households | householdService.ts |
| ChoreList.tsx | GET /api/households/:householdId/chores | choreService.ts |
| | (Real-Time) chore_update event via Socket.IO | choreService.ts |
| ChoreItem.tsx | PATCH /api/households/:householdId/chores/:choreId | choreService.ts |
| | DELETE /api/households/:householdId/chores/:choreId | choreService.ts |
| ChoreForm.tsx | POST /api/households/:householdId/chores | choreService.ts |
| MessageList.tsx | GET /api/households/:householdId/messages | messageService.ts |
| | (Real-Time) message_new, message_reply events via Socket.IO | messageService.ts |
| MessageItem.tsx | GET /api/households/:householdId/messages/:messageId/threads | messageService.ts |
| MessageForm.tsx | POST /api/households/:householdId/messages | messageService.ts |
| | POST /api/households/:householdId/messages/:messageId/threads | messageService.ts |
| ExpenseList.tsx | GET /api/households/:householdId/expenses | sharedExpenseService.ts |
| | (Real-Time) expense_new event via Socket.IO | sharedExpenseService.ts |
| ExpenseForm.tsx | POST /api/households/:householdId/expenses | sharedExpenseService.ts |
| SharedCalendar.tsx | GET /api/households/:householdId/events | eventService.ts |
| | (Real-Time) event_new, event_update events via Socket.IO | eventService.ts |
| CalendarIntegrationForm.tsx | POST /api/calendar/integrations | calendarIntegrationService.ts |
| NotificationCenter.tsx | GET /api/notifications | notificationService.ts |
| | (Real-Time) notification_new event via Socket.IO | notificationService.ts |
| AuthContext.tsx | POST /api/auth/refresh | authService.ts |
| | POST /api/auth/logout | authService.ts |
| HouseholdMemberList.tsx | GET /api/households/:householdId/members | householdService.ts |
| | DELETE /api/households/:householdId/members/:memberId | householdService.ts |
| InviteUserButton.tsx | POST /api/households/:householdId/invitations | householdService.ts |
| useChores.ts | - (Uses apiClient for chores API) | choreService.ts |
| | - Subscribes to chore_update event via Socket.IO | |
| useMessages.ts | - (Uses apiClient for messages API) | messageService.ts |
| | - Subscribes to message_new, message_reply events via Socket.IO | |
| useExpenses.ts | - (Uses apiClient for expenses API) | sharedExpenseService.ts |
| | - Subscribes to expense_new event via Socket.IO | |
| apiClient.ts | All API endpoints | Various backend services |
| SocketContext.tsx | Establishes WebSocket connection to the backend Socket.IO server | |
---