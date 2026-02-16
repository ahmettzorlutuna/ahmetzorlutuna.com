import type { EducationMilestone, Experience } from "@/types";

export const education: EducationMilestone[] = [
    {
        title: "Piscine — C Bootcamp",
        institution: "42 Istanbul",
        description:
            "Survived the intense 26-day selection process. Learned C programming from scratch, peer-to-peer evaluation, and the 42 methodology.",
        date: "2024",
        type: "milestone",
    },
    {
        title: "Libft — First Library",
        institution: "42 Istanbul",
        description:
            "Built a personal C library from scratch — reimplementing standard library functions and learning memory management.",
        date: "2024",
        type: "project",
    },
    {
        title: "Net Practice — World Record",
        institution: "42 Istanbul",
        description:
            "Achieved a world record in the networking project. Mastered IP addressing, subnetting, and routing tables.",
        date: "2025",
        type: "achievement",
    },
    {
        title: "Minishell",
        institution: "42 Istanbul",
        description:
            "Built a fully functional Unix shell with pipes, redirections, and signal handling. A deep dive into systems programming.",
        date: "2025",
        type: "project",
    },
    {
        title: "Cub3D — Raycasting Engine",
        institution: "42 Istanbul",
        description:
            "Created a 3D raycasting engine inspired by Wolfenstein 3D. Applied linear algebra and low-level graphics programming.",
        date: "2025",
        type: "project",
    },
];

export const experience: Experience[] = [
    {
        title: "IT Consultant",
        company: "Kenan Metal",
        description:
            "Provided IT consulting services, managing infrastructure and technology solutions for the manufacturing company.",
        technologies: ["IT Infrastructure", "Network Management", "Technical Support"],
        startDate: "2024",
    },
    {
        title: "Security Operations",
        company: "Balkan Güvenlik",
        description:
            "Worked in security operations, developing discipline, attention to detail, and problem-solving skills under pressure.",
        technologies: ["Operations Management", "Team Coordination"],
        startDate: "2023",
        endDate: "2024",
    },
];
