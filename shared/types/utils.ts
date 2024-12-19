import { RecurrenceFrequency } from "../enums";

import { DaysOfWeek } from "../enums";

export interface RecurrenceRule {
  id: string;
  frequency: RecurrenceFrequency;
  interval: number;
  byWeekDay: DaysOfWeek[];
  byMonthDay: number[];
  bySetPos?: number;
  count?: number;
  until?: Date;
  customRuleString?: string;
}

/**
 * Defines the structure for email options used in sending emails.
 */
export interface EmailOptions {
  to: string;
  subject: string;
  text?: string;
  html?: string;
}
