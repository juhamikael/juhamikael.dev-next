"use client";
import { FC, useState } from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import navItemStyles from "@/app/styles/underline-hover.module.css";
import ToggleNightmode from "./ToggleNightmode";
import type { IIconDetail } from "@/components/Icons";
import Icons from "@/components/Icons";

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
    href: "https://music.juhamikael.info",
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
      target={pageName !== "Music" ? "_self" : "_blank"}
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
        isOpen ? "block transform-none opacity-100" : "hidden"
      } lg:block block duration-500 ease-in-out transition-opacity`}
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
          className={`${isOpen ? "block" : "hidden"} lg:block `}
        />
      </div>
      <div className="lg:mx-auto items-center gap-x-4">
        <button
          className={`flex lg:hidden self-center mt-2`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {!isOpen && (
            <GiHamburgerMenu className="text-3xl hover:text-primary hover:ring ring-primary/20 rounded-lg" />
          )}
        </button>
        <div className="flex justify-center">
          {isOpen && (
            <button
              className={`flex lg:hidden items-center self-center mt-2 -ml-6`}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen && <AiOutlineClose className="text-lg mr-6" />}
            </button>
          )}
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
          <div className="flex items-center">
            <Icons isOpen={isOpen} icons={iconDetails} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
