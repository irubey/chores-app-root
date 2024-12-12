import { Notification } from "./notification";
import { Chore } from "./chore";
import { Message } from "./message";
import { MessageAction } from "../enums";
import { ThreadAction } from "../enums";

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

export interface SocketMessage {
  type:
    | "THREAD"
    | "MESSAGE"
    | "REACTION"
    | "MENTION"
    | "ATTACHMENT"
    | "READ_STATUS";
  action: MessageAction | ThreadAction;
  payload: any;
  meta?: {
    timestamp: Date;
    sender: string;
    household: string;
  };
}

export interface TypingIndicator {
  threadId: string;
  userId: string;
  isTyping: boolean;
  timestamp: Date;
}
