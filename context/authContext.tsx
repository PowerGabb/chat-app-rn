import { createContext, useContext, useEffect, useState } from "react";

interface User {
  email: string;
  username: string;
  profileUrl: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  register: (email: string, password: string, username: string, profileUrl: string) => Promise<void>;
}

// Create AuthContext with an initial value of undefined
export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    
    setTimeout(() => {
      setIsAuthenticated(true);
    }, 5000);
  }, []);

  const login = async (email: string, password: string) => {
    try {

    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const logout = async () => {
    try {

    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const register = async (email: string, password: string, username: string, profileUrl: string) => {
    try {

    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }
  return context;
}
