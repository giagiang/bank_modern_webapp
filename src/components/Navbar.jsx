import { useState } from "react";
import { close, menu, logo } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} />
    </nav>
  );
};

export default Navbar;
