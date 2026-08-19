import { ScanFace, IdCard, Bot, Sparkles } from "lucide-react";
import { aiHighlights, aiSection } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { paletteAt } from "@/lib/palette";

const highlightIcons = [ScanFace, IdCard, Bot, Sparkles];

export default function AIHighlights() {
  return (
    <section id="ai" className="relative overflow-hidden bg-[var(--color-bg)] px-6 py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-[var(--color-accent)]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          eyebrow={aiSection.eyebrow}
          title={aiSection.title}
          description={aiSection.description}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {aiHighlights.map((item, i) => {
            const hue = paletteAt(i);
            const Icon = highlightIcons[i % highlightIcons.length];
            return (
              <Card key={item.company} tone="soft">
                <div className="flex items-center gap-3">
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${hue.bg} ${hue.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon size={20} />
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[var(--color-fg)]">
                      {item.project}
                    </h3>
                    <p className="text-xs text-[var(--color-fg-muted)]">
                      {item.company}
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-sm text-[var(--color-fg-muted)]">
                  {item.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-[var(--color-fg-muted)]"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-[var(--color-bg-muted)] px-2.5 py-1 text-[11px] font-medium text-[var(--color-fg-muted)]"
                    >
                      {tech}
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
