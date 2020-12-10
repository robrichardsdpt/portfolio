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
    <h1 className='name'>Projects</h1>
    </Col>
    </Row>

    <Row className='project'>
    <Col sm={12}> <h2>Do You Even Run?:</h2> <h3>Run tracking application.</h3></Col>
    <Col sm={12} lg={10} className="projectCell"><Image src={running} alt="running application" className="projectImage" thumbnail/></Col>
    <Col sm={12} lg={2} className="linkCell"><a href="https://github.com/robrichardsdpt/running-app" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/running-app" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col sm={12} lg={12} className="project-desc">
    <p>This is a full stack application that allows a user to create, read, update, and delete running activity from their secure account.</p>
    <p>This application provides the user statistics and graphical representation of their running activity.</p>
    <p>Further, API interaction was made for all images through Unsplash.</p>
    <p>Front-End: ReactJS, CSS, Sass, JavaScript, Bootstrap</p>
    <p>Back-End: Python, Django, PostgreSQL, Heroku</p>
    <p>External APIs: Unsplash.com, Material Design React Bootstrap, Google Fonts</p>
    </Col>


    </Row>

    <Row className='project'>
    <Col sm={12}><h2>grateful: </h2><h3>A social media platform to share what you are grateful for.</h3></Col>
    <Col sm={12} lg={10} className="projectCell"><Image src={gratitude} alt="gratitude application" className="projectImage" thumbnail/></Col>
    <Col sm={12} lg={2} className="linkCell"><a href="https://github.com/robrichardsdpt/gratitude-app" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/gratitude-app" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col sm={12} lg={12} className="project-desc">
    <p>This is a full stack application that allows a user to create, read, update, and delete gratitude posts from their secure account.</p>
    <p>This application provides user the ability to like and comment on their post, as well as others.  </p>
    <p>Future versions will alow the user to follow other users.</p>
    <p>Front-End: ReactJS, CSS, Sass, JavaScript, Bootstrap</p>
    <p>Back-End: Python, Django, PostgreSQL, Heroku</p>
    <p>External APIs: Unsplash.com, Material Design React Bootstrap, Google Fonts</p>
    </Col>

    </Row>

    <Row className='project'>
    <Col sm={12}><h2>instaSham:</h2><h3>A social media image share application.</h3></Col>
    <Col sm={10} className="projectCell"><Image src={instasham} alt="instasham" className="projectImage" thumbnail/></Col>
    <Col sm={2} className='linkCell'><a href="https://github.com/SEI-Tigers-404BrainNotFound/group-project-front-end" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://SEI-Tigers-404BrainNotFound.github.io/group-project-front-end" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col sm={12} className="project-desc">
    <p>This is a full stack image upload application that allows you to manage your photos, update metadata (including description and tag), and see other account photos.</p>
    <p>Similar concept to instagram.</p>
    <p>Front-End: ReactJS, CSS, Sass, JavaScript, Bootstrap</p>
    <p>Back-End: NodeJS, Express, MongoDB</p>
    <p>External APIs: Amazon S3</p>
    </Col>
    </Row>

    <Row className='project'>
    <Col sm={12}><h2>hikeLog:</h2><h3>Personal hike tracking database.</h3></Col>
    <Col sm={10} className="projectCell"><Image src={hikeLog} alt="hiking log" className="projectImage" thumbnail/></Col>
    <Col sm={2} className='linkCell'>
    <a href="https://github.com/robrichardsdpt/hike-tracker-client" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/hike-tracker-client" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col className="project-desc">
    <p>This app will allow the user to track their hikes, distance traveled, elevation gained, the trails they used, and any trail notes.</p>
    <p>They will have their own user account where they can keep their information safe and secure from modification/deletion by another user.</p>
    <p>Front-End: HTML, CSS, Sass, JavaScript, jQuery, Bootstrap</p>
    <p>Back-End: NodeJS, Express, MongoDB</p>
    <p>External APIs: Font Awesome, Google Fonts</p>
    </Col>

    </Row>

    <Row className='project'>
    <Col sm={12}><h2>Tic Tac Toe:</h2><h3>A new spin on a classic game.</h3></Col>
    <Col sm={10} className="projectCell"><Image src={ticTacToe} alt="tic tac toe" className="projectImage" thumbnail/></Col>
    <Col sm={2} className='linkCell'>
    <a href="https://github.com/robrichardsdpt/tic-tac-toe-client" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://robrichardsdpt.github.io/tic-tac-toe-client" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col sm={12} className='project-desc'>
    <p>This application allows a user to play a game of tic tac toe against a computer opponent.</p>
    <p>It tells you who wins the game or if the game end in a tie, tracks the number of games you have played to date, and allows you to have your own secure account.</p>
    <p>It communicates with an API which keeps a record of all games that you have played.</p>
    <p>Front-End: HTML, CSS, Sass, JavaScript, jQuery, Bootstrap</p>
    </Col>

    </Row>
    </Container>
  </div>
)

export default Projects
