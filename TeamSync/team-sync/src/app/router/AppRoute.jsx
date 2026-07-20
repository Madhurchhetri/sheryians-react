import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../../features/auth/ui/pages/Login'
import Register from '../../features/auth/ui/pages/Register'
import DashBoardLayout from '../layouts/DashBoardLayout'
import Home from '../../features/dashboard/ui/pages/Home'
import AuthLayout from '../layouts/AuthLayout'
import PublicRoute from '../protectedRoutes/PublicRoute'
import ProtectedRoute from '../protectedRoutes/ProtectedRoute'

const AppRoute = () => {
  return (
    <Routes> 
    <Route element = {<PublicRoute/>}>
        <Route path='/' element={<AuthLayout/>}>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Route>
    </Route>
    
    <Route element={<ProtectedRoute/>}>
        <Route path='/home' element={<DashBoardLayout/>}>
            <Route path='' element={<Home/>}/>
        </Route>
    </Route>
    </Routes>
  )
}

export default AppRoute