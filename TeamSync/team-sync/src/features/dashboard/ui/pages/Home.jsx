import React from 'react'
import {useDispatch} from 'react-redux'
import { toggleTheme } from '../../../../shared/state/ThemeSlice'

const Home = () => {
  let dispatch = useDispatch()
  let changeHandleTheme = ()=>{
    dispatch(toggleTheme())
  }
  return (
    <div>
        <h1>This is dashboard page</h1>
        <button onClick={changeHandleTheme} className='cursor-pointer'>change theme</button>
    </div>
  )
}

export default Home