import React from 'react'
import './Home.css'
import { IoIosArrowRoundForward } from "react-icons/io";
import  boy_img from '../../assets/boy_img.png'
import resume from '../../assets/resume.pdf'
import { MdOutlineFileDownload } from "react-icons/md";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Home = () => {
  return (
    <div className='home-conatiner' id='home'>

      {/* navbar  */}
      <nav className='navbar'>
        <div className="logo-left">
            <h1>itz.Me</h1>
        </div>
        <div className="middle-menu">
            <ul>
              <AnchorLink href='#home'><li>Home</li></AnchorLink>
              <AnchorLink href='#about'><li>About</li></AnchorLink>
              <AnchorLink href='#project'><li>Projects</li></AnchorLink>
              <AnchorLink href='#contact'><li>Contact</li></AnchorLink>
            </ul>
        </div>
        <AnchorLink href='#contact'><button className='connect-btn'>Connect With Me</button></AnchorLink>
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
          <AnchorLink href='#contact'><button className='connect-me-gradient'>connect with me <IoIosArrowRoundForward/></button></AnchorLink>
          <a href={resume} download ><button className='resume-btn'>my resume <MdOutlineFileDownload /></button></a>
        </div>
      </div>


    </div>
  )
}

export default Home
