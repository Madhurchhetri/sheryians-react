import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Error from './pages/Error'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App