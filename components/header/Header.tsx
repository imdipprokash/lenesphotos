import Image from "next/image";
import React from "react";
import logo from "../../assets/icon.png";
import {
  AiOutlineLogin,
  AiOutlineSearch,
  AiOutlineUser,
  AiOutlineUserAdd,
  AiOutlineUserSwitch,
} from "react-icons/ai";

const Header = () => {
  return (
    <header className="bg-slate-500 ">
      <div className="flex items-center justify-between px-4 max-w-7xl mx-auto">
        <div className="flex items-center group">
          <Image
            src={logo}
            width="60"
            height="60"
            className="group-hover:cursor-pointer"
          />
          <h1 className="font-light text-left  text-2xl text-rose-50 hidden sm:flex group-hover:cursor-pointer">
            Lenesphotos.com
          </h1>
        </div>
        <div className="flex space-x-4">
          <div className="flex items-center h-max bg-gray-300 px-3 rounded-full">
            <input
              type="text"
              className="h-8 outline-none text-zinc-700 font-light bg-gray-300"
              style={{ textDecoration: "none", border: "none" }}
            />
            <AiOutlineSearch
              size={25}
              className="text-gray-500 p-0 cursor-pointer hover:scale-110"
            />
          </div>
          <AiOutlineLogin className="text-gray-700 " size={30} />
        </div>
      </div>
    </header>
  );
};

export default Header;
