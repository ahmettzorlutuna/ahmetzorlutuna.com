"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Project, ProjectCategory } from "@/types";

interface ProjectGridProps {
    projects: Project[];
}

const FILTER_TABS: { label: string; value: ProjectCategory | "all" }[] = [
    { label: "All", value: "all" },
    { label: "Mobile & AI", value: "mobile" },
    { label: "42 School", value: "42-school" },
    { label: "IT Infrastructure", value: "it-infrastructure" },
];

export function ProjectGrid({ projects }: ProjectGridProps) {
    const [activeFilter, setActiveFilter] = useState<
        ProjectCategory | "all"
    >("all");

    const filtered =
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <div className="relative z-10">
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
                {FILTER_TABS.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveFilter(tab.value)}
                        className={cn(
                            "rounded-full border px-5 py-2.5 text-sm font-semibold transition-all duration-300 backdrop-blur-sm",
                            activeFilter === tab.value
                                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                                : "border-white/10 bg-white/5 text-muted-foreground hover:border-primary/50 hover:bg-white/10 hover:text-foreground",
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filtered.map((project, idx) =>
                    project.featured ? (
                        <FeaturedCard key={project.slug} project={project} index={idx} />
                    ) : (
                        <StandardCard key={project.slug} project={project} />
                    ),
                )}
            </div>
        </div>
    );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
    return (
        <div className={cn(
            "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]",
            // Featured items are wide, but the first one gets extra vertical space in an asymmetric grid
            index === 0 ? "col-span-full lg:col-span-2 lg:row-span-2" : "col-span-full lg:col-span-2"
        )}>
            {/* Featured ambient gradient background */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className={cn("p-6", index === 0 ? "sm:p-10" : "sm:p-8")}>
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                            <Star className="h-3.5 w-3.5" />
                            <span className="uppercase tracking-wider">
                                Featured Project
                            </span>
                        </div>

                        <h3 className={cn("font-bold tracking-tight text-foreground", index === 0 ? "text-3xl sm:text-4xl" : "text-2xl sm:text-3xl")}>
                            {project.title}
                        </h3>

                        <p className={cn("leading-relaxed text-muted-foreground max-w-2xl", index === 0 ? "text-base sm:text-lg" : "text-sm sm:text-base")}>
                            {project.longDescription || project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-2">
                            {project.technologies.slice(0, index === 0 ? 6 : 4).map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-muted-foreground backdrop-blur-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <span className="font-mono text-sm font-semibold text-primary">
                        {project.date}
                    </span>
                </div>

                {/* Action buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    {project.appStoreUrl && (
                        <Link
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                        >
                            App Store
                            <ExternalLink className="h-4 w-4" />
                        </Link>
                    )}
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:-translate-y-0.5"
                        >
                            Website
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:-translate-y-0.5"
                        >
                            <Github className="h-4 w-4" />
                            Source Code
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

function StandardCard({ project }: { project: Project }) {
    return (
        <div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:bg-white/[0.07] hover:shadow-[0_0_20px_-10px_rgba(16,185,129,0.15)] flex flex-col h-full">
            <div className="flex items-start justify-between gap-4">
                <div>
                    <span className="mb-3 inline-block rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1 text-xs font-semibold text-primary backdrop-blur-sm">
                        {project.category === "42-school" ? "42 School" : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight text-foreground line-clamp-1">
                        {project.title}
                    </h3>
                </div>
                <span className="shrink-0 font-mono text-xs font-medium text-muted-foreground pt-1">
                    {project.date}
                </span>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-muted-foreground flex-1">
                {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                    <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-xs font-medium text-muted-foreground backdrop-blur-sm"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            {project.githubUrl && (
                <div className="mt-6 border-t border-white/10 pt-4">
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-primary"
                    >
                        <Github className="h-4 w-4" />
                        View Source
                    </Link>
                </div>
            )}
        </div>
    );
}
