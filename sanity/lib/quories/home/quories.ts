import { groq } from "next-sanity";
export const getAbout = groq`*[_type == "about" && defined(slug.current)][]{
    _id, title, slug, body, mainImage, "imageUrl": mainImage.asset->url, languageTags[]
  }`;
