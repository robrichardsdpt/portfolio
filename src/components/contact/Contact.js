import React from 'react'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import phone from './../../assets/images/media/UIHere.png'
import email from './../../assets/images/media/logo-gmail.png'
import li from './../../assets/images/media/LI.png'
import twitter from './../../assets/images/media/twitter-icon.png'
import Carousel from '../carousel/Carousel'

const Contact = () => (
  <div className="contact" id='contact'>
    <Carousel/>
    <Container className= 'contactCont'>
      <Row className='contact-header'>
        <h1 className='name'>Contact me...</h1>
      </Row>
      <Row>
        <Col className="contactImageCells contactIcons" xs={12} md={3}>
          <img src={phone} alt='phone' className="contactImage" thumbnail/>
        </Col>
        <Col className="contactImageCells contactText" xs={12} md={9}>
          <h3>(919)745-7395</h3>
        </Col>
      </Row>
      <Row>
        <Col className="contactImageCells contactIcons" xs={12} md={3}>
          <img src={email} alt='email' className="contactImage" thumbnail/>
        </Col>
        <Col className="contactImageCells contactText" xs={12} md={9}>
          <a className='contact-link' href="mailto:robrichardsdpt@gmail.com" target="_blank"><h3>robrichardsdpt@gmail.com</h3></a>
        </Col>
      </Row>
      <Row>
        <Col className="contactImageCells contactIcons" xs={12} md={3}>
          <img src={li} alt='LinkedIn' className="contactImage" thumbnail/>
        </Col>
        <Col className="contactImageCells contactText" xs={12} md={9}>
          <a className='contact-link' href="https://www.linkedin.com/in/robert-richards-pt-dpt/" target="_blank"><h3>robert-richards-pt-dpt</h3></a>
        </Col>
      </Row>
      <Row>
        <Col className="contactImageCells contactIcons" xs={12} md={3}>
          <img src={twitter} alt='twitter' className="contactImage" thumbnail/>
        </Col>
        <Col className="contactImageCells contactText" xs={12} md={9}>
          <a className='contact-link' href="https://www.twitter.com/robrdpt/" target="_blank"><h3>robrdpt</h3></a>
        </Col>
        </Row>
      </Container>
  </div>
)

export default Contact
