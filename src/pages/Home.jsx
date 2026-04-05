import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { FaArrowRight } from "react-icons/fa6";
import SearchBar from "../components/SearchBar";

function Home() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
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

  // pages for banner
  const itemPerPage = 3;
  const lastIndex = currentPage * itemPerPage;
  const firstIndex = lastIndex - itemPerPage;

  const currentCourses = courses.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(courses.length / itemPerPage);

  if (isLoading) {
    return <p>Loading......</p>;
  }
  return (
    <div className="bg-[#F4F2FF]">
      {/* Banner */}
      <div className="first-banner bg-[#F4F2FF] py-22 px-15 flex gap-x-20 items-center">
        <FaChevronLeft />
        <div className="side-text w-[50%] space-y-6">
          <button className="bg-[#E2DFFF] text-center text-[10px] px-5 py-0.5 rounded-3xl font-semibold text-[#3d3867]">
            FEATURED PROGRAMS
          </button>
          <div>
            <h1 className="font-bold text-[60px]  bg-linear-to-r from-blue-800 to-blue-600 bg-clip-text text-transparent">
              Master Web & Graphics
            </h1>
          </div>
          <div>
            <p className="text-gray-500">
              Dive deep into Web Development and Professional Graphic Design
              with industry experts. Transform your creativity into a
              high-paying tech career.
            </p>
          </div>
          <div className="buttons flex gap-x-5">
            <button className="bg-blue-700 text-white px-6 py-2 rounded-xl">
              Enroll Now
            </button>
            <button className="border-2 border-gray-500 px-6 py-2 rounded-xl">
              View Courses
            </button>
            <button className="text-blue-800 font-bold flex items-center gap-x-0.5">
              Schedule Demo <MdArrowOutward />
            </button>
          </div>
        </div>
        <div className="side-image px-20 ">
          <div className="image-wrapper w-100 h-120 overflow-hidden rounded-2xl shadow-md shadow-gray-400">
            <img
              className="w-full h-full object-cover"
              src="https://images.pexels.com/photos/414974/pexels-photo-414974.jpeg?cs=srgb&dl=pexels-pixabay-414974.jpg&fm=jpg"
              alt=""
            />
          </div>
        </div>
        <FaChevronRight />
      </div>

      {/* Search Bar */}
      <SearchBar />

      {/* Details Institute */}
      <div className="flex flex-col bg-white p-10">
        <div className="firstbanner flex gap-x-5 ">
          <div className="bg-[#F4F2FF] flex p-10 rounded-2xl shadow-sm shadow-gray-400">
            <div className="space-y-3">
              <h1 className="text-[30px] font-bold">
                Our Impact on Technical Education
              </h1>
              <p className="text-gray-500">
                We don't just teach code; we build careers. Our success metrics
                reflect our commitment to excellence in the Nepalese IT
                landscape.
              </p>
              <div className="flex justify-between">
                <div className="space-y-2">
                  <h1 className="font-bold text-4xl text-blue-700">5,000+</h1>
                  <p className="font-semibold text-md text-[#434654]">
                    STUDENTS PLACED
                  </p>
                </div>
                <div className="space-y-2">
                  <h1 className="font-bold text-4xl text-blue-700">90%</h1>
                  <p className="font-semibold text-md text-[#434654]">
                    HIRING RATE
                  </p>
                </div>
              </div>
            </div>
            <div className="w-[50%]"></div>
          </div>
          <div className="bg-blue-800 text-white rounded-2xl p-10 space-y-3">
            <RiVerifiedBadgeFill className="text-2xl" />
            <h1 className="text-[30px] font-bold">Certification Preparation</h1>
            <p className="text-gray-300">
              Our curriculum is mapped to global vendor certifications from
              Microsoft, AWS, and Adobe.
            </p>
            <button className="flex items-center gap-1">
              Learn More <MdArrowOutward />
            </button>
          </div>
        </div>
        <div className="secondbanner flex justify-center-safe gap-x-5 m-7">
          <div className="bg-[#E7E6FF] p-8 rounded-2xl">
            <h1 className="text-2xl font-bold text-blue-700">
              Real-World Projects
            </h1>
            <p className="text-sm text-gray-500">
              Work on live projects from our agency partners during your
              training period.
            </p>
          </div>
          <div className="bg-[#C5C4FF] p-8 rounded-2xl text-center">
            <h1 className="text-3xl font-bold text-[#4F4F82]">30+</h1>
            <p className="text-sm text-gray-500">Partner Tech Hubs</p>
          </div>
          <div className="bg-[#E7E6FF] p-8 rounded-2xl">
            <h1 className="text-2xl font-bold text-blue-700">
              Career Counseling
            </h1>
            <p className="text-sm text-gray-500">
              Lifetime access to our placement cell and resume workshops.
            </p>
          </div>
        </div>
      </div>

      {/* Courses */}
      <div className="courses space-y-3 p-10">
        <div className="  flex justify-between">
          <div className="">
            <h1 className="text-3xl font-bold">Popular Courses</h1>
            <p className=" text-gray-500 text-sm">
              Choose from a variety of paths specifically designed for the
              modern digital economy.
            </p>
          </div>
          <div className="flex gap-x-4 justify-end items-end">
            <button
              className="border border-gray-500 bg-transparent text-sm h-10 px-3 rounded-full"
              onClick={() => {
                setCurrentPage(currentPage - 1);
                if(currentPage <= 1){
                  setCurrentPage(totalPages)
                }
              }}
            >
              <FaChevronLeft />
            </button>
            <button
              className="border border-gray-500 bg-transparent text-sm h-10 px-3 rounded-full"
              onClick={() => {
                setCurrentPage(currentPage + 1);
                if (currentPage >= totalPages) {
                  setCurrentPage(1);
                }
              }}
            >
              <FaChevronRight />
            </button>
          </div>
        </div>

        {!isError && !isLoading && courses.length > 0 ? (
          <div className="flex  gap-6 p-10 justify-center ">
            {currentCourses.map((item) => {
              return (
                <div className="card bg-white rounded-2xl w-90" key={item._id}>
                  <div className="">
                    <img
                      src={`http://localhost:9000/image/${item.courseImage}`}
                      className="w-full object-cover h-50 rounded-t-2xl"
                      alt=""
                    />
                  </div>
                  <div className="p-8 space-y-3">
                    <h1 className="font-bold text-lg">{item.title}</h1>
                    <p className="text-sm">
                      {item.description.length > 65
                        ? item.description.slice(0, 65) + "...."
                        : item.description}
                    </p>
                  </div>
                  <div className="px-8 pb-5 flex justify-between">
                    <h1 className="font-bold text-md text-blue-800">
                      Rs. {item.fee}
                    </h1>
                    <button
                      className="flex gap-1 items-center text-sm font-bold"
                      onClick={() => {
                        navigate("/enroll", {state:item});
                      }}
                    >
                      Enroll Now <FaArrowRight />
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
      

      {/* lastPart */}
      <div className="p-15 ">
        <div className="bg-blue-800 text-white px-25 py-15 text-center space-y-3 rounded-3xl">
          <h1 className="text-5xl font-bold">
            Ready To Start Your Tech Journey?
          </h1>
          <p>
            Join the thousands of students who have transformed their lives with
            Sipalaya's expert IT training.
          </p>
          <div className="flex gap-x-8 justify-center p-5">
            <button className="bg-white rounded-2xl px-7 text-blue-900 py-4">
              Enroll Today
            </button>
            <button className="bg-transparent border-2 border-white px-10 py-4 rounded-2xl">
              Contact
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
