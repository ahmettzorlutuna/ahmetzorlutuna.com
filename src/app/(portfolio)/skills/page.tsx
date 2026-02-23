import type { Metadata } from "next";
import {
    Code,
    Layers,
    Wrench,
    Database,
    Server,
    Shield,
} from "lucide-react";
import { skills } from "@/data/skills";
import { cn } from "@/lib/utils";
import type { SkillCategory } from "@/types";

export const metadata: Metadata = {
    title: "Skills — Ahmet Zorlutuna",
    description:
        "Technical skills spanning low-level C/C++ systems, iOS development, web technologies, and enterprise IT infrastructure.",
};

const CATEGORY_META: Record<
    SkillCategory,
    { label: string; icon: React.ReactNode }
> = {
    languages: {
        label: "Languages",
        icon: <Code className="h-6 w-6" />,
    },
    frameworks: {
        label: "Frameworks",
        icon: <Layers className="h-5 w-5" />,
    },
    tools: {
        label: "Tools",
        icon: <Wrench className="h-5 w-5" />,
    },
    databases: {
        label: "Databases & APIs",
        icon: <Database className="h-5 w-5" />,
    },
    devops: {
        label: "DevOps & Systems",
        icon: <Server className="h-5 w-5" />,
    },
    infrastructure: {
        label: "IT Infrastructure",
        icon: <Shield className="h-6 w-6" />,
    },
    other: {
        label: "Other",
        icon: <Code className="h-5 w-5" />,
    },
};

const DISPLAY_ORDER: SkillCategory[] = [
    "languages",
    "frameworks",
    "tools",
    "databases",
    "devops",
    "infrastructure",
];

function ProficiencyDots({ level }: { level: number }) {
    return (
        <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) => (
                <div
                    key={i}
                    className={cn(
                        "h-2 w-2 rounded-full transition-colors",
                        i < level
                            ? "bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb,255,255,255),0.5)]"
                            : "bg-white/10",
                    )}
                />
            ))}
        </div>
    );
}

export default function SkillsPage() {
    const grouped = DISPLAY_ORDER.map((category) => ({
        category,
        meta: CATEGORY_META[category],
        items: skills
            .filter((s) => s.category === category)
            .sort((a, b) => b.proficiency - a.proficiency),
    })).filter((g) => g.items.length > 0);

    return (
        <div className="mx-auto max-w-5xl px-6 relative z-10">
            <section className="py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
                    Expertise
                </p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
                    Skills & Technologies
                </h1>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
                    From low-level <span className="text-foreground font-semibold">C systems</span> and <span className="text-foreground font-semibold">iOS apps</span> to enterprise{" "}
                    networking — a breakdown of the tools and technologies I work
                    with daily.
                </p>
            </section>

            <section className="border-t border-white/10 py-20 pb-24">
                <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-4">
                    {grouped.map(({ category, meta, items }, idx) => {
                        // Create Bento grid sizing. Assign larger size to core pillars.
                        const isCorePillar = category === "languages" || category === "infrastructure";

                        return (
                            <div
                                key={category}
                                className={cn(
                                    "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]",
                                    isCorePillar ? "md:col-span-2 md:row-span-2 p-8" : "md:col-span-1"
                                )}
                            >
                                {/* Ambient Hover Glow */}
                                <div className="absolute inset-x-0 -top-full h-full w-full bg-gradient-to-b from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                                {/* Category Header */}
                                <div className="flex items-center gap-4">
                                    <div className={cn(
                                        "flex items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm",
                                        isCorePillar ? "h-12 w-12" : "h-10 w-10"
                                    )}>
                                        {meta.icon}
                                    </div>
                                    <h2 className={cn(
                                        "font-bold tracking-tight text-foreground",
                                        isCorePillar ? "text-2xl" : "text-lg"
                                    )}>
                                        {meta.label}
                                    </h2>
                                </div>

                                {/* Skill List */}
                                <div className={cn("mt-6 space-y-4", isCorePillar ? "mt-8 space-y-5" : "")}>
                                    {items.map((skill) => (
                                        <div
                                            key={skill.name}
                                            className="flex items-center justify-between"
                                        >
                                            <span className={cn(
                                                "font-medium tracking-wide text-muted-foreground group-hover:text-foreground transition-colors",
                                                isCorePillar ? "text-base" : "text-sm",
                                                skill.proficiency >= 4 ? "text-foreground" : ""
                                            )}>
                                                {skill.name}
                                            </span>
                                            <ProficiencyDots
                                                level={skill.proficiency}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
