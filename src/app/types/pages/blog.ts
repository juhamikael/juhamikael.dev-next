import { PortableTextBlock } from "sanity";
import { BlogTags } from "@/../../sanity/lib/blogTags";

type TextBlockChild = {
  _key: string;
  _type: "span";
  marks: any[];
  text: string;
};

type TextBlock = {
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
