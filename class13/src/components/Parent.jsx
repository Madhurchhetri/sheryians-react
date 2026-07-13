import React from 'react'
import { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [theme, setTheme] = useState('')
    const changeTheme =(u)=>{
        setTheme(u)
    }
  return (
    <div>
        <h1>{theme}</h1>
        <Child changeTheme={changeTheme} />
    </div>
  )
}

export default Parent