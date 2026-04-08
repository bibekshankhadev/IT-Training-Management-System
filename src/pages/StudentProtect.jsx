import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Navigate } from 'react-router-dom';

function StudentProtect({children}) {

    const {user, loading} = useContext(AuthContext);

    
  if(loading) {
    return (
      <div className="p-50">
        <p className="text-center text-2xl font-bold text-blue-700">Loading......</p>
      </div>
    )
  }
  if(!user || user.role !== "student"){
    return <Navigate to="/login" replace/>
  }
  return children
}

export default StudentProtect
