import React, { useContext, useState } from "react";
import "./index.css";
import "./App.css";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboarrd.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";

const App = () => {


  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext);
  console.log(authData.userData);


  
  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin");
    } else if (email == "user@me.com" && password == "123") {
      setUser("employee");
    } else {
      console.log(`invalid credentials`);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? <AdminDashboard /> : <EmployeeDashboard />}
    </>
  );
};

export default App;
