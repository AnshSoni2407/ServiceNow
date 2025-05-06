import React from "react";

const Header = () => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", "");
    window.location.reload();
  };

  return (
    <header className=" flex justify-between px-7 text-white bg-[#1c1c1c] item-end font-bold align-middle p-3 rounded-md  ">
      <div className="bg-transparent ">
        <h2 className="bg-transparent font-semibold text-lg ">Hii </h2>
        <span className="bg-transparent font-semibold text-2xl">
          UserName 👋
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
