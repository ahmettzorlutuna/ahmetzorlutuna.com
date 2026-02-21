import type { Metadata } from "next";
import Link from "next/link";
import {
    MapPin,
    Mail,
    Github,
    Linkedin,
    Twitter,
    GraduationCap,
    ArrowUpRight,
} from "lucide-react";
import { ContactForm } from "@/components/portfolio/contact-form";

export const metadata: Metadata = {
    title: "Contact — Ahmet Zorlutuna",
    description:
        "Get in touch for software engineering roles, iOS/SwiftUI freelance projects, or enterprise IT and network consulting.",
};

const CONTACT_LINKS = [
    {
        icon: <MapPin className="h-4 w-4" />,
        label: "Istanbul, Turkey",
    },
    {
        icon: <Mail className="h-4 w-4" />,
        label: "ahmettayyip3439@gmail.com",
        href: "mailto:ahmettayyip3439@gmail.com",
    },
    {
        icon: <Github className="h-4 w-4" />,
        label: "ahmettzorlutuna",
        href: "https://github.com/ahmettzorlutuna",
    },
    {
        icon: <Linkedin className="h-4 w-4" />,
        label: "ahmetzorlutuna",
        href: "https://linkedin.com/in/ahmetzorlutuna",
    },
    {
        icon: <Twitter className="h-4 w-4" />,
        label: "AhmetZorlutuna",
        href: "https://x.com/ahmetzorlutuna",
        highlight:
            "Sharing insights on AI, Tech, and Software Engineering.",
    },
    {
        icon: <GraduationCap className="h-4 w-4" />,
        label: "42 Istanbul — azorlutu",
        href: "https://profile.intra.42.fr/users/azorlutu",
    },
];

export default function ContactPage() {
    return (
        <div className="mx-auto max-w-5xl px-6">
            <section className="py-20">
                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
                    Contact
                </p>
                <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                    Let&apos;s build something{" "}
                    <span className="text-primary">scalable.</span>
                </h1>
            </section>

            <section className="border-t border-border/40 py-12">
                <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
                    {/* ─── Left: Pitch & Info ─── */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                                I&apos;m currently open for{" "}
                                <span className="font-medium text-foreground">
                                    Software Engineering roles
                                </span>
                                ,{" "}
                                <span className="font-medium text-foreground">
                                    iOS / SwiftUI freelance projects
                                </span>
                                , and{" "}
                                <span className="font-medium text-foreground">
                                    Enterprise IT & Network Consulting
                                </span>
                                .
                            </p>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                                Whether you need a production-ready iOS app, a
                                full-stack web platform, or enterprise network
                                architecture — I&apos;d love to hear about your
                                project.
                            </p>
                        </div>

                        {/* Contact Links */}
                        <div className="space-y-3">
                            {CONTACT_LINKS.map((link) => (
                                <div key={link.label} className="space-y-0.5">
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-secondary text-muted-foreground">
                                            {link.icon}
                                        </div>
                                        {link.href ? (
                                            <Link
                                                href={link.href}
                                                target={
                                                    link.href.startsWith(
                                                        "mailto:",
                                                    )
                                                        ? undefined
                                                        : "_blank"
                                                }
                                                rel="noopener noreferrer"
                                                className="group inline-flex items-center gap-1 text-sm font-medium text-foreground transition-colors hover:text-primary"
                                            >
                                                {link.label}
                                                <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" />
                                            </Link>
                                        ) : (
                                            <span className="text-sm font-medium text-foreground">
                                                {link.label}
                                            </span>
                                        )}
                                    </div>
                                    {link.highlight && (
                                        <p className="pl-11 text-xs text-muted-foreground">
                                            {link.highlight}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* ─── Right: Form ─── */}
                    <div className="rounded-xl border border-border/60 bg-card p-6 sm:p-8">
                        <h2 className="text-lg font-semibold tracking-tight">
                            Send a Message
                        </h2>
                        <p className="mt-1 text-sm text-muted-foreground">
                            Fill out the form and I&apos;ll get back to you
                            within 24 hours.
                        </p>
                        <div className="mt-6">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
