import React from 'react'
import Image from 'react-bootstrap/Image'
import running from './running.png'
import ticTacToe from './tic-tac-toe-dark.png'
import hikeLog from './hike-log.jpg'
import instasham from './instasham.jpg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import gitHub from './GitHubLight.png'
import link from './link.png'
import gratitude from './gratitude.png'

const Projects = () => (
  <div className="projects">
    <Container className="projectsGrid">
    <Row>
    <Col className="projects-header">
    <h1>Projects</h1>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={running} alt="running application" className="projectImage" thumbnail/></Col>
    <Col><h2>Do You Even Run?:  Run tracking application.</h2>
    <p>This is a full stack application (built with ReactJS, Django/Python, and PostgresQL) that allows a user to create, read, update, and delete running activity from their secure account. This application provides the user statistics and graphical representation of their running activity. Further, API interaction was made for all images through Unsplash.</p>
    <a href="https://github.com/robrichardsdpt/running-app" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/running-app" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={gratitude} alt="gratitude application" className="projectImage" thumbnail/></Col>
    <Col><h2>gratitude</h2>
    <p>This is a full stack application (built with ReactJS, Django/Python, and PostgresQL) that allows a user to create, read, update, and delete gratitude posts from their secure account. This application provides user the ability to like and comment on their post, as well as others.  Future versions will alow the user to follow other users.</p>
    <a href="https://github.com/robrichardsdpt/gratitude-app" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/gratitude-app" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={ticTacToe} alt="tic tac toe" className="projectImage" thumbnail/></Col>
    <Col><h2>Tic Tac Toe</h2>
    <p>This Application allows a user to play a game of tic tac toe against a computer opponent. It tells you who wins the game or if the game end in a tie, tracks the number of games you have played to date, and allows you to have your own secure account. It communicates with an API which keeps a record of all games that you have played.</p>
    <a href="https://github.com/robrichardsdpt/tic-tac-toe-client" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/tic-tac-toe-client" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={hikeLog} alt="hiking log" className="projectImage" thumbnail/></Col>
    <Col><h2>hikeLog</h2>
    <p>This app will allow the user to track their hikes, distance traveled, elevation gained, the trails they used, and any trail notes. They will have their own user account where they can keep their information safe and secure from modification/deletion by another user.</p>
    <a href="https://github.com/robrichardsdpt/hike-tracker-client" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/hike-tracker-client" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    </Row>
    <Row>
    <Col size="3" className="projectCell"><Image src={instasham} alt="instasham" className="projectImage" thumbnail/></Col>
    <Col><h2>instaSham</h2>
    <p>This is an image upload site that allows you to manage your photos, update metadata (including description and tag), and see other account photos. Similar concept to instagram.</p>
    <a href="https://github.com/SEI-Tigers-404BrainNotFound/group-project-front-end" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://SEI-Tigers-404BrainNotFound.github.io/group-project-front-end" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    </Row>
    </Container>
  </div>
)

export default Projects
