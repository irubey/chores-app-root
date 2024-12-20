# Chores Feature Documentation

## Overview

The chores feature allows household members to create, manage, and track household chores. It includes functionality for creating chores, managing subtasks, assigning chores to members, and handling chore swap requests between members.

## Data Models

### Enums

#### ChoreStatus

- `PENDING`: Chore is waiting to be started
- `IN_PROGRESS`: Chore is currently being worked on
- `COMPLETED`: Chore has been completed

#### SubtaskStatus

- `PENDING`: Subtask is not completed
- `COMPLETED`: Subtask is completed

#### ChoreSwapRequestStatus

- `PENDING`: Swap request is waiting for approval
- `APPROVED`: Swap request has been approved
- `REJECTED`: Swap request has been rejected

#### ChoreAction

- `CREATED`: Chore was created
- `UPDATED`: Chore was updated
- `COMPLETED`: Chore was marked as completed
- `ASSIGNED`: Chore was assigned to a user
- `DELETED`: Chore was deleted
- `SWAPPED`: Chore was swapped between users
- `TEMPLATE_CREATED`: Chore template was created
- `TEMPLATE_UPDATED`: Chore template was updated
- `TEMPLATE_DELETED`: Chore template was deleted
- `RECURRENCE_CHANGED`: Chore recurrence was modified

### Core Types

#### Chore

```typescript
interface Chore {
  id: string;
  householdId: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  dueDate?: Date;
  status: ChoreStatus;
  priority?: number;
  eventId?: string;
  recurrenceRuleId?: string;
}
```

#### Subtask

```typescript
interface Subtask {
  id: string;
  choreId: string;
  title: string;
  description?: string;
  status: SubtaskStatus;
}
```

#### ChoreAssignment

```typescript
interface ChoreAssignment {
  id: string;
  choreId: string;
  userId: string;
  assignedAt: Date;
  completedAt?: Date;
}
```

## API Endpoints

### Chores

#### Get All Chores

- **URL**: GET `/api/households/:householdId/chores`
- **Description**: Retrieves all chores for a specific household
- **Access**: Protected (ADMIN, MEMBER)
- **Response**:

```typescript
{
  data: {
    id: string;
    title: string;
    description?: string;
    status: ChoreStatus;
    // ... other Chore fields
    assignments: ChoreAssignmentWithUser[];
    subtasks: Subtask[];
  }[]
}
```

#### Create Chore

- **URL**: POST `/api/households/:householdId/chores`
- **Description**: Creates a new chore within a household
- **Access**: Protected (ADMIN only)
- **Request Body**:

```typescript
{
  title: string;
  description?: string;
  dueDate?: Date;
  status?: ChoreStatus;
  priority?: number;
  assignments?: { userId: string }[];
  subtasks?: {
    title: string;
    description?: string;
    status?: SubtaskStatus;
  }[];
}
```

- **Response**: Created ChoreWithAssignees

#### Get Chore Details

- **URL**: GET `/api/households/:householdId/chores/:choreId`
- **Description**: Retrieves details of a specific chore
- **Access**: Protected (ADMIN, MEMBER)
- **Response**: ChoreWithAssignees including subtasks and assignments

#### Update Chore

- **URL**: PATCH `/api/households/:householdId/chores/:choreId`
- **Description**: Updates an existing chore
- **Access**: Protected (ADMIN, MEMBER)
- **Request Body**:

```typescript
{
  title?: string;
  description?: string;
  dueDate?: Date;
  status?: ChoreStatus;
  priority?: number;
  assignments?: { userId: string; completedAt?: Date }[];
  subtasks?: {
    title: string;
    description?: string;
    status: SubtaskStatus;
  }[];
}
```

- **Response**: Updated ChoreWithAssignees

#### Delete Chore

- **URL**: DELETE `/api/households/:householdId/chores/:choreId`
- **Description**: Deletes a chore from a household
- **Access**: Protected (ADMIN only)
- **Response**: 204 No Content

### Subtasks

#### Get Subtasks

- **URL**: GET `/api/households/:householdId/chores/:choreId/subtasks`
- **Description**: Retrieves all subtasks for a specific chore
- **Access**: Protected (ADMIN, MEMBER)
- **Response**: Array of Subtask

#### Add Subtask

- **URL**: POST `/api/households/:householdId/chores/:choreId/subtasks`
- **Description**: Adds a new subtask to a specific chore
- **Access**: Protected (ADMIN, MEMBER)
- **Request Body**:

```typescript
{
  title: string;
  description?: string;
  status?: SubtaskStatus;
}
```

- **Response**: Created Subtask

#### Update Subtask

- **URL**: PATCH `/api/households/:householdId/chores/:choreId/subtasks/:subtaskId`
- **Description**: Updates a specific subtask's details
- **Access**: Protected (ADMIN, MEMBER)
- **Request Body**:

```typescript
{
  title?: string;
  description?: string;
  status: SubtaskStatus;
}
```

- **Response**: Updated Subtask

#### Delete Subtask

- **URL**: DELETE `/api/households/:householdId/chores/:choreId/subtasks/:subtaskId`
- **Description**: Deletes a specific subtask from a chore
- **Access**: Protected (ADMIN only)
- **Response**: 204 No Content

### Chore Swap Requests

#### Create Swap Request

- **URL**: POST `/api/households/:householdId/chores/:choreId/swap-request`
- **Description**: Creates a request to swap a chore with another user
- **Access**: Protected (ADMIN, MEMBER)
- **Request Body**:

```typescript
{
  targetUserId: string;
}
```

- **Response**: Created ChoreSwapRequest

#### Approve/Reject Swap Request

- **URL**: PATCH `/api/households/:householdId/chores/:choreId/swap-approve`
- **Description**: Approves or rejects a chore swap request
- **Access**: Protected (ADMIN, MEMBER)
- **Request Body**:

```typescript
{
  approved: boolean;
}
```

- **Response**: Updated ChoreWithAssignees

## Real-time Events

The chores feature implements WebSocket events for real-time updates:

- `chore_created`: Emitted when a new chore is created
- `chore_update`: Emitted when a chore is updated
- `chore_swap_request`: Emitted when a swap request is created
- `chore_swap_approved`: Emitted when a swap request is approved
- `chore_swap_rejected`: Emitted when a swap request is rejected
- `subtask_created`: Emitted when a new subtask is created
- `subtask_updated`: Emitted when a subtask is updated
- `subtask_deleted`: Emitted when a subtask is deleted

## Access Control

The chores feature implements role-based access control:

- `ADMIN`: Full access to all chore operations
- `MEMBER`: Can view, update, and manage chores and subtasks
- Only ADMIN can delete chores and subtasks

## Error Handling

The feature implements standard error handling for:

- Not Found errors (404)
- Unauthorized access (401)
- Permission denied (403)
- Validation errors (400)

All errors are handled through the central error handling middleware.
