import type { Metadata } from "next";
import Link from "next/link";
import {
    ArrowRight,
    Cpu,
    Smartphone,
    Shield,
    ExternalLink,
} from "lucide-react";
import { education, experience } from "@/data/education";
import { Timeline } from "@/components/portfolio/timeline";

export const metadata: Metadata = {
    title: "About — Ahmet Zorlutuna",
    description:
        "Software Engineer, 42 Istanbul student, and IT consultant with 5+ years of professional experience in network architecture and security systems.",
};

/* ──────────────────────────────────────────────
   "What I Do" pillar data
   ────────────────────────────────────────────── */
const PILLARS = [
    {
        icon: <Cpu className="h-5 w-5" />,
        title: "Low-Level & Systems",
        description:
            "Deep experience with C/C++ through 42 School — memory management, algorithms, raycasting engines, and Unix system programming.",
        tags: ["C", "C++", "Unix", "42 School"],
    },
    {
        icon: <Smartphone className="h-5 w-5" />,
        title: "Mobile Development",
        description:
            "Building production iOS apps with Swift & SwiftUI. Creator of Tuna Health — an AI-powered food safety app live on the App Store.",
        tags: ["Swift", "SwiftUI", "AI", "StoreKit 2"],
    },
    {
        icon: <Shield className="h-5 w-5" />,
        title: "IT & Network Infrastructure",
        description:
            "5+ years managing enterprise networks, firewalls, and security systems. Consultancy for commercial clients across Turkey.",
        tags: ["Ruijie", "Sophos", "VLANs", "Firewalls"],
    },
];

export default function AboutPage() {
    return (
        <div className="mx-auto max-w-5xl px-6">
            {/* ─── Intro Section ─── */}
            <section className="py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    About
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Software Engineer.{" "}
                    <span className="text-muted-foreground">42 Student.</span>{" "}
                    <br className="hidden sm:block" />
                    IT Consultant.
                </h1>

                <div className="mt-8 max-w-prose space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
                    <p>
                        I&apos;m a full-stack developer whose engineering mindset was
                        forged at{" "}
                        <span className="font-medium text-foreground">42 Istanbul</span>{" "}
                        — a peer-to-peer coding school with no teachers, no classes, and
                        no textbooks. Everything I know, I built by solving real problems.
                    </p>
                    <p>
                        Before 42, I graduated with an Associate&apos;s degree in{" "}
                        <span className="font-medium text-foreground">
                            Computer Programming
                        </span>{" "}
                        from Atatürk University, where I built my foundation in data
                        structures, algorithms, and database management. The transition to
                        42&apos;s rigorous, project-based curriculum deepened my focus on
                        systems-level engineering — memory management, concurrency, and
                        writing code that runs close to the metal.
                    </p>
                    <p>
                        Alongside my studies, I&apos;ve been running{" "}
                        <span className="font-medium text-foreground">
                            Balkan Güvenlik Sistemleri
                        </span>{" "}
                        since 2020 — and consulting for Kenan Metal A.Ş. as an IT and security infrastructure company serving
                        commercial clients. This experience gave me real-world expertise in
                        network architecture, firewall management, and understanding what
                        businesses actually need from technology.
                    </p>
                    <p>
                        I&apos;m also pursuing a{" "}
                        <span className="font-medium text-foreground">
                            Business Administration
                        </span>{" "}
                        degree at Anadolu University — a strategic choice to bridge
                        engineering decisions with their commercial impact and ROI.
                    </p>
                </div>
            </section>

            {/* ─── What I Do ─── */}
            <section className="border-t border-border/40 py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Expertise
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    What I Do
                </h2>

                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {PILLARS.map((pillar) => (
                        <div
                            key={pillar.title}
                            className="rounded-xl border border-border/60 bg-card p-6 transition-all hover:border-border hover:shadow-sm"
                        >
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground">
                                {pillar.icon}
                            </div>
                            <h3 className="mt-4 text-base font-semibold tracking-tight">
                                {pillar.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                                {pillar.description}
                            </p>
                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {pillar.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ─── Tuna Health Spotlight ─── */}
            <section className="border-t border-border/40 py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Flagship Product
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    Tuna Health
                </h2>

                <div className="mt-8 rounded-xl border border-border/60 bg-card p-6 sm:p-8">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
                        <div className="space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                Live on App Store
                            </div>

                            <p className="text-sm font-medium text-muted-foreground">
                                Founder & Lead Developer
                            </p>

                            <p className="max-w-prose text-base leading-relaxed text-muted-foreground sm:text-lg">
                                An AI-powered food safety & allergy shield for iOS. Tuna
                                scans ingredient labels using high-precision OCR and
                                Google&apos;s Gemini API to detect allergens, classify foods
                                by NOVA processing levels, and build personalized safety
                                profiles.
                            </p>

                            <div className="flex flex-wrap gap-1.5">
                                {[
                                    "Swift",
                                    "SwiftUI",
                                    "Gemini API",
                                    "Firebase",
                                    "StoreKit 2",
                                    "AVFoundation",
                                ].map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-3 pt-2">
                                <Link
                                    href="https://apps.apple.com/tr/app/tuna-scan-food-stay-safe/id6757370781?l=tr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                                >
                                    App Store
                                    <ExternalLink className="h-3.5 w-3.5" />
                                </Link>
                                <Link
                                    href="https://www.tunahealth.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                                >
                                    Official Website
                                    <ArrowRight className="h-3.5 w-3.5" />
                                </Link>
                            </div>
                        </div>

                        {/* Key Features */}
                        <div className="flex flex-wrap gap-6 lg:flex-col lg:gap-8">
                            <div>
                                <p className="font-mono text-2xl font-bold">AI</p>
                                <p className="text-sm text-muted-foreground">
                                    Allergen Detection
                                </p>
                            </div>
                            <div>
                                <p className="font-mono text-2xl font-bold">NOVA</p>
                                <p className="text-sm text-muted-foreground">
                                    Food Classification
                                </p>
                            </div>
                            <div>
                                <p className="font-mono text-2xl font-bold">OCR</p>
                                <p className="text-sm text-muted-foreground">
                                    Label Scanning
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Journey Timeline ─── */}
            <section className="border-t border-border/40 py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Timeline
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    My Journey
                </h2>
                <p className="mt-3 max-w-prose text-muted-foreground">
                    From Computer Programming fundamentals to building production
                    software — a chronological path through academics, engineering, and
                    professional work.
                </p>

                <div className="mt-10">
                    <Timeline education={education} experience={experience} />
                </div>
            </section>

            {/* ─── Currently ─── */}
            <section className="border-t border-border/40 py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Right Now
                </p>
                <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                    What I&apos;m Working On
                </h2>

                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="rounded-xl border border-border/60 bg-card p-6">
                        <p className="font-mono text-xs text-muted-foreground">
                            42 Istanbul
                        </p>
                        <h3 className="mt-2 text-base font-semibold">
                            C++ Modules & Advanced OOP
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Orthodox Canonical Form, templates, STL containers, and
                            memory safety without garbage collection.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card p-6">
                        <p className="font-mono text-xs text-muted-foreground">
                            Anadolu University
                        </p>
                        <h3 className="mt-2 text-base font-semibold">
                            Business Administration
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Bridging engineering and business strategy — understanding
                            the commercial impact of technical decisions.
                        </p>
                    </div>
                    <div className="rounded-xl border border-border/60 bg-card p-6">
                        <p className="font-mono text-xs text-muted-foreground">
                            Side Project
                        </p>
                        <h3 className="mt-2 text-base font-semibold">
                            This Portfolio
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                            Built with Next.js 16, Tailwind CSS v4, TypeScript, and
                            deployed on Vercel. You&apos;re looking at it.
                        </p>
                    </div>
                </div>

                <div className="mt-10">
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
