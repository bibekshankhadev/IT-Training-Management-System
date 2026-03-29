import React, { useState } from "react";
import { MdLogin } from "react-icons/md";
import { FaRegEnvelope, FaLock, FaRegEye, FaUser } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { IoIosCloudUpload } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [imageError, setImageError] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    

    if (name.length <= 0) {
      setNameError("Name should not be empty.");
      return;
    }
    if (email.length <= 0) {
      setEmailError("Email should not be empty.");
      return;
    }
    if (phone.length <= 0 || phone.length < 10 || phone.length > 10) {
      setPhoneError(
        "Phone should not be empty or less or more than 10 digits.",
      );
      return;
    }
    if (password.length <= 0 || password < 8) {
      setPasswordError(
        "Password should not be empty or less than 8 characters.",
      );
      return;
    }
    console.log(name, email, phone, password, image);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 md:px-10 lg:px-16 xl:px-24 flex items-center justify-center">
      <div className="w-full max-w-5xl overflow-hidden rounded-2xl bg-[#F4F2FF] shadow-md shadow-gray-400 flex flex-col lg:flex-row justify-between">
        {/* Left Side */}
        <div className="w-full lg:w-[42%] bg-linear-to-b from-blue-950 to-blue-800 text-white p-6 sm:p-8 md:p-10 flex flex-col justify-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Master the Architecture of Code.
          </h1>
          <p className="mt-5 text-sm sm:text-base md:text-lg font-semibold text-gray-200 leading-7">
            Empowering your digital journey with professional tech solutions and
            enterprise-grade infrastructure.
          </p>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-[58%] p-6 sm:p-8 md:p-10">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-blue-900">
              Create Account
            </h1>
            <p className="text-sm sm:text-base text-gray-500 mt-1">
              Start your learning journey with Sipalaya.
            </p>
          </div>

          <form
            className="mt-6 space-y-4"
            onSubmit={(e) => {
              handleRegister(e);
            }}
          >
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-[#181A2D] font-medium">
                Name
              </label>
              <div className="w-full bg-[#C3C5D7] px-4 py-3 rounded-lg flex items-center gap-3">
                <FaUser className="text-gray-600 text-lg shrink-0" />
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name....."
                  onChange={(e) => {
                    setName(e.target.value);
                    setNameError("");
                  }}
                  className="w-full min-w-0 bg-transparent outline-none placeholder:text-gray-500"
                />
              </div>
              {nameError.length > 0 && (
                <p className="text-red-600">*{nameError}</p>
              )}
            </div>

            {/* Email + Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 min-w-0">
                <label htmlFor="email" className="text-[#181A2D] font-medium">
                  Email
                </label>
                <div className="w-full bg-[#C3C5D7] px-4 py-3 rounded-lg flex items-center gap-3">
                  <FaRegEnvelope className="text-gray-600 text-lg shrink-0" />
                  <input
                    type="email"
                    id="email"
                    placeholder="Your Email....."
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailError("");
                    }}
                    className="w-full min-w-0 bg-transparent outline-none placeholder:text-gray-500"
                  />
                </div>
                {emailError.length > 0 && (
                  <p className="text-red-600">*{emailError}</p>
                )}
              </div>

              <div className="flex flex-col gap-2 min-w-0">
                <label htmlFor="phone" className="text-[#181A2D] font-medium">
                  Phone Number
                </label>
                <div className="w-full bg-[#C3C5D7] px-4 py-3 rounded-lg flex items-center gap-3">
                  <FaPhone className="text-gray-600 text-lg shrink-0" />
                  <input
                    type="tel"
                    id="phone"
                    placeholder="Your phone number....."
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneError("")
                    }}
                    className="w-full min-w-0 bg-transparent outline-none placeholder:text-gray-500"
                  />
                </div>
                {
                  phoneError.length>0 && (
                    <p className="text-red-600">*{phoneError}</p>
                  )
                }
              </div>
            </div>

            {/* Password + Confirm Password */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2 min-w-0">
                <label htmlFor="password" className="font-medium">
                  Password
                </label>
                <div className="w-full bg-[#C3C5D7] px-4 py-3 rounded-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FaLock className="text-gray-600 shrink-0" />
                    <input
                      type="password"
                      id="password"
                      placeholder="Your Password....."
                      onChange={(e) => {
                        setPassword(e.target.value);
                        setPasswordError("")
                      }}
                      className="w-full min-w-0 bg-transparent outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <FaRegEye className="text-gray-600 shrink-0 cursor-pointer" />
                </div>
                {
                  passwordError.length>0 && (
                    <p className="text-red-600">{passwordError}</p>
                  )
                }
              </div>

              <div className="flex flex-col gap-2 min-w-0">
                <label htmlFor="cpassword" className="font-medium">
                  Confirm Password
                </label>
                <div className="w-full bg-[#C3C5D7] px-4 py-3 rounded-lg flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <FaLock className="text-gray-600 shrink-0" />
                    <input
                      type="password"
                      id="cpassword"
                      placeholder="Confirm Password....."
                      className="w-full min-w-0 bg-transparent outline-none placeholder:text-gray-500"
                    />
                  </div>
                  <FaRegEye className="text-gray-600 shrink-0 cursor-pointer" />
                </div>
              </div>
            </div>

            {/* Upload Image */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="profilePic"
                className="text-[#181A2D] font-medium"
              >
                Upload Profile Picture
              </label>
              <div className="w-full bg-[#C3C5D7] px-4 py-3 rounded-lg flex items-center gap-3">
                <IoIosCloudUpload className="text-gray-600 text-lg shrink-0" />
                <input
                  type="file"
                  id="profilePic"
                  onChange={(e) => {
                    setImage(e.target.files[0]);
                  }}
                  className="w-full min-w-0 bg-transparent outline-none placeholder:text-gray-500"
                />
              </div>
            </div>

            {/* Button */}
            <button className="w-full flex items-center justify-center gap-2 rounded-2xl bg-linear-to-r from-blue-900 to-blue-700 text-white py-3 text-base sm:text-lg mt-2 hover:from-blue-800 hover:to-blue-600 transition">
              Register <MdLogin />
            </button>
          </form>

          <h1 className="text-center text-sm pt-4">
            Already have account?{" "}
            <NavLink className="font-bold text-blue-800" to="/login">
              Login Here!
            </NavLink>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Register;
