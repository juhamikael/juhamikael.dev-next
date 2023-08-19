import { defineField, defineType } from "sanity";
import { languageTags } from "../lib/projectLanguages";

export default defineType({
  name: "projects",
  title: "Projects",
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
      title: "Href",
      name: "href",
      type: "object",
      fields: [
        {
          title: "Github",
          name: "github",
          type: "string",
          description:
            "Enter the Github repository eg. github.com/username/repo",
        },
        {
          name: "live",
          title: "Live Url",
          placeholder: "https://example.com",
          type: "string",
        },
        {
          name: "download",
          title: "Download Url",
          placeholder: "https://example.com",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "languageTags",
      title: "Tags",
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
