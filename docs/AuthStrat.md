# Authentication Strategy: Accessing Auth Status and Conditionally Enabling Hooks

This guide outlines how to utilize the `useAuth` hook to ensure that your application verifies the authenticated state before invoking other hooks or making API requests. Follow the steps below to implement this strategy effectively.

## Step 2: Access Authentication Status with `useAuth`

### **Objective**

Retrieve and utilize the current authentication status within your components to make informed decisions about rendering and data fetching.

### **Implementation**

1. **Import the `useAuth` Hook**

   Begin by importing the `useAuth` hook from your `UserContext`.

   ```typescript:frontend/src/components/ExampleComponent.tsx
   import React from "react";
   import { useAuth } from "@/contexts/UserContext";
   ```

2. **Access Auth Status**

   Use the `useAuth` hook within your component to access the authentication status and user information.

   ```typescript:frontend/src/components/ExampleComponent.tsx
   const ExampleComponent: React.FC = () => {
     const { status, user, isLoading } = useAuth();

     if (isLoading) {
       return <div>Loading...</div>;
     }

     if (status === "unauthenticated") {
       return <div>Please log in to access this feature.</div>;
     }

     return (
       <div>
         <h1>Welcome, {user?.name}!</h1>
         {/* Protected content goes here */}
       </div>
     );
   };

   export default ExampleComponent;
   ```

### **Key Points**

- **Status Values:**

  - `"idle"`: Initial state before any authentication check.
  - `"loading"`: Authentication status is being determined.
  - `"authenticated"`: User is successfully authenticated.
  - `"unauthenticated"`: No active authentication session.
  - `"error"`: An error occurred during authentication.

- **Handling States:**
  - **Loading:** Display a loading indicator while the authentication status is being fetched.
  - **Unauthenticated:** Prompt the user to log in if they are not authenticated.
  - **Authenticated:** Render protected content accessible only to authenticated users.

## Step 3: Conditionally Enable Hooks Based on Auth Status

### **Objective**

Ensure that data-fetching hooks, such as `useThreads`, are only executed when the user is authenticated and authorized, preventing unauthorized API requests.

### **Implementation**

1. **Import Necessary Hooks**

   Import both the `useAuth` hook and the custom data-fetching hook (e.g., `useThreads`) into your component.

   ```typescript:frontend/src/components/ThreadsPage.tsx
   import React from "react";
   import { useAuth } from "@/contexts/UserContext";
   import { useThreads } from "@/hooks/threads/useThreads";
   ```

2. **Utilize Auth Status to Control Hook Execution**

   Use the authentication status to conditionally enable the `useThreads` hook.

   ```typescript:frontend/src/components/ThreadsPage.tsx
   const ThreadsPage: React.FC<{ householdId: string }> = ({ householdId }) => {
     const { status } = useAuth();

     // Enable the useThreads hook only if the user is authenticated and householdId is provided
     const { data: threads, isLoading, error } = useThreads({
       householdId,
       enabled: status === "authenticated" && !!householdId,
     });

     if (status === "loading") {
       return <div>Authenticating...</div>;
     }

     if (status === "unauthenticated") {
       return <div>You need to log in to view threads.</div>;
     }

     if (isLoading) {
       return <div>Loading threads...</div>;
     }

     if (error) {
       return <div>Error loading threads: {error.message}</div>;
     }

     return (
       <div>
         <h2>Your Threads</h2>
         <ul>
           {threads?.map((thread) => (
             <li key={thread.id}>{thread.title}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default ThreadsPage;
   ```

3. **Modify the Custom Hook to Accept `enabled` Parameter**

   Ensure that your custom hook (`useThreads`) accepts an `enabled` parameter to control its execution.

   ```typescript:frontend/src/hooks/threads/useThreads.ts
   import { useQuery } from "@tanstack/react-query";
   import { threadApi, threadKeys } from "@/lib/api/services/threadService";
   import { ThreadWithDetails } from "@shared/types";

   interface ThreadsOptions {
     readonly householdId: string;
     readonly enabled?: boolean;
   }

   export const useThreads = ({ householdId, enabled = true }: ThreadsOptions) => {
     return useQuery<ThreadWithDetails[], Error>({
       queryKey: threadKeys.list(householdId),
       queryFn: () => threadApi.threads.list(householdId),
       enabled, // Hook execution controlled by the enabled flag
       staleTime: 1000 * 60 * 5, // 5 minutes
       cacheTime: 1000 * 60 * 30, // 30 minutes
     });
   };
   ```

### **Key Points**

- **`enabled` Flag:**

  - Controls whether the `useQuery` hook should execute.
  - Set to `true` only when the user is authenticated and necessary parameters (`householdId`) are present.

- **Preventing Unauthorized Requests:**

  - By setting `enabled` based on authentication status, you ensure that API requests are only made when appropriate, avoiding unnecessary or unauthorized calls.

- **Error Handling:**
  - Gracefully handle loading states, authentication states, and potential errors to enhance user experience and application stability.

## Summary

By following these steps, you ensure that your application:

1. **Accesses Authentication Status:** Utilizes the `useAuth` hook to determine the current authentication state of the user.
2. **Conditionally Enables Data Fetching Hooks:** Controls the execution of hooks like `useThreads` based on the user's authentication status and relevant parameters.

This strategy enhances security, optimizes performance by preventing unnecessary API calls, and ensures a seamless user experience by rendering content appropriately based on authentication state.
