import SkillsAnimations from "@/components/SkillsAnimation";
import StraightLine from "@/components/StraightLine";
import { Metadata } from "next";
import { keywords, description, title } from "@/app/seo/baseMetadata";
import { getAllByStory } from "@/lib/storyblok/getAllByStory";
import { SkillCategory, Skill } from "@/app/types/skills";
export const metadata: Metadata = {
  title: title.skills,
  description: description.skills,
  keywords: keywords.skills,
};

async function SkillsSection() {
  const { body: skills } = await getAllByStory("skills");

  return (
    <div>
      {skills.map((item: SkillCategory) => (
        <div key={item._uid}>
          <h2 className="text-3xl font-bold mt-16">{item.name}</h2>
          <StraightLine />
          <div className="my-4">
            {item.skills.map((skill: Skill) => (
              <SkillsAnimations
                key={skill.name}
                language={skill.name}
                howMany={skill.level}
                additionalText={
                  skill.additional_info ? skill.additional_info : ""
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
