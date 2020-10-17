import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import self from './RRichardsfull.jpg'

const About = () => (
  <div className="about">
  <Container className="about">
    <Row>
      <Col>
        <h1>This is the About Me section</h1>
      </Col>
    </Row>
    <Row>
      <Col>
      Full-stack web developer with a professional background in physical therapy, rehabilitation management, and leadership who enjoys challenge and working as a part of a team to create new technology. I am proficient in JavaScript, Python, HTML, CSS and React. Driven by self and professional development to become a leader in the field. Motivated to create software and technology to help others accomplish their goals, and to improve the human experience.
      </Col>
      <Col>
        <Image src={self} alt="About Me" className='self' roundedCircle/>
      </Col>
    </Row>
</Container>
</div>

)

export default About
