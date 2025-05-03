import React from "react";

const CreateTask = () => {
  return (
    <div>
      <form
        id="adminform"
        action=""
        className="flex justify-between  items-center mt-5 p-3 bg-[#1c1c1c] rounded-lg text-white"
      >
        <div className="w-[40%] px-10 ">
          <div>
            {" "}
            <h3>Task Title</h3>
            <input type="text" placeholder="Make a UI design" />
          </div>{" "}
          <div>
            <h3>Date</h3>
            <input type="date" />
          </div>{" "}
          <div>
            {" "}
            <h3>Assign to</h3>
            <input type="text" placeholder=" Employee Name" />
          </div>{" "}
          <div>
            {" "}
            <h3>Category</h3>
            <input type="text" placeholder="Design, dev, etc.." />
          </div>
        </div>{" "}
        <div className="w-[40%] px-10   ">
          {" "}
          <h3>Description</h3>
          <textarea
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
