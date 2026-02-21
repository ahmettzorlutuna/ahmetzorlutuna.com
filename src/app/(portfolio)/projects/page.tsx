import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/portfolio/project-grid";

export const metadata: Metadata = {
    title: "Projects — Ahmet Zorlutuna",
    description:
        "A showcase of my work — from AI-powered iOS apps and 3D raycasting engines to enterprise network infrastructure.",
};

export default function ProjectsPage() {
    return (
        <div className="mx-auto max-w-5xl px-6">
            <section className="py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Portfolio
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Projects
                </h1>
                <p className="mt-4 max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                    A collection of things I&apos;ve built — from low-level C
                    systems at 42 Istanbul to production iOS apps and enterprise
                    IT infrastructure.
                </p>
            </section>

            <section className="border-t border-border/40 py-12">
                <ProjectGrid projects={projects} />
            </section>
        </div>
    );
}
