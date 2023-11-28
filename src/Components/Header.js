import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLogo from "../Assets/Images/HeaderLogo.png"
import { Link } from 'react-scroll';

import './Header.css'




function Header() {

  const [click, setClick] = useState(false)
  const handleClicked = () => setClick(false)

  return (
    <Navbar bg='dark'  variant='dark' expand="lg" sticky="top" className='navber'>
      <Container className='pt-3 pb-3'>
        <Navbar.Brand className="me-auto" ><img className='logo' src={HeaderLogo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={click? 'ms-auto nav-menu active' : 'ms-auto nav-menu'} >
            <li className='nav-item pb-sm-3  ps-md-4 ps-1'><Link className='link' to="home" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClicked}>Home</Link></li>
            <li className='nav-item pb-sm-3 ps-md-4 ps-1'><Link className='link' to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClicked}>About</Link></li>
            <li className='nav-item pb-sm-3 ps-md-4 ps-1'><Link className='link' to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClicked}>Portfolio</Link></li>
            <li className='nav-item pb-sm-3 ps-md-4 ps-1'><Link className='link' to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleClicked}>Contact</Link></li>
            
          </Nav>
         
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Header;