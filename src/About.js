import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import self from './assets/images/media/RRichardsfull.jpg'

const About = () => (
  <div className="aboutContainer" id='about'>
  <div className="about">

    <Row>
      <Col className="namecol">
        <h1>Hi, my name is <span className="name">Rob</span>.</h1>
      </Col>
    </Row>

    <Row>
    <Col s={12} md={6} className="aboutText">
      <h2 className="highlight">"I bring wellness to technology."</h2> <br/>
      <p>I am a <span className="highlight">full-stack software engineer</span> with a professional background in <span className="highlight">physical therapy</span>, rehabilitation management, and leadership.</p><p> I enjoy a challenge and working as a part of a <span className="highlight">team</span> to create new technology.</p><p>I am proficient in <span className='highlight'>JavaScript</span>, Python, HTML, CSS and React.</p><p>I am driven by self and professional development to become a <span className="highlight">leader</span> in the field. </p><p>Further, I am motivated to create software and technology to help others accomplish their goals, and to <span className="highlight">improve the human experience</span>. </p><p> I am looking to utilize my technical skills, along with those that I have obtained as a physical therapist to contribute to the world of <span className="highlight">technology</span>.</p>
    </Col>
      <Col s={12} md={6} className='aboutPic'>
        <Image src={self} alt="About Me" className='self' roundedCircle/>
      </Col>
    </Row>

  </div>
</div>
)

export default About
