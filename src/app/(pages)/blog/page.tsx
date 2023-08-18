import { FC } from "react";
import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";
import { getPosts } from "@/../../sanity/lib/quories/blog/queries";
import { cachedClient } from "@/../sanity/lib/client";
import { orderByDate, parseDate } from "@/lib/time";
import zoom from "@/app/styles/zoom.module.css";
import {
  Card,
  CardContent,
  CardDescriptionBlog as CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BsFillCircleFill } from "react-icons/bs";

import { PortableText } from "@portabletext/react";
import Link from "next/link";
import StraightLine from "@/components/StraightLine";
import type { IPost } from "@/app/types/pages/blog";

export const metadata: Metadata = {
  title: title.blog,
  description: description.blog,
  keywords: keywords.blog,
};

const BlogPage = async ({}) => {
  const posts = (await cachedClient(getPosts)) as IPost[];
  const data = orderByDate(posts.map((item) => item));
  return (
    <>
      {(data as IPost[]).map((item: IPost) => (
        <Card
          className={`mt-10  border-card-foreground/10 rounded-2xl mx-auto bg-transparent ${zoom.zoom} shadow-lg shadow-primary/20 drop-shadow-2xl `}
          key={item._id}
        >
          <Link href={`/blog/${item.slug.current}`}>
            <CardHeader>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription className="text-xs flex gap-x-2">
                <BsFillCircleFill className="text-primary" />
                <span className="truncate">
                  {item.blogTags?.map((tag) => tag.label).join(", ") ??
                    "No Languages"}
                </span>
              </CardDescription>
              <CardDescription className="flex flex-col md:lg:xl:2xl:flex-row gap-x-5">
                <div>
                  <span className="font-bold">Published:</span>{" "}
                  {item.publishedAt
                    ? parseDate(item.publishedAt).prettifyDate
                    : "Date not available"}
                </div>
                <div>
                  <span className="font-bold">Updated at</span>{" "}
                  {item.publishedAt
                    ? parseDate(item._updatedAt).prettifyDate
                    : "Date not available"}
                </div>
              </CardDescription>
            </CardHeader>
            <StraightLine className="mt-0 mb-6 border-card-foreground/10  " />
            <CardContent className="prose prose-p:text-sm prose-p:text-card-foreground">
              {item.description && <PortableText value={item.description} />}
              <p className="italic">Click to read more</p>
            </CardContent>
          </Link>
        </Card>
      ))}
    </>
  );
};

export default BlogPage;
