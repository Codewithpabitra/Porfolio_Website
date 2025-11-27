import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='home-conatiner'>
      <nav className='navbar'>
        <div className="logo-left">
            <h1>itz.Me</h1>
        </div>
        <div className="middle-menu">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Experience</li>
              <li>Contact</li>
            </ul>
        </div>
        <button className='connect-btn'>Connect With Me</button>
      </nav>
    </div>
  )
}

export default Home
