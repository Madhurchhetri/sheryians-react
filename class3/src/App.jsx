import React from 'react'
import Card from './components/Card'
import Card2 from './components/Card2'
import Button from './components/Button'

const App = () => {
    const users = ["madhur","shubham","hemant","yash","sujal","hemant"]
  return (
    <div className='bg-black text-white gap-2 h-screen flex items-center justify-center'>
      <Card/>
      {users.map((elem)=>{
        return <Card2 name ={elem}/>
      })}
      <Button title ='buy now'/>
      <Button title ='explore our courses'/>
    </div>
  )
}

export default App