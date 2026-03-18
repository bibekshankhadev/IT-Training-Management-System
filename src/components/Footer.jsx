import React from "react";
import { CiGlobe } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa6";
import { TiUserAddOutline } from "react-icons/ti";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="flex flex-col bg-[#020617] text-gray-300 pt-10 px-4">
      <div className="flex justify-around pb-4">
        <div className="w-[30%] flex flex-col gap-y-3">
          <div className="flex flex-col gap-y-3">
            <h1 className="text-lg font-bold">Sipalaya Info Tech</h1>
            <p>
              The leading IT training institute in Nepal, dedicated to bridging
              the gap between academia and industry.
            </p>
          </div>
          <div className="flex gap-3 items-center">
            <div className="bg-[#393a3f] p-1 text-white rounded-lg text-xl">
              <CiGlobe />
            </div>
            <div className="bg-[#393a3f] p-1 text-white rounded-lg text-xl">
              <IoShareSocial />
            </div>
            <div className="bg-[#393a3f] p-1 text-white rounded-lg text-xl">
              <FaRegEnvelope />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold text-lg">Quick Links</h1>
          <ul className="flex flex-col gap-y-2">
            <li>
              <NavLink>Courses Catalog</NavLink>
            </li>
            <li>
              <NavLink>Upcoming Workshops</NavLink>
            </li>
            <li>
              <NavLink>Certifications</NavLink>
            </li>
            <li>
              <NavLink>Career Support</NavLink>
            </li>
            <li>
              <NavLink>Blogs & News</NavLink>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-3">
          <h1 className="font-bold font-lg">Contact Us</h1>
          <div className="flex gap-x-3 items-center">
            <MdOutlineLocationOn className="text-blue-600 text-xl" />
            <h1>Putalisakad, Kathmandu, Nepal</h1>
          </div>
          <div className="flex gap-x-3 items-center">
            <IoCall className="text-blue-600 text-xl" />
            <h1>+977980000200, +977 1-44525632</h1>
          </div>
          <div className="flex gap-x-3 items-center">
            <FaEnvelope className="text-blue-600 text-xl" />
            <h1>Info@Sipalaya.com</h1>
          </div>
        </div>
      </div>
      <div className="py-4 border-t border-t-gray-400 mt-2 text-center font-light">
        <h1>© 2024 Sipalaya Info Tech Pvt. Ltd. All rights reserved.</h1>
      </div>
    </div>
  );
}

export default Footer;
