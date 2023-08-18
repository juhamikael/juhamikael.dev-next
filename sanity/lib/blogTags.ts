import { ProjectLanguagesObject } from "./projectLanguages";

const tagsForBlog = {
  cloudflare: "Cloudflare",
  security: "Security",
  apiRateLimiting: "API Rate Limiting",
  ddosProtection: "DDoS Protection",
  dns: "DNS",
  namecheap: "Namecheap",
  domain: "Domain",
} as const;

const concatenatedTags = {
  ...ProjectLanguagesObject,
  ...tagsForBlog,
};

export const BlogTags = Object.entries(concatenatedTags).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);
