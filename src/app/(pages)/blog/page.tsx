import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";
import { parseDate } from "@/lib/time";
import zoom from "@/app/styles/zoom.module.css";
import {
  Card,
  CardContent,
  CardDescriptionBlog as CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsFillCircleFill } from "react-icons/bs";

import Link from "next/link";
import StraightLine from "@/components/StraightLine";
import { getAllByStory } from "@/lib/storyblok/getAllByStory";
import RichText from "@/components/storyblok/RichText";
import { BlogComponent } from "@/app/types/blog";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: title.blog,
  description: description.blog,
  keywords: keywords.blog,
};

const BlogPage = async ({}) => {
  const { body: blogs } = await getAllByStory("blog");

  return (
    <>
      {blogs.map((item: BlogComponent) => (
        <Card
          className={cn(
            "mt-10  border-card-foreground/10 rounded-2xl mx-auto bg-transparent",
            zoom.zoom,
            "cursor-pointer"
          )}
          key={item._uid}
        >
          <Link href={`/blog/${item.slug}`}>
            <CardHeader>
              <CardTitle className={cn("cursor-pointer")}>
                {item.title}
              </CardTitle>
              <CardDescription className="text-xs flex gap-x-2">
                <BsFillCircleFill className="text-primary" />
                <span className="truncate">
                  {item.categories?.map((tag) => tag).join(", ") ??
                    "No Languages"}
                </span>
              </CardDescription>
              <CardDescription className="flex flex-col md:lg:xl:2xl:flex-row gap-x-5">
                <div>
                  <span className="font-bold">Published:</span>{" "}
                  {item.published_at
                    ? parseDate(new Date(item.published_at)).prettifyDate
                    : "Date not available"}
                </div>
                <div>
                  <span className="font-bold">Updated at</span>{" "}
                  {item.updated_at
                    ? parseDate(new Date(item.updated_at)).prettifyDate
                    : "Date not available"}
                </div>
              </CardDescription>
            </CardHeader>
            <StraightLine className="mt-0 mb-6 border-card-foreground/10  " />
            <CardContent
              className={cn(
                "prose prose-p:text-sm prose-p:text-card-foreground"
              )}
            >
              {item.description && <RichText document={item.description} />}
              <p className="italic cursor-pointer">Click to read more</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default BlogPage;
