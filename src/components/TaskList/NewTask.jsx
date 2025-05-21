import React from 'react'

const NewTask = ({data}) => {
  
 
  return (
    <div className="relative flex-shrink-0 h-full w-[300px] md:w-[350px] rounded-xl bg-yellow-400">
      <div>
        <div className="flex justify-between px-5 py-2 text-white text-xl font-semibold">
          <h4 className="bg-red-600 p-1 rounded-md">{data.category}</h4>
          <h2>{data.date}</h2>
        </div>
        <h1 className="mt-5 text-center text-white text-2xl md:text-3xl font-extrabold">
          {data.title}
        </h1>
      </div>
      <p className="text-white p-5 font-semibold text-sm md:text-base">
        {data.description}
      </p>

      
      <div className="flex gap-3 px-5 absolute bottom-7 w-full">
        <button className="bg-green-600 text-white rounded py-1 w-[48%] text-sm md:text-base">
          Mark as Complete
        </button>
        <button className="bg-red-600 text-white rounded py-1 w-[48%] text-sm md:text-base">
          Mark as Failed
        </button>
      </div>
    </div>
  );
  
}

export default NewTask