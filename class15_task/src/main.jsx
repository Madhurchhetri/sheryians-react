// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import ProductContext from './context/ProductContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ProductContext>
      <App />
    </ProductContext>
     
  </BrowserRouter>
   
  
)
