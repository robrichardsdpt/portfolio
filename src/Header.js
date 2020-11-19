import React from 'react'
// import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import gitHub from './GitHubLight.png'
import li from './LI.png'
import envelope from './email.png'

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
      <Nav.Link className='link' href="https://drive.google.com/drive/u/0/folders/1vxPHjh8eYWy00cS49bqFUfvVfS74P6nd">Resume</Nav.Link>
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
    </Navbar>
    </Navbar.Collapse>
  </Navbar>
  </Nav>
)

export default Header