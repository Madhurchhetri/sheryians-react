import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)
  const handleClick = ()=>{
    setCount(count + 1);
  }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase</button>
      <button onClick={()=>{
        setCount(count-1)
      }}>Decrease</button>
      <button onClick={()=>{
        setCount(count + 5)
      }}>jump 5</button>
    </div>
  )
}

export default App