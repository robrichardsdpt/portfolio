import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import html from './skills/HTML.png'
import cssLogo from './css3-logo.png'
import jsLogo from './javaScript-logo.png'
import jquery from './JQuery-01.png'
import nodeJS from './Node-JS-01.png'
import markdown from './Markdown-01.png'
import python from './python-logo.png'
import mongoDB from './MongoDB-01.png'
import mongoose from './mongoose.png'
import reactLogo from './react.png'
import django from './Django-01.png'
import ajax from './AJAX-Language-01.png'
import sass from './Sass-01.png'

const Skills = () => (
  <div className="skills">
  <Container className="skillsContainer">
    <Row>
    <h1 className='skillsText'>Some of my technology skills include:</h1>
    </Row>
    <Row>
    <Col xs={4} md={2} className='skillCol'>
    <img src={html} alt='html' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={cssLogo} alt='css' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={jsLogo} alt='js' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={jquery} alt='jquery' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={nodeJS} alt='nodeJS' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={python} alt='python' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={mongoDB} alt='mongoDB' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={mongoose} alt='mongoose' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={reactLogo} alt='react' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={django} alt='django' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={ajax} alt='ajax' className='skillsImage'/>
    </Col>
    <Col xs={4} md={2} className='skillCol'>
    <img src={sass} alt='sass' className='skillsImage'/>
    </Col>
    </Row>
  </Container>
  </div>
)

export default Skills
