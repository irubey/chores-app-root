import { ReactionType } from "../enums";
import { User } from "./user";
import { HouseholdMember } from "./household";

export interface Thread {
  id: string;
  householdId: string;
  authorId: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface ThreadWithMessages extends Thread {
  messages: Message[];
}

export interface ThreadWithParticipants extends Thread {
  participants: HouseholdMember[];
}

export interface Message {
  id: string;
  threadId: string;
  authorId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  reactions?: Reaction[];
  mentions?: Mention[];
  reads?: MessageRead[];
}

export interface MessageWithDetails extends Message {
  attachments?: Attachment[];
  author: User;
  reactions?: Reaction[];
  mentions?: Mention[];
  reads?: MessageRead[];
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

export interface Mention {
  id: string;
  messageId: string;
  userId: string;
  mentionedAt: Date;
}

export interface MentionWithUser extends Mention {
  user: User;
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

// Data Transfer Objects (DTOs)
export interface CreateThreadDTO {
  householdId: string;
  authorId: string;
  title?: string;
}

export interface UpdateThreadDTO {
  title?: string;
}

export interface CreateMessageDTO {
  threadId: string;
  authorId: string;
  content: string;
  attachments?: CreateAttachmentDTO[];
  mentions?: string[];
}

export interface UpdateMessageDTO {
  content?: string;
  attachments?: CreateAttachmentDTO[];
}

export interface CreateAttachmentDTO {
  url: string;
  fileType: string;
}

export interface CreateReactionDTO {
  messageId: string;
  userId: string;
  emoji: string;
  type: ReactionType;
}

export type InviteUsersDTO = string[];
