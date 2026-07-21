import React, { useEffect } from 'react'
import AppRoute from './app/router/AppRoute'
import { useDispatch } from 'react-redux'
import { currentLoggedEmployee } from './features/auth/state/auth/authAction'
import { RouterProvider } from 'react-router-dom'
import router from './app/router/AppRoute'

const App = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    (()=>{
      dispatch(currentLoggedEmployee())
    })()
  },[])
  return <RouterProvider router={router} />
}

export default App