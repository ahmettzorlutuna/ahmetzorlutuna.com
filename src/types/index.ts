/* ============================================================
   Type definitions for the portfolio site.
   Centralized here to prevent duplication and ensure consistency.
   ============================================================ */

/** Represents a project in the portfolio */
export interface Project {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    category: ProjectCategory;
    image?: string;
    githubUrl?: string;
    liveUrl?: string;
    appStoreUrl?: string;
    featured: boolean;
    date: string;
}

export type ProjectCategory =
    | "42-school"
    | "mobile"
    | "web"
    | "systems"
    | "it-infrastructure"
    | "other";

/** Represents a skill or technology */
export interface Skill {
    name: string;
    icon?: string;
    category: SkillCategory;
    proficiency: 1 | 2 | 3 | 4 | 5;
}

export type SkillCategory =
    | "languages"
    | "frameworks"
    | "tools"
    | "databases"
    | "devops"
    | "other";

/** Represents a milestone in the education timeline */
export interface EducationMilestone {
    title: string;
    institution: string;
    description: string;
    date: string;
    type: "project" | "achievement" | "certification" | "milestone" | "academic";
    technicalChallenge?: string;
}

/** Represents a work experience entry */
export interface Experience {
    title: string;
    company: string;
    description: string;
    technologies: string[];
    startDate: string;
    endDate?: string;
    location?: string;
}

/** Navigation link type */
export interface NavLink {
    label: string;
    href: string;
}

/** Social media link type */
export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
}
