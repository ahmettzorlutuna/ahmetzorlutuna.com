import type { Skill } from "@/types";

export const skills: Skill[] = [
    // Languages
    { name: "C", category: "languages", proficiency: 5 },
    { name: "C++", category: "languages", proficiency: 4 },
    { name: "Swift", category: "languages", proficiency: 4 },
    { name: "TypeScript", category: "languages", proficiency: 3 },
    { name: "JavaScript", category: "languages", proficiency: 3 },
    { name: "Python", category: "languages", proficiency: 3 },

    // Frameworks
    { name: "SwiftUI", category: "frameworks", proficiency: 4 },
    { name: "Next.js", category: "frameworks", proficiency: 3 },
    { name: "React", category: "frameworks", proficiency: 3 },
    { name: "Tailwind CSS", category: "frameworks", proficiency: 4 },

    // Tools
    { name: "Git", category: "tools", proficiency: 5 },
    { name: "Docker", category: "tools", proficiency: 3 },
    { name: "Xcode", category: "tools", proficiency: 4 },
    { name: "VS Code", category: "tools", proficiency: 5 },
    { name: "Vim", category: "tools", proficiency: 4 },

    // Databases
    { name: "PostgreSQL", category: "databases", proficiency: 3 },
    { name: "Firebase", category: "databases", proficiency: 4 },
    { name: "Supabase", category: "databases", proficiency: 3 },

    // DevOps
    { name: "Vercel", category: "devops", proficiency: 3 },
    { name: "GitHub Actions", category: "devops", proficiency: 3 },
    { name: "Linux", category: "devops", proficiency: 4 },
];
