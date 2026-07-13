import React from 'react'
import Navbar from './components/Navbar'
import AllSection from './components/AllSection'
import Footer from './components/Footer'
import Parent from './components/Parent'

const App = () => {
  const courseData ={
    courseData:'cohort',
    duration:"6months"
  }
  return (
    <div>
      <Navbar/>
      <AllSection courseData = {courseData}/>
      <Parent/>
      <Footer/>
    </div>
  )
}

export default App