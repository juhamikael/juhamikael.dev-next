import React from "react";
import styles from "@/app/styles/SkillsAnimation.module.scss";

interface IAnimationProps {
  language: string;
  howMany: number;
  additionalText: string[] | string;
}

const SkillsAnimations: React.FC<IAnimationProps> = ({
  howMany,
  language,
  additionalText,
}) => {
  const skillLevelArray = ["Basics", "Moderate", "Good", "Excellent"];

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
          {skillLevelArray[howMany - 1]}
        </div>
      </div>
    </div>
  );
};

export default SkillsAnimations;
