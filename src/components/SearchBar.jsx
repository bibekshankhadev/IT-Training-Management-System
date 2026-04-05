import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

function SearchBar({onSearch}) {
  const [search, setSearch]= useState("")
  const [category, setCategory] = useState("")
  const [skillLevel, setSkillLevel] = useState("")
  const handleSearch = (e)=>{
    e.preventDefault()
    onSearch({search,category,skillLevel})
    
  }
  return (
    <div >
      <form className="flex bg-white p-3 shadow-sm shadow-gray-400 rounded-2xl mx-10 justify-around mb-4 py-4 mt-5 gap-x-3" onSubmit={handleSearch}>
        <div className="bg-[#F4F2FF] w-[65%] rounded-2xl text-gray-600 flex items-center p-3 gap-x-3">
        <IoSearch className="text-2xl" />
        <input
          type="text"
          placeholder="Search Courses...."
          className="w-full h-full border-0 bg-transparent outline-none text-sm"
          onChange={(e)=>{setSearch(e.target.value)}}
        />
      </div>
      {/* Category */}
      <select className="flex items-center bg-[#F4F2FF] text-gray-600 px-5 rounded-2xl" onChange={(e)=>{setCategory(e.target.value)}}>
        <option value="">---Choose Category---</option>
        <option value="web">Web Development</option>
        <option value="programming">Programming</option>
        <option value="data">Data Science & Analytics</option>
        <option value="graphic">Graphic Design</option>
      </select>

      {/* Skill Level */}
      <select className="flex items-center bg-[#F4F2FF] text-gray-600 px-5 rounded-2xl" onChange={(e)=>{setSkillLevel(e.target.value)}}>
        <option value="">---Choose Skill Level--</option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>
      <button className="bg-blue-800 text-white rounded-2xl px-6">
        Search
      </button>
      </form>
    </div>
  );
}

export default SearchBar;
