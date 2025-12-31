import React from 'react'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState('')
  const [email, setEmail] = useState('')
  const [allUser,setAllUser] = useState([])
  const handleSubmit =(e)=>{
    e.preventDefault()

    const newUser = [...allUser];
    newUser.push({data,email})
    console.log(newUser);
    
    setAllUser(newUser)
    
    // console.log(data);
    setData('')
    setEmail('')
    
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        handleSubmit(e)
      }}>
        <input type="text" placeholder='enter your name' value={data} required onChange={(e)=>{
          setData(e.target.value)
        }} />
        <input type="text" placeholder='enter your email' value={email} required onChange={(e)=>{
          setEmail(e.target.value)
        }} />
        <button>submit</button>
      </form>
      {allUser.map((elem,idx)=>{
        return <div key={idx}>
          <h3>{elem.data}</h3>
          <p>{elem.email}</p>
        </div>
      })}
    </div>
  )
}

export default App