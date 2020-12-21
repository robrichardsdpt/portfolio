import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import html from './../../assets/images/skills/HTML (1).png'
import cssLogo from '../../assets/images/skills/CSS.png'
import jsLogo from './../../assets/images/skills/JavaScript.png'
import jquery from './../../assets/images/skills/jQuery.png'
import nodeJS from './../../assets/images/skills/nodejs.png'
import python from './../../assets/images/skills/Python.png'
import mongoDB from './../../assets/images/skills/Mongodb.png'
import reactLogo from './../../assets/images/skills/React.png'
import sass from './../../assets/images/skills/SASS.png'
import redux from './../../assets/images/skills/Redux.png'
import mysql from './../../assets/images/skills/SQL.png'
import postgresql from './../../assets/images/skills/PostgreSQL.png'
import firebase from './../../assets/images/skills/firebase.png'
import heroku from './../../assets/images/skills/Heroku.png'
import git from './../../assets/images/skills/git.png'
import express from './../../assets/images/skills/Express.png'
import npm from './../../assets/images/skills/NPM.png'
import github from './../../assets/images/media/GitHub.png'

const Skills = () => (
  <div className="skills" id='skills'>
  <Container className="skillsContainer">
    <h1 className='skillsText name'>Skills:</h1>
    <Col xl={12}>
    <h2 className='skills-label'>Languages:</h2>
    </Col>

    <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={html} alt='html' className='skillsImage'/>
    </div>
    <p className='centered-text'>HTML</p>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={cssLogo} alt='css' className='skillsImage'/>
    </div>
    <p className='centered-text'>CSS</p>
    </Col>


      <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={jsLogo} alt='js' className='skillsImage'/>
    </div>
    <p className='centered-text'>JavaScript</p>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={python} alt='python' className='skillsImage'/>
    </div>
    <p className='centered-text'>Python</p>
    </Col>

    <Col xl={12}>
      <h2 className='skills-label'>Front-End Frameworks/Libraries:</h2>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
      <img src={sass} alt='sass' className='skillsImage'/>
    </div>
    <p className='centered-text'>Sass</p>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={jquery} alt='jquery' className='skillsImage'/>
    </div>
    <p className='centered-text'>jQuery</p>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={reactLogo} alt='react' className='skillsImage'/>
    </div>
    <p className='centered-text'>React</p>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={redux} alt='redux' className='skillsImage'/>
    </div>
    <p className='centered-text'>Redux</p>
    </Col>

    <Col xl={12}>
    <h2 className='skills-label'>Back-End Frameworks/Libraries/Databases:</h2>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={mongoDB} alt='mongoDB' className='skillsImage'/>
    </div>
    <p className='centered-text'>MongoDB</p>
    </Col>

    <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={express} alt='express' className='skillsImage'/>
    </div>
    <p className='centered-text'>ExpressJS</p>
    </Col>

      <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={nodeJS} alt='nodeJS' className='skillsImage'/>
    </div>
    <p className='centered-text'>NodeJS</p>
    </Col>


  <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={postgresql} alt='postgresql' className='skillsImage'/>
      </div>
      <p className='centered-text'>PostgreSQL</p>
    </Col>

  <Col s={6} md={4} lg={2} className='skillColContainer'>
      <div className='skillCol'>
    <img src={mysql} alt='mysql' className='skillsImage'/>
    </div>
    <p className='centered-text'>SQL/MySQL</p>
    </Col>

  <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={firebase} alt='firebase' className='skillsImage'/>
    </div>
    <p className='centered-text'>Firebase/Firestore</p>
    </Col>

    <Col xl={12}>
    <h2 className='skills-label'>Management/Deployment:</h2>
    </Col>

    <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={github} alt='github' className='skillsImage'/>
    </div>
    <p className='centered-text'>GitHub</p>
    </Col>

    <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={git} alt='git' className='skillsImage'/>
    </div>
    <p className='centered-text'>Git</p>
    </Col>

    <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={heroku} alt='heroku' className='skillsImage'/>
    </div>
    <p className='centered-text'>Heroku</p>
    </Col>

    <Col s={6} md={4} lg={2} className='skillColContainer'>
    <div className='skillCol'>
    <img src={npm} alt='npm' className='skillsImage'/>
    </div>
    <p className='centered-text'>NPM</p>
    </Col>
  </Container>
  </div>
)

export default Skills
