# Naming Conventions

## General Principles

1. **Clarity and Descriptiveness**: Names should clearly describe the purpose or functionality of the entity.
2. **Consistency**: Follow the same naming patterns throughout the project to avoid confusion.
3. **Avoid Abbreviations**: Use full words unless the abbreviation is widely recognized (e.g., API, ID).

## Case Usage

- **PascalCase**: Used for components, classes, and interfaces.
  - Example: `ChoreItem`, `AuthController`
- **camelCase**: Used for variables, functions, and object properties.
  - Example: `userPreferences`, `handleSubmit()`
- **kebab-case**: Used for file and folder names.
  - Example: `chore-item.tsx`, `user-profile/`
- **UPPER_SNAKE_CASE**: Used for constants.
  - Example: `MAX_CHORE_COUNT`, `DEFAULT_TIMEOUT`

## Frontend Naming Conventions

### File Names

1. **Components**: Use PascalCase with .tsx extension.
   - Example: `ChoreItem.tsx`
2. **Hooks**: Use camelCase starting with "use" and .ts extension.
   - Example: `useChores.ts`
3. **Services**: Use camelCase with .ts extension.
   - Example: `choreService.ts`
4. **Contexts**: Use PascalCase with .tsx extension.
   - Example: `AuthContext.tsx`
5. **Utilities**: Use camelCase with .ts extension.
   - Example: `logger.ts`
6. **Types**: Use PascalCase with .ts extension.
   - Example: `UserType.ts`

## Backend Naming Conventions

### File Names

1. **Controllers**: Use PascalCase ending with Controller.ts.
   - Example: `AuthController.ts`
2. **Services**: Use camelCase ending with Service.ts.
   - Example: `choreService.ts`
3. **Models**: Defined by Prisma schema, use PascalCase.
   - Example: `Chore`, `User`
4. **Routes**: Use camelCase with .ts extension.
   - Example: `auth.ts`, `chores.ts`
5. **Middlewares**: Use camelCase ending with Middleware.ts.
   - Example: `authMiddleware.ts`
6. **Utilities**: Use camelCase with .ts extension.
   - Example: `logger.ts`, `tokenUtils.ts`
7. **Types**: Use PascalCase with .ts extension.
   - Example: `RequestType.ts`

## Additional Naming Rules

4. **WebSocket Events:**
   - Use snake_case for event names to differentiate from REST API endpoints.
     - Example: `chore_update`, `household_update`
  
5. **Environment Variables:**
   - Include variables specific to Socket.IO connections.
     - Example: `SOCKET_IO_SECRET`

## Additional Guidelines

### Frontend and Backend Shared Conventions

1. **API Endpoints**:
   - Use plural nouns for resource names.
     - Example: `/api/chores`, `/api/users`
   - Nest related routes appropriately.
     - Example: `/api/households/:householdId/chores`

2. **Environment Variables**:
   - Use UPPER_SNAKE_CASE.
     - Example: `JWT_SECRET`, `DATABASE_URL`

3. **Constants**:
   - Use UPPER_SNAKE_CASE.
     - Example: `DEFAULT_TIMEOUT = 5000`

### Naming Specific Entities

1. **Pages (Frontend)**:
   - Use lowercase and kebab-case.
     - Example: `pages/chores/[id]/feedback.tsx`

2. **API Routes (Backend)**:
   - Use kebab-case matching frontend routes.
     - Example: `/api/chores/:choreId/feedback`

3. **Database Models (Prisma)**:
   - Use singular PascalCase.
     - Example: `Chore`, `User`

4. **Prisma Files**:
   - Schema file: `schema.prisma`
   - Migration files: Timestamped with descriptive names.
     - Example: `20231010_initial_migration/`