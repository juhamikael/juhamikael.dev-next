type AdditionalInfo = string[];

interface Skill {
    _uid: string;
    name: string;
    level: number;
    component: string;
    additional_info: AdditionalInfo;
    _editable: string;
}

interface SkillCategory {
    _uid: string;
    name: string;
    skills: Skill[];
    component: string;
    _editable: string;
}

export type { Skill, SkillCategory };
