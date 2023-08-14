import { FC } from "react";

import ProjectCard from "@/components/custom/projects/ProjectCard";
import fileOrganizerImg from "/public/projects/file-organizer.jpg";

// MDX content
import FileOrganizerText from "@/app/(content)/projects/fileOrganizer.mdx";
import JuhaMikaelDev from "@/app/(content)/projects/juhamikael-dev.mdx";
import SpotifyRecommendations from "@/app/(content)/projects/spotifyRecommendations.mdx";
import SolitaDev from "@/app/(content)/projects/solitaDev-2023.mdx";
import MacroCounter from "@/app/(content)/projects/macroCounter.mdx";
import FLStudioStemRenamer from "@/app/(content)/projects/flStudioStemRenamer.mdx";
import MakeNewFolder from "@/app/(content)/projects/makeNewFolder.mdx";
import Unzipper from "@/app/(content)/projects/unzipper.mdx";
import { projectQuery } from "@/../sanity/lib/queries";
import { getSlugs } from "@/../sanity/lib/queries";
import { cachedClient, client } from "@/../sanity/lib/client";

//

export default async function ProjectsPage() {
  const projects = await cachedClient(getSlugs);
  // console.log(projects[0]);

  const projectsDataPromises = projects[0].orderedProjects.map((project) => {
    return cachedClient(projectQuery, {
      slug: project.slug.current,
      title: project.title,
    });
  });

  const projectsData = await Promise.all(projectsDataPromises);
  // console.log(projects[0].orderedProjects);
  return (
    <div className="flex flex-col gap-y-10">
      {projectsData.map(async (project) => {
        return (
          <ProjectCard
            key={project.slug}
            project={await cachedClient(projectQuery, {
              slug: project.slug.current,
            })}
            projectName={project.title}
          />
        );
      })}
    </div>
  );
}
