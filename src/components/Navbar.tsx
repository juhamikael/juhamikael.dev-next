"use client";
import { FC, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { IoLogoDiscord } from "react-icons/io5";

import navItemStyles from "@/app/styles/underline-hover.module.css";
import ToggleNightmode from "./ToggleNightmode";
import type { IIconDetail } from "@/lib/Icons";
import Icons from "@/lib/Icons";

interface NavbarProps {
  prop?: string;
  children?: React.ReactNode;
}

interface NavLinkProps {
  href: string;
  pageName: string;
}

interface INavLinksListProps {
  isOpen: boolean;
  links: (keyof typeof NavLinksObject)[];
}

const NavLinksObject = {
  home: {
    href: "/",
    pageName: "Home",
  },
  blog: {
    href: "/blog",
    pageName: "Blog",
  },
  projects: {
    href: "/projects",
    pageName: "Projects",
  },
  portfolio: {
    href: "/portfolio",
    pageName: "Portfolio",
  },
  skills: {
    href: "/skills",
    pageName: "Skills",
  },
  contact: {
    href: "/contact",
    pageName: "Contact",
  },
  music: {
    href: "/music",
    pageName: "Music",
  },
};

const NavLink: FC<NavLinkProps> = ({ href, pageName }) => {
  const pathName = usePathname();
  return (
    <Link
      style={{
        WebkitFontSmoothing: "antialiased",
        MozOsxFontSmoothing: "grayscale",
      }}
      href={href}
      className={`hover:text-nav-font-hover text-sm ${
        pathName === href ? "text-nav-font font-bold " : ""
      } ${navItemStyles.underlineHover}`}
    >
      {pageName}
    </Link>
  );
};

const NavLinksList: FC<INavLinksListProps> = ({ links, isOpen }) => {
  return (
    <div
      className={`flex flex-col space-y-2 lg:flex-row lg:space-x-6 lg:justify-center lg:w-full ${
        isOpen ? "block" : "hidden"
      } lg:block`}
    >
      {links.map((linkKey) => {
        const { href, pageName } = NavLinksObject[linkKey];
        return <NavLink href={href} pageName={pageName} key={linkKey} />;
      })}
    </div>
  );
};

const Navbar: FC<NavbarProps> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Define the icons you want to display
  const iconDetails: IIconDetail[] = ["github", "linkedin", "discord"].map(
    (iconKey) => ({
      key: iconKey,
      link: "main",
    })
  );

  return (
    <nav className="p-4 flex flex-col lg:flex-row lg:items-center lg:mx-20">
      <div className="fixed right-0 p-4 top-0">
        <ToggleNightmode
          className={`${isOpen ? "block" : "hidden"} lg:block`}
        />
      </div>
      <div className="flex justify-center lg:mx-auto items-center space-x-4">
        <button
          className={`lg:hidden self-center mt-2`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen ? (
            <GiHamburgerMenu className="text-2xl" />
          ) : (
            <AiOutlineClose className="text-2xl" />
          )}
        </button>
        <NavLinksList
          isOpen={isOpen}
          links={[
            "home",
            "blog",
            "projects",
            "portfolio",
            "skills",
            "contact",
            "music",
          ]}
        />
        <Icons isOpen={isOpen} icons={iconDetails} />
      </div>
    </nav>
  );
};

export default Navbar;
