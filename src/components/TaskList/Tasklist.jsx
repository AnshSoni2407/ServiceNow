import React from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {
  return (
    <div
      id="tasklist"
      className="flex items-center overflow-x-scroll justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <AcceptTask key={idx} data={elem}/>;
        } else if (elem.newTask) {
          return <CompleteTask key={idx} data={elem} />;
        } else if (elem.completed) {
          return <CompleteTask key={idx} data={elem} />;
        } else if (elem.failed) {
          return <FailedTask key={idx} data={elem} />;
        }
      })}
    </div>
  );
};

export default Tasklist;
