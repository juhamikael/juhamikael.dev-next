import Link from "next/link";
import React, { FC } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import iconStyles from "@/app/styles/zoom.module.css";

interface SocialLink {
  icon: FC;
  links: Record<string, string>;
}

export const IconsObject: Record<string, SocialLink> = {
  github: {
    icon: FaGithub,
    links: {
      main: "https://github.com/juhamikael",
      repo1: "https://github.com/user/repo1",
      repo2: "https://github.com/user/repo2",
    },
  },
  linkedin: {
    icon: FaLinkedin,
    links: {
      main: "https://www.linkedin.com/in/juha-savikko/",
    },
  },
  instagram: {
    icon: FaInstagram,
    links: {
      main: "https://www.instagram.com/",
    },
  },
  discord: {
    icon: IoLogoDiscord,
    links: {
      main: "https://discord.gg/KgSJauHmWC",
    },
  },
  website: {
    icon: FaGlobe,
    links: {
      main: "https://www.mywebsite.com/",
    },
  },
};

export interface IIconDetail {
  key: string;
  link?: string;
  customLink?: string;
}

export interface IContactIconsProps {
  isOpen?: boolean;
  icons: IIconDetail[];
}

const Icons: FC<IContactIconsProps> = ({ icons, isOpen = false }) => {
  return (
    <div
      className={`ml-4 flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2 ${
        isOpen ? "block" : "hidden lg:flex"
      }`}
    >
      {icons.map(({ key, link, customLink }) => {
        const iconDetails = IconsObject[key];

        // In case the key doesn't exist in IconsObject
        if (!iconDetails) return null;
        // Div element
        const IconComponent: FC<React.HTMLAttributes<HTMLDivElement>> =
          iconDetails.icon;
        const href =
          customLink ||
          (link ? iconDetails.links[link] : iconDetails.links["main"]);

        return (
          <div key={`${key}-${link || "main"}`}>
            <Link className="hover:text-nav-font-hover" href={href}>
              <IconComponent className={`text-2xl ${iconStyles.iconZoom}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
