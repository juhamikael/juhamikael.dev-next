import React from "react";
import styles from "@/app/styles/SkillsAnimation.module.scss";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { AiOutlineBulb as ToolTipIcon } from "react-icons/ai";
import { cn } from "@/lib/utils";

interface IAnimationProps {
  language: number | string;
  howMany: number;
  additionalText: string[] | string;
}

const SkillsAnimations: React.FC<IAnimationProps> = ({
  howMany,
  language,
  additionalText,
}) => {
  const elements = Array.from({ length: 4 }).reduce<JSX.Element[]>(
    (accumulator, _, index) => {
      const element = (
        <div
          key={`${language}-${index}`}
          className={`${styles["w-1/4"]} ${
            styles["animation-" + (index + 1)]
          } ${
            index < howMany
              ? styles["skill-level-1"]
              : styles["skill-level-" + ((index % 4) + 1)]
          }`}
        ></div>
      );
      accumulator.push(element);
      return accumulator;
    },
    []
  );

  let tooltipTrigger = "";
  let skillLevelArrayToolTipText = "";

  switch (Number(howMany)) {
    case 1:
      tooltipTrigger = "Basics";
      skillLevelArrayToolTipText =
        "Familiar with fundamental concepts and can perform basic tasks";
      break;
    case 2:
      tooltipTrigger = "Moderate";
      skillLevelArrayToolTipText = "Comfortable with core techniques";
      break;
    case 3:
      tooltipTrigger = "Good";
      skillLevelArrayToolTipText =
        "Executing tasks efficiently with developed skills.";
      break;
    case 4:
      tooltipTrigger = "Excellent";
      skillLevelArrayToolTipText =
        "Years of work spent gaining profound understanding and solid skill";
      break;
    default:
      tooltipTrigger = "Basics";
      skillLevelArrayToolTipText = "I know the basics";
      break;
  }

  return (
    <div className="my-5 flex justify-center ">
      <div className="flex w-full flex-col justify-center text-white">
        <div>
          <div className="text-lg font-bold text-card-foreground">
            {language}
          </div>
          <div className="mt-1 text-xs font-bold text-muted-foreground">
            {additionalText instanceof Array ? (
              additionalText.join(", ")
            ) : (
              <>{additionalText}</>
            )}
          </div>
        </div>
        <div className="my-3 flex flex-row space-x-1 ">{elements}</div>
        <div className="text-xs text-card-foreground">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className={cn("flex items-center")}>
                {tooltipTrigger}
              </TooltipTrigger>
              <TooltipContent>
                <p>{skillLevelArrayToolTipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  );
};

export default SkillsAnimations;
