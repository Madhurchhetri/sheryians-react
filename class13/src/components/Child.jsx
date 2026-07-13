import React from 'react'
import { useState } from 'react'

const Child = (props) => {
    const [newTheme, setNewTheme] = useState('')
  return (
    <div>
        <form onSubmit={(e)=>{
            e.preventDefault()
            props.changeTheme(newTheme)
            setNewTheme('')
        }}>
            <input type="text" placeholder='enter the theme' value={newTheme} onChange={(e)=>{
                setNewTheme(e.target.value)

            }} />
            <button>submit</button>
        </form>
    </div>
  )
}

export default Child