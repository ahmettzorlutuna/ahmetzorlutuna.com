import Link from "next/link";
import { ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
import { socialLinks } from "@/data/navigation";
import { projects } from "@/data/projects";

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  school: <ExternalLink className="h-5 w-5" />,
};

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* ─── Hero Section ─── */}
      <section className="flex min-h-[70vh] flex-col justify-center py-20">
        <div className="space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/50 px-4 py-1.5 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-primary">Ahmet</span>
            <span className="text-muted-foreground">.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Software Developer | IT & Network Specialist | Cadet at 42 Istanbul. 
            I build things with{" "}
            <span className="font-medium text-foreground">Javascript</span>,{" "}
            <span className="font-medium text-foreground">TypeScript</span>,{" "}
            <span className="font-medium text-foreground">C</span> and {" "}
            <span className="font-medium text-foreground">C++</span>{" "}
            from raycasting engines and my own shell to AI-powered iOS and web apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5
                         text-sm font-medium text-primary-foreground transition-colors
                         hover:bg-primary/90"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border
                         px-5 py-2.5 text-sm font-medium text-foreground transition-colors
                         hover:bg-accent"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 pt-4">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg
                           text-muted-foreground transition-colors
                           hover:bg-accent hover:text-foreground"
                aria-label={link.platform}
              >
                {iconMap[link.icon] ?? <ExternalLink className="h-5 w-5" />}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects ─── */}
      <section className="border-t border-border/40 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Selected Work
            </p>
            <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm font-medium text-muted-foreground
                       transition-colors hover:text-foreground sm:flex"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <article
              key={project.slug}
              className="group rounded-xl border border-border/60 bg-card p-6
                         transition-all hover:border-border hover:shadow-sm"
            >
              {/* Category badge */}
              <span className="mb-3 inline-block rounded-md bg-secondary px-2.5 py-1
                               text-xs font-medium text-secondary-foreground">
                {project.category === "42-school"
                  ? "42 School"
                  : project.category.charAt(0).toUpperCase() +
                  project.category.slice(1)}
              </span>

              <h3 className="text-lg font-semibold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tech pills */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-border/60 px-2 py-0.5
                               font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-5 flex items-center gap-3">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="h-4 w-4" />
                  </Link>
                )}
                {project.appStoreUrl && (
                  <Link
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                    aria-label={`${project.title} App Store`}
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Mobile "view all" link */}
        <div className="mt-6 sm:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-1 text-sm font-medium text-muted-foreground
                       hover:text-foreground"
          >
            View all projects
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </section>

      {/* ─── About Teaser ─── */}
      <section className="border-t border-border/40 py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              About
            </p>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              42 — Where I Learned to Learn
            </h2>
            <p className="max-w-prose text-muted-foreground leading-relaxed">
              At 42, there are no teachers, no classes, no textbooks. You learn by
              building, failing, and iterating — just like real engineering. From
              writing my first lines of C and C++ in the Piscine to building a raycasting
              engine, every project pushed me to think deeper and code better.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-1 text-sm font-medium
                         text-foreground hover:underline"
            >
              Read my story
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* 42 Stats */}
          <div className="flex flex-wrap gap-6 lg:flex-col lg:gap-8">
            <div>
              <p className="font-mono text-3xl font-bold">15+</p>
              <p className="text-sm text-muted-foreground">42 Projects</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold">2+</p>
              <p className="text-sm text-muted-foreground">Side Projects</p>
            </div>
            <div>
              <p className="font-mono text-3xl font-bold">1</p>
              <p className="text-sm text-muted-foreground">Published App</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
