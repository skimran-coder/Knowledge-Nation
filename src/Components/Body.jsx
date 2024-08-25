import React from 'react'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Contact from './Sections/Contact'
import Courses from './Courses'

const Body = () => {
  return (
    <main>
      <Hero/>
      <About/>
      <Contact/>
      {/* <Courses/> */}
    </main>
  )
}

export default Body