import React from 'react'
import Stack from '../Components/Stack'
import html from '../Assets/Images/icons8-html-50.png'
import react from '../Assets/Images/icons8-react-50.png'
import css from '../Assets/Images/icons8-css-50.png'
import bootstrap from '../Assets/Images/icons8-bootstrap-50.png'
import js from '../Assets/Images/icons8-js-50.png'
import firebase from '../Assets/Images/icons8-firebase-50.png'
import {Container, Row, Col} from 'react-bootstrap'
import './Pages.css'

const Stacks = () => {
  return (
    <section id='stack' className=' bg-dark text-center container-fluid pb-5 pt-5 ps-md-5 pe-md-5'>
        <Container>
            <Row>
              <Col sm={12}>
              <div className='pe-md-5 ps-4 slide d-flex flex-nowrap xs align-items-center justify-content-center'> 
              
                <span className='ps-5 ps-md-1 '><Stack image={html} name='html' /></span>
                <span className='pe-2 ps-2  ps-md-5'><Stack image={css} name='css'/></span>
                <span className='pe-2 ps-2  ps-md-5'><Stack image={js} name='javascript'/></span>
                <span className='pe-2 ps-2  ps-md-5'><Stack image={react} name='react'/></span>
                <span className='pe-2 ps-2  ps-md-5'><Stack image={bootstrap} name='bootstrap'/></span>
                <span className='pe-2 ps-2  ps-md-5'><Stack image={firebase} name='firebase'/></span>
            </div>
              </Col>
            </Row>
        </Container>

    </section>
  )
}

export default Stacks
