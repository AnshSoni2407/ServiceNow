import React from "react";
import { createContext, useState, useEffect } from "react";
import { GetLocalStorage } from "../Utils/LocalStorage";
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userData, setuserData] = useState(null);
  
  
  useEffect(() => {
    const { employees, admin } = GetLocalStorage();
    setuserData({ employees, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={{ userData }}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
