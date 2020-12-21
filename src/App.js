import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

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
