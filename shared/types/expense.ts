import { ExpenseAction, ExpenseCategory, TransactionStatus } from "../enums";
import { User } from "./user";

export interface Expense {
  id: string;
  householdId: string;
  amount: number;
  description: string;
  paidById: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  category: ExpenseCategory;
  dueDate?: Date;
}

export interface ExpenseSplit {
  id: string;
  expenseId: string;
  userId: string;
  amount: number;
}

export interface Transaction {
  id: string;
  expenseId: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  status: TransactionStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface Receipt {
  id: string;
  expenseId: string;
  url: string;
  fileType: string;
  createdAt: Date;
}

export interface ExpenseHistory {
  id: string;
  expenseId: string;
  action: ExpenseAction;
  changedById: string;
  changedAt: Date;
}

// Data Transfer Objects (DTOs)

/**
 * DTO for creating a new expense.
 */
export interface CreateExpenseDTO {
  householdId: string;
  amount: number;
  description: string;
  paidById: string;
  dueDate?: Date;
  category: ExpenseCategory;
  splits?: CreateExpenseSplitDTO[];
}

/**
 * DTO for updating an existing expense.
 */
export interface UpdateExpenseDTO {
  amount?: number;
  description?: string;
  dueDate?: Date;
  category?: ExpenseCategory;
  splits?: UpdateExpenseSplitDTO[];
}

/**
 * DTO for creating a new expense split.
 */
export interface CreateExpenseSplitDTO {
  userId: string;
  amount: number;
}

/**
 * DTO for updating an expense split.
 */
export interface UpdateExpenseSplitDTO {
  userId: string;
  amount: number;
}

/**
 * DTO for creating a new transaction.
 */
export interface CreateTransactionDTO {
  expenseId: string;
  fromUserId: string;
  toUserId: string;
  amount: number;
  status?: TransactionStatus;
}

/**
 * DTO for updating an existing transaction's status.
 */
export interface UpdateTransactionDTO {
  status: TransactionStatus;
}

/**
 * DTO for creating a new receipt.
 */
export interface CreateReceiptDTO {
  expenseId: string;
  url: string;
  fileType: string;
}

export interface CreateExpenseHistoryDTO {
  expenseId: string;
  action: ExpenseAction;
  changedById: string;
}

/**
 * Expense with splits for reminders
 */
export type ExpenseWithSplits = Expense & {
  splits: ExpenseSplitWithUser[];
};

export interface ExpenseUpdateEvent {
  expense: Expense;
}

export type HouseholdExpense = Expense & {
  household: {
    id: string;
    name: string;
  };
};

export interface ExpenseSplitWithUser extends ExpenseSplit {
  user: User;
}

export interface ExpenseWithSplitsAndPaidBy extends Expense {
  splits: ExpenseSplitWithUser[];
  paidBy: User;
}

export interface TransactionWithDetails extends Transaction {
  fromUser: User;
  toUser: User;
}
