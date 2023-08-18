import { defineField, defineType } from "sanity";
import { PortfolioTags } from "../lib/portfolioTags";
import { ProjectLanguagesObject } from "../lib/projectLanguages";
const portfolioSections = Object.entries(PortfolioTags).map(([key, value]) => ({
  value: key,
  label: value,
}));

const languageTags = Object.entries(ProjectLanguagesObject).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);

export default defineType({
  name: "portfolio",
  title: "Portfolio",
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
      name: "organization",
      title: "Organization Name",
      type: "string",
      validation: (Rule) => Rule.required().error("missing title"),
    }),

    defineField({
      name: "startedAt",
      title: "Start Date",
      type: "datetime",
      validation: (Rule) => Rule.required().error("missing slug"),
    }),

    defineField({
      name: "endedAt",
      title: "End Date",
      type: "datetime",
      validation: (Rule) => Rule.required().error("missing slug"),
    }),

    defineField({
      title: "Titles",
      name: "titles",
      type: "object",
      description: "Website, GitHub etc",
      fields: [
        {
          title: "Work Title",
          name: "workTitle",
          type: "string",
        },
        {
          title: "Education Title",
          name: "educationTitle",
          type: "string",
        },
      ],
    }),

    defineField({
      name: "body",
      title: "Body",
      type: "blockContent",
      validation: (Rule) => Rule.required().error("missing body"),
    }),

    defineField({
      title: "Href",
      name: "href",
      type: "object",
      fields: [
        {
          title: "Project Url",
          name: "projectUrl",
          type: "string",
          description: "Website, GitHub etc",
        },
        {
          title: "Company Website",
          name: "companyUrl",
          placeholder: "https://example.com",
          description: "Website",
          type: "string",
        },
        {
          title: "Degree Programme",
          name: "degreeProgramme",
          placeholder: "https://example.com",
          description: "Link to degree programme",
          type: "string",
        },
      ],
    }),
    defineField({
      name: "portfolio",
      title: "Portfolio Section",
      type: "tags",
      options: {
        includeFromRelated: "portfolio",
        predefinedTags: portfolioSections,
      },
    }),
    defineField({
      name: "languageTags",
      title: "Used Languages",
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
