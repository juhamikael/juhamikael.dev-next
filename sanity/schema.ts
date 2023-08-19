import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import blog from "./schemas/blog";
import author from "./schemas/author";
import projects from "./schemas/projects";
import about from "./schemas/about";
import portfolio from "./schemas/portfolio";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [about, projects, blog, author, category, blockContent, portfolio],
};
