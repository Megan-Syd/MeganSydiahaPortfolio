import React from "react";

interface Project {
  date: string;
  name: string;
  description: string;
  technologies: string;
  link: string;
  image: string;
}

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => {
  return (
    <>
      <div className="project-item container">
        <div className="row align-items-center">
          <div className="col-md d-flex flex-column">
            <img
              className="section-box"
              src={project.image}
              alt={project.name}
              style={{ maxHeight: "300px", maxWidth: "auto" }}
            />
          </div>
          <div className="col-md d-flex flex-column section-box my-3 p-3">
            <h4 className="accent-color-1">{project.name}</h4>
            <p>{project.description}</p>
            <p>
              <span className="accent-color-1">Date created: </span>
              {project.date}
            </p>
            <p>
              <span className="accent-color-1">Languages + Platforms:</span>{" "}
              {project.technologies}
            </p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              See it on GitHub
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectItem;
