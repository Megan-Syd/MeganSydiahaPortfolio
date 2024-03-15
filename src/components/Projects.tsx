// import React from "react";
import projectsData from "./ProjectsData";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <>
      <div id="projects-section" className="container m-5">
        <h2 className="accent-color-1 m-5">Here's what I've been doing</h2>
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
