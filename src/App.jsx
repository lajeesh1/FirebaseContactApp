import React from "react";
import Navbar from "./components/Navbar";
import { FaSearch } from "react-icons/fa";

const App = () => {
  return (
    <div className="max-w-[350px] mx-auto ">
      <Navbar />
      <div className="input flex relative items-center m-3 ">
        <FaSearch className="text-white text-2xl absolute ml-3 " />
        <input
          type="text"
          className="flex-grow outline-none text-white bg-transparent border border-white rounded-md h-[40px] pl-[50px]"
        />
      </div>
    </div>
  );
};

export default App;
