import React, { createContext, useEffect, useState } from "react";
import { checkUserAPI } from "../Services/userService";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState({ status: false, username: "", token: "" });
  const login = (data) => {
    setUser({
      status: data.status,
      username: data.username,
      token: data.token,
    });
  };
  const fetchCheckUser = async () => {
    let response = await checkUserAPI();
    if (response && response.status === 200) {
      let username = response.data.data.user;
      let token = response.data.data.token;
      let data = { status: true, username, token };
      setUser(data);
    }
  };
  useEffect(() => {
    if (window.location.pathname !== "/login") {
      fetchCheckUser();
    }
  }, []);
  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
