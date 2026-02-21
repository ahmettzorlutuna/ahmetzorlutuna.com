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
        icon: <Code className="h-5 w-5" />,
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
        icon: <Shield className="h-5 w-5" />,
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
                            ? "bg-primary shadow-[0_0_6px_rgba(var(--primary-rgb,255,255,255),0.3)]"
                            : "bg-border/40",
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
        <div className="mx-auto max-w-5xl px-6">
            <section className="py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Expertise
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Skills & Technologies
                </h1>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                    From low-level C systems and iOS apps to enterprise
                    networking — a breakdown of the tools and technologies I work
                    with daily.
                </p>
            </section>

            <section className="border-t border-border/40 py-12">
                <div className="grid gap-4 sm:grid-cols-2">
                    {grouped.map(({ category, meta, items }) => (
                        <div
                            key={category}
                            className="rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-sm"
                        >
                            {/* Category Header */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                                    {meta.icon}
                                </div>
                                <h2 className="text-base font-semibold tracking-tight">
                                    {meta.label}
                                </h2>
                            </div>

                            {/* Skill List */}
                            <div className="mt-5 space-y-3">
                                {items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-sm text-muted-foreground">
                                            {skill.name}
                                        </span>
                                        <ProficiencyDots
                                            level={skill.proficiency}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
