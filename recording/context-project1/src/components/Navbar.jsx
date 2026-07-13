import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-center items-center mb-10 gap-7'>
        <NavLink className={(e)=> e.isActive ? "text-red-500" :""} to = "/" >Home</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500" :""} to = "/about" >About</NavLink>
        <NavLink className={(e)=> e.isActive ? "text-red-500" :""} to = "/recipes" >Recipes</NavLink>
        <NavLink className={`px-2 py-4 rounded bg-gray-900 ${(e)=> e.isActive ? "text-red-500" :""}` }to = "/create-recipe" >Create Recipe</NavLink>
    </div>
  )
}

export default Navbar