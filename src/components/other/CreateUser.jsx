import React from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const CreateUser = ({ modalClose, formClose }) => {
  const [Id, setId] = useState("");
  const [fName, setfName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  let employees = JSON.parse(localStorage.getItem("employees"));

  //   }, [])
  useEffect(() => {
    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    if (employees.length > 0) {
      const lastId = parseInt(employees[employees.length - 1].id);
      setId(lastId + 1);
    } else {
      setId(1); // If no user, start with 1
    }
  }, []);

  const handleSubmit = (e) => {
     e.preventDefault();
     const userObject = {
       id: Id,
       firstName: fName,
       email: email,
       password: password,
       taskCount: {
         active: 0,
         newTask: 0,
         completed: 0,
         failed: 0,
       },
       tasks: [],

       
     };

    employees.push(userObject);
    console.log(employees);
    localStorage.setItem("employees", JSON.stringify(employees));

    setEmail("");
    setfName("");
    setPassword("");
    setId("");
    setTimeout(() => {
      formClose();
    }, 1000);

    toast.success(
      `User Created Successfully \nYou can assign task to ${fName} now!`,
      {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }
    );
  };
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center h-screen w-screen bg-black/80">
      <form className="relative w-1/2 bg-white/70 text-center rounded-xl p-8 flex flex-col gap-6 text-black">
        {/*  Close Button */}
        <div
          onClick={modalClose}
          className="absolute top-3 right-4 text-2xl font-bold text-black cursor-pointer hover:text-red-600 hover:scale-125"
        >
          &times;
        </div>

        {/* Inputs */}
        <div className="flex justify-between gap-4">
          {/* LEFT SIDE */}
          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <h2 htmlFor="id" className="text-black mb-1 text-left">
                Enter employee ID
              </h2>
              <input
                type="number"
                id="id"
                value={Id}
                suggested={Id}
                // onChange={(e) => setId(e.target.value)}
                onChange={(e) => setId(e.target.value)}
                readOnly
                required
                placeholder="Unique ID"
                className="border-2 border-emerald-500 rounded-lg p-2 text-black w-full"
              />
            </div>
            <div>
              <h2 htmlFor="firstName" className="text-black mb-1 text-left">
                Enter your Name
              </h2>
              <input
                required
                type="text"
                id="firstName"
                value={fName}
                onChange={(e) => setfName(e.target.value)}
                placeholder="Enter your Name"
                className="border-2 border-emerald-500 rounded-lg p-2 text-black w-full"
              />
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-1/2 flex flex-col gap-4">
            <div>
              <h2 htmlFor="email" className="text-black mb-1 text-left">
                Enter your Email
              </h2>
              <input
                required
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email"
                className="border-2 border-emerald-500 text-black rounded-lg p-2 w-full"
              />
            </div>
            <div>
              <h2 htmlFor="password" className="text-black mb-1 text-left">
                Enter your Password
              </h2>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your Password"
                className="border-2 border-emerald-500 rounded-lg text-black p-2 w-full"
              />
            </div>
          </div>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleSubmit}
          className="rounded-full bg-emerald-500 text-white px-4 py-3 w-1/2 mx-auto"
        >
          Create Employee
        </button>
      </form>
    </div>
  );
};
export default CreateUser;
