import {
  CalendarEventAction,
  DaysOfWeek,
  EventCategory,
  EventReminderType,
  EventStatus,
  Provider,
} from "../enums";
import { Chore } from "./chore";

export interface Event {
  id: string;
  householdId: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  createdById: string;
  createdAt: Date;
  updatedAt: Date;
  choreId?: string;
  recurrenceRuleId?: string;
  category: EventCategory;
  isAllDay: boolean;
  location?: string;
  isPrivate: boolean;
  status: EventStatus;
  deletedAt?: Date;
}

export interface EventReminder {
  id: string;
  eventId: string;
  time: Date;
  type: EventReminderType;
}

export interface CalendarEventHistory {
  id: string;
  eventId: string;
  action: CalendarEventAction;
  changedById: string;
  changedAt: Date;
}

// Data Transfer Objects (DTOs)
/**
 * DTO for creating a new event.
 */
export interface CreateEventDTO {
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  createdById: string;
  choreId?: string | null;
  recurrenceRuleId?: string;
  customRecurrence?: DaysOfWeek[];
  category: EventCategory;
  isAllDay: boolean;
  location?: string;
  isPrivate: boolean;
}

/**
 * DTO for updating an existing event.
 */
export interface UpdateEventDTO {
  title?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  choreId?: string | null;
  recurrenceRuleId?: string;
  customRecurrence?: DaysOfWeek[];
  category?: EventCategory;
  isAllDay?: boolean;
  location?: string;
  isPrivate?: boolean;
}

/**
 * DTO for syncing with a personal calendar.
 */
export interface SyncCalendarDTO {
  provider: Provider;
  accessToken: string;
}

export interface CreateCalendarEventDTO {
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  recurrenceId?: string;
  category: EventCategory;
  isAllDay?: boolean;
  location?: string;
  isPrivate?: boolean;
  reminders?: CreateReminderDTO[];
}

export interface UpdateCalendarEventDTO {
  title?: string;
  description?: string;
  startTime?: Date;
  endTime?: Date;
  recurrenceId?: string;
  category?: EventCategory;
  isAllDay?: boolean;
  location?: string;
  isPrivate?: boolean;
  reminders?: CreateReminderDTO[];
}

// If you don't have a CreateReminderDTO, you might want to add it as well:
export interface CreateReminderDTO {
  time: Date;
  type: EventReminder;
}

export interface UpdateReminderDTO {
  time?: Date;
  type?: EventReminder;
}

export interface UpdateEventStatusDTO {
  status: EventStatus;
}

export type EventWithChore = Event & {
  chore?: Chore;
};

export interface EventUpdateEvent {
  event: Event;
}
