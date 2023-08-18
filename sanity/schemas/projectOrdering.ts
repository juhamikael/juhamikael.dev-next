import { defineField, defineType } from "sanity";

export default defineType({
  name: "projectOrdering",
  title: "Ordering",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "orderedProjects",
      title: "Ordered Projects",
      description: "Drag and drop to rearrange the order of projects.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
    }),
  ],
});
