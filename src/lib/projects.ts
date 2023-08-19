import { projectsQuery } from "@/../sanity/lib/quories/projects/queries";
import { cachedClient } from "@/../sanity/lib/client";
import type { Projects } from "@/app/types/sanity";

const orderByPriority = (projects: Projects[]) => {
  return projects.sort((a, b) => {
    return a.priority - b.priority;
  });
};

export const getProjectsData = async () => {
  const newProjectsByPriority = await cachedClient(projectsQuery).then(
    (projects) => {
      return projects ? orderByPriority(projects) : [];
    }
  );
  return await Promise.all(newProjectsByPriority);
};
