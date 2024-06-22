import React, { createContext, useState } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({ status: false, username: "" });
  const login = (username) => {
    setUser({ status: true, username });
  };
  console.log(user);
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
