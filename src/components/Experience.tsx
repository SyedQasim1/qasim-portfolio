import { Briefcase } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Card from "./Card";

export default function Experience() {
  return (
    <section id="experience" className="bg-[var(--color-bg-soft)] px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <ol className="relative space-y-10 border-l border-[var(--color-border)] pl-8">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span className="absolute -left-[2.55rem] flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-accent)] to-teal-400 text-[var(--color-accent-fg)] shadow-md shadow-[var(--color-accent)]/30">
                <Briefcase size={14} />
              </span>

              <Card>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold text-[var(--color-fg)]">
                    {job.role} · {job.company}
                  </h3>
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-semibold text-[var(--color-accent)]">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                  {job.location} · {job.type}
                </p>

                <ul className="mt-4 space-y-2">
                  {job.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2 text-sm text-[var(--color-fg-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
