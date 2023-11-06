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
import { BsFillCircleFill } from "react-icons/bs";
import StraightLine from "../../StraightLine";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { getImageWidthAndHeight } from "@/lib/utils";
import { cn } from "@/lib/utils";
import { prose } from "@/app/styles/prose";
import { ProjectData } from "@/app/types/project";
import RichText from "@/components/storyblok/RichText";

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  projectName: string;
  project?: ProjectData;
  showImage?: boolean;
  showBody?: boolean;
  showReadMore?: boolean;
  showHrefButtons?: boolean;
}
type LanguageTag = {
  _type: string;
  label: string;
  _key: string;
  value: string;
};

const ProjectCard: FC<ProjectCardProps> = ({
  className,
  projectName,
  project,
  showImage = true,
  showBody = true,
  showReadMore = false,
  showHrefButtons = true,
}) => {
  if (!project) return <div>Loading...</div>;
  const GitHubIcon = IconsObject["github"].icon;
  const DownloadIcon = IconsObject["download"].icon;
  const LiveIcon = IconsObject["live"].icon;
  const languages = project.language_tags;
  const { width, height } = getImageWidthAndHeight(project.image?.filename);
  return (
    <Card
      id={project.slug}
      className={cn(
        `bg-transparent rounded-xl border border-card-foreground/20 `,
        className ?? ""
      )}
    >
      <CardHeader className="flex-grow h-[5.5rem]">
        <CardTitle className="text-xl">{projectName}</CardTitle>

        <CardDescription className="text-xs flex gap-x-2">
          <BsFillCircleFill className="text-primary" />
          <span className="truncate">
            {languages?.map((tag) => tag).join(", ") ?? "No Languages"}
          </span>
        </CardDescription>
      </CardHeader>
      <StraightLine className="mb-2 border-card-foreground/20" />
      {showBody && (
        <CardContent className="w-fit">
          <div className="flex flex-col gap-x-10 mt-5 2xl:flex-row ">
            <RichText document={project.body} />
            {showImage && project.image?.filename && (
              <Image
                className="mt-4 2xl:mt-0 w-72 h-72"
                src={project.image.filename || ""}
                alt=""
                width={width as number}
                height={height as number}
                priority={false}
              />
            )}
          </div>
        </CardContent>
      )}
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          {showHrefButtons && project.github?.url && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={project.github.url}
            >
              <GitHubIcon />
              GitHub
            </Link>
          )}
          {showHrefButtons && project.download?.url && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={project.download.url}
            >
              <DownloadIcon />
              Download
            </Link>
          )}
          {showHrefButtons && project.live?.url && (
            <Link
              target="_blank"
              className="flex gap-x-2 items-center hover:text-primary transition-colors font-bold"
              href={project.live.url}
            >
              <LiveIcon />
              Live
            </Link>
          )}
          {showReadMore && (
            <Link
              className="text-muted-foreground text-sm hover:text-nav-font-hover transition-colors"
              href={`/projects#${project.slug}`}
            >
              Read More
              <BsArrowRightCircleFill className="inline-block ml-1" />
            </Link>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
