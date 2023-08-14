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
//

interface IProjectsProps {
  prop?: string;
  children?: React.ReactNode;
}

const ProjectsPage: FC<IProjectsProps> = ({}) => {
  return (
    <div className="flex flex-col gap-y-10">
      <ProjectCard
        projectName="File Organizer"
        languages={["tauri", "rust", "react", "typescript", "tailwindcss"]}
        imgSrc={fileOrganizerImg}
        repoKey="fileOrganizer"
        downloadKey="fileOrganizer"
      >
        <FileOrganizerText />
      </ProjectCard>
      <ProjectCard
        projectName="dev.juhamikael.info"
        languages={["nextjs", "typescript", "tailwindcss", "shadcn", "mdx"]}
        repoKey="juhamikaelDev"
      >
        <JuhaMikaelDev />
      </ProjectCard>

      <ProjectCard
        projectName="Spotify Recommendations"
        languages={[
          "react",
          "typescript",
          "spotifyApi",
          "firebase",
          "tailwindcss",
        ]}
        repoKey="spotifyRecommendations"
        liveKey="spotifyRecommendations"
      >
        <SpotifyRecommendations />
      </ProjectCard>

      <ProjectCard
        // Python, MySQL, NextJS, Prisma, tRPC, TypeScript, TailwindCSS, Vercel
        languages={[
          "python",
          "mysql",
          "nextjs",
          "prisma",
          "trpc",
          "typescript",
          "tailwindcss",
          "vercel",
        ]}
        projectName="Solita - Dev Academy 2023 Exercise"
        repoKey="juhamikaelDev"
      >
        <SolitaDev />
      </ProjectCard>

      <ProjectCard
        // React.js, Python, FastAPI, PostgreSQL, TailwindCSS
        languages={["react", "python", "fastApi", "postgresql", "tailwindcss"]}
        projectName="Macro Counter"
        repoKey="juhamikaelDev"
      >
        <MacroCounter />
      </ProjectCard>

      <ProjectCard
        // React.js, Python, FastAPI, PostgreSQL, TailwindCSS
        languages={["csharp"]}
        projectName="FL Studio - Stem Renamer"
        repoKey="juhamikaelDev"
      >
        <FLStudioStemRenamer />
      </ProjectCard>

      <ProjectCard
        // React.js, Python, FastAPI, PostgreSQL, TailwindCSS
        languages={["react", "python", "fastApi", "postgresql", "tailwindcss"]}
        projectName="Make New Folder"
        repoKey="juhamikaelDev"
      >
        <MakeNewFolder />
      </ProjectCard>

      <ProjectCard
        // React.js, Python, FastAPI, PostgreSQL, TailwindCSS
        languages={["python"]}
        projectName="Unzipper"
        repoKey="juhamikaelDev"
      >
        <Unzipper />
      </ProjectCard>
    </div>
  );
};

export default ProjectsPage;
