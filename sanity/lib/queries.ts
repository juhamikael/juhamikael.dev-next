import { groq } from "next-sanity";

// Get all projects
export const projectsQuery = groq`*[_type == "projects" && defined(slug.current)]{
    _id, title, slug, date, body, href, mainImage, languageTags[],
    "imageUrl": mainImage.asset->url
  }`;

// Get a single project by its slug
export const projectQuery = groq`*[_type == "projects" && slug.current == $slug][0]{ 
    _id, title, slug, date, body, href, mainImage, languageTags[],
    "imageUrl": mainImage.asset->url
  }`;

export const getSlugs = groq`
  *[_type == "projectOrdering"]{
    _id,
    orderedProjects[]->{
      slug,
      title
    }
  }
`;

// Get all projects slugs
export const postProjectsQuery = groq`*[_type == "projects" && defined(slug.current)][]{
    "params": { "slug": slug.current }
  }`;

export const getAbout = groq`*[_type == "about" && defined(slug.current)][]{
  _id, title, slug, body, mainImage, "imageUrl": mainImage.asset->url, languageTags[]
}`;
