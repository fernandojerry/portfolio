import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import HeaderLogo from "../Assets/Images/brand.png";
import { Link } from 'react-scroll';

import './Header.css';

function Header() {
  const [expanded, setExpanded] = useState(false);

  // Handle click for links and button to close the menu
  const handleNavItemClicked = () => {
    setExpanded(false);
  };

  return (
    <Navbar 
      collapseOnSelect  
      variant='dark' 
      expand="lg" 
      sticky="top" 
      className='my-nav bg-gray-900 text-base py-2' // Adjusted padding
      expanded={expanded} // Set the expanded state
    >
      <Container className='px-2'> {/* Removed extra padding/margin */}
        <Navbar.Brand className="me-auto">
          <img className='logo' src={HeaderLogo} alt="Brand Logo" />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : true)} // Toggle the expanded state
          aria-controls="responsive-navbar-nav"
          className='d-flex d-lg-none flex-column justify-content-around'
        >
          <span className='toggler-icon top-bar'></span>
          <span className='toggler-icon mid-bar'></span>
          <span className='toggler-icon bottom-bar'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav 
            className='nav-menu d-flex ms-auto font-semibold justify-content-around align-items-md-center gap-2 lg:gap-4'
          >
            <li className='nav-item ps-md-4 ps-1'>
              <Link 
                className='link' 
                to="home" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500} 
                onClick={handleNavItemClicked} // Close on click
              >
                Home
              </Link>
            </li>
            <li className='nav-item ps-md-4 ps-1'>
              <Link 
                className='link' 
                to="about" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500} 
                onClick={handleNavItemClicked} // Close on click
              >
                About
              </Link>
            </li>
            <li className='nav-item ps-md-4 ps-1'>
              <Link 
                className='link' 
                to="portfolio" 
                spy={true} 
                smooth={true} 
                offset={-100} 
                duration={500} 
                onClick={handleNavItemClicked} // Close on click
              >
                Portfolio
              </Link>
            </li>
            <button 
              className="ms-2 text-base text-white bg-blue-700 border-2 border-blue-700 font-semibold py-2 px-4 rounded-xl hover:bg-gray-200 transition-transform transform hover:scale-105 duration-300"
              onClick={handleNavItemClicked} // Close on click
            >
              Hire Me
            </button>
            <div className="pb-3 md:pb-0"></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
