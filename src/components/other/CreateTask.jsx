// import React, { useState, useEffect } from "react";
// import Modal from "./Modal";
// import CreateUser from "./CreateUser";
// import { toast, ToastContainer } from "react-toastify";

// const CreateTask = () => {
//   const [showModal, setshowModal] = useState(false);
//   const [showForm, setshowForm] = useState(false);

//   const [taskTitle, settaskTitle] = useState("");
//   const [taskDescription, settaskDesrription] = useState("");
//   const [taskDate, settaskDate] = useState("");
//   const [asignTo, setasignTo] = useState("");
//   const [category, setcategory] = useState("");

//   const [newTask, setnewTask] = useState({});

//   const submitHandler = (e) => {
//     e.preventDefault();

//     const taskObject = {
//       taskTitle,
//       taskDescription,
//       taskDate,
//       category,
//       active: false,
//       newTask: true,
//       failed: false,
//       completed: false,
//     };

//     setnewTask(taskObject);

//     const data = JSON.parse(localStorage.getItem("employees"));

//     let found = false;

//     const employeeName = asignTo.trim().toLowerCase();
//     const matchedEmployee = data.find(
//       (emp) => emp.firstName.trim().toLowerCase() === employeeName
//     );

//     if (matchedEmployee) {
//       matchedEmployee.tasks.push(taskObject);
//       matchedEmployee.taskCount.newTask += 1;
//       localStorage.setItem("employees", JSON.stringify(data));
//       console.log("Task assigned to", matchedEmployee);
//       toast.success("Task assigned successfully");
//     } else {
//       setshowModal(true);
//       toast.error("Employee not found", {
//         autoClose: 2000,
       
//         pauseOnHover: true,


//       });
//     }

//     localStorage.setItem("employees", JSON.stringify(data));
//     console.log(data);
//     settaskTitle("");
//     settaskDesrription("");
//     settaskDate("");
//     setasignTo("");
//     setcategory("");
//   };

//   return (
//     <div>
//       <ToastContainer
//         position="top-right"
//         autoClose={2000}
//         theme="dark"
//         pauseOnHoverx
//         closeOnClick
//         draggable
//       />
//       <form
//         id="adminform"
//         onSubmit={(e) => {
//           submitHandler(e);
//         }}
//         className="flex justify-between  items-center mt-5 p-3 bg-[#1c1c1c] rounded-lg text-white"
//       >
//         <div className="w-[40%] px-10 ">
//           <div>
//             <h3>Task Title</h3>
//             <input
//               className="border-[2px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1"
//               value={taskTitle}
//               onChange={(e) => {
//                 settaskTitle(e.target.value);
//               }}
//               type="text"
//               placeholder="Make a UI design"
//             />
//           </div>
//           <div>
//             <h3>Date</h3>
//             <input
//               className="border-[1px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1"
//               value={taskDate}
//               onChange={(e) => {
//                 settaskDate(e.target.value);
//               }}
//               type="date"
//               required
//             />
//           </div>
//           <div>
//             <h3>Assign to</h3>
//             <input
//               required
//               className="border-[1px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1"
//               value={asignTo}
//               onChange={(e) => {
//                 setasignTo(e.target.value);
//               }}
//               type="text"
//               placeholder=" Employee Name"
//             />
//           </div>
//           <div>
//             <h3>Category</h3>
//             <input
//               required
//               className="border-[1px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1"
//               value={category}
//               onChange={(e) => {
//                 setcategory(e.target.value);
//               }}
//               type="text"
//               placeholder="Design, dev, etc.."
//             />
//           </div>
//         </div>
//         <div className="w-[40%] px-10">
//           <h3>Description</h3>
//           <textarea
//             value={taskDescription}
//             onChange={(e) => {
//               settaskDesrription(e.target.value);
//             }}
//             className="resize-none w-[100%] rounded-md bg-transparent border-[1px] border-bg-gray-400
//             outline-1 outline-white mt-1"
//             cols={30}
//             rows={10}
//           ></textarea>
//           <button className="bg-emerald-600 mb-8 w-full py-2 rounded-xl mt-5 hover:bg-emerald-400">
//             Create Task
//           </button>
//         </div>
//       </form>

//       {showModal && (
//         <Modal
//           onsubmission={submitHandler}
//           onClose={() => setshowModal(false)}
//           onCreate={() => {
//             setshowModal(false);
//             setshowForm(true);
//           }}
//         />
//       )}
//       {showForm && (
//         <CreateUser
//           formClose={() => {
//             setshowForm(false);
//           }}
//           modalClose={() => {
//             setshowForm(false);
//           }}
//         />
//       )}
//     </div>
//   );
// };

// export default CreateTask;


import React, { useState, useEffect } from "react";
import Modal from "./Modal";
import CreateUser from "./CreateUser";
import { toast, ToastContainer } from "react-toastify";

const CreateTask = () => {
  const [showModal, setshowModal] = useState(false);
  const [showForm, setshowForm] = useState(false);

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

    const employeeName = asignTo.trim().toLowerCase();
    const matchedEmployee = data.find(
      (emp) => emp.firstName.trim().toLowerCase() === employeeName
    );

    if (matchedEmployee) {
      matchedEmployee.tasks.push(taskObject);
      matchedEmployee.taskCount.newTask += 1;
      localStorage.setItem("employees", JSON.stringify(data));
      console.log("Task assigned to", matchedEmployee);
      toast.success("Task assigned successfully");
    } else {
      setshowModal(true);
      toast.error("Employee not found", {
        autoClose: 2000,
        pauseOnHover: true,
      });
    }

    localStorage.setItem("employees", JSON.stringify(data));
    console.log(data);
    settaskTitle("");
    settaskDesrription("");
    settaskDate("");
    setasignTo("");
    setcategory("");
  };

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
        pauseOnHover
        closeOnClick
        draggable
      />
      <form
        id="adminform"
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="text-sm md:text-base flex flex-col md:flex-row justify-between items-center mt-5 p-3 bg-[#1c1c1c] rounded-lg text-white"
      >
        {/* Left Form */}
        <div className="text-sm md:text-base w-full md:w-[45%] px-0 md:px-10">
          <div>
            <h3>Task Title</h3>
            <input
              className="border-[2px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1 mb-3"
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
              className="border-[1px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1 mb-3"
              value={taskDate}
              onChange={(e) => {
                settaskDate(e.target.value);
              }}
              type="date"
              required
            />
          </div>
          <div>
            <h3>Assign to</h3>
            <input
              required
              className="border-[1px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1 mb-3"
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
              required
              className="border-[1px] border-bg-gray-400 rounded-md bg-transparent w-full outline-1 outline-white mt-1 mb-3"
              value={category}
              onChange={(e) => {
                setcategory(e.target.value);
              }}
              type="text"
              placeholder="Design, dev, etc.."
            />
          </div>
        </div>

        {/* Right Form */}
        <div className=" text-sm md:text-base w-full md:w-[45%] px-0 md:px-10 mt-1 md:mt-5 md:mt-0">
          <h3>Description</h3>
          <textarea
            value={taskDescription}
            onChange={(e) => {
              settaskDesrription(e.target.value);
            }}
            className="resize-none w-full rounded-md bg-transparent border-[1px] border-bg-gray-400 outline-1 outline-white mt-1 mb-3"
            cols={30}
            rows={10}
          ></textarea>
          <button className=" text-sm md:text-base bg-emerald-600 mb-8 w-full py-2 rounded-xl mt-1 md:mt-5 hover:bg-emerald-400">
            Create Task
          </button>
        </div>
      </form>

      {showModal && (
        <Modal
          onsubmission={submitHandler}
          onClose={() => setshowModal(false)}
          onCreate={() => {
            setshowModal(false);
            setshowForm(true);
          }}
        />
      )}
      {showForm && (
        <CreateUser
          formClose={() => {
            setshowForm(false);
          }}
          modalClose={() => {
            setshowForm(false);
          }}
        />
      )}
    </div>
  );
};

export default CreateTask;
