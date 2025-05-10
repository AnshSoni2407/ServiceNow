import React, { useState, useEffect } from "react";
import Modal from "./Modal";

// const [showForm, setshowForm] = useState(false);

const CreateTask = () => {
  const [showModal, setshowModal] = useState(false);

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDesrription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [asignTo, setasignTo] = useState("");
  const [category, setcategory] = useState("");

  const [newTask, setnewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    const taskObject = {
      taskTitle,
      taskDescription,
      taskDate,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    };

    setnewTask(taskObject);

    const data = JSON.parse(localStorage.getItem("employees"));

    let found = false;

    data.forEach((elem) => {
      if (elem.firstName.trim().toLowerCase() == asignTo.trim().toLowerCase()) {
        elem.tasks.push(taskObject);
        elem.taskCount.newTask += 1;
        console.log(elem);
        found = true;
      }
    });

    if (!found) {
      // alert("Employee not found");
      setshowModal(true);
      console.log(showModal);
      
    }

    localStorage.setItem("employees", JSON.stringify(data));
    console.log(data);
    settaskTitle("");
    settaskDesrription("");
    settaskDate("");
    setasignTo("");
    setcategory("");
  };

  useEffect(() => {
    if (showModal) {
      console.log(`model aayegaa`);
      
    }
  }, [showModal]);

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
            <h3>Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => {
                settaskTitle(e.target.value);
              }}
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3>Date</h3>
            <input
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              value={asignTo}
              onChange={(e) => {
                setasignTo(e.target.value);
              }}
              type="text"
              placeholder=" Employee Name"
            />
          </div>
          <div>
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
        </div>
        <div className="w-[40%] px-10">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDesrription(e.target.value);
            }}
            className="resize-none w-[100%] rounded-md bg-transparent border-[1px] border-bg-gray-400"
            cols={30}
            rows={10}
          ></textarea>
          <button className="bg-emerald-600 mb-8 w-full py-2 rounded-xl mt-5">
            Create Task
          </button>
        </div>
      </form>

      {showModal && (
        <Modal
          onClose={() => setshowModal(false)}
          onCreate={() => {
            setshowModal(false);
            console.log("Open employee creation form");
          }}
        />
      )}
    </div>
  );
};

export default CreateTask;
