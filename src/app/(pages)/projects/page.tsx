import ProjectCard from "@/components/custom/projects/ProjectCard";
import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";
import { getAllByStory } from "@/lib/storyblok/getAllByStory";
import { ProjectData } from "@/app/types/project";
export const metadata: Metadata = {
  title: title.projects,
  description: description.projects,
  keywords: keywords.projects,
};

export default async function ProjectsPage() {
  const { body: projects } = await getAllByStory("projects");

  return (
    <div className="flex flex-col gap-y-10">
      {projects.map((project: ProjectData) => (
        <ProjectCard
          key={project._uid}
          project={project}
          projectName={project.title}
        />
      ))}
    </div>
  );
}
