import { cn } from "@/lib/utils";

export const prose = {
  p: "prose-p:text-sm prose-p:text-card-foreground prose-p:my-4 prose-p:min-w-fit prose-p:max-w-fit ",
  a: "prose-a:text-primary",
  strong: "prose-strong:font-bold prose-strong:text-card-foreground",
  h1: "prose-h1:text-3xl prose-h1:font-extrabold prose-h1:my-4 prose-h1:text-card-foreground",
  h2: "prose-h2:text-2xl prose-h2:font-extrabold prose-h2:my-4 prose-h2:text-card-foreground",
  h3: "prose-h3:text-xl prose-h3:font-bold prose-h3:my-4 prose-h3:text-card-foreground",
  h4: "prose-h4:text-lg prose-h4:font-bold prose-h4:my-4 prose-h4:text-card-foreground",
  th: "prose-th:font-black prose-th:text-white prose-th:text-center",
  td: "prose-td:font-normal prose-td:text-white prose-td:text-center",
  li: "prose-li:list-decimal prose-li:text-sm prose-li:mx-1 prose-li:my-1.5 prose-li:text-card-foreground",
  ol: "prose-ol:list-decimal prose-ol:text-sm prose-ol:mx-1 prose-ol:my-1.5 prose-ol:text-card-foreground",
  blockquote:
    "prose-blockquote:font-serif prose-blockquote:text-xs prose-blockquote:text-base prose-blockquote:my-4 dark:prose-blockquote:text-card-foreground/30",
};

export const proseClassName = cn(...Object.values(prose));
