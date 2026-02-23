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
        <div className="mx-auto max-w-5xl px-6 relative z-10">
            {/* ─── Intro Section ─── */}
            <section className="py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
                    About
                </p>
                <h1 className="mt-3 text-4xl font-extrabold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
                    Software Engineer.{" "}
                    <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent">42 Student.</span>{" "}
                    <br className="hidden sm:block" />
                    IT Consultant.
                </h1>

                <div className="mt-8 max-w-prose space-y-6 text-lg leading-relaxed text-muted-foreground">
                    <p>
                        I&apos;m a full-stack developer whose engineering mindset was
                        forged at{" "}
                        <span className="font-semibold text-foreground">42 Istanbul</span>{" "}
                        — a peer-to-peer coding school with no teachers, no classes, and
                        no textbooks. Everything I know, I built by solving real problems.
                    </p>
                    <p>
                        Before 42, I graduated with an Associate&apos;s degree in{" "}
                        <span className="font-semibold text-foreground">
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
                        <span className="font-semibold text-foreground">
                            Balkan Güvenlik Sistemleri
                        </span>{" "}
                        since 2020 — and consulting for Kenan Metal A.Ş. as an IT and security infrastructure company serving
                        commercial clients. This experience gave me real-world expertise in
                        network architecture, firewall management, and understanding what
                        businesses actually need from technology.
                    </p>
                    <p>
                        I&apos;m also pursuing a{" "}
                        <span className="font-semibold text-foreground">
                            Business Administration
                        </span>{" "}
                        degree at Anadolu University — a strategic choice to bridge
                        engineering decisions with their commercial impact and ROI.
                    </p>
                </div>
            </section>

            {/* ─── What I Do (Asymmetrical Bento) ─── */}
            <section className="border-t border-white/10 py-20 pb-24">
                <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
                    Expertise
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tighter sm:text-4xl text-foreground">
                    What I Do
                </h2>

                <div className="mt-10 grid gap-4 md:grid-cols-3 lg:grid-cols-4">
                    {PILLARS.map((pillar, idx) => (
                        <div
                            key={pillar.title}
                            className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]
                            ${idx === 0 ? "md:col-span-2 lg:col-span-2 lg:row-span-2 p-8" : ""}
                            ${idx === 1 ? "md:col-span-1 lg:col-span-2" : ""}
                            ${idx === 2 ? "md:col-span-3 lg:col-span-2" : ""}
                            `}
                        >
                            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20 backdrop-blur-sm">
                                {pillar.icon}
                            </div>
                            <h3 className={`mt-5 font-bold tracking-tight text-foreground ${idx === 0 ? "text-2xl" : "text-xl"}`}>
                                {pillar.title}
                            </h3>
                            <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                                {pillar.description}
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                {pillar.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-muted-foreground backdrop-blur-sm"
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
            <section className="border-t border-white/10 py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
                    Flagship Product
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tighter sm:text-4xl text-foreground">
                    Tuna Health
                </h2>

                <div className="mt-10 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 sm:p-12 backdrop-blur-md shadow-2xl">
                    <div className="absolute top-0 right-0 -z-10 h-[300px] w-[300px] bg-primary/20 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3" />

                    <div className="grid gap-12 lg:grid-cols-[1fr_auto]">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400 backdrop-blur-sm shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                                </span>
                                Live on App Store
                            </div>

                            <p className="text-sm font-semibold tracking-wider text-primary uppercase">
                                Founder & Lead Developer
                            </p>

                            <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl font-medium">
                                An AI-powered food safety & allergy shield for iOS. Tuna
                                scans ingredient labels using high-precision OCR and
                                Google&apos;s Gemini API to detect allergens, classify foods
                                by NOVA processing levels, and build personalized safety
                                profiles.
                            </p>

                            <div className="flex flex-wrap gap-2 pt-2">
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
                                        className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-sm text-muted-foreground backdrop-blur-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="flex flex-wrap items-center gap-4 pt-6">
                                <Link
                                    href="https://apps.apple.com/tr/app/tuna-scan-food-stay-safe/id6757370781?l=tr"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                                >
                                    App Store
                                    <ExternalLink className="h-4 w-4" />
                                </Link>
                                <Link
                                    href="https://www.tunahealth.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
                                >
                                    Official Website
                                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        </div>

                        {/* Key Features (Vertical Glassmorphism Cards) */}
                        <div className="flex flex-wrap gap-4 lg:flex-col justify-center">
                            {[
                                { title: "AI", desc: "Allergen Detection" },
                                { title: "NOVA", desc: "Food Classification" },
                                { title: "OCR", desc: "Label Scanning" },
                            ].map((feature) => (
                                <div key={feature.title} className="rounded-xl border border-white/5 bg-white/5 p-5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-primary/20">
                                    <p className="font-mono text-3xl font-extrabold text-foreground drop-shadow-md">{feature.title}</p>
                                    <p className="text-sm font-medium text-muted-foreground mt-1">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ─── Journey Timeline ─── */}
            <section className="border-t border-white/10 py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
                    Timeline
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tighter sm:text-4xl text-foreground">
                    My Journey
                </h2>
                <p className="mt-4 max-w-prose text-lg text-muted-foreground leading-relaxed">
                    From Computer Programming fundamentals to building production
                    software — a chronological path through academics, engineering, and
                    professional work.
                </p>

                <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
                    <Timeline education={education} experience={experience} />
                </div>
            </section>

            {/* ─── Currently ─── */}
            <section className="border-t border-white/10 py-20 pb-32">
                <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
                    Right Now
                </p>
                <h2 className="mt-2 text-3xl font-extrabold tracking-tighter sm:text-4xl text-foreground">
                    What I&apos;m Working On
                </h2>

                <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg">
                        <p className="font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                            42 Istanbul
                        </p>
                        <h3 className="text-lg font-bold text-foreground">
                            C++ Modules & Advanced OOP
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Orthodox Canonical Form, templates, STL containers, and
                            memory safety without garbage collection.
                        </p>
                    </div>
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg">
                        <p className="font-mono text-xs font-semibold text-primary uppercase tracking-wider mb-3">
                            Anadolu University
                        </p>
                        <h3 className="text-lg font-bold text-foreground">
                            Business Administration
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Bridging engineering and business strategy — understanding
                            the commercial impact of technical decisions.
                        </p>
                    </div>
                    <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg">
                        <p className="font-mono text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-3">
                            Side Project
                        </p>
                        <h3 className="text-lg font-bold text-foreground">
                            This Portfolio
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                            Built with Next.js 16, Tailwind CSS v4, TypeScript, and
                            deployed on Vercel. You&apos;re looking at it.
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center sm:text-left">
                    <Link
                        href="/contact"
                        className="group inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
                    >
                        Get in Touch
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
