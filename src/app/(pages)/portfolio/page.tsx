import type {
  Certificate,
  Education,
  WorkExperience,
} from "@/app/types/portfolio";
import { BiLinkExternal, BiDownload as Download } from "react-icons/bi";
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
import { isDateLaterThanNow, parseDate } from "@/lib/time";
import { Metadata } from "next";
import { getAllByStory } from "@/lib/storyblok/getAllByStory";
import RichText from "@/components/storyblok/RichText";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const metadata: Metadata = {
  title: "Juha Mikael | Portfolio",
};

const PortfolioPage = async ({}) => {
  const { body: portfolio } = await getAllByStory("portfolio");

  const certificates = portfolio.filter(
    (item: Certificate) => item.component === "new_certificate"
  );

  const workExperience = portfolio.filter(
    (item: WorkExperience) => item.portfolio_section === "work_experience"
  );

  const education = portfolio.filter(
    (item: Education) => item.portfolio_section === "education"
  );

  return (
    <>
      <h1 className="text-xl md:lg:xl:2xl:text-3xl font-black">Education</h1>
      <StraightLine />
      {education.map((item: Education) => (
        <EducationCard key={item._uid} {...item} />
      ))}

      <h1 className="text-xl md:lg:xl:2xl:text-3xl font-black mt-10">
        Work Experience
      </h1>
      <StraightLine />
      {workExperience.map((item: WorkExperience) => (
        <WorkExperienceCard key={item._uid} {...item} />
      ))}

      <h1 className="text-xl md:lg:xl:2xl:text-3xl font-black mt-10">
        Certificates
      </h1>
      <StraightLine />

      <Table>
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="text-left">Course Name</TableHead>
            <TableHead className="text-center">Subject</TableHead>
            <TableHead className="text-center">Language</TableHead>
            <TableHead className="text-center">View</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {certificates.map((item: Certificate) => (
            <TableRow key={item._uid}>
              <TableCell className="text-left">{item.name}</TableCell>
              <TableCell className="text-center">{item.type}</TableCell>
              <TableCell className="text-center">
                {item.lang === "eng" ? "English" : "Finnish"}
              </TableCell>
              <TableCell className="flex justify-center">
                <Link
                  href={item.certificate.filename}
                  target="_blank"
                  className="flex flex-row text-primary items-center gap-x-4"
                >
                  <Download className="h-8 w-8" />
                  <span>Download</span>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

const EducationCard: React.FC<Education> = ({
  end_date,
  start_date,
  education_title,
  degress_programme,
  organization_name,
}) => {
  const { year: startYear } = parseDate(new Date(start_date));
  const { year: endYear } = parseDate(new Date(end_date));
  return (
    <Card className="bg-transparent border-none ">
      <CardHeader className={cn("px-0 py-1")}>
        <Link
          className=" hover:text-primary "
          target="_blank"
          href={degress_programme?.url || ""}
        >
          <div className="flex items-center gap-x-3 cursor-pointer">
            <BiLinkExternal className=" h-4 w-4 md:h-5 md:w-5" />
            <CardTitle className={cn("text-sm md:text-2xl cursor-pointer")}>
              {education_title}
            </CardTitle>
          </div>
        </Link>
        <CardDescription className={cn("text-primary font-bold")}>
          <span className="text-">{organization_name} </span>
          <span>
            {startYear}
            {" - "}
            {endYear}
            {isDateLaterThanNow(new Date(end_date)) && <span> (Expected)</span>}
          </span>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

const WorkExperienceCard: React.FC<WorkExperience> = ({
  start_date,
  end_date,
  company_website,
  title,
  used_languages,
  body: description,
}) => {
  const { monthName: startMonth, year: startYear } = parseDate(
    new Date(start_date)
  );
  const { monthName: endMonth, year: endYear } = parseDate(new Date(end_date));

  return (
    <Card className="bg-transparent border-none ">
      <CardHeader className="px-0 py-1">
        <Link
          className=" hover:text-primary"
          target="_blank"
          href={company_website?.url || ""}
        >
          <div className="flex items-center gap-x-3">
            <BiLinkExternal className=" h-4 w-4 md:h-5 md:w-5" />
            <CardTitle className={cn("text-sm md:text-2xl cursor-pointer")}>
              {title}
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
            {used_languages?.map((tag) => tag).join(", ") || "No Languages"}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0 prose prose-p:text-sm prose-p:text-card-foreground prose-p:my-1.5">
        <RichText document={description} />
      </CardContent>
      <StraightLine
        className="w-2/3 mt-2 mb-6 mx-auto"
        opacity="border-card-foreground/10"
      />
    </Card>
  );
};

export default PortfolioPage;
