import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate()
  return (
    <div className="sticky top-0 z-50 flex justify-between p-5 bg-white shadow-sm shadow-gray-300 ">
      <div >
        <h1 className="font-bold text-[18px] text-blue-900">Sipalaya Info Tech</h1>
      </div>
      <div className="hidden md:block md:space-x-6">
        <NavLink className="hover:text-blue-600" to="/">Home</NavLink>
        <NavLink className="hover:text-blue-600" to="/courses">Courses</NavLink>
        <NavLink className="hover:text-blue-600" to="/enroll">Enroll</NavLink>
        <NavLink className="hover:text-blue-600" to="/aboutUs">About Us</NavLink>
        <NavLink className="hover:text-blue-600" to="/contactUs">Contact Us</NavLink>
      </div>
      <div className="hidden md:block md:space-x-3">
        <button className="bg-blue-600 text-white p-1 px-7 rounded-4xl hover:bg-blue-500" onClick={()=>{navigate("/register")}}>Register</button>
        <button className="bg-blue-600 text-white p-1 px-7 rounded-4xl hover:bg-blue-500" onClick={()=>{navigate("/login")}}>Login</button>
      </div>
      <button className=" md:hidden" onClick={()=>{
        setShowMenu(!showMenu)
      }}>
        {showMenu ? <IoClose className="text-[#334155] text-2xl" /> :
    <IoMdMenu className="text-[#334155] text-2xl" />
        
    }
        
      </button>
      <div className={`absolute left-0 w-full bg-white top-17 p-4 md:hidden shadow-sm shadow-gray-300 origin-top transition-all duration-100 ease-in-out ${
        showMenu ? "opacity-100 scale-y-100 pointer-events-auto" :
        "opacity-0 scale-y-0 pointer-events-none"
      }`}>
        <ul className="flex flex-col gap-4 justify-center items-center" onClick={()=>{
            setShowMenu(false)
        }}>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/aboutUs">About Us</NavLink></li>
            <li><NavLink to="/contactUs">Contact us</NavLink></li>
            <li className="bg-blue-700 text-white p-3  w-full text-center rounded-4xl">Register</li>
            <li className="bg-white border border-gray-400 p-3  w-full text-center rounded-4xl">Login</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
