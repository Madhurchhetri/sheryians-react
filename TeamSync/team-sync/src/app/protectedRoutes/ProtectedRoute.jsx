import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
    let {employee , isLoading} = useSelector((store)=> store.auth);

    if(isLoading) return <h1>loading....</h1>
    
    if(!employee){
        return <Navigate to="/"/>
    }
  return <Outlet/>
}

export default ProtectedRoute