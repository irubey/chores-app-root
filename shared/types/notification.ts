import { NotificationType } from "../enums";
import { User } from "./user";
import { Household } from "./household";

export interface Notification {
  id: string;
  userId: string;
  type: NotificationType;
  message: string;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface NotificationSettings {
  id: string;
  userId?: string;
  householdId?: string;
  messageNotif: boolean;
  mentionsNotif: boolean;
  reactionsNotif: boolean;
  choreNotif: boolean;
  financeNotif: boolean;
  calendarNotif: boolean;
  remindersNotif: boolean;
}

// Data Transfer Objects (DTOs)
/**
 * DTO for creating a new notification.
 */
export interface CreateNotificationDTO {
  userId: string;
  type: NotificationType;
  message: string;
  isRead?: boolean;
}

/**
 * DTO for updating an existing notification.
 */
export interface UpdateNotificationDTO {
  isRead?: boolean;
}

/**
 * Extends the Notification interface to include user details.
 */
export type NotificationWithUser = Notification & {
  user: User;
};

/**
 * Extends the NotificationSettings interface to include user and household details.
 */
export type NotificationSettingsWithUserAndHousehold = NotificationSettings & {
  user: User;
  household: Household;
};
