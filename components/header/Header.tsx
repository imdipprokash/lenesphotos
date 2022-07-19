import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Header = () => {
  return (
    <div className="flex bg-gray-50 items-center px-4 py-2 justify-between space-x-3 ...">
      <div className="flex w-full space-x-2">
        {/* Title */}
        <h1 className="text-2xl italic font-mono space-x-3 ">
          Lenesphotos.com
        </h1>

        <div className="hidden sm:grow max-w-7xl  sm:flex items-center bg-gray-200 rounded-full px-4  ...">
          {/* Input */}
          <AiOutlineSearch className="text-gray-500 " />
          <input className="sm:grow outline-none px-2 text-gray-600 bg-gray-200 hover:cursor-pointer py-2 " />
        </div>
      </div>
      <div className="flex">
        <h1 className=" flex cursor-pointer ">Login / Sign up</h1>
      </div>{" "}
    </div>
  );
};

export default Header;
