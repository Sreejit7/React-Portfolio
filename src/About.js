import React from 'react'
import {motion} from 'framer-motion';
import './About.css';
function About({className}) {
  const about = [
    {
      q: "Introduction",
      a: `I'm a Final Year B.Tech Student in Computer Science from Tamluk, India. 
          I love problem solving and web development. 
          I'm always looking forward to learn new technologies and evolving my skills constantly.
          Currently learning JavaScript & Mongo DB! I'm about to graduate in 2021, so I'm looking for my first Full-time role as a Software / Web / Frontend devloper, please drop a message if you have an open position or know someone who might. Thanks!`
    },
    {
      q: "My Coding Journey",
      a:  `I'm one of those who never coded before college and started really late.
          (Better late than never!)
          The first language I was introduced to at my college was C. Since then, I've learnt a few new languages and frameworks, and each one has added to the excitement of learning something new! I know coding can be equally fun and frustrating at times,
          but when it works, that gives me great inner joy! 
          The world of programming is a never-ending ocean, and I hope to explore it a lil deeper a day.`,
    },
    {
      q: "When I'm not hustling...",
      a: `I love watching football. The art of football mesmerizes me a lot.. 
          Other than that, I like putting colours on things which otherwise seem dull i.e. painting!`
    }
  ]
  return (
    <motion.div className = {`${className} about`} id = "about">
      <div className="about__header">
          <h1>ABOUT ME</h1>
          <div className="about__area">            
            <div className="about__desc">           
              {about.map((item) => (
                <div className="about__item">
                  <h2><span className = "arrow-highlight">{item.q}</span></h2>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>            
          </div>
      </div>
    </motion.div>
  )
}

export default About
