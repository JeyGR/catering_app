import React from "react";
import "./Navbar.css";
import { logo, menuimg, profileimg } from "../../assets";

const Navbar = () => {
  return (
    <nav>
      <div className="w-full flex justify-between items-center drop-shadow-lg bg-white">
        <div className="ml-4">
          <img src={logo} alt="logo" className="w-20 h-20" />
        </div>
        <div className="flex justify-evenly items-center p-3 gap-6 mr-2">
          <img src={profileimg} alt="profile" className="w-12 h-12" />
          <img src={menuimg} alt="menu" className="w-16 h-16" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
