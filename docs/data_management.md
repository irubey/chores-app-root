# Messages Module Data Management

## Overview

The messages module handles real-time messaging between household members, including threads, messages, reactions, polls, attachments and mentions.

## Data Flow Architecture

### State Management

- Uses Redux with createSlice and createAsyncThunk
- Two main slices: messagesSlice and threadSlice
- Custom hooks provide abstracted access to state and actions

### Custom Hooks

#### useMessages

Provides message-related functionality:

```typescript
const {
  // State
  messages,
  selectedMessage,
  messageStatus,
  messageError,
  hasMore,
  nextCursor,

  // Core Message Actions
  getMessages,
  sendMessage,
  editMessage,
  deleteMessage,
  selectMessage,

  // Reactions
  addReaction,
  removeReaction,
  getReactionAnalytics,
  getReactionsByType,

  // Attachments
  addAttachment,
  deleteAttachment,
  getAttachments,
  getAttachment,

  // Polls
  createPoll,
  updatePoll,
  deletePoll,
  votePoll,
  removePollVote,
  getPoll,
  getPollAnalytics,

  // Mentions
  createMention,
  deleteMention,
  getMessageMentions,

  // Read Status
  markAsRead,
  getMessageReadStatus,

  // State Reset
  reset,
} = useMessages();
```

#### useThreads

Provides thread management functionality:

```typescript
const {
  // State
  threads,
  selectedThread,
  threadStatus,
  threadError,

  // Thread Actions
  getThreads,
  startNewThread,
  getThreadDetails,
  editThread,
  removeThread,
  selectThread,

  // Member Management
  inviteUsers,

  // Mentions
  getUserThreadMentions,
  getUnreadThreadMentionsCount,

  // State Reset
  reset,
} = useThreads();
```

### Component Data Flow

#### Parent Container (page.tsx)

- Manages selected households and thread selection
- Passes data down through props
- Children handle specific data transforms/updates

```typescript
// Data flow example
MessagesPage
  ├─> ThreadList (threads, selectedThreadId)
  │     └─> ThreadItem (thread, isSelected)
  │
  ├─> ThreadHeader (thread)
  │
  ├─> MessageList (messages, isLoading, currentUser)
  │     └─> MessageItem (message, currentUser)
  │
  └─> MessageInput (threadId)
```

### Data Loading Patterns

#### Thread Loading

```typescript
// In ThreadList component
useEffect(() => {
  selectedHouseholds.forEach((household) => {
    getThreads(household.id);
  });
}, [selectedHouseholds]);
```

#### Message Loading

```typescript
// In MessageList component
useEffect(() => {
  if (selectedThread) {
    getMessages(selectedThread.householdId, threadId);
  }
}, [threadId, selectedThread]);
```

### Real-time Updates

- Messages and threads are updated in real-time via WebSocket connections
- State is managed through Redux to ensure consistency
- Components re-render automatically when state changes

### Error Handling

- Each action tracks loading/error states
- Components can access error states via status objects:

```typescript
messageStatus: {
  list: "idle" | "loading" | "succeeded" | "failed";
  create: "idle" | "loading" | "succeeded" | "failed";
  // etc...
}
```

### Pagination

- Messages support cursor-based pagination
- Track hasMore and nextCursor in state
- Load more messages when user scrolls

### Data Persistence

- Messages and threads are stored in Redux store
- Cleared on logout or manual reset
- Cached for performance during session

## Best Practices

1. Always use custom hooks for data operations
2. Handle loading and error states in components
3. Clear state when component unmounts
4. Use proper TypeScript types for all data
5. Log important operations and errors
6. Handle real-time updates gracefully
7. Implement proper error boundaries
8. Cache data appropriately
9. Use proper cleanup in useEffect hooks
10. Maintain consistent loading patterns
