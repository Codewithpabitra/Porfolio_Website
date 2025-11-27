import React from 'react'

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
      efficiency : "Most Used"
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
    <div className='about-page'>
      <div className="introduction">
        <div className="left-part">

        </div>
        <div className="right-part">
            <h4>Codewithpabitra</h4>
            <p>A passionate software engineer | 1.5+ years in Coding</p>
            <div className="skills-langauges">
              {techStacks.map((item,index) => (
                <div key={index}>{item}</div>
              ))}
            </div>

        </div>
      </div>

      <div className="introduction-after">
        <h4>Languages I Know</h4>
        <div className="langauges">
          {languages.map((item, index) => (
              <div className='individual-item'>
                <p>{item.langauge}</p>
                <p>{item.efficiency}</p>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About;
