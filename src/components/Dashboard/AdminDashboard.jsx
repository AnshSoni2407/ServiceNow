import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = () => {
  return (
    <div id="AdminDiv" className="p-5 overflow-auto h-[100vh] ">
      <Header />
      <CreateTask />
      <AllTask />
     
    </div>
  );
};

export default AdminDashboard;
