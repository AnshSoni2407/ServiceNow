import React, { useState } from "react";

const CreateTask = () => {
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDesrription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [asignTo, setasignTo] = useState("");
  const [category, setcategory] = useState("");

  const [task, setTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(taskDate, taskDescription, taskTitle, asignTo, category);
     setTask({
       taskTitle,
       taskDescription,
       taskDate,
       category,
       active: false,
       newTask: true,
       failed: false,
       completed: false,
     });

     console.log(task);
    settaskTitle("");
    settaskDesrription("");
    settaskDate("");
    setasignTo("");
    setcategory("");

   
  };
  return (
    <div>
      <form
        id="adminform"
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex justify-between  items-center mt-5 p-3 bg-[#1c1c1c] rounded-lg text-white"
      >
        <div className="w-[40%] px-10 ">
          <div>
            {" "}
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
            />
          </div>{" "}
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
            />
          </div>{" "}
          <div>
            {" "}
            <h3>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setasignTo(e.target.value);
              }}
              type="text"
              placeholder=" Employee Name"
            />
          </div>{" "}
          <div>
            {" "}
            <h3>Category</h3>
            <input
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              type="text"
              placeholder="Design, dev, etc.."
            />
          </div>
        </div>{" "}
        <div className="w-[40%] px-10   ">
          {" "}
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDesrription(e.target.value);
            }}
            className=" resize-none w-[100%] rounded-md bg-transparent border-[1px] border-bg-gray-400"
            name=""
            cols={30}
            rows={10}
            id=""
          ></textarea>
          <button className="bg-emerald-600 mb-8 w-full py-2 rounded-xl mt-5">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
