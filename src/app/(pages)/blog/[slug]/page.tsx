import { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescriptionBlog as CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { getPost } from "@/../sanity/lib/quories/blog/queries";
import { cachedClient } from "@/../sanity/lib/client";
import { PortableText } from "@portabletext/react";
import { proseClassName } from "@/app/styles/prose";
import { BsFillCircleFill } from "react-icons/bs";
import { BiSolidChevronsLeft } from "react-icons/bi";
import StraightLine from "@/components/StraightLine";
import { FaPencilAlt } from "react-icons/fa";
import type { IPost, IBlogPageProps } from "@/app/types/sanity";
import BlockImageComponent from "@/components/ImageComponent";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";
import { parseDate } from "@/lib/time";

const components = {
  types: {
    image: BlockImageComponent,
  },
};

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let slug: string = params.slug;
  let post = (await cachedClient(getPost, { slug: slug })) as IPost;

  try {
    const keywords = post.keywords[0].children.map((child) => child.text);
    const BlogDescription = post.description[0].children.map(
      (child) => child.text
    );
    return {
      title: `JM | Blog | ${post.title}`,
      description: BlogDescription[0],
      keywords: [...keywords, ` ${post.categories[0].title}`],
    };
  } catch (error) {
    console.error(error);
    return {
      title: `JM | Blog | ${post.title}`,
      keywords: [
        "juha mikael",
        "blog",
        "sanity",
        "nextjs",
        post.categories[0].title,
      ],
    };
  }
}

const BlogPage: FC<IBlogPageProps> = async ({ params: { slug } }) => {
  const post = (await cachedClient(getPost, { slug: slug })) as IPost;

  return (
    <div className="md:flex md:justify-center">
      <Card className="bg-transparent border border-transparent shadow-none w-full md:w-2/3 ">
        <CardHeader className="py-0 mt-2">
          <CardTitle className="text-3xl md:lg:xl:2xl:text-3xl font-black">
            {post.title}
          </CardTitle>

          <CardDescription className="text-xs gap-2 items-center flex flex-wrap">
            {post.blogTags?.map((tag) => (
              <Badge
                key={tag.label}
                className="mr-2 w-fit flex items-center gap-x-2 p-2 rounded-2xl"
              >
                <BsFillCircleFill className="text-card-foreground" />
                {tag.label}
              </Badge>
            ))}
          </CardDescription>
          <CardDescription className="text-xs flex flex-col ">
            <StraightLine className="border-card-foreground/10 my-4 flex" />
            <span className="font-bold mt-1 flex gap-x-2 items-center">
              <FaPencilAlt className="inline-block" />
              <span>{"Published:"}</span>
              <span>
                {post.publishedAt
                  ? parseDate(post.publishedAt).prettifyDate
                  : "Date not available"}
              </span>
            </span>
            <span className="font-bold mt-1 flex gap-x-2 items-center">
              <FaPencilAlt className="inline-block" />
              <span>{"Last updated:"}</span>
              <span>
                {post._updatedAt
                  ? parseDate(post._updatedAt).prettifyDate
                  : "Date not available"}
              </span>
            </span>
            <StraightLine className="border-card-foreground/10 mt-4 flex" />
          </CardDescription>
        </CardHeader>
        <CardContent className={cn("prose", proseClassName)}>
          <PortableText value={post.body} components={components} />
        </CardContent>
        <CardFooter>
          <Link
            href="/blog"
            target="_self"
            className=" font-bold flex items-center gap-x-4 text-primary hover:text-primary/80"
          >
            <BiSolidChevronsLeft />
            <span>Back to Posts</span>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default BlogPage;
