// page.tsx
"use client";
import styles from "@/app/styles/SkillAnimations.module.css";

interface ISkillsProps {
  prop?: string;
  children?: React.ReactNode;
}

interface IAnimationProps {
  language: string;
  howMany: number;
  additionalText: string[];
}

import SkillsData from "@/lib/skillsData";

const ChangeChar = (string: string, from: string, to: string) => {
  return string.replace(new RegExp(from, "g"), to);
};

const SkillsBar: React.FC<{ dataset: Record<string, any> }> = ({ dataset }) => {
  return (
    <div>
      {Object.entries(dataset).map(([key, value]) => (
        <SkillsAnimations
          key={key}
          language={key}
          howMany={value.level}
          additionalText={value.additionalText}
        />
      ))}
    </div>
  );
};

const SkillsAnimations: React.FC<IAnimationProps> = ({
  howMany,
  language,
  additionalText,
}) => {
  const skillLevelArray = ["Basics", "Moderate", "Good", "Excellent"];
  const useColor = [
    "bg-primary",
    "bg-primary/25",
    "bg-primary/10",
    "bg-primary/5",
  ];

  // Simplified elements for testing
  const elements = Array.from({ length: 4 }).map((_, i) => (
    <div
      key={`${language}-${i}`}
      style={{
        animation: "appear 1s forwards cubic-bezier(0.25, 0.46, 0.45, 0.94)",
        opacity: 0,
        backgroundColor: "blue", // Keep static color
        height: "20px", // Keep height for visibility
      }}
      className={`w-1/4 ${
        i < howMany ? useColor[0] : useColor[i % useColor.length]
      }`}
    ></div>
  ));

  console.log(elements);
  const splitByCommas = (input: string[] | string) => {
    if (typeof input === "string") {
      return input;
    }
    return input.join(", ");
  };

  return (
    <div className="my-5 flex justify-center">
      <div className="flex w-full flex-col justify-center text-white">
        <div>
          <div className="text-lg font-bold">{language}</div>
          <div className="mt-1 text-xs font-bold text-nav-font-hover">
            {splitByCommas(additionalText)}
          </div>
        </div>
        <div className="my-3 flex flex-row space-x-1">{elements}</div>

        <div className="text-xs">
          {howMany === 1 ? (
            <>{skillLevelArray[0]}</>
          ) : (
            <>{skillLevelArray[howMany - 1]} skills</>
          )}
        </div>
      </div>
    </div>
  );
};

const SkillsPage = () => {
  const skillKeys = ["Technical", "UI / UX", "Audio & Video"];
  return (
    <div className="flex justify-center space-y-2 text-white">
      <div className="mx-4 w-full lg:w-1/2">
        <div className="w-full">
          {skillKeys.map((key) => (
            <div className="ml-5 mr-5 flex flex-col" key={key}>
              <div className="flex flex-col">
                <p className="mt-4 text-3xl font-bold tracking-wider">
                  {ChangeChar(key, "_", " & ")}
                </p>
                <div className="flex justify-start bg-transparent">
                  <div className="h-px w-full border-0 bg-gray-500" />
                </div>
                <div className="flex flex-col">
                  <SkillsBar dataset={SkillsData[key]} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
