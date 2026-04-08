import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'

function StudentDashboard() {
  const {user} = useContext(AuthContext);
  return (
    <div className='p-10'>
      <h1 className='text-3xl font-bold'>Hello! {user.fullName}</h1>
    </div>
  )
}

export default StudentDashboard
