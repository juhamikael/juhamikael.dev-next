import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectOrdering",
  title: "Project Ordering",
  type: "document",
  fields: [
    defineField({
      name: "orderedProjects",
      title: "Ordered Projects",
      description: "Drag and drop to rearrange the order of projects.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    }),
  ],
});
