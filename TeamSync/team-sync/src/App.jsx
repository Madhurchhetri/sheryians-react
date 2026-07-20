import React, { useEffect } from 'react'
import AppRoute from './app/router/AppRoute'
import { useDispatch } from 'react-redux'
import { currentLoggedEmployee } from './features/auth/state/auth/authAction'

const App = () => {
  let dispatch = useDispatch()
  useEffect(()=>{
    (()=>{
      dispatch(currentLoggedEmployee())
    })()
  },[])
  return (
    <div>
      <AppRoute/>
    </div>
  )
}

export default App