# Shared Types Formatting Guide

## Exported Types

- All exported types should be declared at the top of the file.
- Use `export type` or `export interface` for type declarations.

## DTOs (Data Transfer Objects)

- DTOs should follow the exported types.
- Use `export class` for DTOs, ensuring they are well-documented.

## Extended Types

- Only include extended types that are necessary for the feature.
- Ensure they are clearly separated and documented.

## Example Structure

```typescript
typescript;
// Exported Types
export type User = {
  id: string;
  name: string;
  email: string;
};
// DTOs
export class CreateUserDTO {
  name: string;
  email: string;
}
// Extended Types
type ExtendedUser = User & {
  profileImageURL?: string;
};
```
