import React from 'react'
import { createContext } from 'react'

export const UserDataContext = createContext()

const UserContext = ({children}) => {
    const user ='madhur'
  return (
    <div>
        <UserDataContext.Provider value={user}>
           {children}
        </UserDataContext.Provider>
    </div>
  )
}

export default UserContext