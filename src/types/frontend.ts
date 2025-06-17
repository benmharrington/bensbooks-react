import { Author, User } from './database';

export type NewAuthor = Omit<Author, 'id' | 'books'>;
export type NewUser = Omit<User, 'id' | 'synopses'> & {
  password: string;
  password_confirmation: string;
}
export type AuthUser = Omit<User, 'id' | 'synopses' | 'email_address' | 'last_name'> | null;

export interface AuthContextType {
  authenticatedUser: AuthUser;
  checkAuth: () => Promise<void>;
  checking: boolean;
  login: (data: { email_address: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
  signUp: (data: NewUser) => Promise<void>;
}
