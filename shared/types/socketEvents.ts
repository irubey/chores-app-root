import { Notification } from "./notification";
import { Chore } from "./chore";
import { Message } from "./message";

export interface NotificationEvent {
  type: Notification;
  message: string;
  userId: string;
}

export interface ChoreUpdateEvent {
  chore: Chore;
}

export interface MessageEvent {
  message: Message;
}
