import React from 'react'
import { Col } from 'react-bootstrap'


const ContactCard = ({icon, contact}) => {
  return (
    <>
      <Col sm={12} md className='d-flex flex-md-column align-items-center justify-content-center'>
        <span className='p-2'>{icon}</span>
        <span className='text-center'>{contact}</span>
      </Col>
    </>
  )
}

export default ContactCard
