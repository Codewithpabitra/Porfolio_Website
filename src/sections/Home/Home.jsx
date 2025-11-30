import React from 'react'
import './Home.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import  boy_img  from '../../assets/boy_img.png'
import { MdOutlineFileDownload } from "react-icons/md";

const Home = () => {
  return (
    <div className='home-conatiner'>

      {/* navbar  */}
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


      {/* hero section  */}
      <div className="herosection">
        <div className="main-img">
            <img src={boy_img} alt="boy_im" />
        </div>
        <div className="introduction">
          <h2>Hello👋, this is <span>CodeWithPabitra</span></h2>
          <p>Hey, welcome to my profile. I am a passionate software enginner believe in raw work not just assumption. I am much enthusiast about computer science and love to teach and mentor others.</p>

        </div>
        <div className="explore-btns">
          <button className='connect-me-gradient'>connect with me <IoIosArrowRoundForward/></button>
          <button className='resume-btn'>my resume <MdOutlineFileDownload /></button>
        </div>
      </div>


    </div>
  )
}

export default Home
