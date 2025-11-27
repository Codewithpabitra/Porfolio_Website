import React from 'react'
import './App.css'
import Home from './sections/Home/Home'
import About from './sections/About/About'

const App = () => {
  return (
    <div className='app-container'>
      <Home />
      <About/>
    </div>
  )
}

export default App
