import ProjectCard from "@/components/custom/projects/ProjectCard";
import { getProjectsData } from "@/lib/projects";
export default async function ProjectsPage() {
  const projectsData = await getProjectsData("projects-page-order");

  return (
    <div className="flex flex-col gap-y-10">
      {projectsData.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          projectName={project.title}
        />
      ))}
    </div>
  );
}
