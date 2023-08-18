"use client";
import { FC } from "react";
import { SanityDocument } from "next-sanity";
import Link from "next/link";
interface ProjectsProps {
  prop?: string;
  children?: React.ReactNode;
}

export default function Projects({
  projects = [],
}: {
  projects: SanityDocument[];
}) {
  const title = projects.length === 1 ? `1 Post` : `${projects.length} Posts`;

  return (
    <main className="container mx-auto grid grid-cols-1 divide-y divide-blue-100">
      <h1 className="text-2xl p-4 font-bold">{title}</h1>
      {projects.map((project) => (
        <Link
          key={project._id}
          href={project.slug.current}
          className="p-4 hover:bg-blue-50"
        >
          <h2>{project.title}</h2>
        </Link>
      ))}
    </main>
  );
}
