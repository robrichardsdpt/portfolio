import React from 'react'
import Image from 'react-bootstrap/Image'
import running from './../../assets/images/projects/running.png'
import ticTacToe from './../../assets/images/projects/tic-tac-toe-dark.png'
import hikeLog from './../../assets/images/projects/hike-log.jpg'
import instasham from './../../assets/images/projects/instasham.jpg'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import gitHub from './../../assets/images/media/Github-icon.png'
import link from './../../assets/images/media/link.png'
import gratitude from './../../assets/images/projects/gratitude.png'
import crwnClothing from './../../assets/images/projects/crwn-clothing.png'
import medithanks from './../../assets/images/projects/medithanks.png'


const Projects = () => (
  <div className="projects">

    <Container className="projectsGrid">
    <Row>
    <Col className="projects-header">
    <h1 className='name' id='projects'>Projects</h1>
    </Col>
    </Row>

    <Row className='project'>
    <Col sm={12}> <h2 className='projectTitle'>Medi+thanks:</h2> <h3 className='projectSubTitle'>Virtual frontline health care worker thank you board.</h3></Col>
    <Col sm={12} lg={10} className="projectCell"><a href="https://pb-j.github.io/frontline-frontend/" target="_blank"><Image src={medithanks} alt="medithanks application" className="projectImage" thumbnail/></a></Col>
    <Col sm={12} lg={2} className="linkCell"><a href="https://github.com/PB-J/frontline-frontend" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://pb-j.github.io/frontline-frontend/" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col sm={12} lg={12} className="project-desc">
    <p>This was a passion project that was designed as team of 2 UX designers and 4 developers for a pandemic themed hackathon that we won.</p>
    <p>It is a full stack application that allows a user to create, read, update, and delete thank you cards to health care workers in a HIPPA compliant fashion.</p>
    <p>This application provides the user with the ability to search through posts, regardless if they are signed in or not.</p>
    <p className='bolder'>Front-End: <span className='project-tech'>ReactJS</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>Bootstrap</span></p>
    <p className='bolder'>Back-End: <span className='project-tech'>MongoDB</span> <span className='project-tech'>Mongoose</span> <span className='project-tech'>ExpressJS</span> <span className='project-tech'>NodeJS</span><span className='project-tech'>Heroku</span></p>
    <p className='bolder'>External APIs/Software: <span className='project-tech'>Figma</span> <span className='project-tech'>Google Fonts</span></p>
    </Col>


    </Row>

    <Row className='project'>
    <Col sm={12}> <h2 className='projectTitle'>Do You Even Run?:</h2> <h3 className='projectSubTitle'>Run tracking application.</h3></Col>
    <Col sm={12} lg={10} className="projectCell"><a href="https://robrichardsdpt.github.io/running-app" target="_blank"><Image src={running} alt="running application" className="projectImage" thumbnail/></a></Col>
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
    <p className='bolder'>Front-End: <span className='project-tech'>ReactJS</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>Bootstrap</span></p>
    <p className='bolder'>Back-End: <span className='project-tech'>Python</span> <span className='project-tech'>Django</span> <span className='project-tech'>PostgreSQL</span> <span className='project-tech'>Heroku</span></p>
    <p className='bolder'>External APIs: <span className='project-tech'>Unsplash.com</span> <span className='project-tech'>Material Design React Bootstrap</span> <span className='project-tech'>Google Fonts</span></p>
    </Col>


    </Row>

    <Row className='project'>
    <Col sm={12}><h2 className='projectTitle'>Crwn Clothing E-commerce Application: </h2><h3 className='projectSubTitle'>A fully scaled e-commerce application.</h3></Col>
    <Col sm={12} lg={10} className="projectCell">  <a href="https://crwn-shop-ecommerce-live.herokuapp.com/" target="_blank"><Image src={crwnClothing} alt="gratitude application" className="projectImage" thumbnail/></a></Col>
    <Col sm={12} lg={2} className="linkCell"><a href="https://crwn-shop-ecommerce-live.herokuapp.com/" target="_blank">
    <img src={gitHub} alt='github' className='projectIcon'/>
    </a>
    <a href="https://github.com/robrichardsdpt/e-commerce" target="_blank">
    <img src={link} alt='website link' className='projectIcon'/>
    </a>
    </Col>
    <Col sm={12} lg={12} className="project-desc">
    <p>This is a full stack application that allows a user to "purchase" items from a clothing store.</p>
    <p>State managed through the use of Redux.</p>
    <p>Use of Reselect for memoization of state to improve performance of site.</p>
    <p>Can sign in using your Google Account.</p>
    <p className='bolder'>Front-End: <span className='project-tech'>ReactJS</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>Bootstrap</span><span className='project-tech'>Redux</span><span className='project-tech'>Reselect</span></p>
    <p className='bolder'>Back-End: <span className='project-tech'>Firestore</span> <span className='project-tech'>Firebase</span></p>
    <p className='bolder'>External APIs: <span className='project-tech'>Google Auth/Firebase/Firestore</span> <span className='project-tech'>Font Awesome</span> <span className='project-tech'>Google Fonts</span></p>
    </Col>

    </Row>


    <Row className='project'>
    <Col sm={12}><h2 className='projectTitle'>grateful: </h2><h3 className='projectSubTitle'>A social media platform to share what you are grateful for.</h3></Col>
    <Col sm={12} lg={10} className="projectCell">  <a href="https://robrichardsdpt.github.io/gratitude-app" target="_blank"><Image src={gratitude} alt="gratitude application" className="projectImage" thumbnail/></a></Col>
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
    <p className='bolder'>Front-End: <span className='project-tech'>ReactJS</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>Bootstrap</span></p>
    <p className='bolder'>Back-End: <span className='project-tech'>Python</span> <span className='project-tech'>Django</span> <span className='project-tech'>PostgreSQL</span> <span className='project-tech'>Heroku</span></p>
    <p className='bolder'>External APIs: <span className='project-tech'>Unsplash.com</span> <span className='project-tech'>Material Design React Bootstrap</span> <span className='project-tech'>Google Fonts</span></p>
    </Col>

    </Row>

    <Row className='project'>
    <Col sm={12}><h2 className='projectTitle'>instaSham:</h2><h3 className='projectSubTitle'>A social media image share application.</h3></Col>
    <Col sm={10} className="projectCell">  <a href="https://SEI-Tigers-404BrainNotFound.github.io/group-project-front-end" target="_blank"><Image src={instasham} alt="instasham" className="projectImage" thumbnail/></a></Col>
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
    <p className='bolder'>Front-End: <span className='project-tech'>ReactJS</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>Bootstrap</span></p>
    <p className='bolder'>Back-End: <span className='project-tech'>NodeJS</span> <span className='project-tech'>Express</span> <span className='project-tech'>MongoDB</span></p>
    <p className='bolder'>External APIs: <span className='project-tech'>Amazon S3</span></p>
    </Col>
    </Row>

    <Row className='project'>
    <Col sm={12}><h2 className='projectTitle'>hikeLog:</h2><h3 className='projectSubTitle'>Personal hike tracking database.</h3></Col>
    <Col sm={10} className="projectCell"><a href="https://robrichardsdpt.github.io/hike-tracker-client" target="_blank"><Image src={hikeLog} alt="hiking log" className="projectImage" thumbnail/></a></Col>
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
    <p className='bolder'>Front-End: <span className='project-tech'>HTML</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>jQuery</span> <span className='project-tech'>Bootstrap</span></p>
    <p className='bolder'>Back-End: <span className='project-tech'>NodeJS</span> <span className='project-tech'>Express</span> <span className='project-tech'>MongoDB</span></p>
    <p className='bolder'>External APIs: <span className='project-tech'>Font Awesome</span> <span className='project-tech'>Google Fonts</span></p>
    </Col>

    </Row>

    <Row className='project'>
    <Col sm={12}><h2 className='projectTitle'>Tic Tac Toe:</h2><h3 className='projectSubTitle'>A new spin on a classic game.</h3></Col>
    <Col sm={10} className="projectCell"><a href="https://robrichardsdpt.github.io/tic-tac-toe-client" target="_blank"><Image src={ticTacToe} alt="tic tac toe" className="projectImage" thumbnail/></a></Col>
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
    <p className='bolder'>Front-End: <span className='project-tech'>HTML</span> <span className='project-tech'>CSS</span> <span className='project-tech'>Sass</span> <span className='project-tech'>JavaScript</span> <span className='project-tech'>jQuery</span> <span className='project-tech'>Bootstrap</span></p>
    </Col>

    </Row>
    </Container>
  </div>
)

export default Projects
