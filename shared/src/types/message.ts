import { MessageAction, ReactionType } from "../enums/messages";
import { User } from "./user";
import { Thread } from "./thread";
import { PollType, PollStatus } from "../enums/poll";
import { Event } from "./event";

export interface Message {
  id: string;
  threadId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface MessageWithDetails extends Message {
  thread: Thread;
  author: User;
  attachments?: Attachment[];
  reactions?: ReactionWithUser[];
  mentions?: MentionWithUser[];
  reads?: MessageReadWithUser[];
  poll?: PollWithDetails;
}

export interface CreateMessageDTO {
  threadId: string;
  content: string;
  attachments?: CreateAttachmentDTO[];
  mentions?: string[]; // Array of userIds
  poll?: CreatePollDTO;
}

export interface UpdateMessageDTO {
  content?: string;
}

export interface Reaction {
  id: string;
  messageId: string;
  userId: string;
  emoji: string;
  type: ReactionType;
  createdAt: Date;
}

export interface ReactionWithUser extends Reaction {
  user: User;
}

export interface CreateReactionDTO {
  type: ReactionType;
  emoji: string;
}

export interface Mention {
  id: string;
  messageId: string;
  userId: string;
  mentionedAt: Date;
}

export interface MentionWithUser extends Mention {
  user: User;
}

export interface CreateMentionDTO {
  userId: string;
}

export interface Attachment {
  id: string;
  messageId: string;
  url: string;
  fileType: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface CreateAttachmentDTO {
  url: string;
  fileType: string;
}

export interface MessageRead {
  id: string;
  messageId: string;
  userId: string;
  readAt: Date;
}

export interface MessageReadWithUser extends MessageRead {
  user: User;
}

export interface MessageStatus {
  delivered: boolean;
  read: boolean;
  readAt?: Date;
  deliveredAt?: Date;
}

export interface MessageReadStatus {
  messageId: string;
  readBy: {
    userId: string;
    readAt: Date;
  }[];
  unreadBy: string[]; // userIds
}

export interface Poll {
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

export interface PollWithDetails extends Poll {
  options: PollOptionWithVotes[];
  selectedOption?: PollOptionWithVotes;
  event?: Event;
}

export interface PollOption {
  id: string;
  pollId: string;
  text: string;
  order: number;
  startTime?: Date; // For EVENT_DATE type
  endTime?: Date; // For EVENT_DATE type
  createdAt: Date;
  updatedAt: Date;
}

export interface PollOptionWithVotes extends PollOption {
  votes: PollVoteWithUser[];
  voteCount: number;
  selectedForPolls?: Poll[];
}

export interface PollVote {
  id: string;
  optionId: string;
  pollId: string;
  userId: string;
  rank?: number;
  availability?: boolean;
  createdAt: Date;
}

export interface PollVoteWithUser extends PollVote {
  user: User;
}

// DTOs for creating/updating polls
export interface CreatePollDTO {
  question: string;
  pollType: PollType;
  maxChoices?: number;
  maxRank?: number;
  endDate?: Date;
  eventId?: string;
  options: CreatePollOptionDTO[];
}

export interface UpdatePollDTO {
  question?: string;
  status?: PollStatus;
  endDate?: Date | null;
  selectedOptionId?: string | null;
}

export interface CreatePollOptionDTO {
  text: string;
  order: number;
  startTime?: Date; // For EVENT_DATE type
  endTime?: Date; // For EVENT_DATE type
}

export interface CreatePollVoteDTO {
  optionId: string;
  rank?: number;
  availability?: boolean;
}

// Socket Event Types
export interface MessageUpdateEvent {
  action: MessageAction;
  message?: MessageWithDetails;
  messageId?: string;
  poll?: PollWithDetails;
}

export interface ReactionUpdateEvent {
  action: MessageAction.REACTION_ADDED | MessageAction.REACTION_REMOVED;
  messageId: string;
  reaction?: ReactionWithUser;
  reactionId?: string;
}

export interface AttachmentUpdateEvent {
  action: MessageAction.ATTACHMENT_ADDED | MessageAction.ATTACHMENT_REMOVED;
  messageId: string;
  attachment?: Attachment;
  attachmentId?: string;
}

export interface MentionUpdateEvent {
  action: MessageAction.MENTIONED;
  messageId: string;
  mention: MentionWithUser;
}

export interface PollUpdateEvent {
  action:
    | MessageAction.POLL_CREATED
    | MessageAction.POLL_UPDATED
    | MessageAction.POLL_VOTED
    | MessageAction.POLL_ENDED
    | MessageAction.POLL_CONFIRMED;
  messageId: string;
  poll: PollWithDetails;
}

export interface CreateInitialMessageDTO
  extends Omit<CreateMessageDTO, "threadId"> {
  content: string;
  attachments?: CreateAttachmentDTO[];
  mentions?: string[]; // Array of userIds
  poll?: CreatePollDTO;
}
