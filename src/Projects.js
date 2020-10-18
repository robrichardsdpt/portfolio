import React from 'react'
import Image from 'react-bootstrap/Image'
import ticTacToe from './tic-tac-toe.jpg'
import hikeLog from './hike-log.jpg'
import instasham from './instasham.jpg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

const Projects = () => (
  <div className="projects">
    <h1>Projects</h1>
    <Container className="projectsGrid">
    <Row>
    <Col size="3" className="projectCell"><Image src={ticTacToe} alt="tic tac toe" className="projectImage" thumbnail/></Col>
    <Col><h2>Tic Tac Toe</h2>
    <p>A game of tic tac toe that allows you to play against yourself.</p>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={hikeLog} alt="hiking log" className="projectImage" thumbnail/></Col>
    <Col><h2>hikeLog</h2>
    <p>A hiking database.</p>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={instasham} alt="instasham" className="projectImage" thumbnail/></Col>
    <Col><h2>instaSham</h2>
    <p>An image upload site that allows you to upload and share your images with other.  Similar concept to instagram.</p>
    </Col>
    </Row>
    </Container>
  </div>
)

export default Projects
