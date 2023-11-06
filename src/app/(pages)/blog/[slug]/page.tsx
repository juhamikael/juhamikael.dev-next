import { FC } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescriptionBlog as CardDescription,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { proseClassName } from "@/app/styles/prose";
import { BsFillCircleFill } from "react-icons/bs";
import { BiSolidChevronsLeft } from "react-icons/bi";
import StraightLine from "@/components/StraightLine";
import { FaPencilAlt } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Metadata } from "next";
import { parseDate } from "@/lib/time";
import { getAllByStory } from "@/lib/storyblok/getAllByStory";
import RichText from "@/components/storyblok/RichText";
import MarkdownComponent from "@/components/storyblok/Markdown";
import { BlogComponent } from "@/app/types/blog";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  let slug: string = params.slug;
  const { body } = await getAllByStory("blog");
  const post: BlogComponent = body.filter(
    (item: BlogComponent) => item.slug === slug
  )[0];

  try {
    const keywords = post.seo_keywords.map((child) => child);
    return {
      title: `JM | Blog | ${post.title}`,
      description: post.keywords.description,
      keywords: [...keywords, post.title],
    };
  } catch (error) {
    console.error(error);
    return {
      title: `JM | Blog | ${body[0].title}`,
      keywords: ["juha mikael", "blog", "storyblok", "nextjs", post.title],
      description: post.keywords.description,
    };
  }
}

interface IBlogPageProps {
  params: { slug: string };
}

const BlogPage: FC<IBlogPageProps> = async ({ params: { slug } }) => {
  const { body } = await getAllByStory("blog");
  const post = body.filter((item: BlogComponent) => item.slug === slug)[0];

  const prefer_markdown = Boolean(post.prefer_markdown);

  return (
    <div className="md:flex md:justify-center">
      <Card className="bg-transparent border border-transparent shadow-none w-full  ">
        <CardHeader className="py-0 mt-2">
          <CardTitle className="text-3xl md:lg:xl:2xl:text-3xl font-black">
            {post.title}
          </CardTitle>

          <CardDescription className="text-xs gap-2 items-center flex flex-wrap">
            {post.categories?.map((tag: string) => (
              <Badge
                key={tag}
                className="mr-2 w-fit flex items-center gap-x-2 p-2 rounded-2xl"
              >
                <BsFillCircleFill className="text-card-foreground" />
                {tag}
              </Badge>
            ))}
          </CardDescription>
          <CardDescription className="text-xs flex flex-col ">
            <StraightLine className="border-card-foreground/10 my-4 flex" />
            <span className="font-bold mt-1 flex gap-x-2 items-center">
              <FaPencilAlt className="inline-block" />
              <span>{"Published:"}</span>
              <span>
                {post.published_at
                  ? parseDate(post.published_at).prettifyDate
                  : "Date not available"}
              </span>
            </span>
            <span className="font-bold mt-1 flex gap-x-2 items-center">
              <FaPencilAlt className="inline-block" />
              <span>{"Last updated:"}</span>
              <span>
                {post.updated_at
                  ? parseDate(post.updated_at).prettifyDate
                  : "Date not available"}
              </span>
            </span>
            <StraightLine className="border-card-foreground/10 mt-4 flex" />
          </CardDescription>
        </CardHeader>
        <CardContent className={cn(proseClassName)}>
          {prefer_markdown ? (
            <MarkdownComponent content={post.body_markdown} />
          ) : (
            <RichText document={post.body_richtext} />
          )}
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
