import React from 'react'
import { useState ,createContext } from 'react'
import { useEffect } from 'react'


export const recipeContext = createContext(null)

const RecipeContext = (props) => {
    const [data, setData] = useState([])
    // console.log(data)
    useEffect(()=>{
        setData(JSON.parse(localStorage.getItem('recipes')) || []);
    },[])
  return (
   <recipeContext.Provider value={{data, setData}}>
    {props.children}
   </recipeContext.Provider>
  )
}

export default RecipeContext