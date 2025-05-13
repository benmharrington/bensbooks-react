import { useEffect, useState } from 'react';
import { refreshAccessToken } from '../api/auth';
import { AuthContext } from '../context/AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  console.log('AuthProvider rendered', isAuthenticated);

  useEffect(() => {
    async function checkAuth() {
      try {
        await refreshAccessToken(); // Attempt to refresh token on app load
        setIsAuthenticated(true);
      } catch {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  return <AuthContext.Provider value={{ isAuthenticated }}>{children}</AuthContext.Provider>;
}
