"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
export default function NotFound() {
  const path = usePathname();
  return (
    <div className="flex justify-center h-screen items-center">
      <div className="flex flex-col text-center gap-y-4 text-2xl  items-center">
        <h2 className="font-black md:lg:2xl:w-2/3">
          {"Seems like you found yourself from a page that doesn't exist"}
        </h2>
        <p>
          <span className="italic font-bold text-primary">{`dev.juhamikael.info${path}`}</span>
          {"  "}
          does not exist
        </p>
        <Button className="bg-card-foreground rounded-xl">
          <Link target="_self" href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </div>
  );
}
