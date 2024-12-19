# Frontend API Documentation

This document outlines the structure and usage of the frontend API setup, which is designed to facilitate communication with the backend services. The setup is modular, leveraging various utilities and patterns to ensure maintainability and scalability.

## Overview

The frontend API setup consists of several key components:

- **Service Methods**: These are defined in service files (e.g., `authService.ts`) and are responsible for making API requests.
- **Utilities**: These include `apiUtils.ts`, `axiosInstance.ts`, `interceptors.ts`, `apiErrors.ts`, and `queryClient.ts`, which provide common functionality and configurations.
- **Response Handling**: The `apiResponse.ts` interface defines the structure of API responses.

## Components

### Service Methods

Service methods are organized by domain (e.g., authentication, threads) and are responsible for making API requests using the `axiosInstance`. They utilize utility functions to handle request configurations and error handling.

#### Example: `authService.ts`

- **register**: Registers a new user.
- **login**: Authenticates a user.
- **logout**: Logs out the current user.
- **refreshToken**: Refreshes the authentication token.
- **initializeAuth**: Initializes the authentication state.

### Utilities

#### `apiUtils.ts`

- **handleApiRequest**: A generic function to handle API requests, including logging and error handling.
- **buildRequestConfig**: Constructs the request configuration, including parameters and abort signals.
- **createQueryKeys**: Generates query keys for caching and data fetching.

#### `axiosInstance.ts`

- **axiosInstance**: A configured Axios instance for making API requests.
- **refreshInstance**: A separate Axios instance for handling token refresh requests.

#### `interceptors.ts`

- **setupInterceptors**: Configures Axios interceptors for request and response handling, including token refresh logic and error emission.

#### `apiErrors.ts`

- **ApiError**: A custom error class for handling API-related errors, with various error types defined in `ApiErrorType`.

#### `queryClient.ts`

- **queryClient**: Configures the React Query client with default options for queries and mutations, including retry logic and network mode.

### Response Handling

#### `apiResponse.ts`

Defines the structure of API responses, including data, pagination, status, message, and errors.

interface ApiResponse<T> {
data: T;
pagination?: PaginationMeta;
status?: number;
message?: string;
errors?: string[];
}

export interface PaginationMeta {
hasMore: boolean;
nextCursor?: string;
total?: number;
}

### Detailed Component Specifications

#### Service Pattern

```typescript
// Example service structure
export const exampleService = {
  domain: {
    method: async (
      data: RequestDTO,
      config?: ApiRequestOptions
    ): Promise<ApiResponse<ResponseDTO>> => {
      return handleApiRequest<ResponseDTO>(
        () =>
          axiosInstance.method("/endpoint", data, buildRequestConfig(config)),
        {
          operation: "Operation Name",
          metadata: {
            /* relevant metadata */
          },
        }
      );
    },
  },
};
```

#### Query Keys Pattern

```typescript
export const domainKeys = {
  all: ["domain"] as const,
  lists: () => [...domainKeys.all, "list"] as const,
  list: (config: ApiRequestOptions) => [...domainKeys.lists(), config] as const,
  details: () => [...domainKeys.all, "detail"] as const,
  detail: (id: string) => [...domainKeys.details(), id] as const,
};
```

#### Error Types

```typescript
enum ApiErrorType {
  NETWORK = "NETWORK_ERROR",
  UNAUTHORIZED = "UNAUTHORIZED_ERROR",
  FORBIDDEN = "FORBIDDEN_ERROR",
  NOT_FOUND = "NOT_FOUND_ERROR",
  VALIDATION = "VALIDATION_ERROR",
  CONFLICT = "CONFLICT_ERROR",
  SERVER = "SERVER_ERROR",
  UNKNOWN = "UNKNOWN_ERROR",
  RATE_LIMIT = "RATE_LIMIT_ERROR",
  ABORTED = "ABORTED_ERROR",
}
```

#### Configuration Constants

```typescript
// Cache times for React Query
const CACHE_TIMES = {
  STANDARD: 5 * 60 * 1000, // 5 minutes
  SHORT: 60 * 1000, // 1 minute
  LONG: 30 * 60 * 1000, // 30 minutes
} as const;

// Stale times for React Query
const STALE_TIMES = {
  STANDARD: 30 * 1000, // 30 seconds
  SHORT: 10 * 1000, // 10 seconds
  LONG: 5 * 60 * 1000, // 5 minutes
} as const;
```

## Authentication Flow

1. **Token Refresh**: Automatic token refresh using interceptors
2. **Session Management**: Cookie-based session handling
3. **Error Handling**: Auth errors emit events for global handling

```typescript
// Auth error event handling
export const AUTH_ERROR_EVENT = "auth:error";
window.addEventListener(AUTH_ERROR_EVENT, (event: CustomEvent<ApiError>) => {
  // Handle authentication errors
});
```

## Logging

The API includes structured logging for:

- Request attempts
- Successful responses
- Error responses
- Authentication events

```typescript
interface APILogData {
  config?: {
    url?: string;
    method?: string;
  };
  status?: number;
  data?: unknown;
}
```

## Examples

### Creating a New Service

```typescript
// services/userService.ts
export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  details: () => [...userKeys.all, "detail"] as const,
  detail: (id: string) => [...userKeys.details(), id] as const,
};

export const userApi = {
  users: {
    getProfile: async (
      config?: ApiRequestOptions
    ): Promise<ApiResponse<User>> => {
      return handleApiRequest<User>(
        () => axiosInstance.get("/users/profile", buildRequestConfig(config)),
        { operation: "Get User Profile" }
      );
    },
    // ... other methods
  },
};
```

## Best Practices

- **Centralized Logging**: Use the logger utility for consistent logging across API requests.
- **Error Handling**: Utilize the `ApiError` class to manage and categorize errors effectively.
- **Caching and State Management**: Use React Query for efficient data fetching and caching.
- **Security**: Ensure that sensitive operations are protected and tokens are refreshed securely.

This setup provides a robust foundation for building scalable and maintainable frontend services, ensuring efficient communication with backend APIs.

## Service Organization

### Query Key Structure

Services use a nested key structure for React Query caching:

```typescript
// Example from threadService.ts
export const threadKeys = {
  all: ["threads"] as const,
  lists: () => [...threadKeys.all, "list"] as const,
  list: (householdId: string, params?: PaginationOptions) =>
    [...threadKeys.lists(), householdId, params] as const,
  messages: {
    list: (householdId: string, threadId: string) =>
      [...threadKeys.detail(householdId, threadId), "messages"] as const,
    // ... nested keys for reactions, mentions, polls, etc.
  },
};
```

### Logging System

The API uses a structured logging system with:

```typescript
interface APILogData {
  config?: {
    url?: string;
    method?: string;
  };
  status?: number;
  data?: unknown;
}

interface APIErrorData {
  message: string;
  status?: number;
  type?: string;
  data?: unknown;
}

// Logger methods
logger.logAPIResponse(data: APILogData): void;
logger.logAPIError(data: APIErrorData): void;
logger.logAPISuccess(data: APILogData & { operation?: string; metadata?: Record<string, unknown> }): void;
```

### Query Client Configuration

```typescript
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 60 * 1000, // 5 minutes
      staleTime: 30 * 1000, // 30 seconds
      retry: 0,
      networkMode: "offlineFirst",
      refetchOnWindowFocus: false,
    },
    mutations: {
      networkMode: "offlineFirst",
      retry: 0,
    },
  },
});
```

### Token Refresh Implementation

The interceptor handles token refresh with:

- Queue management for concurrent requests
- Maximum retry attempts (3)
- Session validation
- Token state management

```typescript
interface TokenState {
  accessToken: string | null;
  expiresAt: number | null;
}

// Refresh handling
async function handleTokenRefresh(
  axiosInstance: AxiosInstance
): Promise<string>;
```
