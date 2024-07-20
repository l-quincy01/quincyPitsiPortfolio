import { FaCode } from "react-icons/fa";
import { projectsData } from "../../data/projects";
import ProjectSingle from "./ProjectSingle";

const ProjectsGrid = () => {
  const projects = projectsData;

  return (
    <section id="projects" className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className=" gap-2 flex flex-row items-center  justify-center  font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects <FaCode />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {projects.map((project) => (
          <ProjectSingle
            title={project.title}
            link={project.link}
            description={project.description}
            image={project.img}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
