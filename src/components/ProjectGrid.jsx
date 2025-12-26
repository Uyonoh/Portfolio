import ProjectCard from "./ProjectCard";
import { projects } from "../lib/data"

function ProjectGrid() {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          title={project.title}
          image={project.image}
          link={project.link}
          alt={project.alt}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;