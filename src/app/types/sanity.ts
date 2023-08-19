import { PortableTextBlock } from "sanity";
import { BlogTags } from "@/../../sanity/lib/blogTags";
import { ProjectLanguagesObject } from "@/../../sanity/lib/projectLanguages";
import { languageTags } from "@/../sanity/lib/projectLanguages";
import type { Image } from "sanity";

// Blog
type TextBlockChild = {
  _key: string;
  _type: "span";
  marks: any[];
  text: string;
};

export type TextBlock = {
  _type: "block";
  style: "normal";
  _key: string;
  markDefs: any[];
  children: TextBlockChild[];
};

export interface IPost {
  body: PortableTextBlock[];
  slug: {
    current: string;
  };
  categories: [{ title: string }];
  publishedAt: Date;
  blogTags: typeof BlogTags;
  _updatedAt: Date;
  imageUrl: string;
  title: string;
  _id: string;
  mainImage: any;
  description: TextBlock[];
  keywords: TextBlock[];
}

export type ImageComponentProps = {
  asset: {
    _type: string;
    _ref: string;
  };
  _type: string;
  alt: string;
  _key: string;
};

export interface ImageComponent {
  value: ImageComponentProps;
  isInline: boolean;
}

export interface IBlogPageProps {
  params: {
    slug: string;
  };
}

// Portfolio
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

// Projects
export interface Projects {
  current: any;
  slug: { current: string };
  mainImage: Image;
  languageTags: typeof languageTags;
  priority: number;
  _id: string;
  title: string;
  date: Date | null;
  href: {
    github?: string;
    live?: string;
    download?: string;
  };
  body: TextBlock[];
  imageUrl: string | null;
}

export type BlockType = {
  children: Array<{ text: string }>;
};
