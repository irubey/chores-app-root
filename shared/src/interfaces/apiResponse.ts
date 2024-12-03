import { PaginationMeta } from "./pagination";

export interface ApiResponse<T> {
  data: T;
  pagination?: PaginationMeta;
  status?: number;
  message?: string;
  errors?: string[];
}
