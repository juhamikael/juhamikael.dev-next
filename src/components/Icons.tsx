import Link from "next/link";
import React, { FC } from "react";
import { IconsObject } from "@/lib/icons";

import iconStyles from "@/app/styles/zoom.module.css";

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
      className={`ml-4 flex flex-col gap-y-2 lg:space-y-0 lg:flex-row lg:space-x-2 ${
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
            <Link
              target="_blank"
              className="hover:text-primary transition-colors dark:text-primary"
              href={href || "/"}
            >
              <IconComponent className={`text-2xl ${iconStyles.iconZoom}`} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Icons;
