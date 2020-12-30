import React from 'react'
import './Project.css';
import {GitHub} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {ExternalLink} from 'react-external-link';
function Projects() {
  const projects = [
    {
      name: "COVID-CARE",
      desc: "COVID-CARE is a website designed for tracking the COVID-19 pandemic data like deaths, cases & recoveries, upcoming vaccine informtion & top headlines related to COVID-19.",
      tech: ["React JS", "disease.sh API", "GNews API"],
      url: "https://covid-19care.web.app/",
      gh: 'https://github.com/Sreejit7/COVID-care',
      img: "/images/covid-care.png"
    },
    {
      name: "HomeMade",
      desc: "HomeMade is an e-commerce website designed for selling all kinds of homemade products from delicious foods to aesthetic artworks.",
      tech: ["React JS", "Firebase", "Stripe Payments API"],
      url: "https://github.com/Sreejit7/Ecommerce-website",
      gh: "https://github.com/Sreejit7/Ecommerce-website",
      img: "/images/homemade.png"
    }
  ]
  return (
    <div className = "project" id = "project">
      <link href="https://emoji-css.afeld.me/emoji.css" rel="stylesheet"></link>
      <div className="project__title">
        <h1>Some of my works</h1>
        <i class="em em-male-office-worker" aria-role="presentation" aria-label=""></i>
      </div>
      <div className="project__container">
        {projects.map((project) => (
          <div className="project__item">
            <h1 style = {{textAlign:"center"}}>{project.name}</h1>
            <div className="project__info">
              <ExternalLink href = {project.url}>
              <img 
                className = "project__img"
                alt = {project.name}
                src = {project.img}
              />
              </ExternalLink>
              <div className="project__desc">
                  <p>{project.desc}</p>
                  <b>Technologies Used:</b>
                  <ul>
                    {project.tech.map((item) => (
                        <li>{item}</li>
                    ))}
                  </ul>
              </div>
                  <IconButton>
                    <ExternalLink href = {project.gh}>
                      <GitHub fontSize = "large" className = "gh-icon-project"/>
                    </ExternalLink>
                  </IconButton>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
