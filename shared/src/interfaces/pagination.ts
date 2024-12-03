export interface PaginationOptions {
  limit?: number;
  cursor?: string;
  direction?: "asc" | "desc";
  sortBy?: string;
}

export interface PaginationMeta {
  hasMore: boolean;
  nextCursor?: string;
  total?: number;
}
