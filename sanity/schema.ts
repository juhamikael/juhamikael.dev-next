import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import post from "./schemas/post";
import author from "./schemas/author";
import projects from "./schemas/projects";
import about from "./schemas/about";
import projectOrdering from "./schemas/projectOrdering";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    about,
    projects,
    projectOrdering,
    post,
    author,
    category,
    blockContent,
  ],
};
