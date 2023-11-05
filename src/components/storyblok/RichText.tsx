import { proseClassName } from "@/app/styles/prose";
import { cn } from "@/lib/utils";
import { render } from "storyblok-rich-text-react-renderer";
import { markdownToRichtext } from "storyblok-markdown-richtext";

function RichText({
  document,
  isLegal = false,
}: {
  document: unknown;
  isLegal?: boolean;
}) {
  return <div className={cn(proseClassName)}>{render(document)}</div>;
}

export default RichText;
