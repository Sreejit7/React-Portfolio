import React from 'react'
import {motion} from 'framer-motion';
import {Mail, Phone, Home, GetApp} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import FileSaver, {saveAs} from 'file-saver';
import './About.css';
function About() {
  const institues = [
    { 
      name: "St. Thomas' College of Engineering & Technology",
      place: " - Kolkata, India",
      course: "Bachelor of Technology, Computer Science & Engineering",
      timeline: " - 2017 - 2021 (Expected)",
      grades: "CGPA: 8.93 / 10 (Upto 6th)"
    },
    {
      name: "Tamluk Hamilton High School",
      place: " - Tamluk, India",
      course: "Class XII Board Exam",
      timeline: " - 2015 - 2017",
      grades: "90%"
    },
    {
      name: "Tamluk Hamilton High School",
      place: " - Tamluk, India",
      course: "Class X Board Exam",
      timeline: " - 2009 - 2015",
      grades: "93%"
    }
  ];
  
  const about = [
    {
      q: "Introduction",
      a: `I'm a Final Year B.Tech Student in Computer Science from Tamluk, India. 
          I love problem solving and web development. 
          I'm always looking forward to learn new technologies and evolving my skills constantly.
          Currently learning JavaScript & Mongo DB!`
    },
    {
      q: "My Coding Journey",
      a:  `I'm one of those who never coded before college and started really late.
          (Better late than never!)
          The first language I was introduced to at my college was C. I know coding can be equally fun and frustrating at times,
          but when it works, that gives me great inner joy! 
          The world of programming is a never-ending ocean, and I hope to explore it a lil deeper a day.`,
    },
    {
      q: "When I'm not hustling...",
      a: `I love watching football. The art of football mesmerizes me a lot.. 
          Other than that, I like putting colours on things which otherwise seem dull i.e. painting!`
    }
  ]
  const resumeDownload = () => {
    FileSaver.saveAs("https://drive.google.com/file/d/1nln2EHepkQEKQfRpl0nOWjyI2TH_foD7/view?usp=sharing", "Sreejit De Resume.pdf");
  }
  return (
    <motion.div className = "about" id = "about">
      <div className="about__header">
          <h1>ABOUT ME</h1>
          <div className="about__area">
              <img
                alt = ""
                src = "/images/coding.gif"
                className = "about__img"
              />
            
            <div className="about__desc">           
              {about.map((item) => (
                <div className="about__item">
                  <h2><span className = "arrow-highlight">{item.q}</span></h2>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
            <img
                alt = ""
                src = "/images/coffee.png"
                className = "about__img2"
              />
          </div>
          
          
      </div>
      <div className="about__body">
        {/*<motion.div className="about__left"
          initial = {{x: '-100vw'}}
          animate = {{x: 0}}
          transition = {{type: "spring", stiffness: 150, duration: 1.5}}
        >
          <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
          <div className="about__contact">
            <div className="about__title">
              <h1>You can reach me on</h1>
              <i class="em em-earth_asia" aria-role="presentation" aria-label="EARTH GLOBE ASIA-AUSTRALIA"></i>
            </div>
            <div className="contact__info">
              <motion.img
                className = "contact__img"
                src = "/images/Sreejit De.jpeg"
                alt = "Sreejit De"
              />
              <div className="contact__infoLines">
                <div className="contact__infoLine">
                <Mail fontSize = "large" className = "contact__icon"/>
                <p>sreejitde7@gmail.com</p>
              </div>
              <div className="contact__infoLine" >
                <Phone fontSize = "large" className = "contact__icon"/>
                <p>+91 9002198484</p>
              </div>
              <div className="contact__infoLine">
                <Home fontSize = "large" className = "contact__icon"/>
                <p>Tamluk, West Bengal, India</p>
              </div>
              </div>
            </div>
          </div>
          <div className="education">
              <div className="about__title">
                <h1>Got My Degrees From</h1>
                <i class="em em-school" aria-role="presentation" aria-label="SCHOOL"></i>
              </div>
              {institues.map((item) => (
                <motion.div className = "institutes">
                  <h2>{item.name}</h2> 
                  <em>{item.place}</em>
                  <h3>{item.course}</h3>
                  <em>{item.timeline}</em>
                  <h4>{item.grades}</h4>
                </motion.div>
              ))}
          </div>
        </motion.div>


        <motion.div className="about__right"
          initial = {{x: '100vw'}}
          animate = {{x: 0}}
          transition = {{type: "spring", stiffness: 150, duration: 1.5}}
        >
          <div className="skills">
            <div className="about__title">
              <h1>I Know A Few Things About</h1>
              <i class="em em-male-technologist" aria-role="presentation" aria-label=""></i>
            </div>
            <motion.div
              className = "skill__bars"
            >
            {skills.map((skill) => (
              <div>
              <h3>{skill.name}</h3>
              <span className = "skillbar"><span style = {{width: skill.eff}}></span></span>
              </div>
            ))}
            </motion.div>
          </div>
          <div className="hobbies">
            <div className="about__title">
            <h1>When I'm not hustling</h1>
            <i class="em em-man-getting-massage" aria-role="presentation" aria-label=""></i>
            </div>
            <h4>I'm probably doing one of these things</h4>
            <motion.div
              className = "hobbies__list"
            >
              {hobbies.map((hobby) => (
                <div className = "hobby__item">
                <div className="hobby__name">
                  <h2>{hobby.name}</h2><span>{hobby.icon}</span>
                </div>
                
                <p>{hobby.desc}</p>
                </div>
              ))}
            </motion.div>
          </div>
          <div className = "resume">
            <motion.button
              className = "resume__download"
              onClick = {resumeDownload}
            >RESUME
            </motion.button>
            <IconButton onClick = {resumeDownload}>
            <GetApp fontSize = "large" className = "resume-icon"/>
            </IconButton>
          </div>
        </motion.div>*/}
      
      </div>
      
      
    </motion.div>
  )
}

export default About
