import { useEffect, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { loginUser } from '../api/auth';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  async function login(data: { email_address: string; password: string }) {
    setChecking(true);
    try {
      const response = await loginUser(data);
      if (response) {
        setIsAuthenticated(true);
      } else {
        console.error('Login failed');
      }
    } catch (error: string | unknown) {
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

      if(response.ok) {
        setIsAuthenticated(false);
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

      if(response.ok) {
        setIsAuthenticated(true);
      } else {
        console.error('Authentication failed.', response.status);
        setIsAuthenticated(false);
      }
    } catch(error) {
      console.error('Error checking authentication status:', error);
      setIsAuthenticated(false);
    } finally {
      setChecking(false);
    }
  }

  useEffect(() => {
    checkAuth();
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated, checkAuth, checking, login, logout }}>{children}</AuthContext.Provider>;
}
