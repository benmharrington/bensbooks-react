import { createContext } from 'react';
import { AuthContextType } from '../types/frontend';

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
