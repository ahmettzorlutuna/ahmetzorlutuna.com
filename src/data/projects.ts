import type { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "tuna-app",
        title: "Tuna — AI Food Safety App",
        description:
            "An AI-powered iOS app that scans food labels and detects allergens, built with Swift using the Gemini API.",
        longDescription:
            "Tuna is an AI-powered nutrition and food safety application for iOS. It uses Google's Gemini API to analyze food labels and ingredients, detecting potential allergens and providing safety scores. Features include camera scanning, barcode lookup, history tracking, and subscription management via StoreKit 2. Published on the App Store.",
        technologies: [
            "Swift",
            "SwiftUI",
            "Gemini API",
            "Firebase",
            "StoreKit 2",
            "AVFoundation",
        ],
        category: "mobile",
        featured: true,
        date: "2026-01",
        appStoreUrl:
            "https://apps.apple.com/tr/app/tuna-scan-food-stay-safe/id6757370781?l=tr",
        liveUrl: "https://www.tunahealth.app/",
    },
    {
        slug: "cub3d",
        title: "Cub3D",
        description:
            "A raycasting engine inspired by Wolfenstein 3D, built from scratch in C using the miniLibX graphics library.",
        longDescription:
            "Cub3D is a 42 school project that implements a raycasting engine to render a 3D-like view from a 2D map. It uses the DDA (Digital Differential Analyzer) algorithm for efficient ray-wall intersection detection. Features include textured walls, floor/ceiling rendering, sprite casting, and a minimap. This project deepened my understanding of linear algebra, trigonometry, and low-level graphics programming.",
        technologies: [
            "C",
            "miniLibX",
            "Makefile",
            "Raycasting",
            "DDA Algorithm",
        ],
        category: "42-school",
        featured: true,
        date: "2025-12",
        githubUrl: "https://github.com/ahmettzorlutuna/cub3d",
    },
    {
        slug: "minishell",
        title: "Minishell",
        description:
            "A Unix shell implementation written in C, handling pipes, redirections, environment variables, and built-in commands.",
        longDescription:
            "Minishell is a fully functional Unix shell that replicates core bash functionality. It includes lexer → parser → executor pipeline, heredoc support, signal handling (Ctrl+C, Ctrl+D, Ctrl+\\), and all required built-in commands (echo, cd, pwd, export, unset, env, exit). Built as a team project at 42, it taught me process management, file descriptors, and system-level programming.",
        technologies: [
            "C",
            "Unix",
            "Process Management",
            "Signals",
            "Makefile",
        ],
        category: "42-school",
        featured: true,
        date: "2025-10",
        githubUrl: "https://github.com/ahmettzorlutuna/minishell",
    },
    {
        slug: "philosophers",
        title: "Philosophers",
        description:
            "Solving the Dining Philosophers problem with threads and mutexes — concurrency without deadlocks.",
        longDescription:
            "An implementation of the classic Dining Philosophers problem using POSIX threads and mutexes. The program simulates philosophers that must eat, sleep, and think without starving or causing deadlocks. It requires precise timing, thread synchronization, and race condition prevention with microsecond-level accuracy.",
        technologies: [
            "C",
            "pthreads",
            "Mutexes",
            "Concurrency",
            "Makefile",
        ],
        category: "42-school",
        featured: false,
        date: "2025-08",
        githubUrl: "https://github.com/ahmettzorlutuna/philosophers",
    },
    {
        slug: "push-swap",
        title: "Push_swap",
        description:
            "Sorting data on two stacks with a limited instruction set, optimized for the fewest possible operations.",
        longDescription:
            "Push_swap is a sorting algorithm challenge where you must sort a stack of integers using only two stacks and a restricted set of operations (push, swap, rotate, reverse-rotate). The goal is to achieve the lowest operation count — under 700 moves for 100 elements using a chunk-based radix approach.",
        technologies: [
            "C",
            "Algorithms",
            "Stack Data Structure",
            "Complexity Analysis",
            "Makefile",
        ],
        category: "42-school",
        featured: false,
        date: "2025-06",
        githubUrl: "https://github.com/ahmettzorlutuna/push_swap",
    },
    {
        slug: "net-practice",
        title: "Net Practice",
        description:
            "Achieved a world-record completion time in 42's networking exercise — IP addressing, subnetting, and routing.",
        longDescription:
            "Net Practice is a 42 school project focused on networking fundamentals: IP addressing, subnet masks, routing tables, and network configuration. I achieved a world-record completion time, demonstrating deep understanding of TCP/IP networking, CIDR notation, and network topology design.",
        technologies: [
            "Networking",
            "TCP/IP",
            "Subnetting",
            "Routing",
            "CIDR",
        ],
        category: "42-school",
        featured: false,
        date: "2025-06",
    },
    {
        slug: "enterprise-it-security",
        title: "Enterprise IT & Network Security",
        description:
            "Designed and deployed enterprise network architectures (Ruijie, Sophos) and security systems for clients including Kenan Metal A.Ş. and Balkan Güvenlik.",
        longDescription:
            "End-to-end IT infrastructure design and deployment for commercial clients. Projects include enterprise-grade network architecture with VLANs and load balancing, firewall configuration and security policy enforcement, surveillance and access control system integration, and ongoing IT consultancy for manufacturing and security companies.",
        technologies: [
            "Ruijie/Reyee",
            "Sophos",
            "Ajax Security",
            "Hikvision",
            "VLANs",
            "Firewalls",
        ],
        category: "it-infrastructure",
        featured: false,
        date: "2020-01",
    },
];
