import { Provider } from "../enums";

/**
 * Defines the payload structure for JWT tokens.
 */
export interface TokenPayload {
  userId: string;
  email: string;
}

/**
 * Extends the TokenPayload interface for OAuth-specific information.
 */
export interface OAuthTokenPayload extends TokenPayload {
  provider: Provider;
  accessToken: string;
  refreshToken?: string;
}
