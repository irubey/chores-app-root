import {
  ChoreStatus,
  SubtaskStatus,
  ChoreSwapRequestStatus,
  ChoreAction,
} from "../enums";

import { User } from "./user";

export interface Chore {
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

export interface Subtask {
  id: string;
  choreId: string;
  title: string;
  description?: string;
  status: SubtaskStatus;
}

export interface ChoreAssignment {
  id: string;
  choreId: string;
  userId: string;
  assignedAt: Date;
  completedAt?: Date;
}

export interface ChoreSwapRequest {
  id: string;
  choreId: string;
  requestingUserId: string;
  targetUserId: string;
  status: ChoreSwapRequestStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChoreTemplate {
  id: string;
  householdId: string;
  title: string;
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface SubtaskTemplate {
  id: string;
  choreTemplateId: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ChoreHistory {
  id: string;
  choreId: string;
  action: ChoreAction;
  changedById: string;
  changedAt: Date;
}

// DTOs
/**
 * DTO for creating a new chore.
 */
export interface CreateChoreDTO {
  title: string;
  description?: string;
  householdId: string;
  dueDate?: Date;
  status?: ChoreStatus;
  recurrenceRuleId?: string;
  priority?: number;
  assignedUserIds?: string[];
  subtasks?: CreateSubtaskDTO[];
}

/**
 * DTO for updating an existing chore.
 */
export interface UpdateChoreDTO {
  title: string;
  description?: string;
  dueDate?: Date;
  status: ChoreStatus;
  recurrenceRuleId?: string;
  priority?: number;
  assignedUserIds?: string[];
  subtasks?: UpdateSubtaskDTO[];
}

/**
 * DTO for creating a new subtask.
 */
export interface CreateSubtaskDTO {
  choreId: string;
  title: string;
  description?: string;
  status?: SubtaskStatus;
}

/**
 * DTO for updating an existing subtask.
 */
export interface UpdateSubtaskDTO {
  title: string;
  status: SubtaskStatus;
}

/**
 * DTO for creating a new chore swap request.
 */
export interface CreateChoreSwapRequestDTO {
  choreId: string;
  targetUserId: string;
}

/**
 * DTO for updating an existing chore swap request.
 */
export interface UpdateChoreSwapRequestDTO {
  status: ChoreSwapRequestStatus;
}

/**
 * DTO for creating a new chore history.
 */
export interface CreateChoreHistoryDTO {
  choreId: string;
  action: ChoreAction;
  changedById: string;
}

export type ChoreWithAssignees = Chore & {
  assignedUsers: User[];
  subtasks: Subtask[];
};

export type PartialUpdateChoreDTO = Partial<UpdateChoreDTO>;

export type ChorePickDTO = Pick<Chore, "id" | "title" | "status">;
