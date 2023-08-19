import { groq } from "next-sanity";

export const projectsQuery = groq`*[_type == "projects" && defined(slug.current)]{
    _id, title, slug, date, body, href, mainImage, languageTags[], priority,
    "imageUrl": mainImage.asset->url
  }`;

// Get a single project by its slug
export const projectQuery = groq`*[_type == "projects" && slug.current == $slug][0]{ 
    _id, title, slug, date, body, href, mainImage, languageTags[], priority,
    "imageUrl": mainImage.asset->url
  }`;

export const getOrder = groq`
  *[_type == "projectOrdering" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    orderedProjects[]->{
      slug,
      title
    }
  }
`;
