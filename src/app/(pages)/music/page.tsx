import Projects from "@/components/sanity/Projects";
import { FC } from "react";
import { cachedClient } from "@/../sanity/lib/client";

interface IMusicProps {
  prop?: string;
  children?: React.ReactNode;
}

export default async function Music() {
  return (
    <div>
      <div>Music</div>
    </div>
  );
}
