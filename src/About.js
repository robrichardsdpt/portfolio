import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import self from './RRichardsfull.jpg'
import Carousel from './Carousel2'


const About = () => (
  <div className="aboutContainer">
  <div className="about">
    <Row>
      <Col className="namecol">
        <h1>Hi, my name is <span className="name">Rob</span>.</h1>
      </Col>
    </Row>
    <Row>
    <Col s={12} md={6} className="aboutText">
      I am a full-stack software engineer with a professional background in physical therapy, rehabilitation management, and leadership. I enjoy a challenge and working as a part of a team to create new technology. I am proficient in JavaScript, Python, HTML, CSS and React. I am driven by self and professional development to become a leader in the field. Further, I am motivated to create software and technology to help others accomplish their goals, and to improve the human experience.  I am looking to utilize my technical skills, along with those that I have obtained as a physical therapist to contribute to the world of technology.
    </Col>
      <Col s={12} md={6} className='aboutPic'>
        <Image src={self} alt="About Me" className='self' roundedCircle/>
      </Col>
      <Carousel/>
    </Row>
</div>  
</div>

)

export default About
