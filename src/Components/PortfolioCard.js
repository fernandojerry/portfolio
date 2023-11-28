import React from 'react'
import { Button, Col } from 'react-bootstrap'
import './Portfolio.css'

const PortfolioCard = ({item}) => {
  return (
    <>
        <Col sm={12} md={6} lg={4} xl >
        <div className='img__container w-100 pt-2 pb-2' >
          <img className='w-100 portfolio__img' src={item.imgUrl} alt="" />    
        </div>
        <div>
          <h4 className='fs-3 fw-5'>{item.projectName}</h4>
        <p className='pt-3 fs-5'>{item.description}</p>
        <p className='pt-3 fs-5'><strong>Tech used: {item.techUsed}</strong></p>
        <Button className='p-2'><a className='text-light fs-5 fw-4 text-decoration-none' target='blank' href={item.link}>Live Demo</a></Button>
        <div>

        </div>
        </div>
        </Col>

    </>
  )
}

export default PortfolioCard
