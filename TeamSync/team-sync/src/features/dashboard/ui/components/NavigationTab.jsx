import React from 'react'
import { NavLink } from 'react-router-dom'

const NavigationTab = ({path , title , Icon}) => {
  return (
    <NavLink className={({isActive})=>`flex gap-3 pl-2 py-2 ${
    isActive
     ? ' border-r-4 border-[var(--bg-primary)] bg-[var(--secondary)]'
      : ''
      }`
      } 
        to={path}
        end= "/"
        >
        <Icon size={23} />
        {title}
    </NavLink>
  )
}

export default NavigationTab