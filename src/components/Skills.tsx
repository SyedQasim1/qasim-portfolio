import { Sparkles } from "lucide-react";
import { aboutSkillGroups, aiTools } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { paletteAt } from "@/lib/palette";

const skillGroups = [
  ...aboutSkillGroups,
  { title: "AI-Assisted Development", items: aiTools },
];

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden bg-[var(--color-bg)] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-10 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks, and tools I use to design and ship backend systems."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => {
            const hue = paletteAt(i);
            return (
              <Card key={group.title} tone="soft">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${hue.bg} ${hue.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Sparkles size={15} />
                  </span>
                  <h3 className="text-sm font-semibold text-[var(--color-fg)]">
                    {group.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-3 py-1 text-xs font-medium text-[var(--color-fg-muted)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
