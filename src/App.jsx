import React from "react";
import Navbar from "./components/Navbar";
import { CiSearch } from "react-icons/ci";
import { FaPlusSquare } from "react-icons/fa";

const App = () => {
  return (
    <div className="max-w-[350px] mx-auto ">
      <Navbar />
      <div className="input flex relative items-center m-3 ">
        <CiSearch className="font-thin text-white text-2xl absolute ml-3  " />
        <input
          type="text"
          className=" flex-grow outline-none text-white bg-transparent border border-white rounded-md h-[40px] pl-[50px]"
        />
        <FaPlusSquare className="cursor-pointer text-5xl text-white ml-1 bg" />
      </div>
    </div>
  );
};

export default App;
