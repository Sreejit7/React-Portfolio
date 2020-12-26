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
  const skills= [
    {
      name: "C++",
      eff: "90%"
    },
    {
      name: "Java",
      eff: "85%"
    },
    {
      name: "C",
      eff: "75%"
    },
    {
      name: "React JS",
      eff: "75%",
    },
    {
      name: "CSS",
      eff: "75%"
    },
    {
      name: "JavaScript",
      eff: "50%"
    },
    {
      name: "SQL",
      eff: "70%"
    },
    {
      name: "GIT",
      eff: "65%"
    }
  ];
  const hobbies = [
    {
      name: "Watching Football",
      desc: "I'm a die-hard Real Madrid fan. When Madrid is playing, I'm always watching.",
      icon: <i class="em em-soccer" aria-role="presentation" aria-label="SOCCER BALL"></i>
    },
    { 
      name: "Painting",
      desc: "Whenever I get time, I love putting colours on things which otherwise seem dull.",
      icon: <i class="em em-art" aria-role="presentation" aria-label="ARTIST PALETTE"></i>
    }
  ]
  const resumeDownload = () => {
    FileSaver.saveAs("https://drive.google.com/file/d/1nln2EHepkQEKQfRpl0nOWjyI2TH_foD7/view?usp=sharing", "Sreejit De Resume.pdf");
  }
  return (
    <motion.div className = "about" id = "about">
      <motion.div className="about__left"
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
              src = "https://lh3.googleusercontent.com/wkZtmHmGKWKhQMZbUJsNEmr6arY3jjbfeCrPWXQlDfA_6yQ6nEZhf6PCPVCNOF-8TZegzSLZpCxNdtsikD9J9_jmrealrmolQgOssFrnitMguQBt0rfy10WSw9rGIp2KbOHGj1RpwI8fNyif_1pH5KqsZDekbQnyi5U8WoJA7WIDNMMjNtDUvceIGIT0tA7BpinHJxue_1d50uIfnhGS89gPHGqSVowc7Ob6Or9cNEsUqmMIyqnjHfZh5MhkqHZw9nF5gd2vD80YZSvfxajkQNexQ7iyYmiHr0c_PLqiMk1oUeUhGI88eHM9PQFofcWQaJEslKfHbrWLgj5Vzk7Uhn4adsmAHWzfBUawne1vlyUNj38KgdLweI1WVThuJyOz_1nxLN7blDlr6lZx3ZM3FYFAVr5BIVloRTQUvr9rcHNZHoBcKaFKTuug3_0i-YYxPOof9OKAT7GpXk6pQzV__qqE6OhkD2Lf7g6hAqYo_UAAbtE7be3q1uoqWfkYFeHEa9YnsDVmvFS01AzuCLEI2FEKI7eZ1NY-twsCrTXJ1fxvZFSVjFblLqE7r9Suer2s9Up4heY0V6gOHfJeXS1g8OAXKRkZ659nh-rZWsr4DVMKYq2OW2_2IKjYvrNZPP9vxdvkkve2v-v_NtyT3G_4P0Dty_Me3AcxpgP3T9fzLslN-P9WCEEDKLzhVEMZ=w506-h507-no?authuser=0"
              alt = ""
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
      </motion.div>
      
      
    </motion.div>
  )
}

export default About
