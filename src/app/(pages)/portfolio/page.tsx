import { getPortfolio } from "@/../../sanity/lib/quories/portfolio/queries";
import { cachedClient } from "@/../sanity/lib/client";
import { SanityDocument } from "next-sanity";
import type { PortfolioItem } from "@/app/types/sanity";
import { PortableText } from "@portabletext/react";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import StraightLine from "@/components/StraightLine";
import Link from "next/link";
import { isDateLaterThanNow, orderByDate, parseDate } from "@/lib/time";
import { Metadata } from "next";

interface CustomCardProps {
  data: SanityDocument<PortfolioItem>;
}

export const metadata: Metadata = {
  title: "Juha Mikael | Portfolio",
};

const PortfolioPage = async ({}) => {
  const portfolio = await cachedClient(getPortfolio);
  const data = orderByDate(portfolio.map((item: SanityDocument) => item));

  const workExperience = data.filter(
    (item): item is PortfolioItem =>
      "portfolio" in item && item.portfolio[0]?.value === "work-experience"
  );

  const education = data.filter(
    (item): item is SanityDocument =>
      "portfolio" in item && item.portfolio[0]?.value === "education"
  );

  return (
    <>
      <h1 className="text-xl md:lg:xl:2xl:text-3xl font-black">Education</h1>
      <StraightLine />
      {education.map((item) => (
        <EducationCard
          key={item._id}
          data={item as SanityDocument<PortfolioItem>}
        />
      ))}

      <h1 className="text-xl md:lg:xl:2xl:text-3xl font-black mt-10">
        Work Experience
      </h1>
      <StraightLine />
      {workExperience.map((item) => (
        <WorkExperienceCard
          key={item._id}
          data={item as SanityDocument<PortfolioItem>}
        />
      ))}
    </>
  );
};

const EducationCard: React.FC<CustomCardProps> = ({ data }) => {
  const { year: startYear } = parseDate(data.startedAt);
  const { year: endYear } = parseDate(data.endedAt);

  return (
    <Card className="bg-transparent border-none ">
      <CardHeader className="px-0 py-1">
        <Link
          className=" hover:text-primary"
          target="_blank"
          href={data.href.degreeProgramme || ""}
        >
          <div className="flex items-center gap-x-3">
            <BiLinkExternal className=" h-4 w-4 md:lg:xl:2xl:h-5 md:lg:xl:2xl:w-5" />
            <CardTitle className="text-sm md:lg:xl:2xl:text-2xl">
              {data.titles.educationTitle}
            </CardTitle>
          </div>
        </Link>
        <CardDescription>
          <Link
            className="text-primary hover:text-nav-font-hover font-bold"
            href={data.href.companyUrl || ""}
            target="_blank"
          >
            <span className="text-">{data.organization}</span>
            <span>
              {startYear}
              {" - "}
              {endYear}
              {isDateLaterThanNow(data.endedAt) && <span> (Expected)</span>}
            </span>
          </Link>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

const WorkExperienceCard: React.FC<CustomCardProps> = ({ data }) => {
  const { monthName: startMonth, year: startYear } = parseDate(data.startedAt);
  const { monthName: endMonth, year: endYear } = parseDate(data.endedAt);

  return (
    <Card className="bg-transparent border-none ">
      <CardHeader className="px-0 py-1">
        <Link
          className=" hover:text-primary"
          target="_blank"
          href={data.href.companyUrl || ""}
        >
          <div className="flex items-center gap-x-3">
            <BiLinkExternal className=" h-4 w-4 md:lg:xl:2xl:h-5 md:lg:xl:2xl:w-5" />

            <CardTitle className="text-sm md:lg:xl:2xl:text-2xl">
              {data.title}
            </CardTitle>
          </div>
        </Link>
        <CardDescription>
          {startMonth} {startYear}
          {" - "}
          {endMonth} {endYear}
        </CardDescription>
        <CardDescription className="text-xs flex gap-x-2">
          <BsFillCircleFill className="text-primary" />
          <span className="truncate">
            {data.languageTags?.map((tag) => tag.label).join(", ") ||
              "No Languages"}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 prose prose-p:text-sm prose-p:text-card-foreground prose-p:my-1.5">
        <PortableText value={data.body} />
      </CardContent>
      <StraightLine
        className="w-2/3 mt-2 mb-6 mx-auto"
        opacity="border-card-foreground/10"
      />
    </Card>
  );
};

export default PortfolioPage;
