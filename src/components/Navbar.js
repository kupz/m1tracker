import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";

import logo from "../assets/K.png";

export default function Navbar() {
  return (
    <header className="flex justify-between p-5 font-medium text-white">
      <div className="flex gap-5 items-center ">
        <img
          src={logo}
          alt="logo"
          className="w-12 drop-shadow-lg cursor-pointer"
        />
        <a>Link1</a>
        <a>Link2</a>
        <a>Link3</a>
      </div>
      <div className="flex gap-5 items-center">
        <SearchIcon />
        <PersonIcon />
        <button className="border-2 rounded-md px-2 py-1 border-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
          Contact us
        </button>
      </div>
    </header>
  );
}
