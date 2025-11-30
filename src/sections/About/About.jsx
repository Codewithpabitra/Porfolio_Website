import React from 'react'
import './About.css'
import  boy_img  from '../../assets/boy_img.png'

const About = () => {

  const languages = [
    {
      langauge: "C++",
      efficiency : "Advanced"
    },
     {
      langauge: "C",
      efficiency : "Intermediate"
    },
     {
      langauge: "JS",
      efficiency : "Advanced"
    },
     {
      langauge: "Python",
      efficiency : "Advanced"
    },
     {
      langauge: "Java",
      efficiency : "Intermediate"
    },
    {
      langauge: "DSA",
      efficiency: "Beginner"
    }
    
  ]

  const techStacks = ["HTML", "CSS", "JS", "ReactJS", "Tailwind CSS", "Framer-Motion", "GSAP", "Three JS", "NodeJS", "MongoDB", "Express", "Redis", "Docker","Git & Github", "Python", "Java"]


  return (
    <div className='about-page' id='about'>

        <h3>About Me<div className="underline"></div></h3>
        
      <div className="upperpart">
          <div className="logo-img">
            <img src={boy_img} className='boy_img' width="300px" height="300px" alt="boy_image" />
          </div>
          <div className="right-part">
            <h4>Codewithpabitra</h4>
            <p>A passionate software engineer | 1.5+ years in Coding</p>
            <div className="skills-langauges">
              {techStacks.map((item,index) => (
                <div className='skill' key={index} >{item}</div>
              ))}
            </div>

        </div>
      </div>

      <div className="introduction-after">
        <h4 className='heading'>Languages I Know</h4>
        <div className="langauges">
          {languages.map((item, index) => (
              <div key={index} className={`individual-item ${item.efficiency == 'Advanced' ? 'green-border':''} ${item.efficiency == 'Intermediate' ? 'yellow-border' : ''} ${item.efficiency == 'Beginner'? 'red-border' : ''} `}>
                <p className='item-title'>{item.langauge}</p>
                <p className={`efficiency-para ${item.efficiency == 'Advanced' ? 'green-color' : ''} ${item.efficiency == 'Intermediate' ? 'yellow-color' : ''}  ${item.efficiency == 'Beginner' ? 'red-color' : ''}`}>{item.efficiency}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;
