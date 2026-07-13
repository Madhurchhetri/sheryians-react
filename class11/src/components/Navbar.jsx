import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex gap-9 w-full bg-pink-500 p-3 '>
        <h2>Navbar</h2>
        <div className='flex gap-8'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/about'>About</Link>
        </div>
    </div>
  )
}

export default Navbar