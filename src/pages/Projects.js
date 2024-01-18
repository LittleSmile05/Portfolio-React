import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import "../styles/Projects.css";

function Projects() {
  return (
    <div className="projects">
      <h1> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => (
          <ProjectItem key={idx} id={idx} name={project.name} image={project.image} />
        ))}
      </div>

      {/* GitHub link at the end */}
      <div className="github-link"  >
        <p>Check out more on GitHub:</p>
        <a href="https://github.com/LittleSmile05?tab=repositories" target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>
      </div>
    </div>
  );
}

export default Projects;
