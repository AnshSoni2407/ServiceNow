import React, {useState, useEffect } from "react";
import NewTask from "./NewTask";
import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";

const Tasklist = ({ data }) => {

  const [ShowButton, setShowButton] = useState(false)
  useEffect(() => {
    const interval = setInterval(() => {
      setShowButton((prev) => !prev);
    }, 1000); 
    
    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="tasklist"
      className="relative text-sm md:text-base flex items-center overflow-x-scroll justify-start gap-5 flex-nowrap h-[55%] w-full py-5 mt-10"
    >
      {" "}
      {ShowButton && (
        <button className="text-2xl fixed z-10  right-0">➡️</button>
      )}
      {data.tasks.map((elem, idx) => {
        if (elem.active) {
          return <NewTask key={idx} data={elem} />;
        } else if (elem.newTask) {
          return <AcceptTask key={idx} data={elem} />;
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
