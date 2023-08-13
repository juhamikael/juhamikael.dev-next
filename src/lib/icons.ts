import { FaGithub, FaLinkedin, FaInstagram, FaGlobe } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import { AiOutlineDownload } from "react-icons/ai";
import { HiOutlinePresentationChartBar } from "react-icons/hi";
import { FC } from "react";
import {
  DiscordLinks,
  GitHubLinks,
  DownloadLinks,
  InstagramLinks,
  LinkedInLinks,
  LiveLinks,
  WebsiteLinks,
} from "@/lib/links";
interface LinkDetails {
  main: string;
  [key: string]: string | undefined;
}

interface SocialLink {
  icon: FC;
  links: LinkDetails;
}

export const IconsObject: Record<string, SocialLink> = {
  github: {
    icon: FaGithub,
    links: GitHubLinks,
  },
  linkedin: {
    icon: FaLinkedin,
    links: LinkedInLinks,
  },
  instagram: {
    icon: FaInstagram,
    links: InstagramLinks,
  },
  discord: {
    icon: IoLogoDiscord,
    links: DiscordLinks,
  },
  website: {
    icon: FaGlobe,
    links: WebsiteLinks,
  },
  download: {
    icon: AiOutlineDownload,
    links: DownloadLinks,
  },
  live: {
    icon: HiOutlinePresentationChartBar,
    links: LiveLinks,
  },
} as const;
