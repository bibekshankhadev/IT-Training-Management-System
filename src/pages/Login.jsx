import React from "react";
import { MdLogin } from "react-icons/md";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="p-20 px-85">
      <div className="card flex bg-[#F4F2FF] justify-between rounded-2xl shadow-md shadow-gray-400 ">
        <div className="left p-10 space-y-2 w-full">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">Welcome Back!</h1>
            <p className="text-sm text-gray-500">
              Secure access to your learning dashboard.
            </p>
          </div>
          <form action="">
            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="email" className="text-[#181A2D]">
                {" "}
                Email
              </label>
              <div className="bg-[#C3C5D7] p-3 rounded-t-lg w-full text-gray-600 text-md flex items-center gap-3">
                <FaRegEnvelope className="text-gray-600 text-lg" />
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email....."
                  className="bg-transparent outline-none"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1 pt-4">
              <label htmlFor="email"> Password</label>
              <div className="bg-[#C3C5D7] p-3 rounded-t-lg w-full text-gray-600 text-md flex items-center justify-between">
                <div className="flex w-[90%] items-center gap-3">
                  <FaLock />
                <input
                  type="password"
                  id="email"
                  placeholder="Your Password....."
                  className="bg-transparent outline-none"
                />
                </div>
                <div>
                  <FaRegEye />
                </div>
              </div>
            </div>
            <div className="flex justify-between pt-5 ">
              <div className="flex gap-1 items-center">
                <input type="checkbox" className="w-4 h-4 accent-blue-600" /> <p className="text-[13px]">Remember Me</p>
              </div>
              <div>
                <p className="font-bold text-blue-800 text-[12px]">Forgot Password?</p>
              </div>
            </div>
              <button className="flex bg-linear-to-r from-blue-900 to-blue-700 text-white px-10 py-3 items-center gap-1 text-md w-full justify-center rounded-2xl mt-5 ">
                Sign In <MdLogin />
              </button>
          </form>
          <h1 className="text-center text-[12px] pt-2">Does not have account yet? <NavLink className="font-bold text-blue-800" to="/register">Register Here!</NavLink></h1>
        </div>
        <div className="right bg-linear-to-b from-blue-950 to-blue-800 text-white p-10 space-y-5 rounded-r-2xl">
          <h1 className="text-4xl  font-bold">Master the Architecture of Code.</h1>
          <p className="text-lg font-semibold text-gray-200">
            Empowering your digital journey with professional tech solutions and
            enterprise-grade infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
