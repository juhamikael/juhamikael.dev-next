import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageWidthAndHeight(url: string | null) {
  if (!url) return { width: 300, height: 300 };
  const regex = /-(\d+)x(\d+)\.jpg$/;
  const match = url.match(regex);
  if (match) {
    const [_, width, height] = match;
    return { width, height };
  } else {
    return { width: 300, height: 300 };
  }
}
