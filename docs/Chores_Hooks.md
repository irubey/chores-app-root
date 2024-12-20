# Chore Management Hooks

This document outlines the available React hooks for managing chores in the application.

## Table of Contents

- [useChores](#usechores)
- [useChoreDetails](#uchoredetails)
- [useSubtasks](#usesubtasks)
- [useChoreSwap](#uchoreswap)
- [useRecurrenceRules](#userecurrencerules)

## useChores

Hook for managing the list of chores in a household.

### Usage

```typescript
const { chores, isLoading, error, createChore, updateChore, deleteChore } =
  useChores(householdId);
```

### Returns

- `chores`: Array of chores with assignee details
- `isLoading`: Boolean indicating if chores are being fetched
- `error`: Any error that occurred during fetching
- `createChore`: Function to create a new chore
- `updateChore`: Function to update an existing chore
- `deleteChore`: Function to delete a chore

## useChoreDetails

Hook for managing a single chore's details.

### Usage

```typescript
const { chore, isLoading, error, updateChore, deleteChore } = useChoreDetails(
  householdId,
  choreId
);
```

### Returns

- `chore`: Detailed chore information
- `isLoading`: Boolean indicating if chore details are being fetched
- `error`: Any error that occurred during fetching
- `updateChore`: Function to update the chore
- `deleteChore`: Function to delete the chore

## useSubtasks

Hook for managing subtasks of a chore.

### Usage

```typescript
const {
  subtasks,
  isLoading,
  error,
  createSubtask,
  updateSubtask,
  deleteSubtask,
} = useSubtasks(householdId, choreId);
```

### Returns

- `subtasks`: Array of subtasks for the chore
- `isLoading`: Boolean indicating if subtasks are being fetched
- `error`: Any error that occurred during fetching
- `createSubtask`: Function to create a new subtask
- `updateSubtask`: Function to update an existing subtask
- `deleteSubtask`: Function to delete a subtask

## useChoreSwap

Hook for managing chore swap requests.

### Usage

```typescript
const {
  createSwapRequest,
  approveSwapRequest,
  rejectSwapRequest,
  isLoading,
  error,
} = useChoreSwap(householdId);
```

### Returns

- `createSwapRequest`: Function to create a new swap request
- `approveSwapRequest`: Function to approve a swap request
- `rejectSwapRequest`: Function to reject a swap request
- `isLoading`: Boolean indicating if a swap operation is in progress
- `error`: Any error that occurred during the operation

## useRecurrenceRules

Hook for managing recurrence rules for chores.

### Usage

```typescript
const {
  recurrenceRules,
  isLoadingRules,
  rulesError,
  createRule,
  updateRule,
  deleteRule,
  isCreating,
  isUpdating,
  isDeleting,
  createError,
  updateError,
  deleteError,
} = useRecurrenceRules();

// For a single rule
const { rule, isLoading, error } = useRecurrenceRule(ruleId);
```

### Returns from useRecurrenceRules

- `recurrenceRules`: Array of recurrence rules
- `isLoadingRules`: Boolean indicating if rules are being fetched
- `rulesError`: Any error that occurred during fetching
- `createRule`: Function to create a new recurrence rule
- `updateRule`: Function to update an existing rule
- `deleteRule`: Function to delete a rule
- `isCreating`: Boolean indicating if creation is in progress
- `isUpdating`: Boolean indicating if update is in progress
- `isDeleting`: Boolean indicating if deletion is in progress
- `createError`: Any error that occurred during creation
- `updateError`: Any error that occurred during update
- `deleteError`: Any error that occurred during deletion

### Returns from useRecurrenceRule

- `rule`: Single recurrence rule details
- `isLoading`: Boolean indicating if rule is being fetched
- `error`: Any error that occurred during fetching

### Example

```typescript
// Managing multiple rules
const { createRule, recurrenceRules } = useRecurrenceRules();

// Create a new weekly rule
createRule({
  frequency: "WEEKLY",
  interval: 1,
  byWeekDay: ["MONDAY", "WEDNESDAY", "FRIDAY"],
});

// Managing a single rule
const { rule, isLoading } = useRecurrenceRule(ruleId);
if (isLoading) return <Loading />;
if (rule) {
  console.log(`Rule frequency: ${rule.frequency}`);
}
```
