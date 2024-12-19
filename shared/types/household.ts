import { HouseholdRole } from "../enums";
import { User } from "./user";
export interface Household {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  currency: string;
  icon?: string;
  timezone: string;
  language: string;
}

export interface HouseholdMember {
  id: string;
  userId: string;
  householdId: string;
  role: HouseholdRole;
  joinedAt: Date;
  leftAt?: Date;
  isInvited: boolean;
  isAccepted: boolean;
  isRejected: boolean;
  nickname?: string;
}

// Data Transfer Objects (DTOs)
/**
 * DTO for creating a new household.
 */
export interface CreateHouseholdDTO {
  name: string;
  currency: string;
  timezone: string;
  language: string;
}

/**
 * DTO for updating an existing household.
 */
export interface UpdateHouseholdDTO {
  name?: string;
  currency?: string;
  timezone?: string;
  language?: string;
}

/**
 * DTO for adding a new member to a household.
 */
export interface AddMemberDTO {
  email: string;
  role?: HouseholdRole;
}

/**
 * DTO for removing a member from a household.
 */
export interface RemoveMemberDTO {
  userId: string;
}

export interface HouseholdInvitation {
  id: string;
  householdId: string;
  status: "pending" | "accepted" | "rejected";
  household: HouseholdWithMembers;
}

export interface HouseholdUpdateEvent {
  household: Household;
}

export interface HouseholdWithMembers extends Household {
  members?: HouseholdMemberWithUser[];
}

export interface HouseholdMemberWithUser extends HouseholdMember {
  user?: User;
  household?: HouseholdWithMembers;
}
