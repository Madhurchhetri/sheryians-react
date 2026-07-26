import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { adminNavigation, employeeNavigation } from '../../../../app/constants/navigations'
import NavigationTab from './NavigationTab'

const AsideNav = () => {
  let {employee} = useSelector((store)=>store.auth)

  let navigations = employee?.role === "admin" ? adminNavigation : employeeNavigation
  return (
    <>
        <div className='flex flex-col gap-1'>
            <h1 className='text-2xl font-semibold text-[#CAB8F9]'>team-sync</h1>
            <p className='text-sm  text-var[(--textPrimary)]'>Enterprise workspace</p>
        </div>
        <div className='flex flex-col gap-3'>
            {
              navigations.map((route)=>{
                return (
                  <NavigationTab
                    key={route.title}
                    path={route.path}
                    Icon={route.icon}
                    title={route.title}
                  />
                ) 
              })
            }
        </div>
    </>
  )
}

export default AsideNav