import React from 'react'
import { Button } from 'react-bootstrap'
import './Portfolio.css'

const PortfolioCard = ({ item }) => {
  return (
<div className='bg-white rounded-lg shadow-md my-4 h-full flex flex-col'>
  <div className='img__container mb-4'>
    <img className='w-full h-48 object-cover rounded-lg' src={item.imgUrl} alt={item.projectName} />
  </div>
  <h4 className='text-xl font-semibold mb-2'>{item.projectName}</h4>

  <div className='h-12 my-2'>
    <p className='text-gray-800 font-bold '>{item.techUsed}</p>
  </div>

  <Button className='mt-auto p-2 bg-blue-600 hover:bg-blue-700 justify-self-end'>
    <a className='text-white text-lg font-medium text-decoration-none' target='_blank' rel='noopener noreferrer' href={item.link}>
      Live Demo
    </a>
  </Button>
</div>

  )
}

export default PortfolioCard
