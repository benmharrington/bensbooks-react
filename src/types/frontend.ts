import { Author, User } from './database';

export type NewAuthor = Omit<Author, 'id' | 'books'>;
export type NewUser = Omit<User, 'id' | 'synopses'> & {
  password: string;
  password_confirmation: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  checkAuth: () => Promise<void>;
  checking: boolean;
  login: (data: { email_address: string; password: string }) => Promise<void>;
  logout: () => Promise<void>;
}
