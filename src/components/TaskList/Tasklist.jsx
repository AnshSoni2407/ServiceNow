import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({data}) => {
  console.log(data);
  return (
    <div
      id="tasklist"
      className="flex items-center overflow-x-scroll justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      <NewTask />
      <AcceptTask />
      <CompleteTask />
      <FailedTask />
    </div>
  );
};

export default Tasklist;
