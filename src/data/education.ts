import type { EducationMilestone, Experience } from "@/types";

export const education: EducationMilestone[] = [
    // ── Academic ──
    {
        title: "Software Engineering — Common Core (Cadet)",
        institution: "42 Istanbul",
        description:
            "Advancing through the rigorous Common Core curriculum as a 'Cadet'. Focus is on low-level systems programming, manual memory management, and architecting complex algorithms in C and C++ (e.g., Cub3D, Minishell, Philosophers).",
        date: "2024–Present",
        type: "milestone",
    },
    {
        title: "Business Administration — Bachelor's Degree",
        institution: "Anadolu University",
        description:
            "A strategic degree pursued to bridge the gap between technical engineering and business value. Focusing on project management and understanding the commercial ROI of technical decisions.",
        date: "2025–Present",
        type: "academic",
    },
    {
        title: "Computer Programming — Associate's Degree",
        institution: "Atatürk University",
        description:
            "Graduated with a focus on programming fundamentals, data structures, and database management. This academic foundation served as the starting point for my engineering journey.",
        date: "2021–2023",
        type: "academic",
    },

    // ── 42 Projects (chronological) ──
    {
        title: "Libft — Custom C Library",
        institution: "42 Istanbul",
        description:
            "Reimplemented 40+ standard library functions from scratch. The foundation every 42 project builds upon.",
        date: "2024",
        type: "project",
        technicalChallenge:
            "Manual memory allocation, pointer arithmetic, and understanding how libc works under the hood.",
    },
    {
        title: "Get_Next_Line",
        institution: "42 Istanbul",
        description:
            "A function that reads a file descriptor line-by-line, handling arbitrary buffer sizes and multiple FDs simultaneously.",
        date: "2024",
        type: "project",
        technicalChallenge:
            "Efficient buffer management, static variables for state persistence across calls, and handling edge cases with variable-length lines.",
    },
    {
        title: "Fract-ol — Fractal Renderer",
        institution: "42 Istanbul",
        description:
            "Real-time rendering of Mandelbrot and Julia sets with smooth zoom and color mapping, built with miniLibX.",
        date: "2024",
        type: "project",
        technicalChallenge:
            "Complex number arithmetic, iterative escape-time algorithms, color gradient interpolation, and pixel-level rendering optimization.",
    },
    {
        title: "Pipex",
        institution: "42 Istanbul",
        description:
            "Replicating shell pipe behavior — handling multiple pipes, redirections, and child processes in C.",
        date: "2025",
        type: "project",
        technicalChallenge:
            "Process creation (fork), file descriptor duplication (dup2), pipe IPC, and proper error/resource cleanup to prevent zombie processes.",
    },
    {
        title: "Push_swap — Sorting Algorithm",
        institution: "42 Istanbul",
        description:
            "Sorting data on two stacks using a limited instruction set, optimized for the lowest possible operation count.",
        date: "2025",
        type: "project",
        technicalChallenge:
            "Algorithm complexity analysis (Big O), implementing a custom sorting strategy (chunk-based radix), and achieving sub-700 operations for 100 elements.",
    },
    {
        title: "Philosophers — Concurrency",
        institution: "42 Istanbul",
        description:
            "Solving the Dining Philosophers problem — managing threads, mutexes, and preventing deadlocks in real-time.",
        date: "2025",
        type: "project",
        technicalChallenge:
            "Thread synchronization (pthread_mutex), race condition prevention, deadlock avoidance strategies, and microsecond-precision timing.",
    },
    {
        title: "Net Practice",
        institution: "42 Istanbul",
        description:
            "Mastered IP addressing, subnetting, and routing tables. Achieved a world-record completion time across the 42 network.",
        date: "2025",
        type: "achievement",
        technicalChallenge:
            "TCP/IP networking, CIDR notation, subnet mask calculations, and network topology design.",
    },
    {
        title: "Minishell — Unix Shell",
        institution: "42 Istanbul",
        description:
            "A fully functional Unix shell replicating core Bash behavior — lexer, parser, executor pipeline with heredoc support.",
        date: "2025",
        type: "project",
        technicalChallenge:
            "Lexer → Parser → AST → Executor pipeline, process management (fork/waitpid), signal handling (Ctrl+C/D/\\), and environment variable expansion.",
    },
    {
        title: "Cub3D — Raycasting Engine",
        institution: "42 Istanbul",
        description:
            "A 3D raycasting engine inspired by Wolfenstein 3D — textured walls, floor/ceiling rendering, sprite casting, and a minimap.",
        date: "2025",
        type: "project",
        technicalChallenge:
            "DDA (Digital Differential Analyzer) algorithm for ray-wall intersection, trigonometry for perspective projection, and manual memory management for texture mapping.",
    },

    // ── Current Studies ──
    {
        title: "C++ Modules — Advanced OOP",
        institution: "42 Istanbul",
        description:
            "Currently working through the C++ module series — Orthodox Canonical Form, operator overloading, templates, and STL containers.",
        date: "2025–Present",
        type: "project",
        technicalChallenge:
            "Memory safety without garbage collection, RAII pattern, deep vs shallow copy semantics, and compile-time polymorphism.",
    },
];

export const experience: Experience[] = [
    {
        title: "Managing Partner & IT Consultant",
        company: "Balkan Güvenlik Sistemleri / Teknojax",
        description:
            "Founded and managing a security & IT infrastructure company. Designed and deployed enterprise network architectures, security camera systems, and access control solutions for commercial clients.",
        technologies: [
            "Ruijie/Reyee",
            "Sophos",
            "Ajax Security",
            "Hikvision",
            "VLANs",
            "Firewalls",
        ],
        startDate: "2020",
        location: "Turkey",
    },
    {
        title: "IT Consultant",
        company: "Kenan Metal A.Ş.",
        description:
            "Providing ongoing IT consultancy for a manufacturing company — managing network infrastructure, implementing security policies, and optimizing technology operations.",
        technologies: [
            "Network Architecture",
            "IT Infrastructure",
            "Load Balancing",
            "Technical Support",
        ],
        startDate: "2024",
        location: "Turkey",
    },
];
