import React from "react";
import Header from "../other/Header";
import TasklistNum from "../other/TasklistNum";
import Tasklist from "../TaskList/Tasklist";

const EmployeeDashboard = ({data}) => {
  console.log(data);
  return (
    <div className="p-5  h-screen">
      
      <Header data={data} />
      <TasklistNum data={data} />
      <Tasklist data={data} />
    </div>
  );
};

export default EmployeeDashboard;
