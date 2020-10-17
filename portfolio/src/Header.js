import React from 'react'
// import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import gitHub from './GitHubLight.png'
import li from './LI.png'
import envelope from './email.png'

const Header = () => (
  <Nav className='nav'>
  <Navbar.Brand href='#'>
    <h1>Rob Richards</h1>
    </Navbar.Brand>
    <Navbar className='navbar'>
    <Nav.Link className='link' href="#about">About</Nav.Link>
    <Nav.Link className='link' href="#projects">Projects</Nav.Link>
    <Nav.Link className='link' href="#skills">Skills</Nav.Link>
    <Nav.Link className='link' href="#resume">Resume</Nav.Link>
    <Nav.Link className='link' href="#contact">Contact</Nav.Link>
    </Navbar>
    <Navbar className='navbarsocial'>
    <div className='social'>
    <img src={gitHub} alt='github' className='gitHub'/>
    </div>
    <div className='social'>
    <img src={li} alt='linkedIn' className='li'/>
    </div>
    <div className='social'>
    <img src={envelope} alt='e-mail' className='email'/>
    </div>

    </Navbar>
  </Nav>
)

export default Header
