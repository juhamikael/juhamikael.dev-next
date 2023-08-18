"use client";

import SkillsAnimations from "@/components/SkillsAnimation";
import StraightLine from "@/components/StraightLine";
import SkillsData from "@/lib/skillsData";

function SkillsSection() {
  return (
    <div>
      {Object.entries(SkillsData).map(([category, skills]) => (
        <div key={category}>
          <h2 className="text-3xl font-bold mt-16">{category}</h2>
          <StraightLine />
          <div className="my-4">
            {Object.entries(skills).map(([skillName, skillData]) => (
              <SkillsAnimations
                key={skillName}
                language={skillName}
                howMany={skillData.level}
                additionalText={
                  skillData.additionalText ? skillData.additionalText : ""
                }
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default SkillsSection;
