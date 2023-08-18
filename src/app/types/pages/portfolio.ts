import { ProjectLanguagesObject } from "@/../../sanity/lib/projectLanguages";
import { PortableTextBlock } from "sanity";

export interface Slug {
  _type: string;
  current: string;
}

export interface Titles {
  educationTitle?: string;
  workTitle?: string;
}

export interface Href {
  degreeProgramme?: string;
  companyUrl?: string;
  projectUrl?: string;
}

type PortfolioItemTag = {
  _type: string;
  label: string;
  _key: string;
  value: string;
};

export interface PortfolioItem {
  _id: string;
  title: string;
  slug: Slug;
  endedAt: Date;
  portfolio: PortfolioItemTag[];
  organization: string;
  startedAt: Date;
  titles: Titles;
  body: PortableTextBlock[];
  href: Href;
  languageTags: { label: keyof typeof ProjectLanguagesObject }[];
}
