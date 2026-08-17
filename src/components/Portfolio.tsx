import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/content";
import SectionHeading from "./SectionHeading";
import { paletteAt } from "@/lib/palette";

export default function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden bg-[var(--color-bg)] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Portfolio"
          title="Selected projects"
          description="Full-stack platforms and products I've designed, built, and shipped."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const hue = paletteAt(i);
            return (
              <article
                key={project.name}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg-soft)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[var(--color-accent)]/60 hover:shadow-xl"
              >
                {/* Top accent bar — grows in on hover */}
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-[var(--color-accent)] via-fuchsia-500 to-teal-400 transition-transform duration-300 group-hover:scale-x-100" />
                {/* Soft tinted glow revealed on hover */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full ${hue.bg} opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-fg)] transition-colors group-hover:text-[var(--color-accent)]">
                    {project.name}
                  </h3>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Visit ${project.name}`}
                      className="shrink-0 text-[var(--color-fg-muted)] transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--color-accent)]"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>
                <span
                  className={`relative mt-1 inline-block w-fit rounded-full ${hue.bg} ${hue.icon} px-2.5 py-0.5 text-xs font-medium`}
                >
                  {project.role}
                  {project.location && ` · ${project.location}`}
                </span>
                <p className="relative mt-3 text-sm text-[var(--color-fg-muted)]">
                  {project.description}
                </p>

                <ul className="relative mt-4 space-y-1.5">
                  {project.features.slice(0, 3).map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2 text-xs text-[var(--color-fg-muted)]"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="relative mt-auto flex flex-wrap gap-2 pt-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--color-bg-muted)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-fg-muted)] transition-colors group-hover:bg-[var(--color-bg)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
