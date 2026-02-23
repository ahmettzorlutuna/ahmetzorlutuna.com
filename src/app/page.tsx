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
    <div className="mx-auto max-w-5xl px-6 relative">
      {/* ─── Hero Section ─── */}
      <section className="flex min-h-[70vh] flex-col justify-center py-20 relative z-10">
        <div className="space-y-6">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-foreground backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Open to opportunities
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-primary to-emerald-400 bg-clip-text text-transparent drop-shadow-sm">
              Ahmet
            </span>
            <span className="text-muted-foreground">.</span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Software Developer | IT & Network Specialist | Cadet at 42 Istanbul.
            I build things with{" "}
            <span className="font-semibold text-foreground">JavaScript</span>,{" "}
            <span className="font-semibold text-foreground">TypeScript</span>,{" "}
            <span className="font-semibold text-foreground">C</span> and {" "}
            <span className="font-semibold text-foreground">C++</span>{" "}
            — from raycasting engines to AI-powered iOS and web apps.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="group relative inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3
                         text-sm font-medium text-primary-foreground transition-all duration-300
                         hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md
                         px-6 py-3 text-sm font-medium text-foreground transition-all duration-300
                         hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3 pt-6">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/5 bg-white/5 backdrop-blur-sm
                           text-muted-foreground transition-all duration-300
                           hover:border-primary/30 hover:bg-primary/10 hover:text-primary hover:-translate-y-1"
                aria-label={link.platform}
              >
                {iconMap[link.icon] ?? <ExternalLink className="h-5 w-5" />}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Projects (Bento Glassmorphism) ─── */}
      <section className="border-t border-white/10 py-20 relative z-10">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
              Selected Work
            </p>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tighter sm:text-4xl">
              Featured Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1 text-sm font-medium text-muted-foreground
                       transition-colors hover:text-primary sm:flex group"
          >
            View all
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, idx) => (
            <article
              key={project.slug}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md
                         transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/[0.07] hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)]
                         ${idx === 0 ? "lg:col-span-2 lg:row-span-2 p-8" : ""}`}
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <span className="mb-4 inline-block rounded-md bg-primary/10 border border-primary/20 px-2.5 py-1
                               text-xs font-semibold text-primary backdrop-blur-sm">
                {project.category === "42-school"
                  ? "42 School"
                  : project.category.charAt(0).toUpperCase() +
                  project.category.slice(1)}
              </span>

              <h3 className={`font-bold tracking-tight text-foreground ${idx === 0 ? "text-2xl sm:text-3xl" : "text-xl"}`}>
                {project.title}
              </h3>
              <p className={`mt-3 text-muted-foreground leading-relaxed ${idx === 0 ? "line-clamp-4 text-base" : "line-clamp-3 text-sm"}`}>
                {project.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.slice(0, idx === 0 ? 5 : 3).map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5
                               font-mono text-xs text-muted-foreground backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                )}
                {project.appStoreUrl && (
                  <Link
                    href={project.appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`${project.title} App Store`}
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/projects"
            className="flex items-center gap-2 text-sm font-medium text-primary
                       transition-colors"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─── About Teaser (Glassmorphism) ─── */}
      <section className="border-t border-white/10 py-20 relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_auto]">
          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-wider text-primary drop-shadow-sm">
              About
            </p>
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl text-foreground">
              42 — Where I Learned to Learn
            </h2>
            <p className="max-w-prose text-lg text-muted-foreground leading-relaxed">
              At 42, there are no teachers, no classes, no textbooks. You learn by
              building, failing, and iterating — just like real engineering. From
              writing my first lines of C and C++ in the Piscine to building a raycasting
              engine, every project pushed me to think deeper and code better.
            </p>
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 text-sm font-semibold
                         text-primary hover:text-primary/80 transition-colors"
            >
              Read my story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-6 lg:flex-col lg:gap-8 rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-md">
            <div>
              <p className="font-mono text-4xl font-extrabold text-foreground tracking-tighter drop-shadow-md">15+</p>
              <p className="text-sm font-medium text-muted-foreground mt-1">42 Projects</p>
            </div>
            <div>
              <p className="font-mono text-4xl font-extrabold text-foreground tracking-tighter drop-shadow-md">2+</p>
              <p className="text-sm font-medium text-muted-foreground mt-1">Side Projects</p>
            </div>
            <div>
              <p className="font-mono text-4xl font-extrabold text-primary tracking-tighter drop-shadow-md">1</p>
              <p className="text-sm font-medium text-muted-foreground mt-1">Published App</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
