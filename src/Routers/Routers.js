import React from 'react'
import {Routes, Route} from 'react-router-dom'
import AddPortfolio from '../Pages/AddPortfolio'
import Root from '../Routers/Root'
import { useLocation } from 'react-router-dom'


const Routers = () => {
  const location = useLocation()
  return (
    <Routes>
      {  
         
        location.pathname.endsWith('/addportfolio') ? 
          <Route path='/addportfolio' element={<AddPortfolio />} />
        : 
          <Route path='/' element={<Root />} />
        
      }
      
    </Routes>
  )
}

export default Routers
