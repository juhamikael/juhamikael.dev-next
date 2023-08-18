import { groq } from "next-sanity";

export const getSlugsFromProjectOrders = groq`
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
