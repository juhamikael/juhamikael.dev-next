import { cn } from "@/lib/utils";

export const prose = {
  p: "prose-p:text-sm prose-p:text-card-foreground prose-p:my-4 prose-p:min-w-fit prose-p:max-w-fit ",
  a: "prose-a:text-primary",
  strong: "prose-strong:font-bold prose-strong:text-card-foreground",
  h1: "prose-h1:text-3xl prose-h1:font-extrabold prose-h1:my-4 prose-h1:text-card-foreground",
  h2: "prose-h2:text-2xl prose-h2:font-extrabold prose-h2:my-4 prose-h2:text-card-foreground",
  h3: "prose-h3:text-xl prose-h3:font-bold prose-h3:my-4 prose-h3:text-card-foreground",
  h4: "prose-h4:text-lg prose-h4:font-bold prose-h4:my-4 prose-h4:text-card-foreground",
  th: "prose-th:font-black prose-th:text-white prose-th:text-center prose-th:border-y prose-th:border-card-foreground/20 prose-th:bg-card-foreground prose-th:dark:text-black prose-th:light:text-white",
  td: "prose-td:font-normal prose-td:text-center prose-td:py-2",
  li: "prose-li:list-decimal prose-li:text-sm prose-li:mx-4 prose-li:my-1.5 prose-li:text-card-foreground",
  ol: "prose-ol:list-decimal prose-ol:text-sm prose-ol:mx-4 prose-ol:my-1.5 prose-ol:text-card-foreground",
  table: "prose-table:w-full prose-table:my-10",
  code: "prose-code:font-mono prose-code:text-sm prose-code:py-1  prose-code:text-card-foreground prose-code:font-bold prose-code:rounded-2xl prose-code:text-primary",
  hr: "prose-hr:my-10 prose-hr:border-card-foreground/20",
  blockquote:
    "prose-blockquote:text-xs prose-blockquote:my-4 dark:prose-blockquote:text-card-foreground/30",
};

export const proseClassName = cn(...Object.values(prose));
