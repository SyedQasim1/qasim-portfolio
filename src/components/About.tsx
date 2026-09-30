import { aboutSkillGroups, experience, profile } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import Availability from "./Availability";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[var(--color-bg-soft)] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading eyebrow="About Me" title="Get to know me" />

        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-6">
            <p className="text-[var(--color-fg-muted)] leading-relaxed">
              {profile.summary}
            </p>
            <Card>
              <p className="text-sm font-semibold text-[var(--color-fg)]">
                Currently: {experience[0].role} at {experience[0].company}
              </p>
              <p className="mt-2 text-sm text-[var(--color-fg-muted)]">
                Always interested in interesting full-stack, API, and AI/eKYC
                integration challenges — feel free to reach out below.
              </p>
            </Card>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {aboutSkillGroups.map((group) => (
              <Card key={group.title}>
                <h3 className="text-sm font-semibold text-[var(--color-fg)]">
                  {group.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-medium text-[var(--color-accent)] transition-colors hover:bg-[var(--color-accent)] hover:text-[var(--color-accent-fg)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <Availability />
        </div>
      </div>
    </section>
  );
}
