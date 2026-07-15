import React from 'react'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Categories from '../components/Categories'
import FeaturedRecipes from '../components/FeaturedRecipes'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Hero/>
      <Stats/>
      <Categories/>
      <FeaturedRecipes/>
      <Testimonials/>
      <CTA/>
      <Footer/>
    </>
  )
}

export default Home