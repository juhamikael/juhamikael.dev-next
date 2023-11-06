import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageWidthAndHeight(url: string | null) {
  if (!url) return { width: 300, height: 300 };
  // Updated regex pattern to match the new format
  const regex = /-(\d+)x(\d+)\./;
  const match = url.match(regex);
  if (match) {
    const [, width, height] = match;
    // Parse the width and height to ensure they are returned as numbers
    return { width: parseInt(width, 10), height: parseInt(height, 10) };
  } else {
    // Default size if no match is found
    return { width: 300, height: 300 };
  }
}
