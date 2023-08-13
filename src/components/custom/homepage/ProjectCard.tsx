import { FC } from "react";
import {
  Card,
  CardDescription,
  CardFooter,
  CardTitle,
  CardHeader,
  CardContent,
} from "@/components/ui/card";
import zoom from "@/app/styles/zoom.module.css";
import { IconsObject } from "@/lib/icons";
import Link from "next/link";
import { AiTwotoneDownCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import StraightLine from "../../StraightLine";
import { ProjectLanguagesObject } from "@/lib/projectLanguages";

interface ProjectCardProps {
  prop?: string;
  children?: React.ReactNode;
  projectName: string;
  iconKey: keyof typeof IconsObject;
  repoLink?: string;
  languages: LanguageKeys[];
  readMoreLink: string;
}

type LanguageKeys = keyof typeof ProjectLanguagesObject;

const ProjectCard: FC<ProjectCardProps> = ({
  projectName,
  iconKey,
  repoLink = "main",
  languages,
  readMoreLink,
}) => {
  const iconDetails = IconsObject[iconKey];

  if (!iconDetails) return null;

  const IconComponent = iconDetails.icon;
  const href = iconDetails.links[repoLink] || iconDetails.links["main"];

  return (
    <Card className={`bg-transparent w-full rounded-xl ${zoom.zoom}`}>
      <CardHeader className="flex-grow h-[5.5rem]">
        <Link
          className="flex flex-row items-center gap-x-2 hover:text-primary transition-colors"
          href={href}
        >
          <IconComponent />
          <CardTitle className="text-lg">{projectName}</CardTitle>
        </Link>
        <CardDescription className="text-xs flex gap-x-2">
          <AiTwotoneDownCircle className="text-primary" />
          {languages
            .map((langKey) => ProjectLanguagesObject[langKey])
            .join(", ")}
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <StraightLine className="mb-2" />
      </CardContent>
      <CardFooter>
        <Link
          className="text-muted-foreground text-sm hover:text-nav-font-hover transition-colors "
          href={readMoreLink}
        >
          Read More
          <BsArrowRightCircleFill className="inline-block ml-1" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
