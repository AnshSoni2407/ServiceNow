import React from "react";
import Header from "../other/Header";
import TasklistNum from "../other/TasklistNum";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = () => {
  return (
    <div className="p-5  h-screen">
      <Header />
      <TasklistNum />
      <Tasklist />
    </div>
  );
};

export default EmployeeDashboard;
