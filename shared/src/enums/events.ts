export enum EventStatus {
  SCHEDULED = "SCHEDULED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
}

export enum EventCategory {
  CHORE = "CHORE",
  MEETING = "MEETING",
  SOCIAL = "SOCIAL",
  OTHER = "OTHER",
}

export enum EventReminderType {
  PUSH_NOTIFICATION = "PUSH_NOTIFICATION",
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum CalendarEventAction {
  CREATED = "CREATED",
  UPDATED = "UPDATED",
  DELETED = "DELETED",
  STATUS_CHANGED = "STATUS_CHANGED",
  RECURRENCE_CHANGED = "RECURRENCE_CHANGED",
}
