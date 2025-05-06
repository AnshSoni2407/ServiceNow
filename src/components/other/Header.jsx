import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";


const Header = (props) => {
  const empName = useContext(AuthContext);

  console.log();
  const logOutUser = () => {
    console.log(props);

    localStorage.setItem("loggedInUser", "");
    props.changeUser("");
  }; 

  return (
    <header className=" flex justify-between px-7 text-white bg-[#1c1c1c] item-end font-bold align-middle p-3 rounded-md  ">
      <div className="bg-transparent ">
        <h2 className="bg-transparent font-semibold text-lg ">Hii </h2>
        <span className="bg-transparent font-semibold text-2xl">
          {empName.userData.employees.firstName || "Guest"} 👋
        </span>
      </div>
      <button
        onClick={logOutUser}
        className="px-5 py-2 rounded-lg text-white h-11 text-bold bg-red-600"
      >
        Log out
      </button>
    </header>
  );
};

export default Header;
