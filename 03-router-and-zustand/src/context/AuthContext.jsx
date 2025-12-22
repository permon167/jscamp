import { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

//componente proveedor de contexto de autenticación
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const value = { isLoggedIn, login, logout };
  return <AuthContext value={value}>{children}</AuthContext>;
}

//custom hook para usar el contexto de autenticación, lo usaremos en Header.jsx
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
