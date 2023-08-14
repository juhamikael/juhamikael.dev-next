import { defineField, defineType } from "sanity";
import { ProjectLanguagesObject } from "../lib/projectLanguages";
const languageTags = Object.entries(ProjectLanguagesObject).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);

export default defineType({
  name: "about",
  title: "About",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().error("missing title"),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("missing slug"),
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("missing body"),
    }),
    defineField({
      name: "mainImage",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
        },
      ],
    }),

    defineField({
      name: "languageTags",
      title: "Language Tags",
      type: "tags",
      options: {
        includeFromRelated: "languageTags",
        predefinedTags: languageTags,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
