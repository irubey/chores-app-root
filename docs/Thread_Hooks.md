# Thread Hooks Documentation

This document outlines the four custom hooks used for managing thread-related functionality in the application.

## useThreads

Hook for managing thread list and thread-level operations.

### Methods

- `createThread(data: CreateThreadDTO)`: Creates a new thread
- `updateThread(data: UpdateThreadDTO & { threadId: string })`: Updates thread details
- `deleteThread(threadId: string)`: Deletes a thread
- `inviteToThread({ threadId: string, userIds: string[] })`: Invites users to a thread
- `updateParticipants({ threadId: string, add?: string[], remove?: string[] })`: Updates thread participants
- `prefetchThread(threadId: string)`: Prefetches thread data
- `invalidateThread(threadId: string)`: Invalidates thread cache
- `setThreadData(threadId: string, data: ThreadWithDetails)`: Manually updates thread cache

### Properties

- `data`: Current thread list data
- `isLoading`: Loading state
- `error`: Error state
- `isPending`: Overall pending state for mutations

### Socket Events Handled

- `thread:create`: New thread creation
- `thread:update`: Thread updates
- `thread:delete`: Thread deletion
- `thread:participant:add`: Participant addition
- `thread:participant:remove`: Participant removal

## useMessageInteractions

Hook for managing message-level operations and interactions.

### Methods

- `createMessage(data: CreateMessageDTO)`: Creates a new message
- `updateMessage(data: UpdateMessageDTO)`: Updates message content
- `deleteMessage()`: Deletes a message
- `addReaction(data: CreateReactionDTO)`: Adds a reaction to a message
- `removeReaction(reactionId: string)`: Removes a reaction
- `markAsRead()`: Marks message as read
- `createPoll(data: CreatePollDTO)`: Creates a poll in a message
- `addAttachment(data: FormData)`: Adds an attachment to a message
- `removeAttachment(attachmentId: string)`: Removes an attachment
- `getReadStatus()`: Gets message read status

### Properties

- `isPending`: Overall pending state for all mutations

## useMessageMentions

Hook for managing message mentions.

### Methods

- `addMention(data: CreateMentionDTO)`: Creates a new mention
- `removeMention(mentionId: string)`: Removes a mention
- `prefetchMentions()`: Prefetches mentions data
- `invalidateMentions()`: Invalidates mentions cache

### Properties

- `data`: Current mentions data
- `isLoading`: Loading state
- `error`: Error state

### Utility Functions

- `isMentioned(mentions, userId)`: Checks if user is mentioned
- `getMention(mentions, userId)`: Gets specific mention
- `getMentionedUsers(mentions)`: Gets all mentioned user IDs
- `getMentionsByUser(mentions, userId)`: Gets mentions for specific user
- `sortMentionsByDate(mentions)`: Sorts mentions by date
- `filterMentionsByDate(mentions, startDate, endDate)`: Filters mentions by date range

### Socket Events Handled

- `message:{messageId}:mentions:update`: Real-time mention updates

## usePoll

Hook for managing poll operations within messages.

### Methods

- `updatePoll(data: UpdatePollDTO)`: Updates poll details
- `vote(data: CreatePollVoteDTO)`: Casts a vote on a poll
- `prefetchPollAnalytics()`: Prefetches poll analytics
- `invalidatePoll()`: Invalidates poll cache

### Properties

- `analytics`: Poll analytics data

### Utility Functions

- `hasVoted(poll, userId)`: Checks if user has voted
- `getUserVote(poll, userId)`: Gets user's vote
- `getVoteCount(poll)`: Gets total vote count
- `getOptionVoteCount(poll, optionId)`: Gets votes for specific option
- `getVotePercentage(poll, optionId)`: Gets percentage for option
- `getWinningOption(poll)`: Gets winning poll option
- `getVoteDistribution(poll)`: Gets vote distribution
- `isExpired(poll)`: Checks if poll is expired
- `canUserVote(poll, userId)`: Checks if user can vote

### Socket Events Handled

- `poll:{pollId}:update`: Poll updates
- `poll:{pollId}:vote:add`: Vote additions
- `poll:{pollId}:analytics:update`: Analytics updates

## Common Features Across Hooks

- Optimistic updates for better UX
- Proper error handling
- Cache management
- Real-time updates via socket events
- Type safety with TypeScript
- Logging integration
- Query invalidation
