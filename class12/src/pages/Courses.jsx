import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div className='text-center font-bold text-2xl h-screen flex justify-center items-center'>
        Courses
        <Outlet/>
    </div>
  )
}

export default Courses