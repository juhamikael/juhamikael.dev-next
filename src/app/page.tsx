import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import StraightLine from "@/components/StraightLine";
import ProjectCard from "@/components/custom/projects/ProjectCard";
import { PortableText } from "@portabletext/react";
import { getAbout } from "../../sanity/lib/quories/home/quories";
import { cachedClient } from "@/../sanity/lib/client";
import { getProjectsData } from "@/lib/projects";
import linkComponent from "@/components/portableText";
import type { BlockType } from "@/app/types/projects";
import zoom from "@/app/styles/zoom.module.css";

import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";

export const metadata: Metadata = {
  title: title.home,
  description: description.home,
  keywords: keywords.home,
};

export default async function Home() {
  const about = await cachedClient(getAbout);
  const projects = await getProjectsData("landing-page-project-order");
  const { width, height } = about[0].imageUrl;

  return (
    <div className="w-full 2xl:w-2/3 mx-auto">
      <Card className="bg-transparent border-none ">
        <CardHeader className="flex flex-col 2xl:flex-row items-center gap-10">
          <Image
            src={about[0].imageUrl}
            alt="Profile picture"
            width={width as number}
            height={height as number}
            className="h-40 w-40 rounded-full object-cover ring ring-primary/25"
          />
          <div>
            <CardTitle>{"Hi, I'm Juha Mikael"}</CardTitle>
            <CardDescription>
              Software Developer Student at{" "}
              <Link
                className="font-bold text-primary"
                href="https://www.tuni.fi/en/study-with-us/software-engineering"
                target="_blank"
              >
                TUNI
              </Link>
            </CardDescription>
            <StraightLine />
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <div className="max-w-full prose prose-p:text-sm prose-p:my-0 prose-p:text-card-foreground prose-a:text-primary prose-a:font-bold">
            <PortableText
              value={about[0].body.map((block: BlockType) => block)}
              components={linkComponent}
            />
          </div>
        </CardContent>
      </Card>
      <StraightLine className="mb-6 mt-2" />
      <div className="grid 2xl:grid-cols-2 w-full gap-8">
        {projects.map((project) => (
          <ProjectCard
            className={zoom.zoom}
            projectName={project.title}
            key={project.slug}
            project={project}
            showBody={false}
            showImage={false}
            showHrefButtons={false}
            showReadMore
          />
        ))}
      </div>
    </div>
  );
}
