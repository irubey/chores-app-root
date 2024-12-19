# Thread Feature Documentation

## Overview

The thread feature provides a hierarchical messaging system that allows users to create, read, update, and delete threaded conversations within a household. It supports attachments, reactions, polls, and user mentions.

## Data Models

### Thread Models

    interface Thread {
        id: string;
        householdId: string;
        authorId: string;
        title?: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt?: Date;
    }

    interface ThreadWithMessages extends Thread {
        messages: Message[];
    }

    interface ThreadWithParticipants extends Thread {
        participants: HouseholdMember[];
    }

    interface ThreadWithDetails extends Thread {
        author: User;
        household: Household;
        messages: MessageWithDetails[];
        participants: HouseholdMember[];
    }

### Message Models

    interface Message {
        id: string;
        threadId: string;
        authorId: string;
        content: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt?: Date;
    }

    interface MessageWithDetails extends Message {
        thread: Thread;
        author: User;
        attachments?: Attachment[];
        reactions?: ReactionWithUser[];
        mentions?: MentionWithUser[];
        reads?: MessageReadWithUser[];
        poll?: PollWithDetails;
    }

### Pagination

    interface PaginationOptions {
        limit?: number;
        cursor?: string;
        direction?: "asc" | "desc";
        sortBy?: string;
    }

    interface PaginationMeta {
        hasMore: boolean;
        nextCursor?: string;
        total?: number;
    }

### Message Related Types

    interface CreateMessageDTO {
        threadId: string;
        content: string;
        attachments?: CreateAttachmentDTO[];
        mentions?: string[]; // Array of userIds
        poll?: CreatePollDTO;
    }

    interface CreateInitialMessageDTO extends Omit<CreateMessageDTO, "threadId"> {
        content: string;
        attachments?: CreateAttachmentDTO[];
        mentions?: string[];
        poll?: CreatePollDTO;
    }

    interface UpdateMessageDTO {
        content?: string;
        attachments?: CreateAttachmentDTO[];
        mentions?: string[];
        poll?: CreatePollDTO;
    }

### Reaction Types

    interface Reaction {
        id: string;
        messageId: string;
        userId: string;
        emoji: string;
        type: ReactionType;
        createdAt: Date;
    }

    interface ReactionWithUser extends Reaction {
        user: User;
    }

    interface CreateReactionDTO {
        type: ReactionType;
        emoji: string;
    }

### Poll Types

    interface Poll {
        id: string;
        messageId: string;
        question: string;
        pollType: PollType;
        maxChoices?: number;
        maxRank?: number;
        endDate?: Date;
        eventId?: string;
        status: PollStatus;
        selectedOptionId?: string;
        createdAt: Date;
        updatedAt: Date;
    }

    interface PollWithDetails extends Poll {
        options: PollOptionWithVotes[];
        selectedOption?: PollOptionWithVotes;
        event?: Event;
    }

    interface CreatePollDTO {
        question: string;
        pollType: PollType;
        maxChoices?: number;
        maxRank?: number;
        endDate?: Date;
        eventId?: string;
        options: CreatePollOptionDTO[];
    }

### Event Types

    interface MessageUpdateEvent {
        action: MessageAction;
        message?: MessageWithDetails;
        messageId?: string;
        poll?: PollWithDetails;
    }

    interface ThreadUpdateEvent {
        action: "CREATED" | "UPDATED" | "DELETED" | "PARTICIPANT_ADDED" | "PARTICIPANT_REMOVED";
        thread?: ThreadWithDetails;
        threadId?: string;
        participant?: HouseholdMember;
    }

    interface ReactionUpdateEvent {
        action: MessageAction.REACTION_ADDED | MessageAction.REACTION_REMOVED;
        messageId: string;
        reaction?: ReactionWithUser;
        reactionId?: string;
    }

    interface PollUpdateEvent {
        action: MessageAction.POLL_CREATED | MessageAction.POLL_UPDATED |
                MessageAction.POLL_VOTED | MessageAction.POLL_ENDED |
                MessageAction.POLL_CONFIRMED;
        messageId: string;
        poll: PollWithDetails;
    }

### Message Status Types

    interface MessageStatus {
        delivered: boolean;
        read: boolean;
        readAt?: Date;
        deliveredAt?: Date;
    }

    interface MessageReadStatus {
        messageId: string;
        readBy: {
            userId: string;
            readAt: Date;
        }[];
        unreadBy: string[]; // userIds
    }

### Attachment Types

    interface Attachment {
        id: string;
        messageId: string;
        url: string;
        fileType: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt?: Date;
    }

    interface CreateAttachmentDTO {
        url: string;
        fileType: string;
    }

### Message Read Types

    interface MessageRead {
        id: string;
        messageId: string;
        userId: string;
        readAt: Date;
    }

    interface MessageReadWithUser extends MessageRead {
        user: User;
    }

## API Endpoints

### Thread Endpoints

Base Path: `/api/households/:householdId/threads`

#### Get Threads

- **Endpoint**: `GET /api/households/:householdId/threads`
- **Description**: Get threads for a household
- **Access**: Protected (Requires Authentication)
- **Query Parameters**:
  - limit?: number
  - cursor?: string
  - includeMembers?: string
- **Response**:
  {
  "data": ThreadWithDetails[],
  "pagination": {
  "hasMore": boolean,
  "nextCursor": string,
  "total": number
  }
  }

#### Create Thread

- **Endpoint**: `POST /api/households/:householdId/threads`
- **Description**: Create a new thread within a household
- **Access**: Protected (Requires Authentication)
- **Request Body**: CreateThreadDTO
  {
  householdId: string;
  title?: string;
  participants: string[];
  initialMessage?: {
  content: string;
  attachments?: CreateAttachmentDTO[];
  mentions?: string[];
  poll?: CreatePollDTO;
  }
  }
- **Response**: ThreadWithDetails

#### Get Thread By ID

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId`
- **Description**: Retrieve details of a specific thread
- **Access**: Protected (Requires Authentication)
- **URL Parameters**:
  - threadId: string
- **Response**: ThreadWithDetails

#### Update Thread

- **Endpoint**: `PATCH /api/households/:householdId/threads/:threadId`
- **Description**: Update an existing thread
- **Access**: Protected (Admin or Thread Owner only)
- **URL Parameters**:
  - threadId: string
- **Request Body**: UpdateThreadDTO
  {
  title?: string;
  participants?: {
  add?: string[];
  remove?: string[];
  }
  }
- **Response**: ThreadWithDetails

#### Delete Thread

- **Endpoint**: `DELETE /api/households/:householdId/threads/:threadId`
- **Description**: Delete a thread from a household
- **Access**: Protected (Admin only)
- **URL Parameters**:
  - threadId: string
- **Response**: void

#### Invite Users to Thread

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/invite`
- **Description**: Invite users to a thread
- **Access**: Protected (Admin or Thread Owner)
- **URL Parameters**:
  - threadId: string
- **Request Body**: InviteUsersDTO
  {
  userIds: string[];
  }
- **Response**: ThreadWithDetails

### Message Endpoints

Base Path: `/api/households/:householdId/threads/:threadId/messages`

#### Get Messages

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages`
- **Description**: Retrieve all messages within a specific thread
- **Access**: Protected
- **Query Parameters**:
  - limit?: number
  - cursor?: string
- **Response**:
  {
  data: MessageWithDetails[];
  pagination: PaginationMeta;
  }

#### Create Message

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/messages`
- **Description**: Create a new message within a thread
- **Access**: Protected
- **Request Body**: CreateMessageDTO
  {
  content: string;
  attachments?: CreateAttachmentDTO[];
  mentions?: string[];
  poll?: CreatePollDTO;
  }
- **Response**: MessageWithDetails

#### Update Message

- **Endpoint**: `PATCH /api/households/:householdId/threads/:threadId/messages/:messageId`
- **Description**: Update an existing message
- **Access**: Protected, Message Owner
- **Request Body**: UpdateMessageDTO
  {
  content?: string;
  attachments?: CreateAttachmentDTO[];
  mentions?: string[];
  poll?: CreatePollDTO;
  }
- **Response**: MessageWithDetails

#### Delete Message

- **Endpoint**: `DELETE /api/households/:householdId/threads/:threadId/messages/:messageId`
- **Description**: Delete a message from a thread
- **Access**: Protected, Admin or Message Owner
- **Response**: void

#### Message Read Status

- **Endpoint**: `PATCH /api/households/:householdId/threads/:threadId/messages/:messageId/read`
- **Description**: Mark a message as read
- **Access**: Protected
- **Response**: void

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/read-status`
- **Description**: Get message read status
- **Access**: Protected
- **Response**: MessageReadStatus

### Attachment Endpoints

#### Get Message Attachments

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/attachments`
- **Description**: Get message attachments
- **Access**: Protected
- **Response**: Attachment[]

#### Add Attachment

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/messages/:messageId/attachments`
- **Description**: Add an attachment to a specific message
- **Access**: Protected
- **Request Body**: CreateAttachmentDTO
- **Response**: Attachment

#### Get Attachment

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/attachments/:attachmentId`
- **Description**: Retrieve details of a specific attachment
- **Access**: Protected
- **Response**: Attachment

#### Delete Attachment

- **Endpoint**: `DELETE /api/households/:householdId/threads/:threadId/messages/:messageId/attachments/:attachmentId`
- **Description**: Delete an attachment from a message
- **Access**: Protected, Admin or Attachment Owner
- **Response**: void

### Mention Endpoints

#### Create Mention

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/messages/:messageId/mentions`
- **Description**: Create a mention in a message
- **Access**: Protected
- **Request Body**: CreateMentionDTO
- **Response**: MentionWithUser

#### Get User Mentions

- **Endpoint**: `GET /api/households/:householdId/messages/mentions`
- **Description**: Get user mentions
- **Access**: Protected
- **Response**: MentionWithUser[]

#### Get Message Mentions

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/mentions`
- **Description**: Get message mentions
- **Access**: Protected
- **Response**: MentionWithUser[]

#### Get Unread Mentions Count

- **Endpoint**: `GET /api/households/:householdId/messages/unread-mentions-count`
- **Description**: Get unread mentions count
- **Access**: Protected
- **Response**: { count: number }

### Reaction Endpoints

#### Add Reaction

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/messages/:messageId/reactions`
- **Description**: Add a reaction to a message
- **Access**: Protected
- **Request Body**: CreateReactionDTO
- **Response**: ReactionWithUser

#### Remove Reaction

- **Endpoint**: `DELETE /api/households/:householdId/threads/:threadId/messages/:messageId/reactions/:reactionId`
- **Description**: Remove a reaction from a message
- **Access**: Protected
- **Response**: void

#### Get Message Reactions

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/reactions`
- **Description**: Get message reactions
- **Access**: Protected
- **Response**: ReactionWithUser[]

### Poll Endpoints

#### Create Poll

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/messages/:messageId/polls`
- **Description**: Create a poll
- **Access**: Protected
- **Request Body**: CreatePollDTO
- **Response**: PollWithDetails

#### Get Poll

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/polls/:pollId`
- **Description**: Get a poll
- **Access**: Protected
- **Response**: PollWithDetails

#### Update Poll

- **Endpoint**: `PATCH /api/households/:householdId/threads/:threadId/messages/:messageId/polls/:pollId`
- **Description**: Update a poll
- **Access**: Protected
- **Request Body**: UpdatePollDTO
- **Response**: PollWithDetails

#### Vote on Poll

- **Endpoint**: `POST /api/households/:householdId/threads/:threadId/messages/:messageId/polls/:pollId/vote`
- **Description**: Vote on a poll
- **Access**: Protected
- **Request Body**: CreatePollVoteDTO
- **Response**: PollWithDetails

#### Remove Poll Vote

- **Endpoint**: `DELETE /api/households/:householdId/threads/:threadId/messages/:messageId/polls/:pollId/vote`
- **Description**: Remove a vote from a poll
- **Access**: Protected
- **Response**: void

#### Get Poll Analytics

- **Endpoint**: `GET /api/households/:householdId/threads/:threadId/messages/:messageId/polls/:pollId/analytics`
- **Description**: Get poll analytics
- **Access**: Protected
- **Response**: {
  totalVotes: number;
  optionBreakdown: {
  optionId: string;
  votes: number;
  percentage: number;
  }[];
  }

### Error Responses

All endpoints may return the following error responses:

- **401**: Unauthorized - User is not authenticated
- **403**: Forbidden - User doesn't have required permissions
- **404**: Not Found - Thread or Household not found
- **422**: Validation Error - Invalid request body
- **500**: Internal Server Error

### Authentication & Request Context

#### Authentication Methods

All endpoints require an authentication token, provided via either:

- HTTP-only cookie named 'accessToken'
- Authorization header: `Bearer <token>`

#### Request Context

Authenticated requests will include:

- user?: User (Current authenticated user)
- cookies:
  - refreshToken?: string
  - accessToken?: string

#### Common Parameters

All endpoints can include these parameters:

##### URL Parameters

- householdId?: string
- memberId?: string
- threadId?: string
- messageId?: string
- attachmentId?: string
- mentionId?: string
- reactionId?: string
- pollId?: string

##### Query Parameters

- includeMembers?: string
- limit?: string
- cursor?: string
- email?: string

This structure matches the backend `AuthenticatedRequest<T>` interface used in controllers.
