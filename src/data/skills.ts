import type { Skill } from "@/types";

export const skills: Skill[] = [
    // Languages
    { name: "C", category: "languages", proficiency: 5 },
    { name: "C++", category: "languages", proficiency: 4 },
    { name: "Swift", category: "languages", proficiency: 2 },
    { name: "TypeScript", category: "languages", proficiency: 3 },
    { name: "JavaScript", category: "languages", proficiency: 5 },
    { name: "Python", category: "languages", proficiency: 3 },

    // Frameworks
    { name: "SwiftUI", category: "frameworks", proficiency: 2 },
    { name: "Next.js", category: "frameworks", proficiency: 3 },
    { name: "React", category: "frameworks", proficiency: 3 },
    { name: "Tailwind CSS", category: "frameworks", proficiency: 4 },
    { name: "Vue.js", category: "frameworks", proficiency: 3 },

    // Tools
    { name: "Git", category: "tools", proficiency: 5 },
    { name: "Xcode", category: "tools", proficiency: 4 },
    { name: "Vim", category: "tools", proficiency: 2 },
    { name: "Makefile", category: "tools", proficiency: 4 },
    { name: "Docker", category: "tools", proficiency: 3 },
    { name: "VS Code", category: "tools", proficiency: 5 },

    // Databases & APIs
    { name: "Firebase", category: "databases", proficiency: 4 },
    { name: "Gemini API", category: "databases", proficiency: 4 },
    { name: "PostgreSQL", category: "databases", proficiency: 3 },
    { name: "Supabase", category: "databases", proficiency: 3 },

    // DevOps & Systems
    { name: "Unix/Linux", category: "devops", proficiency: 5 },
    { name: "Vercel", category: "devops", proficiency: 4 },
    { name: "GitHub Actions", category: "devops", proficiency: 3 },

    // IT Infrastructure
    { name: "Ruijie/Reyee", category: "infrastructure", proficiency: 5 },
    { name: "Sophos", category: "infrastructure", proficiency: 4 },
    { name: "Ajax Security", category: "infrastructure", proficiency: 4 },
    { name: "Hikvision", category: "infrastructure", proficiency: 5 },
    { name: "VLANs & Firewalls", category: "infrastructure", proficiency: 5 },
];
