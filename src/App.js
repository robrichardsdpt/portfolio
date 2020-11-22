import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

const App = () => (
    <div>
      <Route path='/' component={Header} />
      <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/projects' component={Projects} />
      <Route path='/skills' component={Skills} />
      <Route path='/resume' component={Resume} />
      <Route path='/contact' component={Contact} />
      <Route path='/' component={Footer} />
  </div>
)

export default App;