import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GiWeightLiftingUp, GiShinyApple, GiSpartan, GiHockey } from 'react-icons/gi'
import { FaGraduationCap, FaLaptopCode, FaHiking } from 'react-icons/fa'

const Highlights = () => (

  <div>
  <Row className='highlights'>
  <Col className='apple'>
  <h1 className='apple'><GiShinyApple/></h1>
  <p className='appleText'>Born in New York</p>
  </Col>

  <Col className='graduation'>
  <h1><FaGraduationCap/></h1>
  <p className='graduationText'>Graduated in 2010 from SUNY Buffalo with a Doctorate in Physical Therapy</p><p className='graduationText'>Bachelors of Science in Exercise Science,</p><p className='graduationText'>and Bachelors of Arts in Psychology.</p>
  </Col>

  <Col className='weightlifter'>
  <h1 className='weightlifter'><GiWeightLiftingUp/></h1>
  <p className='weightlifterText'>Competed in 2 USAPL Powerlifting meets.</p>
  </Col>

  <Col className='spartan'>
  <h1 className='spartan'><GiSpartan/></h1>
  <p className='spartanText'>Has competed in over 25 Spartan Races, including the Trifecta World Championship in Sparta Greece.</p>
  </Col>

  <Col className='hockey'>
  <h1><GiHockey/></h1>
  <p className='hockeyText'>An avid hockey player, playing since the age of 8 years old.</p>
  </Col>

  <Col className='hiker'>
  <h1 className='hiker'><FaHiking/></h1>
  <p className='hikerText'>Has completed New Hampshire's 48 4000 footers in the White Mountains</p>
  <p className='hikerText'>Has also completed a single day Pemi Loop in NH</p>
  </Col>

  <Col className='laptop'>
  <h1 className='laptop'><FaLaptopCode/></h1>
  <p className='laptopText'>Graduated from General Assembly's Software Engineering Immersive in 2020.</p>
  </Col>
  </Row>
  </div>
)
export default Highlights
