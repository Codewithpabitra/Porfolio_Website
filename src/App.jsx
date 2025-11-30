import React from 'react'
import './App.css'
import Home from './sections/Home/Home'
import About from './sections/About/About'
import Project from './sections/Projects/Project'
import Contact from './sections/Contact/Contact'

const App = () => {
  return (
    <div className='app-container'>
      <Home />
      <About/>
      <h3 className='text-5xl text-blue-500 mb-4 text-center'>Projects.</h3>
      <Project />
      <Contact />
      <div className='flex gap-10 text-center items-center justify-center mb-10'>
        <a href="#" className='text-gray-500'>itz.Me | made with 💗</a>
        <a href="https://github.com/Codewithpabitra/" target='_blank' className='text-gray-500'>Github.</a>
        <a href="https://x.com/CodeX_Pabitra" target='_blank' className='text-gray-500'>X.com</a>
        <a href="instagram.com" target='_blank' className='text-gray-500'>Instagram.</a>
        <a href="#" className='text-gray-500'>all rights reserved | 2025.</a>
      </div>
    </div>
  )
}

export default App
