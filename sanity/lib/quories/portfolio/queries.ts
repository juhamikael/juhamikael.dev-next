import { groq } from "next-sanity";

export const getPortfolio = groq`*[_type == "portfolio" && defined(slug.current)]{
  title, slug, organization, startedAt, endedAt, titles, body, href, languageTags[],
  portfolio[]
}`;
