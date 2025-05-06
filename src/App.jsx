import React, { useContext, useState, useEffect } from "react";
import "./index.css";
import "./App.css";
import Login from "./components/Auth/Login.jsx";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboarrd.jsx";
import AdminDashboard from "./components/Dashboard/AdminDashboard.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
import { data } from "autoprefixer";

const App = () => {
  const [user, setUser] = useState(null);
  const [LoggedinUserData, setLoggedinUserData] = useState(null);
  const authData = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    

    if (loggedInUser){
      
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedinUserData(userData.data);
    }
    
  
 
  }, [])
  
  



  const handleLogin = (email, password) => {
    if (
      authData &&
      authData.userData.admin.find(
        (e) => email == e.email && password == e.password
      )
    ) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (authData) {
      const employee = authData.userData.employees.find(
        (e) => email == e.email && password == e.password
      );
      if (employee) {
        setLoggedinUserData(employee);
        setUser("employee");
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      console.log(`invalid credentials`);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (
        <AdminDashboard />
      ) : user == "employee" ? (
        <EmployeeDashboard data={LoggedinUserData} />
      ) : null}
    </>
  );
};

export default App;
