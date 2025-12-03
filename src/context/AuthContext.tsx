import React, { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import { loginApi, registerApi } from "../api/apiClient";
import type { LoginRequest, RegisterRequest } from "../types/auth";

type AuthContextType = {
  user: { name?: string; email?: string } | null;
  token: string | null;
  login: (data: LoginRequest) => Promise<void>;
  register: (data: RegisterRequest) => Promise<void>;
  logout: () => void;
  loading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [token, setToken] = useState<string | null>(() => localStorage.getItem("token"));
  const [user, setUser] = useState<{ name?: string; email?: string } | null>(() => {
    const raw = localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (user) localStorage.setItem("user", JSON.stringify(user));
    else localStorage.removeItem("user");
  }, [user]);

  async function login(data: LoginRequest) {
    setLoading(true);
    try {
      const res = await loginApi(data);
      setToken(res.token);
      if (res.user) setUser(res.user);
    } finally {
      setLoading(false);
    }
  }

  async function register(data: RegisterRequest) {
    setLoading(true);
    try {
      const res = await registerApi(data);
      setToken(res.token);
      if (res.user) setUser(res.user);
    } finally {
      setLoading(false);
    }
  }

  function logout() {
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, token, login, register, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
