import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../api/auth';
import { AuthUser, NewUser } from '../types/frontend';
import { createUser } from '../api/users';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authenticatedUser, setAuthenticatedUser] = useState<null | AuthUser>(null);
  const [checking, setChecking] = useState(true);

  async function signUp(data: NewUser) {
    setChecking(true);
    try {
      const response = await createUser(data);
      if (response) {
        setAuthenticatedUser(response?.user);
      } else {
        console.error('Sign up failed');
      }
    } catch (error: unknown) {
      console.error('Sign up error:', error);
    } finally {
      setChecking(false);
    }
  }

  async function login(data: { email_address: string; password: string }) {
    setChecking(true);
    try {
      const response = await loginUser(data);
      if (response) {
        setAuthenticatedUser(response?.user);
      } else {
        console.error('Login failed');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
    } finally {
      setChecking(false);
    }
  }

  async function logout() {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/sessions`, {
        method: 'DELETE',
        credentials: 'include',
      });

      if (response.ok) {
        setAuthenticatedUser(null);
      } else {
        console.error('Failed to logout:', response.status);
      }

    } catch(error) {
      console.error('Error during logout:', error);
    }
  }

  async function checkAuth() {
    try {
      setChecking(true);
      const response = await fetch(`${import.meta.env.VITE_API_URL}/sessions/status`, {
        method: 'GET',
        credentials: 'include',
      });

      if (response.ok) {
        // TODO: handle frontend & change login button stuff
        // TODO: rails tests
        // TODO: update mantine?
        const data = await response.json();
        setAuthenticatedUser(data?.user);
      } else {
        console.error('Authentication failed.', response.status);
        setAuthenticatedUser(null);
      }
    } catch(error) {
      console.error('Error checking authentication status:', error);
      setAuthenticatedUser(null);
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return <AuthContext.Provider value={{ authenticatedUser, checkAuth, checking, login, logout, signUp }}>{children}</AuthContext.Provider>;
}
