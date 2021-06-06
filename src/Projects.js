import "./Project.css";
import { GitHub } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { ExternalLink } from "react-external-link";
import {
  LazyLoadImage,
  trackWindowScroll,
} from "react-lazy-load-image-component";

function Projects({ className, scrollPosition }) {
  const projects = require("./data/projects.json");
  return (
    <div className={`${className} project`} id="project">
      <div className="project__title">
        <h1>PROJECTS</h1>
      </div>
      <div className="project__container">
        {projects.projectItems.map((project, index) => (
          <div key={index} className="project__item">
            <h1 style={{ textAlign: "center" }}>{project.name}</h1>
            <div className="project__info">
              <ExternalLink href={project.url}>
                <LazyLoadImage
                  className="project__img"
                  alt={project.name}
                  src={project.img}
                  width={200}
                  height={180}
                  effect="blur"
                  scrollPosition={scrollPosition}
                />
              </ExternalLink>
              <div className="project__desc">
                <p>{project.desc}</p>
                <b>Tech Stack:</b>
                <ul>
                  {project.tech.map((item, techIndex) => (
                    <li key={techIndex}>{item}</li>
                  ))}
                </ul>
              </div>
              <IconButton>
                <ExternalLink href={project.gh}>
                  <GitHub fontSize="large" className="gh-icon-project" />
                </ExternalLink>
              </IconButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default trackWindowScroll(Projects);
