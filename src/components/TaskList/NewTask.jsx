import React from 'react'

const NewTask = () => {
  return (
    <div className=" flex-shrink-0 h-full w-[350px] rounded-xl bg-green-400">
      <div>
        <div className="flex justify-between px-5 py-2 text-white text-xl font-semibold">
          <h4 className="bg-red-600 p-1 rounded-md">High</h4>{" "}
          <h2>10/05/2003</h2>
        </div>
        <h1 className="mt-5 text-center text-white text-2xl font-extrabold">
          My birthday
        </h1>
      </div>
      <p className="text-white p-5 font-semibold overflow-x-autox-scroll">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam iusto
        perferendis reprehenderit obcaecati nam at quod, ipsam nesciunt vel
        eius?
      </p>
      <div className="flex justify-evenly px-5 py-2 mt-5 gap-1 text-white text-s font-semibold">
        <button className=" bg-green-600 rounded p-1">Mark as Complete</button>
        <button className=" bg-red-600 rounded p-1">Mark as Failed</button>
      </div>
    </div>
  );
}

export default NewTask