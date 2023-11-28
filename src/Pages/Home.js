import React from 'react'
import {Container, Row, Col,} from 'react-bootstrap'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import HeroBg from '../Assets/Images/hero.png'
import './Pages.css'

function Home() {
  return (
    <section id='home'  className='container-fluid bg-dark pb-lg-5 pt-lg-5 pt-5 ps-2 pe-2 ps-md-5 pe-md-5 pb-5' >
      <Container className='ps-lg-5 pe-lg-5 pt-5 pt-xl-5 pb-xl-5'>
        <Row className='ps-lg-5 pe-lg-5 pt-xl-5 pb-xl-5'>
          <Col xs={12} md={6} className='text-light d-flex  flex-column pt-md-5 pb-5 '>
            <h1 className='text-primary pb-2 hero-header fw-bolder'><strong>Front-End React <br />Developer.</strong></h1>
            <p className='pb-3 fs-4'>Hi, I'm Jerry Nwadinobi. I build scalable Frontend products with great user experiences.</p>
            
            <div>
              <a className='pe-2 text-light' target='blank' href="https://www.linkedin.com/in/jerry-nwadinobi/"><LinkedInIcon /></a>
              <a className='pe-2 text-light' target='blank' href="https://github.com/fernandojerry"><GitHubIcon /></a>
            </div>
            
          </Col>
          <Col xs={12} md={6} className='text-light d-flex align-items-center justify-content-center flex-column p-5'>
           <div className='hero-design p-3 pt-lg-5 pb-lg-5 w-100'>
            <img className='hero-image' w-100 src={HeroBg} alt="" />
            <span className='hero-design2 w-100'></span>
           <span className='hero-design3 w-100'></span>
           <span className='hero-design4 w-100'></span>
           </div>
           
          </Col>
         
        </Row>
      </Container>
    </section>
  )
}

export default Home
