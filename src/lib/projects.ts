import { projectQuery } from "@/../sanity/lib/quories/projects/queries";
import { getOrder } from "@/../sanity/lib/quories/projects/queries";
import { cachedClient } from "@/../sanity/lib/client";
import type { Projects } from "@/app/types/sanity";

interface Project {
  slug: {
    current: string;
  };
  title: string;
}
export const getProjectsData = async (slug: string) => {
  const projects = await cachedClient(getOrder, { slug });
  const projectsDataPromises =
    projects && projects.orderedProjects
      ? projects.orderedProjects.map((project: Project) => {
          return cachedClient(projectQuery, {
            slug: project.slug.current,
            title: project.title,
          });
        })
      : [];

  return await Promise.all(projectsDataPromises);
};
