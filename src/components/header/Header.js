import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import gitHub from './../../assets/images/media/Github-icon.png'
import li from './../../assets/images/media/LI.png'
import envelope from './../../assets/images/media/logo-gmail.png'
import medium from './../../assets/images/media/medium_logo.png'
// https://robrichardsdpt.medium.com/
const Header = () => (
  <Nav className='nav'>
  <Navbar collapseOnSelect expand="xl" className='nav' variant="dark">
  <Navbar.Brand href='#' className='headerName'>
    <h1 className='headerName'>Rob Richards</h1>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className='navbar mr-auto'>
      <Nav.Link className='link' href="#about">About</Nav.Link>
      <Nav.Link className='link' href="#projects">Projects</Nav.Link>
      <Nav.Link className='link' href="#skills">Skills</Nav.Link>
      <Nav.Link className='link' href="https://drive.google.com/file/d/1veNweaHnuPD7PVFy9F2DJ7qqzmcUfR_t/view?usp=sharing" target="_blank">Resume</Nav.Link>
      <Nav.Link className='link' href="#contact">Contact</Nav.Link>
    </Nav>
    <Navbar className='navbarsocial'>
    <div className='social'>
    <Nav.Link href="https://github.com/robrichardsdpt" target="_blank">
    <img src={gitHub} alt='github' className='gitHub'/>
    </Nav.Link>
    </div>
    <div className='social'>
    <Nav.Link href="https://www.linkedin.com/in/robert-richards-pt-dpt/" target="_blank">
    <img src={li} alt='linkedIn' className='li'/>
    </Nav.Link>
    </div>
    <div className='social'>
    <Nav.Link href="mailto:robrichardsdpt@gmail.com" target="_blank">
    <img src={envelope} alt='e-mail' className='email'/>
    </Nav.Link>
    </div>
    <div className='social'>
    <Nav.Link href="https://robrichardsdpt.medium.com/" target="_blank">
    <img src={medium} alt='medium' className='gitHub'/>
    </Nav.Link>
    </div>
    </Navbar>
    </Navbar.Collapse>
  </Navbar>
  </Nav>
)

export default Header
