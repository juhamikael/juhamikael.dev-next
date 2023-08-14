import { FC } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import { IconsObject } from "@/lib/icons";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { AiTwotoneDownCircle } from "react-icons/ai";
import StraightLine from "../../StraightLine";
import { ProjectLanguagesObject } from "../../../../sanity/lib/projectLanguages";
import { DownloadLinks, LiveLinks, GitHubLinks } from "@/lib/links";
type LanguageKeys = keyof typeof ProjectLanguagesObject;
import type { SanityDocument } from "@sanity/client";

interface ProjectCardProps {
  prop?: string;
  children?: React.ReactNode;
  projectName: string;
  languages: LanguageKeys[];
  project?: SanityDocument;
  slug?: string;
}

const ProjectCard: FC<ProjectCardProps> = ({
  children,
  projectName,
  languages,
  slug,
  project,
}) => {
  console.log(project);

  const GitHubIcon = IconsObject["github"].icon;
  const DownloadIcon = IconsObject["download"].icon;
  const LiveIcon = IconsObject["live"].icon;

  return (
    <Card
      className={`bg-transparent rounded-xl border border-card-foreground/20 `}
    >
      <CardHeader className="flex-grow h-[5.5rem]">
        <CardTitle className="text-xl">{projectName}</CardTitle>
        <CardDescription className="text-xs flex gap-x-2">
          <AiTwotoneDownCircle className="text-primary" />
          {languages
            .map((langKey) => ProjectLanguagesObject[langKey])
            .join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-fit">
        <StraightLine className="mb-2" />
        <div className="flex flex-col gap-x-10 mt-5 2xl:flex-row">
          <div className=" prose prose-p:text-sm prose-p:text-card-foreground">
            {children}
          </div>
          {imgSrc && (
            <Image
              className="mt-4 2xl:mt-0 w-72 h-72"
              src={imgSrc || ""}
              alt=""
            />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          {repoKey !== "main" && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={githubHref}
            >
              <GitHubIcon />
              GitHub
            </Link>
          )}
          {downloadKey !== "main" && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={downloadHref}
            >
              <DownloadIcon />
              Download
            </Link>
          )}
          {liveKey !== "main" && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={liveHref}
            >
              <LiveIcon />
              Live
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
