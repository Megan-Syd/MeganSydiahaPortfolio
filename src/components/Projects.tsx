// import React from "react";
import projectsData from "./ProjectsData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <>
      <div
        id="projects-section"
        className="container m-md-5 my-sm-5 align-items-center justify-content-center"
      >
        <h2 className="accent-color-1 mb-4">Here's what I've been doing</h2>
        <div>
          {projectsData.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
