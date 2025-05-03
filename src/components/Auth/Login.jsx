import React, { useState } from "react";

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const SubmitHandler = (e) => {
    e.preventDefault();
    handleLogin(email,password)

    setPassword("");
    setEmail("");
  };
  return (
    <div className="  flex justify-center items-center h-screen w-screen">
      <div className=" border-2 border-emerald-500 rounded-lg p-12 ">
        <form
          onSubmit={SubmitHandler}
          action=""
          className="flex flex-col items-center justify-center gap-5"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-[2px] rounded-full py-2 px-2 text-xl text-black  placeholder:text-white border-emerald-600"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className="text-white outline-none bg-transparent border-[2px] rounded-full py-2 px-2 text-xl text-black  placeholder:text-white border-emerald-600"
            type="password"
            placeholder="Enter your Password"
          />
          <button className="rounded-full bg-emerald-500 text-white px-4 py-3 w-full">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
