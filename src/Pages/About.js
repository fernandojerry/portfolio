import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import HeroBg from '../Assets/Images/hero.png'

function About() {
  return (
    <section id='about' className='container-fluid  pt-5 ps-2 pe-2 ps-md-5 pe-md-5 pb-5'>
      <Container className='ps-lg-5 pe-lg-5'>
        <Row className='ps-lg-5 pe-lg-5 pt-md-4 pb-md-4'>
          <Col xs={12} md={6} className=' d-flex  flex-column '>
            <h6 className='text-primary text-uppercase pb-2 fw-bold' >about me</h6>
            
            <p className='fs-5'>I am a dedicated frontend developer based in Enugu, Nigeria with years of experience and a track record of building scalable front-end projects with great user experience. passionate about learning and development with a desire to tackle complex problems by applying skills to find ways to maximize user efficiency. Adept at both independent and collaborative projects, with an emphasis on landing page and website development.</p>
          </Col>
          <Col xs={12} sm md={{ order: 'first' }} className='d-flex align-items-center justify-content-center'>
            <div className='p-4'>
              <img className='hero-image' w-100 src={HeroBg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
