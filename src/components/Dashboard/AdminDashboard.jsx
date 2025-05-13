import React from "react";
import Header from "../other/Header";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";
import { ToastContainer } from "react-toastify";

const AdminDashboard = (props) => {
  return (
    <div id="AdminDiv" className="p-5 overflow-auto h-[100vh] ">
      <Header changeUser={props.changeUser} />
      <CreateTask />
      <AllTask />
      <ToastContainer />
    </div>
  );
};

export default AdminDashboard;
