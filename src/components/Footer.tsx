import { FC } from "react";
import StraightLine from "./StraightLine";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import type { IIconDetail } from "@/components/Icons";
import Icons from "@/components/Icons";

interface FooterProps {
  prop?: string;
  children?: React.ReactNode;
}

const FooterLinksObject = {
  contact: {
    href: "/contact",
    pageName: "Contact",
  },
  music: {
    href: "https://music.juhamikael.info",
    pageName: "Music",
  },
};

const Footer: FC<FooterProps> = ({}) => {
  const year = new Date().getFullYear();
  const iconDetails: IIconDetail[] = ["github", "linkedin", "discord"].map(
    (iconKey) => ({
      key: iconKey,
      link: "main",
    })
  );
  return (
    <footer className="mt-20 mb-5 ">
      <StraightLine opacity="border-card-foreground/10" />
      <div className="grid grid-cols-3">
        <section className="flex items-center font-black">
          <div>&copy; Juha Mikael {year}</div>
        </section>

        <section className="flex justify-center items-center">
          <Icons icons={iconDetails} />
        </section>
        <section className="flex justify-end">
          <div className="flex flex-col ">
            <Link
              className="hover:text-primary  flex items-center justify-center"
              href="/contact"
            >
              Contact
            </Link>
            <Link
              className="hover:text-primary  flex items-center justify-center"
              href="/https://music.juhamikael.info"
            >
              Music
            </Link>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
