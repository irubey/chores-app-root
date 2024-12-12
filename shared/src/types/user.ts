export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  profileImageURL?: string;
  activeHouseholdId?: string;
}

// Data Transfer Objects (DTOs)

/**
 * DTO for registering a new user.
 */
export interface RegisterUserDTO {
  email: string;
  password: string;
  name: string;
}

/**
 * DTO for user login credentials.
 */
export interface LoginCredentials {
  email: string;
  password: string;
}

/**
 * DTO for updating user information.
 */
export interface UpdateUserDTO {
  name?: string;
  profileImageURL?: string;
  activeHouseholdId?: string;
}
