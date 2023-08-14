import Projects from "@/components/sanity/Projects";
import { FC } from "react";
import { cachedClient } from "@/../sanity/lib/client";
import { projectsQuery } from "@/../sanity/lib/queries";

interface IMusicProps {
  prop?: string;
  children?: React.ReactNode;
}

export default async function Music() {
  const projects = await cachedClient(projectsQuery);
  return (
    <div>
      <Projects projects={projects} />
    </div>
  );
}
