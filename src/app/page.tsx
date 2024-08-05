import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescriptionDiv,
} from "@/components/ui/card";
import StraightLine from "@/components/StraightLine";
import ProjectCard from "@/components/custom/projects/ProjectCard";
import zoom from "@/app/styles/zoom.module.css";
import { getImageWidthAndHeight } from "@/lib/utils";
import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";
import { getAllByStory } from "@/lib/storyblok/getAllByStory";
import RichText from "@/components/storyblok/RichText";
import { ProjectData } from "./types/project";
import { UserInfo } from "./types/userInfo";
export const metadata: Metadata = {
  title: title.home,
  description: description.home,
  keywords: keywords.home,
};

export default async function Home() {
  const { body: story } = await getAllByStory("landing-page");

  console.log(story)

  const projects = story.filter(
    (block: ProjectData) => block.component === "project"
  );

  const filteredUserInfo = story.filter(
    (block: UserInfo) => block.component === "user_info"
  );

  const userInfo = filteredUserInfo[0];
  const { width, height } = getImageWidthAndHeight(userInfo.profile.filename);

  return (
    <div className="w-full 2xl:w-2/3 mx-auto">
      <Card className="bg-transparent border-none ">
        <CardHeader className="flex flex-col 2xl:flex-row items-center gap-10">
          <Image
            src={userInfo.profile.filename}
            alt="Profile picture"
            width={width as number}
            height={height as number}
            className="h-60 w-60 rounded-xl object-cover ring ring-primary/10"
          />
          <div>
            <CardTitle>{`Hi, I'm ${userInfo?.name}`}</CardTitle>
            <CardDescriptionDiv>
              <RichText bio document={userInfo?.description} />
            </CardDescriptionDiv>
            <StraightLine />
            <div className="max-w-full prose prose-p:text-sm prose-p:my-0 prose-p:text-card-foreground prose-a:text-primary prose-a:font-bold">
              <RichText bio document={userInfo?.bio} />
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0"></CardContent>
      </Card>
      <StraightLine className="mb-6 mt-2 border-card-foreground/20" />
      <h1 className="text-card-primary font-black text-2xl ">
        {"Things I've built"}
      </h1>
      {projects.slice(0, 4).map((project: ProjectData) => (
        <ProjectCard
          className={`my-4 ${zoom.zoom}`}
          projectName={project.title}
          key={project.title}
          project={project}
          showBody={false}
          showImage={false}
          showHrefButtons={false}
          showReadMore
        />
      ))}
    </div>
  );
}
