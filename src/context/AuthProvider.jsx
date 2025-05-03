// import React, { createContext, useEffect } from "react";

// import { useState } from "react";
// import { useContext } from "react";
// import { GetLocalStorage } from "../Utils/LocalStorage";

// export const AuthContext = createContext();

// const [userData, setuserData] = useState(null);

// const AuthProvider = ({ children }) => {
//   useEffect(() => {
//     const { employees, admin } = GetLocalStorage();
//     setuserData({ employees, admin });
//   }, []);

//   return (
//     <div>
//       <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
//     </div>
//   );
// };

// export default AuthProvider;
