import React from "react";
import Project from "../project/Project";
import { projectsList } from "../../helpers/projectsList";
import './projects.css'

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2 className="projects__title">Projects</h2>
        <ul className="projects__list">
          {projectsList.map((project, index) => {
            return (
              <Project
                title={project.title}
                subtitle={project.subtitle}
                img={project.img}
                href={project.href}
                key={index}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
