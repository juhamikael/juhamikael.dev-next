import { proseClassName } from "@/app/styles/prose";
import { cn } from "@/lib/utils";
import { render } from "storyblok-rich-text-react-renderer";
function RichText({
  document,
  bio = false,
}: {
  document: unknown;
  bio?: boolean;
}) {
  return (
    <>
      {!bio ? (
        <div className={cn(proseClassName)}>{render(document)}</div>
      ) : (
        <div className={cn("prose-a:text-primary prose-a:font-bold")}>
          {render(document)}
        </div>
      )}
    </>
  );
}

export default RichText;
