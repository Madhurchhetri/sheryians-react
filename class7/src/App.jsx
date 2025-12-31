import React from 'react'
import { useState } from 'react'
import Card from './components/Card'

const App = () => {
  const [userName, setUserName] = useState('')
  const [userRole, setUserRole] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const[description,setDescription] = useState('')
  const [allUser,setAllUser] = useState([])

  const handleSubmit = (e)=>{
     e.preventDefault()
      
      
    const oldUser = [...allUser]
    oldUser.push({userName,userRole,imageUrl,description})
    setAllUser(oldUser)

    setUserName('')
    setDescription('')
    setImageUrl('')
    setUserRole('')

    console.log(oldUser);
    
   
  }
  const deleteHandler=(idx)=>{
    const copyUser = [...allUser]
    copyUser.splice(idx,1)
    setAllUser(copyUser)
  }
  return (
    <div className='h-screen bg-black text-white'>

    <form className='p-2 flex flex-wrap justify-center' onSubmit={(e)=>{
      handleSubmit(e)
    }}>
      <input className='border-2 px-5 py-2 rounded m-2 w-[45%]'  type="text" placeholder='enter your name'
      value={userName}
      onChange={(e)=>{
        setUserName(e.target.value)
      }}
       />
      <input className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='enter image url' 
        value={imageUrl}
      onChange={(e)=>{
      setImageUrl(e.target.value)
      }}
      />
      <input className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='enter roll'
      value={userRole}
      onChange={(e)=>{
      setUserRole(e.target.value)
      }}
      />
      <input className='border-2 px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='enter description'
       value={description}
      onChange={(e)=>{
      setDescription(e.target.value)
      }}
      />
       

      <button className=' px-5 py-2 active:scale-95 cursor-pointer text-2xl bg-emerald-500'>create user</button>
    </form>
      {allUser.map((elem,idx)=>{
        return <Card idx={idx} elem={elem} deleteHandler={deleteHandler}/>
      })}
    </div>
  )
}

export default App