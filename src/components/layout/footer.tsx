import Link from "next/link";
import { Github, Linkedin, ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/navigation";

const iconMap: Record<string, React.ReactNode> = {
    github: <Github className="h-4 w-4" />,
    linkedin: <Linkedin className="h-4 w-4" />,
    school: <ExternalLink className="h-4 w-4" />,
};

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-border/40">
            <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
                {/* Left: Copyright */}
                <p className="text-sm text-muted-foreground">
                    © {currentYear} Ahmet Zorlutuna.{" "}
                    <span className="hidden sm:inline">Built with Next.js & Tailwind.</span>
                </p>

                {/* Right: Social links */}
                <div className="flex items-center gap-3">
                    {socialLinks.map((link) => (
                        <Link
                            key={link.platform}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-8 w-8 items-center justify-center rounded-md
                         text-muted-foreground transition-colors
                         hover:bg-accent hover:text-foreground"
                            aria-label={link.platform}
                        >
                            {iconMap[link.icon] ?? <ExternalLink className="h-4 w-4" />}
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
