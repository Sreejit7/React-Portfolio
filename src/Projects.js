import React from 'react'
import './Project.css';
import {GitHub} from '@material-ui/icons';
import IconButton from '@material-ui/core/IconButton';
import {ExternalLink} from 'react-external-link';
function Projects({className}) {
  const projects = require('./data/projects.json');
  return (
    <div className = {`${className} project`} id = "project">
      <div className="project__title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project__container">
        {projects.projectItems.map((project) => (
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
