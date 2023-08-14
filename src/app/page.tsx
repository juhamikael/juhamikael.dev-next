import Image from "next/image";
import About from "@/app/(content)/about/about.mdx";
import profilePic from "@/../public/profile.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import StraightLine from "@/components/StraightLine";
import Link from "next/link";
import ProjectCard from "@/components/custom/homepage/ProjectCard";
import { PortableText } from "@portabletext/react";
import { getAbout } from "@/../sanity/lib/queries";
import { cachedClient, client } from "@/../sanity/lib/client";

export default async function Home() {
  const about = await cachedClient(getAbout);

  return (
    <div className="w-full 2xl:w-2/3 mx-auto">
      <Card className="bg-transparent border-none ">
        <CardHeader className="flex flex-col 2xl:flex-row items-center gap-10">
          <Image
            src={profilePic}
            alt="Profile picture"
            width={400}
            height={400}
            className="w-32 h-32 rounded-full ring ring-primary ring-0.5 "
          />
          <div>
            <CardTitle>Hi, I'm Juha Mikael</CardTitle>
            <CardDescription>
              Software Developer Student at{" "}
              <Link className="font-bold text-primary" href="">
                TAMK
              </Link>
            </CardDescription>
            <StraightLine />
            <div className="flex gap-x-4">
              <CardDescription>qewewq</CardDescription>
              <CardDescription>qewewq</CardDescription>
              <CardDescription>qewewq</CardDescription>
              <CardDescription>qewewq</CardDescription>
              <CardDescription>qewewq</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <div className="max-w-full prose prose-p:text-sm prose-p:text-card-foreground prose-a:text-primary prose-a:font-bold">
            <PortableText value={about[0].body.map((block) => block)} />
          </div>
        </CardContent>
      </Card>
      <StraightLine className="mb-6 mt-2" />
      <div className="grid 2xl:grid-cols-2 w-full gap-8">
        <ProjectCard
          languages={["tauri", "rust", "typescript", "react", "tailwindcss"]}
          projectName="File Organizer"
          iconKey="github"
          repoLink="repo1"
          readMoreLink="/projects#project1"
        />
        <ProjectCard
          languages={["nextjs", "typescript", "tailwindcss"]}
          projectName="juhamikael.dev"
          iconKey="github"
          repoLink="repo1"
          readMoreLink="/projects#project1"
        />
        <ProjectCard
          projectName="Macro Counter"
          languages={["react", "fastApi", "postgresql", "tailwindcss"]}
          iconKey="github"
          repoLink="repo1"
          readMoreLink="/projects#project1"
        />
        <ProjectCard
          projectName="Spotify Recommendations"
          languages={[
            "react",
            "typescript",
            "firebase",
            "tailwindcss",
            "spotifyApi",
          ]}
          iconKey="github"
          repoLink="repo1"
          readMoreLink="/projects#project1"
        />
      </div>
    </div>
  );
}
