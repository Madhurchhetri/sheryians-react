import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const PostDataContext =  createContext()
const PostContext = ({children}) => {
    const postData = ('hello from context')
    const [theme,setTheme] = useState('light')
  return (
    <div>
        <PostDataContext.Provider value={[postData,theme,setTheme]}>
            {children}
        </PostDataContext.Provider>
    </div>
  )
}

export default PostContext