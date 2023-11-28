import React from 'react'
import ContactCard from '../Components/ContactCard'
import { Col, Container, Row } from 'react-bootstrap'
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import SocialCard from '../Components/SocialCard';

function Contact() {
  return (
    <section id="contact" className='container-fluid  pt-5 ps-2 pe-2 ps-md-5 pe-md-5 pb-5'>
      <Container className='ps-lg-5 pe-lg-5 pb-md-5 '>
        <Row className='ps-lg-5 pe-lg-5  pb-md-4'>
          <Col sm={12} className='pb-4' >
            <h6 className='text-primary text-uppercase fw-bold text-center'>CONTACT ME</h6>
          </Col>
         <ContactCard  contact='+2347039456008' icon={<PhoneIphoneIcon />}/>
         <ContactCard  contact='jerrynwadinobi@gmail.com' icon={<EmailIcon />}/>
         <Col sm={12} className='d-flex align-items-center justify-content-center pt-5 p-3 pb-5'>
          <SocialCard link='https://www.linkedin.com/in/jerry-nwadinobi/' icon={<LinkedInIcon/>} />
          <SocialCard link='https://github.com/fernandojerry' icon={<GitHubIcon/>} />
          <SocialCard link='https://www.facebook.com/fernando.jerry1' icon={<FacebookIcon/>} />

         </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact
