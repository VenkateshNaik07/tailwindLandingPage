import React from "react";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="flex items-center justify-center gap-2">
        <img src="./assets/Logo.svg" alt="logo" />
        <button className="bg-gradient-to-r from-orange-300 to-orange-600 text-sm text-white px-2.5 py-1.5 rounded-2xl">Hosterr is hiring</button>
      </div>
      <ul className="hidden lg:flex font-lato gap-6 text-gray-400 justify-between items-center">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hosterr</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a href="#" className="text-gray-400">Sign In</a>
        <button className="rounded-md px-4 py-3 text-white bg-blue-400 hover:bg-blue-600">Join Waitlist</button>
      </div>
      <div className="lg:hidden">
        <VscThreeBars />
      </div>
    </div>
  );
};

export default Header;
