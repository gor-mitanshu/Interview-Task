import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => {
     return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
     const [token, setToken] = useState(localStorage.getItem("token"));
     const [success, setSuccess] = useState(localStorage.getItem("success"));

     const login = (newToken) => {
          setToken(newToken.data.token);
          console.log(newToken.data.token);
          setSuccess(newToken.status)
          console.log(newToken.status);
          localStorage.setItem("token", newToken.data.token);
          localStorage.setItem("success", newToken.status);
     };

     const logout = () => {
          setToken(null);
          setSuccess(null);
          localStorage.removeItem("token");
          localStorage.removeItem("success");
     };

     const isAuthenticated = () => {
          return !!token && !!success;
     };

     return (
          <AuthContext.Provider value={ { token, success, login, logout, isAuthenticated } }>
               { children }
          </AuthContext.Provider>
     );
};
