import React, { useContext, useEffect, useState } from "react";
import {
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
  FaRegClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { AuthContext } from "../context/AuthProvider";

function Courses() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const [courses, setCourses] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [priceChange, setPriceChange] = useState(0);
  const getCourse = async () => {
    try {
      setIsLoading(true);
      let res = await fetch("http://localhost:9000/api/course/get-all-course", {
        method: "GET",
        credentials: "include",
      });
      setIsLoading(false);
      if (res.ok) {
        res = await res.json();
        console.log(res);
        setCourses(res.courses);
        setIsError(false);
      }
    } catch (error) {
      console.log(error);
      setIsError(true);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);

  if (isLoading) {
    return (
      <div className="p-50">
        <p className="text-center text-2xl font-bold text-blue-700">
          Loading......
        </p>
      </div>
    );
  }
  return (
    <div className="p-20 px-10 bg-[#efeffc]">
      <h1 className="text-5xl font-bold text-black">
        Master Your <span className="text-blue-800">Future</span>
      </h1>
      <p className="text-gray-800 pt-3">
        Elevate your career with industry-recognized certifications. Explore our
        curated selection of high-impact professional training programs.
      </p>

      {/* search bar */}

      <SearchBar />
      <div className="flex gap-x-5 justify-between  w-full pt-4">
        <div className=" border-r border-gray-400 p-5 w-[20%]">
          <div className="categories space-y-3">
            <h1 className="text-md text-gray-700 font-bold">CATEGORIES</h1>
            <div className="flex gap-x-3 items-center ">
              <input type="checkbox" className="h-4 w-4" id="programming" />
              <label
                htmlFor="programming"
                className="text-md font-semibold text-gray-700"
              >
                Programming
              </label>
            </div>
            <div className="flex gap-x-3 items-center ">
              <input type="checkbox" className="h-4 w-4" id="web-development" />
              <label
                htmlFor="web-development"
                className="text-md font-semibold text-gray-700"
              >
                Web Development
              </label>
            </div>
            <div className="flex gap-x-3 items-center ">
              <input type="checkbox" className="h-4 w-4" id="data-science" />
              <label
                htmlFor="data-science"
                className="text-md font-semibold text-gray-700"
              >
                Data Science & Analytics
              </label>
            </div>
            <div className="flex gap-x-3 items-center ">
              <input type="checkbox" className="h-4 w-4" id="graphics-design" />
              <label
                htmlFor="graphics-design"
                className="text-md font-semibold text-gray-700"
              >
                Graphics Designs
              </label>
            </div>
          </div>
          <hr className="mt-5 border-gray-400 border" />
          <div className="skill-level space-y-1 pt-4">
            <h1 className="text-md text-gray-700 font-bold">SKILL LEVEL</h1>
            <div className="beginner flex items-center py-2 px-3 rounded-xl justify-between hover:bg-[#E1E0FB] text-gray-700 font-semibold text-md">
              <h1>Beginner</h1>
              <p className="text-[12px]">12</p>
            </div>
            <div className="intermediate flex items-center py-2 px-3 rounded-xl justify-between hover:bg-[#E1E0FB] text-gray-700 font-semibold text-md">
              <h1>Intermediate</h1>
              <p className="text-[12px]">8</p>
            </div>
            <div className="advanced flex items-center py-2 px-3 rounded-xl justify-between hover:bg-[#E1E0FB] text-gray-700 font-semibold text-md">
              <h1>Advanced</h1>
              <p className="text-[12px]">5</p>
            </div>
          </div>
          <div className="price-range space-y-1 pt-4">
            <h1 className="text-md text-gray-700 font-bold">PRICE RANGE</h1>
            <input
              type="range"
              className="w-full"
              min="0"
              max="1000"
              step="50"
              onChange={(e) => {
                setPriceChange(e.target.value);
              }}
              value={priceChange}
            />
            <div className="flex justify-between text-[12px] items-center font-semibold text-gray-700">
              <p>Rs.0</p>
              <p>Rs.{priceChange}</p>
              <p>Rs.1000</p>
            </div>
          </div>
        </div>
        <div className=" w-[80%]">
          <div className="courses space-y-3 p-3">
            {!isError && !isLoading && courses.length > 0 ? (
              <div className="flex flex-wrap gap-6 p-10 justify-center ">
                {courses.map((item) => {
                  return (
                    <div
                      className="card bg-white rounded-2xl w-60 shadow shadow-gray-500"
                      key={item._id}
                    >
                      <div className="">
                        <img
                          src={`http://localhost:9000/image/${item.courseImage}`}
                          className="w-full object-cover h-40 rounded-t-2xl"
                          alt=""
                        />
                      </div>
                      <div className="p-5 space-y-1 grow">
                        <div className="flex gap-x-1 items-center">
                          <FaRegClock className="text-[15px] text-blue-800" />{" "}
                          <h1 className="text-gray-700 font-semibold text-[14px]">
                            {item.duration}
                          </h1>
                        </div>
                        <h1 className="font-bold text-lg line-clamp-2">
                          {item.title}
                        </h1>
                        <p className="text-sm ">
                          {item.description.length > 65
                            ? item.description.slice(0, 65) + "...."
                            : item.description}
                        </p>
                      </div>
                      <div className="px-8 pb-5 flex justify-between items-center">
                        <h1 className="font-bold text-md text-blue-800">
                          Rs. {item.fee}
                        </h1>
                        <button
                          className="flex gap-1 items-center text-sm font-bold"
                          onClick={() => {
                            if (user) {
                              navigate("coursesDetail", { state: item });
                            } else {
                              navigate("/courses-detail", { state: item });
                            }
                          }}
                        >
                          View Details
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div>
                <h1>No Courses Availabel</h1>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
