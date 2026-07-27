import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const PublicRoute = () => {
    let {employee , isAuthChecked} = useSelector((store)=>store.auth)
    if(!isAuthChecked) return <h1>loading...</h1>

    if(employee){
        return <Navigate to="/home"/>
    }

  return <Outlet/>
}

export default PublicRoute