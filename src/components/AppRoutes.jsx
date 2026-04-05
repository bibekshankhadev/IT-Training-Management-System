import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Courses from '../pages/Courses'
import CourseDetail from '../pages/CourseDetail'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Enroll from '../pages/enroll'

function AppRoutes() {
  return (
    <div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>} />
            <Route path='/courses' element={<Courses/>} />
            <Route path='/courses-detail' element={<CourseDetail/>} /> 
            <Route path='/aboutUs' element={<About/>} /> 
            <Route path='/contactUs' element={<Contact/>} /> 
            <Route path='/enroll' element={<Enroll/>} /> 
        </Routes>
      
    </div>
  )
}

export default AppRoutes
