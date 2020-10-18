import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import phone from './mobile-phone-760.png'
import email from './email.png'
import li from './LI.png'
import twitter from './Twitter_Logo_Blue.png'

const Contact = () => (
  <div className="contact">
    <Container>
    <Row>
    <h1>How to Contact Me...</h1>
    </Row>
    <Row>
    <Col className="contactImageCells contactIcons" xs={6} md={3}>
    <img src={phone} alt='phone' className="contactImage" thumbnail/>
    </Col>
    <Col className="contactImageCells" xs={12} md={9}>
    <h3>(919)745-7395</h3>
    </Col>
    </Row>
    <Row>
    <Col className="contactImageCells contactIcons" xs={6} md={3}>
    <img src={email} alt='email' className="contactImage" thumbnail/>
    </Col>
    <Col className="contactImageCells" xs={12} md={9}>
    <h3>robrichardsdpt@gmail.com</h3>
    </Col>
    </Row>
    <Row>
    <Col className="contactImageCells contactIcons" xs={6} md={3}>
    <img src={li} alt='LinkedIn' className="contactImage" thumbnail/>
    </Col>
    <Col className="contactImageCells" xs={12} md={9}>
    <h3>https://www.linkedin.com/in/robert-richards-pt-dpt/</h3>
    </Col>
    </Row>
    <Row>
    <Col className="contactImageCells contactIcons" xs={6} md={3}>
    <img src={twitter} alt='twitter' className="contactImage" thumbnail/>
    </Col>
    <Col className="contactImageCells" xs={12} md={9}>
    <h3>https://twitter.com/robrdpt</h3>
    </Col>
    </Row>
    </Container>
  </div>
)

export default Contact
