import React from 'react'
import Navbar from './components/navbar'
import Men from './components/Men'
import Women from './components/Women'

const App = () => {
  const user1 = {
    name : 'madhur',
    gender : 'male'
  }
  const user2 = {
    name : 'Niharika',
    gender : 'female'
  }
  return (
    <div>
      <Navbar title = 'bixi' links={['home','about','account','contact']} color='red'/>
      <Navbar title = 'danish' links={['home','services','account','contact' ]} color='green'/>
      <Navbar title = 'anubhav' links={['home','product','account','contact']}  color='crimson'/>
      
      {user1.gender === 'male'? <Men/>: <Women/>}
    </div>
  )
}

export default App