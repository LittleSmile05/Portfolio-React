import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      
      {/* Wrap GitHubIcon with an anchor tag */}
      <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
        <GitHubIcon />
      </a>
    </div>
  );
}

export default ProjectDisplay;
