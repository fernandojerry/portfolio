import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({data}) => {
  return (
    <>
      

      {
        
        data.map((item, index) => (
            <PortfolioCard item={item} key={index} />
        ))
      }
      
    </>
    
  )
}

export default PortfolioList
