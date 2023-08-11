"use client";

import * as React from "react";
import { FC } from "react";
import { BsFillMoonFill as Moon } from "react-icons/bs";
import { FiSun as Sun } from "react-icons/fi";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

interface ToggleNightModeProps extends React.HTMLAttributes<HTMLDivElement> {
  hideBackground?: boolean;
}

const ToggleNightMode: FC<ToggleNightModeProps> = ({
  className,
  hideBackground = false,
  ...props
}) => {
  const { theme, setTheme } = useTheme();
  console.log(theme);
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className={`${className}`}>
      {theme === "light" ? (
        <Button
          onClick={toggleTheme}
          className={`w-fit h-10 gap-4 items-center text-primary rounded-xl p-2 ${
            hideBackground
              ? "bg-transparent  hover:bg-primary/20 hover:text-primary"
              : "bg-secondary opacity-100"
          }`}
        >
          <Moon className="h-[1remx] w-[1rem] md:h-[1.2rem] md:w-[1.2rem]" />
        </Button>
      ) : (
        <Button
          variant="outline"
          onClick={toggleTheme}
          className={`w-fit h-10 gap-4 rounded-xl p-2 opacity-100 text-primary
          ${
            hideBackground
              ? "bg-transparent  hover:bg-primary/20 hover:text-primary"
              : "bg-secondary "
          }
          `}
        >
          <Sun className="h-[1remx] w-[1rem] md:h-[1.2rem] md:w-[1.2rem]" />
        </Button>
      )}
    </div>
  );
};

export default ToggleNightMode;
