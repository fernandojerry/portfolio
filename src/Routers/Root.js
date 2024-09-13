import React from 'react'
import About from '../Pages/About'
import Portfolio from '../Pages/Portfolio'
import Stacks from '../Pages/Stacks'
import Home from '../Pages/Home'
import Contact from '../Pages/Contact'

const Root = () => {
  return (
    <div className='overflow-hidden'>
      <Home />
      <About />
      <Stacks />    
      <Portfolio />
      <Contact />
    </div>
  )
}

export default Root

