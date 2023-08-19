export const ProjectLanguagesObject = {
  typescript: "TypeScript",
  javascript: "JavaScript",
  react: "React",
  nextjs: "Next.js",
  nodejs: "Node.js",
  python: "Python",
  tailwindcss: "TailwindCSS",
  tauri: "Tauri",
  rust: "Rust",
  csharp: "C#",
  cPlusPlus: "C++",
  c: "C",
  java: "Java",

  // API Frameworks
  fastApi: "FastAPI",
  express: "Express",
  trpc: "trpc",
  // Apis
  spotifyApi: "Spotify API",

  //database
  mongodb: "MongoDB",
  postgresql: "PostgreSQL",
  firebase: "Firebase",
  redis: "Redis",
  mysql: "MySQL",
  sqlite: "SQLite",

  //DBaas
  supabase: "Supabase",
  fauna: "Fauna",
  //ORMs
  prisma: "Prisma",
  kysely: "Kysely",
  drizzle: "Drizzle",

  // Cloud Host
  vercel: "Vercel",

  // CMS
  sanity: "Sanity",

  //other
  shadcn: "Shadcn/ui",
  xml: "XML",
  mdx: "MDX",
  sonarqube: "SonarQube",
  jenkins: "Jenkins",
  git: "Git",
  unity: "Unity",
} as const;

export const languageTags = Object.entries(ProjectLanguagesObject).map(
  ([key, value]) => ({
    value: key,
    label: value,
  })
);
