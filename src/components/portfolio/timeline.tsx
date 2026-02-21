import { cn } from "@/lib/utils";
import type { EducationMilestone, Experience } from "@/types";
import { GraduationCap, Code, Trophy, Briefcase } from "lucide-react";

/* ──────────────────────────────────────────────────────
   Unified timeline entry — merges education + experience
   ────────────────────────────────────────────────────── */
type TimelineCategory = "academic" | "engineering" | "professional";

interface TimelineEntry {
    title: string;
    subtitle: string;
    description: string;
    date: string;
    category: TimelineCategory;
    technicalChallenge?: string;
    technologies?: string[];
}

interface TimelineProps {
    education: EducationMilestone[];
    experience: Experience[];
}

const CATEGORY_STYLES: Record<
    TimelineCategory,
    { dot: string; badge: string; label: string; icon: React.ReactNode }
> = {
    academic: {
        dot: "bg-blue-500",
        badge: "border-blue-500/30 text-blue-400",
        label: "Academic",
        icon: <GraduationCap className="h-3 w-3" />,
    },
    engineering: {
        dot: "bg-emerald-500",
        badge: "border-emerald-500/30 text-emerald-400",
        label: "Engineering",
        icon: <Code className="h-3 w-3" />,
    },
    professional: {
        dot: "bg-amber-500",
        badge: "border-amber-500/30 text-amber-400",
        label: "Professional",
        icon: <Briefcase className="h-3 w-3" />,
    },
};

function resolveCategory(milestone: EducationMilestone): TimelineCategory {
    if (milestone.type === "academic" || milestone.type === "milestone") return "academic";
    return "engineering";
}

function mergeEntries(
    education: EducationMilestone[],
    experience: Experience[],
): TimelineEntry[] {
    const fromEducation: TimelineEntry[] = education.map((m) => ({
        title: m.title,
        subtitle: m.institution,
        description: m.description,
        date: m.date,
        category: resolveCategory(m),
        technicalChallenge: m.technicalChallenge,
    }));

    const fromExperience: TimelineEntry[] = experience.map((e) => ({
        title: e.title,
        subtitle: e.company,
        description: e.description,
        date: e.endDate ? `${e.startDate}–${e.endDate}` : `${e.startDate}–Present`,
        category: "professional" as TimelineCategory,
        technologies: e.technologies,
    }));

    return [...fromExperience, ...fromEducation];
}

function AchievementIcon({ entry }: { entry: TimelineEntry }) {
    if (entry.title.includes("Tuna")) {
        return <Trophy className="h-3.5 w-3.5 text-emerald-400" />;
    }
    return null;
}

export function Timeline({ education, experience }: TimelineProps) {
    const entries = mergeEntries(education, experience);

    return (
        <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-3 bottom-3 w-px bg-border/60" />

            <div className="space-y-8">
                {entries.map((entry, i) => {
                    const style = CATEGORY_STYLES[entry.category];

                    return (
                        <div key={`${entry.title}-${i}`} className="relative pl-8">
                            {/* Dot */}
                            <div
                                className={cn(
                                    "absolute left-0 top-[7px] h-[15px] w-[15px] rounded-full border-2 border-background",
                                    style.dot,
                                )}
                            />

                            {/* Content */}
                            <div className="space-y-2">
                                {/* Header row */}
                                <div className="flex flex-wrap items-center gap-2">
                                    <span
                                        className={cn(
                                            "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium",
                                            style.badge,
                                        )}
                                    >
                                        {style.icon}
                                        {style.label}
                                    </span>
                                    <span className="font-mono text-xs text-muted-foreground">
                                        {entry.date}
                                    </span>
                                    <AchievementIcon entry={entry} />
                                </div>

                                <h3 className="text-base font-semibold tracking-tight">
                                    {entry.title}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {entry.subtitle}
                                </p>
                                <p className="text-sm leading-relaxed text-muted-foreground/80">
                                    {entry.description}
                                </p>

                                {/* Technical Challenge */}
                                {entry.technicalChallenge && (
                                    <div className="mt-2 rounded-lg border border-border/40 bg-secondary/30 px-4 py-3">
                                        <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                                            Technical Challenge
                                        </p>
                                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground/90">
                                            {entry.technicalChallenge}
                                        </p>
                                    </div>
                                )}

                                {/* Technologies */}
                                {entry.technologies && entry.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {entry.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="rounded-md border border-border/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
