import React from "react";
import Header from "../other/Header";
import TasklistNum from "../other/TasklistNum";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = (props) => {
 
  return (
    <div className="p-5  h-screen">
      <Header changeUser={props.changeUser} data={props.data} />
      <TasklistNum data={props.data} />
      <Tasklist data={props.data} />
     
    </div>
  );
};

export default EmployeeDashboard;
