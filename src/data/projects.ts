import type { Project } from "@/types";

export const projects: Project[] = [
    {
        slug: "cub3d",
        title: "Cub3D",
        description:
            "A raycasting engine inspired by Wolfenstein 3D, built from scratch in C using the miniLibX graphics library.",
        longDescription:
            "Cub3D is a 42 school project that implements a raycasting engine to render a 3D-like view from a 2D map. It uses the DDA (Digital Differential Analyzer) algorithm for efficient ray-wall intersection detection. Features include textured walls, floor/ceiling rendering, sprite casting, and a minimap. This project deepened my understanding of linear algebra, trigonometry, and low-level graphics programming.",
        technologies: ["C", "miniLibX", "Makefile", "Raycasting", "DDA Algorithm"],
        category: "42-school",
        featured: true,
        date: "2025-12",
        githubUrl: "https://github.com/ahmetzorlutuna/cub3d",
    },
    {
        slug: "minishell",
        title: "Minishell",
        description:
            "A Unix shell implementation written in C, handling pipes, redirections, environment variables, and built-in commands.",
        longDescription:
            "Minishell is a fully functional Unix shell that replicates core bash functionality. It includes lexer → parser → executor pipeline, heredoc support, signal handling (Ctrl+C, Ctrl+D, Ctrl+\\), and all required built-in commands (echo, cd, pwd, export, unset, env, exit). Built as a team project at 42, it taught me process management, file descriptors, and system-level programming.",
        technologies: ["C", "Unix", "Process Management", "Signals", "Makefile"],
        category: "42-school",
        featured: true,
        date: "2025-10",
        githubUrl: "https://github.com/ahmetzorlutuna/minishell",
    },
    {
        slug: "net-practice",
        title: "Net Practice",
        description:
            "Achieved a world record in the 42 Net Practice project — mastering IP addressing, subnetting, and routing tables.",
        longDescription:
            "Net Practice is a 42 school project focused on networking fundamentals: IP addressing, subnet masks, routing tables, and network configuration. I achieved a world record completion, demonstrating deep understanding of TCP/IP networking, CIDR notation, and network topology design.",
        technologies: [
            "Networking",
            "TCP/IP",
            "Subnetting",
            "Routing",
            "CIDR",
        ],
        category: "42-school",
        featured: true,
        date: "2025-06",
    },
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
        appStoreUrl: "https://apps.apple.com/app/tuna",
        githubUrl: "https://github.com/ahmetzorlutuna/tuna",
    },
];
