import {
  CreateMessageDTO,
  Message,
  MessageWithDetails,
  CreateInitialMessageDTO,
} from "./message";
import { HouseholdMember } from "./household";
import { User } from "./user";
import { Household } from "./household";

// Base Thread type
export interface Thread {
  id: string;
  householdId: string;
  authorId: string;
  title?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

// Thread with additional relations
export interface ThreadWithMessages extends Thread {
  messages: Message[];
}

export interface ThreadWithParticipants extends Thread {
  participants: HouseholdMember[];
}

export interface ThreadWithDetails extends Thread {
  author: User;
  household: Household;
  messages: MessageWithDetails[];
  participants: HouseholdMember[];
}

// DTO types
export interface CreateThreadDTO {
  householdId: string;
  title?: string;
  participants: string[];
  initialMessage?: CreateInitialMessageDTO;
}

export interface UpdateThreadDTO {
  title?: string;
  participants?: {
    add?: string[];
    remove?: string[];
  };
}

export interface InviteUsersDTO {
  userIds: string[];
}

// Event types
export interface ThreadUpdateEvent {
  action:
    | "CREATED"
    | "UPDATED"
    | "DELETED"
    | "PARTICIPANT_ADDED"
    | "PARTICIPANT_REMOVED";
  thread?: ThreadWithDetails;
  threadId?: string;
  participant?: HouseholdMember;
}
