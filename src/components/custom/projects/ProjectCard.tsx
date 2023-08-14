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
import Image from "next/image";
import { AiTwotoneDownCircle } from "react-icons/ai";
import StraightLine from "../../StraightLine";
import type { SanityDocument } from "@sanity/client";
import _ from "lodash";

interface ProjectCardProps {
  projectName: string;
  project?: SanityDocument;
}
type LanguageTag = {
  _type: string;
  label: string;
  _key: string;
  value: string;
};

type BlockType = {
  children: Array<{ text: string }>;
};

const getWidthAndHeight = (url: string) => {
  if (!url) return { width: 300, height: 300 };
  const regex = /-(\d+)x(\d+)\.jpg$/;
  const match = url.match(regex);
  if (match) {
    const [_, width, height] = match;
    return { width, height };
  } else {
    return { width: 300, height: 300 };
  }
};

const ProjectCard: FC<ProjectCardProps> = ({ projectName, project }) => {
  if (!project) return <div>Loading...</div>;
  const GitHubIcon = IconsObject["github"].icon;
  const DownloadIcon = IconsObject["download"].icon;
  const LiveIcon = IconsObject["live"].icon;
  const languages: LanguageTag[] = project.languageTags;

  const { width, height } = getWidthAndHeight(project.imageUrl);
  return (
    <Card
      className={`bg-transparent rounded-xl border border-card-foreground/20 `}
    >
      <CardHeader className="flex-grow h-[5.5rem]">
        <CardTitle className="text-xl">{projectName}</CardTitle>
        <CardDescription className="text-xs flex gap-x-2">
          <AiTwotoneDownCircle className="text-primary" />
          {languages?.map((tag) => tag.label).join(", ") ?? "No Languages"}
        </CardDescription>
      </CardHeader>
      <CardContent className="w-fit">
        <StraightLine className="mb-2" />
        <div className="flex flex-col gap-x-10 mt-5 2xl:flex-row">
          <div className=" prose prose-p:text-sm prose-p:text-card-foreground">
            {project.body.map((block: BlockType) => (
              <p>{block.children[0].text}</p>
            ))}
          </div>
          {project.imageUrl && (
            <Image
              className="mt-4 2xl:mt-0 w-72 h-72"
              src={project.imageUrl || ""}
              alt=""
              width={width as number}
              height={height as number}
              priority={false}
            />
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          {project.href.github && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={project.href.github}
            >
              <GitHubIcon />
              GitHub
            </Link>
          )}
          {project.href.download && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={project.href.download}
            >
              <DownloadIcon />
              Download
            </Link>
          )}
          {project.href.live && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={project.href.live}
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
