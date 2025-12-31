import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [allData, setAllData] = useState([])
  let getData = async()=>{
    // console.log('agya data');
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
    setAllData(response.data)
    
  }
  return (
    <div className='h-screen bg-black flex justify-center items-center'>
      <button className='bg-yellow-500 px-3 py-2 rounded cursor-pointer active:scale-95' onClick={getData}>get data</button>
      {allData.map((elem,idx)=>{
        return <h1 className='text-white' key={idx}>{elem.name}</h1>
      })}
    </div>
  )
}

export default App