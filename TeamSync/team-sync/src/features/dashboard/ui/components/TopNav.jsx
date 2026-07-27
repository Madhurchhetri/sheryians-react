import React from 'react'
import {Bell , Lightbulb, Menu , Moon, Search} from 'lucide-react'
import {useDispatch, useSelector} from 'react-redux'
import { toggleTheme } from '../../../../shared/state/ThemeSlice'

const TopNav = () => {
   let dispatch = useDispatch()
   let {mode} = useSelector((store => store.theme))

  let changeHandleTheme = ()=>{
    dispatch(toggleTheme())
  }
  return (
    <div className=' flex justify-between items-center'>
        <div className=' flex items-center gap-4 w-[30%] rounded px-3 py-2 bg-[var(--bg-surface)] border border-gray-700'>
            <Search size={23}/>
            <input className='outline-0 w-full' type="text" placeholder='search wordkspace...' />
        </div>
        <div className=' flex gap-4'>
            {
              mode === 'light' ? <Moon onClick={changeHandleTheme} className='cursor-pointer' size={23} /> : <Lightbulb onClick={changeHandleTheme} className='cursor-pointer' size={23}/>
            }
            <Bell size={23}/>
            <Menu size={23}/>
        </div>
    </div>
  )
}

export default TopNav