import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './components/Products'
import Home from './components/Home'
import ProductDetail from './components/ProductDetail'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:prodId' element={<ProductDetail/>}/>
        </Routes>
    </div>
  )
}

export default App