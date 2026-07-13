import React, { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState('')
  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log('hello');
    
  },[])
  return (
    <div className='bg-blue-500 h-screen text-white gap-8 flex justify-center items-center'>
    <input className='border' type="text" placeholder='enter the name' value={data} onChange={(e)=>{
      setData(e.target.value)
    }} />
      <h1>{counter}</h1>
      <button className='border px-3 py-1 rounded' onClick={()=>{
        setCounter(counter+1)
      }}>click</button>
    </div>
  )
}

export default App