import React from 'react'
import {Link, NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex px-2 capitalize bg-amber-800 justify-between items-center text-white font-bold'>
        <h1>navbar</h1>
        <div className='flex gap-8 p-4'>
          <NavLink to='/'
          style={({isActive})=>({
            color:isActive?'red':''
          })}
          >Home</NavLink>
           <NavLink to='about'
            style={({isActive})=>({
            color:isActive?'red':''
          })}
           > About </NavLink>
           <NavLink to='courses'
            style={({isActive})=>({
            color:isActive?'red':''
          })}
          > Courses </NavLink>
           
        </div>
    </div>
  )
}

export default Navbar