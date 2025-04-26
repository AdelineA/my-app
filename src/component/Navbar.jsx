import React from "react";
import { NavLink } from "react-router";
import { navLinks } from "../utils/navLinks";

const Navbar = () => {
  return (
    <div className="text-red-500 gap-10 flex">
      {navLinks.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            isActive ? "text-blue-500 underlined text-bold" : ""
          }
        >
          {link.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
