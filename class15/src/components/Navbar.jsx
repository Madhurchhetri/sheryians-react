import React from 'react'
import { useContext } from 'react'
import { PostDataContext } from '../contexts/PostContext'

const Navbar = () => {
   const [data,theme,setTheme] = useContext(PostDataContext)
  return (
    <div>
        <h1>this is navbar and data from post context{data}</h1>
        <p>Theme: {theme}</p>
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>change theme</button>
    </div>
  )
}

export default Navbar