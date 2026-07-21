import React from 'react'
import { NavLink } from 'react-router-dom'

const AsideNav = () => {
  return (
    <>
        <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-semibold text-[#CAB8F9]'>team-sync</h1>
            <p className='text-sm  text-var[(--textPrimary)]'>Enterprise workspace</p>
        </div>
        <div>
            <NavLink to={'/home/department'}>department</NavLink>
            <NavLink to={'/home/myTask'}>myTask</NavLink>
        </div>
    </>
  )
}

export default AsideNav