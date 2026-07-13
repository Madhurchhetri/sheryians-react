import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar'
import Error from './pages/Error'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'

const App = () => {
  return (
    <div>
    <Navbar/>
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='about'element={<About/>}/>
        <Route path='courses'element={<Courses/>}>
          <Route path='/courses/koder' element={<Kodr/>} />
          <Route path='/courses/Kodex' element={<Kodex/>} />
        </Route>
        <Route path='*' element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App