import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-[50px] py-[20px] w-full justify-between gap-8 items-center bg-red-500 text-white '>
        <h2 className='font-bold'>Navbar Component</h2>
        <div className='flex gap-7'>
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
        </div>
    </div>
  )
}

export default Navbar