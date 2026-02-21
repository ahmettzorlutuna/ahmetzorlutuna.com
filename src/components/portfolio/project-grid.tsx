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
        <>
            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
                {FILTER_TABS.map((tab) => (
                    <button
                        key={tab.value}
                        onClick={() => setActiveFilter(tab.value)}
                        className={cn(
                            "rounded-lg border px-4 py-2 text-sm font-medium transition-all",
                            activeFilter === tab.value
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-border/60 text-muted-foreground hover:border-border hover:text-foreground",
                        )}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Grid */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {filtered.map((project) =>
                    project.featured ? (
                        <FeaturedCard key={project.slug} project={project} />
                    ) : (
                        <StandardCard key={project.slug} project={project} />
                    ),
                )}
            </div>
        </>
    );
}

function FeaturedCard({ project }: { project: Project }) {
    return (
        <div className="group relative col-span-full overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-border hover:shadow-md sm:col-span-2">
            {/* Featured glow accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Star className="h-4 w-4 text-primary" />
                            <span className="text-xs font-medium uppercase tracking-wider text-primary">
                                Featured Project
                            </span>
                        </div>

                        <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                            {project.title}
                        </h3>

                        <p className="max-w-prose text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {project.longDescription}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                            {project.technologies.map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    <span className="font-mono text-xs text-muted-foreground">
                        {project.date}
                    </span>
                </div>

                {/* Action buttons */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                    {project.appStoreUrl && (
                        <Link
                            href={project.appStoreUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                            App Store
                            <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                    )}
                    {project.liveUrl && (
                        <Link
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                        >
                            Website
                            <ArrowRight className="h-3.5 w-3.5" />
                        </Link>
                    )}
                    {project.githubUrl && (
                        <Link
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
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
        <div className="group rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-sm">
            <div className="flex items-start justify-between gap-2">
                <h3 className="text-base font-semibold tracking-tight">
                    {project.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                    {project.date}
                </span>
            </div>

            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {project.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 4).map((tech) => (
                    <span
                        key={tech}
                        className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            {/* Links */}
            {project.githubUrl && (
                <div className="mt-4 border-t border-border/40 pt-4">
                    <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                        <Github className="h-4 w-4" />
                        View Source
                    </Link>
                </div>
            )}
        </div>
    );
}
