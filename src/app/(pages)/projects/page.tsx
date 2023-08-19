import ProjectCard from "@/components/custom/projects/ProjectCard";
import { getProjectsData } from "@/lib/projects";
import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";

export const metadata: Metadata = {
  title: title.projects,
  description: description.projects,
  keywords: keywords.projects,
};

export default async function ProjectsPage() {
  const projectsData = await getProjectsData();

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
