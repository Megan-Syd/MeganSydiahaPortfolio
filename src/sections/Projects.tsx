import projectsData from "../data/ProjectsData";
import ProjectItem from "../components/ProjectItem";
import SectionContainer from "../components/SectionContainer";

const Projects = () => {
  return (
    <SectionContainer id="projects-section" title="Here's what I've been doing">
      <div>
        {projectsData.map((project, index) => (
          <ProjectItem key={index} project={project} />
        ))}
      </div>
    </SectionContainer>
  );
};

export default Projects;
