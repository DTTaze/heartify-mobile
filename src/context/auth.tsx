import React, { createContext, useContext, useEffect, useState } from 'react';
import { api } from '@/src/services/api.instance'; // Your API service

type AuthContextType = {
  session: string | null;
  isLoading: boolean;
  signIn: (token: string) => Promise<void>;
  signOut: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  isLoading: true,
  signIn: async () => {},
  signOut: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check initial token
    const loadToken = async () => {
      try {
        const token = await api.getToken();
        if (token) {
          setSession(token);
          await api.setAuthToken(token); // Ensure headers are set
        }
      } catch (e) {
        console.error('Failed to load token', e);
      } finally {
        setIsLoading(false);
      }
    };
    loadToken();
  }, []);

  const signIn = async (token: string) => {
    try {
      // Ensure api service saves it too (if not redundant)
      await api.setAuthToken(token);
      setSession(token);
    } catch (error) {
      console.error('Sign in error', error);
    }
  };

  const signOut = async () => {
    try {
      await api.clearAuthToken();
      setSession(null);
    } catch (error) {
      console.error('Sign out error', error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        session,
        isLoading,
        signIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
