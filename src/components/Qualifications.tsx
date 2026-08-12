import { GraduationCap, Languages } from "lucide-react";
import { education, languages } from "@/data/content";
import SectionHeading from "./SectionHeading";
import Card from "./Card";
import { paletteAt } from "@/lib/palette";

export default function Qualifications() {
  return (
    <section id="qualification" className="bg-[var(--color-bg)] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Qualification"
          title="Education & Languages"
        />

        <div className="grid gap-6 sm:grid-cols-2">
          {education.map((item, i) => {
            const hue = paletteAt(i);
            return (
              <Card key={item.degree} tone="soft">
                <div className="flex items-start gap-4">
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${hue.bg} ${hue.icon} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-[var(--color-fg)]">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--color-fg-muted)]">
                      {item.school}
                    </p>
                    <p className="mt-1 text-xs font-medium text-[var(--color-accent)]">
                      {item.period}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}

          <Card tone="soft">
            <div className="flex items-start gap-4">
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${paletteAt(1).bg} ${paletteAt(1).icon} transition-transform duration-300 group-hover:scale-110`}
              >
                <Languages size={18} />
              </span>
              <div>
                <h3 className="font-semibold text-[var(--color-fg)]">
                  Languages
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <span
                      key={lang}
                      className="rounded-full bg-[var(--color-bg-muted)] px-3 py-1 text-xs font-medium text-[var(--color-fg-muted)]"
                    >
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
