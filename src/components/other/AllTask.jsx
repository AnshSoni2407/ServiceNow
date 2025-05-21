import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {

  const authData = useContext(AuthContext);



  return (
    <div id="Alltaskscroll" className="bg-[#1c1c1c] p-5 rounded mt-5 ">
      <div className="bg-red-400 mb-3 py-2 px-4 flex justify-between rounded-l text-center text-xl font-bold">
        <h2 className="text-sm md:text-base w-[20%] text-left">Name</h2>
        <h3 className="text-sm md:text-base w-[20%]">New Task</h3>
        <h3 className="text-sm md:text-base w-[20%]">Active Task</h3>
        <h3 className="text-sm md:text-base w-[20%]">Complete Task</h3>
        <h3 className="text-sm md:text-base w-[20%]">Failed Task</h3>
      </div>

      {authData.userData.employees.map((elem, idx) => {
        return (
          <div key={idx} className=" ">
            <div className="border-2 border-emerald-400 rounded mb-3 py-2 px-4 flex justify-between rounded-l text-center font-semibold">
              <h2 className="w-[20%] text-left font-bold">{elem.firstName}</h2>
              <h3 className="w-[20%] text-blue-400">{elem.taskCount.newTask}</h3>
              <h3 className="w-[20%] text-yellow-400">{elem.taskCount.completed}</h3>
              <h3 className="w-[20%] text-green-400">{elem.taskCount.failed}</h3>
              <h3 className="w-[20%] text-red-400">{elem.taskCount.active}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllTask;
