import React from "react";
import Header from "../other/Header";
import TasklistNum from "../other/TasklistNum";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
  console.log(props);
  return (
    <div className="p-5  h-screen">
      <h1> {props.data.email}</h1>
      <Header />
      <TasklistNum />
      <Tasklist />
    </div>
  );
};

export default EmployeeDashboard;
