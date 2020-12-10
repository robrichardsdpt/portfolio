import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './Header'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'

const App = () => (
    <div>
    <Route path='/' component={Header} />
      <Route path='/' component={Home} />
      <Route path='/' component={About} />
      <Route path='/' component={Projects} />
      <Route path='/' component={Skills} />
      <Route path='/' component={Contact} />
      <Route path='/' component={Footer} />
  </div>
)

export default App;
