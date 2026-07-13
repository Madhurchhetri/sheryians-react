import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {
   const data = useContext(UserDataContext)
  return (
    <div className='h-10 w-full bg-emrald-600'>
        <h1>this is navbar {data}</h1>
    </div>
  )
}

export default Navbar