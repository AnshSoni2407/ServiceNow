import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className=" w-[300px] md:w-[350px] text-sm md:text-base relative flex-shrink-0 h-full rounded-xl bg-green-400">
      <div>
        <div className="flex justify-between px-5 py-2 text-white text-xl font-semibold">
          <h4 className="bg-red-600 p-1 rounded-md">{data.category}</h4>
          <h2>{data.date}</h2>
        </div>
        <h1 className="mt-5 text-center text-white text-2xl font-extrabold">
          {data.title}
        </h1>
      </div>
      <p className="text-white p-5 font-semibold overflow-x-autox-scroll">
        {data.description}
      </p>
      <div className="flex justify-evenly px-5 mt-5 py-2 gap-1 text-white text-s font-semibold">
        <button className=" bg-yellow-600 rounded p-1 w-[80%] absolute bottom-7">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
