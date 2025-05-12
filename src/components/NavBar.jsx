import React from 'react'
import { NavLink } from 'react-router'
const NavBar = () => {
  return (
    <div>
        <ul className="flex justify-between items-center bg-gray-800 p-4">
  {/* Left side links */}
  <li className="flex gap-5 text-white">
    <NavLink to="/">Home</NavLink>
    <NavLink to="/About">About</NavLink>
    <NavLink to="/Contact">Contact</NavLink>
  </li>

  {/* Right side link */}
  <li>
  <NavLink
      to="/SignUp"
      className="text-black bg-white px-4 py-2 rounded-x-2 hover:bg-gray-200"
    >
      SignUp
    </NavLink>
    <NavLink
      to="/SignUp"
      className="text-black bg-white px-4 py-2 rounded-y-2 hover:bg-gray-200"
    >
      LogIn
    </NavLink>
  </li>
</ul>


    </div>
  )
}

export default NavBar