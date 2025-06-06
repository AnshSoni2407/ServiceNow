import React from 'react'

const CompleteTask = ({data}) => {
  return (
    <div className="relative flex-shrink-0 h-full w-[300px] md:w-[350px] rounded-xl bg-yellow-400">
      <div>
        <div className="flex justify-between px-5 py-2 text-white text-xl font-semibold">
          <h4 className="bg-red-600 p-1 rounded-md">{data.category}</h4>{" "}
          <h2>{data.date}</h2>
        </div>
        <h1 className="mt-5 text-center text-white text-2xl font-extrabold">
          {data.title}
        </h1>
      </div>
      <p className="text-white p-5 font-semibold overflow-x-autox-scroll">
        {data.description}
      </p>
      <div className="flex justify-evenly px-5 py-2 mt-5  gap-1 text-white text-s font-semibold">
        <button className=" bg-green-600 rounded p-1 w-[80%] absolute bottom-7">
          Completed
        </button>
      </div>
    </div>
  );
}

export default CompleteTask