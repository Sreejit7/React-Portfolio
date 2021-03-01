import React from 'react'
import {SiCplusplus, SiJava, SiJavascript, SiC, SiCss3, SiReact, SiGit, SiMysql, SiHtml5} from 'react-icons/si';
import {IconContext} from 'react-icons';

import './Skills.css';
const Skills = ({className}) => {
  const skills= [
    {
      name: "C++",
      eff: "90%",
      icon: <SiCplusplus color = "#2b5db1"/>
    },
    {
      name: "Java",
      eff: "85%",
      icon: <SiJava color = "#f59508"/>
    },
    {
      name: "C",
      eff: "75%",
      icon: <SiC color = "#6ab8c1"/>
    },
    {
      name: "React",
      eff: "75%",
      icon:<SiReact color = "#10e7e3" className = "react-icon"/>,
    },
    {
      name: "HTML",
      eff: "60%",
      icon:<SiHtml5 color = "#ff8921"/>
    },
    {
      name: "CSS",
      eff: "75%",
      icon: <SiCss3 color = "#0d44e2"/>
    },
    {
      name: "JavaScript",
      eff: "55%",
      icon: <SiJavascript color = "#ffbd0a"/>
    },
    {
      name: "SQL",
      eff: "70%",
      icon: <SiMysql color = "#a094eb"/>,
    },
    {
      name: "GIT",
      eff: "65%",
      icon: <SiGit color = "#df432a"/>
    }
  ];
  return (
    <IconContext.Provider value = {{className: 'skill-icon'}}>
    <>
    <div className = {`${className} skills`} id = 'skill'>
      <div className="skill__title">
        <h1>SKILLS</h1>
      </div>
      <div className="skill__area">
        {skills.map((skill) => (
              <div className="skill__item">
                <h2>{skill.name}</h2>
                  {skill.icon}
                <span className = "skillbar"><span style = {{width: skill.eff}}></span></span>
              </div>
            ))}
      </div>
      
      
    </div>
    </>
    </IconContext.Provider>
  )
}

export default Skills
