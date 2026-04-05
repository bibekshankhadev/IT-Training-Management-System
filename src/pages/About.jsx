import React, { useEffect, useState } from "react";
import { GoRocket } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { CiCloudOn } from "react-icons/ci";
import { SiCisco } from "react-icons/si";

function About() {
  const [instructor, setInstructor] = useState("");

  const getInstructor = async () => {
    try {
      let res = await fetch("http://localhost:9000/api/user/instructor", {
        method: "GET",
        credentials: "include",
      });
      if (res.ok) {
        res = await res.json();
        setInstructor(res.instructor);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getInstructor();
  }, []);
  return (
    <div className="p-15 bg-gray-200">
      <div className="top-card w-full bg-linear-90 from-blue-900 to-blue-600 py-30 px-20 pr-100 text-white space-y-4 rounded-3xl">
        <button className="bg-blue-800 text-[#a7baf7] text-[10px] px-5 py-1 rounded-2xl font-semibold border border-[#a3b5ed]">
          About Our Journey
        </button>
        <h1 className="text-6xl font-bold tracking-wide leading-20">
          Empowering the Next Generation of IT Leaders
        </h1>
        <p>
          A decade of excellence in professional IT training, consultancy, and
          technical certifications tailored for the modern digital era.
        </p>
      </div>
      <div className="mission-section bg-white mt-10 flex p-10 gap-10 rounded-2xl">
        <div className="mission bg-gray-200 p-10 space-y-4 rounded-2xl">
          <button className="bg-blue-200 text-blue-700 p-3 rounded-xl text-2xl">
            <GoRocket />
          </button>
          <div className="space-y-3">
            <h1 className="text-lg font-bold">Our Mission</h1>
            <p className="text-sm text-gray-600 leading-6">
              To bridge the gap between academia and industry by providing
              world-class IT training and professional certifications that meet
              global standards.
            </p>
          </div>
        </div>
        <div className="mission bg-gray-200 p-10 space-y-4 rounded-2xl">
          <button className="bg-blue-200 text-blue-700 p-3 rounded-xl text-2xl">
            <FaRegEye />
          </button>
          <div className="space-y-3">
            <h1 className="text-lg font-bold">Our Vision</h1>
            <p className="text-sm text-gray-600 leading-6">
              To become a global hub for technological excellence where
              innovation meets practical skill development for aspiring tech
              professionals.
            </p>
          </div>
        </div>
        <div className="mission bg-gray-200 p-10 space-y-4 rounded-2xl">
          <button className="bg-blue-200 text-blue-700 p-3 rounded-xl text-2xl">
            <RxCounterClockwiseClock />
          </button>
          <div className="space-y-3">
            <h1 className="text-lg font-bold">Our History</h1>
            <p className="text-sm text-gray-600 leading-6">
              Founded in 2014, Sipalaya Info Tech started with a small group of
              passionate engineers and has now empowered over 10,000+ students
              across various IT disciplines.
            </p>
          </div>
        </div>
      </div>
      <div className="expert-section mt-10">
        <h1 className="text-center text-4xl font-bold tracking-wide pb-4">
          Meet Our Expert Mentors
        </h1>
        <p className="text-center text-gray-600 pb-9">
          Learn from industry veterans with decades of experience in networking,
          cloud computing, and software development.
        </p>

        {instructor.length > 0 ? (
          <div className="cardCollection flex flex-wrap gap-6 p-10 justify-center">
            {instructor.map((item) => {
              const showItems =
                item?.instructorInfo?.certification?.length > 0
                  ? item.instructorInfo.certification
                  : item?.instructorInfo?.skill || [];
              return (
                <div
                  className="card bg-white rounded-2xl w-50 shadow shadow-gray-500"
                  key={item?._id}
                >
                  <div className="image">
                    <img
                      src={`http://localhost:9000/image/${item.image}`}
                      className="w-full object-cover h-40 rounded-t-2xl"
                      alt=""
                    />
                  </div>
                  <div className="name p-5">
                    <h1 className="font-bold">{item?.fullName}</h1>
                    <p className="font-semibold text-[10px] text-blue-700">
                      {item.instructorInfo.tag}
                    </p>
                  </div>
                  <div className="certifications flex flex-wrap p-2 gap-x-2 justify-around pb-5">
                    {showItems.map((value, index) => {
                      return (
                        <div
                          className="bg-blue-300 text-gray-700 rounded-xl border border-blue-800 p-1"
                          key={index}
                        >
                          <p className="text-center font-semibold text-[10px]">
                            {value}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>No Instructor Found.</h1>
          </div>
        )}
      </div>
      <div className="partnership pt-4">
        <h1 className="text-4xl font-bold text-center">
          Partnerships and Affiliations
        </h1>
        <div className="partershipsLists p-10 flex flex-wrap gap-x-10 justify-center">
          <div className="flex flex-col justify-center items-center">
            <CiCloudOn className="text-5xl font-bold text-gray-700" />
            <h1 className="text-md font-semibold text-gray-600">
              Microsoft Partner
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center">
            <SiCisco className="text-5xl font-bold text-gray-700" />
            <h1 className="text-md font-semibold text-gray-600">Cisco</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
