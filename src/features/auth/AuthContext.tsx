/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  getToken,
  removeToken as removeStoredToken,
  setToken as setStoredToken,
} from "../../lib/token";

type AuthContextValue = {
  token: string | null;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
};

const AuthContext = React.createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = React.useState<string | null>(getToken());

  // Fake login: accept anything, set a pretend token
  async function login(username: string, password: string) {
    void username;
    void password;
    // here you'd POST to /login with username/password
    // await api.post('/login', { username, password })
    const fakeToken = "demo-token";
    setStoredToken(fakeToken);
    setToken(fakeToken);
  }

  function logout() {
    removeStoredToken();
    setToken(null);
  }

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}
