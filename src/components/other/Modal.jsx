import React from "react";

const Modal = ({ onClose, onCreate }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center px-4">
      <div className="w-[90%] md:w-[500px] bg-white/70 text-center rounded-xl p-5  h-auto">
        <h2 className="font-bold text-2xl md:text-4xl mb-5 text-red-600">
          Employee not found
        </h2>
        <h3 className="text-lg md:text-2xl">Do you want to create employee?</h3>
        <div className="flex justify-around mt-[20%] w-full text-sm md:text-lg font-semibold">
          <button
            onClick={onCreate}
            className="bg-emerald-400 rounded-full w-[45%] p-2 hover:bg-emerald-600"
          >
            Create Employee
          </button>
          <button
            onClick={onClose}
            className="bg-red-500 rounded-full w-[45%] p-2 hover:bg-red-600"
          >
            Not now
          </button>
        </div>
      </div>
    </div>
  );
  

  // return (
  //   <div className="  fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center">
  //     <div className="    h-1/2 bg-white/70 text-center rounded-xl p-5 ">
  //       <h2 className=" font-bold text-4xl mb-5 text-red-600 ">
  //         Employee not found{" "}
  //       </h2>
  //       <h3 className="text-3xl">Do you want to create employee ?</h3>
  //       <div className="flex justify-around mt-[20%] w-full text-xl font-semibold">
  //         {" "}
  //         <button
  //           onClick={onCreate}
  //           className=" bg-emerald-400 rounded-full w-[40%] p-2 hover:bg-emerald-600  "
  //         >
  //           Create Employee
  //         </button>
  //         <button
  //           onClick={onClose}
  //           className="bg-red-500 rounded-full w-[40%]  hover:bg-red-600"
  //         >
  //           Not now
  //         </button>
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Modal;
