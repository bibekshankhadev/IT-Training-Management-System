import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { IoCashSharp } from "react-icons/io5";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
function CourseDetail() {
  const {user}= useContext(AuthContext);
  const navigate = useNavigate()
  const { state } = useLocation();
  const [showSyllabus, setShowSyllabus] = useState(null);
  const [instructor, setInstructor] = useState("")
  const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
  const instructorId = state?.instructorDetails
  console.log(instructorId);
  
  const getInstructor=async()=>{
    try {
      setIsLoading(true);
      setIsError(false)
      let res = await fetch(`http://localhost:9000/api/user/singleInstructor?id=${instructorId}`, {
        method: "GET",
        credentials: "include",
      });
      if(res.ok){
        res= await res.json();
      setInstructor(res.instructor);
      setIsLoading(false);
      setIsError(false)
      }

    } catch (error) {
      console.log(error);
      setIsError(true)
    }
  }
  useEffect(()=>{
    getInstructor();
  },[])
  
  if(isLoading) {
    return (
      <div className="p-50">
        <p className="text-center text-2xl font-bold text-blue-700">Loading......</p>
      </div>
    )
  }
  if(isError){
    return (
      <div className="p-50">
        <p className="text-center text-2xl font-bold text-blue-700">Something went Wrong ! Please Try Again</p>
      </div>
    )
  }
  

  return (
    <div className=" p-13 bg-[#efeffc]">
      <div className="flex gap-5">
        <div className="left w-[65%] space-y-3">
          <img
            className="w-full object-cover h-100 shadow-md rounded-2xl border-2 border-gray-600 shadow-blue-600"
            src={`http://localhost:9000/image/${state?.courseImage}`}
            alt=""
          />
          <h1 className="text-3xl font-bold">{state?.title}</h1>
          <p className="text-gray-600 text-sm">{state?.description}</p>

          <div className="flex gap-10 justify-around pt-5 pb-5">
            <div className="bg-white rounded-xl  p-5 space-y-1 shadow-md shadow-gray-300 w-[32%]">
              <FaRegClock className="text-blue-700 text-lg" />
              <p className="text-gray-500 text-xs">Duration</p>
              <h1 className="font-bold text-lg">{state?.duration}</h1>
            </div>
            <div className="bg-white rounded-xl  p-5 space-y-1 shadow-md shadow-gray-300 w-[32%]">
              <IoCashSharp className="text-blue-700 text-lg" />
              <p className="text-gray-500 text-xs">Course Fee</p>
              <h1 className="font-bold text-lg">NPR {state?.fee}</h1>
            </div>
            <div className="bg-white rounded-xl  p-5 space-y-1 shadow-md shadow-gray-300 w-[32%]">
              <FaArrowTrendUp className="text-blue-700 text-lg" />
              <p className="text-gray-500 text-xs">Skill Level</p>
              <h1 className="font-bold text-lg">{state?.level}</h1>
            </div>
          </div>

          <div className="syllabus">
            <h1 className="text-xl font-bold">Course Syllabus</h1>
            {state?.syllabus?.map((item, index) => {
              return (
                <div className="card " key={item?._id || index}>
                  <div
                    onClick={() => {
                      setShowSyllabus(showSyllabus === index ? null : index);
                    }}
                    className="module-list bg-gray-300 flex justify-between p-3 items-center rounded-xl text-lg font-semibold mt-3 mb-3"
                  >
                    <p>{item?.title}</p>
                    <IoIosArrowDown />
                  </div>
                  {item?.topics?.map((i, iIndex) => {
                    return (
                      <div
                        className={`px-10 space-y-3 ${
                          showSyllabus === index ? "block" : "hidden"
                        }`}
                        key={iIndex}
                      >
                        <li>{i}</li>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <div className="right w-[35%]">
          <div className="instructor-card bg-white w-full rounded-xl shadow-md shadow-blue-200 p-5">
            <h1 className="text-lg font-bold text-gray-600">INSTRUCTOR</h1>
            <div className="image-name flex pt-3 gap-5">
              <img
                src={`http://localhost:9000/image/${instructor?.image}`}
                className=" w-15 h-15 rounded-full"
                alt=""
              />
              <div>
                <h1 className="text-md font-semibold">{instructor?.fullName}</h1>
                <p className="text-sm text-gray-600">{instructor?.instructorInfo?.tag}</p>
              </div>
            </div>
            <p className="text-gray-600 text-md pt-4">
              {instructor?.instructorInfo?.bio}
            </p>
            <button className="border border-blue-600 w-full text-center rounded-2xl mt-4 py-3 font-bold text-md text-blue-800">
              View Profile
            </button>
          </div>
          <div className="enroll-card bg-blue-900 text-white w-full rounded-xl shadow-md shadow-blue-200 p-5 mt-10 space-y-5">
            <h1 className="font-bold text-center">Ready to start?</h1>
            <button className="bg-blue-700 w-full p-3 rounded-2xl"
            onClick={()=>{
              if(!user){
                navigate("/login")
              }else{
                navigate("enroll",{state:state})
              }
            }}
            
            >
              Enroll Now
            </button>
            <button className="w-full p-3 rounded-2xl border border-blue-200">
              Schedule a demo
            </button>
          </div>
        </div>
      </div>
      <h1 className="text-center text-2xl font-bold text-gray-600 mt-13">Students who made it.</h1>
      <p className="text-gray-500 text-md  text-center mt-3">See how our alumni transformed their careers after completing the Full Stack program.</p>
      <div className="testimonials flex flex-wrap justify-around mt-5 p-5">
        <div className="card bg-white shadow-md shadow-blue-300 w-80 space-y-2 rounded-2xl p-5 px-4">
          <FaStar className="text-yellow-500 font-bold text-xl" />
          <h1 className="text-md text-gray-500">
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
            magni?"
          </h1>
          <div className="userDetails flex gap-4">
            <img className=" w-13 h-13 rounded-full" src="https://imgs.search.brave.com/e-avJdMmaSIRPZq0J9hR37k0nrv6R-bepRkaYvPGjcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMS53/cC5jb20vd3d3LnNo/dXR0ZXJzdG9jay5j/b20vYmxvZy93cC1j/b250ZW50L3VwbG9h/ZHMvc2l0ZXMvNS8y/MDI0LzA2L3Byb2Zp/bGVfcGhvdG9fc2Ft/cGxlXzEzLmpwZz9z/c2w9MQ" alt="" />

            <div className="name">
              <h1 className="font-bold text-md">Name</h1>
              <p className="text-sm text-blue-700 font-semibold">Tage</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseDetail;

{
  /*  */
}
