import React, { useContext } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'
import { IoLogOut } from "react-icons/io5";

function StudentLayout() {
  const {user} = useContext(AuthContext);
  return (
    <div className="flex">
      
      {/* Sidebar */}
      <aside className='w-[15%] bg-blue-200  fixed h-screen pt-8'>
        <h1 className='text-xl text-blue-800 font-bold  p-5'>Sipalaya Info Tech</h1>
        <div className='flex flex-col gap-3 mt-6  p-5'>
          <NavLink className="text-md hover:bg-blue-900 hover:text-white p-3 rounded-lg" to="dashboard">Dashboard</NavLink>
          <NavLink className="text-md hover:bg-blue-900 hover:text-white p-3 rounded-lg" to="courses">Courses</NavLink>
          <NavLink className="text-md hover:bg-blue-900 hover:text-white p-3 rounded-lg" to="enrolledCourses">Enrolled Courses</NavLink>
          <NavLink className="text-md hover:bg-blue-900 hover:text-white p-3 rounded-lg" to="certificates">Certificates</NavLink>
          <NavLink className="text-md hover:bg-blue-900 hover:text-white p-3 rounded-lg" to="submissions">Submissions</NavLink>
        </div>
        <div className='  w-57.5 fixed bottom-0 p-3  flex items-center justify-between bg-blue-950 text-white '>
          <img className='object-cover h-10 w-10 rounded-full' src={`http://localhost:9000/image/${user?.image}`} alt="" />
          <h1>{user?.fullName}</h1>
          <IoLogOut className='text-2xl'/>
        </div>
      </aside>

      {/* Main Content */}
      <main className='w-[85%] ml-[15%] h-screen overflow-y-auto'>
        <Outlet/>
      </main>

    </div>
  )
}

export default StudentLayout